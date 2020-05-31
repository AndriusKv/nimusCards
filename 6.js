(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));let n=JSON.parse(localStorage.getItem("nimus-cards-settings"))||{randomize:{value:!0},cardCount:{value:10},timeoutDuration:{value:""}};function c(){return n}function l(e){n={...n,...e},localStorage.setItem("nimus-cards-settings",JSON.stringify(n))}},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),c=a.n(n),l=a(8),s=(a(111),a(30)),i=a(98),r=a(11),o=a(99);function d({removeDeck:e,cancelRemoval:t}){return c.a.createElement(o.a,null,c.a.createElement("h3",{className:"modal-title"},"Are you sure you want to remove this deck?"),c.a.createElement("div",{className:"deck-dialog-box-btns"},c.a.createElement("button",{className:"btn btn-danger",onClick:e},"Remove"),c.a.createElement("button",{className:"btn btn-text",onClick:t},"Cancel")))}a(112);var m=a(102);var u=function({hide:e}){const[t,a]=Object(n.useState)(Object(m.a)());function l({target:e}){const n=e.getAttribute("data-name"),c={...t[n]};switch(e.type){case"checkbox":c.value=e.checked;break;case"text":c.valid=e.validity.valid,c.value=e.value}a({...t,[n]:c})}return c.a.createElement(o.a,{hide:function(){const a=Object(m.a)(),{cardCount:n,timeoutDuration:c}=t;n.valid&&(a.cardCount.value=parseInt(n.value,10)||0),c.valid&&(a.timeoutDuration.value=parseInt(c.value,10)||0),a.randomize=t.randomize,Object(m.b)(a),e()}},c.a.createElement("h3",{className:"modal-title"},"Settings"),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",{className:"checkbox-container"},c.a.createElement("input",{type:"checkbox",className:"sr-only checkbox-input","data-name":"randomize",onChange:l,checked:t.randomize.value}),c.a.createElement("div",{className:"checkbox deck-settings-checkbox"},c.a.createElement("div",{className:"checkbox-tick"})),c.a.createElement("span",{className:"checkbox-label"},"Randomize cards"))),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",null,c.a.createElement("span",null,"Use"),c.a.createElement("input",{type:"text",className:"input deck-settings-input",inputMode:"numeric","data-name":"cardCount",onChange:l,pattern:"[0-9]*$",value:t.cardCount.value}),c.a.createElement("span",null,"cards per study session"),c.a.createElement("div",{className:"deck-settings-message"},"Please provide a valid whole number."))),c.a.createElement("div",{className:"deck-settings-item"},c.a.createElement("label",null,c.a.createElement("span",null,"Reveal answer after"),c.a.createElement("input",{type:"text",className:"input deck-settings-input",inputMode:"numeric","data-name":"timeoutDuration",onChange:l,pattern:"^0*|0*([5-9][0-9]*|[1-9]+[0-9]+)$",value:t.timeoutDuration.value}),c.a.createElement("span",null,"seconds"),c.a.createElement("div",{className:"deck-settings-message"},"Please provide a valid whole number.",c.a.createElement("br",null)," Minimal accepted value is 5 seconds."))))};a(113);var b=function({children:e}){const[{id:t,visible:a},l]=Object(n.useState)({id:"",visible:!1}),i=Object(n.useCallback)((function({target:e}){const a=e.closest(".dropdown-container");let n=!0;a&&a.id===t&&(n=e.closest(".dropdown-btn"));n&&(o.current&&l({id:t,visible:!1}),window.removeEventListener("click",i))}),[t]),o=Object(n.useRef)(!1);return Object(n.useEffect)(()=>(o.current=!0,l({visible:a,id:Object(s.d)()}),()=>{o.current=!1,window.removeEventListener("click",i)}),[]),c.a.createElement("div",{id:t,className:"dropdown-container"},c.a.createElement("button",{className:"btn btn-icon",onClick:function(){a?window.removeEventListener("click",i):window.addEventListener("click",i),l({id:t,visible:!a})}},c.a.createElement(r.a,{name:"dots-vertical"})),a&&c.a.createElement("div",{className:"dropdown"},e))};function p({deck:e,showDialog:t,exportDeck:a}){return c.a.createElement("li",{className:"deck"},c.a.createElement("div",{className:"deck-info"},c.a.createElement("div",null,c.a.createElement("h2",{className:"deck-title"},e.title),e.description&&c.a.createElement("p",{className:"deck-description"},e.description),c.a.createElement("div",{className:"deck-card-count"},e.cards.length," card",e.cards.length>1&&"s")),c.a.createElement(b,null,c.a.createElement(l.b,{to:"/decks/"+e.id,className:"btn btn-icon dropdown-btn"},c.a.createElement(r.a,{name:"list"}),c.a.createElement("span",null,"Status")),c.a.createElement(l.b,{to:`/decks/${e.id}/edit`,className:"btn btn-icon dropdown-btn"},c.a.createElement(r.a,{name:"edit"}),c.a.createElement("span",null,"Edit")),c.a.createElement("button",{className:"btn btn-icon dropdown-btn",onClick:()=>a(e)},c.a.createElement(r.a,{name:"export"}),c.a.createElement("span",null,"Export")),c.a.createElement("button",{className:"btn btn-icon dropdown-btn",onClick:()=>t(e)},c.a.createElement(r.a,{name:"remove"}),c.a.createElement("span",null,"Remove")))),c.a.createElement("div",{className:"deck-btn-container"},e.hasCardsToLearn?c.a.createElement(l.b,{to:`/decks/${e.id}/learn`,className:"btn btn-text deck-btn"},"Learn"):c.a.createElement("span",{className:"btn btn-text deck-btn disabled"},"Learn"),e.hasCardsToReview?c.a.createElement(l.b,{to:`/decks/${e.id}/review`,className:"btn btn-text deck-btn"},"Review"):c.a.createElement("span",{className:"btn btn-text deck-btn disabled"},"Review"),c.a.createElement(l.b,{to:`/decks/${e.id}/practice`,className:"btn btn-text deck-btn"},"Practice")))}t.default=function(){const[e,t]=Object(n.useState)([]),[o,m]=Object(n.useState)({visible:!1}),[b,v]=Object(n.useState)(!1),[E,k]=Object(n.useState)(!0);function f(e){m({visible:!0,deck:e})}function h(){m({visible:!1,deck:null})}async function N(e){const[{saveAs:t},{default:n}]=await Promise.all([a.e(9).then(a.t.bind(null,145,7)),a.e(2).then(a.t.bind(null,146,7))]),c=new n,l=c.folder(e.title);l.file("metadata.json",JSON.stringify({title:e.title,description:e.description},null,2)),e.cards.forEach((e,t)=>{const a=e.front.attachment;let n=void 0;a&&(a.blob?(n={type:a.type,description:a.description,mimeType:a.blob.type,blobName:a.blob.name},l.file(a.blob.name,new Blob([a.blob],{type:a.blob.type}))):n=a),l.file(t+".json",JSON.stringify({...e,front:{...e.front,attachment:n}},null,2))});t(await c.generateAsync({type:"blob"}),e.title+".zip")}return Object(n.useEffect)(()=>{Object(i.c)().then(e=>{t(e.map(e=>(e.hasCardsToLearn=!!Object(s.b)(e.cards).length,e.hasCardsToReview=!!Object(s.c)(e.cards).length,e))),k(!1),Object(s.e)("Your decks")})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"decks-header"},c.a.createElement("h1",{className:"decks-title"},"Your Decks"),c.a.createElement(l.b,{to:"/decks/create",className:"btn deck-create-link"},"Create")),c.a.createElement("div",{className:"decks-top-bar"},c.a.createElement("label",{className:"btn btn-icon decks-top-bar-item deck-import-input-container"},c.a.createElement(r.a,{name:"import"}),c.a.createElement("span",null,"Import"),c.a.createElement("input",{type:"file",className:"sr-only",onChange:async function({target:n}){const[c]=n.files,{default:l}=await a.e(2).then(a.t.bind(null,146,7)),r=await l.loadAsync(c),o={id:Object(s.d)(),title:"",description:"",createdAt:new Date,cards:[]};for(const[e,t]of Object.entries(r.files))if(e.endsWith("/metadata.json")){const e=JSON.parse(await t.async("string"));Object.assign(o,e)}else if(e.endsWith(".json")){const e=JSON.parse(await t.async("string")),a=e.front.attachment;if(e.id=Object(s.d)(),a&&a.blobName){const{blobName:e}=a,t=r.files[`${o.title}/${e}`];a.blob=new File([await t.async("blob")],e,{type:a.mimeType}),delete a.blobName,delete a.mimeType}o.cards.push(e)}t([...e,o]),Object(i.d)(o),n.value=""}})),c.a.createElement("button",{className:"btn btn-icon decks-top-bar-item",onClick:function(){v(!0)}},c.a.createElement(r.a,{name:"settings"}),c.a.createElement("span",null,"Settings"))),E?"":e.length?c.a.createElement("ul",null,function(e){return e.map(e=>c.a.createElement(p,{key:e.id,deck:e,showDialog:f,exportDeck:N}))}(e)):c.a.createElement("h2",{className:"deck-list-message"},"You have no decks"),o.visible&&c.a.createElement(d,{removeDeck:function(){const a=function(e,t){return e.findIndex(({id:e})=>e===t)}(e,o.deck.id);e.splice(a,1),t([...e]),Object(i.a)(o.deck.id),h()},cancelRemoval:h}),b&&c.a.createElement(u,{hide:function(){v(!1)}}))}},98:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return i}));const n=new(a(101).a)("nimus-cards");function c(){return n.decks.toArray().then(r).catch(e=>{console.log(e)})}function l(e){return n.decks.get(e)}function s(e){n.decks.put(e).catch(e=>{console.log(e)})}function i(e){n.decks.delete(e).catch(e=>{console.log(e)})}function r(e){return e.sort((e,t)=>{const a=new Date(e.createdAt||0),n=new Date(t.createdAt||0);return a<n?1:a>n?-1:0})}n.version(1).stores({decks:"id"})},99:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(100);t.a=function({className:e,hide:t,children:a}){const l=Object(n.useCallback)((function({key:e}){"Escape"===e&&t()}),[]);return Object(n.useEffect)(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[]),c.a.createElement("div",{className:"modal-mask",onClick:function({target:e,currentTarget:a}){e===a&&t()}},c.a.createElement("div",{className:"modal"+(e?" "+e:"")},a))}}}]);