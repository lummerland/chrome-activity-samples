import { getFrequency, setFrequency } from './frequency';

document.addEventListener('DOMContentLoaded', function () {

	getFrequency(function (frequency) {
		document.getElementById('frequency').value = frequency;
	});

	var saveAction = document.getElementById('save');
	saveAction.onclick = function (element) {
		setFrequency(
			document.getElementById('frequency').value
		);
		close();
	}

});