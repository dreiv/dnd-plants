(this["webpackJsonpdnd-plants"]=this["webpackJsonpdnd-plants"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),l=n.n(r),i=(n(23),n(3)),s=n(17),u=n.n(s),j=n(18),o=(n(41),n(0)),b=["All Seasons","Spring","Summer","Autumn","Winter"];function O(){var e=Object(c.useRef)(!1),t=Object(c.useState)(b[0]),n=Object(i.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)("All Climates"),s=Object(i.a)(l,2),u=s[0],O=s[1],f=Object(c.useState)("All Locales"),v=Object(i.a)(f,2),h=v[0],m=v[1],x=Object(c.useContext)(d),p=x.data,S=x.climates,g=void 0===S?[]:S,C=x.locales,A=void 0===C?[]:C,E=x.setFilteredData;return Object(c.useEffect)((function(){if(e.current){var t=Object(j.a)(p);a!==b[0]&&(t=t.filter((function(e){return e.season===a}))),u!==g[0]&&(t=t.filter((function(e){return e.climate===u}))),h!==A[0]&&(t=t.filter((function(e){return e.locale===h}))),E(t)}else e.current=!0}),[a,u,h]),Object(o.jsxs)("form",{children:[Object(o.jsxs)("label",{children:["Season",Object(o.jsx)("select",{value:a,onChange:function(e){var t=e.target.value;return r(t)},children:b.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))})]}),Object(o.jsxs)("label",{children:["Climate",Object(o.jsx)("select",{value:u,onChange:function(e){var t=e.target.value;return O(t)},children:g.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))})]}),Object(o.jsxs)("label",{children:["Locale",Object(o.jsx)("select",{value:h,onChange:function(e){var t=e.target.value;return m(t)},children:A.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))})]})]})}function f(){var e=Object(c.useContext)(d).filteredData,t=function(e){return Object.entries(e).map((function(e,t){var n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(o.jsxs)("li",{children:[c," - ",a]},t)}))};return Object(o.jsx)("ul",{children:e.map((function(e,n){return Object(o.jsxs)(c.Fragment,{children:[t(e),Object(o.jsx)("br",{})]},n)}))})}var d=Object(c.createContext)();var v=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),s=l[0],j=l[1],b=Object(c.useState)(["Loading..."]),v=Object(i.a)(b,2),h=v[0],m=v[1],x=Object(c.useState)(["Loading..."]),p=Object(i.a)(x,2),S=p[0],g=p[1];Object(c.useEffect)((function(){u.a.init({key:"1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",simpleSheet:!0}).then((function(e){a(e),j(e);var t={"All Climates":!0},n={"All Locales":!0};e.forEach((function(e){t[e.climate]=!0,n[e.locale]=!0})),m(Object.keys(t)),g(Object.keys(n))})).catch(console.warn)}),[]);var C={data:n,climates:h,locales:S,filteredData:s,setFilteredData:j};return Object(o.jsxs)(d.Provider,{value:C,children:[Object(o.jsx)(O,{}),Object(o.jsx)(f,{})]})};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a627f1da.chunk.js.map