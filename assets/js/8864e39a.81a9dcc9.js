"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[645],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(4250),a=(n(9496),n(9613));const o={},i="File Naming Convention",l={unversionedId:"frontend/file-naming-convention",id:"frontend/file-naming-convention",title:"File Naming Convention",description:"I use kebab-case instead of camelCase for file names because changing lower",source:"@site/garden/guides/frontend/file-naming-convention.md",sourceDirName:"frontend",slug:"/frontend/file-naming-convention",permalink:"/garden/guides/frontend/file-naming-convention",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Barrel Pattern",permalink:"/garden/guides/frontend/barrel-pattern"},next:{title:"UI Components' File Structure",permalink:"/garden/guides/frontend/ui-component-file-structure"}},p={},c=[{value:"Details",id:"details",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-naming-convention"},"File Naming Convention"),(0,a.kt)("p",null,"I use ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase")," for file names because changing lower",(0,a.kt)("br",{parentName:"p"}),"\n","case letters to capital ones have caused problems in every one of my projects."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kebab-case"),": all words are lowercase separated with ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," (hyphen)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PascalCase"),": every word starts with capital letter, no space between words"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"camelCase"),": every word starts with capital letter,\nexcept the first one, no space between words"))),(0,a.kt)("p",null,"The problem I always have with ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PascalCase")," is that that git",(0,a.kt)("br",{parentName:"p"}),"\n","does not recognize the change from lowercase to capital."),(0,a.kt)("p",null,'For example, let\'s take the TypeScript component "Shopping Cart".  '),(0,a.kt)("p",null,"I have a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"Shoppingcart.ts")," (typo is intended) and I import it in\nanother file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as ShoppingCart from './Shoppingcart.ts'\n")),(0,a.kt)("p",null,"Some time later, or immediately, I recognize the typo and I would fix it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"rename the file to ",(0,a.kt)("inlineCode",{parentName:"p"},"ShoppingCart.ts"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fix the import:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as ShoppingCart from './ShoppingCart.ts'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"commit code"))),(0,a.kt)("p",null,"Anybody else who pulls the new code would get the change in the file but",(0,a.kt)("br",{parentName:"p"}),"\n","not renaming of the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as ShoppingCart from './ShoppingCart.ts'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"components/\n\u2514\u2500Shoppingcart.ts\n")),(0,a.kt)("p",null,"Most of the the time the file won't be found."),(0,a.kt)("p",null,"There are of course solution to this like using ",(0,a.kt)("inlineCode",{parentName:"p"},"git mv")," or changing git and/or",(0,a.kt)("br",{parentName:"p"}),"\n","file system configurations.  "),(0,a.kt)("p",null,"I have found it us easier to use ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case")," file names than to have the same",(0,a.kt)("br",{parentName:"p"}),"\n","configurations in the teams."))}u.isMDXComponent=!0}}]);