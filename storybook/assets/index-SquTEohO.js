import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{e as T,r as c}from"./index-DTOEHpHZ.js";import{c as h}from"./index-rkLeB0kx.js";import{u as I}from"./index-C5sehico.js";import{F as E}from"./index-BaD3Jhh-.js";import{L as F}from"./index-BADBcByr.js";import{B as N}from"./index-BIqEzyda.js";import{C as V}from"./index-ClZIdn5H.js";import{$ as ae}from"./useOverlayPosition-CofLYEYW.js";import{u as w,a as _,b as O}from"./downshift.esm-BtDVa6vt.js";import{C as re}from"./index-8as2JP8Z.js";const B=n=>n.render!==void 0,M=({option:n,showLabelWhenSelected:e=!0})=>n?B(n)&&!e?n.render():a.jsx("span",{children:n.label}):null;M.__docgenInfo={description:"",methods:[],displayName:"SelectedOption",props:{option:{required:!0,tsType:{name:"union",raw:"Option | undefined | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"undefined"},{name:"null"}]},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const A=({isOpen:n,selectRef:e,downshiftReturn:r,menuOptionsStyle:t,children:d})=>{const u=T.useRef(null),l=ae({targetRef:e,overlayRef:u,placement:"bottom",isOpen:n,maxHeight:160,shouldUpdatePosition:!0}),i=r.getMenuProps({ref:u});return a.jsx("div",{className:h("c__select__menu",t?"c__select__menu--"+t:"",{"c__select__menu--opened":n}),...i,style:{marginLeft:"-4px",width:e.current?e.current.getBoundingClientRect().width-4:0,...l.overlayProps.style},children:n&&d})};A.__docgenInfo={description:"",methods:[],displayName:"SelectMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:'intersection["menuOptionsStyle"]',raw:'SelectProps["menuOptionsStyle"]'},description:""},downshiftReturn:{required:!0,tsType:{name:"union",raw:`| SelectAuxProps["downshiftReturn"]
| SelectMultiAuxProps["downshiftReturn"]`,elements:[{name:'SelectAuxProps["downshiftReturn"]',raw:'SelectAuxProps["downshiftReturn"]'},{name:'SelectMultiAuxProps["downshiftReturn"]',raw:'SelectMultiAuxProps["downshiftReturn"]'}]},description:""}},composes:["PropsWithChildren"]};function K(n){return e=>{var r;return!n||e.label.toLowerCase().includes(n.toLowerCase())||((r=e.value)==null?void 0:r.toLowerCase().includes(n.toLowerCase()))}}const j=n=>n?n.label:"",y=n=>n.value??n.label,C=(n,e)=>y(n)===y(e),W=n=>B(n)?n.render():n.label,L=({children:n,state:e="default",options:r,name:t,label:d,hideLabel:u,variant:l="floating",placeholder:i,labelAsPlaceholder:m,downshiftProps:v,downshiftReturn:o,value:s,disabled:b,clearable:R=!0,onBlur:g,...k})=>{const{t:f}=I(),p=o.getLabelProps(),S=c.useRef(null),x=l==="classic",ee=x&&!o.selectedItem&&i,H=a.jsxs("div",{className:"c__select__inner",children:[a.jsx("div",{className:"c__select__inner__value",children:ee?a.jsx("span",{className:"c__select__placeholder",children:i}):n}),a.jsxs("div",{className:"c__select__inner__actions",children:[R&&!b&&o.selectedItem&&a.jsxs(a.Fragment,{children:[a.jsx(N,{variant:"tertiary",color:"neutral",size:"nano","aria-label":f("components.forms.select.clear_button_aria_label"),className:"c__select__inner__actions__clear",onClick:q=>{o.selectItem(null),q.stopPropagation()},icon:a.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),a.jsx("div",{className:"c__select__inner__actions__separator"})]}),a.jsx(N,{variant:"tertiary",color:"neutral",size:"nano",className:"c__select__inner__actions__open",icon:a.jsx("span",{className:h("material-icons",{opened:o.isOpen}),children:"arrow_drop_down"}),disabled:b,type:"button",...o.toggleButtonProps})]})]});return a.jsxs(a.Fragment,{children:[a.jsx(E,{state:e,...k,children:a.jsxs("div",{ref:S,className:h("c__select","c__select--mono","c__select--"+e,{"c__select--disabled":b,"c__select--classic":x}),onBlur:()=>{var q;return g==null?void 0:g({target:{value:(q=o.selectedItem)==null?void 0:q.value}})},children:[x&&a.jsx(V,{label:d,hideLabel:u,disabled:b,className:"c__select__label",disabledClassName:"c__select__label--disabled",htmlFor:p.htmlFor,id:p.id}),a.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":o.isOpen&&!b}),...o.wrapperProps,children:[o.selectedItem&&a.jsx("input",{type:"hidden",name:t,value:y(o.selectedItem)}),x?H:a.jsx(F,{label:d,hideLabel:u,variant:l,labelAsPlaceholder:m,htmlFor:p.htmlFor,labelId:p.id,disabled:b,children:H})]})]})}),a.jsx(A,{isOpen:o.isOpen,selectRef:S,downshiftReturn:o,children:a.jsxs("ul",{children:[r.map((q,P)=>{const ne=P===o.highlightedIndex;return a.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":ne,"c__select__menu__item--selected":o.selectedItem&&C(o.selectedItem,q),"c__select__menu__item--disabled":q.disabled}),...o.getItemProps({item:q,index:P}),children:a.jsx("span",{children:W(q)})},`${y(q)}${P.toString()}`)}),r.length===0&&a.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:f("components.forms.select.menu_empty_placeholder")})]})})]})};L.__docgenInfo={description:`This component is used by searchable and non-searchable select components.
It contains the common logic between the two.`,methods:[],displayName:"SelectMonoAux",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:"",defaultValue:{value:'"default"',computed:!1}},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "classic"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"classic"'}]},description:"",defaultValue:{value:'"floating"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  selectedItem?: Option | null;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  selectItem: UseSelectReturnValue<Option>["selectItem"];
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}},{key:"selectedItem",value:{name:"union",raw:"Option | null",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"null"}],required:!1}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"selectItem",value:{name:'UseSelectReturnValue["selectItem"]',raw:'UseSelectReturnValue<Option>["selectItem"]',required:!0}}]}},description:""}}};const $=n=>{if(n.selectedItemsStyle==="pills")return a.jsx(te,{...n});if(n.selectedItemsStyle==="text")return a.jsx(ie,{...n});throw new Error("Unknown selectedItemsStyle")},te=({selectedItems:n,selectedItemsStyle:e,disabled:r,useMultipleSelectionReturn:t,...d})=>{const{t:u}=I();return n.map((l,i)=>a.jsxs("div",{className:"c__select__inner__value__pill",...t.getSelectedItemProps({selectedItem:l,index:i}),children:[a.jsx(M,{option:l,...d}),a.jsx(N,{tabIndex:-1,variant:"tertiary",color:"neutral",disabled:r,size:"small","aria-label":u("components.forms.select.clear_button_aria_label"),type:"button",className:"c__select__inner__value__pill__clear",onClick:m=>{m.stopPropagation(),t.removeSelectedItem(l)},icon:a.jsx("span",{className:"material-icons",children:"close"})})]},`${y(l)}${i.toString()}`))},ie=({selectedItems:n})=>n.map(e=>j(e)).join(", ");$.__docgenInfo={description:"",methods:[],displayName:"SelectedItems",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const U=n=>{const{t:e}=I();return a.jsx(A,{isOpen:n.downshiftReturn.isOpen,selectRef:n.selectRef,downshiftReturn:n.downshiftReturn,menuOptionsStyle:n.menuOptionsStyle,children:a.jsx("ul",{children:n.downshiftReturn.isOpen&&a.jsxs(a.Fragment,{children:[n.options.map((r,t)=>c.createElement(le,{...n,option:r,index:t,key:y(r)})),n.options.length===0&&a.jsx("li",{className:"c__select__menu__item c__select__menu__empty-placeholder",children:e("components.forms.select.menu_empty_placeholder")})]})})})},le=n=>{if(n.menuOptionsStyle==="plain")return a.jsx(ue,{...n});if(n.menuOptionsStyle==="checkbox")return a.jsx(se,{...n});throw new Error("Unknown menuOptionsStyle")},ue=({option:n,index:e,...r})=>{const t=e===r.downshiftReturn.highlightedIndex||n.highlighted;return a.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":t,"c__select__menu__item--disabled":n.disabled}),...r.downshiftReturn.getItemProps({item:n,index:e}),children:a.jsx("span",{children:W(n)})})},se=({option:n,index:e,...r})=>a.jsx("li",{className:h("c__select__menu__item",{"c__select__menu__item--highlight":e===r.downshiftReturn.highlightedIndex,"c__select__menu__item--disabled":n.disabled}),...r.downshiftReturn.getItemProps({item:n,index:e}),children:a.jsx(re,{label:W(n),checked:n.highlighted,fullWidth:!0})});U.__docgenInfo={description:"",methods:[],displayName:"SelectMultiMenu",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""},selectRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""}}};function z(n,e){const r=K(e);return t=>!n.find(d=>y(d)===y(t))&&r(t)}const D=({children:n,...e})=>{const{t:r}=I(),t=e.downshiftReturn.getLabelProps(),d=c.useRef(null),u=e.variant??"floating",l=u==="classic",i=l&&e.selectedItems.length===0&&e.placeholder,{onBlur:m,...v}=e.downshiftReturn.toggleButtonProps,o=a.jsxs("div",{className:"c__select__inner",children:[a.jsxs("div",{className:"c__select__inner__actions",children:[e.clearable&&!e.disabled&&e.selectedItems.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(N,{variant:"tertiary",color:"neutral",size:"nano","aria-label":r("components.forms.select.clear_all_button_aria_label"),className:"c__select__inner__actions__clear",onClick:s=>{s.stopPropagation(),e.onSelectedItemsChange([])},icon:a.jsx("span",{className:"material-icons",children:"close"}),type:"button"}),a.jsx("div",{className:"c__select__inner__actions__separator"})]}),a.jsx(N,{variant:"tertiary",color:"neutral",size:"nano",className:"c__select__inner__actions__open",icon:a.jsx("span",{className:h("material-icons",{opened:e.downshiftReturn.isOpen}),children:"arrow_drop_down"}),disabled:e.disabled,type:"button"})]}),a.jsx("div",{className:"c__select__inner__value",children:i?a.jsx("span",{className:"c__select__placeholder",children:e.placeholder}):a.jsxs(a.Fragment,{children:[a.jsx($,{...e}),n]})})]});return a.jsxs(a.Fragment,{children:[a.jsx(E,{...e,children:a.jsxs("div",{ref:d,className:h("c__select","c__select--multi","c__select--"+e.state,"c__select--"+e.selectedItemsStyle,{"c__select--disabled":e.disabled,"c__select--populated":e.selectedItems.length>0,"c__select--monoline":e.monoline,"c__select--multiline":!e.monoline,"c__select--classic":l}),children:[l&&a.jsx(V,{label:e.label,hideLabel:e.hideLabel,disabled:e.disabled,className:"c__select__label",disabledClassName:"c__select__label--disabled",htmlFor:t.htmlFor,id:t.id}),a.jsxs("div",{className:h("c__select__wrapper",{"c__select__wrapper--focus":e.downshiftReturn.isOpen&&!e.disabled}),...e.downshiftReturn.wrapperProps,...v,children:[e.selectedItems.map((s,b)=>a.jsx("input",{type:"hidden",name:e.name,value:y(s)},`${y(s)}${b.toString()}`)),l?o:a.jsx(F,{label:e.label,variant:u,labelAsPlaceholder:e.labelAsPlaceholder,htmlFor:t.htmlFor,labelId:t.id,hideLabel:e.hideLabel,disabled:e.disabled,children:o})]})]})}),a.jsx(U,{...e,selectRef:d})]})};D.__docgenInfo={description:"",methods:[],displayName:"SelectMultiAux",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},labelAsPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},downshiftReturn:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isOpen: boolean;
  getLabelProps: any;
  toggleButtonProps: any;
  getMenuProps: any;
  getItemProps: any;
  highlightedIndex: number;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!0}},{key:"getLabelProps",value:{name:"any",required:!0}},{key:"toggleButtonProps",value:{name:"any",required:!0}},{key:"getMenuProps",value:{name:"any",required:!0}},{key:"getItemProps",value:{name:"any",required:!0}},{key:"highlightedIndex",value:{name:"number",required:!0}},{key:"wrapperProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>",required:!1}}]}},description:""},useMultipleSelectionReturn:{required:!0,tsType:{name:"ReturnType",elements:[{name:"useMultipleSelection"}],raw:"ReturnType<typeof useMultipleSelection<Option>>"},description:""}}};const J=({ref:n,...e})=>{const[r,t]=T.useState(),d=c.useRef(null),u=T.useMemo(()=>e.options.filter(z(e.selectedItems,r)),[e.selectedItems,r]),[l,i]=c.useState(!1),m=w({selectedItems:e.selectedItems,onStateChange({selectedItems:g,type:k}){switch(k){case w.stateChangeTypes.SelectedItemKeyDownBackspace:case w.stateChangeTypes.SelectedItemKeyDownDelete:case w.stateChangeTypes.DropdownKeyDownBackspace:case w.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(g??[]);break}}}),v=_({items:u,itemToString:j,defaultHighlightedIndex:0,selectedItem:null,stateReducer:(g,k)=>{const{changes:f,type:p}=k;switch(p){case _.stateChangeTypes.InputKeyDownEnter:case _.stateChangeTypes.ItemClick:return{...f,isOpen:!0,highlightedIndex:0};default:return f}},onStateChange:({inputValue:g,type:k,selectedItem:f})=>{switch(k){case _.stateChangeTypes.InputKeyDownEnter:case _.stateChangeTypes.ItemClick:case _.stateChangeTypes.InputBlur:f&&!f.disabled&&(e.onSelectedItemsChange([...e.selectedItems,f]),t(void 0));break;case _.stateChangeTypes.InputChange:t(g);break}},isItemDisabled:g=>!!(g!=null&&g.disabled)}),o=v.getInputProps({...m.getDropdownProps({onFocus:()=>{i(!0),v.openMenu()},onBlur:()=>{i(!1)},onChange:g=>{t(g.target.value)},size:4,preventKeyAction:v.isOpen,ref:d,disabled:e.disabled}),value:r}),{onKeyDown:s}=o;o.onKeyDown=g=>{switch(g.code){case"Backspace":r||e.onSelectedItemsChange(e.selectedItems.slice(0,-1))}s==null||s(g)};const[b,R]=c.useState(!0);return c.useEffect(()=>{if(l||r){R(!1);return}R(e.selectedItems.length===0)},[e.selectedItems,l,r]),c.useImperativeHandle(n,()=>({blur:()=>{var g;v.closeMenu(),(g=d.current)==null||g.blur()}})),c.useEffect(()=>{var g;(g=e.onSearchInputChange)==null||g.call(e,{target:{value:r}})},[r]),a.jsx(D,{...e,monoline:!1,options:u,labelAsPlaceholder:b,selectedItems:e.selectedItems,downshiftReturn:{...v,wrapperProps:{onClick:()=>{var g;(g=d.current)==null||g.focus(),v.isOpen||v.openMenu()}},toggleButtonProps:v.getToggleButtonProps()},useMultipleSelectionReturn:m,children:a.jsx("span",{className:"c__select__inner__value__input","data-value":r,children:a.jsx("input",{...o})})})};J.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSearchable",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""}}};const Y=({ref:n,...e})=>{const r=i=>!!e.selectedItems.find(m=>C(m,i)),t=T.useMemo(()=>e.monoline?e.options.map(i=>({...i,highlighted:r(i)})):e.options.filter(z(e.selectedItems,"")),[e.selectedItems]),d=w({selectedItems:e.selectedItems,onStateChange({selectedItems:i,type:m}){switch(m){case w.stateChangeTypes.SelectedItemKeyDownBackspace:case w.stateChangeTypes.SelectedItemKeyDownDelete:case w.stateChangeTypes.DropdownKeyDownBackspace:case w.stateChangeTypes.FunctionRemoveSelectedItem:e.onSelectedItemsChange(i??[]);break}}}),u=O({items:t,itemToString:j,selectedItem:null,defaultHighlightedIndex:0,stateReducer:(i,m)=>{const{changes:v,type:o}=m;switch(o){case O.stateChangeTypes.ToggleButtonKeyDownEnter:case O.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case O.stateChangeTypes.ItemClick:return{...v,isOpen:!0,highlightedIndex:i.highlightedIndex}}return v},onStateChange:({type:i,selectedItem:m})=>{switch(i){case O.stateChangeTypes.ToggleButtonKeyDownEnter:case O.stateChangeTypes.ToggleButtonKeyDownSpaceButton:case O.stateChangeTypes.ItemClick:if(!m)break;r(m)?e.onSelectedItemsChange(e.selectedItems.filter(v=>!C(v,m))):e.onSelectedItemsChange([...e.selectedItems,m]);break}},isItemDisabled:i=>!!(i!=null&&i.disabled)}),l=c.useRef(null);return c.useImperativeHandle(n,()=>({blur:()=>{var i;u.closeMenu(),(i=l.current)==null||i.blur()}})),a.jsx(D,{...e,options:t,labelAsPlaceholder:e.selectedItems.length===0,selectedItems:e.selectedItems,selectedItemsStyle:e.monoline?"text":"pills",menuOptionsStyle:e.monoline?"checkbox":"plain",downshiftReturn:{...u,toggleButtonProps:u.getToggleButtonProps({...d.getDropdownProps({preventKeyAction:u.isOpen,ref:l}),disabled:e.disabled,onClick:i=>{i.stopPropagation()}})},useMultipleSelectionReturn:d})};Y.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMultiSimple",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onSelectedItemsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""}}};const G=n=>{const e=()=>{const l=n.defaultValue??n.value??[];return n.options.filter(i=>l.includes(y(i)))},[r,t]=T.useState(e());c.useEffect(()=>{n.defaultValue===void 0&&t(e())},[JSON.stringify(n.value)]),c.useEffect(()=>{var l;(l=n.onChange)==null||l.call(n,{target:{value:r.map(y)}})},[JSON.stringify(r)]);const d=l=>{t(l)},u={selectedItemsStyle:"pills",menuOptionsStyle:"plain",clearable:!0};return n.searchable?a.jsx(J,{...u,...n,selectedItems:r,onSelectedItemsChange:d}):a.jsx(Y,{...u,...n,selectedItems:r,onSelectedItemsChange:d})};G.__docgenInfo={description:"",methods:[],displayName:"SelectMulti",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: { target: { value: string[] } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string[] } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string[] }",signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const Q=({showLabelWhenSelected:n=!0,ref:e,...r})=>{const{t}=I(),[d,u]=c.useState(r.options),[l,i]=c.useState(!1),[m,v]=c.useState(),o=c.useRef(null),s=_({...r.downshiftProps,items:d,itemToString:j,onInputValueChange:p=>{v(p.inputValue),p.inputValue||s.selectItem(null)}}),[b,R]=c.useState(!s.selectedItem);c.useEffect(()=>{if(l||s.inputValue){R(!1);return}R(!s.selectedItem)},[s.selectedItem,l,s.inputValue]),c.useEffect(()=>{if(m)return;const p=r.options.find(S=>y(S)===r.value);s.selectItem(p??null)},[r.value,r.options,m]),c.useEffect(()=>{s.isOpen?u(m?r.options.filter(K(m)):r.options):v(void 0)},[s.isOpen,r.options,m]),c.useImperativeHandle(e,()=>({blur:()=>{var p;s.closeMenu(),(p=o.current)==null||p.blur()}})),c.useEffect(()=>{var p;(p=r.onSearchInputChange)==null||p.call(r,{target:{value:m}})},[m]);const g=()=>{i(!1),s.selectedItem?s.selectItem(s.selectedItem):s.setInputValue("")},k=s.getInputProps({ref:o,disabled:r.disabled}),f=!n;return a.jsxs(L,{...r,downshiftReturn:{...s,wrapperProps:{onClick:()=>{var p;(p=o.current)==null||p.focus(),s.isOpen||s.openMenu()}},toggleButtonProps:s.getToggleButtonProps({disabled:r.disabled,"aria-label":t("components.forms.select.toggle_button_aria_label")})},labelAsPlaceholder:b,options:d,children:[a.jsx("input",{...k,className:h({"c__select__inner__value__input--hidden":f&&!l}),onFocus:()=>{i(!0)},onBlur:()=>{g()}}),f&&!l&&s.selectedItem&&B(s.selectedItem)&&s.selectedItem.render()]})};Q.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSearchable",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "classic"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"classic"'}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""}}};const de=(n,e)=>{c.useEffect(()=>{const r=e.options.find(t=>y(t)===e.value);n.selectItem(r??null)},[e.value,e.options])},X=({ref:n,...e})=>{const r=O({...e.downshiftProps,items:e.options,itemToString:j});de(r,e);const t=c.useRef(null);return c.useImperativeHandle(n,()=>({blur:()=>{var d;r.closeMenu(),(d=t.current)==null||d.blur()}})),a.jsx(L,{...e,downshiftReturn:{...r,wrapperProps:r.getToggleButtonProps({disabled:e.disabled,ref:t}),toggleButtonProps:{}},labelAsPlaceholder:!r.selectedItem,children:a.jsx(M,{option:r.selectedItem,...e})})};X.__docgenInfo={description:"",methods:[{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SelectMonoSimple",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "classic"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"classic"'}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},defaultSelectedItem:{required:!1,tsType:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},description:""},downshiftProps:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialSelectedItem?: Option;
  onSelectedItemChange?: any;
  isItemDisabled?: (item: Option) => boolean;
}`,signature:{properties:[{key:"initialSelectedItem",value:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1}},{key:"onSelectedItemChange",value:{name:"any",required:!1}},{key:"isItemDisabled",value:{name:"signature",type:"function",raw:"(item: Option) => boolean",signature:{arguments:[{type:{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],required:!1},name:"item"}],return:{name:"boolean"}},required:!1}}]}},description:""}}};const Z=n=>{const e=n.defaultValue?n.options.find(u=>y(u)===n.defaultValue):void 0,[r,t]=c.useState(e?y(e):n.value);c.useEffect(()=>{n.defaultValue||t(n.value)},[n.value,n.defaultValue]);const d={initialSelectedItem:e,onSelectedItemChange:u=>{var m;const l=u.selectedItem?y(u.selectedItem):null;l!==(r??null)&&(t(l||void 0),(m=n.onChange)==null||m.call(n,{target:{value:u.selectedItem?y(u.selectedItem):void 0}}))},isItemDisabled:u=>!!u.disabled};return n.searchable?a.jsx(Q,{...n,downshiftProps:d,value:r}):a.jsx(X,{...n,downshiftProps:d,value:r})};Z.__docgenInfo={description:"",methods:[],displayName:"SelectMono",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "classic"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"classic"'}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};const oe=n=>{if(n.defaultValue&&n.value)throw new Error("You cannot use both defaultValue and value props on Select component");return n.multi?a.jsx(G,{...n}):a.jsx(Z,{...n})};oe.__docgenInfo={description:"",methods:[],displayName:"Select",props:{state:{required:!1,tsType:{name:"union",raw:"FieldState | undefined",elements:[{name:"union",raw:'"success" | "error" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"default"'}]},{name:"undefined"}]},description:""},text:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},textItems:{required:!1,tsType:{name:"union",raw:"string[] | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},rightText:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},fullWidth:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},compact:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"floating" | "classic"',elements:[{name:"literal",value:'"floating"'},{name:"literal",value:'"classic"'}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"OptionWithoutRender | OptionWithRender",elements:[{name:"intersection",raw:`Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"union",raw:'"value" | "render"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"render"'}]}],raw:'Omit<BaseOption, "value" | "render">'},{name:"signature",type:"object",raw:`{
  value?: string;
  render?: undefined;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"render",value:{name:"undefined",required:!1}}]}}]},{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}},required:!0}},{key:"highlighted",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | number | undefined | string[] };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | number | undefined | string[] };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | number | undefined | string[] }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number | undefined | string[]",elements:[{name:"string"},{name:"number"},{name:"undefined"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},multi:{required:!1,tsType:{name:"boolean"},description:""},showLabelWhenSelected:{required:!1,tsType:{name:"boolean"},description:""},monoline:{required:!1,tsType:{name:"boolean"},description:""},selectedItemsStyle:{required:!1,tsType:{name:"union",raw:'"pills" | "text"',elements:[{name:"literal",value:'"pills"'},{name:"literal",value:'"text"'}]},description:""},menuOptionsStyle:{required:!1,tsType:{name:"union",raw:'"plain" | "checkbox"',elements:[{name:"literal",value:'"plain"'},{name:"literal",value:'"checkbox"'}]},description:""},onSearchInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(event: {
  target: { value: string | undefined };
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: { value: string | undefined };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string | undefined }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},required:!0}}]}},name:"event"}],return:{name:"void"}}},description:""}}};export{oe as S};
