(this["webpackJsonpreact-audio-recorder"]=this["webpackJsonpreact-audio-recorder"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(12),l=n.n(o),i=(n(25),n(13)),u=n.n(i),s=function(){var e=!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),t=!!window.AudioContext||!!window.webkitAudioContext;return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"User-Agent:")," ",navigator.userAgent),c.a.createElement("li",null,c.a.createElement("b",null,"getUserMedia API:")," ",e?"yes":"no"),c.a.createElement("li",null,c.a.createElement("b",null,"AudioContext:")," ",t?"yes":"no"))},d=n(4),m=n(2),p=n(14),g=n.n(p),f=n(15);!function(e){e[e.Stop=0]="Stop",e[e.Start=1]="Start"}(r||(r={}));var b=function(){var e=Object(a.useState)(r.Stop),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(!1),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(a.useRef)(null);return c.a.createElement(v,null,c.a.createElement(h,null,c.a.createElement(E,{record:n===r.Start,onStop:function(e){var t=g()().format("YYYYMMDDHHmmss");console.log(t),console.log(e);var n=window.URL||window.webkitURL;m.current?(console.log("attach audio BlobURL to DOM"),m.current.src=n.createObjectURL(e.blob)):console.log("can not attach Blob because of audioEl is null"),s(!0)},strokeColor:"white",backgroundColor:"#f14c00",mimeType:"audio/wav"})),c.a.createElement("div",null,"\u518d\u751f\u6642\u9593"),c.a.createElement("input",{type:"button",name:"start",value:"start Recording",onClick:function(){console.log("start"),o(r.Start)}}),c.a.createElement("input",{type:"button",name:"stop",value:"stop Recording",onClick:function(){console.log("stop"),o(r.Stop)}}),c.a.createElement("div",{style:{display:u?"":"none"}},c.a.createElement(w,{ref:m,controls:!0})))},v=m.a.div.withConfig({displayName:"Recording__Record",componentId:"sc-1kgjmd4-0"})(["text-align:center;width:200px;height:160px;padding:20px;border-radius:4px;background-color:#f14c00;color:",";"],"#FFF"),h=m.a.div.withConfig({displayName:"Recording__Status",componentId:"sc-1kgjmd4-1"})(["color:white;"]),E=Object(m.a)(f.a).withConfig({displayName:"Recording__Mic",componentId:"sc-1kgjmd4-2"})(["width:100%;"]),w=m.a.audio.withConfig({displayName:"Recording__Audio",componentId:"sc-1kgjmd4-3"})(["width:100%;margin:10px 0;"]),j=n(3),y=n.n(j),R=n(8),k=n(5),x=n.n(k);console.log(x.a),console.log(k.StereoAudioRecorder);var O=function(){var e=Object(a.useMemo)((function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}),[]),t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useRef)(null),o=Object(a.useRef)(null),l=Object(a.useState)(!1),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)([]),p=Object(d.a)(m,2),g=p[0],f=p[1],b=(Object(a.useCallback)((function(e){console.log("New Log: ".concat(e));var t=g.slice();console.log(t),f(t)}),[g]),function(){var e=Object(R.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.current){e.next=2;break}return e.abrupt("return",t.current);case 2:if(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=6;break}throw alert("This browser doesn't supports getUserMedia API."),navigator.getUserMedia&&alert("This browser uses deprecated getUserMedia API."),new Error("can't use VoiceRecorder Component");case 6:return e.prev=6,e.next=9,navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1}});case 9:return n=e.sent,e.abrupt("return",n);case 13:throw e.prev=13,e.t0=e.catch(6),alert("Unable to capture your microphone."),e.t0;case 17:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}()),v=function(){var a=Object(R.a)(y.a.mark((function a(c){var o;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current){a.next=8;break}return a.next=4,b();case 4:if(t.current=a.sent,!e){a.next=8;break}return v(c),a.abrupt("return");case 8:r.current&&(r.current.muted=!0,r.current.srcObject=t.current),o={type:"audio",numberOfAudioChannels:2,checkForInactiveTracks:!0,bufferSize:16384,recorderType:k.StereoAudioRecorder},n.current&&(n.current.destroy(),n.current=null),n.current=x()(t.current,o),alert(n.current),u||s(!0);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){alert("useEffect recording: ".concat(u)),alert("useEffect microphone: ".concat(t.current)),alert("useEffect recorder: ".concat(n.current)),u&&t.current?(alert("start recording"),n.current&&n.current.startRecording()):!u&&t.current&&n.current&&"recording"===n.current.state?(alert("stop recording"),n.current&&n.current.stopRecording((function(){if(alert("STOP Recording callback"),o.current&&n.current){var e=URL.createObjectURL(n.current.getBlob());alert(e),o.current.src=e,alert("resultEl is ready to play")}}))):alert("something wrong")}),[u,t,n,alert]),alert("This browser is Safari or not: ".concat(e)),c.a.createElement(C,null,c.a.createElement(S,null,c.a.createElement(_,{name:"start",value:"START",onClick:v}),c.a.createElement(_,{name:"stop",value:"STOP",onClick:function(e){e.preventDefault(),u&&s(!1)}})),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("span",null,"\u9332\u97f3\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u2193\u306eAudio\u304c\u6709\u52b9\u5316\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u7279\u306b\u518d\u751f\u305b\u305a\u3068\u3082\u9332\u97f3\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u307e\u3059"),c.a.createElement(U,{ref:r,controls:!0})),c.a.createElement("div",null,c.a.createElement("span",null,"\u9332\u97f3\u3057\u305f\u97f3\u58f0\u306f\u2193\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059"),c.a.createElement(A,{ref:o,controls:!0}))),c.a.createElement("div",null,g.map((function(e,t){return c.a.createElement("li",{key:t},e)}))))},C=m.a.div.withConfig({displayName:"VoiceRecorder__Container",componentId:"sc-627jdc-0"})(["width:80%;height:300px;display:flex;justify-content:center;flex-direction:column;background-color:#f14c00;margin:0 auto;padding:20px;text-align:center;border-radius:4px;"]),S=m.a.div.withConfig({displayName:"VoiceRecorder__Control",componentId:"sc-627jdc-1"})(["display:flex;justify-content:space-around;"]),A=m.a.audio.withConfig({displayName:"VoiceRecorder__Audio",componentId:"sc-627jdc-2"})(["width:80%;margin:10px 0;"]),_=m.a.input.attrs({type:"button"}).withConfig({displayName:"VoiceRecorder__Button",componentId:"sc-627jdc-3"})(["width:30%;height:30px;background-color:#fff;border-radius:12px;"]),U=Object(m.a)(A).withConfig({displayName:"VoiceRecorder__HiddenAudio",componentId:"sc-627jdc-4"})(["display:none;"]),I=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(s,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"1. cleandersonlobo/react-mic"),c.a.createElement(b,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"VoiceRecorder"),c.a.createElement(O,null)))},M=function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"React Audio Recorder"),c.a.createElement("h2",null,"Target"),c.a.createElement("span",null,"iOS/Android"),c.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),c.a.createElement(I,null)))};n(31);var N=function(){return c.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1b5bd23d.chunk.js.map