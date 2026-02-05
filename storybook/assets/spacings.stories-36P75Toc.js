import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as g}from"./cunningham-tokens-DY4oQvhI.js";const f={title:"Misc/Spacings"},r={render:()=>{const u=Object.entries(g.themes.default.globals.spacings).sort((n,a)=>{const i=s=>parseFloat(typeof s=="string"?s:String(s));return i(n[1])-i(a[1])});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:u.map(([n,a])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs("div",{className:"fw-bold clr-content-semantic-neutral-primary",style:{width:"50px"},children:["-",n]}),e.jsx("div",{className:"fw-medium fs-m clr-content-semantic-neutral-primary",style:{width:"100px"},children:a}),e.jsx("div",{className:"bg-semantic-error-tertiary pl-"+n,style:{height:"48px",width:0}})]},n))})}},t={render:()=>e.jsxs("div",{className:"clr-content-semantic-neutral-primary bg-yellow-500",children:[e.jsx("div",{className:"clr-content-semantic-neutral-primary bg-purple-500  fw-medium p-t mb-l",children:"Tiny padding + Large margin bottom"}),e.jsx("div",{className:"content-neutral-primary bg-pink-500 fw-medium p-l ml-b",children:"Large padding + Base margin left"})]})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    // Trier les espacements par valeur croissante avant de les afficher
    // Sort spacings by value before rendering
    const sortedSpacings = Object.entries(tokens.themes.default.globals.spacings).sort((a, b) => {
      // On retire les éventuelles unités pour comparer numériquement
      const parse = (v: any) => parseFloat(typeof v === "string" ? v : String(v));
      return parse(a[1]) - parse(b[1]);
    });
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
        {sortedSpacings.map(([key, value]) => {
        return <div key={key} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
              <div className="fw-bold clr-content-semantic-neutral-primary" style={{
            width: "50px"
          }}>
                -{key}
              </div>
              <div className="fw-medium fs-m clr-content-semantic-neutral-primary" style={{
            width: "100px"
          }}>
                {value}
              </div>
              <div className={"bg-semantic-error-tertiary pl-" + key} style={{
            height: "48px",
            width: 0
          }} />
            </div>;
      })}
      </div>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,o;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div className="clr-content-semantic-neutral-primary bg-yellow-500">
        <div className="clr-content-semantic-neutral-primary bg-purple-500  fw-medium p-t mb-l">
          Tiny padding + Large margin bottom
        </div>
        <div className="content-neutral-primary bg-pink-500 fw-medium p-l ml-b">
          Large padding + Base margin left
        </div>
      </div>;
  }
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const x=["Default","Example"];export{r as Default,t as Example,x as __namedExportsOrder,f as default};
