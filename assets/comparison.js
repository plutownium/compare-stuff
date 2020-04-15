// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// elements of the User Section
const usernameTag = document.getElementById("username");
const followerCount = document.getElementById("follower_count");
const tweetsSince = document.getElementById("since_field");

const totalTweets = document.getElementById("total_tweets");
const totalRetweets = document.getElementById("total_retweets");
const totalLikes = document.getElementById("total_likes");

const tweetsPerDay = document.getElementById("tweets_per_day");
const retweetsPerDay = document.getElementById("retweets_per_day");
const likesPerDay = document.getElementById("likes_per_day");

const retweetsPerFollower = document.getElementById("retweets_per_follower");
const likesPerFollower = document.getElementById("likes_per_follower");
const retweetPerTweet = document.getElementById("retweet_per_tweet");
const likePerTweet = document.getElementById("like_per_tweet");

// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// elements of the Comparison Section
const comparisonUsername = document.getElementById("comparison_username");
const comparisonFollowers = document.getElementById(
	"comparison_follower_count"
);
const comparisonTweetsSince = document.getElementById("comparison_since_field");

const totalTweetsComparison = document.getElementById("comp_total_tweets");
const totalRetweetsComparison = document.getElementById("comp_total_retweets");
const totalLikesComparison = document.getElementById("comp_total_likes");

const tweetsPerDayComparison = document.getElementById("comp_tweets_per_day");
const retweetsPerDayComparison = document.getElementById(
	"comp_retweets_per_day"
);
const likesPerDayComparison = document.getElementById("comp_likes_per_day");

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

// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// *#*#*#*#*#*#*#*#*#*#*#*#**#*#
// *#*#*#*#*#*#*#*#*#*#*#*#**#*#

function sevenDaysResults(user) {
	url_seven = `http://127.0.0.1:5000/user/${user}/days=7`;
	spinnerElFromUser = document.getElementById("user_spinner");
	hiddenStatsFromUser = document.getElementById("user_hidden");

	axios.get(url_seven).then((x) => {
		console.log(url_seven);

		usernameTag.innerHTML = x.data.username;
		followerCount.innerHTML = x.data.followers;
		tweetsSince.innerHTML = new Date(x.data.last_tweet_timestamp);

		totalTweets.innerHTML = x.data.total_tweets;
		totalRetweets.innerHTML = x.data.total_retweets;
		totalLikes.innerHTML = x.data.total_likes;

		tweetsPerDay.innerHTML = x.data.tweets_per_day;
		retweetsPerDay.innerHTML = x.data.retweets_per_day;
		likesPerDay.innerHTML = x.data.likes_per_day;

		retweetsPerFollower.innerHTML = x.data.retweet_per_follower;
		likesPerFollower.innerHTML = x.data.like_per_follower;
		retweetPerTweet.innerHTML = x.data.retweet_per_tweet;
		likePerTweet.innerHTML = x.data.like_per_tweet;

		if (spinnerElFromUser) {
			spinnerElFromUser.parentNode.removeChild(spinnerElFromUser);
			hiddenStatsFromUser.classList.remove("hidden-while-loading");
		}
	});
}

function sevenDaysResultsComparison(user) {
	// ### Comparison User Function
	url_seven = `http://127.0.0.1:5000/user/${user}/days=7`;
	spinnerElFromComparison = document.getElementById("comparison_spinner");
	hiddenStatsFromComparison = document.getElementById("comparison_hidden");

	axios.get(url_seven).then((x) => {
		console.log(url_seven);
		console.log(x);
		comparisonUsername.innerHTML = x.data.username;
		comparisonFollowers.innerHTML = x.data.followers;
		comparisonTweetsSince.innerHTML = new Date(x.data.last_tweet_timestamp);

		totalTweetsComparison.innerHTML = x.data.total_tweets;
		totalRetweetsComparison.innerHTML = x.data.total_retweets;
		totalLikesComparison.innerHTML = x.data.total_likes;

		tweetsPerDayComparison.innerHTML = x.data.tweets_per_day;
		retweetsPerDayComparison.innerHTML = x.data.retweets_per_day;
		likesPerDayComparison.innerHTML = x.data.likes_per_day;

		retweetsPerFollowerComparison.innerHTML = x.data.retweet_per_follower;
		likesPerFollowerComparison.innerHTML = x.data.like_per_follower;
		retweetPerTweetComparison.innerHTML = x.data.retweet_per_tweet;
		likePerTweetComparison.innerHTML = x.data.like_per_tweet;

		if (spinnerElFromComparison) {
			spinnerElFromComparison.parentNode.removeChild(
				spinnerElFromComparison
			);
			hiddenStatsFromComparison.classList.remove("hidden-while-loading");
		}

		pageUrl = `C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html?${targetUser}|${x.data.username}`;
		linkPath.innerHTML = pageUrl;
	});
}

