'use strict';

var Entries = {

	add: function(text) {
		
		if (!text) {
			console.log("No text to save!");
			return;
			// TODO: just copy last entry
		};
		
		var now = new Date();
		var groupkey = now.toLocaleDateString();
		var entry = {
			"date": groupkey,
			"time": (now.getHours() < 10 ? '0' : '') + now.getHours() + 
					":" + 
					(now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
			"text": text
		};
		console.log("created entry " + JSON.stringify(entry));
		
		this.all(function(entries) {
			if(!entries) {
				entries = {};
			}
			if(!entries.hasOwnProperty(groupkey)) {
				entries[groupkey] = [entry];
			} else {
				entries[groupkey].push(entry);
			}
			chrome.storage.sync.set({'entries': JSON.stringify(entries)}, function() {
				console.log('Saved: ' + entries);
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
				callback({});
			}
		});
		
	},

	clear: function() {
		chrome.storage.sync.remove(['entries']);
	}
}