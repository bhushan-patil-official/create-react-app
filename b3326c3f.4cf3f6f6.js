/*! For license information please see b3326c3f.4cf3f6f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=s(n),y=r,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||a;return n?o.a.createElement(d,c(c({ref:t},i),{},{components:n})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var i=2;i<a;i++)u[i]=n[i];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},x={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)P.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var z=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case u:c=!0}}if(c)return n(r,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=t+D(o=e[l],l);c+=T(o,i,n,r)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,i=t+D(o,l++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function A(e,t,n){return null==e?0:T(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(z,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(z,"$&/")+"/"),A(e,U,t=R(t,a,r,o)),N(t)}function B(){var e=k.current;if(null===e)throw Error(h(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=R(null,null,t,n)),N(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:c,Profiler:i,StrictMode:l,Suspense:y,createElement:C,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=x.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)P.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:l}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},F={default:q},L=F&&q||F;e.exports=L.default||L},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=u(e),i=1;i<arguments.length;i++){for(var s in n=Object(arguments[i]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)a.call(n,c[f])&&(l[c[f]]=n[c[f]])}}return l}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(114),n(113)),u={id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",sidebar_label:"Analyzing Bundle Size"},c={unversionedId:"analyzing-the-bundle-size",id:"analyzing-the-bundle-size",isDocsHomePage:!1,title:"Analyzing the Bundle Size",description:"Source map explorer analyzes",source:"@site/../docs/analyzing-the-bundle-size.md",slug:"/analyzing-the-bundle-size",permalink:"/docs/analyzing-the-bundle-size",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/analyzing-the-bundle-size.md",version:"current",lastUpdatedBy:"Ioannis Cherouvim",lastUpdatedAt:1550812593,sidebar_label:"Analyzing Bundle Size",sidebar:"docs",previous:{title:"Developing Components in Isolation",permalink:"/docs/developing-components-in-isolation"},next:{title:"Using HTTPS in Development",permalink:"/docs/using-https-in-development"}},l=[],i={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/source-map-explorer"}),"Source map explorer")," analyzes\nJavaScript bundles using the source maps. This helps you understand where code\nbloat is coming from."),Object(a.b)("p",null,"To add Source map explorer to a Create React App project, follow these steps:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save source-map-explorer\n")),Object(a.b)("p",null,"Alternatively you may use ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add source-map-explorer\n")),Object(a.b)("p",null,"Then in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", add the following line to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "analyze": "source-map-explorer \'build/static/js/*.js\'",\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n')),Object(a.b)("p",null,"Then to analyze the bundle run the production build then run the analyze\nscript."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\nnpm run analyze\n")))}s.isMDXComponent=!0}}]);