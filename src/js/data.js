'use strict';

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("clear").onclick = function(element) {
		Entries.clear();
		location.reload();
	};

	Entries.all(function(data) {
		var output = "";
		var count = data.length;

		if (!count || count == 0) {
			output += "<tr>";
			output += "<td class='nodata' colspan='2'>... no data logged ...</td>";
			output += "</tr>";
		} else {
			for (var i = 0; i < count; i++) {
				output += "<tr>";
				output += "<td class='time'>" + data[i].time + "</td>";
				output += "<td>" + data[i].text + "</td>";
				output += "</tr>";
			}
		}

		document.getElementById("body").innerHTML = output;
	});

});