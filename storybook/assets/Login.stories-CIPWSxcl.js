import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{u as d,F as c,g as o,b as s,o as u,d as p,c as h,a as f,e as a}from"./reactHookFormUtils-DBL7F8xI.js";import{R as m}from"./stories-utils-BLCstzDf.js";import{C as g}from"./index-8as2JP8Z.js";import{B as x}from"./index-BIqEzyda.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-86jO0sQu.js";import"./index-rkLeB0kx.js";import"./index-CAEZVxT0.js";import"./index-BaD3Jhh-.js";import"./index-BADBcByr.js";import"./index-ClZIdn5H.js";const P={title:"Components/Forms/Examples/React-Hook-Form"},b=h().shape({email:a().email().required(),password:a().min(8).required(),rememberMe:f().required().oneOf([!0])}),r=()=>{const e=d({defaultValues:{email:"",password:"",rememberMe:!1},mode:"onChange",reValidateMode:"onChange",resolver:p(b)});return t.jsx(c,{...e,children:t.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},onSubmit:e.handleSubmit(u),children:[t.jsx("h1",{className:"fs-h3 fw-bold clr-gray-900",style:{textAlign:"center"},children:"Log in"}),t.jsx(m,{label:"Email",fullWidth:!0,state:s("email",e.formState),text:o("email",e.formState),...e.register("email")}),t.jsx(m,{label:"Password",state:s("password",e.formState),type:"password",text:o("password",e.formState)||"Forgot your password?",fullWidth:!0,...e.register("password")}),t.jsx("div",{children:t.jsx(g,{label:"Remember me",state:s("rememberMe",e.formState),text:o("rememberMe",e.formState),...e.register("rememberMe")})}),t.jsx(x,{fullWidth:!0,children:"Log in"}),t.jsxs("div",{className:"fs-m clr-content-semantic-neutral-primary",style:{textAlign:"center"},children:["You do not have an account?"," ",t.jsx("a",{href:"/#",className:"clr-content-semantic-neutral-primary",children:"Register"})]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Login"};var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const methods = useForm<LoginStoryFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema)
  });
  return <FormProvider {...methods}>
      <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    }} onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="fs-h3 fw-bold clr-gray-900" style={{
        textAlign: "center"
      }}>
          Log in
        </h1>
        <RhfInput label="Email" fullWidth={true} state={getFieldState("email", methods.formState)} text={getFieldErrorMessage("email", methods.formState)} {...methods.register("email")} />
        <RhfInput label="Password" state={getFieldState("password", methods.formState)} type="password" text={getFieldErrorMessage("password", methods.formState) || "Forgot your password?"} fullWidth={true} {...methods.register("password")} />
        <div>
          <Checkbox label="Remember me" state={getFieldState("rememberMe", methods.formState)} text={getFieldErrorMessage("rememberMe", methods.formState)} {...methods.register("rememberMe")} />
        </div>
        <Button fullWidth={true}>Log in</Button>
        <div className="fs-m clr-content-semantic-neutral-primary" style={{
        textAlign: "center"
      }}>
          You do not have an account?{" "}
          <a href="/#" className="clr-content-semantic-neutral-primary">
            Register
          </a>
        </div>
      </form>
    </FormProvider>;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const V=["Login"];export{r as Login,V as __namedExportsOrder,P as default};
