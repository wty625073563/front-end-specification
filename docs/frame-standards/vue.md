---
title: VUE
---

# VUE规范

## template规范
同[Html规范](/coding-standards/html.md)

### 除单个赋值外，禁止在template中书写事件（强制）
```html
<!-- very bad -->
<div @click="a=2,foo(3),..."></div>

<!-- normal -->
<div @click="a=2"></div>
```
直接在methods中定义方法。

### 多个判断存在html，推荐使用computed定义一个变量控制
```js
// bad
<div v-if="a && b && c && (d || f) && (a > g)"></div>

// good
<div v-if="controlDiv"></div>

computed: {
  controlDiv() {
    ...
    return a && b && c && (d || f) && (a > g)
  }
}
```

## style规范
推荐使用stylus，scss<br>

规范同[CSS规范](/coding-standards/css.md)


## Js规范

除了需要遵守[Javascript规范](/coding-standards/javascript.md)外

还得注意一下几点


* 没在视图使用的变量，没必要声明在data函数中，减少对变量的监听。 **（强制）** *目前此问题很严重*
* 如非必要，同样减少computed，使用watch代替，原因如上

### 尽量减少不必要的代码
以下只是其一，还有很多种情况。

```js
// bad
this.menulabel = name
if (this.menulabel === 'foo') {
  ...
} else if (this.menulabel === 'bar') {
  ...
} else if (this.menulabel === '123') {
  ...
} else {
  ...
}

// good
this.menulabel = name
if (name === 'foo') {
  ...
} else if (name === 'bar') {
  ...
} else if (name === '123') {
  ...
} else {
  ...
}

```

> 期待补充
