(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,d,s,l,u,b,j,x,p,f,g,h,O,m,k=t(1),v=t.n(k),w=t(12),y=t.n(w),D=(t(21),t(4)),T=t(2),C=t(3),S=C.b.form(o||(o=Object(T.a)(["\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n\n    @media(max-width: 767px){\n        flex-direction: column;\n    }\n"]))),z=C.b.input(r||(r=Object(T.a)(["\n    flex-grow: 1;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n\n    @media(max-width: 767px){\n        margin: 0 0 10px;\n    }\n"]))),N=C.b.button(c||(c=Object(T.a)(["\n    flex-shrink: 0;\n    padding: 10px;\n    background-color: hsl(180, 100%, 25%);\n    color: #fff;\n    border: none;\n    transition: background-color 0.3s, transform 0.3s;\n\n    &:hover{\n        cursor: pointer;\n        background-color: hsl(180, 100%, 30%);\n        transform: scale(1.1);\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"]))),A=t(0),F=function(n){var e=n.addNewTask,t=Object(k.useState)(""),o=Object(D.a)(t,2),r=o[0],c=o[1];return Object(A.jsxs)(S,{onSubmit:function(n){n.preventDefault(),r.trim()?(e(r.trim()),c("")):c("")},children:[Object(A.jsx)(z,{placeholder:"Co jest do zrobienia?",value:r,onChange:function(n){var e=n.target;return c(e.value)},required:!0}),Object(A.jsx)(N,{children:"Dodaj zadanie"})]})},H=C.b.ul(i||(i=Object(T.a)(["\n    list-style-type: none;\n    margin: 0 auto;\n    padding: 40px 10px 20px;\n"]))),I=C.b.li(a||(a=Object(T.a)(["\n    padding: 10px 20px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    border-bottom: 2px solid #ddd;\n\n    ","\n"])),(function(n){return n.hidden&&Object(C.a)(d||(d=Object(T.a)(["\n        display: none;\n    "])))})),J=C.b.span(s||(s=Object(T.a)(["\n    color: #333;\n    word-break: break-word;\n    padding: 0 5px;\n\n    ","\n"])),(function(n){return n.done&&Object(C.a)(l||(l=Object(T.a)(["\n        text-decoration: line-through;\n    "])))})),L=C.b.button(u||(u=Object(T.a)(["\n    display: flex;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    transition: background-color 0.3s;\n\n    ","\n\n    ","\n\n    &:hover{\n        cursor: pointer;\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"])),(function(n){return n.done&&Object(C.a)(b||(b=Object(T.a)(["\n        background-color: #090;\n        color: #fff;\n\n        &:hover{\n            background-color: #0a0;\n        }\n    "])))}),(function(n){return n.remove&&Object(C.a)(j||(j=Object(T.a)(["\n        background-color: #f00;\n        color: #fff;\n\n        &:hover{\n            background-color: #f60;\n        }\n    "])))})),P=function(n){var e=n.tasks,t=n.hideDone,o=n.removeTask,r=n.toggleTaskDone;return Object(A.jsx)(H,{children:e.map((function(n){return Object(A.jsxs)(I,{hidden:t&&n.done,children:[Object(A.jsx)(L,{done:!0,onClick:function(){return r(n.id)},children:n.done?"\u2714":""}),Object(A.jsx)(J,{done:n.done,children:n.content}),Object(A.jsx)(L,{remove:!0,onClick:function(){return o(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},B=C.b.div(x||(x=Object(T.a)(["\n    display: flex;\n    list-style-type: none;\n    padding: 0; \n\n    @media(max-width:767px){\n        flex-direction: column;\n        align-items: center;\n    }\n"]))),E=C.b.button(p||(p=Object(T.a)(["\n    padding-left: 20px;\n    background-color: transparent;\n    border: none;\n    color: hsl(180, 100%, 25%);\n    transition: color 0.3s;\n\n    @media(max-width:767px){\n        padding-left: 0;\n        padding-bottom: 15px;\n    }\n\n    ","\n\n    &:hover{\n        color: hsl(180, 100%, 35%);\n        cursor: pointer;\n    }\n\n    &:active{\n        color: hsl(180, 100%, 20%);\n    }\n\n    &:disabled{\n        color: #999;\n        cursor: default;\n    }\n"])),(function(n){return n.hidden&&Object(C.a)(f||(f=Object(T.a)(["\n        display: none;\n    "])))})),U=function(n){var e=n.tasks,t=n.hideDone,o=n.toggleHideDone,r=n.setAllDone;return e.length>0&&Object(A.jsxs)(B,{children:[Object(A.jsxs)(E,{onClick:o,children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(A.jsx)(E,{disabled:e.every((function(n){return n.done})),onClick:r,children:"Uko\u0144cz wszystkie"})]})},q=C.b.section(g||(g=Object(T.a)(["\n    background-color: #fff;\n    margin: 30px;\n    padding: 0;\n    box-shadow: 0px 0px 2px 2px #ddd;\n"]))),M=C.b.header(h||(h=Object(T.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid #ddd;\n    padding: 0 20px;\n\n    @media(max-width: 767px){\n        flex-direction: column;\n    }\n"]))),Z=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(A.jsxs)(q,{children:[Object(A.jsxs)(M,{children:[Object(A.jsx)("h2",{children:e}),o]}),t]})},G=C.b.header(O||(O=Object(T.a)(["\n    margin: 40px 30px 0;\n"]))),K=function(n){var e=n.title;return Object(A.jsx)(G,{children:Object(A.jsx)("h1",{children:e})})},Q=C.b.main(m||(m=Object(T.a)(["\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n"]))),R=function(n){var e=n.children;return Object(A.jsx)(Q,{children:e})},V=t(16),W=t(6);var X=function(){var n=Object(k.useState)(!1),e=Object(D.a)(n,2),t=e[0],o=e[1],r=function(){var n=Object(k.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(D.a)(n,2),t=e[0],o=e[1];return Object(k.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(W.a)(Object(W.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(W.a)(Object(W.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){o((function(e){return[].concat(Object(V.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),c=r.tasks,i=r.removeTask,a=r.toggleTaskDone,d=r.setAllDone,s=r.addNewTask;return Object(A.jsxs)(R,{children:[Object(A.jsx)(K,{title:"Lista Zada\u0144"}),Object(A.jsx)(Z,{title:"Dodaj nowe zadanie",body:Object(A.jsx)(F,{addNewTask:s})}),Object(A.jsx)(Z,{title:"Lista zada\u0144",body:Object(A.jsx)(P,{tasks:c,hideDone:t,removeTask:i,toggleTaskDone:a}),extraHeaderContent:Object(A.jsx)(U,{tasks:c,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:d})})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))};y.a.render(Object(A.jsx)(v.a.StrictMode,{children:Object(A.jsx)(X,{})}),document.getElementById("root")),Y()}},[[25,1,2]]]);
//# sourceMappingURL=main.cb74e530.chunk.js.map