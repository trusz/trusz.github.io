"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[198],{9613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7238:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(5443),r=a(3010),o=(a(9496),a(9613)),i=["components"],s={},l="Monodraw Tip - Anchors",c={unversionedId:"monodraw/monodraw-tips-anchors",id:"monodraw/monodraw-tips-anchors",title:"Monodraw Tip - Anchors",description:"I use Monodraw to create my Diagrams. Its anchors feature is really helpful to make diagrams more flexible and easier to change.",source:"@site/garden/guides/monodraw/monodraw-tips-anchors.md",sourceDirName:"monodraw",slug:"/monodraw/monodraw-tips-anchors",permalink:"/garden/guides/monodraw/monodraw-tips-anchors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monodraw",permalink:"/garden/guides/category/monodraw"}},p={},m=[{value:"Anchors and Attachment Points",id:"anchors-and-attachment-points",level:2},{value:"Aligning Objects",id:"aligning-objects",level:2},{value:"Responsive Separators",id:"responsive-separators",level:2},{value:"Responsive Diagram Frame",id:"responsive-diagram-frame",level:2},{value:"UML Class Diagram",id:"uml-class-diagram",level:2}],h={toc:m};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monodraw-tip---anchors"},"Monodraw Tip - Anchors"),(0,o.kt)("p",null,"I use Monodraw to create my Diagrams. Its anchors feature is really helpful to make diagrams more flexible and easier to change.\nThere are a few use cases we can implement with them."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://monodraw.helftone.com/"},"\u2197 Monodraw for macOS \u2014 Helftone"))),(0,o.kt)("blockquote",null,(0,o.kt)("h6",{parentName:"blockquote",id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#anchors-and-attachment-points"},"Anchors and Attachment Points")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#aligning-objects"},"Aligning Objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responsive-separators"},"Responsive Separators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responsive-diagram-frame"},"Responsive Diagram Frame")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#uml-class-diagram"},"UML Class Diagram")))),(0,o.kt)("h2",{id:"anchors-and-attachment-points"},"Anchors and Attachment Points"),(0,o.kt)("p",null,"In Monodraw every object has one anchor point (left) and multiple attachment points (right)."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/monodraw-tips-01/anchor.png",height:"150"}),(0,o.kt)("img",{src:"/img/monodraw-tips-01/attachment_points.png",height:"150"})),(0,o.kt)("p",null,'With the anchor you can anchor an object to another object\'s attachment point.\nThis makes the object "stick" to the other one.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating monodraw&#39;s anchor feature",src:a(8676).Z,width:"1056",height:"499"})),(0,o.kt)("p",null,"This enables us to create responsive components.\nLet's see a few use cases"),(0,o.kt)("h2",{id:"aligning-objects"},"Aligning Objects"),(0,o.kt)("p",null,"We can align text with the text align option."),(0,o.kt)("img",{src:"/img/monodraw-tips-01/text_align.png",width:"200"}),(0,o.kt)("p",null,"However, there is no alignment option for objects.\nBut we have anchors! Set the object's anchor point and the parent's attachment point depending on where you want to align the object.\nFor example if you want to align the object on the top left side:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"set the object's anchor to the top left  ",(0,o.kt)("img",{src:"/img/monodraw-tips-01/setup_obj_top_left.png",height:"140"})),(0,o.kt)("li",{parentName:"ol"},"turn on the parent's top left inner attachment point  ",(0,o.kt)("img",{src:"/img/monodraw-tips-01/setup_top_left.png",height:"140"})),(0,o.kt)("li",{parentName:"ol"},"drag the object's anchor point to the parent's attachment point.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating attaching object",src:a(2452).Z,width:"243",height:"242"}))),(0,o.kt)("p",null,"Now you can resize or move the parent the object stays aligned."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating resizing",src:a(6360).Z,width:"384",height:"338"})),(0,o.kt)("p",null,"Here are all the possible alignment positions configured:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating all alignments",src:a(7379).Z,width:"502",height:"414"})),(0,o.kt)("h2",{id:"responsive-separators"},"Responsive Separators"),(0,o.kt)("p",null,"Responsive separators are really useful when onw wants to isolate text within an object. We will se examples at the end."),(0,o.kt)("p",null,"So how to configure them? This will require a few tricks.\nLet's say we want to separate the name of the box from the rest of it like this:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"responsive separator",src:"/img/monodraw-tips-01/responsive-separator.png",width:"250"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a rect and turn off text and fill."),(0,o.kt)("li",{parentName:"ol"},"Turn on the top left inner and top right inner attachment points and turn off every other.  ",(0,o.kt)("img",{src:"/img/monodraw-tips-01/sep_config_01.png",height:"400"})),(0,o.kt)("li",{parentName:"ol"},"Create two 3x3 boxes. We will call them ports."),(0,o.kt)("li",{parentName:"ol"},"Configure one port to have a bottom-left inner attachment point and a top-left anchor.  ",(0,o.kt)("img",{src:"/img/monodraw-tips-01/sep_port_left.png",width:"200"})),(0,o.kt)("li",{parentName:"ol"},"Configure the other port to have bottom-right attachment point and a top-right anchor.  ",(0,o.kt)("img",{src:"/img/monodraw-tips-01/sep_port_right.png",width:"200"})),(0,o.kt)("li",{parentName:"ol"},"Attach the ports to the parent.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating attaching port to parent",src:a(4015).Z,width:"227",height:"343"})),(0,o.kt)("li",{parentName:"ol"},"Draw a line without arrows from the left port to the right port.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating drawing line between ports",src:a(1581).Z,width:"485",height:"261"})),(0,o.kt)("li",{parentName:"ol"},"Remove fill and border from ports.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating removing fill and border",src:a(2159).Z,width:"485",height:"261"})),(0,o.kt)("li",{parentName:"ol"},"Add a borderless text and align in the top center.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating adding text",src:a(1026).Z,width:"529",height:"453"})),(0,o.kt)("li",{parentName:"ol"},"Configure a new box to have:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"text align: top left"),(0,o.kt)("li",{parentName:"ul"},"no fill"),(0,o.kt)("li",{parentName:"ul"},"no border "),(0,o.kt)("li",{parentName:"ul"},"anchor offset x=1 y=1"))),(0,o.kt)("li",{parentName:"ol"},"Attach the text to the left port.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"gif demonstrating adding body text",src:a(1928).Z,width:"529",height:"959"}))),(0,o.kt)("p",null,"Now you have a responsive text box with title and body:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating a responsive text box with title and body",src:a(7296).Z,width:"458",height:"296"})),(0,o.kt)("h2",{id:"responsive-diagram-frame"},"Responsive Diagram Frame"),(0,o.kt)("p",null,"I usually frame the diagrams to provide a few metadata about the project security level and company. With the object alignment and responsive separator I could create a nice resizable frame."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating a responsive frame",src:a(9044).Z,width:"875",height:"723"})),(0,o.kt)("h2",{id:"uml-class-diagram"},"UML Class Diagram"),(0,o.kt)("p",null,"Sometimes I still need an UML Class diagram. This is can be also nicely done. Here I use a responsive separator for the class name on the top and one in the middle to separate the class members and functions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gif demonstrating an UML Class Diagram",src:a(2979).Z,width:"475",height:"425"})))}d.isMDXComponent=!0},8676:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-01-1049aa25e4dc3df45b133f2dbde85541.gif"},2452:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-02-d5eb94eb6a1d104d9c0ceeaea831bc20.gif"},6360:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-03-da5a5357978526db928070b6a784cf6e.gif"},7379:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-04-c6211e7a75052415bdac54b06740bdb2.gif"},4015:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-05-22a09c4ceb5aa8351bc7dc607ef0d1a3.gif"},1581:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-06-786a14722eb739cb3f3ff50ef409088b.gif"},2159:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-07-17716c1119d8c1ab393448b7a4980998.gif"},1026:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-08-335ec2edf713c4a31602667dd9537085.gif"},1928:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-09-614101fd772920c9cfd95006c9b48214.gif"},7296:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-10-c7701fec178270b31229625eb9ca30c3.gif"},9044:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-resp-frame-96afa9670c0927721701acd0de244a37.gif"},2979:function(e,t,a){t.Z=a.p+"assets/images/monodraw-anchors-uml-class-137fa9eaa704c9f535d92c301491fd92.gif"}}]);