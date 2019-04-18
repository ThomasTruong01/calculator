$(document).ready(function() {
	var display = "";
	var calcA = "";
	var calcB = "";
	var oper1 = "";
	var oper2 = "";
	display = $("span").text();

	$(".numbers").on("click", function() {
		numbersPressed(this);
	});

	$(".operator").on("click", function() {
		operatorPresed(this);
	});

	$("#clear").on("click", function() {
		display = 0;
		$("#display").text(display);
		calcA = "";
	});

	function numbersPressed(btn) {
		var btnPressed = btn.innerHTML;
		if (btnPressed == ".") {
			if (display == 0) {
				display = 0 + btnPressed;
			} else {
				var a = 9;
				a = display.indexOf(".");
				if (a == -1) {
					display += btnPressed;
				} else {
					display = display;
				}
			}
		} else if (display == 0) {
			display = btnPressed;
		} else {
			display += btnPressed;
		}

		$("#display").text(display);
	}
	function test(btn) {
		var testDisplay = "";
		$("#display").text(1234.1);
		testDisplay = $("#display").text();
		console.log(testDisplay);
		testDisplay = testDisplay.toString;
		var test1 = testDisplay.indexOf(".");
		console.log(test1);
	}
	function operatorPresed(btn) {
		if (calcA === "") {
			calcA = $("span").text();
			display = 0;
			oper1 = btn.innerHTML;
		} else {
			oper2 = btn.innerHTML;
			calcB = $("span").text();
			if (oper1 == "X") {
				display = calcA * calcB;
			} else if (oper1 === "/") {
				display = calcA / calcB;
			} else if (oper1 === "-") {
				display = calcA - calcB;
			} else if (oper1 === "+") {
				display = calcA + calcB;
			} else {
				display = display;
			}
			if (oper2 === "=") {
				oper1 = "";
			} else {
				oper1 = oper2;
			}
		}

		$("#display").text(display);
	}
});
