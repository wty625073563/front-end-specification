---
title: CSS
---

# CSS

## 语法
* 缩进使用2个空格 **（强制）**
* 为了清晰起见，在声明块的 `{` 前留一个空格 **（强制）**
* 需要用到引号的地方，使用双引号 *（推荐）* 

## 命名
* 命名全为小写，包括类名，id等 **（强制）**
* 遵循[BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)命名规范。 **（强制）**
* css函数命名不强制，但建议统一。


## 其他
### 属性选择器需使用双引号
```css
/* not so good */
.selector[type=text] { ... }

/* better */
.selector[type="text"] { ... }
```


### 不要在属性值或颜色参数前加零开头（建议）
```css
body {
  /* not so good */
  padding: 0.5px;
  background-color: rgba(0, 0, 0, 0.5);

  /* better */
  padding: .5px;
  background-color: rgba(0, 0, 0, .5);
}
```


### 避免零个值，比如指定单位(强制)
```css
.class {
  /* not so good */
  margin: 0px;

  /* better */
  margin: 0;
}
```


### 不能在全局样式中使用!important(强制)
除非该值需要全局影响且只能通过important才有效果。

### 慎用，少用!important（推荐）

### 减少不必要的嵌套（推荐）
```css
/* not so good */
div > ul > li { ... }

/* good */
ul > li { ... }
```


### 色值如没有涉及透明度，少用rgb，尽量使用十六进制（推荐）
1. rgb是一个函数，需要运算
2. 太长了。
```css
p {
  /* bad */
  color: rgb(255, 255, 255);

  /* not so good */
  color: #FFF;
  color: #FFFFFF;

  /* good */
  color: #fff;
}
```


### 尽量减少代码的重复，抽离公共的类（推荐）
减少重复且不必要的代码
```css
/* bad */
div::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 100px;
}

div::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 100px;
}


/* good */
div::before,
div::after {
  content: "";
  position: absolute;
  top: 10px;
  padding: 100px;
}

div::before {
  left: 10px;
}

div::after {
  right: 10px;
}

```

### z-index使用（强制）
对于随手写出`z-index: 9999`的情况，请先看看这篇[文章](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

**正确使用z-index**

### 熟悉了解`块格式化上下文`以及其使用场景（建议）

参见[块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)


> 期待补充
