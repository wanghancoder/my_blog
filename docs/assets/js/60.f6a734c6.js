(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{475:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("最近在公司做项目重构，于是去学习了一些关于代码重构的知识。")]),s._v(" "),t("h2",{attrs:{id:"_1-什么是重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是重构"}},[s._v("#")]),s._v(" 1.什么是重构")]),s._v(" "),t("p",[s._v("软件设计大师Martin Fowler是这样定义重构的：“重构是一种对软件内部结构的改善，目的是在不改变软件的可见行为的情况下，使其更易理解，修改成本更低”。")]),s._v(" "),t("p",[s._v("需要注意的是，"),t("strong",[s._v("重构不是代码优化，重构注重的是提高代码的可理解性与可扩展性，对性能的影响可好可坏")]),s._v("。而性能优化则让程序运行的更快，当然，最终的代码可能更难理解和维护。")]),s._v(" "),t("h2",{attrs:{id:"_2-为什么要重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要重构"}},[s._v("#")]),s._v(" 2.为什么要重构")]),s._v(" "),t("h3",{attrs:{id:"_2-1-改善程序的内部设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-改善程序的内部设计"}},[s._v("#")]),s._v(" 2.1. 改善程序的内部设计")]),s._v(" "),t("p",[s._v("如果没有重构，在软件不停的版本迭代中，代码的设计只会越来越腐败，导致软件开发寸步难行。")]),s._v(" "),t("ul",[t("li",[s._v("人们只为了短期目的而修改代码时，往往没有完全理解整体的架构设计（在大项目中常有这种情况，比如在不同的地方，使用完全相同的语句做着同样的事情），代码就会失去自己的结构，代码结构的流失具有累积效应，越难看出代码所代表的设计意图，就越难保护其设计。")]),s._v(" "),t("li",[s._v("我们几乎不可能预先做出完美的设计，以面对后续未知的功能开发，只有在实践中才能找到真理。")])]),s._v(" "),t("p",[s._v("所以想要体面又快速的开发功能，重构必不可少。")]),s._v(" "),t("h3",{attrs:{id:"_2-2-使得代码更容易理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使得代码更容易理解"}},[s._v("#")]),s._v(" 2.2. 使得代码更容易理解")]),s._v(" "),t("p",[s._v("在开发中，我们需要先理解代码在做什么，才能着手修改，很多时候自己写的代码都会忘记其实现，更不论别人的代码。可能在这段代码中有一段糟糕的条件判断逻辑，又或者其变量命名实在糟糕又确实注释，需要花上好一段时间才能明白其真正用意。")]),s._v(" "),t("p",[t("strong",[s._v("合理的重构能让代码“自解释”")]),s._v("，以方便理解，无论对于协同开发，还是维护先前自己实现的功能，对代码的开发有着立竿见影的效果。")]),s._v(" "),t("h3",{attrs:{id:"_2-3-提高开发的速度-方便定位错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-提高开发的速度-方便定位错误"}},[s._v("#")]),s._v(" 2.3. 提高开发的速度 && 方便定位错误")]),s._v(" "),t("p",[s._v("提高开发的速度可能有点“反直觉”，因为重构在很多时候看来是额外的工作量，并没有新的功能和特性产出，但是减少代码的书写量（复用模块），方便定位错误（代码结构优良），这些能让我们在开发的时候节省大量的时间，在后续的开发中“轻装上阵”。")]),s._v(" "),t("h3",{attrs:{id:"_3-重构的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重构的原则"}},[s._v("#")]),s._v(" 3. 重构的原则")]),s._v(" "),t("h3",{attrs:{id:"_3-1-保持当下的编程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-保持当下的编程状态"}},[s._v("#")]),s._v(" 3.1. 保持当下的编程状态")]),s._v(" "),t("p",[s._v("Kent Beck 提出了“两顶帽子”的比喻，在开发软件时，把自己的时间分配给两种截然不同的行为：添加新功能和重构，添加新功能的时候，不应该修改既有的代码，只管添加新功能，并让程序正确运行；在重构时就不能添加新功能，只管调整代码结构，只有在绝对必要时才能修改相关代码。")]),s._v(" "),t("p",[s._v("在开发过程中，我们可能经常变换“帽子”，在新增功能的时候会意识到，如果把程序结构改一下，功能的添加会容易很多，或者实现会更加优雅，于是一会换一顶“帽子”，一边重构，一边新增新功能。这很容易让自己产生混乱，对自己的代码难以理解。")]),s._v(" "),t("p",[s._v("任何时候我们都要清楚自己戴的是哪一顶“帽子”，并专注自己的编程状态，这让我们的目标清晰且过程可控，能对自己编码的进度有掌握。")]),s._v(" "),t("h3",{attrs:{id:"_3-2-可控制的重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-可控制的重构"}},[s._v("#")]),s._v(" 3.2. 可控制的重构")]),s._v(" "),t("p",[s._v("重构的过程并非一蹴而就，如果因为重构影响了自己对时间的掌控，对函数功能的掌控，那么你就应该及时停下，思考你的行为是否值得。我们必须保证程序的可用性与时间的可控性，并且要保证我们的步伐要小，确保每一步都有 git 管理和代码测试，否则你会陷入程序不可用的中间态，更可怕的是你忘记了之前代码的样子！")]),s._v(" "),t("h2",{attrs:{id:"_4-识别代码的臭味道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-识别代码的臭味道"}},[s._v("#")]),s._v(" 4. 识别代码的臭味道")]),s._v(" "),t("h3",{attrs:{id:"_4-1-神秘命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-神秘命名"}},[s._v("#")]),s._v(" 4.1. 神秘命名")]),s._v(" "),t("p",[s._v("命名是编程中最难的几件事之一。")]),s._v(" "),t("ul",[t("li",[s._v("需要在简洁性和命名长度中平衡。")]),s._v(" "),t("li",[s._v("需要统一变量命名的风格，特别是一个整个团队！因为变量命名往往不在代码风格检测之内！")]),s._v(" "),t("li",[s._v("需要变量的名字既能做到彼此关联，又对其信息的识别互不干扰，想象一下，在一个代码片段中在存在着 cgi 和 cgiList 等变量，你可以直接从中读出之间的关联，若是cgi 和 list 呢，它们之间的联系就丢失了，又或者同时出现了 people 和 human 两个变量，这是不是让你产生了疑惑？")])]),s._v(" "),t("p",[s._v("变量命名并没有确切细致的教程，也很难强制统一，一般符合以下三点即可。")]),s._v(" "),t("ul",[t("li",[s._v("有意义的")]),s._v(" "),t("li",[s._v("相关联的")]),s._v(" "),t("li",[s._v("不复用的")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-重复代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-重复代码"}},[s._v("#")]),s._v(" 4.2. 重复代码")]),s._v(" "),t("p",[s._v("将重复逻辑其抽离成一个公共函数，并以其功能作为命名。")]),s._v(" "),t("h3",{attrs:{id:"_4-3-过长函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-过长函数"}},[s._v("#")]),s._v(" 4.3. 过长函数")]),s._v(" "),t("p",[s._v("函数越长，就越难以理解，与之带来的还有高耦合性，不利于拆解重组。")]),s._v(" "),t("p",[s._v("目前普遍认为代码的行数不要超出一个屏幕的范围，因为这样会造成上下滚动，会增大出错的概率。")]),s._v(" "),t("h3",{attrs:{id:"_4-4-数据泥团-过长参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-数据泥团-过长参数"}},[s._v("#")]),s._v(" 4.4. 数据泥团 && 过长参数")]),s._v(" "),t("p",[s._v("数据泥团（魔法数字），顾名思义就是一帮数据无规则的结合在一起，这让人对其难以把控。")]),s._v(" "),t("p",[s._v("如果说有多个参数互相搭配，又或者说某些数据总是成群结队出现，那我们就该把这团泥塑造成一个具体的形象，将其封装成一个数据对象。比如用class进行封装。")]),s._v(" "),t("h3",{attrs:{id:"_4-5-全局数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-全局数据"}},[s._v("#")]),s._v(" 4.5. 全局数据")]),s._v(" "),t("p",[s._v("很多时候我们都不可避免地使用全局数据，哪怕只有一个变量，全局数据对我们的管理提出了更高的要求。因为哪怕一个小小的更改，都可能引起很多地方出现问题，更可怕的是在无意间触发了这种更改。")]),s._v(" "),t("p",[s._v("全局数据也阻碍了程序的可预测性，由于每个函数都能访问这些变量，因此越来越难弄清那个函数实际读写这些变量，要理解一个程序的工作方式，几乎必须考虑修改全局状态的每个函数，使得调试变得困难。")]),s._v(" "),t("p",[s._v("如果不依靠全局变量，则可以根据不同函数之间传递的状态，这样以来，就能更好的了解每个功能的作用，因为你无需考虑全局变量。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" globalData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  globalData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  globalData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("现在，我们要对全局数据进行一些封装，控制对其的访问。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用常量 good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" constantData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 封装变量操作 good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" globalData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGlobalData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" globalData\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setGlobalData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("newGlobalData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isValid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newGlobalData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Illegal input！！！'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  globalData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newGlobalData\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 暴露方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  getGlobalData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  setGlobalData\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("现在，全局变量不会轻易的被“误触”，也能很快定义其修改的位置和防止错误的修改。")]),s._v(" "),t("h3",{attrs:{id:"_4-6-以卫语句-guard-clauses-取代嵌套条件表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-以卫语句-guard-clauses-取代嵌套条件表达式"}},[s._v("#")]),s._v(" 4.6. 以卫语句(Guard Clauses)取代嵌套条件表达式")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPayAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isDead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do sth and assign to result")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isSeparated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do sth and assign to result")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isRetired"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do sth and assign to result")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do sth and assign to result")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("嵌套的if表达式使得代码的可读性和维护性很差。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPayAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isDead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("deatAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isSeparated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("serparateAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isRetired"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("retiredAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("normalPayAmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("卫语句的精髓就是给予某条分支特别的重视，它告诉阅读者，这种情况并不是本函数的所关心的核心逻辑，如果它真的发生了，会做一些必要的工作然后提前退出。")]),s._v(" "),t("p",[s._v("我相信每个程序员都会听过“每个函数只能有一个入口和一个出口”这个观念，但“单一出口”原则在这里似乎不起作用，在重构的世界中，保证代码清晰才是最关键的。如果“单一出口”能让代码更易读，那么就使用它吧，否则就不必这么做。")]),s._v(" "),t("h2",{attrs:{id:"_5-何时开始重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-何时开始重构"}},[s._v("#")]),s._v(" 5. 何时开始重构")]),s._v(" "),t("h3",{attrs:{id:"_5-1-添加新功能之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-添加新功能之前"}},[s._v("#")]),s._v(" 5.1. 添加新功能之前")]),s._v(" "),t("p",[t("strong",[s._v("重构的最佳时机是在添加新功能之前。")])]),s._v(" "),t("p",[s._v("在动手添加新功能之前，看看现有的代码库，此时经常会发现，如果对代码结构做一点微调，自己的工作会轻松很多。比如有个函数提供了需要的大部分功能，但有几个字面量的值与自己的需求不同。如果不做重构，需要复制整个函数再进行微调，这导致重复代码的产生，这是代码臭味道的开始。所以需要戴上重构的“帽子”，做完这件事后，再轻松的开发你的功能。")]),s._v(" "),t("p",[s._v("但这也是在理想情况下的设想，事实上任务的安排总有时间限制，多出一段的重构的耗时可能会让你对时间的安排失控，导致延期，所以对于工作中的场景，并不适用。")]),s._v(" "),t("h3",{attrs:{id:"_5-2-完成新功能后或-code-review-后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-完成新功能后或-code-review-后"}},[s._v("#")]),s._v(" 5.2. 完成新功能后或 code review 后")]),s._v(" "),t("p",[t("strong",[s._v("结合任务的排期和实际的工作，重构的最佳时机是在完成一个功能后和 code review 后。")]),s._v("\n在完成功能并测试通过后，此时对任务的进度是可控的，重构不会影响到代码既有实现的功能，在使用 git 等版本控制系统管理的情况下，回退至功能可用时的代码片段是非常轻易的，但你无法立即完成你从未实现好的功能。")]),s._v(" "),t("p",[s._v("在每完成一个功能后重构，也类似于垃圾回收中的时间分片的思想，不必等到代码中塞满“垃圾”时才开始清理，导致“全停顿”的发生。将重构分解为一小步一小步。")]),s._v(" "),t("p",[s._v("让一个团队，特别是共同实现同一项目的团队来校验自己的代码，往往能够发现自己难以注意的问题。比如自己写的一个功能其实另一个同学已经实现过了，完全可以抽离出来复用；比如有经验的同学提出更加优雅的实现方案。")]),s._v(" "),t("p",[s._v("并且自己编写的代码往往带有自己的风格和“坏习惯”，代码风格并不是一种错误，但在一个团队中，不同代码风格的混杂会带来阅读与合作的困难，而对于“坏习惯”而言，比如极其复杂的条件判断语句等，自己难以意识到该做法的不妥，需要群众的意见加以改正。")]),s._v(" "),t("p",[s._v("实际上在每完成一个新功能后重构还有一些很重要的优势，就是你会对自己的代码有更清晰的了解，你会去做"),t("strong",[s._v("今后不会再做的事情")]),s._v("。")]),s._v(" "),t("p",[s._v("对代码更清晰，能让我们更好的定位问题和提高自己的代码水平，这很好理解。")]),s._v(" "),t("p",[s._v("那这个"),t("strong",[s._v("今后不会再做的事情")]),s._v("是什么呢？没错，就是重构。当你完成新功能后，如果不立刻进行 review，那么在上线后很可能就从此被封存在某个地方，直到它出现了 bug。久而久之，整个项目变得难以维护，代码开始发臭。")]),s._v(" "),t("p",[s._v("而在完成新功能后重构，工作量一般也不会很大，是“顺手完成的小工作”，属于一鼓作气阶段，如果打算以后再看，那么往往就没有这个以后了。")]),s._v(" "),t("h3",{attrs:{id:"_5-3-难以添加新功能的时候"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-难以添加新功能的时候"}},[s._v("#")]),s._v(" 5.3. 难以添加新功能的时候")]),s._v(" "),t("p",[s._v("其实并不希望这个状况发生，这代表代码结构已经处于混乱中，添加新功能需要翻越好几个障碍。此时重构是个必选项，也必然是个大工程，这会造成项目的“全停顿”。更糟糕的是此时重构可能不如直接重写，这是我们需要避免的情况。")]),s._v(" "),t("h2",{attrs:{id:"_6-什么时候不该重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么时候不该重构"}},[s._v("#")]),s._v(" 6. 什么时候不该重构")]),s._v(" "),t("h3",{attrs:{id:"_6-1-重写比重构容易"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-重写比重构容易"}},[s._v("#")]),s._v(" 6.1. 重写比重构容易")]),s._v(" "),t("p",[s._v("这个无需多言。")]),s._v(" "),t("h3",{attrs:{id:"_6-2-不需要理解该代码片段时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-不需要理解该代码片段时"}},[s._v("#")]),s._v(" 6.2. 不需要理解该代码片段时")]),s._v(" "),t("p",[s._v("如果一个功能或者 API 一直以来“兢兢业业”，从未出现过 bug，即便其底下隐藏着十分丑陋的代码，那么我们也可以忍受它继续保持丑陋。不要忘了重构的初衷，其中之一就是为了让人更好的理解代码，当我们不需要理解其时，就让它安安静静地躺在哪儿吧，不要让不可控制的行为发生是重构的原则之一。")]),s._v(" "),t("h3",{attrs:{id:"_6-3-未与合作者商量时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-未与合作者商量时"}},[s._v("#")]),s._v(" 6.3. 未与合作者商量时")]),s._v(" "),t("p",[s._v("如果一个功能被多个模块引用，而这些模块并非你负责时，你必须提前通知负责人，声明将要对这部分功能进行修改，哪怕重构不会带来任何使用上的变化，因为这也意味着重构行为将会带来“不可控”。")]),s._v(" "),t("h2",{attrs:{id:"_7-重构与性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-重构与性能"}},[s._v("#")]),s._v(" 7. 重构与性能")]),s._v(" "),t("p",[s._v("关于重构对性能的影响，是被提及最多的问题。毕竟重构代码很多时候都带来了运行代码行数的增加（并不一定是代码总行数增加，因为重构有提炼函数的部分，优秀的重构总会带来代码总行数的下降）。又或者说将一些性能好的代码变为可读性更高的代码，牺牲掉性能优势。")]),s._v(" "),t("p",[s._v("首先需要回顾一下，代码重构和性能优化是两个不同的概念，重构仅仅只考虑代码的可理解性和可拓展性，对于代码的执行效率是不在乎的，在重构时切记不要同时戴着“两顶帽子”。")]),s._v(" "),t("p",[s._v("而重构对于性能的影响，也很可能没有你想象中的那么高，在面对大部分的业务情况时，重构前和重构后代码的性能差别几乎难以体现。")]),s._v(" "),t("p",[s._v("大部分情况下，我们不需要极致的“压榨”计算机，来减少使用的微乎其微的计算机时钟周期时间，更重要的是，减少自己在开发中使用的时间。")]),s._v(" "),t("p",[s._v("如果对于重构后的的性能不满意，可以在完成重构后有的放矢的对部分高耗时功能进行代码优化。一件很有趣的事情是：大多数程序运行的大半时间都在一小部分代码身上，只要优化这部分代码，就能带来显著的性能提高。如果你一视同仁的优化所有代码，就会发现这是在白费劲，因为被优化的代码不会被经常执行。")]),s._v(" "),t("p",[s._v("所以我认为重构时大可不必为性能过多担忧，可以放手去重构，如有必要再针对个别代码片段优化。短期来看，重构的确可能使软件变慢，但重构也使性能调优更容易，最终还是会得到很好的效果。")])])}),[],!1,null,null,null);t.default=r.exports}}]);