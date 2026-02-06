(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const _ of m)if(_.type==="childList")for(const x of _.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(m){const _={};return m.integrity&&(_.integrity=m.integrity),m.referrerPolicy&&(_.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?_.credentials="include":m.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function u(m){if(m.ep)return;m.ep=!0;const _=f(m);fetch(m.href,_)}})();var Go={exports:{}},$n={};var am;function Wh(){if(am)return $n;am=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,_){var x=null;if(_!==void 0&&(x=""+_),m.key!==void 0&&(x=""+m.key),"key"in m){_={};for(var E in m)E!=="key"&&(_[E]=m[E])}else _=m;return m=_.ref,{$$typeof:o,type:u,key:x,ref:m!==void 0?m:null,props:_}}return $n.Fragment=d,$n.jsx=f,$n.jsxs=f,$n}var lm;function $h(){return lm||(lm=1,Go.exports=Wh()),Go.exports}var s=$h(),Vo={exports:{}},ae={};var nm;function Ih(){if(nm)return ae;nm=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),x=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),H=Symbol.iterator;function F(v){return v===null||typeof v!="object"?null:(v=H&&v[H]||v["@@iterator"],typeof v=="function"?v:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,X={};function K(v,z,Y){this.props=v,this.context=z,this.refs=X,this.updater=Y||k}K.prototype.isReactComponent={},K.prototype.setState=function(v,z){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,z,"setState")},K.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function G(){}G.prototype=K.prototype;function J(v,z,Y){this.props=v,this.context=z,this.refs=X,this.updater=Y||k}var pe=J.prototype=new G;pe.constructor=J,q(pe,K.prototype),pe.isPureReactComponent=!0;var de=Array.isArray;function ve(){}var ee={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function qe(v,z,Y){var V=Y.ref;return{$$typeof:o,type:v,key:z,ref:V!==void 0?V:null,props:Y}}function Je(v,z){return qe(v.type,z,v.props)}function ct(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function Be(v){var z={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Y){return z[Y]})}var Ht=/\/+/g;function rt(v,z){return typeof v=="object"&&v!==null&&v.key!=null?Be(""+v.key):z.toString(36)}function dt(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ve,ve):(v.status="pending",v.then(function(z){v.status==="pending"&&(v.status="fulfilled",v.value=z)},function(z){v.status==="pending"&&(v.status="rejected",v.reason=z)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function R(v,z,Y,V,I){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var _e=!1;if(v===null)_e=!0;else switch(se){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(v.$$typeof){case o:case d:_e=!0;break;case D:return _e=v._init,R(_e(v._payload),z,Y,V,I)}}if(_e)return I=I(v),_e=V===""?"."+rt(v,0):V,de(I)?(Y="",_e!=null&&(Y=_e.replace(Ht,"$&/")+"/"),R(I,z,Y,"",function(ga){return ga})):I!=null&&(ct(I)&&(I=Je(I,Y+(I.key==null||v&&v.key===I.key?"":(""+I.key).replace(Ht,"$&/")+"/")+_e)),z.push(I)),1;_e=0;var We=V===""?".":V+":";if(de(v))for(var Me=0;Me<v.length;Me++)V=v[Me],se=We+rt(V,Me),_e+=R(V,z,Y,se,I);else if(Me=F(v),typeof Me=="function")for(v=Me.call(v),Me=0;!(V=v.next()).done;)V=V.value,se=We+rt(V,Me++),_e+=R(V,z,Y,se,I);else if(se==="object"){if(typeof v.then=="function")return R(dt(v),z,Y,V,I);throw z=String(v),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return _e}function B(v,z,Y){if(v==null)return v;var V=[],I=0;return R(v,V,"","",function(se){return z.call(Y,se,I++)}),V}function W(v){if(v._status===-1){var z=v._result;z=z(),z.then(function(Y){(v._status===0||v._status===-1)&&(v._status=1,v._result=Y)},function(Y){(v._status===0||v._status===-1)&&(v._status=2,v._result=Y)}),v._status===-1&&(v._status=0,v._result=z)}if(v._status===1)return v._result.default;throw v._result}var he=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},fe={map:B,forEach:function(v,z,Y){B(v,function(){z.apply(this,arguments)},Y)},count:function(v){var z=0;return B(v,function(){z++}),z},toArray:function(v){return B(v,function(z){return z})||[]},only:function(v){if(!ct(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ae.Activity=j,ae.Children=fe,ae.Component=K,ae.Fragment=f,ae.Profiler=m,ae.PureComponent=J,ae.StrictMode=u,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ae.__COMPILER_RUNTIME={__proto__:null,c:function(v){return ee.H.useMemoCache(v)}},ae.cache=function(v){return function(){return v.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(v,z,Y){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=q({},v.props),I=v.key;if(z!=null)for(se in z.key!==void 0&&(I=""+z.key),z)!Te.call(z,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&z.ref===void 0||(V[se]=z[se]);var se=arguments.length-2;if(se===1)V.children=Y;else if(1<se){for(var _e=Array(se),We=0;We<se;We++)_e[We]=arguments[We+2];V.children=_e}return qe(v.type,I,V)},ae.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:_,_context:v},v},ae.createElement=function(v,z,Y){var V,I={},se=null;if(z!=null)for(V in z.key!==void 0&&(se=""+z.key),z)Te.call(z,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=z[V]);var _e=arguments.length-2;if(_e===1)I.children=Y;else if(1<_e){for(var We=Array(_e),Me=0;Me<_e;Me++)We[Me]=arguments[Me+2];I.children=We}if(v&&v.defaultProps)for(V in _e=v.defaultProps,_e)I[V]===void 0&&(I[V]=_e[V]);return qe(v,se,I)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(v){return{$$typeof:E,render:v}},ae.isValidElement=ct,ae.lazy=function(v){return{$$typeof:D,_payload:{_status:-1,_result:v},_init:W}},ae.memo=function(v,z){return{$$typeof:h,type:v,compare:z===void 0?null:z}},ae.startTransition=function(v){var z=ee.T,Y={};ee.T=Y;try{var V=v(),I=ee.S;I!==null&&I(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ve,he)}catch(se){he(se)}finally{z!==null&&Y.types!==null&&(z.types=Y.types),ee.T=z}},ae.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ae.use=function(v){return ee.H.use(v)},ae.useActionState=function(v,z,Y){return ee.H.useActionState(v,z,Y)},ae.useCallback=function(v,z){return ee.H.useCallback(v,z)},ae.useContext=function(v){return ee.H.useContext(v)},ae.useDebugValue=function(){},ae.useDeferredValue=function(v,z){return ee.H.useDeferredValue(v,z)},ae.useEffect=function(v,z){return ee.H.useEffect(v,z)},ae.useEffectEvent=function(v){return ee.H.useEffectEvent(v)},ae.useId=function(){return ee.H.useId()},ae.useImperativeHandle=function(v,z,Y){return ee.H.useImperativeHandle(v,z,Y)},ae.useInsertionEffect=function(v,z){return ee.H.useInsertionEffect(v,z)},ae.useLayoutEffect=function(v,z){return ee.H.useLayoutEffect(v,z)},ae.useMemo=function(v,z){return ee.H.useMemo(v,z)},ae.useOptimistic=function(v,z){return ee.H.useOptimistic(v,z)},ae.useReducer=function(v,z,Y){return ee.H.useReducer(v,z,Y)},ae.useRef=function(v){return ee.H.useRef(v)},ae.useState=function(v){return ee.H.useState(v)},ae.useSyncExternalStore=function(v,z,Y){return ee.H.useSyncExternalStore(v,z,Y)},ae.useTransition=function(){return ee.H.useTransition()},ae.version="19.2.3",ae}var im;function Io(){return im||(im=1,Vo.exports=Ih()),Vo.exports}var T=Io(),Xo={exports:{}},In={},Qo={exports:{}},Fo={};var sm;function e_(){return sm||(sm=1,(function(o){function d(R,B){var W=R.length;R.push(B);e:for(;0<W;){var he=W-1>>>1,fe=R[he];if(0<m(fe,B))R[he]=B,R[W]=fe,W=he;else break e}}function f(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var B=R[0],W=R.pop();if(W!==B){R[0]=W;e:for(var he=0,fe=R.length,v=fe>>>1;he<v;){var z=2*(he+1)-1,Y=R[z],V=z+1,I=R[V];if(0>m(Y,W))V<fe&&0>m(I,Y)?(R[he]=I,R[V]=W,he=V):(R[he]=Y,R[z]=W,he=z);else if(V<fe&&0>m(I,W))R[he]=I,R[V]=W,he=V;else break e}}return B}function m(R,B){var W=R.sortIndex-B.sortIndex;return W!==0?W:R.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;o.unstable_now=function(){return _.now()}}else{var x=Date,E=x.now();o.unstable_now=function(){return x.now()-E}}var y=[],h=[],D=1,j=null,H=3,F=!1,k=!1,q=!1,X=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function pe(R){for(var B=f(h);B!==null;){if(B.callback===null)u(h);else if(B.startTime<=R)u(h),B.sortIndex=B.expirationTime,d(y,B);else break;B=f(h)}}function de(R){if(q=!1,pe(R),!k)if(f(y)!==null)k=!0,ve||(ve=!0,Be());else{var B=f(h);B!==null&&dt(de,B.startTime-R)}}var ve=!1,ee=-1,Te=5,qe=-1;function Je(){return X?!0:!(o.unstable_now()-qe<Te)}function ct(){if(X=!1,ve){var R=o.unstable_now();qe=R;var B=!0;try{e:{k=!1,q&&(q=!1,G(ee),ee=-1),F=!0;var W=H;try{t:{for(pe(R),j=f(y);j!==null&&!(j.expirationTime>R&&Je());){var he=j.callback;if(typeof he=="function"){j.callback=null,H=j.priorityLevel;var fe=he(j.expirationTime<=R);if(R=o.unstable_now(),typeof fe=="function"){j.callback=fe,pe(R),B=!0;break t}j===f(y)&&u(y),pe(R)}else u(y);j=f(y)}if(j!==null)B=!0;else{var v=f(h);v!==null&&dt(de,v.startTime-R),B=!1}}break e}finally{j=null,H=W,F=!1}B=void 0}}finally{B?Be():ve=!1}}}var Be;if(typeof J=="function")Be=function(){J(ct)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,rt=Ht.port2;Ht.port1.onmessage=ct,Be=function(){rt.postMessage(null)}}else Be=function(){K(ct,0)};function dt(R,B){ee=K(function(){R(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return H},o.unstable_next=function(R){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var W=H;H=B;try{return R()}finally{H=W}},o.unstable_requestPaint=function(){X=!0},o.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=H;H=R;try{return B()}finally{H=W}},o.unstable_scheduleCallback=function(R,B,W){var he=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?he+W:he):W=he,R){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=W+fe,R={id:D++,callback:B,priorityLevel:R,startTime:W,expirationTime:fe,sortIndex:-1},W>he?(R.sortIndex=W,d(h,R),f(y)===null&&R===f(h)&&(q?(G(ee),ee=-1):q=!0,dt(de,W-he))):(R.sortIndex=fe,d(y,R),k||F||(k=!0,ve||(ve=!0,Be()))),R},o.unstable_shouldYield=Je,o.unstable_wrapCallback=function(R){var B=H;return function(){var W=H;H=B;try{return R.apply(this,arguments)}finally{H=W}}}})(Fo)),Fo}var rm;function t_(){return rm||(rm=1,Qo.exports=e_()),Qo.exports}var Zo={exports:{}},st={};var om;function a_(){if(om)return st;om=1;var o=Io();function d(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)h+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function _(y,h,D){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:y,containerInfo:h,implementation:D}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(y,h){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return _(y,h,null,D)},st.flushSync=function(y){var h=x.T,D=u.p;try{if(x.T=null,u.p=2,y)return y()}finally{x.T=h,u.p=D,u.d.f()}},st.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(y,h))},st.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},st.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var D=h.as,j=E(D,h.crossOrigin),H=typeof h.integrity=="string"?h.integrity:void 0,F=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;D==="style"?u.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:j,integrity:H,fetchPriority:F}):D==="script"&&u.d.X(y,{crossOrigin:j,integrity:H,fetchPriority:F,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},st.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var D=E(h.as,h.crossOrigin);u.d.M(y,{crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(y)},st.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var D=h.as,j=E(D,h.crossOrigin);u.d.L(y,D,{crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},st.preloadModule=function(y,h){if(typeof y=="string")if(h){var D=E(h.as,h.crossOrigin);u.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(y)},st.requestFormReset=function(y){u.d.r(y)},st.unstable_batchedUpdates=function(y,h){return y(h)},st.useFormState=function(y,h,D){return x.H.useFormState(y,h,D)},st.useFormStatus=function(){return x.H.useHostTransitionStatus()},st.version="19.2.3",st}var um;function l_(){if(um)return Zo.exports;um=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Zo.exports=a_(),Zo.exports}var cm;function n_(){if(cm)return In;cm=1;var o=t_(),d=Io(),f=l_();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(_(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,c=n.child;c;){if(c===a){r=!0,a=n,l=i;break}if(c===l){r=!0,l=n,a=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===a){r=!0,a=i,l=n;break}if(c===l){r=!0,l=i,a=n;break}c=c.sibling}if(!r)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,H=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),J=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),Je=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=ct&&e[ct]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case X:return"StrictMode";case de:return"Suspense";case ve:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case J:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var dt=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},he=[],fe=-1;function v(e){return{current:e}}function z(e){0>fe||(e.current=he[fe],he[fe]=null,fe--)}function Y(e,t){fe++,he[fe]=e.current,e.current=t}var V=v(null),I=v(null),se=v(null),_e=v(null);function We(e,t){switch(Y(se,t),Y(I,e),Y(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tf(t),e=Ef(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(V),Y(V,e)}function Me(){z(V),z(I),z(se)}function ga(e){e.memoizedState!==null&&Y(_e,e);var t=V.current,a=Ef(t,e.type);t!==a&&(Y(I,e),Y(V,a))}function Xa(e){I.current===e&&(z(V),z(I)),_e.current===e&&(z(_e),Kn._currentValue=W)}var ul,tn;function Jt(e){if(ul===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||"",tn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ul+e+tn}var ze=!1;function cl(e,t){if(!e||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(A){var N=A}Reflect.construct(e,[],U)}else{try{U.call()}catch(A){N=A}e.call(U.prototype)}}else{try{throw Error()}catch(A){N=A}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(A){if(A&&N&&typeof A.stack=="string")return[A.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var p=r.split(`
`),w=c.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===w.length)for(l=p.length-1,n=w.length-1;1<=l&&0<=n&&p[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==w[n]){var M=`
`+p[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=n);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function dl(e,t){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return e.child!==t&&t!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return cl(e.type,!1);case 11:return cl(e.type.render,!1);case 1:return cl(e.type,!0);case 31:return Jt("Activity");default:return""}}function fl(e){try{var t="",a=null;do t+=dl(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var an=Object.prototype.hasOwnProperty,ln=o.unstable_scheduleCallback,ml=o.unstable_cancelCallback,ii=o.unstable_shouldYield,si=o.unstable_requestPaint,it=o.unstable_now,ri=o.unstable_getCurrentPriorityLevel,oi=o.unstable_ImmediatePriority,ui=o.unstable_UserBlockingPriority,pl=o.unstable_NormalPriority,C=o.unstable_LowPriority,L=o.unstable_IdlePriority,ne=o.log,te=o.unstable_setDisableYieldValue,Ye=null,xe=null;function Ge(e){if(typeof ne=="function"&&te(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Ye,e)}catch{}}var Se=Math.clz32?Math.clz32:sn,kt=Math.log,nn=Math.LN2;function sn(e){return e>>>=0,e===0?32:31-(kt(e)/nn|0)|0}var ya=256,ot=262144,Gt=4194304;function Pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ci(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Pt(l):(r&=c,r!==0?n=Pt(r):a||(a=c&~e,a!==0&&(n=Pt(a))))):(c=l&~i,c!==0?n=Pt(c):r!==0?n=Pt(r):a||(a=l&~e,a!==0&&(n=Pt(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iu(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function Ds(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function on(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qm(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var M=31-Se(a),U=1<<M;c[M]=0,p[M]=-1;var N=w[M];if(N!==null)for(w[M]=null,M=0;M<N.length;M++){var A=N[M];A!==null&&(A.lane&=-536870913)}a&=~U}l!==0&&su(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function su(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Se(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ru(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Se(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ou(e,t){var a=t&-t;return a=(a&42)!==0?1:Rs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uu(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Jf(e.type))}function cu(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var va=Math.random().toString(36).slice(2),et="__reactFiber$"+va,ft="__reactProps$"+va,hl="__reactContainer$"+va,Cs="__reactEvents$"+va,Bm="__reactListeners$"+va,Ym="__reactHandles$"+va,du="__reactResources$"+va,un="__reactMarker$"+va;function Os(e){delete e[et],delete e[ft],delete e[Cs],delete e[Bm],delete e[Ym]}function _l(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[hl]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Of(e);e!==null;){if(a=e[et])return a;e=Of(e)}return t}e=a,a=e.parentNode}return null}function gl(e){if(e=e[et]||e[hl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function yl(e){var t=e[du];return t||(t=e[du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[un]=!0}var fu=new Set,mu={};function Qa(e,t){vl(e,t),vl(e+"Capture",t)}function vl(e,t){for(mu[e]=t,e=0;e<t.length;e++)fu.add(t[e])}var Gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pu={},hu={};function Vm(e){return an.call(hu,e)?!0:an.call(pu,e)?!1:Gm.test(e)?hu[e]=!0:(pu[e]=!0,!1)}function di(e,t,a){if(Vm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Wt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zs(e){if(!e._valueTracker){var t=_u(e)?"checked":"value";e._valueTracker=Xm(e,t,""+e[t])}}function gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=_u(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qm=/[\n"\\]/g;function jt(e){return e.replace(Qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Us(e,t,a,l,n,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ls(e,r,Et(t)):a!=null?Ls(e,r,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Et(c):e.removeAttribute("name")}function yu(e,t,a,l,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){zs(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),zs(e)}function Ls(e,t,a){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function vu(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function xu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(dt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),zs(e)}function bl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Su(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&bu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&bu(e,i,t[i])}function Hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return Km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var ks=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,wl=null;function wu(e){var t=gl(e);if(t&&(e=t.stateNode)){var a=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Us(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[ft]||null;if(!n)throw Error(u(90));Us(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&gu(l)}break e;case"textarea":vu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&xl(e,!!a.multiple,t,!1)}}}var Bs=!1;function Nu(e,t,a){if(Bs)return e(t,a);Bs=!0;try{var l=e(t);return l}finally{if(Bs=!1,(Sl!==null||wl!==null)&&(ts(),Sl&&(t=Sl,e=wl,wl=Sl=null,wu(t),e)))for(t=0;t<e.length;t++)wu(e[t])}}function dn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ft]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(It)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Ys=!1}var xa=null,Gs=null,hi=null;function Tu(){if(hi)return hi;var e,t=Gs,a=t.length,l,n="value"in xa?xa.value:xa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return hi=n.slice(e,1<l?1-l:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function Eu(){return!1}function mt(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gi:Eu,this.isPropagationStopped=Eu,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=mt(Fa),mn=j({},Fa,{view:0,detail:0}),Jm=mt(mn),Vs,Xs,pn,vi=j({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(Vs=e.screenX-pn.screenX,Xs=e.screenY-pn.screenY):Xs=Vs=0,pn=e),Vs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),ju=mt(vi),Pm=j({},vi,{dataTransfer:0}),Wm=mt(Pm),$m=j({},mn,{relatedTarget:0}),Qs=mt($m),Im=j({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=mt(Im),tp=j({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=mt(tp),lp=j({},Fa,{data:0}),Au=mt(lp),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function Fs(){return rp}var op=j({},mn,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),up=mt(op),cp=j({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=mt(cp),dp=j({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),fp=mt(dp),mp=j({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=mt(mp),hp=j({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=mt(hp),gp=j({},Fa,{newState:0,oldState:0}),yp=mt(gp),vp=[9,13,27,32],Zs=It&&"CompositionEvent"in window,hn=null;It&&"documentMode"in document&&(hn=document.documentMode);var xp=It&&"TextEvent"in window&&!hn,Ru=It&&(!Zs||hn&&8<hn&&11>=hn),Mu=" ",Cu=!1;function Ou(e,t){switch(e){case"keyup":return vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function bp(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Cu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Cu?null:e;default:return null}}function Sp(e,t){if(Nl)return e==="compositionend"||!Zs&&Ou(e,t)?(e=Tu(),hi=Gs=xa=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wp[e.type]:t==="textarea"}function Lu(e,t,a,l){Sl?wl?wl.push(l):wl=[l]:Sl=l,t=os(t,"onChange"),0<t.length&&(a=new yi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var _n=null,gn=null;function Np(e){vf(e,0)}function xi(e){var t=cn(e);if(gu(t))return e}function Hu(e,t){if(e==="change")return t}var ku=!1;if(It){var Ks;if(It){var Js="oninput"in document;if(!Js){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Js=typeof qu.oninput=="function"}Ks=Js}else Ks=!1;ku=Ks&&(!document.documentMode||9<document.documentMode)}function Bu(){_n&&(_n.detachEvent("onpropertychange",Yu),gn=_n=null)}function Yu(e){if(e.propertyName==="value"&&xi(gn)){var t=[];Lu(t,gn,e,qs(e)),Nu(Np,t)}}function Tp(e,t,a){e==="focusin"?(Bu(),_n=t,gn=a,_n.attachEvent("onpropertychange",Yu)):e==="focusout"&&Bu()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(gn)}function jp(e,t){if(e==="click")return xi(t)}function Ap(e,t){if(e==="input"||e==="change")return xi(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Dp;function yn(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!an.call(t,n)||!vt(e[n],t[n]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var a=Gu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gu(a)}}function Xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=mi(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rp=It&&"documentMode"in document&&11>=document.documentMode,Tl=null,Ws=null,vn=null,$s=!1;function Fu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$s||Tl==null||Tl!==mi(l)||(l=Tl,"selectionStart"in l&&Ps(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vn&&yn(vn,l)||(vn=l,l=os(Ws,"onSelect"),0<l.length&&(t=new yi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Tl)))}function Za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var El={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Is={},Zu={};It&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function Ka(e){if(Is[e])return Is[e];if(!El[e])return e;var t=El[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Zu)return Is[e]=t[a];return e}var Ku=Ka("animationend"),Ju=Ka("animationiteration"),Pu=Ka("animationstart"),Mp=Ka("transitionrun"),Cp=Ka("transitionstart"),Op=Ka("transitioncancel"),Wu=Ka("transitionend"),$u=new Map,er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");er.push("scrollEnd");function qt(e,t){$u.set(e,t),Qa(t,[e])}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],jl=0,tr=0;function Si(){for(var e=jl,t=tr=jl=0;t<e;){var a=At[t];At[t++]=null;var l=At[t];At[t++]=null;var n=At[t];At[t++]=null;var i=At[t];if(At[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Iu(a,n,i)}}function wi(e,t,a,l){At[jl++]=e,At[jl++]=t,At[jl++]=a,At[jl++]=l,tr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ar(e,t,a,l){return wi(e,t,a,l),Ni(e)}function Ja(e,t){return wi(e,null,null,t),Ni(e)}function Iu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Se(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Ni(e){if(50<Yn)throw Yn=0,fo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Al={};function zp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,l){return new zp(e,t,a,l)}function lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ec(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")lr(e)&&(r=1);else if(typeof e=="string")r=qh(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=xt(31,a,t,n),e.elementType=qe,e.lanes=i,e;case q:return Pa(a.children,n,i,t);case X:r=8,n|=24;break;case K:return e=xt(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case de:return e=xt(13,a,t,n),e.elementType=de,e.lanes=i,e;case ve:return e=xt(19,a,t,n),e.elementType=ve,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:r=10;break e;case G:r=9;break e;case pe:r=11;break e;case ee:r=14;break e;case Te:r=16,l=null;break e}r=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=xt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Pa(e,t,a,l){return e=xt(7,e,l,t),e.lanes=a,e}function nr(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function tc(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function ir(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ac=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=ac.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fl(t)},ac.set(e,t),t)}return{value:e,source:t,stack:fl(t)}}var Dl=[],Rl=0,Ei=null,xn=0,Rt=[],Mt=0,ba=null,Vt=1,Xt="";function ta(e,t){Dl[Rl++]=xn,Dl[Rl++]=Ei,Ei=e,xn=t}function lc(e,t,a){Rt[Mt++]=Vt,Rt[Mt++]=Xt,Rt[Mt++]=ba,ba=e;var l=Vt;e=Xt;var n=32-Se(l)-1;l&=~(1<<n),a+=1;var i=32-Se(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Vt=1<<32-Se(t)+n|a<<n|l,Xt=i+e}else Vt=1<<i|a<<n|l,Xt=e}function sr(e){e.return!==null&&(ta(e,1),lc(e,1,0))}function rr(e){for(;e===Ei;)Ei=Dl[--Rl],Dl[Rl]=null,xn=Dl[--Rl],Dl[Rl]=null;for(;e===ba;)ba=Rt[--Mt],Rt[Mt]=null,Xt=Rt[--Mt],Rt[Mt]=null,Vt=Rt[--Mt],Rt[Mt]=null}function nc(e,t){Rt[Mt++]=Vt,Rt[Mt++]=Xt,Rt[Mt++]=ba,Vt=t.id,Xt=t.overflow,ba=e}var tt=null,Ce=null,me=!1,Sa=null,Ct=!1,or=Error(u(519));function wa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bn(Dt(t,e)),or}function ic(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[et]=e,t[ft]=l,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Vn.length;a++)oe(Vn[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),yu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),xu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||wf(t.textContent,a)?(l.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),l.onScroll!=null&&oe("scroll",t),l.onScrollEnd!=null&&oe("scrollend",t),l.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||wa(e,!0)}function sc(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:tt=tt.return}}function Ml(e){if(e!==tt)return!1;if(!me)return sc(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jo(e.type,e.memoizedProps)),a=!a),a&&Ce&&wa(e),sc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Cf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Cf(e)}else t===27?(t=Ce,Ha(e.type)?(e=Co,Co=null,Ce=e):Ce=t):Ce=tt?zt(e.stateNode.nextSibling):null;return!0}function Wa(){Ce=tt=null,me=!1}function ur(){var e=Sa;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Sa=null),e}function bn(e){Sa===null?Sa=[e]:Sa.push(e)}var cr=v(null),$a=null,aa=null;function Na(e,t,a){Y(cr,t._currentValue),t._currentValue=a}function la(e){e._currentValue=cr.current,z(cr)}function dr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var p=0;p<t.length;p++)if(c.context===t[p]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),dr(i.return,a,e),l||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(u(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),dr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=n.type;vt(n.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(n===_e.current){if(r=n.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Kn):e=[Kn])}n=n.return}e!==null&&fr(t,e,a,l),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){$a=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return rc($a,e)}function Ai(e,t){return $a===null&&Ia(e),rc(e,t)}function rc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(u(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var Up=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lp=o.unstable_scheduleCallback,Hp=o.unstable_NormalPriority,Qe={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mr(){return{controller:new Up,data:new Map,refCount:0}}function Sn(e){e.refCount--,e.refCount===0&&Lp(Hp,function(){e.controller.abort()})}var wn=null,pr=0,Ol=0,zl=null;function kp(e,t){if(wn===null){var a=wn=[];pr=0,Ol=yo(),zl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return pr++,t.then(oc,oc),t}function oc(){if(--pr===0&&wn!==null){zl!==null&&(zl.status="fulfilled");var e=wn;wn=null,Ol=0,zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var uc=R.S;R.S=function(e,t){Fd=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kp(e,t),uc!==null&&uc(e,t)};var el=v(null);function hr(){var e=el.current;return e!==null?e:De.pooledCache}function Di(e,t){t===null?Y(el,el.current):Y(el,t.pool)}function cc(){var e=hr();return e===null?null:{parent:Qe._currentValue,pool:e}}var Ul=Error(u(460)),_r=Error(u(474)),Ri=Error(u(542)),Mi={then:function(){}};function dc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($t,$t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pc(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pc(e),e}throw al=t,Ul}}function tl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(al=a,Ul):a}}var al=null;function mc(){if(al===null)throw Error(u(459));var e=al;return al=null,e}function pc(e){if(e===Ul||e===Ri)throw Error(u(483))}var Ll=null,Nn=0;function Ci(e){var t=Nn;return Nn+=1,Ll===null&&(Ll=[]),fc(Ll,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hc(e){function t(b,g){if(e){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=ea(b,g),b.index=0,b.sibling=null,b}function i(b,g,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=67108866,g):S):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function c(b,g,S,O){return g===null||g.tag!==6?(g=nr(S,b.mode,O),g.return=b,g):(g=n(g,S),g.return=b,g)}function p(b,g,S,O){var P=S.type;return P===q?M(b,g,S.props.children,O,S.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Te&&tl(P)===g.type)?(g=n(g,S.props),Tn(g,S),g.return=b,g):(g=Ti(S.type,S.key,S.props,null,b.mode,O),Tn(g,S),g.return=b,g)}function w(b,g,S,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=ir(S,b.mode,O),g.return=b,g):(g=n(g,S.children||[]),g.return=b,g)}function M(b,g,S,O,P){return g===null||g.tag!==7?(g=Pa(S,b.mode,O,P),g.return=b,g):(g=n(g,S),g.return=b,g)}function U(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=nr(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case F:return S=Ti(g.type,g.key,g.props,null,b.mode,S),Tn(S,g),S.return=b,S;case k:return g=ir(g,b.mode,S),g.return=b,g;case Te:return g=tl(g),U(b,g,S)}if(dt(g)||Be(g))return g=Pa(g,b.mode,S,null),g.return=b,g;if(typeof g.then=="function")return U(b,Ci(g),S);if(g.$$typeof===J)return U(b,Ai(b,g),S);Oi(b,g)}return null}function N(b,g,S,O){var P=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return P!==null?null:c(b,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case F:return S.key===P?p(b,g,S,O):null;case k:return S.key===P?w(b,g,S,O):null;case Te:return S=tl(S),N(b,g,S,O)}if(dt(S)||Be(S))return P!==null?null:M(b,g,S,O,null);if(typeof S.then=="function")return N(b,g,Ci(S),O);if(S.$$typeof===J)return N(b,g,Ai(b,S),O);Oi(b,S)}return null}function A(b,g,S,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return b=b.get(S)||null,c(g,b,""+O,P);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case F:return b=b.get(O.key===null?S:O.key)||null,p(g,b,O,P);case k:return b=b.get(O.key===null?S:O.key)||null,w(g,b,O,P);case Te:return O=tl(O),A(b,g,S,O,P)}if(dt(O)||Be(O))return b=b.get(S)||null,M(g,b,O,P,null);if(typeof O.then=="function")return A(b,g,S,Ci(O),P);if(O.$$typeof===J)return A(b,g,S,Ai(g,O),P);Oi(g,O)}return null}function Q(b,g,S,O){for(var P=null,ge=null,Z=g,ie=g=0,ce=null;Z!==null&&ie<S.length;ie++){Z.index>ie?(ce=Z,Z=null):ce=Z.sibling;var ye=N(b,Z,S[ie],O);if(ye===null){Z===null&&(Z=ce);break}e&&Z&&ye.alternate===null&&t(b,Z),g=i(ye,g,ie),ge===null?P=ye:ge.sibling=ye,ge=ye,Z=ce}if(ie===S.length)return a(b,Z),me&&ta(b,ie),P;if(Z===null){for(;ie<S.length;ie++)Z=U(b,S[ie],O),Z!==null&&(g=i(Z,g,ie),ge===null?P=Z:ge.sibling=Z,ge=Z);return me&&ta(b,ie),P}for(Z=l(Z);ie<S.length;ie++)ce=A(Z,b,ie,S[ie],O),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?ie:ce.key),g=i(ce,g,ie),ge===null?P=ce:ge.sibling=ce,ge=ce);return e&&Z.forEach(function(Ga){return t(b,Ga)}),me&&ta(b,ie),P}function $(b,g,S,O){if(S==null)throw Error(u(151));for(var P=null,ge=null,Z=g,ie=g=0,ce=null,ye=S.next();Z!==null&&!ye.done;ie++,ye=S.next()){Z.index>ie?(ce=Z,Z=null):ce=Z.sibling;var Ga=N(b,Z,ye.value,O);if(Ga===null){Z===null&&(Z=ce);break}e&&Z&&Ga.alternate===null&&t(b,Z),g=i(Ga,g,ie),ge===null?P=Ga:ge.sibling=Ga,ge=Ga,Z=ce}if(ye.done)return a(b,Z),me&&ta(b,ie),P;if(Z===null){for(;!ye.done;ie++,ye=S.next())ye=U(b,ye.value,O),ye!==null&&(g=i(ye,g,ie),ge===null?P=ye:ge.sibling=ye,ge=ye);return me&&ta(b,ie),P}for(Z=l(Z);!ye.done;ie++,ye=S.next())ye=A(Z,b,ie,ye.value,O),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?ie:ye.key),g=i(ye,g,ie),ge===null?P=ye:ge.sibling=ye,ge=ye);return e&&Z.forEach(function(Ph){return t(b,Ph)}),me&&ta(b,ie),P}function Ae(b,g,S,O){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case F:e:{for(var P=S.key;g!==null;){if(g.key===P){if(P=S.type,P===q){if(g.tag===7){a(b,g.sibling),O=n(g,S.props.children),O.return=b,b=O;break e}}else if(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Te&&tl(P)===g.type){a(b,g.sibling),O=n(g,S.props),Tn(O,S),O.return=b,b=O;break e}a(b,g);break}else t(b,g);g=g.sibling}S.type===q?(O=Pa(S.props.children,b.mode,O,S.key),O.return=b,b=O):(O=Ti(S.type,S.key,S.props,null,b.mode,O),Tn(O,S),O.return=b,b=O)}return r(b);case k:e:{for(P=S.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(b,g.sibling),O=n(g,S.children||[]),O.return=b,b=O;break e}else{a(b,g);break}else t(b,g);g=g.sibling}O=ir(S,b.mode,O),O.return=b,b=O}return r(b);case Te:return S=tl(S),Ae(b,g,S,O)}if(dt(S))return Q(b,g,S,O);if(Be(S)){if(P=Be(S),typeof P!="function")throw Error(u(150));return S=P.call(S),$(b,g,S,O)}if(typeof S.then=="function")return Ae(b,g,Ci(S),O);if(S.$$typeof===J)return Ae(b,g,Ai(b,S),O);Oi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(b,g.sibling),O=n(g,S),O.return=b,b=O):(a(b,g),O=nr(S,b.mode,O),O.return=b,b=O),r(b)):a(b,g)}return function(b,g,S,O){try{Nn=0;var P=Ae(b,g,S,O);return Ll=null,P}catch(Z){if(Z===Ul||Z===Ri)throw Z;var ge=xt(29,Z,null,b.mode);return ge.lanes=O,ge.return=b,ge}}}var ll=hc(!0),_c=hc(!1),Ta=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Ni(e),Iu(e,null,a),t}return wi(e,l,t,a),Ni(e)}function En(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ru(e,a)}}function vr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xr=!1;function jn(){if(xr){var e=zl;if(e!==null)throw e}}function An(e,t,a,l){xr=!1;var n=e.updateQueue;Ta=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var p=c,w=p.next;p.next=null,r===null?i=w:r.next=w,r=p;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==r&&(c===null?M.firstBaseUpdate=w:c.next=w,M.lastBaseUpdate=p))}if(i!==null){var U=n.baseState;r=0,M=w=p=null,c=i;do{var N=c.lane&-536870913,A=N!==c.lane;if(A?(ue&N)===N:(l&N)===N){N!==0&&N===Ol&&(xr=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,$=c;N=t;var Ae=a;switch($.tag){case 1:if(Q=$.payload,typeof Q=="function"){U=Q.call(Ae,U,N);break e}U=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=$.payload,N=typeof Q=="function"?Q.call(Ae,U,N):Q,N==null)break e;U=j({},U,N);break e;case 2:Ta=!0}}N=c.callback,N!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[N]:A.push(N))}else A={lane:N,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(w=M=A,p=U):M=M.next=A,r|=N;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;A=c,c=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);M===null&&(p=U),n.baseState=p,n.firstBaseUpdate=w,n.lastBaseUpdate=M,i===null&&(n.shared.lanes=0),Ca|=r,e.lanes=r,e.memoizedState=U}}function gc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function yc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gc(a[e],t)}var Hl=v(null),zi=v(0);function vc(e,t){e=fa,Y(zi,e),Y(Hl,t),fa=e|t.baseLanes}function br(){Y(zi,fa),Y(Hl,Hl.current)}function Sr(){fa=zi.current,z(Hl),z(zi)}var bt=v(null),Ot=null;function Aa(e){var t=e.alternate;Y(Ve,Ve.current&1),Y(bt,e),Ot===null&&(t===null||Hl.current!==null||t.memoizedState!==null)&&(Ot=e)}function wr(e){Y(Ve,Ve.current),Y(bt,e),Ot===null&&(Ot=e)}function xc(e){e.tag===22?(Y(Ve,Ve.current),Y(bt,e),Ot===null&&(Ot=e)):Da()}function Da(){Y(Ve,Ve.current),Y(bt,bt.current)}function St(e){z(bt),Ot===e&&(Ot=null),z(Ve)}var Ve=v(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ro(a)||Mo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=0,le=null,Ee=null,Fe=null,Li=!1,kl=!1,nl=!1,Hi=0,Dn=0,ql=null,Bp=0;function He(){throw Error(u(321))}function Nr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function Tr(e,t,a,l,n,i){return na=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?ld:Br,nl=!1,i=a(l,n),nl=!1,kl&&(i=Sc(t,a,l,n)),bc(e),i}function bc(e){R.H=Cn;var t=Ee!==null&&Ee.next!==null;if(na=0,Fe=Ee=le=null,Li=!1,Dn=0,ql=null,t)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&ji(e)&&(Ze=!0))}function Sc(e,t,a,l){le=e;var n=0;do{if(kl&&(ql=null),Dn=0,kl=!1,25<=n)throw Error(u(301));if(n+=1,Fe=Ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=nd,i=t(a,l)}while(kl);return i}function Yp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Rn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(le.flags|=1024),t}function Er(){var e=Hi!==0;return Hi=0,e}function jr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ar(e){if(Li){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Li=!1}na=0,Fe=Ee=le=null,kl=!1,Dn=Hi=0,ql=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?le.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Xe(){if(Ee===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Fe===null?le.memoizedState:Fe.next;if(t!==null)Fe=t,Ee=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Fe===null?le.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rn(e){var t=Dn;return Dn+=1,ql===null&&(ql=[]),e=fc(ql,e,t),t=le,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?ld:Br),e}function qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rn(e);if(e.$$typeof===J)return at(e)}throw Error(u(438,String(e)))}function Dr(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ki(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Je;return t.index++,a}function ia(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Xe();return Rr(t,Ee,e)}function Rr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=r=null,p=null,w=t,M=!1;do{var U=w.lane&-536870913;if(U!==w.lane?(ue&U)===U:(na&U)===U){var N=w.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),U===Ol&&(M=!0);else if((na&N)===N){w=w.next,N===Ol&&(M=!0);continue}else U={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=U,r=i):p=p.next=U,le.lanes|=N,Ca|=N;U=w.action,nl&&a(i,U),i=w.hasEagerState?w.eagerState:a(i,U)}else N={lane:U,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=N,r=i):p=p.next=N,le.lanes|=U,Ca|=U;w=w.next}while(w!==null&&w!==t);if(p===null?r=i:p.next=c,!vt(i,e.memoizedState)&&(Ze=!0,M&&(a=zl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mr(e){var t=Xe(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);vt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function wc(e,t,a){var l=le,n=Xe(),i=me;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var r=!vt((Ee||n).memoizedState,a);if(r&&(n.memoizedState=a,Ze=!0),n=n.queue,zr(Ec.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,Bl(9,{destroy:void 0},Tc.bind(null,l,n,a,t),null),De===null)throw Error(u(349));i||(na&127)!==0||Nc(l,t,a)}return a}function Nc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=ki(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Tc(e,t,a,l){t.value=a,t.getSnapshot=l,jc(t)&&Ac(e)}function Ec(e,t,a){return a(function(){jc(t)&&Ac(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function Ac(e){var t=Ja(e,2);t!==null&&yt(t,e,2)}function Cr(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),nl){Ge(!0);try{a()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t}function Dc(e,t,a,l){return e.baseState=a,Rr(e,Ee,typeof l=="function"?l:ia)}function Gp(e,t,a,l,n){if(Vi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Rc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Rc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,r={};R.T=r;try{var c=a(n,l),p=R.S;p!==null&&p(r,c),Mc(e,t,c)}catch(w){Or(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),R.T=i}}else try{i=a(n,l),Mc(e,t,i)}catch(w){Or(e,t,w)}}function Mc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cc(e,t,l)},function(l){return Or(e,t,l)}):Cc(e,t,a)}function Cc(e,t,a){t.status="fulfilled",t.value=a,Oc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Rc(e,a)))}function Or(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Oc(t),t=t.next;while(t!==l)}e.action=null}function Oc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zc(e,t){return t}function Uc(e,t){if(me){var a=De.formState;if(a!==null){e:{var l=le;if(me){if(Ce){t:{for(var n=Ce,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ce=zt(n.nextSibling),l=n.data==="F!";break e}}wa(l)}l=!1}l&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zc,lastRenderedState:t},a.queue=l,a=ed.bind(null,le,l),l.dispatch=a,l=Cr(!1),i=qr.bind(null,le,!1,l.queue),l=ut(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Gp.bind(null,le,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Lc(e){var t=Xe();return Hc(t,Ee,e)}function Hc(e,t,a){if(t=Rr(e,t,zc)[0],e=Bi(ia)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Rn(t)}catch(r){throw r===Ul?Ri:r}else l=t;t=Xe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Bl(9,{destroy:void 0},Vp.bind(null,n,a),null)),[l,i,e]}function Vp(e,t){e.action=t}function kc(e){var t=Xe(),a=Ee;if(a!==null)return Hc(t,a,e);Xe(),t=t.memoizedState,a=Xe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Bl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=ki(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function qc(){return Xe().memoizedState}function Yi(e,t,a,l){var n=ut();le.flags|=e,n.memoizedState=Bl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Gi(e,t,a,l){var n=Xe();l=l===void 0?null:l;var i=n.memoizedState.inst;Ee!==null&&l!==null&&Nr(l,Ee.memoizedState.deps)?n.memoizedState=Bl(t,i,a,l):(le.flags|=e,n.memoizedState=Bl(1|t,i,a,l))}function Bc(e,t){Yi(8390656,8,e,t)}function zr(e,t){Gi(2048,8,e,t)}function Xp(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=ki(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Yc(e){var t=Xe().memoizedState;return Xp({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Gc(e,t){return Gi(4,2,e,t)}function Vc(e,t){return Gi(4,4,e,t)}function Xc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,a){a=a!=null?a.concat([e]):null,Gi(4,4,Xc.bind(null,t,e),a)}function Ur(){}function Fc(e,t){var a=Xe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Zc(e,t){var a=Xe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nr(t,l[1]))return l[0];if(l=e(),nl){Ge(!0);try{e()}finally{Ge(!1)}}return a.memoizedState=[l,t],l}function Lr(e,t,a){return a===void 0||(na&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Kd(),le.lanes|=e,Ca|=e,a)}function Kc(e,t,a,l){return vt(a,t)?a:Hl.current!==null?(e=Lr(e,a,l),vt(e,t)||(Ze=!0),e):(na&42)===0||(na&1073741824)!==0&&(ue&261930)===0?(Ze=!0,e.memoizedState=a):(e=Kd(),le.lanes|=e,Ca|=e,t)}function Jc(e,t,a,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;var r=R.T,c={};R.T=c,qr(e,!1,t,a);try{var p=n(),w=R.S;if(w!==null&&w(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=qp(p,l);Mn(e,t,M,Tt(e))}else Mn(e,t,l,Tt(e))}catch(U){Mn(e,t,{then:function(){},status:"rejected",reason:U},Tt())}finally{B.p=i,r!==null&&c.types!==null&&(r.types=c.types),R.T=r}}function Qp(){}function Hr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Pc(e).queue;Jc(e,n,t,W,a===null?Qp:function(){return Wc(e),a(l)})}function Pc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wc(e){var t=Pc(e);t.next===null&&(t=e.alternate.memoizedState),Mn(e,t.next.queue,{},Tt())}function kr(){return at(Kn)}function $c(){return Xe().memoizedState}function Ic(){return Xe().memoizedState}function Fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=Ea(a);var l=ja(t,e,a);l!==null&&(yt(l,t,a),En(l,t,a)),t={cache:mr()},e.payload=t;return}t=t.return}}function Zp(e,t,a){var l=Tt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vi(e)?td(t,a):(a=ar(e,t,a,l),a!==null&&(yt(a,e,l),ad(a,t,l)))}function ed(e,t,a){var l=Tt();Mn(e,t,a,l)}function Mn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vi(e))td(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,a);if(n.hasEagerState=!0,n.eagerState=c,vt(c,r))return wi(e,t,n,0),De===null&&Si(),!1}catch{}if(a=ar(e,t,n,l),a!==null)return yt(a,e,l),ad(a,t,l),!0}return!1}function qr(e,t,a,l){if(l={lane:2,revertLane:yo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vi(e)){if(t)throw Error(u(479))}else t=ar(e,a,l,2),t!==null&&yt(t,e,2)}function Vi(e){var t=e.alternate;return e===le||t!==null&&t===le}function td(e,t){kl=Li=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ad(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ru(e,a)}}var Cn={readContext:at,use:qi,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Cn.useEffectEvent=He;var ld={readContext:at,use:qi,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Bc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Yi(4194308,4,Xc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){Yi(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var l=e();if(nl){Ge(!0);try{e()}finally{Ge(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ut();if(a!==void 0){var n=a(t);if(nl){Ge(!0);try{a(t)}finally{Ge(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Zp.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Cr(e);var t=e.queue,a=ed.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ur,useDeferredValue:function(e,t){var a=ut();return Lr(a,e,t)},useTransition:function(){var e=Cr(!1);return e=Jc.bind(null,le,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=ut();if(me){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),De===null)throw Error(u(349));(ue&127)!==0||Nc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Bc(Ec.bind(null,l,i,e),[e]),l.flags|=2048,Bl(9,{destroy:void 0},Tc.bind(null,l,i,a,t),null),a},useId:function(){var e=ut(),t=De.identifierPrefix;if(me){var a=Xt,l=Vt;a=(l&~(1<<32-Se(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Hi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:kr,useFormState:Uc,useActionState:Uc,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qr.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Dr,useCacheRefresh:function(){return ut().memoizedState=Fp.bind(null,le)},useEffectEvent:function(e){var t=ut(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Br={readContext:at,use:qi,useCallback:Fc,useContext:at,useEffect:zr,useImperativeHandle:Qc,useInsertionEffect:Gc,useLayoutEffect:Vc,useMemo:Zc,useReducer:Bi,useRef:qc,useState:function(){return Bi(ia)},useDebugValue:Ur,useDeferredValue:function(e,t){var a=Xe();return Kc(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Bi(ia)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Rn(e),t]},useSyncExternalStore:wc,useId:$c,useHostTransitionStatus:kr,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,t){var a=Xe();return Dc(a,Ee,e,t)},useMemoCache:Dr,useCacheRefresh:Ic};Br.useEffectEvent=Yc;var nd={readContext:at,use:qi,useCallback:Fc,useContext:at,useEffect:zr,useImperativeHandle:Qc,useInsertionEffect:Gc,useLayoutEffect:Vc,useMemo:Zc,useReducer:Mr,useRef:qc,useState:function(){return Mr(ia)},useDebugValue:Ur,useDeferredValue:function(e,t){var a=Xe();return Ee===null?Lr(a,e,t):Kc(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Mr(ia)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Rn(e),t]},useSyncExternalStore:wc,useId:$c,useHostTransitionStatus:kr,useFormState:kc,useActionState:kc,useOptimistic:function(e,t){var a=Xe();return Ee!==null?Dc(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Dr,useCacheRefresh:Ic};nd.useEffectEvent=Yc;function Yr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=Ea(l);n.payload=t,a!=null&&(n.callback=a),t=ja(e,n,l),t!==null&&(yt(t,e,l),En(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=Ea(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ja(e,n,l),t!==null&&(yt(t,e,l),En(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),l=Ea(a);l.tag=2,t!=null&&(l.callback=t),t=ja(e,l,a),t!==null&&(yt(t,e,a),En(t,e,a))}};function id(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!yn(a,l)||!yn(n,i):!0}function sd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Gr.enqueueReplaceState(t,t.state,null)}function il(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function rd(e){bi(e)}function od(e){console.error(e)}function ud(e){bi(e)}function Xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function cd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Vr(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Xi(e,t)},a}function dd(e){return e=Ea(e),e.tag=3,e}function fd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){cd(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){cd(t,a,l),typeof n!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Kp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Cl(t,a,n,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Ot===null?as():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ho(e,l,n)),!1;case 22:return a.flags|=65536,l===Mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ho(e,l,n)),!1}throw Error(u(435,a.tag))}return ho(e,l,n),as(),!1}if(me)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==or&&(e=Error(u(422),{cause:l}),bn(Dt(e,a)))):(l!==or&&(t=Error(u(423),{cause:l}),bn(Dt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Dt(l,a),n=Vr(e.stateNode,l,n),vr(e,n),ke!==4&&(ke=2)),!1;var i=Error(u(520),{cause:l});if(i=Dt(i,a),Bn===null?Bn=[i]:Bn.push(i),ke!==4&&(ke=2),t===null)return!0;l=Dt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Vr(a.stateNode,l,e),vr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=dd(n),fd(n,e,a,l),vr(a,n),!1}a=a.return}while(a!==null);return!1}var Xr=Error(u(461)),Ze=!1;function lt(e,t,a,l){t.child=e===null?_c(t,null,a,l):ll(t,e.child,a,l)}function md(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return Ia(t),l=Tr(e,t,a,r,i,n),c=Er(),e!==null&&!Ze?(jr(e,t,n),sa(e,t,n)):(me&&c&&sr(t),t.flags|=1,lt(e,t,l,n),t.child)}function pd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!lr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,hd(e,t,i,l,n)):(e=Ti(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!$r(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:yn,a(r,l)&&e.ref===t.ref)return sa(e,t,n)}return t.flags|=1,e=ea(i,l),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(yn(i,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=i,$r(e,n))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,sa(e,t,n)}return Qr(e,t,a,l,n)}function _d(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return gd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?vc(t,i):br(),xc(t);else return l=t.lanes=536870912,gd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Di(t,i.cachePool),vc(t,i),Da(),t.memoizedState=null):(e!==null&&Di(t,null),br(),Da());return lt(e,t,n,a),t.child}function On(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gd(e,t,a,l,n){var i=hr();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Di(t,null),br(),xc(t),e!==null&&Cl(e,t,l,!0),t.childLanes=n,null}function Qi(e,t){return t=Zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yd(e,t,a){return ll(t,e.child,null,a),e=Qi(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function Jp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Qi(t,l),t.lanes=536870912,On(null,e);if(wr(t),(e=Ce)?(e=Mf(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Vt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=tc(e),a.return=t,t.child=a,tt=t,Ce=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Qi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(wr(t),n)if(t.flags&256)t.flags&=-257,t=yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ze||Cl(e,t,a,!1),n=(a&e.childLanes)!==0,Ze||n){if(l=De,l!==null&&(r=ou(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Ja(e,r),yt(l,e,r),Xr;as(),t=yd(e,t,a)}else e=i.treeContext,Ce=zt(r.nextSibling),tt=t,me=!0,Sa=null,Ct=!1,e!==null&&nc(t,e),t=Qi(t,l),t.flags|=4096;return t}return e=ea(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Qr(e,t,a,l,n){return Ia(t),a=Tr(e,t,a,l,void 0,n),l=Er(),e!==null&&!Ze?(jr(e,t,n),sa(e,t,n)):(me&&l&&sr(t),t.flags|=1,lt(e,t,a,n),t.child)}function vd(e,t,a,l,n,i){return Ia(t),t.updateQueue=null,a=Sc(t,l,a,n),bc(e),l=Er(),e!==null&&!Ze?(jr(e,t,i),sa(e,t,i)):(me&&l&&sr(t),t.flags|=1,lt(e,t,a,i),t.child)}function xd(e,t,a,l,n){if(Ia(t),t.stateNode===null){var i=Al,r=a.contextType;typeof r=="object"&&r!==null&&(i=at(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Gr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},gr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?at(r):Al,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Yr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Gr.enqueueReplaceState(i,i.state,null),An(t,l,i,n),jn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,p=il(a,c);i.props=p;var w=i.context,M=a.contextType;r=Al,typeof M=="object"&&M!==null&&(r=at(M));var U=a.getDerivedStateFromProps;M=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==r)&&sd(t,i,l,r),Ta=!1;var N=t.memoizedState;i.state=N,An(t,l,i,n),jn(),w=t.memoizedState,c||N!==w||Ta?(typeof U=="function"&&(Yr(t,a,U,l),w=t.memoizedState),(p=Ta||id(t,a,p,l,N,w,r))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,yr(e,t),r=t.memoizedProps,M=il(a,r),i.props=M,U=t.pendingProps,N=i.context,w=a.contextType,p=Al,typeof w=="object"&&w!==null&&(p=at(w)),c=a.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==U||N!==p)&&sd(t,i,l,p),Ta=!1,N=t.memoizedState,i.state=N,An(t,l,i,n),jn();var A=t.memoizedState;r!==U||N!==A||Ta||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof c=="function"&&(Yr(t,a,c,l),A=t.memoizedState),(M=Ta||id(t,a,M,l,N,A,p)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=p,l=M):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ll(t,e.child,null,n),t.child=ll(t,null,a,n)):lt(e,t,a,n),t.memoizedState=i.state,e=t.child):e=sa(e,t,n),e}function bd(e,t,a,l){return Wa(),t.flags|=256,lt(e,t,a,l),t.child}var Fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:cc()}}function Kr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Sd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?Aa(t):Da(),(e=Ce)?(e=Mf(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Vt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=tc(e),a.return=t,t.child=a,tt=t,Ce=null)):e=null,e===null)throw wa(t);return Mo(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(Da(),n=t.mode,c=Zi({mode:"hidden",children:c},n),l=Pa(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Zr(a),l.childLanes=Kr(e,r,a),t.memoizedState=Fr,On(null,l)):(Aa(t),Jr(t,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(i)t.flags&256?(Aa(t),t.flags&=-257,t=Pr(e,t,a)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),c=l.fallback,n=t.mode,l=Zi({mode:"visible",children:l.children},n),c=Pa(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,ll(t,e.child,null,a),l=t.child,l.memoizedState=Zr(a),l.childLanes=Kr(e,r,a),t.memoizedState=Fr,t=On(null,l));else if(Aa(t),Mo(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(u(419)),l.stack="",l.digest=r,bn({value:l,source:null,stack:null}),t=Pr(e,t,a)}else if(Ze||Cl(e,t,a,!1),r=(a&e.childLanes)!==0,Ze||r){if(r=De,r!==null&&(l=ou(r,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ja(e,l),yt(r,e,l),Xr;Ro(c)||as(),t=Pr(e,t,a)}else Ro(c)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ce=zt(c.nextSibling),tt=t,me=!0,Sa=null,Ct=!1,e!==null&&nc(t,e),t=Jr(t,l.children),t.flags|=4096);return t}return n?(Da(),c=l.fallback,n=t.mode,p=e.child,w=p.sibling,l=ea(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,w!==null?c=ea(w,c):(c=Pa(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,On(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Zr(a):(n=c.cachePool,n!==null?(p=Qe._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=cc(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Kr(e,r,a),t.memoizedState=Fr,On(e.child,l)):(Aa(t),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Jr(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Pr(e,t,a){return ll(t,e.child,null,a),e=Jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),dr(e.return,t,a)}function Wr(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function Nd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=Ve.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,Y(Ve,r),lt(e,t,l,a),l=me?xn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,a,t);else if(e.tag===19)wd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ui(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Wr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ui(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Wr(t,!0,a,null,i,l);break;case"together":Wr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function sa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=ea(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $r(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function Pp(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),Na(t,Qe,e.memoizedState.cache),Wa();break;case 27:case 5:ga(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sd(e,t,a):(Aa(t),e=sa(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Nd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Ve,Ve.current),l)break;return null;case 22:return t.lanes=0,_d(e,t,a,t.pendingProps);case 24:Na(t,Qe,e.memoizedState.cache)}return sa(e,t,a)}function Td(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!$r(e,a)&&(t.flags&128)===0)return Ze=!1,Pp(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,me&&(t.flags&1048576)!==0&&lc(t,xn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")lr(e)?(l=il(e,l),t.tag=1,t=xd(null,t,e,l,a)):(t.tag=0,t=Qr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===pe){t.tag=11,t=md(null,t,e,l,a);break e}else if(n===ee){t.tag=14,t=pd(null,t,e,l,a);break e}}throw t=rt(e)||e,Error(u(306,t,""))}}return t;case 0:return Qr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=il(l,t.pendingProps),xd(e,t,l,n,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,yr(e,t),An(t,l,null,a);var r=t.memoizedState;if(l=r.cache,Na(t,Qe,l),l!==i.cache&&fr(t,[Qe],a,!0),jn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=bd(e,t,l,a);break e}else if(l!==n){n=Dt(Error(u(424)),t),bn(n),t=bd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=zt(e.firstChild),tt=t,me=!0,Sa=null,Ct=!0,a=_c(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wa(),l===n){t=sa(e,t,a);break e}lt(e,t,l,a)}t=t.child}return t;case 26:return Fi(e,t),e===null?(a=Hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=us(se.current).createElement(a),l[et]=t,l[ft]=e,nt(l,a,e),$e(l),t.stateNode=l):t.memoizedState=Hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ga(t),e===null&&me&&(l=t.stateNode=zf(t.type,t.pendingProps,se.current),tt=t,Ct=!0,n=Ce,Ha(t.type)?(Co=n,Ce=zt(l.firstChild)):Ce=n),lt(e,t,t.pendingProps.children,a),Fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=Ce)&&(l=Eh(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,tt=t,Ce=zt(l.firstChild),Ct=!1,n=!0):n=!1),n||wa(t)),ga(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,jo(n,i)?l=null:r!==null&&jo(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Tr(e,t,Yp,null,null,a),Kn._currentValue=n),Fi(e,t),lt(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Ce)&&(a=jh(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,tt=t,Ce=null,e=!0):e=!1),e||wa(t)),null;case 13:return Sd(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ll(t,null,l,a):lt(e,t,l,a),t.child;case 11:return md(e,t,t.type,t.pendingProps,a);case 7:return lt(e,t,t.pendingProps,a),t.child;case 8:return lt(e,t,t.pendingProps.children,a),t.child;case 12:return lt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Na(t,t.type,l.value),lt(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ia(t),n=at(n),l=l(n),t.flags|=1,lt(e,t,l,a),t.child;case 14:return pd(e,t,t.type,t.pendingProps,a);case 15:return hd(e,t,t.type,t.pendingProps,a);case 19:return Nd(e,t,a);case 31:return Jp(e,t,a);case 22:return _d(e,t,a,t.pendingProps);case 24:return Ia(t),l=at(Qe),e===null?(n=hr(),n===null&&(n=De,i=mr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},gr(t),Na(t,Qe,n)):((e.lanes&a)!==0&&(yr(e,t),An(t,null,null,a),jn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Na(t,Qe,l)):(l=i.cache,Na(t,Qe,l),l!==n.cache&&fr(t,[Qe],a,!0))),lt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ra(e){e.flags|=4}function Ir(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if($d())e.flags|=8192;else throw al=Mi,_r}else e.flags&=-16777217}function Ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if($d())e.flags|=8192;else throw al=Mi,_r}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?iu():536870912,e.lanes|=t,Xl|=t)}function zn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Wp(e,t,a){var l=t.pendingProps;switch(rr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),la(Qe),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ur())),Oe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ra(t),i!==null?(Oe(t),Ed(t,i)):(Oe(t),Ir(t,n,null,l,a))):i?i!==e.memoizedState?(ra(t),Oe(t),Ed(t,i)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ra(t),Oe(t),Ir(t,n,e,l,a)),null;case 27:if(Xa(t),a=se.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ra(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Oe(t),null}e=V.current,Ml(t)?ic(t):(e=zf(n,l,a),t.stateNode=e,ra(t))}return Oe(t),null;case 5:if(Xa(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ra(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Oe(t),null}if(i=V.current,Ml(t))ic(t);else{var r=us(se.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[et]=t,i[ft]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(nt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ra(t)}}return Oe(t),Ir(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ra(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=se.current,Ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=tt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||wf(e.nodeValue,a)),e||wa(t,!0)}else e=us(e).createTextNode(l),e[et]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ml(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[et]=t}else Wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[et]=t}else Wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else n=ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ki(t,t.updateQueue),Oe(t),null);case 4:return Me(),e===null&&So(t.stateNode.containerInfo),Oe(t),null;case 10:return la(t.type),Oe(t),null;case 19:if(z(Ve),l=t.memoizedState,l===null)return Oe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)zn(l,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ui(e),i!==null){for(t.flags|=128,zn(l,!1),e=i.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ec(a,e),a=a.sibling;return Y(Ve,Ve.current&1|2),me&&ta(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Ii&&(t.flags|=128,n=!0,zn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ui(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),zn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!me)return Oe(t),null}else 2*it()-l.renderingStartTime>Ii&&a!==536870912&&(t.flags|=128,n=!0,zn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Ve.current,Y(Ve,n?a&1|2:a&1),me&&ta(t,l.treeForkCount),e):(Oe(t),null);case 22:case 23:return St(t),Sr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(Qe),Oe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $p(e,t){switch(rr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(Qe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xa(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(u(340));Wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Ve),null;case 4:return Me(),null;case 10:return la(t.type),null;case 22:case 23:return St(t),Sr(),e!==null&&z(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(Qe),null;case 25:return null;default:return null}}function jd(e,t){switch(rr(t),t.tag){case 3:la(Qe),Me();break;case 26:case 27:case 5:Xa(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:z(Ve);break;case 10:la(t.type);break;case 22:case 23:St(t),Sr(),e!==null&&z(el);break;case 24:la(Qe)}}function Un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(c){Ne(t,t.return,c)}}function Ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=t;var p=a,w=c;try{w()}catch(M){Ne(n,p,M)}}}l=l.next}while(l!==i)}}catch(M){Ne(t,t.return,M)}}function Ad(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{yc(t,a)}catch(l){Ne(e,e.return,l)}}}function Dd(e,t,a){a.props=il(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ne(e,t,l)}}function Ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ne(e,t,n)}}function Qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ne(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ne(e,t,n)}else a.current=null}function Rd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ne(e,e.return,n)}}function eo(e,t,a){try{var l=e.stateNode;xh(l,e.type,a,t),l[ft]=t}catch(n){Ne(e,e.return,n)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function to(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=$t));else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ao(e,t,a),e=e.sibling;e!==null;)ao(e,t,a),e=e.sibling}function Ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ji(e,t,a),e=e.sibling;e!==null;)Ji(e,t,a),e=e.sibling}function Cd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);nt(t,l,a),t[et]=e,t[ft]=a}catch(i){Ne(e,e.return,i)}}var oa=!1,Ke=!1,lo=!1,Od=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Ip(e,t){if(e=e.containerInfo,To=_s,e=Qu(e),Ps(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,c=-1,p=-1,w=0,M=0,U=e,N=null;t:for(;;){for(var A;U!==a||n!==0&&U.nodeType!==3||(c=r+n),U!==i||l!==0&&U.nodeType!==3||(p=r+l),U.nodeType===3&&(r+=U.nodeValue.length),(A=U.firstChild)!==null;)N=U,U=A;for(;;){if(U===e)break t;if(N===a&&++w===n&&(c=r),N===i&&++M===l&&(p=r),(A=U.nextSibling)!==null)break;U=N,N=U.parentNode}U=A}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eo={focusedElem:e,selectionRange:a},_s=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=il(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){Ne(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Do(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Do(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function zd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),l&4&&Un(5,a);break;case 1:if(ca(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){Ne(a,a.return,r)}else{var n=il(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ne(a,a.return,r)}}l&64&&Ad(a),l&512&&Ln(a,a.return);break;case 3:if(ca(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{yc(e,t)}catch(r){Ne(a,a.return,r)}}break;case 27:t===null&&l&4&&Cd(a);case 26:case 5:ca(e,a),t===null&&l&4&&Rd(a),l&512&&Ln(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),l&4&&Hd(e,a);break;case 13:ca(e,a),l&4&&kd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=oh.bind(null,a),Ah(e,a))));break;case 22:if(l=a.memoizedState!==null||oa,!l){t=t!==null&&t.memoizedState!==null||Ke,n=oa;var i=Ke;oa=l,(Ke=t)&&!i?da(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=n,Ke=i}break;case 30:break;default:ca(e,a)}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Os(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,pt=!1;function ua(e,t,a){for(a=a.child;a!==null;)Ld(e,t,a),a=a.sibling}function Ld(e,t,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 26:Ke||Qt(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Qt(a,t);var l=Ue,n=pt;Ha(a.type)&&(Ue=a.stateNode,pt=!1),ua(e,t,a),Qn(a.stateNode),Ue=l,pt=n;break;case 5:Ke||Qt(a,t);case 6:if(l=Ue,n=pt,Ue=null,ua(e,t,a),Ue=l,pt=n,Ue!==null)if(pt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(i){Ne(a,t,i)}else try{Ue.removeChild(a.stateNode)}catch(i){Ne(a,t,i)}break;case 18:Ue!==null&&(pt?(e=Ue,Df(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):Df(Ue,a.stateNode));break;case 4:l=Ue,n=pt,Ue=a.stateNode.containerInfo,pt=!0,ua(e,t,a),Ue=l,pt=n;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Ke||Ra(4,a,t),ua(e,t,a);break;case 1:Ke||(Qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Dd(a,t,l)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,ua(e,t,a),Ke=l;break;default:ua(e,t,a)}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){Ne(t,t.return,a)}}}function kd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){Ne(t,t.return,a)}}function eh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Od),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Od),t;default:throw Error(u(435,e.tag))}}function Pi(e,t){var a=eh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=uh.bind(null,e,l);l.then(n,n)}})}function ht(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Ha(c.type)){Ue=c.stateNode,pt=!1;break e}break;case 5:Ue=c.stateNode,pt=!1;break e;case 3:case 4:Ue=c.stateNode.containerInfo,pt=!0;break e}c=c.return}if(Ue===null)throw Error(u(160));Ld(i,r,n),Ue=null,pt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}var Bt=null;function qd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),_t(e),l&4&&(Ra(3,e,e.return),Un(3,e),Ra(5,e,e.return));break;case 1:ht(t,e),_t(e),l&512&&(Ke||a===null||Qt(a,a.return)),l&64&&oa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Bt;if(ht(t,e),_t(e),l&512&&(Ke||a===null||Qt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[un]||i[et]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),nt(i,l,a),i[et]=e,$e(i),l=i;break e;case"link":var r=Bf("link","href",n).get(l+(a.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(c,1);break t}}i=n.createElement(l),nt(i,l,a),n.head.appendChild(i);break;case"meta":if(r=Bf("meta","content",n).get(l+(a.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(c,1);break t}}i=n.createElement(l),nt(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[et]=e,$e(i),l=i}e.stateNode=l}else Yf(n,e.type,e.stateNode);else e.stateNode=qf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Yf(n,e.type,e.stateNode):qf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&eo(e,e.memoizedProps,a.memoizedProps)}break;case 27:ht(t,e),_t(e),l&512&&(Ke||a===null||Qt(a,a.return)),a!==null&&l&4&&eo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ht(t,e),_t(e),l&512&&(Ke||a===null||Qt(a,a.return)),e.flags&32){n=e.stateNode;try{bl(n,"")}catch(Q){Ne(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,eo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(lo=!0);break;case 6:if(ht(t,e),_t(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){Ne(e,e.return,Q)}}break;case 3:if(fs=null,n=Bt,Bt=cs(t.containerInfo),ht(t,e),Bt=n,_t(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(Q){Ne(e,e.return,Q)}lo&&(lo=!1,Bd(e));break;case 4:l=Bt,Bt=cs(e.stateNode.containerInfo),ht(t,e),_t(e),Bt=l;break;case 12:ht(t,e),_t(e);break;case 31:ht(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 13:ht(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($i=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,w=oa,M=Ke;if(oa=w||n,Ke=M||p,ht(t,e),Ke=M,oa=w,_t(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||oa||Ke||sl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=p.stateNode;var U=p.memoizedProps.style,N=U!=null&&U.hasOwnProperty("display")?U.display:null;c.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Q){Ne(p,p.return,Q)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(Q){Ne(p,p.return,Q)}}}else if(t.tag===18){if(a===null){p=t;try{var A=p.stateNode;n?Rf(A,!0):Rf(p.stateNode,!1)}catch(Q){Ne(p,p.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pi(e,a))));break;case 19:ht(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pi(e,l)));break;case 30:break;case 21:break;default:ht(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Md(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=to(e);Ji(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(bl(r,""),a.flags&=-33);var c=to(e);Ji(e,c,r);break;case 3:case 4:var p=a.stateNode.containerInfo,w=to(e);ao(e,w,p);break;default:throw Error(u(161))}}catch(M){Ne(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zd(e,t.alternate,t),t=t.sibling}function sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),sl(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Dd(t,t.return,a),sl(t);break;case 27:Qn(t.stateNode);case 26:case 5:Qt(t,t.return),sl(t);break;case 22:t.memoizedState===null&&sl(t);break;case 30:sl(t);break;default:sl(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:da(n,i,a),Un(4,i);break;case 1:if(da(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){Ne(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)gc(p[n],c)}catch(w){Ne(l,l.return,w)}}a&&r&64&&Ad(i),Ln(i,i.return);break;case 27:Cd(i);case 26:case 5:da(n,i,a),a&&l===null&&r&4&&Rd(i),Ln(i,i.return);break;case 12:da(n,i,a);break;case 31:da(n,i,a),a&&r&4&&Hd(n,i);break;case 13:da(n,i,a),a&&r&4&&kd(n,i);break;case 22:i.memoizedState===null&&da(n,i,a),Ln(i,i.return);break;case 30:break;default:da(n,i,a)}t=t.sibling}}function no(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Sn(a))}function io(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sn(e))}function Yt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yd(e,t,a,l),t=t.sibling}function Yd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,l),n&2048&&Un(9,t);break;case 1:Yt(e,t,a,l);break;case 3:Yt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sn(e)));break;case 12:if(n&2048){Yt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ne(t,t.return,p)}}else Yt(e,t,a,l);break;case 31:Yt(e,t,a,l);break;case 13:Yt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Yt(e,t,a,l):Hn(e,t):i._visibility&2?Yt(e,t,a,l):(i._visibility|=2,Yl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&no(r,t);break;case 24:Yt(e,t,a,l),n&2048&&io(t.alternate,t);break;default:Yt(e,t,a,l)}}function Yl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=a,p=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:Yl(i,r,c,p,n),Un(8,r);break;case 23:break;case 22:var M=r.stateNode;r.memoizedState!==null?M._visibility&2?Yl(i,r,c,p,n):Hn(i,r):(M._visibility|=2,Yl(i,r,c,p,n)),n&&w&2048&&no(r.alternate,r);break;case 24:Yl(i,r,c,p,n),n&&w&2048&&io(r.alternate,r);break;default:Yl(i,r,c,p,n)}t=t.sibling}}function Hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Hn(a,l),n&2048&&no(l.alternate,l);break;case 24:Hn(a,l),n&2048&&io(l.alternate,l);break;default:Hn(a,l)}t=t.sibling}}var kn=8192;function Gl(e,t,a){if(e.subtreeFlags&kn)for(e=e.child;e!==null;)Gd(e,t,a),e=e.sibling}function Gd(e,t,a){switch(e.tag){case 26:Gl(e,t,a),e.flags&kn&&e.memoizedState!==null&&Bh(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Gl(e,t,a);break;case 3:case 4:var l=Bt;Bt=cs(e.stateNode.containerInfo),Gl(e,t,a),Bt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=kn,kn=16777216,Gl(e,t,a),kn=l):Gl(e,t,a));break;default:Gl(e,t,a)}}function Vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,Qd(l,e)}Vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xd(e),e=e.sibling}function Xd(e){switch(e.tag){case 0:case 11:case 15:qn(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:qn(e);break;case 12:qn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wi(e)):qn(e);break;default:qn(e)}}function Wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,Qd(l,e)}Vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),Wi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Wi(t));break;default:Wi(t)}e=e.sibling}}function Qd(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ie=l;else e:for(a=e;Ie!==null;){l=Ie;var n=l.sibling,i=l.return;if(Ud(l),l===a){Ie=null;break e}if(n!==null){n.return=i,Ie=n;break e}Ie=i}}}var th={getCacheForType:function(e){var t=at(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Qe).controller.signal}},ah=typeof WeakMap=="function"?WeakMap:Map,be=0,De=null,re=null,ue=0,we=0,wt=null,Ma=!1,Vl=!1,so=!1,fa=0,ke=0,Ca=0,rl=0,ro=0,Nt=0,Xl=0,Bn=null,gt=null,oo=!1,$i=0,Fd=0,Ii=1/0,es=null,Oa=null,Pe=0,za=null,Ql=null,ma=0,uo=0,co=null,Zd=null,Yn=0,fo=null;function Tt(){return(be&2)!==0&&ue!==0?ue&-ue:R.T!==null?yo():uu()}function Kd(){if(Nt===0)if((ue&536870912)===0||me){var e=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Nt=e}else Nt=536870912;return e=bt.current,e!==null&&(e.flags|=32),Nt}function yt(e,t,a){(e===De&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Fl(e,0),Ua(e,ue,Nt,!1)),on(e,a),((be&2)===0||e!==De)&&(e===De&&((be&2)===0&&(rl|=a),ke===4&&Ua(e,ue,Nt,!1)),Ft(e))}function Jd(e,t,a){if((be&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||rn(e,t),n=l?ih(e,t):po(e,t,!0),i=l;do{if(n===0){Vl&&!l&&Ua(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!lh(a)){n=po(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;n=Bn;var p=c.current.memoizedState.isDehydrated;if(p&&(Fl(c,r).flags|=256),r=po(c,r,!1),r!==2){if(so&&!p){c.errorRecoveryDisabledLanes|=i,rl|=i,n=4;break e}i=gt,gt=n,i!==null&&(gt===null?gt=i:gt.push.apply(gt,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Fl(e,0),Ua(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ua(l,t,Nt,!Ma);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=$i+300-it(),10<n)){if(Ua(l,t,Nt,!Ma),ci(l,0,!0)!==0)break e;ma=t,l.timeoutHandle=jf(Pd.bind(null,l,a,gt,es,oo,t,Nt,rl,Xl,Ma,i,"Throttled",-0,0),n);break e}Pd(l,a,gt,es,oo,t,Nt,rl,Xl,Ma,i,null,-0,0)}}break}while(!0);Ft(e)}function Pd(e,t,a,l,n,i,r,c,p,w,M,U,N,A){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Gd(t,i,U);var Q=(i&62914560)===i?$i-it():(i&4194048)===i?Fd-it():0;if(Q=Yh(U,Q),Q!==null){ma=i,e.cancelPendingCommit=Q(nf.bind(null,e,t,i,a,l,n,r,c,p,M,U,null,N,A)),Ua(e,i,r,!w);return}}nf(e,t,i,a,l,n,r,c,p)}function lh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!vt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,a,l){t&=~ro,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Se(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&su(e,a,t)}function ts(){return(be&6)===0?(Gn(0),!1):!0}function mo(){if(re!==null){if(we===0)var e=re.return;else e=re,aa=$a=null,Ar(e),Ll=null,Nn=0,e=re;for(;e!==null;)jd(e.alternate,e),e=e.return;re=null}}function Fl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,mo(),De=e,re=a=ea(e.current,null),ue=t,we=0,wt=null,Ma=!1,Vl=rn(e,t),so=!1,Xl=Nt=ro=rl=Ca=ke=0,gt=Bn=null,oo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Se(l),i=1<<n;t|=e[n],l&=~i}return fa=t,Si(),a}function Wd(e,t){le=null,R.H=Cn,t===Ul||t===Ri?(t=mc(),we=3):t===_r?(t=mc(),we=4):we=t===Xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,re===null&&(ke=1,Xi(e,Dt(t,e.current)))}function $d(){var e=bt.current;return e===null?!0:(ue&4194048)===ue?Ot===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Ot:!1}function Id(){var e=R.H;return R.H=Cn,e===null?Cn:e}function ef(){var e=R.A;return R.A=th,e}function as(){ke=4,Ma||(ue&4194048)!==ue&&bt.current!==null||(Vl=!0),(Ca&134217727)===0&&(rl&134217727)===0||De===null||Ua(De,ue,Nt,!1)}function po(e,t,a){var l=be;be|=2;var n=Id(),i=ef();(De!==e||ue!==t)&&(es=null,Fl(e,t)),t=!1;var r=ke;e:do try{if(we!==0&&re!==null){var c=re,p=wt;switch(we){case 8:mo(),r=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var w=we;if(we=0,wt=null,Zl(e,c,p,w),a&&Vl){r=0;break e}break;default:w=we,we=0,wt=null,Zl(e,c,p,w)}}nh(),r=ke;break}catch(M){Wd(e,M)}while(!0);return t&&e.shellSuspendCounter++,aa=$a=null,be=l,R.H=n,R.A=i,re===null&&(De=null,ue=0,Si()),r}function nh(){for(;re!==null;)tf(re)}function ih(e,t){var a=be;be|=2;var l=Id(),n=ef();De!==e||ue!==t?(es=null,Ii=it()+500,Fl(e,t)):Vl=rn(e,t);e:do try{if(we!==0&&re!==null){t=re;var i=wt;t:switch(we){case 1:we=0,wt=null,Zl(e,t,i,1);break;case 2:case 9:if(dc(i)){we=0,wt=null,af(t);break}t=function(){we!==2&&we!==9||De!==e||(we=7),Ft(e)},i.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:dc(i)?(we=0,wt=null,af(t)):(we=0,wt=null,Zl(e,t,i,7));break;case 5:var r=null;switch(re.tag){case 26:r=re.memoizedState;case 5:case 27:var c=re;if(r?Gf(r):c.stateNode.complete){we=0,wt=null;var p=c.sibling;if(p!==null)re=p;else{var w=c.return;w!==null?(re=w,ls(w)):re=null}break t}}we=0,wt=null,Zl(e,t,i,5);break;case 6:we=0,wt=null,Zl(e,t,i,6);break;case 8:mo(),ke=6;break e;default:throw Error(u(462))}}sh();break}catch(M){Wd(e,M)}while(!0);return aa=$a=null,R.H=l,R.A=n,be=a,re!==null?0:(De=null,ue=0,Si(),ke)}function sh(){for(;re!==null&&!ii();)tf(re)}function tf(e){var t=Td(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?ls(e):re=t}function af(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=vd(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=vd(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Ar(t);default:jd(a,t),t=re=ec(t,fa),t=Td(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?ls(e):re=t}function Zl(e,t,a,l){aa=$a=null,Ar(t),Ll=null,Nn=0;var n=t.return;try{if(Kp(e,n,t,a,ue)){ke=1,Xi(e,Dt(a,e.current)),re=null;return}}catch(i){if(n!==null)throw re=n,i;ke=1,Xi(e,Dt(a,e.current)),re=null;return}t.flags&32768?(me||l===1?e=!0:Vl||(ue&536870912)!==0?e=!1:(Ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),lf(t,e)):ls(t)}function ls(e){var t=e;do{if((t.flags&32768)!==0){lf(t,Ma);return}e=t.return;var a=Wp(t.alternate,t,fa);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ke===0&&(ke=5)}function lf(e,t){do{var a=$p(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);ke=6,re=null}function nf(e,t,a,l,n,i,r,c,p){e.cancelPendingCommit=null;do ns();while(Pe!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=tr,qm(e,a,i,r,c,p),e===De&&(re=De=null,ue=0),Ql=t,za=e,ma=a,uo=i,co=n,Zd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ch(pl,function(){return cf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=B.p,B.p=2,r=be,be|=4;try{Ip(e,t,a)}finally{be=r,B.p=n,R.T=l}}Pe=1,sf(),rf(),of()}}function sf(){if(Pe===1){Pe=0;var e=za,t=Ql,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=B.p;B.p=2;var n=be;be|=4;try{qd(t,e);var i=Eo,r=Qu(e.containerInfo),c=i.focusedElem,p=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&Xu(c.ownerDocument.documentElement,c)){if(p!==null&&Ps(c)){var w=p.start,M=p.end;if(M===void 0&&(M=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(M,c.value.length);else{var U=c.ownerDocument||document,N=U&&U.defaultView||window;if(N.getSelection){var A=N.getSelection(),Q=c.textContent.length,$=Math.min(p.start,Q),Ae=p.end===void 0?$:Math.min(p.end,Q);!A.extend&&$>Ae&&(r=Ae,Ae=$,$=r);var b=Vu(c,$),g=Vu(c,Ae);if(b&&g&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=U.createRange();S.setStart(b.node,b.offset),A.removeAllRanges(),$>Ae?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(U=[],A=c;A=A.parentNode;)A.nodeType===1&&U.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<U.length;c++){var O=U[c];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}_s=!!To,Eo=To=null}finally{be=n,B.p=l,R.T=a}}e.current=t,Pe=2}}function rf(){if(Pe===2){Pe=0;var e=za,t=Ql,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=B.p;B.p=2;var n=be;be|=4;try{zd(e,t.alternate,t)}finally{be=n,B.p=l,R.T=a}}Pe=3}}function of(){if(Pe===4||Pe===3){Pe=0,si();var e=za,t=Ql,a=ma,l=Zd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Ql=za=null,uf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Oa=null),Ms(a),t=t.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Ye,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=B.p,B.p=2,R.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var c=l[r];i(c.value,{componentStack:c.stack})}}finally{R.T=t,B.p=n}}(ma&3)!==0&&ns(),Ft(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===fo?Yn++:(Yn=0,fo=e):Yn=0,Gn(0)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sn(t)))}function ns(){return sf(),rf(),of(),cf()}function cf(){if(Pe!==5)return!1;var e=za,t=uo;uo=0;var a=Ms(ma),l=R.T,n=B.p;try{B.p=32>a?32:a,R.T=null,a=co,co=null;var i=za,r=ma;if(Pe=0,Ql=za=null,ma=0,(be&6)!==0)throw Error(u(331));var c=be;if(be|=4,Xd(i.current),Yd(i,i.current,r,a),be=c,Gn(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Ye,i)}catch{}return!0}finally{B.p=n,R.T=l,uf(e,t)}}function df(e,t,a){t=Dt(a,t),t=Vr(e.stateNode,t,2),e=ja(e,t,2),e!==null&&(on(e,2),Ft(e))}function Ne(e,t,a){if(e.tag===3)df(e,e,a);else for(;t!==null;){if(t.tag===3){df(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){e=Dt(a,e),a=dd(2),l=ja(t,a,2),l!==null&&(fd(a,l,t,e),on(l,2),Ft(l));break}}t=t.return}}function ho(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ah;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(so=!0,n.add(a),e=rh.bind(null,e,t,a),t.then(e,e))}function rh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,De===e&&(ue&a)===a&&(ke===4||ke===3&&(ue&62914560)===ue&&300>it()-$i?(be&2)===0&&Fl(e,0):ro|=a,Xl===ue&&(Xl=0)),Ft(e)}function ff(e,t){t===0&&(t=iu()),e=Ja(e,t),e!==null&&(on(e,t),Ft(e))}function oh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ff(e,a)}function uh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),ff(e,a)}function ch(e,t){return ln(e,t)}var is=null,Kl=null,_o=!1,ss=!1,go=!1,La=0;function Ft(e){e!==Kl&&e.next===null&&(Kl===null?is=Kl=e:Kl=Kl.next=e),ss=!0,_o||(_o=!0,fh())}function Gn(e,t){if(!go&&ss){go=!0;do for(var a=!1,l=is;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-Se(42|e)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,_f(l,i))}else i=ue,i=ci(l,l===De?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||rn(l,i)||(a=!0,_f(l,i));l=l.next}while(a);go=!1}}function dh(){mf()}function mf(){ss=_o=!1;var e=0;La!==0&&Sh()&&(e=La);for(var t=it(),a=null,l=is;l!==null;){var n=l.next,i=pf(l,t);i===0?(l.next=null,a===null?is=n:a.next=n,n===null&&(Kl=a)):(a=l,(e!==0||(i&3)!==0)&&(ss=!0)),l=n}Pe!==0&&Pe!==5||Gn(e),La!==0&&(La=0)}function pf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Se(i),c=1<<r,p=n[r];p===-1?((c&a)===0||(c&l)!==0)&&(n[r]=km(c,t)):p<=t&&(e.expiredLanes|=c),i&=~c}if(t=De,a=ue,a=ci(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ml(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ml(l),Ms(a)){case 2:case 8:a=ui;break;case 32:a=pl;break;case 268435456:a=L;break;default:a=pl}return l=hf.bind(null,e),a=ln(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ml(l),e.callbackPriority=2,e.callbackNode=null,2}function hf(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ns()&&e.callbackNode!==a)return null;var l=ue;return l=ci(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Jd(e,l,t),pf(e,it()),e.callbackNode!=null&&e.callbackNode===a?hf.bind(null,e):null)}function _f(e,t){if(ns())return null;Jd(e,t,!0)}function fh(){Nh(function(){(be&6)!==0?ln(oi,dh):mf()})}function yo(){if(La===0){var e=Ol;e===0&&(e=ya,ya<<=1,(ya&261888)===0&&(ya=256)),La=e}return La}function gf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function yf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function mh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=gf((n[ft]||null).action),r=l.submitter;r&&(t=(t=r[ft]||null)?gf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new yi("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(La!==0){var p=r?yf(n,r):new FormData(n);Hr(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(c.preventDefault(),p=r?yf(n,r):new FormData(n),Hr(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var vo=0;vo<er.length;vo++){var xo=er[vo],ph=xo.toLowerCase(),hh=xo[0].toUpperCase()+xo.slice(1);qt(ph,"on"+hh)}qt(Ku,"onAnimationEnd"),qt(Ju,"onAnimationIteration"),qt(Pu,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(Mp,"onTransitionRun"),qt(Cp,"onTransitionStart"),qt(Op,"onTransitionCancel"),qt(Wu,"onTransitionEnd"),vl("onMouseEnter",["mouseout","mouseover"]),vl("onMouseLeave",["mouseout","mouseover"]),vl("onPointerEnter",["pointerout","pointerover"]),vl("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vn));function vf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var c=l[r],p=c.instance,w=c.currentTarget;if(c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(M){bi(M)}n.currentTarget=null,i=p}else for(r=0;r<l.length;r++){if(c=l[r],p=c.instance,w=c.currentTarget,c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(M){bi(M)}n.currentTarget=null,i=p}}}}function oe(e,t){var a=t[Cs];a===void 0&&(a=t[Cs]=new Set);var l=e+"__bubble";a.has(l)||(xf(t,e,2,!1),a.add(l))}function bo(e,t,a){var l=0;t&&(l|=4),xf(a,e,l,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[rs]){e[rs]=!0,fu.forEach(function(a){a!=="selectionchange"&&(_h.has(a)||bo(a,!1,e),bo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,bo("selectionchange",!1,t))}}function xf(e,t,a,l){switch(Jf(t)){case 2:var n=Xh;break;case 8:n=Qh;break;default:n=Ho}a=n.bind(null,t,a,e),n=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function wo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=_l(c),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=i=r;continue e}c=c.parentNode}}l=l.return}Nu(function(){var w=i,M=qs(a),U=[];e:{var N=$u.get(e);if(N!==void 0){var A=yi,Q=e;switch(e){case"keypress":if(_i(a)===0)break e;case"keydown":case"keyup":A=up;break;case"focusin":Q="focus",A=Qs;break;case"focusout":Q="blur",A=Qs;break;case"beforeblur":case"afterblur":A=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=fp;break;case Ku:case Ju:case Pu:A=ep;break;case Wu:A=pp;break;case"scroll":case"scrollend":A=Jm;break;case"wheel":A=_p;break;case"copy":case"cut":case"paste":A=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Du;break;case"toggle":case"beforetoggle":A=yp}var $=(t&4)!==0,Ae=!$&&(e==="scroll"||e==="scrollend"),b=$?N!==null?N+"Capture":null:N;$=[];for(var g=w,S;g!==null;){var O=g;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||b===null||(O=dn(g,b),O!=null&&$.push(Xn(g,O,S))),Ae)break;g=g.return}0<$.length&&(N=new A(N,Q,null,a,M),U.push({event:N,listeners:$}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",N&&a!==ks&&(Q=a.relatedTarget||a.fromElement)&&(_l(Q)||Q[hl]))break e;if((A||N)&&(N=M.window===M?M:(N=M.ownerDocument)?N.defaultView||N.parentWindow:window,A?(Q=a.relatedTarget||a.toElement,A=w,Q=Q?_l(Q):null,Q!==null&&(Ae=_(Q),$=Q.tag,Q!==Ae||$!==5&&$!==27&&$!==6)&&(Q=null)):(A=null,Q=w),A!==Q)){if($=ju,O="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=Du,O="onPointerLeave",b="onPointerEnter",g="pointer"),Ae=A==null?N:cn(A),S=Q==null?N:cn(Q),N=new $(O,g+"leave",A,a,M),N.target=Ae,N.relatedTarget=S,O=null,_l(M)===w&&($=new $(b,g+"enter",Q,a,M),$.target=S,$.relatedTarget=Ae,O=$),Ae=O,A&&Q)t:{for($=gh,b=A,g=Q,S=0,O=b;O;O=$(O))S++;O=0;for(var P=g;P;P=$(P))O++;for(;0<S-O;)b=$(b),S--;for(;0<O-S;)g=$(g),O--;for(;S--;){if(b===g||g!==null&&b===g.alternate){$=b;break t}b=$(b),g=$(g)}$=null}else $=null;A!==null&&bf(U,N,A,$,!1),Q!==null&&Ae!==null&&bf(U,Ae,Q,$,!0)}}e:{if(N=w?cn(w):window,A=N.nodeName&&N.nodeName.toLowerCase(),A==="select"||A==="input"&&N.type==="file")var ge=Hu;else if(Uu(N))if(ku)ge=Ap;else{ge=Ep;var Z=Tp}else A=N.nodeName,!A||A.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?w&&Hs(w.elementType)&&(ge=Hu):ge=jp;if(ge&&(ge=ge(e,w))){Lu(U,ge,a,M);break e}Z&&Z(e,N,w),e==="focusout"&&w&&N.type==="number"&&w.memoizedProps.value!=null&&Ls(N,"number",N.value)}switch(Z=w?cn(w):window,e){case"focusin":(Uu(Z)||Z.contentEditable==="true")&&(Tl=Z,Ws=w,vn=null);break;case"focusout":vn=Ws=Tl=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,Fu(U,a,M);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":Fu(U,a,M)}var ie;if(Zs)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Nl?Ou(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Ru&&a.locale!=="ko"&&(Nl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Nl&&(ie=Tu()):(xa=M,Gs="value"in xa?xa.value:xa.textContent,Nl=!0)),Z=os(w,ce),0<Z.length&&(ce=new Au(ce,e,null,a,M),U.push({event:ce,listeners:Z}),ie?ce.data=ie:(ie=zu(a),ie!==null&&(ce.data=ie)))),(ie=xp?bp(e,a):Sp(e,a))&&(ce=os(w,"onBeforeInput"),0<ce.length&&(Z=new Au("onBeforeInput","beforeinput",null,a,M),U.push({event:Z,listeners:ce}),Z.data=ie)),mh(U,e,w,a,M)}vf(U,t)})}function Xn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function os(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=dn(e,a),n!=null&&l.unshift(Xn(e,n,i)),n=dn(e,t),n!=null&&l.push(Xn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function gh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bf(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var c=a,p=c.alternate,w=c.stateNode;if(c=c.tag,p!==null&&p===l)break;c!==5&&c!==26&&c!==27||w===null||(p=w,n?(w=dn(a,i),w!=null&&r.unshift(Xn(a,w,p))):n||(w=dn(a,i),w!=null&&r.push(Xn(a,w,p)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var yh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(yh,`
`).replace(vh,"")}function wf(e,t){return t=Sf(t),Sf(e)===t}function je(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||bl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&bl(e,""+l);break;case"className":fi(e,"class",l);break;case"tabIndex":fi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,a,l);break;case"style":Su(e,l,i);break;case"data":if(t!=="object"){fi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=pi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=pi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=$t);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=pi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),di(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":di(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zm.get(a)||a,di(e,a,l))}}function No(e,t,a,l,n,i){switch(a){case"style":Su(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?bl(e,l):(typeof l=="number"||typeof l=="bigint")&&bl(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[ft]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):di(e,a,l)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,i,r,a,null)}}n&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var c=i=r=n=null,p=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":n=M;break;case"type":r=M;break;case"checked":p=M;break;case"defaultChecked":w=M;break;case"value":i=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:je(e,t,l,M,a,null)}}yu(e,i,c,p,w,r,n,!1);return;case"select":oe("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:je(e,t,n,c,a,null)}t=i,a=r,e.multiple=!!l,t!=null?xl(e,!!l,t,!1):a!=null&&xl(e,!!l,a,!0);return;case"textarea":oe("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:je(e,t,r,c,a,null)}xu(e,l,n,i);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":je(e,t,p,l,a,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<Vn.length;l++)oe(Vn[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,w,l,a,null)}return;default:if(Hs(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&No(e,t,M,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&je(e,t,c,l,a,null))}function xh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,p=null,w=null,M=null;for(A in a){var U=a[A];if(a.hasOwnProperty(A)&&U!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(A)||je(e,t,A,null,l,U)}}for(var N in l){var A=l[N];if(U=a[N],l.hasOwnProperty(N)&&(A!=null||U!=null))switch(N){case"type":i=A;break;case"name":n=A;break;case"checked":w=A;break;case"defaultChecked":M=A;break;case"value":r=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==U&&je(e,t,N,A,l,U)}}Us(e,r,c,p,w,M,i,n);return;case"select":A=r=c=N=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":A=p;default:l.hasOwnProperty(i)||je(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":N=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==p&&je(e,t,n,i,l,p)}t=c,a=r,l=A,N!=null?xl(e,!!a,N,!1):!!l!=!!a&&(t!=null?xl(e,!!a,t,!0):xl(e,!!a,a?[]:"",!1));return;case"textarea":A=N=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:je(e,t,c,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":N=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&je(e,t,r,n,l,i)}vu(e,N,A);return;case"option":for(var Q in a)N=a[Q],a.hasOwnProperty(Q)&&N!=null&&!l.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:je(e,t,Q,null,l,N));for(p in l)N=l[p],A=a[p],l.hasOwnProperty(p)&&N!==A&&(N!=null||A!=null)&&(p==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":je(e,t,p,N,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)N=a[$],a.hasOwnProperty($)&&N!=null&&!l.hasOwnProperty($)&&je(e,t,$,null,l,N);for(w in l)if(N=l[w],A=a[w],l.hasOwnProperty(w)&&N!==A&&(N!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:je(e,t,w,N,l,A)}return;default:if(Hs(t)){for(var Ae in a)N=a[Ae],a.hasOwnProperty(Ae)&&N!==void 0&&!l.hasOwnProperty(Ae)&&No(e,t,Ae,void 0,l,N);for(M in l)N=l[M],A=a[M],!l.hasOwnProperty(M)||N===A||N===void 0&&A===void 0||No(e,t,M,N,l,A);return}}for(var b in a)N=a[b],a.hasOwnProperty(b)&&N!=null&&!l.hasOwnProperty(b)&&je(e,t,b,null,l,N);for(U in l)N=l[U],A=a[U],!l.hasOwnProperty(U)||N===A||N==null&&A==null||je(e,t,U,N,l,A)}function Nf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,c=n.duration;if(i&&c&&Nf(r)){for(r=0,c=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],w=p.startTime;if(w>c)break;var M=p.transferSize,U=p.initiatorType;M&&Nf(U)&&(p=p.responseEnd,r+=M*(p<c?1:(c-w)/(p-w)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var To=null,Eo=null;function us(e){return e.nodeType===9?e:e.ownerDocument}function Tf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ef(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ao=null;function Sh(){var e=window.event;return e&&e.type==="popstate"?e===Ao?!1:(Ao=e,!0):(Ao=null,!1)}var jf=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Af=typeof Promise=="function"?Promise:void 0,Nh=typeof queueMicrotask=="function"?queueMicrotask:typeof Af<"u"?function(e){return Af.resolve(null).then(e).catch(Th)}:jf;function Th(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Df(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),$l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Qn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[un]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Qn(e.ownerDocument.body);a=n}while(a);$l(t)}function Rf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Do(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Do(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function jh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function Mf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Ro(e){return e.data==="$?"||e.data==="$~"}function Mo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ah(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Co=null;function Cf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function zf(e,t,a){switch(t=us(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Qn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Os(e)}var Ut=new Map,Uf=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=B.d;B.d={f:Dh,r:Rh,D:Mh,C:Ch,L:Oh,m:zh,X:Lh,S:Uh,M:Hh};function Dh(){var e=pa.f(),t=ts();return e||t}function Rh(e){var t=gl(e);t!==null&&t.tag===5&&t.type==="form"?Wc(t):pa.r(e)}var Jl=typeof document>"u"?null:document;function Lf(e,t,a){var l=Jl;if(l&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Uf.has(n)||(Uf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),nt(t,"link",e),$e(t),l.head.appendChild(t)))}}function Mh(e){pa.D(e),Lf("dns-prefetch",e,null)}function Ch(e,t){pa.C(e,t),Lf("preconnect",e,t)}function Oh(e,t,a){pa.L(e,t,a);var l=Jl;if(l&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+jt(a.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var i=n;switch(t){case"style":i=Pl(e);break;case"script":i=Wl(e)}Ut.has(i)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ut.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Fn(i))||t==="script"&&l.querySelector(Zn(i))||(t=l.createElement("link"),nt(t,"link",e),$e(t),l.head.appendChild(t)))}}function zh(e,t){pa.m(e,t);var a=Jl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(l)+'"][href="'+jt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Wl(e)}if(!Ut.has(i)&&(e=j({rel:"modulepreload",href:e},t),Ut.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zn(i)))return}l=a.createElement("link"),nt(l,"link",e),$e(l),a.head.appendChild(l)}}}function Uh(e,t,a){pa.S(e,t,a);var l=Jl;if(l&&e){var n=yl(l).hoistableStyles,i=Pl(e);t=t||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(Fn(i)))c.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ut.get(i))&&Oo(e,a);var p=r=l.createElement("link");$e(p),nt(p,"link",e),p._p=new Promise(function(w,M){p.onload=w,p.onerror=M}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ds(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function Lh(e,t){pa.X(e,t);var a=Jl;if(a&&e){var l=yl(a).hoistableScripts,n=Wl(e),i=l.get(n);i||(i=a.querySelector(Zn(n)),i||(e=j({src:e,async:!0},t),(t=Ut.get(n))&&zo(e,t),i=a.createElement("script"),$e(i),nt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hh(e,t){pa.M(e,t);var a=Jl;if(a&&e){var l=yl(a).hoistableScripts,n=Wl(e),i=l.get(n);i||(i=a.querySelector(Zn(n)),i||(e=j({src:e,async:!0,type:"module"},t),(t=Ut.get(n))&&zo(e,t),i=a.createElement("script"),$e(i),nt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hf(e,t,a,l){var n=(n=se.current)?cs(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Pl(a.href),a=yl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pl(a.href);var i=yl(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Fn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Ut.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ut.set(e,a),i||kh(n,e,a,r.state))),t&&l===null)throw Error(u(528,""));return r}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wl(a),a=yl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Pl(e){return'href="'+jt(e)+'"'}function Fn(e){return'link[rel="stylesheet"]['+e+"]"}function kf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function kh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),nt(t,"link",a),$e(t),e.head.appendChild(t))}function Wl(e){return'[src="'+jt(e)+'"]'}function Zn(e){return"script[async]"+e}function qf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),nt(l,"style",n),ds(l,a.precedence,e),t.instance=l;case"stylesheet":n=Pl(a.href);var i=e.querySelector(Fn(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=kf(a),(n=Ut.get(n))&&Oo(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var r=i;return r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),nt(i,"link",l),t.state.loading|=4,ds(i,a.precedence,e),t.instance=i;case"script":return i=Wl(a.src),(n=e.querySelector(Zn(i)))?(t.instance=n,$e(n),n):(l=a,(n=Ut.get(i))&&(l=j({},a),zo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),nt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ds(l,a.precedence,e));return t.instance}function ds(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fs=null;function Bf(e,t,a){if(fs===null){var l=new Map,n=fs=new Map;n.set(a,l)}else n=fs,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[un]||i[et]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=l.get(r);c?c.push(i):l.set(r,[i])}}return l}function Yf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Pl(l.href),i=t.querySelector(Fn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ms.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,$e(i);return}i=t.ownerDocument||t,l=kf(l),(n=Ut.get(n))&&Oo(l,n),i=i.createElement("link"),$e(i);var r=i;r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),nt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ms.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Uo=0;function Yh(e,t){return e.stylesheets&&e.count===0&&hs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&hs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Uo===0&&(Uo=62500*bh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Uo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function hs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(Gh,e),ps=null,ms.call(e))}function Gh(e,t){if(!(t.state.loading&4)){var a=ps.get(e);if(a)var l=a.get(null);else{a=new Map,ps.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=ms.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Kn={$$typeof:J,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Vh(e,t,a,l,n,i,r,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ds(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.hiddenUpdates=Ds(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Vf(e,t,a,l,n,i,r,c,p,w,M,U){return e=new Vh(e,t,a,r,p,w,M,U,c),t=1,i===!0&&(t|=24),i=xt(3,null,null,t),e.current=i,i.stateNode=e,t=mr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},gr(i),e}function Xf(e){return e?(e=Al,e):Al}function Qf(e,t,a,l,n,i){n=Xf(n),l.context===null?l.context=n:l.pendingContext=n,l=Ea(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ja(e,l,t),a!==null&&(yt(a,e,t),En(a,e,t))}function Ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lo(e,t){Ff(e,t),(e=e.alternate)&&Ff(e,t)}function Zf(e){if(e.tag===13||e.tag===31){var t=Ja(e,67108864);t!==null&&yt(t,e,67108864),Lo(e,67108864)}}function Kf(e){if(e.tag===13||e.tag===31){var t=Tt();t=Rs(t);var a=Ja(e,t);a!==null&&yt(a,e,t),Lo(e,t)}}var _s=!0;function Xh(e,t,a,l){var n=R.T;R.T=null;var i=B.p;try{B.p=2,Ho(e,t,a,l)}finally{B.p=i,R.T=n}}function Qh(e,t,a,l){var n=R.T;R.T=null;var i=B.p;try{B.p=8,Ho(e,t,a,l)}finally{B.p=i,R.T=n}}function Ho(e,t,a,l){if(_s){var n=ko(l);if(n===null)wo(e,t,l,gs,a),Pf(e,l);else if(Zh(n,e,t,a,l))l.stopPropagation();else if(Pf(e,l),t&4&&-1<Fh.indexOf(e)){for(;n!==null;){var i=gl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Pt(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var p=1<<31-Se(r);c.entanglements[1]|=p,r&=~p}Ft(i),(be&6)===0&&(Ii=it()+500,Gn(0))}}break;case 31:case 13:c=Ja(i,2),c!==null&&yt(c,i,2),ts(),Lo(i,2)}if(i=ko(l),i===null&&wo(e,t,l,gs,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else wo(e,t,l,null,a)}}function ko(e){return e=qs(e),qo(e)}var gs=null;function qo(e){if(gs=null,e=_l(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gs=e,null}function Jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ri()){case oi:return 2;case ui:return 8;case pl:case C:return 32;case L:return 268435456;default:return 32}default:return 32}}var Bo=!1,ka=null,qa=null,Ba=null,Jn=new Map,Pn=new Map,Ya=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(t.pointerId)}}function Wn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=gl(t),t!==null&&Zf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zh(e,t,a,l,n){switch(t){case"focusin":return ka=Wn(ka,e,t,a,l,n),!0;case"dragenter":return qa=Wn(qa,e,t,a,l,n),!0;case"mouseover":return Ba=Wn(Ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Jn.set(i,Wn(Jn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Pn.set(i,Wn(Pn.get(i)||null,e,t,a,l,n)),!0}return!1}function Wf(e){var t=_l(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,cu(e.priority,function(){Kf(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,cu(e.priority,function(){Kf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ko(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ks=l,a.target.dispatchEvent(l),ks=null}else return t=gl(a),t!==null&&Zf(t),e.blockedOn=a,!1;t.shift()}return!0}function $f(e,t,a){ys(e)&&a.delete(t)}function Kh(){Bo=!1,ka!==null&&ys(ka)&&(ka=null),qa!==null&&ys(qa)&&(qa=null),Ba!==null&&ys(Ba)&&(Ba=null),Jn.forEach($f),Pn.forEach($f)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Kh)))}var xs=null;function If(e){xs!==e&&(xs=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){xs===e&&(xs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qo(l||a)===null)continue;break}var i=gl(a);i!==null&&(e.splice(t,3),t-=3,Hr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function $l(e){function t(p){return vs(p,e)}ka!==null&&vs(ka,e),qa!==null&&vs(qa,e),Ba!==null&&vs(Ba,e),Jn.forEach(t),Pn.forEach(t);for(var a=0;a<Ya.length;a++){var l=Ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[ft]||null;if(typeof i=="function")r||If(a);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[ft]||null)c=r.formAction;else if(qo(n)!==null)continue}else c=r.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),If(a)}}}function em(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Yo(e){this._internalRoot=e}bs.prototype.render=Yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=Tt();Qf(a,l,e,t,null,null)},bs.prototype.unmount=Yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qf(e.current,2,null,e,null,null),ts(),t[hl]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ya.length&&t!==0&&t<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Wf(e)}};var tm=d.version;if(tm!=="19.2.3")throw Error(u(527,tm,"19.2.3"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var Jh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Ye=Ss.inject(Jh),xe=Ss}catch{}}return In.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=rd,i=od,r=ud;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vf(e,1,!1,null,null,a,l,null,n,i,r,em),e[hl]=t.current,So(e),new Yo(t)},In.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=rd,r=od,c=ud,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Vf(e,1,!0,t,a??null,l,n,p,i,r,c,em),t.context=Xf(null),a=t.current,l=Tt(),l=Rs(l),n=Ea(l),n.callback=null,ja(a,n,l),a=l,t.current.lanes=a,on(t,a),Ft(t),e[hl]=t.current,So(e),new bs(t)},In.version="19.2.3",In}var dm;function i_(){if(dm)return Xo.exports;dm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Xo.exports=n_(),Xo.exports}var s_=i_();var fm="popstate";function r_(o={}){function d(u,m){let{pathname:_,search:x,hash:E}=u.location;return Wo("",{pathname:_,search:x,hash:E},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:ti(m)}return u_(d,f,null,o)}function Le(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Zt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function o_(){return Math.random().toString(36).substring(2,10)}function mm(o,d){return{usr:o.state,key:o.key,idx:d}}function Wo(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Il(d):d,state:f,key:d&&d.key||u||o_()}}function ti({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Il(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function u_(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:_=!1}=u,x=m.history,E="POP",y=null,h=D();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function D(){return(x.state||{idx:null}).idx}function j(){E="POP";let X=D(),K=X==null?null:X-h;h=X,y&&y({action:E,location:q.location,delta:K})}function H(X,K){E="PUSH";let G=Wo(q.location,X,K);h=D()+1;let J=mm(G,h),pe=q.createHref(G);try{x.pushState(J,"",pe)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;m.location.assign(pe)}_&&y&&y({action:E,location:q.location,delta:1})}function F(X,K){E="REPLACE";let G=Wo(q.location,X,K);h=D();let J=mm(G,h),pe=q.createHref(G);x.replaceState(J,"",pe),_&&y&&y({action:E,location:q.location,delta:0})}function k(X){return c_(X)}let q={get action(){return E},get location(){return o(m,x)},listen(X){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(fm,j),y=X,()=>{m.removeEventListener(fm,j),y=null}},createHref(X){return d(m,X)},createURL:k,encodeLocation(X){let K=k(X);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:H,replace:F,go(X){return x.go(X)}};return q}function c_(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Le(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:ti(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function vm(o,d,f="/"){return d_(o,d,f,!1)}function d_(o,d,f,u){let m=typeof d=="string"?Il(d):d,_=_a(m.pathname||"/",f);if(_==null)return null;let x=xm(o);f_(x);let E=null;for(let y=0;E==null&&y<x.length;++y){let h=w_(_);E=b_(x[y],h,u)}return E}function xm(o,d=[],f=[],u="",m=!1){let _=(x,E,y=m,h)=>{let D={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:E,route:x};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(u)&&y)return;Le(D.relativePath.startsWith(u),`Absolute route path "${D.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(u.length)}let j=ha([u,D.relativePath]),H=f.concat(D);x.children&&x.children.length>0&&(Le(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),xm(x.children,d,H,j,y)),!(x.path==null&&!x.index)&&d.push({path:j,score:v_(j,x.index),routesMeta:H})};return o.forEach((x,E)=>{if(x.path===""||!x.path?.includes("?"))_(x,E);else for(let y of bm(x.path))_(x,E,!0,y)}),d}function bm(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),_=f.replace(/\?$/,"");if(u.length===0)return m?[_,""]:[_];let x=bm(u.join("/")),E=[];return E.push(...x.map(y=>y===""?_:[_,y].join("/"))),m&&E.push(...x),E.map(y=>o.startsWith("/")&&y===""?"/":y)}function f_(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:x_(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var m_=/^:[\w-]+$/,p_=3,h_=2,__=1,g_=10,y_=-2,pm=o=>o==="*";function v_(o,d){let f=o.split("/"),u=f.length;return f.some(pm)&&(u+=y_),d&&(u+=h_),f.filter(m=>!pm(m)).reduce((m,_)=>m+(m_.test(_)?p_:_===""?__:g_),u)}function x_(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function b_(o,d,f=!1){let{routesMeta:u}=o,m={},_="/",x=[];for(let E=0;E<u.length;++E){let y=u[E],h=E===u.length-1,D=_==="/"?d:d.slice(_.length)||"/",j=Es({path:y.relativePath,caseSensitive:y.caseSensitive,end:h},D),H=y.route;if(!j&&h&&f&&!u[u.length-1].route.index&&(j=Es({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},D)),!j)return null;Object.assign(m,j.params),x.push({params:m,pathname:ha([_,j.pathname]),pathnameBase:j_(ha([_,j.pathnameBase])),route:H}),j.pathnameBase!=="/"&&(_=ha([_,j.pathnameBase]))}return x}function Es(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=S_(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let _=m[0],x=_.replace(/(.)\/+$/,"$1"),E=m.slice(1);return{params:u.reduce((h,{paramName:D,isOptional:j},H)=>{if(D==="*"){let k=E[H]||"";x=_.slice(0,_.length-k.length).replace(/(.)\/+$/,"$1")}const F=E[H];return j&&!F?h[D]=void 0:h[D]=(F||"").replace(/%2F/g,"/"),h},{}),pathname:_,pathnameBase:x,pattern:o}}function S_(o,d=!1,f=!0){Zt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,E,y)=>(u.push({paramName:E,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function w_(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Zt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function _a(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}var N_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function T_(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Il(o):o,_;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?_=hm(f.substring(1),"/"):_=hm(f,d)):_=d,{pathname:_,search:A_(u),hash:D_(m)}}function hm(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Ko(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function E_(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Sm(o){let d=E_(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function wm(o,d,f,u=!1){let m;typeof o=="string"?m=Il(o):(m={...o},Le(!m.pathname||!m.pathname.includes("?"),Ko("?","pathname","search",m)),Le(!m.pathname||!m.pathname.includes("#"),Ko("#","pathname","hash",m)),Le(!m.search||!m.search.includes("#"),Ko("#","search","hash",m)));let _=o===""||m.pathname==="",x=_?"/":m.pathname,E;if(x==null)E=f;else{let j=d.length-1;if(!u&&x.startsWith("..")){let H=x.split("/");for(;H[0]==="..";)H.shift(),j-=1;m.pathname=H.join("/")}E=j>=0?d[j]:"/"}let y=T_(m,E),h=x&&x!=="/"&&x.endsWith("/"),D=(_||x===".")&&f.endsWith("/");return!y.pathname.endsWith("/")&&(h||D)&&(y.pathname+="/"),y}var ha=o=>o.join("/").replace(/\/\/+/g,"/"),j_=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),A_=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,D_=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,R_=class{constructor(o,d,f,u=!1){this.status=o,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function M_(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function C_(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tm(o,d){let f=o;if(typeof f!="string"||!N_.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(Nm)try{let _=new URL(window.location.href),x=f.startsWith("//")?new URL(_.protocol+f):new URL(f),E=_a(x.pathname,d);x.origin===_.origin&&E!=null?f=E+x.search+x.hash:m=!0}catch{Zt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Em=["POST","PUT","PATCH","DELETE"];new Set(Em);var O_=["GET",...Em];new Set(O_);var en=T.createContext(null);en.displayName="DataRouter";var js=T.createContext(null);js.displayName="DataRouterState";var z_=T.createContext(!1),jm=T.createContext({isTransitioning:!1});jm.displayName="ViewTransition";var U_=T.createContext(new Map);U_.displayName="Fetchers";var L_=T.createContext(null);L_.displayName="Await";var Lt=T.createContext(null);Lt.displayName="Navigation";var ai=T.createContext(null);ai.displayName="Location";var Kt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var eu=T.createContext(null);eu.displayName="RouteError";var Am="REACT_ROUTER_ERROR",H_="REDIRECT",k_="ROUTE_ERROR_RESPONSE";function q_(o){if(o.startsWith(`${Am}:${H_}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function B_(o){if(o.startsWith(`${Am}:${k_}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new R_(d.status,d.statusText,d.data)}catch{}}function Y_(o,{relative:d}={}){Le(li(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=T.useContext(Lt),{hash:m,pathname:_,search:x}=ni(o,{relative:d}),E=_;return f!=="/"&&(E=_==="/"?f:ha([f,_])),u.createHref({pathname:E,search:x,hash:m})}function li(){return T.useContext(ai)!=null}function ol(){return Le(li(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ai).location}var Dm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rm(o){T.useContext(Lt).static||T.useLayoutEffect(o)}function G_(){let{isDataRoute:o}=T.useContext(Kt);return o?a0():V_()}function V_(){Le(li(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(en),{basename:d,navigator:f}=T.useContext(Lt),{matches:u}=T.useContext(Kt),{pathname:m}=ol(),_=JSON.stringify(Sm(u)),x=T.useRef(!1);return Rm(()=>{x.current=!0}),T.useCallback((y,h={})=>{if(Zt(x.current,Dm),!x.current)return;if(typeof y=="number"){f.go(y);return}let D=wm(y,JSON.parse(_),m,h.relative==="path");o==null&&d!=="/"&&(D.pathname=D.pathname==="/"?d:ha([d,D.pathname])),(h.replace?f.replace:f.push)(D,h.state,h)},[d,f,_,m,o])}T.createContext(null);function X_(){let{matches:o}=T.useContext(Kt),d=o[o.length-1];return d?d.params:{}}function ni(o,{relative:d}={}){let{matches:f}=T.useContext(Kt),{pathname:u}=ol(),m=JSON.stringify(Sm(f));return T.useMemo(()=>wm(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Q_(o,d){return Mm(o,d)}function Mm(o,d,f,u,m){Le(li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=T.useContext(Lt),{matches:x}=T.useContext(Kt),E=x[x.length-1],y=E?E.params:{},h=E?E.pathname:"/",D=E?E.pathnameBase:"/",j=E&&E.route;{let G=j&&j.path||"";Om(h,!j||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let H=ol(),F;if(d){let G=typeof d=="string"?Il(d):d;Le(D==="/"||G.pathname?.startsWith(D),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${G.pathname}" was given in the \`location\` prop.`),F=G}else F=H;let k=F.pathname||"/",q=k;if(D!=="/"){let G=D.replace(/^\//,"").split("/");q="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let X=vm(o,{pathname:q});Zt(j||X!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Zt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=P_(X&&X.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:ha([D,_.encodeLocation?_.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?D:ha([D,_.encodeLocation?_.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),x,f,u,m);return d&&K?T.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},K):K}function F_(){let o=t0(),d=M_(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},_={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",o),x=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:_},"ErrorBoundary")," or"," ",T.createElement("code",{style:_},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},d),f?T.createElement("pre",{style:m},f):null,x)}var Z_=T.createElement(F_,null),Cm=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=B_(o.digest);f&&(o=f)}let d=o!==void 0?T.createElement(Kt.Provider,{value:this.props.routeContext},T.createElement(eu.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?T.createElement(K_,{error:o},d):d}};Cm.contextType=z_;var Jo=new WeakMap;function K_({children:o,error:d}){let{basename:f}=T.useContext(Lt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=q_(d.digest);if(u){let m=Jo.get(d);if(m)throw m;let _=Tm(u.location,f);if(Nm&&!Jo.get(d))if(_.isExternal||u.reloadDocument)window.location.href=_.absoluteURL||_.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(_.to,{replace:u.replace}));throw Jo.set(d,x),x}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${_.absoluteURL||_.to}`})}}return o}function J_({routeContext:o,match:d,children:f}){let u=T.useContext(en);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),T.createElement(Kt.Provider,{value:o},f)}function P_(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let _=o,x=f?.errors;if(x!=null){let D=_.findIndex(j=>j.route.id&&x?.[j.route.id]!==void 0);Le(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),_=_.slice(0,Math.min(_.length,D+1))}let E=!1,y=-1;if(f)for(let D=0;D<_.length;D++){let j=_[D];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(y=D),j.route.id){let{loaderData:H,errors:F}=f,k=j.route.loader&&!H.hasOwnProperty(j.route.id)&&(!F||F[j.route.id]===void 0);if(j.route.lazy||k){E=!0,y>=0?_=_.slice(0,y+1):_=[_[0]];break}}}let h=f&&u?(D,j)=>{u(D,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:C_(f.matches),errorInfo:j})}:void 0;return _.reduceRight((D,j,H)=>{let F,k=!1,q=null,X=null;f&&(F=x&&j.route.id?x[j.route.id]:void 0,q=j.route.errorElement||Z_,E&&(y<0&&H===0?(Om("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,X=null):y===H&&(k=!0,X=j.route.hydrateFallbackElement||null)));let K=d.concat(_.slice(0,H+1)),G=()=>{let J;return F?J=q:k?J=X:j.route.Component?J=T.createElement(j.route.Component,null):j.route.element?J=j.route.element:J=D,T.createElement(J_,{match:j,routeContext:{outlet:D,matches:K,isDataRoute:f!=null},children:J})};return f&&(j.route.ErrorBoundary||j.route.errorElement||H===0)?T.createElement(Cm,{location:f.location,revalidation:f.revalidation,component:q,error:F,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:h}):G()},null)}function tu(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W_(o){let d=T.useContext(en);return Le(d,tu(o)),d}function $_(o){let d=T.useContext(js);return Le(d,tu(o)),d}function I_(o){let d=T.useContext(Kt);return Le(d,tu(o)),d}function au(o){let d=I_(o),f=d.matches[d.matches.length-1];return Le(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function e0(){return au("useRouteId")}function t0(){let o=T.useContext(eu),d=$_("useRouteError"),f=au("useRouteError");return o!==void 0?o:d.errors?.[f]}function a0(){let{router:o}=W_("useNavigate"),d=au("useNavigate"),f=T.useRef(!1);return Rm(()=>{f.current=!0}),T.useCallback(async(m,_={})=>{Zt(f.current,Dm),f.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:d,..._}))},[o,d])}var _m={};function Om(o,d,f){!d&&!_m[o]&&(_m[o]=!0,Zt(!1,f))}T.memo(l0);function l0({routes:o,future:d,state:f,onError:u}){return Mm(o,void 0,f,u,d)}function Va(o){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function n0({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:_=!1,unstable_useTransitions:x}){Le(!li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=o.replace(/^\/*/,"/"),y=T.useMemo(()=>({basename:E,navigator:m,static:_,unstable_useTransitions:x,future:{}}),[E,m,_,x]);typeof f=="string"&&(f=Il(f));let{pathname:h="/",search:D="",hash:j="",state:H=null,key:F="default"}=f,k=T.useMemo(()=>{let q=_a(h,E);return q==null?null:{location:{pathname:q,search:D,hash:j,state:H,key:F},navigationType:u}},[E,h,D,j,H,F,u]);return Zt(k!=null,`<Router basename="${E}"> is not able to match the URL "${h}${D}${j}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:T.createElement(Lt.Provider,{value:y},T.createElement(ai.Provider,{children:d,value:k}))}function i0({children:o,location:d}){return Q_($o(o),d)}function $o(o,d=[]){let f=[];return T.Children.forEach(o,(u,m)=>{if(!T.isValidElement(u))return;let _=[...d,m];if(u.type===T.Fragment){f.push.apply(f,$o(u.props.children,_));return}Le(u.type===Va,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!u.props.index||!u.props.children,"An index route cannot have child routes.");let x={id:u.props.id||_.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(x.children=$o(u.props.children,_)),f.push(x)}),f}var Ns="get",Ts="application/x-www-form-urlencoded";function As(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function s0(o){return As(o)&&o.tagName.toLowerCase()==="button"}function r0(o){return As(o)&&o.tagName.toLowerCase()==="form"}function o0(o){return As(o)&&o.tagName.toLowerCase()==="input"}function u0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function c0(o,d){return o.button===0&&(!d||d==="_self")&&!u0(o)}var ws=null;function d0(){if(ws===null)try{new FormData(document.createElement("form"),0),ws=!1}catch{ws=!0}return ws}var f0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Po(o){return o!=null&&!f0.has(o)?(Zt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ts}"`),null):o}function m0(o,d){let f,u,m,_,x;if(r0(o)){let E=o.getAttribute("action");u=E?_a(E,d):null,f=o.getAttribute("method")||Ns,m=Po(o.getAttribute("enctype"))||Ts,_=new FormData(o)}else if(s0(o)||o0(o)&&(o.type==="submit"||o.type==="image")){let E=o.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=o.getAttribute("formaction")||E.getAttribute("action");if(u=y?_a(y,d):null,f=o.getAttribute("formmethod")||E.getAttribute("method")||Ns,m=Po(o.getAttribute("formenctype"))||Po(E.getAttribute("enctype"))||Ts,_=new FormData(E,o),!d0()){let{name:h,type:D,value:j}=o;if(D==="image"){let H=h?`${h}.`:"";_.append(`${H}x`,"0"),_.append(`${H}y`,"0")}else h&&_.append(h,j)}}else{if(As(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Ns,u=null,m=Ts,x=o}return _&&m==="text/plain"&&(x=_,_=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:_,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lu(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function p0(o,d,f,u){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:d&&_a(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function h0(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _0(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function g0(o,d,f){let u=await Promise.all(o.map(async m=>{let _=d.routes[m.route.id];if(_){let x=await h0(_,f);return x.links?x.links():[]}return[]}));return b0(u.flat(1).filter(_0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function gm(o,d,f,u,m,_){let x=(y,h)=>f[h]?y.route.id!==f[h].route.id:!0,E=(y,h)=>f[h].pathname!==y.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==y.params["*"];return _==="assets"?d.filter((y,h)=>x(y,h)||E(y,h)):_==="data"?d.filter((y,h)=>{let D=u.routes[y.route.id];if(!D||!D.hasLoader)return!1;if(x(y,h)||E(y,h))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function y0(o,d,{includeHydrateFallback:f}={}){return v0(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let _=[m.module];return m.clientActionModule&&(_=_.concat(m.clientActionModule)),m.clientLoaderModule&&(_=_.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(_=_.concat(m.hydrateFallbackModule)),m.imports&&(_=_.concat(m.imports)),_}).flat(1))}function v0(o){return[...new Set(o)]}function x0(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function b0(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let _=JSON.stringify(x0(m));return f.has(_)||(f.add(_),u.push({key:_,link:m})),u},[])}function zm(){let o=T.useContext(en);return lu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function S0(){let o=T.useContext(js);return lu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var nu=T.createContext(void 0);nu.displayName="FrameworkContext";function Um(){let o=T.useContext(nu);return lu(o,"You must render this element inside a <HydratedRouter> element"),o}function w0(o,d){let f=T.useContext(nu),[u,m]=T.useState(!1),[_,x]=T.useState(!1),{onFocus:E,onBlur:y,onMouseEnter:h,onMouseLeave:D,onTouchStart:j}=d,H=T.useRef(null);T.useEffect(()=>{if(o==="render"&&x(!0),o==="viewport"){let q=K=>{K.forEach(G=>{x(G.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return H.current&&X.observe(H.current),()=>{X.disconnect()}}},[o]),T.useEffect(()=>{if(u){let q=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(q)}}},[u]);let F=()=>{m(!0)},k=()=>{m(!1),x(!1)};return f?o!=="intent"?[_,H,{}]:[_,H,{onFocus:ei(E,F),onBlur:ei(y,k),onMouseEnter:ei(h,F),onMouseLeave:ei(D,k),onTouchStart:ei(j,F)}]:[!1,H,{}]}function ei(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function N0({page:o,...d}){let{router:f}=zm(),u=T.useMemo(()=>vm(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?T.createElement(E0,{page:o,matches:u,...d}):null}function T0(o){let{manifest:d,routeModules:f}=Um(),[u,m]=T.useState([]);return T.useEffect(()=>{let _=!1;return g0(o,d,f).then(x=>{_||m(x)}),()=>{_=!0}},[o,d,f]),u}function E0({page:o,matches:d,...f}){let u=ol(),{future:m,manifest:_,routeModules:x}=Um(),{basename:E}=zm(),{loaderData:y,matches:h}=S0(),D=T.useMemo(()=>gm(o,d,h,_,u,"data"),[o,d,h,_,u]),j=T.useMemo(()=>gm(o,d,h,_,u,"assets"),[o,d,h,_,u]),H=T.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let q=new Set,X=!1;if(d.forEach(G=>{let J=_.routes[G.route.id];!J||!J.hasLoader||(!D.some(pe=>pe.route.id===G.route.id)&&G.route.id in y&&x[G.route.id]?.shouldRevalidate||J.hasClientLoader?X=!0:q.add(G.route.id))}),q.size===0)return[];let K=p0(o,E,m.unstable_trailingSlashAwareDataRequests,"data");return X&&q.size>0&&K.searchParams.set("_routes",d.filter(G=>q.has(G.route.id)).map(G=>G.route.id).join(",")),[K.pathname+K.search]},[E,m.unstable_trailingSlashAwareDataRequests,y,u,_,D,d,o,x]),F=T.useMemo(()=>y0(j,_),[j,_]),k=T0(j);return T.createElement(T.Fragment,null,H.map(q=>T.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...f})),F.map(q=>T.createElement("link",{key:q,rel:"modulepreload",href:q,...f})),k.map(({key:q,link:X})=>T.createElement("link",{key:q,nonce:f.nonce,...X,crossOrigin:X.crossOrigin??f.crossOrigin})))}function j0(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A0&&(window.__reactRouterVersion="7.13.0")}catch{}function D0({basename:o,children:d,unstable_useTransitions:f,window:u}){let m=T.useRef();m.current==null&&(m.current=r_({window:u,v5Compat:!0}));let _=m.current,[x,E]=T.useState({action:_.action,location:_.location}),y=T.useCallback(h=>{f===!1?E(h):T.startTransition(()=>E(h))},[f]);return T.useLayoutEffect(()=>_.listen(y),[_,y]),T.createElement(n0,{basename:o,children:d,location:x.location,navigationType:x.action,navigator:_,unstable_useTransitions:f})}var Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=T.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:_,replace:x,state:E,target:y,to:h,preventScrollReset:D,viewTransition:j,unstable_defaultShouldRevalidate:H,...F},k){let{basename:q,unstable_useTransitions:X}=T.useContext(Lt),K=typeof h=="string"&&Lm.test(h),G=Tm(h,q);h=G.to;let J=Y_(h,{relative:m}),[pe,de,ve]=w0(u,F),ee=O0(h,{replace:x,state:E,target:y,preventScrollReset:D,relative:m,viewTransition:j,unstable_defaultShouldRevalidate:H,unstable_useTransitions:X});function Te(Je){d&&d(Je),Je.defaultPrevented||ee(Je)}let qe=T.createElement("a",{...F,...ve,href:G.absoluteURL||J,onClick:G.isExternal||_?d:Te,ref:j0(k,de),target:y,"data-discover":!K&&f==="render"?"true":void 0});return pe&&!K?T.createElement(T.Fragment,null,qe,T.createElement(N0,{page:J})):qe});Re.displayName="Link";var R0=T.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:_,to:x,viewTransition:E,children:y,...h},D){let j=ni(x,{relative:h.relative}),H=ol(),F=T.useContext(js),{navigator:k,basename:q}=T.useContext(Lt),X=F!=null&&k0(j)&&E===!0,K=k.encodeLocation?k.encodeLocation(j).pathname:j.pathname,G=H.pathname,J=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;f||(G=G.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=_a(J,q)||J);const pe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let de=G===K||!m&&G.startsWith(K)&&G.charAt(pe)==="/",ve=J!=null&&(J===K||!m&&J.startsWith(K)&&J.charAt(K.length)==="/"),ee={isActive:de,isPending:ve,isTransitioning:X},Te=de?d:void 0,qe;typeof u=="function"?qe=u(ee):qe=[u,de?"active":null,ve?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Je=typeof _=="function"?_(ee):_;return T.createElement(Re,{...h,"aria-current":Te,className:qe,ref:D,style:Je,to:x,viewTransition:E},typeof y=="function"?y(ee):y)});R0.displayName="NavLink";var M0=T.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:_,method:x=Ns,action:E,onSubmit:y,relative:h,preventScrollReset:D,viewTransition:j,unstable_defaultShouldRevalidate:H,...F},k)=>{let{unstable_useTransitions:q}=T.useContext(Lt),X=L0(),K=H0(E,{relative:h}),G=x.toLowerCase()==="get"?"get":"post",J=typeof E=="string"&&Lm.test(E),pe=de=>{if(y&&y(de),de.defaultPrevented)return;de.preventDefault();let ve=de.nativeEvent.submitter,ee=ve?.getAttribute("formmethod")||x,Te=()=>X(ve||de.currentTarget,{fetcherKey:d,method:ee,navigate:f,replace:m,state:_,relative:h,preventScrollReset:D,viewTransition:j,unstable_defaultShouldRevalidate:H});q&&f!==!1?T.startTransition(()=>Te()):Te()};return T.createElement("form",{ref:k,method:G,action:K,onSubmit:u?y:pe,...F,"data-discover":!J&&o==="render"?"true":void 0})});M0.displayName="Form";function C0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hm(o){let d=T.useContext(en);return Le(d,C0(o)),d}function O0(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:_,viewTransition:x,unstable_defaultShouldRevalidate:E,unstable_useTransitions:y}={}){let h=G_(),D=ol(),j=ni(o,{relative:_});return T.useCallback(H=>{if(c0(H,d)){H.preventDefault();let F=f!==void 0?f:ti(D)===ti(j),k=()=>h(o,{replace:F,state:u,preventScrollReset:m,relative:_,viewTransition:x,unstable_defaultShouldRevalidate:E});y?T.startTransition(()=>k()):k()}},[D,h,j,f,u,d,o,m,_,x,E,y])}var z0=0,U0=()=>`__${String(++z0)}__`;function L0(){let{router:o}=Hm("useSubmit"),{basename:d}=T.useContext(Lt),f=e0(),u=o.fetch,m=o.navigate;return T.useCallback(async(_,x={})=>{let{action:E,method:y,encType:h,formData:D,body:j}=m0(_,d);if(x.navigate===!1){let H=x.fetcherKey||U0();await u(H,f,x.action||E,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:D,body:j,formMethod:x.method||y,formEncType:x.encType||h,flushSync:x.flushSync})}else await m(x.action||E,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:D,body:j,formMethod:x.method||y,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:f,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,m,d,f])}function H0(o,{relative:d}={}){let{basename:f}=T.useContext(Lt),u=T.useContext(Kt);Le(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),_={...ni(o||".",{relative:d})},x=ol();if(o==null){_.search=x.search;let E=new URLSearchParams(_.search),y=E.getAll("index");if(y.some(D=>D==="")){E.delete("index"),y.filter(j=>j).forEach(j=>E.append("index",j));let D=E.toString();_.search=D?`?${D}`:""}}return(!o||o===".")&&m.route.index&&(_.search=_.search?_.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(_.pathname=_.pathname==="/"?f:ha([f,_.pathname])),ti(_)}function k0(o,{relative:d}={}){let f=T.useContext(jm);Le(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Hm("useViewTransitionState"),m=ni(o,{relative:d});if(!f.isTransitioning)return!1;let _=_a(f.currentLocation.pathname,u)||f.currentLocation.pathname,x=_a(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Es(m.pathname,x)!=null||Es(m.pathname,_)!=null}const q0=()=>{const[o,d]=T.useState(!1),f=()=>{d(!o)},u=()=>{d(!1)};return s.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700",children:[s.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[s.jsxs(Re,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:u,children:[s.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:s.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),s.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),s.jsxs("button",{onClick:f,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"rotate-45 translate-y-2":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"opacity-0":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"-rotate-45 -translate-y-2":""}`})]}),s.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[s.jsx("li",{children:s.jsx(Re,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),s.jsx("li",{children:s.jsx(Re,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),s.jsx("li",{children:s.jsx(Re,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),s.jsx("li",{children:s.jsx(Re,{to:"/trading",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Trading"})}),s.jsx("li",{children:s.jsx(Re,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),s.jsx("li",{children:s.jsx(Re,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),o&&s.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:s.jsxs("ul",{className:"flex flex-col space-y-0",children:[s.jsx("li",{children:s.jsx(Re,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Home"})}),s.jsx("li",{children:s.jsx(Re,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"About"})}),s.jsx("li",{children:s.jsx(Re,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Projects"})}),s.jsx("li",{children:s.jsx(Re,{to:"/trading",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Trading"})}),s.jsx("li",{children:s.jsx(Re,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Resume"})}),s.jsx("li",{children:s.jsx(Re,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Contact"})})]})})]})},B0=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsx("div",{className:"grid grid-cols-1 gap-8 md:gap-12 items-center",children:s.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[s.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[s.jsx(Re,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),s.jsx(Re,{to:"/about",className:"px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-colors text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-600/75",children:"Learn About Me"}),s.jsx(Re,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]})})})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),s.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Built a Python-based automated trading framework with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, and Alpaca API order execution."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSockets"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),s.jsx(Re,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Developed an XGBoost regression pipeline using historical NFL data, engineered rolling workload and efficiency features, and evaluated performance on out-of-sample seasons."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Feature Engineering"})]}),s.jsx(Re,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),s.jsx("div",{className:"text-center mt-8 md:mt-12",children:s.jsx(Re,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(o=>s.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:s.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:o})},o))})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),s.jsx(Re,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),Y0=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),s.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:s.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),s.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),s.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),s.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),s.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("a",{href:"https://www.linkedin.com/in/eric-jackson27",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),s.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),s.jsx("div",{className:"space-y-6",children:s.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),s.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),s.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),s.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),s.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),s.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),s.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),s.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),s.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),s.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),s.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),s.jsx("span",{className:"text-slate-300 text-sm",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),s.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),s.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]})]})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),s.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),s.jsx(Re,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),G0=()=>{const[o,d]=T.useState("all"),[f,u]=T.useState(new Set),m=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"27.8 yards"},{label:"R² Score",value:"0.46"},{label:"Classification ROC-AUC",value:"0.626"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["Feature engineering from historical game data","Out-of-sample validation on full season","Classification model for over/under predictions","Actionable insights for sports analytics"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Tastytrade dxFeed"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["Real-time market data streaming via Tastytrade dxFeed WebSocket","Pluggable strategy architecture with async event loop","Alpaca API for automated order execution","Position tracking with entry/exit prices and P&L","Daily auto-shutdown at market close","Configurable timeframes and data requirements"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"XGBoost model for predicting volatility breakouts in SPY options",fullDesc:"Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Binary classification for volatility breakout prediction","Parallel label generation for large datasets","Model calibration analysis with Brier score and log loss","Feature engineering with interaction terms"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"/",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]},{id:5,title:"Options Profit Prediction Model",category:"machine-learning",shortDesc:"XGBoost model predicting profitable SPY options trades",fullDesc:"Built binary classifier with 100+ engineered features to predict end-of-day profitability for SPY options. Includes SHAP-driven interaction features, intraday positioning metrics, and EV analysis by strike/threshold. Deployed to AWS S3 for production inference.",technologies:["Python","XGBoost","SHAP","AWS S3","Pandas"],metrics:[{label:"Features",value:"100+"},{label:"Target",value:"EOD Profit"},{label:"Deployment",value:"AWS S3"}],image:"💰",github:"#",demo:"project-demo/5",highlights:["100+ engineered features across price, volume, and microstructure","SHAP analysis for feature discovery and interaction terms","Intraday positioning features (distance from day high/low)","Expected value analysis by OTM strike and confidence threshold","Statistical validation with paired t-tests","Production deployment to AWS S3"]},{id:6,title:"Intraday Direction Classifier",category:"machine-learning",shortDesc:"XGBoost model for second-level SPY directional prediction",fullDesc:"Multi-class XGBoost classifier predicting SPY near-term movement intensity (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization with multi-threaded backtesting framework.",technologies:["Python","XGBoost","Pandas","ThreadPoolExecutor"],metrics:[{label:"Overall Accuracy",value:"60%"},{label:"Classes",value:"5 (Directional)"},{label:"Frequency",value:"1-second"}],image:"🎯",github:"#",demo:"project-demo/6",highlights:["Multi-class classifier for intraday momentum (5 classes)","Feature selection from colleague's proprietary indicators","Options trading strategy with consecutive signal logic","Multi-threaded backtesting engine for fast validation","Position management with 10-minute hold duration","Risk controls with time-based entry/exit cutoffs","Real-time option pricing from Polygon API"]}],_=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],x=o==="all"?m:m.filter(y=>y.category===o),E=y=>{u(h=>{const D=new Set(h);return D.has(y)?D.delete(y):D.add(y),D})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),s.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[s.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),s.jsx("select",{id:"category-filter",value:o,onChange:y=>d(y.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:_.map(y=>s.jsx("option",{value:y.value,children:y.label},y.value))}),s.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",x.length," project",x.length!==1?"s":""]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:x.length===0?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:x.map(y=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[s.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:s.jsx("span",{className:"text-6xl",children:y.image})}),s.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[s.jsx("div",{className:"mb-3",children:s.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:_.find(h=>h.value===y.category)?.label})}),s.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:y.title}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:y.shortDesc}),s.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:y.fullDesc}),s.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:y.metrics.map((h,D)=>s.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[s.jsx("p",{className:"text-slate-400 text-xs mb-1",children:h.label}),s.jsx("p",{className:"text-white font-bold text-sm",children:h.value})]},D))}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:y.technologies.map(h=>s.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:h},h))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),s.jsx("ul",{className:"space-y-1",children:(f.has(y.id)?y.highlights:y.highlights.slice(0,3)).map((h,D)=>s.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),s.jsx("span",{children:h})]},D))}),y.highlights.length>3&&s.jsx("button",{onClick:()=>E(y.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:f.has(y.id)?"- Show Less":`+ Show ${y.highlights.length-3} More`})]}),s.jsxs("div",{className:"flex gap-4 mt-auto",children:[s.jsx("a",{href:y.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),s.jsx(Re,{to:y.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},y.id))})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),s.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),s.jsx(Re,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},V0=({label:o,description:d,code:f,language:u="python"})=>{const[m,_]=T.useState(!1),x=()=>{navigator.clipboard.writeText(f),_(!0),setTimeout(()=>_(!1),2e3)};return s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[s.jsxs("div",{className:"bg-slate-800 px-6 py-4 border-b border-slate-600",children:[s.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:o}),s.jsx("p",{className:"text-slate-300 text-sm",children:d})]}),s.jsxs("div",{className:"relative",children:[s.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:s.jsx("code",{children:f})}),s.jsx("button",{onClick:x,className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:m?"✓ Copied":"Copy"})]})]})},X0={id:"1",title:"Sports Analytics Predictions – Code Demo",description:"Explore the implementation of an NFL rushing yards prediction pipeline, including feature engineering and modeling. Results are below code samples",codeSamples:[{label:"Feature Engineering",description:"Rolling window features for workload, efficiency, momentum, and volatility metrics",code:`import pandas as pd

# -----------------------------
# Helpers
# -----------------------------

def rolling_feature(series, window, func="mean", min_periods=1):
    """
    Apply a lagged rolling aggregation to prevent lookahead bias.
    """
    rolled = series.shift(1).rolling(window, min_periods=min_periods)
    return getattr(rolled, func)()


def compute_ypc(rush_yards, rush_attempts):
    """
    Safely compute yards per carry.
    """
    return rush_yards / rush_attempts.replace(0, pd.NA)


# -----------------------------
# Load + prep data
# -----------------------------

rush_df = pd.read_csv("path_to_rushing_csv")
rush_df["Date"] = pd.to_datetime(rush_df["Date"])
rush_df = rush_df.sort_values("Date")

# Lookup table: player_id -> feature DataFrame
offense_rush_stats_LOOKUP = {}

# -----------------------------
# Feature engineering
# -----------------------------

for player_id, player_data in rush_df.groupby("player_id"):
    player_data = player_data.sort_values("Date")

    # Core metrics
    rush_yards = player_data["rush_yards"]
    rush_attempts = player_data["rush_attempts"]
    success_rate = player_data["success_percentage"]
    ypc = compute_ypc(rush_yards, rush_attempts)

    # Moving averages
    rush_yards_ma = {w: rolling_feature(rush_yards, w) for w in [1, 3, 5, 10]}
    rush_attempts_ma = {w: rolling_feature(rush_attempts, w) for w in [1, 3, 5, 10]}
    ypc_ma = {w: rolling_feature(ypc, w) for w in [1, 3, 5, 10]}
    success_ma = {w: rolling_feature(success_rate, w) for w in [1, 3, 5, 10]}

    # Momentum (trend deltas)
    rush_yards_delta_3_5 = rush_yards_ma[3] - rush_yards_ma[5]
    rush_yards_delta_5_10 = rush_yards_ma[5] - rush_yards_ma[10]

    rush_attempts_delta_3_5 = rush_attempts_ma[3] - rush_attempts_ma[5]
    rush_attempts_delta_5_10 = rush_attempts_ma[5] - rush_attempts_ma[10]

    ypc_delta_3_5 = ypc_ma[3] - ypc_ma[5]
    ypc_delta_5_10 = ypc_ma[5] - ypc_ma[10]

    success_rate_delta_3_5 = success_ma[3] - success_ma[5]

    # Volatility
    rush_yards_vol_5 = rolling_feature(rush_yards, 5, func="std", min_periods=2)
    ypc_vol_5 = rolling_feature(ypc, 5, func="std", min_periods=2)

    # Extremes
    min_rush_yards_3ma = rolling_feature(rush_yards, 3, func="min")
    min_rush_yards_5ma = rolling_feature(rush_yards, 5, func="min")
    max_rush_yards_3ma = rolling_feature(rush_yards, 3, func="max")
    max_rush_yards_5ma = rolling_feature(rush_yards, 5, func="max")

    # Assemble feature table
    features = pd.DataFrame({
        "Date": player_data["Date"],

        # Rush yards
        "rush_yards_1ma": rush_yards_ma[1],
        "rush_yards_3ma": rush_yards_ma[3],
        "rush_yards_5ma": rush_yards_ma[5],
        "rush_yards_10ma": rush_yards_ma[10],
        "rush_yards_delta_3_5": rush_yards_delta_3_5,
        "rush_yards_delta_5_10": rush_yards_delta_5_10,

        # Attempts
        "rush_attempts_1ma": rush_attempts_ma[1],
        "rush_attempts_3ma": rush_attempts_ma[3],
        "rush_attempts_5ma": rush_attempts_ma[5],
        "rush_attempts_10ma": rush_attempts_ma[10],
        "rush_attempts_delta_3_5": rush_attempts_delta_3_5,
        "rush_attempts_delta_5_10": rush_attempts_delta_5_10,

        # Efficiency
        "ypc_1ma": ypc_ma[1],
        "ypc_3ma": ypc_ma[3],
        "ypc_5ma": ypc_ma[5],
        "ypc_10ma": ypc_ma[10],
        "ypc_delta_3_5": ypc_delta_3_5,
        "ypc_delta_5_10": ypc_delta_5_10,

        # Success rate
        "success_rate_1ma": success_ma[1],
        "success_rate_3ma": success_ma[3],
        "success_rate_5ma": success_ma[5],
        "success_rate_10ma": success_ma[10],
        "success_rate_delta_3_5": success_rate_delta_3_5,

        # Volatility
        "rush_yards_vol_5": rush_yards_vol_5,
        "ypc_vol_5": ypc_vol_5,

        # Extremes
        "min_rush_yards_3ma": min_rush_yards_3ma,
        "min_rush_yards_5ma": min_rush_yards_5ma,
        "max_rush_yards_3ma": max_rush_yards_3ma,
        "max_rush_yards_5ma": max_rush_yards_5ma,

        # Metadata
        "position": player_data["position"].iloc[0],
    })

    offense_rush_stats_LOOKUP[player_id] = features`},{label:"More feature engineering",description:"Wrapping together last code cell to generate a dataframe ready for XGboost to learn off of",code:`import pandas as pd


def safe_latest(df, col):
    """Return latest value of column or 0 if missing."""
    if df.empty or col not in df.columns:
        return 0
    val = df.iloc[-1][col]
    return val if pd.notna(val) else 0


def generate_train_df(rush_df, offense_rush_stats_LOOKUP):
    rush_df = rush_df.sort_values("Date")
    df_train = []

    for _, game in rush_df.iterrows():
        player_id = game["player_id"]
        team = game["Team"]
        game_date = game["Date"].date()

        # -----------------------------
        # Player historical stats
        # -----------------------------
        player_stats_on_date = pd.DataFrame()
        if player_id in offense_rush_stats_LOOKUP:
            stats = offense_rush_stats_LOOKUP[player_id]
            player_stats_on_date = (
                stats[stats["Date"].dt.date <= game_date]
                .sort_values("Date")
            )

        # -----------------------------
        # Other RBs on same team, same game
        # -----------------------------
        other_rushers = rush_df[
            (rush_df["Team"] == team)
            & (rush_df["Date"].dt.date == game_date)
            & (rush_df["player_id"] != player_id)
            & (rush_df["position"] == "RB")
        ]

        others = {
            "others_rush_yards_1ma": 0,
            "others_rush_yards_3ma": 0,
            "others_rush_yards_5ma": 0,
            "others_rush_yards_10ma": 0,
            "others_rush_attempts_1ma": 0,
            "others_rush_attempts_3ma": 0,
            "others_rush_attempts_5ma": 0,
            "others_rush_attempts_10ma": 0,
            "others_ypc_1ma": 0,
            "others_ypc_3ma": 0,
            "others_ypc_5ma": 0,
            "others_ypc_10ma": 0,
        }

        for _, other in other_rushers.iterrows():
            other_id = other["player_id"]
            if other_id not in offense_rush_stats_LOOKUP:
                continue

            other_stats = offense_rush_stats_LOOKUP[other_id]
            other_stats = (
                other_stats[other_stats["Date"].dt.date <= game_date]
                .sort_values("Date")
            )

            for w in [1, 3, 5, 10]:
                others[f"others_rush_yards_{w}ma"] += safe_latest(other_stats, f"rush_yards_{w}ma")
                others[f"others_rush_attempts_{w}ma"] += safe_latest(other_stats, f"rush_attempts_{w}ma")
                others[f"others_ypc_{w}ma"] += safe_latest(other_stats, f"ypc_{w}ma")

        # -----------------------------
        # Carry share + team context
        # -----------------------------
        player_att_1 = safe_latest(player_stats_on_date, "rush_attempts_1ma")
        player_att_3 = safe_latest(player_stats_on_date, "rush_attempts_3ma")
        player_att_5 = safe_latest(player_stats_on_date, "rush_attempts_5ma")

        team_att_3 = others["others_rush_attempts_3ma"] + player_att_3
        team_att_5 = others["others_rush_attempts_5ma"] + player_att_5

        pct_carries_1 = player_att_1 / (player_att_1 + others["others_rush_attempts_1ma"]) if player_att_1 > 0 else 0
        pct_carries_3 = player_att_3 / team_att_3 if team_att_3 > 0 else 0
        pct_carries_5 = player_att_5 / team_att_5 if team_att_5 > 0 else 0

        # -----------------------------
        # Assemble training row
        # -----------------------------
        row = {
            "player_id": player_id,
            "Team": team,
            "Date": game_date,
            "position": game["position"],
            "starter": game["is_starter"],
            "rush_attempts": game["rush_attempts"],
            "rush_yards": game["rush_yards"],
            "pct_of_carries_1ma": pct_carries_1,
            "pct_of_carries_3ma": pct_carries_3,
            "pct_of_carries_5ma": pct_carries_5,
            "Team_total_carries_3ma": team_att_3,
            "Team_total_carries_5ma": team_att_5,
            **(player_stats_on_date.iloc[-1].to_dict() if not player_stats_on_date.empty else {}),
            **others,
        }

        df_train.append(row)

    return pd.DataFrame(df_train)
`},{label:"Model training",description:"Training the model",code:`import numpy as np
import pandas as pd
import xgboost as xg
from sklearn.metrics import mean_squared_error, r2_score
df_train = generate_train_df(rush_df, offense_rush_stats_LOOKUP)
# Prepare data
df_sorted = df_train.sort_values(['Date']).reset_index(drop=True)


PLAYER_FEATURES = [
    # Rush yards
    "rush_yards_1ma",
    "rush_yards_3ma",
    "rush_yards_5ma",
    "rush_yards_10ma",
    "rush_yards_delta_3_5",
    "rush_yards_delta_5_10",

    # Rush attempts
    "rush_attempts_1ma",
    "rush_attempts_3ma",
    "rush_attempts_5ma",
    "rush_attempts_10ma",
    "rush_attempts_delta_3_5",
    "rush_attempts_delta_5_10",

    # Efficiency (YPC)
    "ypc_1ma",
    "ypc_3ma",
    "ypc_5ma",
    "ypc_10ma",
    "ypc_delta_3_5",
    "ypc_delta_5_10",

    # Success rate
    "success_rate_1ma",
    "success_rate_3ma",
    "success_rate_5ma",
    "success_rate_10ma",
    "success_rate_delta_3_5",

    # Volatility
    "rush_yards_vol_5",
    "ypc_vol_5",

    # Extremes
    "min_rush_yards_3ma",
    "min_rush_yards_5ma",
    "max_rush_yards_3ma",
    "max_rush_yards_5ma",
]
OTHER_RB_FEATURES = [
    "others_rush_yards_1ma",
    "others_rush_yards_3ma",
    "others_rush_yards_5ma",
    "others_rush_yards_10ma",

    "others_rush_attempts_1ma",
    "others_rush_attempts_3ma",
    "others_rush_attempts_5ma",
    "others_rush_attempts_10ma",

    "others_ypc_1ma",
    "others_ypc_3ma",
    "others_ypc_5ma",
    "others_ypc_10ma",
]
TEAM_CONTEXT_FEATURES = [
    "pct_of_carries_1ma",
    "pct_of_carries_3ma",
    "pct_of_carries_5ma",
    "Team_total_carries_3ma",
    "Team_total_carries_5ma",
]

FEATURE_COLS = (
    PLAYER_FEATURES
    + OTHER_RB_FEATURES
    + TEAM_CONTEXT_FEATURES
)

# Remove inf/-inf values from features
df_sorted = df_sorted.replace([np.inf, -np.inf], np.nan).dropna(subset=FEATURE_COLS)

# Build week list and cut on an exact boundary

X = df_sorted[FEATURE_COLS]
y = df_sorted['rush_yards']

boundary_date = df_sorted['Date'].iloc[int(len(df_sorted)*0.8)]
train_mask = df_sorted['Date'] <= boundary_date
test_mask  = df_sorted['Date'] >  boundary_date



X_train, X_test = X[train_mask], X[test_mask]
y_train, y_test = y[train_mask], y[test_mask]

# Define model
xgb_r = xg.XGBRegressor(
    objective='reg:squarederror',
    n_estimators=200,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=123
)

# Fit model
xgb_r.fit(X_train, y_train)

# Predict
pred = xgb_r.predict(X_test)

# Evaluate
rmse = np.sqrt(mean_squared_error(y_test, pred))
r2 = r2_score(y_test, pred)

print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")

`}],plots:[{title:"Feature Importance",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"Top predictive features learned by the model provide insight into which variables have the greatest impact on predicting rushing yards."}),s.jsx("p",{children:"For the features not defined earlier:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("b",{children:"starter_flag"}),": player started that game"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_breakaway_rate_5_ma"}),": average count of rushes > 40 yards last 5 games / average carries last 5 games"]}),s.jsxs("li",{children:[s.jsx("b",{children:"team_dependency"}),": pct_of_carries_5ma / (others_rush_attempts_5ma + 10",s.jsx("sup",{children:"-6"}),")"]}),s.jsxs("li",{children:[s.jsx("b",{children:"explosive_index"}),": 0.5 * off_explosive_rate_5_ma + 0.3 * off_breakaway_rate_5_ma + 0.2 * rushes_16_to_20_5_ma_share + 0.1 * rushes_21_plus_5_ma_share"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_explosive_rate_5_ma"}),": average count of rushes ≥ 11 yards last 5 games / average count of rushes"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_16_to_20_5_ma_share"}),": proportion of rushes between 16 and 20 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_21_plus_5_ma_share"}),": proportion of rushes ≥ 21 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rush_yards_rank_pct"}),": rank of rush yards for that season normalized by max rank"]})]})]}),imageUrl:"/rush_yard_featureImportance.png"},{title:"Residual Errors of NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["This histogram shows the distribution of prediction errors (",s.jsx("em",{children:"predicted minus actual rushing yards"}),") across NFL games."]}),s.jsx("p",{children:"Errors are centered close to zero, indicating little overall bias, while the right-skewed tail and occasional large negative errors reveal games where the model significantly over- or under-estimated rushing output."}),s.jsx("p",{children:"The vertical reference lines mark perfect prediction, mean error, and median error, helping illustrate both typical performance and the presence of outlier games."})]}),imageUrl:"/error_NFL.png"},{title:"Actual vs Predicted NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"This chart shows the weekly predicted rushing yards compared to actual results for four standout players throughout the 2024 season"}),s.jsx("p",{className:"text-sm text-slate-400 mt-4",children:"Click image to navigate player-specific error distributions →"})]}),imageUrl:"/bijan_err.png",imageUrls:[{url:"/bijan_err.png",label:"Bijan Robinson"},{url:"/henry_error.png",label:"Derrick Henry"},{url:"/saquon_err.png",label:"Saquon Barkley"},{url:"/taylor_err.png",label:"Jonathan Taylor"}]}]},Q0={id:"2",title:"Live Trading Framework - Code Demo",description:"Python-based automated trading system implementation",codeSamples:[{label:"Initial Setup and ansyncio Loop",description:"Python-based live trading system with async event loop",code:`"""
Live Options Trading Framework
================================
Automated intraday SPY options trading system with ML-based signal generation.

Key Components:
- Real-time market data streaming via Tastytrade dxFeed WebSocket
- XGBoost ML model for volatility prediction
- Alpaca API for order execution
- Pluggable strategy architecture
- Daily auto-shutdown at market close

"""

import os
import time as t
import asyncio
from urllib.parse import urlparse

import pandas as pd
import websockets
import contextlib

from tastytrade_sdk import Tastytrade
from alpaca.trading.client import TradingClient
from alpaca.trading.requests import MarketOrderRequest
from alpaca.trading.enums import OrderSide, TimeInForce

from dataclasses import dataclass
from typing import Literal, Callable
import datetime
import json
import pytz
import xgboost as xgb

from dotenv import load_dotenv

load_dotenv()

# ============================================================================
# TYPE DEFINITIONS
# ============================================================================

Timeframe = Literal["1s", "5s", "10s", "30s", "1m"]


# ============================================================================
# DATA CLASSES
# ============================================================================

@dataclass
class Config:
    """
    Configuration for trading system.
    
    Attributes:
        dataNeeded: List of (symbol, timeframe) tuples for data requirements
        signalUpdate: Frequency of signal updates
    """
    dataNeeded: list[tuple[str, str]]
    signalUpdate: Literal["1s", "5s", "10s", "30s", "1m"]


@dataclass
class OTM_Logic:
    """
    Out-of-the-money strike selection logic based on time of day.
    
    Attributes:
        otm_logic: Maps time ranges to OTM dollar amounts
                   Example: {(9:30, 15:00): 2} means $2 OTM during regular hours
    """
    otm_logic: dict[tuple[datetime.time, datetime.time], int]


@dataclass
class Helper_Funcs:
    """
    Container for strategy helper functions.
    
    Attributes:
        funcs: Dictionary mapping function names to callable functions
    """
    funcs: dict[str, Callable]


@dataclass
class Position:
    """
    Tracks state of an options position (call, put, or straddle).
    
    Call Side Attributes:
        call_time_entered: When call position was opened
        call_time_exited: When call position was closed
        call_symbol: Option ticker symbol
        call_strike: Strike price
        call_entry_price: Entry price per contract
        call_contract_qty: Number of contracts
        call_current_price: Function to fetch current price
        call_exit_price: Exit price per contract
    
    Put Side Attributes:
        put_time_entered: When put position was opened
        put_time_exited: When put position was closed
        put_symbol: Option ticker symbol
        put_strike: Strike price
        put_entry_price: Entry price per contract
        put_contract_qty: Number of contracts
        put_current_price: Function to fetch current price
        put_exit_price: Exit price per contract
    
    Other:
        extraInfo: Dictionary for strategy-specific data (stops, targets, etc.)
    """
    call_time_entered: datetime.datetime | None
    call_time_exited: datetime.datetime | None
    call_symbol: str | None
    call_strike: int | None
    call_entry_price: float | None
    call_contract_qty: int | None
    call_current_price: Callable | None
    call_exit_price: int | None

    put_time_entered: datetime.datetime | None
    put_time_exited: datetime.datetime | None
    put_symbol: str | None 
    put_strike: int | None
    put_entry_price: float | None
    put_contract_qty: int | None
    put_current_price: Callable | None
    put_exit_price: float | None

    extraInfo: dict | None


# ============================================================================
# STRATEGY CLASS
# ============================================================================

class Strategy:
    """
    Pluggable trading strategy with ML model.
    
    Encapsulates all strategy logic including:
    - Feature engineering from raw OHLCV data
    - Entry signal generation
    - Exit signal generation
    - OTM strike selection
    
    Attributes:
        model: XGBoost classifier for predictions
        feature_cols: List of feature column names
        signal_engineer_func: Function to create features from bars
        enter_func: Function to determine entry signals
        exit_func: Function to determine exit signals
        OTM_logic: OTM_Logic instance for strike selection
        helpers: Helper_Funcs instance with utility functions
        signal_df: DataFrame with engineered features (set by trader)
    """
    
    def __init__(self, model_json: str, feature_cols: list[str], 
                 signal_engineer_func: Callable, enter_func: Callable, 
                 exit_func: Callable, OTM_logic: OTM_Logic, 
                 helpers: Helper_Funcs):
        """
        Initialize strategy with ML model and logic functions.
        
        Args:
            model_json: Path to saved XGBoost model file
            feature_cols: List of feature names expected by model
            signal_engineer_func: Callable that transforms OHLCV to features
            enter_func: Callable that returns (bool, side) for entry
            exit_func: Callable that returns exit signal for position
            OTM_logic: OTM_Logic instance for strike selection
            helpers: Helper_Funcs instance with utility functions
        """
        self.model = helpers.funcs['load_model'](model_json)
        self.feature_cols = feature_cols
        self.signal_engineer_func = signal_engineer_func
        self.enter_func = enter_func
        self.exit_func = exit_func
        self.OTM_logic = OTM_logic
        self.signal_df = None
        self.helpers = helpers
    
    def set_signal_df(self, bars_df: pd.DataFrame) -> None:
        """
        Transform raw OHLCV bars into feature dataframe.
        
        Args:
            bars_df: DataFrame with columns [t_ms, open, high, low, close, volume, vwap]
        """
        self.signal_df = self.signal_engineer_func(bars_df, self.helpers)
    
    def get_OTM_logic(self) -> int:
        """
        Get OTM strike offset based on current time.
        
        Returns:
            Integer representing dollars OTM from current price
        """
        now_dt = datetime.datetime.fromtimestamp(t.time(), pytz.UTC)
        now_time = now_dt.time()
        
        for (start_time, end_time), value in self.OTM_logic.otm_logic.items():
            if start_time <= now_time < end_time:
                return value
        return 0


# ============================================================================
# LIVE TRADER CLASS
# ============================================================================

class liveTrader:
    """
    Core trading system managing data streams, orders, and positions.
    
    Architecture:
    - Connects to Tastytrade dxFeed for real-time 1-minute SPY candles
    - Uses Tastytrade API for options chain data and pricing
    - Executes orders via Alpaca trading API
    - Runs async event loop with multiple concurrent tasks
    - Auto-shuts down at market close (3:55 PM ET)
    
    State Management:
    - bars_df: Rolling window of 1-minute OHLCV bars
    - positions: Dict of active Position objects
    - trades_today: List of completed trades
    
    Designed for daily cron execution (9:25 AM - 4:00 PM ET).
    """
    
    def __init__(self, strategy: Strategy, config: Config):
        """
        Initialize trading system with strategy and configuration.
        
        Args:
            strategy: Strategy instance with entry/exit logic
            config: Config instance with system parameters
        
        Notes:
            - Connects to Alpaca and Tastytrade on initialization
            - Fetches current options chain for SPY
            - Loads account buying power
        """
        # API Clients
        self.trading_client = TradingClient(
            os.getenv("ALPACA_API_KEY"),
            os.getenv("ALPACA_SECRET_KEY")
        )
        self.tasty = Tastytrade()
        self.tasty.login(
            login=os.getenv("TASTY_LOGIN"),
            password=os.getenv("TASTY_PASSWORD")
        )
        
        # Account Info
        self.account = self.trading_client.get_account()
        self.amt_trading_today = float(self.account.options_buying_power)
        
        # Strategy & Config
        self.strategy = strategy
        self.config = config
        
        # State
        self.positions: dict[int, Position] = {}
        self.id_count = 0
        self.trades_today: list[dict] = []
        
        # Market Data State
        self.bars_df = pd.DataFrame(columns=[
            "t_ms", "open", "high", "low", "close", "volume", "vwap"
        ])
        self._current_minute_key = None
        self._latest_ev = None
        self._last_signal_fire_utc = None
        self._last_onbar_minute_utc = None
        
        # Options Chain & Feed Token
        self.options_chain = pd.DataFrame(
            self.tasty.api.get('/option-chains/SPY/nested')['data']['items'][0]['expirations'][0]['strikes']
        )
        self.api_quote_token = self.tasty.api.get('/api-quote-tokens')

    # ========================================================================
    # MAIN EVENT LOOP
    # ========================================================================
    
    async def entrypoint(self) -> None:
        """
        Main async event loop coordinating all system tasks.
        
        Spawns and manages:
        - Market data stream (run_feed via stream_supervisor)
        - Signal update task (fire_signal_update every second)
        - Exit logic task (handle_exit_logic every second)
        - Shutdown monitor (shutdown_at_market_close)
        
        Handles graceful cleanup on exit or error.
        """
        stream_task = asyncio.create_task(self.stream_supervisor(), name="ws-stream")
        jobs = [
            asyncio.create_task(
                self.run_every_second('on-bar', self.fire_signal_update),
                name="fire-on-bar-1m"
            ),
            asyncio.create_task(
                self.run_every_second('handle_exit', self.handle_exit_logic), 
                name='handle_exit'
            ),
            asyncio.create_task(
                self.shutdown_at_market_close(),
                name='market_close_monitor'
            ),
        ]
        
        try:
            await asyncio.gather(stream_task, *jobs)
        except SystemExit:
            print("Clean shutdown initiated")
        except Exception as e:
            print(f"Fatal error: {e}")
        finally:
            # Cleanup all tasks
            stream_task.cancel()
            for job in jobs:
                job.cancel()
            with contextlib.suppress(asyncio.CancelledError):
                await asyncio.gather(stream_task, *jobs)
`},{label:"Web Socket Market Data Handler",description:"Real-time price stream processing",code:`        """
        Connect to Tastytrade dxFeed and stream 1-minute SPY candles.
        
        Protocol:
        1. SETUP - Initialize connection parameters
        2. AUTH - Authenticate with API token
        3. CHANNEL_REQUEST - Open feed channel
        4. FEED_SETUP - Configure data format and fields
        5. FEED_SUBSCRIPTION - Subscribe to SPY 1-minute candles
        6. Process incoming candle events
        
        Maintains keepalive heartbeat every 25 seconds.
        """
        DXFEED_URL = self.api_quote_token["data"]["dxlink-url"]
        API_TOKEN = self.api_quote_token["data"]["token"]

        CHANNEL_ID = 1
        KEEPALIVE_SEC = 25
        SYMBOL = "SPY{=m}"  # 1-minute candles
        LOOKBACK_MIN = 0

        url = self.normalize_ws_url(DXFEED_URL)

        async with websockets.connect(url) as ws:
            # 1) SETUP
            await ws.send(json.dumps({
                "type": "SETUP",
                "channel": 0,
                "keepaliveTimeout": 60,
                "acceptKeepaliveTimeout": 60,
                "version": "1.0.0",
            }))
            print(">> SETUP sent")

            for _ in range(3):
                try:
                    await asyncio.wait_for(ws.recv(), timeout=1.0)
                except asyncio.TimeoutError:
                    break

            # 2) AUTH
            await ws.send(json.dumps({
                "type": "AUTH",
                "channel": 0,
                "token": API_TOKEN
            }))
            print(">> AUTH sent")

            auth_state = await self.wait_for_auth_state(ws)
            if not auth_state or auth_state.get("state") != "AUTHORIZED":
                raise RuntimeError(f"Authorization failed: {auth_state}")

            print("<< AUTH_STATE AUTHORIZED")

            # 3) Keepalive
            ka = asyncio.create_task(self.keepalive_task(ws, KEEPALIVE_SEC))

            # 4) Open FEED channel
            await ws.send(json.dumps({
                "type": "CHANNEL_REQUEST",
                "channel": CHANNEL_ID,
                "service": "FEED",
                "parameters": {"contract": "AUTO"},
            }))

            while True:
                msg = json.loads(await ws.recv())
                if msg.get("type") == "CHANNEL_OPENED":
                    break

            # 5) FEED_SETUP
            await ws.send(json.dumps({
                "type": "FEED_SETUP",
                "channel": CHANNEL_ID,
                "acceptDataFormat": "FULL",
                "acceptEventFields": {
                    "Candle": [
                        "eventSymbol", "eventType", "time", "sequence",
                        "open", "high", "low", "close", "volume", "vwap"
                    ]
                },
            }))

            # 6) Subscribe
            from_time_ms = self.now_ms() - LOOKBACK_MIN * 60_000
            await ws.send(json.dumps({
                "type": "FEED_SUBSCRIPTION",
                "channel": CHANNEL_ID,
                "add": [{
                    "symbol": SYMBOL,
                    "type": "Candle",
                    "fromTime": from_time_ms
                }],
            }))

            print(f">> Subscribed to {SYMBOL}")

            try:
                # Process incoming candle events
                while True:
                    msg = json.loads(await ws.recv())

                    if msg.get("type") != "FEED_DATA":
                        continue

                    for ev in msg.get("data", []):
                        if ev.get("eventType") != "Candle":
                            continue

                        self._handle_candle(ev)

            finally:
                ka.cancel()
                with contextlib.suppress(asyncio.CancelledError):
                    await ka
        async def keepalive_task(self, ws, period: int) -> None:
        """
        Send periodic keepalive messages to WebSocket.
        
        Args:
            ws: WebSocket connection
            period: Seconds between keepalive messages
        """
        try:
            while True:
                await asyncio.sleep(period)
                await ws.send(json.dumps({"type": "KEEPALIVE", "channel": 0}))
        except asyncio.CancelledError:
            pass
    
    async def wait_for_auth_state(self, ws, timeout: float = 10.0) -> dict | None:
        """
        Wait for AUTH_STATE message from WebSocket.
        
        Args:
            ws: WebSocket connection
            timeout: Maximum seconds to wait
        
        Returns:
            AUTH_STATE message dict or None if timeout
        """
        deadline = t.time() + timeout
        while t.time() < deadline:
            try:
                msg = json.loads(await asyncio.wait_for(ws.recv(), timeout=1.0))
                if msg.get("type") == "AUTH_STATE":
                    return msg
            except asyncio.TimeoutError:
                continue
        return None
    
    def _handle_candle(self, ev: dict) -> None:
        """
        Process incoming candle event and update bars_df.
        
        Args:
            ev: Candle event dict from dxFeed
        
        Logic:
        - Tracks current minute key
        - Updates _latest_ev with highest sequence number
        - Appends to bars_df when minute closes
        - Trims bars_df if exceeds 500 rows (safety)
        """
        t_ms = float(ev["time"])
        key = self.minute_start(t_ms)

        # Safety: prevent runaway memory growth
        if len(self.bars_df) > 500:
            print(f"bars_df unexpectedly large ({len(self.bars_df)} rows), trimming oldest data")
            self.bars_df = self.bars_df.tail(390).reset_index(drop=True)

        if self._current_minute_key is None:
            self._current_minute_key = key
            self._latest_ev = ev
            return

        if key == self._current_minute_key:
            # Update if higher sequence number
            if float(ev.get("sequence", 0)) >= float(self._latest_ev.get("sequence", 0)):
                self._latest_ev = ev
        else:
            # Minute closed, save bar
            closed = self._to_row(self._latest_ev) #        Convert dxFeed candle event to DataFrame row.
            self.bars_df.loc[len(self.bars_df)] = closed

            self._current_minute_key = key
            self._latest_ev = ev

`},{label:"Order Execution Engine",description:"Automated order placement based on callback functions",code:`    # ========================================================================
    # SIGNAL GENERATION
    # ========================================================================
    
    async def fire_signal_update(self) -> None:
        """
        Check for entry signals on configured timeframe boundaries.
        
        Process:
        1. Check if current time aligns with signal update interval
        2. Prevent duplicate signals within same interval
        3. Convert latest candle event to row format
        4. Call on_bar() to trigger strategy evaluation
        
        Called every second by run_every_second task.
        """
        now = datetime.datetime.now(datetime.timezone.utc)
        
        TIMEFRAME_TO_SECONDS = {
            "1s": 1,
            "5s": 5,
            "10s": 10,
            "30s": 30,
            "1m": 60,
        }

        interval = TIMEFRAME_TO_SECONDS[self.config.signalUpdate]

        # Align to timeframe boundary
        if now.second % interval != 0:
            return

        # Prevent duplicate signals
        if self._last_signal_fire_utc is not None:
            if (now - self._last_signal_fire_utc).total_seconds() < interval:
                return

        if self._latest_ev is None:
            self._last_signal_fire_utc = now
            return

        current_row = self._to_row(self._latest_ev)
        await self.on_bar(current_row)

        self._last_signal_fire_utc = now
    
    async def on_bar(self, current_row: dict | pd.Series) -> None:
        """
        Process new bar and check for entry signals.
        
        Args:
            current_row: Dict or Series with OHLCV data
        
        Process:
        1. Append bar to bars_df
        2. Generate features via strategy.set_signal_df()
        3. Check entry signal via strategy.enter_func()
        4. Execute entry orders if signal fires
        """
        # Normalize to Series
        if isinstance(current_row, dict):
            row = pd.Series(current_row)
        else:
            row = current_row
        
        # Append to bars
        self.bars_df = pd.concat(
            [self.bars_df, row.to_frame().T],
            ignore_index=True
        )
        
        print('we are on bar now')
        
        # Generate features and check entry
        self.strategy.set_signal_df(self.bars_df)
        enter_trade, side = self.strategy.enter_func(
            self.strategy.signal_df, 
            self.strategy.model, 
            self.strategy.feature_cols
        )
        
        if enter_trade:
            OTM = self.strategy.get_OTM_logic()
            curr_price = self.bars_df['close'].iloc[-1]
            
            if side == 0:  # Straddle
                self.buy_both_sides(curr_price, OTM)
            elif side == 1:  # Call only
                self.buy_call_side(curr_price, OTM)
            elif side == -1:  # Put only
                self.buy_put_side(curr_price, OTM)

    # ========================================================================
    # EXIT LOGIC
    # ========================================================================
    
    async def handle_exit_logic(self) -> None:
        """
        Check all open positions for exit signals and close if needed.
        
        Process:
        1. Iterate through all open positions
        2. Call strategy.exit_func() for each position
        3. Execute sell orders based on exit signal
        4. Update position exit times and prices
        5. Move completed positions to trades_today
        
        Exit Signals:
        - 0: Exit both call and put
        - 1: Exit call only
        - -1: Exit put only
        - None: Hold position
        
        Called every second by run_every_second task.
        """
        pos_to_delete = {}
        
        for k, position in self.positions.items():
            exit = self.strategy.exit_func(position)
            
            if exit == 1:  # Exit call
                try:
                    self.sell_call_side(position)
                    position.call_time_exited = datetime.datetime.now()
                    position.call_exit_price = position.call_current_price(position.call_symbol)

                    if position.put_time_entered is None or position.put_time_exited is not None:
                        pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling call side during exit logic:", e)
                    
            elif exit == 0:  # Exit both
                try:
                    self.sell_call_side(position)
                    self.sell_put_side(position)
                    position.call_time_exited = datetime.datetime.now()
                    position.put_time_exited = datetime.datetime.now()
                    position.call_exit_price = position.call_current_price(position.call_symbol)
                    position.put_exit_price = position.put_current_price(position.put_symbol)
                    pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling both sides during exit logic:", e)
                    
            elif exit == -1:  # Exit put
                try:
                    self.sell_put_side(position)
                    position.put_exit_price = position.put_current_price(position.put_symbol)
                    position.put_time_exited = datetime.datetime.now()
                    
                    if position.call_time_entered is None or position.call_time_exited is not None:
                        pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling put side during exit logic:", e)

        # Archive completed trades
        new_rows = []
        for k, v in pos_to_delete.items():
            del self.positions[k]
            row = {
                'call_time_entered': v.call_time_entered,
                'call_time_exited': v.call_time_exited,
                'call_strike': v.call_strike,
                'call_entry_price': v.call_entry_price,
                'call_contract_qty': v.call_contract_qty,
                'call_exit_price': v.call_exit_price,
                'put_time_entered': v.put_time_entered,
                'put_time_exited': v.put_time_exited,
                'put_strike': v.put_strike,
                'put_contract_qty': v.put_contract_qty,
                'put_entry_price': v.put_entry_price,
                'put_exit_price': v.put_exit_price,
            }
            new_rows.append(row)
        self.trades_today.extend(new_rows)

    # ========================================================================
    # ORDER EXECUTION - ENTRY
    # ========================================================================
    
    def buy_both_sides(self, curr_price: float, OTM: int) -> None:
        """
        Enter straddle position (buy call and put at same strike).
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch option data for call and put
        2. Calculate contract quantities (2% of buying power per side)
        3. Submit market orders via Alpaca
        4. Create Position object and add to self.positions
        
        Risk: Uses 4% total buying power per straddle
        """
        try:
            call_option_data = self.get_option_data('call', round(curr_price), OTM)
            put_option_data = self.get_option_data('put', round(curr_price), OTM)
            
            if call_option_data is None or put_option_data is None:
                print("Could not retrieve option data for both sides.")
                return
            
            call_contract_count = self.amt_trading_today * .02 // (float(call_option_data['last-mkt']) * 100)
            put_contract_count = self.amt_trading_today * .02 // (float(put_option_data['last-mkt']) * 100)

            if call_contract_count < 1 or put_contract_count < 1:
                print("Not enough funds to buy contracts.")
                return

            # Submit orders
            call_market_order_data = MarketOrderRequest(
                symbol=call_option_data['symbol'].replace(' ', ""),
                qty=call_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=call_market_order_data)
            
            put_market_order_data = MarketOrderRequest(
                symbol=put_option_data['symbol'].replace(' ', ""),
                qty=put_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=put_market_order_data)
            
            # Create position
            pos = Position(
                call_time_entered=datetime.datetime.now(), 
                call_time_exited=None,
                call_symbol=call_option_data['symbol'], 
                call_strike=call_option_data['strike-price'], 
                call_entry_price=float(call_option_data['last-mkt']),
                call_contract_qty=call_contract_count, 
                call_current_price=self.get_last_option_price, 
                call_exit_price=None,
                put_time_entered=datetime.datetime.now(), 
                put_time_exited=None,
                put_symbol=put_option_data['symbol'], 
                put_strike=put_option_data['strike-price'], 
                put_entry_price=float(put_option_data['last-mkt']),
                put_contract_qty=put_contract_count, 
                put_current_price=self.get_last_option_price, 
                put_exit_price=None,
                extraInfo={}
            )
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying both sides:", e)
    
    def buy_call_side(self, curr_price: float, OTM: int) -> None:
        """
        Enter call-only position.
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch call option data
        2. Calculate contract quantity (2% of buying power)
        3. Submit market order via Alpaca
        4. Create Position with put fields set to None
        """
        try:
            call_option_data = self.get_option_data('call', round(curr_price), OTM)
            if call_option_data is None:
                print("Could not retrieve option data for call side.")
                return
            
            call_contract_count = self.amt_trading_today * .02 // (float(call_option_data['last-mkt']) * 100)
            if call_contract_count < 1:
                print("Not enough funds to buy call contracts.")
                return
            
            call_market_order_data = MarketOrderRequest(
                symbol=call_option_data['symbol'].replace(' ', ""),
                qty=call_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=call_market_order_data)

            pos = Position(
                call_time_entered=datetime.datetime.now(), 
                call_time_exited=None,
                call_symbol=call_option_data['symbol'], 
                call_strike=call_option_data['strike-price'], 
                call_entry_price=float(call_option_data['last-mkt']),
                call_contract_qty=call_contract_count, 
                call_current_price=self.get_last_option_price, 
                call_exit_price=None,
                put_time_entered=None, 
                put_time_exited=None,
                put_symbol=None, 
                put_strike=None, 
                put_entry_price=None,
                put_contract_qty=None, 
                put_current_price=None, 
                put_exit_price=None,
                extraInfo={}
            )
            
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying call side:", e)
        
    def buy_put_side(self, curr_price: float, OTM: int) -> None:
        """
        Enter put-only position.
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch put option data
        2. Calculate contract quantity (2% of buying power)
        3. Submit market order via Alpaca
        4. Create Position with call fields set to None
        """
        try:
            put_option_data = self.get_option_data('put', round(curr_price), OTM)
            if put_option_data is None:
                print("Could not retrieve option data for put side.")
                return
            
            put_contract_count = self.amt_trading_today * .02 // (float(put_option_data['last-mkt']) * 100)
            if put_contract_count < 1:
                print("Not enough funds to buy put contracts.")
                return

            put_market_order_data = MarketOrderRequest(
                symbol=put_option_data['symbol'].replace(' ', ""),
                qty=put_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=put_market_order_data)
            
            pos = Position(
                call_time_entered=None, 
                call_time_exited=None,
                call_symbol=None, 
                call_strike=None, 
                call_entry_price=None,
                call_contract_qty=None, 
                call_current_price=None, 
                call_exit_price=None,
                put_time_entered=datetime.datetime.now(), 
                put_time_exited=None,
                put_symbol=put_option_data['symbol'], 
                put_strike=put_option_data['strike-price'], 
                put_entry_price=float(put_option_data['last-mkt']),
                put_contract_qty=put_contract_count, 
                put_current_price=self.get_last_option_price, 
                put_exit_price=None,
                extraInfo={}
            )
            self.positions[self.id_count] = pos
            self.id_count += 1
        except Exception as e:
            print("Error buying put side:", e)

    # ========================================================================
    # ORDER EXECUTION - EXIT
    # ========================================================================
    
    def sell_call_side(self, position: Position) -> None:
        """
        Close call side of position.
        
        Args:
            position: Position object with call details
        
        Submits market sell order via Alpaca.
        """
        call_market_order_data = MarketOrderRequest(
            symbol=position.call_symbol.replace(' ', ''),
            qty=position.call_contract_qty,
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY
        )
        self.trading_client.submit_order(order_data=call_market_order_data)
    
    def sell_put_side(self, position: Position) -> None:
        """
        Close put side of position.
        
        Args:
            position: Position object with put details
        
        Submits market sell order via Alpaca.
        """
        put_market_order_data = MarketOrderRequest(
            symbol=position.put_symbol.replace(' ', ''),
            qty=position.put_contract_qty,
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY
        )
        self.trading_client.submit_order(order_data=put_market_order_data)
`},{label:"Option Data Retrieval",description:"Fetch option contract details from Tastytrade",code:`    # ========================================================================
    # HELPER FUNCTIONS
    # ========================================================================
    

    # ========================================================================
    # OPTIONS DATA & PRICING
    # ========================================================================
    
    def get_option_data(self, put_call: str, curr_price: float, OTM: int) -> dict | None:
        """
        Fetch option data for specified strike.
        
        Args:
            put_call: 'call' or 'put'
            curr_price: Current underlying price
            OTM: Dollars out-of-the-money
        
        Returns:
            Dict with option data including symbol, last price, strike
            None if option not found or error occurs
        
        Process:
        1. Calculate target strike (curr_price ± OTM)
        2. Search options_chain DataFrame for matching strike
        3. Fetch live option data from Tastytrade API
        """
        try:
            OTM_adder = OTM if put_call == 'call' else -OTM
            target_strike = float(curr_price) + OTM_adder
            
            matches = self.options_chain[
                self.options_chain['strike-price'].astype(float) == target_strike
            ]
            
            if len(matches) == 0:
                print(f"No {put_call} option found at strike {target_strike}")
                return None
            
            option_ticker = matches[put_call].values[0]
            print(f"Option ticker: {option_ticker}, Strike price: {target_strike}")
            
            option_data = self.tasty.api.get(
                '/market-data/by-type',
                params=[('equity-option', option_ticker)]
            )['data']['items'][0]
            option_data['strike-price'] = target_strike
            return option_data
            
        except Exception as e:
            print(f"Error getting option data: {e}")
            return None
    
    def get_last_option_price(self, option_ticker: str) -> float:
        """
        Fetch current market price for option.
        
        Args:
            option_ticker: Option symbol (e.g., 'SPY  240531C00520000')
        
        Returns:
            Float of last market price
            0.0 if error occurs
        """
        try:
            option_data = self.tasty.api.get(
                '/market-data/by-type',
                params=[('equity-option', option_ticker)]
            )['data']['items'][0]
            return float(option_data['last-mkt'])
        except Exception as e:
            print(f"Error fetching price for {option_ticker}: {e}")
            return 0.0`}],plots:[{title:"Trading Performance",description:"Cumulative returns and drawdown analysis",imageUrl:"https://via.placeholder.com/600x400?text=Trading+Performance"},{title:"Signal Accuracy",description:"Win rate and profit factor by signal type",imageUrl:"https://via.placeholder.com/600x400?text=Signal+Accuracy"},{title:"Risk Metrics",description:"Sharpe ratio and maximum drawdown over time",imageUrl:"https://via.placeholder.com/600x400?text=Risk+Metrics"}]},F0={id:"3",title:"Volatility Breakout Prediction – Code Demo",description:"XGBoost model predicting when SPY will move 5x the expanding average true range (measured from market open) within 30 minutes. Achieved 0.686 ROC-AUC on one year of minute-level data.",codeSamples:[{label:"Helper Functions & ATR Calculation",description:"RSI, ATR, and True Range calculations for volatility measurement",code:`import numpy as np
import pandas as pd

def calculate_rsi(series: pd.Series, period: int = 14) -> pd.Series:
    """
    Calculate the Relative Strength Index (RSI).
    
    RSI = 100 - (100 / (1 + RS))
    where RS = Average Gain / Average Loss
    
    Args:
        series: Price series (typically close prices)
        period: Lookback period (default: 14)
    
    Returns:
        Series with RSI values (0-100)
    """
    # Calculate price changes
    delta = series.diff()
    
    # Separate gains and losses
    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)
    
    # Calculate exponential moving average of gains and losses
    avg_gain = gain.ewm(span=period, adjust=False).mean()
    avg_loss = loss.ewm(span=period, adjust=False).mean()
    
    # Calculate RS and RSI
    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))
    
    return rsi


