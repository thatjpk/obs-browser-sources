/*
 * code.js
 */

$(document).ready(function () {
    setInterval(update_time, 33);
    return;
});


function update_time() {
    $('#time').html(moment.utc().format('YYYY-MM-DD hh:mm:ss.SSS z'));
    return;
}

