import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{t as a}from"./cunningham-tokens-DY4oQvhI.js";const g={title:"Misc/Spacings"},n={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.globals.font.sizes).map(e=>s.jsxs("div",{className:"clr-content-semantic-neutral-primary fs-"+e,children:["Using the ",s.jsxs("code",{children:["fs-",e]})," class"]},e))})},r={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.globals.font.weights).map(e=>s.jsxs("div",{className:"clr-content-semantic-neutral-primary fs-l fw-"+e,children:["Using the ",s.jsxs("code",{children:["fw-",e]})," class"]},e))})},t={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.globals.font.families).map(e=>s.jsxs("div",{className:"clr-content-semantic-neutral-primary f-"+e,children:["Using the ",s.jsxs("code",{children:["f-",e]})," class"]},e))})};var l,c,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.globals.font.sizes).map(key => <div key={key} className={"clr-content-semantic-neutral-primary fs-" + key}>
            Using the <code>fs-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var o,d,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.globals.font.weights).map(key => <div key={key} className={"clr-content-semantic-neutral-primary fs-l fw-" + key}>
            Using the <code>fw-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,f,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.globals.font.families).map(key => <div key={key} className={"clr-content-semantic-neutral-primary f-" + key}>
            Using the <code>f-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const h=["Sizes","Weights","Families"];export{t as Families,n as Sizes,r as Weights,h as __namedExportsOrder,g as default};
