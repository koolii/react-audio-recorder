(this["webpackJsonpreact-audio-recorder"]=this["webpackJsonpreact-audio-recorder"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n,o=a(0),c=a.n(o),r=a(19),l=a.n(r),i=(a(33),a(13)),u=a(6),d=a(20),m=a.n(d),s=function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"React Audio Recorder"),c.a.createElement("h2",null,"Target"),c.a.createElement("span",null,"iOS/Android"),c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),c.a.createElement(i.b,{to:"/react-audio-recorder/samples"},"CLICK HERE")))},p=a(9),g=function(){var e=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),t=!!window.AudioContext||!!window.webkitAudioContext;return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"User-Agent:")," ",navigator.userAgent),c.a.createElement("li",null,c.a.createElement("b",null,"getUserMedia API:")," ",e?"yes":"no"),c.a.createElement("li",null,c.a.createElement("b",null,"AudioContext:")," ",t?"yes":"no"))},E=a(11),b=a(22),h=a.n(b),v=a(23);!function(e){e[e.Stop=0]="Stop",e[e.Start=1]="Start"}(n||(n={}));var f=function(){var e=Object(o.useState)(n.Stop),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(o.useState)(!1),i=Object(p.a)(l,2),u=i[0],d=i[1],m=Object(o.useRef)(null);return c.a.createElement(w,null,c.a.createElement(k,null,c.a.createElement(R,{record:a===n.Start,onStop:function(e){var t=h()().format("YYYYMMDDHHmmss");console.log(t),console.log(e);var a=window.URL||window.webkitURL;m.current?(console.log("attach audio BlobURL to DOM"),m.current.src=a.createObjectURL(e.blob)):console.log("can not attach Blob because of audioEl is null"),d(!0)},strokeColor:"white",backgroundColor:"#f14c00",mimeType:"audio/wav"})),c.a.createElement("div",null,"\u518d\u751f\u6642\u9593"),c.a.createElement("input",{type:"button",name:"start",value:"start Recording",onClick:function(){console.log("start"),r(n.Start)}}),c.a.createElement("input",{type:"button",name:"stop",value:"stop Recording",onClick:function(){console.log("stop"),r(n.Stop)}}),c.a.createElement("div",{style:{display:u?"":"none"}},c.a.createElement(x,{ref:m,controls:!0})))},w=E.a.div.withConfig({displayName:"Recording__Record",componentId:"sc-1kgjmd4-0"})(["text-align:center;width:200px;height:160px;padding:20px;border-radius:4px;background-color:#f14c00;color:",";"],"#FFF"),k=E.a.div.withConfig({displayName:"Recording__Status",componentId:"sc-1kgjmd4-1"})(["color:white;"]),R=Object(E.a)(v.a).withConfig({displayName:"Recording__Mic",componentId:"sc-1kgjmd4-2"})(["width:100%;"]),x=E.a.audio.withConfig({displayName:"Recording__Audio",componentId:"sc-1kgjmd4-3"})(["width:100%;margin:10px 0;"]),S=function(){var e=Object(o.useState)(!1),t=Object(p.a)(e,2);t[0],t[1];return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(g,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"1. cleandersonlobo/react-mic"),c.a.createElement(f,null)))},j=function(){return c.a.createElement(i.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"".concat("","/")},c.a.createElement(u.b,{path:"".concat("","/top")})),c.a.createElement(u.b,{exact:!0,path:"".concat("","/top"),component:s}),c.a.createElement(u.b,{exact:!0,path:"".concat("","/samples"),component:S}),c.a.createElement(u.b,{path:"*"},c.a.createElement(u.a,{to:"/react-audio-recorder/top"}))))};a(41);var y=function(){return c.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b35f4085.chunk.js.map