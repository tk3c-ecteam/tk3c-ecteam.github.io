!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}({0:function(t,e,n){"use strict";e.a={methods:{closeAlert:function(t){this.isShow=!1,this.isAlert=!1,this.isWarn=!1},checkform:function(t,e){var n=this;if(this.email||(this.emailError="email不能為空!"),this.phone||(this.phoneError="電話不能為空!"),!1===this.checkEmail(this.email)&&(this.emailError="email缺少@格式不正確!"),this.email&&this.phone)return console.log("ok"),this.closeAlert(),"red"==e&&this.goRain(),setTimeout((function(){n.emailError="",n.phoneError=""}),80),!0;t.preventDefault()},checkEmail:function(t){return!!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)},sendAjaxData:function(){$.ajax({url:"",data:"",type:"json",method:"post",success:function(t){console.log(t)}})},goRain:function(){var t=this;this.isShow=!1,$("#particle_canvas").fadeIn();var e=setInterval((function(){t.timing--,0===t.timing&&($("#particle_canvas").hide(),t.active=!0,clearInterval(e))}),1e3)}}}},19:function(t,e,n){n(20),t.exports=n(21)},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(0);new Vue({el:"#spin-container",mixins:[r.a],data:{roll:!1,count:0,angle:0,rewardList:[500,1e3,30,200,80,87,7414,13,"下次會更好",55555],isShow:!1,isAlert:!1,isWarn:!1,warnText:"一天只有一次搶券機會，<br>明天也要準時搶券喲!",reward:"",email:"",phone:"",emailError:"",phoneError:""},mounted:function(){this.delayShow(),new Date>new Date("2021/06/18")&&(this.warnText="一天只有一次搶券機會喲~"),document.addEventListener("click",(function(t){this.closeAlert()}))},methods:{spin:function(){if(this.count++,this.count>1)return this.isWarn=!0,!1;var t=Math.floor(Math.random()*this.rewardList.length);this.rotate(t)},rotate:function(t){var e=this;this.roll=!0;var n=this.angle,r=this.rewardList;this.angle=n-n%360+2880+360/r.length*t,console.log(this.angle),setTimeout((function(){e.roll=!1,e.reward=e.rewardList[t],e.isAlert=!0}),4e3)},delayShow:function(){var t=this;setTimeout((function(){t.isShow=!0}),2e3)}}})}});