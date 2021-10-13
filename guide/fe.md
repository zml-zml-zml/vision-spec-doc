<!--
 * @Descripttion: 前端规范
 * @Author: zmlxsg
 * @Date: 2021-08-23 10:39:34
 * @LastEditors: zml
 * @LastEditTime: 2021-10-13 18:51:49
-->

# 前端规范

## HTML开发规范

### 整体结构

#### HTML 基础设施

* 文件应以 `<!DOCTYPE ......>` 首行顶格开始，推荐使用 `<!DOCTYPE html>` 。
* 必须申明文档的编码 charset，且与文件本身编码保持一致，推荐使用 UTF-8 编码   `<metacharset="utf-8"/>` 。
* 根据页面内容和需求填写适当的 keywords 和 description。
* 页面 title 是极为重要的不可缺少的一项。

  ```<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>NEC：更好的 CSS 方案</title>
      <meta name="keywords" content>
      <meta name="description" content>
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" href="css/style.css">
      <link rel="shortcut icon" href="img/favicon.ico">
      <link rel="apple-touch-icon" href="img/touchicon.png">
    </head>
  <body></body>
  </html>

#### 结构顺序和视觉顺序基本保持一致

* 按照从上至下、从左到右的视觉顺序书写 HTML 结构。
* 有时候为了便于搜索引擎抓取，我们也会将重要内容在 HTML 结构顺序上提前。
* 用 div 代替 table 布局，可以使 HTML 更具灵活性，也方便利用 CSS 控制。
* table 不建议用于布局，但表现具有明显表格形式的数据，table 还是首选。\

#### 结构、表现、行为三者分离，避免内联

* 使用 link 将 css 文件引入，并置于 head 中。
* 使用 script 将 js 文件引入，并置于 body 底部。

#### 保持良好的简洁的树形结构

* 每一个块级元素都另起一行，每一行都使用 Tab 缩进对齐（head 和 body 的子元素不需
  要缩进）。删除冗余的行尾的空格。
* 使用 4 个空格代替 1 个 Tab（大多数编辑器中可设置）。
* 对于内容较为简单的表格，建议将 tr 写成单行。
* 你也可以在大的模块之间用空行隔开，使模块更清晰。

  ```<body>
    <div class="m-side">
      <div class="side">
          <div class="sidein">
            <div class="sideblk">
                <div class="m-hd3">
                    <h3 class="tit">热门标签</h3>
                </div>
            </div>
          </div>
      </div>
    </div>
  </body>

#### 另外，请做到以下几点

* 结构上如果可以并列书写，就不要嵌套。如果可以写成`<div></div><div></div>`那么就不要写成`<div><div></div></div>`
* 如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。比如`<div><h2></h2></div>`已经能满足要求，那么就不要再写成`<div><div><h2></h2></div></div>`
* 一个标签上引用的 className 不要过多，越少越好。比如不要出现这种情况：`<div class="class1 class2 class3 class4"></div>`
* 对于一个语义化的内部标签，应尽量避免使用 className。比如在这样一个列表中，li 标签中的 itm 应去除：`<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>`

### 代码格式

#### 说明文案的注释方法

采用类似标签闭合的写法，与 HTML 统一格式；注释文案两头空格，与 CSS 注释统一格式。

* 开始注释：`<!-- 注释文案 -->`（文案两头空格）。
* 结束注释：`<!-- /注释文案 -->`（文案前加“/”符号，类似标签的闭合）。
* 允许只有开始注释！

     ``` <!-- 头部 --> 
      <div class="g-hd">
        <!-- LOGO -->
          <h1 class="m-logo">
              <a href="#">LOGO</a>
          </h1>
          <!-- /LOGO -->
          <!-- 导航 -->
              <ul class="m-nav">
                <li>
                  <a href="#">NAV1</a>
                </li>
                <li>
                  <a href="#">NAV2</a>
                </li>
              <!-- 更多导航项 -->
              </ul>
          <!-- /导航 -->
      </div>
      <!-- /头部 -->

#### 代码本身的注释方法

单行代码的注释也保持同行，两端空格；多行代码的注释起始和结尾都另起一行并左缩进对齐。

 `<!-- <h1 class="m-logo"><a href="#">LOGO</a></h1> -->`
    <!--
    <ul class="m-nav">
      <li><a href="#">NAV1</a></li>
      <li><a href="#">NAV2</a></li>
    </ul>
    -->


#### HTML 注释在 IE6 中的 BUG

* 如果两个浮动元素之间存在注释，那么可能导致布局错位或文字的 BUG。
* 所以，这种情况下，我们通常将注释去掉，或者索性采用模板语言（ftl、vm）的注释。

#### 严格的嵌套

* 尽可能以最严格的xhtml strict标准来嵌套, 比如内联元素不能包含块级元素等等。
* 正确闭合标签且必须闭合。

#### 严格的属性

属性和值全部小写，每个属性都必须有一个值，每个值必须加双引号。

* 没有值的属性必须使用自己的名称做为值（checked、disabled、readonly、selected 等等）。
* 可以省略 style 标签和 script 标签的 type 属性。

#### 常用的标签

| 标签 | 语义 |嵌套常见错误|常用属（加粗的为不可缺少的或建议的）|
|:---:|:---:|:---:|:---:|
| `<a></a>` | 超链接/锚 |a 不可嵌套a|href,name,title,rel,target|
| `<br/>``| 换行 |||
|`<button></button>`| 按钮 |不可嵌套表单元素|type,disabled）|
|`<dd></dd>`| 定义列表中的定义 |只能以 dl为父容器||
|| 描述内容 |对应一个dt||
|`<del></del>`|文本删除 |||
|`<div></div>`|块级容器 |||
|`<dt></dt>`| 定义列表中的定义术语 |只能以 dl为父容器，对应多个dd||
|`<em></em>`| 强调文本 |||
|`<form></form>`| 表单 ||action,target,method,name|
|`<h1></h1>`| 标题 |从 h1 到h6，不可嵌套块级元素||
|`<iframe></iframe>`| 内嵌一个网页 ||frameborder,widthheight,src,scrolling,name|
|`<img/>`| 图像 ||alt,src,width,height|
|`<input/>`| 各种表单控件 ||type,name,value,checked,disabled|
|`<label></label>`| 标签为input 元素定义标注 ||for|
|`<li></li>`| 列表项 |只能以 ul或 ol 为父容器||
|`<link/>`| 引用样式或 icon |不可嵌套任何元素|type,rel,href|
|`<meta/>`| 文档信息 |只用于head|content,http-equiv,name|
|`<ol></ol>`| 有序列表 |只能嵌套 li||
|`<option></option>`| select 中的一个选项 |仅用于select|value,selected,disabled|
|`<p></p>`| 标题 |从 h1 到h6，不可嵌套块级元素||
|`<script></script>`| 引用脚本 |不可嵌套任何元素|type,src|
|`<select></select>`| 列表框或下拉框 |只能嵌套option或optgroup|name,disabled,multiple|
|`<span></span>`| 内联容器 |||
|`<strong></strong>`| 强调文本 |||
|`<style></style>`| 引用样式 |不可嵌套任何元素|type,media|
|`<sub></sub>`| 下标 |||
|`<sup></sup>`| 上标 |||
|`<table></table>`| 表格 |只可嵌套表格元素|width,align,background,cellpa
dding,cellspacing,summary,border|
|`<tbody></tbody>`| 表格主体 |只用于table||
|`<td></td>`| 表格中的单元格 |只用于 tr|colspan,rowspan|
|`<textarea></textarea>`| 多行文本输入控件 ||name,accesskey,disabled,read,only,rows,cols|
|`<tfoot></tfoot>`| 表格表尾 |只用于table||
|`<title></title>`| 文档标题 |只用于head||
|`<tr></tr>`| 表格行 |嵌套于table 或thead、tbody、tfoot||
|`<ul></ul>` | 无序列表 |只能嵌套 li||

