import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DTOEHpHZ.js";import{c as xa,e as Ta,u as Ca,F as Na,o as Ia,d as ja}from"./reactHookFormUtils-DBL7F8xI.js";import{S as r}from"./index-SquTEohO.js";import{B as s}from"./index-BIqEzyda.js";import{g as i,R as Pa}from"./stories-utils-KAE1aR-q.js";import{a as Va,M as Ea,b as wa}from"./index-C5sehico.js";import{I as y}from"./index-86jO0sQu.js";const ka={title:"Components/Forms/Select/Mono",component:r,argTypes:{variant:{control:"select",options:["floating","classic"]}}},t=l=>e.jsx("div",{style:{paddingBottom:"200px",position:"relative"},children:e.jsx(r,{...l})}),Ra=["Woodbury","Port Gayle","Geovannichester","San Rafael","Conradchester","Geraldinehaven","Bofield","East Ansel","New Carlo","West Minnieborough"],a=Ra.map(l=>({label:l,value:l.toLowerCase()})),O={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value}},f={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value,disabled:!0}},x={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value,text:"This is a text, you can display anything you want here like warnings, information or errors."}},T={render:t,args:{label:"Select a city",hideLabel:!0,options:a,defaultValue:a[4].value}},d=()=>{const[l,n]=v.useState(a[8].value);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",e.jsx("span",{children:l})]}),e.jsx(r,{label:"Select a city",options:a,value:l,onChange:o=>{n(o.target.value)}}),e.jsx(s,{onClick:()=>n(""),children:"Reset"}),e.jsxs(s,{onClick:()=>n(a[0].value),children:["Set ",a[0].label]}),e.jsxs(s,{onClick:()=>n(a[1].value),children:["Set ",a[1].label]})]})},u=()=>{const[l,n]=v.useState(a[0].value),[o,c]=v.useState(a),Oa=()=>{c([{value:"woodbury",label:"EDITTED"},...a.slice(1)])};return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",e.jsx("span",{children:l}),e.jsx(s,{onClick:Oa,children:"Edit"})]}),e.jsx(r,{label:"Select a city",options:o,value:l,multi:!1,searchable:!0,onChange:fa=>{n(fa.target.value)}}),e.jsx(s,{onClick:()=>n(""),children:"Reset"})]})},C={render:t,args:{label:"Select a city",options:[{value:"1",label:"Very long long long long long long long city name"}],defaultValue:"1"}},N={render:t,args:{label:"Select a city",options:a,searchable:!0}},I={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value,searchable:!0}},j={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value,searchable:!0,disabled:!0}},p=()=>{const[l,n]=v.useState(a[8].value);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",e.jsx("span",{children:l})]}),e.jsx(r,{label:"Select a city",options:a,searchable:!0,value:l,onChange:o=>{n(o.target.value)}}),e.jsx(s,{onClick:()=>n(""),children:"Reset"}),e.jsxs(s,{onClick:()=>n(a[0].value),children:["Set ",a[0].label]}),e.jsxs(s,{onClick:()=>n(a[1].value),children:["Set ",a[1].label]})]})},P={render:t,args:{label:"Select a city",options:a,fullWidth:!0}},V={render:t,args:{label:"Select a city",options:a,defaultValue:a[4].value,clearable:!1}},E={render:t,args:{label:"Select a city",options:a.map((l,n)=>({...l,disabled:n%3===0}))}},w={render:t,args:{label:"Select a city",options:a,state:"success",text:"Well done"}},k={render:t,args:{label:"Select a city",options:a,state:"error",text:"Something went wrong"}},R={render:t,args:{label:"No options available",options:[]}},F={render:t,args:{label:"Select a country",showLabelWhenSelected:!1,options:[i("Germany","DE"),i("France","FR"),i("United States","US"),i("Spain","ES"),i("China","CN")],defaultValue:"france"}},D={render:t,args:{label:"Select a country",showLabelWhenSelected:!1,searchable:!0,options:[i("Germany","DE"),i("France","FR"),i("United States","US"),i("Spain","ES"),i("China","CN")]}},B={render:t,args:{label:"Select a city",variant:"classic",placeholder:"Choose a city...",options:a}},W={render:t,args:{label:"Select a city",variant:"classic",placeholder:"Choose a city...",options:a,defaultValue:a[4].value}},_={render:t,args:{label:"Select a city",variant:"classic",placeholder:"Search for a city...",options:a,searchable:!0}},M={render:t,args:{label:"Select a city",variant:"classic",placeholder:"Choose a city...",options:a,disabled:!0}},L={render:t,args:{label:"Select a city",variant:"classic",placeholder:"Choose a city...",options:a,state:"error",text:"Please select a city"}},m=()=>{const l=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(s,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=l.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,ref:l})]})},b=()=>{const l=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(s,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=l.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,searchable:!0,ref:l})]})},S=()=>{const l=n=>{n.preventDefault();const o=new FormData(n.target);console.log(o.getAll("city"))};return e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your city",name:"city",options:a,defaultValue:a[2].value,text:"The city you were born in",state:"success"})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your gender",name:"gender",options:[{label:"Male"},{label:"Female"},{label:"Other"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your department",name:"department",searchable:!0,options:[{label:"Legal"},{label:"Tech"},{label:"AI"},{label:"Accounting"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your grade",text:"Any error you want",name:"grade",searchable:!0,options:[{label:"Level 1"},{label:"Level 2"},{label:"Level 3"},{label:"Emperor"}],state:"error"})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your plan",text:"This field is disabled",name:"grade",disabled:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Platinum"}],defaultValue:"Platinum"})}),e.jsx(s,{children:"Submit"})]})},h=()=>{const l=Va({isOpenDefault:!0});return e.jsx(Ea,{size:wa.MEDIUM,...l,title:"Example",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Context",options:[{label:"Ask a document"},{label:"Download files"},{label:"Ask for help"}],fullWidth:!0,clearable:!0}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(y,{label:"First name"}),e.jsx(y,{label:"Last name"})]}),e.jsx(y,{label:"Email address",fullWidth:!0,text:"Only @acme.com domain is authorized"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:"25%"},children:e.jsx(y,{label:"ZIP",fullWidth:!0})}),e.jsx(y,{label:"City",fullWidth:!0})]}),e.jsx(r,{label:"Skills",options:[{label:"Communication"},{label:"Teamwork"},{label:"Problem solving"},{label:"Leadership"},{label:"Work ethic"}],fullWidth:!0})]})})},g=()=>{let l;(c=>{c.NONE="",c.DIJON="dijon",c.PARIS="paris",c.TOKYO="tokyo"})(l||(l={}));const n=xa().shape({joTown:Ta().required().oneOf(["paris"],"That's not the right town!")}),o=Ca({defaultValues:{joTown:""},mode:"onChange",reValidateMode:"onChange",resolver:ja(n)});return e.jsx(Na,{...o,children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:o.handleSubmit(Ia),children:[e.jsx("div",{className:"clr-gray-900",children:"Where will the 2024 Olympics take place?"}),e.jsx(Pa,{name:"joTown",label:"Select a city",fullWidth:!0,options:[{label:"Dijon",value:"dijon"},{label:"Paris",value:"paris"},{label:"Tokyo",value:"tokyo"}]}),e.jsx(s,{fullWidth:!0,children:"Submit"})]})})};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};u.__docgenInfo={description:"",methods:[],displayName:"ControlledEdit"};p.__docgenInfo={description:"",methods:[],displayName:"SearchableControlled"};m.__docgenInfo={description:"",methods:[],displayName:"Ref"};b.__docgenInfo={description:"",methods:[],displayName:"SearchableRef"};S.__docgenInfo={description:"",methods:[],displayName:"FormExample"};h.__docgenInfo={description:"",methods:[],displayName:"SelectInModal"};g.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var A,U,Y;O.parameters={...O.parameters,docs:{...(A=O.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(Y=(U=O.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,G,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Z,$,Q;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(Q=($=T.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,ee,ae;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select label="Select a city" options={OPTIONS} value={value} onChange={e => {
      setValue(e.target.value as string);
    }} />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>;
}`,...(ae=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,ne,te;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(OPTIONS[0].value);
  const [options, setOptions] = useState(OPTIONS);
  const edit = () => {
    setOptions([{
      value: "woodbury",
      label: "EDITTED"
    }, ...OPTIONS.slice(1)]);
  };
  return <div>
      <div>
        Value: <span>{value}</span>
        <Button onClick={edit}>Edit</Button>
      </div>
      <Select label="Select a city" options={options} value={value} multi={false} searchable={true} onChange={e => {
      setValue(e.target.value as string);
    }} />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>;
}`,...(te=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: [{
      value: "1",
      label: "Very long long long long long long long city name"
    }],
    defaultValue: "1"
  }
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    searchable: true
  }
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true
  }
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,Se,he;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true
  }
}`,...(he=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var ge,ve,ye;p.parameters={...p.parameters,docs:{...(ge=p.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select label="Select a city" options={OPTIONS} searchable={true} value={value} onChange={e => {
      setValue(e.target.value as string);
    }} />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>;
}`,...(ye=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Oe,fe,xe;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    fullWidth: true
  }
}`,...(xe=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,Ce,Ne;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false
  }
}`,...(Ne=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var Ie,je,Pe;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(Pe=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Ve,Ee,we;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "success",
    text: "Well done"
  }
}`,...(we=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var ke,Re,Fe;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong"
  }
}`,...(Fe=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};var De,Be,We;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "No options available",
    options: []
  }
}`,...(We=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var _e,Me,Le;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")],
    defaultValue: "france"
  }
}`,...(Le=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var Ae,Ue,Ye;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(Ye=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var ze,Ge,He;B.parameters={...B.parameters,docs:{...(ze=B.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    variant: "classic",
    placeholder: "Choose a city...",
    options: OPTIONS
  }
}`,...(He=(Ge=B.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Je,Ke,qe;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    variant: "classic",
    placeholder: "Choose a city...",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(qe=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Ze,$e,Qe;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    variant: "classic",
    placeholder: "Search for a city...",
    options: OPTIONS,
    searchable: true
  }
}`,...(Qe=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Xe,ea,aa;M.parameters={...M.parameters,docs:{...(Xe=M.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    variant: "classic",
    placeholder: "Choose a city...",
    options: OPTIONS,
    disabled: true
  }
}`,...(aa=(ea=M.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var la,na,ta;L.parameters={...L.parameters,docs:{...(la=L.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    variant: "classic",
    placeholder: "Choose a city...",
    options: OPTIONS,
    state: "error",
    text: "Please select a city"
  }
}`,...(ta=(na=L.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var ra,sa,oa;m.parameters={...m.parameters,docs:{...(ra=m.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
  const ref = useRef<SelectHandle>(null);
  return <>
      <div className="pb-s">
        <Button onClick={() => setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("calling blur() ...");
        ref.current?.blur();
      }, 2000)}>
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select label="Select a city" options={OPTIONS} ref={ref} />
    </>;
}`,...(oa=(sa=m.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,ca,da;b.parameters={...b.parameters,docs:{...(ia=b.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  const ref = useRef<SelectHandle>(null);
  return <>
      <div className="pb-s">
        <Button onClick={() => setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("calling blur() ...");
        ref.current?.blur();
      }, 2000)}>
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select label="Select a city" options={OPTIONS} searchable={true} ref={ref} />
    </>;
}`,...(da=(ca=b.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;S.parameters={...S.parameters,docs:{...(ua=S.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    // eslint-disable-next-line no-console
    console.log(data.getAll("city"));
  };
  return <form onSubmit={handleSubmit}>
      <div className="mb-s">
        <Select label="Your city" name="city" options={OPTIONS} defaultValue={OPTIONS[2].value} text="The city you were born in" state="success" />
      </div>
      <div className="mb-s">
        <Select label="Your gender" name="gender" options={[{
        label: "Male"
      }, {
        label: "Female"
      }, {
        label: "Other"
      }]} />
      </div>
      <div className="mb-s">
        <Select label="Your department" name="department" searchable={true} options={[{
        label: "Legal"
      }, {
        label: "Tech"
      }, {
        label: "AI"
      }, {
        label: "Accounting"
      }]} />
      </div>
      <div className="mb-s">
        <Select label="Your grade" text="Any error you want" name="grade" searchable={true} options={[{
        label: "Level 1"
      }, {
        label: "Level 2"
      }, {
        label: "Level 3"
      }, {
        label: "Emperor"
      }]} state="error" />
      </div>
      <div className="mb-s">
        <Select label="Your plan" text="This field is disabled" name="grade" disabled={true} options={[{
        label: "Bronze"
      }, {
        label: "Silver"
      }, {
        label: "Gold"
      }, {
        label: "Platinum"
      }]} defaultValue="Platinum" />
      </div>
      <Button>Submit</Button>
    </form>;
}`,...(ma=(pa=S.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ba,Sa,ha;h.parameters={...h.parameters,docs:{...(ba=h.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  const modal = useModal({
    isOpenDefault: true
  });
  return <Modal size={ModalSize.MEDIUM} {...modal} title="Example">
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        <Select label="Context" options={[{
        label: "Ask a document"
      }, {
        label: "Download files"
      }, {
        label: "Ask for help"
      }]} fullWidth={true} clearable={true} />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <Input label="First name" />
          <Input label="Last name" />
        </div>
        <Input label="Email address" fullWidth={true} text="Only @acme.com domain is authorized" />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <div style={{
          width: "25%"
        }}>
            <Input label="ZIP" fullWidth={true} />
          </div>
          <Input label="City" fullWidth={true} />
        </div>
        <Select label="Skills" options={[{
        label: "Communication"
      }, {
        label: "Teamwork"
      }, {
        label: "Problem solving"
      }, {
        label: "Leadership"
      }, {
        label: "Work ethic"
      }]} fullWidth={true} />
      </div>
    </Modal>;
}`,...(ha=(Sa=h.parameters)==null?void 0:Sa.docs)==null?void 0:ha.source}}};var ga,va,ya;g.parameters={...g.parameters,docs:{...(ga=g.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
  }
  interface SelectExampleFormValues {
    joTown: CitiesOptionEnum;
  }
  const selectExampleSchema = Yup.object().shape({
    joTown: Yup.string().required().oneOf([CitiesOptionEnum.PARIS], "That's not the right town!")
  });
  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      joTown: CitiesOptionEnum.NONE
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(selectExampleSchema)
  });
  return <FormProvider {...methods}>
      <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "400px"
    }} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="clr-gray-900">
          Where will the 2024 Olympics take place?
        </div>
        <RhfSelect name="joTown" label="Select a city" fullWidth={true} options={[{
        label: "Dijon",
        value: CitiesOptionEnum.DIJON
      }, {
        label: "Paris",
        value: CitiesOptionEnum.PARIS
      }, {
        label: "Tokyo",
        value: CitiesOptionEnum.TOKYO
      }]} />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>;
}`,...(ya=(va=g.parameters)==null?void 0:va.docs)==null?void 0:ya.source}}};const Fa=["Uncontrolled","Disabled","WithText","HiddenLabel","Controlled","ControlledEdit","Overflow","SearchableEmpty","SearchableUncontrolled","SearchableDisabled","SearchableControlled","FullWidth","NotClearable","DisabledOptions","Success","Error","NoOptions","CustomRender","SearchableCustomRender","ClassicVariant","ClassicVariantFilled","ClassicVariantSearchable","ClassicVariantDisabled","ClassicVariantError","Ref","SearchableRef","FormExample","SelectInModal","ReactHookForm"],Ya=Object.freeze(Object.defineProperty({__proto__:null,ClassicVariant:B,ClassicVariantDisabled:M,ClassicVariantError:L,ClassicVariantFilled:W,ClassicVariantSearchable:_,Controlled:d,ControlledEdit:u,CustomRender:F,Disabled:f,DisabledOptions:E,Error:k,FormExample:S,FullWidth:P,HiddenLabel:T,NoOptions:R,NotClearable:V,Overflow:C,ReactHookForm:g,Ref:m,SearchableControlled:p,SearchableCustomRender:D,SearchableDisabled:j,SearchableEmpty:N,SearchableRef:b,SearchableUncontrolled:I,SelectInModal:h,Success:w,Uncontrolled:O,WithText:x,__namedExportsOrder:Fa,default:ka},Symbol.toStringTag,{value:"Module"}));export{F as C,f as D,k as E,P as F,T as H,V as N,g as R,Ya as S,O as U,x as W,I as a,w as b,E as c,d,S as e};
