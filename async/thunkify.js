/**
 * Created by TomCao on 16/1/18.
 */

/**
 * Module dependencies
 */
var assert = require('assert');

/**
 * Expose thunkify()
 */
module.exports = thunkify;

/**
 * Wrap a regular callback `fn` as a thunk
 *
 * @param {Function} fn
 * @returns {Function}
 * @api public
 */
function thunkify(fn){
    assert('function' == typeof fn, 'function required');
    return function(){
        var args = new Array(arguments.length);
        //binding this of the function
        var ctx = this;

        for (var i =0; i < args.length; ++i) {
            args[i] = arguments[i];
        }

        return function(done){
            var called;
            //execute callback function only once
            args.push(function(){
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
}

