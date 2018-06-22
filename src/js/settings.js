'use strict';

document.addEventListener('DOMContentLoaded', function() {

	Setting.getFrequency( function(frequency) {
		document.getElementById('frequency').value = frequency;
    });

	var saveAction = document.getElementById('save');
	
	saveAction.onclick = function(element) {
		Setting.setFrequency(
			document.getElementById('frequency').value
		);
	}

});