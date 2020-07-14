---
title: Eslint
---

# Eslint

## 规则如下：

* `off` 或 `0` - 关闭规则
* `warn` 或 `1` - 开启规则，使用警告级别的错误：warn
* `error` 或 `2` - 开启规则，使用错误级别的错误：error

```js
let rules = {
  // 强制使用一致的缩进
  'indent': 1,

  // 强制使用骆驼拼写法命名约定
  'camelcase': 1,

  // 避免使用不必要的括号
  'no-extra-parens': 1,

  // 禁用行尾分号
  'no-extra-semi': 2,

  // 禁用行尾空格
  'no-trailing-spaces': 2,

  // 对象中禁止出现重复的key
  'no-dupe-keys': 2,

  // 强制对象赋值引用使用点形式
  'dot-notation': 2
  
  // 禁用魔术数字
  'no-magic-numbers': 2
  
  // 禁止对 String，Number 和 Boolean 使用 new 操作符
  'no-new-wrappers': 2
  
  // 自我赋值
  'no-self-assign': 1
  
  // 数组使用一致的空格
  'array-bracket-spacing': 1
  
  // 强制把变量的使用限制在其定义的作用域范围内
  'block-scoped-var': 2
  
  // 强制使用let或const 不能使用var
  'no-var': 2
  
  // 要求对象字面量简写语法
  'object-shorthand': 1
  
  // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
  'new-cap': [2, {
    newIsCap: true,
    capIsNew: false
  }],

  // 强制一行的最大长度
  'max-len': [1, 200],

  // 强制 function 块最多允许的的语句数量
  'max-statements': [1, 200],

  // 强制回调函数最大嵌套深度 5层
  'max-nested-callbacks': [1, 5],

  // 控制逗号前后的空格
  'comma-spacing': [2, {
    before: false,
    after: true
  }],

  // 要求箭头函数的参数使用圆括号
  'arrow-parens': [
    1,
    'as-needed',
    { 'requireForBlockBody': true },
  ],

  // 禁止使用弱等于
  eqeqeq: 2
}
```

