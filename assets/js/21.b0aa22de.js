(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{493:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("源自《css揭秘》\n在CSS中对元素进行水平居中非常的简单：如果是一个行内元素，就对他的父元素应用'text-align:center',如果是一个块级元素，就对他自身使用'margin:auto',然而对一个元素进行垂直居中就不是那么简单了。")]),t._v(" "),s("h3",{attrs:{id:"以下有几种简单的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以下有几种简单的方法"}},[t._v("#")]),t._v(" 以下有几种简单的方法：")]),t._v(" "),s("h4",{attrs:{id:"_1、基于绝对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、基于绝对定位"}},[t._v("#")]),t._v(" 1、基于绝对定位")]),t._v(" "),s("p",[t._v("此处又区分为固定宽度和高度以及不固定宽度和高度的")]),t._v(" "),s("p",[t._v("当宽度与高度固定时")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <style>\n    .center {\n      width: 18em;\n      height: 10em;\n      text-align: center;\n      background-color: orange;\n      color: #fff;\n\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-left: -9rem;\n      margin-top: -5rem;\n    }\n  </style>\n  <body>\n    <div class="center">\n        要求原生有固定的宽高。<br/>\n        position: absolute;<br/>\n        top和left 为 50%;<br/>\n        margin上为高的一半<br/>\n        margin左为宽的一半<br/>\n    </div>\n\n  </body>\n')])])]),s("p",[t._v("也可以借助强大的calc()函数,这样还可以省掉两行声明：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <style>\n    .center {\n      width: 18em;\n      height: 10em;\n      text-align: center;\n      background-color: orange;\n      color: #fff;\n\n      position: absolute;\n      top: calc(50%-5rem);\n      left: calc(50%-9rem);\n    }\n  </style>\n  <body>\n    <div class="center">\n        要求原生有固定的宽高。<br/>\n        position: absolute;<br/>\n        top和left 为 50%;<br/>\n        margin上为高的一半<br/>\n        margin左为宽的一半<br/>\n    </div>\n\n  </body>\n')])])]),s("p",[t._v("通常情况下，对于居中的元素的宽高尺寸都是根据内容来决定的，如果能找到一个属性的百分比值以元素自身的宽高作为解析基础，那么难题就可以解决了，translate()变形函数恰到好处的能做到这一点。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <style>\n    .center {\n      width: 18em;\n      height: 10em;\n      text-align: center;\n      background-color: orange;\n      color: #fff;\n\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  </style>\n  <body>\n    <div class="center">\n        不要求原生有固定的宽高。<br/>\n        position: absolute;<br/>\n        top和left 为 50%;<br/>\n        transform: translate(-50%, -50%);\n    </div>\n\n  </body>\n')])])]),s("h4",{attrs:{id:"_2、基于viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、基于viewport"}},[t._v("#")]),t._v(" 2、基于viewport")]),t._v(" "),s("p",[t._v("假设我们不想使用绝对定位，依然可以使用translate()函数将这个元素以其自身的宽高进行移动，但是确实left和top元素，我们应该怎么做到呢？可以使用margin属性的百分比来实现")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   .center {\n     width: 18em;\n     padding: 1em 1.5em;\n     margin: 50vh auto 0;\n     transform: translateY(-50%);\n  }\n")])])]),s("h4",{attrs:{id:"_3、基于flexbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、基于flexbox"}},[t._v("#")]),t._v(" 3、基于flexbox")]),t._v(" "),s("p",[t._v("毫无疑问这是最佳的解决方法，因为Flexbox是专门针对这类需求所设计的。\n我们只需要写两行声明即可：")]),t._v(" "),s("ul",[s("li",[t._v("先给这个待居中的元素的父元素设置display:flex")]),t._v(" "),s("li",[t._v("再给这个元素自身设置margin:auto,当我们使用flexbox时margin:auto不仅水平方向上将元素居中，垂直方向上也能做到居中。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <style>\n    .wrapper {\n      width: 1000px;\n      height: 600px;\n      background: #999;\n\n      display: flex;\n    }\n    .center {\n      width: 18em;\n      height: 10em;\n      text-align: center;\n      background-color: orange;\n      color: #fff;\n\n      margin: auto;\n    }\n  </style>\n  <body>\n    <div class="wrapper">\n      <div class="center">\n        使用flex居中<br/>\n        父元素 display: flex; <br/>\n        居中块： margin: auto;\n      </div>\n    </div>\n  </body>\n')])])]),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("h4",{attrs:{id:"被居中元素宽高固定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#被居中元素宽高固定"}},[t._v("#")]),t._v(" 被居中元素宽高固定")]),t._v(" "),s("ol",[s("li",[t._v("绝对定位，top和left 为 50%， margin的left和top为自身宽高一半")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -5rem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("绝对定位，top和lefe为父元素一半剪自身一半")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50% - 5em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("50% - 9em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"被居中元素宽高不定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#被居中元素宽高不定"}},[t._v("#")]),t._v(" 被居中元素宽高不定")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("使用CSS3 的 "),s("code",[t._v("transform")]),t._v("将位置在中心点平移自身宽高一半")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("使用flex布局居中")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("flex布局，父元素指定子元素居中。")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"在浏览器窗口中居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器窗口中居中"}},[t._v("#")]),t._v(" 在浏览器窗口中居中")]),t._v(" "),s("p",[t._v("基于视口的垂直居中。不要求原生有固定的宽高，但是这种居中是在整个页面窗口内居中，不是基于父元素")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vh auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);