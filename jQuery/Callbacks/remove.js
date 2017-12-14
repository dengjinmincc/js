var callbacks = $.Callbacks();
callbacks.add(test2);

function test1() {
    if (callbacks.disabled()) {
        return;
    }
    console.log('test1');
    callbacks.fire();
}

function test2() {
    callbacks.disable();
    setTimeout(function () {
        console.log('test2');
    }, 5000);
}

$(function () {
    $('#container select').unbind('change').change(test1);
});