### 内容语义

#### 内容类型决定使用的语义标签

在网页中某种类型的内容必定需要某种特定的 HTML 标签来承载，也就是我们常常提到的
根据你的内容语义化 HTML 结构。

#### 加强“资源型”内容的可访问性和可用性

在资源型的内容上加入描述文案，比如给 img 添加 alt 属性，在 audio 内加入文案和链接
等等。

#### 加强“不可见”内容的可访问性

背景图上的文字应该同时写在 html 中，并使用 css 使其不可见，有利于搜索引擎抓取你的
内容，也可以在 css 失效的情况下看到内容。

#### 适当使用实体

以实体代替与 HTML 语法相同的字符，避免浏览解析错误。

常用 HTML 字符实体（建议使用实体）：
|字符|名称|实体名|实体数
|--- |--- |---|---|
|“|双引号|`&QUOT;`|`&#34;`|
|&|&符 |`&AMP;`|`&#38;`|
|< |左尖括号（小于号）|`&LT;`|`&#60;`|
|> |右尖括号（大于号）|`&GT;`|`&#62;`|
||空格|`&NBSP;`|`&#160;`|
||中文全角空格||`&#12288;`|

常用特殊字符实体（不建议使用实体）：
|字符|名称|实体名|实体数
|--- |--- |---|---|
|¥|元|`&YEN;`|`&#165;`|
|¦|断竖线 |`&BRVBAR;`|`&#166;`|
|© |版权|`&COPY;`|`&#169;`|
|®|注册商标 R|`&REG;`|`&#174;`|
|™|商标 TM|`&TRADE;`|`&#8482;`|
|·|间隔符||`&MIDDOT;`|`&#183;`|
|«|左双尖括号|`&LAQUO;`|`&#171;`|
|»|右双尖括号|`&RAQUO;`|`&#187;`|
|°|度|`&DEG;`|```&#176;```|
|×|乘|`&TIMES;`|`&#215;`|
|÷|除||`&DIVIDE;`|`&#247;`|
|‰|千分比||`&PERMIL;`|`&#8240;`|

## CSS开发规范

### CSS--SCSS 代码规范

#### 注释规范

* 注释统一用`/* */`，缩进与下一行代码保持一致，可位于一个代码行的末尾，与代码间隔一个空格。例子：

      /* Modal header */
      .modal-header {
      /* 50px */
      width: 50px;
      color: red; /* color red */
      }

#### 缩进//空格//换行规范

* 每个缩进使用 4 个空格，不允许使用 2 个空格 或 tab。例子：

      /* 正确例子*/
      .sample {
          display: flex;
      }

      /* 错误例子*/
      .sample {
        display: flex;
      }

* 选择器与花括号之间必须包含空格。例子：

      /* 正确例子 */
      .sample {
          display: flex; 
      }
      /* 错误例子 */
      .sample{
        display: flex;
      }

* 每条规则之间必须包含空行。例子：

      /* 正确例子*/
      .sample1 {
          display: flex;
      }
      .sample1 {
          display: block; 
      }
      /* 错误例子 */
      .sample {
          display: flex; 
      }
      .sample1 {
        display: block; 
      }

* 属性名与冒号之间不允许包含空格， 冒号与属性值之间必须包含空格。例子：

      /* 正确例子*/
      .sample {
          display: flex; 
      }
      /* 错误例子*/
      .sample {
          display:flex;
          display : flex;
          display :flex; 
      }

