import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as u,e as x}from"./index-DTOEHpHZ.js";import{$ as ae,a as ne,b as I,c as ie,d as w,e as se,f as ce,g as ue,h as de,i as oe,j as fe,k as pe,l as me,m as be}from"./focusSafely-BO-rTwXV.js";import{c as $e}from"./index-rkLeB0kx.js";import{$ as ve}from"./useOverlayPosition-CofLYEYW.js";import{B as j}from"./index-BIqEzyda.js";function ge(...r){return r.length===1&&r[0]?r[0]:e=>{for(let t of r)typeof t=="function"?t(e):t!=null&&(t.current=e)}}function ye(r){const e=u.useRef(null);return u.useMemo(()=>({get current(){return e.current},set current(t){e.current=t,typeof r=="function"?r(t):r&&(r.current=t)}}),[r])}function he(r){let{isDisabled:e,onFocus:t,onBlur:o,onFocusChange:a}=r;const l=u.useCallback(s=>{if(s.target===s.currentTarget)return o&&o(s),a&&a(!1),!0},[o,a]),i=ae(l),n=u.useCallback(s=>{const d=ne(s.target),f=d?I(d):I();s.target===s.currentTarget&&f===ie(s.nativeEvent)&&(t&&t(s),a&&a(!0),i(s))},[a,t,i]);return{focusProps:{onFocus:!e&&(t||a||o)?n:void 0,onBlur:!e&&(o||a)?l:void 0}}}function k(r){if(!r)return;let e=!0;return t=>{let o={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){e=!0},continuePropagation(){e=!1},isPropagationStopped(){return e}};r(o),e&&t.stopPropagation()}}function xe(r){return{keyboardProps:r.isDisabled?{}:{onKeyDown:k(r.onKeyDown),onKeyUp:k(r.onKeyUp)}}}let Te=x.createContext(null);function Pe(r){let e=u.useContext(Te)||{};ce(e,r);let{ref:t,...o}=e;return o}function Ee(r,e){let{focusProps:t}=he(r),{keyboardProps:o}=xe(r),a=w(t,o),l=Pe(e),i=r.isDisabled?{}:l,n=u.useRef(r.autoFocus);u.useEffect(()=>{n.current&&e.current&&se(e.current),n.current=!1},[e]);let s=r.excludeFromTabOrder?-1:0;return r.isDisabled&&(s=void 0),{focusableProps:w({...a,tabIndex:s},i)}}let L=!1,B=0;function je(){L=!0,setTimeout(()=>{L=!1},50)}function F(r){r.pointerType==="touch"&&je()}function He(){if(!(typeof document>"u"))return typeof PointerEvent<"u"&&document.addEventListener("pointerup",F),B++,()=>{B--,!(B>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",F)}}function le(r){let{onHoverStart:e,onHoverChange:t,onHoverEnd:o,isDisabled:a}=r,[l,i]=u.useState(!1),n=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(He,[]);let{addGlobalListener:s,removeAllGlobalListeners:d}=ue(),{hoverProps:f,triggerHoverEnd:b}=u.useMemo(()=>{let g=(p,y)=>{if(n.pointerType=y,a||y==="touch"||n.isHovered||!p.currentTarget.contains(p.target))return;n.isHovered=!0;let $=p.currentTarget;n.target=$,s(ne(p.target),"pointerover",E=>{n.isHovered&&n.target&&!de(n.target,E.target)&&v(E,E.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:$,pointerType:y}),t&&t(!0),i(!0)},v=(p,y)=>{let $=n.target;n.pointerType="",n.target=null,!(y==="touch"||!n.isHovered||!$)&&(n.isHovered=!1,d(),o&&o({type:"hoverend",target:$,pointerType:y}),t&&t(!1),i(!1))},m={};return typeof PointerEvent<"u"&&(m.onPointerEnter=p=>{L&&p.pointerType==="mouse"||g(p,p.pointerType)},m.onPointerLeave=p=>{!a&&p.currentTarget.contains(p.target)&&v(p,p.pointerType)}),{hoverProps:m,triggerHoverEnd:v}},[e,t,o,a,n,s,d]);return u.useEffect(()=>{a&&b({currentTarget:n.target},n.pointerType)},[a]),{hoverProps:f,isHovered:l}}function we(r,e){let t=oe(r,{labelable:!0}),{hoverProps:o}=le({onHoverStart:()=>e==null?void 0:e.open(!0),onHoverEnd:()=>e==null?void 0:e.close()});return{tooltipProps:w(t,o,{role:"tooltip"})}}function Se(r,e,t){let{isDisabled:o,trigger:a}=r,l=fe(),i=u.useRef(!1),n=u.useRef(!1),s=()=>{(i.current||n.current)&&e.open(n.current)},d=$=>{!i.current&&!n.current&&e.close($)};u.useEffect(()=>{let $=E=>{t&&t.current&&E.key==="Escape"&&(E.stopPropagation(),e.close(!0))};if(e.isOpen)return document.addEventListener("keydown",$,!0),()=>{document.removeEventListener("keydown",$,!0)}},[t,e]);let f=()=>{a!=="focus"&&(pe()==="pointer"?i.current=!0:i.current=!1,s())},b=()=>{a!=="focus"&&(n.current=!1,i.current=!1,d())},g=()=>{n.current=!1,i.current=!1,d(!0)},v=()=>{me()&&(n.current=!0,s())},m=()=>{n.current=!1,i.current=!1,d(!0)},{hoverProps:p}=le({isDisabled:o,onHoverStart:f,onHoverEnd:b}),{focusableProps:y}=Ee({isDisabled:o,onFocus:v,onBlur:m},t);return{triggerProps:{"aria-describedby":e.isOpen?l:void 0,...w(y,p,{onPointerDown:g,onKeyDown:g,tabIndex:void 0})},tooltipProps:{id:l}}}const Ce=Symbol("default");function Oe(r){let{className:e,style:t,children:o,defaultClassName:a,defaultChildren:l,defaultStyle:i,values:n}=r;return u.useMemo(()=>{let s,d,f;return typeof e=="function"?s=e({...n,defaultClassName:a}):s=e,typeof t=="function"?d=t({...n,defaultStyle:i||{}}):d=t,typeof o=="function"?f=o({...n,defaultChildren:l}):o==null?f=l:f=o,{className:s??a,style:d||i?{...i,...d}:void 0,children:f??l,"data-rac":""}},[e,t,o,a,l,i,n])}function De(r,e){let t=u.useContext(r);if(e===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let o=e||Ce;if(!t.slots[o]){let a=new Intl.ListFormat().format(Object.keys(t.slots).map(i=>`"${i}"`)),l=e?`Invalid slot "${e}".`:"A slot prop is required.";throw new Error(`${l} Valid slot names are ${a}.`)}return t.slots[o]}return t}function _e(r,e,t){let o=De(t,r.slot)||{},{ref:a,...l}=o,i=ye(u.useMemo(()=>ge(e,a),[e,a])),n=w(l,r);return"style"in l&&l.style&&"style"in r&&r.style&&(typeof l.style=="function"||typeof r.style=="function"?n.style=s=>{let d=typeof l.style=="function"?l.style(s):l.style,f={...s.defaultStyle,...d},b=typeof r.style=="function"?r.style({...s,defaultStyle:f}):r.style;return{...f,...b}}:n.style={...l.style,...r.style}),[n,i]}const Ne=1500,M=500;let T={},Be=0,S=!1,h=null,P=null;function Le(r={}){let{delay:e=Ne,closeDelay:t=M}=r,{isOpen:o,open:a,close:l}=be(r),i=u.useMemo(()=>`${++Be}`,[]),n=u.useRef(null),s=u.useRef(l),d=()=>{T[i]=g},f=()=>{for(let m in T)m!==i&&(T[m](!0),delete T[m])},b=()=>{n.current&&clearTimeout(n.current),n.current=null,f(),d(),S=!0,a(),h&&(clearTimeout(h),h=null),P&&(clearTimeout(P),P=null)},g=m=>{m||t<=0?(n.current&&clearTimeout(n.current),n.current=null,s.current()):n.current||(n.current=setTimeout(()=>{n.current=null,s.current()},t)),h&&(clearTimeout(h),h=null),S&&(P&&clearTimeout(P),P=setTimeout(()=>{delete T[i],P=null,S=!1},Math.max(M,t)))},v=()=>{f(),d(),!o&&!h&&!S?h=setTimeout(()=>{h=null,S=!0,b()},e):o||b()};return u.useEffect(()=>{s.current=l},[l]),u.useEffect(()=>()=>{n.current&&clearTimeout(n.current),T[i]&&delete T[i]},[i]),{isOpen:o,open:m=>{!m&&e>0&&!n.current?v():b()},close:g}}const Re=u.createContext({placement:"bottom"}),Ie=u.forwardRef(function(e,t){[e,t]=_e(e,t,Re);let o=e.placement,a={position:"absolute",transform:o==="top"||o==="bottom"?"translateX(-50%)":"translateY(-50%)"};o!=null&&(a[o]="100%");let l=Oe({...e,defaultClassName:"react-aria-OverlayArrow",values:{placement:o}});l.style&&Object.keys(l.style).forEach(n=>l.style[n]===void 0&&delete l.style[n]);let i=oe(e);return x.createElement("div",{...i,...l,style:{...a,...l.style},ref:t,"data-placement":o})}),z=200,H=({placement:r="bottom",content:e,closeDelay:t=150,className:o,...a})=>{const l=x.useRef(null),i=x.useRef(null),[n,s]=x.useState(!1),[d,f]=x.useState(!1),b=Le({delay:0,closeDelay:t,onOpenChange:$=>{$?(f(!0),setTimeout(()=>{f(!1)},z)):(s(!0),setTimeout(()=>{s(!1)},z))}}),g=Se({},b,l),v=ve({targetRef:l,overlayRef:i,placement:r,isOpen:b.isOpen}),{tooltipProps:m}=we(g.tooltipProps,b),p={placement:v.placement},y=b.isOpen||n;return c.jsxs(c.Fragment,{children:[x.cloneElement(x.Children.toArray(a.children)[0],{ref:l,...g.triggerProps}),y&&c.jsxs("span",{className:$e("c__tooltip",{"c__tooltip--exiting":n,"c__tooltip--entering":d},o),"data-placement":v.placement,ref:i,style:{...v.overlayProps.style},...w(a,m),children:[c.jsx(Ie,{...p,children:c.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",children:c.jsx("path",{d:"M0 0 L8 8 L16 0"})})}),c.jsx("span",{className:"c__tooltip__content",children:e})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}},content:{required:!0,tsType:{name:"ReactNode"},description:""},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const ke={title:"Components/Tooltip",component:H,decorators:[r=>c.jsx("div",{style:{padding:"8rem",position:"relative"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4rem"},children:[c.jsx(r,{}),c.jsx("div",{children:"⬅️ Hover it"})]})})]},C={args:{children:c.jsx(j,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),variant:"tertiary",color:"neutral"}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},O={render:()=>c.jsxs("div",{children:[c.jsx(H,{placement:"left",content:"Hi there",children:c.jsx(j,{size:"nano",variant:"tertiary",color:"neutral",children:"⬅️"})}),c.jsx(H,{placement:"bottom",content:"Hi there",children:c.jsx(j,{size:"nano",variant:"tertiary",color:"neutral",children:"⬇️"})}),c.jsx(H,{placement:"top",content:"Hi there",children:c.jsx(j,{size:"nano",variant:"tertiary",color:"neutral",children:"⬆️"})}),c.jsx(H,{placement:"right",content:"Hi there",children:c.jsx(j,{size:"nano",variant:"tertiary",color:"neutral",children:"➡️"})})]})},R="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.",D={args:{children:c.jsx("p",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R}),content:R}},_={args:{content:R,placement:"bottom",children:c.jsx("div",{style:{display:"inline-flex"},children:c.jsxs("div",{style:{borderRadius:"8px",backgroundColor:"var(--c--theme--colors--greyscale-300)",padding:"1rem",display:"flex",gap:"1rem"},children:[c.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"100%",backgroundColor:"var(--c--theme--colors--greyscale-600)"}}),c.jsx("div",{style:{width:"150px",height:"32px",borderRadius:"4px",backgroundColor:"var(--c--theme--colors--greyscale-400)"}})]})})}},N={args:{children:c.jsx(j,{size:"small",icon:c.jsx("span",{className:"material-icons",children:"info"}),variant:"tertiary",color:"neutral"}),placement:"right",content:c.jsxs("div",{children:[c.jsx("h3",{children:"Heading"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}};var q,A,W;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} variant="tertiary" color="neutral" />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...(W=(A=C.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var K,V,G;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Tooltip placement="left" content="Hi there">
          <Button size="nano" variant="tertiary" color="neutral">
            ⬅️
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" content="Hi there">
          <Button size="nano" variant="tertiary" color="neutral">
            ⬇️
          </Button>
        </Tooltip>
        <Tooltip placement="top" content="Hi there">
          <Button size="nano" variant="tertiary" color="neutral">
            ⬆️
          </Button>
        </Tooltip>
        <Tooltip placement="right" content="Hi there">
          <Button size="nano" variant="tertiary" color="neutral">
            ➡️
          </Button>
        </Tooltip>
      </div>;
  }
}`,...(G=(V=O.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var U,Y,X;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      width: "100px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }}>
        {lorem}
      </p>,
    content: lorem
  }
}`,...(X=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    content: lorem,
    placement: "bottom",
    children: <div style={{
      display: "inline-flex"
    }}>
        <div style={{
        borderRadius: "8px",
        backgroundColor: "var(--c--theme--colors--greyscale-300)",
        padding: "1rem",
        display: "flex",
        gap: "1rem"
      }}>
          <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "100%",
          backgroundColor: "var(--c--theme--colors--greyscale-600)"
        }} />
          <div style={{
          width: "150px",
          height: "32px",
          borderRadius: "4px",
          backgroundColor: "var(--c--theme--colors--greyscale-400)"
        }} />
        </div>
      </div>
  }
}`,...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: <Button size="small" icon={<span className="material-icons">info</span>} variant="tertiary" color="neutral" />,
    placement: "right",
    content: <div>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
  }
}`,...(re=(te=N.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Fe=["Default","Placements","OverflowingText","WithElements","WithHtml"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Default:C,OverflowingText:D,Placements:O,WithElements:_,WithHtml:N,__namedExportsOrder:Fe,default:ke},Symbol.toStringTag,{value:"Module"}));export{C as D,D as O,O as P,Ve as S,H as T,N as W,_ as a};
