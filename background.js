chrome.runtime.onInstalled.addListener(function() {
	
	chrome.alarms.create('alarm', {periodInMinutes: 1});
	
	chrome.alarms.onAlarm.addListener(askForActivity);
    
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
    
});