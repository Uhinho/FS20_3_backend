(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),u=t(16),i=t.n(u),o=t(17),a=t(4),l=t(3),s=t.n(l),d=function(e){var n=e.onSubmit,t=e.nameInputHandler,c=e.numInputHandler,u=e.newName,i=e.newNumber;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["Name: ",Object(r.jsx)("input",{onChange:t,value:u})]}),Object(r.jsxs)("div",{children:["Number: ",Object(r.jsx)("input",{onChange:c,value:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})})},j=function(e){var n=e.persons,t=e.filter,c=e.onDelete;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)("ul",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(r.jsxs)("li",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete"})]},e.id)}))})]})},b=function(e){var n=e.handleFilterInput,t=e.newFilter;return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Filter shown with ",Object(r.jsx)("input",{onChange:n,value:t})]})})},f=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{className:"errorMsg",children:Object(r.jsx)("p",{children:n})})},h="https://sheltered-gorge-91063.herokuapp.com/api/persons",m=function(){return s.a.get(h).then((function(e){return e.data}))},p=function(e){return s.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],u=n[1],i=Object(c.useState)(""),l=Object(a.a)(i,2),s=l[0],h=l[1],x=Object(c.useState)(""),w=Object(a.a)(x,2),g=w[0],N=w[1],k=Object(c.useState)(""),S=Object(a.a)(k,2),I=S[0],y=S[1],C=Object(c.useState)(null),F=Object(a.a)(C,2),D=F[0],H=F[1];Object(c.useEffect)((function(){m().then((function(e){u(e)}))}),[]);var A=function(e){H(e),setTimeout((function(){H(null)}),2e3)},E=function(e){O(t.filter((function(n){return n.name===e.name})).map((function(e){return e.id})),e).then((function(n){var r=Object(o.a)(t);r.filter((function(n){return n.name==e.name})).map((function(n){return n.number=e.number})),u(r),A("Number updated for ".concat(s))})).catch((function(e){A("Number has already been deleted from the server")}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{message:D}),Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(b,{handleFilterInput:function(e){y(e.target.value)},newFilter:I}),Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsx)(d,{onSubmit:function(e){e.preventDefault();var n={name:s,number:g},r=!1;t.map((function(e){e.name==s&&(window.confirm("".concat(s," is already added to the phonebook, want to update the number?"))&&E(n),r=!0)})),r||(p(n).then((function(e){u(t.concat(e))})),A("".concat(s," added to the phonebook"))),h(""),N("")},nameInputHandler:function(e){h(e.target.value)},numInputHandler:function(e){N(e.target.value)},newName:s,newNumber:g}),Object(r.jsx)(j,{persons:t,filter:I,onDelete:function(e){var n=t.filter((function(n){return n.id==e})).map((function(e){return e.name}));window.confirm("Are you sure you want to delete ".concat(t.filter((function(n){return n.id==e})).map((function(e){return e.name}))," ?"))&&(v(e).then((function(n){var r=t.filter((function(n){return n.id!==e}));u(r)})),A("".concat(n," deleted from the phonebook")))}})]})};t(41);i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e103926d.chunk.js.map