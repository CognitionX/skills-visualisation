module.exports=function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=24)}([function(e,t){e.exports=require("react")},function(e,t,s){var i=s(17);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};s(19)(i,r);i.locals&&(e.exports=i.locals)},function(e,t){e.exports=require("three/src/math/Color.js")},function(e,t){e.exports=require("three/src/math/Vector2.js")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("three/src/math/Vector3.js")},function(e,t){e.exports=require("reselect")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("three/src/renderers/WebGLRenderer.js")},function(e,t){e.exports=require("three/src/scenes/Scene.js")},function(e,t){e.exports=require("three/src/cameras/PerspectiveCamera.js")},function(e,t){e.exports=require("three/src/objects/Mesh.js")},function(e,t){e.exports=require("three/src/geometries/CircleGeometry.js")},function(e,t){e.exports=require("three/src/materials/MeshBasicMaterial.js")},function(e,t){e.exports=require("three/src/core/Raycaster.js")},function(e,t){e.exports=require("polylinear-scale")},function(e,t){e.exports=require("eventemitter3")},function(e,t,s){(t=e.exports=s(18)(!1)).push([e.i,"._1s0OEhJj1LcYhiSd1QguXE{font-family:'proxima-nova', sans-serif;font-size:16px;font-weight:300;line-height:1.3;color:#444444;display:flex;background:#F6F6F6;padding:15px 0px;box-sizing:border-box}._3NkwkHfeT6Rp-XYhurDGx9{flex-grow:1;position:relative;border-top:solid 1px #444444;border-bottom:solid 1px #444444}._1lRpQkOnjz01QedaSHy5yY{position:absolute;width:30px;height:30px;top:-15px;left:0;padding-right:15px;box-sizing:content-box}._3NkwkHfeT6Rp-XYhurDGx9 canvas{position:absolute;top:0;left:0}._1-jwqTia_zdvvp6LYoiA55{flex-grow:0;flex-shrink:1;flex-basis:400px;margin-left:40px;font-size:1rem;font-weight:500;background:#F6F6F6;z-index:100;text-align:left;border-top:solid 6px #444444;border-bottom:solid 1px #444444;overflow-y:auto}._1-jwqTia_zdvvp6LYoiA55 h1{font-weight:600;font-size:1.6rem;margin:20px 0px 30px 0px}._1-jwqTia_zdvvp6LYoiA55 h2{font-weight:600;font-size:1rem;margin:0px 0px 8px 0px}._16K3AfjduT6sX5zeqMyaEh{display:block;color:#0096ff;font-size:0.9rem;margin:0 0 20px 0;height:0px;overflow:hidden;transition:height cubic-bezier(0.08, 0.74, 0.41, 1) 0.4s}._16K3AfjduT6sX5zeqMyaEh.enabled{height:20px}._16K3AfjduT6sX5zeqMyaEh:hover{cursor:pointer}._1ikcEMOf4mbk-O-Xk1zasy{display:flex;justify-content:space-between}._3As3LGKmy0mOF9rg6eQMGV{z-index:2;width:20px;height:20px;background-repeat:no-repeat}._1CPdmAXIm8YoGtDIubfpuH{border-top:solid 1px #444444;padding:40px 0px 40px 0px}._1IPxoY07NBVOTcl8uZpquK{margin-bottom:10px;display:flex;justify-content:space-between}._3veko3isg7mthhyenBmA9i{flex-grow:1;margin:auto 20px}._3veko3isg7mthhyenBmA9i hr{border:0;height:0;margin:0;border-bottom:1px solid rgba(70,70,70,0.3)}\n",""]),t.locals={section:"_1s0OEhJj1LcYhiSd1QguXE","canvas-container":"_3NkwkHfeT6Rp-XYhurDGx9","canvas-container__logo":"_1lRpQkOnjz01QedaSHy5yY",nav:"_1-jwqTia_zdvvp6LYoiA55","nav__back-to-main":"_16K3AfjduT6sX5zeqMyaEh","nav__sub-header":"_1ikcEMOf4mbk-O-Xk1zasy","nav__user-logo":"_3As3LGKmy0mOF9rg6eQMGV",list:"_1CPdmAXIm8YoGtDIubfpuH",skill:"_1IPxoY07NBVOTcl8uZpquK",skill__line:"_3veko3isg7mthhyenBmA9i"}},function(e,t,s){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s=e[1]||"",i=e[3];if(!i)return s;if(t&&"function"==typeof btoa){var r=(o=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),n=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[s].concat(n).concat([r]).join("\n")}var o,a,c;return[s].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(s,"}"):s})).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var n=this[r][0];null!=n&&(i[n]=!0)}for(var o=0;o<e.length;o++){var a=e[o];null!=a[0]&&i[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="(".concat(a[2],") and (").concat(s,")")),t.push(a))}},t}},function(e,t,s){"use strict";var i,r={},n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}();function a(e,t){for(var s=[],i={},r=0;r<e.length;r++){var n=e[r],o=t.base?n[0]+t.base:n[0],a={css:n[1],media:n[2],sourceMap:n[3]};i[o]?i[o].parts.push(a):s.push(i[o]={id:o,parts:[a]})}return s}function c(e,t){for(var s=0;s<e.length;s++){var i=e[s],n=r[i.id],o=0;if(n){for(n.refs++;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(h(i.parts[o],t))}else{for(var a=[];o<i.parts.length;o++)a.push(h(i.parts[o],t));r[i.id]={id:i.id,refs:1,parts:a}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=s.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(s){t.setAttribute(s,e.attributes[s])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var L,M=(L=[],function(e,t){return L[e]=t,L.filter(Boolean).join("\n")});function l(e,t,s,i){var r=s?"":i.css;if(e.styleSheet)e.styleSheet.cssText=M(t,r);else{var n=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function C(e,t,s){var i=s.css,r=s.media,n=s.sourceMap;if(r&&e.setAttribute("media",r),n&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var w=null,j=0;function h(e,t){var s,i,r;if(t.singleton){var n=j++;s=w||(w=u(t)),i=l.bind(null,s,n,!1),r=l.bind(null,s,n,!0)}else s=u(t),i=C.bind(null,s,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=n());var s=a(e,t);return c(s,t),function(e){for(var i=[],n=0;n<s.length;n++){var o=s[n],u=r[o.id];u&&(u.refs--,i.push(u))}e&&c(a(e,t),t);for(var L=0;L<i.length;L++){var M=i[L];if(0===M.refs){for(var l=0;l<M.parts.length;l++)M.parts[l]();delete r[M.id]}}}}},function(e,t){e.exports=require("three/src/lights/AmbientLight.js")},function(e,t){e.exports=require("three/src/objects/Line.js")},function(e,t){e.exports=require("three/src/core/Geometry.js")},function(e,t){e.exports=require("three/src/materials/LineBasicMaterial.js")},function(e,t,s){"use strict";s.r(t);var i=s(4),r=s.n(i),n=s(0),o=s.n(n),a=s(1),c=s.n(a),u=s(7),L=s.n(u);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}const l=({term:e,freq:t,total:s})=>o.a.createElement("div",{className:c.a.skill},o.a.createElement("div",{className:c.a.skill__term},e),o.a.createElement("div",{className:c.a.skill__line},o.a.createElement("hr",null)),o.a.createElement("div",{className:c.a.skill__freq},t));var C=({skillList:e,focused:t,onBackToMainClick:s})=>0===e.length?o.a.createElement("nav",{className:c.a.nav},o.a.createElement("h1",null,"Skills available in your Knowledge Network"),o.a.createElement("div",{className:c.a.list},o.a.createElement("div",null,"Here are all the skills available in your organisation’s Knowledge Network, visualised as clusters based on relatedness. ",o.a.createElement("br",null),o.a.createElement("br",null),"Each cluster is dynamically generated based on how often skills occur together on user profiles. Note that clusters are *not* based on existing structures within your organisation such as departments or teams.",o.a.createElement("br",null),o.a.createElement("br",null),"The distance between clusters indicates how closely related the skills in the clusters are. Overlaps indicate that some skills are shared between clusters.",o.a.createElement("br",null),o.a.createElement("br",null),"The size of a cluster indicates how many people there are in your network with the cluster’s skills.",o.a.createElement("br",null),o.a.createElement("br",null),"If you hover over a cluster, the individual skills within it will appear on the right, ordered by frequency."))):o.a.createElement("nav",{className:c.a.nav},o.a.createElement("h1",null,e.slice(0,2).map(e=>e.term).join(", ")),o.a.createElement("a",{onClick:s,className:L()(c.a["nav__back-to-main"],{enabled:t})},"< Back to main"),o.a.createElement("div",{className:c.a["nav__sub-header"]},o.a.createElement("h2",null,"Skills:"),o.a.createElement("div",{className:c.a["nav__user-logo"],style:{backgroundImage:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOCAyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojNTg1ODU4O3N0cm9rZTojNTg1ODU4O30KCS5zdDF7ZmlsbDojRjFGMUYxO30KPC9zdHlsZT4KPHRpdGxlPkdyb3VwIDI8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IlNraWxscy1WaXN1YWxpc2F0aW9uIj4KCTxnIGlkPSJFY29ub21pY3Nfb25faG92ZXItQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MzAuMDAwMDAwLCAtMjkyLjAwMDAwMCkiPgoJCTxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODI5LjE4NzUwMCwgMjkyLjAwMDAwMCkiPgoJCQk8ZWxsaXBzZSBpZD0iT3ZhbCIgY2xhc3M9InN0MCIgY3g9IjE0LjgiIGN5PSIxMy41IiByeD0iMTMuNSIgcnk9IjEzIi8+CgkJCTxwYXRoIGlkPSJDb21iaW5lZC1TaGFwZSIgY2xhc3M9InN0MSIgZD0iTTE1LDE1YzEuNiwwLDIuOSwwLjIsNCwwLjdjMC45LDAuNCwxLjYsMSwyLjEsMS43YzAuOSwxLjIsMC45LDIuNCwwLjksMi41CgkJCQljMCwwLjYtMC40LDEuMS0xLDEuMWwtMC4xLDBIOS4xYy0wLjYsMC0xLTAuNC0xLjEtMWwwLTAuMWMwLTAuMiwwLjEtMS4zLDAuOS0yLjRjMC41LTAuNywxLjItMS4zLDIuMS0xLjcKCQkJCUMxMi4xLDE1LjIsMTMuNCwxNSwxNSwxNXogTTE1LDZjMi4yLDAsNC4xLDEuOSw0LjEsNC4xcy0xLjgsNC4xLTQuMSw0LjFzLTQuMS0xLjktNC4xLTQuMVMxMi44LDYsMTUsNnoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==)"}})),o.a.createElement("div",{className:c.a.list},e.map(e=>o.a.createElement(l,M({key:e.term},e))))),w=s(8),j=s(9),h=(s(20),s(2)),d=s(10),x=s(5),N=s(11),g=(s(21),s(12)),p=(s(22),s(23),s(13)),I=s(14),y=s(3);class m{constructor(e){const{x:t,y:s}=e||{x:999999,y:999999};this.position=new y.Vector2(t,s),this.intersectObject=void 0}set intersect(e){this.intersectObject=e}get intersect(){return this.intersectObject}}var T=s(15),D=s.n(T);const f=e=>{const t=window.getComputedStyle(e),s=t.getPropertyValue("width"),i=t.getPropertyValue("height"),{top:r,left:n,bottom:o,right:a}=e.getBoundingClientRect();return{width:parseInt(s),height:parseInt(i),top:r,left:n,bottom:o,right:a}},z=(e,t)=>e.reduce((e,s)=>{const i=D()([Math.min(...s),Math.max(...s)],t);return e.concat([s.map(e=>i(e))])},[]);var k=s(16),b=s.n(k);class Q{static get color(){return new h.Color("#666666")}static get hightlightedColor(){return new h.Color("#0096ff")}static get opacity(){return.3}static get hightlightedOpacity(){return.8}static get disabledOpacity(){return.1}get radius(){return this.freq}constructor(e){const{x:t,y:s,topic:i,freq:r}=e;this.position=new y.Vector2(t,s),this.topic=i,this.freq=r,this.disabled=!1}disable(){this.disabled=!0}enable(){this.disabled=!1}}class S extends b.a{constructor({canvas:e,canvasContainer:t,clusters:s}){super(),this.canvas=e,this.canvasContainer=t,this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.canvasContainer.addEventListener("mouseup",this.onMouseUp,!1),this.canvasContainer.addEventListener("mousemove",this.onMouseMove,!1);this.renderer=new w.WebGLRenderer({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(2),this.scene=new j.Scene,this.camera=new d.PerspectiveCamera(70,1,1,1e5),this.camera.lookAt(new x.Vector3(0,0,0)),this.camera.position.z=2,this.clusters=[],s.forEach(e=>{const t=new N.Mesh(new g.CircleGeometry(e.radius,64),new p.MeshBasicMaterial({color:6710886,opacity:.3,transparent:!0}));t.position.set(e.position.x,e.position.y,-e.radius/100),t.userData=e,this.clusters.push(t),this.scene.add(t)}),this.raycaster=new I.Raycaster,this.mouse=new m,this.render=this.render.bind(this),this.animate=this.animate.bind(this)}start(){this.animate()}onMouseMove(e){e.preventDefault();const{left:t,top:s,right:i,bottom:r}=f(this.canvasContainer);this.mouse.position.set((e.clientX-t)/(i-t)*2-1,-(e.clientY-s)/(r-s)*2+1);const n=this.mouse.intersect;n&&!n.object.userData.disabled?(this.emit("object-hover",n.object.userData),document.body.style.cursor="pointer"):document.body.style.cursor="default"}onMouseUp(){const e=this.mouse.intersect;if(e&&!e.object.userData.disabled){const{userData:e}=this.mouse.intersect.object;this.emit("object-click",e)}else this.emit("background-click")}onResize(){const{left:e,top:t,right:s,bottom:i}=f(this.canvasContainer),r=s-e,n=i-t;this.canvas.width=r,this.canvas.height=n,this.camera.aspect=r/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,n),this.render()}toScreenPosition(e,t){const s=new x.Vector3,i=.5*this.canvas.width,r=.5*this.canvas.height;return e.updateMatrixWorld(),s.setFromMatrixPosition(e.matrixWorld),s.project(t),s.x=s.x*i+i,s.y=-s.y*r+r,{x:s.x,y:s.y}}animate(e){this.render(e),this.timeout=setTimeout(()=>{this.raf=requestAnimationFrame(this.animate)},1e3/30)}render(e){this.raycaster.setFromCamera(this.mouse.position,this.camera);const t=this.raycaster.intersectObjects(this.clusters);this.mouse.intersect=t[0],this.renderer.render(this.scene,this.camera)}focus(e){this.clusters.forEach(t=>{t.userData.topic===e?t.userData.enable():(t.userData.disable(),t.material.opacity=Q.disabledOpacity)})}select(e){this.clusters.forEach(t=>{const s=new h.Color("#0096ff"),i=new h.Color("#666666"),r=e==t.userData.topic?s:i,n=e==t.userData.topic?.8:.3;t.material.color.equals(r)||(t.material.color=r,t.material.opacity=n)})}deselect(){this.clusters.forEach(e=>{const t=new h.Color("#666666");e.material.color=t,e.material.opacity=.3,e.userData.enable()})}destory(){clearTimeout(this.timeout),cancelAnimationFrame(this.raf),this.canvasContainer.removeEventListener("mouseup",this.onMouseUp),this.canvasContainer.removeEventListener("mousemove",this.onMouseMove),this.renderer.context=null,this.renderer.domElement=null,this.renderer=null}getElement(){return this.canvas}}var v=s(6);class E{constructor(e){const{term:t,freq:s,total:i}=e;this.term=t,this.freq=s,this.total=i}}const O=e=>e.tinfo,G=e=>{const t=(e=>Object(v.createSelector)(O,t=>{const s=t.Category,i="Topic"+e;return[s.indexOf(i),s.lastIndexOf(i)]}))(e);return Object(v.createSelector)(O,t,(t,s)=>{if(!e)return[];const[i,r]=s,n=[];for(let e=i;e<r;e++)n.push(new E({term:t.Term[e],freq:t.Freq[e],total:t.Total[e]}));return n.sort((e,t)=>t.freq-e.freq)})};var Y="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDQ0NTQ1O30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojNDQ0NTQ1O30KPC9zdHlsZT4KPHRpdGxlPkNvZ1hfbG9nbzI8L3RpdGxlPgo8ZyBpZD0iTGF5ZXJfMl8xXyI+Cgk8ZyBpZD0iTGF5ZXJfMS0yIj4KCQk8Zz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMsMGMtMC42LDAtMSwwLjQtMSwxczAuNCwxLDEsMWM2LjYsMCw5LDIuNyw5LDV2MTQuNGMtMS44LTMuNy00LjctNi41LTguNC05LjIKCQkJCQkJYy0wLjQtMC4zLTEuMS0wLjItMS40LDAuMnMtMC4yLDEuMSwwLjIsMS40YzQuOCwzLjUsOCw2LjksOS4xLDEyLjRjLTEuMS0wLjUtMi40LTAuNy0zLjYtMC44Yy00LjksMC4yLTkuMywyLjgtMTEuOCw3CgkJCQkJCWMtMC4zLDAuNS0wLjEsMS4xLDAuMywxLjRzMS4xLDAuMSwxLjQtMC4zYzIuMS0zLjYsNS45LTUuOSwxMC4xLTYuMWMxLjQsMC4xLDIuOCwwLjQsNCwxLjFDMzIsMjkuMywzMiwzMC4xLDMyLDMxdjguNwoJCQkJCQlDMjQuMiw1MC41LDE3LjEsNTYsMTEsNTZjLTIuOSwwLTQuOS0wLjgtNS45LTIuM0MzLjksNTIsMy45LDQ5LjQsNSw0Ni4zbC0xLjktMC43Yy0xLjMsMy43LTEuMiw3LDAuNCw5LjJTNy40LDU4LDExLDU4CgkJCQkJCWM2LjUsMCwxMy4zLTQuOSwyMS0xNXYxOWMwLDIuNC0wLjksOC05LDhjLTUuMiwwLTguNy00LjQtMTAuNi02LjhsLTAuNy0wLjhjLTAuNC0wLjQtMS0wLjUtMS40LTAuMXMtMC41LDEtMC4xLDEuNAoJCQkJCQljMC4yLDAuMiwwLjQsMC41LDAuNiwwLjhDMTMsNjcuMSwxNi44LDcyLDIzLDcyYzguMSwwLDExLTUuMiwxMS0xMFY3QzM0LDMuOCwzMS4xLDAsMjMsMHoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOSwzMGMwLjIsMCwwLjMsMCwwLjUtMC4xYzUuNC0zLDguMS02LjIsOC4xLTkuNGMwLTIuNi0xLjQtNC4xLTIuNy01LjRjLTEtMS4xLTEuOS0yLTEuOS0zLjQKCQkJCQkJYzAtMiwxLTIuOCwyLjYtNC4yYzAuNy0wLjYsMS40LTEuMiwyLjEtMS45YzAuNC0wLjQsMC40LTEsMC0xLjRzLTEtMC40LTEuNCwwQzE1LjcsNC45LDE1LDUuNSwxNC40LDZDMTIuNiw3LjQsMTEsOC44LDExLDExLjcKCQkJCQkJYzAsMi4yLDEuMywzLjYsMi40LDQuOHMyLjEsMi4yLDIuMSw0cy0xLjIsNC40LTcsNy42QzgsMjguNCw3LjksMjksOC4xLDI5LjVDOC4zLDI5LjgsOC43LDMwLDksMzB6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjgsNDJIMTNjMC42LDAuMSwxLTAuMywxLjEtMC45YzAuMS0wLjYtMC4zLTEtMC45LTEuMUM3LjYsMzguOSwyLDM0LjQsMiwyOGMwLTMuMSwxLjgtNS44LDMuOC04LjQKCQkJCQkJYzAuMy0wLjQsMC4yLTEuMS0wLjItMS40Yy0wLjQtMC4zLTEuMS0wLjItMS40LDAuMkMyLjEsMjEuMiwwLDI0LjIsMCwyOEMwLDM1LjUsNi40LDQwLjcsMTIuOCw0MnoiLz4KCQkJCTwvZz4KCQkJCTxwYXRoIGlkPSJGaWxsLTM3IiBjbGFzcz0ic3QxIiBkPSJNMjQsMThjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzI2LjIsMTgsMjQsMTgiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTUzIiBjbGFzcz0ic3QxIiBkPSJNMTYsMTBjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzE4LjIsMTAsMTYsMTAiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTU3IiBjbGFzcz0ic3QxIiBkPSJNMTIsNDRjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzE0LjIsNDQsMTIsNDQiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTU5IiBjbGFzcz0ic3QxIiBkPSJNMjQsNDJjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzI2LjIsNDIsMjQsNDIiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTYxIiBjbGFzcz0ic3QxIiBkPSJNNiwyMmMtMi4yLDAtNC0xLjgtNC00czEuOC00LDQtNHM0LDEuOCw0LDRTOC4yLDIyLDYsMjIiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTYzIiBjbGFzcz0ic3QxIiBkPSJNMjQsNjZjLTIuMiwwLTQtMS44LTQtNGMwLTIuMiwxLjgtNCw0LTRzNCwxLjgsNCw0QzI4LDY0LjIsMjYuMiw2NiwyNCw2NiIvPgoJCQkJPHBhdGggaWQ9IkZpbGwtNTUiIGNsYXNzPSJzdDEiIGQ9Ik00LDUyYy0yLjIsMC00LTEuOC00LTRzMS44LTQsNC00czQsMS44LDQsNFM2LjIsNTIsNCw1MiIvPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5LDcyYzAuNiwwLDEtMC40LDEtMXMtMC40LTEtMS0xYy02LjYsMC05LTIuNy05LTVWNTAuNmMxLjgsMy43LDQuNyw2LjUsOC40LDkuMgoJCQkJCQljMC40LDAuMywxLjEsMC4yLDEuNC0wLjJjMC4zLTAuNCwwLjItMS4xLTAuMi0xLjRjLTQuOC0zLjUtOC02LjktOS4xLTEyLjRjMS4xLDAuNSwyLjQsMC43LDMuNiwwLjhjNC45LTAuMiw5LjMtMi44LDExLjgtNwoJCQkJCQljMC4zLTAuNSwwLjEtMS4xLTAuMy0xLjRjLTAuNS0wLjMtMS4xLTAuMS0xLjQsMC4zbDAsMGMtMi4xLDMuNi01LjksNS45LTEwLjEsNi4xYy0xLjQtMC4xLTIuOC0wLjQtNC0xLjEKCQkJCQkJYzAtMC44LTAuMS0xLjYtMC4xLTIuNXYtOC43QzQ3LjgsMjEuNSw1NC45LDE2LDYxLDE2YzIuOSwwLDQuOSwwLjgsNS45LDIuM2MxLjIsMS43LDEuMiw0LjMsMC4xLDcuNGwxLjksMC43CgkJCQkJCWMxLjMtMy43LDEuMi03LTAuNC05LjJTNjQuNiwxNCw2MSwxNGMtNi41LDAtMTMuMyw0LjktMjEsMTVWMTBjMC0yLjQsMC45LTgsOS04YzUuMiwwLDguNyw0LjQsMTAuNSw2LjhsMC43LDAuOQoJCQkJCQljMC40LDAuNCwxLDAuNSwxLjQsMC4xczAuNS0xLDAuMS0xLjRjLTAuMi0wLjItMC40LTAuNS0wLjctMC44QzU5LDQuOSw1NS4yLDAsNDksMGMtOC4xLDAtMTEsNS4yLTExLDEwdjU1CgkJCQkJCUMzOCw2OC4yLDQwLjksNzIsNDksNzJ6Ii8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzLDQyYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy01LjMsMy04LjEsNi4yLTguMSw5LjRjMCwyLjYsMS40LDQuMSwyLjcsNS40YzEuMSwxLjEsMS45LDEuOSwxLjksMy40CgkJCQkJCWMwLDItMSwyLjgtMi42LDQuMmMtMC43LDAuNi0xLjQsMS4yLTIuMSwxLjljLTAuNCwwLjQtMC40LDEsMCwxLjRzMSwwLjQsMS40LDBjMC42LTAuNiwxLjMtMS4yLDEuOS0xLjcKCQkJCQkJYzEuNy0xLjQsMy4zLTIuOCwzLjMtNS43YzAtMi4yLTEuMy0zLjYtMi40LTQuOHMtMi4xLTIuMi0yLjEtNGMwLTEuNywxLjItNC40LDctNy42YzAuNS0wLjMsMC42LTAuOSwwLjQtMS40CgkJCQkJCUM2My43LDQyLjIsNjMuMyw0Miw2Myw0MnoiLz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTkuMiwzMEg1OWMtMC42LTAuMS0xLDAuMy0xLjEsMC45czAuMywxLDAuOSwxLjFDNjQuNCwzMy4xLDcwLDM3LjYsNzAsNDRjMCwzLjEtMS44LDUuOC0zLjgsOC40CgkJCQkJCWMtMC4zLDAuNC0wLjIsMS4xLDAuMiwxLjRzMS4xLDAuMiwxLjQtMC4ybDAsMGMyLjEtMi44LDQuMi01LjksNC4yLTkuNkM3MiwzNi41LDY1LjYsMzEuMyw1OS4yLDMweiIvPgoJCQkJPC9nPgoJCQkJPHBhdGggaWQ9IkZpbGwtMzctMiIgY2xhc3M9InN0MSIgZD0iTTQ4LDU0YzIuMiwwLDQsMS44LDQsNHMtMS44LDQtNCw0cy00LTEuOC00LTRTNDUuOCw1NCw0OCw1NCIvPgoJCQkJPHBhdGggaWQ9IkZpbGwtNTMtMiIgY2xhc3M9InN0MSIgZD0iTTU2LDYyYzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRzLTQtMS44LTQtNEM1Miw2My44LDUzLjgsNjIsNTYsNjIiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTU3LTIiIGNsYXNzPSJzdDEiIGQ9Ik02MCwyOGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNHMtNC0xLjgtNC00UzU3LjgsMjgsNjAsMjgiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTU5LTIiIGNsYXNzPSJzdDEiIGQ9Ik00OCwzMGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNHMtNC0xLjgtNC00UzQ1LjgsMzAsNDgsMzAiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTYxLTIiIGNsYXNzPSJzdDEiIGQ9Ik02Niw1MGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNGMtMi4yLDAtNC0xLjgtNC00UzYzLjgsNTAsNjYsNTAiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTYzLTIiIGNsYXNzPSJzdDEiIGQ9Ik00OCw2YzIuMiwwLDQsMS44LDQsNHMtMS44LDQtNCw0cy00LTEuOC00LTRTNDUuOCw2LDQ4LDYiLz4KCQkJCTxwYXRoIGlkPSJGaWxsLTU1LTIiIGNsYXNzPSJzdDEiIGQ9Ik02OCwyMGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNHMtNC0xLjgtNC00UzY1LjgsMjAsNjgsMjAiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K";class J extends o.a.Component{constructor(e){super(e),this.rootRef=Object(n.createRef)(),this.canvasContainerRef=Object(n.createRef)(),this.canvasRef=Object(n.createRef)(),this.onClusterClick=this.onClusterClick.bind(this),this.onClusterHover=this.onClusterHover.bind(this),this.onBackgroundClick=this.onBackgroundClick.bind(this),this.renderer=void 0,this.state={selectedClusterId:void 0,focused:!1}}async componentDidMount(){const{data:e}=this.props,t=e.mdsDat,s=t.topics.length,[i,n]=z([e.mdsDat.x,e.mdsDat.y],[-1,1]),[o]=z([t.Freq],[.05,.3]),a=r.a.range(s).map(e=>new Q({x:i[e],y:n[e],topic:t.topics[e],freq:o[e]}));this.renderer=new S({canvasContainer:this.canvasContainerRef.current,canvas:this.canvasRef.current,clusters:a}),this.renderer.on("object-click",this.onClusterClick),this.renderer.on("object-hover",this.onClusterHover),this.renderer.on("background-click",this.onBackgroundClick),this.renderer.start(),this.renderer.onResize()}onClusterClick(e){const{selectedClusterId:t}=this.state;this.setState({focused:!0}),this.renderer.focus(t)}onClusterHover(e){const{focused:t}=this.state,{topic:s}=e;t||(this.setState({selectedClusterId:s}),this.renderer.select(s))}onBackgroundClick(){this.setState({selectedClusterId:void 0,focused:!1}),this.renderer.deselect()}componentWillUnmount(){this.renderer.destory()}componentDidUpdate(e){const{width:t,height:s}=this.props;e.width==t&&e.height==s||this.renderer&&this.renderer.onResize()}render(){const{data:e}=this.props,{selectedClusterId:t,focused:s}=this.state,i=G(t)(e),{width:r,height:n}=this.props;return o.a.createElement("section",{className:c.a.section,ref:this.rootRef,style:{width:r+"px",height:n+"px"}},o.a.createElement("div",{ref:this.canvasContainerRef,className:c.a["canvas-container"]},o.a.createElement("div",{className:c.a["canvas-container__logo"],style:{background:`#F6F6F6 url(${Y}) no-repeat`}}),o.a.createElement("canvas",{ref:this.canvasRef})),o.a.createElement(C,{skillList:i,focused:s,onBackToMainClick:this.onBackgroundClick}))}}t.default=J}]);