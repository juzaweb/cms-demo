import{r as n,a as l,j as e,b as g}from"./app-b7841ba0.js";import{b as h,m as p}from"./functions-29bc5ae0.js";import T from"./post-type-form-e7ffa565.js";import{A as v}from"./admin-5493fc77.js";import x from"./top-options-89f57717.js";import"./lodash-47596753.js";import"./input-96f1cae8.js";import"./textarea-07091d01.js";import"./checkbox-7591636f.js";import"./button-f7bc13e1.js";import"./select-953a0574.js";import"./react-select.esm-6ed90d4b.js";function C({plugin:i}){const[d,t]=n.useState(!1),[a,s]=n.useState(),u=r=>{r.preventDefault();let c=h("dev-tools/plugins/"+i.name+"/post-types"),f=new FormData(r.target);return t(!0),t(!1),g.post(c,f).then(m=>{let o=p(m);t(!1),s(o),(o==null?void 0:o.status)===!0&&r.target.reset(),setTimeout(()=>{s(void 0)},2e3)}).catch(m=>{s(p(m)),t(!1),setTimeout(()=>{s(void 0)},2e3)}),!1};return l(v,{children:[e(x,{moduleSelected:`plugins/${i.name}`,moduleType:"plugins",optionSelected:"post-types"}),e("div",{className:"row",children:l("div",{className:"col-md-12",children:[e("h5",{children:"Make Custom Post Type"}),a&&e("div",{className:`alert alert-${a.status?"success":"danger"} jw-message`,children:a.message}),e("form",{method:"POST",onSubmit:u,children:e(T,{buttonLoading:d})})]})})]})}export{C as default};
