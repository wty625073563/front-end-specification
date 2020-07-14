---
title: HTML
---

# HTML

## 语法
* 缩进使用2个空格 **（强制）**
* 尽量使用语义化标签 **（推荐）**
* 在属性上，使用双引号，不建议用单引号 *（推荐）*
* 属性名全小写，用中横线做分隔符 *（推荐）*


## 其他
### 减少标签
编写HTML时，请尽可能避免使用多余的父元素。
```html
<!-- Not so great -->
<span class="avatar">
  <img src="..." alt="...">
</span>

<!-- Better -->
<img class="avatar" src="..." alt="...">
```

### 实用高于完美
尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；<br>

任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

https://codeguide.co/#html
https://juejin.im/post/599ececb5188252423583c27#heading-23

> 期待补充
