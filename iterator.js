/**
 * Created by TomCao on 16/1/19.
 */
"use strict"


let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());