chrome.runtime.onInstalled.addListener(function() {
	changePeriod();
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
	changePeriod();
});

chrome.alarms.onAlarm.addListener(askForActivity);

function changePeriod() {
	chrome.storage.sync.get(['frequency'], function(data) {
		if (data['frequency'] != null) {
			var period = parseInt(data['frequency']);
     		chrome.alarms.create('alarm', {periodInMinutes: period});
     		console.log("ask every " + period + " minutes");
		} else {
			chrome.alarms.create('alarm', {periodInMinutes: 1});
			console.log("ask every 1 minute");
		}
    });
}

function askForActivity() {
	chrome.alarms.get('alarm', function (alarm) {
		if (alarm) {
			
			var w = 500;
			var h = 300;
			var left = (screen.width)-(w + 50);
			var top = 20; 
	    	
	    	chrome.tabs.create({
	            url: chrome.extension.getURL('dialog.html'),
	            active: false
	        }, function(tab) {
	            // After the tab has been created, open a window to inject the tab
	            chrome.windows.create({
	                tabId: tab.id,
	                type: 'popup',
	                focused: true,
	                left: left,
	                top: top,
	                width: w,
	                height: h
	            });
	        });
	    }
	});
}