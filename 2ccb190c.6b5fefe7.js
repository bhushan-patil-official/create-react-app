/*! For license information please see 2ccb190c.6b5fefe7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return t?a.a.createElement(m,l(l({ref:n},b),{},{components:t})):a.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";e.exports=t(115)},115:function(e,n,t){"use strict";var r=t(116),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113;a&&Symbol.for("react.suspense_list");var m=a?Symbol.for("react.memo"):60115,f=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function y(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}function N(){}function g(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var C=g.prototype=new N;C.constructor=g,r(C,y.prototype),C.isPureReactComponent=!0;var w={current:null},E={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,a={},i=null,l=null;if(null!=n)for(r in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)_.call(n,r)&&!P.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var b=Array(c),u=0;u<c;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:E.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g,S=[];function x(e,n,t,r){if(S.length){var a=S.pop();return a.result=e,a.keyPrefix=n,a.func=t,a.context=r,a.count=0,a}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function D(e,n,t,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return t(r,e,""===n?"."+I(e,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var b=n+I(a=e[c],c);l+=D(a,b,t,r)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=v&&e[v]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),c=0;!(a=e.next()).done;)l+=D(a=a.value,b=n+I(a,c++),t,r);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return l}function q(e,n,t){return null==e?0:D(e,"",n,t)}function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function V(e,n){e.func.call(e.context,n,e.count++)}function $(e,n,t){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?M(e,r,t,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+t)),r.push(e))}function M(e,n,t,r,a){var o="";null!=t&&(o=(""+t).replace(A,"$&/")+"/"),q(e,$,n=x(n,o,r,a)),R(n)}function L(){var e=w.current;if(null===e)throw Error(h(321));return e}var F={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return M(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;q(e,V,n=x(null,null,n,t)),R(n)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var n=[];return M(e,n,null,(function(e){return e})),n},only:function(e){if(!T(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:y,PureComponent:g,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return L().useCallback(e,n)},useContext:function(e,n){return L().useContext(e,n)},useEffect:function(e,n){return L().useEffect(e,n)},useImperativeHandle:function(e,n,t){return L().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return L().useLayoutEffect(e,n)},useMemo:function(e,n){return L().useMemo(e,n)},useReducer:function(e,n,t){return L().useReducer(e,n,t)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:l,Profiler:b,StrictMode:c,Suspense:d,createElement:k,cloneElement:function(e,n,t){if(null==e)throw Error(h(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,c=E.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in n)_.call(n,u)&&!P.hasOwnProperty(u)&&(a[u]=void 0===n[u]&&void 0!==b?b[u]:n[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){b=Array(u);for(var s=0;s<u;s++)b[s]=arguments[s+2];a.children=b}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},createFactory:function(e){var n=k.bind(null,e);return n.type=e,n},isValidElement:T,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r}},W={default:F},U=W&&F||W;e.exports=U.default||U},116:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,n){for(var t,l,c=i(e),b=1;b<arguments.length;b++){for(var u in t=Object(arguments[b]))a.call(t,u)&&(c[u]=t[u]);if(r){l=r(t);for(var s=0;s<l.length;s++)o.call(t,l[s])&&(c[l[s]]=t[l[s]])}}return c}},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(114),t(113)),i={id:"adding-custom-environment-variables",title:"Adding Custom Environment Variables",sidebar_label:"Environment Variables"},l={unversionedId:"adding-custom-environment-variables",id:"adding-custom-environment-variables",isDocsHomePage:!1,title:"Adding Custom Environment Variables",description:"Note: this feature is available with react-scripts@0.2.3 and higher.",source:"@site/../docs/adding-custom-environment-variables.md",slug:"/adding-custom-environment-variables",permalink:"/docs/adding-custom-environment-variables",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-custom-environment-variables.md",version:"current",lastUpdatedBy:"Joe Haddad",lastUpdatedAt:1590736693,sidebar_label:"Environment Variables",sidebar:"docs",previous:{title:"Adding a Router",permalink:"/docs/adding-a-router"},next:{title:"Making a Progressive Web App",permalink:"/docs/making-a-progressive-web-app"}},c=[{value:"Referencing Environment Variables in the HTML",id:"referencing-environment-variables-in-the-html",children:[]},{value:"Adding Temporary Environment Variables In Your Shell",id:"adding-temporary-environment-variables-in-your-shell",children:[{value:"Windows (cmd.exe)",id:"windows-cmdexe",children:[]},{value:"Windows (Powershell)",id:"windows-powershell",children:[]},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",children:[]}]},{value:"Adding Development Environment Variables In <code>.env</code>",id:"adding-development-environment-variables-in-env",children:[{value:"What other <code>.env</code> files can be used?",id:"what-other-env-files-can-be-used",children:[]},{value:"Expanding Environment Variables In <code>.env</code>",id:"expanding-environment-variables-in-env",children:[]}]}],b={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(o.b)("p",null,"Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," defined for you, and any other environment variables starting with ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"WARNING: Do not store any secrets (such as private API keys) in your React app!"),Object(o.b)("p",{parentName:"blockquote"},"Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The environment variables are embedded during the build time"),". Since Create React App produces a static HTML/CSS/JS bundle, it can\u2019t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/title-and-meta-tags#injecting-data-from-the-server-into-the-page"}),"described here"),". Alternatively you can rebuild the app on the server anytime you change them."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid accidentally ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"}),"exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),Object(o.b)("p",null,"These environment variables will be defined for you on ",Object(o.b)("inlineCode",{parentName:"p"},"process.env"),". For example, having an environment variable named ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," will be exposed in your JS as ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE"),"."),Object(o.b)("p",null,"There is also a built-in environment variable called ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV"),". You can read it from ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". When you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm start"),", it is always equal to ",Object(o.b)("inlineCode",{parentName:"p"},"'development'"),", when you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," it is always equal to ",Object(o.b)("inlineCode",{parentName:"p"},"'test'"),", and when you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," to make a production bundle, it is always equal to ",Object(o.b)("inlineCode",{parentName:"p"},"'production'"),". ",Object(o.b)("strong",{parentName:"p"},"You cannot override ",Object(o.b)("inlineCode",{parentName:"strong"},"NODE_ENV")," manually.")," This prevents developers from accidentally deploying a slow development build to production."),Object(o.b)("p",null,"These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control."),Object(o.b)("p",null,"First, you need to have environment variables defined. For example, let\u2019s say you wanted to consume an environment variable inside a ",Object(o.b)("inlineCode",{parentName:"p"},"<form>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'render() {\n  return (\n    <div>\n      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>\n      <form>\n        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />\n      </form>\n    </div>\n  );\n}\n')),Object(o.b)("p",null,"During the build, ",Object(o.b)("inlineCode",{parentName:"p"},"process.env.REACT_APP_NOT_SECRET_CODE")," will be replaced with the current value of the ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," environment variable. Remember that the ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," variable will be set for you automatically."),Object(o.b)("p",null,"When you load the app in the browser and inspect the ",Object(o.b)("inlineCode",{parentName:"p"},"<input>"),", you will see its value set to ",Object(o.b)("inlineCode",{parentName:"p"},"abcdef"),", and the bold text will show the environment provided when using ",Object(o.b)("inlineCode",{parentName:"p"},"npm start"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div>\n  <small>You are running this application in <b>development</b> mode.</small>\n  <form>\n    <input type="hidden" value="abcdef" />\n  </form>\n</div>\n')),Object(o.b)("p",null,"The above form is looking for a variable called ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_NOT_SECRET_CODE")," from the environment. In order to consume this value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file. Both of these ways are described in the next few sections."),Object(o.b)("p",null,"Having access to the ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," is also useful for performing actions conditionally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"if (process.env.NODE_ENV !== 'production') {\n  analytics.disable();\n}\n")),Object(o.b)("p",null,"When you compile the app with ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build"),", the minification step will strip out this condition, and the resulting bundle will be smaller."),Object(o.b)("h2",{id:"referencing-environment-variables-in-the-html"},"Referencing Environment Variables in the HTML"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts@0.9.0")," and higher.")),Object(o.b)("p",null,"You can also access the environment variables starting with ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"public/index.html"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<title>%REACT_APP_WEBSITE_NAME%</title>\n")),Object(o.b)("p",null,"Note that the caveats from the above section apply:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Apart from a few built-in variables (",Object(o.b)("inlineCode",{parentName:"li"},"NODE_ENV")," and ",Object(o.b)("inlineCode",{parentName:"li"},"PUBLIC_URL"),"), variable names must start with ",Object(o.b)("inlineCode",{parentName:"li"},"REACT_APP_")," to work."),Object(o.b)("li",{parentName:"ul"},"The environment variables are injected at build time. If you need to inject them at runtime, ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server"}),"follow this approach instead"),".")),Object(o.b)("h2",{id:"adding-temporary-environment-variables-in-your-shell"},"Adding Temporary Environment Variables In Your Shell"),Object(o.b)("p",null,"Defining environment variables can vary between OSes. It\u2019s also important to know that this manner is temporary for the life of the shell session."),Object(o.b)("h3",{id:"windows-cmdexe"},"Windows (cmd.exe)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),'set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start\n')),Object(o.b)("p",null,"(Note: Quotes around the variable assignment are required to avoid a trailing whitespace.)"),Object(o.b)("h3",{id:"windows-powershell"},"Windows (Powershell)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-Powershell"}),'($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)\n')),Object(o.b)("h3",{id:"linux-macos-bash"},"Linux, macOS (Bash)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"REACT_APP_NOT_SECRET_CODE=abcdef npm start\n")),Object(o.b)("h2",{id:"adding-development-environment-variables-in-env"},"Adding Development Environment Variables In ",Object(o.b)("inlineCode",{parentName:"h2"},".env")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),Object(o.b)("p",null,"To define permanent environment variables, create a file called ",Object(o.b)("inlineCode",{parentName:"p"},".env")," in the root of your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"REACT_APP_NOT_SECRET_CODE=abcdef\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: You must create custom environment variables beginning with ",Object(o.b)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527"}),"accidentally exposing a private key on the machine that could have the same name"),". Changing any environment variables will require you to restart the development server if it is running.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: You need to restart the development server after changing ",Object(o.b)("inlineCode",{parentName:"p"},".env")," files.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".env")," files ",Object(o.b)("strong",{parentName:"p"},"should be")," checked into source control (with the exclusion of ",Object(o.b)("inlineCode",{parentName:"p"},".env*.local"),")."),Object(o.b)("h3",{id:"what-other-env-files-can-be-used"},"What other ",Object(o.b)("inlineCode",{parentName:"h3"},".env")," files can be used?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is ",Object(o.b)("strong",{parentName:"p"},"available with ",Object(o.b)("inlineCode",{parentName:"strong"},"react-scripts@1.0.0")," and higher"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".env"),": Default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".env.local"),": Local overrides. ",Object(o.b)("strong",{parentName:"li"},"This file is loaded for all environments except test.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".env.development"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.test"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.production"),": Environment-specific settings."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},".env.development.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.test.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.production.local"),": Local overrides of environment-specific settings.")),Object(o.b)("p",null,"Files on the left have more priority than files on the right:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm start"),": ",Object(o.b)("inlineCode",{parentName:"li"},".env.development.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.development"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm run build"),": ",Object(o.b)("inlineCode",{parentName:"li"},".env.production.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.production"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm test"),": ",Object(o.b)("inlineCode",{parentName:"li"},".env.test.local"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.test"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env")," (note ",Object(o.b)("inlineCode",{parentName:"li"},".env.local")," is missing)")),Object(o.b)("p",null,"These variables will act as the defaults if the machine does not explicitly set them."),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/motdotla/dotenv"}),"dotenv documentation")," for more details."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need\nthese defined as well. Consult their documentation how to do this. For example, see the documentation for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.travis-ci.com/user/environment-variables/"}),"Travis CI")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/config-vars"}),"Heroku"),".")),Object(o.b)("h3",{id:"expanding-environment-variables-in-env"},"Expanding Environment Variables In ",Object(o.b)("inlineCode",{parentName:"h3"},".env")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts@1.1.0")," and higher.")),Object(o.b)("p",null,"Expand variables already on your machine for use in your ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file (using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/motdotla/dotenv-expand"}),"dotenv-expand"),")."),Object(o.b)("p",null,"For example, to get the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"npm_package_version"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"REACT_APP_VERSION=$npm_package_version\n# also works:\n# REACT_APP_VERSION=${npm_package_version}\n")),Object(o.b)("p",null,"Or expand variables local to the current ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"DOMAIN=www.example.com\nREACT_APP_FOO=$DOMAIN/foo\nREACT_APP_BAR=$DOMAIN/bar\n")))}u.isMDXComponent=!0}}]);