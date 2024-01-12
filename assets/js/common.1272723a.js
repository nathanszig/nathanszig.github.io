/*! For license information please see common.1272723a.js.LICENSE.txt */
(self.webpackChunkdocu_react_gantt=self.webpackChunkdocu_react_gantt||[]).push([[592],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(7294);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?r.createElement(r.Fragment,null,a):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var o=n(512),c=n(5999),l=n(5281);const i={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function s(e){let{type:t,className:n,children:a}=e;return r.createElement("div",{className:(0,o.Z)(l.k.common.admonition,l.k.common.admonitionType(t),i.admonition,n)},a)}function u(e){let{icon:t,title:n}=e;return r.createElement("div",{className:i.admonitionHeading},r.createElement("span",{className:i.admonitionIcon},t),n)}function m(e){let{children:t}=e;return t?r.createElement("div",{className:i.admonitionContent},t):null}function d(e){const{type:t,icon:n,title:a,children:o,className:c}=e;return r.createElement(s,{type:t,className:c},r.createElement(u,{title:a,icon:n}),r.createElement(m,null,o))}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e){return r.createElement("svg",f({viewBox:"0 0 14 16"},e),r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}const g={icon:r.createElement(p,null),title:r.createElement(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")};function b(e){return r.createElement(d,h({},g,e,{className:(0,o.Z)("alert alert--secondary",e.className)}),e.children)}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function y(e){return r.createElement("svg",v({viewBox:"0 0 12 16"},e),r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}const O={icon:r.createElement(y,null),title:r.createElement(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")};function N(e){return r.createElement(d,E({},O,e,{className:(0,o.Z)("alert alert--success",e.className)}),e.children)}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function k(e){return r.createElement("svg",j({viewBox:"0 0 14 16"},e),r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}const C={icon:r.createElement(k,null),title:r.createElement(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")};function L(e){return r.createElement(d,w({},C,e,{className:(0,o.Z)("alert alert--info",e.className)}),e.children)}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function _(e){return r.createElement("svg",B({viewBox:"0 0 16 16"},e),r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}const Z={icon:r.createElement(_,null),title:r.createElement(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)"},"warning")};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function P(e){return r.createElement("svg",H({viewBox:"0 0 12 16"},e),r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}const S={icon:r.createElement(P,null),title:r.createElement(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")};function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}const A={icon:r.createElement(_,null),title:r.createElement(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}const R={...{note:b,tip:N,info:L,warning:function(e){return r.createElement(d,x({},Z,e,{className:(0,o.Z)("alert alert--warning",e.className)}),e.children)},danger:function(e){return r.createElement(d,T({},S,e,{className:(0,o.Z)("alert alert--danger",e.className)}),e.children)}},...{secondary:e=>r.createElement(b,M({title:"secondary"},e)),important:e=>r.createElement(L,M({title:"important"},e)),success:e=>r.createElement(N,M({title:"success"},e)),caution:function(e){return r.createElement(d,I({},A,e,{className:(0,o.Z)("alert alert--warning",e.className)}),e.children)}}};function z(e){const t=a(e),n=(o=t.type,R[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),R.info));var o;return r.createElement(n,t)}},2196:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he});var r=n(7294),a=n(1151),o=n(5742),c=n(2389),l=n(512),i=n(2949),s=n(6668);function u(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(5281),d=n(7594),f=n.n(d);const p=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:r}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&h.test(o)){const e=o.match(h).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(g).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,a),l=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let f=0;f<l.length;){const e=l[f].match(c);if(!e){f+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${f},`:u[t]?i[u[t]].start=f:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${f-1},`),l.splice(f,1)}n=l.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function O(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(u());return r.createElement(t,E({},n,{style:a,className:(0,l.Z)(n.className,y.codeBlockContainer,m.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function j(e){let{children:t,className:n}=e;return r.createElement(O,{as:"pre",tabIndex:0,className:(0,l.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:N.codeBlockLines},t))}var k=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,a]=(0,r.useState)(),o=(0,r.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{o()}),[o]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;const a=(0,k.zX)(t),o=(0,k.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var L=n(2573);const B={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function x(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,l.Z)(n,a&&B.codeLine)}),s=t.map(((e,t)=>r.createElement("span",_({key:t},c({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:B.codeLineNumber}),r.createElement("span",{className:B.codeLineContent},s)):s,r.createElement("br",null))}var Z=n(5999);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function P(e){return r.createElement("svg",H({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function S(e){return r.createElement("svg",T({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[a,o]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection(),o=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":a?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,I.copyButton,a&&I.copyButtonCopied),onClick:i},r.createElement("span",{className:I.copyButtonIcons,"aria-hidden":"true"},r.createElement(P,{className:I.copyButtonIcon}),r.createElement(S,{className:I.copyButtonSuccessIcon})))}function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function R(e){return r.createElement("svg",M({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function $(e){let{className:t,onClick:n,isEnabled:a}=e;const o=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,a&&z.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement(R,{className:z.wordWrapButtonIcon,"aria-hidden":"true"}))}function V(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,s.L)(),f=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m),h=u(),g=function(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),o=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return C(o,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),b=function(e){return e?.match(p)?.groups.title??""}(a)||o,{lineClassNames:y,code:E}=v(t,{metastring:a,language:f,magicComments:d}),j=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return r.createElement(O,{as:"div",className:(0,l.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},b&&r.createElement("div",{className:N.codeBlockTitle},b),r.createElement("div",{className:N.codeBlockContent},r.createElement(L.y$,{theme:h,code:E,language:f??"text"},(e=>{let{className:t,style:n,tokens:a,getLineProps:o,getTokenProps:c}=e;return r.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,l.Z)(t,N.codeBlock,"thin-scrollbar"),style:n},r.createElement("code",{className:(0,l.Z)(N.codeBlockLines,j&&N.codeBlockLinesWithNumbering)},a.map(((e,t)=>r.createElement(x,{key:t,line:e,getLineProps:o,getTokenProps:c,classNames:y[t],showLineNumbers:j})))))})),r.createElement("div",{className:N.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&r.createElement($,{className:N.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),r.createElement(A,{className:N.codeButton,code:E}))))}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function F(e){let{children:t,...n}=e;const a=(0,c.Z)(),o=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?V:j;return r.createElement(l,W({key:String(a)},n),o)}var D=n(9960);var q=n(6043);const U={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}function K(e){let{summary:t,children:n,...a}=e;const o=(0,c.Z)(),i=(0,r.useRef)(null),{collapsed:s,setCollapsed:u}=(0,q.u)({initialState:!a.open}),[m,d]=(0,r.useState)(a.open),f=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",G({},a,{ref:i,open:m,"data-collapsed":s,className:(0,l.Z)(U.details,o&&U.isBrowser,a.className),onMouseDown:e=>{Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Y(t)&&J(t,i.current)&&(e.preventDefault(),s?(u(!1),d(!0)):u(!0))}}),f,r.createElement(q.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),d(!e)}},r.createElement("div",{className:U.collapsibleContent},n)))}const Q={details:"details_b_Ee"};function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}const ee="alert alert--info";function te(e){let{...t}=e;return r.createElement(K,X({},t,{className:(0,l.Z)(ee,Q.details,t.className)}))}function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.type)),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(te,ne({},e,{summary:n}),a)}var ae=n(2503);function oe(e){return r.createElement(ae.Z,e)}const ce={containsTaskList:"containsTaskList_mC6p"};function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ie(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&ce.containsTaskList)}const se={img:"img_ev3q"};function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}var me=n(9047),de=n(1875);function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}const pe={Head:o.Z,details:re,Details:re,code:function(e){return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?r.createElement("code",e):r.createElement(F,e)},a:function(e){return r.createElement(D.Z,e)},pre:function(e){return r.createElement(r.Fragment,null,e.children)},ul:function(e){return r.createElement("ul",le({},e,{className:ie(e.className)}))},img:function(e){return r.createElement("img",ue({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,se.img))}));var t},h1:e=>r.createElement(oe,fe({as:"h1"},e)),h2:e=>r.createElement(oe,fe({as:"h2"},e)),h3:e=>r.createElement(oe,fe({as:"h3"},e)),h4:e=>r.createElement(oe,fe({as:"h4"},e)),h5:e=>r.createElement(oe,fe({as:"h5"},e)),h6:e=>r.createElement(oe,fe({as:"h6"},e)),admonition:me.Z,mermaid:de.Z};function he(e){let{children:t}=e;return r.createElement(a.Z,{components:pe},t)}},5658:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(512),o=n(5999),c=n(2503);function l(e){let{className:t}=e;return r.createElement("main",{className:(0,a.Z)("container margin-vert--xl",t)},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement(c.Z,{as:"h1",className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),a=n(512),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.Z)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,l({},n,{linkClassName:i,linkActiveClassName:s})))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(7294),a=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>l(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:c}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),s=i(l,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(9960);function d(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=r.memo(d);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:m,...d}=e;const h=(0,a.L)(),g=s??h.tableOfContents.minHeadingLevel,b=m??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:b});return u((0,r.useMemo)((()=>{if(l&&i)return{linkClassName:l,linkActiveClassName:i,minHeadingLevel:g,maxHeadingLevel:b}}),[l,i,g,b])),r.createElement(f,p({toc:v,className:n,linkClassName:l},d))}},2212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7294),a=n(512),o=n(5999),c=n(5742);function l(){return r.createElement(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function i(){return r.createElement(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function s(){return r.createElement(c.Z,null,r.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var u=n(5281),m=n(9047);function d(e){let{className:t}=e;return r.createElement(m.Z,{type:"caution",title:r.createElement(l,null),className:(0,a.Z)(t,u.k.common.unlistedBanner)},r.createElement(i,null))}function f(e){return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement(d,e))}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},5251:(e,t,n)=>{"use strict";var r=n(7294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},5893:(e,t,n)=>{"use strict";e.exports=n(5251)},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>c});var r=n(7294);const a={},o=r.createContext(a);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);