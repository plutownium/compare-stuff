const usernameTag = document.getElementById("username");
const followerCount = document.getElementById("follower_count");

const totalTweets = document.getElementById("total_tweets");
const totalRetweets = document.getElementById("total_retweets");
const totalLikes = document.getElementById("total_likes");
const retweetsPerFollower = document.getElementById("retweets_per_follower");
const likesPerFollower = document.getElementById("likes_per_follower");
const retweetPerTweet = document.getElementById("retweet_per_tweet");
const likePerTweet = document.getElementById("like_per_tweet");

const totalTweets30 = document.getElementById("total_tweets_30");
const totalRetweets30 = document.getElementById("total_retweets_30");
const totalLikes30 = document.getElementById("total_likes_30");
const retweetsPerFollower30 = document.getElementById(
	"retweets_per_follower_30"
);
const likesPerFollower30 = document.getElementById("likes_per_follower_30");
const retweetPerTweet30 = document.getElementById("retweet_per_tweet_30");
const likePerTweet30 = document.getElementById("like_per_tweet_30");

function getSevenDaysResults(user) {
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

function getThirtyDaysResults(user) {
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

const sevenDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=7";
const thirtyDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=30";

// console.log(axios.get(sevenDays).then((x) => console.log(x)));
// console.log(axios.get(thirtyDays).then((x) => console.log(x)));

// axios.get(sevenDays).then((x) => {
// 	console.log(x.data.like_per_tweet);
// 	axios.get(thirtyDays).then((x) => console.log(x.data.like_per_tweet));
// });

getSevenDaysResults("rolypolyistaken");
getThirtyDaysResults("rolypolyistaken");
