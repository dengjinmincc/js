# JavaScript深度学习
* JavaScript作用域学习笔记
* JavaScript原型学习笔记
* JavaScript闭包学习笔记
* JavaScript构造函数学习笔记
* JavaScript面向对象编程学习笔记
* JavaScript设计模式学习笔记
***
## JavaScript作用域学习笔记
	作用域是JavaScript中最重要的概念之一，要想学好JavaScript就必须掌握作用域这个概念。
	
### 作用域
	1. 什么是作用域
		几乎所有编程语言最基本的能力之一是存储变量的值并可以访问和修改，那么就需要一套设计良好的规则来存储变量并可以方便的找到该变量，这套规则被称为作用域。简单来说，作用域就是变量和函数可访问的范围。
		
	2. 全局作用域(Global Scope)
		在任何地方都能访问到的变量拥有全局作用域。
		
		(1) 定义在最外层函数外面的变量和最外层函数拥有全局作用域。
	 	`
	 		var outer = "hello world"; 
	 		
	 		function foo(){
	 			var inner = "hello js!";
				
				function bar(){
					console.log(inner); 
				}				
	 		}
	 		
	 		console.log(outer); // "hello world"
	 		console.log(inner); //发生错误，无法访问到inner
	 		console.log(foo()); //"hello js!"
	 		console.log(bar()); //发生错误，无法访问到bar()
	 	` 
	 	(2)在非严格模式下未声明直接初始化的变量。
	 		es5中引入了严格模式，即之前许多不确定的行为在严格模式下会抛出错误。例如在严格模式下使用未声明直接初始化的变量会抛出ReferenceError错误。
	 	(3)所有window对象下的属性都拥有全局作用域。
	3. 函数作用域
		函数作用域即变量或函数定义在外层函数中，只能在外层函数中进行访问，在其之外的地方访问会抛出错误。
		`
			function foo(){
				var msg = "hello world"; 
				
				function bar(){
					console.log(msg); 
				}
			}
			
			console.log(msg); //发生错误
			console.log(bar()); //发生错误
		`
	4. 块作用域
		es6中新增了let命令和const命令，用于申明变量，与var用法类似，只不过所声明的变量只在let命令所在的代码块有效，即声明的变量拥有块级作用域。
		`
			{
				let a = 5; 
				var b = 10; 
			}
			
			a //ReferenceError: a is not defined
			b //10		
		`
		这证明由let声明的变量具有块级作用域
		
		虽然在es6之前的版本中不存在块级作用域这个概念，但可以使用匿名函数模拟块级作用域。（匿名函数：没有名字的函数，有时也称为纳姆达函数），其语法形式如下：
		`
			(function(){
			
				//块级作用域
				
			})()
		`
		以上代码的意思是创建并立即调用一个匿名函数，第一个圆括号中是函数表达式，第二个圆括号表示立刻执行。
		
### 作用域链
	1.  