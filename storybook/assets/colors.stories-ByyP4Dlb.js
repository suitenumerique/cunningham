import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as S}from"./cunningham-tokens-DY4oQvhI.js";const T={title:"Misc/Colors"},w=["brand","gray","success","info","warning","error","red","orange","brown","yellow","green","blue-1","blue-2","purple","pink"],C=[950,900,850,800,750,700,650,600,550,500,450,400,350,300,250,200,150,100,"050"],i={render:()=>e.jsxs("div",{children:[e.jsx("div",{}),w.map(n=>e.jsx("div",{style:{display:"flex",gap:"5px"},children:C.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,flexBasis:"200px",alignItems:"center",flexGrow:1},children:[e.jsx("div",{style:{width:"72px",height:"48px"},className:"bg-"+n+"-"+a}),e.jsxs("pre",{className:"clr-content-semantic-neutral-primary fs-s mt-st",children:["bg-semantic-",n,"-",a]})]},n+a))},n))]})},c={render:()=>{const{semantic:n}=S.themes.default.contextuals.background,m=Object.entries(n).flatMap(([r,t])=>typeof t=="object"&&t!==null?Object.entries(t).map(([s,o])=>({category:r,key:s,value:o,fullKey:`${r}-${s}`})):[]).reduce((r,t)=>(r[t.category]||(r[t.category]=[]),r[t.category].push(t),r),{});return e.jsx("div",{children:Object.entries(m).map(([r,t])=>e.jsxs("section",{style:{marginBottom:"3rem"},children:[e.jsx("h2",{style:{color:"#626B77",marginBottom:"1rem",textTransform:"capitalize",fontSize:"1.5rem",paddingBottom:"0.5rem"},children:r}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",maxWidth:"100%",gap:"1rem"},children:t.map(({key:s,value:o,fullKey:p})=>e.jsxs("div",{style:{padding:"1rem",borderRadius:"8px",backgroundColor:"#FFFFFF",border:"1px solid #E1E2E4",gridColumn:"span 1"},children:[e.jsx("div",{style:{width:"100%",height:"80px",backgroundColor:o,borderRadius:"4px",marginBottom:"0.5rem",border:"1px solid #E1E2E4"}}),e.jsx("strong",{style:{textTransform:"capitalize"},children:s}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#707882",marginTop:"0.25rem"},children:o}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"#A7ABB1",marginTop:"0.25rem"},children:[".bg-semantic-",p]})]},p))})]},r))})}},l={render:()=>e.jsx("div",{children:w.map(n=>e.jsx("div",{style:{display:"flex",gap:"10px"},children:C.map(a=>{const m=["fs-s","mt-st","clr-"+n+"-"+a];return e.jsx("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,flexBasis:"110px",alignItems:"center",flexGrow:1},children:e.jsxs("pre",{className:m.join(" "),children:["clr-",n,"-",a]})},n+a)})},n))})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-semantic-brand-tertiary clr-content-semantic-brand-primary fw-medium p-t",children:"I am a text on top of a primary-500 background 👋"}),e.jsx("div",{className:"clr-content-semantic-neutral-primary bg-semantic-neutral-tertiary fw-medium p-t",children:"I am a text on top of a secondary-500 background 👋"}),e.jsx("div",{className:"bg-semantic-error-tertiary clr-content-semantic-error-primary fw-medium p-t",children:"I am a text on top of a danger-500 background 👋"})]})};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <div>{}</div>
        {colors.map(color => <div key={color} style={{
        display: "flex",
        gap: "5px"
      }}>
            {tints.map(tint => <div key={color + tint} style={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          flexBasis: "200px",
          alignItems: "center",
          flexGrow: 1
        }}>
                <div style={{
            width: "72px",
            height: "48px"
          }} className={"bg-" + color + "-" + tint} />
                <pre className="clr-content-semantic-neutral-primary fs-s mt-st">
                  bg-semantic-{color}-{tint}
                </pre>
              </div>)}
          </div>)}
      </div>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const {
      semantic
    } = tokens.themes.default.contextuals.background;

    // Extract all background values from the contextuals
    const backgroundEntries = Object.entries(semantic).flatMap(([category, values]) => {
      if (typeof values === "object" && values !== null) {
        return Object.entries(values).map(([key, value]) => ({
          category,
          key,
          value,
          fullKey: \`\${category}-\${key}\`
        }));
      }
      return [];
    });

    // Group by category
    const groupedBackgrounds = backgroundEntries.reduce((acc, entry) => {
      if (!acc[entry.category]) {
        acc[entry.category] = [];
      }
      acc[entry.category].push(entry);
      return acc;
    }, {} as Record<string, typeof backgroundEntries>);
    return <div>
        {Object.entries(groupedBackgrounds).map(([category, entries]) => <section key={category} style={{
        marginBottom: "3rem"
      }}>
            <h2 style={{
          color: "#626B77",
          marginBottom: "1rem",
          textTransform: "capitalize",
          fontSize: "1.5rem",
          paddingBottom: "0.5rem"
        }}>
              {category}
            </h2>
            <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: "100%",
          gap: "1rem"
        }}>
              {entries.map(({
            key,
            value,
            fullKey
          }) => <div key={fullKey} style={{
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E1E2E4",
            gridColumn: "span 1"
          }}>
                  <div style={{
              width: "100%",
              height: "80px",
              backgroundColor: value,
              borderRadius: "4px",
              marginBottom: "0.5rem",
              border: "1px solid #E1E2E4"
            }} />
                  <strong style={{
              textTransform: "capitalize"
            }}>{key}</strong>
                  <div style={{
              fontSize: "0.875rem",
              color: "#707882",
              marginTop: "0.25rem"
            }}>
                    {value}
                  </div>
                  <div style={{
              fontSize: "0.75rem",
              color: "#A7ABB1",
              marginTop: "0.25rem"
            }}>
                    .bg-semantic-{fullKey}
                  </div>
                </div>)}
            </div>
          </section>)}
      </div>;
  }
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,h,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <div>
        {colors.map(color => <div key={color} style={{
        display: "flex",
        gap: "10px"
      }}>
            {tints.map(tint => {
          const classes = ["fs-s", "mt-st", "clr-" + color + "-" + tint];
          return <div key={color + tint} style={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            flexBasis: "110px",
            alignItems: "center",
            flexGrow: 1
          }}>
                  <pre className={classes.join(" ")}>
                    clr-{color}-{tint}
                  </pre>
                </div>;
        })}
          </div>)}
      </div>;
  }
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var j,B,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <>
        <div className="bg-semantic-brand-tertiary clr-content-semantic-brand-primary fw-medium p-t">
          I am a text on top of a primary-500 background 👋
        </div>
        <div className="clr-content-semantic-neutral-primary bg-semantic-neutral-tertiary fw-medium p-t">
          I am a text on top of a secondary-500 background 👋
        </div>
        <div className="bg-semantic-error-tertiary clr-content-semantic-error-primary fw-medium p-t">
          I am a text on top of a danger-500 background 👋
        </div>
      </>;
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const z=["BackgroundColors","ContextualBackgrounds","TextColors","Example"];export{i as BackgroundColors,c as ContextualBackgrounds,d as Example,l as TextColors,z as __namedExportsOrder,T as default};
