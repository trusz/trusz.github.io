"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[418],{9613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},f),{},{components:n})):r.createElement(g,o({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(5443),a=n(3010),i=(n(9496),n(9613)),o=["components"],s={},l="Assert",c={unversionedId:"go/assert",id:"go/assert",title:"Assert",description:"A few helper functions for testing if you don't want to",source:"@site/garden/snippets/go/assert.md",sourceDirName:"go",slug:"/go/assert",permalink:"/garden/snippets/go/assert",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/garden/snippets/category/go"},next:{title:"Log",permalink:"/garden/snippets/go/log"}},f={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assert"},"Assert"),(0,i.kt)("p",null,"A few helper functions for testing if you don't want to\ninstall a library for it. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can find the latest version always at ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/trusz/1daf4cf2adb5ea96dfcc8424f9513292#file-assert-go"},"trusz/assert.go \u2197")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package assert\n\nimport (\n    "fmt"\n    "path/filepath"\n    "reflect"\n    "runtime"\n    "testing"\n)\n\n// Assert fails the test if the condition is false.\nfunc Assert(tb testing.TB, condition bool, failMsg string, v ...interface{}) {\n    if !condition {\n        _, file, line, _ := runtime.Caller(1)\n        fmt.Printf("\\033[31m%s:%d: "+failMsg+"\\033[39m\\n\\n", append([]interface{}{filepath.Base(file), line}, v...)...)\n        tb.FailNow()\n    }\n}\n\n// Ok fails the test if an err is not nil.\nfunc Ok(tb testing.TB, err error) {\n    if err != nil {\n        _, file, line, _ := runtime.Caller(1)\n        fmt.Printf("\\033[31m%s:%d: unexpected error: %s\\033[39m\\n\\n", filepath.Base(file), line, err.Error())\n        tb.FailNow()\n    }\n}\n\n// Equals fails the test if exp is not equal to act.\nfunc Equals(tb testing.TB, act, exp interface{}, failMsg string) {\n    if !reflect.DeepEqual(exp, act) {\n        _, file, line, _ := runtime.Caller(1)\n        fmt.Printf("\\033[31m"+failMsg+"\\n\\033[31m%s:%d:\\n\\n\\texp: %#v\\n\\n\\tgot: %#v\\033[39m\\n\\n", filepath.Base(file), line, exp, act)\n        tb.FailNow()\n    }\n}\n\n// Same fails the test if the two objects are not the same\nfunc Same(tb testing.TB, act, exp interface{}, failMsg string) {\n    if act != exp {\n        _, file, line, _ := runtime.Caller(1)\n        fmt.Printf("\\033[31m"+failMsg+"\\n\\033[31m%s:%d:\\n\\n\\texp: %p -> %#v\\n\\n\\tgot: %p -> %#v\\033[39m\\n\\n", filepath.Base(file), line, exp, exp, act, act)\n        tb.FailNow()\n    }\n}\n\n// NotNil asserts if the act is nill\nfunc NotNil(tb testing.TB, act interface{}, failMsg string) {\n    Assert(tb, act != nil, failMsg)\n}\n\n')))}m.isMDXComponent=!0}}]);