(this["webpackJsonpcalc-app"]=this["webpackJsonpcalc-app"]||[]).push([[0],{71:function(a,e,n){},72:function(a,e,n){},88:function(a,e){},89:function(a,e,n){"use strict";n.r(e);var t=n(0),i=n(55),r=n.n(i),l=(n(71),n(11)),c=n(105),s=n(108),d=n(109),o=n(60),u=(n(72),n(110)),j=n(2),p=Object(o.a)({typography:{fontFamily:["digital","alarm","sans-serif"].join(","),textAlign:"right",fontSize:40}}),x=function(a){var e=a.displayNum;return Object(j.jsx)(d.a,{children:Object(j.jsx)(s.a,{theme:p,children:Object(j.jsx)(u.a,{sx:{textAlign:"right",border:"1px solid",borderColor:"primary.main",borderRadius:1,p:2,mb:2},children:e})})})},b=n(106),v=function(a){var e=a.updateDisplay;return Object(j.jsxs)(d.a,{sx:{gridColumn:"1 / span 1",mr:2,display:"grid",gridTemplateRows:"repeat(4, 1fr)",gridTemplateColumns:"repeat(3, 1fr)"},spacing:2,children:[Object(j.jsx)(b.a,{"data-value":"1",variant:"outlined",onClick:e,children:"1"}),Object(j.jsx)(b.a,{"data-value":"2",variant:"outlined",onClick:e,children:"2"}),Object(j.jsx)(b.a,{"data-value":"3",variant:"outlined",onClick:e,children:"3"}),Object(j.jsx)(b.a,{"data-value":"4",variant:"outlined",onClick:e,children:"4"}),Object(j.jsx)(b.a,{"data-value":"5",variant:"outlined",onClick:e,children:"5"}),Object(j.jsx)(b.a,{"data-value":"6",variant:"outlined",onClick:e,children:"6"}),Object(j.jsx)(b.a,{"data-value":"7",variant:"outlined",onClick:e,children:"7"}),Object(j.jsx)(b.a,{"data-value":"8",variant:"outlined",onClick:e,children:"8"}),Object(j.jsx)(b.a,{"data-value":"9",variant:"outlined",onClick:e,children:"9"}),Object(j.jsx)(b.a,{sx:{gridColumn:"1 / span 2"},"data-value":"0",variant:"outlined",onClick:e,children:"0"}),Object(j.jsx)(b.a,{"data-value":".",variant:"outlined",onClick:e,children:"."})]})},h=function(a){var e=a.updateDisplay,n=a.equalsClick,t=a.reset,i=a.cancelEntry;return Object(j.jsxs)(d.a,{sx:{gridColumn:"2 / span 1",display:"grid",gridTemplateColumns:"1fr 1fr"},spacing:2,children:[Object(j.jsx)(b.a,{sx:{gridColumn:"1 / span 1"},"data-value":"+",variant:"outlined",onClick:e,children:"+"}),Object(j.jsx)(b.a,{sx:{gridColumn:"1 / span 1"},"data-value":"-",variant:"outlined",onClick:e,children:"-"}),Object(j.jsx)(b.a,{sx:{textTransform:"none",gridColumn:"1 / span 1"},"data-value":"*",variant:"outlined",onClick:e,children:"x"}),Object(j.jsx)(b.a,{sx:{gridColumn:"1 / span 1"},"data-value":"/",variant:"outlined",onClick:e,children:"\xf7"}),Object(j.jsx)(b.a,{sx:{gridColumn:"2 / span 1",gridRow:"1 / span 1"},variant:"outlined",onClick:t,children:"C"}),Object(j.jsx)(b.a,{sx:{gridColumn:"2 / span 1",gridRow:"2 / span 1"},variant:"outlined",onClick:i,children:"CE"}),Object(j.jsx)(b.a,{sx:{gridColumn:"2 / span 1",gridRow:"3 / span 2"},"data-value":"=",variant:"outlined",onClick:n,children:"="})]})},C=function(a){var e=a.updateDisplay,n=a.equalsClick,t=a.reset,i=a.cancelEntry;return Object(j.jsxs)(d.a,{sx:{display:"grid",gridTemplateColumns:"3fr 2fr",width:"60%",ml:"auto",mr:"auto"},children:[Object(j.jsx)(v,{updateDisplay:e}),Object(j.jsx)(h,{updateDisplay:e,equalsClick:n,reset:t,cancelEntry:i})]})},O=Object(o.a)({typography:{fontSize:24}});var m=function(){var a=Object(t.useState)("0"),e=Object(l.a)(a,2),n=e[0],i=e[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.a,{theme:O,children:Object(j.jsx)(d.a,{className:"app",children:Object(j.jsxs)(d.a,{sx:{width:"60%",ml:"auto",mr:"auto"},children:[Object(j.jsx)(x,{displayNum:n}),Object(j.jsx)(C,{updateDisplay:function(a){var e=a.target.dataset.value,t=n+e;"0"===t[0]&&"."!==t[1]&&(t=t.substring(1)),i(t)},equalsClick:function(){try{var a=Object(c.a)(n);i(a)}catch(e){console.error("\ud83d\udca5 \ud83d\udca5 ".concat(e)),i("error")}},reset:function(){i(0)},cancelEntry:function(){var a=String(n);a=a.slice(0,-1),i(a)}})]})})})})};r.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.0dcbdc8a.chunk.js.map