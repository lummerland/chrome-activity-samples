'use strict';

var Entries = {

	add: function(text) {
		
		if (!text) {
			console.log("No text to save!");
			return;
			// TODO: just copy last entry
		};
		
		var now = new Date();
		var entry = {
			"date": now.toLocaleDateString(),
			"time": now.getHours() + ":" + now.getMinutes(),
			"text": text
		};
		this.all(function(entries) {
			if(!entries) {
				entries = [];
			}
			entries.push(entry);
			chrome.storage.sync.set({'entries': JSON.stringify(entries)}, function() {
				console.log('Saved: ' + JSON.stringify(entries));
		   });
		})
	},

	all: function(callback) {
		chrome.storage.sync.get(['entries'], function(data) {
			if (data['entries'] != null) {
				console.log('Entries retrieved', data);
				callback(JSON.parse(data['entries']));
			} else {
				console.log('No entries retrieved');
				callback([]);
			}
		});
		
	},

	clear: function() {
		chrome.storage.sync.remove(['entries']);
	}
}