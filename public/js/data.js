document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("clear").onclick = function(element) {
		Entries.clear();
		location.reload();
	};

	Entries.all(function(data) {
		var output = "";
		var count = Object.keys(data).length;
		
		if (!count || count == 0) {
			output += "<tr>";
			output += "<td class='nodata' colspan='2'>... no data logged ...</td>";
			output += "</tr>";
		} else {
			var group = '';
			Object.keys(data).forEach(function(date) {
				output += "<tr>";
				output += "<td class='date' colspan='2'>" + date + "</td>";
				output += "</tr>";	
				for (var i = 0; i < data[date].length; i++) {
					output += "<tr>";
					output += "<td class='time'>" + moment(data[date][i].timestamp).format("LT") + "</td>";
					output += "<td>" + data[date][i].text + "</td>";
					output += "</tr>";
				}
			})			
		}
		document.getElementById("body").innerHTML = output;
	});
});