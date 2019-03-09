'use strict';

var Setting = {
	
	setFrequency: function(frequency) {
        if (!frequency) {
			console.log("No frequency to save!");
			return;
		};
		chrome.storage.sync.set({'frequency': frequency}, function() {
	     	console.log('Settings saved');
		});
	},
	
	getFrequency: function(callback) {
		chrome.storage.sync.get(['frequency'], function(data) {
			if (data['frequency'] != null) {
				console.log('Settings retrieved', data);
				callback(data['frequency']);
			}
		});
		
	}
}