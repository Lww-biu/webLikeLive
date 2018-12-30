# 问题描述
当页面分辨率发生改变时，导航栏中的搜索框会盖掉搜索框前面的元素使导航栏的排版混乱，具体情况如下图：
![大分辨率](http://m.qpic.cn/psb?/V1116Zh04F3Nl8/5pp*uuE*DOmeMx1rcHs66aaQT16FiyXikb9x.K.SsuQ!/b/dFIBAAAAAAAA&bo=fwdmAAAAAAADBzw!&rf=viewer_4)
![小分辨率](http://a2.qpic.cn/psb?/V1116Zh04F3Nl8/edAlXjlQNTpISroaYYX*xlaQqHmShRdAA2AYa4t5oMs!/b/dEkBAAAAAAAA&ek=1&kp=1&pt=0&bo=jgKcAAAAAAADFyI!&tl=1&vuin=709408675&tm=1541073600&sce=60-4-3&rf=viewer_4)
# 原因分析
主要与导航栏的布局有关，为了使搜索框和搜索按钮保持在一起对搜索框的css样式中加入了float右浮动，使其与之前的\<li\>标签的左浮动不同，照成了上面这种状况。
# 解析方法与过程
## 解析方法
因为主要是导航栏的整个布局有问题需要整体的变动，可以使用bs的栅格系统重新进行排版。但是，就目前的想法是先就现在的代码进行简单的修改使页面较为正常的显示，所以目前是做一个响应式，可以在缩小分辨率时，搜索框不再显示
## 过程
* 提出问题
* 小组成员帮忙分析问题
* 寻找解决方案
* 查找资料
* 发现css的响应式web设计：媒体查询可以解决问题,然后再将小分辨率中的搜索框样式改为display:none;
* 组员使用简单事例进行介绍
* 我将解决方案实施到具体代码中
* 解决问题
* 具体代码实现：
  >@media only screen and (max-width: 992px) {
    #search{
      display:none;
      }
  }
* 运行结果：
![修改后](http://a4.qpic.cn/psb?/V1116Zh04F3Nl8/3BRadvBJrJli0JuVm9jbbZhEMu*6J.3wTFeeG4u2ZNg!/c/dDcBAAAAAAAA&ek=1&kp=1&pt=0&bo=xgKBAAAAAAADF3c!&tl=1&vuin=709408675&tm=1541077200&sce=60-2-2&rf=0-0)
# 参考资料链接
[响应式web设计-媒体查询](http://www.runoob.com/css/css-rwd-mediaqueries.html)
