(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(13),n(6)),u=n(1);var m=o.a.createContext();function i(e){var t=function(e,t){var n=o.a.useState(!1),a=Object(u.a)(n,2),r=a[0],c=a[1],l=o.a.useState(!0),m=Object(u.a)(l,2),i=m[0],d=m[1],s=o.a.useState(t),f=Object(u.a)(s,2),p=f[0],E=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),d(!1)}catch(r){c(r)}},1e3)}),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),E(t)}catch(r){c(r)}},loading:i,error:r}}("TODOS_V1",[]),n=t.item,a=t.saveItem,r=t.loading,c=t.error,i=o.a.useState(""),d=Object(u.a)(i,2),s=d[0],f=d[1],p=o.a.useState(!1),E=Object(u.a)(p,2),v=E[0],g=E[1],T=n.filter(function(e){return!!e.completed}).length,O=n.length,b=[];b=!s.length>=1?n:n.filter(function(e){var t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)});return o.a.createElement(m.Provider,{value:{loading:r,error:c,totalTodos:O,completedTodos:T,searchValue:s,setSearchValue:f,searchedTodos:b,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),a(t)},completeTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o[t].completed?o[t].completed=!1:o[t].completed=!0,a(o)},deleteTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o.splice(t,1),a(o)},openModal:v,setOpenModal:g}},e.children)}n(14);function d(){var e=o.a.useContext(m),t=e.totalTodos,n=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter"},"Has completado ",n," de ",t," TODOs")}n(15);function s(){var e=o.a.useContext(m),t=e.searchValue,n=e.setSearchValue;return o.a.createElement("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(16);function f(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}n(17);var p=n(5),E={check:function(e){return o.a.createElement(p.a,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return o.a.createElement(p.b,{className:"Icon-svg Icon-svg--delete",fill:e})}};function v(e){var t=e.type,n=e.color,a=void 0===n?"gray":n,r=e.onClick;return o.a.createElement("span",{className:"Icon-container Icon-container--".concat(t,"}"),onClick:r},E[t](a))}function g(e){var t=e.onDelete;return o.a.createElement(v,{type:"delete",onClick:t})}function T(e){var t=e.completed,n=e.onComplete;return o.a.createElement(v,{type:"check",color:t?"#4caf50":"gray",onClick:n})}n(18);function O(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement(T,{completed:e.completed,onComplete:e.onComplete}),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement(g,{onDelete:e.onDelete}))}n(19);function b(){var e=o.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useContext(m),c=r.addTodo,l=r.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(n),l(!1)}},o.a.createElement("label",null,"ESCRIBE TU NUEVO TODO"),o.a.createElement("textarea",{value:n,onChange:function(e){a(e.target.value)},placeholder:"Escribe una tarea"}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{type:"button",onClick:function(){l(!1)},className:"TodoForm-button TodoForm-button-cancel"},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button-add"},"A\xf1adir")))}n(20);function h(e){return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(t){e.setOpenModal(function(e){return!e})}},"+")}n(21);function C(e){var t=e.children;return c.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}function I(e){e.error;return o.a.createElement("p",null,"Desesperate, hubo un error...")}n(22);function x(){return o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs.."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}function N(){return o.a.createElement("p",null,"\xa1Crea tu primer TODO!")}function S(){var e=o.a.useContext(m),t=e.error,n=e.loading,a=e.searchedTodos,r=e.completeTodo,c=e.deleteTodo,l=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(s,null),o.a.createElement(f,null,t&&o.a.createElement(I,{error:t}),n&&o.a.createElement(x,null),!n&&!a.length&&o.a.createElement(N,null),a.map(function(e){return o.a.createElement(O,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)}})})),!!l&&o.a.createElement(C,null,o.a.createElement(b,null)),o.a.createElement(h,{setOpenModal:u}))}var y=function(){return o.a.createElement(i,null,o.a.createElement(S,null))};c.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3595afa5.chunk.js.map