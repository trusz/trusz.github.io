import{s as se,f as ie,n as B}from"../chunks/scheduler.63274e7e.js";import{S as ae,i as le,g as i,s as l,H as oe,h as a,x as c,c as o,j as ce,B as de,f as n,k as F,l as pe,a as s}from"../chunks/index.6ea29b8c.js";const he=""+new URL("../assets/view-structure.04484c94.jpeg",import.meta.url).href;function ue(te){let d,G="View Structure",M,h,U="This document describes the architecture of views.",y,u,W="Concept",L,p,D,P,r,J=`The main starting point is the <code>View</code>.
The router opens the view and it configures the container.
It defines which <code>API</code> is to use and passes it to the <code>Container</code>
If a <code>Mock API</code> is implemented the <code>View</code> can decide to use it.
This helps to work on the frontend without a backend running.`,g,m,K=`The main purpose of a <code>Container</code> is to manage the dataflow and configure the components
that are displayed in a given layout.
The <code>Container</code> defines an <code>API</code> interface that it needs for the data management.`,k,f,N="The <code>Tests</code> can use the <code>Mock API</code> or they can mock it as they need it.",I,x,O=`The main advantage of this setup is that almost all of the code can be
tested and only a small portion of the “glue” code has to be checked manually.`,j,v,Q="Folder Structure",A,T,S,ne=`<code class="language-s">views/
   └─ view-a
        ├─ index.ts
        ├─ view-a.t
        ├─ business-obj-1.ts
        ├─ business-obj-2.ts
        ├─ business-obj-2.spec.ts
        ├─ business-obj-n.ts
        ├─ container-a/
        │       ├─ index.ts
        │       ├─ api.ts
        │       ├─ container-a.tsx
        │       ├─ container-a.spec.tsx
        │       ├─ layout.tsx
        │       ├─ comp-1.tsx
        │       ├─ comp-2.tsx
        │       ├─ comp-2.spec.tsx
        │       └─ comp-n.tsx
        └─ api/
            ├─ index.ts
            ├─ api-fn-1.ts
            ├─ api-fn-2.ts
            ├─ api-fn-n.ts
            └─ mock/
                 │
                 ├─ index.ts
                 ├─ api-fn-1.ts
                 ├─ api-fn-2.ts
                 └─ api-fn-n.ts</code>`,V,_,X=`The <code>View</code> and the business objects are on the top because changing them
can trigger the most change. They should be the most stable parts.`,q,C,Y=`The <code>container-a/</code> represents the <code>Container</code>. In this folder are things that
take of the main focus of the view.`,z,b,Z="The <code>api.ts</code> describes the interface that the container needs to manage the data.",E,w,$=`We separate the components (<code>comp-1.tsx</code>, <code>comp-2.txs</code>, … , <code>comp-n.tsx</code>) and
the layout (<code>layout.tsx</code>) to separate concerns and let them be stitched together
and managed by <code>container-a</code> component.`,R,H,ee=`The <code>api/</code> contains all the functionality and implementation of the API interface
and also a mock implementation for isolated frontend development and testing.`;return{c(){d=i("h1"),d.textContent=G,M=l(),h=i("p"),h.textContent=U,y=l(),u=i("h2"),u.textContent=W,L=l(),p=i("img"),P=l(),r=i("p"),r.innerHTML=J,g=l(),m=i("p"),m.innerHTML=K,k=l(),f=i("p"),f.innerHTML=N,I=l(),x=i("p"),x.textContent=O,j=l(),v=i("h2"),v.textContent=Q,A=l(),T=i("pre"),S=new oe(!1),V=l(),_=i("p"),_.innerHTML=X,q=l(),C=i("p"),C.innerHTML=Y,z=l(),b=i("p"),b.innerHTML=Z,E=l(),w=i("p"),w.innerHTML=$,R=l(),H=i("p"),H.innerHTML=ee,this.h()},l(e){d=a(e,"H1",{"data-svelte-h":!0}),c(d)!=="svelte-1g7ixes"&&(d.textContent=G),M=o(e),h=a(e,"P",{"data-svelte-h":!0}),c(h)!=="svelte-1ye5b00"&&(h.textContent=U),y=o(e),u=a(e,"H2",{"data-svelte-h":!0}),c(u)!=="svelte-1wuay2"&&(u.textContent=W),L=o(e),p=a(e,"IMG",{src:!0,width:!0,style:!0}),P=o(e),r=a(e,"P",{"data-svelte-h":!0}),c(r)!=="svelte-1pxdn0m"&&(r.innerHTML=J),g=o(e),m=a(e,"P",{"data-svelte-h":!0}),c(m)!=="svelte-137fnca"&&(m.innerHTML=K),k=o(e),f=a(e,"P",{"data-svelte-h":!0}),c(f)!=="svelte-16h31ib"&&(f.innerHTML=N),I=o(e),x=a(e,"P",{"data-svelte-h":!0}),c(x)!=="svelte-dn969t"&&(x.textContent=O),j=o(e),v=a(e,"H2",{"data-svelte-h":!0}),c(v)!=="svelte-pofkgf"&&(v.textContent=Q),A=o(e),T=a(e,"PRE",{class:!0});var t=ce(T);S=de(t,!1),t.forEach(n),V=o(e),_=a(e,"P",{"data-svelte-h":!0}),c(_)!=="svelte-10xt81u"&&(_.innerHTML=X),q=o(e),C=a(e,"P",{"data-svelte-h":!0}),c(C)!=="svelte-17gz5oc"&&(C.innerHTML=Y),z=o(e),b=a(e,"P",{"data-svelte-h":!0}),c(b)!=="svelte-1c761oq"&&(b.innerHTML=Z),E=o(e),w=a(e,"P",{"data-svelte-h":!0}),c(w)!=="svelte-3n1zb1"&&(w.innerHTML=$),R=o(e),H=a(e,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1c9jg7w"&&(H.innerHTML=ee),this.h()},h(){ie(p.src,D=he)||F(p,"src",D),F(p,"width","100%"),pe(p,"filter","invert(1)"),S.a=null,F(T,"class","language-s")},m(e,t){s(e,d,t),s(e,M,t),s(e,h,t),s(e,y,t),s(e,u,t),s(e,L,t),s(e,p,t),s(e,P,t),s(e,r,t),s(e,g,t),s(e,m,t),s(e,k,t),s(e,f,t),s(e,I,t),s(e,x,t),s(e,j,t),s(e,v,t),s(e,A,t),s(e,T,t),S.m(ne,T),s(e,V,t),s(e,_,t),s(e,q,t),s(e,C,t),s(e,z,t),s(e,b,t),s(e,E,t),s(e,w,t),s(e,R,t),s(e,H,t)},p:B,i:B,o:B,d(e){e&&(n(d),n(M),n(h),n(y),n(u),n(L),n(p),n(P),n(r),n(g),n(m),n(k),n(f),n(I),n(x),n(j),n(v),n(A),n(T),n(V),n(_),n(q),n(C),n(z),n(b),n(E),n(w),n(R),n(H))}}}class fe extends ae{constructor(d){super(),le(this,d,null,ue,se,{})}}export{fe as component};
