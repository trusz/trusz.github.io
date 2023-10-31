import{s as Ht,n as Sn}from"../chunks/scheduler.63274e7e.js";import{S as Lt,i as Mt,g as a,s as l,H as i,h as p,x as c,c as o,j as r,B as k,f as t,k as m,a as e}from"../chunks/index.6ea29b8c.js";function It(ft){let u,qn="UI Development in Docker",J,h,Fn=`Back in the day I have always struggled with setting up development environments for projects.<br/>
It usually took hours and in some cases even days to get everything right.
The documentation was always outdated and missing key information.
If you had to work on multiple projects that used
different versions of SDKs and runtimes than the experience was even worse.`,Q,d,zn=`Then came the light-weight containerization popularized by <a href="https://www.docker.com/" rel="nofollow">Docker</a>.
The main usage of containers is to run the software in the same environment on any hardware.
It runs the same way on my machine as in the cloud.`,W,y,Bn="Using this feature of the containers I setup my projects almost the same way.",X,v,Nn="The Basics",Y,f,On="The basic setup requires only:",Z,w,Vn='<li>a <a href="https://docs.docker.com/compose/" rel="nofollow">docker-compose</a> file</li> <li>a <a href="https://hub.docker.com/_/node" rel="nofollow">Node.js</a> container</li> <li>a mapped port</li> <li>the project folder mounted into the container</li>',nn,_,Kn=`This approach ensures that everybody runs the same version of Node.js.
Furthermore, to run it one only needs Docker.`,tn,x,$n="The docker-compose file usually looks something like this:",sn,C,en,wt=`<code class="language-yaml"><span class="token comment"># An extract of the &#96;docker-compose.yaml&#96;</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.6"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">ui</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">"node:13.5-alpine"</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">"3000:3000"</span>
        <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/app
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn dev"</span><span class="token punctuation">]</span></code>`,an,g,Gn="Alpine images keep the overhead low and the image small.",pn,b,Jn=`<code>yarn install &amp;&amp; ...</code> makes sure that we alway have the correct packages.
This step takes only a few seconds as the <code>node_modules</code> are persisted outside of docker
and does not have to be installed again and again.`,ln,T,Qn=`If we run start the container with <code>docker-compose run --service-ports</code>
we get colors, animated progressbars and we can interact with clis, thanks to the
<code>stdin_open: true</code> and <code>tty: true</code>.`,on,P,Wn="Mounting the folder enables file watcher for live refresh and hot reloading.",cn,H,un,_t=`<code class="language-txt">An overview of the basic setup
                ╭──────────────╮
                │ ◎ ○ ○ ░░░░░░░│
                ├──────────────┤      O
                │ Any Browser  │     /|  
                │              │◀──  /   
                │              │
                │              │    USER  
                └──────────────┘
                        │
                        ●
                        ◡
                        │
                 localhost:3000
                        │
                       ┌─┐
              ┌────────┤ ├────────┐
              │        └─┘        │
              │         │         │
              │         ●         │
              │         ◡         │
              │         │         │
              │  localhost:3000   │
              │         │         │
              │   ┌───────────┐   │
              │   │Development│   │
              │   │  Server   │   │
              │   └───────────┘   │
              │         │         │
              │         ▼         │
┌────────┐    │     ┌ ─ ─ ─       │
│Project │  ┌─┴─┐     /app │      │
│ Folder │──│   │───│             │
└────────┘  └─┬─┘    ─ ─ ─ ┘      │
              │                   │
              │Container: UI      │
              └───────────────────┘</code>`,rn,L,Xn="Testing Locally and Visually",kn,M,Yn=`For the best and safest results I use <a href="https://www.chromium.org/" rel="nofollow">Chromium</a> that runs
in the local environment outside of the container.
This is necessary to see the UI itself when working on the styling.`,mn,I,Zn='Chromium has to be launched with <code>--enable-automation</code> so that the browser driver (<a href="https://github.com/puppeteer/puppeteer" rel="nofollow">Chrome Puppeteer</a>) can control it through websocket.',hn,E,nt="I usually have a shell script to do it, similar to this:",dn,j,yn,xt=`<code class="language-sh"><span class="token assign-left variable">chromium</span><span class="token operator">=</span>/Applications/Chromium.app/Contents/MacOS/Chromium
<span class="token variable">$chromium</span> --no-sandbox --enable-automation --remote-debugging-port<span class="token operator">=</span><span class="token number">9922</span></code>`,vn,D,tt="Chromium has a limitation who can control it:",fn,U,st=`<li>in headless mode (no visible UI), connections are allowed from any source address as the websocket listens on the wildcard IP: <code>0.0.0.0:9922</code></li> <li>in non-headless mode (visible UI), only the connections from localhost are allowed as the chromium
switches back to <code>127.0.0.0:9922</code> (or <code>localhost:9922</code>)</li>`,wn,A,et=`Fortunately, the tests can connect from inside the container through <code>host.docker.internal:9922</code>
making it seem like that they also runs on <code>localhost</code>.`,_n,R,at="The container also watches for file changes to re-run the tests.",xn,S,pt="The container has to open its port for the browser.",Cn,q,gn,Ct=`<code class="language-yaml"><span class="token comment"># An extract of the &#96;docker-compose.yaml&#96;</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.6"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">ui-dev</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">"node:13.10"</span>
      <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/app
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn tdd"</span><span class="token punctuation">]</span></code>`,bn,F,Tn,gt=`<code class="language-txt">An overview of the "Testing Locally and Visually" setup
                               ╭──────────────╮
                               │ ◎ ○ ○ ░░░░░░░│
                               ├──────────────┤
                               │   Chromium   │
                        ┌──────│              │
                        │      │              │
                        │      │              │
                        ●      └──────────────┘
                        ◡              │
                        │        localhost:9922
                 localhost:3000        │
                        │              ◠
                       ┌─┐             ●
              ┌────────┤ ├─────────────┼─────────────┐
              │        └─┘             │             │
              │         │  host.docker.internal:9922 │
              │         ●              │             │
              │         ◡              │             │
              │         │              │             │
              │  localhost:3000        │             │
              │         │              │             │
              │   ┌───────────┐     ┌─────┐          │
              │   │Development│     │Tests│          │
              │   │  Server   │     └─────┘          │
              │   └───────────┘        │             │
              │         │              │             │
              │         ▼              │             │
┌────────┐    │     ┌ ─ ─ ─            │             │
│Project │  ┌─┴─┐     /app │           │             │
│ Folder │──│   │───│       ◀──────────┘             │
└────────┘  └─┬─┘    ─ ─ ─ ┘                         │
              │                                      │
              │Container: UI                         │
              └──────────────────────────────────────┘</code>`,Pn,z,lt="Testing in CI/CD Pipeline",Hn,B,ot=`The main difference between testing locally and in a pipeline is that we start
up the production build of the UI and we start a separate container with the tests and
headless chromium. This is quite easy as Chromium and <a href="https://github.com/puppeteer/puppeteer" rel="nofollow">Chrome Puppeteer</a> are also available in a Docker container: <a href="https://hub.docker.com/search?q=puppeteer&amp;type=image" rel="nofollow">Docker Hub</a>.`,Ln,N,ct=`The source files are still mounted in so we don’t have to build
the <code>Test</code> container over and over again.`,Mn,O,In,bt=`<code class="language-yaml"><span class="token comment"># An extract of the &#96;docker-compose.yaml&#96;</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.6"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">ui</span><span class="token punctuation">:</span>
   <span class="token punctuation">...</span>

  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> <span class="token string">"test.Dockerfile"</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ui
    <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/app
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn test"</span><span class="token punctuation">]</span></code>`,En,V,jn,Tt=`<code class="language-txt">An overview of the "Testing in CI/CD Pipeline" setup
              ┌───────────────────┐
              │   ┌──────────┐    │
              │   │ Headless │    │
              │   │ Chromium │────┼───────────●
              │   │          │    │           ◡
              │   └──────────┘    │           │
              │         ▲         │    localhost:3000
              │         │         │           │
              │         │         │          ┌─┐
              │         │         │  ┌───────┤ ├────────┐
              │      ┌─────┐      │  │       └─┘        │
              │      │Tests│      │  │        │         │
              │      └─────┘      │  │        ●         │
              │         │         │  │        ◡         │
              │         │         │  │        │         │
              │         │         │  │ localhost:3000   │
              │         ▼         │  │        │         │
┌────────┐    │     ┌ ─ ─ ─       │  │  ┌───────────┐   │
│Project │  ┌─┴─┐     /app │      │  │  │Production │   │
│ Folder │──│   │───│             │  │  │  Server   │   │
└────────┘  └─┬─┘    ─ ─ ─ ┘      │  │  └───────────┘   │
              │                   │  │                  │
              │Container: Test    │  │Container: UI     │
              └───────────────────┘  └──────────────────┘</code>`,Dn,K,ut="Docker-Compose",Un,$,it="The final <code>docker-compose.yaml</code> looks like this:",An,G,Rn,Pt=`<code class="language-yaml"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.6"</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">ui</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">"node:13.5-alpine"</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">"3000:3000"</span>
      <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/app
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn dev"</span><span class="token punctuation">]</span>

    <span class="token key atrule">ui-dev</span><span class="token punctuation">:</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">"node:13.10"</span>
      <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/app
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">3000</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn tdd"</span><span class="token punctuation">]</span>

    <span class="token key atrule">test</span><span class="token punctuation">:</span>
      <span class="token key atrule">build</span><span class="token punctuation">:</span>
        <span class="token key atrule">context</span><span class="token punctuation">:</span> .
        <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> <span class="token string">"test.Dockerfile"</span>
      <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ui
      <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> <span class="token string">"/app"</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/app
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"sh"</span><span class="token punctuation">,</span> <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"yarn install &amp;&amp; yarn test"</span><span class="token punctuation">]</span>

</code>`;return{c(){u=a("h1"),u.textContent=qn,J=l(),h=a("p"),h.innerHTML=Fn,Q=l(),d=a("p"),d.innerHTML=zn,W=l(),y=a("p"),y.textContent=Bn,X=l(),v=a("h2"),v.textContent=Nn,Y=l(),f=a("p"),f.textContent=On,Z=l(),w=a("ul"),w.innerHTML=Vn,nn=l(),_=a("p"),_.textContent=Kn,tn=l(),x=a("p"),x.textContent=$n,sn=l(),C=a("pre"),en=new i(!1),an=l(),g=a("p"),g.textContent=Gn,pn=l(),b=a("p"),b.innerHTML=Jn,ln=l(),T=a("p"),T.innerHTML=Qn,on=l(),P=a("p"),P.textContent=Wn,cn=l(),H=a("pre"),un=new i(!1),rn=l(),L=a("h2"),L.textContent=Xn,kn=l(),M=a("p"),M.innerHTML=Yn,mn=l(),I=a("p"),I.innerHTML=Zn,hn=l(),E=a("p"),E.textContent=nt,dn=l(),j=a("pre"),yn=new i(!1),vn=l(),D=a("p"),D.textContent=tt,fn=l(),U=a("ul"),U.innerHTML=st,wn=l(),A=a("p"),A.innerHTML=et,_n=l(),R=a("p"),R.textContent=at,xn=l(),S=a("p"),S.textContent=pt,Cn=l(),q=a("pre"),gn=new i(!1),bn=l(),F=a("pre"),Tn=new i(!1),Pn=l(),z=a("h2"),z.textContent=lt,Hn=l(),B=a("p"),B.innerHTML=ot,Ln=l(),N=a("p"),N.innerHTML=ct,Mn=l(),O=a("pre"),In=new i(!1),En=l(),V=a("pre"),jn=new i(!1),Dn=l(),K=a("h2"),K.textContent=ut,Un=l(),$=a("p"),$.innerHTML=it,An=l(),G=a("pre"),Rn=new i(!1),this.h()},l(n){u=p(n,"H1",{"data-svelte-h":!0}),c(u)!=="svelte-4pdypu"&&(u.textContent=qn),J=o(n),h=p(n,"P",{"data-svelte-h":!0}),c(h)!=="svelte-xigm8t"&&(h.innerHTML=Fn),Q=o(n),d=p(n,"P",{"data-svelte-h":!0}),c(d)!=="svelte-1kyh7pj"&&(d.innerHTML=zn),W=o(n),y=p(n,"P",{"data-svelte-h":!0}),c(y)!=="svelte-1blk6zm"&&(y.textContent=Bn),X=o(n),v=p(n,"H2",{"data-svelte-h":!0}),c(v)!=="svelte-8293qg"&&(v.textContent=Nn),Y=o(n),f=p(n,"P",{"data-svelte-h":!0}),c(f)!=="svelte-15djacs"&&(f.textContent=On),Z=o(n),w=p(n,"UL",{"data-svelte-h":!0}),c(w)!=="svelte-1aw4ef3"&&(w.innerHTML=Vn),nn=o(n),_=p(n,"P",{"data-svelte-h":!0}),c(_)!=="svelte-7fpz3p"&&(_.textContent=Kn),tn=o(n),x=p(n,"P",{"data-svelte-h":!0}),c(x)!=="svelte-1ndh994"&&(x.textContent=$n),sn=o(n),C=p(n,"PRE",{class:!0});var s=r(C);en=k(s,!1),s.forEach(t),an=o(n),g=p(n,"P",{"data-svelte-h":!0}),c(g)!=="svelte-11y4sud"&&(g.textContent=Gn),pn=o(n),b=p(n,"P",{"data-svelte-h":!0}),c(b)!=="svelte-1w210eo"&&(b.innerHTML=Jn),ln=o(n),T=p(n,"P",{"data-svelte-h":!0}),c(T)!=="svelte-nqajkn"&&(T.innerHTML=Qn),on=o(n),P=p(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1wlgd9"&&(P.textContent=Wn),cn=o(n),H=p(n,"PRE",{class:!0});var rt=r(H);un=k(rt,!1),rt.forEach(t),rn=o(n),L=p(n,"H2",{"data-svelte-h":!0}),c(L)!=="svelte-1a9znuy"&&(L.textContent=Xn),kn=o(n),M=p(n,"P",{"data-svelte-h":!0}),c(M)!=="svelte-1e60c3w"&&(M.innerHTML=Yn),mn=o(n),I=p(n,"P",{"data-svelte-h":!0}),c(I)!=="svelte-1sy3nep"&&(I.innerHTML=Zn),hn=o(n),E=p(n,"P",{"data-svelte-h":!0}),c(E)!=="svelte-n7ljhx"&&(E.textContent=nt),dn=o(n),j=p(n,"PRE",{class:!0});var kt=r(j);yn=k(kt,!1),kt.forEach(t),vn=o(n),D=p(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-dd94hn"&&(D.textContent=tt),fn=o(n),U=p(n,"UL",{"data-svelte-h":!0}),c(U)!=="svelte-1jmynrw"&&(U.innerHTML=st),wn=o(n),A=p(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-1b76x0i"&&(A.innerHTML=et),_n=o(n),R=p(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-ux7rpw"&&(R.textContent=at),xn=o(n),S=p(n,"P",{"data-svelte-h":!0}),c(S)!=="svelte-17v1plm"&&(S.textContent=pt),Cn=o(n),q=p(n,"PRE",{class:!0});var mt=r(q);gn=k(mt,!1),mt.forEach(t),bn=o(n),F=p(n,"PRE",{class:!0});var ht=r(F);Tn=k(ht,!1),ht.forEach(t),Pn=o(n),z=p(n,"H2",{"data-svelte-h":!0}),c(z)!=="svelte-r62koh"&&(z.textContent=lt),Hn=o(n),B=p(n,"P",{"data-svelte-h":!0}),c(B)!=="svelte-1rbco3d"&&(B.innerHTML=ot),Ln=o(n),N=p(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-rujvbh"&&(N.innerHTML=ct),Mn=o(n),O=p(n,"PRE",{class:!0});var dt=r(O);In=k(dt,!1),dt.forEach(t),En=o(n),V=p(n,"PRE",{class:!0});var yt=r(V);jn=k(yt,!1),yt.forEach(t),Dn=o(n),K=p(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-1blendb"&&(K.textContent=ut),Un=o(n),$=p(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-171mfft"&&($.innerHTML=it),An=o(n),G=p(n,"PRE",{class:!0});var vt=r(G);Rn=k(vt,!1),vt.forEach(t),this.h()},h(){en.a=null,m(C,"class","language-yaml"),un.a=null,m(H,"class","language-txt"),yn.a=null,m(j,"class","language-sh"),gn.a=null,m(q,"class","language-yaml"),Tn.a=null,m(F,"class","language-txt"),In.a=null,m(O,"class","language-yaml"),jn.a=null,m(V,"class","language-txt"),Rn.a=null,m(G,"class","language-yaml")},m(n,s){e(n,u,s),e(n,J,s),e(n,h,s),e(n,Q,s),e(n,d,s),e(n,W,s),e(n,y,s),e(n,X,s),e(n,v,s),e(n,Y,s),e(n,f,s),e(n,Z,s),e(n,w,s),e(n,nn,s),e(n,_,s),e(n,tn,s),e(n,x,s),e(n,sn,s),e(n,C,s),en.m(wt,C),e(n,an,s),e(n,g,s),e(n,pn,s),e(n,b,s),e(n,ln,s),e(n,T,s),e(n,on,s),e(n,P,s),e(n,cn,s),e(n,H,s),un.m(_t,H),e(n,rn,s),e(n,L,s),e(n,kn,s),e(n,M,s),e(n,mn,s),e(n,I,s),e(n,hn,s),e(n,E,s),e(n,dn,s),e(n,j,s),yn.m(xt,j),e(n,vn,s),e(n,D,s),e(n,fn,s),e(n,U,s),e(n,wn,s),e(n,A,s),e(n,_n,s),e(n,R,s),e(n,xn,s),e(n,S,s),e(n,Cn,s),e(n,q,s),gn.m(Ct,q),e(n,bn,s),e(n,F,s),Tn.m(gt,F),e(n,Pn,s),e(n,z,s),e(n,Hn,s),e(n,B,s),e(n,Ln,s),e(n,N,s),e(n,Mn,s),e(n,O,s),In.m(bt,O),e(n,En,s),e(n,V,s),jn.m(Tt,V),e(n,Dn,s),e(n,K,s),e(n,Un,s),e(n,$,s),e(n,An,s),e(n,G,s),Rn.m(Pt,G)},p:Sn,i:Sn,o:Sn,d(n){n&&(t(u),t(J),t(h),t(Q),t(d),t(W),t(y),t(X),t(v),t(Y),t(f),t(Z),t(w),t(nn),t(_),t(tn),t(x),t(sn),t(C),t(an),t(g),t(pn),t(b),t(ln),t(T),t(on),t(P),t(cn),t(H),t(rn),t(L),t(kn),t(M),t(mn),t(I),t(hn),t(E),t(dn),t(j),t(vn),t(D),t(fn),t(U),t(wn),t(A),t(_n),t(R),t(xn),t(S),t(Cn),t(q),t(bn),t(F),t(Pn),t(z),t(Hn),t(B),t(Ln),t(N),t(Mn),t(O),t(En),t(V),t(Dn),t(K),t(Un),t($),t(An),t(G))}}}class Dt extends Lt{constructor(u){super(),Mt(this,u,null,It,Ht,{})}}export{Dt as component};