* SCSS mixin 的方法参数括号与 { 之间必须包含一个空格, 各参数间必须有一个空格。例子：

      /* 正确例子 */
      @mixin color-box($bg-color: $grey-light, $border-color: $grey) {
          background-color: $bg-color;
          border: 1px solid $border-olor; 
      }
      /* 错误例子 */
      @mixin color-box($bg-color:$grey-light,$border-color:$grey){
          background-color: $bg-color;
          border: 1px solid $border-olor; 
      }

* '+' '~' '>'选择器前后必须跟一个空格。例子：

      /* 正确 */
      .radio-label+.radio-box {}
      /* 错误 */
      .radio-label+.radio-box {}

* 引用 mixin 和多层嵌套必须有一个空行

      /* 正确 */
      .sample {
          @include color-box;
          margin: 15px;
          &:hover {
          display: block;
          } 
      }
      /* 错误 */
      .sample {
          @include color-box;
          margin: 15px;
          &:hover {
          display: block;
          } 
      }

* 多个并行选择器使用同一规则，必须换行。例子：

      /* 正确 */
      .a,
      .b,
      .c {
          box-sizing: border-box;
      }
      /* 错误 */
      .a, .b, .c {
          box-sizing: border-box; 
      }

#### 选择器

      * 禁止使用 ID 应用于样式，应该使用 class
      ```
      /* 正确 */
      .content {
          display: flex; 
      }
      /* 错误 */
      #content {
          display: flex; 
      }

* CSS 选择器中避免标签名
 选择器应该是准确和有语义的 class(类)名，不推荐使用标签选择器。这样会更容易维护, 只需要修改你的标签名，而不是你的 class,从分离的角度考虑,在表现层中不应该分配 html 标记/语义。例 子：

      /* 推荐 */
      .content {
          display: flex;
          >.nav {
              flex: 1;
          } 
      }
      /* 不推荐 */
      .content {
          display: flex;
          >nav {
            flex: 1
          } 
      }

* 选择器嵌套
正常的情况下，我们不推荐使用嵌套，如果需要使用嵌套，我们不推荐嵌套超过三层, 如果嵌套超
过三层，应该考虑是不是哪里可以使用更精准更语义化的 class。不推荐直接使用 css 的嵌套，而是使用 SCSS 的嵌套。例子：

      /* 推荐 */
      .content {
          display: flex;
          >.nav {
            flex: 1;
          } 
      }
      /* 不推荐 */
      .content {
          display: flex;
          >nav {
          flex: 1
          } 
      }

* 在 CSS 预处理器如 LESS 和 SASS 里 media query 推荐直接在选择器的嵌套中使用，有助
于保持媒体查询属于的上下文。例子：

      /* 推荐 */
      .content {
          display: flex;
          > .nav {
              flex: 1;
              > .item {
                text-align: center;
              }
          } 
      }
      /* 不推荐 */
      .content .nav .item a {
          text-align: center; 
      }

* 属性选择器必须使用双引号。例子：

      /* 正确 */
      [class="icon-"] {
      font-size: 1rem;
      }
      /* 错误 */
      [class='icon-'] {
        font-size: 1rem;
      }

#### 属性规范

* 属性定义必须另起一行。例子：

      /* 正确 */
      .selector {
          margin: 0;
          padding: 0; 
      }
      /* 错误 */
      .selector {
        margin: 0; padding: 0; 
      }

* 属性必须以分号结尾。例子：

      /* 正确 */
      .selector {
        margin: 0;
        padding: 0; 
      }
      /* 错误 */
      .selector {
        margin: 0; padding: 0 
      }

* 属性值为 0 时，省略单位。例子：

      /* 正确 */
      .box {
          padding: 0; 
      }
      /* 错误 */
      .box {
      padding: 0px; 
      }

* 使用 16 进制表示颜色，颜色值采用小写，#rrggbb 的情况简写为#rgb，有透明度的情况使用
rgba 表示。例子：

      /* 正确 */
      .box {
          background: rgba(0, 0, 255, .5);
          color: #3ec; 
      }
      /* 错误 */
      .box {
          ackground: white;
          opacity: 0.5;
          color: #33eecc;
      }

* 同一组属性尽量按照功能顺序书写，以 Formatting Model（布局方式、位置） > Box
Model（尺寸） > Typographic（文本相关） > Visual（视觉效果） 的顺序书写，以提高
代码的可读性。

Formatting Model 相关属性包括：display / position / top / right / bottom / left / float /overflow 等

Box Model 相关属性包括：margin / border / padding / width / height 等

Typographic 相关属性包括：font / line-height / text-align /word-wrap 等

Visual 相关属性包括：background / color / transition / list-style 等

例子：

      /* 推荐 */
      .sidebar {
      /* formatting model */
          position: absolute;
          top: 50px;
          left: 0;
          overflow-x: hidden;
      /* box model */
          width: 200px;
          padding: 5px;
          border: 1px solid #ddd;
      /* // typographic */
          font-size: 14px;
          line-height: 20px;
      /* visual */
          background: #f5f5f5;
          color: #333;
          transition: color 1s; 
      }

* font-family 属性

font-family 属性中的字体族名称应使用字体的英文 Family Name，其中如有空格，须放置在
引号中。例子：

      h1 {
          font-family: "Microsoft YaHei"; 
      }
      
      font-family 不区分大小写，但在同一个项目中，同样的 Family Name 大小写必须统一。例
      子：
      
      /* 正确 */
      body {
          font-family: Arial, sans-serif; 
      }
      h1 {
          font-family: Arial, "Microsoft YaHei", sans-serif; 
      }
      /*错误 */
      body {
          font-family: arial, sans-serif; 
      }
      h1 {
          font-family: Arial, "Microsoft YaHei", sans-serif; 
      }

 font-family 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、
效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( serif / sans-serif )。例子：

    /* // 示例 */
    body {
    font-family: "Helvetica Neue", Helvetica, Arial, PingFangSC-Regular, "Microsoft Yahei", 
    Verdana, sans-serif; 
    }

不推荐在业务中重写 font-family。

* url()中的路径不添加引号。例子：

      /* 推荐 */
      .box {
          background-image: url(../imgs/banner.jpg);
      }
      /* 不推荐 */
      .box {
          background-image: url('../imgs/banner.jpg');
      }

* 层级(z-index)禁止随意设置，页面弹窗、气泡为最高级（最高级为 999）；普通区块为 10-
90 内 10 的倍数；同层的多个元素，在该层级内使用相同的 z-index 或递增。
* 禁止使用 !important (特殊情况除外，如覆盖第三方插件中的样式等)
* 禁止使用 filter
* 多个 class 里有一个或多个公共属性，应该将属性抽取到一个单独的 class 中或者使用泛选择
器([attribute~=value], [attribute^=value],[attribute$=value],[attribute*=value])，泛选择器应确保不会有全局污染，避免多次书写重复代码。例子：

      // 正确
      <div>
          <span class="icon-book"></span>
          <span class="icon-pen"></span>
      </div>
      [class^="icon-"] {
          background-image: url(../imgs/sprite.png) no-repeat;
      }
      .icon-book {
          background-positon: 0 -16px;
      }
      .icon-pen { 
          background-positon: -16px -16px;
      }
      // 错误
      <div>
          <span class="icon-book"></span>
          <span class="icon-pen"></span>
      </div>
      .icon-book {
          background-image: url(../imgs/sprite.png) no-repeat;
          background-positon: 0 -16px;
      }
      .icon-pen {
          background-image: url(../imgs/sprite.png) no-repeat;
          background-positon: -16px -16px;
      }

#### Hack 规范

* 通常我们禁止在 CSS 的一个选择器中使用 hack 混编，如果你确实需要写 hack, 我们应该有
一个 class： xxx-fix, 最好把所有的 hack 放在一个独立的文件, 通过 JS 特性检测或者直接添加到 dom 中。例子：

      /* // 错误 */
      .selector {
          key: value;
          key: fix-value\0; //ie 9-11
      }
      /* // 正确 */
      .selector {
          key: value;
      }
      .selecor-ie-fix {
          key: fix-value\0; //ie 9-11
      }

#### 命名规范

* 文件夹命名
css 文件夹命名应参照项目文件夹命名规则，命名总是以字母开头而不是数字，且字母一律小写，以中划线连接多个单词且不带其他标点符号。如：input-numbe，有复数结构时，采取复数命名法。如： style styles

* 文件命名

全站架构：(以下文件放在跟路径下的 styles 目录中)

基本共用 base.scss

布局、版面 layout.scss

主题 themes.scss

专栏 columns.scss

文字 font.scss

主要的 main.scss

表单 forms.scss

补丁 mend.scss

打印 print.scss

变量 variables.scss

功能函数 mixins.scss

色值 colors.scss

动画 animations.scss

字体 iconfont.scss

组件级 / 应用级：（放在组件/应用目录中）

css 模块文件，其文件名必须与模块名一致。

css 页面文件，其文件名必须与 HTML 文件名一致。

目的是让开发人员快速找到该页面或组件对应的 css 文件。

文件命名总是以字母开头而不是数字，且字母一律小写，以下划线连接且不带其他标点符号。

    radio.scss

    main-list.scss

    main-detail.scss

* 变量命名
命名变量的最佳方式就是使用抽象名词，尽量取消名字和值之间的直接关系。
使用'$'开头+ 语义化的变量名。
避免使用无意义的词，如: calendar-component ->calendar
推荐变量的意义在前面，功能在后面。例子：

      // 不推荐
      $red: #F50707;
      $yellow: #B3F724;
      // 推荐
      $brand-color: #F50707;
      $accent-color: #B3F724;
      // 你可能会使用名称加-color 的后缀来命名颜色的变量:
      // Base colors
      $base-color: #333;
      $brand-color: #F50707;
      $brand-80-color: rgba($color-brand, 0.8);
      $accent-color: #B3F724;
      // 或者使用 header-或者 footer-来命名一些特殊的区域：
      // Header
      $header-height: 100px;
      $header-background-color: $color-brand;
      // Footer
      $footer-height: 200px;
      $footer-background-color: #aaa;
      // 不推荐
      $z-index-modal
      $padding-body
      // 推荐
      $modal-z-index
      $body-padding

* 选择器命名

推荐采用 BEM 方式命名

    // BE 模式 block__element：块里的元素，如：nav（block）里的 a 标签(element)
    <nav class="g-nav">
        <a href="#" class="g-nav__item">工作动态</a>
    </nav>
    .g-nav__item {}
    // BM 模式 block--modifier: 块元素加修饰符
    // g-nav 表示导航的通用样式，g-nav-top 表示该导航特有的样式，g-nav--active 表示激活的
    nav
    <nav class="g-nav g-nav-top g-nav--active">
    </nav>
    .g-nav--active {}
    // BEM 模式 block__element--modifier nav 块里的 a 元素加上 active 状态
    <nav class="g-nav">
        <a href="#" class="g-nav__item g-nav__item--active">当前状态</a>
    </nav>
    .g-nav__item--active {}

命名时需要注意的点：

* 规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或_ - 命名避免使用中文拼音，应该采用更简明有语义的英文单词进行组合
* 命名注意缩写，但是不能盲目缩写
* 不允许通过 1、2、3 等序号进行命名
* 避免 class 与 id 重名
* class 用于标识某一个类型的对象，命名必须言简意赅
* 尽可能提高代码模块的复用，样式尽量用组合的方式
* 公共样式名不得包含业务名称
* mixins 命名

小写加中划线，不允许出现大小字母或_ 例子：

    // 不推荐
    @mixin button($background: green) { }
    // 不推荐
    @mixin buttonBg($background: green) {
      }
    // 不推荐
    @mixin button_bg($background: green) { }
    // 推荐
    @mixin button-bg($background: green) { }

多个参数之间用逗号分隔，给参数设置默认值

#### 重写规范

我们不允许直接使用公共库的选择器进行重写，如果要进行重写，必须自己重新加一个新的选择
器，并且，这个选择器不能对公共库有影响。例子：

    // 错误
    .qf-xxx .qf-btn {
    //some rewriting code}
    // 正确
    .qf-xxx__qf-btn {
    //some rewriting code
    }
    //使用的时候用 qf-btn 和 qf-xxx__qf-btn 两个 class, 所以在写组件的时候，为了考虑组件的通
用性和可重写性，建议组件开发人员，都提供一个外部的样式输入接口

### CSS--Less 代码规范

#### 代 码 格 式

* 采用 UTF-8 编码，在 CSS 代码头部顶格使用：@charset "utf-8";
* 用两个空格来代替制表符（tab） * 为了获得更准确的错误报告，每条声明都应该独占一行。
* 在规则声明块的左大括号 { 前加一个空格。
* 在样式属性的冒号 : 后面加上一个空格，前面不加空格。
* 在每条样式后面都以分号 ; 结尾。
* 规则声明块的右大括号 } 独占一行。
* 每个规则声明间用空行分隔。
* 所有最外层引号使用单引号
* 当一个属性有多个属性值时，以逗号 ， 分隔，每个逗号后添加一个空格，当单个属性值过长
时，每个属性值独占一行

以下为完整例子：

    .g-footer,
    .g-header {
        position: relative; 
    }
    .g-content {
        background: linear-gradient(135deg, deeppink25%, transparent25%) -50px0,
        linear-gradient(225deg, deeppink25%, transparent25%) -50px0,
        linear-gradient(315deg, deeppink25%, transparent25%),
        linear-gradient(45deg, deeppink25%, transparent25%);
    }
    .g-content::before {
        content: '';
    }

#### 语法

* class 命名
class 命名只能出现小写英文和破折号 -连接 ，不允许下划线_ 和 驼峰命名法 。
* 选择器
少用#，少用*，少用标签选择器，CSS 的渲染方式是“从右往左”渲染的，就拿#header a{}举例，先渲染页面上所有的 a 签，再去寻找 id 为 header 的元素。此外，还要避免使用属性选择器。

例子：

      #header {
          height: 1rem; // 推荐用 .header 可以复用，且#选择器权重高，应按需使用，不能滥用
      }
      #header *{
          padding:0 .3rem; // 会去遍历所有标签，影响性能
      }
      #header a {
          font-size:0.28rem; // 同样会去遍历所有<a>标签，影响性能
      }

* CSS 权重优先级
!important > 内联 > # > . > 属性选择器 input[name=''] > 标签选择器 input > *
* CSS 执行顺序
行内 > 内联 > 外部引用
* 避免使用 !important
除去某些极特殊的情况，尽量不要使用 !important。

#### 样式属性顺序

* 相关的属性声明应当归为一组，并按照下面的顺序排列：
1.Positioning Model (布局方式、位置）
2.Box Model (盒模型)
3.Typographic (文本排版)
4.Visual (视觉外观)
例子：

      .declaration-order {
          /* Positioning */
          position: absolute;
          top : 0;
          right : 0;
          bottom : 0;
          left : 0;
          z-index : 100;
          /* Box-model */
          display: block;
          float : right;
          margin： 10px;
          padding : 10px;
          overflow: hidden;
          width : 100px;
          height : 100px;
          /* Typography */
          font : normal 13px "Helvetica Neue", sans-serif;
          line-height: 1.5;
          color : #333;
          text-align : center;
          word-wrap : nowrap;
          /* Visual */
          background-color: #f5f5f5;
          border : 1px solid #e5e5e5;
          border-radius : 3px;
          list-style : none;
          transform : translateX(-50%);
          transition : top .4s ease;
          animation : mymove 5s infinite;
          /* Misc */
          opacity: 1;
          cursor : pointer; 
      }

* 字体顺序：font-style | font-variant | font-weight | font-size | line-height | font-family
* 背景顺序：background-color | background-image | background-repeat | backgroundattachment | background-position
* 外边距和内边距：margin&padding
* 列表样式：list-style-type | list-style-position | list-style-image
* 边框顺序：border-width | border-style |border-color

#### 缩写与省略

* 当属性值或颜色参数为 0 – 1 之间的数时，省略小数点前的 0 。
例子：
color: rgba(255, 255, 255, 0.5);
color: rgba(255, 255, 255, .5);
* 当长度值为 0 时省略单位。
例子：
margin: 0px auto;
margin: 0 auto;
* 十六进制的颜色属性值使用小写和尽量简写。

#### 合理使用引号

* font-family 内使用引号。当字体名字中间有空格，中文名字体及 Unicode 字符编码表示的
中文字体，为了保证兼容性，都建议在字体两端添加单引号(或者双引号) 例子：

      body {
          font-family: 'Microsoft YaHei','黑体-简','\5b8b\4f53'; }
      ```
      * background-image 的 url 内使用引号。如果路径里面有空格，旧版 IE 是无法识别的，会
      导致路径失效，建议不管是否存在空格，都添加上单引号(或者双引号) 例子：
      ```
      div {
          background-image: url('...');
      }

#### 注释

* 单行注释

星号与内容之间必须保留一个空格。 例子：`/* aaaaaa*/`

* 多行注释

星号要一列对齐，星号与内容之间必须保留一个空格。 例子：

    /**
    * Sometimes you need to include optional context for the entire component. 
    Do that up here if it's important enough.
    */
    ```
    * 规则声明块内注释
    使用 // 注释，// 后面加上一个空格，注释独立一行。 例子：
    ```
    .g-footer {
        border: 0;
    // ....
    }

* 文件注释

文件顶部必须包含文件注释，用 @name 标识文件说明。星号要一列对齐，星号与内容之间必须保
留一个空格，标识符冒号与内容之间必须保留一个空格。例子：

      /**
      * @name: 文件名或模块名
      * @description: 文件或模块描述
      * @author: author-name(mail-name@domain.com)
      * author-name2(mail-name2@domain.com)
      * @update: 2018-08-08 10:08
      */

@description 为文件或模块描述、@update 为可选项，建议每次改动都更新一下。当该业务项目
主要由固定的一个或多个人负责时，需要添加@author 标识，一方面是尊重劳动成果，另一方面方
便在需要时快速定位责任人。

#### less 编码

* 文件导入
使用 @import (reference) 导入其他 less 文件，避免导入的样式文件 foo.less 代码重复打包到最终的 css 文件中。例子：
`@import (reference) "foo.less";`
我们用 vd 生成的项目，已经将CSS 公共解决方案文件rework.less 集成到node_modules中，
如下调用：

      @import (reference) "~rework.less/rework";
      @import "~sprite.less";
      .placeholder {
        &-404 {
            h3 {
          .text-replace(); // 调用 rework 样式
          .sprite(@404-slogan); 
            } 
        }
      }

除了提供一些常用样式方案，rework.less 中还包含了样式重置，中文网页排版样式，详情查阅源码。
rework.less 源码地址：`https://github.com/yincw/rework.less3.2`

* 混合（Mixins）
将一组可以共用的样式属性，在其他样式规则中混合调用。例子：

      .bordered {
          border-top: dotted 1px black;
          border-bottom: solid 2px black;
      }
      
      #menu .list {
          color: #111;
          .bordered;
      }
      
      .post {
          color: red;
          .bordered;
      }

