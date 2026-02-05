import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DTOEHpHZ.js";import{c as ya,f as xa,u as Na,F as Ta,o as Ca,d as Ia}from"./reactHookFormUtils-DBL7F8xI.js";import{S as r}from"./index-SquTEohO.js";import{B as g}from"./index-BIqEzyda.js";import{g as s,R as Pa}from"./stories-utils-KAE1aR-q.js";import{a as Va,M as ja,b as Ea}from"./index-C5sehico.js";import{I as h}from"./index-86jO0sQu.js";const Fa={title:"Components/Forms/Select/Multi",component:r,argTypes:{variant:{control:"select",options:["floating","classic"]}}},t=l=>e.jsx("div",{style:{paddingBottom:"200px"},children:e.jsx(r,{...l,multi:!0})}),ka=["Woodbury","Port Gayle","Geovannichester","San Rafael","Conradchester","Geraldinehaven","Bofield","East Ansel","New Carlo","West Minnieborough"],a=ka.map(l=>({label:l,value:l.toLowerCase()})),v={render:t,args:{label:"Select cities",options:a,defaultValue:[a[4].value]}},f={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,disabled:!0}},O={render:t,args:{label:"Select cities",options:a,defaultValue:[a[4].value,a[2].value,a[1].value],monoline:!0,clearable:!0}},y={render:t,args:{label:"Select cities",variant:"classic",placeholder:"Choose cities...",options:a}},x={render:t,args:{label:"Select cities",variant:"classic",placeholder:"Choose cities...",options:a,defaultValue:[a[4].value,a[2].value]}},N={render:t,args:{label:"Select cities",variant:"classic",placeholder:"Search for cities...",options:a,searchable:!0}},T={render:t,args:{label:"Select cities",variant:"classic",placeholder:"Choose cities...",options:a,disabled:!0}},C={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,text:"This is a text, you can display anything you want here like warnings, information or errors."}},I={render:t,args:{label:"Select cities",hideLabel:!0,options:a,defaultValue:a[4].value}},c=()=>{const[l,n]=_.useState([a[6].value,a[8].value]);return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-gray-900",children:["Value: ",e.jsx("span",{children:JSON.stringify(l)})]}),e.jsx(r,{label:"Select cities",multi:!0,options:a,value:l,onChange:o=>n(o.target.value)}),e.jsx(g,{onClick:()=>n([]),children:"Reset"})]})},P={render:t,args:{label:"Select cities",options:[{value:"1",label:"Very long long long long long long long city name"}],defaultValue:"1"}},V={render:t,args:{label:"Select cities",options:a,searchable:!0}},j={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0}},E={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0,disabled:!0}},u=()=>{const[l,n]=_.useState([a[6].value,a[8].value]);return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-gray-900",children:["Value: ",e.jsx("span",{children:JSON.stringify(l)})]}),e.jsx(r,{label:"Select cities",options:a,searchable:!0,multi:!0,value:l,onChange:o=>n(o.target.value)}),e.jsx(g,{onClick:()=>n([]),children:"Reset"})]})},F={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0,fullWidth:!0}},k={render:t,args:{label:"Select cities",options:a,defaultValue:a[4].value,clearable:!1}},R={render:t,args:{label:"Select cities",options:a.map((l,n)=>({...l,disabled:n%3===0}))}},W={render:t,args:{searchable:!0,label:"Select cities",options:a.map((l,n)=>({...l,disabled:n%3===0}))}},D={render:t,args:{label:"Select cities",options:a,state:"success",text:"Well done"}},w={render:t,args:{label:"Select cities",options:a,state:"error",text:"Something went wrong"}},B={render:t,args:{label:"No options available",options:[]}},M={render:t,args:{label:"Select a country",showLabelWhenSelected:!1,options:[s("Germany","DE"),s("France","FR"),s("United States","US"),s("Spain","ES"),s("China","CN")]}},A={render:t,args:{label:"Select a country",showLabelWhenSelected:!1,searchable:!0,defaultValue:["france","united states"],options:[s("Germany","DE"),s("France","FR"),s("United States","US"),s("Spain","ES"),s("China","CN")]}},d=()=>{const l=_.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(g,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=l.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,multi:!0,ref:l})]})},m=()=>{const l=_.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(g,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=l.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,multi:!0,searchable:!0,ref:l})]})},p=()=>{const l=n=>{n.preventDefault();const o=new FormData(n.target);console.log(o.getAll("cities")),console.log(o.getAll("test"))};return e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your favorite cities",name:"cities",options:a,text:"The cities you love the most",state:"success",defaultValue:[a[4].value],multi:!0})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your departments",name:"departments",searchable:!0,multi:!0,options:[{label:"Legal"},{label:"Tech"},{label:"AI"},{label:"Accounting"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your skills",text:"Any error you want",name:"skills",multi:!0,options:[{label:"Front-end"},{label:"Back-end"},{label:"Full-stack"}],state:"error"})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your options",text:"This field is disabled",name:"grade",disabled:!0,multi:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Platinum"}],defaultValue:["Platinum","Gold"]})}),e.jsx(g,{children:"Submit"})]})},b=()=>{const l=Va({isOpenDefault:!0});return e.jsx(ja,{size:Ea.MEDIUM,...l,title:"Example",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Context",options:[{label:"Ask a document"},{label:"Download files"},{label:"Ask for help"}],multi:!0,fullWidth:!0,clearable:!0}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(h,{label:"First name"}),e.jsx(h,{label:"Last name"})]}),e.jsx(h,{label:"Email address",fullWidth:!0,text:"Only @acme.com domain is authorized"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:"25%"},children:e.jsx(h,{label:"ZIP",fullWidth:!0})}),e.jsx(h,{label:"City",fullWidth:!0})]}),e.jsx(r,{label:"Skills",options:[{label:"Communication"},{label:"Teamwork"},{label:"Problem solving"},{label:"Leadership"},{label:"Work ethic"}],multi:!0,fullWidth:!0})]})})},S=()=>{let l;(i=>{i.NONE="",i.DIJON="dijon",i.PARIS="paris",i.TOKYO="tokyo",i.VANNES="vannes"})(l||(l={}));const n=ya().shape({capitalCity:xa().required().test({test:i=>i.every(Oa=>["paris","tokyo"].includes(Oa)),message:"Wrong answer!"})}),o=Na({defaultValues:{capitalCity:[]},mode:"onChange",reValidateMode:"onChange",resolver:Ia(n)});return e.jsx(Ta,{...o,children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:o.handleSubmit(Ca),children:[e.jsx("div",{className:"clr-gray-900",children:"Which cities are capital of countries ?"}),e.jsx(Pa,{name:"capitalCity",label:"Select a city",multi:!0,fullWidth:!0,options:[{label:"Dijon",value:"dijon"},{label:"Paris",value:"paris"},{label:"Tokyo",value:"tokyo"},{label:"Vannes",value:"vannes"}]}),e.jsx(g,{fullWidth:!0,children:"Submit"})]})})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};u.__docgenInfo={description:"",methods:[],displayName:"SearchableControlled"};d.__docgenInfo={description:"",methods:[],displayName:"Ref"};m.__docgenInfo={description:"",methods:[],displayName:"SearchableRef"};p.__docgenInfo={description:"",methods:[],displayName:"FormExample"};b.__docgenInfo={description:"",methods:[],displayName:"SelectInModal"};S.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var L,U,Y;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value]
  }
}`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,z,H;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true
  }
}`,...(H=(z=f.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,K,q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value, OPTIONS[2].value, OPTIONS[1].value],
    monoline: true,
    clearable: true
  }
}`,...(q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Z,$,Q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    variant: "classic",
    placeholder: "Choose cities...",
    options: OPTIONS
  }
}`,...(Q=($=y.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,ee,ae;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    variant: "classic",
    placeholder: "Choose cities...",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value, OPTIONS[2].value]
  }
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,te,ne;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    variant: "classic",
    placeholder: "Search for cities...",
    options: OPTIONS,
    searchable: true
  }
}`,...(ne=(te=N.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,oe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    variant: "classic",
    placeholder: "Choose cities...",
    options: OPTIONS,
    disabled: true
  }
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,Se,ge;c.parameters={...c.parameters,docs:{...(be=c.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return <div>
      <div className="clr-gray-900">
        Value: <span>{JSON.stringify(value)}</span>
      </div>
      <Select label="Select cities" multi={true} options={OPTIONS} value={value} onChange={e => setValue(e.target.value as string[])} />
      <Button onClick={() => setValue([])}>Reset</Button>
    </div>;
}`,...(ge=(Se=c.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var he,ve,fe;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: [{
      value: "1",
      label: "Very long long long long long long long city name"
    }],
    defaultValue: "1"
  }
}`,...(fe=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Oe,ye,xe;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    searchable: true
  }
}`,...(xe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ne,Te,Ce;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true
  }
}`,...(Ce=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Ie,Pe,Ve;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true
  }
}`,...(Ve=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var je,Ee,Fe;u.parameters={...u.parameters,docs:{...(je=u.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return <div>
      <div className="clr-gray-900">
        Value: <span>{JSON.stringify(value)}</span>
      </div>
      <Select label="Select cities" options={OPTIONS} searchable={true} multi={true} value={value} onChange={e => setValue(e.target.value as string[])} />
      <Button onClick={() => setValue([])}>Reset</Button>
    </div>;
}`,...(Fe=(Ee=u.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var ke,Re,We;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    fullWidth: true
  }
}`,...(We=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var De,we,Be;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false
  }
}`,...(Be=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var Me,Ae,_e;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(_e=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Le,Ue,Ye;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: Template,
  args: {
    searchable: true,
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(Ye=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ge,ze,He;D.parameters={...D.parameters,docs:{...(Ge=D.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "success",
    text: "Well done"
  }
}`,...(He=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var Je,Ke,qe;w.parameters={...w.parameters,docs:{...(Je=w.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong"
  }
}`,...(qe=(Ke=w.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Ze,$e,Qe;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "No options available",
    options: []
  }
}`,...(Qe=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Xe,ea,aa;M.parameters={...M.parameters,docs:{...(Xe=M.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(aa=(ea=M.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var la,ta,na;A.parameters={...A.parameters,docs:{...(la=A.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
    defaultValue: ["france", "united states"],
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(na=(ta=A.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var ra,sa,oa;d.parameters={...d.parameters,docs:{...(ra=d.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
      <Select label="Select a city" options={OPTIONS} multi={true} ref={ref} />
    </>;
}`,...(oa=(sa=d.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,ca,ua;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
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
      <Select label="Select a city" options={OPTIONS} multi={true} searchable={true} ref={ref} />
    </>;
}`,...(ua=(ca=m.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var da,ma,pa;p.parameters={...p.parameters,docs:{...(da=p.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as any);
    // eslint-disable-next-line no-console
    console.log(data.getAll("cities"));
    // eslint-disable-next-line no-console
    console.log(data.getAll("test"));
  };
  return <form onSubmit={handleSubmit}>
      <div className="mb-s">
        <Select label="Your favorite cities" name="cities" options={OPTIONS} text="The cities you love the most" state="success" defaultValue={[OPTIONS[4].value]} multi={true} />
      </div>
      <div className="mb-s">
        <Select label="Your departments" name="departments" searchable={true} multi={true} options={[{
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
        <Select label="Your skills" text="Any error you want" name="skills" multi={true} options={[{
        label: "Front-end"
      }, {
        label: "Back-end"
      }, {
        label: "Full-stack"
      }]} state="error" />
      </div>
      <div className="mb-s">
        <Select label="Your options" text="This field is disabled" name="grade" disabled={true} multi={true} options={[{
        label: "Bronze"
      }, {
        label: "Silver"
      }, {
        label: "Gold"
      }, {
        label: "Platinum"
      }]} defaultValue={["Platinum", "Gold"]} />
      </div>

      <Button>Submit</Button>
    </form>;
}`,...(pa=(ma=p.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ba,Sa,ga;b.parameters={...b.parameters,docs:{...(ba=b.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
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
      }]} multi={true} fullWidth={true} clearable={true} />
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
      }]} multi={true} fullWidth={true} />
      </div>
    </Modal>;
}`,...(ga=(Sa=b.parameters)==null?void 0:Sa.docs)==null?void 0:ga.source}}};var ha,va,fa;S.parameters={...S.parameters,docs:{...(ha=S.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
    VANNES = "vannes",
  }
  interface SelectExampleFormValues {
    capitalCity: CitiesOptionEnum[];
  }
  const selectExampleSchema = Yup.object().shape({
    capitalCity: Yup.array().required().test({
      test: cityList => cityList.every(city => [CitiesOptionEnum.PARIS, CitiesOptionEnum.TOKYO].includes(city)),
      message: "Wrong answer!"
    })
  });
  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      capitalCity: []
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
          Which cities are capital of countries ?
        </div>
        <RhfSelect name="capitalCity" label="Select a city" multi={true} fullWidth={true} options={[{
        label: "Dijon",
        value: CitiesOptionEnum.DIJON
      }, {
        label: "Paris",
        value: CitiesOptionEnum.PARIS
      }, {
        label: "Tokyo",
        value: CitiesOptionEnum.TOKYO
      }, {
        label: "Vannes",
        value: CitiesOptionEnum.VANNES
      }]} />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>;
}`,...(fa=(va=S.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};const Ra=["Uncontrolled","Disabled","Monoline","ClassicVariant","ClassicVariantFilled","ClassicVariantSearchable","ClassicVariantDisabled","WithText","HiddenLabel","Controlled","Overflow","SearchableEmpty","SearchableUncontrolled","SearchableDisabled","SearchableControlled","FullWidth","NotClearable","DisabledOptions","SearchableDisabledOptions","Success","Error","NoOptions","CustomRender","SearchableCustomRender","Ref","SearchableRef","FormExample","SelectInModal","ReactHookForm"],Ua=Object.freeze(Object.defineProperty({__proto__:null,ClassicVariant:y,ClassicVariantDisabled:T,ClassicVariantFilled:x,ClassicVariantSearchable:N,Controlled:c,CustomRender:M,Disabled:f,DisabledOptions:R,Error:w,FormExample:p,FullWidth:F,HiddenLabel:I,Monoline:O,NoOptions:B,NotClearable:k,Overflow:P,ReactHookForm:S,Ref:d,SearchableControlled:u,SearchableCustomRender:A,SearchableDisabled:E,SearchableDisabledOptions:W,SearchableEmpty:V,SearchableRef:m,SearchableUncontrolled:j,SelectInModal:b,Success:D,Uncontrolled:v,WithText:C,__namedExportsOrder:Ra,default:Fa},Symbol.toStringTag,{value:"Module"}));export{c as C,f as D,w as E,F,I as H,O as M,k as N,S as R,Ua as S,C as W,j as a,D as b,R as c,A as d};
