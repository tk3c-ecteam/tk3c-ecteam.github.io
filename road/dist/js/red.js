!function(t){var i={};function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(n,s,function(i){return t[i]}.bind(null,s));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=14)}([function(t,i,e){"use strict";i.a={methods:{closeAlert:function(){this.isShow=!1,this.isAlert=!1,this.isWarn=!1},checkform:function(t){var i=this;if(this.email||(this.emailError="email不能為空!"),this.phone||(this.phoneError="電話不能為空!"),!1===this.checkEmail(this.email)&&(this.emailError="email缺少@格式不正確!"),this.email&&this.phone)return console.log("ok"),this.closeAlert(),setTimeout((function(){i.emailError="",i.phoneError=""}),80),!0;t.preventDefault()},checkEmail:function(t){return!!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)},sendAjaxData:function(){$.ajax({url:"",data:"",type:"json",method:"post",success:function(t){console.log(t)}})}}}},,,,,,,,,,,,,,function(t,i,e){e(15),t.exports=e(17)},function(t,i,e){"use strict";e.r(i);e(16);var n=e(0);new Vue({el:"#envelope-container",mixins:[n.a],data:{rewardList:[500,1e3,80,87,7414],isShow:!1,isAlert:!1,isWarn:!1,warnText:"一天只有一次搶紅包機會，<br>明天也要準時搶紅包喲!",reward:"",email:"",phone:"",emailError:"",phoneError:"",timing:3,active:!1,redImg:"red",count:0},mounted:function(){this.delayShow(),new Date>new Date("2021/06/18")&&(this.warnText="一天只有一次搶紅包機會喲~")},methods:{delayShow:function(){var t=this;setTimeout((function(){t.isShow=!0}),2e3)},goRain:function(){var t=this;this.isShow=!1,$("#particle_canvas").fadeIn();var i=setInterval((function(){t.timing--,0===t.timing&&($("#particle_canvas").hide(),t.active=!0,clearInterval(i))}),1e3)},randomList:function(){return Math.floor(Math.random()*this.rewardList.length)},choice:function(t){var i=this;if(this.count++,this.count>1)return this.isWarn=!0,!1;t.target.src=this.getImgUrl("red_open"),this.reward=this.rewardList[this.randomList()],setTimeout((function(){i.isAlert=!0}),300)},getImgUrl:function(t){return"https://tk3c-ecteam.github.io/road/dist/images/"+t+".png"}}})},function(t,i){function e(){return.001*(new Date).getTime()}function n(t,i){return(t||0)+Math.random()*((i||1)-(t||0))}function s(t,i){this.x=t||0,this.y=i||0,this.add=function(t){this.x+=t.x,this.y+=t.y},this.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)}}window.addEventListener("resize",(function(){r.resize(window.innerWidth,window.innerHeight),r.init("particle_canvas",options)}),!1);var a=!1;function o(t,i,e,n,a,o,r){this.origin=t,this.position=new s(t.x,t.y),this.velocity=i||new s(0,0),this.size=e,this.rspeed=a,this.amplitude=n,this.alpha=o,this.image=r,this.dx=100*Math.random(),this.rotation=360*Math.random(),this.update=function(t){this.dx+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.x=this.origin.x+this.amplitude*Math.sin(this.dx),this.rotation+=this.rspeed*t}}window.innerWidth<1024?window.addEventListener("load",(function(){r.init("particle_canvas",{amount:80,size:[10,40],rotation:[10,0],speed:[150,500],swing:[.5,2],amplitude:[30,80],alpha:[.4,1],images:["http://localhost:5566/piyan/dist/images/red.png","http://localhost:5566/piyan/dist/images/dollar.png","http://localhost:5566/piyan/dist/images/red_open.png"]}),r.start(),window.setTimeout((function(){a=!0}),1e9)}),!1):window.addEventListener("load",(function(){r.init("particle_canvas",{amount:80,size:[12,30],rotation:[1,10],speed:[80,300],swing:[.5,5],amplitude:[60,80],alpha:[.4,1],images:["http://localhost:5566/piyan/dist/images/red.png","http://localhost:5566/piyan/dist/images/dollar.png","http://localhost:5566/piyan/dist/images/red_open.png"]}),r.start(),window.setTimeout((function(){a=!0}),1e9)}),!1);var r={canvas:null,ctx:null,particles:[],running:!1,pImageObjects:[],start_time:0,frame_time:0,init:function(t,i){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.resize(window.innerWidth,window.innerHeight),this.pAmount=i.amount||500,this.pSize=i.size||[8,26],this.pRotation=i.rotation||[-5,5],this.pSwing=i.swing||[.1,1],this.pSpeed=i.speed||[40,100],this.pAmplitude=i.amplitude||[20,50],this.pAlpha=i.alpha||[.25,1],this.pImageNames=i.images||[];for(var e=0;e<this.pImageNames.length;e++){var n=new Image;n.src=this.pImageNames[e],this.pImageObjects.push(n)}this._init_particles()},start:function(){this.running=!0,this.start_time=this.frame_time=e(),this._loop()},stop:function(){this.running=!1},resize:function(t,i){this.canvas.width=t,this.canvas.height=i},_loop:function(){r.running&&(r._clear(),r._update(),r._draw(),r._queue())},_init_particles:function(){this.particles.length=0;for(var t=0;t<this.pAmount;t++){var i=new s(n(0,this.canvas.width),n(-this.canvas.height,0)),e=new s(n(this.pSwing[0],this.pSwing[1]),n(this.pSpeed[0],this.pSpeed[1])),a=n(this.pSize[0],this.pSize[1]),r=n(this.pAmplitude[0],this.pAmplitude[1]),h=n(this.pRotation[0],this.pRotation[1])*(Math.random()<.5?-1:1),c=n(this.pAlpha[0],this.pAlpha[1]),l=this.pImageObjects.length>0?(p=0,u=this.pImageObjects.length-1,Math.floor((p||0)+Math.random()*((u+1||100)-(p||0)))):-1;this.particles.push(new o(i,e,a,r,h,c,l))}var p,u},_update:function(){for(var t=e(),i=t-this.frame_time,n=0;n<this.particles.length;n++){var s=this.particles[n];s.update(i),s.position.y-s.size>this.canvas.height&&(a||(s.position.y=2*-s.size,s.position.x=s.origin.x=Math.random()*this.canvas.width))}this.frame_time=t},_draw:function(){this.ctx.fillStyle="rgb(255,255,255)";for(var t=0;t<this.particles.length;t++){var i=this.particles[t],e=-i.size/2;this.ctx.save(),this.ctx.translate(i.position.x,i.position.y),this.ctx.rotate(i.rotation),this.ctx.globalAlpha=this.particles[t].alpha,-1==i.image?this.ctx.fillRect(e,e,i.size,i.size):this.ctx.drawImage(this.pImageObjects[i.image],e,e,i.size,i.size),this.ctx.restore()}},_clear:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},_queue:function(){window.requestAnimationFrame(r._loop)}}},function(t,i,e){}]);