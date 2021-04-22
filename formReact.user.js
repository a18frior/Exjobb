// ==UserScript==
// @name         formReact
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://raw.githubusercontent.com/HGustavs/ContextFreeLib/master/js/contextfreegrammar.js
// @match        http://localhost:8080/*
// @grant        none
// ==/UserScript==

let iterations = 500;

savetime();


function savetime() {

	var stop = new Date();
	stop = stop.getTime();


	var cnt = parseInt(localStorage.getItem("counter"));

	if (cnt == iterations) {
		alert("Finished!" + cnt);
		alert(localStorage.getItem("reactFormData"));
		getData();

	} else {
		if (isNaN(cnt)) cnt = 0;

		if (cnt == 0) {
			str = "data:text/csv;charset=utf-8";
		} else {
			var start = new Date();
			start = start.setTime(localStorage.getItem('start'));
			var delta = stop - start;
			var str = localStorage.getItem("reactFormData");
			str += ', ' + delta;
		}




		function dispatchEvents(name, value) {
			let input = document.getElementById(name);
			let lastValue = input.value;
			input.value = value;
			let event = new Event('change', {
				bubbles: true
			});
			event.simulated = true;
			let tracker = input._valueTracker;
			if (tracker) {
				tracker.setValue(lastValue);
			}
			input.dispatchEvent(event);
		}






		var submit = document.getElementById('submitForm');
		localStorage.setItem("reactFormData", str);
		cnt++;
		localStorage.setItem("counter", cnt);
		var stop2 = new Date();
		stop2 = stop2.getTime();
		localStorage.setItem("start", stop2);

		dispatchEvents('password', "hejsan1234");
		dispatchEvents('name', "Frida");
		dispatchEvents('surname', "Ortner");

		dispatchEvents('age', "2000-06-20");
		dispatchEvents('email', "frida.ortner@hotmail.com");

		submit.click();
		location.reload();

	}
}

function getData() {
	var str = localStorage.getItem("reactFormData");
	var anchor = document.createElement("a");
	anchor.setAttribute("href", encodeURI(str));
	anchor.setAttribute("download", "formReact_csv");
	anchor.innerHTML = "Click Here to download";
	document.body.appendChild(anchor);
	anchor.click();
}