import{s as nt,n as Q}from"../chunks/scheduler.63274e7e.js";import{S as ot,i as it,g as a,s as o,H as Z,h as n,y as r,c as i,j as $,C as tt,f as l,k as et,a as s}from"../chunks/index.7a930449.js";function rt(lt){let u,B="Screaming Architecture",T,c,O="I always try to structure and group files by their represented business model.",P,p,R=`The concept is described as “Screaming Architecture” in the book
<a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjS3IX8v6X4AhXrm_0HHW1eCPsQFnoECAYQAQ&amp;url=https%3A%2F%2Fwww.amazon.com%2FClean-Architecture-Craftsmans-Software-Structure%2Fdp%2F0134494164&amp;usg=AOvVaw2Pqcj6BFJeoRVGUS9QZ07M" rel="nofollow">Clean Architecture: A Craftsman’s Guide to Software Structure and Design</a> by Robert C. Martin.`,g,h,U=`To summarize the concept, the root of the source code contains folder and files
that are relevant to the business model.`,H,m,W="For example a user management system could look like this:",A,f,k,st=`<code class="language-txt">src/
 ├─user/
 ├─permission/
 ├─roles/
 └─x/</code>`,M,d,X=`What important is that we don’t know which technology we use,
we don’t even know if it is in the backend or in the frontend.
But we could guess what the system is about.`,S,x,G=`There is usually an <code>x</code> folder. It contains code
that has nothing to do with the business model.
It is called <code>x</code> (e<strong>x</strong>tra) because this way it stays most of the time on
the bottom of the folder list and it is short so that we can import it easily.
But it could be called <code>helpers</code> or <code>utils</code> too.`,L,w,K=`This structure also helps to find the problematic code easier.
We usually know in which business area is the problem but not immediately
in which layer.`,q,v,V="It also promotes an organic separation of business areas or bounded contexts.",E,C,D=`<p><strong>NOTE</strong><br/>
This structure only defines the top level.</p>`,F,b,J="A counter example would be grouping the files by their “technology”.",j,_,I,at=`<code class="language-text">src/
 ├─controllers
 ├─models/
 ├─utils/
 └─views/</code>`,z,y,N=`As we can see we can’t really find out what this software does.<br/>
Also if we work on a given business area we have to touch multiple
folders. It is also hard to cut out parts because they are scattered
over multiple folders.`;return{c(){u=a("h1"),u.textContent=B,T=o(),c=a("p"),c.textContent=O,P=o(),p=a("p"),p.innerHTML=R,g=o(),h=a("p"),h.textContent=U,H=o(),m=a("p"),m.textContent=W,A=o(),f=a("pre"),k=new Z(!1),M=o(),d=a("p"),d.textContent=X,S=o(),x=a("p"),x.innerHTML=G,L=o(),w=a("p"),w.textContent=K,q=o(),v=a("p"),v.textContent=V,E=o(),C=a("blockquote"),C.innerHTML=D,F=o(),b=a("p"),b.textContent=J,j=o(),_=a("pre"),I=new Z(!1),z=o(),y=a("p"),y.innerHTML=N,this.h()},l(t){u=n(t,"H1",{"data-svelte-h":!0}),r(u)!=="svelte-iyq9q"&&(u.textContent=B),T=i(t),c=n(t,"P",{"data-svelte-h":!0}),r(c)!=="svelte-1xggnqv"&&(c.textContent=O),P=i(t),p=n(t,"P",{"data-svelte-h":!0}),r(p)!=="svelte-bxu5go"&&(p.innerHTML=R),g=i(t),h=n(t,"P",{"data-svelte-h":!0}),r(h)!=="svelte-wx277m"&&(h.textContent=U),H=i(t),m=n(t,"P",{"data-svelte-h":!0}),r(m)!=="svelte-19ozfr8"&&(m.textContent=W),A=i(t),f=n(t,"PRE",{class:!0});var e=$(f);k=tt(e,!1),e.forEach(l),M=i(t),d=n(t,"P",{"data-svelte-h":!0}),r(d)!=="svelte-1kjrn6e"&&(d.textContent=X),S=i(t),x=n(t,"P",{"data-svelte-h":!0}),r(x)!=="svelte-wgs7rc"&&(x.innerHTML=G),L=i(t),w=n(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-12zvx7h"&&(w.textContent=K),q=i(t),v=n(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-eu4h0a"&&(v.textContent=V),E=i(t),C=n(t,"BLOCKQUOTE",{"data-svelte-h":!0}),r(C)!=="svelte-t163wz"&&(C.innerHTML=D),F=i(t),b=n(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-fcytsm"&&(b.textContent=J),j=i(t),_=n(t,"PRE",{class:!0});var Y=$(_);I=tt(Y,!1),Y.forEach(l),z=i(t),y=n(t,"P",{"data-svelte-h":!0}),r(y)!=="svelte-7o38yy"&&(y.innerHTML=N),this.h()},h(){k.a=null,et(f,"class","language-txt"),I.a=null,et(_,"class","language-text")},m(t,e){s(t,u,e),s(t,T,e),s(t,c,e),s(t,P,e),s(t,p,e),s(t,g,e),s(t,h,e),s(t,H,e),s(t,m,e),s(t,A,e),s(t,f,e),k.m(st,f),s(t,M,e),s(t,d,e),s(t,S,e),s(t,x,e),s(t,L,e),s(t,w,e),s(t,q,e),s(t,v,e),s(t,E,e),s(t,C,e),s(t,F,e),s(t,b,e),s(t,j,e),s(t,_,e),I.m(at,_),s(t,z,e),s(t,y,e)},p:Q,i:Q,o:Q,d(t){t&&(l(u),l(T),l(c),l(P),l(p),l(g),l(h),l(H),l(m),l(A),l(f),l(M),l(d),l(S),l(x),l(L),l(w),l(q),l(v),l(E),l(C),l(F),l(b),l(j),l(_),l(z),l(y))}}}class pt extends ot{constructor(u){super(),it(this,u,null,rt,nt,{})}}export{pt as component};
