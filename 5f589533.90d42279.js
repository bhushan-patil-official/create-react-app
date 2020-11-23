/*! For license information please see 5f589533.90d42279.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=w.prototype=new v;x.constructor=w,r(x,g.prototype),x.isPureReactComponent=!0;var N={current:null},k={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,_=[];function R(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function I(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return n(r,e,""===t?"."+$(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+$(o=e[l],l);c+=I(o,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=m&&e[m]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=I(o=o.value,u=t+$(o,l++),n,r);else if("object"===o)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function A(e,t,n){return null==e?0:I(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(q(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),A(e,H,t=R(t,a,r,o)),T(t)}function U(){var e=N.current;if(null===e)throw Error(y(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,D,t=R(null,null,t,n)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!q(e))throw Error(y(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,Profiler:u,StrictMode:l,Suspense:f,createElement:P,cloneElement:function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)C.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:q,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},L={default:F},Y=L&&F||L;e.exports=Y.default||Y},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(l[p]=n[p]);if(r){c=r(n);for(var s=0;s<c.length;s++)a.call(n,c[s])&&(l[c[s]]=n[c[s]])}}return l}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(114),n(113)),i={id:"proxying-api-requests-in-development",title:"Proxying API Requests in Development",sidebar_label:"Proxying in Development"},c={unversionedId:"proxying-api-requests-in-development",id:"proxying-api-requests-in-development",isDocsHomePage:!1,title:"Proxying API Requests in Development",description:"Note: this feature is available with react-scripts@0.2.3 and higher.",source:"@site/../docs/proxying-api-requests-in-development.md",slug:"/proxying-api-requests-in-development",permalink:"/docs/proxying-api-requests-in-development",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/proxying-api-requests-in-development.md",version:"current",lastUpdatedBy:"Herman J. Radtke III",lastUpdatedAt:1583285031,sidebar_label:"Proxying in Development",sidebar:"docs",previous:{title:"Debugging Tests",permalink:"/docs/debugging-tests"},next:{title:"Fetching Data with AJAX Requests",permalink:"/docs/fetching-data-with-ajax-requests"}},l=[{value:"&quot;Invalid Host Header&quot; Errors After Configuring Proxy",id:"invalid-host-header-errors-after-configuring-proxy",children:[]},{value:"Configuring the Proxy Manually",id:"configuring-the-proxy-manually",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.3")," and higher.")),Object(a.b)("p",null,"People often serve the front-end React app from the same host and port as their backend implementation."),Object(a.b)("p",null,"For example, a production setup might look like this after the app is deployed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/             - static server returns index.html with React app\n/todos        - static server returns index.html with React app\n/api/todos    - server handles any /api/* requests using the backend implementation\n")),Object(a.b)("p",null,"Such setup is ",Object(a.b)("strong",{parentName:"p"},"not")," required. However, if you ",Object(a.b)("strong",{parentName:"p"},"do")," have a setup like this, it is convenient to write requests like ",Object(a.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," without worrying about redirecting them to another host or port during development."),Object(a.b)("p",null,"To tell the development server to proxy any unknown requests to your API server in development, add a ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," field to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'  "proxy": "http://localhost:4000",\n')),Object(a.b)("p",null,"This way, when you ",Object(a.b)("inlineCode",{parentName:"p"},"fetch('/api/todos')")," in development, the development server will recognize that it\u2019s not a static asset, and will proxy your request to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:4000/api/todos")," as a fallback. The development server will ",Object(a.b)("strong",{parentName:"p"},"only")," attempt to send requests without ",Object(a.b)("inlineCode",{parentName:"p"},"text/html")," in its ",Object(a.b)("inlineCode",{parentName:"p"},"Accept")," header to the proxy."),Object(a.b)("p",null,"Conveniently, this avoids ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations"}),"CORS issues")," and error messages like this in development:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.\n")),Object(a.b)("p",null,"Keep in mind that ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," only has effect in development (with ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),"), and it is up to you to ensure that URLs like ",Object(a.b)("inlineCode",{parentName:"p"},"/api/todos")," point to the right thing in production. You don\u2019t have to use the ",Object(a.b)("inlineCode",{parentName:"p"},"/api")," prefix. Any unrecognized request without a ",Object(a.b)("inlineCode",{parentName:"p"},"text/html")," accept header will be redirected to the specified ",Object(a.b)("inlineCode",{parentName:"p"},"proxy"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option supports HTTP, HTTPS and WebSocket connections."),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(a.b)("strong",{parentName:"p"},"not")," flexible enough for you, alternatively you can:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#configuring-the-proxy-manually"}),"Configure the proxy yourself")),Object(a.b)("li",{parentName:"ul"},"Enable CORS on your server (",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://enable-cors.org/server_expressjs.html"}),"here\u2019s how to do it for Express"),")."),Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/adding-custom-environment-variables"}),"environment variables")," to inject the right server host and port into your app.")),Object(a.b)("h2",{id:"invalid-host-header-errors-after-configuring-proxy"},'"Invalid Host Header" Errors After Configuring Proxy'),Object(a.b)("p",null,"When you enable the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a"}),"this article")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/webpack/webpack-dev-server/issues/887"}),"this issue"),"."),Object(a.b)("p",null,"This shouldn\u2019t affect you when developing on ",Object(a.b)("inlineCode",{parentName:"p"},"localhost"),", but if you develop remotely like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/2271"}),"described here"),", you will see this error in the browser after enabling the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Invalid Host header")),Object(a.b)("p",null,"To work around it, you can specify your public development host in a file called ",Object(a.b)("inlineCode",{parentName:"p"},".env.development")," in the root of your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"HOST=mypublicdevhost.com\n")),Object(a.b)("p",null,"If you restart the development server now and load the app from the specified host, it should work."),Object(a.b)("p",null,"If you are still having issues or if you\u2019re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to ",Object(a.b)("inlineCode",{parentName:"p"},".env.development.local"),". ",Object(a.b)("strong",{parentName:"p"},"Note that this is dangerous and exposes your machine to remote code execution from malicious websites:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# NOTE: THIS IS DANGEROUS!\n# It exposes your machine to attacks from the websites you visit.\nDANGEROUSLY_DISABLE_HOST_CHECK=true\n")),Object(a.b)("p",null,"We don\u2019t recommend this approach."),Object(a.b)("h2",{id:"configuring-the-proxy-manually"},"Configuring the Proxy Manually"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," option is ",Object(a.b)("strong",{parentName:"p"},"not")," flexible enough for you, you can get direct access to the Express app instance and hook up your own proxy middleware."),Object(a.b)("p",null,"You can use this feature in conjunction with the ",Object(a.b)("inlineCode",{parentName:"p"},"proxy")," property in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", but it is recommended you consolidate all of your logic into ",Object(a.b)("inlineCode",{parentName:"p"},"src/setupProxy.js"),"."),Object(a.b)("p",null,"First, install ",Object(a.b)("inlineCode",{parentName:"p"},"http-proxy-middleware")," using npm or Yarn:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install http-proxy-middleware --save\n$ # or\n$ yarn add http-proxy-middleware\n")),Object(a.b)("p",null,"Next, create ",Object(a.b)("inlineCode",{parentName:"p"},"src/setupProxy.js")," and place the following contents in it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  // ...\n};\n")),Object(a.b)("p",null,"You can now register proxies as you wish! Here's an example using the above ",Object(a.b)("inlineCode",{parentName:"p"},"http-proxy-middleware"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = function(app) {\n  app.use(\n    '/api',\n    createProxyMiddleware({\n      target: 'http://localhost:5000',\n      changeOrigin: true,\n    })\n  );\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," You do not need to import this file anywhere. It is automatically registered when you start the development server.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," This file only supports Node's JavaScript syntax. Be sure to only use supported language features (i.e. no support for Flow, ES Modules, etc).")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Passing the path to the proxy function allows you to use globbing and/or pattern matching on the path, which is more flexible than the express route matching.")))}p.isMDXComponent=!0}}]);