!function(e){function t(t){for(var n,l,r=t[0],i=t[1],o=t[2],d=0,u=[];d<r.length;d++)l=r[d],s[l]&&u.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(m&&m(t);u.length;)u.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={0:0},c=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var m=i;c.push([146,1]),a()}({146:function(e,t,a){"use strict";a.r(t);a(91),a(92),a(93);var n=a(0),s=a.n(n),c=a(87),l=a(5),r=a(19);function i(e){let t=e.name,a=e.title,n=e.className;return s.a.createElement("svg",{viewBox:"0 0 24 24",className:n},a&&s.a.createElement("title",null,a),s.a.createElement("path",{d:{cards:"M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,\n            8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,\n            18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,\n            2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,\n            7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18, 2.9 17.35,2.9 16.96,\n            3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",remove:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",media:"M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,\n            17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,\n            11.47L8.5,15H19.5L15.96,10.29Z",responsive:"M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,\n            1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,\n            22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,\n            21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,\n            0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z",offline:"M2.28,3L1,4.27L2.47,5.74C2.04,6 1.61,6.29 1.2,6.6L3,9C3.53,8.6 4.08,8.25 4.66,\n            7.93L6.89,10.16C6.15,10.5 5.44,10.91 4.8,11.4L6.6,13.8C7.38,13.22 8.26,12.77 9.2,\n            12.47L11.75,15C10.5,15.07 9.34,15.5 8.4,16.2L12,21L14.46,17.73L17.74,21L19,19.72M12,\n            3C9.85,3 7.8,3.38 5.9,4.07L8.29,6.47C9.5,6.16 10.72,6 12,6C15.38,6 18.5,7.11 21,\n            9L22.8,6.6C19.79,4.34 16.06,3 12,3M12,9C11.62,9 11.25,9 10.88,9.05L14.07,12.25C15.29,\n            12.53 16.43,13.07 17.4,13.8L19.2,11.4C17.2,9.89 14.7,9 12,9Z",image:"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,\n            5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",audio:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,\n            2.89 4.89,2 6,2M9,16A2,2 0 0,0 7,18A2,2 0 0,0 9,20A2,2 0 0,0 11,18V13H14V11H10V16.27C9.71,\n            16.1 9.36,16 9,16Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",flip:"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z",text:"M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z",list:"M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z",addListItem:"M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z"}[t]}))}a(106),a(22);const o=new(a(90).a)("nimus-cards-decks");function m(){return o.decks.toArray().catch(e=>{console.log(e)})}function d(e){let t=e.deckTitle,a=e.removeDeck,n=e.cancelRemoval;return s.a.createElement("div",{className:"mask"},s.a.createElement("div",{className:"modal deck-dialog-box"},s.a.createElement("h3",{className:"deck-dialog-box-title"},"Are you sure you want to remove ",s.a.createElement("b",null,t)," deck?"),s.a.createElement("div",{className:"deck-dialog-box-btns"},s.a.createElement("button",{className:"btn-danger",onClick:a},"Remove"),s.a.createElement("button",{className:"btn-icon",onClick:n},"Cancel"))))}o.version(1).stores({decks:"++_id"});a(80);function u(e){let t=e.deck,a=e.showDialog,n=e.editDeck;return s.a.createElement("li",{className:"deck"},s.a.createElement(l.b,{to:"/decks/"+t.id,className:"deck-title"},t.title),t.description&&s.a.createElement("p",{className:"deck-description"},t.description),s.a.createElement("div",{className:"deck-card-count"},t.cards.length," card",t.cards.length>1&&"s"),s.a.createElement("div",{className:"deck-btn-container"},s.a.createElement("button",{className:"btn-icon deck-btn",title:"Edit",onClick:function(){n(t)}},s.a.createElement(i,{name:"edit"}),s.a.createElement("span",null,"Edit")),s.a.createElement("button",{className:"btn-icon deck-btn",title:"Remove",onClick:function(){a(t)}},s.a.createElement(i,{name:"remove"}),s.a.createElement("span",null,"Remove"))))}a(81),a(130);function p(e){const t=[].concat(e);let a=t.length;for(;a;){const e=Math.floor(Math.random()*a);a-=1;var n=[t[e],t[a]];t[a]=n[0],t[e]=n[1]}return t}function E(){return Math.random().toString(32).slice(2,10)}const h=Object(n.createContext)(null);function v(e){let t=e.children;const a=Object(n.useReducer)(f,{title:"",description:"",cards:[]}),c=a[0],l=a[1];return s.a.createElement(h.Provider,{value:{state:c,dispatch:l}},t)}function f(e,t){const a=e.cards[t.index];switch(t.type){case"RESET_DECK":return Object.assign({},t.deck);case"UPDATE_DECK":return Object.assign({},e,{[t.name]:t.value});case"ADD_CARD":return Object.assign({},e,{cards:[...e.cards,t.card]});case"REMOVE_CARD":return e.cards.splice(t.index,1),Object.assign({},e);case"UPDATE_SIDE_VALUE":return a[t.side][t.key]=t.value,Object.assign({},e);case"ADD_ATTACHMENT":return a.front.attachment=t.attachment,Object.assign({},e);case"REMOVE_ATTACHMENT":return delete a.front.attachment,Object.assign({},e);case"CHANGE_ANSWER_TYPE":return a.back.type=t.answerType,Object.assign({},e);case"ADD_OPTION":return a.back.options.push({id:E()}),Object.assign({},e);case"REMOVE_OPTION":return a.back.correct=0,a.back.options.splice(t.optionIndex,1),Object.assign({},e);case"CHANGE_CORRECT_ANSWER":return a.back.correct=t.optionIndex,Object.assign({},e);case"UPDATE_OPTION_TEXT":return a.back.options[t.optionIndex].text=t.value,Object.assign({},e);default:return e}}function b(e){let t=e.textSize,a=e.handleChange;return s.a.createElement("select",{className:"input create-side-select",title:"Text size",defaultValue:t,onChange:a},s.a.createElement("option",{value:"16"},"16px"),s.a.createElement("option",{value:"24"},"24px"),s.a.createElement("option",{value:"36"},"36px"),s.a.createElement("option",{value:"48"},"48px"))}a(131),a(132);function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class g extends s.a.Component{constructor(e){super(e),N(this,"hide",()=>{this.props.hide()}),N(this,"handleFileUpload",e=>{let t=e.target;const a=this.props.type,n=t.files[0];t.value="",n.type.split("/")[0]!==a?this.showMessage("File is not an "+a):this.props.addAttachment(n,a)}),N(this,"handleFileUploadFormURL",e=>{const t=e.target.elements.url.value.trim(),a=this.props.type;if(e.preventDefault(),t){if("image"===a){const e=new Image;e.onload=(()=>{this.props.addAttachment(t,a)}),e.onerror=(e=>{this.showMessage("URL doesn't contain "+a+" file"),console.log(e)}),e.src=t}else if("audio"===a){const e=new Audio(t);e.onloadedmetadata=(()=>{this.props.addAttachment(t,a)}),e.onerror=(e=>{this.showMessage("URL doesn't contain "+a+" file"),console.log(e)})}}else this.showMessage("Please specify valid url")}),this.state={message:""}}showMessage(e){this.setState({message:e}),setTimeout(()=>{this.setState({message:""})},3200)}render(){const e=this.props.type,t=this.state.message;return s.a.createElement("div",{className:"mask"},s.a.createElement("div",{className:"modal upload-panel"},s.a.createElement("div",{className:"upload-panel-device-target"},s.a.createElement("div",{className:"upload-panel-device-target-title"},"Select ",e," file from device"),s.a.createElement("label",{className:"btn",tabIndex:"0"},s.a.createElement("span",null,"Select"),s.a.createElement("input",{type:"file",className:"file-input",onChange:this.handleFileUpload}))),s.a.createElement("div",{className:"upload-panel-item-separator"},"Or"),s.a.createElement("div",{className:"upload-panel-url-target"},s.a.createElement("div",{className:"upload-panel-url-target-title"},"Upload ",e," from url"),s.a.createElement("form",{onSubmit:this.handleFileUploadFormURL},s.a.createElement("input",{type:"text",name:"url",className:"input upload-panel-url-target-input"}),s.a.createElement("button",{className:"btn"},"Upload"))),s.a.createElement("div",{className:"upload-panel-footer"},t&&s.a.createElement("div",{className:"upload-panel-message"},t),s.a.createElement("button",{type:"button",className:"btn-secondary",onClick:this.hide},"Cancel"))))}}a(85);function k(e){let t=e.file,a=e.type;const n="string"==typeof t?t:URL.createObjectURL(t);return"image"===a?s.a.createElement("img",{src:n,alt:"",className:"side-image"}):"audio"===a?s.a.createElement("audio",{src:n,className:"side-audio",controls:!0}):null}function y(e){let t=e.index,a=e.side,c=e.handleChange;const l=Object(n.useContext)(h).dispatch,r=Object(n.useState)({type:"",visible:!1}),o=r[0],m=r[1],d=a.text,u=a.textSize,p=a.attachment;function E(){l({type:"REMOVE_ATTACHMENT",index:t})}function v(){m({visible:!1,type:""})}return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"side-container"},s.a.createElement("div",{className:"create-side-name"},"FRONT"),s.a.createElement("div",{className:"side"},s.a.createElement("div",{className:"create-side-toolbar"},["image","audio"].map((e,t)=>s.a.createElement("button",{key:t,className:"btn-icon toolbar-btn",title:"Upload "+e,onClick:()=>(function(e){m({visible:!0,type:e})})(e)},s.a.createElement(i,{name:e}))),s.a.createElement(b,{textSize:u,handleChange:e=>c(e,"front","textSize")})),s.a.createElement("div",{className:"side-content create-side-content"},p&&s.a.createElement("div",{className:"side-panel-container"},s.a.createElement("button",{type:"button",className:"btn-icon create-side-panel-btn",onClick:E,title:"Remove attachment"},s.a.createElement(i,{name:"remove"})),s.a.createElement(k,p)),s.a.createElement("textarea",{className:"input create-side-text-input side-text",value:d,style:{fontSize:u+"px"},onChange:e=>c(e,"front","text")})))),o.visible&&s.a.createElement(g,{type:o.type,hide:v,addAttachment:function(e,a){l({type:"ADD_ATTACHMENT",index:t,attachment:{file:e,type:a}}),v()}}))}function x(e){let t=e.index,a=e.handleChange;const c=Object(n.useContext)(h),l=c.state,r=c.dispatch,o=l.cards[t],m=o.back,d=o.id,u=m.type,p=m.text,E=m.textSize,v=m.options,f=m.correct;function N(e,a){r({type:"REMOVE_OPTION",index:t,optionIndex:e,id:a})}function g(e){r({type:"CHANGE_CORRECT_ANSWER",index:t,optionIndex:e})}function k(e){let a=e.target;const n=a.name,s=a.value;s!==m.options[n].text&&r({type:"UPDATE_OPTION_TEXT",optionIndex:parseInt(n,10),index:t,value:s})}return s.a.createElement("div",{className:"side-container"},s.a.createElement("div",{className:"create-side-name"},"BACK"),s.a.createElement("div",{className:"side"},s.a.createElement("div",{className:"create-side-toolbar"},s.a.createElement("ul",{className:"create-side-types",onChange:function(e){let a=e.target;r({type:"CHANGE_ANSWER_TYPE",answerType:a.value,index:t})}},s.a.createElement("li",{className:"create-side-type"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",className:"radio-input",value:"text",name:"type-"+d,defaultChecked:"text"===u}),s.a.createElement(i,{name:"text",title:"Text",className:"create-option-type-icon"}))),s.a.createElement("li",{className:"create-side-type"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",className:"radio-input",value:"multi",name:"type-"+d,defaultChecked:"multi"===u}),s.a.createElement(i,{name:"list",title:"Multiple choice",className:"create-option-type-icon"})))),"text"===u&&s.a.createElement(b,{textSize:E,handleChange:e=>a(e,"back","textSize")}),"multi"===u&&s.a.createElement("button",{className:"btn-icon",onClick:function(){r({type:"ADD_OPTION",index:t})},title:"Add option"},s.a.createElement(i,{name:"addListItem"}))),s.a.createElement("div",{className:"side-content create-side-content"},function(e){return"text"===e?s.a.createElement("textarea",{className:"input create-side-text-input side-text",value:p,style:{fontSize:E+"px"},onChange:e=>a(e,"back","text")}):s.a.createElement("ul",null,v.map((e,t)=>{let a=e.text,n=e.id;return s.a.createElement("li",{className:"create-option",key:n},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",className:"radio-input",name:d,checked:f===t,onChange:()=>g(t)}),s.a.createElement("div",{className:"radio create-option-radio",title:"Mark answer as correct"})),s.a.createElement("input",{type:"text",className:"input create-option-input",name:t,defaultValue:a,autoComplete:"off",onChange:k}),s.a.createElement("button",{className:"btn-icon",title:"Remove answer",onClick:()=>N(t,n)},s.a.createElement(i,{name:"remove"})))}))}(u))))}function C(e){let t=e.index,a=e.card;const c=Object(n.useContext)(h),l=c.state,r=c.dispatch;function o(e,n,s){const c=e.target.value;c!==a[n][s]&&r({type:"UPDATE_SIDE_VALUE",index:t,side:n,key:s,value:c})}return s.a.createElement("li",{className:"create-list-item"},s.a.createElement("div",{className:"create-card-index"},t+1,"."),s.a.createElement("div",{className:"create-input-group create-card"},s.a.createElement(y,{index:t,side:a.front,handleChange:o}),s.a.createElement(x,{index:t,handleChange:o})),s.a.createElement("div",{className:"create-card-btns"},l.cards.length>1&&s.a.createElement("button",{className:"btn-icon",title:"Remove card",onClick:function(){r({type:"REMOVE_CARD",index:t})}},s.a.createElement(i,{name:"remove"}))))}function L(e){const t=Object(n.useContext)(h),a=t.state,c=t.dispatch,l=Object(n.useState)(""),r=l[0],i=l[1];let o=0;function d(e){return void 0===e&&(e={}),Object.assign({id:E(),title:"",description:"",cards:[u()]},e)}function u(){return{id:E(),front:{text:"",textSize:16},back:{type:"text",text:"",textSize:16,correct:0,options:[{id:E()},{id:E()}]}}}function p(e){if("text"===e.type)return e.text.length>0;return e.options.reduce((e,t)=>{return t.text&&(e+=1),e},0)>1}function v(e){let t=e.target;const a=t.name,n=t.value;c({type:"UPDATE_DECK",name:a,value:n})}return Object(n.useEffect)(()=>(clearTimeout(o),o=setTimeout(()=>{i("")},3200),()=>{clearTimeout(o)}),[r]),Object(n.useEffect)(()=>{const t=e.match.params.id;t&&!e.location.state?m().then(e=>{const a=function(e,t){return e.find(e=>{let a=e.id;return a===t})}(e,t);a&&c({type:"RESET_DECK",deck:a})}):c({type:"RESET_DECK",deck:d(e.location.state)})},[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"create-input-group"},s.a.createElement("label",{className:"create-input-label"},s.a.createElement("div",{className:"create-side-name"},"TITLE"),s.a.createElement("input",{className:"input create-title-input",name:"title",value:a.title,onChange:v})),s.a.createElement("label",{className:"create-input-label"},s.a.createElement("div",{className:"create-side-name"},"DESCRIPTION (OPTIONAL)"),s.a.createElement("textarea",{className:"input side-text create-description-input",name:"description",value:a.description,onChange:v}))),s.a.createElement("ul",null,a.cards.map((e,t)=>s.a.createElement(C,{key:e.id,index:t,card:e}))),s.a.createElement("div",{className:"container-footer create-footer"},s.a.createElement("button",{className:"btn",onClick:function(){const e=a.cards[a.cards.length-1],t=u();e&&(t.front.textSize=e.front.textSize,t.back.textSize=e.back.textSize,t.back.type=e.back.type),c({type:"ADD_CARD",card:t})}},"New Card"),r&&s.a.createElement("span",{className:"create-message"},r),s.a.createElement("button",{className:"btn",onClick:function(){if(!a.title)return void i("Title is required");(function(e){let t=0;for(const n of e){const e=n.front,s=n.back;((a=e).text||a.attachment)&&p(s)&&(t+=1)}var a;if(t!==e.length)i("Please fill in both card sides");else{if(!(t<2))return!0;i("Please fill in at least two cards")}})(a.cards)&&(a.cards=a.cards.map(e=>("text"===e.back.type?(e.back.correct=0,e.back.options=e.back.options.slice(0,2).map(e=>(e.text="",e))):(e.back.text="",e.back.options=e.back.options.filter(e=>e.text)),e)),e.history.push({pathname:"/decks",state:a}))}},"Create")))}function A(e){return s.a.createElement(v,null,s.a.createElement(L,e))}a(142),a(145);let M=JSON.parse(localStorage.getItem("nimus-cards-settings"))||{studyMode:{value:"standard"},randomize:{value:!0},cardCount:{value:""},timeoutDuration:{value:""}};function H(){return M}function O(e){let t=e.score,a=e.name;const n={width:(t.total?t[a]/t.total*100:50)+"%"};return s.a.createElement("div",{className:"score-bar score-"+a+"-bar",style:n},t[a])}function V(e){let t=e.score,a=e.mode;return s.a.createElement("div",{className:"study-header"},"standard"===a?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"study-score-bar-name-container"},s.a.createElement("span",null,"Right"),s.a.createElement("span",null,"Wrong")),s.a.createElement("div",{className:"study-score-bar-container"},s.a.createElement(O,{score:t,name:"right"}),s.a.createElement(O,{score:t,name:"wrong"}))):s.a.createElement("div",{className:"study-score-table"},s.a.createElement("div",{className:"study-score-table-cell"},s.a.createElement("div",{className:"study-score-table-cell-name"},"Level"),s.a.createElement("div",null,"Cards")),t.levels.map((e,a)=>s.a.createElement("div",{className:"study-score-table-cell"+(t.currentLevel===a?" active":""),key:a},s.a.createElement("div",{className:"study-score-table-cell-name"},4===a?"Learned":a+1),s.a.createElement("div",null,e.length)))))}function S(e){let t=e.score,a=e.mode,n=e.notLastSession,c=e.initNextLevel,r=e.initNextSession;const i=t.session;return s.a.createElement("div",{className:"deck-score-container"},s.a.createElement("h3",{className:"deck-score-title"},"Session Results"),s.a.createElement("div",{className:"deck-score-in-percent"},Math.round(i.right/i.total*100),"%"),s.a.createElement("div",{className:"deck-score-bars"},s.a.createElement("div",{className:"deck-score-bar-container"},s.a.createElement("span",{className:"deck-score-bar-name"},"Right"),s.a.createElement("div",{className:"deck-score-bar"},s.a.createElement(O,{score:i,name:"right"}))),s.a.createElement("div",{className:"deck-score-bar-container"},s.a.createElement("span",{className:"deck-score-bar-name"},"Wrong"),s.a.createElement("div",{className:"deck-score-bar"},s.a.createElement(O,{score:i,name:"wrong"})))),s.a.createElement("div",{className:"deck-score-btn-container"},t.isLast?n&&s.a.createElement("button",{className:"btn deck-score-btn",onClick:r},"Next Session"):s.a.createElement("button",{className:"btn deck-score-btn",onClick:c},"standard"===a?"Next Round":function(){let e=t.currentLevel+1;return t.wrong?e-=e>1?1:0:e+=1,"Continue to Level "+e}()),s.a.createElement(l.b,{to:"/decks",className:"btn"},"Close")))}function w(e){let t=e.side;const a=Object(n.useState)({}),c=a[0],l=c.imageExpanded,r=c.imageSrc,i=a[1],o=t.attachment,m=t.text,d=t.textSize;return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"side-container"},s.a.createElement("div",{className:"side"},s.a.createElement("div",{className:"study-side-content"},o&&s.a.createElement("div",{className:"side-panel-container"+(m?"":" full"),onClick:function(){const e=o.file;"image"===o.type&&i({imageExpanded:!0,imageSrc:"string"==typeof e?e:URL.createObjectURL(e)})}},s.a.createElement(k,o)),m&&s.a.createElement("div",{className:"side-text study-side-text"},s.a.createElement("div",{style:{fontSize:d+"px"}},m))))),l&&s.a.createElement("div",{className:"mask",onClick:function(){i({imageExpanded:!1})}},s.a.createElement("img",{src:r,className:"study-expaned-image",alt:""})))}function T(e){let t=e.card,a=e.selectOption;const n=t.id,c=t.back,l=t.answerRevealed,r=c.text,i=c.textSize,o=c.type,m=c.options,d=c.correct;return s.a.createElement("div",{className:"side-container"},s.a.createElement("div",{className:"side"},s.a.createElement("div",{className:"study-side-content"},"text"===o?s.a.createElement("div",{className:"side-text study-side-text"},s.a.createElement("div",{style:{fontSize:i+"px"}},r)):s.a.createElement("ul",{onChange:a,className:"study-options "+(l?"revealed":"")},m.map((e,t)=>{let a=e.text;return s.a.createElement("li",{key:t,className:l&&d===t?"study-option-correct":""},s.a.createElement("label",{className:"study-option-radio-container"},s.a.createElement("input",{type:"radio",className:"radio-input",name:n,disabled:l,"data-index":t,defaultChecked:0===t}),s.a.createElement("div",{className:"radio study-option-radio",title:l?"":"Mark answer as correct"}),s.a.createElement("span",null,a)))})))))}function R(e){let t=e.card,a=e.selectOption;return s.a.createElement("div",{className:"study-card "+t.back.type},"multi"===t.back.type?s.a.createElement(s.a.Fragment,null,s.a.createElement(w,{side:t.front}),s.a.createElement(T,{card:t,selectOption:a})):t.answerRevealed?s.a.createElement(T,{card:t,selectOption:a}):s.a.createElement(w,{side:t.front}))}class j extends s.a.Component{constructor(e){super(e),this.state={duration:e.duration},this.timeoutId=0}componentDidMount(){this.runTimer(performance.now(),0)}componentWillUnmount(){clearTimeout(this.timeoutId)}getSeconds(e){const t=e%60;return t<10?"0"+t:t}getMinutes(e){const t=Math.floor(e/60%60);return e>=3600&&t<10?"0"+t:t}getHours(e){return Math.floor(e/3600)}formatDuration(e){const t=this.getSeconds(e),a=this.getMinutes(e),n=this.getHours(e);return(n?n+":":"")+a+":"+t}runTimer(e,t){const a=performance.now()-e-t;this.timeoutId=setTimeout(()=>{this.update(e,t+1e3)},1e3-a)}update(e,t){const a=this.state.duration-1;if(a<1)return this.setState({duration:a}),void this.props.callback();this.setState({duration:a},()=>{this.runTimer(e,t)})}render(){const e=this.formatDuration(this.state.duration);return s.a.createElement("div",{className:"study-timer"},e)}}function D(e,t){return Object.assign({},e,t)}Object(c.render)(s.a.createElement(l.a,null,s.a.createElement(function(){return s.a.createElement("header",{className:"header"},s.a.createElement("nav",{className:"header-nav"},s.a.createElement(l.b,{to:"/",className:"header-logo-link"},s.a.createElement(i,{name:"cards",className:"header-logo-icon"}),s.a.createElement("span",null,"NimusCards")),s.a.createElement("ul",{className:"header-nav-items"},s.a.createElement("li",{className:"header-nav-item"},s.a.createElement(l.c,{to:"/decks/create",className:"header-link",activeClassName:"active"},"Create")),s.a.createElement("li",{className:"header-nav-item"},s.a.createElement(l.c,{to:"/decks",exact:!0,className:"header-link",activeClassName:"active"},"Decks")),s.a.createElement("li",{className:"header-nav-item"},s.a.createElement(l.c,{to:"/settings",className:"header-link",activeClassName:"active"},"Settings")))))},null),s.a.createElement("main",{className:"main"},s.a.createElement(r.c,null,s.a.createElement(r.a,{path:"/",exact:!0,component:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"home-hero"},s.a.createElement("h1",{className:"home-hero-title"},"NimusCards"),s.a.createElement("p",{className:"home-hero-desc"},"Simple learning with flashcards."),s.a.createElement(l.b,{to:"/decks/create",className:"btn home-hero-btn"},"Get Started")),s.a.createElement("h2",{className:"home-features-title"},"Features"),s.a.createElement("ul",{className:"home-features"},s.a.createElement("li",{className:"home-feature"},s.a.createElement(i,{name:"media",className:"home-icon"}),s.a.createElement("h3",{className:"home-feature-title"},"Media-Rich"),s.a.createElement("p",null,"Easily add images and sounds to your flashcards.")),s.a.createElement("li",{className:"home-feature"},s.a.createElement(i,{name:"responsive",className:"home-icon"}),s.a.createElement("h3",{className:"home-feature-title"},"Responsive"),s.a.createElement("p",null,"Responsive web design makes user experience consistent across multiple devices.")),s.a.createElement("li",{className:"home-feature"},s.a.createElement(i,{name:"offline",className:"home-icon"}),s.a.createElement("h3",{className:"home-feature-title"},"Works Offline"),s.a.createElement("p",null,"Even without connection, you can still use NimusCards."))))}}),s.a.createElement(r.a,{path:"/decks",exact:!0,component:function(e){const t=Object(n.useState)([]),a=t[0],c=t[1],r=Object(n.useState)({visible:!1}),i=r[0],p=r[1],E=Object(n.useState)(!0),h=E[0],v=E[1];function f(e,t){return e.findIndex(e=>e.id===t)}function b(t){e.history.push({pathname:"/decks/"+t.id+"/edit",state:t})}function N(e){p({visible:!0,deck:e})}function g(){p({visible:!1,deck:null})}return Object(n.useEffect)(()=>{(async function(e){const t=await m();if(e){const n=f(t,e.id);-1===n?t.push(e):t.splice(n,1,e),a=e,o.decks.put(a).catch(e=>{console.log(e)})}var a;return t})(e.location.state).then(e=>{c(e),v(!1)})},[]),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"component-header deck-list-header"},s.a.createElement("h1",{className:"deck-list-title"},"Your Decks"),s.a.createElement(l.b,{to:"/decks/create",className:"btn deck-list-btn"},"Create")),h?"":a.length?s.a.createElement("ul",null,function(e){return e.map(e=>s.a.createElement(u,{key:e.id,deck:e,showDialog:N,editDeck:b}))}(a)):s.a.createElement("h2",{className:"deck-list-message"},"You have no decks"),i.visible&&s.a.createElement(d,{deckTitle:i.deck.title,removeDeck:function(){const e=f(a,i.deck.id);var t;a.splice(e,1),c([...a]),t=i.deck._id,o.decks.delete(t).catch(e=>{console.log(e)}),g()},cancelRemoval:g}))}}),s.a.createElement(r.a,{path:"/decks/create",component:A,key:"create"}),s.a.createElement(r.a,{path:"/decks/:id",exact:!0,component:function(e){const t=Object(n.useReducer)(D,{cards:[],initialSessionCards:[]}),a=t[0],c=t[1],l=a.cards,r=a.card,i=a.score,o=a.initialSessionCards,d=a.title,u=H();function E(e){const t=v({currentLevel:0,session:v()});if("standard"===u.studyMode.value)t.incorrectIds=[];else{const a=e.map(e=>e.id);t.levels=[a,[],[],[],[]]}return t}function h(e,t){void 0===t&&(t=0);const a=e[t];return{index:t,id:a.id,front:a.front,back:a.back,answerRevealed:!1}}function v(e){return void 0===e&&(e={}),Object.assign({},e,{right:0,wrong:0,total:0})}function f(e,t){e?t.right+=1:t.wrong+=1,t.total=t.right+t.wrong}function b(e){return f(e,i),f(e,i.session),"standard"===u.studyMode.value?function(e,t){return e||t.incorrectIds.push(r.id),t.isLast=t.right===t.total,t}(e,i):function(e,t){let a=t.currentLevel;if(e)a+=1;else{if(!a)return t;a-=1}const n=t.levels[t.currentLevel],s=n.findIndex(e=>e===r.id),c=n.splice(s,1)[0];return t.levels[a].push(c),t.isLast=t.levels[4].length===o.length,t}(e,i)}function N(e,t){return e.filter(e=>t.includes(e.id))}function g(e){const t=u.randomize.value?p(e):e;c({score:v(i),card:h(t),cards:t,wasLastCard:!1})}function k(){let e=i;r.answerRevealed=!0,"multi"===r.back.type&&(e=b(r.back.correct===a.selectedOption)),c({card:r,score:e})}function y(e){const t=r.index+1,n=t===l.length;let s=null,o=i,m=a.currentSession;"boolean"==typeof e&&(o=b(e)),n?o.isLast&&(m+=1):s=h(l,t),c({wasLastCard:n,currentSession:m,score:o,card:s})}return Object(n.useEffect)(()=>{m().then(t=>{const a=e.match.params.id,n=t.find(e=>e.id===a);n?function(e){let t=e.title,a=e.cards;const n=u.cardCount.value,s=u.randomize.value?p(a):a;let l=s,r=-1;n&&(r=Math.ceil(a.length/n),l=s.slice(0,n)),c({currentSession:0,numberOfSessions:r,title:t,initialCards:s,initialSessionCards:l,cards:[...l],card:h(l),score:E(l)})}(n):e.history.replace("/decks")})},[]),l.length?s.a.createElement(n.Fragment,null,s.a.createElement("h1",{className:"component-header study-deck-title"},s.a.createElement("div",{className:"study-progress",style:{transform:"scaleX("+(r?r.index/l.length:1)+")"}}),s.a.createElement("span",null,d)),a.wasLastCard?s.a.createElement(S,{score:i,mode:u.studyMode.value,initNextLevel:function(){"standard"===u.studyMode.value?function(){const e=N(l,i.incorrectIds);i.currentLevel+=1,i.incorrectIds.length=0,g(e)}():function(){const e=i.levels,t=e.findIndex(e=>e.length),a=N(o,e[t]);i.currentLevel=t,g(a)}()},notLastSession:a.numberOfSessions-a.currentSession>0,initNextSession:function(){const e=u.cardCount.value,t=e*a.currentSession;g(a.initialCards.slice(t,t+e))}}):s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"study-container"},s.a.createElement(V,{score:i,mode:u.studyMode.value}),s.a.createElement(R,{card:r,selectOption:function(e){let t=e.target;c({selectedOption:parseInt(t.getAttribute("data-index"),10)})}})),s.a.createElement("div",{className:"container-footer study-footer"},r.answerRevealed?"text"===r.back.type?s.a.createElement(n.Fragment,null,s.a.createElement("button",{className:"btn-danger study-footer-btn",onClick:()=>y(!1)},"I Was Wrong"),s.a.createElement("button",{className:"btn-success study-footer-btn",onClick:()=>y(!0)},"I Got It Right")):s.a.createElement("button",{className:"btn",onClick:y},"Next"):s.a.createElement(n.Fragment,null,u.timeoutDuration.value>0&&s.a.createElement(j,{duration:u.timeoutDuration.value,callback:k}),s.a.createElement("button",{className:"btn",onClick:k},"Reveal"))))):null}}),s.a.createElement(r.a,{path:"/decks/:id/edit",component:A,key:"edit"}),s.a.createElement(r.a,{path:"/settings",component:function(){const e=Object(n.useState)(H()),t=e[0],a=e[1];return Object(n.useEffect)(()=>{!function(e){M=Object.assign({},M,e),localStorage.setItem("nimus-cards-settings",JSON.stringify(M))}(t)},[t]),s.a.createElement("div",{onChange:function(e){let n=e.target;const s=n.getAttribute("data-name"),c=t[s];switch(n.type){case"checkbox":c.value=n.checked;break;case"text":c.value=n.validity.valid&&parseInt(n.value,10)||0;break;case"radio":c.value=n.getAttribute("data-study-mode")}a(Object.assign({},t,{[s]:c}))}},s.a.createElement("div",{className:"settings-item"},s.a.createElement("div",{className:"settings-item-title"},"Study mode"),s.a.createElement("label",{className:"settings-label settings-radio-label"},s.a.createElement("input",{type:"radio",name:"study-mode",className:"radio-input","data-name":"studyMode","data-study-mode":"standard",defaultChecked:"standard"===t.studyMode.value}),s.a.createElement("div",{className:"radio settings-radio"}),s.a.createElement("span",null,"Standard")),s.a.createElement("label",{className:"settings-label settings-radio-label"},s.a.createElement("input",{type:"radio",name:"study-mode",className:"radio-input","data-name":"studyMode","data-study-mode":"leitner",defaultChecked:"leitner"===t.studyMode.value}),s.a.createElement("div",{className:"radio settings-radio"}),s.a.createElement("span",null,"Leitner system"))),s.a.createElement("label",{className:"settings-item settings-label"},s.a.createElement("input",{type:"checkbox",className:"checkbox-input","data-name":"randomize",defaultChecked:t.randomize.value}),s.a.createElement("div",{className:"checkbox settings-checkbox"},s.a.createElement("div",{className:"checkbox-tick"})),s.a.createElement("span",null,"Randomize cards")),s.a.createElement("label",{className:"settings-item"},s.a.createElement("span",null,"Use"),s.a.createElement("input",{type:"text",className:"input settings-input","data-name":"cardCount",pattern:"^[0-9]+$",defaultValue:t.cardCount.value}),s.a.createElement("span",null,"cards per study session"),s.a.createElement("div",{className:"settings-message"},"Please provide a valid whole number.")),s.a.createElement("label",{className:"settings-item"},s.a.createElement("span",null,"Reveal answer after"),s.a.createElement("input",{type:"text",className:"input settings-input","data-name":"timeoutDuration",pattern:"^0*|0*([5-9][0-9]*|[1-9]+[0-9]+)$",defaultValue:t.timeoutDuration.value}),s.a.createElement("span",null,"seconds"),s.a.createElement("div",{className:"settings-message"},"Please provide a valid whole number.",s.a.createElement("br",null)," Minimal accepted value is 5 seconds.")))}}),s.a.createElement(r.a,{component:function(){return s.a.createElement("p",{className:"no-match-message"},"This page isn't available")}})),s.a.createElement(class extends s.a.Component{constructor(e){super(e),this.state={visible:!1,message:""}}componentDidMount(){window.addEventListener("sw-state-change",e=>{let t=e.detail;"init"===t?this.showPopup("Content is cached for offline use."):"update"===t&&this.showPopup("Update is available, please refresh.")})}showPopup(e){this.setState({visible:!0,message:e}),setTimeout(()=>{this.setState({visible:!1})},6e3)}render(){return s.a.createElement("div",{className:"service-worker-popup"+(this.state.visible?" visible":"")},s.a.createElement("p",{className:"service-worker-popup-message"},this.state.message))}},null))),document.getElementById("app")),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&function(e,t){void 0===t&&(t=null);const a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)}("sw-state-change",navigator.serviceWorker.controller?"update":"init")})})}).catch(console.log)})},92:function(e,t,a){},93:function(e,t,a){}});