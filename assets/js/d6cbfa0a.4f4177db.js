"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[438],{9613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var o=n(4250),r=(n(9496),n(9613));const a={},i="UI Components' File Structure",p={unversionedId:"frontend/ui-component-file-structure",id:"frontend/ui-component-file-structure",title:"UI Components' File Structure",description:"Basic component file structure:",source:"@site/garden/guides/frontend/ui-component-file-structure.md",sourceDirName:"frontend",slug:"/frontend/ui-component-file-structure",permalink:"/garden/guides/frontend/ui-component-file-structure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Naming Convention",permalink:"/garden/guides/frontend/file-naming-convention"},next:{title:"UI Development in Docker",permalink:"/garden/guides/frontend/ui-development-in-docker"}},s={},c=[{value:"Details",id:"details",level:2},{value:"Naming",id:"naming",level:3},{value:"Structure",id:"structure",level:3}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ui-components-file-structure"},"UI Components' File Structure"),(0,r.kt)("p",null,"Basic component file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"src/\n\u2514\u2500 components/\n   \u2514\u2500 <component>/\n      \u251c\u2500 index.ts                         # entrypoint\n      \u251c\u2500 <component>.tsx                  # main component\n      \u251c\u2500 <sub-component>.tsx              # any sub component\n      \u251c\u2500 <component>.stories.tsx          # stories about the main component\n      \u251c\u2500 <component>.spec.stories.tsx     # stories for testing purposes\n      \u2514\u2500 <component>.spec.ts              # component tests\n")),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"The following is a styleguide that I use when working on web UIs.",(0,r.kt)("br",{parentName:"p"}),"\n","Most parts are framework/library independent but usually I use the following the tech-stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org"},"TypeScript")," (Language)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"ReactJS")," (View Library)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook")," (UI-Component-Lib Framework)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer"},"Chrome Puppeteer")," (Browser Automation)")),(0,r.kt)("h3",{id:"naming"},"Naming"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Info:")," More about naming here: ","[File Naming Convention]","(.. /file-naming-convention)")),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"src/\n\u2514\u2500 components/\n   \u2514\u2500 <component>/\n      \u251c\u2500 index.ts                         # entrypoint\n      \u251c\u2500 <component>.tsx                  # main component\n      \u251c\u2500 <sub-component>.tsx              # any sub component\n      \u251c\u2500 <component>.stories.tsx          # stories about the main component\n      \u251c\u2500 <component>.spec.stories.tsx     # stories for testing purposes\n      \u2514\u2500 <component>.spec.ts              # component tests\n")),(0,r.kt)("p",null,"Components are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/components")," folder.",(0,r.kt)("br",{parentName:"p"}),"\n","Each component has a folder with the name of the component (e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"button/"),")"),(0,r.kt)("p",null,"In this folder there are required files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<component.tsx>")," is where the component lives (e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"button.tsx"),")  "),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  If the component gets too big, split it up into sub-components: ",(0,r.kt)("inlineCode",{parentName:"p"},"<sub-component>.tsx"))),(0,r.kt)("p",{parentName:"li"},"\u270f\ufe0f Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"button.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\n\nexport function Button(props: React.PropsWithChildren<Props>) {\n\n    const {\n        onClick = noopOnClick,\n        children,\n    } = props;\n\n    return (\n        <button\n            access-id=\"button\"\n            onClick={onClick}\n          >\n            {children}\n        </button>\n    )\n}\n\ninterface Props {\n    onClick?: () => void\n}\n\nfunction noopOnClick() { }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),": we think of the folder as a package and ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," exports everything\nthat is meant for public usage.  "),(0,r.kt)("p",{parentName:"li"},"\u270f\ufe0f Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export { default as Button } from './button'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<component>.stories.tsx")," creates style guide stories for the component.\nStyle guide stories demonstrate, among other thins, the different visual appearances.  "),(0,r.kt)("p",{parentName:"li"},"\u270f\ufe0f Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"button.stories.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { Button } from \"./button\"\n\nexport default {\n    component: Button,\n    title: 'Components|Button',\n};\n\nexport const text = () => <Button>Hello, Button!</Button>;\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<component>.spec.stories.tsx")," contain the stories that setup components for the tests"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Why not ",(0,r.kt)("inlineCode",{parentName:"p"},"<component>.stories.spec.tsx"),"?",(0,r.kt)("br",{parentName:"p"}),"\n","Everything ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"*.spec")," are considered to be tests and would be confusing for developers",(0,r.kt)("br",{parentName:"p"}),"\n","See ",(0,r.kt)("inlineCode",{parentName:"p"},"<component>.spec.ts"))),(0,r.kt)("p",{parentName:"li"},"\u270f\ufe0f Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"button.spec.stories.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from \'react\';\nimport { Button } from "./button"\n\nexport default {\n    component: Button,\n    title: \'Components|Button/Test\',\n};\n\nexport const TestOnClick = () => {\n\n    const [text, setText] = React.useState("not clicked")\n\n    return (\n        <div>\n            <Button\n                onClick={() => setText("clicked")}\n            >\n                Click to set text 1\n                </Button>\n            <div access-id="text-target">{text}</div>\n        </div>\n    )\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<component>.spec.ts")," contains the component tests",(0,r.kt)("br",{parentName:"p"}),"\n","In case the spec gets too large one can split up and prefix specs e.g.:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<component>.awesome-feature.spec.tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<component>.nasty-bugs.spec.tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<component>.crazy-edge-cases.spec.tsx"))),(0,r.kt)("p",{parentName:"li"},"\u270f\ufe0f Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"button.spec.tsx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { describe, it } from 'mocha'\nimport { expect } from 'chai'\nimport { startBrowser, baseUrl } from 'testing'\n\ndescribe('Button', () => {\n    describe('click action', () => {\n        const clickTests: TestCase[] = [\n            {\n                desc: 'has effect',\n                expectedText: 'clicked'\n            },\n\n        ]\n\n        clickTests.forEach(testClick)\n\n        function testClick(tc: TestCase) {\n            it(tc.desc, async () => {\n                const buttonSelector = 'button[access-id=\"button\"]'\n                const textSelector = '[access-id=\"text-target\"]'\n\n                const b = await startBrowser(0)\n                await b.open(`${baseUrl}/iframe.html?id=components-button--test-on-click`)\n                await b.click(buttonSelector)\n\n                const text = await b.fetchText(textSelector)\n                expect(text).to.be.equal(tc.expectedText)\n            })\n        }\n\n        interface TestCase {\n            desc: string,\n            expectedText: string,\n        }\n\n    })\n})\n\n")))))}u.isMDXComponent=!0}}]);