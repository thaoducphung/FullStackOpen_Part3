(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),o=t(6),a=t(3),u=t(4),s=t.n(u),i=t(1),d=t(0),l=function(e){var n=e.persons,t=e.personService,r=e.setPersons,c=e.setMessage,o=e.setErrorStatus;return Object(d.jsx)("div",{children:n.map((function(e){return Object(d.jsxs)("div",{children:[e.name," ",e.number,Object(d.jsx)("button",{onClick:function(){return function(e){console.log("delete ".concat(e));var a=n.find((function(n){return n.id===e})),u=window.confirm("Delete ".concat(a.name," ?"));console.log("result",u),u&&t.deletePerson(e).then((function(t){r(n.filter((function(n){return n.id!==e})))})).catch((function(t){c(a.name),o(!0),r(n.filter((function(n){return n.id!==e}))),setTimeout((function(){c(null),o(!1)}),2e3)}))}(e.id)},children:"delete"})]},e.name)}))})},j=function(e){var n=e.value,t=e.onChange;return Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.newName,t=e.newNumber,r=e.addPerson,c=e.handlePersonChange,o=e.handleNumberChange;return Object(d.jsxs)("form",{onSubmit:r,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{value:n,onChange:c})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{value:t,onChange:o})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},f="/api/persons",h={getAll:function(){return s.a.get(f).then((function(e){return e.data}))},create:function(e){return s.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}},m=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(d.jsxs)("div",{className:"error",children:["Information of ",n," has already been removed from server"]}):Object(d.jsxs)("div",{className:"add",children:["Added ",n]})},O=(t(39),function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),s=u[0],f=u[1],O=Object(i.useState)(""),v=Object(a.a)(O,2),p=v[0],g=v[1],x=Object(i.useState)(""),w=Object(a.a)(x,2),C=w[0],S=w[1],N=Object(i.useState)(null),P=Object(a.a)(N,2),k=P[0],y=P[1],A=Object(i.useState)(!1),E=Object(a.a)(A,2),L=E[0],D=E[1];Object(i.useEffect)((function(){h.getAll().then((function(e){return r(e)}))}),[]);var I=C.lenght?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(m,{message:k,error:L}),Object(d.jsx)(j,{value:C,onChange:function(e){S(e.target.value)}}),Object(d.jsx)("h3",{children:"Add a new"}),Object(d.jsx)(b,{newName:s,newNumber:p,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}));if(console.log("found",n),n){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=Object(o.a)(Object(o.a)({},n),{},{number:p});h.update(n.id,c).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e})))}))}}else{var a={name:s,number:p,id:t.length+1};h.create(a).then((function(e){r(t.concat(a)),f(""),g(""),y(s),D(!1),setTimeout((function(){y(null)}),2e3)}))}},handlePersonChange:function(e){f(e.target.value)},handleNumberChange:function(e){g(e.target.value)}}),Object(d.jsx)("h3",{children:"Numbers"}),Object(d.jsx)(l,{persons:I,personService:h,setPersons:r,setMessage:y,setErrorStatus:D})]})});c.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.59163700.chunk.js.map