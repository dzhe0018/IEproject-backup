import{l as v,j as e,U as I}from"./main.js";import{F}from"./main-499a499e.js";import{F as y}from"./FormControl-e1c831f9.js";import{I as S,S as T}from"./Select-07b752e9.js";import{M as o}from"./MenuItem-15f494c0.js";import{F as U}from"./FormHelperText-ab957a1c.js";import"./index.esm-d52ea482.js";import"./identifier-91e83c3b.js";import"./iconBase-acf0401f.js";import"./Box-0ce68545.js";import"./Paper-1943bcb2.js";import"./utils-a4c617b5.js";import"./useFormControl-74340145.js";import"./Input-29494a31.js";import"./createSvgIcon-92c7fe83.js";const B=({columnName:t,columnValue:x,columnMetaData:s,storeColumn:f,columnValidation:r,onColumnChange:E,metaData:i,storeForm:j,formMode:p})=>{v.debug(t,x,s,f,r,i,j,p);const L={className:f.classNames,readOnly:p===F.VIEW||p===F.UPDATE&&i.primary_key.includes(t)},b=r!=null&&r.error?r==null?void 0:r.text:"Select from list",g=()=>I.OUTLINED;return e.jsxs(y,{children:[e.jsx(S,{variant:j.fieldVariant,children:s.formLabel}),e.jsx(T,{error:r==null?void 0:r.error,label:s.formLabel,value:x.split(","),multiple:!0,inputProps:L,variant:g(),onChange:h=>{E(t,h.target.value.join(","))},children:(()=>s.column_type.replace("set(","").replace(")","").replaceAll("'","").split(",").map(function(m){return e.jsx(o,{value:m,children:m},m)}))()}),e.jsx(U,{children:b})]})};export{B as default};
