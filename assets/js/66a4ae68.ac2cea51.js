"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,u(u({ref:t},c),{},{components:n})):a.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2268:function(e,t,n){n.r(t),n.d(t,{assets:function(){return I},contentTitle:function(){return D},default:function(){return _},frontMatter:function(){return C},metadata:function(){return j},toc:function(){return V}});var a=n(7462),r=n(3366),o=n(7294),u=n(3905),l=n(6010),i=n(2466),s=n(6550),c=n(1980),p=n(7392),d=n(12);function m(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function b(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,s.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(u),(0,o.useCallback)((function(e){if(u){var t=new URLSearchParams(r.location.search);t.set(u,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[u,r])]}function v(e){var t,n,a,r,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,s=e.groupId,c=f(e),p=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:u,tabValues:c})})),m=p[0],v=p[1],h=g({queryString:i,groupId:s}),k=h[0],y=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,d.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=w[0],T=w[1],E=function(){var e=null!=k?k:N;return b({value:e,tabValues:c})?e:null}();return(0,o.useEffect)((function(){E&&v(E)}),[E]),{selectedValue:m,selectValue:(0,o.useCallback)((function(e){if(!b({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,c]),tabValues:c}}var h=n(2389),k="tabList__CuJ",y="tabItem_LNqP";function w(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(p(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!=(o=c[u])?o:c[c.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":r===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var r=n.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function T(e){var t=v(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",k)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(N,(0,a.Z)({},e,t)))}function E(e){var t=(0,h.Z)();return o.createElement(T,(0,a.Z)({key:String(t)},e))}var x="tabItem_Ymn6";function O(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(x,a),hidden:n},t)}var S=["components"],C={id:"test",title:"Docusaurus Testing"},D=void 0,j={unversionedId:"test",id:"test",title:"Docusaurus Testing",description:"This file is meant to show what Docusaurus is capable of and how it looks in this projects styles",source:"@site/../docs/test.mdx",sourceDirName:".",slug:"/test",permalink:"/mongodb-memory-server/docs/test",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/test.mdx",tags:[],version:"current",frontMatter:{id:"test",title:"Docusaurus Testing"}},I={},V=[{value:"Callouts / Admonitions",id:"callouts--admonitions",level:2},{value:"Specify type and title",id:"specify-type-and-title",level:3},{value:"Badges",id:"badges",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Extra Code Block Styling",id:"extra-code-block-styling",level:2}],P={toc:V};function _(e){var t=e.components,n=(0,r.Z)(e,S);return(0,u.kt)("wrapper",(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"This file is meant to show what Docusaurus is capable of and how it looks in this projects styles"),(0,u.kt)("p",null,"Sources:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/"},"Docusaurus Documentation")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://infima.dev/docs/getting-started/introduction"},"infima Documentation"))),(0,u.kt)("h2",{id:"callouts--admonitions"},"Callouts / Admonitions"),(0,u.kt)("admonition",{type:"note"},(0,u.kt)("p",{parentName:"admonition"},"The content and title ",(0,u.kt)("em",{parentName:"p"},"can")," include markdown.")),(0,u.kt)("admonition",{title:"You can specify an optional title",type:"tip"},(0,u.kt)("p",{parentName:"admonition"},"Heads up! Here's a pro-tip.")),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Useful information.")),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},"Warning! You better pay attention!")),(0,u.kt)("admonition",{type:"danger"},(0,u.kt)("p",{parentName:"admonition"},"Danger danger, mayday!")),(0,u.kt)("h3",{id:"specify-type-and-title"},"Specify type and title"),(0,u.kt)("admonition",{title:"Your Title",type:"note"},(0,u.kt)("p",{parentName:"admonition"},"The content and title ",(0,u.kt)("em",{parentName:"p"},"can")," include markdown.")),(0,u.kt)("h2",{id:"badges"},"Badges"),(0,u.kt)("span",{class:"badge badge--primary"},"Primary"),(0,u.kt)("span",{class:"badge badge--secondary"},"Secondary"),(0,u.kt)("span",{class:"badge badge--success"},"Success"),(0,u.kt)("span",{class:"badge badge--info"},"Info"),(0,u.kt)("span",{class:"badge badge--warning"},"Warning"),(0,u.kt)("span",{class:"badge badge--danger"},"Danger"),(0,u.kt)("h2",{id:"tabs"},"Tabs"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Tabs")),(0,u.kt)(E,{groupId:"test-tabs",mdxType:"Tabs"},(0,u.kt)(O,{value:"tab1",label:"Tab 1",default:!0,mdxType:"TabItem"},(0,u.kt)("p",null,"Hello Tab 1, text first"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-txt"},"Code in Tab 1\n"))),(0,u.kt)(O,{value:"tab2",label:"Tab 2",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-txt"},"Code in Tab 2\n")),(0,u.kt)("p",null,"Hello Tab 2, text last"))),(0,u.kt)("h2",{id:"extra-code-block-styling"},"Extra Code Block Styling"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"Extra Code Block Styling")),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting"},"Highlighting lines"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},'import something from "some";\n\n// highlight-start\nclass SomeClass {\n  public hello?: string\n}\n// highlight-end\n\nexport SomeClass;\n')),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-numbering"},"Line Numbering"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},'import something from "some";\n\nclass SomeClass {\n  public hello?: string\n}\n\nexport SomeClass;\n')),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#npm2yarn-remark-plugin"},"Yarn & NPM"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install somepackage\n")))}_.isMDXComponent=!0}}]);