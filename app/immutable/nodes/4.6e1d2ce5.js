import{s as gs,n as Ma}from"../chunks/scheduler.63274e7e.js";import{S as _s,i as xs,g as t,s as l,H as d,h as n,y as x,c as p,j as r,C as m,f as s,k as f,a as c,A as e}from"../chunks/index.f461cf18.js";function ws(ss){let w,Aa="Barrel Pattern",K,y,Sa=`Handling folders in JavaScript/TypeScript projects as packages makes encapsulation
easier and the structure clearer.`,N,E,Ta=`In the barrel pattern a folder re-exports items from its files and sub-folders<br/>
through an <code>index.ts</code> file, like a barrel and its tap. This makes the code more readable and, if used correctly, more robust because internals of a package/folder do not leak out and we use only that is made public through the <code>index.ts</code>.`,Q,C,Ha="In short, <code>index.ts</code> defines a folder’s/package’s public API.",V,P,Ia="Rules",W,h,R,Da="A folder is a package if it contains an <code>index.ts</code>.",ga,b,X,es=`<code class="language-txt">package-one/
└─index.ts</code>`,Z,v,z,Ua="A package can have sub-packages.",_a,L,$,ts=`<code class="language-txt">package-one/
├─index.ts
└─package-two/
  └─index.ts</code>`,aa,u,M,Fa="A package can import items from its direct sub-packages.",xa,A,sa,ns=`<code class="language-txt">root/
├── main.ts
└── restaurant/
    ├── index.ts
    ├── prepare.ts
    └── food/
        ├── index.ts
        └── food.ts</code>`,wa,S,ea,os=`<code class="language-ts"><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> prepare <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./restaurant'</span>

<span class="token keyword">const</span> pizza <span class="token operator">=</span> <span class="token operator">...</span>
<span class="token function">prepare</span><span class="token punctuation">(</span>pizza<span class="token punctuation">)</span></code>`,ha,T,ta,ls=`<code class="language-ts"><span class="token comment">// restaurant/index.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> prepare <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> '<span class="token punctuation">.</span><span class="token operator">/</span>prepare<span class="token punctuation">.</span>ts</code>`,va,H,na,ps=`<code class="language-ts"><span class="token comment">// restaurant/prepare.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Food <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./food'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">prepare</span><span class="token punctuation">(</span>food<span class="token operator">:</span> Food<span class="token punctuation">)</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span>
</code>`,ya,I,oa,rs=`<code class="language-ts"><span class="token comment">// restaurant/food/index.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> Food <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> '<span class="token punctuation">.</span><span class="token operator">/</span>food<span class="token punctuation">.</span>ts</code>`,Ea,D,la,cs=`<code class="language-ts"><span class="token comment">// restaurant/food/food.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Food</span><span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span></code>`,pa,i,U,Ya=`A package can re-export items from its direct subpackages, 
    but not from sub-packages of its direct sub-packages.`,Ca,F,ra,us=`<code class="language-txt">root/
└── restaurant/
    ├── index.ts
    └── food/
        ├── index.ts
        └── pizzas/
            ├── index.ts
            └── margherita.ts

</code>`,Pa,Y,ca,is=`<code class="language-ts"><span class="token comment">// restaurant/index.ts</span>

<span class="token comment">// GOOD:</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> PizzaMargherita <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./food'</span>

<span class="token comment">// BAD:</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> margherita <span class="token keyword">as</span> PizzaMargherita<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> '<span class="token punctuation">.</span><span class="token operator">/</span>food<span class="token operator">/</span>pizzas<span class="token operator">/</span>margherita<span class="token punctuation">.</span>ts
</code>`,Ra,j,ua,ks=`<code class="language-ts"><span class="token comment">// restaurant/food/index.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> margherita <span class="token keyword">as</span> PizzaMargherita <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./pizzas'</span></code>`,ba,q,ia,ds=`<code class="language-ts"><span class="token comment">// restaurant/food/pizzas/index.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> margherita <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./margherita.ts'</span></code>`,ka,g,B,ja="If a folder does not have an `index.ts` it is not a package and other packages can import from its sub-folders.",za,O,da,ms=`<code class="language-txt">root/
├── main.ts
└── x
    ├── types/
    │   ├── index.ts
    │   └── user.ts
    └── log
        ├── index.ts
        ├── console.ts
        └── file.ts</code>`,La,G,ma,fs=`<code class="language-ts"><span class="token comment">// main.ts</span>

<span class="token comment">// 'x' does not have an &#96;index.ts&#96; therefore not a package</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> User <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./x/types'</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> FileLogger<span class="token punctuation">,</span> ConsoleLogger <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./x/log'</span>

<span class="token keyword">const</span> fileLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileLogger</span><span class="token punctuation">(</span><span class="token string">'./log.txt'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> consoleLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

fileLogger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
consoleLogger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code>`;return{c(){w=t("h1"),w.textContent=Aa,K=l(),y=t("p"),y.textContent=Sa,N=l(),E=t("p"),E.innerHTML=Ta,Q=l(),C=t("p"),C.innerHTML=Ha,V=l(),P=t("h3"),P.textContent=Ia,W=l(),h=t("details"),R=t("summary"),R.innerHTML=Da,ga=l(),b=t("pre"),X=new d(!1),Z=l(),v=t("details"),z=t("summary"),z.textContent=Ua,_a=l(),L=t("pre"),$=new d(!1),aa=l(),u=t("details"),M=t("summary"),M.textContent=Fa,xa=l(),A=t("pre"),sa=new d(!1),wa=l(),S=t("pre"),ea=new d(!1),ha=l(),T=t("pre"),ta=new d(!1),va=l(),H=t("pre"),na=new d(!1),ya=l(),I=t("pre"),oa=new d(!1),Ea=l(),D=t("pre"),la=new d(!1),pa=l(),i=t("details"),U=t("summary"),U.textContent=Ya,Ca=l(),F=t("pre"),ra=new d(!1),Pa=l(),Y=t("pre"),ca=new d(!1),Ra=l(),j=t("pre"),ua=new d(!1),ba=l(),q=t("pre"),ia=new d(!1),ka=l(),g=t("details"),B=t("summary"),B.textContent=ja,za=l(),O=t("pre"),da=new d(!1),La=l(),G=t("pre"),ma=new d(!1),this.h()},l(a){w=n(a,"H1",{"data-svelte-h":!0}),x(w)!=="svelte-1ui1bka"&&(w.textContent=Aa),K=p(a),y=n(a,"P",{"data-svelte-h":!0}),x(y)!=="svelte-184wk2c"&&(y.textContent=Sa),N=p(a),E=n(a,"P",{"data-svelte-h":!0}),x(E)!=="svelte-1bna7sr"&&(E.innerHTML=Ta),Q=p(a),C=n(a,"P",{"data-svelte-h":!0}),x(C)!=="svelte-fos5gi"&&(C.innerHTML=Ha),V=p(a),P=n(a,"H3",{"data-svelte-h":!0}),x(P)!=="svelte-1tno60r"&&(P.textContent=Ia),W=p(a),h=n(a,"DETAILS",{});var o=r(h);R=n(o,"SUMMARY",{"data-svelte-h":!0}),x(R)!=="svelte-jp4rdq"&&(R.innerHTML=Da),ga=p(o),b=n(o,"PRE",{class:!0});var qa=r(b);X=m(qa,!1),qa.forEach(s),o.forEach(s),Z=p(a),v=n(a,"DETAILS",{});var fa=r(v);z=n(fa,"SUMMARY",{"data-svelte-h":!0}),x(z)!=="svelte-w4cuxb"&&(z.textContent=Ua),_a=p(fa),L=n(fa,"PRE",{class:!0});var Ba=r(L);$=m(Ba,!1),Ba.forEach(s),fa.forEach(s),aa=p(a),u=n(a,"DETAILS",{});var k=r(u);M=n(k,"SUMMARY",{"data-svelte-h":!0}),x(M)!=="svelte-1qz5du3"&&(M.textContent=Fa),xa=p(k),A=n(k,"PRE",{class:!0});var Oa=r(A);sa=m(Oa,!1),Oa.forEach(s),wa=p(k),S=n(k,"PRE",{class:!0});var Ga=r(S);ea=m(Ga,!1),Ga.forEach(s),ha=p(k),T=n(k,"PRE",{class:!0});var Ja=r(T);ta=m(Ja,!1),Ja.forEach(s),va=p(k),H=n(k,"PRE",{class:!0});var Ka=r(H);na=m(Ka,!1),Ka.forEach(s),ya=p(k),I=n(k,"PRE",{class:!0});var Na=r(I);oa=m(Na,!1),Na.forEach(s),Ea=p(k),D=n(k,"PRE",{class:!0});var Qa=r(D);la=m(Qa,!1),Qa.forEach(s),k.forEach(s),pa=p(a),i=n(a,"DETAILS",{});var _=r(i);U=n(_,"SUMMARY",{"data-svelte-h":!0}),x(U)!=="svelte-p5ckrr"&&(U.textContent=Ya),Ca=p(_),F=n(_,"PRE",{class:!0});var Va=r(F);ra=m(Va,!1),Va.forEach(s),Pa=p(_),Y=n(_,"PRE",{class:!0});var Wa=r(Y);ca=m(Wa,!1),Wa.forEach(s),Ra=p(_),j=n(_,"PRE",{class:!0});var Xa=r(j);ua=m(Xa,!1),Xa.forEach(s),ba=p(_),q=n(_,"PRE",{class:!0});var Za=r(q);ia=m(Za,!1),Za.forEach(s),_.forEach(s),ka=p(a),g=n(a,"DETAILS",{});var J=r(g);B=n(J,"SUMMARY",{"data-svelte-h":!0}),x(B)!=="svelte-2rf58m"&&(B.textContent=ja),za=p(J),O=n(J,"PRE",{class:!0});var $a=r(O);da=m($a,!1),$a.forEach(s),La=p(J),G=n(J,"PRE",{class:!0});var as=r(G);ma=m(as,!1),as.forEach(s),J.forEach(s),this.h()},h(){X.a=null,f(b,"class","language-txt"),h.open=!0,$.a=null,f(L,"class","language-txt"),sa.a=null,f(A,"class","language-txt"),ea.a=null,f(S,"class","language-ts"),ta.a=null,f(T,"class","language-ts"),na.a=null,f(H,"class","language-ts"),oa.a=null,f(I,"class","language-ts"),la.a=null,f(D,"class","language-ts"),ra.a=null,f(F,"class","language-txt"),ca.a=null,f(Y,"class","language-ts"),ua.a=null,f(j,"class","language-ts"),ia.a=null,f(q,"class","language-ts"),da.a=null,f(O,"class","language-txt"),ma.a=null,f(G,"class","language-ts")},m(a,o){c(a,w,o),c(a,K,o),c(a,y,o),c(a,N,o),c(a,E,o),c(a,Q,o),c(a,C,o),c(a,V,o),c(a,P,o),c(a,W,o),c(a,h,o),e(h,R),e(h,ga),e(h,b),X.m(es,b),c(a,Z,o),c(a,v,o),e(v,z),e(v,_a),e(v,L),$.m(ts,L),c(a,aa,o),c(a,u,o),e(u,M),e(u,xa),e(u,A),sa.m(ns,A),e(u,wa),e(u,S),ea.m(os,S),e(u,ha),e(u,T),ta.m(ls,T),e(u,va),e(u,H),na.m(ps,H),e(u,ya),e(u,I),oa.m(rs,I),e(u,Ea),e(u,D),la.m(cs,D),c(a,pa,o),c(a,i,o),e(i,U),e(i,Ca),e(i,F),ra.m(us,F),e(i,Pa),e(i,Y),ca.m(is,Y),e(i,Ra),e(i,j),ua.m(ks,j),e(i,ba),e(i,q),ia.m(ds,q),c(a,ka,o),c(a,g,o),e(g,B),e(g,za),e(g,O),da.m(ms,O),e(g,La),e(g,G),ma.m(fs,G)},p:Ma,i:Ma,o:Ma,d(a){a&&(s(w),s(K),s(y),s(N),s(E),s(Q),s(C),s(V),s(P),s(W),s(h),s(Z),s(v),s(aa),s(u),s(pa),s(i),s(ka),s(g))}}}class ys extends _s{constructor(w){super(),xs(this,w,null,ws,gs,{})}}export{ys as component};