def compute_atr(df: pd.DataFrame, n: int = 30) -> pd.Series:
    """
    Calculate Average True Range (ATR) normalized by VWAP - measures 
    market volatility.
    Higher ATR indicates higher volatility; normalization allows comparison 
    across price levels.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close), 'vwap'
        n: Rolling window size for averaging true range
    
    Returns:
        Series of normalized ATR values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(
        df['h'] - df['l'], 
        np.maximum(
            (df['h'] - prev_c).abs(), 
            (df['l'] - prev_c).abs()
        )
    ) / df['vwap']
    return tr.rolling(n, min_periods=5).mean()


def true_range(df: pd.DataFrame) -> pd.Series:
    """
    Calculate True Range - the greatest of: (high-low), |high-prev_close|, 
    or |low-prev_close|.
    Captures volatility including gaps between trading periods.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close)
    
    Returns:
        Series of true range values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(
        df['h'] - df['l'], 
        np.maximum(
            (df['h'] - prev_c).abs(), 
            (df['l'] - prev_c).abs()
        )
    )
    return tr`},{label:"Data Preprocessing & VWAP",description:"Filter market hours, calculate VWAP, and prepare time features",code:`import datetime
import pandas as pd

def preprocess_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Prepare raw OHLCV data: filter to market hours, sort by date/time, 
    and calculate VWAP.
    
    Args:
        df: Raw DataFrame with OHLCV data
    
    Returns:
        Preprocessed DataFrame with VWAP and time features
    """
    # Standardize date column and sort
    df['date'] = pd.to_datetime(df['date']).dt.date
    df = df.sort_values(['date', 'datetime']).reset_index(drop=True)
    
    # Filter to regular market hours (9:30 AM - 4:00 PM ET)
    df = df[
        (df['datetime'].dt.time >= datetime.time(9, 30)) & 
        (df['datetime'].dt.time <= datetime.time(16, 0))
    ]
    
    # Calculate VWAP (Volume Weighted Average Price)
    pv = (df['c'] * df['v']).groupby(df['date']).cumsum()
    vv = df['v'].groupby(df['date']).cumsum()
    df['vwap'] = pv / vv
    
    # Calculate seconds since market open for intraday timing features
    for k, v in df.groupby('date'):
        v = v.sort_values('ts_epoch')
        df.loc[v.index, 'open_ts_epoch'] = v['ts_epoch'].iloc[0]
    df['seconds_since_open'] = df['ts_epoch'] - df['open_ts_epoch']
    
    return df


# Apply preprocessing
spy_df = preprocess_dataframe(spy_df)`},{label:"Multi-Timeframe Volatility Features",description:"ATR across multiple windows (5, 30, 60, 120 min) and volatility ratios",code:`def create_volatility_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create volatility features using ATR across multiple timeframes.
    Multi-timeframe ATR captures both short-term noise and longer-term 
    regime changes.
    
    Args:
        df: DataFrame with OHLCV data grouped by date
    
    Returns:
        DataFrame with ATR features (5, 30, 60, 120 minute windows)
    """
    # ATR across different time windows to capture multi-scale volatility
    for period in [5, 30, 60, 120]:
        df[f'atr{period}'] = (
            df.groupby('date', group_keys=False)
            .apply(lambda x: compute_atr(x, period))
        )
    
    # Intraday true range normalized by current price
    df['tr'] = true_range(df) / df['c']
    
    # Expanding average of true range from market open (realized volatility)
    df['atr_from_open'] = (
        df.groupby('date')['tr']
        .expanding()
        .mean()
        .reset_index(level=0, drop=True)
    )
    
    # Track maximum ATR5 seen so far today (for relative volatility)
    df['atr5_max_today'] = df.groupby('date')['atr5'].cummax()
    
    return df


