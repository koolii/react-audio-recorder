(this["webpackJsonpreact-audio-recorder"]=this["webpackJsonpreact-audio-recorder"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(21),l=n.n(c),i=(n(36),n(28)),u=n(8),s=n(22),d=n.n(s),m=function(){var e=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),t=!!window.AudioContext||!!window.webkitAudioContext;return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"User-Agent:")," ",navigator.userAgent),o.a.createElement("li",null,o.a.createElement("b",null,"getUserMedia API:")," ",e?"yes":"no"),o.a.createElement("li",null,o.a.createElement("b",null,"AudioContext:")," ",t?"yes":"no"))},p=n(11),g=n(6),f=n(23),b=n.n(f),h=n(24);!function(e){e[e.Stop=0]="Stop",e[e.Start=1]="Start"}(r||(r={}));var v=function(){var e=Object(a.useState)(r.Stop),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(p.a)(l,2),u=i[0],s=i[1],d=Object(a.useRef)(null);return o.a.createElement(E,null,o.a.createElement(w,null,o.a.createElement(x,{record:n===r.Start,onStop:function(e){var t=b()().format("YYYYMMDDHHmmss");console.log(t),console.log(e);var n=window.URL||window.webkitURL;d.current?(console.log("attach audio BlobURL to DOM"),d.current.src=n.createObjectURL(e.blob)):console.log("can not attach Blob because of audioEl is null"),s(!0)},strokeColor:"white",backgroundColor:"#f14c00",mimeType:"audio/wav"})),o.a.createElement("div",null,"\u518d\u751f\u6642\u9593"),o.a.createElement("input",{type:"button",name:"start",value:"start Recording",onClick:function(){console.log("start"),c(r.Start)}}),o.a.createElement("input",{type:"button",name:"stop",value:"stop Recording",onClick:function(){console.log("stop"),c(r.Stop)}}),o.a.createElement("div",{style:{display:u?"":"none"}},o.a.createElement(R,{ref:d,controls:!0})))},E=g.a.div.withConfig({displayName:"Recording__Record",componentId:"sc-1kgjmd4-0"})(["text-align:center;width:200px;height:160px;padding:20px;border-radius:4px;background-color:#f14c00;color:",";"],"#FFF"),w=g.a.div.withConfig({displayName:"Recording__Status",componentId:"sc-1kgjmd4-1"})(["color:white;"]),x=Object(g.a)(h.a).withConfig({displayName:"Recording__Mic",componentId:"sc-1kgjmd4-2"})(["width:100%;"]),R=g.a.audio.withConfig({displayName:"Recording__Audio",componentId:"sc-1kgjmd4-3"})(["width:100%;margin:10px 0;"]),y=n(5),j=n.n(y),k=n(16),O=n(12),C=n.n(O);console.log(C.a),console.log(O.StereoAudioRecorder);var S=function(){var e=Object(a.useMemo)((function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}),[]),t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useState)(!1),i=Object(p.a)(l,2),u=i[0],s=i[1],d=function(){var e=Object(k.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=2;break}return e.abrupt("return",t.current);case 2:if(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=6;break}throw alert("This browser doesn't supports getUserMedia API."),navigator.getUserMedia&&console.log("This browser uses deprecated getUserMedia API."),new Error("can't use VoiceRecorder Component");case 6:return e.prev=6,e.next=9,navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1}});case 9:return n=e.sent,e.abrupt("return",n);case 13:throw e.prev=13,e.t0=e.catch(6),alert("Unable to capture your microphone."),e.t0;case 17:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var a=Object(k.a)(j.a.mark((function a(o){var c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o.preventDefault(),t.current){a.next=8;break}return a.next=4,d();case 4:if(t.current=a.sent,!e){a.next=8;break}return m(o),a.abrupt("return");case 8:r.current&&(r.current.muted=!0,r.current.srcObject=t.current),c={type:"audio",numberOfAudioChannels:2,checkForInactiveTracks:!0,bufferSize:16384,recorderType:O.StereoAudioRecorder},n.current&&(n.current.destroy(),n.current=null),n.current=C()(t.current,c),console.log(n.current),u||s(!0);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log("useEffect recording: ".concat(u)),console.log("useEffect microphone: ".concat(t.current)),console.log("useEffect recorder: ".concat(n.current)),u&&t.current?(console.log("start recording"),n.current&&n.current.startRecording()):!u&&t.current&&n.current&&"recording"===n.current.state?(console.log("stop recording"),n.current&&n.current.stopRecording((function(){if(console.log("STOP Recording callback"),c.current&&n.current){var e=URL.createObjectURL(n.current.getBlob());console.log(e),c.current.src=e,console.log("resultEl is ready to play")}}))):console.log("something wrong")}),[u,t,n]),console.log("This browser is Safari or not: ".concat(e)),o.a.createElement(A,null,o.a.createElement(_,null,o.a.createElement(I,{name:"start",value:"START",onClick:m}),o.a.createElement(I,{name:"stop",value:"STOP",onClick:function(e){e.preventDefault(),u&&s(!1)}})),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",null,"\u9332\u97f3\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u2193\u306eAudio\u304c\u6709\u52b9\u5316\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u7279\u306b\u518d\u751f\u305b\u305a\u3068\u3082\u9332\u97f3\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u307e\u3059"),o.a.createElement(U,{ref:r,controls:!0})),o.a.createElement("div",null,o.a.createElement("span",null,"\u9332\u97f3\u3057\u305f\u97f3\u58f0\u306f\u2193\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059"),o.a.createElement(U,{ref:c,controls:!0}))))},A=g.a.div.withConfig({displayName:"VoiceRecorder__Container",componentId:"sc-627jdc-0"})(["width:80%;height:300px;display:flex;justify-content:center;flex-direction:column;background-color:#f14c00;margin:0 auto;padding:20px;text-align:center;border-radius:4px;"]),_=g.a.div.withConfig({displayName:"VoiceRecorder__Control",componentId:"sc-627jdc-1"})(["display:flex;justify-content:space-around;"]),U=g.a.audio.withConfig({displayName:"VoiceRecorder__Audio",componentId:"sc-627jdc-2"})(["width:80%;margin:10px 0;"]),I=g.a.input.attrs({type:"button"}).withConfig({displayName:"VoiceRecorder__Button",componentId:"sc-627jdc-3"})(["width:30%;height:30px;background-color:#fff;border-radius:12px;"]),M=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(m,null)),o.a.createElement("div",null,o.a.createElement("h2",null,"1. cleandersonlobo/react-mic"),o.a.createElement(v,null)),o.a.createElement("div",null,o.a.createElement("h2",null,"VoiceRecorder"),o.a.createElement(S,null)))},T=function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"React Audio Recorder"),o.a.createElement("h2",null,"Target"),o.a.createElement("span",null,"iOS/Android"),o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement(M,null)))},D=function(){return o.a.createElement(i.a,null,o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/"},o.a.createElement(u.a,{to:"/top"})),o.a.createElement(u.b,{exact:!0,path:"/top",component:T}),o.a.createElement(u.b,{exact:!0,path:"/samples",component:M}),o.a.createElement(u.b,{path:"*"},o.a.createElement(u.a,{to:"/top"}))))};n(43);var N=function(){return o.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.2deafd42.chunk.js.map