(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{167:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(109),s=t(111),c=t(137),r=t.n(c),l=t(110),d=t(115),b=t(116),j=t(41),m=t(165),u=t(138),o=t.n(u),O=function(e){var n=Object(a.useState)({}),t=Object(j.a)(n,2),i=t[0],s=t[1],c=Object(a.useState)({}),r=Object(j.a)(c,2),l=r[0],u=r[1],O=Object(a.useState)(!1),h=Object(j.a)(O,2),p=h[0],x=h[1];Object(a.useEffect)((function(){var e;0===Object.keys(l).length&&p&&(s(""),e="success",m.a[e]({message:"Success",description:"Your message has been sent!"}))}),[l,p]);return{handleChange:function(e){e.persist(),s((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))})),u((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),u(e(i));3===Object.keys(i).length&&o.a.post("",Object(b.a)({},i)).then((function(){x(!0)}))},values:i,errors:l}};function h(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p,x,g,f,y,v,w=t(4),S=t(5),C=S.b.div(p||(p=Object(w.a)(["\n  padding: 5rem 0;\n"]))),k=S.b.section(x||(x=Object(w.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),E=(S.b.div(g||(g=Object(w.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),S.b.form(f||(f=Object(w.a)(["\n  width: 100%;\n  max-width: 520px;\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])))),z=S.b.span(y||(y=Object(w.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),Y=S.b.div(v||(v=Object(w.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),q=t(1),M=Object(a.lazy)((function(){return t.e(12).then(t.bind(null,171))})),N=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,172))})),J=Object(a.lazy)((function(){return t.e(1).then(t.bind(null,129))})),D=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,173))}));n.default=Object(l.a)()((function(e){var n=e.title,t=e.content,a=e.id,c=e.t,l=O(h),d=l.values,b=l.errors,j=l.handleChange,m=l.handleSubmit,u=function(e){var n=e.type,t=b[n];return b[n]?Object(q.jsx)(r.a,{cascade:!0,children:Object(q.jsx)(z,{children:t})}):Object(q.jsx)(z,{})};return Object(q.jsx)(C,{id:a,children:Object(q.jsx)(k,{children:Object(q.jsxs)(i.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(q.jsx)(s.a,{lg:12,md:11,sm:24,children:Object(q.jsx)(M,{padding:!0,title:n,content:t})}),Object(q.jsx)(s.a,{lg:12,md:12,sm:24,children:Object(q.jsxs)(E,{autoComplete:"off",onSubmit:m,children:[Object(q.jsxs)(s.a,{span:24,children:[Object(q.jsx)(N,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:d.name||"",onChange:j}),Object(q.jsx)(u,{type:"name"})]}),Object(q.jsxs)(s.a,{span:24,children:[Object(q.jsx)(N,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:d.email||"",onChange:j}),Object(q.jsx)(u,{type:"email"})]}),Object(q.jsxs)(s.a,{span:24,children:[Object(q.jsx)(D,{placeholder:"Your Message",value:d.message||"",name:"message",id:"Message",onChange:j}),Object(q.jsx)(u,{type:"message"})]}),Object(q.jsx)(Y,{children:Object(q.jsx)(J,{name:"submit",type:"submit",children:c("Submit")})})]})})]})})})}))}}]);
//# sourceMappingURL=13.6dbdc0cc.chunk.js.map