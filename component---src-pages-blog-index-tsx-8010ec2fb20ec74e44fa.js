"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[643],{3993:function(e,t,a){var r=a(7294),l=a(1597),n=a(2200);t.Z=function(e){var t=e.blog,a=(0,n.Y)(t.progress);return r.createElement("div",{className:"card mb-3 bg-color-3"},r.createElement("div",{className:"row g-0"},r.createElement("div",{className:"col-md-4 col-3"},r.createElement("img",{src:"",className:"img-fluid rounded-start",alt:"..."})),r.createElement("div",{className:"col-md-7 col-8"},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title"},t.title),r.createElement("p",{className:"card-text"},t.description),r.createElement("p",{className:"card-text"},r.createElement("small",{className:"text-muted"},t.date)),r.createElement("span",{className:"badge rounded-pill "+a.color},t.date),r.createElement(l.rU,{className:"stretched-link",to:(0,n.R)(t.folder,t.title)}))),r.createElement("div",{className:"col-md-1 col-1 d-flex justify-content-center"},r.createElement("p",{className:"align-self-center mb-0"},"--\x3e"))))}},4062:function(e,t,a){var r=a(7294),l=a(1597);t.Z=function(){return r.createElement("footer",{className:"footer mt-auto py-3 bg-color-4"},r.createElement("div",{className:"container"},r.createElement("div",{className:"text-light"},r.createElement("p",null," Contact me on ",r.createElement("a",{href:"https://www.linkedin.com/in/johan-suarez-largo-a9980499/"},"Linkedin")," and ",r.createElement("a",{href:"mailto:johan@blognotes.dev"},"mail"))),r.createElement("div",{className:"text-light"},r.createElement("p",null," You can find my thoughts ",r.createElement(l.rU,{to:"/blog"},"Blog")))))}},3139:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),l=a(4062),n=a(1597),c=function(e){var t=e.urlRedirect;return r.createElement("nav",{className:"navbar navbar-light bg-light"},r.createElement("div",{className:"container-fluid"},r.createElement(n.rU,{to:t,className:"navbar-brand"},"BlogNotes.dev"),r.createElement("form",{className:"d-flex"},r.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}))))},o=function(e){var t=e.children;return r.createElement("section",{className:"d-flex flex-column vh-100"},r.createElement(c,{urlRedirect:"/blog"}),r.createElement("main",{className:"container"},r.createElement("div",{className:"row text-center my-4"},r.createElement("p",{className:"h1"},"Blog")),r.createElement("div",{className:"container"},t)),r.createElement(l.Z,null))},s=a(3993),m=function(e){var t=e.data;return r.createElement(o,null,t.allMdx.nodes.map((function(e){return r.createElement(s.Z,{key:e.id,blog:{title:e.frontmatter.title,date:e.frontmatter.date,description:e.frontmatter.description,folder:e.frontmatter.folder,progress:e.frontmatter.progress}})})))}},2200:function(e,t,a){function r(e){var t={color:"",nLevel:0,wLevel:"",progress:0};return e>=0&&e<25?(t.color="bg-secondary",t.nLevel=0,t.wLevel="raw",t.progress=e):e>=25&&e<50?(t.color="bg-danger",t.nLevel=25,t.wLevel="basic",t.progress=e):e>=50&&e<75?(t.color="bg-warning",t.nLevel=50,t.wLevel="middle",t.progress=e):e>=75&&e<100?(t.color="bg-primary",t.nLevel=75,t.wLevel="advance",t.progress=e):100===e&&(t.color="bg-success",t.nLevel=100,t.wLevel="done",t.progress=e),t}function l(e,t){return"/"+e+"/"+t.replace(/ /g,"-")}a.d(t,{R:function(){return l},Y:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-8010ec2fb20ec74e44fa.js.map