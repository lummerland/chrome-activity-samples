'use strict';

document.addEventListener('DOMContentLoaded', function() {

	chrome.storage.sync.get(['frequency'], function(data) {
		if (data['frequency'] != null) {
     		console.log('Settings retrieved', data);
     		document.getElementById('frequency').value = data['frequency'];
		}
    });

	var saveAction = document.getElementById('save');
	
	saveAction.onclick = function(element) {
		var frequency = document.getElementById('frequency').value;
		if (!frequency) {
			console.log("No frequency to save!");
			return;
		};
		chrome.storage.sync.set({'frequency': frequency}, function() {
	     	console.log('Settings saved');
		});
	}

});