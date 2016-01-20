/**
 * Created by TomCao on 16/1/19.
 */
"use strict"
for (let codePoint of 'foo') {
    console.log(codePoint);
}

var text = String.fromCodePoint(0x20BB7);
console.log(text);
for (let i of text) {
    console.log(i);
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return this.x + this.y;
    }
}