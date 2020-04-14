// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// elements of the User Section
const usernameTag = document.getElementById("username");
const followerCount = document.getElementById("follower_count");

const totalTweets = document.getElementById("total_tweets");
const totalRetweets = document.getElementById("total_retweets");
const totalLikes = document.getElementById("total_likes");
const retweetsPerFollower = document.getElementById("retweets_per_follower");
const likesPerFollower = document.getElementById("likes_per_follower");
const retweetPerTweet = document.getElementById("retweet_per_tweet");
const likePerTweet = document.getElementById("like_per_tweet");

// const totalTweets30 = document.getElementById("total_tweets_30");
// const totalRetweets30 = document.getElementById("total_retweets_30");
// const totalLikes30 = document.getElementById("total_likes_30");
// const retweetsPerFollower30 = document.getElementById(
// 	"retweets_per_follower_30"
// );
// const likesPerFollower30 = document.getElementById("likes_per_follower_30");
// const retweetPerTweet30 = document.getElementById("retweet_per_tweet_30");
// const likePerTweet30 = document.getElementById("like_per_tweet_30");

// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// elements of the Comparison Section
const comparisonUsername = document.getElementById("comparison_username");
const comparisonFollowers = document.getElementById(
	"comparison_follower_count"
);

const totalTweetsComparison = document.getElementById("comp_total_tweets");
const totalRetweetsComparison = document.getElementById("comp_total_retweets");
const totalLikesComparison = document.getElementById("comp_total_likes");
const retweetsPerFollowerComparison = document.getElementById(
	"comp_retweets_per_follower"
);
const likesPerFollowerComparison = document.getElementById(
	"comp_likes_per_follower"
);
const retweetPerTweetComparison = document.getElementById(
	"comp_retweet_per_tweet"
);
const likePerTweetComparison = document.getElementById("comp_like_per_tweet");

// const totalTweets30Comparison = document.getElementById("comp_total_tweets_30");
// const totalRetweets30Comparison = document.getElementById(
// 	"comp_total_retweets_30"
// );
// const totalLikes30Comparison = document.getElementById("comp_total_likes_30");
// const retweetsPerFollower30Comparison = document.getElementById(
// 	"comp_retweets_per_follower_30"
// );
// const likesPerFollower30Comparison = document.getElementById(
// 	"comp_likes_per_follower_30"
// );
// const retweetPerTweet30Comparison = document.getElementById(
// 	"comp_retweet_per_tweet_30"
// );
// const likePerTweet30Comparison = document.getElementById(
// 	"comp_like_per_tweet_30"
// );
// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// *#*#*#*#*#*#*#*#*#*#*#*#**#*#

function sevenDaysResults(user) {
	url_seven = `http://127.0.0.1:5000/user/${user}/days=7`;

	axios.get(url_seven).then((x) => {
		console.log(url_seven);
		usernameTag.innerHTML = x.data.username;
		followerCount.innerHTML = x.data.followers;

		totalTweets.innerHTML = x.data.total_tweets;
		totalRetweets.innerHTML = x.data.total_retweets;
		totalLikes.innerHTML = x.data.total_likes;
		retweetsPerFollower.innerHTML = x.data.retweet_per_follower;
		likesPerFollower.innerHTML = x.data.like_per_follower;
		retweetPerTweet.innerHTML = x.data.retweet_per_tweet;
		likePerTweet.innerHTML = x.data.like_per_tweet;
	});
}

function thirtyDaysResults(user) {
	url_thirty = `http://127.0.0.1:5000/user/${user}/days=30`;

	axios.get(url_thirty).then((x) => {
		console.log(url_thirty);
		usernameTag.innerHTML = x.data.username;
		followerCount.innerHTML = x.data.followers;

		totalTweets30.innerHTML = x.data.total_tweets;
		totalRetweets30.innerHTML = x.data.total_retweets;
		totalLikes30.innerHTML = x.data.total_likes;
		retweetsPerFollower30.innerHTML = x.data.retweet_per_follower;
		likesPerFollower30.innerHTML = x.data.like_per_follower;
		retweetPerTweet30.innerHTML = x.data.retweet_per_tweet;
		likePerTweet30.innerHTML = x.data.like_per_tweet;
	});
}

function sevenDaysResultsComparison(user) {
	// ### Comparison User Function
	url_seven = `http://127.0.0.1:5000/user/${user}/days=7`;

	axios.get(url_seven).then((x) => {
		console.log(url_seven);
		comparisonUsername.innerHTML = x.data.username;
		comparisonFollowers.innerHTML = x.data.followers;

		totalTweetsComparison.innerHTML = x.data.total_tweets;
		totalRetweetsComparison.innerHTML = x.data.total_retweets;
		totalLikesComparison.innerHTML = x.data.total_likes;
		retweetsPerFollowerComparison.innerHTML = x.data.retweet_per_follower;
		likesPerFollowerComparison.innerHTML = x.data.like_per_follower;
		retweetPerTweetComparison.innerHTML = x.data.retweet_per_tweet;
		likePerTweetComparison.innerHTML = x.data.like_per_tweet;
	});
}

function thirtyDaysResultsComparison(user) {
	// ### Comparison User Function
	url_thirty = `http://127.0.0.1:5000/user/${user}/days=30`;

	axios.get(url_thirty).then((x) => {
		console.log(url_thirty);
		comparisonUsername.innerHTML = x.data.username;
		comparisonFollowers.innerHTML = x.data.followers;

		totalTweets30Comparison.innerHTML = x.data.total_tweets;
		totalRetweets30Comparison.innerHTML = x.data.total_retweets;
		totalLikes30Comparison.innerHTML = x.data.total_likes;
		retweetsPerFollower30Comparison.innerHTML = x.data.retweet_per_follower;
		likesPerFollower30Comparison.innerHTML = x.data.like_per_follower;
		retweetPerTweet30Comparison.innerHTML = x.data.retweet_per_tweet;
		likePerTweet30Comparison.innerHTML = x.data.like_per_tweet;
	});
}

function doComparison() {
	// 1. get the target comparison user, feed target into REST API for 7 and 30 days
	// 3. populate the username & follower count display w/ data from the REST API
	// 4. populate the statistics fields with data from the REST API
	const comparisonInput = document.getElementById("comparison_field");
	const targetUser = comparisonInput.value;

	sevenDaysResultsComparison(targetUser);
	// thirtyDaysResultsComparison(targetUser);
}

const sevenDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=7";
const thirtyDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=30";

// get the target username from the URL param
const targetUser = location.search.substring(1);

sevenDaysResults(targetUser);
// thirtyDaysResults("rolypolyistaken");

const comparisonBtn = document.getElementById("comparison_btn");

comparisonBtn.addEventListener("click", doComparison);