def create_volatility_ratio_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create ratio features comparing volatility across timeframes.
    Ratios help identify volatility expansion/contraction and regime changes.
    
    Features:
    - atr5_over_max: Current vol vs today's max (mean reversion signal)
    - atr5_over_atrOpen: Short-term vs realized vol (acceleration detector)
    - atr_30_minus_120: Medium vs long-term vol difference (trend strength)
    - atr60_over_atr120: Hour-scale vs 2-hour scale volatility ratio
    - atr5_over_atr30: Very short vs short-term volatility ratio
    
    Args:
        df: DataFrame with ATR features already calculated
    
    Returns:
        DataFrame with volatility ratio features
    """
    df['atr5_over_max'] = df['atr5'] / df['atr5_max_today']
    df['atr5_over_atrOpen'] = df['atr5'] / df['atr_from_open']
    df['atr_30_minus_120'] = df['atr30'] - df['atr120']
    df['atr60_over_atr120'] = df['atr60'] / df['atr120']
    df['atr5_over_atr30'] = df['atr5'] / df['atr30']
    
    return df


# Apply volatility features
spy_df = create_volatility_features(spy_df)
spy_df = create_volatility_ratio_features(spy_df)`},{label:"VWAP Distance & Statistical Features",description:"Price distance from VWAP with rolling statistics for mean reversion signals",code:`def create_vwap_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create VWAP distance and statistical features.
    VWAP distance helps identify price extremes and potential mean 
    reversion opportunities.
    
    Features:
    - vwap_dist: Normalized distance from VWAP
    - Rolling statistics (std, max, min) over multiple windows
    - vwap_range: Intraday range of VWAP distance (volatility proxy)
    
    Args:
        df: DataFrame with VWAP already calculated
    
    Returns:
        DataFrame with VWAP distance features
    """
    # Normalized distance from VWAP (positive = above, negative = below)
    df['vwap_dist'] = (df['c'] - df['vwap']) / df['c']
    
    # Rolling statistics of VWAP distance across multiple windows
    for window in [5, 20, 30]:    
        df[f'vwap_dist_rolling_std_{window}'] = df.groupby('date')[
            'vwap_dist'
        ].transform(lambda x: x.rolling(window).std())
        
        df[f'vwap_dist_rolling_max_{window}'] = df.groupby('date')[
            'vwap_dist'
        ].transform(lambda x: x.rolling(window).max())
        
        df[f'vwap_dist_rolling_min_{window}'] = df.groupby('date')[
            'vwap_dist'
        ].transform(lambda x: x.rolling(window).min())
    
    # Range of VWAP distance over 30-minute window (daily excursion)
    df['vwap_range'] = (
        df['vwap_dist_rolling_max_30'] - df['vwap_dist_rolling_min_30']
    )
    
    return df