* 命名空间（Namespaces）和访问器（Accessors）
 我们可以用 Less 中的命名空间为自己封装一些日常比较常用的类名，以便在其他组件中复用，
又不产生冲突。 例子：

      .bundle() {
          .button(@bg-color) { // 本样式支持传参
              display: block;
              border: 1px solid black;
              background-color: @bg-color;
          }
          .tab {
              background-color: yellow
          }
          .citation {
              background-color: purple
          } 
        }
      .header {
          color: orange;
          .bundle > .button(gray); // 也可以写作 .bundle .button(gray)
      }

* 嵌套
通过嵌套来实现样式隔离：保证自己组件的样式不影响其他组件的样式，注意层级不要超过 3 级（影响性能）。例子：

      .product {
          padding-top: .5rem;
          width: e("calc(100% - 0.6rem)"); // 混合计算编译会忽略单位，解决方案 1
          .product-list {
              margin-bottom: .2rem;
              width: calc(~"100% - 0.6rem"); // 混合计算编译会忽略单位，解决方案 2
              &:after {
                  content: "";
                  display: block;
                  visibility: hidden;
                  clear: both;
                  height: 0;
                  line-height: 0;
                }
            } 
        }

## JS开发规范

### 缩进

使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。
switch 下的 case 和 default 必须增加一个缩进层级。

