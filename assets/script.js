const goBtn = document.getElementById("go_button");

// handle case: user clicks the go button after typing a username
goBtn.addEventListener("click", redirectComparison);

function redirectComparison() {
	const targetUser = document.getElementById("username_field").value;
	document.location.href = `C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html?${targetUser}`;

	// in production...
	// document.location.href = "/comparison"
}

// handle case: user presses enter on their keyboard after typing a username
goBtn.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		redirectComparison();
	}
});
