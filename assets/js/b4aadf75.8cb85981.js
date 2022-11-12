"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[401],{9613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),c=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(g,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=t(4250),o=(t(9496),t(9613));const a={},i="Log",l={unversionedId:"go/log",id:"go/log",title:"Log",description:"This log package configures the logger to easily read what",source:"@site/garden/snippets/go/log.md",sourceDirName:"go",slug:"/go/log",permalink:"/garden/snippets/go/log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert",permalink:"/garden/snippets/go/assert"},next:{title:"Modd Config",permalink:"/garden/snippets/go/modd"}},g={},c=[],s={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log"},"Log"),(0,o.kt)("p",null,"This log package configures the logger to easily read what\nkind of message we log."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can find the latest version always at ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/trusz/1daf4cf2adb5ea96dfcc8424f9513292#file-log-go"},"trusz/log.go \u2197"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package log\n\nimport (\n    "encoding/json"\n    "log"\n    "os"\n)\n\nvar (\n    // Debug _\n    Debug *log.Logger = log.New(\n        os.Stdout,\n        "\ud83d\udc1e  DEBUG: ",\n        log.Lshortfile,\n    )\n    // Trace _\n    Trace *log.Logger = log.New(\n        os.Stdout,\n        "\ud83d\udcd0 TRACE : ",\n        log.Ldate|log.Ltime|log.Lshortfile,\n    )\n    // Info _\n    Info *log.Logger = log.New(\n        os.Stdout,\n        "\u2139\ufe0f  INFO: ",\n        log.Ldate|log.Ltime|log.Lshortfile,\n    )\n    // Warning _\n    Warning *log.Logger = log.New(\n        os.Stdout,\n        "\u26a0\ufe0f WARNING: ",\n        log.Ldate|log.Ltime|log.Lshortfile,\n    )\n    // Error _\n    Error *log.Logger = log.New(\n        os.Stderr,\n        "\ud83d\udd25  ERROR: ",\n        log.Ldate|log.Ltime|log.Llongfile,\n    )\n    // Test _\n    Test *log.Logger = log.New(\n        os.Stderr,\n        "\ud83e\uddea  TEST: ",\n        log.Ldate|log.Ltime|log.Lshortfile,\n    )\n    // Pretty _\n    Pretty = func(template string, objs ...interface{}) {\n        prettyString, err := json.MarshalIndent(objs, "", "  ")\n        if err != nil {\n            Error.Printf("error: %s", err)\n        }\n\n        Debug.Printf("%s", prettyString)\n    }\n)\n')))}u.isMDXComponent=!0}}]);