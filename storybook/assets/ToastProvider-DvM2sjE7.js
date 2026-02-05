import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as m,r}from"./index-DTOEHpHZ.js";import{c as H}from"./index-rkLeB0kx.js";import{B as q}from"./index-BIqEzyda.js";import{t as M}from"./cunningham-tokens-DY4oQvhI.js";function h(e){const n=typeof window<"u"&&window;return!!(n&&(/Chromatic/.test(n.navigator.userAgent)||/chromatic=true/.test(n.location.href)))}var T=(e=>(e.INFO="info",e.SUCCESS="success",e.WARNING="warning",e.ERROR="error",e.NEUTRAL="neutral",e))(T||{});const N=e=>{switch(e){case"info":return"info";case"success":return"check_circle";case"warning":return"error_outline";case"error":return"cancel";default:return""}},b=e=>{const[n,a]=m.useState(!1),l=r.useRef(null),o=r.useRef(null);r.useEffect(()=>{if(!e.disableAnimate)return o.current=setTimeout(async()=>{a(!0),o.current=null},e.duration),()=>{o.current&&clearTimeout(o.current)}},[]);const d=async()=>{var u;await Promise.allSettled(l.current.getAnimations().map(f=>f.finished)),(u=e.onDelete)==null||u.call(e)};return r.useEffect(()=>{n&&d()},[n]),t.jsxs("div",{ref:l,className:H("c__toast","c__toast--"+e.type,{"c__toast--disappear":n,"c__toast--no-animate":e.disableAnimate}),role:"alert",children:[t.jsx(A,{duration:e.duration}),t.jsxs("div",{className:"c__toast__content",children:[e.primaryLabel&&t.jsx("div",{className:"c__toast__content__buttons",children:t.jsx(q,{variant:"primary",onClick:e.primaryOnClick,...e.primaryProps,children:e.primaryLabel})}),e.actions,t.jsx("div",{className:"c__toast__content__children",children:e.children}),t.jsx(w,{...e})]})]})},w=({type:e,...n})=>{const a=r.useMemo(()=>N(e),[e]);return n.icon?n.icon:a?t.jsx("div",{className:"c__toast__icon",children:t.jsx("span",{className:"material-icons",children:a})}):null},A=({duration:e})=>{const n=r.useRef(null);return r.useEffect(()=>{h()||n.current.animate([{width:"0%"},{width:"100%"}],{duration:e,easing:"linear"})},[]),t.jsx("div",{className:"c__progress-bar",children:t.jsx("div",{className:"c__progress-bar__content",ref:n})})};b.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{duration:{required:!0,tsType:{name:"number"},description:""},type:{required:!0,tsType:{name:"VariantType"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
RefAttributes<ButtonElement> & {
  size?: "medium" | "small" | "nano";
  color?:
    | "brand"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "success";
  variant?: "primary" | "secondary" | "tertiary" | "bordered";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"RefAttributes",elements:[{name:"intersection",raw:"HTMLButtonElement & HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}],raw:"RefAttributes<ButtonElement>"},{name:"signature",type:"object",raw:`{
  size?: "medium" | "small" | "nano";
  color?:
    | "brand"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "success";
  variant?: "primary" | "secondary" | "tertiary" | "bordered";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"union",raw:'"medium" | "small" | "nano"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"nano"'}],required:!1}},{key:"color",value:{name:"union",raw:`| "brand"
| "neutral"
| "info"
| "success"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}],required:!1}},{key:"variant",value:{name:"union",raw:'"primary" | "secondary" | "tertiary" | "bordered"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"bordered"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},disableAnimate:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};w.__docgenInfo={description:"",methods:[],displayName:"ToastIcon",props:{duration:{required:!0,tsType:{name:"number"},description:""},type:{required:!0,tsType:{name:"VariantType"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},primaryLabel:{required:!1,tsType:{name:"string"},description:""},primaryOnClick:{required:!1,tsType:{name:'intersection["onClick"]',raw:'ButtonProps["onClick"]'},description:""},primaryProps:{required:!1,tsType:{name:"intersection",raw:`Omit<DomProps, "color"> &
RefAttributes<ButtonElement> & {
  size?: "medium" | "small" | "nano";
  color?:
    | "brand"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "success";
  variant?: "primary" | "secondary" | "tertiary" | "bordered";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>`,elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>"}]},{name:"literal",value:'"color"'}],raw:'Omit<DomProps, "color">'},{name:"RefAttributes",elements:[{name:"intersection",raw:"HTMLButtonElement & HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}],raw:"RefAttributes<ButtonElement>"},{name:"signature",type:"object",raw:`{
  size?: "medium" | "small" | "nano";
  color?:
    | "brand"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "success";
  variant?: "primary" | "secondary" | "tertiary" | "bordered";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  active?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"union",raw:'"medium" | "small" | "nano"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'},{name:"literal",value:'"nano"'}],required:!1}},{key:"color",value:{name:"union",raw:`| "brand"
| "neutral"
| "info"
| "success"
| "warning"
| "error"
| "success"`,elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}],required:!1}},{key:"variant",value:{name:"union",raw:'"primary" | "secondary" | "tertiary" | "bordered"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"bordered"'}],required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"iconPosition",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},description:""},disableAnimate:{required:!1,tsType:{name:"boolean"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren"]};A.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{duration:{required:!0,tsType:{name:"number"},description:""}}};class R{push(n){const a=async()=>(this.lastJob&&await this.lastJob,n());return this.lastJob=a(),this.lastJob}}const _=m.createContext(void 0),O=()=>{const e=r.useContext(_);if(e===void 0)throw new Error("useToastProvider must be used within a ToastProvider.");return e};let v=1;const P=6e3,y=()=>parseInt(M.themes.default.components.toast["slide-in-duration"].replace("ms",""),10),k=({children:e})=>{const n=r.useRef(null),a=r.useRef(0),[l,o]=m.useState([]),d=r.useRef(new R),u=r.useMemo(()=>({toast:(i,c=T.NEUTRAL,s={})=>{var p;(p=d.current)==null||p.push(()=>new Promise(g=>{const L=v;v+=1,a.current=n.current.offsetHeight,o(E=>[...E,{...s,message:i,i:L,type:c,duration:(s==null?void 0:s.duration)??P}]),setTimeout(()=>{g()},y())}))}}),[n,a,l]),f=async()=>{if(!n.current)return;const i=a.current,s=n.current.offsetHeight-i;typeof n.current.animate=="function"&&!h()&&n.current.animate([{transform:`translateY(${s}px)`},{transform:"translateY(0)"}],{duration:y(),easing:"ease"})};return m.useEffect(()=>{f()},[v]),t.jsxs(_.Provider,{value:u,children:[e,t.jsx("div",{className:"c__toast__container",ref:n,children:l.map(i=>t.jsx(b,{onDelete:()=>{o(c=>c.filter(s=>s.i!==i.i))},...i,children:i.message},i.i))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ToastProvider"};export{A as P,b as T,T as V,k as a,N as i,O as u};
