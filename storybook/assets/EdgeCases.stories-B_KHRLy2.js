import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./index-DTOEHpHZ.js";import{B as t}from"./index-BIqEzyda.js";import{a,C as v,M as e,b as i}from"./index-C5sehico.js";import{l as s}from"./longLorem-CjgWBgpH.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ToastProvider-DvM2sjE7.js";import"./index-rkLeB0kx.js";import"./cunningham-tokens-DY4oQvhI.js";import"./index-DO9VteM4.js";import"./index-CAEZVxT0.js";const k={title:"Components/Modal/Edge Cases",parameters:{docs:{story:{height:"350px"}}}},r={render:()=>{const d=a(),l=a(),c=a(),m=()=>{d.open(),setTimeout(()=>{l.open(),setTimeout(()=>{c.open()},100)},100)};M.useEffect(()=>{m()},[]);const x=Array.from({length:1e3},(o,h)=>h);return n.jsx(v,{children:n.jsxs("div",{style:{minHeight:"3000px",backgroundColor:"pink"},children:[n.jsx(t,{onClick:m,style:{position:"fixed"},children:"Open Modals"}),n.jsx(e,{leftActions:n.jsx(t,{variant:"tertiary",children:"Tertiary"}),rightActions:n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",children:"Secondary"}),n.jsx(t,{variant:"primary",children:"Primary"})]}),size:i.LARGE,...d,children:s.text}),n.jsx(e,{leftActions:n.jsx(t,{variant:"tertiary",children:"Tertiary"}),rightActions:n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",children:"Secondary"}),n.jsx(t,{variant:"primary",children:"Primary"})]}),size:i.MEDIUM,...l,children:s.text}),n.jsx(e,{leftActions:n.jsx(t,{variant:"tertiary",children:"Tertiary"}),rightActions:n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",children:"Secondary"}),n.jsx(t,{variant:"primary",children:"Primary"})]}),size:i.SMALL,...c,children:s.text}),x.map(o=>n.jsx("div",{children:o},o))]})})}};var p,y,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const modal1 = useModal();
    const modal2 = useModal();
    const modal3 = useModal();
    const openModals = () => {
      modal1.open();
      setTimeout(() => {
        modal2.open();
        setTimeout(() => {
          modal3.open();
        }, 100);
      }, 100);
    };
    useEffect(() => {
      openModals();
    }, []);
    const array = Array.from({
      length: 1000
    }, (_, i) => i);
    return <CunninghamProvider>
        <div style={{
        minHeight: "3000px",
        backgroundColor: "pink"
      }}>
          <Button onClick={openModals} style={{
          position: "fixed"
        }}>
            Open Modals
          </Button>
          <Modal leftActions={<Button variant="tertiary">Tertiary</Button>} rightActions={<>
                <Button variant="secondary">Secondary</Button>
                <Button variant="primary">Primary</Button>
              </>} size={ModalSize.LARGE} {...modal1}>
            {longLorem.text}
          </Modal>
          <Modal leftActions={<Button variant="tertiary">Tertiary</Button>} rightActions={<>
                <Button variant="secondary">Secondary</Button>
                <Button variant="primary">Primary</Button>
              </>} size={ModalSize.MEDIUM} {...modal2}>
            {longLorem.text}
          </Modal>
          <Modal leftActions={<Button variant="tertiary">Tertiary</Button>} rightActions={<>
                <Button variant="secondary">Secondary</Button>
                <Button variant="primary">Primary</Button>
              </>} size={ModalSize.SMALL} {...modal3}>
            {longLorem.text}
          </Modal>
          {array.map(i => <div key={i}>{i}</div>)}
        </div>
      </CunninghamProvider>;
  }
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const P=["StackedModals"];export{r as StackedModals,P as __namedExportsOrder,k as default};
