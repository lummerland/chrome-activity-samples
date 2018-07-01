'use strict';

document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded dialog");
	var now = new Date();
	document.getElementById('time').textContent = now.toTimeString();
	setTimeout(window.close, 10000);
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        window.close();
    }
};