(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{299:function(t,o,e){"use strict";function r(t,o){var e={};for(var r in t)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function n(t,o){var e=o.distance,r=o.left,n=o.right,i=o.up,a=o.down,d=o.top,l=o.bottom,c=o.big,s=o.mirror,f=o.opposite,p=(e?e.toString():0)+((r?1:0)|(n?2:0)|(d||a?4:0)|(l||i?8:0)|(s?16:0)|(f?32:0)|(t?64:0)|(c?128:0));if(b.hasOwnProperty(p))return b[p];var v=r||n||i||a||d||l,m=void 0,h=void 0;if(v){if(!s!=!(t&&f)){var j=[n,r,l,d,a,i];r=j[0],n=j[1],d=j[2],l=j[3],i=j[4],a=j[5]}var y=e||(c?"2000px":"100%");m=r?"-"+y:n?y:"0",h=a||d?"-"+y:i||l?y:"0"}return b[p]=(0,u.animation)((t?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+h+", 0);":"")+"}\n     "+(t?"from":"to")+" {opacity: 1;transform: none;} "),b[p]}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.children,i=(t.out,t.forever),a=t.timeout,d=t.duration,l=void 0===d?u.defaults.duration:d,s=t.delay,b=void 0===s?u.defaults.delay:s,f=t.count,p=void 0===f?u.defaults.count:f,v=r(t,["children","out","forever","timeout","duration","delay","count"]),m={make:n,duration:void 0===a?l:a,delay:b,forever:i,count:p,style:{animationFillMode:"both"},reverse:v.left};return o?(0,c.default)(v,m,m,e):m}Object.defineProperty(o,"__esModule",{value:!0});var a,d=e(87),u=e(276),l=e(280),c=(a=l)&&a.__esModule?a:{default:a},s={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,big:d.bool,mirror:d.bool,opposite:d.bool,duration:d.number,timeout:d.number,distance:d.string,delay:d.number,count:d.number,forever:d.bool},b={};i.propTypes=s,o.default=i,t.exports=o.default},329:function(t,o,e){"use strict";e.r(o);var r,n,i,a=e(302),d=e(299),u=e.n(d),l=e(37),c=e(38),s=c.b.p(r||(r=Object(l.a)(["\n  margin-top: 1.5rem;\n"]))),b=c.b.div(n||(n=Object(l.a)(["\n  position: relative;\n  max-width: 700px;\n"]))),f=c.b.div(i||(i=Object(l.a)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"]))),p=e(14);o.default=Object(a.a)()((function(t){var o=t.title,e=t.content,r=t.t;return Object(p.jsx)(b,{children:Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h6",{children:r(o)}),Object(p.jsx)(f,{children:Object(p.jsx)(s,{children:r(e)})})]})})}))}}]);