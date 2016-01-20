/**
 * Created by TomCao on 16/1/19.
 */
"use strict"
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* foo(){
    yield 'a';
    yield 'b';
}

function* bar(){
    yield 'x';
    yield* foo();
    yield 'y';
}

for(let v of bar()){
    console.log(v);
}