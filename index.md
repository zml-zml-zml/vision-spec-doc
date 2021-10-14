---
home: true
heroImage: '../img/logo.png'
actionText: 开始
actionLink: /guide/ui



features:
  - title: 开发规范
    details: 开发规范，助力提升项目源码的可读性、拓展性、规范性进而也提升了项目开发效率。
  - title: 专业效率
    details: 时空转换，设计合理数据结构，完成时间复杂度向空间复杂度的转移，做到求落实、求具体、求深入、求细致、求效率、求质量。
  - title: 突破创新
    details: 以现有的思维模式提出有别于常规或常人思路的见解为导向，利用现有的知识和物质，在特定的环境中，本着理想化需要，而改进或创造新的代码，并能获得一定有益效果
  
footer: MIT Licensed | Copyright © 2021-present 深圳市信成医疗科技有限公司

---
<script setup>
  import sponsors from './.vitepress/theme/sponsors.json'
  import fetchReleaseTag from './.vitepress/theme/fetchReleaseTag.js'
  fetchReleaseTag()
</script>
<style>
  .features .title {
    background: linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);
    border-radius: 0 15px  0 15px;
    margin-bottom:10px;
  }

</style>