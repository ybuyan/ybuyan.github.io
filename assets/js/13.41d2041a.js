(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{500:function(t,n,e){"use strict";e.r(n);var o=e(1),l=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("作用：用来声明变量和常量 const声明的变量必须赋值")]),t._v(" "),e("p",[t._v("1、作用域只局限于当前代码块")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("         {\n            var str = '333';\n            console.log(str); //输出333\n\n            let str1 = '444';\n            console.log(str1);//输出444\n        }\n        console.log(str); //输出333\n        console.log(str1);//报错 \n")])])]),e("p",[t._v("2、使用let和const声明的变量作用域不提升")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("         {\n            console.log(str);//undefined\n            console.log(str1);//报错\n            var str = '333';\n            let str1 ='444';\n        } \n")])])]),e("p",[t._v("3、在相同作用域内不能声明相同变量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("        {\n            var str = '33';\n            var str = '44';\n            console.log(str); //44\n\n            let str1 = '33';\n            let str1 = '44';\n            console.log(str1); //报错\n        } \n")])])]),e("p",[t._v("4、for循环体现let父子作用域 比如有五个按钮button，现实现点击每一个打印出对应的索引值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var button = document.querySelectorAll('button');\n        for(var i = 0; i < button.length; i++){\n            button[i].onclick = function(){\n                console.log(i);//都是5\n            }\n        }\n        //解决办法两种其一是闭包，其二是使用let\n        var button = document.querySelectorAll('button');\n        for(var i = 0; i < button.length; i++){\n            (function(i){\n                button[i].onclick = function(){\n                console.log(i);//都是5\n                }\n            })(i);//输出对应索引\n        }\n        let button = document.querySelectorAll('button');\n        for(let i = 0; i < button.length; i++){\n            button[i].onclick = function(){\n                console.log(i);//输出对应索引\n            }\n        }\n")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);