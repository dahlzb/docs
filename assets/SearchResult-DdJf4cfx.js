import{u as I,f as te,g as se,h as U,i as ae,P as le,t as re,j as ue,k as S,l as x,m as ie,w as Y,n as s,p as ne,R as G,q as oe,s as ce,v as ve,C as de,x as pe,y as he,z as ye,A as me,B as Ee,D as Ae,E as ge,F as O,G as T,H as fe,I as R,J as Be}from"./app-_BEMYkqi.js";const ke=["/","/intro.html","/backend/","/devops/","/frontend/Ajax%E4%BD%BF%E7%94%A8.html","/frontend/Axios.html","/frontend/","/frontend/jquery.qrcode%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81.html","/frontend/%E4%BD%BF%E7%94%A8PicGo_Github_CDN%E6%90%AD%E5%BB%BA%E5%9B%BE%E5%BA%8A.html","/frontend/%E5%89%8D%E7%AB%AF%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98.html","/frontend/%E6%B5%8F%E8%A7%88%E5%99%A8Cookie%E5%92%8CSameSite.html","/frontend/%E7%A7%BB%E5%8A%A8%E9%80%82%E9%85%8D%E6%96%B9%E6%A1%88.html","/backend/database/","/backend/database/SqlServer%E5%B8%B8%E7%94%A8%E8%AF%AD%E5%8F%A5.html","/backend/dotnet/EntityFramework.html","/backend/dotnet/","/backend/dotnet/%E5%8F%8D%E5%B0%84.html","/devops/docker/Docker.html","/devops/git/Github%E8%AE%BF%E9%97%AE%E7%BC%93%E6%85%A2.html","/devops/git/Git%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Gogs.html","/devops/linux/Linux%20Vim.html","/devops/linux/Linux%E7%B3%BB%E7%BB%9F.html","/404.html","/devops/docker/","/devops/git/","/devops/linux/","/category/","/tag/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",E=I(He,[]),xe=()=>{const{queryHistoryCount:a}=R,l=a>0;return{enabled:l,queryHistory:E,addQueryHistory:r=>{l&&(E.value=Array.from(new Set([r,...E.value.slice(0,a-1)])))},removeQueryHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},L=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=R,A=I(Re,[]),De=()=>{const a=$>0;return{enabled:a,resultHistory:A,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),A.value=[r,...A.value.slice(0,$-1)]}},removeResultHistory:l=>{A.value=[...A.value.slice(0,l),...A.value.slice(l+1)]}}},Ce=a=>{const l=de(),r=U(),D=pe(),i=S(0),B=x(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:C}=me(),g=fe(c=>{const f=c.join(" "),{searchFilter:b=p=>p,splitWord:q,suggestionsFilter:P,...m}=l.value;f?(i.value+=1,y(c.join(" "),r.value,m).then(p=>b(p,f,r.value,D.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},R.searchDelay-R.suggestDelay);Y([a,r],([c])=>g(c),{immediate:!0}),Ee(()=>{C()})}),{isSearching:B,results:h}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),D=U(),i=ae(le),{enabled:B,addQueryHistory:h,queryHistory:y,removeQueryHistory:C}=xe(),{enabled:g,resultHistory:c,addResultHistory:f,removeResultHistory:b}=De(),q=B||g,P=re(a,"queries"),{results:m,isSearching:p}=Ce(P),u=ue({isQuery:!0,index:0}),v=S(0),d=S(0),j=x(()=>q&&(y.value.length>0||c.value.length>0)),w=x(()=>m.value.length>0),F=x(()=>m.value[v.value]||null),M=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},V=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},z=()=>{v.value=v.value>0?v.value-1:m.value.length-1,d.value=F.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,d.value=0},N=()=>{d.value<F.value.contents.length-1?d.value+=1:J()},K=()=>{d.value>0?d.value-=1:z()},Q=e=>e.map(t=>Be(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[n,H=""]=ge(t)?t[D.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",Q([n,...o,H])))}return e.display.map(t=>s("div",Q(t)))},k=()=>{v.value=0,d.value=0,l("updateQuery",""),l("close")},X=()=>B?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(t)}})]))])):null,Z=()=>g?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(G,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{k()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>Q(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:n=>{n.preventDefault(),n.stopPropagation(),b(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(w.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=F.value.contents[d.value];h(a.queries.join(" ")),f(t),r.push(L(t)),k()}}else if(g){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),k())}}}}),Y([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!w.value:!j.value}],id:"search-pro-results"},a.queries.length?p.value?s(ne,{hint:i.value.searching}):w.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},n)=>{const H=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((o,ee)=>{const _=H&&d.value===ee;return s(G,{to:L(o),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{h(a.queries.join(" ")),f(o),k()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",W(o))])])})])})):i.value.emptyResult:q?j.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};