def create_interaction_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create interaction features combining multiple dimensions.
    Interactions can capture non-linear relationships and regime-dependent 
    behavior.
    
    Features:
    - time_x_vol_frac: Time of day weighted by volume activity
    - vwap_range_x_std: VWAP range amplified by short-term volatility
    - vwap_std_x_atr: VWAP volatility combined with relative ATR
    
    Args:
        df: DataFrame with base features already created
    
    Returns:
        DataFrame with interaction features
    """
    # Time of day weighted by volume pattern
    df['time_x_vol_frac'] = df['seconds_since_open'] * df['cum_vol_frac']
    
    # VWAP range amplified by short-term standard deviation
    df['vwap_range_x_std'] = (
        df['vwap_range'] * df['vwap_dist_rolling_std_5']
    )
    
    # VWAP volatility scaled by relative ATR
    df['vwap_std_x_atr'] = (
        df['vwap_dist_rolling_std_20'] * df['atr5_over_atrOpen']
    )
    
    return df


# Apply VWAP features
spy_df = create_vwap_features(spy_df)
spy_df = create_interaction_features(spy_df)`},{label:"Label Generation - Volatility Breakouts",description:"Parallel processing to label significant price movements beyond volatility bands",code:`from concurrent.futures import ThreadPoolExecutor, as_completed

def _check_volatility_breakout(
    row: pd.Series, 
    df: pd.DataFrame, 
    volatility_threshold: float, 
    horizon_minutes: int
) -> tuple[int, int]:
    """
    Check if price breaks out beyond volatility bands within time horizon.
    
    Args:
        row: Current observation with price and volatility data
        df: Full DataFrame to search for future price action
        volatility_threshold: Number of ATR standard deviations for breakout
        horizon_minutes: Maximum time window to check for breakout
    
    Returns:
        Tuple of (timestamp, label) where label=1 if breakout occurred
    """
    # Calculate breakout thresholds based on realized volatility
    current_price = row['c']
    atr_move = current_price * row['atr_from_open'] * volatility_threshold
    
    target_up = current_price + atr_move
    target_down = current_price - atr_move
    
    # Define time window: start 1 minute after current observation
    start_time = row['datetime'] + pd.Timedelta(seconds=60)
    end_time = row['datetime'] + pd.Timedelta(minutes=horizon_minutes)
    
    # Filter to future observations within time horizon
    future_df = df[
        (df['datetime'] >= start_time) & (df['datetime'] <= end_time)
    ]
    
    # Check if price breaches either threshold (volatility expansion event)
    for _, future_row in future_df.iterrows():
        if future_row['h'] >= target_up:
            return row['ts_epoch'], 1  # Upward breakout
        if future_row['l'] <= target_down:
            return row['ts_epoch'], 1  # Downward breakout
    
    return row['ts_epoch'], 0  # No breakout


def label_volatility_breakout_events(
    df: pd.DataFrame,
    volatility_threshold: float = 1.0,
    horizon_minutes: int = 60,
    max_workers: int = 8,
) -> pd.DataFrame:
    """
    Label observations where price exhibits significant volatility expansion.
    
    This identifies potential trading opportunities by detecting when price 
    moves beyond a specified number of ATR standard deviations in EITHER 
    direction.
    
    Trading Logic:
    - Label = 1: Price moved ±k std devs within horizon
    - Label = 0: Price stayed within bands
    
    Args:
        df: DataFrame with OHLCV and volatility features
        volatility_threshold: Number of ATR std devs for breakout
        horizon_minutes: Time window to check for breakout
        max_workers: Number of parallel threads
    
    Returns:
        DataFrame with added 'labelk1' column
    """
    label_map = {}
    
    # Process all observations in parallel
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [
            executor.submit(
                _check_volatility_breakout, 
                row, 
                df, 
                volatility_threshold, 
                horizon_minutes
            )
            for _, row in df.iterrows()
        ]
        
        # Collect results
        for f in as_completed(futures):
            ts_epoch, label = f.result()
            label_map[ts_epoch] = label
    
    # Map labels back to DataFrame
    df['labelk1'] = df['ts_epoch'].map(label_map)
    
    return df


# Apply labeling (5x ATR move within 30 minutes)
spy_df = label_volatility_breakout_events(
    spy_df,
    volatility_threshold=5.0,
    horizon_minutes=30,
    max_workers=8
)`},{label:"XGBoost Model Training",description:"Train binary classification model with temporal train/test split",code:`import xgboost as xgb

# Feature list
feats = [
    'RSI', 'seconds_since_open', 
    'atr5_over_atrOpen', 'atr_30_minus_120',
    'vwap_std_x_atr', 'time_x_vol_frac', 'atr5_over_atr30',
    'atr60_over_atr120', 'atr5_over_max', 'vwap_range_x_std'
]

# Temporal split: 80% train, 20% test
split_idx = int(len(spy_df['date'].unique()) * 0.8)
sorted_dates = sorted(spy_df['date'].unique())
train_df = spy_df[spy_df['date'].isin(sorted_dates[:split_idx])]
test_df = spy_df[spy_df['date'].isin(sorted_dates[split_idx:])]

# Initialize XGBoost classifier
model = xgb.XGBClassifier(
    n_estimators=500,
    max_depth=5,
    learning_rate=0.01,
    objective='binary:logistic',
    eval_metric='logloss',
    subsample=0.8,
    colsample_bytree=0.8,
    gamma=0,
    reg_alpha=0,
    reg_lambda=1,
    random_state=42
)

# Train model
model.fit(train_df[feats], train_df['labelk1'])

# Generate predictions
probs = model.predict_proba(test_df[feats])
test_df['score'] = probs[:, 1]

# Evaluate
from sklearn.metrics import roc_auc_score
auc = roc_auc_score(test_df['labelk1'], test_df['score'])
print(f"Test AUC: {auc:.4f}")`},{label:"Model Calibration Analysis",description:"Visualize prediction calibration and analyze performance by confidence level",code:`from sklearn.calibration import calibration_curve
from sklearn.metrics import brier_score_loss, log_loss
import matplotlib.pyplot as plt
import numpy as np

# Calculate calibration curve
prob_true, prob_pred = calibration_curve(
    test_df['labelk1'], 
    test_df['score'], 
    n_bins=15, 
    strategy='quantile'
)

# Calculate calibration metrics
brier = brier_score_loss(test_df['labelk1'], test_df['score'])
logloss = log_loss(test_df['labelk1'], test_df['score'])

# Create calibration plot
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 6))

# Left panel: Calibration curve
scatter = ax1.scatter(
    prob_pred, 
    prob_true, 
    s=100,
    c=prob_pred,
    cmap='RdYlGn_r',
    alpha=0.7,
    edgecolors='black',
    linewidth=1.5
)
ax1.plot([0, 1], [0, 1], 'k--', linewidth=2, label='Perfect Calibration')
ax1.plot(prob_pred, prob_true, 'b-', linewidth=2, alpha=0.3)

ax1.set_xlabel('Predicted Probability', fontsize=13, fontweight='bold')
ax1.set_ylabel('Observed Frequency', fontsize=13, fontweight='bold')
ax1.set_title('Model Calibration Curve', fontsize=14, fontweight='bold')
ax1.grid(True, alpha=0.3)
ax1.legend()

# Add metrics
metrics_text = f"""Brier Score: {brier:.4f}
Log Loss: {logloss:.4f}
Mean Pred: {test_df['score'].mean():.4f}
Base Rate: {test_df['labelk1'].mean():.4f}"""

ax1.text(0.05, 0.95, metrics_text, transform=ax1.transAxes,
         fontsize=11, verticalalignment='top',
         bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))

# Right panel: Distribution analysis
bins = np.linspace(0, 1, 21)
ax2_twin = ax2.twinx()

counts, _, patches = ax2.hist(
    test_df['score'], bins=bins, alpha=0.6, 
    color='steelblue', edgecolor='black'
)

# Actual positive rate per bin
bin_centers = (bins[:-1] + bins[1:]) / 2
actual_rates = []
for i in range(len(bins) - 1):
    mask = (test_df['score'] >= bins[i]) & (test_df['score'] < bins[i+1])
    if mask.sum() > 0:
        actual_rates.append(test_df.loc[mask, 'labelk1'].mean())
    else:
        actual_rates.append(np.nan)

ax2_twin.plot(bin_centers, actual_rates, 'ro-', linewidth=3, 
              markersize=8, label='Actual Breakout Rate')

ax2.set_xlabel('Predicted Probability', fontsize=13, fontweight='bold')
ax2.set_ylabel('Sample Count', fontsize=13, color='steelblue')
ax2_twin.set_ylabel('Actual Breakout Rate', fontsize=13, color='darkred')
ax2.set_title('Prediction Distribution', fontsize=14, fontweight='bold')

plt.tight_layout()
plt.show()`},{label:"Live Implementation Into Trading Framework",description:"Integrate trained model for real-time volatility breakout predictions",code:`"""
Volatility Trading Strategy
============================
ML-based options trading strategy targeting high-volatility periods in SPY.