### 空格

三元运算符? :前后，二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

    a = b ? 1 : 2;
    let a = !arr.length; a++;
    a = b + c;
    ```
    用作代码块起始的左花括号 { 前必须有一个空格
    ```
    if(true){}; //不推荐
    if (true) {}; //推荐
    ```
    if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格。
    ```
    while(true){}; //不推荐
    (function(){})(); //不推荐
    if (true) {}; //推荐
    (function () {})(); //推荐

在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和[] 内紧贴括号部分不允许有空格。

    fnName(param1,param2); //推荐
    this.list[index]; //推荐
    var arr = []; //推荐
    var obj = {}; //推荐
    fnName (param1,param2 ); //不推荐
    this.list[ index ]; //不推荐
    var arr = [ ]; //不推荐
    var obj = { }; //不推荐

在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格。

    var obj = { //推荐
        a: 1,
        b: 1,
        c: 1
    };
    var obj = { //不推荐
        a : 1,
        b:2,
        c :3
    };

 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格。

    function name() {} //推荐
    name() //推荐
    function name (){} //不推荐
    name () //不推荐

和 ; 前不允许有空格。如果不位于行尾，, 和 ; 后必须跟一个空格。

    name(a,b); //推荐
    name(a , b) ; //不推荐

### 分号

需要添加分号的几种情况：
变量声明、表达式、return、throw、break、continue、do-while 等语句结束。
函数定义结束不允许添加分号。

    var a = 1; a++;
    do{a++;
    }while(a<10);
    //函数定义结束不需要添加分号
    // 推荐
    function funcName() { } 
    // 不推荐
    function funcName() { }; 
    // 如果是函数表达式，分号是不允许省略的
    var funcName = function () { };

### 换行

每个独立语句结束后（如变量赋值后，函数调用后…）必须换行。
每行不得超过 120 个字符（超长的不可分割的代码允许例外，比如复杂的正则表达式、长字符串不在例外之列）。

运算符处换行时，运算符必须在新行的行首。

    //推荐换行方式
    if (a === b && c === d || x ===y){};
    var return = num1 + num2 + num3+ num 4; 
    //不推荐
    if (a === b && c === d || x ===y){};
    var return = num1 + num2 + num3 + num 4;

 在函数声明、函数表达式、函数调用、对象创建、数组创建、for 语句等场景中，不允许在 , 或 ; 前换行。

    //推荐
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    //不推荐
    var obj = {
        a: 1 ,b: 2 ,c: 3
    };

不同行为或逻辑的语句集，使用空行隔开，更易阅读。

    //逻辑换行
    function setStyle(element, property, value) {
        if (element == null) {
            return;
          }
    element.style[property] = value;
    }

 对于 if...else...、try...catch...finally 等语句，推荐使用在 } 号后添加一个换行的风格，使代码层次结构更清晰，阅读性更好。

    if (condition) {
    // code;
    } else {
    // code;
    };
    try {
    // code;
    } catch (ex) {
    // code;
    };

### 命 名 规 范

变量 使用 Camel 命名法。

常量 使用 全部字母大写，单词间下划线分隔 的命名方式。

函数使用 Camel 命名法。

函数的参数使用 Camel 命名法。

函数名使用动宾短语。

类使用 Pascal 命名法。

类的方法 / 属性使用 Camel 命名法。

