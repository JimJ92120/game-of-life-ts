(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #000000;\n  color: #ffffff;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.source {\n  position: absolute;\n  bottom: 1rem;\n  color: #ffffff;\n}\n",""]);const l=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},654:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),c=t.n(l),u=t(565),s=t.n(u),d=t(216),f=t.n(d),p=t(589),m=t.n(p),v=t(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],u=r.base?c[0]+r.base:c[0],s=a[u]||0,d="".concat(u," ").concat(s);a[u]=s+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);n[l].references--}for(var c=r(e,o),u=0;u<a.length;u++){var s=t(a[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},336:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default={getBoardDimension:function(e,n,t){return[Math.floor(n/t),Math.floor(e/t)]},drawCells:function(e,n,t){n.forEach(((n,r)=>function(e,n,t,r){t.forEach(((t,o)=>{0!==t&&e.fillRect(o*r,n*r,r,r)}))}(e,r,n,t)))}}},402:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default={getCells:function(e){return[...Array(e[1])].reduce((n=>[...n,[...Array(e[0])].reduce((e=>[...e,Math.random()<.5?0:1]),[])]),[])},updateCells:function(e,n,t){e.map(((r,o)=>{r.map(((r,a)=>{const i=function(e,n){return[[e[0]-1,e[1]-1],[e[0],e[1]-1],[e[0]+1,e[1]-1],[e[0]-1,e[1]],[e[0]+1,e[1]],[e[0]-1,e[1]+1],[e[0],e[1]+1],[e[0]+1,e[1]+1]].filter((e=>Boolean(n[e[0]]&&n[e[0]][e[1]])))}([o,a],e),{length:l}=i;1===e[o][a]&&0===n[o][a]&&(n[o][a]=1),(l>=4||l<2)&&(t[o][a]=0),3===l&&0===e[o][a]&&(t[o][a]=1)}))}))}}},914:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default={initControls:function(e,n){const t=document.createElement("div");t.classList.add("board-controls"),t.innerHTML="\n    <style>\n      .board-controls {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 1rem 2rem;\n        display: flex;\n        flex-direction: column;\n        max-width: 200px;\n        background-color: rgba(0, 0, 0, 0.75);\n      }\n      .board-controls > *:not(style) {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 1rem;\n      }\n    </style>\n  ";const r=function(e){const n=document.createElement("div");return n.classList.add("board-controls__resolution"),n.innerHTML=`\n    <label for="resolution">Resolution</label>\n    <input type="range" name="resolution" min="1" max="100" step="1" value="${e}">\n  `,n}(n),o=function(e,n){const t=document.createElement("div");return t.classList.add("board-controls__info"),t.innerHTML=`\n    <div>\n      <label for="resolution-read">Resolution</label>\n      <input type="number" name="resolution-read" value="${n}" readonly>\n    </div>\n    <div>\n      <label for="height-read">Height</label>\n      <input type="number" name="height-read" value="${e[1]}" readonly>\n      <label for="width-read">Width</label>\n      <input type="number" name="width-read" value="${e[0]}" readonly>\n    </div>\n  `,t}(e,n);return t.appendChild(r),t.appendChild(o),t}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(654);const e=t(402),n=t(336),r=t(914);window.addEventListener("load",(()=>{const t=document.querySelector("#scene");if(!t)return;const o=t.getContext("2d");if(!o)return;const a=document.documentElement.getBoundingClientRect(),{height:i,width:l}=a;!function(e,n,t,r){e.width=r,e.height=t,n.clearRect(0,0,r,t)}(t,o,i,l);let c=100,u=n.default.getBoardDimension(i,l,c),s=e.default.getCells(u),d=s;const f=()=>{o.clearRect(0,0,l,i),n.default.drawCells(o,s,c)};o.fillStyle="red",n.default.drawCells(o,s,c);const p=setInterval((()=>{const n=JSON.parse(JSON.stringify(s));if(e.default.updateCells(s,d,n),JSON.stringify(s)===JSON.stringify(n))return clearInterval(p),void alert("Done.");s=n,f()}),2e3),m=r.default.initControls(u,c),v=m.querySelector('input[name="resolution"]'),h=m.querySelector(".board-controls__info"),y=h.querySelector('input[name="resolution-read"]'),g=h.querySelector('input[name="height-read"]'),b=h.querySelector('input[name="width-read"]');document.body.appendChild(m),v.addEventListener("change",(t=>{c=Number(t.target.value),u=n.default.getBoardDimension(i,l,c),s=e.default.getCells(u),d=s,y.value=String(c),g.value=String(u[1]),b.value=String(u[0]),f()}))}))})()})();