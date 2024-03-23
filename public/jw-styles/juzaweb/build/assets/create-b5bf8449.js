import{r as l,a as r,j as e,b}from"./app-b7841ba0.js";import v from"./top-options-89f57717.js";import{A as g}from"./admin-5493fc77.js";import{B as T}from"./button-f7bc13e1.js";import{I as s}from"./input-96f1cae8.js";import{T as N}from"./textarea-07091d01.js";import{b as x,m as c}from"./functions-29bc5ae0.js";import"./select-953a0574.js";import"./react-select.esm-6ed90d4b.js";import"./lodash-47596753.js";function C(){const[p,o]=l.useState(!1),[i,m]=l.useState(),[d,u]=l.useState(),h=n=>{n.preventDefault(),o(!0),u(void 0),m(void 0);let f=new FormData(n.target);b.post(x("dev-tools/themes"),f).then(t=>{let a=c(t);o(!1),m(a),u(t.data.data.output),(a==null?void 0:a.status)===!0&&n.target.reset()}).catch(t=>{o(!1),m(c(t))})};return r(g,{children:[e(v,{moduleType:"themes"}),e("div",{className:"row",children:r("div",{className:"col-md-12",children:[i&&e("div",{className:`alert alert-${i.status?"success":"danger"} jw-message`,children:i.message}),d&&e("pre",{children:d}),r("form",{method:"POST",onSubmit:h,children:[e(s,{name:"name",label:"Name",required:!0,description:"Theme name must be unique, only characters a-z 0-9 and -."}),e(s,{name:"title",label:"Title",required:!0,description:"Title display for the theme."}),e(N,{name:"description",label:"Description",rows:3,description:"Some description for your theme."}),r("div",{className:"row",children:[e("div",{className:"col-md-3",children:e(s,{name:"author",label:"Author",required:!0})}),e("div",{className:"col-md-3",children:e(s,{name:"version",label:"Version",required:!0,value:"1.0"})})]}),e(T,{label:"Create Theme",type:"submit",class:"mt-3",loading:p})]})]})})]})}export{C as default};
