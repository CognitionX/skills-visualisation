module.exports=function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}([function(e,t){e.exports=require("react")},function(e,t,r){var s=r(17);"string"==typeof s&&(s=[[e.i,s,""]]);var n={insert:"head",singleton:!1};r(19)(s,n);s.locals&&(e.exports=s.locals)},function(e,t){e.exports=require("three/src/math/Color.js")},function(e,t){e.exports=require("three/src/math/Vector2.js")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("three/src/math/Vector3.js")},function(e,t){e.exports=require("reselect")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("three/src/renderers/WebGLRenderer.js")},function(e,t){e.exports=require("three/src/scenes/Scene.js")},function(e,t){e.exports=require("three/src/cameras/PerspectiveCamera.js")},function(e,t){e.exports=require("three/src/objects/Mesh.js")},function(e,t){e.exports=require("three/src/geometries/CircleGeometry.js")},function(e,t){e.exports=require("three/src/materials/MeshBasicMaterial.js")},function(e,t){e.exports=require("three/src/core/Raycaster.js")},function(e,t){e.exports=require("polylinear-scale")},function(e,t){e.exports=require("eventemitter3")},function(e,t,r){(t=e.exports=r(18)(!1)).push([e.i,"._1s0OEhJj1LcYhiSd1QguXE{font-family:'proxima-nova', sans-serif;font-size:16px;font-weight:300;line-height:1.3;color:#444444;display:flex;background:#F6F6F6;padding:15px 0px;box-sizing:border-box}._3NkwkHfeT6Rp-XYhurDGx9{flex-grow:1;position:relative;border-top:solid 1px #444444;border-bottom:solid 1px #444444}._1lRpQkOnjz01QedaSHy5yY{position:absolute;width:30px;height:30px;top:-15px;left:0;padding-right:15px}._3NkwkHfeT6Rp-XYhurDGx9 canvas{position:absolute;top:0;left:0}._1-jwqTia_zdvvp6LYoiA55{flex-grow:0;flex-shrink:1;flex-basis:400px;margin-left:40px;font-size:1rem;font-weight:500;background:#F6F6F6;z-index:100;text-align:left;border-top:solid 6px #444444;border-bottom:solid 1px #444444;overflow-y:auto}._1-jwqTia_zdvvp6LYoiA55 h1{font-weight:600;font-size:1.6rem;margin:20px 0px 30px 0px}._1-jwqTia_zdvvp6LYoiA55 h2{font-weight:600;font-size:1rem;margin:0px 0px 8px 0px}._16K3AfjduT6sX5zeqMyaEh{display:block;color:#0096ff;font-size:0.9rem;margin:0 0 20px 0;height:0px;overflow:hidden;transition:height cubic-bezier(0.08, 0.74, 0.41, 1) 0.4s}._16K3AfjduT6sX5zeqMyaEh.enabled{height:20px}._16K3AfjduT6sX5zeqMyaEh:hover{cursor:pointer}._1ikcEMOf4mbk-O-Xk1zasy{display:flex;justify-content:space-between}._3As3LGKmy0mOF9rg6eQMGV{z-index:2;width:20px;height:20px;background-repeat:no-repeat}._1CPdmAXIm8YoGtDIubfpuH{border-top:solid 1px #444444;padding:40px 0px 40px 0px}._1IPxoY07NBVOTcl8uZpquK{margin-bottom:10px;display:flex;justify-content:space-between}._3veko3isg7mthhyenBmA9i{flex-grow:1;margin:auto 20px}._3veko3isg7mthhyenBmA9i hr{border:0;height:0;margin:0;border-bottom:1px solid rgba(70,70,70,0.3)}\n",""]),t.locals={section:"_1s0OEhJj1LcYhiSd1QguXE","canvas-container":"_3NkwkHfeT6Rp-XYhurDGx9","canvas-container__logo":"_1lRpQkOnjz01QedaSHy5yY",nav:"_1-jwqTia_zdvvp6LYoiA55","nav__back-to-main":"_16K3AfjduT6sX5zeqMyaEh","nav__sub-header":"_1ikcEMOf4mbk-O-Xk1zasy","nav__user-logo":"_3As3LGKmy0mOF9rg6eQMGV",list:"_1CPdmAXIm8YoGtDIubfpuH",skill:"_1IPxoY07NBVOTcl8uZpquK",skill__line:"_3veko3isg7mthhyenBmA9i"}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",s=e[3];if(!s)return r;if(t&&"function"==typeof btoa){var n=(a=s,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),i=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot).concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var a,o,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var i=this[n][0];null!=i&&(s[i]=!0)}for(var a=0;a<e.length;a++){var o=e[a];null!=o[0]&&s[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="(".concat(o[2],") and (").concat(r,")")),t.push(o))}},t}},function(e,t,r){"use strict";var s,n={},i=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function o(e,t){for(var r=[],s={},n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],o={css:i[1],media:i[2],sourceMap:i[3]};s[a]?s[a].parts.push(o):r.push(s[a]={id:a,parts:[o]})}return r}function c(e,t){for(var r=0;r<e.length;r++){var s=e[r],i=n[s.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](s.parts[a]);for(;a<s.parts.length;a++)i.parts.push(v(s.parts[a],t))}else{for(var o=[];a<s.parts.length;a++)o.push(v(s.parts[a],t));n[s.id]={id:s.id,refs:1,parts:o}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var s=r.nc;s&&(e.attributes.nonce=s)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var n=a(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var u,h=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,r,s){var n=r?"":s.css;if(e.styleSheet)e.styleSheet.cssText=h(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var s=r.css,n=r.media,i=r.sourceMap;if(n&&e.setAttribute("media",n),i&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var f=null,m=0;function v(e,t){var r,s,n;if(t.singleton){var i=m++;r=f||(f=l(t)),s=d.bind(null,r,i,!1),n=d.bind(null,r,i,!0)}else r=l(t),s=p.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=o(e,t);return c(r,t),function(e){for(var s=[],i=0;i<r.length;i++){var a=r[i],l=n[a.id];l&&(l.refs--,s.push(l))}e&&c(o(e,t),t);for(var u=0;u<s.length;u++){var h=s[u];if(0===h.refs){for(var d=0;d<h.parts.length;d++)h.parts[d]();delete n[h.id]}}}}},function(e,t){e.exports=require("three/src/lights/AmbientLight.js")},function(e,t){e.exports=require("three/src/objects/Line.js")},function(e,t){e.exports=require("three/src/core/Geometry.js")},function(e,t){e.exports=require("three/src/materials/LineBasicMaterial.js")},function(e,t,r){"use strict";r.r(t);var s=r(4),n=r.n(s),i=r(0),a=r.n(i),o=r(1),c=r.n(o),l=r(7),u=r.n(l),h=r.p+"assets/45537d9b7c3ecb39f35545d3088d340b.svg";function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}const p=({term:e,freq:t,total:r})=>a.a.createElement("div",{className:c.a.skill},a.a.createElement("div",{className:c.a.skill__term},e),a.a.createElement("div",{className:c.a.skill__line},a.a.createElement("hr",null)),a.a.createElement("div",{className:c.a.skill__freq},t));var f=({skillList:e,focused:t,onBackToMainClick:r})=>0===e.length?a.a.createElement("nav",{className:c.a.nav},a.a.createElement("h1",null,"Skills available in your Knowledge Network"),a.a.createElement("div",{className:c.a.list},a.a.createElement("div",null,"Here are all the skills available in your organisation’s Knowledge Network, visualised as clusters based on relatedness. ",a.a.createElement("br",null),a.a.createElement("br",null),"Each cluster is dynamically generated based on how often skills occur together on user profiles. Note that clusters are *not* based on existing structures within your organisation such as departments or teams.",a.a.createElement("br",null),a.a.createElement("br",null),"The distance between clusters indicates how closely related the skills in the clusters are. Overlaps indicate that some skills are shared between clusters.",a.a.createElement("br",null),a.a.createElement("br",null),"The size of a cluster indicates how many people there are in your network with the cluster’s skills.",a.a.createElement("br",null),a.a.createElement("br",null),"If you hover over a cluster, the individual skills within it will appear on the right, ordered by frequency."))):a.a.createElement("nav",{className:c.a.nav},a.a.createElement("h1",null,e.slice(0,2).map(e=>e.term).join(", ")),a.a.createElement("a",{onClick:r,className:u()(c.a["nav__back-to-main"],{enabled:t})},"< Back to main"),a.a.createElement("div",{className:c.a["nav__sub-header"]},a.a.createElement("h2",null,"Skills:"),a.a.createElement("div",{className:c.a["nav__user-logo"],style:{backgroundImage:`url(${h})`}})),a.a.createElement("div",{className:c.a.list},e.map(e=>a.a.createElement(p,d({key:e.term},e))))),m=r(8),v=r(9),b=(r(20),r(2)),g=r(10),x=r(5),y=r(11),w=(r(21),r(12)),k=(r(22),r(23),r(13)),j=r(14),C=r(3);class _{constructor(e){const{x:t,y:r}=e||{x:999999,y:999999};this.position=new C.Vector2(t,r),this.intersectObject=void 0}set intersect(e){this.intersectObject=e}get intersect(){return this.intersectObject}}var E=r(15),M=r.n(E);const q=e=>{const t=window.getComputedStyle(e),r=t.getPropertyValue("width"),s=t.getPropertyValue("height"),{top:n,left:i,bottom:a,right:o}=e.getBoundingClientRect();return{width:parseInt(r),height:parseInt(s),top:n,left:i,bottom:a,right:o}},O=(e,t)=>e.reduce((e,r)=>{const s=M()([Math.min(...r),Math.max(...r)],t);return e.concat([r.map(e=>s(e))])},[]);var T=r(16),N=r.n(T);class R{static get color(){return new b.Color("#666666")}static get hightlightedColor(){return new b.Color("#0096ff")}static get opacity(){return.3}static get hightlightedOpacity(){return.8}static get disabledOpacity(){return.1}get radius(){return this.freq}constructor(e){const{x:t,y:r,topic:s,freq:n}=e;this.position=new C.Vector2(t,r),this.topic=s,this.freq=n,this.disabled=!1}disable(){this.disabled=!0}enable(){this.disabled=!1}}class S extends N.a{constructor({canvas:e,canvasContainer:t,clusters:r}){super(),this.canvas=e,this.canvasContainer=t,this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.canvasContainer.addEventListener("mouseup",this.onMouseUp,!1),this.canvasContainer.addEventListener("mousemove",this.onMouseMove,!1);this.renderer=new m.WebGLRenderer({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(2),this.scene=new v.Scene,this.camera=new g.PerspectiveCamera(70,1,1,1e5),this.camera.lookAt(new x.Vector3(0,0,0)),this.camera.position.z=2,this.clusters=[],r.forEach(e=>{const t=new y.Mesh(new w.CircleGeometry(e.radius,64),new k.MeshBasicMaterial({color:6710886,opacity:.3,transparent:!0}));t.position.set(e.position.x,e.position.y,-e.radius/100),t.userData=e,this.clusters.push(t),this.scene.add(t)}),this.raycaster=new j.Raycaster,this.mouse=new _,this.render=this.render.bind(this),this.animate=this.animate.bind(this)}start(){this.animate()}onMouseMove(e){e.preventDefault();const{left:t,top:r,right:s,bottom:n}=q(this.canvasContainer);this.mouse.position.set((e.clientX-t)/(s-t)*2-1,-(e.clientY-r)/(n-r)*2+1);const i=this.mouse.intersect;i&&!i.object.userData.disabled?(this.emit("object-hover",i.object.userData),document.body.style.cursor="pointer"):document.body.style.cursor="default"}onMouseUp(){const e=this.mouse.intersect;if(e&&!e.object.userData.disabled){const{userData:e}=this.mouse.intersect.object;this.emit("object-click",e)}else this.emit("background-click")}onResize(){const{left:e,top:t,right:r,bottom:s}=q(this.canvasContainer),n=r-e,i=s-t;this.canvas.width=n,this.canvas.height=i,this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.render()}toScreenPosition(e,t){const r=new x.Vector3,s=.5*this.canvas.width,n=.5*this.canvas.height;return e.updateMatrixWorld(),r.setFromMatrixPosition(e.matrixWorld),r.project(t),r.x=r.x*s+s,r.y=-r.y*n+n,{x:r.x,y:r.y}}animate(e){this.render(e),this.timeout=setTimeout(()=>{this.raf=requestAnimationFrame(this.animate)},1e3/30)}render(e){this.raycaster.setFromCamera(this.mouse.position,this.camera);const t=this.raycaster.intersectObjects(this.clusters);this.mouse.intersect=t[0],this.renderer.render(this.scene,this.camera)}focus(e){this.clusters.forEach(t=>{t.userData.topic===e?t.userData.enable():(t.userData.disable(),t.material.opacity=R.disabledOpacity)})}select(e){this.clusters.forEach(t=>{const r=new b.Color("#0096ff"),s=new b.Color("#666666"),n=e==t.userData.topic?r:s,i=e==t.userData.topic?.8:.3;t.material.color.equals(n)||(t.material.color=n,t.material.opacity=i)})}deselect(){this.clusters.forEach(e=>{const t=new b.Color("#666666");e.material.color=t,e.material.opacity=.3,e.userData.enable()})}destory(){clearTimeout(this.timeout),cancelAnimationFrame(this.raf),this.canvasContainer.removeEventListener("mouseup",this.onMouseUp),this.canvasContainer.removeEventListener("mousemove",this.onMouseMove),this.renderer.context=null,this.renderer.domElement=null,this.renderer=null}getElement(){return this.canvas}}var z=r(6);class L{constructor(e){const{term:t,freq:r,total:s}=e;this.term=t,this.freq=r,this.total=s}}const D=e=>e.tinfo,A=e=>{const t=(e=>Object(z.createSelector)(D,t=>{const r=t.Category,s="Topic"+e;return[r.indexOf(s),r.lastIndexOf(s)]}))(e);return Object(z.createSelector)(D,t,(t,r)=>{if(!e)return[];const[s,n]=r,i=[];for(let e=s;e<n;e++)i.push(new L({term:t.Term[e],freq:t.Freq[e],total:t.Total[e]}));return i.sort((e,t)=>t.freq-e.freq)})};var B=r.p+"assets/c009fac32cc3a5abf945bb2a304816e4.svg";class I extends a.a.Component{constructor(e){super(e),this.rootRef=Object(i.createRef)(),this.canvasContainerRef=Object(i.createRef)(),this.canvasRef=Object(i.createRef)(),this.onClusterClick=this.onClusterClick.bind(this),this.onClusterHover=this.onClusterHover.bind(this),this.onBackgroundClick=this.onBackgroundClick.bind(this),this.renderer=void 0,this.state={selectedClusterId:void 0,focused:!1}}async componentDidMount(){const{data:e}=this.props,t=e.mdsDat,r=t.topics.length,[s,i]=O([e.mdsDat.x,e.mdsDat.y],[-1,1]),[a]=O([t.Freq],[.05,.3]),o=n.a.range(r).map(e=>new R({x:s[e],y:i[e],topic:t.topics[e],freq:a[e]}));this.renderer=new S({canvasContainer:this.canvasContainerRef.current,canvas:this.canvasRef.current,clusters:o}),this.renderer.on("object-click",this.onClusterClick),this.renderer.on("object-hover",this.onClusterHover),this.renderer.on("background-click",this.onBackgroundClick),this.renderer.start()}onClusterClick(e){const{selectedClusterId:t}=this.state;this.setState({focused:!0}),this.renderer.focus(t)}onClusterHover(e){const{focused:t}=this.state,{topic:r}=e;t||(this.setState({selectedClusterId:r}),this.renderer.select(r))}onBackgroundClick(){this.setState({selectedClusterId:void 0,focused:!1}),this.renderer.deselect()}componentWillUnmount(){this.renderer.destory()}componentDidUpdate(e){const{width:t,height:r}=this.props;e.width==t&&e.height==r||this.renderer&&this.renderer.onResize()}render(){const{data:e}=this.props,{selectedClusterId:t,focused:r}=this.state,s=A(t)(e),{width:n,height:i}=this.props;return a.a.createElement("section",{className:c.a.section,ref:this.rootRef,style:{width:n+"px",height:i+"px"}},a.a.createElement("div",{ref:this.canvasContainerRef,className:c.a["canvas-container"]},a.a.createElement("div",{className:c.a["canvas-container__logo"],style:{background:`#F6F6F6 url(${B}) no-repeat`}}),a.a.createElement("a",{className:c.a["canvas-container__logo"]}),a.a.createElement("canvas",{ref:this.canvasRef})),a.a.createElement(f,{skillList:s,focused:r,onBackToMainClick:this.onBackgroundClick}))}}t.default=I}]);