function doComparison(comparisonTarget) {
	// note: when doComparison is passed w/o any specified param, an event object takes the place of comparisonTarget.
	// so it's necessary to check if "type of comparisonTarget is string"

	// if there is no value passed in as the comparisonTarget param... and comparisonTarget is type event...
	if (typeof comparisonTarget != "string") {
		const targetUser = document.getElementById("comparison_field").value;
		// console.log("300:", targetUser);
		sevenDaysResultsComparison(targetUser);
	}

	// if there IS a value passed in as the comparisonTarget param... in which case, it's a string...
	if (typeof comparisonTarget === "string") {
		// console.log("400:", comparisonTarget);
		sevenDaysResultsComparison(comparisonTarget);
	}
}

// 1. start with the base case: link path shows "?targetuser"
// 2. on comparison select, link path shows "?targetUser|comparisonTarget"

// code checks on page load: "is there 1 param or 2?" if 2, send request for *both* main user and comparison user

// *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#*

const linkPath = document.getElementById("link-path");
// The next two dozen lines grab params from the URL on page load.
// Step 1: Get the target username(s) from the URL param(s)
const params = location.search.substring(1);

let targetUser;
let comparisonUser;
let paramsArray;

if (params.includes("|")) {
	paramsArray = params.split("|");
	targetUser = paramsArray[0];
	comparisonUser = paramsArray[1];

	let pageUrl = `C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html?${targetUser}|${comparisonUser}`;
	linkPath.innerHTML = pageUrl;
} else {
	targetUser = params;
	let pageUrl = `C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html?${targetUser}`;
	linkPath.innerHTML = pageUrl;
}

// console.log(targetUser);
sevenDaysResults(targetUser);

// console.log(comparisonUser);
if (comparisonUser) {
	doComparison(comparisonUser);
}

// these 2 lines initiate the Comparison User's "Search" function...
const comparisonBtn = document.getElementById("comparison_btn");
comparisonBtn.addEventListener("click", doComparison);

// this code makes the "Click to copy the URL" button do its thing, onclick...
const copyUrlBtn = document.getElementById("copy-link");
copyUrlBtn.addEventListener("click", () => {
	// insert hacky solution from StackOverflow... fml
	const textarea = document.createElement("textarea");
	textarea.id = "temp_element";
	// Optional step to make less noise on the page, if any!
	textarea.style.height = 0;
	// Now append it to your page somewhere, I chose <body>
	document.body.appendChild(textarea);
	// Give our textarea a value of whatever inside the div of id=containerid
	textarea.value = document.getElementById("link-path").innerText;
	// Now copy whatever inside the textarea to clipboard
	const selector = document.querySelector("#temp_element");
	selector.select();
	document.execCommand("copy");
	// Remove the textarea
	document.body.removeChild(textarea);
});

// *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#* *#*#*#*#*#*#*#*
// code storage below...
// code storage below...
// code storage below...

// const sevenDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=7";
// const thirtyDays = "http://127.0.0.1:5000/user/rolypolyistaken/days=30";

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

// const totalTweets30 = document.getElementById("total_tweets_30");
// const totalRetweets30 = document.getElementById("total_retweets_30");
// const totalLikes30 = document.getElementById("total_likes_30");
// const retweetsPerFollower30 = document.getElementById(
// 	"retweets_per_follower_30"
// );
// const likesPerFollower30 = document.getElementById("likes_per_follower_30");
// const retweetPerTweet30 = document.getElementById("retweet_per_tweet_30");
// const likePerTweet30 = document.getElementById("like_per_tweet_30");

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
