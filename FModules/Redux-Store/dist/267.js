"use strict";(self.webpackChunkRedux_Store=self.webpackChunkRedux_Store||[]).push([[267],{267:(e,t,r)=>{r.r(t);var a={};r.r(a),r.d(a,{CounterReducer:()=>d,DateCounterReducer:()=>s});var n=r(950),u=r.n(n),l=r(202),c=r(754),o=r(21);const d=(e={value:0},t)=>{switch(t.type){case"INCREMENT_ONE":return{...e,value:e.value+1};case"DECREMENT_ONE":return{...e,value:e.value-1};default:return e}},s=(e={date:Date.now()},t)=>{const r=5184e5,a=parseInt(t.payload);switch(t.type){case"INCREMENT_DATE":return{...e,date:e.date+a*r};case"DECREMENT_DATE":return{...e,date:e.date-a*r};default:return e}},E=(0,o.UY)({...a}),v=store=(0,o.MT)(E),N=e=>(console.log("store",v),u().createElement(c.Provider,null,u().createElement("div",{className:""},"hello form store entry",e.children?e.children:"no")));l.render(u().createElement(N,null),document.getElementById("root"))}}]);