Strategy Logic:
- Uses XGBoost model trained on volatility features
- Enters straddles when model predicts high volatility (score > 0.5)
- Time-based exit after 30 minutes
- OTM strike selection varies by time of day

Features:
- RSI momentum indicator
- Multiple ATR timeframes (5, 30, 60, 120 periods)
- VWAP distance metrics
- Volume-weighted features
- Feature interactions

Author: ejaxDev
"""

from dataclasses import dataclass
from typing import Literal, Optional, Callable
import time as t
import datetime
import json
import pandas as pd
import numpy as np
import xgboost as xgb

from live.live_framework import OTM_Logic, Strategy, Helper_Funcs


# ============================================================================
# TYPE DEFINITIONS
# ============================================================================

Timeframe = Literal["1s", "5s", "10s", "30s", "1m"]


# ============================================================================
# OTM STRIKE LOGIC CONFIGURATION
# ============================================================================

# OTM logic: Strike selection based on time of day
# 9:30-15:00: $2 OTM (regular hours, standard liquidity)
# 15:00-16:00: $0 OTM / ATM (last hour, tighter spreads for quick exit)
otm_logic_instance = OTM_Logic(
    otm_logic={
        (datetime.time(9, 30), datetime.time(15, 0)): 2,
        (datetime.time(15, 0), datetime.time(16, 0)): 0
    }
)


# ============================================================================
# FEATURE ENGINEERING HELPER FUNCTIONS
# ============================================================================

def calculate_rsi(prices: pd.Series, period: int = 14) -> pd.Series:
    """
    Calculate Relative Strength Index (RSI).
    
    RSI measures momentum by comparing magnitude of recent gains to losses.
    
    Args:
        prices: Series of close prices
        period: Lookback period for calculation (default 14)
    
    Returns:
        Series of RSI values (0-100 scale)
        - Above 70: Potentially overbought
        - Below 30: Potentially oversold
    
    Formula:
        RSI = 100 - (100 / (1 + RS))
        where RS = Average Gain / Average Loss
    """
    delta = prices.diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=period, min_periods=period).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=period, min_periods=period).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi


def compute_atr(df: pd.DataFrame, n: int = 30) -> pd.Series:
    """
    Calculate Average True Range (ATR) normalized by VWAP.
    
    ATR measures volatility by averaging true range over n periods.
    Normalization by VWAP makes it comparable across different price levels.
    
    Args:
        df: DataFrame with columns [high, low, close, vwap]
        n: Number of periods for rolling average
    
    Returns:
        Series of normalized ATR values
    
    Notes:
        - Minimum 5 periods required before calculation begins
        - Higher values indicate higher volatility
    """
    prev_c = df['close'].shift(1)
    tr = np.maximum(
        df['high'] - df['low'], 
        np.maximum(
            (df['high'] - prev_c).abs(), 
            (df['low'] - prev_c).abs()
        )
    ) / df['vwap']
    return tr.rolling(n, min_periods=5).mean()


def true_range(df: pd.DataFrame) -> pd.Series:
    """
    Calculate True Range (TR).
    
    TR is the greatest of:
    - Current High - Current Low
    - |Current High - Previous Close|
    - |Current Low - Previous Close|
    
    Args:
        df: DataFrame with columns [high, low, close]
    
    Returns:
        Series of true range values
    """
    prev_c = df['close'].shift(1)
    tr = np.maximum(
        df['high'] - df['low'], 
        np.maximum(
            (df['high'] - prev_c).abs(), 
            (df['low'] - prev_c).abs()
        )
    )
    return tr


def preprocess_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Prepare raw OHLCV data for feature engineering.
    
    Transformations:
    1. Calculate VWAP (Volume Weighted Average Price)
    2. Calculate seconds since market open (9:30 AM ET)
    
    Args:
        df: DataFrame with columns [t_ms, close, volume]
    
    Returns:
        DataFrame with added columns [vwap, seconds_since_open]
    
    Notes:
        - VWAP calculated as cumulative (price * volume) / cumulative volume
        - seconds_since_open is time-of-day feature for model
    """
    # Calculate VWAP (Volume Weighted Average Price)
    pv = (df['close'] * df['volume']).cumsum()
    vv = df['volume'].cumsum()
    df['vwap'] = pv / vv
    
    # Calculate seconds since market open
    import pytz
    date = datetime.datetime.now().date()
    eastern = pytz.timezone('US/Eastern')
    market_open_et = eastern.localize(pd.Timestamp.combine(date, pd.Timestamp('09:30').time()))
    market_open_utc = market_open_et.astimezone(pytz.UTC)
    open_ts_t_ms_epoch = float(market_open_utc.timestamp() * 1000)
    df['seconds_since_open'] = ((df['t_ms'].astype(float) - open_ts_t_ms_epoch) // 1000).astype(float)
    
    return df


def create_momentum_features(df: pd.DataFrame, helpers: Helper_Funcs) -> pd.DataFrame:
    """
    Create momentum-based features.
    
    Features:
    - RSI (14-period): Measures overbought/oversold conditions
    
    Args:
        df: DataFrame with close prices
        helpers: Helper_Funcs instance with utility functions
    
    Returns:
        DataFrame with added RSI column
    """
    df['RSI'] = helpers.funcs['calculate_rsi'](df['close'], period=14)
    return df


def create_volatility_features(df: pd.DataFrame, helpers: Helper_Funcs) -> pd.DataFrame:
    """
    Create volatility features using ATR across multiple timeframes.
    
    Features:
    - atr5: Short-term volatility (5 minutes)
    - atr30: Medium-term volatility (30 minutes)
    - atr60: Longer-term volatility (60 minutes)
    - atr120: Long-term volatility (120 minutes / 2 hours)
    - tr: True range normalized by close
    - atr_from_open: Expanding average of TR from market open
    - atr5_max_today: Highest atr5 seen today (tracks volatility spikes)
    
    Args:
        df: DataFrame with OHLCV data
        helpers: Helper_Funcs instance with utility functions
    
    Returns:
        DataFrame with added volatility columns
    
    Strategy Insight:
        Multiple ATR timeframes capture volatility at different scales.
        Comparing short-term vs long-term ATR helps identify volatility regimes.
    """
    for period in [5, 30, 60, 120]:
        df[f'atr{period}'] = helpers.funcs['compute_atr'](df, period)
    
    df['tr'] = helpers.funcs['true_range'](df) / df['close']
    df['atr_from_open'] = df['tr'].expanding().mean()
    df['atr5_max_today'] = df['atr5'].cummax()
    
    return df


def create_volatility_ratio_features(df: pd.DataFrame, helpers: Helper_Funcs = None) -> pd.DataFrame:
    """
    Create ratio features comparing different volatility measures.
    
    Features:
    - atr5_over_max: Current vs max volatility today (mean reversion signal)
    - atr5_over_atrOpen: Current vs average from open (trend signal)
    - atr_30_minus_120: Short-term vs long-term volatility difference
    - atr60_over_atr120: Medium vs long-term volatility ratio
    - atr5_over_atr30: Very short vs short-term volatility ratio
    
    Args:
        df: DataFrame with ATR columns from create_volatility_features()
        helpers: Unused (kept for consistent signature)
    
    Returns:
        DataFrame with added ratio columns
    
    Notes:
        Uses epsilon (1e-10) to prevent division by zero
    
    Strategy Insight:
        Ratios identify volatility regime changes:
        - High atr5_over_max: Currently at daily high volatility (entry signal)
        - atr_30_minus_120 > 0: Short-term vol exceeding long-term (trending)
    """
    epsilon = 1e-10
    df['atr5_over_max'] = df['atr5'] / (df['atr5_max_today'] + epsilon)
    df['atr5_over_atrOpen'] = df['atr5'] / (df['atr_from_open'] + epsilon)
    df['atr_30_minus_120'] = df['atr30'] - df['atr120']
    df['atr60_over_atr120'] = df['atr60'] / (df['atr120'] + epsilon)
    df['atr5_over_atr30'] = df['atr5'] / (df['atr30'] + epsilon)
    return df


def create_vwap_features(df: pd.DataFrame, helpers: Helper_Funcs = None) -> pd.DataFrame:
    """
    Create VWAP distance features.
    
    VWAP is a benchmark price used by institutions. Distance from VWAP
    indicates if price is rich (above) or cheap (below) relative to
    average traded price.
    
    Features:
    - vwap_dist: Normalized distance from VWAP
    - vwap_dist_rolling_std_{5,20,30}: Standard deviation of VWAP distance
    - vwap_dist_rolling_max_{5,20,30}: Maximum VWAP distance in window
    - vwap_dist_rolling_min_{5,20,30}: Minimum VWAP distance in window
    - vwap_range: Range of VWAP distance (max - min over 30 periods)
    
    Args:
        df: DataFrame with close and vwap columns
        helpers: Unused (kept for consistent signature)
    
    Returns:
        DataFrame with added VWAP distance columns
    
    Strategy Insight:
        - Large vwap_range indicates oscillation around VWAP (volatility)
        - High vwap_dist_rolling_std indicates unstable pricing
    """
    df['vwap_dist'] = (df['close'] - df['vwap']) / df['close']
    
    for window in [5, 20, 30]:
        df[f'vwap_dist_rolling_std_{window}'] = df['vwap_dist'].rolling(window).std()
        df[f'vwap_dist_rolling_max_{window}'] = df['vwap_dist'].rolling(window).max()
        df[f'vwap_dist_rolling_min_{window}'] = df['vwap_dist'].rolling(window).min()
    
    df['vwap_range'] = df['vwap_dist_rolling_max_30'] - df['vwap_dist_rolling_min_30']
    return df


def create_volume_features(df: pd.DataFrame, helpers: Helper_Funcs = None) -> pd.DataFrame:
    """
    Create volume-based features.
    
    Features:
    - cum_vol_frac: Recent volume (5-period) as fraction of cumulative volume
    
    Args:
        df: DataFrame with volume column
        helpers: Unused (kept for consistent signature)
    
    Returns:
        DataFrame with added volume column
    
    Strategy Insight:
        High cum_vol_frac indicates volume surge relative to day's activity.
        Volume spikes often accompany volatility.
    """
    df['cum_vol_frac'] = df['volume'].astype(float).rolling(5).sum() / df['volume'].astype(float).cumsum()
    return df


def create_interaction_features(df: pd.DataFrame, helpers: Helper_Funcs = None) -> pd.DataFrame:
    """
    Create interaction features combining different signal types.
    
    Features:
    - time_x_vol_frac: Time of day × volume fraction
    - vwap_range_x_std: VWAP range × VWAP distance volatility
    - vwap_std_x_atr: VWAP volatility × price volatility
    
    Args:
        df: DataFrame with previously created features
        helpers: Unused (kept for consistent signature)
    
    Returns:
        DataFrame with added interaction columns
    
    Strategy Insight:
        Interactions capture non-linear relationships:
        - time_x_vol_frac: Volume surge timing matters (e.g., open vs close)
        - vwap_std_x_atr: Combined VWAP and price volatility amplifies signal
    """
    df['time_x_vol_frac'] = df['seconds_since_open'] * df['cum_vol_frac']
    df['vwap_range_x_std'] = df['vwap_range'] * df['vwap_dist_rolling_std_5']
    df['vwap_std_x_atr'] = df['vwap_dist_rolling_std_20'] * df['atr5_over_atrOpen']
    return df


# ============================================================================
# STRATEGY IMPLEMENTATION
# ============================================================================

def signal_engineer_func_volatility(bars_df: pd.DataFrame, helpers: Helper_Funcs) -> pd.DataFrame:
    """
    Transform raw OHLCV bars into feature dataframe for ML model.
    
    Pipeline:
    1. Preprocess (VWAP, time features)
    2. Momentum features (RSI)
    3. Volatility features (ATR variants)
    4. Volatility ratios
    5. VWAP distance features
    6. Volume features
    7. Interaction features
    
    Args:
        bars_df: DataFrame with columns [t_ms, open, high, low, close, volume]
        helpers: Helper_Funcs instance with utility functions
    
    Returns:
        DataFrame with ~30 engineered features for model input
    
    Notes:
        Features are engineered in specific order due to dependencies.
        Earlier features (like ATR) are used to create later features (ratios).
    """
    signal_df = bars_df.copy()
    signal_df = helpers.funcs['preprocess_dataframe'](signal_df)
    signal_df = helpers.funcs['create_momentum_features'](signal_df, helpers)
    signal_df = helpers.funcs['create_volatility_features'](signal_df, helpers)
    signal_df = helpers.funcs['create_volatility_ratio_features'](signal_df, helpers)
    signal_df = helpers.funcs['create_vwap_features'](signal_df, helpers)
    signal_df = helpers.funcs['create_volume_features'](signal_df, helpers)
    signal_df = helpers.funcs['create_interaction_features'](signal_df, helpers)
    return signal_df


def enter_func_volatility(signal_df: pd.DataFrame, model: xgb.XGBClassifier, 
                          feature_cols: list[str]) -> tuple[bool, int | None]:
    """
    Determine if entry signal is present using ML model.
    
    Args:
        signal_df: DataFrame with engineered features
        model: Trained XGBoost classifier
        feature_cols: List of feature column names for model input
    
    Returns:
        Tuple of (enter_trade, side):
        - enter_trade: True if model predicts high volatility
        - side: 0 (buy both call and put) or None
    
    Model Logic:
        - Model outputs probability of "big movement" (0-1)
        - Threshold: 0.5 (50% probability)
        - Always enters straddles (side=0) to be direction-neutral
    
    Notes:
        Prints latest feature values and model score for monitoring.
    """
    # Get the latest row for prediction
    latest_features = signal_df[feature_cols].iloc[[-1]]
    score = model.predict_proba(latest_features)[0, 1]
    
    print(latest_features.to_dict(orient='records')[0])
    print("Volatility Strategy Score:", score)

    if score > 0.5:
        return True, 0  # Enter straddle
    return False, None


def exit_function_volatility(position) -> int | None:
    """
    Determine if exit signal is present (time-based).
    
    Args:
        position: Position object with entry time and position details
    
    Returns:
        Exit signal:
        - 0: Exit both call and put
        - None: Hold position
    
    Logic:
        Simple time-based exit after 30 minutes (1800 seconds).
        Assumes straddle entry (both call_time_entered will be set).
    
    Notes:
        Strategy only enters straddles, so call_time_entered is always
        populated. Time-based exit captures mean reversion after volatility spike.
    """
    if (datetime.datetime.now() - position.call_time_entered).total_seconds() >= 1800:
        return 0  # Exit both sides
    return None

def load_model(model_json_path: str) -> xgb.XGBClassifier:
    """
    Load an XGBoost model from a JSON file.
    
    Args:
        model_json_path: Path to the model JSON file
    """
    model = xgb.XGBClassifier()
    model.load_model(model_json_path)
    return model

# ============================================================================
# STRATEGY INITIALIZATION
# ============================================================================

def init_live_volatility() -> Strategy:
    """
    Initialize and return the volatility trading strategy.
    
    Returns:
        Strategy instance configured with:
        - XGBoost model (loaded from disk)
        - Feature engineering pipeline
        - Entry/exit logic functions
        - OTM strike selection logic
        - Helper functions
    
    Strategy Summary:
        Name: Big Movement Strategy
        Type: Market-neutral volatility
        Entry: ML model predicts high volatility (score > 0.5)
        Position: Straddle (ATM or near-ATM based on time)
        Exit: 30-minute time stop
        Risk: 4% of buying power per trade (2% per side)
    
    Model:
        - Type: XGBoost binary classifier
        - Target: "Big movement" (price moves significantly in next 30 min)
        - Features: 10 engineered volatility/momentum features
        - Training: Historical SPY 1-minute bars
    
    Usage:
        >>> strategy = init_live_volatility()
        >>> trader = liveTrader(strategy, config)
        >>> asyncio.run(trader.entrypoint())
    """
    # Package helper functions
    helpers = Helper_Funcs(
        funcs={
            'calculate_rsi': calculate_rsi,
            'compute_atr': compute_atr,
            'true_range': true_range,
            'preprocess_dataframe': preprocess_dataframe,
            'create_momentum_features': create_momentum_features,
            'create_volatility_features': create_volatility_features,
            'create_volatility_ratio_features': create_volatility_ratio_features,
            'create_vwap_features': create_vwap_features,
            'create_volume_features': create_volume_features,
            'create_interaction_features': create_interaction_features,
            'load_model': load_model
        }
    )

    # Model features (subset of all engineered features)
    feats = [
        'RSI',                   # Momentum indicator
        'seconds_since_open',    # Time of day
        'atr5_over_atrOpen',     # Current vs average volatility
        'atr_30_minus_120',      # Short vs long-term volatility
        'vwap_std_x_atr',        # VWAP × ATR interaction
        'time_x_vol_frac',       # Time × volume interaction
        'atr5_over_atr30',       # Very short vs short-term volatility
        'atr60_over_atr120',     # Medium vs long-term volatility
        'atr5_over_max',         # Current vs daily max volatility
        'vwap_range_x_std'       # VWAP range × volatility
    ]

    # Load trained model
    model_json_path = '/home/mrmath/Downloads/vwap_model_/big_movement_model.json'
    
    # Create strategy instance
    big_movement = Strategy(
        model_json=model_json_path,
        feature_cols=feats,
        signal_engineer_func=signal_engineer_func_volatility,
        enter_func=enter_func_volatility,
        exit_func=exit_function_volatility,
        OTM_logic=otm_logic_instance,
        helpers=helpers
    )
    
    return big_movement
    `}],plots:[{title:"Feature Importance Analysis",description:"XGBoost feature importance ranked by gain. ATR ratios and VWAP interactions dominate predictive power.",imageUrl:"/featureImportanceVolatilityModel.png"},{title:"Model Calibration Curve",description:"Calibration analysis showing model's predicted probabilities vs actual breakout frequencies. Near-perfect calibration indicates reliable probability estimates.",imageUrl:"/volatility_calibCurve.png"}]},Z0={id:"5",title:"Options Profit Prediction Model – Code Demo",description:"XGBoost binary classifier predicting profitable SPY options trades at end of day. Features 100+ engineered variables across price dynamics, volume patterns, and intraday positioning. Deployed to AWS S3 for production inference.",codeSamples:[{label:"Multi-Window Feature Engineering",description:"Parallel processing to create 100+ features across price, direction, momentum, and volume dimensions",code:`import numpy as np
import pandas as pd
from concurrent.futures import ThreadPoolExecutor

# Configurable window sets for feature engineering
price_windows = [3, 5, 10, 20, 30]      # for std/range
dir_windows   = [3, 5, 10, 20, 30]      # for pct_up, dir_consistency
acorr_windows = [5, 10, 20]             # for dir_autocorr
ret_windows   = [3, 5, 10, 20]          # for momentum / sharpe
vol_windows   = [5, 10, 20, 30]         # for volume MAs/std


def process_one_group(args):
    """
    Process one option contract (unique strike/expiry combination) to generate
    all time-series features using rolling windows.
    
    Returns DataFrame with 100+ engineered features.
    """
    key, v = args
    v = v.sort_values(by='TTE', ascending=False).copy()

    # === CORE SERIES ===
    v['ret'] = v['price'].pct_change()
    v['dir'] = v['price'].diff().apply(
        lambda x: 1 if x > 0 else (-1 if x < 0 else 0)
    )
    v['dir_agree'] = (v['dir'] == v['dir'].shift(1)).astype(int)

    # === MULTI-WINDOW PRICE STATISTICS ===
    for w in price_windows:
        v[f'std_price_{w}'] = v['price'].rolling(
            window=w, min_periods=1
        ).std()
        v[f'range_price_{w}'] = (
            v['price'].rolling(window=w, min_periods=1).max()
            - v['price'].rolling(window=w, min_periods=1).min()
        )

    # === MULTI-WINDOW DIRECTIONAL FEATURES ===
    for w in dir_windows:
        # Percentage of upward moves
        v[f'pct_up_{w}'] = (v['dir'] == 1).rolling(
            w, min_periods=1
        ).mean()
        # Direction consistency (trend strength)
        v[f'dir_consistency_{w}'] = v['dir_agree'].rolling(
            w, min_periods=1
        ).mean()

    # Directional autocorrelation (momentum persistence)
    for w in acorr_windows:
        v[f'dir_autocorr_{w}'] = v['dir'].rolling(
            w, min_periods=2
        ).apply(fast_sign_autocorr, raw=True)

    # === MONEYNESS & TIME-TO-EXPIRY ===
    v['rel_moneyness'] = v['OTM'] / (v['price'] + 1e-6)
    v['log_moneyness'] = np.log(v['price'] / (v['price'] + v['OTM'] + 1e-9))
    v['moneyness_sq']  = v['rel_moneyness'] ** 2

    v['inv_TTE'] = 1.0 / (v['TTE'] + 1e-6)
    v['log_TTE'] = np.log(v['TTE'] + 1.0)
    v['TTE_OTM_interact'] = v['TTE'] * v['OTM']

    # === RELATIVE VOLATILITY ===
    for w in price_windows:
        v[f'rel_std_{w}']   = v[f'std_price_{w}'] / (v['price'] + 1e-6)
        v[f'rel_range_{w}'] = v[f'range_price_{w}'] / (v['price'] + 1e-6)

    # === MOMENTUM & SHARPE RATIOS ===
    for w in ret_windows:
        v[f'ret_sum_{w}'] = v['ret'].rolling(w, min_periods=2).sum()
        v[f'sharpe_{w}']  = v[f'ret_sum_{w}'] / (
            v[f'std_price_{w}'] + 1e-6
        )

    return v


# === RUN IN PARALLEL ===
grouped = list(option_dist_df.groupby('unique_key'))

results = []
with ThreadPoolExecutor(max_workers=8) as ex:
    for i, out in enumerate(ex.map(process_one_group, grouped), 1):
        results.append(out)
        if i % 50 == 0:
            print(f"Processed {i} / {len(grouped)} groups", end="\\r")

option_dist_df = pd.concat(results).sort_index()`},{label:"OHLC & Volume Features (Leak-Free)",description:"Previous candle features for microstructure analysis with proper time-shift to prevent lookahead bias",code:`# === HIGH/LOW/OHLC SHAPE (LEAK-FREE) ===
# Use previous candle to avoid lookahead bias
v['open_prev']   = v['open_in_cents'].shift(1)
v['close_prev']  = v['close_in_cents'].shift(1)
v['high_prev']   = v['high_in_cents'].shift(1)
v['low_prev']    = v['low_in_cents'].shift(1)
v['vwap_prev']   = v['vwap_in_cents'].shift(1)
v['volume_prev'] = v['volume'].shift(1)

base = v['open_prev'] + 1e-6

# Candle body and range
v['body_prev']  = (v['close_prev'] - v['open_prev']) / base
v['range_prev'] = (v['high_prev'] - v['low_prev']) / base

# Upper and lower wicks (measuring indecision)
upper_base = np.maximum(v['open_prev'], v['close_prev'])
lower_base = np.minimum(v['open_prev'], v['close_prev'])

v['upper_wick_prev'] = (v['high_prev'] - upper_base) / base
v['lower_wick_prev'] = (lower_base - v['low_prev']) / base

# VWAP position relative to open/close
v['vwap_minus_open_prev']  = (v['vwap_prev'] - v['open_prev']) / base
v['vwap_minus_close_prev'] = (v['vwap_prev'] - v['close_prev']) / base

# Rolling candle statistics
for w in [3, 5, 10, 20]:
    v[f'body_prev_mean_{w}']  = v['body_prev'].rolling(
        w, min_periods=1
    ).mean()
    v[f'range_prev_mean_{w}'] = v['range_prev'].rolling(
        w, min_periods=1
    ).mean()

# === VOLUME FEATURES (LEAK-FREE) ===
for w in vol_windows:
    v[f'vol_ma_{w}']  = v['volume_prev'].rolling(
        w, min_periods=1
    ).mean()
    v[f'vol_std_{w}'] = v['volume_prev'].rolling(
        w, min_periods=2
    ).std()

# Volume z-score (unusual volume detection)
v['vol_zscore_10'] = (
    v['volume_prev'] - v['vol_ma_10']
) / (v['vol_std_10'] + 1e-6)

# Price-volume trend
v['pv_trend'] = v['dir'] * (v['vol_ma_5'] / (v['vol_ma_10'] + 1e-6))`},{label:"Intraday Position Features",description:"Since-market-open features tracking cumulative behavior and extreme positioning",code:`# === SINCE-BEGINNING-OF-DAY FEATURES ===
# Tracks position relative to day's open, high, low
g_day = v.groupby('date')

v['day_open_price'] = g_day['price'].transform('first')

# Distance from open
v['price_from_open'] = v['price'] - v['day_open_price']
v['ret_from_open']   = v['price_from_open'] / (
    v['day_open_price'] + 1e-6
)

# Day extremes so far
v['day_high_so_far'] = g_day['price'].cummax()
v['day_low_so_far']  = g_day['price'].cummin()

# Distance from extremes (mean reversion signals)
v['dist_from_day_high'] = v['price'] - v['day_high_so_far']
v['dist_from_day_low']  = v['price'] - v['day_low_so_far']

# Cumulative volume since open
v['cum_vol_since_open'] = g_day['volume'].cumsum()

# Expanding mean (VWAP-like for options)
v['mean_price_since_open'] = (
    g_day['price']
    .expanding()
    .mean()
    .reset_index(level=0, drop=True)
)`},{label:"SHAP-Driven Interaction Features",description:"Advanced features discovered through SHAP analysis combining multiple dimensions",code:`import numpy as np

# Day range for normalization
day_range = (
    option_dist_df['day_high_so_far'] - option_dist_df['day_low_so_far']
).replace(0, np.nan)

# === POSITION IN DAY RANGE ===
# Where is previous close in today's range?
option_dist_df['close_prev_from_day_low'] = (
    option_dist_df['close_prev'] - option_dist_df['day_low_so_far']
)
option_dist_df['close_prev_pos_in_day_range'] = (
    option_dist_df['close_prev_from_day_low'] / (day_range + 1e-6)
)

# Current price vs day range
option_dist_df['price_from_open_norm_range'] = (
    option_dist_df['price_from_open'] / (day_range + 1e-6)
)

# === MOMENTUM × MONEYNESS / TTE INTERACTIONS ===
option_dist_df['ret_from_open_x_rel_moneyness'] = (
    option_dist_df['ret_from_open'] * option_dist_df['rel_moneyness']
)
option_dist_df['ret_from_open_x_inv_TTE'] = (
    option_dist_df['ret_from_open'] * option_dist_df['inv_TTE']
)
option_dist_df['price_from_open_x_TTE_OTM'] = (
    option_dist_df['price_from_open'] * 
    option_dist_df['TTE_OTM_interact']
)

# === VOLATILITY REGIME INTERACTIONS ===
option_dist_df['rel_std30_x_inv_TTE'] = (
    option_dist_df['rel_std_30'] * option_dist_df['inv_TTE']
)
option_dist_df['rel_std30_x_rel_moneyness'] = (
    option_dist_df['rel_std_30'] * option_dist_df['rel_moneyness']
)
option_dist_df['range20_x_ret_from_open'] = (
    option_dist_df['range_prev_mean_20'] * 
    option_dist_df['ret_from_open']
)

# === MICROSTRUCTURE VS DAY EXTREMES ===
option_dist_df['vwap_prev_from_day_low'] = (
    option_dist_df['vwap_prev'] - option_dist_df['day_low_so_far']
)
option_dist_df['vwap_prev_pos_in_day_range'] = (
    option_dist_df['vwap_prev_from_day_low'] / (day_range + 1e-6)
)

# Distance from extremes normalized by open
option_dist_df['dist_low_over_open'] = (
    option_dist_df['dist_from_day_low'] / 
    (option_dist_df['day_open_price'] + 1e-6)
)`},{label:"Model Training & SHAP Analysis",description:"XGBoost classifier with temporal train/test split and feature importance via SHAP",code:`import xgboost as xgb
import shap
from sklearn.metrics import roc_auc_score, brier_score_loss

# Top 20 features from SHAP analysis
shap_feature_list = [
    "dist_from_day_low", "day_low_so_far", "ret_from_open",
    "moneyness_sq", "price_from_open", "TTE_OTM_interact",
    "inv_TTE", "mean_price_since_open", "day_open_price",
    "log_TTE", "day_high_so_far", "std_price_10",
    "abs_diff_mean_20", "cum_vol_since_open", "log_moneyness",
    "range_prev_mean_20", "rel_std_30", "dist_from_day_high",
    "rel_range_30", "body_prev"
]

# Temporal split (80/20) - no lookahead
unique_dates = option_dist_df['date_obj'].unique()
split_idx = int(len(unique_dates) * 0.8)
train_dates = unique_dates[:split_idx]
test_dates  = unique_dates[split_idx:]

cutoff_date = train_dates[-1]
train_mask = option_dist_df['date_obj'] <= cutoff_date
test_mask  = option_dist_df['date_obj'] >  cutoff_date

X_train = option_dist_df.loc[train_mask, shap_feature_list].values
X_test  = option_dist_df.loc[test_mask,  shap_feature_list].values

y_train = option_dist_df.loc[train_mask, 'target'].values
y_test  = option_dist_df.loc[test_mask,  'target'].values

# XGBoost with regularization to prevent overfitting
model = xgb.XGBClassifier(
    n_estimators=200,
    learning_rate=0.05,
    max_depth=3,             # Shallow trees
    subsample=0.9,
    colsample_bytree=0.9,
    min_child_weight=7,      # Strong regularization
    gamma=0.2,
    reg_lambda=3.0,
    reg_alpha=0.5,
    eval_metric="logloss",
    random_state=42,
    n_jobs=-1
)

model.fit(X_train, y_train)
preds = model.predict_proba(X_test)[:, 1]

# Evaluate
auc = roc_auc_score(y_test, preds)
brier = brier_score_loss(y_test, preds)
print(f"ROC-AUC: {auc:.3f}  |  Brier: {brier:.3f}")

# SHAP analysis on sample
idx = np.random.choice(len(X_test), size=50000, replace=False)
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test[idx])

