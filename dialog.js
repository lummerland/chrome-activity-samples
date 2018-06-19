'use strict';

document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded dialog");
	var now = new Date();
	document.getElementById('time').textContent = now.toTimeString();
});