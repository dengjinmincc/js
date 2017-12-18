var callbacks = $.Callbacks();
callbacks.add(test2);

var val;

function test1() {
    // 如果回调列表不含有回调，即默认上一次回调并未完成，忽略用户操作
    if (!callbacks.has(test2)) {
        return;
    }
    val = $("#container select").val();
    console.log('test1');
    callbacks.fire();
}

function test2() {
    callbacks.remove(test2);
    setTimeout(function () {
        console.log(val);
        // 默认此次回调已经完成，用户可进行下一次操作
        callbacks.add(test2);
    }, 5000);
}

$(function () {
    $('#container select').unbind('change').change(test1);
});
