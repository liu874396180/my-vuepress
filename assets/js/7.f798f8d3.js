(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,n,t){"use strict";t.r(n);t(122),t(123);var o=t(59),s=t(40).Realtime,a=t(126),r=a.TypedMessagesPlugin,i=(a.ImageMessage,t(40).TextMessage),u=t(40).Event,c=new s({appId:"ce8s8IGHnBopEyXPMfj2s3mc-gzGzoHsz",appKey:"UlsvBoLhhGz55ku5XG6qBbD0",plugins:[r]}),l={name:"masg",data:function(){return{listdata:[],msg:"",username:"",password:"",user:""}},watch:{user:function(e,n){console.log(e)}},methods:{sinup:function(){c.createIMClient("Tom").then(function(e){return e.createConversation({members:["Jerry","Bob","Harry","William"],name:"Tom & Jerry & friends",unique:!0})}).then(function(e){return e.send(new i("你们在哪儿？"))}).then(function(e){console.log("发送成功！")}).catch(console.error)},login:function(){c.createIMClient("Bob").then(function(e){e.on(u.MESSAGE,function(e,n){console.log("[Bob] received a message from ["+e.from+"]: "+e.text),n.send(new i("@Tom，我在 Jerry 家，你跟 Harry 什么时候过来？还有 William 和你在一起么？"))})}).catch(console.error)},send:function(){c.createIMClient(this.user).then(function(e){return e.createConversation({members:["Jerry"],name:"Tom & Jerry",unique:!0})}).then(function(e){return e.send(new i("耗子，起床！"))}).then(function(e){console.log("Tom & Jerry","发送成功！")}).catch(console.error)},tocreat:function(){}},mounted:function(){o.init({appId:"ce8s8IGHnBopEyXPMfj2s3mc-gzGzoHsz",appKey:"UlsvBoLhhGz55ku5XG6qBbD0"});new s({appId:"ce8s8IGHnBopEyXPMfj2s3mc-gzGzoHsz",appKey:"UlsvBoLhhGz55ku5XG6qBbD0",plugins:[r]})}},m=t(0),p=Object(m.a)(l,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"vhesakei"}},[t("ul",e._l(e.listdata,function(n,o){return t("li",{key:o},[e._v("登录用户为"+e._s(n.name)+"---接受消息："+e._s(n.msg))])}),0),e._v(" "),t("button",{on:{click:e.send}},[e._v("send")]),e._v(" "),t("br"),e._v(" "),t("form",[t("div",{staticClass:"form-item"},[t("label",{attrs:{for:""}},[e._v("账户：")]),e._v(" "),t("div",{staticClass:"input-area"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"",id:"",value:""},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}})])]),e._v(" "),t("div",{staticClass:"form-item"},[t("label",{attrs:{for:""}},[e._v("密码：")]),e._v(" "),t("div",{staticClass:"input-area"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",name:"",id:"",value:""},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}})])])]),e._v(" "),t("button",{on:{click:e.sinup}},[e._v("sinup")]),e._v(" "),t("button",{on:{click:e.login}},[e._v("login")])])},[],!1,null,null,null);n.default=p.exports}}]);