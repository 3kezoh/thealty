import{_ as B,r as n,k as F,E as L,C as P,a as u,c as i,b as a,w as f,G as V,F as b,H as k,t as v,e as R,I as $,m as x,D as c,f as C,g as M,J as A,K as G}from"./index-43dbed66.js";const m=p=>(A("data-v-99b2adb9"),p=p(),G(),p),H=m(()=>a("h1",{class:"text-xl"},"Theater groups",-1)),J={class:"flex flex-col gap-3"},K={class:"flex flex-row gap-3"},O={class:"flex flex-row gap-1"},j=m(()=>a("label",{for:"search-field"},"Champ",-1)),q=["value"],z={class:"flex flex-row gap-1"},Q=m(()=>a("label",{for:"search-value"},"Valeur",-1)),W=m(()=>a("option",{value:""},"Tous",-1)),X=["value"],Y={__name:"TheaterGroups",setup(p){const y=n([]),_=n(!0),D=F(),l=n("name"),o=n(""),w=n(0),g=n({page:1,rowsPerPage:10,sortBy:"status",sortType:"desc"}),T={closed:"Fermé",verified:"Vérifié",pending:"En attente"},S=["name","phoneNumber"],I=["status"],E=[...S,...I],N=[{text:"ID",value:"id"},{text:"Nom",value:"name",sortable:!0},{text:"Numéro de téléphone",value:"phoneNumber",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Représentant",value:"representative"}];function U(){const r=new URLSearchParams,{page:t,rowsPerPage:s,sortBy:h,sortType:e}=g.value;return r.append("page",t),r.append("itemsPerPage",s),r.append(`order[${h}]`,e),o.value&&r.append(l.value,o.value),r}return L(async()=>{try{_.value=!0;const r=U(),{data:t}=await M("/theater_groups?"+r.toString());y.value=t["hydra:member"].map(s=>({...s,id:s["@id"].split("/").pop(),status:T[s.status],representative:{id:s.representative["@id"].split("/").pop(),name:`${s.representative.firstName} ${s.representative.lastName}`}})),w.value=t["hydra:totalItems"]}catch(r){D.error(r.message)}finally{_.value=!1}}),(r,t)=>{const s=P("router-link"),h=P("EasyDataTable");return u(),i(b,null,[H,a("div",J,[a("div",K,[a("div",O,[j,f(a("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),id:"search-field",onChange:t[1]||(t[1]=e=>o.value="")},[(u(),i(b,null,k(E,e=>a("option",{key:e,value:e},v(N.find(d=>d.value===e).text),9,q)),64))],544),[[V,l.value]])]),a("div",z,[Q,S.includes(l.value)?f((u(),i("input",{key:0,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),type:"text",id:"search-value",class:"border border-gray-300"},null,512)),[[R,o.value]]):I.includes(l.value)?f((u(),i("select",{key:1,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value=e),id:"search-value",class:"border border-gray-300"},[W,(u(),i(b,null,k(T,(e,d)=>a("option",{key:d,value:d},v(e),9,X)),64))],512)),[[V,o.value]]):$("",!0),a("button",{onClick:t[4]||(t[4]=e=>o.value="")},"Réinitialiser")])]),x(h,{"server-options":g.value,"onUpdate:server-options":t[5]||(t[5]=e=>g.value=e),"server-items-length":w.value,"buttons-pagination":"",headers:N,items:y.value,loading:_.value,alternating:"","rows-items":[10,25,50],"rows-of-page-separator-message":"sur","rows-per-page-message":"Résultats par page","empty-message":"Aucun résultat","must-sort":""},{"item-name":c(e=>[x(s,{to:{name:"admin-theater-group",params:{theaterGroupId:e.id}}},{default:c(()=>[C(v(e.name),1)]),_:2},1032,["to"])]),"item-representative":c(e=>[x(s,{to:{name:"admin-user",params:{userId:e.representative.id}}},{default:c(()=>[C(v(e.representative.name),1)]),_:2},1032,["to"])]),_:1},8,["server-options","server-items-length","items","loading"])])],64)}}},ee=B(Y,[["__scopeId","data-v-99b2adb9"]]);export{ee as default};