boolean 类型的变量使用 is 或 has 开头。

    var myName; //变量
    var MIN_COUNT; //常量
    function getStyle(theBells) { //函数名及函数参数
    }
    function TextNode(options) { //类 }
    var isReady = false; //boolean 类型
    var hasMoreCommands = false;

### 注 释 规 范

单行注释：必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致。

多行注释：避免使用 /*...*/ 这样的多行注释。有多行注释内容时，使用多个单行注释。

文档化注释：文档注释前必须空一行，自文档化的文档说明 what，而不是 how。

为了便于代码阅读和自文档化，文件、namespace、类、函数或方法、类属性、事件、全局变量、
常量、AMD 模块等内容必须包含以 /**...*/ 形式的块注释中。

1.文件注释：文件顶部必须包含文件注释，用@file 标识文件说明，文件注释中可以用@author
标识开发者信息。

    /** 
    * @file Describe the file 
    * @author author-name(xxx@gmail.com) 
    * author-name2(xxx2@qq.com) 
    */

2.类注释：使用@class 标记类或构造函数，对于使用对象 constructor 属性来定义的构造函
数，可以使用@constructor 来标记。使用@extends 标记类的继承信息。类的属性或方法等
成员信息不是 public 的，应使用@private 或@protected 标识。

        /** 
        * 类描述
        * 
        * @class
        * @extends Developer
        */
        var Fronteer = function() {
            Developer.call(this);
            /**
            * 属性描述
            * @type {string}
            * @private
            **/
            this.level = 'T12';
            // constructor body
        };
        util.inherits(Fronteer, Developer);
        /**
        * 方法描述
        * @private
        * @return {string} 返回值描述
        */
        Fronteer.prototype.getLevel = function() {};

 3.函数/方法注释：必须包含函数说明，有参数和返回值时必须使用注释标识。当 return 关键字仅作退出函数/方法使用时，无须对返回值作注释标识。参数和返回值注释必须包含类型信
息，且不允许省略参数的说明，当函数是内部函数，外部不可访问时，可以使用 @inner 标
识。

    /**
    * 函数描述
    * 
    * @param {string} p1 参数 1 的说明
    * @param {string} p2 参数 2 的说明，比较长
    * 那就换行了. 
    * @param {number=} p3 参数 3 的说明（可选）
    * @return {Object} 返回值描述 
    */
    function foo(p1, p2, p3) {
        `var p3 = p3 || 10;
        return {
        p1: p1,
        p2: p2,
        p3: p3
        };`
    }
4.事件注释：必须使用 @event 标识事件，事件参数的标识与方法描述的参数标识相同。

    /**
    * 值变更时触发 
    * 
    * @event Select#change
    * @param {Object} e e 描述
    * @param {string} e.before before 描述 
    * @param {string} e.after after 描述
    */
    this.fire(
        'change', {
            before: 'foo',
            after: 'bar'
        }
    );

5.常量注释：常量必须使用 @const 标记，并包含说明和类型信息。

    /**
    *常量说明
    * @const
    * @type {string}
    */
    var REQUEST_URL = 'myurl.do';

### 变量

变量、函数在使用前必须先定义，必须 即用即声明，不得在函数或其它形式的代码块起始位置统一
声明所有变量。
不通过 var 定义变量将导致变量污染全局环境，每个 var 只能声明一个变量。

    //good
    var name = 'MyName';
    var hangModules = [];
    var missModules = [];
    var visited = {};
    // bad 
    name = 'MyName';
    var hangModules = [],
    missModules = [],
    visited = {};

### 条件

尽量使用类型严格的 === 代替 == 。仅当判断 null 或 undefined 时，允许使用 == null。
使用 === 可以避免等于判断中隐式的类型转换。

    // 推荐
    if (age === 30) {
    // ...... 
    }
    // 不推荐
    if (age == 30) {
    // ...... 
    }

尽可能使用简洁的表达式。

      //字符串为空时
      // good 
      if (!name) {
      // ......
      }
      // bad 
      if (name === '') {
      // ...... 
      }
      // 字符串非空
      // good 
      if (name) {
      // ...... 
      }
      // bad 
      if (name !== '') {
      // ......
      }
      // 数组非空
      // good 
      if (collection.length) {
      // ...... 
      }
      // bad 
      if (collection.length > 0) {
      // ...... 
      }
      // 布尔不成立
      // good 
      if (!notTrue) {
      // ...... 
      }
      // bad 
      if (notTrue === false) {
      // ......
      }
  
对于相同变量或表达式的多值条件，用 switch 代替 if。

    // good 
    switch (typeof variable) {
        case 'object':
        // ...... 
        break;
        case 'number':
        case 'boolean':
        case 'string':
        // ...... 
        break; 
    }
    // bad 
    var type = typeof variable;
    if (type === 'object') {
    // ......
    } else if (type === 'number' || type === 'boolean' || type === 'string') {
    // ...... 
    }

如果函数或全局中的 else 块后没有任何语句，可以删除 else。

      // 推荐
      function getName() {
          if (name) {
          return name;
          }
          return 'unnamed'; 
      }
      // 不推荐
      function getName() {
          if (name) {
              return name;
          } else {
              return 'unnamed';
          } 
      }

### 循环

不要在循环体中包含函数表达式，事先将函数提取到循环体外。

    // 推荐
    function clicker() {
    // ...... 
    }
    for (var i = 0, len = elements.length; i < len; i++) {
        var element = elements[i];
        addListener(element, 'click', clicker);
    }
    // 不推荐
    for (var i = 0, len = elements.length; i < len; i++) {
        var element = elements[i];
        addListener(element, 'click', function() {});
    }

对有序集合进行顺序无关的遍历时，使用逆序遍历。

    // 推荐
    var len = elements.length;
    while (len--) {
    var element = elements[len];
    // ...... 
    }

### 数据类型

类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。

    // string
    typeof variable === 'string'
    // number 
    typeof variable === 'number'
    // boolean 
    typeof variable === 'boolean'
    // Function 
    typeof variable === 'function'
    // Object 
    typeof variable === 'object'
    // RegExp 
    variable instanceof RegExp
    // Array 
    variable instanceof Array
    // null 
    variable === null
    // null or undefined 
    variable == null
    // undefined 
    typeof variable === 'undefined'

### 类型转换

转换成 string 时，使用 + ''。

    // 推荐
    num + '';
    // 不推荐
    new String(num);
    num.toString();
    String(num);

转换成 number 时，通常使用 +。

    // 推荐
    +str; 
    // 不推荐
    Number(str);

string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt（使
用 parseInt 时，必须指定进制）。

    var width = '200px';
    parseInt(width, 10);
    //不推荐
    parseInt(width);

转换成 boolean 时，使用 !!。

    var num = 3.14; 
    !!num;

number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt。

    // 推荐
    var num = 3.14; Math.ceil(num); 
    // 不推荐
    var num = 3.14; parseInt(num, 10)

### 字符串

字符串开头和结束使用单引号 '（输入单引号不需要按住 shift，方便输入）。

    var str = '我是一个字符串'; 
    var html = '<div class="cls">拼接 HTML 可以省去双引号转义</div>';

### 对象

使用对象字面量 {} 创建新 Object

    // 推荐
    var obj = {}; 
    // 不推荐
    var obj = new Object();

对象创建时，如果一个对象的所有 属性 均可以不添加引号，建议所有 属性 不添加引号。

    var info = { 
        name: 'someone', 
        age: 28
    };

对象创建时，如果任何一个 属性 需要添加引号，则所有 属性 建议添加 '。

    // 推荐
    var info = {
        'name': 'someone',
        'age': 28,
        'more-info': '...'
    }; // 不推荐
    var info = {
        name: 'someone',
        age: 28,
        'more-info': '...'
    };

for in 遍历对象时, 使用 hasOwnProperty 过滤掉原型中的属性。

    var newInfo = {};
    for (var key in info) {
      if (info.hasOwnProperty(key)) {
          newInfo[key] = info[key];
        }
    };

### 数组

使用数组字面量 [] 创建新数组，除非想要创建的是指定长度的数组。
清空数组使用 .length = 0

    // 推荐
    var arr = [];
    // 不推荐
    var arr = new Array();

遍历数组不使用 for in（数组对象可能存在数字以外的属性, 这种情况下 for in 不会得到正确结果）。

    var arr = ['a', 'b', 'c'];
    // 正确的遍历方式
    for (var i = 0, len = arr.length; i < len; i++) {
      console.log(i);
    }
    // 错误的遍历方式
    for (var i in arr) {
      console.log(i);
    }

### 函数

函数的长度： 一个函数的长度控制在 50 行以内。
将过多的逻辑单元混在一个大函数中，易导致难以维护。一个清晰易懂的函数应该完成单一的逻辑
单元。
复杂的操作应进一步抽取，通过函数的调用来体现流程。
参数设计：一个函数的参数控制在 6 个以内。
除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 6 个以内，过多参数会导致维护难
度增大。

### 面向对象

类的继承方案，实现时需要修正 constructor。
通常使用其他 library 的类继承方案都会进行 constructor 修正。如果是自己实现的类继承方案，
需要进行 constructor 修正。

    /*
    * 构建类之间的继承关系 
    * @param {Function} subClass 子类函数
    * @param {Function} superClass 父类函数
    */
    function inherits(subClass, superClass) {
        var F = new Function();
        F.prototype = superClass.prototype;
        subClass.prototype = new F();
        subClass.prototype.constructor = subClass;
    }

声明类时，保证 constructor 的正确性。

    function Animal(name) {
      this.name = name; 
    }
    // 直接 prototype 等于对象时，需要修正 constructor
    Animal.prototype = {
        constructor: Animal,
        jump: function() {
            alert('animal ' + this.name + ' jump');
          }
    };
    // 这种方式扩展 prototype 则无需理会 constructor 
    Animal.prototype.jump = function() {
        alert('animal ' + this.name + ' jump');
    };

属性在构造函数中声明，方法在原型中声明原型对象的成员被所有实例共享，能节约内存占用。所以编码时我们应该遵守这样的原则：原型对象包含程序不会修改的成员，如方法函数或配置项。

    function TextNode(value, engine) {
        this.value = value;
        this.engine = engine;
    }
    TextNode.prototype.clone = function() {
        return this;
    };

### DOM

元素获取：对于单个元素，尽可能使用 document.getElementById 获取，避免使用 document.all。
对于多个元素的集合，尽可能使用 context.getElementsByTagName 获取。其中 context 可以
为 document 或其他元素。指定 tagName 参数为 * 可以获得所有子元素。
遍历元素集合时，尽量缓存集合长度。如需多次操作同一集合，则应将集合转为数组。
获取元素的直接子元素时使用 children。避免使用 childNodes，除非预期是需要包含文本、注释和
属性类型的节点。

    <div></div> 
    <span></span> 
    <script>
        var elements = document.getElementsByTagName('*');
        // 显示为 DIV
        alert(elements[0].tagName);
        var div = elements[0];
        var p = document.createElement('p');
        docpment.body.insertBefore(p, div);
        // 显示为 P 
        alert(elements[0].tagName);
    </script>

 样式获取：获取元素实际样式信息时，应使用 getComputedStyle 或 currentStyle。
样式设置：尽可能通过为元素添加预定义的 className 来改变元素样式，避免直接操作 style 设
置。

### DOM 事件

优先使用 addEventListener / attachEvent 绑定事件，避免直接在 HTML 属性中或 DOM 的
expando 属性绑定事件处理。使用 addEventListener 时第三个参数使用 false。

## 安全防范

### 接口加密

最近在使用 Cookies 加密保存数据的时候，接触到 crypto，使用还算简单，在这里记录一下。
可以在这个 GitHub 的 `https://github.com/brix/crypto-js`上下载该 js，它可以单独引入所需要
加密方式的 js；也可以引入一个 crypto-js.js 这个文件，它相当于引入了所有的加密方式，我使用
的就是后者一次引入所有的加密文件，这个文件也不是很大，还可以接受。
因为我的需求是加密可逆，具有一定的安全性(对安全性要求并不是特别高)，所以使用 DES 或 AES
即可，我用的是 AES：

    function getAesString(data,key,iv){//加密
        var key = CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Utf8.parse(iv);
        var encrypted =CryptoJS.AES.encrypt(data,key,
            {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
            });
        return encrypted.toString(); //返回的是 base64 格式的密文
    }
    function getDAesString(encrypted,key,iv){//解密
        var key = CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Utf8.parse(iv);
        var decrypted =CryptoJS.AES.decrypt(encrypted,key,
            {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
            });
        return decrypted.toString(CryptoJS.enc.Utf8); 
    }
    function getAES(data){ //加密
        var key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; //密钥
        var iv = '1234567812345678';
        var encrypted =getAesString(data,key,iv); //密文
        var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted)
        return encrypted; 
    }
    function getDAes(data){//解密
        var key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; //密钥
        var iv = '1234567812345678';
        var decryptedStr =getDAesString(data,key,iv);
        return decryptedStr; 
    }

 key 和 iv 我们都可以更换，但是需要保证的是加解密的 key 和 iv 保持一致

