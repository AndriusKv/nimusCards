(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{110:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),c=a.n(n);a(110);const l=Object(n.createContext)(null);function i({children:e}){const[t,a]=Object(n.useReducer)(s,null),i=Object(n.useMemo)(()=>({state:t,dispatch:a}),[t]);return c.a.createElement(l.Provider,{value:i},e)}function r(){return Object(n.useContext)(l)}function s(e,t){switch(t.type){case"RESET_DECK":return{...t.deck};case"UPDATE_DECK":return{...e,[t.name]:t.value};case"ADD_CARD":return{...e,cards:[...e.cards,t.card]};case"REMOVE_CARD":return e.cards.splice(t.index,1),{...e};case"UPDATE_CARD_VALUE":return e.cards[t.index][t.name][t.key]=t.value,{...e};case"ADD_ATTACHMENT":return e.cards[t.index].front.attachment=t.attachment,{...e};case"REMOVE_ATTACHMENT":return delete e.cards[t.index].front.attachment,{...e};case"UPDATE_CARD_BACK":const a=e.cards[t.index];return a.back={...a.back,...t.payload},{...e};default:return e}}var o=a(44),m=a(48),u=a(8);function d({textSize:e,handleChange:t}){return c.a.createElement("select",{className:"input create-side-select",title:"Text size",defaultValue:e,onChange:t},c.a.createElement("option",{value:"16"},"16px"),c.a.createElement("option",{value:"24"},"24px"),c.a.createElement("option",{value:"36"},"36px"),c.a.createElement("option",{value:"48"},"48px"))}function p({hide:e,type:t,addAttachment:a}){const[l,i]=Object(n.useState)("");function r(e){i(e),setTimeout(()=>{i("")},3200)}return c.a.createElement("div",{className:"mask"},c.a.createElement("div",{className:"modal upload-panel"},c.a.createElement("div",{className:"upload-panel-device-target"},c.a.createElement("div",{className:"upload-panel-device-target-title"},"Select ",t," file from device"),c.a.createElement("label",{className:"btn",tabIndex:"0"},c.a.createElement("span",null,"Select"),c.a.createElement("input",{type:"file",className:"file-input",onChange:function({target:e}){const[n]=e.files;e.value="",n.type.split("/")[0]!==t?r("File is not an "+t):a(n,t)}}))),c.a.createElement("div",{className:"upload-panel-item-separator"},"Or"),c.a.createElement("div",{className:"upload-panel-url-target"},c.a.createElement("div",{className:"upload-panel-url-target-title"},"Upload ",t," from url"),c.a.createElement("form",{onSubmit:function(e){const n=e.target.elements.url.value.trim();if(e.preventDefault(),n){if("image"===t){const e=new Image;e.onload=()=>{a(n,t)},e.onerror=e=>{r(`URL doesn't contain ${t} file`),console.log(e)},e.src=n}else if("audio"===t){const e=new Audio(n);e.onloadedmetadata=()=>{a(n,t)},e.onerror=e=>{r(`URL doesn't contain ${t} file`),console.log(e)}}}else r("Please specify valid url")}},c.a.createElement("input",{type:"text",name:"url",className:"input upload-panel-url-target-input"}),c.a.createElement("button",{className:"btn"},"Upload"))),c.a.createElement("div",{className:"upload-panel-footer"},l&&c.a.createElement("div",{className:"upload-panel-message"},l),c.a.createElement("button",{type:"button",className:"btn btn-text",onClick:e},"Cancel"))))}a(89);function E({file:e,type:t}){const a="string"==typeof e?e:URL.createObjectURL(e);return"image"===t?c.a.createElement("img",{src:a,alt:"",className:"create-side-image"}):"audio"===t?c.a.createElement("audio",{src:a,className:"create-side-audio",controls:!0}):null}var f=function({index:e,side:t,handleChange:a}){const{dispatch:l}=r(),[i,s]=Object(n.useState)({type:"",visible:!1}),{text:o,textSize:m,attachment:f}=t;function v(){l({type:"REMOVE_ATTACHMENT",index:e})}function b(){s({visible:!1,type:""})}return c.a.createElement(n.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"deck-form-field-title"},"FRONT"),c.a.createElement("div",{className:"create-side-toolbar"},["image","audio"].map((e,t)=>c.a.createElement("button",{key:t,className:"btn btn-icon toolbar-btn",title:"Upload "+e,onClick:()=>function(e){s({visible:!0,type:e})}(e)},c.a.createElement(u.a,{name:e}))),c.a.createElement(d,{textSize:m,handleChange:e=>a(e,"front","textSize")})),c.a.createElement("div",{className:"create-side-content"},f&&c.a.createElement("div",{className:"create-side-panel"},c.a.createElement("button",{type:"button",className:"btn btn-icon create-side-panel-btn",onClick:v,title:"Remove attachment"},c.a.createElement(u.a,{name:"remove"})),c.a.createElement(E,f)),c.a.createElement("textarea",{className:"input create-side-text-input",value:o,style:{fontSize:m+"px"},onChange:e=>a(e,"front","text")}))),i.visible&&c.a.createElement(p,{type:i.type,hide:b,addAttachment:function(t,a){l({type:"ADD_ATTACHMENT",index:e,attachment:{file:t,type:a}}),b()}}))};var v=function({index:e}){const{state:t,dispatch:a}=r(),{back:l,id:i}=t.cards[e],{type:s,textOptions:m,multiOptions:p,exactOptions:E}=l;function f(t){a({type:"UPDATE_CARD_BACK",index:e,payload:t})}function v({target:e},t){const{value:a}=e;a!==l[t]&&(m[t]=a,f({textOptions:m}))}function b({target:e}){p.layout=e.value,f({multiOptions:p})}function y({target:e}){const{name:t,value:a}=e,n=p.options[t];a!==n.value&&(n.value=a,f({multiOptions:p}))}function N({target:e}){const{name:t,value:a,checked:n}=e;"caseSensitive"===t?E.caseSensitive=n:E.value=a,f({exactOptions:E})}function h(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"create-multi-layout"},c.a.createElement("div",{className:"create-multi-layout-title"},"Layout"),c.a.createElement("div",{onInput:b,className:"create-multi-layout-items"},c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-"+i,value:"short",defaultChecked:"short"===p.layout}),c.a.createElement(u.a,{name:"grid",className:"create-option-type-icon"})),c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-"+i,value:"medium",defaultChecked:"medium"===p.layout}),c.a.createElement(u.a,{name:"list-2-col",className:"create-option-type-icon"})),c.a.createElement("label",{className:"create-multi-layout-item"},c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"multi-"+i,value:"long",defaultChecked:"long"===p.layout}),c.a.createElement(u.a,{name:"menu",className:"create-option-type-icon"})))),c.a.createElement("ul",null,p.options.map(({id:e,value:t},a)=>c.a.createElement("li",{className:"create-option",key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only radio-input",name:i,checked:p.correctId===e,onChange:()=>function(e){p.correctId=e,f({multiOptions:p})}(e)}),c.a.createElement("div",{className:"radio create-option-radio",title:"Mark answer as correct"})),c.a.createElement("input",{type:"text",className:"input create-option-input",name:a,defaultValue:t,autoComplete:"off",onChange:y}),c.a.createElement("button",{className:"btn btn-icon",title:"Remove answer",onClick:()=>{return e=a,p.options.splice(e,1),void f({multiOptions:p});var e}},c.a.createElement(u.a,{name:"remove"}))))))}return c.a.createElement("div",null,c.a.createElement("div",{className:"deck-form-field-title"},"BACK"),c.a.createElement("div",{className:"create-side-toolbar"},c.a.createElement("ul",{className:"create-side-types",onChange:function({target:e}){f({type:e.value})}},c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-"+i,value:"text",defaultChecked:"text"===s}),c.a.createElement(u.a,{name:"text",title:"Text",className:"create-option-type-icon"}))),c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-"+i,value:"multi",defaultChecked:"multi"===s}),c.a.createElement(u.a,{name:"list-checkbox",title:"Multiple choice",className:"create-option-type-icon"}))),c.a.createElement("li",{className:"create-side-type"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",className:"sr-only create-type-radio",name:"type-"+i,value:"exact",defaultChecked:"exact"===s}),c.a.createElement(u.a,{name:"text-short",title:"Exact answer",className:"create-option-type-icon"})))),"text"===s&&c.a.createElement(d,{textSize:m.textSize,handleChange:e=>v(e,"textSize")}),"multi"===s&&c.a.createElement("button",{className:"btn btn-icon",onClick:function(){p.options.length<8&&(p.options.push({id:Object(o.a)()}),f({multiOptions:p}))},title:"Add option",disabled:p.options.length>=8},c.a.createElement(u.a,{name:"add-list-item"}))),c.a.createElement("div",{className:"create-side-content"},function(e){return"text"===e?c.a.createElement("textarea",{className:"input create-side-text-input",value:m.value,style:{fontSize:m.textSize+"px"},onChange:e=>v(e,"value")}):"multi"===e?h():"exact"===e?c.a.createElement("div",{onChange:N},c.a.createElement("label",{className:"creact-exact-input-container"},c.a.createElement("div",{className:"creact-exact-input-title"},"Provide answer:"),c.a.createElement("input",{type:"text",className:"input creact-exact-input",name:"input",autoComplete:"off",defaultValue:E.value})),c.a.createElement("label",{className:"checkbox-container creact-exact-checkbox-container"},c.a.createElement("input",{type:"checkbox",className:"sr-only checkbox-input",name:"caseSensitive",defaultChecked:E.caseSensitive}),c.a.createElement("div",{className:"checkbox create-checkbox"},c.a.createElement("div",{className:"checkbox-tick"})),c.a.createElement("span",{className:"checkbox-label"},"Case sensitive"))):null}(s)))};function b({value:e,handleChange:t}){return c.a.createElement("div",{className:"deck-form-card-notes-container"},c.a.createElement("div",{className:"deck-form-field-title"},"NOTES"),c.a.createElement("textarea",{className:"input deck-form-card-notes-input",value:e,onChange:e=>t(e,"notes","value")}))}var y=function({index:e,card:t,removeCard:a}){const{state:l,dispatch:i}=r(),[s,o]=Object(n.useState)(t.notes&&!!t.notes.value);function m({target:a},n,c){const{value:l}=a;l!==t[n][c]&&i({type:"UPDATE_CARD_VALUE",index:e,name:n,key:c,value:l})}return c.a.createElement("li",{className:"create-list-item"},c.a.createElement("div",{className:"create-card-index"},e+1,"."),c.a.createElement("div",{className:"deck-form-field-group create-card"},c.a.createElement(f,{index:e,side:t.front,handleChange:m}),c.a.createElement(v,{index:e}),s&&c.a.createElement(b,{value:t.notes.value,handleChange:m})),c.a.createElement("div",{className:"create-card-btns"},c.a.createElement("button",{className:"btn btn-icon",title:"Toggle notes",onClick:function(){o(!s)}},c.a.createElement(u.a,{name:"notes"})),l.cards.length>1&&c.a.createElement("button",{className:"btn btn-icon",title:"Remove card",onClick:()=>a(e)},c.a.createElement(u.a,{name:"remove"}))))};function N(e){const{state:t,dispatch:a}=r(),[l,i]=Object(n.useState)(""),[s,u]=Object(n.useState)([]),d=Object(n.useRef)();let p=0,E=0;function f(){return{id:Object(o.a)(),front:{text:"",textSize:16},back:{type:"text",textOptions:{value:"",textSize:16},multiOptions:{correctId:"",layout:"short",options:[{id:Object(o.a)()},{id:Object(o.a)()}]},exactOptions:{caseSensitive:!1,value:""}},notes:{value:""}}}function v(e){const n=t.cards[e];(b(n.front)||N(n.back)||n.notes.value)&&u([...s,n]),a({type:"REMOVE_CARD",index:e})}function b(e){return e.text||e.attachment}function N(e,t=!1){if("text"===e.type)return e.textOptions.value.length>0;if("exact"===e.type)return e.exactOptions.value.length>0;const a=e.multiOptions.options.reduce((e,{value:t})=>(t&&(e+=1),e),0);return t?a>0:a>1&&e.multiOptions.correctId}function h({target:e}){const{name:t,value:n}=e;a({type:"UPDATE_DECK",name:t,value:n})}return Object(n.useEffect)(()=>{const{id:t}=e.match.params;"/decks/create"===e.match.path?a({type:"RESET_DECK",deck:{id:Object(o.a)(),title:"",description:"",studyMode:"standard",cards:[f()]}}):t&&Object(m.b)(t).then(e=>{e&&(e.cards=e.cards.map(e=>{const t=f();return t.front=e.front,t.back.type=e.back.type,t.back[e.back.type+"Options"]=e.back.typeOptions,t.notes=e.notes,delete t.back.typeOptions,t}),a({type:"RESET_DECK",deck:e}))})},[]),Object(n.useEffect)(()=>(clearTimeout(p),p=setTimeout(()=>{i("")},3200),()=>{clearTimeout(p)}),[l]),Object(n.useEffect)(()=>(clearTimeout(E),s.length>0&&(E=setTimeout(()=>{u([])},8e3)),()=>{clearTimeout(E)}),[s.length]),t?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"deck-form-field-group create-input-group"},c.a.createElement("label",{className:"deck-form-title-input-container"},c.a.createElement("div",{className:"deck-form-field-title"},"TITLE"),c.a.createElement("input",{className:"input create-title-input",name:"title",value:t.title,onChange:h})),c.a.createElement("label",{className:"deck-form-desc-input-container"},c.a.createElement("div",{className:"deck-form-field-title"},"DESCRIPTION (OPTIONAL)"),c.a.createElement("textarea",{className:"input create-description-input",name:"description",value:t.description,onChange:h})),c.a.createElement("div",{className:"create-mode-setting"},c.a.createElement("div",{className:"deck-form-field-title"},"STUDY MODE"),c.a.createElement("div",{className:"create-radio-items"},c.a.createElement("label",{className:"radio-container create-radio-container"},c.a.createElement("input",{type:"radio",name:"study-mode",className:"sr-only radio-input create-radio-input",value:"standard",defaultChecked:"standard"===t.studyMode}),c.a.createElement("div",{className:"radio"}),c.a.createElement("span",{className:"radio-label"},"Standard")),c.a.createElement("label",{className:"radio-container create-radio-container"},c.a.createElement("input",{type:"radio",name:"study-mode",className:"sr-only radio-input create-radio-input",value:"leitner",defaultChecked:"leitner"===t.studyMode}),c.a.createElement("div",{className:"radio"}),c.a.createElement("span",{className:"radio-label"},"Leitner system"))))),c.a.createElement("ul",null,t.cards.map((e,t)=>c.a.createElement(y,{key:e.id,index:t,card:e,removeCard:v}))),s.length>0&&c.a.createElement("div",{className:"deck-form-dialog"},c.a.createElement("span",null,"Removed ",s.length," card",s.length>1?"s":""),c.a.createElement("button",{className:"btn btn-text",onClick:function(){clearTimeout(E),u([]),a({type:"RESET_DECK",deck:{...t,cards:t.cards.concat(s)}})}},"UNDO")),c.a.createElement("div",{className:"create-footer"},c.a.createElement("button",{className:"btn",onClick:function(){const e=t.cards[t.cards.length-1],n=f();n.front.textSize=e.front.textSize,n.back.type=e.back.type,"text"===n.back.type?n.back.textOptions.textSize=e.back.textOptions.textSize:"multi"===n.back.type?n.back.multiOptions.layout=e.back.multiOptions.layout:"exact"===n.back.type&&(n.back.exactOptions.caseSensitive=e.back.exactOptions.caseSensitive),a({type:"ADD_CARD",card:n}),requestAnimationFrame(()=>{d.current.scrollIntoView()})},ref:d},"New Card"),l&&c.a.createElement("span",{className:"create-message"},l),c.a.createElement("button",{className:"btn",onClick:function(){if(!t.title)return void i("Title is required");const a=function(e){return e.filter(e=>b(e.front)||N(e.back,!0))}(t.cards);if(function(e){let t=0;for(const{front:a,back:n}of e)b(a)&&N(n)&&(t+=1);if(t!==e.length)i("Please fill in both card sides");else{if(!(t<2))return!0;i("Please fill in at least two cards")}}(a)){const n=document.querySelectorAll(".create-radio-input");t.studyMode=n[0].checked?"standard":"leitner",t.cards=function(e){return e.map(e=>{const t={type:e.back.type,typeOptions:e.back[e.back.type+"Options"]};return"multi"===t.type&&(t.typeOptions.options=e.back.multiOptions.options.filter(({value:e})=>e)),e.back=t,e})}(a),e.history.push("/decks"),Object(m.d)(t)}}},"Create"))):null}t.default=function(e){return c.a.createElement(i,null,c.a.createElement(N,e))}},44:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));a(33);function n(e){const t=[].concat(e);let a=t.length;for(;a;){const e=Math.floor(Math.random()*a);a-=1,[t[a],t[e]]=[t[e],t[a]]}return t}function c(){return Math.random().toString(32).slice(2,10)}},48:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r}));const n=new(a(65).a)("nimus-cards");function c(){return n.decks.toArray().catch(e=>{console.log(e)})}function l(e){return n.decks.get(e)}function i(e){n.decks.put(e).catch(e=>{console.log(e)})}function r(e){n.decks.delete(e).catch(e=>{console.log(e)})}n.version(1).stores({decks:"id"})}}]);