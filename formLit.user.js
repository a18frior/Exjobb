// ==UserScript==
// @name         formLit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      http://code.jquery.com/jquery-3.4.1.min.js
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
		alert(localStorage.getItem("litFormData"));
		getData();

	} else {
		if (isNaN(cnt)) cnt = 0;

		if (cnt == 0) {
			str = "data:text/csv;charset=utf-8";
		} else {
			var start = new Date();
			start = start.setTime(localStorage.getItem('start'));
			var delta = stop - start;
			var str = localStorage.getItem("litFormData");
			str += ', ' + delta;
		}

		localStorage.setItem("litFormData", str);
		cnt++;
		localStorage.setItem("counter", cnt);
		var stop2 = new Date();
		stop2 = stop2.getTime();
		localStorage.setItem("start", stop2);

        var inputComponent = document.querySelector("frida-app").shadowRoot.querySelector("main-column").querySelector('frida-form').querySelector('frida-input').shadowRoot;
		var submit = inputComponent.querySelector('#submitForm');


        // frida-app main-column frida-form frida-input email
        inputComponent.querySelector('#email').value="frida.ortner@hotmail.com";
        inputComponent.querySelector('#email').dispatchEvent(new Event('change', { 'bubbles': true }));
        inputComponent.querySelector('#password').value="hejsan1234";
        inputComponent.querySelector('#password').dispatchEvent(new Event('change', { 'bubbles': true }));
        inputComponent.querySelector('#name').value="frida";
        inputComponent.querySelector('#name').dispatchEvent(new Event('change', { 'bubbles': true }));
        inputComponent.querySelector('#surname').value="ortner";
        inputComponent.querySelector('#surname').dispatchEvent(new Event('change', { 'bubbles': true }));
        inputComponent.querySelector('#age').value="2000-06-20";
        inputComponent.querySelector('#age').dispatchEvent(new Event('change', { 'bubbles': true }));
		submit.click();
		location.reload();

	}
}

function getData() {
	var str = localStorage.getItem("litFormData");
	var anchor = document.createElement("a");
	anchor.setAttribute("href", encodeURI(str));
	anchor.setAttribute("download", "formLit_csv");
	anchor.innerHTML = "Click Here to download";
	document.body.appendChild(anchor);
	anchor.click();
}