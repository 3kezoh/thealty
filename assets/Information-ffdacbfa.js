import{r,k as _,o as h,g as d,i as p,a as f,c as g,b as t,t as n,l as c,I as m}from"./index-43dbed66.js";const x={key:0},v=t("h1",{class:"text-xl"},"Theater group",-1),w={class:"flex flex-row gap-3"},y={class:"flex flex-col gap-1"},I=t("h2",{class:"text-lg"},"Name",-1),k={class:"flex flex-col gap-1"},B=t("h2",{class:"text-lg"},"Status",-1),G=["src"],N=["href"],V={__name:"Information",props:{theaterGroupId:{type:String,required:!0}},setup(l){const i=l,s=r(null),a=r(!0),u=_();h(async()=>{try{const{data:e}=await d("/theater_groups/"+i.theaterGroupId);s.value=e}catch{u.error("something went wrong")}finally{a.value=!1}});const o=p(()=>{var e;return{}.VITE_API_URL+((e=s.value)==null?void 0:e.contentUrl)});return(e,S)=>a.value?m("",!0):(f(),g("section",x,[v,t("div",w,[t("div",y,[I,t("p",null,n(s.value.name),1)]),t("div",k,[B,t("p",null,n(s.value.status),1)])]),t("iframe",{src:c(o),width:"1080",height:"720"},null,8,G),t("a",{href:c(o),target:"_blank"},"Download",8,N)]))}};export{V as default};
