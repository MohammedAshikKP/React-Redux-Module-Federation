"use strict";(self.webpackChunk_asda_asd=self.webpackChunk_asda_asd||[]).push([[589],{788:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},589:(e,n,t)=>{t.r(n);var r=t(950),a=t.n(r),o=t(202),i=t(754),c=t(379),s=t.n(c),u=t(795),l=t.n(u),f=t(569),d=t.n(f),p=t(565),m=t.n(p),v=t(216),h=t.n(v),b=t(655),y=t.n(b),g=t(512),E={};function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}E.styleTagTransform=y(),E.setAttributes=m(),E.insert=d().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=h(),s()(g.Z,E),g.Z&&g.Z.locals&&g.Z.locals;const C=({displayText:e,...n})=>a().createElement("button",x({className:"btn"},n),e),T=({number:e})=>a().createElement("h1",{style:{color:"red"}},e),k=e=>{const n=(0,i.useDispatch)(),t=(0,i.useSelector)((e=>e.CounterReducer.value));return(0,i.useSelector)((e=>e)),(0,r.useEffect)((()=>{console.log("rendered number counter")}),[]),a().createElement(a().Fragment,null,a().createElement(T,{number:t}),a().createElement(C,{displayText:"Inc",onClick:()=>n({type:"INCREMENT_ONE"})}),a().createElement(C,{displayText:"Dec",onClick:()=>n({type:"DECREMENT_ONE"})}))};function w(){return a().createElement("div",null,a().createElement(k,null))}o.render(a().createElement(w,null),document.getElementById("root"))},512:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(788),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,".btn {\n    display: inline-block;\n    border: none;\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: #0069ed;\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\n.btn:hover,\n.btn:focus {\n    background: #0053ba;\n}\n\n.btn:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\n.btn:active {\n    transform: scale(0.99);\n}",""]);const o=a},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=o[u]||0,f="".concat(u," ").concat(l);o[u]=l+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(n[d].references++,n[d].updater(p)):n.push({identifier:f,updater:a(p,r),references:1}),i.push(f)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var l=t(o[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},655:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);