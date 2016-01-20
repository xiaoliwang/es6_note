/**
 * Created by TomCao on 16/1/19.
 */
"use strict"
var redis = require('redis');
var thunkify = require('./thunkify.js');
var co = require('./co.js');
var client = redis.createClient(6379, '192.168.3.10');

var gen = function* (){
    console.log('world');
    client.get = thunkify(client.get);
    var f1 = yield client.get("test");
    console.log(f1, 2);
    console.log('hello');
}

function run(fn){
    var gen = fn();
    function next(err, data){
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}

console.log(typeof gen);

co(gen).then(function(){
    console.log('函数执行完成');
});