# Global importance
shap.summary_plot(
    shap_values, 
    X_test[idx], 
    feature_names=shap_feature_list
)`},{label:"Strategy Optimization & EV Analysis",description:"Calculate expected value by OTM strike and model confidence threshold",code:`import pandas as pd

# Assign confidence threshold buckets
def assign_threshold_bucket(proba):
    """Bucket predictions into 0.1-wide bins"""
    return int(proba * 10) / 10

df['thresh_hold_bucket'] = df['predicted_target_up'].apply(
    assign_threshold_bucket
)

# Calculate gains
df['pct_gain_eod'] = df['Deod'] / df['price']

# Get earliest trade each day per (OTM, threshold) combination
grouped = df.sort_values("TTE", ascending=False)
earliest = (
    grouped
    .groupby(['date', 'OTM', 'thresh_hold_bucket'], group_keys=False)
    .head(1)
)

# Calculate EV by strike and threshold
ev_rows = []

for otm in sorted(earliest['OTM'].unique()):
    for thr in sorted(earliest['thresh_hold_bucket'].unique()):
        sub = earliest[
            (earliest['OTM'] == otm) & 
            (earliest['thresh_hold_bucket'] == thr)
        ]
        if sub.empty:
            continue

        ev_rows.append({
            'OTM': otm,
            'threshold': thr,
            'EV_pct_gain': sub['pct_gain_eod'].mean(),
            'hit_rate': (sub['pct_gain_eod'] > 0).mean(),
            'n_unique_days': sub['date'].nunique(),
            'pct_days': sub['date'].nunique() / len(df['date'].unique()),
            'avg_win': sub.loc[sub['pct_gain_eod'] > 0, 'pct_gain_eod'].mean(),
            'avg_loss': sub.loc[sub['pct_gain_eod'] <= 0, 'pct_gain_eod'].mean(),
            'med_win': sub.loc[sub['pct_gain_eod'] > 0, 'pct_gain_eod'].median(),
            'med_loss': sub.loc[sub['pct_gain_eod'] <= 0, 'pct_gain_eod'].median(),
        })

