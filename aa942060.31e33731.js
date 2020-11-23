/*! For license information please see aa942060.31e33731.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,b=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?o.a.createElement(b,c(c({ref:t},i),{},{components:r})):o.a.createElement(b,c({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var q=w.prototype=new v;q.constructor=w,n(q,j.prototype),q.isPureReactComponent=!0;var k={current:null},S={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var i=Array(u),p=0;p<u;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,x=[];function $(e,t,r,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case l:c=!0}}if(c)return r(n,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var i=t+D(o=e[u],u);c+=T(o,i,r,n)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),u=0;!(o=e.next()).done;)c+=T(o=o.value,i=t+D(o,u++),r,n);else if("object"===o)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function A(e,t,r){return null==e?0:T(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),A(e,U,t=$(t,a,n,o)),R(t)}function L(){var e=k.current;if(null===e)throw Error(g(321));return e}var M={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,F,t=$(null,null,t,r)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(g(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,r){return L().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,r){return L().useReducer(e,t,r)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:c,Profiler:i,StrictMode:u,Suspense:d,createElement:N,cloneElement:function(e,t,r){if(null==e)throw Error(g(267,e));var o=n({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=S.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in t)C.call(t,p)&&!P.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==i?i[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){i=Array(p);for(var f=0;f<p;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:a,type:e.type,key:l,ref:c,props:o,_owner:u}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n}},B={default:M},V=B&&M||B;e.exports=V.default||V},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=l(e),i=1;i<arguments.length;i++){for(var p in r=Object(arguments[i]))o.call(r,p)&&(u[p]=r[p]);if(n){c=n(r);for(var f=0;f<c.length;f++)a.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(114),r(113)),l={id:"loading-graphql-files",title:"Loading .graphql Files",sidebar_label:"Loading .graphql Files"},c={unversionedId:"loading-graphql-files",id:"loading-graphql-files",isDocsHomePage:!1,title:"Loading .graphql Files",description:"To load .gql and .graphql files, first install the graphql and graphql.macro packages by running:",source:"@site/../docs/loading-graphql-files.md",slug:"/loading-graphql-files",permalink:"/docs/loading-graphql-files",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/loading-graphql-files.md",version:"current",lastUpdatedBy:"nagman",lastUpdatedAt:1556602004,sidebar_label:"Loading .graphql Files",sidebar:"docs",previous:{title:"Adding Images, Fonts, and Files",permalink:"/docs/adding-images-fonts-and-files"},next:{title:"Using the Public Folder",permalink:"/docs/using-the-public-folder"}},u=[],i={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To load ",Object(a.b)("inlineCode",{parentName:"p"},".gql")," and ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," files, first install the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql"))," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql.macro"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql.macro"))," packages by running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save graphql graphql.macro\n")),Object(a.b)("p",null,"Alternatively you may use ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add graphql graphql.macro\n")),Object(a.b)("p",null,"Then, whenever you want to load ",Object(a.b)("inlineCode",{parentName:"p"},".gql")," or ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," files, import the ",Object(a.b)("inlineCode",{parentName:"p"},"loader")," from the macro package:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { loader } from 'graphql.macro';\n\nconst query = loader('./foo.graphql');\n")),Object(a.b)("p",null,"And your results get automatically inlined! This means that if the file above, ",Object(a.b)("inlineCode",{parentName:"p"},"foo.graphql"),", contains the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  hello {\n    world\n  }\n}\n")),Object(a.b)("p",null,"The previous example turns into:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const query = {\n  'kind': 'Document',\n  'definitions': [{\n    ...\n  }],\n  'loc': {\n    ...\n    'source': {\n      'body': '\\\\\\\\n  query {\\\\\\\\n    hello {\\\\\\\\n      world\\\\\\\\n    }\\\\\\\\n  }\\\\\\\\n',\n      'name': 'GraphQL request',\n      ...\n    }\n  }\n};\n")),Object(a.b)("p",null,"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"gql")," template tag the same way you would use the non-macro version from ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-tag")," package with the added benefit of inlined parsing results."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { gql } from 'graphql.macro';\n \nconst query = gql`\n  query User {\n    user(id: 5) {\n      lastName\n      ...UserEntry1\n    }\n  }\n`;\n")))}p.isMDXComponent=!0}}]);