### 跨站脚本攻击（XSS）

1.跨站脚本攻击就是指恶意攻击者向网页中插入一段恶意代码，当用户浏览该网页时，嵌入到网页
中的恶意代码就会被执行，从而达到恶意用户的特殊目的（一般用来盗取浏览器 cookie）。

2.跨站脚本攻击漏洞，英文名称 Cross Site Scripting，简称 CSS 又叫 XSS。它指的是恶意攻击者
向 Web 页面中插入一段恶意代码，当用户浏览该页面时，嵌入到 Web 页面中的恶意代码就会被
执行，从而达到恶意攻击者的特殊目的。

危害：

* 恶意用户可以使用该漏洞来盗取用户账户信息、模拟其他用户身份登录，更甚至可以修改网页呈
现给其他用户的内容。

* 比如有一天你打开一个网站，突然弹出一个窗口 提示叫你登陆 你以为是这个网站让你登陆 当
你输入账户密码以后你的所有操作都被黑客记录了，还有小白问“盗取浏览器 cookie 有什么用”
黑客盗取你的浏览器 cookies 以后 可以利用你的 cookie 登陆你在特定网站或者论坛的账户。

* 网站常见的存在跨站的地方多半都在留言本，搜索，评论。这些地方， 特别是有留言和评论的
地方要注意，你网站这两个地方存在跨站，黑客可以直接在这两个地方提交跨站攻击脚本，你登陆
后台查看留言和评论以后就被攻击了。

解决方案：

避免 XSS 的方法之一主要是将用户所提供的内容输入输出进行过滤，许多语言都有提供对 HTML
的过滤。新增 XssHttpFilter 过滤器即可。

### Sqll 注入

什么是 Sql 注入：

SQL 注入(SQL injection，SQLi)攻击是指：攻击者通过执行恶意 SQL 语句，来控制某个 Web 应
用的数据库服务器，进而未经授权地访问、修改或删除各种数据。
在互联网发展的早期，构建网站曾是一个非常简单的过程：既没有 JavaScript，又没有 CSS，且少
有图像。但是，随着各类网站的普及，人们对于先进技术和动态网站的需求也在不断增长。这就导
致了服务器端脚本语言的不断发展。

同时，各类网站也开始在数据库中存储丰富的用户输入内容。SQL 注入攻击就是成了黑客攻击网站
服务最常用的入侵方式之一。黑客使用定制化的 SQL 语句来入侵数据库，以欺骗系统执行各种异
常的、且不应该的操作。

危害：

* 基于数据库中不同数据，轻松地控制应用程序的各种行为。
* 伴随着用户访问应用的过程，注入更多需要执行的恶意代码。
* 添加、修改和删除数据，破坏数据库，以及迫使应用的服务不可用。
* 在某个网站上，通过枚举以获取已注册用户的详细身份信息，并将其用于攻击其他站点

如何防范 Sql 注入：

* 通过使用静态和动态测试，定期检查并发现应用程序中的 SQL 注入漏洞。
* 通过使用参数化查询和对象关系映射(Object Relational Mappers，ORM)，来避免和修复注
入漏洞。此类查询通过指定参数的占位符，以便数据库始终将它们视为数据，而非 SQL 命令的
一部分。
* 使用转义字符，来修复 SQL 注入漏洞，以便忽略掉一些特殊字符。
* 通过对数据库强制执行最小权限原则，来减缓 SQL 注入漏洞的影响。籍此，应用程序的每一个
软件组件都只能访问、并仅影响它所需要的资源。
* 对访问数据库的 Web 应用程序采用 Web 应用防火墙(Web Application Firewall，WAF)。这
有助于识别出针对 SQL 注入的各种尝试，进而防止此类尝试作用到应用程序上。

### CSRF 攻击

#### 原理

RF 攻击跨站请求伪造。 本质：重要操作的所有参数都是可以被攻击者猜测到的。攻击者预
测 URL 的所有参数与参数值，才能成功地构造一个伪造的请求。

#### 防御 CSRF 攻击

防御方法： 验证码、 Referer Check 检查请求是否来自合法的源（可被伪造）。

通用方法：Token 使用 Anti-CSRF Token 在 URL 中保持原参数不变，新增一个参数 Token。

Token 的值是随机的（必须使用足够安全的随机数生成算法，或者采用真随机数生成器），其为用户与服务器所共同持有，可以放在用户的 Session 中，或者浏览器的 Cookie 中。注意保密，尽量把 Token 放在表单中（构造一个隐藏的 input 元素），以 POST 提交，避免 Token 泄露。

## 开发工具推荐

### VScode

VSCode 是微软推出的一款轻量编辑器，采取了和 VS 相同的 UI 界面，搭配合适的插件可以优化前端开发的体验。

下载地址：`https://code.visualstudio.com/Download`

#### 配置

* Ctrl + Shift + P 或 F1 打开命令面板（也可以使用 查看-》命令面板打开）；

* 输入 user set 后按回车打开用户配置；

* 使用 “editor.fontFamily”：“Consolas， ‘Courier New’，monospace” 选择字体

* 样式，默认为“Consolas， ‘Courier New’， monospace”；使用 editor.fontSize“：14

* 控制字体大小，默认为 14；使用 ”editor.wrappingColumn“：0 使文本自动换行，默认为300；在左侧的默认配置中会有详细的中文描述，配置文件是 json 格式的文本文档。

#### 开发推荐插件

1. Chinese (Simplified) Language Pack for Visual Studio Code 简体中文包
2. open in browse 点击右键可直接选择在浏览器中打开 html 文件
3. Vetur VUE 专用插件
    * 功能包括语法错误检查，包括 CSS/SCSS/LESS/Javascript/TypeScript，
    * 语法高亮，包括 html/jade/pug css/sass/scss/less/stylus js/ts
    * emmet 支持代码自动补全（目前还是初级阶段），包括 HTML/CSS/SCSS/LESS/JavaScript/TypeScript
4. vscode-icons 图标插件，可以是文档目录更加清晰
5. EsLint —— 语法纠错

#### 通用快捷键