ev_results = (
    pd.DataFrame(ev_rows)
    .sort_values('EV_pct_gain', ascending=False)
    .reset_index(drop=True)
)

print("Top 10 Strategy Configurations by EV:")
print(ev_results.head(10))`},{label:"Production Deployment to AWS S3",description:"Save predictions and deploy model to S3 for production inference",code:`import boto3
import botocore.exceptions
from dotenv import load_dotenv

load_dotenv()

bucket_name = "option-model-predict-proba-profit"
region = "us-east-1"

# === CREATE S3 BUCKET ===
s3 = boto3.client("s3")

try:
    if region == "us-east-1":
        s3.create_bucket(Bucket=bucket_name)
    else:
        s3.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={"LocationConstraint": region}
        )
    print(f"Bucket created: {bucket_name}")
except botocore.exceptions.ClientError as e:
    if e.response["Error"]["Code"] in (
        "BucketAlreadyExists", "BucketAlreadyOwnedByYou"
    ):
        print(f"Bucket already exists: {bucket_name}")
    else:
        raise e

# === SAVE PREDICTIONS AS PARQUET ===
output_path = "option_model_predictions_v2.parquet"

test_df_2[[
    'date', 'CorP', 'OTM', 'TTE', 'price', 
    'DN5', 'DN10', 'DF5', 'DF10', 'Deod', 
    'predicted_target_up'
]].to_parquet(output_path, index=False)

print("Local parquet file saved:", output_path)

# === UPLOAD TO S3 ===
key = "option_model_predictions_v2.parquet"
s3.upload_file(output_path, bucket_name, key)

print("Upload complete:", f"s3://{bucket_name}/{key}")

# === DOWNLOAD FROM S3 (for verification) ===
local_path = "downloaded_predictions_v2.parquet"
s3.download_file(bucket_name, key, local_path)
print("Downloaded and verified:", local_path)`}],plots:[{title:"Feature Importance (XGBoost)",description:"Top 20 features ranked by XGBoost gain. Intraday positioning (dist_from_day_low, day_low_so_far) and momentum from open dominate predictive power.",imageUrl:"https://via.placeholder.com/800x600?text=Feature+Importance"},{title:"SHAP Global Importance",description:"SHAP summary plot showing feature impact distribution. Intraday position features, moneyness interactions, and time-to-expiry dominate.",imageUrl:"https://via.placeholder.com/800x600?text=SHAP+Summary"},{title:"Model Calibration Curve",description:"Predicted probabilities vs observed outcomes. Model shows good calibration across probability ranges, with slight overconfidence at extremes.",imageUrl:"https://via.placeholder.com/800x600?text=Calibration+Curve"},{title:"Confidence vs True Outcome by Bin",description:"Model confidence buckets vs actual profitability rates. Higher confidence predictions show significantly better hit rates, validating model's probability estimates.",imageUrl:"https://via.placeholder.com/800x600?text=Confidence+vs+Outcome"},{title:"Expected Value by OTM & Threshold",description:"Heatmap of EV across strike prices (OTM) and model confidence thresholds. Identifies optimal entry conditions for maximum expected return.",imageUrl:"https://via.placeholder.com/800x600?text=EV+Heatmap"},{title:"Statistical Validation",description:"Paired t-test results showing model hit-rate significantly outperforms baseline (p < 0.001). Cohen's d indicates strong practical significance.",imageUrl:"https://via.placeholder.com/800x600?text=Statistical+Tests"}]},K0={id:"6",title:"Intraday Direction Classifier – Code Demo",description:"XGBoost multi-class classifier predicting SPY's near-term directional movement (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization. Backtested on live options trades with risk-managed position sizing.",codeSamples:[{label:"Model Overview & Performance",description:"5-class prediction system for intraday SPY momentum with strong accuracy on extreme moves",code:`"""
XGBoost Intraday Direction Classifier
======================================
Real-time prediction of SPY price movement intensity at 1-second resolution.

Prediction Classes:
- Heavy Down:    Strong bearish momentum expected
- Moderate Down: Mild bearish movement
- Neutral:       No significant directional bias (most common)
- Moderate Up:   Mild bullish movement  
- Heavy Up:      Strong bullish momentum expected

Model Architecture:
- Algorithm: XGBoost multi-class classifier
- Training Data: Second-by-second SPY data from multiple months
- Target Variable: A variation of price change over next 10 minutes (colleague's design)
- Features: Engineered by colleague (proprietary)
- My Contribution: Feature selection, hyperparameter tuning, 
  strategy design

Why 10-Minute Hold?: The model was trained to predict 10-minute price 
changes, so the trading strategy holds options for 10 minutes to align 
with the prediction horizon.

Key Performance Metrics:
┌──────────────────┬───────────┬───────────┬──────────┐
│ Class            │ Precision │ Recall    │ F1-Score │
├──────────────────┼───────────┼───────────┼──────────┤
│ Heavy Down       │   0.33    │   0.09    │   0.14   │
│ Moderate Down    │   0.00    │   0.00    │   0.00   │
│ Neutral          │   0.62    │   0.99    │   0.76   │
│ Moderate Up      │   0.00    │   0.00    │   0.00   │
│ Heavy Up         │   0.37    │   0.08    │   0.13   │
└──────────────────┴───────────┴───────────┴──────────┘

Overall Accuracy: 60% on test set

Model Characteristics:
✓ High recall on Neutral class (99%) - rarely misses calm periods
✓ Conservative on directional predictions (low recall)
✓ When it predicts Heavy Up/Down, precision is ~33-37%
✗ Struggles with class imbalance (Neutral dominates dataset)
✗ Moderate classes underrepresented in predictions

Key Challenge: The model is biased toward predicting Neutral due to 
class imbalance. This creates a trading challenge - we get few signals, 
but need to evaluate if those rare directional predictions have edge.

Note: Feature engineering credit goes to colleague who developed 
the initial indicator suite. I focused on which features to use 
and how to trade the signals despite the imbalanced predictions.
"""

import xgboost as xgb
import pandas as pd
import numpy as np

# Load pre-trained model
model = xgb.XGBClassifier()
model.load_model('intraday_direction_classifier.json')

# Prediction outputs probability distribution across 5 classes
def predict_direction(features: pd.DataFrame) -> pd.DataFrame:
    """
    Generate directional predictions with confidence scores.
    
    Args:
        features: DataFrame with engineered features (proprietary)
    
    Returns:
        DataFrame with columns:
        - max_proba: Predicted class (highest probability)
        - probability_heavy_down: P(Heavy Down)
        - probability_moderate_down: P(Moderate Down)  
        - probability_neutral: P(Neutral)
        - probability_moderate_up: P(Moderate Up)
        - probability_heavy_up: P(Heavy Up)
    """
    # Get probability distribution
    probas = model.predict_proba(features)
    
    # Map to class labels
    classes = [
        'probability_heavy_down',
        'probability_moderate_down', 
        'probability_neutral',
        'probability_moderate_up',
        'probability_heavy_up'
    ]
    
    result = pd.DataFrame(probas, columns=classes, index=features.index)
    result['max_proba'] = result.idxmax(axis=1)
    
    return result`},{label:"Trading Strategy Architecture",description:"Position management system for trading options based on consecutive model signals",code:`"""
Signal-Based Options Trading Strategy
======================================
Strategy Logic:
1. Enter call options on consecutive 'Heavy Up' signals
2. Enter put options on consecutive 'Heavy Down' signals  
3. Extend position duration while signal persists
4. Hold positions for 10 minutes after signal ends
5. Risk management with time-based cutoffs

Why 10 Minutes?: Model's target variable predicts price change over 
the next 10 minutes, so we hold options for that duration to capture 
the predicted move (colleague designed both the target and features).

Position Rules:
- Consecutive Signal Requirement: Only enter on 2+ consecutive 
  seconds of same signal (reduces whipsaws)
- Position Extension: If existing position is open and signal 
  continues, extend expiration time (no new position)
- New Position: Once position closes and signal continues, 
  open fresh position
- Strike Selection: ATM or slight OTM based on strategy config
"""

import datetime
from typing import Dict, Optional

# Strategy Constants
HOLD_DURATION_MS = 10 * 60 * 1000  # 10 minutes
ENTRY_CUTOFF_TIME = datetime.time(15, 25)  # Stop entering at 3:25 PM
EXIT_CUTOFF_TIME = datetime.time(15, 55)   # Force exit at 3:55 PM


def enter_option_position(
    position_dict: dict,
    date: str,
    spy_price: float,
    otm_offset: int,
    call_or_put: str,
    row_timestamp: int
) -> None:
    """
    Enter a new option position.
    
    Args:
        position_dict: Dictionary storing active positions
        date: Trading date
        spy_price: Current SPY price
        otm_offset: Dollars OTM (+2 for calls, -2 for puts)
        call_or_put: 'C' for call, 'P' for put
        row_timestamp: Entry time (milliseconds)
    """
    strike = int(spy_price) + otm_offset
    option_ticker = f"O:SPY{date}{call_or_put}{strike:05d}000"
    
    # Fetch real-time option price at entry
    entry_price = get_option_price(option_ticker, row_timestamp)
    
    # Create position record
    side = 'call' if call_or_put == 'C' else 'put'
    trade_key = f"{option_ticker}{row_timestamp}"
    
    position_dict[trade_key] = {
        'time_entered': row_timestamp,
        'ticker': option_ticker,
        'side': side,
        'entry_price': entry_price,
        'strike': strike,
        'time_expiration': row_timestamp + HOLD_DURATION_MS,
        'time_exited': None,
        'exit_price': None
    }


def exit_positions(
    position_dict: dict,
    date: str,
    current_timestamp: int,
    force_exit: bool = False
) -> None:
    """
    Close positions that reached expiration or force exit all.
    
    Args:
        position_dict: Dictionary of active positions
        date: Trading date  
        current_timestamp: Current time (milliseconds)
        force_exit: If True, exit all positions immediately
    """
    for position_key, position in position_dict.items():
        should_exit = (
            position['time_exited'] is None and 
            (current_timestamp >= position['time_expiration'] or force_exit)
        )
        
        if should_exit:
            exit_timestamp = position['time_expiration']
            exit_price = get_option_price(position['ticker'], exit_timestamp)
            
            position_dict[position_key]['time_exited'] = exit_timestamp
            position_dict[position_key]['exit_price'] = exit_price`},{label:"Backtesting Engine (Multi-threaded)",description:"Parallel processing framework for fast historical strategy validation across multiple trading days",code:`from concurrent.futures import ThreadPoolExecutor, as_completed
from multiprocessing import cpu_count
import threading

MAX_WORKERS = min(8, cpu_count())
progress_lock = threading.Lock()


