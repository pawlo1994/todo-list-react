(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(7),a=n.n(s),i=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),j=function(t){var e=t.addNewTask,n=Object(c.useState)(""),o=Object(u.a)(n,2),s=o[0],a=o[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),s.trim()?(e(s.trim()),a("")):a("")},children:[Object(d.jsx)("input",{className:"form__input",placeholder:"Co jest do zrobienia?",value:s,onChange:function(t){var e=t.target;return a(e.value)},required:!0}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},l=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,o=t.toggleTaskDone;return Object(d.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(d.jsxs)("li",{className:"tasks__item ".concat(n&&t.done?"tasks__item--hidden":""),children:[Object(d.jsx)("button",{className:"tasks__button tasks__button--done",onClick:function(){return o(t.id)},children:t.done?"\u2714":""}),Object(d.jsxs)("span",{className:"tasks__span ".concat(t.done?"tasks__span--done":""),children:[t.id,". ",t.content]}),Object(d.jsx)("button",{className:"tasks__button tasks__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return e.length>0&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{className:"buttons__button",onClick:c,children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{className:"buttons__button",disabled:e.every((function(t){return t.done})),onClick:o,children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("header",{className:"section__header",children:[Object(d.jsx)("h2",{children:e}),c]}),n]})}),h=(n(19),function(t){var e=t.title;return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:e})})}),O=(n(20),function(t){var e=t.children;return Object(d.jsx)("main",{className:"container",children:e})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([{id:1,content:"Przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"Zje\u015b\u0107 Kolacj\u0119",done:!0}]),a=Object(u.a)(s,2),m=a[0],k=a[1];return Object(d.jsxs)(O,{children:[Object(d.jsx)(h,{title:"Lista Zada\u0144"}),Object(d.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(j,{addNewTask:function(t){k((function(e){return[].concat(Object(i.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",body:Object(d.jsx)(l,{tasks:m,hideDone:n,removeTask:function(t){k((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){k((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(d.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setAllDone:function(){k((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.f74e0084.chunk.js.map