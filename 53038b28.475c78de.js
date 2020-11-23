/*! For license information please see 53038b28.475c78de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||u;return n?o.a.createElement(d,a(a({ref:t},s),{},{components:n})):o.a.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<u;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var S={current:null},C={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var N=/\/+/g,T=[];function $(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case i:a=!0}}if(a)return n(r,e,""===t?"."+I(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=t+I(o=e[c],c);a+=D(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=y&&e[y]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),c=0;!(o=e.next()).done;)a+=D(o=o.value,s=t+I(o,c++),n,r);else if("object"===o)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function A(e,t,n){return null==e?0:D(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?J(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function J(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(N,"$&/")+"/"),A(e,U,t=$(t,u,r,o)),R(t)}function M(){var e=S.current;if(null===e)throw Error(m(321));return e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return J(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,q,t=$(null,null,t,n)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return J(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(m(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return M().useCallback(e,t)},useContext:function(e,t){return M().useContext(e,t)},useEffect:function(e,t){return M().useEffect(e,t)},useImperativeHandle:function(e,t,n){return M().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return M().useLayoutEffect(e,t)},useMemo:function(e,t){return M().useMemo(e,t)},useReducer:function(e,t,n){return M().useReducer(e,t,n)},useRef:function(e){return M().useRef(e)},useState:function(e){return M().useState(e)},Fragment:a,Profiler:s,StrictMode:c,Suspense:b,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)x.call(t,l)&&!P.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},B={default:V},F=B&&V||B;e.exports=F.default||F},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,c=i(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(c[l]=n[l]);if(r){a=r(n);for(var p=0;p<a.length;p++)u.call(n,a[p])&&(c[a[p]]=n[a[p]])}}return c}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),u=(n(114),n(113)),i={id:"debugging-tests",title:"Debugging Tests",sidebar_label:"Debugging Tests"},a={unversionedId:"debugging-tests",id:"debugging-tests",isDocsHomePage:!1,title:"Debugging Tests",description:"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and Visual Studio Code.",source:"@site/../docs/debugging-tests.md",slug:"/debugging-tests",permalink:"/docs/debugging-tests",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/debugging-tests.md",version:"current",lastUpdatedBy:"Ian Sutherland",lastUpdatedAt:1571940855,sidebar_label:"Debugging Tests",sidebar:"docs",previous:{title:"Running Tests",permalink:"/docs/running-tests"},next:{title:"Proxying API Requests in Development",permalink:"/docs/proxying-api-requests-in-development"}},c=[{value:"Debugging Tests in Chrome",id:"debugging-tests-in-chrome",children:[]},{value:"Debugging Tests in Visual Studio Code",id:"debugging-tests-in-visual-studio-code",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"There are various ways to setup a debugger for your Jest tests. We cover debugging in Chrome and ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"."),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"Note: debugging tests requires Node 8 or higher.")),Object(u.b)("h2",{id:"debugging-tests-in-chrome"},"Debugging Tests in Chrome"),Object(u.b)("p",null,"Add the following to the ",Object(u.b)("inlineCode",{parentName:"p"},"scripts")," section in your project's ",Object(u.b)("inlineCode",{parentName:"p"},"package.json")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"\n  }\n')),Object(u.b)("p",null,"Place ",Object(u.b)("inlineCode",{parentName:"p"},"debugger;")," statements in any test and run:"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm run test:debug\n")),Object(u.b)("p",null,"This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process."),Object(u.b)("p",null,"Open the following in Chrome"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"about:inspect\n")),Object(u.b)("p",null,"After opening that link, the Chrome Developer Tools will be displayed. Select ",Object(u.b)("inlineCode",{parentName:"p"},"inspect"),' on your process and a breakpoint will be set at the first line of the react script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.'),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"Note: the --runInBand cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.")),Object(u.b)("h2",{id:"debugging-tests-in-visual-studio-code"},"Debugging Tests in Visual Studio Code"),Object(u.b)("p",null,"Debugging Jest tests is supported out of the box for ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"Visual Studio Code"),"."),Object(u.b)("p",null,"Use the following ",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"}),Object(u.b)("inlineCode",{parentName:"a"},"launch.json"))," configuration file:"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],\n      "cwd": "${workspaceRoot}",\n      "protocol": "inspector",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen",\n      "env": { "CI": "true" },\n      "disableOptimisticBPs": true\n    }\n  ]\n}\n')))}l.isMDXComponent=!0}}]);