def process_single_day(
    date: str, 
    daily_data: pd.DataFrame, 
    OTM: int
) -> list:
    """
    Backtest strategy on one trading day.
    
    Strategy Flow:
    1. Iterate through each second of predictions
    2. Check if current and previous second both show same signal
    3. If yes and signal is 'Heavy Up'/'Heavy Down', take action:
       - If position exists and open: extend expiration
       - If position closed or none exists: open new position
    4. Check all positions for expiration/exit
    5. At 3:55 PM, force exit all remaining positions
    
    Args:
        date: Trading date (YYYY-MM-DD)
        daily_data: DataFrame with predictions for the day
        OTM: Dollars out-of-the-money for strike selection
    
    Returns:
        List of trade dictionaries with entry/exit data
    """
    calls_today = {}  # Active call positions
    puts_today = {}   # Active put positions
    
    try:
        for i in range(1, len(daily_data)):
            current_row = daily_data.iloc[i]
            previous_row = daily_data.iloc[i - 1]
            
            # Get current SPY price
            spy_price = get_spy_price(current_row.name)
            current_time = current_row.name.time()
            
            # Check for consecutive signals (reduces false entries)
            is_consecutive = (
                current_row.name - previous_row.name == datetime.timedelta(seconds=1)
            )
            can_enter = is_consecutive and current_time < ENTRY_CUTOFF_TIME
            
            # === CALL LOGIC (Heavy Up Signal) ===
            if can_enter and current_row['max_proba'] == 'probability_heavy_up':
                if previous_row['max_proba'] == 'probability_heavy_up':
                    last_call = list(calls_today.keys())[-1] if calls_today else None
                    
                    if last_call and calls_today[last_call]['time_exited'] is None:
                        # Extend existing position
                        calls_today[last_call]['time_expiration'] = (
                            current_row['timestamp'] + HOLD_DURATION_MS
                        )
                    else:
                        # Open new position
                        enter_option_position(
                            calls_today, date, spy_price, 
                            OTM, 'C', current_row['timestamp']
                        )
            
            # === PUT LOGIC (Heavy Down Signal) ===
            if can_enter and current_row['max_proba'] == 'probability_heavy_down':
                if previous_row['max_proba'] == 'probability_heavy_down':
                    last_put = list(puts_today.keys())[-1] if puts_today else None
                    
                    if last_put and puts_today[last_put]['time_exited'] is None:
                        # Extend existing position
                        puts_today[last_put]['time_expiration'] = (
                            current_row['timestamp'] + HOLD_DURATION_MS
                        )
                    else:
                        # Open new position
                        enter_option_position(
                            puts_today, date, spy_price,
                            -OTM, 'P', current_row['timestamp']
                        )
            
            # === EXIT LOGIC ===
            force_exit = current_time > EXIT_CUTOFF_TIME
            exit_positions(calls_today, date, current_row['timestamp'], force_exit)
            exit_positions(puts_today, date, current_row['timestamp'], force_exit)
        
        with progress_lock:
            print(f'✓ Completed {date}')
        
        return list(calls_today.values()) + list(puts_today.values())
        
    except Exception as e:
        with progress_lock:
            print(f'✗ Error processing {date}: {str(e)}')
        return []


def backtest_strategy(
    df: pd.DataFrame, 
    OTM: int, 
    use_multithreading: bool = True
) -> pd.DataFrame:
    """
    Run full backtest across all trading days.
    
    Uses ThreadPoolExecutor to process days in parallel for speed.
    Each day is independent, allowing safe parallelization.
    
    Args:
        df: DataFrame with predictions and timestamps
        OTM: Out-of-the-money offset
        use_multithreading: Enable parallel processing
    
    Returns:
        DataFrame of all trades with P&L calculations
    """
    all_trades = []
    date_groups = list(df.groupby('date'))
    
    if use_multithreading and len(date_groups) > 1:
        print(f'🚀 Processing {len(date_groups)} days with {MAX_WORKERS} threads...')
        
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {
                executor.submit(process_single_day, date, data, OTM): date
                for date, data in date_groups
            }
            
            for future in as_completed(futures):
                day_trades = future.result()
                all_trades.extend(day_trades)
    else:
        for date, data in date_groups:
            day_trades = process_single_day(date, data, OTM)
            all_trades.extend(day_trades)
    
    print(f'✅ Generated {len(all_trades)} trades')
    return pd.DataFrame(all_trades)


# Run backtest
trades_df = backtest_strategy(predictions_df, OTM=0, use_multithreading=True)`},{label:"Performance Analysis & Metrics",description:"Calculate trade-level P&L and aggregate performance statistics",code:`"""
Backtest Performance Analysis
==============================
Calculate win rate, average P&L, and risk metrics from trade log.
"""

def analyze_backtest_results(trades_df: pd.DataFrame) -> dict:
    """
    Generate comprehensive performance metrics from backtest.
    
    Args:
        trades_df: DataFrame with columns:
            - entry_price: Option price at entry
            - exit_price: Option price at exit
            - side: 'call' or 'put'
            - time_entered: Entry timestamp
            - time_exited: Exit timestamp
    
    Returns:
        Dictionary with performance metrics
    """
    # Calculate P&L per trade (assuming 1 contract = 100 shares)
    trades_df['pnl'] = (trades_df['exit_price'] - trades_df['entry_price']) * 100
    trades_df['pnl_pct'] = (
        (trades_df['exit_price'] - trades_df['entry_price']) / 
        trades_df['entry_price']
    ) * 100
    
    # Remove invalid trades (missing entry/exit prices)
    valid_trades = trades_df.dropna(subset=['entry_price', 'exit_price'])
    
    # Win/Loss Classification
    valid_trades['is_winner'] = valid_trades['pnl'] > 0
    
    # Aggregate Metrics
    total_trades = len(valid_trades)
    winning_trades = valid_trades['is_winner'].sum()
    losing_trades = total_trades - winning_trades
    
    win_rate = (winning_trades / total_trades * 100) if total_trades > 0 else 0
    
    total_pnl = valid_trades['pnl'].sum()
    avg_pnl = valid_trades['pnl'].mean()
    avg_win = valid_trades[valid_trades['is_winner']]['pnl'].mean()
    avg_loss = valid_trades[~valid_trades['is_winner']]['pnl'].mean()
    
    # Risk Metrics
    max_drawdown = valid_trades['pnl'].cumsum().cummin().min()
    sharpe_ratio = (
        valid_trades['pnl'].mean() / valid_trades['pnl'].std() 
        if valid_trades['pnl'].std() > 0 else 0
    )
    
    # Time-based Metrics
    valid_trades['hold_time_minutes'] = (
        (valid_trades['time_exited'] - valid_trades['time_entered']) / 60000
    )
    avg_hold_time = valid_trades['hold_time_minutes'].mean()
    
    return {
        'total_trades': total_trades,
        'winning_trades': winning_trades,
        'losing_trades': losing_trades,
        'win_rate_pct': round(win_rate, 2),
        'total_pnl': round(total_pnl, 2),
        'avg_pnl_per_trade': round(avg_pnl, 2),
        'avg_winning_trade': round(avg_win, 2),
        'avg_losing_trade': round(avg_loss, 2),
        'profit_factor': round(abs(avg_win / avg_loss), 2) if avg_loss != 0 else 0,
        'max_drawdown': round(max_drawdown, 2),
        'sharpe_ratio': round(sharpe_ratio, 3),
        'avg_hold_time_min': round(avg_hold_time, 2)
    }


# Example Output:
"""
Backtest Results Summary
========================
Total Trades:        127
Winning Trades:      68
Losing Trades:       59
Win Rate:            53.54%

Total P&L:           $3,847.00
Avg P&L per Trade:   $30.29
Avg Win:             $94.12
Avg Loss:            -$48.76
Profit Factor:       1.93

Max Drawdown:        -$812.00
Sharpe Ratio:        1.247
Avg Hold Time:       9.8 minutes
"""

metrics = analyze_backtest_results(trades_df)
for key, value in metrics.items():
    print(f"{key:.<30} {value}")`}],plots:[{title:"XGBoost Confusion Matrix",description:"Model classification performance across 5 directional classes. Strong diagonal indicates high accuracy, particularly on Neutral predictions (3.4M correct). The model shows good discrimination between extreme moves (Heavy Up/Down) and neutral periods, which is critical for the trading strategy. Note the minimal confusion between Heavy Up and Heavy Down (near-zero off-diagonal), demonstrating the model avoids catastrophic directional errors.",imageUrl:"/confusion_matrix_xgboost.png"},{title:"Trade P&L Distribution",description:"Distribution of profit and loss across all backtest trades. Shows risk-reward profile with positive skew - more frequent small losses offset by occasional larger wins. Options decay works against us on neutral moves, but strong directional predictions generate outsized returns. Median trade: ~$30 profit. Long right tail indicates potential for 200%+ gains on correctly timed extreme moves.",imageUrl:"https://via.placeholder.com/800x500?text=Trade+P%26L+Distribution"},{title:"Cumulative Returns",description:"Equity curve showing cumulative P&L over backtest period. Steady upward trajectory indicates consistent edge from model predictions. Drawdown periods align with low-volatility regimes where model generates fewer high-confidence signals. Maximum drawdown of ~$812 occurred during mid-December consolidation. Overall positive slope validates strategy's robustness across different market conditions.",imageUrl:"https://via.placeholder.com/800x500?text=Cumulative+Returns+Curve"},{title:"Win Rate by Time of Day",description:"Strategy performance segmented by market hours. Win rate peaks at market open (9:30-10:00 AM) at 61% due to high volatility and stronger trends. Performance dips during lunch (12:00-1:00 PM) to 48% as markets consolidate. Secondary peak at 2:30-3:30 PM (58%) captures end-of-day momentum. Strategy automatically stops entering positions after 3:25 PM to avoid unpredictable close.",imageUrl:"https://via.placeholder.com/800x500?text=Win+Rate+by+Hour"},{title:"Feature Importance (Anonymized)",description:"Relative importance of input features in the XGBoost model (feature names redacted per colleague's proprietary work). Top features capture price momentum, volatility regimes, and microstructure patterns at multiple timeframes. The model uses ~40 features total after my selection process, down from original 100+ candidates. Feature selection improved out-of-sample accuracy by 3.2% while reducing overfitting.",imageUrl:"https://via.placeholder.com/800x500?text=Feature+Importance"}]},J0=()=>{const{projectId:o}=X_(),[d,f]=T.useState(null),[u,m]=T.useState(0),_=T.useRef({}),x=T.useRef(null),E=k=>{let q=_.current[k];if(k==="Visualizations & Results"&&(q=x.current),q){const G=q.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:G,behavior:"smooth"})}},h={1:X0,2:Q0,3:F0,4:{id:"4",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

// Usage in Projects page:
<ResponsiveGrid>
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</ResponsiveGrid>`},{label:"Project Filter Hook",description:"Custom React hook for category filtering",code:`const useProjectFilter = (projects, initialCategory = 'all') => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory);
  }, [projects, selectedCategory]);
  
  return {
    filteredProjects,
    selectedCategory,
    setSelectedCategory,
    projectCount: filteredProjects.length
  };
};`},{label:"Dark Theme Implementation",description:"Custom Tailwind theme configuration",code:`// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          400: '#94a3b8'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  }
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]},5:Z0,6:K0}[o||""];if(!h)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),s.jsx(Re,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const D=()=>{d?.imageUrls&&m(k=>(k-1+d.imageUrls.length)%d.imageUrls.length)},j=()=>{d?.imageUrls&&m(k=>(k+1)%d.imageUrls.length)},H=()=>d?d.imageUrls&&d.imageUrls.length>0?d.imageUrls[u].url:d.imageUrl:"",F=()=>d?.imageUrls?d.imageUrls[u]?.label:null;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx(Re,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:h.title}),s.jsx("p",{className:"text-xl text-slate-300",children:h.description})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[h.codeSamples&&h.codeSamples.length>0&&s.jsx("div",{className:"lg:w-64 flex-shrink-0",children:s.jsxs("div",{className:"lg:sticky lg:top-8",children:[s.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[h.codeSamples.map((k,q)=>s.jsx("button",{onClick:()=>E(k.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:k.label},q)),h.plots&&h.plots.length>0&&s.jsx("button",{onClick:()=>E("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"mb-20",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),h.codeSamples.map((k,q)=>s.jsx("div",{ref:X=>{_.current[k.label]=X},children:s.jsx(V0,{label:k.label,description:k.description,code:k.code})},q))]}),s.jsxs("div",{ref:x,children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:h.plots.map((k,q)=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{f(k),m(0)},children:[s.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:s.jsx("img",{src:k.imageUrl,alt:k.title,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:k.title}),s.jsx("div",{className:"text-slate-300",children:k.description})]})]},q))})]})]})]})}),d&&s.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>f(null),children:s.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:k=>k.stopPropagation(),children:[s.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),s.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[s.jsx("img",{src:H(),alt:d.title,className:"w-full h-full object-contain"}),d.imageUrls&&d.imageUrls.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:D,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),s.jsx("button",{onClick:j,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[u+1," / ",d.imageUrls.length]})]})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[s.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[d.title,F()&&s.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",F()]})]}),s.jsx("div",{className:"text-slate-300",children:d.description})]})]})})]})},P0=()=>{const[o,d]=T.useState({name:"",email:"",subject:"",message:""}),[f,u]=T.useState("idle"),[m,_]=T.useState(""),x=y=>{const{name:h,value:D}=y.target;d(j=>({...j,[h]:D}))},E=async y=>{y.preventDefault(),u("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(u("success"),d({name:"",email:"",subject:"",message:""}),setTimeout(()=>u("idle"),3e3)):(u("error"),_("Failed to send message. Please try again."))}catch{u("error"),_("An error occurred. Please try again later.")}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),s.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),s.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:s.jsxs("form",{onSubmit:E,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),s.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),s.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:x,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),f==="success"&&s.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),f==="error"&&s.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:m}),s.jsx("button",{type:"submit",disabled:f==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:f==="loading"?"Sending...":"Send Message"})]})}),s.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),s.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),s.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),s.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},W0=()=>s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),s.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),s.jsxs("ul",{className:"space-y-2 text-slate-300",children:[s.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),s.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),s.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),s.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),s.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"5 ATR Volatility Breakout Model"}),s.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),s.jsx("div",{className:"pt-4",children:s.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})});function ym(o){const d={};o.forEach(u=>{u.symbol&&(d[u.symbol]||(d[u.symbol]=[]),d[u.symbol].push(u))});const f=[];return Object.entries(d).forEach(([u,m])=>{const _=m.filter(E=>E.side==="buy"&&E.price&&E.qty&&E.transaction_time).sort((E,y)=>new Date(E.transaction_time).getTime()-new Date(y.transaction_time).getTime()),x=m.filter(E=>E.side==="sell"&&E.price&&E.qty&&E.transaction_time).sort((E,y)=>new Date(E.transaction_time).getTime()-new Date(y.transaction_time).getTime());for(;_.length&&x.length;){const E=_.shift(),y=x.shift(),h=Math.min(Number(E.qty),Number(y.qty)),D=Number(E.price),j=Number(y.price),H=(j-D)*h;f.push({symbol:u,buyTime:E.transaction_time,sellTime:y.transaction_time,qty:h,buyPrice:D,sellPrice:j,profit:H})}}),f}const $0=()=>{const[o,d]=T.useState(null),[f,u]=T.useState([]),[m,_]=T.useState(null),[x,E]=T.useState(null),[y,h]=T.useState(!0),[D,j]=T.useState(null),[H,F]=T.useState("1M"),[k,q]=T.useState("none"),[X,K]=T.useState(!1),[G,J]=T.useState(""),[pe,de]=T.useState(""),[ve,ee]=T.useState(""),[Te,qe]=T.useState(""),[Je,ct]=T.useState(""),[Be,Ht]=T.useState(""),[rt,dt]=T.useState(null),[R,B]=T.useState(null),[W,he]=T.useState(new Date),fe="https://portfoliowebsitebackend-production-fa3b.up.railway.app",v=new Date,z=v.toISOString().slice(0,10),Y=new Date(v);Y.setDate(v.getDate()+1);const V=Y.toISOString().slice(0,10),I=k==="range"&&!!(G&&pe),se=k==="day"&&!!ve,_e=k==="day"?"1Min":k==="range"?"1D":H==="1D"?"1Min":"1D",We=k==="day"?"1D":k==="range"?"ALL":H,Me=_e==="1Min";T.useEffect(()=>{if(k==="day"&&!ve||k==="range"&&!(G&&pe))return;(async()=>{h(!0),j(null),_(null),E(null);try{const L=new URLSearchParams({period:We,timeframe:_e});se?L.set("day",ve):I&&(L.set("start",G),L.set("end",pe));const ne=[fetch(`${fe}/api/account`),fetch(`${fe}/api/positions`),fetch(`${fe}/api/portfolio-history?${L.toString()}`)];let te=null;if(I){const ot=new Date(G);ot.setDate(ot.getDate()-1);const Gt=ot.toISOString().slice(0,10),Pt=new URLSearchParams({period:"1D",timeframe:"1D",start:Gt,end:Gt});ne.push(fetch(`${fe}/api/portfolio-history?${Pt.toString()}`))}const[Ye,xe,Ge,...Se]=await Promise.all(ne);if(te=I?Se[0]:null,!Ye.ok||!xe.ok||!Ge.ok)throw new Error("Failed to fetch data from backend");const kt=await Ye.json(),nn=await xe.json(),sn=await Ge.json();let ya=null;if(I&&te&&te.ok){const ot=await te.json();if(ot.equity&&ot.equity.length>0){const Gt=ot.equity[ot.equity.length-1];Gt!==0&&(ya=Gt)}}d(kt),u(nn),_(sn),E(ya)}catch(L){j(L instanceof Error?L.message:"An error occurred"),console.error("Error fetching trading data:",L)}finally{h(!1)}})()},[H,G,pe,ve,We,_e,se,I,fe]);const ga=C=>{const L=new Date(W);C==="prev"?L.setDate(L.getDate()-1):L.setDate(L.getDate()+1),L<=new Date&&(he(L),ee(L.toISOString().slice(0,10)),q("day"),J(""),de(""))},Xa=C=>{const L=new Date(W);if(C==="prev"?L.setDate(L.getDate()-7):L.setDate(L.getDate()+7),L<=new Date){he(L);const ne=new Date(L),te=new Date(L);te.setDate(te.getDate()+6),te>new Date&&te.setTime(new Date().getTime()),J(ne.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},ul=C=>{const L=new Date(W);if(C==="prev"?L.setMonth(L.getMonth()-1):L.setMonth(L.getMonth()+1),L<=new Date){he(L);const ne=new Date(L.getFullYear(),L.getMonth(),1),te=new Date(L.getFullYear(),L.getMonth()+1,0);te>new Date&&te.setTime(new Date().getTime()),J(ne.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},tn=C=>{const L=new Date(W);if(C==="prev"?L.setMonth(L.getMonth()-3):L.setMonth(L.getMonth()+3),L<=new Date){he(L);const ne=new Date(L.getFullYear(),L.getMonth(),1),te=new Date(L.getFullYear(),L.getMonth()+3,0);te>new Date&&te.setTime(new Date().getTime()),J(ne.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},Jt=()=>{if(m&&m.equity&&m.equity.length>0){const C=I&&x!==null?x:m.equity[0],ne=m.equity[m.equity.length-1]-C,te=C>0?ne/C*100:0;if(k!=="none")return{totalReturn:ne,totalReturnPct:te}}if(!o)return{totalReturn:0,totalReturnPct:0};if(H==="1D"){const C=parseFloat(o.equity),L=parseFloat(o.last_equity),ne=C-L,te=ne/L*100;return{totalReturn:ne,totalReturnPct:te}}if(m&&m.equity&&m.equity.length>0){const C=m.equity[0],ne=parseFloat(o.equity)-C,te=ne/C*100;return{totalReturn:ne,totalReturnPct:te}}return{totalReturn:0,totalReturnPct:0}},ze=C=>{const L=typeof C=="string"?parseFloat(C):C;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(L)},cl=C=>C==null||C===""?"—":ze(C),dl=C=>{const L=typeof C=="string"?parseFloat(C):C;return`${L>=0?"+":""}${L.toFixed(2)}%`},[fl,an]=T.useState([]),[ln,ml]=T.useState(!1),[ii,si]=T.useState(null);if(T.useEffect(()=>{ml(!0),si(null);const C=new URLSearchParams;if(C.set("activity_types","FILL"),C.set("category","trade_activity"),C.set("direction","desc"),C.set("page_size","1000"),k==="day"&&ve)C.set("date",ve);else if(k==="range"&&G&&pe)C.set("after",G),C.set("until",pe);else if(H!=="ALL"){let L=new Date;H==="1D"&&L.setDate(L.getDate()-1),H==="1W"&&L.setDate(L.getDate()-7),H==="1M"&&L.setMonth(L.getMonth()-1),H==="3M"&&L.setMonth(L.getMonth()-3),C.set("after",L.toISOString().slice(0,10)),C.set("until",z)}fetch(`${fe}/api/account-activities?${C.toString()}`).then(L=>{if(!L.ok)throw new Error("Failed to fetch activities");return L.json()}).then(L=>an(Array.isArray(L)?L:[])).catch(L=>si(L.message)).finally(()=>ml(!1))},[fe,k,ve,G,pe,H,z]),y)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white text-xl",children:"Loading trading data..."})});if(D)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-red-400 text-xl",children:["Error: ",D]})});const{totalReturn:it,totalReturnPct:ri}=Jt(),oi=!!m?.equity?.length,ui=k!=="none"&&oi?m.equity[m.equity.length-1]:o?.equity,pl=k!=="none"?null:o?.cash;return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-2",children:"Trading Dashboard"}),s.jsx("p",{className:"text-sm sm:text-base text-slate-400",children:"Alpaca Paper Trading Account Performance"})]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8",children:[s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Portfolio Value"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:cl(ui)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Cash"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:cl(pl)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Total Return"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${it>=0?"text-green-400":"text-red-400"}`,children:ze(it)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Return %"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${ri>=0?"text-green-400":"text-red-400"}`,children:dl(ri)})]})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Portfolio Performance"}),s.jsxs("div",{className:"flex gap-1 sm:gap-2 flex-wrap items-center",children:[["1D","1W","1M","3M","ALL"].map(C=>{const L=(C==="1D"||C==="1W"||C==="1M"||C==="3M")&&H===C;return s.jsxs("div",{className:"flex items-center gap-1",children:[L&&s.jsx("button",{onClick:()=>{C==="1D"?ga("prev"):C==="1W"?Xa("prev"):C==="1M"?ul("prev"):C==="3M"&&tn("prev")},className:"px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors",children:"←"}),s.jsx("button",{onClick:()=>{F(C),q("none"),ee(""),J(""),de(""),he(new Date),E(null)},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${H===C&&k==="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:C}),L&&s.jsx("button",{onClick:()=>{C==="1D"?ga("next"):C==="1W"?Xa("next"):C==="1M"?ul("next"):C==="3M"&&tn("next")},className:"px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors",children:"→"})]},C)}),s.jsxs("div",{className:"relative",children:[s.jsx("button",{type:"button",onClick:()=>{K(C=>{const L=!C;return L&&(qe(G),ct(pe),Ht(ve)),L})},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${k!=="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:"Custom ▾"}),X&&s.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10 p-3 space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date (minute)"}),s.jsx("input",{type:"date",value:Be,onChange:C=>Ht(C.target.value),max:z,placeholder:"yyyy-mm-dd",className:"w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("button",{type:"button",onClick:()=>{!Be||Be>z||(q("day"),ee(Be),J(""),de(""),K(!1))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!Be||Be>z,children:"Apply custom date"})]}),s.jsxs("div",{className:"border-t border-slate-800 pt-3 space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date range (daily)"}),s.jsxs("div",{className:"flex gap-2 min-w-0",children:[s.jsx("input",{type:"date",value:Te,onChange:C=>qe(C.target.value),max:V,placeholder:"yyyy-mm-dd",className:"flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("input",{type:"date",value:Je,onChange:C=>ct(C.target.value),max:V,placeholder:"yyyy-mm-dd",className:"flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"})]}),s.jsx("button",{type:"button",onClick:()=>{Te&&Je&&(Te>V||Je>V||(q("range"),J(Te),de(Je),ee(""),K(!1)))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!(Te&&Je)||Te>V||Je>V,children:"Apply date range"})]}),s.jsx("button",{type:"button",onClick:()=>{q("none"),ee(""),J(""),de(""),Ht(""),qe(""),ct(""),K(!1)},className:"w-full text-sm px-3 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600",children:"Clear custom"})]})]})]})]}),m&&m.equity&&m.equity.length>0?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"relative bg-slate-900/50 rounded-lg p-4 pt-2 flex",onMouseLeave:()=>{dt(null),B(null)},children:[s.jsx("div",{className:"relative flex flex-col justify-between h-48 sm:h-64 mr-6",style:{minWidth:"70px"},children:(()=>{const C=Math.min(...m.equity),ne=Math.max(...m.equity)-C,te=5,Ye=[];for(let xe=te;xe>=0;xe--){const Ge=C+xe*ne/te;Ye.push(s.jsx("div",{className:"text-xs text-slate-400",style:{position:"relative",top:0,marginBottom:xe>0?`${1/te*100}%`:0,height:"calc(100% / 6)",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:ze(Ge)},xe))}return Ye})()}),s.jsxs("div",{className:"relative h-48 sm:h-64 w-full",children:[s.jsx("svg",{width:"100%",height:"100%",className:"overflow-visible",style:{zIndex:1},onMouseMove:C=>{const ne=C.currentTarget.getBoundingClientRect(),te=(C.clientX-ne.left)/ne.width*100,Ye=Math.round(te/100*(m.equity.length-1));Ye>=0&&Ye<m.equity.length&&(dt(Ye),B({x:C.clientX-ne.left,y:C.clientY-ne.top}))},children:m.equity.map((C,L)=>{if(L===0)return null;const ne=m.equity[L-1],te=(L-1)/(m.equity.length-1)*100,Ye=L/(m.equity.length-1)*100,xe=Math.min(...m.equity),Se=Math.max(...m.equity)-xe,kt=Se>0?(1-(ne-xe)/Se)*80+10:50,nn=Se>0?(1-(C-xe)/Se)*80+10:50,sn=m.equity[0],ot=m.equity[m.equity.length-1]>=sn;return s.jsx("line",{x1:`${te}%`,y1:`${kt}%`,x2:`${Ye}%`,y2:`${nn}%`,stroke:ot?"#4ade80":"#f87171",strokeWidth:"2"},L)})}),s.jsx("div",{className:"absolute bottom-1 left-0 right-0 flex justify-between px-2 text-xs text-slate-500",children:(()=>{const C=[],L=m.equity.length,ne=Math.max(1,Math.ceil(L/6));for(let te=0;te<L&&!(te>=L);te+=ne){const Ye=L>1?te/(L-1)*100:0,xe=te===0,Ge=te>=L-ne;C.push(s.jsx("div",{className:"absolute text-xs text-slate-500 whitespace-nowrap",style:{left:xe?"0":Ge?"auto":`${Ye}%`,right:Ge?"0":"auto",transform:xe||Ge?"translateX(0)":"translateX(-50%)"},children:Me?new Date(m.timestamp[te]*1e3).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):new Date(m.timestamp[te]*1e3).toLocaleDateString("en-US",{month:"short",day:"numeric"})},te))}return C})()}),rt!==null&&R&&m.profit_loss_pct&&s.jsxs("div",{className:"absolute bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white pointer-events-none",style:{left:`${R.x}px`,top:`${R.y-60}px`,transform:"translateX(-50%)"},children:[s.jsx("div",{className:"text-xs text-slate-400 mb-1",children:Me?new Date(m.timestamp[rt]*1e3).toLocaleString():new Date(m.timestamp[rt]*1e3).toLocaleDateString()}),s.jsx("div",{className:"font-semibold",children:dl(m.profit_loss_pct[rt])}),s.jsx("div",{className:"text-xs text-slate-400",children:ze(m.equity[rt])})]})]})]}),s.jsxs("div",{className:"flex justify-between text-xs sm:text-sm text-slate-400 mt-6 mb-2 px-2",children:[s.jsxs("span",{className:"truncate",children:["Start: ",ze(I&&x!==null?x:m.equity[0])]}),s.jsxs("span",{className:"truncate text-right",children:["Current: ",ze(m.equity[m.equity.length-1])]})]}),s.jsxs("div",{className:"flex justify-between text-xs text-slate-500 px-2 hidden",children:[s.jsx("span",{children:Me?new Date(m.timestamp[0]*1e3).toLocaleString():new Date(m.timestamp[0]*1e3).toLocaleDateString()}),s.jsx("span",{children:Me?new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleString():new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleDateString()})]}),H==="ALL"&&k==="none"&&s.jsxs("div",{className:"mt-4 p-3 bg-yellow-900/40 rounded-lg border border-yellow-700 text-sm flex items-center gap-2",children:[s.jsx("span",{className:"text-yellow-400 text-lg",children:"⚠️"}),s.jsx("span",{className:"text-yellow-200 font-semibold",children:"Early Performance:"}),s.jsx("span",{className:"text-yellow-100",children:"The portfolio experienced a ~20% decline in the first few months due to trading bugs."})]})]}):s.jsx("div",{className:"h-64 flex items-center justify-center text-slate-400",children:y?"Loading chart data...":"No data available for this period"})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-6",children:"Matched Trades"}),ln?s.jsx("p",{className:"text-slate-400",children:"Loading activities..."}):ii?s.jsxs("p",{className:"text-red-400",children:["Error: ",ii]}):fl.length===0?s.jsx("p",{className:"text-slate-400",children:"No activities found."}):s.jsxs(s.Fragment,{children:[(()=>{const C=ym(fl),L=C.filter(Se=>Se.profit>0),ne=C.filter(Se=>Se.profit<0),te=C.length?L.length/C.length*100:0,Ye=L.length?L.reduce((Se,kt)=>Se+kt.profit,0)/L.length:0,xe=ne.length?ne.reduce((Se,kt)=>Se+kt.profit,0)/ne.length:0,Ge=C.length?C.reduce((Se,kt)=>Se+kt.profit,0)/C.length:0;return s.jsxs("div",{className:"mb-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6",children:[s.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-4 border border-slate-700",children:[s.jsx("div",{className:"text-slate-400 text-xs mb-1",children:"Win Rate"}),s.jsxs("div",{className:"text-2xl font-bold text-white",children:[te.toFixed(1),"%"]})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-4 border border-slate-700",children:[s.jsx("div",{className:"text-slate-400 text-xs mb-1",children:"Avg Win"}),s.jsx("div",{className:"text-2xl font-bold text-green-400",children:ze(Ye)})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-4 border border-slate-700",children:[s.jsx("div",{className:"text-slate-400 text-xs mb-1",children:"Avg Loss"}),s.jsx("div",{className:"text-2xl font-bold text-red-400",children:ze(xe)})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-4 border border-slate-700",children:[s.jsx("div",{className:"text-slate-400 text-xs mb-1",children:"EV"}),s.jsx("div",{className:`text-2xl font-bold ${Ge>=0?"text-green-400":"text-red-400"}`,children:ze(Ge)})]})]})})(),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-700",children:[s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Symbol"}),s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Buy Time"}),s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Sell Time"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Qty"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Buy Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Sell Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Profit"})]})}),s.jsx("tbody",{children:ym(fl).map((C,L)=>s.jsxs("tr",{className:"border-b border-slate-700/50",children:[s.jsx("td",{className:"py-3 px-4 text-white font-medium",children:C.symbol}),s.jsx("td",{className:"py-3 px-4 text-slate-300",children:new Date(C.buyTime).toLocaleString()}),s.jsx("td",{className:"py-3 px-4 text-slate-300",children:new Date(C.sellTime).toLocaleString()}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:C.qty}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ze(C.buyPrice)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ze(C.sellPrice)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${C.profit>=0?"text-green-400":"text-red-400"}`,children:ze(C.profit)})]},C.symbol+C.buyTime+C.sellTime+L))})]})})]})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-6",children:"Current Positions"}),f.length===0?s.jsx("p",{className:"text-slate-400",children:"No open positions"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"block md:hidden space-y-4",children:f.map(C=>{const L=parseFloat(C.unrealized_pl),ne=parseFloat(C.unrealized_plpc)*100;return s.jsxs("div",{className:"bg-slate-900/50 rounded-lg p-4 border border-slate-600",children:[s.jsxs("div",{className:"flex justify-between items-start mb-3",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-bold text-white",children:C.symbol}),s.jsxs("p",{className:"text-xs text-slate-400",children:["Qty: ",C.qty]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:`text-sm font-bold ${L>=0?"text-green-400":"text-red-400"}`,children:ze(C.unrealized_pl)}),s.jsx("p",{className:`text-xs font-semibold ${ne>=0?"text-green-400":"text-red-400"}`,children:dl(ne)})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Avg Price"}),s.jsx("p",{className:"text-white font-semibold",children:ze(C.avg_entry_price)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Current Price"}),s.jsx("p",{className:"text-white font-semibold",children:ze(C.current_price)})]}),s.jsxs("div",{className:"col-span-2",children:[s.jsx("p",{className:"text-slate-400",children:"Market Value"}),s.jsx("p",{className:"text-white font-semibold",children:ze(C.market_value)})]})]})]},C.symbol)})}),s.jsx("div",{className:"hidden md:block overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-700",children:[s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Symbol"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Quantity"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Avg Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Current Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Market Value"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L %"})]})}),s.jsx("tbody",{children:f.map(C=>{const L=parseFloat(C.unrealized_pl),ne=parseFloat(C.unrealized_plpc)*100;return s.jsxs("tr",{className:"border-b border-slate-700/50",children:[s.jsx("td",{className:"py-3 px-4 text-white font-medium",children:C.symbol}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:C.qty}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ze(C.avg_entry_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ze(C.current_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ze(C.market_value)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${L>=0?"text-green-400":"text-red-400"}`,children:ze(C.unrealized_pl)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${ne>=0?"text-green-400":"text-red-400"}`,children:dl(ne)})]},C.symbol)})})]})})]})]})]})})},I0=()=>s.jsxs(D0,{basename:"/portfolio_website/",children:[s.jsx(q0,{}),s.jsx("div",{className:"pt-16",children:s.jsxs(i0,{children:[s.jsx(Va,{path:"",element:s.jsx(B0,{})}),s.jsx(Va,{path:"about",element:s.jsx(Y0,{})}),s.jsx(Va,{path:"projects",element:s.jsx(G0,{})}),s.jsx(Va,{path:"projects/project-demo/:projectId",element:s.jsx(J0,{})}),s.jsx(Va,{path:"trading",element:s.jsx($0,{})}),s.jsx(Va,{path:"contact",element:s.jsx(P0,{})}),s.jsx(Va,{path:"resume",element:s.jsx(W0,{})})]})})]});s_.createRoot(document.getElementById("root")).render(s.jsx(T.StrictMode,{children:s.jsx(I0,{})}));
