window.addEventListener("load", function() {
	//Declare all variables
	var dropdown_icon = document.getElementById("dropdown_icon");
	var dropdown_menu = document.getElementById("dropdown_menu");
	dropdown_menu.style.top = "-300px"

	//Display or hide the dropdown list on click
	dropdown_icon.addEventListener("click", function() {
		if (dropdown_menu.style.top == "-300px") {
			dropdown_menu.style.top = "58px";
		}
		else {
			dropdown_menu.style.top = "-300px";
		}
	});
});