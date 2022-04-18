(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{2260:function(e,t,a){"use strict";var r=a(7294),l=a(1597),c=a(4697),n=a(8945);t.Z=function(e){var t=e.blog,s=(0,c.Yw)(t.progress);return r.createElement("div",{className:"card mb-3 bg-color-3 px-1 text-white"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-12 d-flex justify-content-center"},r.createElement(n.S,{width:130,height:130,placeholder:"blurred",src:"../../../static/images/thumbnails/JavaScript_logo_2.png",alt:"blogImage",className:"align-self-center m-5",__imageData:a(671)})),r.createElement("div",{className:"col-md-8 col-15"},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title text-center"},t.title),r.createElement("p",{className:"card-text"},t.description),r.createElement("p",{className:"card-text"},r.createElement("small",{className:"text-white-50"},t.date)),r.createElement("div",{className:"d-flex justify-content-end"},r.createElement("span",{className:"align-self-end badge rounded-pill "+s.color},s.wLevel)),r.createElement(l.Link,{className:"stretched-link",to:(0,c.Ri)(t.folder,t.title)})))))}},8606:function(e,t,a){"use strict";var r=a(7294),l=a(2400),c=a.n(l),n=a(2358),s=a.n(n),i=a(6817),o=a.n(i),d=a(6458),m=a.n(d);t.Z=function(){return r.createElement("footer",{className:"footer mt-auto py-3 bg-color-4"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row text-light text-center"},r.createElement("p",null," Any question ? :")),r.createElement("div",{className:"row"},r.createElement("div",{className:"col d-flex justify-content-center"},r.createElement("a",{href:"mailto:johan@blognotes.dev",className:"mx-2"},r.createElement(m(),{width:"30",height:"30"})),r.createElement("a",{href:"https://github.com/jadry92",className:"mx-2"},r.createElement(s(),{width:"30",height:"30"})),r.createElement("a",{href:"https://www.linkedin.com/in/johan-suarez-largo-a9980499/",className:"mx-2"},r.createElement(c(),{width:"30",height:"30"})),r.createElement("a",{href:"https://twitter.com/jadry92",className:"mx-2"},r.createElement(o(),{width:"30",height:"30"}))))))}},65:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),l=a(1597),c=a(4697),n=function(e){var t,a,n=e.project,s=(0,c.Yw)(n.progress);return r.createElement("div",{className:"col-sm-12 col-md-6"},r.createElement("div",{className:"card mb-5 mx-4 rounded bg-color-3"},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title text-center text-white"},n.title),r.createElement("p",{className:"card-text text-white"},n.description),r.createElement(l.Link,{className:"stretched-link",to:(t=n.folder,a=n.title,"/"+t+"/"+a.replace(/ /g,"-"))}),r.createElement("div",{className:"progress"},r.createElement("div",{className:"progress-bar "+s.color,role:"progressbar","aria-valuenow":s.nLevel,"aria-valuemin":0,"aria-valuemax":100,style:{width:s.progress+"%"}})))))},s=function(e){var t=e.numberOfProjects,a=(0,l.useStaticQuery)("2820885429");return r.createElement("div",{className:"row"},a.allMdx.nodes.map((function(e){var t={title:e.frontmatter.title,description:e.frontmatter.description,imageURL:"",id:e.id,slug:e.slug,folder:e.frontmatter.folder,progress:e.frontmatter.progress};return r.createElement(n,{key:t.id,project:t})})).slice(0,t))}},2682:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),l=function(e){var t=e.children;return r.createElement("section",{className:"bg-color-3 text-white"},t)},c=a(65),n=a(8606),s=a(1597),i=a(2260),o=function(){var e=(0,s.useStaticQuery)("450011203"),t={title:e.allMdx.nodes[0].frontmatter.title,date:e.allMdx.nodes[0].frontmatter.date,description:e.allMdx.nodes[0].frontmatter.description,folder:e.allMdx.nodes[0].frontmatter.folder,progress:e.allMdx.nodes[0].frontmatter.progress,thumbnail:e.allMdx.nodes[0].frontmatter.thumbnail};return r.createElement("div",{className:"w-75"},r.createElement(i.Z,{blog:t}))},d=a(6140),m=a.n(d),u=function(e){e.data;return r.createElement(l,null,r.createElement("div",{className:"container-fluid my-vh-90"},r.createElement("div",{className:"row h-50 align-content-center"},r.createElement("div",{className:"col text-center"},r.createElement("h1",{className:"display-1"}," Welcome to ",r.createElement("strong",{className:"blog-title"},"BlogNotes.dev")))),r.createElement("div",{className:"row h-50 align-content-center mx-3"},r.createElement("div",{className:"col-12"},r.createElement("h2",{className:"display-4"},"Hi!, I'm Johan.")),r.createElement("div",{className:"col-12"},r.createElement("p",{className:"h3"},"I'm a geek passionate about technology and in love with science. I studied a bachelor of science and electronics engineering, when I developed a huge interest in processors and software. This site is been migrated to Gatsby at the moment :)")))),r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row bg-color-2"},r.createElement("div",{className:"col-12 my-3"},r.createElement("h2",{className:"ps-4"},"Projects:"))),r.createElement("div",{className:"row bg-color-2"},r.createElement(c.Z,{numberOfProjects:4}))),r.createElement("div",{className:"container-fluid bg-color-5"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 my-3"},r.createElement("h2",{className:"ps-4"},"Lates Publication:"))),r.createElement("div",{className:"row d-flex justify-content-center"},r.createElement(o,null)),r.createElement("div",{className:"row py-5"},r.createElement("p",{className:"h4 d-flex justify-content-center"},r.createElement(s.Link,{className:"",to:"/blog"},r.createElement(m(),{width:"50",height:"50"})," All posts ",r.createElement(m(),{width:"50",height:"50"}))))),r.createElement(n.Z,null))}},4697:function(e,t,a){"use strict";function r(e){var t={color:"",nLevel:0,wLevel:"",progress:0};return e>=0&&e<25?(t.color="bg-secondary",t.nLevel=0,t.wLevel="raw",t.progress=e):e>=25&&e<50?(t.color="bg-danger",t.nLevel=25,t.wLevel="basic",t.progress=e):e>=50&&e<75?(t.color="bg-warning",t.nLevel=50,t.wLevel="middle",t.progress=e):e>=75&&e<100?(t.color="bg-primary",t.nLevel=75,t.wLevel="advance",t.progress=e):100===e&&(t.color="bg-success",t.nLevel=100,t.wLevel="done",t.progress=e),t}function l(e,t){return"/"+e+"/"+t.replace(/ /g,"-")}a.d(t,{Ri:function(){return l},Yw:function(){return r}})},6140:function(e,t,a){var r=a(7294);function l(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z",key:1})])}l.defaultProps={height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.exports=l,l.default=l},6458:function(e,t,a){var r=a(7294);function l(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",key:1})])}l.defaultProps={height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},e.exports=l,l.default=l},2358:function(e,t,a){var r=a(7294);function l(e){return r.createElement("svg",e,r.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"}))}l.defaultProps={width:"inherit",height:"inherit",viewBox:"0 0 16 15.6"},e.exports=l,l.default=l},2400:function(e,t,a){var r=a(7294);function l(e){return r.createElement("svg",e,r.createElement("path",{d:"M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z",fillRule:"nonzero"}))}l.defaultProps={width:"inherit",height:"inherit",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},e.exports=l,l.default=l},6817:function(e,t,a){var r=a(7294);function l(e){return r.createElement("svg",e,r.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z",fillRule:"nonzero"}))}l.defaultProps={width:"inherit",height:"inherit",viewBox:"0 0 16.01 13.01",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},e.exports=l,l.default=l},671:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACC0lEQVQ4y+2STWgTURDHp9ukrek2NZsPm2b3zXYlgh49VLCCBUEPOdajZw/ivUeVilBpxfpFFErQIuhFFL8QD16LtRaxB4vZbfO5SRtitdloPjYjm1YNJQEpHn0MD96895v5z5uB78tsxwb/4X8HFzXLGo+GtiN4I2rtpRgrqMxQ/wI2fr/TGGVwI8rWFiUzjdU0bgaFpgkrCaZ/EI8d2XUy5Pj2Waom8dpFYX/QLvrbR0KOxTf91QQaWjPY0JiZxNhcwMlzCtrMFD6a9gJAf1/70GAnAJw+xZOOhtoCriYxMS8Ku7mgYiMdR886ASBy00OkPL/rTS2I5bglsCUcfyf2Oq3MpOOdCTcAHNhnf3DLU8pgLS8X1RY1F9Q/cHDAVohanpGQA+prr2x7NuOjTDPZhmr1oxzHlbd1WLF/XZIqaSzn5CcR3/GjXQDAd3Pzr/yURtj2z7UsJt+LlJOzn6TeHgs2VJb9KM296KOKQqYyesaqf/K8i/IyNKqlLN6+7Oa726bGhBuXBAAYGuysxNmhgx0d9rarF4SX9/cMH7aSz1z30FoDbKiMdHwc8fbw3GZ5HAcPwx7Ky+FxwVl3cvWbE8Nd60vSjxW2XTatYnQ2EB4XpsZcC6/9tfow0aqszQamr7gnzrme3vMVllk50axVRY1VU0hfZFqXTX1rDIsaM385KSeXYlsz/xOJuKXQ2JEzDwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/1f53e40d248cd143be304da86dd8a877/c1559/JavaScript_logo_2.png","srcSet":"/static/1f53e40d248cd143be304da86dd8a877/f9f53/JavaScript_logo_2.png 33w,\\n/static/1f53e40d248cd143be304da86dd8a877/b024c/JavaScript_logo_2.png 65w,\\n/static/1f53e40d248cd143be304da86dd8a877/c1559/JavaScript_logo_2.png 130w,\\n/static/1f53e40d248cd143be304da86dd8a877/cbc40/JavaScript_logo_2.png 260w","sizes":"(min-width: 130px) 130px, 100vw"},"sources":[{"srcSet":"/static/1f53e40d248cd143be304da86dd8a877/0cc22/JavaScript_logo_2.webp 33w,\\n/static/1f53e40d248cd143be304da86dd8a877/0c531/JavaScript_logo_2.webp 65w,\\n/static/1f53e40d248cd143be304da86dd8a877/a819e/JavaScript_logo_2.webp 130w,\\n/static/1f53e40d248cd143be304da86dd8a877/0fcc6/JavaScript_logo_2.webp 260w","type":"image/webp","sizes":"(min-width: 130px) 130px, 100vw"}]},"width":130,"height":130}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5ddd1b70969432277300.js.map