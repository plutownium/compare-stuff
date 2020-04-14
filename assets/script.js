const goBtn = document.getElementById("go_button");
goBtn.addEventListener("click", redirectComparison);

function redirectComparison() {
	const targetUser = document.getElementById("username_field").value;
	document.location.href = `C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html?${targetUser}`;

	// in production...
	// document.location.href = "/comparison"
}
