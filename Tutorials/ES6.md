# React Tutorials

####     目录
<ol>
    <li>深入浅出ES6
        <ul>
            <li>箭头函数</li>
            <li>this</li>
            <li>解构 Destructuring</li>
            <li>Let and Const</li>
            <li>类 Class</li>
            <li>模块 Modules</li>
            <li>CommonJS与ES6</li>
        </ul>
    </li>
</ol>
## 深入浅出ES6  
### 1.  箭头函数
#### 1.1 箭头函数语法
口诀：箭头前面是function名字，箭头后面是内容
```
    // ES5
    var selected = allJobs.filter(function (job) {
      return job.isSelected();
    });
    // ES6
    var selected = allJobs.filter(job => job.isSelected());
```

 如果要写一个接受多重参数（也可能没有参数，或者是不定参数、默认参数、参数解构）的函数，你需要用小括号包裹参数list。 
 
```
    // ES5
    var total = values.reduce(function (a, b) {
      return a + b;
    }, 0);
    // ES6
    var total = values.reduce((a, b) => a + b, 0);
```
#### 1.2 this 
箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。   

#### 1.3 解构赋值 Destructuring

定义：ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。  
- 解构赋值适用于var，let和const命令。   
 
 ```
let [x, , y] = [1, 2, 3];
x // 1
y // 3
 ```
- 如果解构不成功，变量的值就等于undefined。

 ```
var [foo] = [];
var [bar, foo] = [1];
 ```
- 数组成员：使用数组成员对变量赋值时，优先使用解构赋值。

 ```
// bad
const first = arr[0];
const second = arr[1];
// good
const [first, second] = arr;
 ```
- 对象成员：函数的参数如果是对象的成员，优先使用解构赋值。

 ```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}
// best
function getFullName({ firstName, lastName }) {
}
 ```
- 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。 

 ```
// bad
function processInput(input) {
  return [left, right, top, bottom];
}
// good
function processInput(input) {
  return { left, right, top, bottom };
}  
const { left, right } = processInput(input);
 ```
#### 1.4 Let and Const

- Let 就是局部变量，只在块级作用域内有效
- Const 全局常量，相当于java的final

#### 1.5 类 Class
- 类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
 
 ```
    class Point {
  constructor(x,y){
     this.x=x;
     this.y=y;
  }
}
Object.assign(Point.prototype, {
  toString(){
  return '(' + this.x + ', ' + this.y + ')';
  },
  toValue(){}
});
```

#### 1.6 模块 Modules

- 如果想从一个模块中导入多个名称，可以这样写：

 ```
    import {detectCats, Kittydar} from "kittydar.js";
 ```
- 重命名import和export 
 
 ```
    import {flip as flipOmelet} from "eggs.js";
    import {flip as flipHouse} from "real-estate.js";
 ```
  
 ```
   function v1() { ... }
    function v2() { ... }

    export {
      v1 as streamV1,
      v2 as streamV2,
      v2 as streamLatestVersion
    };
 ```
#### 1.7 CommonJS 与 ES6  
##### 1.7.1 CommonJS 介绍
- CommonJS 是 NodeJS/NPM 使用的模块系统，将一个项目分解为小模块。
- CommonJS API 只添加两个新东西：
  - require - 一个用于加载模块的函数
  - module.exports - 模块导出的内容
  
##### 1.7.2 CommonJS 和 ES6 模块的相互操作

- ES6 模块的设计深受 CommonJS 的影响。因为它们非常相似，Babel 允许你交叉使用它们。
 
 ```
   // CommonJS
let foo = require("foo");
// ES6
import foo from "foo";
 ```  
