"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[119],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(4250),a=(n(9496),n(9613));const o={},s="Table Driven Tests",i={unversionedId:"go/table-driven-test",id:"go/table-driven-test",title:"Table Driven Tests",description:"Table Driven Tests",source:"@site/garden/snippets/go/table-driven-test.md",sourceDirName:"go",slug:"/go/table-driven-test",permalink:"/garden/snippets/go/table-driven-test",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table Driven Benchmark",permalink:"/garden/snippets/go/table-benchmark"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-driven-tests"},"Table Driven Tests"),(0,a.kt)("p",null,"Table Driven Tests\n(",(0,a.kt)("a",{parentName:"p",href:"https://dave.cheney.net/2019/05/07/prefer-table-driven-tests"},"Prefer table driven tests \u2197"),")\nhelp to easily add/remove/dele test cases."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can find the latest version always at\n",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/trusz/1daf4cf2adb5ea96dfcc8424f9513292#file-table_driven_test-go"},"trusz/table_driven_test.go \u2197"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package test\n\nimport (\n    "testing"\n)\n\nfunc TestX(t *testing.T) {\n\n    var tests = []testCase{\n        {\n            desc: "simple test",\n        },\n    }\n\n    for _, tc := range tests {\n        t.Run(tc.desc, func(t *testing.T) { testX(t, tc) })\n    }\n\n}\n\ntype testCase struct {\n    desc string\n}\n\nfunc testX(t *testing.T, tc testCase) {\n\n    //\n    // Arrange\n    //\n\n    //\n    // Act\n    //\n\n    //\n    // Assert\n    //\n\n}\n')))}p.isMDXComponent=!0}}]);