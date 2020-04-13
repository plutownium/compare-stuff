import tweepy
from flask import Flask, jsonify
import time

from datetime import datetime, timedelta




# ### Authenticate with Twitter using OAuth
auth = tweepy.OAuthHandler(consumer_token, consumer_secret)
auth_url = auth.get_authorization_url()
auth.set_access_token(access_token, access_secret)

api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

# test auth
try:
    api.verify_credentials()
    print("Auth OK!")
except:
    print("error during auth")


# via https://gist.github.com/yanofsky/5436496 :
def get_all_tweets(screen_name):
    # Twitter only allows access to a users most recent 3240 tweets with this method

    # authorize twitter, initialize tweepy

    # ### *** DISABLED *** because it's already done outside of the function ...

    # auth = tweepy.OAuthHandler(consumer_token, consumer_secret)
    # auth.set_access_token(access_token, access_secret)
    # api = tweepy.API(auth)

    # initialize a list to hold all the tweepy Tweets
    alltweets = []

    # make initial request for most recent tweets (200 is the maximum allowed count)
    new_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False)

    # save most recent tweets
    alltweets.extend(new_tweets)

    # save the id of the oldest tweet less one
    oldest = alltweets[-1].id - 1

    # keep grabbing tweets until there are no tweets left to grab
    while len(new_tweets) > 0:
        print("getting tweets before %s" % oldest)

        # all subsequent requests use the max_id param to prevent duplicates
        new_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False, max_id=oldest)

        # save most recent tweets
        alltweets.extend(new_tweets)

        # update the id of the oldest tweet less one
        oldest = alltweets[-1].id - 1

        print("...%s tweets downloaded so far" % (len(alltweets)))

    return alltweets


def get_num_of_tweets(screen_name, num_of_tweets=20):
    """Returns the specified number of tweets. If no number is specified, returns 20."""
    if num_of_tweets < 201:
        return api.user_timeline(screen_name=screen_name, count=num_of_tweets, include_rts=False)
    else:
        tweets_to_return = []
        while len(tweets_to_return) < num_of_tweets:
            if len(tweets_to_return) == 0:
                tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False)
                tweets_to_return.extend(tweets)
            else:
                oldest_tweet = tweets_to_return[-1].id - 1
                new_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False,
                                               max_id=oldest_tweet)
                # If the request for more tweets yielded 0 tweets, we must be at the end & its time to return...
                if new_tweets == 0:
                    return tweets_to_return
                tweets_to_return.extend(new_tweets)

        return tweets_to_return


def last_seven_days(screen_name):
    """Retrieves new tweets until a tweet from more than a week ago is detected in the batch.
    Stops saving when a tweet older than a week ago is detected."""
    bout_a_week_ago = datetime.today() - timedelta(days=7)
    all_tweets = []

    init_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False)
    for t in init_tweets:
        if t.created_at > bout_a_week_ago:
            all_tweets.append(t)
    if len(all_tweets) < 200:
        return all_tweets
    else:
        still_more_to_go = True
        while still_more_to_go:
            count = 0
            oldest = all_tweets[-1].id - 1
            next_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False, max_id=oldest)
            for t in next_tweets:
                if t.created_at > bout_a_week_ago:
                    all_tweets.append(t)
                    count += 1
            if count != 200:
                still_more_to_go = False

    return all_tweets


def last_thirty_days(screen_name):
    """Retrieves new tweets until a tweet from more than a month ago is detected in the batch.
    Stops saving when a tweet older than a month ago is detected."""
    bout_a_month_ago = datetime.today() - timedelta(days=30)
    all_tweets = []

    init_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False)
    for t in init_tweets:
        if t.created_at > bout_a_month_ago:
            all_tweets.append(t)
    if len(all_tweets) < 200:
        return all_tweets
    else:
        still_more_to_go = True
        while still_more_to_go:
            count = 0
            oldest = all_tweets[-1].id - 1
            next_tweets = api.user_timeline(screen_name=screen_name, count=200, include_rts=False, max_id=oldest)
            for t in next_tweets:
                if t.created_at > bout_a_month_ago:
                    all_tweets.append(t)
                    count += 1
            if count != 200:
                still_more_to_go = False

    return all_tweets


def get_avg_engagement(user, content, days):
    total_tweets = len(content)
    content_retweets = 0
    content_likes = 0

    for item in content:
        content_retweets += item.retweet_count
        content_likes += item.favorite_count

    retweet_per_tweet = float(content_retweets / total_tweets)
    like_per_tweet = float(content_likes / total_tweets)

    return {"username": user,
            "days": days,
            "total_tweets": total_tweets,
            "total_retweets": content_retweets,
            "total_likes": content_likes,
            "retweet_per_tweet": retweet_per_tweet,
            "like_per_tweet": like_per_tweet}

# start_time = time.time()
# all_tweets_from_roly = get_all_tweets("rolypolyistaken")
# end_time = time.time()
# total_time = end_time - start_time  # ran it once, value was "11.5" seconds
# print("Time elapsed: %s" % total_time)
# print(len(all_tweets_from_roly))


roly = "rolypolyistaken"
seven_days_prior = datetime.today() - timedelta(days=7)
thirty_days_prior = datetime.today() - timedelta(days=30)

# print(seven_days_prior)
#
# tweets = api.user_timeline(screen_name=roly, count=200, include_rts=False)
# print(tweets[0].created_at)
# print(tweets[0].text)
# print(tweets[0].created_at > seven_days_prior)
# print(tweets[0].created_at < seven_days_prior)

# tweets = get_all_tweets(roly)
total_RTs = 0
total_likes = 0

newer_than_seven_days_counter = 0
newer_than_thirty_days_counter = 0
seven_days_or_less_list = []
thirty_days_or_less_list = []

# for tweet in tweets:
#     # print("New tweet:")
#     # print("Text: %s" % t.text)
#     # print("RTs: %s" % t.retweet_count)
#     # print("Likes: %s" % t.favorite_count)
#     # if tweet.retweet_count > 5:
#     #     print(tweet.text, tweet.retweet_count)
#     # total_RTs = total_RTs + tweet.retweet_count
#     # total_likes = total_likes + tweet.favorite_count
#     if tweet.created_at > thirty_days_prior:
#         print(tweet.created_at)
#         newer_than_thirty_days_counter += 1

print(newer_than_thirty_days_counter)
print("Total RTs: {}\nTotal likes: {}".format(total_RTs, total_likes))

# print(tweets[0].created_at)
# print(type(tweets[0].created_at))  # <class 'datetime.datetime'>
#
# print(tweets[0].created_at < seven_days_prior)

app = Flask(__name__)


@app.route("/user?=<user>/days?=7")
def user_data_seven_days(user):
    tweets_seven = last_seven_days(user)
    data = get_avg_engagement(user, tweets_seven, days=7)

    return jsonify(data)


@app.route("/user?=<user>/days?=30")
def user_data_thirty_days(user):
    tweets_thirty = last_thirty_days(user)
    data = get_avg_engagement(user, tweets_thirty, days=30)

    return jsonify(data)


