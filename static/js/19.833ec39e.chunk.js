(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[19,29],{277:function(e,t,n){"use strict";t.a=function(e){return e&&(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"")).replace(/\u02C6|\u0306|\u031B/g,"")).replace(/ + /g," ")).replace(" ","")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")),e}},282:function(e,t,n){"use strict";var a=n(5),c=n(8),r=n(9),i=n(0),o=n(278),l=n.n(o),u=n(277),s=n(70);t.a=function(){var e=Object(i.useState)({}),t=Object(r.a)(e,2),n=t[0],o=t[1],d=Object(i.useState)(!0),b=Object(r.a)(d,2),p=b[0],h=b[1],f=Object(i.useState)({}),m=Object(r.a)(f,2),j=m[0],g=m[1],x=Object(i.useState)(!1),O=Object(r.a)(x,2),v=O[0],y=O[1],w=Object(i.useState)(""),S=Object(r.a)(w,2),k=S[0],I=S[1];Object(i.useEffect)((function(){v&&(o({}),h(!0),Object(s.a)("success","Th\xe0nh c\xf4ng","Th\xeam b\u1ea3n ghi th\xe0nh c\xf4ng."))}),[j,v]);return{handleChange:function(e){console.log(e.target),o((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},e.target.id,e.target.value))})),e.target.alt&&o((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},e.target.alt,Object(u.a)(e.target.value)))})),g((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},e.target.id,""))}))},handleSubmit:function(e){e.preventDefault(),l.a.post(k,Object(c.a)({},n)).then((function(){y(!0)})).catch((function(e){Object(s.a)("error","L\u1ed7i","Nh\u1eadp l\u1ea1i b\u1ea3n ghi.")}))},values:n,errors:j,shouldSubmit:v,setShouldSubmit:y,setUrlForm:I,setValues:o,isNew:p,setIsNew:h}}},301:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(278),c=n.n(a).a.create({baseURL:"http://localhost:5000/api/"}),r=function(e){return c.get(e).then((function(e){return e.data}))},i=function(e,t){return c.post("".concat(e,"/new"),t).then((function(e){return e.data}))},o=function(e,t){return c.put("".concat(e,"/update"),t).then((function(e){return e.data}))},l=function(e,t){return c.delete("".concat(e,"/delete/").concat(t)).then((function(e){return e.data}))}},303:function(e,t,n){"use strict";n.r(t);var a,c=n(37),r=n(38).b.div(a||(a=Object(c.a)(["\n  .ant-pagination-item-active {\n    border-color: #005aaa;\n    :hover {\n      border-color: #005aaa;\n    }\n    a {\n      color: #005aaa;\n      :hover {\n        color: #005aaa ;\n      }\n    }\n  }\n  .ant-pagination-item {\n    :hover {\n      border-color: #005aaa;\n    }\n    a {\n      :hover {\n        color: #005aaa ;\n      }\n    }\n  }\n  .ant-pagination-item-link {\n    :hover {\n      border-color: #005aaa;\n    }\n  }\n  .ant-table-thead > tr > th {\n    font-weight: bold !important;\n  }\n  .ant-table-cell {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 12px !important;\n  }\n  .ant-card {\n    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);\n\n  }\n"]))),i=n(273),o=n(372),l=n(14);t.default=function(e){e.id;var t=e.dataSource,n=e.columns;return Object(l.jsx)(r,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(o.a,{dataSource:t,columns:n,pagination:{pageSize:7},locale:{emptyText:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"},scroll:{x:1200,y:400}})})})}},379:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,l,u,s=n(9),d=n(0),b=n(278),p=n.n(b),h=n(37),f=n(38),m=(f.b.div(a||(a=Object(h.a)(["\n  padding: 5rem 0;\n"]))),f.b.section(c||(c=Object(h.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),f.b.div(r||(r=Object(h.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),f.b.form(i||(i=Object(h.a)(["\n  width: 100%;\n  max-width: 1440px;\n"]))),f.b.span(o||(o=Object(h.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),f.b.label(l||(l=Object(h.a)(["\n  color: #005aaa;\n"]))),f.b.div(u||(u=Object(h.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),n(277),n(282)),j=n(303),g=n(301),x=n(170),O=n(103),v=n(374),y=n(14);t.default=function(e){e.title,e.content,e.id,e.t;var t=Object(m.a)(),n=(t.values,t.setValues,t.errors,t.handleChange,t.handleSubmit,t.shouldSubmit,t.setShouldSubmit,t.setUrlForm,Object(d.useState)(null)),a=Object(s.a)(n,2),c=a[0],r=a[1],i=Object(d.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1];Object(d.useEffect)((function(){b()}),[l]);var b=function(){p.a.get("http://localhost:5000/messages").then((function(e){r(e.data)}))},h=function(e){console.log(e),g.d("messages",{id:e.target.id}).then((function(e){u((function(e){return!e}))}))};function f(e){console.log(e),x.b.error("H\u1ee7y t\xe1c v\u1ee5 x\u1eed l\xfd")}var w=[{title:"Name",dataIndex:"name",key:"name"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Email",dataIndex:"email",key:"email",render:function(e){if(e.length>20){var t=e.substring(0,9);return Object(y.jsx)(O.a,{title:e,children:Object(y.jsx)("span",{children:t+"..."})})}return Object(y.jsx)("span",{children:e})}},{title:"Email",dataIndex:"email",key:"email"},{title:"Email",dataIndex:"email",key:"email"},{title:"Email",dataIndex:"email",key:"email"},{title:"Email",dataIndex:"email",key:"email"},{title:"Message",dataIndex:"message",key:"message"},{title:"Action",dataIndex:"id",fixed:"right",key:"action",width:100,render:function(e,t){return 0===t.resolved?Object(y.jsx)(v.a,{title:"Are you sure to delete this task?",onConfirm:h,onCancel:f,okText:"Yes",cancelText:"No",children:Object(y.jsx)("i",{className:"fas fa-check",style:{color:"tomato",cursor:"pointer"},id:e})}):Object(y.jsx)("i",{className:"fas fa-check-circle",style:{display:"flex",alignContent:"center"}})}}];return Object(y.jsx)("div",{children:Object(y.jsx)(j.default,{dataSource:c,columns:w})})}}}]);