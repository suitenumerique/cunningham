import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as qe,r as Ke}from"./index-DTOEHpHZ.js";import{T as a}from"./index-D-ePr75-.js";import{I as Ue}from"./index-86jO0sQu.js";import{B as Ge}from"./index-BIqEzyda.js";const Xe={title:"Components/Forms/TextArea",component:a,args:{rows:4},argTypes:{variant:{control:"select",options:["floating","classic"]}}},r=()=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(Ue,{label:"Your name",fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Your name",rows:4,fullWidth:!0})})]}),c={args:{defaultValue:"Hello world",label:"Describe your job"}},u={args:{defaultValue:"Hello world",label:"Describe your job",state:"success",text:"This is an optional success message"}},d={args:{defaultValue:"Hello world",label:"Describe your job",state:"error",text:"This is an optional error message"}},p={args:{defaultValue:"Hello world",label:"Describe your job",state:"error",text:"This is an optional error message",textItems:["Text too long","Wrong choice","Must contain at least 9 characters, uppercase and digits"]}},m={args:{label:"Describe your job",disabled:!0}},h={args:{label:"Describe your job",defaultValue:"John Doe",disabled:!0}},b={args:{label:"Describe your job"}},g={args:{label:"Describe your job",defaultValue:"John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker"}},f={args:{defaultValue:"Hello world",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors."}},y={args:{defaultValue:"Hello world",label:"Describe your job",rightText:"0/300"}},v={args:{defaultValue:"Hello world",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors.",rightText:"0/300"}},x={args:{defaultValue:"Hello world",label:"Describe your job",fullWidth:!0,text:"This is a text, you can display anything you want here like warnings, information or errors.",rightText:"0/300"}},w={args:{defaultValue:"CEO",label:"Describe your job",text:"This is a text, you can display anything you want here like warnings, information or errors.",charCounter:!0,charCounterMax:30}},s=()=>{const[n,i]=qe.useState("I am controlled");return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-gray-900",children:["Value: ",e.jsx("span",{children:n})]}),e.jsx(a,{label:"Describe your job",value:n,onChange:ze=>i(ze.target.value),rows:4}),e.jsx(Ge,{onClick:()=>i(""),children:"Reset"})]})},o=()=>e.jsx(a,{defaultValue:"john.doe@example.com",label:"Describe your job",rows:4}),t=()=>{const n=Ke.useRef(null);return e.jsxs("div",{children:[e.jsx(a,{label:"Describe your job",ref:n,rows:4}),e.jsx(Ge,{onClick:()=>{var i;return(i=n.current)==null?void 0:i.focus()},children:"Focus"})]})},j={args:{label:"Description",variant:"classic",placeholder:"Enter a description..."}},D={args:{label:"Description",variant:"classic",placeholder:"Enter a description...",defaultValue:"This is a detailed description of the project."}},S={args:{label:"Description",variant:"classic",placeholder:"Enter a description...",disabled:!0}},T={args:{label:"Description",variant:"classic",placeholder:"Enter a description...",defaultValue:"Too short",state:"error",text:"Description must be at least 50 characters"}},V={args:{label:"Notes",hideLabel:!0,placeholder:"Add your notes here..."}},C={args:{label:"Notes",variant:"classic",hideLabel:!0,placeholder:"Add your notes here..."}},l=()=>e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("div",{children:e.jsx(a,{label:"Describe your job",defaultValue:"As a developer, my role involves creating, maintaining, and improving software applications and systems. I work with various programming languages and technologies to bring digital solutions to life.",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Describe your hobbies",defaultValue:`- Gym
- Running
- Coding`,rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"How could you improve your habits ?",defaultValue:"Wake up earlier in the morning",text:"Be exhaustive",charCounter:!0,charCounterMax:30,rows:2,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Tell us about your favorite stack",disabled:!0,rows:2,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"How to code a weather app ?",defaultValue:"Creating a weather app involves several steps, and I'll provide a high-level overview of how you might approach coding one. This example assumes you want to build a web-based weather app using HTML, CSS, and JavaScript, along with data from a weather API. ",state:"error",text:"Address not found",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"How to setup a database ?",defaultValue:"Setting up a PostgreSQL database involves several steps, from installation to configuration. Below is a step-by-step guide on how to set up a PostgreSQL database on a typical Linux environment. The process is similar on other platforms, with slight variations.",text:"Five numbers format",state:"success",rows:4,fullWidth:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Tell us about your favorite libraries",defaultValue:`- ReactQuery
- ReactJS
- AngularJS
- Django`,state:"success",rows:7,fullWidth:!0})})]})});r.__docgenInfo={description:"",methods:[],displayName:"ShowCase"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.__docgenInfo={description:"",methods:[],displayName:"NonControlled"};t.__docgenInfo={description:"",methods:[],displayName:"WithRef"};l.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var k,W,H;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Input label="Your name" fullWidth={true} />
      </div>
      <div className="mt-s">
        <TextArea label="Your name" rows={4} fullWidth={true} />
      </div>
    </div>;
}`,...(H=(W=r.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var E,N,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job"
  }
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var I,J,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "success",
    text: "This is an optional success message"
  }
}`,...(L=(J=u.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var R,_,M;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
    text: "This is an optional error message"
  }
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var F,B,Y;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    state: "error",
    text: "This is an optional error message",
    textItems: ["Text too long", "Wrong choice", "Must contain at least 9 characters, uppercase and digits"]
  }
}`,...(Y=(B=p.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var O,P,Q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    disabled: true
  }
}`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var G,z,q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    defaultValue: "John Doe",
    disabled: true
  }
}`,...(q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var K,U,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "Describe your job"
  }
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Describe your job",
    defaultValue: "John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker John Dave Mike Smith Doe Junior Senior Yoda Skywalker"
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,te,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    rightText: "0/300"
  }
}`,...(le=(te=y.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,ie,ce;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300"
  }
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Describe your job",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    rightText: "0/300"
  }
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,he,be;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    defaultValue: "CEO",
    label: "Describe your job",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
    charCounter: true,
    charCounterMax: 30
  }
}`,...(be=(he=w.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,fe,ye;s.parameters={...s.parameters,docs:{...(ge=s.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState("I am controlled");
  return <div>
      <div className="clr-gray-900">
        Value: <span>{value}</span>
      </div>
      <TextArea label="Describe your job" value={value} onChange={e => setValue(e.target.value)} rows={4} />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>;
}`,...(ye=(fe=s.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,xe,we;o.parameters={...o.parameters,docs:{...(ve=o.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <TextArea defaultValue="john.doe@example.com" label="Describe your job" rows={4} />;
}`,...(we=(xe=o.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var je,De,Se;t.parameters={...t.parameters,docs:{...(je=t.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <div>
      <TextArea label="Describe your job" ref={ref} rows={4} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>;
}`,...(Se=(De=t.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var Te,Ve,Ce;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: "Description",
    variant: "classic",
    placeholder: "Enter a description..."
  }
}`,...(Ce=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var ke,We,He;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: "Description",
    variant: "classic",
    placeholder: "Enter a description...",
    defaultValue: "This is a detailed description of the project."
  }
}`,...(He=(We=D.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ee,Ne,Ae;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: "Description",
    variant: "classic",
    placeholder: "Enter a description...",
    disabled: true
  }
}`,...(Ae=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Ie,Je,Le;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: "Description",
    variant: "classic",
    placeholder: "Enter a description...",
    defaultValue: "Too short",
    state: "error",
    text: "Description must be at least 50 characters"
  }
}`,...(Le=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var Re,_e,Me;V.parameters={...V.parameters,docs:{...(Re=V.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    hideLabel: true,
    placeholder: "Add your notes here..."
  }
}`,...(Me=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Fe,Be,Ye;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    variant: "classic",
    hideLabel: true,
    placeholder: "Add your notes here..."
  }
}`,...(Ye=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ye.source}}};var Oe,Pe,Qe;l.parameters={...l.parameters,docs:{...(Oe=l.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <div>
      <form>
        <div>
          <TextArea label="Describe your job" defaultValue="As a developer, my role involves creating, maintaining, and improving software applications and systems. I work with various programming languages and technologies to bring digital solutions to life." rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Describe your hobbies" defaultValue="- Gym
- Running
- Coding" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How could you improve your habits ?" defaultValue="Wake up earlier in the morning" text="Be exhaustive" charCounter={true} charCounterMax={30} rows={2} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Tell us about your favorite stack" disabled={true} rows={2} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How to code a weather app ?" defaultValue="Creating a weather app involves several steps, and I'll provide a high-level overview of how you might approach coding one. This example assumes you want to build a web-based weather app using HTML, CSS, and JavaScript, along with data from a weather API. " state="error" text="Address not found" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="How to setup a database ?" defaultValue="Setting up a PostgreSQL database involves several steps, from installation to configuration. Below is a step-by-step guide on how to set up a PostgreSQL database on a typical Linux environment. The process is similar on other platforms, with slight variations." text="Five numbers format" state="success" rows={4} fullWidth={true} />
        </div>
        <div className="mt-s">
          <TextArea label="Tell us about your favorite libraries" defaultValue="- ReactQuery
- ReactJS
- AngularJS
- Django" state="success" rows={7} fullWidth={true} />
        </div>
      </form>
    </div>;
}`,...(Qe=(Pe=l.parameters)==null?void 0:Pe.docs)==null?void 0:Qe.source}}};const Ze=["ShowCase","Default","Success","Error","ErrorItems","DisabledEmpty","DisabledFilled","Empty","OverflowingText","WithText","WithTextRight","WithBothTexts","FullWidth","CharCounter","Controlled","NonControlled","WithRef","ClassicVariant","ClassicVariantFilled","ClassicVariantDisabled","ClassicVariantError","HiddenLabel","HiddenLabelClassic","FormExample"],oa=Object.freeze(Object.defineProperty({__proto__:null,CharCounter:w,ClassicVariant:j,ClassicVariantDisabled:S,ClassicVariantError:T,ClassicVariantFilled:D,Controlled:s,Default:c,DisabledEmpty:m,DisabledFilled:h,Empty:b,Error:d,ErrorItems:p,FormExample:l,FullWidth:x,HiddenLabel:V,HiddenLabelClassic:C,NonControlled:o,OverflowingText:g,ShowCase:r,Success:u,WithBothTexts:v,WithRef:t,WithText:f,WithTextRight:y,__namedExportsOrder:Ze,default:Xe},Symbol.toStringTag,{value:"Module"}));export{w as C,c as D,d as E,x as F,oa as S,f as W,u as a,m as b,h as c,v as d,s as e,t as f,l as g};
