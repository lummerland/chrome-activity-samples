chrome.runtime.onInstalled.addListener(changePeriod);
chrome.storage.onChanged.addListener(changePeriod);

chrome.alarms.onAlarm.addListener((alarm) => {
	console.log("got alarm: " + alarm.name);
	askForActivity();
});

function simpleAlarm() {
	console.log("created alarm doodelidoo");
	chrome.alarms.create('doodelidoo', { delayInMinutes: 1, periodInMinutes: 1 });
}

function changePeriod() {
	chrome.storage.sync.get(['frequency'], function (data) {
		if (data['frequency'] != null) {
			var period = parseInt(data['frequency']);
			chrome.alarms.create('alarm', { periodInMinutes: period });
			chrome.alarms.create('log', { periodInMinutes: period });
			console.log("ask every " + period + " minutes");
		} else {
			chrome.alarms.create('alarm', { periodInMinutes: 1 });
			chrome.alarms.create('log', { periodInMinutes: 1 });
			console.log("ask every 1 minute");
		}
	});
}

function askForActivity() {
	chrome.alarms.get('alarm', function (alarm) {
		console.log("got alarm, now do something");
		if (alarm) {

			var w = 300;
			var h = 100;
			var left = (screen.width) - (w + 40);
			var top = 20;

			chrome.tabs.create({
				url: chrome.extension.getURL('/view/dialog.html'),
				active: false
			}, function (tab) {
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
				chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {

				});
			});
		}
	});
}