!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=27)}({27:function(e,t,r){r(28),e.exports=r(29)},28:function(e,t){new Vue({el:"#envelope-container",data:{rewardList:[0,10,50,100],isShow:!1,isAlert:!1,isWarn:!1,reward:"",email:"",phone:"",emailError:"",phoneError:"",timing:3,active:!1,redImg:"red",count:0,rewardImg:"",alertImg:"",isRule:!1},mounted:function(){var e=new Date,t=(new Date("2021/06/07 10:00:00"),new Date("2021/06/18"));this.delayShow(),this.alertImg=this.getImgUrl("red_alert"),e>t&&(this.alertImg=this.getImgUrl("red_alert_end"))},methods:{delayShow:function(){var e=this;setTimeout((function(){e.isShow=!0}),2e3)},closeAlert:function(){if("detail"==event.target.getAttribute("class"))return!1;this.isShow=!1,this.isAlert=!1,this.isWarn=!1,$("#alert-group").css("overflow-y","none"),$("body").css("overflow-y","auto")},randomList:function(){return Math.floor(Math.random()*this.rewardList.length)},choice:function(e){var t=this;if(this.count++,this.count>1)return this.isWarn=!0,!1;e.target.src=this.getImgUrl("red_open"),this.reward=this.rewardList[this.randomList()],this.getRewardImg(this.reward),setTimeout((function(){t.isAlert=!0}),300)},goRain:function(){var e=this;this.isShow=!1,$("#particle_canvas").fadeIn();var t=setInterval((function(){e.timing--,0===e.timing&&($("#particle_canvas").hide(),e.active=!0,clearInterval(t))}),1e3)},checkform:function(e){var t=this;if(this.email||(this.emailError="email不能為空!"),this.phone||(this.phoneError="電話不能為空!"),!1===this.checkEmail(this.email)&&(this.emailError="email缺少@格式不正確!"),this.email&&this.phone)return this.closeAlert(),this.goRain(),setTimeout((function(){t.emailError="",t.phoneError=""}),80),!0;e.preventDefault()},checkEmail:function(e){return!!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},sendAjaxData:function(){$.ajax({url:"",data:"",type:"json",method:"post",success:function(e){console.log(e)}})},getImgUrl:function(e){return"https://tk3c-ecteam.github.io/road/dist/images/"+e+".png"},getRewardImg:function(e){switch(e){case 0:this.rewardImg=this.getImgUrl("bg_0");break;case 10:this.rewardImg=this.getImgUrl("bg_10");break;case 50:this.rewardImg=this.getImgUrl("bg_50");break;case 100:this.rewardImg=this.getImgUrl("bg_100")}},seeRule:function(){this.isRule=!0,$("#alert-group").css("overflow-y","scroll"),$("body").css("overflow-y","none")}}})},29:function(e,t,r){}});