import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as ma,e as da,u as pa,g as ha,b as ga,o as xa,d as ba}from"./reactHookFormUtils-DBL7F8xI.js";import{e as fa,r as ya}from"./index-DTOEHpHZ.js";import{I as a}from"./index-86jO0sQu.js";import{B as H}from"./index-BIqEzyda.js";const Va={title:"Components/Forms/Input",component:a,argTypes:{disabled:{control:"boolean"},state:{control:"select",options:["default","success","error"]},variant:{control:"select",options:["floating","classic"]}}},c={args:{defaultValue:"Hello world",label:"Your name"}},u={args:{defaultValue:"Hello world",label:"Your name",state:"success",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional success message"}},m={args:{defaultValue:"Hello world",label:"Your name",state:"error",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional error message",disabled:!1}},d={args:{defaultValue:"Hello world",label:"Your name",state:"error",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional error message",textItems:["Text too long","Wrong choice","Must contain at least 9 characters, uppercase and digits"]}},p={args:{label:"Your name",icon:e.jsx("span",{className:"material-icons",children:"person"}),disabled:!0}},h={args:{label:"Your name",defaultValue:"John Doe",icon:e.jsx("span",{className:"material-icons",children:"person"}),disabled:!0}},g={args:{label:"Your email"}},x={args:{label:"Account balance",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"1000"}},b={args:{label:"Account balance",rightIcon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"1000"}},f={args:{label:"Not a recommended use",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),rightIcon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"Is isn't recommended to use both icons"}},y={args:{label:"Your name",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"John Dave Mike Smith Doe Junior Senior Yoda Skywalker"}},V={args:{defaultValue:"Hello world",label:"Your name",text:"This is a text, you can display anything you want here like warnings, informations or errors."}},S={args:{defaultValue:"Hello world",label:"Your name",rightText:"0/300"}},v={args:{defaultValue:"Hello world",label:"Your name",text:"This is a text, you can display anything you want here like warnings, informations or errors.",rightText:"0/300"}},N={args:{defaultValue:"Hello world",label:"Your name",fullWidth:!0,text:"This is a text, you can display anything you want here like warnings, informations or errors.",rightText:"0/300"}},j={args:{defaultValue:"CEO",label:"Job title",text:"This is a text, you can display anything you want here like warnings, informations or errors.",charCounter:!0,charCounterMax:30}},n=()=>{const[s,r]=fa.useState("I am controlled");return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-gray-900",children:["Value: ",e.jsx("span",{children:s})]}),e.jsx(a,{label:"Your identity",value:s,onChange:F=>r(F.target.value)}),e.jsx(H,{onClick:()=>r(""),children:"Reset"})]})},o=()=>e.jsx(a,{defaultValue:"john.doe@example.com",label:"Your email"}),t=()=>{const s=ya.useRef(null);return e.jsxs("div",{children:[e.jsx(a,{label:"Your identity",ref:s}),e.jsx(H,{onClick:()=>{var r;return(r=s.current)==null?void 0:r.focus()},children:"Focus"})]})},l=()=>e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("div",{children:e.jsx(a,{label:"First name",defaultValue:"John"})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Last name",defaultValue:"Smith"})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Job Title",defaultValue:"Project Manager",text:"Your position in the company",charCounter:!0,charCounterMax:30})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Code",defaultValue:"XIJZ81",disabled:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Address",defaultValue:"1 Infinite Loop",state:"error",text:"Address not found",icon:e.jsx("span",{className:"material-icons",children:"apartment"})})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Zip",defaultValue:"96020",text:"Five numbers format",state:"success",icon:e.jsx("span",{className:"material-icons",children:"location_on"})})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"City",defaultValue:"Palo Alto",state:"success",icon:e.jsx("span",{className:"material-icons",children:"map"})})})]})}),C={args:{label:"Your name",variant:"classic",placeholder:"Enter your name"}},I={args:{label:"Your name",variant:"classic",placeholder:"Enter your name",defaultValue:"John Doe"}},Y={args:{label:"Your email",variant:"classic",placeholder:"Enter your email address",icon:e.jsx("span",{className:"material-icons",children:"email"})}},E={args:{label:"Your name",variant:"classic",placeholder:"Enter your name",disabled:!0}},w={args:{label:"Your email",variant:"classic",placeholder:"Enter your email",defaultValue:"invalid-email",state:"error",text:"Please enter a valid email address"}},T={args:{label:"Search",hideLabel:!0,placeholder:"Search...",icon:e.jsx("span",{className:"material-icons",children:"search"})}},_={args:{label:"Search",variant:"classic",hideLabel:!0,placeholder:"Search...",icon:e.jsx("span",{className:"material-icons",children:"search"})}},i=()=>{const s=ma().shape({email:da().email().required()}),{register:r,handleSubmit:F,formState:W}=pa({defaultValues:{email:""},mode:"onChange",reValidateMode:"onChange",resolver:ba(s)});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:F(xa),children:[e.jsx(a,{label:"Email address",fullWidth:!0,state:ga("email",W),text:ha("email",W),...r("email")}),e.jsx(H,{fullWidth:!0,children:"Log-in"})]})};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.__docgenInfo={description:"",methods:[],displayName:"NonControlled"};t.__docgenInfo={description:"",methods:[],displayName:"WithRef"};l.__docgenInfo={description:"",methods:[],displayName:"FormExample"};i.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var k,D,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name"
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var J,M,L;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "success",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional success message"
  }
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var B,A,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message",
    disabled: false
  }
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var P,Z,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message",
    textItems: ["Text too long", "Wrong choice", "Must contain at least 9 characters, uppercase and digits"]
  }
}`,...(q=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var X,$,z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    icon: <span className="material-icons">person</span>,
    disabled: true
  }
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var G,K,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    defaultValue: "John Doe",
    icon: <span className="material-icons">person</span>,
    disabled: true
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,ee,ae;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Your email"
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,ne;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: "Account balance",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000"
  }
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,te,le;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: "Account balance",
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000"
  }
}`,...(le=(te=b.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,ce,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "Not a recommended use",
    icon: <span className="material-icons">attach_money</span>,
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "Is isn't recommended to use both icons"
  }
}`,...(ue=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,de,pe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "John Dave Mike Smith Doe Junior Senior Yoda Skywalker"
  }
}`,...(pe=(de=y.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ge,xe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors."
  }
}`,...(xe=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,fe,ye;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    rightText: "0/300"
  }
}`,...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ve,Se,ve;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300"
  }
}`,...(ve=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Ne,je,Ce;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300"
  }
}`,...(Ce=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ie,Ye,Ee;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    defaultValue: "CEO",
    label: "Job title",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    charCounter: true,
    charCounterMax: 30
  }
}`,...(Ee=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:Ee.source}}};var we,Te,_e;n.parameters={...n.parameters,docs:{...(we=n.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState("I am controlled");
  return <div>
      <div className="clr-gray-900">
        Value: <span>{value}</span>
      </div>
      <Input label="Your identity" value={value} onChange={e => setValue(e.target.value)} />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>;
}`,...(_e=(Te=n.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Fe,He,We;o.parameters={...o.parameters,docs:{...(Fe=o.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Input defaultValue="john.doe@example.com" label="Your email" />;
}`,...(We=(He=o.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var ke,De,Re;t.parameters={...t.parameters,docs:{...(ke=t.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement>(null);
  return <div>
      <Input label="Your identity" ref={ref} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>;
}`,...(Re=(De=t.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Je,Me,Le;l.parameters={...l.parameters,docs:{...(Je=l.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <div>
      <form>
        <div>
          <Input label="First name" defaultValue="John" />
        </div>
        <div className="mt-s">
          <Input label="Last name" defaultValue="Smith" />
        </div>
        <div className="mt-s">
          <Input label="Job Title" defaultValue="Project Manager" text="Your position in the company" charCounter={true} charCounterMax={30} />
        </div>
        <div className="mt-s">
          <Input label="Code" defaultValue="XIJZ81" disabled={true} />
        </div>
        <div className="mt-s">
          <Input label="Address" defaultValue="1 Infinite Loop" state="error" text="Address not found" icon={<span className="material-icons">apartment</span>} />
        </div>
        <div className="mt-s">
          <Input label="Zip" defaultValue="96020" text="Five numbers format" state="success" icon={<span className="material-icons">location_on</span>} />
        </div>
        <div className="mt-s">
          <Input label="City" defaultValue="Palo Alto" state="success" icon={<span className="material-icons">map</span>} />
        </div>
      </form>
    </div>;
}`,...(Le=(Me=l.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var Be,Ae,Oe;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    variant: "classic",
    placeholder: "Enter your name"
  }
}`,...(Oe=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Pe,Ze,qe;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    variant: "classic",
    placeholder: "Enter your name",
    defaultValue: "John Doe"
  }
}`,...(qe=(Ze=I.parameters)==null?void 0:Ze.docs)==null?void 0:qe.source}}};var Xe,$e,ze;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    label: "Your email",
    variant: "classic",
    placeholder: "Enter your email address",
    icon: <span className="material-icons">email</span>
  }
}`,...(ze=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Ge,Ke,Qe;E.parameters={...E.parameters,docs:{...(Ge=E.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    variant: "classic",
    placeholder: "Enter your name",
    disabled: true
  }
}`,...(Qe=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,ea,aa;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    label: "Your email",
    variant: "classic",
    placeholder: "Enter your email",
    defaultValue: "invalid-email",
    state: "error",
    text: "Please enter a valid email address"
  }
}`,...(aa=(ea=w.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var sa,ra,na;T.parameters={...T.parameters,docs:{...(sa=T.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    label: "Search",
    hideLabel: true,
    placeholder: "Search...",
    icon: <span className="material-icons">search</span>
  }
}`,...(na=(ra=T.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var oa,ta,la;_.parameters={..._.parameters,docs:{...(oa=_.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    label: "Search",
    variant: "classic",
    hideLabel: true,
    placeholder: "Search...",
    icon: <span className="material-icons">search</span>
  }
}`,...(la=(ta=_.parameters)==null?void 0:ta.docs)==null?void 0:la.source}}};var ia,ca,ua;i.parameters={...i.parameters,docs:{...(ia=i.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  interface InputExampleFormValues {
    email: string;
  }
  const inputExampleSchema = Yup.object().shape({
    email: Yup.string().email().required()
  });
  const {
    register,
    handleSubmit,
    formState
  } = useForm<InputExampleFormValues>({
    defaultValues: {
      email: ""
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(inputExampleSchema)
  });
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Email address" fullWidth={true} state={getFieldState("email", formState)} text={getFieldErrorMessage("email", formState)} {...register("email")} />
      <Button fullWidth={true}>Log-in</Button>
    </form>;
}`,...(ua=(ca=i.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};const Sa=["Default","Success","Error","ErrorItems","DisabledEmpty","DisabledFilled","Empty","Icon","IconRight","IconBoth","OverflowingText","WithText","WithTextRight","WithBothTexts","FullWidth","CharCounter","Controlled","NonControlled","WithRef","FormExample","ClassicVariant","ClassicVariantFilled","ClassicVariantWithIcon","ClassicVariantDisabled","ClassicVariantError","HiddenLabel","HiddenLabelClassic","ReactHookForm"],Ya=Object.freeze(Object.defineProperty({__proto__:null,CharCounter:j,ClassicVariant:C,ClassicVariantDisabled:E,ClassicVariantError:w,ClassicVariantFilled:I,ClassicVariantWithIcon:Y,Controlled:n,Default:c,DisabledEmpty:p,DisabledFilled:h,Empty:g,Error:m,ErrorItems:d,FormExample:l,FullWidth:N,HiddenLabel:T,HiddenLabelClassic:_,Icon:x,IconBoth:f,IconRight:b,NonControlled:o,OverflowingText:y,ReactHookForm:i,Success:u,WithBothTexts:v,WithRef:t,WithText:V,WithTextRight:S,__namedExportsOrder:Sa,default:Va},Symbol.toStringTag,{value:"Module"}));export{j as C,c as D,m as E,N as F,x as I,i as R,Ya as S,V as W,u as a,p as b,h as c,b as d,v as e,n as f,t as g};
