import{r as s,_ as n,l as i,j as e}from"./main.js";import{M as m,v as p}from"./main-499a499e.js";import"./index.esm-d52ea482.js";import"./identifier-91e83c3b.js";import"./iconBase-acf0401f.js";import"./Box-0ce68545.js";import"./Paper-1943bcb2.js";const l=s.lazy(()=>n(()=>import("./Alert-7547bc75.js"),["./Alert-7547bc75.js","./main.js","./index.esm-f4cad0c6.js","./iconBase-acf0401f.js","./identifier-91e83c3b.js","./AdminTheme-95628d10.js","./AlertTitle-0277b656.js","./createSvgIcon-92c7fe83.js","./Close-07cb3d3a.js","./Paper-1943bcb2.js"],import.meta.url));function _({dataSource:o}){i.debug(o);let t="",a="";try{const r=JSON.parse(o.replaceAll("'",'"'));if(r.dbs&&r.tbl)t=r.dbs,a=r.tbl;else return console.error("Invalid arguments"),e.jsx(s.Suspense,{children:e.jsx(l,{severity:"error",message:"Invalid arguments - check console for more information",close:!1})})}catch(r){return console.error("Invalid arguments",r),e.jsx(s.Suspense,{children:e.jsx(l,{severity:"error",message:"Invalid arguments - check console for more information",close:!1})})}return e.jsx(m,{appId:p(),dbs:t,tbl:a})}export{_ as default};
