---
title: JavaScript
---

# JavaScript

## 语法
强烈建议使用ES6+语法，推荐大概把[ES6 入门教程](https://es6.ruanyifeng.com/#README)看几遍，对于感兴趣的点，自己先尝试使用且全面了解。不建议看了几眼就用，这样容易出现错误。<br>

* 变量声明，统一使用`let`，`const`。使用方式请看上文 **（强制）**
* 如无特殊情况，强制统一使用箭头函数 **（强制）**
* 缩进：同样是2个空格 **（强制）**
* 统一使用单引号 **（强制）**
* 尽量遵循`单一职责原则`


## 其他

### 对象赋值，使用缩写（强制）
```Javascript
const lukeSkywalker = 'Luke Skywalker';
// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

### 对象键值中仅无效字符时才使用引号（强制）
其他时候完全没必要使用引号。

```Javascript
// bad 
const bad = { 
  'foo'：3,
  'bar'：4,
  'data-blah'：5
}

// good 
const good = { 
  foo：3,
  bar：4,
  'data-blah'：5
}
```

### 对象的赋值与引用，使用点的形式（强制）
对于已知对象key值得赋值和引用，必须使用点的形式。

```Javascript
// very bad
// 两种方式混用
this.bad['foo'] = 1

// bad
this['bad'] = 2

// good
this.bad = 3
this.bad.foo = 3
```

### 访问和使用对象的多个属性时，请使用对象解构（es6）（推荐）
避免使用时声明临时的变量

```Javascript
// bad
function getFullName(user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// good
function getFullName(user) {
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
```

#### 同样的规则，也适用于数组

```Javascript
const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
```


### 不要在不该省的地方省去if/else

```js
// very bad
condition ? this.foo() : ''

// not so good 
condition && this.foo()

// normal
if (condition) this.foo()

```

> 期待补充
