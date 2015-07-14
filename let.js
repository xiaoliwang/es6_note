/**
 * @author TomCao <jiepengthegreat@126.com>
 * @version 0.0.1
 * @describe introduce let and const
 */
 
//let and const need strict mode
'use strict'
 
var should = require('should');
describe('以下是let说明', function(){
	it('let声明的变量只在它所在的代码块有效', function(){
		{
			let a = 'noneffective';
			var b = 'effective';
			a.should.be.exactly('noneffective').and.be.a.String;
			b.should.be.exactly('effective').and.be.a.String;
		}
		(function(){
			a;
		}).should.throw('a is not defined');
		b.should.be.exactly('effective').and.be.a.String;
	});
	
	it('let不存在变量升量,所以typeof也可能抛出异常', function(){
		(function(){
			typeof a;
			let a = 1;
		}).should.throw('a is not defined');
	});
	
	it('只要块级作用域存在let,变量就绑定这个区域,不受外界影响', function(){
		var a = 1;
		{
			(function(){
				typeof a;
				let a = 1;
			}).should.throw('a is not defined');
		}
	});
	
});

describe('以下是let的应用', function(){
	it('let在for循环中声明,只在循环体中有效', function(){
		for(let i = 0; i < 5; i++){}
		try{
			console.log(i)
		}catch(e){
			e.should.be.a.Error;
		}
	});
	
	describe('使用for循环给申明数组函数',function(){
		it('使用var,则最后第6位输出为10', function(){
			var a = [];
			for (var i = 0; i < 10; i++) {
			  a[i] = function () {
				return i;
			  };
			}
			(10).should.match(a[6]());
		});
		
		it('使用let,则最后第6位输出为6', function(){
			var a = [];
			for (let i = 0; i < 10; i++) {
			  a[i] = function () {
				return i;
			  };
			}
			(6).should.match(a[6]());
		});
	});
});