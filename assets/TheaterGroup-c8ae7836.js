import{r as l,k as p,o as f,g as i,i as m,C as v,a as g,c as x,m as y,D as k,f as T,b as e,t as o,l as u,I as C}from"./index-43dbed66.js";const N={key:0,class:"flex flex-col items-center justify-center"},b=e("h1",{class:"text-xl"},"Theater group",-1),w={class:"flex flex-row gap-3"},I={class:"flex flex-col gap-1"},V=e("div",{class:"text-lg"},"Name",-1),G={class:"flex flex-col gap-1"},B=e("div",{class:"text-lg"},"Phone number",-1),D={class:"flex flex-col gap-1"},P=e("div",{class:"text-lg"},"Status",-1),j=["src"],A=["href"],S={__name:"TheaterGroup",props:{theaterGroupId:{type:Number,required:!0}},setup(d){const r=d,s=l({}),c=l(!0),a=p();f(async()=>{try{const{data:t}=await i("/theater_groups/"+r.theaterGroupId);s.value=t}catch(t){a.error(t.message)}finally{c.value=!1}});async function h(){try{const{data:t}=await i("/theater_groups/"+r.theaterGroupId,{status:"verified"},{headers:{"Content-Type":"application/merge-patch+json"},method:"PATCH"});s.value.status=t.status,a.success("Theater group verified")}catch(t){a.error(t.message)}}const n=m(()=>{var t;return{}.VITE_API_URL+((t=s.value)==null?void 0:t.contentUrl)});return(t,E)=>{const _=v("router-link");return c.value?C("",!0):(g(),x("section",N,[b,y(_,{to:"/admin/theater-groups"},{default:k(()=>[T("Back")]),_:1}),e("div",w,[e("div",I,[V,e("div",null,o(s.value.name),1)]),e("div",G,[B,e("div",null,o(s.value.phoneNumber),1)]),e("div",D,[P,e("div",null,o(s.value.status),1)])]),e("iframe",{src:u(n),width:"1080",height:"720"},null,8,j),e("a",{href:u(n),target:"_blank"},"Download",8,A),e("button",{onClick:h},"Verify")]))}}};export{S as default};