|快捷键|作用|
|---|---|
|Ctrl+Shift+P,F1|展示全局命令面板|
|Ctrl+P |快速打开最近打开的文件|
|Ctrl+Shift+N |打开新的编辑器窗口|
|Ctrl+Shift+W |关闭编辑器|

#### 基础编辑

|快捷键|作用|
|---|---|
|Ctrl + X |剪切|
|Ctrl + C |复制|
|Alt + up/down |移动行上下|
|Shift + Alt up/down |在当前行上下复制当前行|
|Ctrl + Shift + K|删除行|
|Ctrl + Enter |在当前行下插入新的一行|
|Ctrl + Shift + Enter |在当前行上插入新的一行|
|Ctrl + Shift + | 匹配花括号的闭合处，跳转|
|Ctrl + ] / [ |行缩进|
|Home |光标跳转到行头|
|End |光标跳转到行尾|
|Ctrl + Home |跳转到页头|
|Ctrl + End |跳转到页尾|
|Ctrl + up/down |行视图上下偏移|
|Alt + PgUp/PgDown |屏视图上下偏移|
|Ctrl + Shift + [ |折叠区域代码|
|Ctrl + Shift + ] |展开区域代码|
|Ctrl + K Ctrl + [| 折叠所有子区域代码|
|Ctrl + k Ctrl + ]| 展开所有折叠的子区域代码|
|Ctrl + K Ctrl + 0 |折叠所有区域代码|
|Ctrl + K Ctrl + J |展开所有折叠区域代码|
|Ctrl + K Ctrl + C |添加行注释|
|Ctrl + K Ctrl + U |删除行注释|
|Ctrl + / |添加关闭行注释|
|Shift + Alt +A |块区域注释|
|Alt + Z |添加关闭词汇包含|

#### 导航

|快捷键|作用|
|---|---|
|Ctrl + T |列出所有符号|
|Ctrl + G |跳转行|
|Ctrl + P |跳转文件|
|Ctrl + Shift + O |跳转到符号处|
|Ctrl + Shift + M |打开问题展示面板|
|F8 |跳转到下一个错误或者警告|
|Shift + F8 |跳转到上一个错误或者警告|
|Ctrl + Shift + Tab |切换到最近打开的文件|
|Alt + left / right |向后、向前|
|Ctrl + M |进入用 Tab 来移动焦点|

#### 查询与替换

|快捷键|作用|
|---|---|
|Ctrl + F |查询|
|Ctrl + H |替换|
|F3 / Shift + F3 |查询下一个/上一个|
|Alt + Enter |选中所有出现在查询中的|
|Ctrl + D |匹配当前选中的词汇或者行，再次选中-可操作|
|Ctrl + K Ctrl + D |移动当前选择到下个匹配选择的位置(光标选定)|

#### 丰富的语言操作

|快捷键|作用|
|---|---|
|Ctrl + Space |输入建议[智能提示]|
|Ctrl + Shift + Space| 参数提示|
|Tab Emmet |指令触发/缩进|
|Shift + Alt + F |格式化代码|
|Ctrl + K Ctrl + F |格式化选中部分的代码|
|F12 |跳转到定义处|
|Alt + F12 |代码片段显示定义|
|Ctrl + K F12 |在其他窗口打开定义处|
|Ctrl + . |快速修复部分可以修复的语法错误|
|Shift + F12 |显示所有引用|
|F2 |重命名符号|
|Ctrl + Shift + . / ,| 替换下个值|
|Ctrl + K Ctrl + X |移除空白字符|
|Ctrl + K M |更改页面文档格式|

#### 编辑器管理

|快捷键|作用|
|---|---|
|Ctrl + F4, Ctrl + W |关闭编辑器|
|Ctrl + k F |关闭当前打开的文件夹|
|Ctrl + |切割编辑窗口|
|Ctrl + 1/2/3 |切换焦点在不同的切割窗口|
|Ctrl + K Ctrl <-/->| 切换焦点在不同的切割窗口|
|Ctrl + Shift + /PgUp/PgDown|切换标签页的位置|
|Ctrl + K <-/-> |切割窗口位置调换|

#### 文件管理

|快捷键|作用|
|---|---|
|Ctrl + N |新建文件|
|Ctrl + O|打开文件|
|Ctrl + S |保存文件|
|Ctrl + Shift + S |另存为|
|Ctrl + K S |保存所有当前已经打开的文件|
|Ctrl + F4 |关闭当前编辑窗口|
|Ctrl + K Ctrl + W| 关闭所有编辑窗口|
|Ctrl + Shift + T |撤销最近关闭的一个文件编辑窗口|
|Ctrl + K Enter |保持开启|
|Ctrl + Shift + Tab |调出最近打开的文件列表，重复按会切换|
|Ctrl + Tab| 与上面一致，顺序不一致|
|Ctrl + K P |复制当前打开文件的存放路径|
|Ctrl + K R |打开当前编辑文件存放位置|
|Ctrl + K O|在新的编辑器中打开当前编辑的文件|

#### 显示

|快捷键|作用|
|---|---|
|F11 |切换全屏模式|
|Shift + Alt + 1 |切换编辑布局|
|Ctrl + =/- |放大 / 缩小|
|Ctrl + B |侧边栏显示隐藏|
|Ctrl + Shift + E| 资源视图和编辑视图的焦点切换|
|Ctrl + Shift + F |打开全局搜索|
|Ctrl + Shift + G |打开 Git 可视管理|
|Ctrl + Shift + D |打开 DeBug 面板|
|Ctrl + Shift + X |打开插件市场面板|
|Ctrl + Shift + H |在当前文件替换查询替换|
|Ctrl + Shift + J |开启详细查询|
|Ctrl + Shift + V |预览 Markdown 文件|
|Ctrl + K v |在边栏打开渲染后的视图[新建]|

#### 调试

|快捷键|作用|
|---|---|
|F9 |添加解除断点|
|F5 |启动调试、继续|
|F11 / Shift + F11 |单步进入 / 单步跳出|
|F10 |单步跳过|
|Ctrl + K Ctrl + I |显示悬浮|

#### 集成终端

|快捷键|作用|
|---|---|
Ctrl + ` |打开集成终端
Ctrl + Shift + ` |创建一个新的终端
Ctrl + Shift + C| 复制所选
Ctrl + Shift + V |复制到当前激活的终端
Shift + PgUp / PgDown |页面上下翻屏
Ctrl + Home / End |滚动到页面头部或尾部

### 其他开发工具

#### Hbuilder

下载地址：`http://www.dcloud.io/`

有强大的其他语言支持和开发 webapp 等功能，强大到没朋友。在移动 webapp 开发有其独特优势，在语法提示、转到定义、重构、调试等方面都非常高效。

#### sublime text3

下载地址：`http://www.sublimetext.com/`

* sublime text 是一个轻量级的编辑器，也是支持各种编程语言，
* sublime text 所有的强大功能都是
* 支持插件的，而且快捷键十分的好用，可以极大的减少开发的劳动程度，使用 sublime 就是要使用其快捷键和插件。
* sublime text3 的优点的轻量级但是功能强大，优雅小巧启动速度快，有着丰富的第三方支持

#### WebStorm

下载地址：`https://www.jetbrains.com/webstorm/`

* WebStorm 是 jetbrains 公司旗下一款 JavaScript 开发工具。官方提供的插件支持 ESlint，

* 词法高亮，emmet，CSS 预处理器，新版本也添加了对 ES6 的支持，内建了服务器调试。

## 总结

本文档涵盖了 HTML 规范，CSS 规范，JavaScript 规范，安全防范以及开发工具五大模块内容。其
中，开发规范展示有相应的示例代码供开发人员自查，安全防范记录了常见的安全问题以及防御措
施，开发工具着重介绍了 VScode 的配置方法，常用插件和快捷键。
