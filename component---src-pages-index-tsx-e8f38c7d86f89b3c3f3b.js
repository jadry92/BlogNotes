"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{4062:function(e,t,r){var a=r(7294),n=r(1597);t.Z=function(){return a.createElement("footer",{className:"footer mt-auto py-3 bg-color-4"},a.createElement("div",{className:"container"},a.createElement("div",{className:"text-light"},a.createElement("p",null," Contact me on ",a.createElement("a",{href:"https://www.linkedin.com/in/johan-suarez-largo-a9980499/"},"Linkedin")," and ",a.createElement("a",{href:"mailto:johan@blognotes.dev"},"mail"))),a.createElement("div",{className:"text-light"},a.createElement("p",null," You can find my thoughts ",a.createElement(n.rU,{to:"/blog"},"Blog")))))}},1733:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(7294),n=r(1597),l=r(2200),c=function(e){var t,r,c=e.project,s=(0,l.Y)(c.progress);return a.createElement("div",{className:"col-sm-12 col-md-6"},a.createElement("div",{className:"card mb-5 mx-4 border border-primary rounded"},a.createElement("div",{className:"card-body"},a.createElement("h5",{className:"card-title text-center"},c.title),a.createElement("p",{className:"card-text text-dark"},c.description),a.createElement(n.rU,{className:"stretched-link",to:(t=c.folder,r=c.title,"/"+t+"/"+r.replace(/ /g,"-"))}),a.createElement("div",{className:"progress"},a.createElement("div",{className:"progress-bar "+s.color,role:"progressbar","aria-valuenow":s.nLevel,"aria-valuemin":0,"aria-valuemax":100,style:{width:s.progress+"%"}})))))},s=function(e){var t=e.numberOfProjects,r=(0,n.K2)("2820885429");return a.createElement("div",{className:"row"},r.allMdx.nodes.map((function(e){var t={title:e.frontmatter.title,description:e.frontmatter.description,imageURL:"",id:e.id,slug:e.slug,folder:e.frontmatter.folder,progress:e.frontmatter.progress};return a.createElement(c,{key:t.id,project:t})})).slice(0,t))}},7171:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(7294),n=function(e){var t=e.children;return a.createElement("section",{className:""},t)},l=r(1733),c=r(4062),s=function(e){e.data;return a.createElement(n,null,a.createElement("div",{className:"container-fluid my-vh-90"},a.createElement("div",{className:"row h-50 align-content-center"},a.createElement("div",{className:"col text-center"},a.createElement("h1",{className:"display-1"}," Welcome to ",a.createElement("strong",{className:"title-font-family"},"BlogNotes.dev")))),a.createElement("div",{className:"row h-50 align-content-center mx-3"},a.createElement("div",{className:"col-12"},a.createElement("h2",{className:"display-4"},"I'm Johan.")),a.createElement("div",{className:"col-12"},a.createElement("p",{className:"h3"},"This site is been migrated to Gatsby at the moment :)")))),a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row bg-color-2"},a.createElement("div",{className:"col-12 my-3"},a.createElement("h3",{className:"ps-4"},"Projects:")))),a.createElement("div",{className:"container-fluid"},a.createElement(l.Z,{numberOfProjects:2})),a.createElement(c.Z,null))}},2200:function(e,t,r){function a(e){var t={color:"",nLevel:0,wLevel:"",progress:0};return e>=0&&e<25?(t.color="bg-secondary",t.nLevel=0,t.wLevel="raw",t.progress=e):e>=25&&e<50?(t.color="bg-danger",t.nLevel=25,t.wLevel="basic",t.progress=e):e>=50&&e<75?(t.color="bg-warning",t.nLevel=50,t.wLevel="middle",t.progress=e):e>=75&&e<100?(t.color="bg-primary",t.nLevel=75,t.wLevel="advance",t.progress=e):100===e&&(t.color="bg-success",t.nLevel=100,t.wLevel="done",t.progress=e),t}function n(e,t){return"/"+e+"/"+t.replace(/ /g,"-")}r.d(t,{R:function(){return n},Y:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e8f38c7d86f89b3c3f3b.js.map