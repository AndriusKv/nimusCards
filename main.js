!function(e){function t(t){for(var s,r,l=t[0],c=t[1],o=t[2],m=0,u=[];m<l.length;m++)r=l[m],n[r]&&u.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={0:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var d=c;i.push([69,1]),a()}({37:function(e,t,a){},38:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);a(36),a(37),a(38);var s=a(0),n=a.n(s),i=a(32),r=a(71),l=a(72),c=a(35),o=a(26),d=a(70);function m(e){let t=e.name,a=e.className;const s={cards:"M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,\n            8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,\n            18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,\n            2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,\n            7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18, 2.9 17.35,2.9 16.96,\n            3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",remove:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",media:"M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,\n            17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,\n            11.47L8.5,15H19.5L15.96,10.29Z",responsive:"M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,\n            1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,\n            22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,\n            21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,\n            0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z",offline:"M2.28,3L1,4.27L2.47,5.74C2.04,6 1.61,6.29 1.2,6.6L3,9C3.53,8.6 4.08,8.25 4.66,\n            7.93L6.89,10.16C6.15,10.5 5.44,10.91 4.8,11.4L6.6,13.8C7.38,13.22 8.26,12.77 9.2,\n            12.47L11.75,15C10.5,15.07 9.34,15.5 8.4,16.2L12,21L14.46,17.73L17.74,21L19,19.72M12,\n            3C9.85,3 7.8,3.38 5.9,4.07L8.29,6.47C9.5,6.16 10.72,6 12,6C15.38,6 18.5,7.11 21,\n            9L22.8,6.6C19.79,4.34 16.06,3 12,3M12,9C11.62,9 11.25,9 10.88,9.05L14.07,12.25C15.29,\n            12.53 16.43,13.07 17.4,13.8L19.2,11.4C17.2,9.89 14.7,9 12,9Z",image:"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,\n            5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",audio:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,\n            2.89 4.89,2 6,2M9,16A2,2 0 0,0 7,18A2,2 0 0,0 9,20A2,2 0 0,0 11,18V13H14V11H10V16.27C9.71,\n            16.1 9.36,16 9,16Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",flip:"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"};return n.a.createElement("svg",{viewBox:"0 0 24 24",className:a},n.a.createElement("path",{d:s[t]}))}const u=new(a(34).a)("nimus-cards-sets");function h(){return u.sets.toArray().catch(e=>{console.log(e)})}function p(e){let t=e.deckTitle,a=e.removeDeck,s=e.cancelRemoval;return n.a.createElement("div",{className:"mask"},n.a.createElement("div",{className:"modal deck-dialog-box"},n.a.createElement("h3",{className:"deck-dialog-box-title"},"Are you sure you want to remove ",n.a.createElement("b",null,t)," deck?"),n.a.createElement("div",{className:"deck-dialog-box-btns"},n.a.createElement("button",{className:"btn-danger",onClick:a},"Remove"),n.a.createElement("button",{className:"btn-icon",onClick:s},"Cancel"))))}function v(e){let t=e.deck,a=e.showDialog,s=e.editDeck;return n.a.createElement("li",{className:"deck"},n.a.createElement(o.a,{to:`/decks/${t.id}`,className:"deck-title"},t.title),t.description&&n.a.createElement("p",{className:"deck-description"},t.description),n.a.createElement("div",{className:"deck-card-count"},t.cards.length," card",t.cards.length>1&&"s"),n.a.createElement("div",{className:"deck-btn-container"},n.a.createElement("button",{className:"btn-icon deck-btn",title:"Edit",onClick:function(){s(t)}},n.a.createElement(m,{name:"edit"}),n.a.createElement("span",null,"Edit")),n.a.createElement("button",{className:"btn-icon deck-btn",title:"Remove",onClick:function(){a(t)}},n.a.createElement(m,{name:"remove"}),n.a.createElement("span",null,"Remove"))))}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}u.version(1).stores({sets:"++_id"});a(49);function g(e){let t=e.textSize,a=e.handleTextSizeSelect;return n.a.createElement("select",{defaultValue:t,title:"Text size",onInput:a,className:"input create-side-select"},n.a.createElement("option",{value:"16"},"16px"),n.a.createElement("option",{value:"24"},"24px"),n.a.createElement("option",{value:"36"},"36px"),n.a.createElement("option",{value:"48"},"48px"))}a(56);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class f extends n.a.Component{constructor(e){super(e),b(this,"hide",()=>{this.props.hide()}),b(this,"handleFileUpload",e=>{let t=e.target;const a=this.props.type,s=t.files[0];t.value="",s.type.split("/")[0]!==a?this.showMessage(`File is not an ${a}`):this.props.addAttachment(s,a)}),b(this,"handleFileUploadFormURL",e=>{const t=e.target.elements.url.value.trim(),a=this.props.type;if(e.preventDefault(),t){if("image"===a){const e=new Image;e.onload=(()=>{this.props.addAttachment(t,a)}),e.onerror=(e=>{this.showMessage(`URL doesn't contain ${a} file`),console.log(e)}),e.src=t}else if("audio"===a){const e=new Audio(t);e.onloadedmetadata=(()=>{this.props.addAttachment(t,a)}),e.onerror=(e=>{this.showMessage(`URL doesn't contain ${a} file`),console.log(e)})}}else this.showMessage("Please specify valid url")}),this.state={message:""}}showMessage(e){this.setState({message:e}),setTimeout(()=>{this.setState({message:""})},3200)}render(){const e=this.props.type,t=this.state.message;return n.a.createElement("div",{className:"mask"},n.a.createElement("div",{className:"modal upload-panel"},n.a.createElement("div",{className:"upload-panel-device-target"},n.a.createElement("div",{className:"upload-panel-device-target-title"},"Select ",e," file from device"),n.a.createElement("label",{className:"btn",tabIndex:"0"},n.a.createElement("span",null,"Select"),n.a.createElement("input",{type:"file",className:"file-input",onChange:this.handleFileUpload}))),n.a.createElement("div",{className:"upload-panel-item-separator"},"Or"),n.a.createElement("div",{className:"upload-panel-url-target"},n.a.createElement("div",{className:"upload-panel-url-target-title"},"Upload ",e," from url"),n.a.createElement("form",{onSubmit:this.handleFileUploadFormURL},n.a.createElement("input",{type:"text",name:"url",className:"input upload-panel-url-target-input"}),n.a.createElement("button",{className:"btn"},"Upload"))),n.a.createElement("div",{className:"upload-panel-footer"},t&&n.a.createElement("div",{className:"upload-panel-message"},t),n.a.createElement("button",{type:"button",className:"btn-secondary",onClick:this.hide},"Cancel"))))}}function N(e){let t=e.file,a=e.type;const s="string"==typeof t?t:URL.createObjectURL(t);return"image"===a?n.a.createElement("img",{src:s,alt:"",className:"side-image"}):"audio"===a?n.a.createElement("audio",{src:s,className:"side-audio",controls:!0}):null}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class S extends n.a.Component{constructor(e){super(e),k(this,"removeAttachment",()=>{const e=this.state.card;delete e[this.side].attachment,this.setState({card:e})}),k(this,"handleTextSizeSelect",e=>{this.props.handleTextSizeSelect(e,this.side)}),k(this,"handleInput",e=>{this.props.handleInput(e,this.side)}),k(this,"addAttachment",(e,t)=>{const a=this.state.card;a[this.side].attachment={file:e,type:t},this.setState({card:a,isUploadPanelVisible:!1,type:""})}),k(this,"showUploadPanel",e=>{this.setState({isUploadPanelVisible:!0,type:e})}),k(this,"hideUploadPanel",()=>{this.setState({isUploadPanelVisible:!1,type:""})}),this.state={card:e.card},this.side="front"}renderToolbarBtns(e){return["image","audio"].map((t,a)=>n.a.createElement("button",{key:a,className:`btn-icon toolbar-btn${e===t?" active":""}`,title:`Upload ${t}`,onClick:()=>this.showUploadPanel(t)},n.a.createElement(m,{name:t})))}renderAttachment(e){return n.a.createElement("div",{className:"side-panel-container"},n.a.createElement("button",{type:"button",className:"btn-icon create-side-panel-btn",onClick:this.removeAttachment,title:"Remove attachment"},n.a.createElement(m,{name:"remove"})),n.a.createElement(N,e))}render(){const e=this.state,t=e.card,a=e.type,s=e.isUploadPanelVisible,i=t[this.side],r=i.attachment,l=i.text,c=i.textSize;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:`side-container${t.visibleSide===this.side?" visible":""}`},n.a.createElement("div",{className:"side-name"},this.side),n.a.createElement("div",{className:"side"},n.a.createElement("div",{className:"create-side-toolbar"},this.renderToolbarBtns(a),n.a.createElement(g,{textSize:c,handleTextSizeSelect:this.handleTextSizeSelect})),n.a.createElement("div",{className:"side-content create-side-content"},r&&this.renderAttachment(r),n.a.createElement("textarea",{className:"input create-side-text-input side-text",defaultValue:l,style:{fontSize:`${c}px`},onInput:this.handleInput})))),s&&n.a.createElement(f,{type:a,hide:this.hideUploadPanel,addAttachment:this.addAttachment}))}}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class C extends n.a.Component{constructor(e){super(e),x(this,"handleTextSizeSelect",e=>{this.props.handleTextSizeSelect(e,this.side)}),x(this,"handleInput",e=>{this.props.handleInput(e,this.side)}),this.side="back"}render(){const e=this.props.card,t=e[this.side],a=t.text,s=t.textSize;return n.a.createElement("div",{className:`side-container${e.visibleSide===this.side?" visible":""}`},n.a.createElement("div",{className:"side-name"},this.side),n.a.createElement("div",{className:"side"},n.a.createElement("div",{className:"create-side-toolbar"},n.a.createElement(g,{textSize:s,handleTextSizeSelect:this.handleTextSizeSelect})),n.a.createElement("div",{className:"side-content create-side-content"},n.a.createElement("textarea",{className:"input create-side-text-input side-text",defaultValue:a,style:{fontSize:`${s}px`},onInput:this.handleInput}))))}}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class L extends n.a.Component{constructor(e){super(e),y(this,"flipSide",e=>{const t=this.state.card;t.visibleSide="front"===e?"back":"front",this.setState({card:t})}),y(this,"handleInput",(e,t)=>{let a=e.target.value;const s=this.state.card;a!==s[t].text&&(s[t].text=a,this.setState({card:s}))}),y(this,"handleTextSizeSelect",(e,t)=>{let a=e.target.value;const s=this.state.card;s[t].textSize=a,this.setState({card:s})}),e.card.visibleSide="front",this.state={card:e.card}}render(){const e=this.props,t=e.index,a=e.removeCard,s=this.state.card.visibleSide;return n.a.createElement("li",{className:"create-list-item"},n.a.createElement("div",{className:"create-card-index"},t+1,"."),n.a.createElement("div",{className:"create-input-group create-card"},n.a.createElement(S,{card:this.state.card,handleInput:this.handleInput,handleTextSizeSelect:this.handleTextSizeSelect}),n.a.createElement(C,{card:this.state.card,handleInput:this.handleInput,handleTextSizeSelect:this.handleTextSizeSelect})),n.a.createElement("div",{className:"create-card-btns"},n.a.createElement("button",{className:"btn-icon create-card-flip-btn",title:"Flip side",onClick:()=>this.flipSide(s)},n.a.createElement(m,{name:"flip"})),n.a.createElement("button",{className:"btn-icon",title:"Remove card",onClick:()=>a(t)},n.a.createElement(m,{name:"remove"}))))}}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a(66),a(68);function M(){const e={studyMode:{value:"standard"},randomize:{value:!0},cardCount:{value:""},timeoutDuration:{value:""}},t=JSON.parse(localStorage.getItem("nimus-cards-settings"))||{};return Object.assign(e,t)}function V(e){let t=e.score,a=e.name;const s={width:`${t.total?t[a]/t.total*100:50}%`};return n.a.createElement("div",{className:`score-bar score-${a}-bar`,style:s},t[a])}function A(e){let t=e.score,a=e.mode;return n.a.createElement("div",{className:"study-header"},"standard"===a?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"study-score-bar-name-container"},n.a.createElement("span",null,"Right"),n.a.createElement("span",null,"Wrong")),n.a.createElement("div",null,n.a.createElement(V,{score:t,name:"right"}),n.a.createElement(V,{score:t,name:"wrong"}))):n.a.createElement("div",{className:"study-score-table"},n.a.createElement("div",{className:"study-score-table-cell"},n.a.createElement("div",{className:"study-score-table-cell-name"},"Level"),n.a.createElement("div",null,"Card Count")),t.levels.map((e,a)=>n.a.createElement("div",{className:`study-score-table-cell${t.currentLevel===a?" active":""}`,key:a},n.a.createElement("div",{className:"study-score-table-cell-name"},4===a?"Memorized":a+1),n.a.createElement("div",null,e.length)))))}function R(e){let t=e.title,a=e.score,s=e.mode,i=e.initNextStandardRound,r=e.initNextLeitnerLevel;const l=a.session;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"component-header study-deck-title"},t),n.a.createElement("div",{className:"deck-score-container"},n.a.createElement("h3",{className:"deck-score-title"},"Session Results"),n.a.createElement("div",{className:"deck-score-in-percent"},Math.round(l.right/l.total*100),"%"),n.a.createElement("div",{className:"deck-score-bars"},n.a.createElement("div",{className:"deck-score-bar-container"},n.a.createElement("span",{className:"deck-score-bar-name"},"Right"),n.a.createElement("div",{className:"deck-score-bar"},n.a.createElement(V,{score:l,name:"right"}))),n.a.createElement("div",{className:"deck-score-bar-container"},n.a.createElement("span",{className:"deck-score-bar-name"},"Wrong"),n.a.createElement("div",{className:"deck-score-bar"},n.a.createElement(V,{score:l,name:"wrong"})))),n.a.createElement("div",{className:"deck-score-btn-container"},!a.isLast&&("standard"===s?n.a.createElement("button",{className:"btn deck-score-btn",onClick:i},"Next Round"):function(){let e=a.currentLevel+1;return a.wrong?e-=e>1?1:0:e+=1,n.a.createElement("button",{className:"btn deck-score-btn",onClick:r},"Continue to Level ",e)}()),n.a.createElement(o.a,{to:"/decks",className:"btn"},"Close"))))}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class I extends n.a.Component{constructor(e){super(e),H(this,"showImage",()=>{const e=this.props.card[this.sideName].attachment,t=e.file;"image"===e.type&&this.setState({imageExpanded:!0,imageSrc:"string"==typeof t?t:URL.createObjectURL(t)})}),H(this,"hideExpandedImage",e=>{e.target===e.currentTarget&&this.setState({imageExpanded:!1})}),this.sideName="front",this.state={}}render(){const e=this.props.card,t=e.visibleSide,a=e[this.sideName],s=a.attachment,i=a.text,r=a.textSize;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:`side-container${t===this.sideName?" visible":""}`},n.a.createElement("div",{className:"side-name"},this.sideName),n.a.createElement("div",{className:"side"},n.a.createElement("div",{className:"study-side-content"},s&&n.a.createElement("div",{className:`side-panel-container${i?"":" full"}`,onClick:this.showImage},n.a.createElement(N,s)),i&&n.a.createElement("div",{className:"side-text study-side-text"},n.a.createElement("div",{style:{fontSize:`${r}px`}},i))))),this.state.imageExpanded&&n.a.createElement("div",{className:"mask",onClick:this.hideExpandedImage},n.a.createElement("img",{src:this.state.imageSrc,className:"study-expaned-image",alt:""})))}}function T(e){let t=e.card,a=e.revealBack;const s=t.visibleSide,i=t.back,r=i.text,l=i.textSize;return n.a.createElement("div",{className:`side-container${"back"===s?" visible":""}`},n.a.createElement("div",{className:"side-name"},"back"),n.a.createElement("div",{className:"side"},n.a.createElement("div",{className:"study-side-content"},t.isBackSideRevealed?n.a.createElement("div",{className:"side-text study-side-text"},n.a.createElement("div",{style:{fontSize:`${l}px`}},r)):n.a.createElement("button",{className:"btn study-reveal-btn",onClick:a},n.a.createElement("div",null,"Reveal")))))}function z(e){let t=e.card,a=e.revealBack,s=e.flipSide;return n.a.createElement("div",{className:"study-card"},t.isBackSideRevealed&&n.a.createElement("button",{className:"btn-icon study-card-flip-btn",onClick:s,title:"Flip side"},n.a.createElement(m,{name:"flip"})),n.a.createElement(I,{card:t}),n.a.createElement(T,{card:t,revealBack:a}))}class D extends n.a.Component{constructor(e){super(e),this.state={duration:e.duration},this.timeoutId=0}componentDidMount(){this.runTimer(performance.now(),0)}componentWillUnmount(){clearTimeout(this.timeoutId)}getSeconds(e){const t=e%60;return t<10?`0${t}`:t}getMinutes(e){const t=Math.floor(e/60%60);return e>=3600&&t<10?`0${t}`:t}getHours(e){return Math.floor(e/3600)}formatDuration(e){const t=this.getSeconds(e),a=this.getMinutes(e),s=this.getHours(e);return`${s?`${s}:`:""}${a}:${t}`}runTimer(e,t){const a=performance.now()-e-t;this.timeoutId=setTimeout(()=>{this.update(e,t+1e3)},1e3-a)}update(e,t){const a=this.state.duration-1;if(a<1)return this.setState({duration:a}),void this.props.callback();this.setState({duration:a},()=>{this.runTimer(e,t)})}render(){const e=this.formatDuration(this.state.duration);return n.a.createElement("div",{className:"study-timer"},e)}}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object(i.render)(n.a.createElement(r.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(function(){return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"header-nav"},n.a.createElement(o.a,{to:"/",className:"header-logo-link"},n.a.createElement(m,{name:"cards",className:"header-logo-icon"}),n.a.createElement("span",null,"NimusCards")),n.a.createElement("ul",{className:"header-nav-items"},n.a.createElement("li",{className:"header-nav-item"},n.a.createElement(d.a,{to:"/decks/create",className:"header-link",activeClassName:"active"},"Create")),n.a.createElement("li",{className:"header-nav-item"},n.a.createElement(d.a,{to:"/decks",exact:!0,className:"header-link",activeClassName:"active"},"Decks")),n.a.createElement("li",{className:"header-nav-item"},n.a.createElement(d.a,{to:"/settings",className:"header-link",activeClassName:"active"},"Settings")))))},null),n.a.createElement("main",{className:"main"},n.a.createElement(l.a,null,n.a.createElement(c.a,{path:"/",exact:!0,component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"home-hero"},n.a.createElement("h1",{className:"home-hero-title"},"NimusCards"),n.a.createElement("p",{className:"home-hero-desc"},"Simple learning with flashcards."),n.a.createElement(o.a,{to:"/decks/create",className:"btn home-hero-btn"},"Get Started")),n.a.createElement("h2",{className:"home-features-title"},"Features"),n.a.createElement("ul",{className:"home-features"},n.a.createElement("li",{className:"home-feature"},n.a.createElement(m,{name:"media",className:"home-icon"}),n.a.createElement("h3",{className:"home-feature-title"},"Media-Rich"),n.a.createElement("p",null,"Easily add images and sounds to your flashcards.")),n.a.createElement("li",{className:"home-feature"},n.a.createElement(m,{name:"responsive",className:"home-icon"}),n.a.createElement("h3",{className:"home-feature-title"},"Responsive"),n.a.createElement("p",null,"Responsive web design makes user experience consistent across multiple devices.")),n.a.createElement("li",{className:"home-feature"},n.a.createElement(m,{name:"offline",className:"home-icon"}),n.a.createElement("h3",{className:"home-feature-title"},"Works Offline"),n.a.createElement("p",null,"Even without connection, you can still use NimusCards."))))}}),n.a.createElement(c.a,{path:"/decks",exact:!0,component:class extends n.a.Component{constructor(e){super(e),E(this,"editDeck",e=>{this.props.history.push({pathname:"/decks/create",state:e})}),E(this,"removeDeck",()=>{const e=this.state,t=e.decks,a=e.deckToRemove,s=this.findDeckIndex(t,a.id);!function(e){u.sets.delete(e).catch(e=>{console.log(e)})}(a._id),t.splice(s,1),this.setState({decks:t,dialogVisible:!1,deckToRemove:null})}),E(this,"showDialog",e=>{this.setState({dialogVisible:!0,deckToRemove:e})}),E(this,"hideDialog",()=>{this.setState({dialogVisible:!1,deckToRemove:null})}),this.state={decks:[],loading:!0}}componentDidMount(){this.getDecks(this.props.location.state).then(e=>{this.setState({decks:e,loading:!1})})}async getDecks(e){const t=await h();if(e){const s=this.findDeckIndex(t,e.id);-1===s?t.push(e):t.splice(s,1,e),a=e,u.sets.put(a).catch(e=>{console.log(e)})}var a;return t}findDeckIndex(e,t){return e.findIndex(e=>e.id===t)}renderDecks(e){return e.map(e=>n.a.createElement(v,{key:e.id,deck:e,showDialog:this.showDialog,editDeck:this.editDeck}))}render(){const e=this.state,t=e.decks,a=e.dialogVisible,s=e.loading;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"component-header deck-list-header"},n.a.createElement("h1",{className:"deck-list-title"},"Your Decks"),n.a.createElement(o.a,{to:"/decks/create",className:"btn deck-list-btn"},"Create")),s?n.a.createElement("img",{src:"./assets/ring-alt.svg",className:"deck-loading-indicator"}):t.length?n.a.createElement("ul",null,this.renderDecks(t)):n.a.createElement("h2",{className:"deck-list-message"},"You have no decks"),a&&n.a.createElement(p,{deckTitle:this.state.deckToRemove.title,removeDeck:this.removeDeck,cancelRemoval:this.hideDialog}))}}}),n.a.createElement(c.a,{path:"/decks/create",component:class extends n.a.Component{constructor(e){super(e),w(this,"handleSubmit",()=>{const e=document.getElementById("js-deck-title").value,t=document.getElementById("js-deck-description").value;if(!e)return void this.showMessage("Please specify deck title");const a=Object.assign({},this.state.deck),s=a.cards.some(e=>{let t=e.front,a=e.back;const s=this.hasSideContent(t),n=this.hasSideContent(a);return!s&&n||!n&&s});if(a.title=e,a.description=t,!s)return a.cards=a.cards.filter(e=>{let t=e.front,a=e.back;return this.hasSideContent(t)||this.hasSideContent(a)}),a.cards.length<2?void this.showMessage("Please fill in at least two cards"):void this.props.history.push({pathname:"/decks",state:a});this.showMessage("Please fill in both card sides")}),w(this,"addCard",e=>{let t=e.target;const a=Object.assign({},this.state.deck),s=a.cards[a.cards.length-1],n=this.getNewCard();s&&(n.front.textSize=s.front.textSize,n.back.textSize=s.back.textSize),a.cards.push(n),this.setState({deck:a},()=>{t.scrollIntoView()})}),w(this,"removeCard",e=>{const t=Object.assign({},this.state.deck);t.cards.splice(e,1),this.setState({deck:t})}),this.state={deck:this.getDeck(e.location.state)},this.messageTimeout=0}getRandomString(){return Math.random().toString(32).slice(2,10)}getDeck(e){return void 0===e&&(e={}),Object.assign({id:this.getRandomString(),title:"",description:"",cards:[this.getNewCard()]},e)}showMessage(e){this.setState({message:e}),clearTimeout(this.messageTimeout),this.messageTimeout=setTimeout(()=>{this.setState({message:""})},3200)}hasSideContent(e){return e.text||e.attachment}getNewCard(){return{id:this.getRandomString(),front:{text:"",textSize:16},back:{text:"",textSize:16}}}render(){const e=this.state,t=e.deck,a=e.message;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"create-input-group"},n.a.createElement("label",{className:"create-input-label"},n.a.createElement("div",{className:"side-name"},"title"),n.a.createElement("input",{id:"js-deck-title",className:"input create-title-input",defaultValue:t.title})),n.a.createElement("label",{className:"create-input-label"},n.a.createElement("div",{className:"side-name"},"description (optional)"),n.a.createElement("textarea",{id:"js-deck-description",className:"input side-text create-description-input",defaultValue:t.description}))),t.cards.length?n.a.createElement("ul",null,t.cards.map((e,t)=>n.a.createElement(L,{key:e.id,index:t,card:e,removeCard:this.removeCard}))):n.a.createElement("p",{className:"create-deck-message"},"Deck is empty"),n.a.createElement("div",{className:"container-footer create-footer"},n.a.createElement("button",{className:"btn",onClick:this.addCard},"New Card"),a&&n.a.createElement("span",{className:"create-message"},a),n.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Create")))}}}),n.a.createElement(c.a,{path:"/decks/:id",component:class extends n.a.Component{constructor(e){super(e),O(this,"revealBack",()=>{this.setState({isBackSideRevealed:!0,visibleSide:"back"})}),O(this,"flipSide",()=>{this.state.isBackSideRevealed&&this.setState(e=>({visibleSide:"front"===e.visibleSide?"back":"front"}))}),O(this,"getNextCard",e=>{const t=this.state.index+1;this.score=this.updateScore(e,this.mode,this.score),this.setState(t===this.cards.length?{last:!0}:this.getCard(t))}),O(this,"initNextStandardRound",()=>{const e=this.getNextLevelCards(this.cards,this.score.incorrectIds);this.score.currentLevel+=1,this.score.incorrectIds.length=0,this.initNextLevel(this.score,e)}),O(this,"initNextLeitnerLevel",()=>{const e=this.score.levels,t=e.findIndex(e=>e.length),a=this.getNextLevelCards(this.initialCards,e[t]);this.score.currentLevel=t,this.initNextLevel(this.score,a)}),this.deckTitle="",this.cards=[],this.initialCards=[],this.state={front:null,back:null},this.score=null}componentDidMount(){h().then(e=>{const t=this.props.match.params.id,a=e.find(e=>e.id===t);a?this.initDeck(a):this.props.history.replace("/decks")})}initDeck(e){let t=e.title,a=e.cards;const s=M();if(this.mode=s.studyMode.value,this.randomizeCards=s.randomize.value,this.timeoutDuration=parseInt(s.timeoutDuration.value,10)||0,this.deckTitle=t,this.cards=this.getCards(a,s),this.score=this.resetScoreCounter({currentLevel:0,session:this.resetScoreCounter()}),"standard"===this.mode)this.score.incorrectIds=[];else{const e=this.cards.map(e=>e.id);this.initialCards=[].concat(this.cards),this.score.levels=[e,[],[],[],[]]}this.setState(this.getCard())}getCards(e,t){const a=parseInt(t.cardCount.value,10);return e=t.randomize.value?this.shuffleArray(e):e,a?e.slice(0,a):e}shuffleArray(e){const t=[].concat(e);let a=t.length;for(;a;){const e=Math.floor(Math.random()*a);a-=1;var s=[t[e],t[a]];t[a]=s[0],t[e]=s[1]}return t}getCard(e){void 0===e&&(e=0);const t=this.cards[e];return{index:e,id:t.id,front:t.front,back:t.back,isBackSideRevealed:!1,visibleSide:"front"}}updateStandardScore(e,t){return t||e.incorrectIds.push(this.state.id),e.isLast=e.right===e.total,e}updateLeitnerScore(e,t){let a=e.currentLevel;if(t)a+=1;else{if(!a)return e;a-=1}const s=e.levels[e.currentLevel],n=s.findIndex(e=>e===this.state.id),i=s.splice(n,1)[0];return e.levels[a].push(i),e.isLast=e.levels[4].length===this.initialCards.length,e}updateScoreCounter(e,t){e?t.right+=1:t.wrong+=1,t.total=t.right+t.wrong}updateScore(e,t,a){return this.updateScoreCounter(e,a),this.updateScoreCounter(e,a.session),"standard"===t?this.updateStandardScore(a,e):this.updateLeitnerScore(a,e)}resetScoreCounter(e){return void 0===e&&(e={}),Object.assign(e,{right:0,wrong:0,total:0})}getNextLevelCards(e,t){return e.filter(e=>-1!==t.indexOf(e.id))}initNextLevel(e,t){this.score=this.resetScoreCounter(e),this.cards=this.randomizeCards?this.shuffleArray(t):t,this.setState(Object.assign({last:!1},this.getCard()))}render(){return this.state.front&&this.state.back?this.state.last?n.a.createElement(R,{title:this.deckTitle,score:this.score,mode:this.mode,initNextStandardRound:this.initNextStandardRound,initNextLeitnerLevel:this.initNextLeitnerLevel}):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"component-header study-deck-title"},this.deckTitle),n.a.createElement("div",{className:"study-container"},n.a.createElement(A,{score:this.score,mode:this.mode}),n.a.createElement(z,{card:this.state,revealBack:this.revealBack,flipSide:this.flipSide})),n.a.createElement("div",{className:"container-footer"},n.a.createElement("span",{className:"study-progress"},"Progress: ",this.state.index+1,"/",this.cards.length),this.state.isBackSideRevealed?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"btn-danger study-footer-btn",onClick:()=>this.getNextCard(0)},"I Was Wrong"),n.a.createElement("button",{className:"btn-success study-footer-btn",onClick:()=>this.getNextCard(1)},"I Got It Right")):n.a.createElement(n.a.Fragment,null,this.timeoutDuration>0&&n.a.createElement(D,{duration:this.timeoutDuration,callback:this.revealBack}),n.a.createElement("button",{className:"btn",onClick:this.revealBack},"Reveal")))):null}}}),n.a.createElement(c.a,{path:"/settings",component:class extends n.a.Component{constructor(e){var t,a,s;super(e),s=(e=>{let t=e.target;const a=t.getAttribute("data-name"),s=this.state[a];switch(t.type){case"checkbox":s.value=t.checked;break;case"text":s.value=t.validity.valid?t.value:"";break;case"radio":s.value=t.getAttribute("data-study-mode")}this.updateSetting(a,s)}),(a="handleChange")in(t=this)?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,this.state=M()}updateSetting(e,t){this.setState({[e]:t},()=>{!function(e){localStorage.setItem("nimus-cards-settings",JSON.stringify(e))}(this.state)})}render(){return n.a.createElement("div",{onChange:this.handleChange},n.a.createElement("div",{className:"settings-item"},n.a.createElement("div",{className:"settings-item-title"},"Study mode"),n.a.createElement("label",{className:"settings-label settings-radio-label"},n.a.createElement("input",{type:"radio",name:"study-mode",className:"radio-input","data-name":"studyMode","data-study-mode":"standard",defaultChecked:"standard"===this.state.studyMode.value}),n.a.createElement("div",{className:"radio settings-radio"}),n.a.createElement("span",null,"Standard")),n.a.createElement("label",{className:"settings-label settings-radio-label"},n.a.createElement("input",{type:"radio",name:"study-mode",className:"radio-input","data-name":"studyMode","data-study-mode":"leitner",defaultChecked:"leitner"===this.state.studyMode.value}),n.a.createElement("div",{className:"radio settings-radio"}),n.a.createElement("span",null,"Leitner system"))),n.a.createElement("label",{className:"settings-item settings-label"},n.a.createElement("input",{type:"checkbox",className:"checkbox-input","data-name":"randomize",defaultChecked:this.state.randomize.value}),n.a.createElement("div",{className:"checkbox settings-checkbox"}),n.a.createElement("span",null,"Randomize cards")),n.a.createElement("label",{className:"settings-item"},n.a.createElement("span",null,"Use"),n.a.createElement("input",{type:"text",className:"input settings-input","data-name":"cardCount",pattern:"^[0-9]+$",defaultValue:this.state.cardCount.value}),n.a.createElement("span",null,"cards per study session"),n.a.createElement("div",{className:"settings-message"},"Please provide a valid whole number.")),n.a.createElement("label",{className:"settings-item"},n.a.createElement("span",null,"Reveal answer after"),n.a.createElement("input",{type:"text",className:"input settings-input","data-name":"timeoutDuration",pattern:"^0*|0*([5-9][0-9]*|[1-9]+[0-9]+)$",defaultValue:this.state.timeoutDuration.value}),n.a.createElement("span",null,"seconds"),n.a.createElement("div",{className:"settings-message"},"Please provide a valid whole number.",n.a.createElement("br",null)," Minimal accepted value is 5 seconds.")))}}}),n.a.createElement(c.a,{component:function(){return n.a.createElement("p",{className:"no-match-message"},"This page isn't available")}})),n.a.createElement(class extends n.a.Component{constructor(e){super(e),this.state={visible:!1,message:""}}componentDidMount(){window.addEventListener("sw-state-change",e=>{let t=e.detail;"init"===t?this.showPopup("Content is cached for offline use."):"update"===t&&this.showPopup("Update is available, please refresh.")})}showPopup(e){this.setState({visible:!0,message:e}),setTimeout(()=>{this.setState({visible:!1})},6e3)}render(){return n.a.createElement("div",{className:`service-worker-popup${this.state.visible?" visible":""}`},n.a.createElement("p",{className:"service-worker-popup-message"},this.state.message))}},null)))),document.getElementById("app")),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&function(e,t){void 0===t&&(t=null);const a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)}("sw-state-change",navigator.serviceWorker.controller?"update":"init")})})}).catch(console.log)})}});