(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7],{9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,u){return o()?(e.exports=c=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),u=r(7316),l=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(3497).mdx,i=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=u(e,l),p=i(t),d=s.useMemo((function(){if(!r)return null;var e=a({React:s,mdx:f},p),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return s.createElement(d,a({},c))}},1166:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1955);t.default=function(e){var t=e.pageContext;return n.createElement("div",{className:"container"},n.createElement("h1",null,t.frontmatter.title),n.createElement("p",null,t.frontmatter.date),n.createElement("div",null,n.createElement(o.MDXRenderer,null,t.body)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-a9730ce7f73b9e698935.js.map