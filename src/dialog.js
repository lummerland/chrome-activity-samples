import { Entries } from './entries';
var timeout;

document.addEventListener('DOMContentLoaded', function () {
    console.log("loaded dialog");

    document.getElementById('entry').focus();

    // auto close on no action
    timeout = setTimeout(saveAndClose, 10000);
});

document.onkeydown = function (evt) {
    // do not auto close on key action
    clearTimeout(timeout);

    evt = evt || window.event;
    if (evt.keyCode == 27 || evt.keyCode == 13) {
        saveAndClose();
    }
};

function saveAndClose() {
    Entries.add(
        document.getElementById('entry').value
    );
    setTimeout(window.close, 200); // TODO: switch to messaging
};