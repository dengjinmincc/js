// jQuery.Callbacks(flags): 一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。

function fn1(value) {
    console.log(value);
}

function fn2(value) {
    fn1("fn2 says: " + value);
    return false;
}

var callbacks = $.Callbacks();

callbacks.add(fn1);
