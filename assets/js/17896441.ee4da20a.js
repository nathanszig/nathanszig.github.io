"use strict";(self.webpackChunkdocu_react_gantt=self.webpackChunkdocu_react_gantt||[]).push([[918],{903:(e,t,a)=>{a.r(t),a.d(t,{default:()=>fe});var n=a(7294),l=a(1944),r=a(902);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(512),m=a(7524),u=a(5999),p=a(9960);function b(e){const{permalink:t,title:a,subLabel:l,isNext:r}=e;return n.createElement(p.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}function g(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b,h({},t,{subLabel:n.createElement(u.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b,h({},a,{subLabel:n.createElement(u.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=c();return n.createElement(g,{previous:e.previous,next:e.next})}var E=a(2263),f=a(143),_=a(5281),N=a(373),k=a(4477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(u.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(u.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return n.createElement(t,e)}function Z(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(u.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.Z,{to:a,onClick:l},n.createElement(u.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,f.Jo)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,_.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(C,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(Z,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function T(e){let{className:t}=e;const a=(0,k.E)();return a.banner?n.createElement(y,{className:t,versionMetadata:a}):null}function U(e){let{className:t}=e;const a=(0,k.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,_.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(u.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(u.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return n.createElement(u.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function O(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:_.k.common.lastUpdated},n.createElement(u.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A={iconEdit:"iconEdit_Z9Sw"};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},M.apply(this,arguments)}function B(e){let{className:t,...a}=e;return n.createElement("svg",M({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function I(e){let{editUrl:t}=e;return n.createElement(p.Z,{to:t,className:_.k.common.editThisPage},n.createElement(B,null),n.createElement(u.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const j={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function P(e){let{permalink:t,label:a,count:l}=e;return n.createElement(p.Z,{href:t,className:(0,d.Z)(j.tag,l?j.tagWithCount:j.tagRegular)},a,l&&n.createElement("span",null,l))}const V={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(V.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:V.tag},n.createElement(P,{label:t,permalink:a}))}))))}const D={lastUpdated:"lastUpdated_vwxv"};function S(e){return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(H,e)))}function F(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(I,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",D.lastUpdated)},(a||l)&&n.createElement(O,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.Z)(_.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(S,{tags:o}),i&&n.createElement(F,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var z=a(6043),G=a(3743);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},q.apply(this,arguments)}function J(e){let{collapsed:t,...a}=e;return n.createElement("button",q({type:"button"},a,{className:(0,d.Z)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,a.className)}),n.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function X(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,z.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(Q.tocCollapsible,!o&&Q.tocCollapsibleExpanded,a)},n.createElement(J,{collapsed:o,onClick:s}),n.createElement(z.z,{lazy:!0,className:Q.tocCollapsibleContent,collapsed:o},n.createElement(G.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const Y={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=c();return n.createElement(X,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(_.k.docs.docTocMobile,Y.tocMobile)})}var K=a(9407);function ee(){const{toc:e,frontMatter:t}=c();return n.createElement(K.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:_.k.docs.docTocDesktop})}var te=a(2503),ae=a(2196);function ne(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(_.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(te.Z,{as:"h1"},a)),n.createElement(ae.Z,null,t))}var le=a(2802),re=a(8596),oe=a(4996);function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},se.apply(this,arguments)}function ce(e){return n.createElement("svg",se({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ie={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function de(){const e=(0,oe.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ce,{className:ie.breadcrumbHomeIcon})))}const me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ue.apply(this,arguments)}function pe(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(p.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function be(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",ue({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function he(){const e=(0,le.s1)(),t=(0,re.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(_.k.docs.docBreadcrumbs,me.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(de,null),e.map(((t,a)=>{const l=a===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return n.createElement(be,{key:a,active:l,index:a,addMicrodata:!!r},n.createElement(pe,{href:r,isLast:l},t.label))})))):null}var ge=a(2212);const ve={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ee(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement($,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(ee,null)}}(),{metadata:{unlisted:l}}=c();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&ve.docItemCol)},l&&n.createElement(ge.Z,null),n.createElement(T,null),n.createElement("div",{className:ve.docItemContainer},n.createElement("article",null,n.createElement(he,null),n.createElement(U,null),a.mobile,n.createElement(ne,null,t),n.createElement(R,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function fe(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(Ee,null,n.createElement(a,null))))}}}]);