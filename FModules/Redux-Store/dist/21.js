"use strict";(self.webpackChunkRedux_Store=self.webpackChunkRedux_Store||[]).push([[21],{21:(r,t,e)=>{function n(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.d(t,{UY:()=>h,MT:()=>c});var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function c(r,t,e){var i;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(n(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(n(1));return e(c)(r,t)}if("function"!=typeof r)throw new Error(n(2));var h=r,s=t,w=[],p=w,y=!1;function l(){p===w&&(p=w.slice())}function v(){if(y)throw new Error(n(3));return s}function a(r){if("function"!=typeof r)throw new Error(n(4));if(y)throw new Error(n(5));var t=!0;return l(),p.push(r),function(){if(t){if(y)throw new Error(n(6));t=!1,l();var e=p.indexOf(r);p.splice(e,1),w=null}}}function d(r){if(!u(r))throw new Error(n(7));if(void 0===r.type)throw new Error(n(8));if(y)throw new Error(n(9));try{y=!0,s=h(s,r)}finally{y=!1}for(var t=w=p,e=0;e<t.length;e++)(0,t[e])();return r}function E(r){if("function"!=typeof r)throw new Error(n(10));h=r,d({type:f.REPLACE})}function b(){var r,t=a;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(n(11));function e(){r.next&&r.next(v())}return e(),{unsubscribe:t(e)}}})[o]=function(){return this},r}return d({type:f.INIT}),(i={dispatch:d,subscribe:a,getState:v,replaceReducer:E})[o]=b,i}function h(r){for(var t=Object.keys(r),e={},o=0;o<t.length;o++){var i=t[o];"function"==typeof r[i]&&(e[i]=r[i])}var u,c=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:f.INIT}))throw new Error(n(12));if(void 0===e(void 0,{type:f.PROBE_UNKNOWN_ACTION()}))throw new Error(n(13))}))}(e)}catch(r){u=r}return function(r,t){if(void 0===r&&(r={}),u)throw u;for(var o=!1,i={},f=0;f<c.length;f++){var h=c[f],s=e[h],w=r[h],p=s(w,t);if(void 0===p)throw t&&t.type,new Error(n(14));i[h]=p,o=o||p!==w}return(o=o||c.length!==Object.keys(r).length)?i:r}}}}]);