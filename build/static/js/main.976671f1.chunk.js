(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),o=t(6),r=t(3),u=t(1),i=t(0),s=function(e){var n=e.persons,t=e.personService,c=e.setPersons,a=(e.setMessage,e.notifyMessage);return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:function(){return function(e){console.log("delete ".concat(e));var o=n.find((function(n){return n.id===e})),r=window.confirm("Delete ".concat(o.name," ?"));console.log("result",r),r&&t.deletePerson(e).then((function(t){c(n.filter((function(n){return n.id!==e}))),a("Delete ".concat(o.name))})).catch((function(t){a("".concat(o.name," had already been removed"),"error"),c(n.filter((function(n){return n.id!==e})))}))}(e.id)},children:"delete"})]},e.name)}))})},d=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.newName,t=e.newNumber,c=e.addPerson,a=e.handlePersonChange,o=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:c,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:a})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:t,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},b=t(4),j=t.n(b),f="/api/persons",h={getAll:function(){return j.a.get(f).then((function(e){return e.data}))},create:function(e){return j.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}},m=function(e){var n=e.notification;return null===n?null:Object(i.jsx)("div",{className:n.type,children:n.message})},O=(t(39),function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),b=Object(r.a)(a,2),j=b[0],f=b[1],O=Object(u.useState)(""),v=Object(r.a)(O,2),g=v[0],p=v[1],x=Object(u.useState)(""),w=Object(r.a)(x,2),C=w[0],P=w[1],S=Object(u.useState)(null),y=Object(r.a)(S,2),N=y[0],k=y[1],A=Object(u.useState)(!1),L=Object(r.a)(A,2),M=(L[0],L[1],function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add";k({message:e,type:n}),setTimeout((function(){k(null)}),5e3)});Object(u.useEffect)((function(){h.getAll().then((function(e){return c(e)}))}),[]);var D=C.lenght?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(m,{notification:N}),Object(i.jsx)(d,{value:C,onChange:function(e){P(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(l,{newName:j,newNumber:g,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===j.toLowerCase()}));if(console.log("found",n),n){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:g});h.update(n.id,a).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),M("Changed number of  ".concat(n.name)),f(""),p("")}))}}else{var r={name:j,number:g,id:t.length+1};h.create(r).then((function(e){c(t.concat(e)),f(""),p(""),M("Add ".concat(j))}))}},handlePersonChange:function(e){f(e.target.value)},handleNumberChange:function(e){p(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(s,{persons:D,personService:h,setPersons:c,setMessage:k,notifyMessage:M})]})});a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.976671f1.chunk.js.map