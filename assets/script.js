const goBtn = document.getElementById("go_button");
goBtn.addEventListener("click", redirectComparison);

function redirectComparison() {
	document.location.href =
		"C:\\Users\\Roland\\2020-Coding-Projects\\TwitterComparisonPage\\comparison.html";

	// in production...
	// document.location.href = "/comparison"
}
