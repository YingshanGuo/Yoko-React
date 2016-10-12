# React Tutorials

####     目录
<ol>
    <li>React
    <ul>
        <li>安装配置React</li>
        <li>数据传输
            <ul>
                <li>页面之间传参</li>
                <li>JSON</li>
                <li>模块之间传递多个对象</li>
            </ul>
        </li>
    </ul>
    </li>
</ol>
## React  
### 1.  安装配置React
#### 1.1 初始化项目

##### 1.1.1 创建一个空文件夹，然后初始化 package.json ,填写一些基本信息。
```
$ npm init
```
```
name: (reactApp) react-test
version: (1.0.0) 
description: react-text
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/tianqixin/www/reactApp/package.json:
{
  "name": "runoob-react-test",
  "version": "1.0.0",
  "description": "菜鸟教程 react 测试",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"}
  
  Is this ok? (yes)
```
本地应用包创建完成  
 
##### 1.1.2 安装依赖项
- 运行命令: npm install  安装所需插件
 安装react插件，如下显示：
``` 
$ npm install react -save
$ npm install react-dom -save
```

   --save命令用于将包添加至package.json文件
  - 然后安装一下babel插件，这些插件的目的是为了解析jsx
```
$ npm install babel-core -save
$ npm install babel-loader -save
$ npm install babel-preset-react -save
```
package.json 的依赖项将会显示你刚安装的文件，以下是我的依赖库：
```
"dependencies": {
    "axios": "^0.13.1",
    "babel-core": "^6.13.2",
    "babel-loader": "^6.2.5",
    "babel-preset-react": "^6.11.1",
    "html-webpack-plugin": "^2.22.0",
    "react": "^15.3.1",
    "react-addons-css-transition-group": "^15.3.1",
    "react-dom": "^15.3.1",
    "react-router": "^2.7.0",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.15.0"
    "css-loader": "^0.23.1",
    "style-loader": "^0.13.1"
  }
```
- 打开package.json文件，修改其中scripts的内容，修改内容如下：
意思为在命令行中输入的快捷键

```
  "scripts": {
    "production": "webpack -p",
    "start": "webpack-dev-server"
  }
```
修改完成之后，我们就可以使用npm run start来启动服务了。


<未完待续。。。。>
#####  1.3 模块之间传递多个对象
- 将products中的price和cartItems中的quantity传值到 ```<CartItem /> ```中
- products和cartItems

 ```
    let products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man",
    },
};
 ```
 ```
let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },
};
 ```
- Object.keys把对象转换成数组，使用map方法将值传入 ```<CartItem /> ```，key 属性给每一个子元素一个独一无二的辨识属性。这能让 React 知道我们只是改变了子元素的顺序而不是在更新它们。 因此需要加入key，例如 ```key={cart} ```

 ```
const Cart = React.createClass({
    render() {
        let cartName = Object.keys(cartItems).map(cart => {
            return (
                <CartItem key={cart} cartItem={cartItems[cart]} proPrice={products[cart]}/>
            )
        })
        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {cartName}
                </div>
            </div>
        )
    }
});
 ```
#### 2.数据传输
##### 1.页面之间传参
- 初始化一个变量
```
getInitialState: function () {
        console.log('getInitialState')
        return {
            cityname: ''
        }
    },
``` 

``` 
 handleSubmitCity: function () {
        this.context.router.push({
            pathname: '/forcastDetail',   //跳转页面
            query: {                     //传入的参数
                cityname: this.state.cityname
            }
        })
    },
```       
##### 2.JSON

```
<pre>{JSON.stringify(props.cityInfo, null, 2) }</pre> 
```


## HTML
### 1.  textarea
#### 1.1 textarea的光标前有空格的解决方法
如果``` </textarea>``` 不顶格写 页面的输入框前就会有空格 如:
```
1     <textarea rows="5" name="memberList" cols="30">
2     </textarea>
```
正确写法是
```
<textarea rows="5" name="memberList" cols="30"></textarea>
```
