(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))u(_);new MutationObserver(_=>{for(const y of _)if(y.type==="childList")for(const x of y.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(_){const y={};return _.integrity&&(y.integrity=_.integrity),_.referrerPolicy&&(y.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?y.credentials="include":_.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function u(_){if(_.ep)return;_.ep=!0;const y=f(_);fetch(_.href,y)}})();function ih(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var No={exports:{}},On={};var Pf;function rh(){if(Pf)return On;Pf=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,_,y){var x=null;if(y!==void 0&&(x=""+y),_.key!==void 0&&(x=""+_.key),"key"in _){y={};for(var S in _)S!=="key"&&(y[S]=_[S])}else y=_;return _=y.ref,{$$typeof:r,type:u,key:x,ref:_!==void 0?_:null,props:y}}return On.Fragment=d,On.jsx=f,On.jsxs=f,On}var If;function sh(){return If||(If=1,No.exports=rh()),No.exports}var o=sh(),Ro={exports:{}},le={};var $f;function oh(){if($f)return le;$f=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),Y=Symbol.iterator;function q(b){return b===null||typeof b!="object"?null:(b=Y&&b[Y]||b["@@iterator"],typeof b=="function"?b:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,K={};function W(b,D,H){this.props=b,this.context=D,this.refs=K,this.updater=H||F}W.prototype.isReactComponent={},W.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},W.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Q(){}Q.prototype=W.prototype;function I(b,D,H){this.props=b,this.context=D,this.refs=K,this.updater=H||F}var we=I.prototype=new Q;we.constructor=I,V(we,W.prototype),we.isPureReactComponent=!0;var be=Array.isArray;function Re(){}var te={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function se(b,D,H){var X=H.ref;return{$$typeof:r,type:b,key:D,ref:X!==void 0?X:null,props:H}}function Ie(b,D){return se(b.type,D,b.props)}function gt(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Qe(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return D[H]})}var Lt=/\/+/g;function L(b,D){return typeof b=="object"&&b!==null&&b.key!=null?Qe(""+b.key):D.toString(36)}function O(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Re,Re):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function h(b,D,H,X,ae){var re=typeof b;(re==="undefined"||re==="boolean")&&(b=null);var fe=!1;if(b===null)fe=!0;else switch(re){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(b.$$typeof){case r:case d:fe=!0;break;case R:return fe=b._init,h(fe(b._payload),D,H,X,ae)}}if(fe)return ae=ae(b),fe=X===""?"."+L(b,0):X,be(ae)?(H="",fe!=null&&(H=fe.replace(Lt,"$&/")+"/"),h(ae,D,H,"",function(Bl){return Bl})):ae!=null&&(gt(ae)&&(ae=Ie(ae,H+(ae.key==null||b&&b.key===ae.key?"":(""+ae.key).replace(Lt,"$&/")+"/")+fe)),D.push(ae)),1;fe=0;var Ge=X===""?".":X+":";if(be(b))for(var ze=0;ze<b.length;ze++)X=b[ze],re=Ge+L(X,ze),fe+=h(X,D,H,re,ae);else if(ze=q(b),typeof ze=="function")for(b=ze.call(b),ze=0;!(X=b.next()).done;)X=X.value,re=Ge+L(X,ze++),fe+=h(X,D,H,re,ae);else if(re==="object"){if(typeof b.then=="function")return h(O(b),D,H,X,ae);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return fe}function E(b,D,H){if(b==null)return b;var X=[],ae=0;return h(b,X,"","",function(re){return D.call(H,re,ae++)}),X}function k(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var G=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},$={map:E,forEach:function(b,D,H){E(b,function(){D.apply(this,arguments)},H)},count:function(b){var D=0;return E(b,function(){D++}),D},toArray:function(b){return E(b,function(D){return D})||[]},only:function(b){if(!gt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return le.Activity=j,le.Children=$,le.Component=W,le.Fragment=f,le.Profiler=_,le.PureComponent=I,le.StrictMode=u,le.Suspense=g,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,le.__COMPILER_RUNTIME={__proto__:null,c:function(b){return te.H.useMemoCache(b)}},le.cache=function(b){return function(){return b.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(b,D,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=V({},b.props),ae=b.key;if(D!=null)for(re in D.key!==void 0&&(ae=""+D.key),D)!Ce.call(D,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&D.ref===void 0||(X[re]=D[re]);var re=arguments.length-2;if(re===1)X.children=H;else if(1<re){for(var fe=Array(re),Ge=0;Ge<re;Ge++)fe[Ge]=arguments[Ge+2];X.children=fe}return se(b.type,ae,X)},le.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:y,_context:b},b},le.createElement=function(b,D,H){var X,ae={},re=null;if(D!=null)for(X in D.key!==void 0&&(re=""+D.key),D)Ce.call(D,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ae[X]=D[X]);var fe=arguments.length-2;if(fe===1)ae.children=H;else if(1<fe){for(var Ge=Array(fe),ze=0;ze<fe;ze++)Ge[ze]=arguments[ze+2];ae.children=Ge}if(b&&b.defaultProps)for(X in fe=b.defaultProps,fe)ae[X]===void 0&&(ae[X]=fe[X]);return se(b,re,ae)},le.createRef=function(){return{current:null}},le.forwardRef=function(b){return{$$typeof:S,render:b}},le.isValidElement=gt,le.lazy=function(b){return{$$typeof:R,_payload:{_status:-1,_result:b},_init:k}},le.memo=function(b,D){return{$$typeof:m,type:b,compare:D===void 0?null:D}},le.startTransition=function(b){var D=te.T,H={};te.T=H;try{var X=b(),ae=te.S;ae!==null&&ae(H,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Re,G)}catch(re){G(re)}finally{D!==null&&H.types!==null&&(D.types=H.types),te.T=D}},le.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},le.use=function(b){return te.H.use(b)},le.useActionState=function(b,D,H){return te.H.useActionState(b,D,H)},le.useCallback=function(b,D){return te.H.useCallback(b,D)},le.useContext=function(b){return te.H.useContext(b)},le.useDebugValue=function(){},le.useDeferredValue=function(b,D){return te.H.useDeferredValue(b,D)},le.useEffect=function(b,D){return te.H.useEffect(b,D)},le.useEffectEvent=function(b){return te.H.useEffectEvent(b)},le.useId=function(){return te.H.useId()},le.useImperativeHandle=function(b,D,H){return te.H.useImperativeHandle(b,D,H)},le.useInsertionEffect=function(b,D){return te.H.useInsertionEffect(b,D)},le.useLayoutEffect=function(b,D){return te.H.useLayoutEffect(b,D)},le.useMemo=function(b,D){return te.H.useMemo(b,D)},le.useOptimistic=function(b,D){return te.H.useOptimistic(b,D)},le.useReducer=function(b,D,H){return te.H.useReducer(b,D,H)},le.useRef=function(b){return te.H.useRef(b)},le.useState=function(b){return te.H.useState(b)},le.useSyncExternalStore=function(b,D,H){return te.H.useSyncExternalStore(b,D,H)},le.useTransition=function(){return te.H.useTransition()},le.version="19.2.3",le}var em;function Go(){return em||(em=1,Ro.exports=oh()),Ro.exports}var M=Go(),jo={exports:{}},Mn={},Co={exports:{}},Oo={};var tm;function uh(){return tm||(tm=1,(function(r){function d(h,E){var k=h.length;h.push(E);e:for(;0<k;){var G=k-1>>>1,$=h[G];if(0<_($,E))h[G]=E,h[k]=$,k=G;else break e}}function f(h){return h.length===0?null:h[0]}function u(h){if(h.length===0)return null;var E=h[0],k=h.pop();if(k!==E){h[0]=k;e:for(var G=0,$=h.length,b=$>>>1;G<b;){var D=2*(G+1)-1,H=h[D],X=D+1,ae=h[X];if(0>_(H,k))X<$&&0>_(ae,H)?(h[G]=ae,h[X]=k,G=X):(h[G]=H,h[D]=k,G=D);else if(X<$&&0>_(ae,k))h[G]=ae,h[X]=k,G=X;else break e}}return E}function _(h,E){var k=h.sortIndex-E.sortIndex;return k!==0?k:h.id-E.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;r.unstable_now=function(){return y.now()}}else{var x=Date,S=x.now();r.unstable_now=function(){return x.now()-S}}var g=[],m=[],R=1,j=null,Y=3,q=!1,F=!1,V=!1,K=!1,W=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function we(h){for(var E=f(m);E!==null;){if(E.callback===null)u(m);else if(E.startTime<=h)u(m),E.sortIndex=E.expirationTime,d(g,E);else break;E=f(m)}}function be(h){if(V=!1,we(h),!F)if(f(g)!==null)F=!0,Re||(Re=!0,Qe());else{var E=f(m);E!==null&&O(be,E.startTime-h)}}var Re=!1,te=-1,Ce=5,se=-1;function Ie(){return K?!0:!(r.unstable_now()-se<Ce)}function gt(){if(K=!1,Re){var h=r.unstable_now();se=h;var E=!0;try{e:{F=!1,V&&(V=!1,Q(te),te=-1),q=!0;var k=Y;try{t:{for(we(h),j=f(g);j!==null&&!(j.expirationTime>h&&Ie());){var G=j.callback;if(typeof G=="function"){j.callback=null,Y=j.priorityLevel;var $=G(j.expirationTime<=h);if(h=r.unstable_now(),typeof $=="function"){j.callback=$,we(h),E=!0;break t}j===f(g)&&u(g),we(h)}else u(g);j=f(g)}if(j!==null)E=!0;else{var b=f(m);b!==null&&O(be,b.startTime-h),E=!1}}break e}finally{j=null,Y=k,q=!1}E=void 0}}finally{E?Qe():Re=!1}}}var Qe;if(typeof I=="function")Qe=function(){I(gt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,L=Lt.port2;Lt.port1.onmessage=gt,Qe=function(){L.postMessage(null)}}else Qe=function(){W(gt,0)};function O(h,E){te=W(function(){h(r.unstable_now())},E)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(h){h.callback=null},r.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<h?Math.floor(1e3/h):5},r.unstable_getCurrentPriorityLevel=function(){return Y},r.unstable_next=function(h){switch(Y){case 1:case 2:case 3:var E=3;break;default:E=Y}var k=Y;Y=E;try{return h()}finally{Y=k}},r.unstable_requestPaint=function(){K=!0},r.unstable_runWithPriority=function(h,E){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var k=Y;Y=h;try{return E()}finally{Y=k}},r.unstable_scheduleCallback=function(h,E,k){var G=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?G+k:G):k=G,h){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=k+$,h={id:R++,callback:E,priorityLevel:h,startTime:k,expirationTime:$,sortIndex:-1},k>G?(h.sortIndex=k,d(m,h),f(g)===null&&h===f(m)&&(V?(Q(te),te=-1):V=!0,O(be,k-G))):(h.sortIndex=$,d(g,h),F||q||(F=!0,Re||(Re=!0,Qe()))),h},r.unstable_shouldYield=Ie,r.unstable_wrapCallback=function(h){var E=Y;return function(){var k=Y;Y=E;try{return h.apply(this,arguments)}finally{Y=k}}}})(Oo)),Oo}var am;function ch(){return am||(am=1,Co.exports=uh()),Co.exports}var Mo={exports:{}},Pe={};var lm;function dh(){if(lm)return Pe;lm=1;var r=Go();function d(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)m+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},_=Symbol.for("react.portal");function y(g,m,R){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:j==null?null:""+j,children:g,containerInfo:m,implementation:R}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Pe.createPortal=function(g,m){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return y(g,m,null,R)},Pe.flushSync=function(g){var m=x.T,R=u.p;try{if(x.T=null,u.p=2,g)return g()}finally{x.T=m,u.p=R,u.d.f()}},Pe.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(g,m))},Pe.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},Pe.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var R=m.as,j=S(R,m.crossOrigin),Y=typeof m.integrity=="string"?m.integrity:void 0,q=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;R==="style"?u.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:j,integrity:Y,fetchPriority:q}):R==="script"&&u.d.X(g,{crossOrigin:j,integrity:Y,fetchPriority:q,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pe.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var R=S(m.as,m.crossOrigin);u.d.M(g,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(g)},Pe.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var R=m.as,j=S(R,m.crossOrigin);u.d.L(g,R,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pe.preloadModule=function(g,m){if(typeof g=="string")if(m){var R=S(m.as,m.crossOrigin);u.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(g)},Pe.requestFormReset=function(g){u.d.r(g)},Pe.unstable_batchedUpdates=function(g,m){return g(m)},Pe.useFormState=function(g,m,R){return x.H.useFormState(g,m,R)},Pe.useFormStatus=function(){return x.H.useHostTransitionStatus()},Pe.version="19.2.3",Pe}var nm;function fh(){if(nm)return Mo.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Mo.exports=dh(),Mo.exports}var im;function mh(){if(im)return Mn;im=1;var r=ch(),d=Go(),f=fh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(y(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return g(n),e;if(i===l)return g(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,c=n.child;c;){if(c===a){s=!0,a=n,l=i;break}if(c===l){s=!0,l=n,a=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===a){s=!0,a=i,l=n;break}if(c===l){s=!0,l=i,a=n;break}c=c.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,Y=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),I=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function L(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case W:return"Profiler";case K:return"StrictMode";case be:return"Suspense";case Re:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case I:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:L(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return L(e(t))}catch{}}return null}var O=Array.isArray,h=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},G=[],$=-1;function b(e){return{current:e}}function D(e){0>$||(e.current=G[$],G[$]=null,$--)}function H(e,t){$++,G[$]=e.current,e.current=t}var X=b(null),ae=b(null),re=b(null),fe=b(null);function Ge(e,t){switch(H(re,t),H(ae,e),H(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vf(t),e=xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(X),H(X,e)}function ze(){D(X),D(ae),D(re)}function Bl(e){e.memoizedState!==null&&H(fe,e);var t=X.current,a=xf(t,e.type);t!==a&&(H(ae,e),H(X,a))}function Ln(e){ae.current===e&&(D(X),D(ae)),fe.current===e&&(D(fe),Nn._currentValue=k)}var or,Fo;function Oa(e){if(or===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);or=t&&t[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+or+e+Fo}var ur=!1;function cr(e,t){if(!e||ur)return"";ur=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(C){var N=C}Reflect.construct(e,[],B)}else{try{B.call()}catch(C){N=C}e.call(B.prototype)}}else{try{throw Error()}catch(C){N=C}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(C){if(C&&N&&typeof C.stack=="string")return[C.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],c=i[1];if(s&&c){var p=s.split(`
`),A=c.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===A.length)for(l=p.length-1,n=A.length-1;1<=l&&0<=n&&p[l]!==A[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==A[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==A[n]){var z=`
`+p[l].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=l&&0<=n);break}}}finally{ur=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Oa(a):""}function km(e,t){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return e.child!==t&&t!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return cr(e.type,!1);case 11:return cr(e.type.render,!1);case 1:return cr(e.type,!0);case 31:return Oa("Activity");default:return""}}function Wo(e){try{var t="",a=null;do t+=km(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var dr=Object.prototype.hasOwnProperty,fr=r.unstable_scheduleCallback,mr=r.unstable_cancelCallback,Bm=r.unstable_shouldYield,Lm=r.unstable_requestPaint,st=r.unstable_now,Hm=r.unstable_getCurrentPriorityLevel,Po=r.unstable_ImmediatePriority,Io=r.unstable_UserBlockingPriority,Hn=r.unstable_NormalPriority,Ym=r.unstable_LowPriority,$o=r.unstable_IdlePriority,qm=r.log,Gm=r.unstable_setDisableYieldValue,Ll=null,ot=null;function ia(e){if(typeof qm=="function"&&Gm(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ll,e)}catch{}}var ut=Math.clz32?Math.clz32:Qm,Xm=Math.log,Vm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Xm(e)/Vm|0)|0}var Yn=256,qn=262144,Gn=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ma(l):(s&=c,s!==0?n=Ma(s):a||(a=c&~e,a!==0&&(n=Ma(a))))):(c=l&~i,c!==0?n=Ma(c):s!==0?n=Ma(s):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Hl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eu(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function _r(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Km(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,A=e.hiddenUpdates;for(a=s&~a;0<a;){var z=31-ut(a),B=1<<z;c[z]=0,p[z]=-1;var N=A[z];if(N!==null)for(A[z]=null,z=0;z<N.length;z++){var C=N[z];C!==null&&(C.lane&=-536870913)}a&=~B}l!==0&&tu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function tu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ut(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function au(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ut(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function lu(e,t){var a=t&-t;return a=(a&42)!==0?1:pr(a),(a&(e.suspendedLanes|t))!==0?0:a}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nu(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:Vf(e.type))}function iu(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var ra=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ra,et="__reactProps$"+ra,Pa="__reactContainer$"+ra,gr="__reactEvents$"+ra,Jm="__reactListeners$"+ra,Fm="__reactHandles$"+ra,ru="__reactResources$"+ra,ql="__reactMarker$"+ra;function yr(e){delete e[Ze],delete e[et],delete e[gr],delete e[Jm],delete e[Fm]}function Ia(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Rf(e);e!==null;){if(a=e[Ze])return a;e=Rf(e)}return t}e=a,a=e.parentNode}return null}function $a(e){if(e=e[Ze]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function el(e){var t=e[ru];return t||(t=e[ru]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[ql]=!0}var su=new Set,ou={};function Da(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(ou[e]=t,e=0;e<t.length;e++)su.add(t[e])}var Wm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},cu={};function Pm(e){return dr.call(cu,e)?!0:dr.call(uu,e)?!1:Wm.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function Vn(e,t,a){if(Pm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){if(!e._valueTracker){var t=du(e)?"checked":"value";e._valueTracker=Im(e,t,""+e[t])}}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=du(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $m=/[\n"\\]/g;function bt(e){return e.replace($m,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vr(e,t,a,l,n,i,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?xr(e,s,yt(t)):a!=null?xr(e,s,yt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function mu(e,t,a,l,n,i,s,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){br(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),br(e)}function xr(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function _u(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function pu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(O(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),br(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var e_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||e_.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function gu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&hu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&hu(e,i,t[i])}function Sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return a_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yt(){}var wr=null;function Er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function yu(e){var t=$a(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(vr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[et]||null;if(!n)throw Error(u(90));vr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&fu(l)}break e;case"textarea":_u(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Tr=!1;function bu(e,t,a){if(Tr)return e(t,a);Tr=!0;try{var l=e(t);return l}finally{if(Tr=!1,(nl!==null||il!==null)&&(zi(),nl&&(t=nl,e=il,il=nl=null,yu(t),e)))for(t=0;t<e.length;t++)yu(e[t])}}function Xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[et]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ar=!1;if(qt)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){Ar=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{Ar=!1}var sa=null,Nr=null,Jn=null;function vu(){if(Jn)return Jn;var e,t=Nr,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return Jn=n.slice(e,1<l?1-l:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function xu(){return!1}function tt(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:xu,this.isPropagationStopped=xu,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=tt(za),Ql=j({},za,{view:0,detail:0}),l_=tt(Ql),Rr,jr,Zl,In=j({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(Rr=e.screenX-Zl.screenX,jr=e.screenY-Zl.screenY):jr=Rr=0,Zl=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:jr}}),Su=tt(In),n_=j({},In,{dataTransfer:0}),i_=tt(n_),r_=j({},Ql,{relatedTarget:0}),Cr=tt(r_),s_=j({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),o_=tt(s_),u_=j({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c_=tt(u_),d_=j({},za,{data:0}),wu=tt(d_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=__[e])?!!t[e]:!1}function Or(){return p_}var h_=j({},Ql,{key:function(e){if(e.key){var t=f_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Or,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g_=tt(h_),y_=j({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=tt(y_),b_=j({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Or}),v_=tt(b_),x_=j({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=tt(x_),w_=j({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E_=tt(w_),T_=j({},za,{newState:0,oldState:0}),A_=tt(T_),N_=[9,13,27,32],Mr=qt&&"CompositionEvent"in window,Kl=null;qt&&"documentMode"in document&&(Kl=document.documentMode);var R_=qt&&"TextEvent"in window&&!Kl,Tu=qt&&(!Mr||Kl&&8<Kl&&11>=Kl),Au=" ",Nu=!1;function Ru(e,t){switch(e){case"keyup":return N_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function j_(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Nu=!0,Au);case"textInput":return e=t.data,e===Au&&Nu?null:e;default:return null}}function C_(e,t){if(rl)return e==="compositionend"||!Mr&&Ru(e,t)?(e=vu(),Jn=Nr=sa=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O_[e.type]:t==="textarea"}function Ou(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=qi(t,"onChange"),0<t.length&&(a=new Pn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,Fl=null;function M_(e){_f(e,0)}function $n(e){var t=Gl(e);if(fu(t))return e}function Mu(e,t){if(e==="change")return t}var Du=!1;if(qt){var Dr;if(qt){var zr="oninput"in document;if(!zr){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),zr=typeof zu.oninput=="function"}Dr=zr}else Dr=!1;Du=Dr&&(!document.documentMode||9<document.documentMode)}function Uu(){Jl&&(Jl.detachEvent("onpropertychange",ku),Fl=Jl=null)}function ku(e){if(e.propertyName==="value"&&$n(Fl)){var t=[];Ou(t,Fl,e,Er(e)),bu(M_,t)}}function D_(e,t,a){e==="focusin"?(Uu(),Jl=t,Fl=a,Jl.attachEvent("onpropertychange",ku)):e==="focusout"&&Uu()}function z_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $n(Fl)}function U_(e,t){if(e==="click")return $n(t)}function k_(e,t){if(e==="input"||e==="change")return $n(t)}function B_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:B_;function Wl(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!dr.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var a=Bu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bu(a)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var L_=qt&&"documentMode"in document&&11>=document.documentMode,sl=null,kr=null,Pl=null,Br=!1;function qu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Br||sl==null||sl!==Zn(l)||(l=sl,"selectionStart"in l&&Ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pl&&Wl(Pl,l)||(Pl=l,l=qi(kr,"onSelect"),0<l.length&&(t=new Pn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=sl)))}function Ua(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},Lr={},Gu={};qt&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function ka(e){if(Lr[e])return Lr[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gu)return Lr[e]=t[a];return e}var Xu=ka("animationend"),Vu=ka("animationiteration"),Qu=ka("animationstart"),H_=ka("transitionrun"),Y_=ka("transitionstart"),q_=ka("transitioncancel"),Zu=ka("transitionend"),Ku=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hr.push("scrollEnd");function jt(e,t){Ku.set(e,t),Da(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],ul=0,Yr=0;function ti(){for(var e=ul,t=Yr=ul=0;t<e;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Ju(a,n,i)}}function ai(e,t,a,l){vt[ul++]=e,vt[ul++]=t,vt[ul++]=a,vt[ul++]=l,Yr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function qr(e,t,a,l){return ai(e,t,a,l),li(e)}function Ba(e,t){return ai(e,null,null,t),li(e)}function Ju(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<vn)throw vn=0,Ws=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cl={};function G_(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new G_(e,t,a,l)}function Gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")Gr(e)&&(s=1);else if(typeof e=="string")s=Kp(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=dt(31,a,t,n),e.elementType=se,e.lanes=i,e;case V:return La(a.children,n,i,t);case K:s=8,n|=24;break;case W:return e=dt(12,a,t,n|2),e.elementType=W,e.lanes=i,e;case be:return e=dt(13,a,t,n),e.elementType=be,e.lanes=i,e;case Re:return e=dt(19,a,t,n),e.elementType=Re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:s=10;break e;case Q:s=9;break e;case we:s=11;break e;case te:s=14;break e;case Ce:s=16,l=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=dt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function La(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Xr(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function Wu(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Vr(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pu=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wo(t)},Pu.set(e,t),t)}return{value:e,source:t,stack:Wo(t)}}var dl=[],fl=0,ii=null,Il=0,St=[],wt=0,oa=null,Mt=1,Dt="";function Xt(e,t){dl[fl++]=Il,dl[fl++]=ii,ii=e,Il=t}function Iu(e,t,a){St[wt++]=Mt,St[wt++]=Dt,St[wt++]=oa,oa=e;var l=Mt;e=Dt;var n=32-ut(l)-1;l&=~(1<<n),a+=1;var i=32-ut(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Mt=1<<32-ut(t)+n|a<<n|l,Dt=i+e}else Mt=1<<i|a<<n|l,Dt=e}function Qr(e){e.return!==null&&(Xt(e,1),Iu(e,1,0))}function Zr(e){for(;e===ii;)ii=dl[--fl],dl[fl]=null,Il=dl[--fl],dl[fl]=null;for(;e===oa;)oa=St[--wt],St[wt]=null,Dt=St[--wt],St[wt]=null,Mt=St[--wt],St[wt]=null}function $u(e,t){St[wt++]=Mt,St[wt++]=Dt,St[wt++]=oa,Mt=t.id,Dt=t.overflow,oa=e}var Ke=null,Ae=null,me=!1,ua=null,Et=!1,Kr=Error(u(519));function ca(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(xt(t,e)),Kr}function ec(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[et]=l,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ue(Sn[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),mu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),pu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||yf(t.textContent,a)?(l.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),l.onScroll!=null&&ue("scroll",t),l.onScrollEnd!=null&&ue("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||ca(e,!0)}function tc(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function ml(e){if(e!==Ke)return!1;if(!me)return tc(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fo(e.type,e.memoizedProps)),a=!a),a&&Ae&&ca(e),tc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Nf(e)}else t===27?(t=Ae,Ea(e.type)?(e=go,go=null,Ae=e):Ae=t):Ae=Ke?At(e.stateNode.nextSibling):null;return!0}function Ha(){Ae=Ke=null,me=!1}function Jr(){var e=ua;return e!==null&&(it===null?it=e:it.push.apply(it,e),ua=null),e}function $l(e){ua===null?ua=[e]:ua.push(e)}var Fr=b(null),Ya=null,Vt=null;function da(e,t,a){H(Fr,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=Fr.current,D(Fr)}function Wr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Pr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var p=0;p<t.length;p++)if(c.context===t[p]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Wr(i.return,a,e),l||(s=null);break e}i=c.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(u(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Wr(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function _l(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=n.type;ct(n.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(n===fe.current){if(s=n.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&Pr(t,e,a,l),t.flags|=262144}function ri(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ya=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return ac(Ya,e)}function si(e,t){return Ya===null&&qa(e),ac(e,t)}function ac(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(u(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var X_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},V_=r.unstable_scheduleCallback,Q_=r.unstable_NormalPriority,Be={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ir(){return{controller:new X_,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&V_(Q_,function(){e.controller.abort()})}var tn=null,$r=0,pl=0,hl=null;function Z_(e,t){if(tn===null){var a=tn=[];$r=0,pl=ao(),hl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $r++,t.then(lc,lc),t}function lc(){if(--$r===0&&tn!==null){hl!==null&&(hl.status="fulfilled");var e=tn;tn=null,pl=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function K_(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var nc=h.S;h.S=function(e,t){qd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z_(e,t),nc!==null&&nc(e,t)};var Ga=b(null);function es(){var e=Ga.current;return e!==null?e:Ee.pooledCache}function oi(e,t){t===null?H(Ga,Ga.current):H(Ga,t.pool)}function ic(){var e=es();return e===null?null:{parent:Be._currentValue,pool:e}}var gl=Error(u(460)),ts=Error(u(474)),ui=Error(u(542)),ci={then:function(){}};function rc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uc(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uc(e),e}throw Va=t,gl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,gl):a}}var Va=null;function oc(){if(Va===null)throw Error(u(459));var e=Va;return Va=null,e}function uc(e){if(e===gl||e===ui)throw Error(u(483))}var yl=null,an=0;function di(e){var t=an;return an+=1,yl===null&&(yl=[]),sc(yl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fi(e,t){throw t.$$typeof===Y?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cc(e){function t(w,v){if(e){var T=w.deletions;T===null?(w.deletions=[v],w.flags|=16):T.push(v)}}function a(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function l(w){for(var v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function n(w,v){return w=Gt(w,v),w.index=0,w.sibling=null,w}function i(w,v,T){return w.index=T,e?(T=w.alternate,T!==null?(T=T.index,T<v?(w.flags|=67108866,v):T):(w.flags|=67108866,v)):(w.flags|=1048576,v)}function s(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function c(w,v,T,U){return v===null||v.tag!==6?(v=Xr(T,w.mode,U),v.return=w,v):(v=n(v,T),v.return=w,v)}function p(w,v,T,U){var P=T.type;return P===V?z(w,v,T.props.children,U,T.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ce&&Xa(P)===v.type)?(v=n(v,T.props),ln(v,T),v.return=w,v):(v=ni(T.type,T.key,T.props,null,w.mode,U),ln(v,T),v.return=w,v)}function A(w,v,T,U){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Vr(T,w.mode,U),v.return=w,v):(v=n(v,T.children||[]),v.return=w,v)}function z(w,v,T,U,P){return v===null||v.tag!==7?(v=La(T,w.mode,U,P),v.return=w,v):(v=n(v,T),v.return=w,v)}function B(w,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Xr(""+v,w.mode,T),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return T=ni(v.type,v.key,v.props,null,w.mode,T),ln(T,v),T.return=w,T;case F:return v=Vr(v,w.mode,T),v.return=w,v;case Ce:return v=Xa(v),B(w,v,T)}if(O(v)||Qe(v))return v=La(v,w.mode,T,null),v.return=w,v;if(typeof v.then=="function")return B(w,di(v),T);if(v.$$typeof===I)return B(w,si(w,v),T);fi(w,v)}return null}function N(w,v,T,U){var P=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return P!==null?null:c(w,v,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case q:return T.key===P?p(w,v,T,U):null;case F:return T.key===P?A(w,v,T,U):null;case Ce:return T=Xa(T),N(w,v,T,U)}if(O(T)||Qe(T))return P!==null?null:z(w,v,T,U,null);if(typeof T.then=="function")return N(w,v,di(T),U);if(T.$$typeof===I)return N(w,v,si(w,T),U);fi(w,T)}return null}function C(w,v,T,U,P){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return w=w.get(T)||null,c(v,w,""+U,P);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return w=w.get(U.key===null?T:U.key)||null,p(v,w,U,P);case F:return w=w.get(U.key===null?T:U.key)||null,A(v,w,U,P);case Ce:return U=Xa(U),C(w,v,T,U,P)}if(O(U)||Qe(U))return w=w.get(T)||null,z(v,w,U,P,null);if(typeof U.then=="function")return C(w,v,T,di(U),P);if(U.$$typeof===I)return C(w,v,T,si(v,U),P);fi(v,U)}return null}function Z(w,v,T,U){for(var P=null,_e=null,J=v,ie=v=0,de=null;J!==null&&ie<T.length;ie++){J.index>ie?(de=J,J=null):de=J.sibling;var pe=N(w,J,T[ie],U);if(pe===null){J===null&&(J=de);break}e&&J&&pe.alternate===null&&t(w,J),v=i(pe,v,ie),_e===null?P=pe:_e.sibling=pe,_e=pe,J=de}if(ie===T.length)return a(w,J),me&&Xt(w,ie),P;if(J===null){for(;ie<T.length;ie++)J=B(w,T[ie],U),J!==null&&(v=i(J,v,ie),_e===null?P=J:_e.sibling=J,_e=J);return me&&Xt(w,ie),P}for(J=l(J);ie<T.length;ie++)de=C(J,w,ie,T[ie],U),de!==null&&(e&&de.alternate!==null&&J.delete(de.key===null?ie:de.key),v=i(de,v,ie),_e===null?P=de:_e.sibling=de,_e=de);return e&&J.forEach(function(ja){return t(w,ja)}),me&&Xt(w,ie),P}function ee(w,v,T,U){if(T==null)throw Error(u(151));for(var P=null,_e=null,J=v,ie=v=0,de=null,pe=T.next();J!==null&&!pe.done;ie++,pe=T.next()){J.index>ie?(de=J,J=null):de=J.sibling;var ja=N(w,J,pe.value,U);if(ja===null){J===null&&(J=de);break}e&&J&&ja.alternate===null&&t(w,J),v=i(ja,v,ie),_e===null?P=ja:_e.sibling=ja,_e=ja,J=de}if(pe.done)return a(w,J),me&&Xt(w,ie),P;if(J===null){for(;!pe.done;ie++,pe=T.next())pe=B(w,pe.value,U),pe!==null&&(v=i(pe,v,ie),_e===null?P=pe:_e.sibling=pe,_e=pe);return me&&Xt(w,ie),P}for(J=l(J);!pe.done;ie++,pe=T.next())pe=C(J,w,ie,pe.value,U),pe!==null&&(e&&pe.alternate!==null&&J.delete(pe.key===null?ie:pe.key),v=i(pe,v,ie),_e===null?P=pe:_e.sibling=pe,_e=pe);return e&&J.forEach(function(nh){return t(w,nh)}),me&&Xt(w,ie),P}function Se(w,v,T,U){if(typeof T=="object"&&T!==null&&T.type===V&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case q:e:{for(var P=T.key;v!==null;){if(v.key===P){if(P=T.type,P===V){if(v.tag===7){a(w,v.sibling),U=n(v,T.props.children),U.return=w,w=U;break e}}else if(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ce&&Xa(P)===v.type){a(w,v.sibling),U=n(v,T.props),ln(U,T),U.return=w,w=U;break e}a(w,v);break}else t(w,v);v=v.sibling}T.type===V?(U=La(T.props.children,w.mode,U,T.key),U.return=w,w=U):(U=ni(T.type,T.key,T.props,null,w.mode,U),ln(U,T),U.return=w,w=U)}return s(w);case F:e:{for(P=T.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){a(w,v.sibling),U=n(v,T.children||[]),U.return=w,w=U;break e}else{a(w,v);break}else t(w,v);v=v.sibling}U=Vr(T,w.mode,U),U.return=w,w=U}return s(w);case Ce:return T=Xa(T),Se(w,v,T,U)}if(O(T))return Z(w,v,T,U);if(Qe(T)){if(P=Qe(T),typeof P!="function")throw Error(u(150));return T=P.call(T),ee(w,v,T,U)}if(typeof T.then=="function")return Se(w,v,di(T),U);if(T.$$typeof===I)return Se(w,v,si(w,T),U);fi(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,v!==null&&v.tag===6?(a(w,v.sibling),U=n(v,T),U.return=w,w=U):(a(w,v),U=Xr(T,w.mode,U),U.return=w,w=U),s(w)):a(w,v)}return function(w,v,T,U){try{an=0;var P=Se(w,v,T,U);return yl=null,P}catch(J){if(J===gl||J===ui)throw J;var _e=dt(29,J,null,w.mode);return _e.lanes=U,_e.return=w,_e}}}var Qa=cc(!0),dc=cc(!1),fa=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Ju(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,au(e,a)}}function ns(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var is=!1;function rn(){if(is){var e=hl;if(e!==null)throw e}}function sn(e,t,a,l){is=!1;var n=e.updateQueue;fa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var p=c,A=p.next;p.next=null,s===null?i=A:s.next=A,s=p;var z=e.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==s&&(c===null?z.firstBaseUpdate=A:c.next=A,z.lastBaseUpdate=p))}if(i!==null){var B=n.baseState;s=0,z=A=p=null,c=i;do{var N=c.lane&-536870913,C=N!==c.lane;if(C?(ce&N)===N:(l&N)===N){N!==0&&N===pl&&(is=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Z=e,ee=c;N=t;var Se=a;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){B=Z.call(Se,B,N);break e}B=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,N=typeof Z=="function"?Z.call(Se,B,N):Z,N==null)break e;B=j({},B,N);break e;case 2:fa=!0}}N=c.callback,N!==null&&(e.flags|=64,C&&(e.flags|=8192),C=n.callbacks,C===null?n.callbacks=[N]:C.push(N))}else C={lane:N,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(A=z=C,p=B):z=z.next=C,s|=N;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;C=c,c=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);z===null&&(p=B),n.baseState=p,n.firstBaseUpdate=A,n.lastBaseUpdate=z,i===null&&(n.shared.lanes=0),ba|=s,e.lanes=s,e.memoizedState=B}}function fc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function mc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fc(a[e],t)}var bl=b(null),mi=b(0);function _c(e,t){e=ea,H(mi,e),H(bl,t),ea=e|t.baseLanes}function rs(){H(mi,ea),H(bl,bl.current)}function ss(){ea=mi.current,D(bl),D(mi)}var ft=b(null),Tt=null;function pa(e){var t=e.alternate;H(Ue,Ue.current&1),H(ft,e),Tt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(Tt=e)}function os(e){H(Ue,Ue.current),H(ft,e),Tt===null&&(Tt=e)}function pc(e){e.tag===22?(H(Ue,Ue.current),H(ft,e),Tt===null&&(Tt=e)):ha()}function ha(){H(Ue,Ue.current),H(ft,ft.current)}function mt(e){D(ft),Tt===e&&(Tt=null),D(Ue)}var Ue=b(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||po(a)||ho(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,ne=null,ve=null,Le=null,pi=!1,vl=!1,Za=!1,hi=0,on=0,xl=null,J_=0;function Me(){throw Error(u(321))}function us(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function cs(e,t,a,l,n,i){return Zt=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?Ic:Ts,Za=!1,i=a(l,n),Za=!1,vl&&(i=gc(t,a,l,n)),hc(e),i}function hc(e){h.H=dn;var t=ve!==null&&ve.next!==null;if(Zt=0,Le=ve=ne=null,pi=!1,on=0,xl=null,t)throw Error(u(300));e===null||He||(e=e.dependencies,e!==null&&ri(e)&&(He=!0))}function gc(e,t,a,l){ne=e;var n=0;do{if(vl&&(xl=null),on=0,vl=!1,25<=n)throw Error(u(301));if(n+=1,Le=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}h.H=$c,i=t(a,l)}while(vl);return i}function F_(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?un(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ne.flags|=1024),t}function ds(){var e=hi!==0;return hi=0,e}function fs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ms(e){if(pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}pi=!1}Zt=0,Le=ve=ne=null,vl=!1,on=hi=0,xl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ne.memoizedState=Le=e:Le=Le.next=e,Le}function ke(){if(ve===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Le===null?ne.memoizedState:Le.next;if(t!==null)Le=t,ve=e;else{if(e===null)throw ne.alternate===null?Error(u(467)):Error(u(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Le===null?ne.memoizedState=Le=e:Le=Le.next=e}return Le}function gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function un(e){var t=on;return on+=1,xl===null&&(xl=[]),e=sc(xl,e,t),t=ne,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?Ic:Ts),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return un(e);if(e.$$typeof===I)return Je(e)}throw Error(u(438,String(e)))}function _s(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gi(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ie;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=ke();return ps(t,ve,e)}function ps(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=s=null,p=null,A=t,z=!1;do{var B=A.lane&-536870913;if(B!==A.lane?(ce&B)===B:(Zt&B)===B){var N=A.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),B===pl&&(z=!0);else if((Zt&N)===N){A=A.next,N===pl&&(z=!0);continue}else B={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(c=p=B,s=i):p=p.next=B,ne.lanes|=N,ba|=N;B=A.action,Za&&a(i,B),i=A.hasEagerState?A.eagerState:a(i,B)}else N={lane:B,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(c=p=N,s=i):p=p.next=N,ne.lanes|=B,ba|=B;A=A.next}while(A!==null&&A!==t);if(p===null?s=i:p.next=c,!ct(i,e.memoizedState)&&(He=!0,z&&(a=hl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hs(e){var t=ke(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function yc(e,t,a){var l=ne,n=ke(),i=me;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!ct((ve||n).memoizedState,a);if(s&&(n.memoizedState=a,He=!0),n=n.queue,bs(xc.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Sl(9,{destroy:void 0},vc.bind(null,l,n,a,t),null),Ee===null)throw Error(u(349));i||(Zt&127)!==0||bc(l,t,a)}return a}function bc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=gi(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vc(e,t,a,l){t.value=a,t.getSnapshot=l,Sc(t)&&wc(e)}function xc(e,t,a){return a(function(){Sc(t)&&wc(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function wc(e){var t=Ba(e,2);t!==null&&rt(t,e,2)}function gs(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Za){ia(!0);try{a()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ec(e,t,a,l){return e.baseState=a,ps(e,ve,typeof l=="function"?l:Kt)}function W_(e,t,a,l,n){if(Si(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};h.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Tc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Tc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=h.T,s={};h.T=s;try{var c=a(n,l),p=h.S;p!==null&&p(s,c),Ac(e,t,c)}catch(A){ys(e,t,A)}finally{i!==null&&s.types!==null&&(i.types=s.types),h.T=i}}else try{i=a(n,l),Ac(e,t,i)}catch(A){ys(e,t,A)}}function Ac(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Nc(e,t,l)},function(l){return ys(e,t,l)}):Nc(e,t,a)}function Nc(e,t,a){t.status="fulfilled",t.value=a,Rc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Tc(e,a)))}function ys(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Rc(t),t=t.next;while(t!==l)}e.action=null}function Rc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jc(e,t){return t}function Cc(e,t){if(me){var a=Ee.formState;if(a!==null){e:{var l=ne;if(me){if(Ae){t:{for(var n=Ae,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=At(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ae=At(n.nextSibling),l=n.data==="F!";break e}}ca(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jc,lastRenderedState:t},a.queue=l,a=Fc.bind(null,ne,l),l.dispatch=a,l=gs(!1),i=Es.bind(null,ne,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=W_.bind(null,ne,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Oc(e){var t=ke();return Mc(t,ve,e)}function Mc(e,t,a){if(t=ps(e,t,jc)[0],e=bi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=un(t)}catch(s){throw s===gl?ui:s}else l=t;t=ke();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,Sl(9,{destroy:void 0},P_.bind(null,n,a),null)),[l,i,e]}function P_(e,t){e.action=t}function Dc(e){var t=ke(),a=ve;if(a!==null)return Mc(t,a,e);ke(),t=t.memoizedState,a=ke();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Sl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=gi(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function zc(){return ke().memoizedState}function vi(e,t,a,l){var n=$e();ne.flags|=e,n.memoizedState=Sl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xi(e,t,a,l){var n=ke();l=l===void 0?null:l;var i=n.memoizedState.inst;ve!==null&&l!==null&&us(l,ve.memoizedState.deps)?n.memoizedState=Sl(t,i,a,l):(ne.flags|=e,n.memoizedState=Sl(1|t,i,a,l))}function Uc(e,t){vi(8390656,8,e,t)}function bs(e,t){xi(2048,8,e,t)}function I_(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=gi(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function kc(e){var t=ke().memoizedState;return I_({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Bc(e,t){return xi(4,2,e,t)}function Lc(e,t){return xi(4,4,e,t)}function Hc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yc(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,Hc.bind(null,t,e),a)}function vs(){}function qc(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&us(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Gc(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&us(t,l[1]))return l[0];if(l=e(),Za){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l}function xs(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xd(),ne.lanes|=e,ba|=e,a)}function Xc(e,t,a,l){return ct(a,t)?a:bl.current!==null?(e=xs(e,a,l),ct(e,t)||(He=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(ce&261930)===0?(He=!0,e.memoizedState=a):(e=Xd(),ne.lanes|=e,ba|=e,t)}function Vc(e,t,a,l,n){var i=E.p;E.p=i!==0&&8>i?i:8;var s=h.T,c={};h.T=c,Es(e,!1,t,a);try{var p=n(),A=h.S;if(A!==null&&A(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var z=K_(p,l);cn(e,t,z,ht(e))}else cn(e,t,l,ht(e))}catch(B){cn(e,t,{then:function(){},status:"rejected",reason:B},ht())}finally{E.p=i,s!==null&&c.types!==null&&(s.types=c.types),h.T=s}}function $_(){}function Ss(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Qc(e).queue;Vc(e,n,t,k,a===null?$_:function(){return Zc(e),a(l)})}function Qc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:k},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zc(e){var t=Qc(e);t.next===null&&(t=e.alternate.memoizedState),cn(e,t.next.queue,{},ht())}function ws(){return Je(Nn)}function Kc(){return ke().memoizedState}function Jc(){return ke().memoizedState}function ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ht();e=ma(a);var l=_a(t,e,a);l!==null&&(rt(l,t,a),nn(l,t,a)),t={cache:Ir()},e.payload=t;return}t=t.return}}function tp(e,t,a){var l=ht();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Si(e)?Wc(t,a):(a=qr(e,t,a,l),a!==null&&(rt(a,e,l),Pc(a,t,l)))}function Fc(e,t,a){var l=ht();cn(e,t,a,l)}function cn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Si(e))Wc(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,a);if(n.hasEagerState=!0,n.eagerState=c,ct(c,s))return ai(e,t,n,0),Ee===null&&ti(),!1}catch{}if(a=qr(e,t,n,l),a!==null)return rt(a,e,l),Pc(a,t,l),!0}return!1}function Es(e,t,a,l){if(l={lane:2,revertLane:ao(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Si(e)){if(t)throw Error(u(479))}else t=qr(e,a,l,2),t!==null&&rt(t,e,2)}function Si(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Wc(e,t){vl=pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Pc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,au(e,a)}}var dn={readContext:Je,use:yi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};dn.useEffectEvent=Me;var Ic={readContext:Je,use:yi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Uc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,vi(4194308,4,Hc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){vi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Za){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Za){ia(!0);try{a(t)}finally{ia(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=tp.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,a=Fc.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:vs,useDeferredValue:function(e,t){var a=$e();return xs(a,e,t)},useTransition:function(){var e=gs(!1);return e=Vc.bind(null,ne,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,n=$e();if(me){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(ce&127)!==0||bc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Uc(xc.bind(null,l,i,e),[e]),l.flags|=2048,Sl(9,{destroy:void 0},vc.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=Ee.identifierPrefix;if(me){var a=Dt,l=Mt;a=(l&~(1<<32-ut(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=J_++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Cc,useActionState:Cc,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Es.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return $e().memoizedState=ep.bind(null,ne)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Ts={readContext:Je,use:yi,useCallback:qc,useContext:Je,useEffect:bs,useImperativeHandle:Yc,useInsertionEffect:Bc,useLayoutEffect:Lc,useMemo:Gc,useReducer:bi,useRef:zc,useState:function(){return bi(Kt)},useDebugValue:vs,useDeferredValue:function(e,t){var a=ke();return Xc(a,ve.memoizedState,e,t)},useTransition:function(){var e=bi(Kt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:yc,useId:Kc,useHostTransitionStatus:ws,useFormState:Oc,useActionState:Oc,useOptimistic:function(e,t){var a=ke();return Ec(a,ve,e,t)},useMemoCache:_s,useCacheRefresh:Jc};Ts.useEffectEvent=kc;var $c={readContext:Je,use:yi,useCallback:qc,useContext:Je,useEffect:bs,useImperativeHandle:Yc,useInsertionEffect:Bc,useLayoutEffect:Lc,useMemo:Gc,useReducer:hs,useRef:zc,useState:function(){return hs(Kt)},useDebugValue:vs,useDeferredValue:function(e,t){var a=ke();return ve===null?xs(a,e,t):Xc(a,ve.memoizedState,e,t)},useTransition:function(){var e=hs(Kt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:un(e),t]},useSyncExternalStore:yc,useId:Kc,useHostTransitionStatus:ws,useFormState:Dc,useActionState:Dc,useOptimistic:function(e,t){var a=ke();return ve!==null?Ec(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_s,useCacheRefresh:Jc};$c.useEffectEvent=kc;function As(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ns={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ht(),n=ma(l);n.payload=t,a!=null&&(n.callback=a),t=_a(e,n,l),t!==null&&(rt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ht(),n=ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=_a(e,n,l),t!==null&&(rt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ht(),l=ma(a);l.tag=2,t!=null&&(l.callback=t),t=_a(e,l,a),t!==null&&(rt(t,e,a),nn(t,e,a))}};function ed(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function td(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ad(e){ei(e)}function ld(e){console.error(e)}function nd(e){ei(e)}function wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function id(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Rs(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){wi(e,t)},a}function rd(e){return e=ma(e),e.tag=3,e}function sd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){id(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){id(t,a,l),typeof n!="function"&&(va===null?va=new Set([this]):va.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function ap(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&_l(t,a,n,!0),a=ft.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?Ui():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ci?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),$s(e,l,n)),!1;case 22:return a.flags|=65536,l===ci?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),$s(e,l,n)),!1}throw Error(u(435,a.tag))}return $s(e,l,n),Ui(),!1}if(me)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Kr&&(e=Error(u(422),{cause:l}),$l(xt(e,a)))):(l!==Kr&&(t=Error(u(423),{cause:l}),$l(xt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=xt(l,a),n=Rs(e.stateNode,l,n),ns(e,n),De!==4&&(De=2)),!1;var i=Error(u(520),{cause:l});if(i=xt(i,a),bn===null?bn=[i]:bn.push(i),De!==4&&(De=2),t===null)return!0;l=xt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Rs(a.stateNode,l,e),ns(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(va===null||!va.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=rd(n),sd(n,e,a,l),ns(a,n),!1}a=a.return}while(a!==null);return!1}var js=Error(u(461)),He=!1;function Fe(e,t,a,l){t.child=e===null?dc(t,null,a,l):Qa(t,e.child,a,l)}function od(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var c in l)c!=="ref"&&(s[c]=l[c])}else s=l;return qa(t),l=cs(e,t,a,s,i,n),c=ds(),e!==null&&!He?(fs(e,t,n),Jt(e,t,n)):(me&&c&&Qr(t),t.flags|=1,Fe(e,t,l,n),t.child)}function ud(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,cd(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Bs(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(s,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Gt(i,l),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Bs(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Cs(e,t,a,l,n)}function dd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return fd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,i!==null?i.cachePool:null),i!==null?_c(t,i):rs(),pc(t);else return l=t.lanes=536870912,fd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(oi(t,i.cachePool),_c(t,i),ha(),t.memoizedState=null):(e!==null&&oi(t,null),rs(),ha());return Fe(e,t,n,a),t.child}function fn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,a,l,n){var i=es();return i=i===null?null:{parent:Be._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&oi(t,null),rs(),pc(t),e!==null&&_l(e,t,l,!0),t.childLanes=n,null}function Ei(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function md(e,t,a){return Qa(t,e.child,null,a),e=Ei(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function lp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Ei(t,l),t.lanes=536870912,fn(null,e);if(os(t),(e=Ae)?(e=Af(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Mt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=t,t.child=a,Ke=t,Ae=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Ei(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(os(t),n)if(t.flags&256)t.flags&=-257,t=md(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(He||_l(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(l=Ee,l!==null&&(s=lu(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ba(e,s),rt(l,e,s),js;Ui(),t=md(e,t,a)}else e=i.treeContext,Ae=At(s.nextSibling),Ke=t,me=!0,ua=null,Et=!1,e!==null&&$u(t,e),t=Ei(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Cs(e,t,a,l,n){return qa(t),a=cs(e,t,a,l,void 0,n),l=ds(),e!==null&&!He?(fs(e,t,n),Jt(e,t,n)):(me&&l&&Qr(t),t.flags|=1,Fe(e,t,a,n),t.child)}function _d(e,t,a,l,n,i){return qa(t),t.updateQueue=null,a=gc(t,l,a,n),hc(e),l=ds(),e!==null&&!He?(fs(e,t,i),Jt(e,t,i)):(me&&l&&Qr(t),t.flags|=1,Fe(e,t,a,i),t.child)}function pd(e,t,a,l,n){if(qa(t),t.stateNode===null){var i=cl,s=a.contextType;typeof s=="object"&&s!==null&&(i=Je(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ns,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},as(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Je(s):cl,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(As(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Ns.enqueueReplaceState(i,i.state,null),sn(t,l,i,n),rn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,p=Ka(a,c);i.props=p;var A=i.context,z=a.contextType;s=cl,typeof z=="object"&&z!==null&&(s=Je(z));var B=a.getDerivedStateFromProps;z=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||A!==s)&&td(t,i,l,s),fa=!1;var N=t.memoizedState;i.state=N,sn(t,l,i,n),rn(),A=t.memoizedState,c||N!==A||fa?(typeof B=="function"&&(As(t,a,B,l),A=t.memoizedState),(p=fa||ed(t,a,p,l,N,A,s))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=s,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ls(e,t),s=t.memoizedProps,z=Ka(a,s),i.props=z,B=t.pendingProps,N=i.context,A=a.contextType,p=cl,typeof A=="object"&&A!==null&&(p=Je(A)),c=a.getDerivedStateFromProps,(A=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==B||N!==p)&&td(t,i,l,p),fa=!1,N=t.memoizedState,i.state=N,sn(t,l,i,n),rn();var C=t.memoizedState;s!==B||N!==C||fa||e!==null&&e.dependencies!==null&&ri(e.dependencies)?(typeof c=="function"&&(As(t,a,c,l),C=t.memoizedState),(z=fa||ed(t,a,z,l,N,C,p)||e!==null&&e.dependencies!==null&&ri(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=p,l=z):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ti(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Qa(t,e.child,null,n),t.child=Qa(t,null,a,n)):Fe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function hd(e,t,a,l){return Ha(),t.flags|=256,Fe(e,t,a,l),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ms(e){return{baseLanes:e,cachePool:ic()}}function Ds(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function gd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?pa(t):ha(),(e=Ae)?(e=Af(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Mt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=Wu(e),a.return=t,t.child=a,Ke=t,Ae=null)):e=null,e===null)throw ca(t);return ho(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(ha(),n=t.mode,c=Ai({mode:"hidden",children:c},n),l=La(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Ms(a),l.childLanes=Ds(e,s,a),t.memoizedState=Os,fn(null,l)):(pa(t),zs(t,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(i)t.flags&256?(pa(t),t.flags&=-257,t=Us(e,t,a)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),c=l.fallback,n=t.mode,l=Ai({mode:"visible",children:l.children},n),c=La(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Qa(t,e.child,null,a),l=t.child,l.memoizedState=Ms(a),l.childLanes=Ds(e,s,a),t.memoizedState=Os,t=fn(null,l));else if(pa(t),ho(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var A=s.dgst;s=A,l=Error(u(419)),l.stack="",l.digest=s,$l({value:l,source:null,stack:null}),t=Us(e,t,a)}else if(He||_l(e,t,a,!1),s=(a&e.childLanes)!==0,He||s){if(s=Ee,s!==null&&(l=lu(s,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ba(e,l),rt(s,e,l),js;po(c)||Ui(),t=Us(e,t,a)}else po(c)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ae=At(c.nextSibling),Ke=t,me=!0,ua=null,Et=!1,e!==null&&$u(t,e),t=zs(t,l.children),t.flags|=4096);return t}return n?(ha(),c=l.fallback,n=t.mode,p=e.child,A=p.sibling,l=Gt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,A!==null?c=Gt(A,c):(c=La(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,fn(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Ms(a):(n=c.cachePool,n!==null?(p=Be._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=ic(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Ds(e,s,a),t.memoizedState=Os,fn(e.child,l)):(pa(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function zs(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Us(e,t,a){return Qa(t,e.child,null,a),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Wr(e.return,t,a)}function ks(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function bd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Ue.current,c=(s&2)!==0;if(c?(s=s&1|2,t.flags|=128):s&=1,H(Ue,s),Fe(e,t,l,a),l=me?Il:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&_i(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ks(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&_i(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ks(t,!0,a,null,i,l);break;case"together":ks(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(_l(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Bs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ri(e)))}function np(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),da(t,Be,e.memoizedState.cache),Ha();break;case 27:case 5:Bl(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,os(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(pa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gd(e,t,a):(pa(t),e=Jt(e,t,a),e!==null?e.sibling:null);pa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(_l(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return bd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Ue,Ue.current),l)break;return null;case 22:return t.lanes=0,dd(e,t,a,t.pendingProps);case 24:da(t,Be,e.memoizedState.cache)}return Jt(e,t,a)}function vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Bs(e,a)&&(t.flags&128)===0)return He=!1,np(e,t,a);He=(e.flags&131072)!==0}else He=!1,me&&(t.flags&1048576)!==0&&Iu(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Gr(e)?(l=Ka(e,l),t.tag=1,t=pd(null,t,e,l,a)):(t.tag=0,t=Cs(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===we){t.tag=11,t=od(null,t,e,l,a);break e}else if(n===te){t.tag=14,t=ud(null,t,e,l,a);break e}}throw t=L(e)||e,Error(u(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ka(l,t.pendingProps),pd(e,t,l,n,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,ls(e,t),sn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,da(t,Be,l),l!==i.cache&&Pr(t,[Be],a,!0),rn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hd(e,t,l,a);break e}else if(l!==n){n=xt(Error(u(424)),t),$l(n),t=hd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ae=At(e.firstChild),Ke=t,me=!0,ua=null,Et=!0,a=dc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),l===n){t=Jt(e,t,a);break e}Fe(e,t,l,a)}t=t.child}return t;case 26:return Ti(e,t),e===null?(a=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=Gi(re.current).createElement(a),l[Ze]=t,l[et]=e,We(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bl(t),e===null&&me&&(l=t.stateNode=jf(t.type,t.pendingProps,re.current),Ke=t,Et=!0,n=Ae,Ea(t.type)?(go=n,Ae=At(l.firstChild)):Ae=n),Fe(e,t,t.pendingProps.children,a),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=Ae)&&(l=zp(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ke=t,Ae=At(l.firstChild),Et=!1,n=!0):n=!1),n||ca(t)),Bl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,fo(n,i)?l=null:s!==null&&fo(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=cs(e,t,F_,null,null,a),Nn._currentValue=n),Ti(e,t),Fe(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Ae)&&(a=Up(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ke=t,Ae=null,e=!0):e=!1),e||ca(t)),null;case 13:return gd(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Qa(t,null,l,a):Fe(e,t,l,a),t.child;case 11:return od(e,t,t.type,t.pendingProps,a);case 7:return Fe(e,t,t.pendingProps,a),t.child;case 8:return Fe(e,t,t.pendingProps.children,a),t.child;case 12:return Fe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,da(t,t.type,l.value),Fe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,qa(t),n=Je(n),l=l(n),t.flags|=1,Fe(e,t,l,a),t.child;case 14:return ud(e,t,t.type,t.pendingProps,a);case 15:return cd(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 31:return lp(e,t,a);case 22:return dd(e,t,a,t.pendingProps);case 24:return qa(t),l=Je(Be),e===null?(n=es(),n===null&&(n=Ee,i=Ir(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},as(t),da(t,Be,n)):((e.lanes&a)!==0&&(ls(e,t),sn(t,null,null,a),rn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),da(t,Be,l)):(l=i.cache,da(t,Be,l),l!==n.cache&&Pr(t,[Be],a,!0))),Fe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ft(e){e.flags|=4}function Ls(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Kd())e.flags|=8192;else throw Va=ci,ts}else e.flags&=-16777217}function xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bf(t))if(Kd())e.flags|=8192;else throw Va=ci,ts}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?eu():536870912,e.lanes|=t,Al|=t)}function mn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ip(e,t,a){var l=t.pendingProps;switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Be),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jr())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Ft(t),i!==null?(Ne(t),xd(t,i)):(Ne(t),Ls(t,n,null,l,a))):i?i!==e.memoizedState?(Ft(t),Ne(t),xd(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ft(t),Ne(t),Ls(t,n,e,l,a)),null;case 27:if(Ln(t),a=re.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}e=X.current,ml(t)?ec(t):(e=jf(n,l,a),t.stateNode=e,Ft(t))}return Ne(t),null;case 5:if(Ln(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}if(i=X.current,ml(t))ec(t);else{var s=Gi(re.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Ze]=t,i[et]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(We(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(t)}}return Ne(t),Ls(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=re.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yf(e.nodeValue,a)),e||ca(t,!0)}else e=Gi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ze]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ze]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ni(t,t.updateQueue),Ne(t),null);case 4:return ze(),e===null&&ro(t.stateNode.containerInfo),Ne(t),null;case 10:return Qt(t.type),Ne(t),null;case 19:if(D(Ue),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=_i(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fu(a,e),a=a.sibling;return H(Ue,Ue.current&1|2),me&&Xt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&st()>Mi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=_i(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!me)return Ne(t),null}else 2*st()-l.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=st(),e.sibling=null,a=Ue.current,H(Ue,n?a&1|2:a&1),me&&Xt(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return mt(t),ss(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Ni(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&D(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Be),Ne(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function rp(e,t){switch(Zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Be),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(u(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Ue),null;case 4:return ze(),null;case 10:return Qt(t.type),null;case 22:case 23:return mt(t),ss(),e!==null&&D(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Be),null;case 25:return null;default:return null}}function Sd(e,t){switch(Zr(t),t.tag){case 3:Qt(Be),ze();break;case 26:case 27:case 5:Ln(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:D(Ue);break;case 10:Qt(t.type);break;case 22:case 23:mt(t),ss(),e!==null&&D(Ga);break;case 24:Qt(Be)}}function _n(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(c){ye(t,t.return,c)}}function ga(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,n=t;var p=a,A=c;try{A()}catch(z){ye(n,p,z)}}}l=l.next}while(l!==i)}}catch(z){ye(t,t.return,z)}}function wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{mc(t,a)}catch(l){ye(e,e.return,l)}}}function Ed(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ye(e,t,n)}}function zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function Td(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function Hs(e,t,a){try{var l=e.stateNode;Rp(l,e.type,a,t),l[et]=t}catch(n){ye(e,e.return,n)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(qs(e,t,a),e=e.sibling;e!==null;)qs(e,t,a),e=e.sibling}function Ri(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function Nd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);We(t,l,a),t[Ze]=e,t[et]=a}catch(i){ye(e,e.return,i)}}var Wt=!1,Ye=!1,Gs=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function sp(e,t){if(e=e.containerInfo,uo=Fi,e=Yu(e),Ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,c=-1,p=-1,A=0,z=0,B=e,N=null;t:for(;;){for(var C;B!==a||n!==0&&B.nodeType!==3||(c=s+n),B!==i||l!==0&&B.nodeType!==3||(p=s+l),B.nodeType===3&&(s+=B.nodeValue.length),(C=B.firstChild)!==null;)N=B,B=C;for(;;){if(B===e)break t;if(N===a&&++A===n&&(c=s),N===i&&++z===l&&(p=s),(C=B.nextSibling)!==null)break;B=N,N=B.parentNode}B=C}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(co={focusedElem:e,selectionRange:a},Fi=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Z=Ka(a.type,n);e=l.getSnapshotBeforeUpdate(Z,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){ye(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_o(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function jd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),l&4&&_n(5,a);break;case 1:if(It(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ye(a,a.return,s)}else{var n=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ye(a,a.return,s)}}l&64&&wd(a),l&512&&pn(a,a.return);break;case 3:if(It(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{mc(e,t)}catch(s){ye(a,a.return,s)}}break;case 27:t===null&&l&4&&Nd(a);case 26:case 5:It(e,a),t===null&&l&4&&Td(a),l&512&&pn(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),l&4&&Md(e,a);break;case 13:It(e,a),l&4&&Dd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hp.bind(null,a),kp(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||Ye,n=Wt;var i=Ye;Wt=l,(Ye=t)&&!i?$t(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Wt=n,Ye=i}break;case 30:break;default:It(e,a)}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,at=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Od(e,t,a),a=a.sibling}function Od(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ll,a)}catch{}switch(a.tag){case 26:Ye||zt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||zt(a,t);var l=je,n=at;Ea(a.type)&&(je=a.stateNode,at=!1),Pt(e,t,a),En(a.stateNode),je=l,at=n;break;case 5:Ye||zt(a,t);case 6:if(l=je,n=at,je=null,Pt(e,t,a),je=l,at=n,je!==null)if(at)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(i){ye(a,t,i)}else try{je.removeChild(a.stateNode)}catch(i){ye(a,t,i)}break;case 18:je!==null&&(at?(e=je,Ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zl(e)):Ef(je,a.stateNode));break;case 4:l=je,n=at,je=a.stateNode.containerInfo,at=!0,Pt(e,t,a),je=l,at=n;break;case 0:case 11:case 14:case 15:ga(2,a,t),Ye||ga(4,a,t),Pt(e,t,a);break;case 1:Ye||(zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ed(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:Ye=(l=Ye)||a.memoizedState!==null,Pt(e,t,a),Ye=l;break;default:Pt(e,t,a)}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(a){ye(t,t.return,a)}}}function Dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(a){ye(t,t.return,a)}}function op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rd),t;default:throw Error(u(435,e.tag))}}function ji(e,t){var a=op(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=gp.bind(null,e,l);l.then(n,n)}})}function lt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Ea(c.type)){je=c.stateNode,at=!1;break e}break;case 5:je=c.stateNode,at=!1;break e;case 3:case 4:je=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(je===null)throw Error(u(160));Od(i,s,n),je=null,at=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}var Ct=null;function zd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),nt(e),l&4&&(ga(3,e,e.return),_n(3,e),ga(5,e,e.return));break;case 1:lt(t,e),nt(e),l&512&&(Ye||a===null||zt(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ct;if(lt(t,e),nt(e),l&512&&(Ye||a===null||zt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ql]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),We(i,l,a),i[Ze]=e,Xe(i),l=i;break e;case"link":var s=Uf("link","href",n).get(l+(a.href||""));if(s){for(var c=0;c<s.length;c++)if(i=s[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(c,1);break t}}i=n.createElement(l),We(i,l,a),n.head.appendChild(i);break;case"meta":if(s=Uf("meta","content",n).get(l+(a.content||""))){for(c=0;c<s.length;c++)if(i=s[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(c,1);break t}}i=n.createElement(l),We(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[Ze]=e,Xe(i),l=i}e.stateNode=l}else kf(n,e.type,e.stateNode);else e.stateNode=zf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?kf(n,e.type,e.stateNode):zf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Hs(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),nt(e),l&512&&(Ye||a===null||zt(a,a.return)),a!==null&&l&4&&Hs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),nt(e),l&512&&(Ye||a===null||zt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(Z){ye(e,e.return,Z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Hs(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Gs=!0);break;case 6:if(lt(t,e),nt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Z){ye(e,e.return,Z)}}break;case 3:if(Qi=null,n=Ct,Ct=Xi(t.containerInfo),lt(t,e),Ct=n,nt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(t.containerInfo)}catch(Z){ye(e,e.return,Z)}Gs&&(Gs=!1,Ud(e));break;case 4:l=Ct,Ct=Xi(e.stateNode.containerInfo),lt(t,e),nt(e),Ct=l;break;case 12:lt(t,e),nt(e);break;case 31:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ji(e,l)));break;case 13:lt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Oi=st()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ji(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,A=Wt,z=Ye;if(Wt=A||n,Ye=z||p,lt(t,e),Ye=z,Wt=A,nt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||Wt||Ye||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=p.stateNode;var B=p.memoizedProps.style,N=B!=null&&B.hasOwnProperty("display")?B.display:null;c.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Z){ye(p,p.return,Z)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(Z){ye(p,p.return,Z)}}}else if(t.tag===18){if(a===null){p=t;try{var C=p.stateNode;n?Tf(C,!0):Tf(p.stateNode,!1)}catch(Z){ye(p,p.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ji(e,a))));break;case 19:lt(t,e),nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ji(e,l)));break;case 30:break;case 21:break;default:lt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ad(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Ys(e);Ri(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(ll(s,""),a.flags&=-33);var c=Ys(e);Ri(e,c,s);break;case 3:case 4:var p=a.stateNode.containerInfo,A=Ys(e);qs(e,A,p);break;default:throw Error(u(161))}}catch(z){ye(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ud(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ud(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jd(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Ja(t);break;case 1:zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ed(t,t.return,a),Ja(t);break;case 27:En(t.stateNode);case 26:case 5:zt(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function $t(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:$t(n,i,a),_n(4,i);break;case 1:if($t(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){ye(l,l.return,A)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)fc(p[n],c)}catch(A){ye(l,l.return,A)}}a&&s&64&&wd(i),pn(i,i.return);break;case 27:Nd(i);case 26:case 5:$t(n,i,a),a&&l===null&&s&4&&Td(i),pn(i,i.return);break;case 12:$t(n,i,a);break;case 31:$t(n,i,a),a&&s&4&&Md(n,i);break;case 13:$t(n,i,a),a&&s&4&&Dd(n,i);break;case 22:i.memoizedState===null&&$t(n,i,a),pn(i,i.return);break;case 30:break;default:$t(n,i,a)}t=t.sibling}}function Xs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Vs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kd(e,t,a,l),t=t.sibling}function kd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),n&2048&&_n(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Ot(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,c=i.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ye(t,t.return,p)}}else Ot(e,t,a,l);break;case 31:Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,l):hn(e,t):i._visibility&2?Ot(e,t,a,l):(i._visibility|=2,wl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Xs(s,t);break;case 24:Ot(e,t,a,l),n&2048&&Vs(t.alternate,t);break;default:Ot(e,t,a,l)}}function wl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,c=a,p=l,A=s.flags;switch(s.tag){case 0:case 11:case 15:wl(i,s,c,p,n),_n(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?wl(i,s,c,p,n):hn(i,s):(z._visibility|=2,wl(i,s,c,p,n)),n&&A&2048&&Xs(s.alternate,s);break;case 24:wl(i,s,c,p,n),n&&A&2048&&Vs(s.alternate,s);break;default:wl(i,s,c,p,n)}t=t.sibling}}function hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:hn(a,l),n&2048&&Xs(l.alternate,l);break;case 24:hn(a,l),n&2048&&Vs(l.alternate,l);break;default:hn(a,l)}t=t.sibling}}var gn=8192;function El(e,t,a){if(e.subtreeFlags&gn)for(e=e.child;e!==null;)Bd(e,t,a),e=e.sibling}function Bd(e,t,a){switch(e.tag){case 26:El(e,t,a),e.flags&gn&&e.memoizedState!==null&&Jp(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,a);break;case 3:case 4:var l=Ct;Ct=Xi(e.stateNode.containerInfo),El(e,t,a),Ct=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gn,gn=16777216,El(e,t,a),gn=l):El(e,t,a));break;default:El(e,t,a)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Yd(l,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&ga(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ci(e)):yn(e);break;default:yn(e)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Yd(l,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Ci(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ci(t));break;default:Ci(t)}e=e.sibling}}function Yd(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else e:for(a=e;Ve!==null;){l=Ve;var n=l.sibling,i=l.return;if(Cd(l),l===a){Ve=null;break e}if(n!==null){n.return=i,Ve=n;break e}Ve=i}}}var up={getCacheForType:function(e){var t=Je(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Je(Be).controller.signal}},cp=typeof WeakMap=="function"?WeakMap:Map,he=0,Ee=null,oe=null,ce=0,ge=0,_t=null,ya=!1,Tl=!1,Qs=!1,ea=0,De=0,ba=0,Fa=0,Zs=0,pt=0,Al=0,bn=null,it=null,Ks=!1,Oi=0,qd=0,Mi=1/0,Di=null,va=null,qe=0,xa=null,Nl=null,ta=0,Js=0,Fs=null,Gd=null,vn=0,Ws=null;function ht(){return(he&2)!==0&&ce!==0?ce&-ce:h.T!==null?ao():nu()}function Xd(){if(pt===0)if((ce&536870912)===0||me){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),pt=e}else pt=536870912;return e=ft.current,e!==null&&(e.flags|=32),pt}function rt(e,t,a){(e===Ee&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),Sa(e,ce,pt,!1)),Yl(e,a),((he&2)===0||e!==Ee)&&(e===Ee&&((he&2)===0&&(Fa|=a),De===4&&Sa(e,ce,pt,!1)),Ut(e))}function Vd(e,t,a){if((he&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Hl(e,t),n=l?mp(e,t):Is(e,t,!0),i=l;do{if(n===0){Tl&&!l&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!dp(a)){n=Is(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;n=bn;var p=c.current.memoizedState.isDehydrated;if(p&&(Rl(c,s).flags|=256),s=Is(c,s,!1),s!==2){if(Qs&&!p){c.errorRecoveryDisabledLanes|=i,Fa|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Rl(e,0),Sa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Sa(l,t,pt,!ya);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Oi+300-st(),10<n)){if(Sa(l,t,pt,!ya),Xn(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=Sf(Qd.bind(null,l,a,it,Di,Ks,t,pt,Fa,Al,ya,i,"Throttled",-0,0),n);break e}Qd(l,a,it,Di,Ks,t,pt,Fa,Al,ya,i,null,-0,0)}}break}while(!0);Ut(e)}function Qd(e,t,a,l,n,i,s,c,p,A,z,B,N,C){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},Bd(t,i,B);var Z=(i&62914560)===i?Oi-st():(i&4194048)===i?qd-st():0;if(Z=Fp(B,Z),Z!==null){ta=i,e.cancelPendingCommit=Z($d.bind(null,e,t,i,a,l,n,s,c,p,z,B,null,N,C)),Sa(e,i,s,!A);return}}$d(e,t,i,a,l,n,s,c,p)}function dp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,l){t&=~Zs,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&tu(e,a,t)}function zi(){return(he&6)===0?(xn(0),!1):!0}function Ps(){if(oe!==null){if(ge===0)var e=oe.return;else e=oe,Vt=Ya=null,ms(e),yl=null,an=0,e=oe;for(;e!==null;)Sd(e.alternate,e),e=e.return;oe=null}}function Rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Op(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Ps(),Ee=e,oe=a=Gt(e.current,null),ce=t,ge=0,_t=null,ya=!1,Tl=Hl(e,t),Qs=!1,Al=pt=Zs=Fa=ba=De=0,it=bn=null,Ks=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ut(l),i=1<<n;t|=e[n],l&=~i}return ea=t,ti(),a}function Zd(e,t){ne=null,h.H=dn,t===gl||t===ui?(t=oc(),ge=3):t===ts?(t=oc(),ge=4):ge=t===js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,oe===null&&(De=1,wi(e,xt(t,e.current)))}function Kd(){var e=ft.current;return e===null?!0:(ce&4194048)===ce?Tt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Tt:!1}function Jd(){var e=h.H;return h.H=dn,e===null?dn:e}function Fd(){var e=h.A;return h.A=up,e}function Ui(){De=4,ya||(ce&4194048)!==ce&&ft.current!==null||(Tl=!0),(ba&134217727)===0&&(Fa&134217727)===0||Ee===null||Sa(Ee,ce,pt,!1)}function Is(e,t,a){var l=he;he|=2;var n=Jd(),i=Fd();(Ee!==e||ce!==t)&&(Di=null,Rl(e,t)),t=!1;var s=De;e:do try{if(ge!==0&&oe!==null){var c=oe,p=_t;switch(ge){case 8:Ps(),s=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var A=ge;if(ge=0,_t=null,jl(e,c,p,A),a&&Tl){s=0;break e}break;default:A=ge,ge=0,_t=null,jl(e,c,p,A)}}fp(),s=De;break}catch(z){Zd(e,z)}while(!0);return t&&e.shellSuspendCounter++,Vt=Ya=null,he=l,h.H=n,h.A=i,oe===null&&(Ee=null,ce=0,ti()),s}function fp(){for(;oe!==null;)Wd(oe)}function mp(e,t){var a=he;he|=2;var l=Jd(),n=Fd();Ee!==e||ce!==t?(Di=null,Mi=st()+500,Rl(e,t)):Tl=Hl(e,t);e:do try{if(ge!==0&&oe!==null){t=oe;var i=_t;t:switch(ge){case 1:ge=0,_t=null,jl(e,t,i,1);break;case 2:case 9:if(rc(i)){ge=0,_t=null,Pd(t);break}t=function(){ge!==2&&ge!==9||Ee!==e||(ge=7),Ut(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:rc(i)?(ge=0,_t=null,Pd(t)):(ge=0,_t=null,jl(e,t,i,7));break;case 5:var s=null;switch(oe.tag){case 26:s=oe.memoizedState;case 5:case 27:var c=oe;if(s?Bf(s):c.stateNode.complete){ge=0,_t=null;var p=c.sibling;if(p!==null)oe=p;else{var A=c.return;A!==null?(oe=A,ki(A)):oe=null}break t}}ge=0,_t=null,jl(e,t,i,5);break;case 6:ge=0,_t=null,jl(e,t,i,6);break;case 8:Ps(),De=6;break e;default:throw Error(u(462))}}_p();break}catch(z){Zd(e,z)}while(!0);return Vt=Ya=null,h.H=l,h.A=n,he=a,oe!==null?0:(Ee=null,ce=0,ti(),De)}function _p(){for(;oe!==null&&!Bm();)Wd(oe)}function Wd(e){var t=vd(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?ki(e):oe=t}function Pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=_d(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=_d(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:ms(t);default:Sd(a,t),t=oe=Fu(t,ea),t=vd(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?ki(e):oe=t}function jl(e,t,a,l){Vt=Ya=null,ms(t),yl=null,an=0;var n=t.return;try{if(ap(e,n,t,a,ce)){De=1,wi(e,xt(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;De=1,wi(e,xt(a,e.current)),oe=null;return}t.flags&32768?(me||l===1?e=!0:Tl||(ce&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=ft.current,l!==null&&l.tag===13&&(l.flags|=16384))),Id(t,e)):ki(t)}function ki(e){var t=e;do{if((t.flags&32768)!==0){Id(t,ya);return}e=t.return;var a=ip(t.alternate,t,ea);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);De===0&&(De=5)}function Id(e,t){do{var a=rp(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);De=6,oe=null}function $d(e,t,a,l,n,i,s,c,p){e.cancelPendingCommit=null;do Bi();while(qe!==0);if((he&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Yr,Km(e,a,i,s,c,p),e===Ee&&(oe=Ee=null,ce=0),Nl=t,xa=e,ta=a,Js=i,Fs=n,Gd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(Hn,function(){return nf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=h.T,h.T=null,n=E.p,E.p=2,s=he,he|=4;try{sp(e,t,a)}finally{he=s,E.p=n,h.T=l}}qe=1,ef(),tf(),af()}}function ef(){if(qe===1){qe=0;var e=xa,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=h.T,h.T=null;var l=E.p;E.p=2;var n=he;he|=4;try{zd(t,e);var i=co,s=Yu(e.containerInfo),c=i.focusedElem,p=i.selectionRange;if(s!==c&&c&&c.ownerDocument&&Hu(c.ownerDocument.documentElement,c)){if(p!==null&&Ur(c)){var A=p.start,z=p.end;if(z===void 0&&(z=A),"selectionStart"in c)c.selectionStart=A,c.selectionEnd=Math.min(z,c.value.length);else{var B=c.ownerDocument||document,N=B&&B.defaultView||window;if(N.getSelection){var C=N.getSelection(),Z=c.textContent.length,ee=Math.min(p.start,Z),Se=p.end===void 0?ee:Math.min(p.end,Z);!C.extend&&ee>Se&&(s=Se,Se=ee,ee=s);var w=Lu(c,ee),v=Lu(c,Se);if(w&&v&&(C.rangeCount!==1||C.anchorNode!==w.node||C.anchorOffset!==w.offset||C.focusNode!==v.node||C.focusOffset!==v.offset)){var T=B.createRange();T.setStart(w.node,w.offset),C.removeAllRanges(),ee>Se?(C.addRange(T),C.extend(v.node,v.offset)):(T.setEnd(v.node,v.offset),C.addRange(T))}}}}for(B=[],C=c;C=C.parentNode;)C.nodeType===1&&B.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<B.length;c++){var U=B[c];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Fi=!!uo,co=uo=null}finally{he=n,E.p=l,h.T=a}}e.current=t,qe=2}}function tf(){if(qe===2){qe=0;var e=xa,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=h.T,h.T=null;var l=E.p;E.p=2;var n=he;he|=4;try{jd(e,t.alternate,t)}finally{he=n,E.p=l,h.T=a}}qe=3}}function af(){if(qe===4||qe===3){qe=0,Lm();var e=xa,t=Nl,a=ta,l=Gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Nl=xa=null,lf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(va=null),hr(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=h.T,n=E.p,E.p=2,h.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var c=l[s];i(c.value,{componentStack:c.stack})}}finally{h.T=t,E.p=n}}(ta&3)!==0&&Bi(),Ut(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ws?vn++:(vn=0,Ws=e):vn=0,xn(0)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Bi(){return ef(),tf(),af(),nf()}function nf(){if(qe!==5)return!1;var e=xa,t=Js;Js=0;var a=hr(ta),l=h.T,n=E.p;try{E.p=32>a?32:a,h.T=null,a=Fs,Fs=null;var i=xa,s=ta;if(qe=0,Nl=xa=null,ta=0,(he&6)!==0)throw Error(u(331));var c=he;if(he|=4,Hd(i.current),kd(i,i.current,s,a),he=c,xn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ll,i)}catch{}return!0}finally{E.p=n,h.T=l,lf(e,t)}}function rf(e,t,a){t=xt(a,t),t=Rs(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(Yl(e,2),Ut(e))}function ye(e,t,a){if(e.tag===3)rf(e,e,a);else for(;t!==null;){if(t.tag===3){rf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(va===null||!va.has(l))){e=xt(a,e),a=rd(2),l=_a(t,a,2),l!==null&&(sd(a,l,t,e),Yl(l,2),Ut(l));break}}t=t.return}}function $s(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new cp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Qs=!0,n.add(a),e=pp.bind(null,e,t,a),t.then(e,e))}function pp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(ce&a)===a&&(De===4||De===3&&(ce&62914560)===ce&&300>st()-Oi?(he&2)===0&&Rl(e,0):Zs|=a,Al===ce&&(Al=0)),Ut(e)}function sf(e,t){t===0&&(t=eu()),e=Ba(e,t),e!==null&&(Yl(e,t),Ut(e))}function hp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sf(e,a)}function gp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),sf(e,a)}function yp(e,t){return fr(e,t)}var Li=null,Cl=null,eo=!1,Hi=!1,to=!1,wa=0;function Ut(e){e!==Cl&&e.next===null&&(Cl===null?Li=Cl=e:Cl=Cl.next=e),Hi=!0,eo||(eo=!0,vp())}function xn(e,t){if(!to&&Hi){to=!0;do for(var a=!1,l=Li;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(s&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,df(l,i))}else i=ce,i=Xn(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Hl(l,i)||(a=!0,df(l,i));l=l.next}while(a);to=!1}}function bp(){of()}function of(){Hi=eo=!1;var e=0;wa!==0&&Cp()&&(e=wa);for(var t=st(),a=null,l=Li;l!==null;){var n=l.next,i=uf(l,t);i===0?(l.next=null,a===null?Li=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(Hi=!0)),l=n}qe!==0&&qe!==5||xn(e),wa!==0&&(wa=0)}function uf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-ut(i),c=1<<s,p=n[s];p===-1?((c&a)===0||(c&l)!==0)&&(n[s]=Zm(c,t)):p<=t&&(e.expiredLanes|=c),i&=~c}if(t=Ee,a=ce,a=Xn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&mr(l),hr(a)){case 2:case 8:a=Io;break;case 32:a=Hn;break;case 268435456:a=$o;break;default:a=Hn}return l=cf.bind(null,e),a=fr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&mr(l),e.callbackPriority=2,e.callbackNode=null,2}function cf(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var l=ce;return l=Xn(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vd(e,l,t),uf(e,st()),e.callbackNode!=null&&e.callbackNode===a?cf.bind(null,e):null)}function df(e,t){if(Bi())return null;Vd(e,t,!0)}function vp(){Mp(function(){(he&6)!==0?fr(Po,bp):of()})}function ao(){if(wa===0){var e=pl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),wa=e}return wa}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function mf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=ff((n[et]||null).action),s=l.submitter;s&&(t=(t=s[et]||null)?ff(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var c=new Pn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wa!==0){var p=s?mf(n,s):new FormData(n);Ss(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(c.preventDefault(),p=s?mf(n,s):new FormData(n),Ss(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var lo=0;lo<Hr.length;lo++){var no=Hr[lo],Sp=no.toLowerCase(),wp=no[0].toUpperCase()+no.slice(1);jt(Sp,"on"+wp)}jt(Xu,"onAnimationEnd"),jt(Vu,"onAnimationIteration"),jt(Qu,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(H_,"onTransitionRun"),jt(Y_,"onTransitionStart"),jt(q_,"onTransitionCancel"),jt(Zu,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function _f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var c=l[s],p=c.instance,A=c.currentTarget;if(c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=A;try{i(n)}catch(z){ei(z)}n.currentTarget=null,i=p}else for(s=0;s<l.length;s++){if(c=l[s],p=c.instance,A=c.currentTarget,c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=A;try{i(n)}catch(z){ei(z)}n.currentTarget=null,i=p}}}}function ue(e,t){var a=t[gr];a===void 0&&(a=t[gr]=new Set);var l=e+"__bubble";a.has(l)||(pf(t,e,2,!1),a.add(l))}function io(e,t,a){var l=0;t&&(l|=4),pf(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Yi]){e[Yi]=!0,su.forEach(function(a){a!=="selectionchange"&&(Ep.has(a)||io(a,!1,e),io(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,io("selectionchange",!1,t))}}function pf(e,t,a,l){switch(Vf(t)){case 2:var n=Ip;break;case 8:n=$p;break;default:n=So}a=n.bind(null,t,a,e),n=void 0,!Ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function so(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var c=l.stateNode.containerInfo;if(c===n)break;if(s===4)for(s=l.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;c!==null;){if(s=Ia(c),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){l=i=s;continue e}c=c.parentNode}}l=l.return}bu(function(){var A=i,z=Er(a),B=[];e:{var N=Ku.get(e);if(N!==void 0){var C=Pn,Z=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":C=g_;break;case"focusin":Z="focus",C=Cr;break;case"focusout":Z="blur",C=Cr;break;case"beforeblur":case"afterblur":C=Cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=v_;break;case Xu:case Vu:case Qu:C=o_;break;case Zu:C=S_;break;case"scroll":case"scrollend":C=l_;break;case"wheel":C=E_;break;case"copy":case"cut":case"paste":C=c_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Eu;break;case"toggle":case"beforetoggle":C=A_}var ee=(t&4)!==0,Se=!ee&&(e==="scroll"||e==="scrollend"),w=ee?N!==null?N+"Capture":null:N;ee=[];for(var v=A,T;v!==null;){var U=v;if(T=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||T===null||w===null||(U=Xl(v,w),U!=null&&ee.push(wn(v,U,T))),Se)break;v=v.return}0<ee.length&&(N=new C(N,Z,null,a,z),B.push({event:N,listeners:ee}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",N&&a!==wr&&(Z=a.relatedTarget||a.fromElement)&&(Ia(Z)||Z[Pa]))break e;if((C||N)&&(N=z.window===z?z:(N=z.ownerDocument)?N.defaultView||N.parentWindow:window,C?(Z=a.relatedTarget||a.toElement,C=A,Z=Z?Ia(Z):null,Z!==null&&(Se=y(Z),ee=Z.tag,Z!==Se||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(C=null,Z=A),C!==Z)){if(ee=Su,U="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Eu,U="onPointerLeave",w="onPointerEnter",v="pointer"),Se=C==null?N:Gl(C),T=Z==null?N:Gl(Z),N=new ee(U,v+"leave",C,a,z),N.target=Se,N.relatedTarget=T,U=null,Ia(z)===A&&(ee=new ee(w,v+"enter",Z,a,z),ee.target=T,ee.relatedTarget=Se,U=ee),Se=U,C&&Z)t:{for(ee=Tp,w=C,v=Z,T=0,U=w;U;U=ee(U))T++;U=0;for(var P=v;P;P=ee(P))U++;for(;0<T-U;)w=ee(w),T--;for(;0<U-T;)v=ee(v),U--;for(;T--;){if(w===v||v!==null&&w===v.alternate){ee=w;break t}w=ee(w),v=ee(v)}ee=null}else ee=null;C!==null&&hf(B,N,C,ee,!1),Z!==null&&Se!==null&&hf(B,Se,Z,ee,!0)}}e:{if(N=A?Gl(A):window,C=N.nodeName&&N.nodeName.toLowerCase(),C==="select"||C==="input"&&N.type==="file")var _e=Mu;else if(Cu(N))if(Du)_e=k_;else{_e=z_;var J=D_}else C=N.nodeName,!C||C.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?A&&Sr(A.elementType)&&(_e=Mu):_e=U_;if(_e&&(_e=_e(e,A))){Ou(B,_e,a,z);break e}J&&J(e,N,A),e==="focusout"&&A&&N.type==="number"&&A.memoizedProps.value!=null&&xr(N,"number",N.value)}switch(J=A?Gl(A):window,e){case"focusin":(Cu(J)||J.contentEditable==="true")&&(sl=J,kr=A,Pl=null);break;case"focusout":Pl=kr=sl=null;break;case"mousedown":Br=!0;break;case"contextmenu":case"mouseup":case"dragend":Br=!1,qu(B,a,z);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":qu(B,a,z)}var ie;if(Mr)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else rl?Ru(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Tu&&a.locale!=="ko"&&(rl||de!=="onCompositionStart"?de==="onCompositionEnd"&&rl&&(ie=vu()):(sa=z,Nr="value"in sa?sa.value:sa.textContent,rl=!0)),J=qi(A,de),0<J.length&&(de=new wu(de,e,null,a,z),B.push({event:de,listeners:J}),ie?de.data=ie:(ie=ju(a),ie!==null&&(de.data=ie)))),(ie=R_?j_(e,a):C_(e,a))&&(de=qi(A,"onBeforeInput"),0<de.length&&(J=new wu("onBeforeInput","beforeinput",null,a,z),B.push({event:J,listeners:de}),J.data=ie)),xp(B,e,A,a,z)}_f(B,t)})}function wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Xl(e,a),n!=null&&l.unshift(wn(e,n,i)),n=Xl(e,t),n!=null&&l.push(wn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Tp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hf(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var c=a,p=c.alternate,A=c.stateNode;if(c=c.tag,p!==null&&p===l)break;c!==5&&c!==26&&c!==27||A===null||(p=A,n?(A=Xl(a,i),A!=null&&s.unshift(wn(a,A,p))):n||(A=Xl(a,i),A!=null&&s.push(wn(a,A,p)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Ap=/\r\n?/g,Np=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Np,"")}function yf(e,t){return t=gf(t),gf(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,l);break;case"style":gu(e,l,i);break;case"data":if(t!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Vn(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=t_.get(a)||a,Vn(e,a,l))}}function oo(e,t,a,l,n,i){switch(a){case"style":gu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ou.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[et]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Vn(e,a,l)}}}function We(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,i,s,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var c=i=s=n=null,p=null,A=null;for(l in a)if(a.hasOwnProperty(l)){var z=a[l];if(z!=null)switch(l){case"name":n=z;break;case"type":s=z;break;case"checked":p=z;break;case"defaultChecked":A=z;break;case"value":i=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:xe(e,t,l,z,a,null)}}mu(e,i,c,p,A,s,n,!1);return;case"select":ue("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":s=c;break;case"multiple":l=c;default:xe(e,t,n,c,a,null)}t=i,a=s,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ue("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(c=a[s],c!=null))switch(s){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:xe(e,t,s,c,a,null)}pu(e,l,n,i);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":xe(e,t,p,l,a,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ue(Sn[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,A,l,a,null)}return;default:if(Sr(t)){for(z in a)a.hasOwnProperty(z)&&(l=a[z],l!==void 0&&oo(e,t,z,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&xe(e,t,c,l,a,null))}function Rp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,c=null,p=null,A=null,z=null;for(C in a){var B=a[C];if(a.hasOwnProperty(C)&&B!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":p=B;default:l.hasOwnProperty(C)||xe(e,t,C,null,l,B)}}for(var N in l){var C=l[N];if(B=a[N],l.hasOwnProperty(N)&&(C!=null||B!=null))switch(N){case"type":i=C;break;case"name":n=C;break;case"checked":A=C;break;case"defaultChecked":z=C;break;case"value":s=C;break;case"defaultValue":c=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:C!==B&&xe(e,t,N,C,l,B)}}vr(e,s,c,p,A,z,i,n);return;case"select":C=s=c=N=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":C=p;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":N=i;break;case"defaultValue":c=i;break;case"multiple":s=i;default:i!==p&&xe(e,t,n,i,l,p)}t=c,a=s,l=C,N!=null?al(e,!!a,N,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":C=N=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:xe(e,t,c,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":N=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&xe(e,t,s,n,l,i)}_u(e,N,C);return;case"option":for(var Z in a)N=a[Z],a.hasOwnProperty(Z)&&N!=null&&!l.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:xe(e,t,Z,null,l,N));for(p in l)N=l[p],C=a[p],l.hasOwnProperty(p)&&N!==C&&(N!=null||C!=null)&&(p==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":xe(e,t,p,N,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)N=a[ee],a.hasOwnProperty(ee)&&N!=null&&!l.hasOwnProperty(ee)&&xe(e,t,ee,null,l,N);for(A in l)if(N=l[A],C=a[A],l.hasOwnProperty(A)&&N!==C&&(N!=null||C!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:xe(e,t,A,N,l,C)}return;default:if(Sr(t)){for(var Se in a)N=a[Se],a.hasOwnProperty(Se)&&N!==void 0&&!l.hasOwnProperty(Se)&&oo(e,t,Se,void 0,l,N);for(z in l)N=l[z],C=a[z],!l.hasOwnProperty(z)||N===C||N===void 0&&C===void 0||oo(e,t,z,N,l,C);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!l.hasOwnProperty(w)&&xe(e,t,w,null,l,N);for(B in l)N=l[B],C=a[B],!l.hasOwnProperty(B)||N===C||N==null&&C==null||xe(e,t,B,N,l,C)}function bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,c=n.duration;if(i&&c&&bf(s)){for(s=0,c=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],A=p.startTime;if(A>c)break;var z=p.transferSize,B=p.initiatorType;z&&bf(B)&&(p=p.responseEnd,s+=z*(p<c?1:(c-A)/(p-A)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uo=null,co=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mo=null;function Cp(){var e=window.event;return e&&e.type==="popstate"?e===mo?!1:(mo=e,!0):(mo=null,!1)}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,Mp=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(e){return wf.resolve(null).then(e).catch(Dp)}:Sf;function Dp(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Ef(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),zl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")En(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,En(a);for(var i=a.firstChild;i;){var s=i.nextSibling,c=i.nodeName;i[ql]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&En(e.ownerDocument.body);a=n}while(a);zl(t)}function Tf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_o(a),yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function Up(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function Af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function po(e){return e.data==="$?"||e.data==="$~"}function ho(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var go=null;function Nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return At(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function jf(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function En(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yr(e)}var Nt=new Map,Cf=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=E.d;E.d={f:Bp,r:Lp,D:Hp,C:Yp,L:qp,m:Gp,X:Vp,S:Xp,M:Qp};function Bp(){var e=aa.f(),t=zi();return e||t}function Lp(e){var t=$a(e);t!==null&&t.tag===5&&t.type==="form"?Zc(t):aa.r(e)}var Ol=typeof document>"u"?null:document;function Of(e,t,a){var l=Ol;if(l&&typeof t=="string"&&t){var n=bt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Cf.has(n)||(Cf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),We(t,"link",e),Xe(t),l.head.appendChild(t)))}}function Hp(e){aa.D(e),Of("dns-prefetch",e,null)}function Yp(e,t){aa.C(e,t),Of("preconnect",e,t)}function qp(e,t,a){aa.L(e,t,a);var l=Ol;if(l&&e&&t){var n='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+bt(a.imageSizes)+'"]')):n+='[href="'+bt(e)+'"]';var i=n;switch(t){case"style":i=Ml(e);break;case"script":i=Dl(e)}Nt.has(i)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Nt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Tn(i))||t==="script"&&l.querySelector(An(i))||(t=l.createElement("link"),We(t,"link",e),Xe(t),l.head.appendChild(t)))}}function Gp(e,t){aa.m(e,t);var a=Ol;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dl(e)}if(!Nt.has(i)&&(e=j({rel:"modulepreload",href:e},t),Nt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(An(i)))return}l=a.createElement("link"),We(l,"link",e),Xe(l),a.head.appendChild(l)}}}function Xp(e,t,a){aa.S(e,t,a);var l=Ol;if(l&&e){var n=el(l).hoistableStyles,i=Ml(e);t=t||"default";var s=n.get(i);if(!s){var c={loading:0,preload:null};if(s=l.querySelector(Tn(i)))c.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Nt.get(i))&&yo(e,a);var p=s=l.createElement("link");Xe(p),We(p,"link",e),p._p=new Promise(function(A,z){p.onload=A,p.onerror=z}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Vi(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:c},n.set(i,s)}}}function Vp(e,t){aa.X(e,t);var a=Ol;if(a&&e){var l=el(a).hoistableScripts,n=Dl(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=j({src:e,async:!0},t),(t=Nt.get(n))&&bo(e,t),i=a.createElement("script"),Xe(i),We(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Qp(e,t){aa.M(e,t);var a=Ol;if(a&&e){var l=el(a).hoistableScripts,n=Dl(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=j({src:e,async:!0,type:"module"},t),(t=Nt.get(n))&&bo(e,t),i=a.createElement("script"),Xe(i),We(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Mf(e,t,a,l){var n=(n=re.current)?Xi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var i=el(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(Tn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Nt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nt.set(e,a),i||Zp(n,e,a,s.state))),t&&l===null)throw Error(u(528,""));return s}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ml(e){return'href="'+bt(e)+'"'}function Tn(e){return'link[rel="stylesheet"]['+e+"]"}function Df(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Zp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),We(t,"link",a),Xe(t),e.head.appendChild(t))}function Dl(e){return'[src="'+bt(e)+'"]'}function An(e){return"script[async]"+e}function zf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),We(l,"style",n),Vi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ml(a.href);var i=e.querySelector(Tn(n));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;l=Df(a),(n=Nt.get(n))&&yo(l,n),i=(e.ownerDocument||e).createElement("link"),Xe(i);var s=i;return s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),We(i,"link",l),t.state.loading|=4,Vi(i,a.precedence,e),t.instance=i;case"script":return i=Dl(a.src),(n=e.querySelector(An(i)))?(t.instance=n,Xe(n),n):(l=a,(n=Nt.get(i))&&(l=j({},a),bo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),We(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Vi(l,a.precedence,e));return t.instance}function Vi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var c=l[s];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qi=null;function Uf(e,t,a){if(Qi===null){var l=new Map,n=Qi=new Map;n.set(a,l)}else n=Qi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[ql]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var c=l.get(s);c?c.push(i):l.set(s,[i])}}return l}function kf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Kp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ml(l.href),i=t.querySelector(Tn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Xe(i);return}i=t.ownerDocument||t,l=Df(l),(n=Nt.get(n))&&yo(l,n),i=i.createElement("link"),Xe(i);var s=i;s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),We(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var vo=0;function Fp(e,t){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&vo===0&&(vo=62500*jp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>vo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(Wp,e),Ki=null,Zi.call(e))}function Wp(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:I,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Pp(e,t,a,l,n,i,s,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Lf(e,t,a,l,n,i,s,c,p,A,z,B){return e=new Pp(e,t,a,s,p,A,z,B,c),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=Ir(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},as(i),e}function Hf(e){return e?(e=cl,e):cl}function Yf(e,t,a,l,n,i){n=Hf(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=_a(e,l,t),a!==null&&(rt(a,e,t),nn(a,e,t))}function qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xo(e,t){qf(e,t),(e=e.alternate)&&qf(e,t)}function Gf(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&rt(t,e,67108864),xo(e,67108864)}}function Xf(e){if(e.tag===13||e.tag===31){var t=ht();t=pr(t);var a=Ba(e,t);a!==null&&rt(a,e,t),xo(e,t)}}var Fi=!0;function Ip(e,t,a,l){var n=h.T;h.T=null;var i=E.p;try{E.p=2,So(e,t,a,l)}finally{E.p=i,h.T=n}}function $p(e,t,a,l){var n=h.T;h.T=null;var i=E.p;try{E.p=8,So(e,t,a,l)}finally{E.p=i,h.T=n}}function So(e,t,a,l){if(Fi){var n=wo(l);if(n===null)so(e,t,l,Wi,a),Qf(e,l);else if(th(n,e,t,a,l))l.stopPropagation();else if(Qf(e,l),t&4&&-1<eh.indexOf(e)){for(;n!==null;){var i=$a(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ma(i.pendingLanes);if(s!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var p=1<<31-ut(s);c.entanglements[1]|=p,s&=~p}Ut(i),(he&6)===0&&(Mi=st()+500,xn(0))}}break;case 31:case 13:c=Ba(i,2),c!==null&&rt(c,i,2),zi(),xo(i,2)}if(i=wo(l),i===null&&so(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else so(e,t,l,null,a)}}function wo(e){return e=Er(e),Eo(e)}var Wi=null;function Eo(e){if(Wi=null,e=Ia(e),e!==null){var t=y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function Vf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hm()){case Po:return 2;case Io:return 8;case Hn:case Ym:return 32;case $o:return 268435456;default:return 32}default:return 32}}var To=!1,Ta=null,Aa=null,Na=null,Rn=new Map,jn=new Map,Ra=[],eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qf(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Cn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=$a(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function th(e,t,a,l,n){switch(t){case"focusin":return Ta=Cn(Ta,e,t,a,l,n),!0;case"dragenter":return Aa=Cn(Aa,e,t,a,l,n),!0;case"mouseover":return Na=Cn(Na,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Rn.set(i,Cn(Rn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,Cn(jn.get(i)||null,e,t,a,l,n)),!0}return!1}function Zf(e){var t=Ia(e.target);if(t!==null){var a=y(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,iu(e.priority,function(){Xf(a)});return}}else if(t===31){if(t=S(a),t!==null){e.blockedOn=t,iu(e.priority,function(){Xf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);wr=l,a.target.dispatchEvent(l),wr=null}else return t=$a(a),t!==null&&Gf(t),e.blockedOn=a,!1;t.shift()}return!0}function Kf(e,t,a){Pi(e)&&a.delete(t)}function ah(){To=!1,Ta!==null&&Pi(Ta)&&(Ta=null),Aa!==null&&Pi(Aa)&&(Aa=null),Na!==null&&Pi(Na)&&(Na=null),Rn.forEach(Kf),jn.forEach(Kf)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ah)))}var $i=null;function Jf(e){$i!==e&&($i=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$i===e&&($i=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Eo(l||a)===null)continue;break}var i=$a(a);i!==null&&(e.splice(t,3),t-=3,Ss(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function zl(e){function t(p){return Ii(p,e)}Ta!==null&&Ii(Ta,e),Aa!==null&&Ii(Aa,e),Na!==null&&Ii(Na,e),Rn.forEach(t),jn.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Zf(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[et]||null;if(typeof i=="function")s||Jf(a);else if(s){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[et]||null)c=s.formAction;else if(Eo(n)!==null)continue}else c=s.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Jf(a)}}}function Ff(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ao(e){this._internalRoot=e}er.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=ht();Yf(a,l,e,t,null,null)},er.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yf(e.current,2,null,e,null,null),zi(),t[Pa]=null}};function er(e){this._internalRoot=e}er.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Zf(e)}};var Wf=d.version;if(Wf!=="19.2.3")throw Error(u(527,Wf,"19.2.3"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var lh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{Ll=tr.inject(lh),ot=tr}catch{}}return Mn.createRoot=function(e,t){if(!_(e))throw Error(u(299));var a=!1,l="",n=ad,i=ld,s=nd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Lf(e,1,!1,null,null,a,l,null,n,i,s,Ff),e[Pa]=t.current,ro(e),new Ao(t)},Mn.hydrateRoot=function(e,t,a){if(!_(e))throw Error(u(299));var l=!1,n="",i=ad,s=ld,c=nd,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Lf(e,1,!0,t,a??null,l,n,p,i,s,c,Ff),t.context=Hf(null),a=t.current,l=ht(),l=pr(l),n=ma(l),n.callback=null,_a(a,n,l),a=l,t.current.lanes=a,Yl(t,a),Ut(t),e[Pa]=t.current,ro(e),new er(t)},Mn.version="19.2.3",Mn}var rm;function _h(){if(rm)return jo.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),jo.exports=mh(),jo.exports}var ph=_h();var sm="popstate";function hh(r={}){function d(u,_){let{pathname:y,search:x,hash:S}=u.location;return Yo("",{pathname:y,search:x,hash:S},_.state&&_.state.usr||null,_.state&&_.state.key||"default")}function f(u,_){return typeof _=="string"?_:zn(_)}return yh(d,f,null,r)}function Oe(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function kt(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function gh(){return Math.random().toString(36).substring(2,10)}function om(r,d){return{usr:r.state,key:r.key,idx:d}}function Yo(r,d,f=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Ul(d):d,state:f,key:d&&d.key||u||gh()}}function zn({pathname:r="/",search:d="",hash:f=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Ul(r){let d={};if(r){let f=r.indexOf("#");f>=0&&(d.hash=r.substring(f),r=r.substring(0,f));let u=r.indexOf("?");u>=0&&(d.search=r.substring(u),r=r.substring(0,u)),r&&(d.pathname=r)}return d}function yh(r,d,f,u={}){let{window:_=document.defaultView,v5Compat:y=!1}=u,x=_.history,S="POP",g=null,m=R();m==null&&(m=0,x.replaceState({...x.state,idx:m},""));function R(){return(x.state||{idx:null}).idx}function j(){S="POP";let K=R(),W=K==null?null:K-m;m=K,g&&g({action:S,location:V.location,delta:W})}function Y(K,W){S="PUSH";let Q=Yo(V.location,K,W);m=R()+1;let I=om(Q,m),we=V.createHref(Q);try{x.pushState(I,"",we)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;_.location.assign(we)}y&&g&&g({action:S,location:V.location,delta:1})}function q(K,W){S="REPLACE";let Q=Yo(V.location,K,W);m=R();let I=om(Q,m),we=V.createHref(Q);x.replaceState(I,"",we),y&&g&&g({action:S,location:V.location,delta:0})}function F(K){return bh(K)}let V={get action(){return S},get location(){return r(_,x)},listen(K){if(g)throw new Error("A history only accepts one active listener");return _.addEventListener(sm,j),g=K,()=>{_.removeEventListener(sm,j),g=null}},createHref(K){return d(_,K)},createURL:F,encodeLocation(K){let W=F(K);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:Y,replace:q,go(K){return x.go(K)}};return V}function bh(r,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(f,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:zn(r);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function gm(r,d,f="/"){return vh(r,d,f,!1)}function vh(r,d,f,u){let _=typeof d=="string"?Ul(d):d,y=na(_.pathname||"/",f);if(y==null)return null;let x=ym(r);xh(x);let S=null;for(let g=0;S==null&&g<x.length;++g){let m=Mh(y);S=Ch(x[g],m,u)}return S}function ym(r,d=[],f=[],u="",_=!1){let y=(x,S,g=_,m)=>{let R={relativePath:m===void 0?x.path||"":m,caseSensitive:x.caseSensitive===!0,childrenIndex:S,route:x};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(u)&&g)return;Oe(R.relativePath.startsWith(u),`Absolute route path "${R.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(u.length)}let j=la([u,R.relativePath]),Y=f.concat(R);x.children&&x.children.length>0&&(Oe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),ym(x.children,d,Y,j,g)),!(x.path==null&&!x.index)&&d.push({path:j,score:Rh(j,x.index),routesMeta:Y})};return r.forEach((x,S)=>{if(x.path===""||!x.path?.includes("?"))y(x,S);else for(let g of bm(x.path))y(x,S,!0,g)}),d}function bm(r){let d=r.split("/");if(d.length===0)return[];let[f,...u]=d,_=f.endsWith("?"),y=f.replace(/\?$/,"");if(u.length===0)return _?[y,""]:[y];let x=bm(u.join("/")),S=[];return S.push(...x.map(g=>g===""?y:[y,g].join("/"))),_&&S.push(...x),S.map(g=>r.startsWith("/")&&g===""?"/":g)}function xh(r){r.sort((d,f)=>d.score!==f.score?f.score-d.score:jh(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var Sh=/^:[\w-]+$/,wh=3,Eh=2,Th=1,Ah=10,Nh=-2,um=r=>r==="*";function Rh(r,d){let f=r.split("/"),u=f.length;return f.some(um)&&(u+=Nh),d&&(u+=Eh),f.filter(_=>!um(_)).reduce((_,y)=>_+(Sh.test(y)?wh:y===""?Th:Ah),u)}function jh(r,d){return r.length===d.length&&r.slice(0,-1).every((u,_)=>u===d[_])?r[r.length-1]-d[d.length-1]:0}function Ch(r,d,f=!1){let{routesMeta:u}=r,_={},y="/",x=[];for(let S=0;S<u.length;++S){let g=u[S],m=S===u.length-1,R=y==="/"?d:d.slice(y.length)||"/",j=ir({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},R),Y=g.route;if(!j&&m&&f&&!u[u.length-1].route.index&&(j=ir({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},R)),!j)return null;Object.assign(_,j.params),x.push({params:_,pathname:la([y,j.pathname]),pathnameBase:kh(la([y,j.pathnameBase])),route:Y}),j.pathnameBase!=="/"&&(y=la([y,j.pathnameBase]))}return x}function ir(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,u]=Oh(r.path,r.caseSensitive,r.end),_=d.match(f);if(!_)return null;let y=_[0],x=y.replace(/(.)\/+$/,"$1"),S=_.slice(1);return{params:u.reduce((m,{paramName:R,isOptional:j},Y)=>{if(R==="*"){let F=S[Y]||"";x=y.slice(0,y.length-F.length).replace(/(.)\/+$/,"$1")}const q=S[Y];return j&&!q?m[R]=void 0:m[R]=(q||"").replace(/%2F/g,"/"),m},{}),pathname:y,pathnameBase:x,pattern:r}}function Oh(r,d=!1,f=!0){kt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],_="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,S,g)=>(u.push({paramName:S,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),_+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?_+="\\/*$":r!==""&&r!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,d?void 0:"i"),u]}function Mh(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return kt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function na(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=r.charAt(f);return u&&u!=="/"?null:r.slice(f)||"/"}var Dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function zh(r,d="/"){let{pathname:f,search:u="",hash:_=""}=typeof r=="string"?Ul(r):r,y;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?y=cm(f.substring(1),"/"):y=cm(f,d)):y=d,{pathname:y,search:Bh(u),hash:Lh(_)}}function cm(r,d){let f=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(_=>{_===".."?f.length>1&&f.pop():_!=="."&&f.push(_)}),f.length>1?f.join("/"):"/"}function Do(r,d,f,u){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uh(r){return r.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function vm(r){let d=Uh(r);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function xm(r,d,f,u=!1){let _;typeof r=="string"?_=Ul(r):(_={...r},Oe(!_.pathname||!_.pathname.includes("?"),Do("?","pathname","search",_)),Oe(!_.pathname||!_.pathname.includes("#"),Do("#","pathname","hash",_)),Oe(!_.search||!_.search.includes("#"),Do("#","search","hash",_)));let y=r===""||_.pathname==="",x=y?"/":_.pathname,S;if(x==null)S=f;else{let j=d.length-1;if(!u&&x.startsWith("..")){let Y=x.split("/");for(;Y[0]==="..";)Y.shift(),j-=1;_.pathname=Y.join("/")}S=j>=0?d[j]:"/"}let g=zh(_,S),m=x&&x!=="/"&&x.endsWith("/"),R=(y||x===".")&&f.endsWith("/");return!g.pathname.endsWith("/")&&(m||R)&&(g.pathname+="/"),g}var la=r=>r.join("/").replace(/\/\/+/g,"/"),kh=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Bh=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Lh=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Hh=class{constructor(r,d,f,u=!1){this.status=r,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Yh(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function qh(r){return r.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wm(r,d){let f=r;if(typeof f!="string"||!Dh.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,_=!1;if(Sm)try{let y=new URL(window.location.href),x=f.startsWith("//")?new URL(y.protocol+f):new URL(f),S=na(x.pathname,d);x.origin===y.origin&&S!=null?f=S+x.search+x.hash:_=!0}catch{kt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:_,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Em=["POST","PUT","PATCH","DELETE"];new Set(Em);var Gh=["GET",...Em];new Set(Gh);var kl=M.createContext(null);kl.displayName="DataRouter";var rr=M.createContext(null);rr.displayName="DataRouterState";var Xh=M.createContext(!1),Tm=M.createContext({isTransitioning:!1});Tm.displayName="ViewTransition";var Vh=M.createContext(new Map);Vh.displayName="Fetchers";var Qh=M.createContext(null);Qh.displayName="Await";var Rt=M.createContext(null);Rt.displayName="Navigation";var Un=M.createContext(null);Un.displayName="Location";var Bt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Xo=M.createContext(null);Xo.displayName="RouteError";var Am="REACT_ROUTER_ERROR",Zh="REDIRECT",Kh="ROUTE_ERROR_RESPONSE";function Jh(r){if(r.startsWith(`${Am}:${Zh}:{`))try{let d=JSON.parse(r.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Fh(r){if(r.startsWith(`${Am}:${Kh}:{`))try{let d=JSON.parse(r.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Hh(d.status,d.statusText,d.data)}catch{}}function Wh(r,{relative:d}={}){Oe(kn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=M.useContext(Rt),{hash:_,pathname:y,search:x}=Bn(r,{relative:d}),S=y;return f!=="/"&&(S=y==="/"?f:la([f,y])),u.createHref({pathname:S,search:x,hash:_})}function kn(){return M.useContext(Un)!=null}function Ca(){return Oe(kn(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Un).location}var Nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rm(r){M.useContext(Rt).static||M.useLayoutEffect(r)}function Ph(){let{isDataRoute:r}=M.useContext(Bt);return r?dg():Ih()}function Ih(){Oe(kn(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext(kl),{basename:d,navigator:f}=M.useContext(Rt),{matches:u}=M.useContext(Bt),{pathname:_}=Ca(),y=JSON.stringify(vm(u)),x=M.useRef(!1);return Rm(()=>{x.current=!0}),M.useCallback((g,m={})=>{if(kt(x.current,Nm),!x.current)return;if(typeof g=="number"){f.go(g);return}let R=xm(g,JSON.parse(y),_,m.relative==="path");r==null&&d!=="/"&&(R.pathname=R.pathname==="/"?d:la([d,R.pathname])),(m.replace?f.replace:f.push)(R,m.state,m)},[d,f,y,_,r])}M.createContext(null);function $h(){let{matches:r}=M.useContext(Bt),d=r[r.length-1];return d?d.params:{}}function Bn(r,{relative:d}={}){let{matches:f}=M.useContext(Bt),{pathname:u}=Ca(),_=JSON.stringify(vm(f));return M.useMemo(()=>xm(r,JSON.parse(_),u,d==="path"),[r,_,u,d])}function eg(r,d){return jm(r,d)}function jm(r,d,f,u,_){Oe(kn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:y}=M.useContext(Rt),{matches:x}=M.useContext(Bt),S=x[x.length-1],g=S?S.params:{},m=S?S.pathname:"/",R=S?S.pathnameBase:"/",j=S&&S.route;{let Q=j&&j.path||"";Om(m,!j||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let Y=Ca(),q;if(d){let Q=typeof d=="string"?Ul(d):d;Oe(R==="/"||Q.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),q=Q}else q=Y;let F=q.pathname||"/",V=F;if(R!=="/"){let Q=R.replace(/^\//,"").split("/");V="/"+F.replace(/^\//,"").split("/").slice(Q.length).join("/")}let K=gm(r,{pathname:V});kt(j||K!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),kt(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=ig(K&&K.map(Q=>Object.assign({},Q,{params:Object.assign({},g,Q.params),pathname:la([R,y.encodeLocation?y.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?R:la([R,y.encodeLocation?y.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),x,f,u,_);return d&&W?M.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},W):W}function tg(){let r=cg(),d=Yh(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:u},y={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:y},"ErrorBoundary")," or"," ",M.createElement("code",{style:y},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},d),f?M.createElement("pre",{style:_},f):null,x)}var ag=M.createElement(tg,null),Cm=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=Fh(r.digest);f&&(r=f)}let d=r!==void 0?M.createElement(Bt.Provider,{value:this.props.routeContext},M.createElement(Xo.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?M.createElement(lg,{error:r},d):d}};Cm.contextType=Xh;var zo=new WeakMap;function lg({children:r,error:d}){let{basename:f}=M.useContext(Rt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Jh(d.digest);if(u){let _=zo.get(d);if(_)throw _;let y=wm(u.location,f);if(Sm&&!zo.get(d))if(y.isExternal||u.reloadDocument)window.location.href=y.absoluteURL||y.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(y.to,{replace:u.replace}));throw zo.set(d,x),x}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${y.absoluteURL||y.to}`})}}return r}function ng({routeContext:r,match:d,children:f}){let u=M.useContext(kl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),M.createElement(Bt.Provider,{value:r},f)}function ig(r,d=[],f=null,u=null,_=null){if(r==null){if(!f)return null;if(f.errors)r=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)r=f.matches;else return null}let y=r,x=f?.errors;if(x!=null){let R=y.findIndex(j=>j.route.id&&x?.[j.route.id]!==void 0);Oe(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),y=y.slice(0,Math.min(y.length,R+1))}let S=!1,g=-1;if(f)for(let R=0;R<y.length;R++){let j=y[R];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(g=R),j.route.id){let{loaderData:Y,errors:q}=f,F=j.route.loader&&!Y.hasOwnProperty(j.route.id)&&(!q||q[j.route.id]===void 0);if(j.route.lazy||F){S=!0,g>=0?y=y.slice(0,g+1):y=[y[0]];break}}}let m=f&&u?(R,j)=>{u(R,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:qh(f.matches),errorInfo:j})}:void 0;return y.reduceRight((R,j,Y)=>{let q,F=!1,V=null,K=null;f&&(q=x&&j.route.id?x[j.route.id]:void 0,V=j.route.errorElement||ag,S&&(g<0&&Y===0?(Om("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,K=null):g===Y&&(F=!0,K=j.route.hydrateFallbackElement||null)));let W=d.concat(y.slice(0,Y+1)),Q=()=>{let I;return q?I=V:F?I=K:j.route.Component?I=M.createElement(j.route.Component,null):j.route.element?I=j.route.element:I=R,M.createElement(ng,{match:j,routeContext:{outlet:R,matches:W,isDataRoute:f!=null},children:I})};return f&&(j.route.ErrorBoundary||j.route.errorElement||Y===0)?M.createElement(Cm,{location:f.location,revalidation:f.revalidation,component:V,error:q,children:Q(),routeContext:{outlet:null,matches:W,isDataRoute:!0},onError:m}):Q()},null)}function Vo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rg(r){let d=M.useContext(kl);return Oe(d,Vo(r)),d}function sg(r){let d=M.useContext(rr);return Oe(d,Vo(r)),d}function og(r){let d=M.useContext(Bt);return Oe(d,Vo(r)),d}function Qo(r){let d=og(r),f=d.matches[d.matches.length-1];return Oe(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function ug(){return Qo("useRouteId")}function cg(){let r=M.useContext(Xo),d=sg("useRouteError"),f=Qo("useRouteError");return r!==void 0?r:d.errors?.[f]}function dg(){let{router:r}=rg("useNavigate"),d=Qo("useNavigate"),f=M.useRef(!1);return Rm(()=>{f.current=!0}),M.useCallback(async(_,y={})=>{kt(f.current,Nm),f.current&&(typeof _=="number"?await r.navigate(_):await r.navigate(_,{fromRouteId:d,...y}))},[r,d])}var dm={};function Om(r,d,f){!d&&!dm[r]&&(dm[r]=!0,kt(!1,f))}M.memo(fg);function fg({routes:r,future:d,state:f,onError:u}){return jm(r,void 0,f,u,d)}function Wa(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mg({basename:r="/",children:d=null,location:f,navigationType:u="POP",navigator:_,static:y=!1,unstable_useTransitions:x}){Oe(!kn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=r.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:S,navigator:_,static:y,unstable_useTransitions:x,future:{}}),[S,_,y,x]);typeof f=="string"&&(f=Ul(f));let{pathname:m="/",search:R="",hash:j="",state:Y=null,key:q="default"}=f,F=M.useMemo(()=>{let V=na(m,S);return V==null?null:{location:{pathname:V,search:R,hash:j,state:Y,key:q},navigationType:u}},[S,m,R,j,Y,q,u]);return kt(F!=null,`<Router basename="${S}"> is not able to match the URL "${m}${R}${j}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:M.createElement(Rt.Provider,{value:g},M.createElement(Un.Provider,{children:d,value:F}))}function _g({children:r,location:d}){return eg(qo(r),d)}function qo(r,d=[]){let f=[];return M.Children.forEach(r,(u,_)=>{if(!M.isValidElement(u))return;let y=[...d,_];if(u.type===M.Fragment){f.push.apply(f,qo(u.props.children,y));return}Oe(u.type===Wa,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let x={id:u.props.id||y.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(x.children=qo(u.props.children,y)),f.push(x)}),f}var lr="get",nr="application/x-www-form-urlencoded";function sr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function pg(r){return sr(r)&&r.tagName.toLowerCase()==="button"}function hg(r){return sr(r)&&r.tagName.toLowerCase()==="form"}function gg(r){return sr(r)&&r.tagName.toLowerCase()==="input"}function yg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function bg(r,d){return r.button===0&&(!d||d==="_self")&&!yg(r)}var ar=null;function vg(){if(ar===null)try{new FormData(document.createElement("form"),0),ar=!1}catch{ar=!0}return ar}var xg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uo(r){return r!=null&&!xg.has(r)?(kt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nr}"`),null):r}function Sg(r,d){let f,u,_,y,x;if(hg(r)){let S=r.getAttribute("action");u=S?na(S,d):null,f=r.getAttribute("method")||lr,_=Uo(r.getAttribute("enctype"))||nr,y=new FormData(r)}else if(pg(r)||gg(r)&&(r.type==="submit"||r.type==="image")){let S=r.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||S.getAttribute("action");if(u=g?na(g,d):null,f=r.getAttribute("formmethod")||S.getAttribute("method")||lr,_=Uo(r.getAttribute("formenctype"))||Uo(S.getAttribute("enctype"))||nr,y=new FormData(S,r),!vg()){let{name:m,type:R,value:j}=r;if(R==="image"){let Y=m?`${m}.`:"";y.append(`${Y}x`,"0"),y.append(`${Y}y`,"0")}else m&&y.append(m,j)}}else{if(sr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=lr,u=null,_=nr,x=r}return y&&_==="text/plain"&&(x=y,y=void 0),{action:u,method:f.toLowerCase(),encType:_,formData:y,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zo(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function wg(r,d,f,u){let _=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?_.pathname.endsWith("/")?_.pathname=`${_.pathname}_.${u}`:_.pathname=`${_.pathname}.${u}`:_.pathname==="/"?_.pathname=`_root.${u}`:d&&na(_.pathname,d)==="/"?_.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:_.pathname=`${_.pathname.replace(/\/$/,"")}.${u}`,_}async function Eg(r,d){if(r.id in d)return d[r.id];try{let f=await import(r.module);return d[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ag(r,d,f){let u=await Promise.all(r.map(async _=>{let y=d.routes[_.route.id];if(y){let x=await Eg(y,f);return x.links?x.links():[]}return[]}));return Cg(u.flat(1).filter(Tg).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function fm(r,d,f,u,_,y){let x=(g,m)=>f[m]?g.route.id!==f[m].route.id:!0,S=(g,m)=>f[m].pathname!==g.pathname||f[m].route.path?.endsWith("*")&&f[m].params["*"]!==g.params["*"];return y==="assets"?d.filter((g,m)=>x(g,m)||S(g,m)):y==="data"?d.filter((g,m)=>{let R=u.routes[g.route.id];if(!R||!R.hasLoader)return!1;if(x(g,m)||S(g,m))return!0;if(g.route.shouldRevalidate){let j=g.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Ng(r,d,{includeHydrateFallback:f}={}){return Rg(r.map(u=>{let _=d.routes[u.route.id];if(!_)return[];let y=[_.module];return _.clientActionModule&&(y=y.concat(_.clientActionModule)),_.clientLoaderModule&&(y=y.concat(_.clientLoaderModule)),f&&_.hydrateFallbackModule&&(y=y.concat(_.hydrateFallbackModule)),_.imports&&(y=y.concat(_.imports)),y}).flat(1))}function Rg(r){return[...new Set(r)]}function jg(r){let d={},f=Object.keys(r).sort();for(let u of f)d[u]=r[u];return d}function Cg(r,d){let f=new Set;return new Set(d),r.reduce((u,_)=>{let y=JSON.stringify(jg(_));return f.has(y)||(f.add(y),u.push({key:y,link:_})),u},[])}function Mm(){let r=M.useContext(kl);return Zo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Og(){let r=M.useContext(rr);return Zo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ko=M.createContext(void 0);Ko.displayName="FrameworkContext";function Dm(){let r=M.useContext(Ko);return Zo(r,"You must render this element inside a <HydratedRouter> element"),r}function Mg(r,d){let f=M.useContext(Ko),[u,_]=M.useState(!1),[y,x]=M.useState(!1),{onFocus:S,onBlur:g,onMouseEnter:m,onMouseLeave:R,onTouchStart:j}=d,Y=M.useRef(null);M.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let V=W=>{W.forEach(Q=>{x(Q.isIntersecting)})},K=new IntersectionObserver(V,{threshold:.5});return Y.current&&K.observe(Y.current),()=>{K.disconnect()}}},[r]),M.useEffect(()=>{if(u){let V=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(V)}}},[u]);let q=()=>{_(!0)},F=()=>{_(!1),x(!1)};return f?r!=="intent"?[y,Y,{}]:[y,Y,{onFocus:Dn(S,q),onBlur:Dn(g,F),onMouseEnter:Dn(m,q),onMouseLeave:Dn(R,F),onTouchStart:Dn(j,q)}]:[!1,Y,{}]}function Dn(r,d){return f=>{r&&r(f),f.defaultPrevented||d(f)}}function Dg({page:r,...d}){let{router:f}=Mm(),u=M.useMemo(()=>gm(f.routes,r,f.basename),[f.routes,r,f.basename]);return u?M.createElement(Ug,{page:r,matches:u,...d}):null}function zg(r){let{manifest:d,routeModules:f}=Dm(),[u,_]=M.useState([]);return M.useEffect(()=>{let y=!1;return Ag(r,d,f).then(x=>{y||_(x)}),()=>{y=!0}},[r,d,f]),u}function Ug({page:r,matches:d,...f}){let u=Ca(),{future:_,manifest:y,routeModules:x}=Dm(),{basename:S}=Mm(),{loaderData:g,matches:m}=Og(),R=M.useMemo(()=>fm(r,d,m,y,u,"data"),[r,d,m,y,u]),j=M.useMemo(()=>fm(r,d,m,y,u,"assets"),[r,d,m,y,u]),Y=M.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let V=new Set,K=!1;if(d.forEach(Q=>{let I=y.routes[Q.route.id];!I||!I.hasLoader||(!R.some(we=>we.route.id===Q.route.id)&&Q.route.id in g&&x[Q.route.id]?.shouldRevalidate||I.hasClientLoader?K=!0:V.add(Q.route.id))}),V.size===0)return[];let W=wg(r,S,_.unstable_trailingSlashAwareDataRequests,"data");return K&&V.size>0&&W.searchParams.set("_routes",d.filter(Q=>V.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[W.pathname+W.search]},[S,_.unstable_trailingSlashAwareDataRequests,g,u,y,R,d,r,x]),q=M.useMemo(()=>Ng(j,y),[j,y]),F=zg(j);return M.createElement(M.Fragment,null,Y.map(V=>M.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...f})),q.map(V=>M.createElement("link",{key:V,rel:"modulepreload",href:V,...f})),F.map(({key:V,link:K})=>M.createElement("link",{key:V,nonce:f.nonce,...K,crossOrigin:K.crossOrigin??f.crossOrigin})))}function kg(...r){return d=>{r.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bg&&(window.__reactRouterVersion="7.13.0")}catch{}function Lg({basename:r,children:d,unstable_useTransitions:f,window:u}){let _=M.useRef();_.current==null&&(_.current=hh({window:u,v5Compat:!0}));let y=_.current,[x,S]=M.useState({action:y.action,location:y.location}),g=M.useCallback(m=>{f===!1?S(m):M.startTransition(()=>S(m))},[f]);return M.useLayoutEffect(()=>y.listen(g),[y,g]),M.createElement(mg,{basename:r,children:d,location:x.location,navigationType:x.action,navigator:y,unstable_useTransitions:f})}var zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=M.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:_,reloadDocument:y,replace:x,state:S,target:g,to:m,preventScrollReset:R,viewTransition:j,unstable_defaultShouldRevalidate:Y,...q},F){let{basename:V,unstable_useTransitions:K}=M.useContext(Rt),W=typeof m=="string"&&zm.test(m),Q=wm(m,V);m=Q.to;let I=Wh(m,{relative:_}),[we,be,Re]=Mg(u,q),te=Gg(m,{replace:x,state:S,target:g,preventScrollReset:R,relative:_,viewTransition:j,unstable_defaultShouldRevalidate:Y,unstable_useTransitions:K});function Ce(Ie){d&&d(Ie),Ie.defaultPrevented||te(Ie)}let se=M.createElement("a",{...q,...Re,href:Q.absoluteURL||I,onClick:Q.isExternal||y?d:Ce,ref:kg(F,be),target:g,"data-discover":!W&&f==="render"?"true":void 0});return we&&!W?M.createElement(M.Fragment,null,se,M.createElement(Dg,{page:I})):se});Te.displayName="Link";var Hg=M.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:_=!1,style:y,to:x,viewTransition:S,children:g,...m},R){let j=Bn(x,{relative:m.relative}),Y=Ca(),q=M.useContext(rr),{navigator:F,basename:V}=M.useContext(Rt),K=q!=null&&Kg(j)&&S===!0,W=F.encodeLocation?F.encodeLocation(j).pathname:j.pathname,Q=Y.pathname,I=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;f||(Q=Q.toLowerCase(),I=I?I.toLowerCase():null,W=W.toLowerCase()),I&&V&&(I=na(I,V)||I);const we=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let be=Q===W||!_&&Q.startsWith(W)&&Q.charAt(we)==="/",Re=I!=null&&(I===W||!_&&I.startsWith(W)&&I.charAt(W.length)==="/"),te={isActive:be,isPending:Re,isTransitioning:K},Ce=be?d:void 0,se;typeof u=="function"?se=u(te):se=[u,be?"active":null,Re?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof y=="function"?y(te):y;return M.createElement(Te,{...m,"aria-current":Ce,className:se,ref:R,style:Ie,to:x,viewTransition:S},typeof g=="function"?g(te):g)});Hg.displayName="NavLink";var Yg=M.forwardRef(({discover:r="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:_,state:y,method:x=lr,action:S,onSubmit:g,relative:m,preventScrollReset:R,viewTransition:j,unstable_defaultShouldRevalidate:Y,...q},F)=>{let{unstable_useTransitions:V}=M.useContext(Rt),K=Qg(),W=Zg(S,{relative:m}),Q=x.toLowerCase()==="get"?"get":"post",I=typeof S=="string"&&zm.test(S),we=be=>{if(g&&g(be),be.defaultPrevented)return;be.preventDefault();let Re=be.nativeEvent.submitter,te=Re?.getAttribute("formmethod")||x,Ce=()=>K(Re||be.currentTarget,{fetcherKey:d,method:te,navigate:f,replace:_,state:y,relative:m,preventScrollReset:R,viewTransition:j,unstable_defaultShouldRevalidate:Y});V&&f!==!1?M.startTransition(()=>Ce()):Ce()};return M.createElement("form",{ref:F,method:Q,action:W,onSubmit:u?g:we,...q,"data-discover":!I&&r==="render"?"true":void 0})});Yg.displayName="Form";function qg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Um(r){let d=M.useContext(kl);return Oe(d,qg(r)),d}function Gg(r,{target:d,replace:f,state:u,preventScrollReset:_,relative:y,viewTransition:x,unstable_defaultShouldRevalidate:S,unstable_useTransitions:g}={}){let m=Ph(),R=Ca(),j=Bn(r,{relative:y});return M.useCallback(Y=>{if(bg(Y,d)){Y.preventDefault();let q=f!==void 0?f:zn(R)===zn(j),F=()=>m(r,{replace:q,state:u,preventScrollReset:_,relative:y,viewTransition:x,unstable_defaultShouldRevalidate:S});g?M.startTransition(()=>F()):F()}},[R,m,j,f,u,d,r,_,y,x,S,g])}var Xg=0,Vg=()=>`__${String(++Xg)}__`;function Qg(){let{router:r}=Um("useSubmit"),{basename:d}=M.useContext(Rt),f=ug(),u=r.fetch,_=r.navigate;return M.useCallback(async(y,x={})=>{let{action:S,method:g,encType:m,formData:R,body:j}=Sg(y,d);if(x.navigate===!1){let Y=x.fetcherKey||Vg();await u(Y,f,x.action||S,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:R,body:j,formMethod:x.method||g,formEncType:x.encType||m,flushSync:x.flushSync})}else await _(x.action||S,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:R,body:j,formMethod:x.method||g,formEncType:x.encType||m,replace:x.replace,state:x.state,fromRouteId:f,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,_,d,f])}function Zg(r,{relative:d}={}){let{basename:f}=M.useContext(Rt),u=M.useContext(Bt);Oe(u,"useFormAction must be used inside a RouteContext");let[_]=u.matches.slice(-1),y={...Bn(r||".",{relative:d})},x=Ca();if(r==null){y.search=x.search;let S=new URLSearchParams(y.search),g=S.getAll("index");if(g.some(R=>R==="")){S.delete("index"),g.filter(j=>j).forEach(j=>S.append("index",j));let R=S.toString();y.search=R?`?${R}`:""}}return(!r||r===".")&&_.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(y.pathname=y.pathname==="/"?f:la([f,y.pathname])),zn(y)}function Kg(r,{relative:d}={}){let f=M.useContext(Tm);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Um("useViewTransitionState"),_=Bn(r,{relative:d});if(!f.isTransitioning)return!1;let y=na(f.currentLocation.pathname,u)||f.currentLocation.pathname,x=na(f.nextLocation.pathname,u)||f.nextLocation.pathname;return ir(_.pathname,x)!=null||ir(_.pathname,y)!=null}const Jg=()=>{const[r,d]=M.useState(!1),f=()=>{d(!r)},u=()=>{d(!1)};return o.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0",children:[o.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[o.jsxs(Te,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:u,children:[o.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:o.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),o.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),o.jsxs("button",{onClick:f,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[o.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"rotate-45 translate-y-2":""}`}),o.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"opacity-0":""}`}),o.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"-rotate-45 -translate-y-2":""}`})]}),o.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[o.jsx("li",{children:o.jsx(Te,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),o.jsx("li",{children:o.jsx(Te,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),o.jsx("li",{children:o.jsx(Te,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),o.jsx("li",{children:o.jsx(Te,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),o.jsx("li",{children:o.jsx(Te,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),r&&o.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:o.jsxs("ul",{className:"flex flex-col space-y-0",children:[o.jsx("li",{children:o.jsx(Te,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Home"})}),o.jsx("li",{children:o.jsx(Te,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"About"})}),o.jsx("li",{children:o.jsx(Te,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Projects"})}),o.jsx("li",{children:o.jsx(Te,{to:"/trading",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Trading"})}),o.jsx("li",{children:o.jsx(Te,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Resume"})}),o.jsx("li",{children:o.jsx(Te,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Contact"})})]})})]})},Fg=()=>o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[o.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsx("div",{className:"grid grid-cols-1 gap-8 md:gap-12 items-center",children:o.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[o.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),o.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[o.jsx(Te,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),o.jsx(Te,{to:"/about",className:"px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-colors text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-600/75",children:"Learn About Me"}),o.jsx(Te,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]})})})}),o.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),o.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[o.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[o.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:o.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),o.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[o.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),o.jsx("p",{className:"text-slate-300 text-sm",children:"Built a live Python trading framework for SPY options with real-time Massive WebSocket (Polygon) data streaming, Tastytrade API for options pricing, pluggable ML model integration, and Alpaca API order execution."}),o.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[o.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),o.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSocket"}),o.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),o.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),o.jsx(Te,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),o.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[o.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:o.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),o.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[o.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),o.jsx("p",{className:"text-slate-300 text-sm",children:"Built an end-to-end XGBoost pipeline to predict NFL rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, workload competition, and injury impact modeling."}),o.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[o.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),o.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),o.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Pandas"}),o.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Scikit-learn"})]}),o.jsx(Te,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),o.jsx("div",{className:"text-center mt-8 md:mt-12",children:o.jsx(Te,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),o.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(r=>o.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:o.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:r})},r))})]})}),o.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[o.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),o.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),o.jsx(Te,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),Wg=()=>o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),o.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),o.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),o.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:o.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[o.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),o.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),o.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),o.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),o.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx("a",{href:"https://www.linkedin.com/in/eric-jackson27",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),o.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),o.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),o.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),o.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),o.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),o.jsx("div",{className:"space-y-6",children:o.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[o.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),o.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),o.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),o.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[o.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),o.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),o.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),o.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[o.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),o.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),o.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),o.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[o.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),o.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),o.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[o.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),o.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),o.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),o.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),o.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),o.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),o.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),o.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),o.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),o.jsx("span",{className:"text-slate-300 text-sm",children:r})]},r))})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),o.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),o.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),o.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[o.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),o.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(r=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),o.jsx("span",{className:"text-slate-300",children:r})]},r))})]})]})]})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[o.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),o.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),o.jsx(Te,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),Pg=()=>{const[r,d]=M.useState("all"),[f,u]=M.useState(new Set),_=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end XGBoost pipeline to predict NFL rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, workload competition, and injury impact modeling.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"28.44 yards"},{label:"R² Score",value:"0.39"},{label:"Time Period",value:"2019-2023"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["10 modular code sections covering full ML pipeline + betting strategy","Multi-dimensional feature engineering (player, defense, game script)","Strength-of-schedule adjusted defensive metrics","Workload competition and injury impact modeling","Permutation importance feature selection (removed noise features)","Binary classifier for over/under betting with edge detection"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Massive WebSocket (Polygon) data streaming for SPY, Tastytrade API for options pricing, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Massive (Polygon)"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["11 modular code sections for easy navigation","Real-time Massive WebSocket for SPY data streaming (Polygon)","Async event loop with concurrent task management","Pluggable strategy architecture with ML model support","Tastytrade API for options chain data and pricing","Alpaca API for order execution with position tracking"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"Predicts big SPY moves in either direction for options straddle strategy",fullDesc:"Model predicts when SPY will make a significant move in EITHER direction within 30 minutes. Trading strategy: buy both call AND put options, hold for 30 minutes, profit from the swing regardless of direction. Uses multi-timeframe volatility analysis and price deviation patterns to detect upcoming breakouts.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["11 modular code sections covering full ML pipeline","Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Parallel label generation with ThreadPoolExecutor (8 workers)","Time-series cross-validation with expanding window","Feature engineering with interaction terms (time × volume, VWAP × ATR)"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"project-demo/4",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]},{id:5,title:"Options Profit Prediction Model",category:"machine-learning",shortDesc:"XGBoost model predicting profitable SPY options trades",fullDesc:"Predicts if buying a SPY option NOW will be profitable by 3:30pm. Strategy: scan all strikes throughout the day, buy when model shows high confidence, sell at 3:30pm. Uses rolling price statistics (5min to 2hr windows) to detect patterns that lead to profitable end-of-day positions.",technologies:["Python","XGBoost","Polygon API","ThreadPoolExecutor","Pandas"],metrics:[{label:"Sections",value:"11"},{label:"Target",value:"3:30pm Profit"},{label:"Windows",value:"6 Timeframes"}],image:"💰",github:"#",demo:"project-demo/5",highlights:["11 modular sections: data fetching → features → labeling → training → calibration → deployment","Parallel data fetching with ThreadPoolExecutor for thousands of option contracts","Multi-window features across 6 timeframes (5min, 10min, 15min, 30min, 60min, 120min)","Walk-forward validation - train on past years, test on future (no peeking)","Calibration analysis to verify predicted probabilities match reality","Outlier detection strategy: find unusually high-confidence predictions vs historical distribution"]}],y=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],x=r==="all"?_:_.filter(g=>g.category===r),S=g=>{u(m=>{const R=new Set(m);return R.has(g)?R.delete(g):R.add(g),R})};return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),o.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),o.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),o.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[o.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),o.jsx("select",{id:"category-filter",value:r,onChange:g=>d(g.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:y.map(g=>o.jsx("option",{value:g.value,children:g.label},g.value))}),o.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",x.length," project",x.length!==1?"s":""]})]})})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:x.length===0?o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:x.map(g=>o.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[o.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:o.jsx("span",{className:"text-6xl",children:g.image})}),o.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[o.jsx("div",{className:"mb-3",children:o.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:y.find(m=>m.value===g.category)?.label})}),o.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:g.title}),o.jsx("p",{className:"text-slate-400 text-sm mb-4",children:g.shortDesc}),o.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:g.fullDesc}),o.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:g.metrics.map((m,R)=>o.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[o.jsx("p",{className:"text-slate-400 text-xs mb-1",children:m.label}),o.jsx("p",{className:"text-white font-bold text-sm",children:m.value})]},R))}),o.jsxs("div",{className:"mb-6",children:[o.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:g.technologies.map(m=>o.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:m},m))})]}),o.jsxs("div",{className:"mb-6",children:[o.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),o.jsx("ul",{className:"space-y-1",children:(f.has(g.id)?g.highlights:g.highlights.slice(0,3)).map((m,R)=>o.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[o.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),o.jsx("span",{children:m})]},R))}),g.highlights.length>3&&o.jsx("button",{onClick:()=>S(g.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:f.has(g.id)?"- Show Less":`+ Show ${g.highlights.length-3} More`})]}),o.jsxs("div",{className:"flex gap-4 mt-auto",children:[o.jsx("a",{href:g.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),o.jsx(Te,{to:g.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},g.id))})})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[o.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),o.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),o.jsx(Te,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},Ig=({label:r,description:d,code:f,summary:u,highlights:_,language:y="python"})=>{const[x,S]=M.useState(!1),[g,m]=M.useState(!1),R=()=>{navigator.clipboard.writeText(f),S(!0),setTimeout(()=>S(!1),2e3)},j=()=>{m(Y=>!Y)};return o.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[o.jsxs("div",{className:`bg-slate-800 px-6 py-4 border-b border-slate-600 flex items-center justify-between cursor-pointer ${g?"sticky top-0 z-20 shadow-lg":""}`,onClick:j,tabIndex:0,role:"button","aria-expanded":g,style:{userSelect:"none"},children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:r}),o.jsx("p",{className:"text-slate-300 text-sm",children:d})]}),o.jsx("span",{className:"ml-4 px-3 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded transition-colors select-none",children:g?"Collapse":"Expand"})]}),g&&o.jsxs("div",{className:"relative",children:[u&&o.jsxs("div",{className:"px-6 pt-6 pb-2",children:[o.jsx("div",{className:"text-slate-200 text-base font-semibold mb-2",children:"Summary"}),o.jsx("div",{className:"text-slate-300 text-sm mb-2",children:u})]}),_&&_.length>0&&o.jsxs("div",{className:"px-6 pb-2",children:[o.jsx("div",{className:"text-slate-200 text-base font-semibold mb-1",children:"Highlights"}),o.jsx("ul",{className:"list-disc list-inside text-slate-300 text-sm",children:_.map((Y,q)=>o.jsx("li",{children:Y},q))})]}),o.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:o.jsx("code",{children:f})}),o.jsx("button",{onClick:Y=>{Y.stopPropagation(),R()},className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:x?"✓ Copied":"Copy"})]})]})};var ko={},Bo={},Lo={},mm;function $g(){return mm||(mm=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var d=function(){for(var _=arguments.length,y=new Array(_),x=0;x<_;x++)y[x]=arguments[x];if(typeof window<"u"){var S;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(S=window).gtag.apply(S,y)}},f=d;r.default=f})(Lo)),Lo}var Ho={},_m;function ey(){return _m||(_m=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=x;var d=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function f(S){return S.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(g,m,R){return m>0&&m+g.length!==R.length&&g.search(d)>-1&&R.charAt(m-2)!==":"&&(R.charAt(m+g.length)!=="-"||R.charAt(m-1)==="-")&&R.charAt(m-1).search(/[^\s-]/)<0?g.toLowerCase():g.substr(1).search(/[A-Z]|\../)>-1?g:g.charAt(0).toUpperCase()+g.substr(1)})}function u(S){return typeof S=="string"&&S.indexOf("@")!==-1}var _="REDACTED (Potential Email Address)";function y(S){return u(S)?(console.warn("This arg looks like an email address, redacting."),_):S}function x(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,R=S||"";return g&&(R=f(S)),m&&(R=y(R)),R}})(Ho)),Ho}var pm;function ty(){return pm||(pm=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.GA4=void 0;var d=x($g()),f=x(ey()),u=["eventCategory","eventAction","eventLabel","eventValue","hitType"],_=["title","location"],y=["page","hitType"];function x(L){return L&&L.__esModule?L:{default:L}}function S(L,O){if(L==null)return{};var h=g(L,O),E,k;if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(L);for(k=0;k<G.length;k++)E=G[k],!(O.indexOf(E)>=0)&&Object.prototype.propertyIsEnumerable.call(L,E)&&(h[E]=L[E])}return h}function g(L,O){if(L==null)return{};var h={},E=Object.keys(L),k,G;for(G=0;G<E.length;G++)k=E[G],!(O.indexOf(k)>=0)&&(h[k]=L[k]);return h}function m(L){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},m(L)}function R(L){return q(L)||Y(L)||Q(L)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(L){if(typeof Symbol<"u"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function q(L){if(Array.isArray(L))return I(L)}function F(L,O){var h=Object.keys(L);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(L);O&&(E=E.filter(function(k){return Object.getOwnPropertyDescriptor(L,k).enumerable})),h.push.apply(h,E)}return h}function V(L){for(var O=1;O<arguments.length;O++){var h=arguments[O]!=null?arguments[O]:{};O%2?F(Object(h),!0).forEach(function(E){se(L,E,h[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(h)):F(Object(h)).forEach(function(E){Object.defineProperty(L,E,Object.getOwnPropertyDescriptor(h,E))})}return L}function K(L,O){return be(L)||we(L,O)||Q(L,O)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(L,O){if(L){if(typeof L=="string")return I(L,O);var h=Object.prototype.toString.call(L).slice(8,-1);if(h==="Object"&&L.constructor&&(h=L.constructor.name),h==="Map"||h==="Set")return Array.from(L);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return I(L,O)}}function I(L,O){(O==null||O>L.length)&&(O=L.length);for(var h=0,E=new Array(O);h<O;h++)E[h]=L[h];return E}function we(L,O){var h=L==null?null:typeof Symbol<"u"&&L[Symbol.iterator]||L["@@iterator"];if(h!=null){var E,k,G,$,b=[],D=!0,H=!1;try{if(G=(h=h.call(L)).next,O!==0)for(;!(D=(E=G.call(h)).done)&&(b.push(E.value),b.length!==O);D=!0);}catch(X){H=!0,k=X}finally{try{if(!D&&h.return!=null&&($=h.return(),Object($)!==$))return}finally{if(H)throw k}}return b}}function be(L){if(Array.isArray(L))return L}function Re(L,O){if(!(L instanceof O))throw new TypeError("Cannot call a class as a function")}function te(L,O){for(var h=0;h<O.length;h++){var E=O[h];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(L,Ie(E.key),E)}}function Ce(L,O,h){return O&&te(L.prototype,O),Object.defineProperty(L,"prototype",{writable:!1}),L}function se(L,O,h){return O=Ie(O),O in L?Object.defineProperty(L,O,{value:h,enumerable:!0,configurable:!0,writable:!0}):L[O]=h,L}function Ie(L){var O=gt(L,"string");return m(O)==="symbol"?O:String(O)}function gt(L,O){if(m(L)!=="object"||L===null)return L;var h=L[Symbol.toPrimitive];if(h!==void 0){var E=h.call(L,O);if(m(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(L)}var Qe=(function(){function L(){var O=this;Re(this,L),se(this,"reset",function(){O.isInitialized=!1,O._testMode=!1,O._currentMeasurementId,O._hasLoadedGA=!1,O._isQueuing=!1,O._queueGtag=[]}),se(this,"_gtag",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];O._testMode||O._isQueuing?O._queueGtag.push(E):d.default.apply(void 0,E)}),se(this,"_loadGA",function(h,E){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!O._hasLoadedGA){var G=document.createElement("script");G.async=!0,G.src="".concat(k,"?id=").concat(h),E&&G.setAttribute("nonce",E),document.body.appendChild(G),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},O._hasLoadedGA=!0}}),se(this,"_toGtagOptions",function(h){if(h){var E={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},k=Object.entries(h).reduce(function(G,$){var b=K($,2),D=b[0],H=b[1];return E[D]?G[E[D]]=H:G[D]=H,G},{});return k}}),se(this,"initialize",function(h){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!h)throw new Error("Require GA_MEASUREMENT_ID");var k=typeof h=="string"?[{trackingId:h}]:h;O._currentMeasurementId=k[0].trackingId;var G=E.gaOptions,$=E.gtagOptions,b=E.nonce,D=E.testMode,H=D===void 0?!1:D,X=E.gtagUrl;if(O._testMode=H,H||O._loadGA(O._currentMeasurementId,b,X),O.isInitialized||(O._gtag("js",new Date),k.forEach(function(fe){var Ge=V(V(V({},O._toGtagOptions(V(V({},G),fe.gaOptions))),$),fe.gtagOptions);Object.keys(Ge).length?O._gtag("config",fe.trackingId,Ge):O._gtag("config",fe.trackingId)})),O.isInitialized=!0,!H){var ae=R(O._queueGtag);for(O._queueGtag=[],O._isQueuing=!1;ae.length;){var re=ae.shift();O._gtag.apply(O,R(re)),re[0]==="get"&&(O._isQueuing=!0)}}}),se(this,"set",function(h){if(!h){console.warn("`fieldsObject` is required in .set()");return}if(m(h)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(h).length===0&&console.warn("empty `fieldsObject` given to .set()"),O._gaCommand("set",h)}),se(this,"_gaCommandSendEvent",function(h,E,k,G,$){O._gtag("event",E,V(V({event_category:h,event_label:k,value:G},$&&{non_interaction:$.nonInteraction}),O._toGtagOptions($)))}),se(this,"_gaCommandSendEventParameters",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];if(typeof E[0]=="string")O._gaCommandSendEvent.apply(O,R(E.slice(1)));else{var G=E[0],$=G.eventCategory,b=G.eventAction,D=G.eventLabel,H=G.eventValue;G.hitType;var X=S(G,u);O._gaCommandSendEvent($,b,D,H,X)}}),se(this,"_gaCommandSendTiming",function(h,E,k,G){O._gtag("event","timing_complete",{name:E,value:k,event_category:h,event_label:G})}),se(this,"_gaCommandSendPageview",function(h,E){if(E&&Object.keys(E).length){var k=O._toGtagOptions(E),G=k.title,$=k.location,b=S(k,_);O._gtag("event","page_view",V(V(V(V({},h&&{page_path:h}),G&&{page_title:G}),$&&{page_location:$}),b))}else h?O._gtag("event","page_view",{page_path:h}):O._gtag("event","page_view")}),se(this,"_gaCommandSendPageviewParameters",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];if(typeof E[0]=="string")O._gaCommandSendPageview.apply(O,R(E.slice(1)));else{var G=E[0],$=G.page;G.hitType;var b=S(G,y);O._gaCommandSendPageview($,b)}}),se(this,"_gaCommandSend",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];var G=typeof E[0]=="string"?E[0]:E[0].hitType;switch(G){case"event":O._gaCommandSendEventParameters.apply(O,E);break;case"pageview":O._gaCommandSendPageviewParameters.apply(O,E);break;case"timing":O._gaCommandSendTiming.apply(O,R(E.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(G));break;default:console.warn("Send command doesn't exist: ".concat(G))}}),se(this,"_gaCommandSet",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];typeof E[0]=="string"&&(E[0]=se({},E[0],E[1])),O._gtag("set",O._toGtagOptions(E[0]))}),se(this,"_gaCommand",function(h){for(var E=arguments.length,k=new Array(E>1?E-1:0),G=1;G<E;G++)k[G-1]=arguments[G];switch(h){case"send":O._gaCommandSend.apply(O,k);break;case"set":O._gaCommandSet.apply(O,k);break;default:console.warn("Command doesn't exist: ".concat(h))}}),se(this,"ga",function(){for(var h=arguments.length,E=new Array(h),k=0;k<h;k++)E[k]=arguments[k];if(typeof E[0]=="string")O._gaCommand.apply(O,E);else{var G=E[0];O._gtag("get",O._currentMeasurementId,"client_id",function($){O._isQueuing=!1;var b=O._queueGtag;for(G({get:function(X){return X==="clientId"?$:X==="trackingId"?O._currentMeasurementId:X==="apiVersion"?"1":void 0}});b.length;){var D=b.shift();O._gtag.apply(O,R(D))}}),O._isQueuing=!0}return O.ga}),se(this,"event",function(h,E){if(typeof h=="string")O._gtag("event",h,O._toGtagOptions(E));else{var k=h.action,G=h.category,$=h.label,b=h.value,D=h.nonInteraction,H=h.transport;if(!G||!k){console.warn("args.category AND args.action are required in event()");return}var X={hitType:"event",eventCategory:(0,f.default)(G),eventAction:(0,f.default)(k)};$&&(X.eventLabel=(0,f.default)($)),typeof b<"u"&&(typeof b!="number"?console.warn("Expected `args.value` arg to be a Number."):X.eventValue=b),typeof D<"u"&&(typeof D!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):X.nonInteraction=D),typeof H<"u"&&(typeof H!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(H)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),X.transport=H)),O._gaCommand("send",X)}}),se(this,"send",function(h){O._gaCommand("send",h)}),this.reset()}return Ce(L,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),L})();r.GA4=Qe;var Lt=new Qe;r.default=Lt})(Bo)),Bo}var hm;function ay(){return hm||(hm=1,(function(r){function d(S){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},d(S)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.ReactGAImplementation=void 0;var f=_(ty());function u(S){if(typeof WeakMap!="function")return null;var g=new WeakMap,m=new WeakMap;return(u=function(j){return j?m:g})(S)}function _(S,g){if(S&&S.__esModule)return S;if(S===null||d(S)!=="object"&&typeof S!="function")return{default:S};var m=u(g);if(m&&m.has(S))return m.get(S);var R={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in S)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(S,Y)){var q=j?Object.getOwnPropertyDescriptor(S,Y):null;q&&(q.get||q.set)?Object.defineProperty(R,Y,q):R[Y]=S[Y]}return R.default=S,m&&m.set(S,R),R}var y=f.GA4;r.ReactGAImplementation=y;var x=f.default;r.default=x})(ko)),ko}var ly=ay();const Jo=ih(ly),ny="G-XXXXXXXXXX",iy=()=>{Jo.initialize(ny),console.log("GA initialized")},ry=(r,d)=>{Jo.send({hitType:"pageview",page:r,title:d})},sy=(r,d,f,u)=>{Jo.event({category:r,action:d,label:f,value:u})},oy=r=>{sy("Project","View",r)},uy={id:"1",title:"NFL Rushing Yards Prediction – Code Demo",description:"End-to-end XGBoost pipeline predicting RB rushing yards with multi-dimensional feature engineering across player performance, defensive matchups, team context, and workload competition",codeSamples:[{label:"1. Data Loading & Name Cleaning",description:"Load historical data and normalize player names for consistent joins",code:`import pandas as pd
import numpy as np
import re

def clean_player_name(name: str) -> str:
    """
    Remove generational suffixes from player names.
    
    Why this matters:
    - Player name keys must be consistent across datasets
    - Some sources include suffixes (e.g., "Jr.", "III")
    - Others omit them
    - Removing them prevents join mismatches and duplicate identities
    
    Handles:
    - Jr, Jr.
    - Sr, Sr.
    - II, III, IV, V, VI
    - Case-insensitive
    - Extra whitespace
    """
    
    if not isinstance(name, str):
        return name
    
    # Normalize whitespace
    name = name.strip()
    
    # Regex to remove suffix at end of string
    # \\b ensures we only match whole suffix tokens
    suffix_pattern = r"\\b(JR|SR|II|III|IV|V|VI)\\.?$"
    
    # Remove suffix (case-insensitive)
    cleaned = re.sub(suffix_pattern, "", name, flags=re.IGNORECASE)
    
    # Remove any leftover trailing spaces
    return cleaned.strip()


# Load base stats (rushing attempts, yards, success rate, etc.)
base_stats = pd.read_csv("base_stats.csv")
base_stats['Date'] = pd.to_datetime(base_stats['Date'])
base_stats = base_stats.sort_values(['Date'])

# Clean player names for consistent joins
base_stats['clean_player_name'] = base_stats['Player'].apply(clean_player_name)

# Filter to running backs only
base_stats = base_stats[base_stats['Pos.'] == 'RB']`},{label:"2. Player Performance Features",description:"Rolling averages, momentum deltas, and volatility metrics for individual RBs",code:`# ==================================================================
# PLAYER PERFORMANCE FEATURES
# ==================================================================

def rolling_feature(series, window, func="mean", min_periods=1):
    """
    Apply lagged rolling aggregation to prevent lookahead bias.
    
    Always use .shift(1) before rolling to ensure no future data leakage.
    """
    rolled = series.shift(1).rolling(window, min_periods=min_periods)
    return getattr(rolled, func)()


offense_rush_stats_LOOKUP = {}

for player_name in base_stats['clean_player_name'].unique():
    player_data = base_stats[base_stats['clean_player_name'] == player_name].sort_values('Date')
    
    # --- Core Rolling Averages ---
    # Capture recency-weighted workload and efficiency
    rush_yards_1ma = rolling_feature(player_data['Yds'], 1)
    rush_yards_3ma = rolling_feature(player_data['Yds'], 3)
    rush_yards_5ma = rolling_feature(player_data['Yds'], 5)
    rush_yards_10ma = rolling_feature(player_data['Yds'], 10)
    
    rush_attempts_1ma = rolling_feature(player_data['Att'], 1)
    rush_attempts_3ma = rolling_feature(player_data['Att'], 3)
    rush_attempts_5ma = rolling_feature(player_data['Att'], 5)
    rush_attempts_10ma = rolling_feature(player_data['Att'], 10)
    
    # Yards per carry efficiency
    ypc = player_data['Yds'] / player_data['Att'].replace(0, np.nan)
    ypc_1ma = rolling_feature(ypc, 1)
    ypc_3ma = rolling_feature(ypc, 3)
    ypc_5ma = rolling_feature(ypc, 5)
    ypc_10ma = rolling_feature(ypc, 10)
    
    # Success rate (plays gaining expected yards)
    success_rate_1ma = rolling_feature(player_data['Succ%'], 1)
    success_rate_3ma = rolling_feature(player_data['Succ%'], 3)
    success_rate_5ma = rolling_feature(player_data['Succ%'], 5)
    success_rate_10ma = rolling_feature(player_data['Succ%'], 10)
    
    # --- Momentum Features (Trend Detection) ---
    # Positive delta = improving recent form
    rush_yards_delta_3_5 = rush_yards_3ma - rush_yards_5ma
    rush_yards_delta_5_10 = rush_yards_5ma - rush_yards_10ma
    
    rush_attempts_delta_3_5 = rush_attempts_3ma - rush_attempts_5ma
    rush_attempts_delta_5_10 = rush_attempts_5ma - rush_attempts_10ma
    
    ypc_delta_3_5 = ypc_3ma - ypc_5ma
    ypc_delta_5_10 = ypc_5ma - ypc_10ma
    
    success_rate_delta_3_5 = success_rate_3ma - success_rate_5ma
    
    # --- Volatility Features (Consistency Metrics) ---
    # Higher volatility = less predictable performance
    rush_yards_vol_5 = rolling_feature(player_data['Yds'], 5, func='std', min_periods=2)
    ypc_vol_5 = rolling_feature(ypc, 5, func='std', min_periods=2)
    
    # --- Extreme Performance Tracking ---
    min_rush_yards_3ma = rolling_feature(player_data['Yds'], 3, func='min')
    min_rush_yards_5ma = rolling_feature(player_data['Yds'], 5, func='min')
    max_rush_yards_3ma = rolling_feature(player_data['Yds'], 3, func='max')
    max_rush_yards_5ma = rolling_feature(player_data['Yds'], 5, func='max')
    
    # Store in lookup dictionary
    offense_rush_stats_LOOKUP[player_name] = pd.DataFrame({
        'Date': player_data['Date'],
        'rush_yards_1ma': rush_yards_1ma,
        'rush_yards_3ma': rush_yards_3ma,
        'rush_yards_5ma': rush_yards_5ma,
        'rush_yards_10ma': rush_yards_10ma,
        'rush_yards_delta_3_5': rush_yards_delta_3_5,
        'rush_yards_delta_5_10': rush_yards_delta_5_10,
        'rush_attempts_1ma': rush_attempts_1ma,
        'rush_attempts_3ma': rush_attempts_3ma,
        'rush_attempts_5ma': rush_attempts_5ma,
        'rush_attempts_10ma': rush_attempts_10ma,
        'rush_attempts_delta_3_5': rush_attempts_delta_3_5,
        'rush_attempts_delta_5_10': rush_attempts_delta_5_10,
        'ypc_1ma': ypc_1ma,
        'ypc_3ma': ypc_3ma,
        'ypc_5ma': ypc_5ma,
        'ypc_10ma': ypc_10ma,
        'ypc_delta_3_5': ypc_delta_3_5,
        'ypc_delta_5_10': ypc_delta_5_10,
        'success_rate_1ma': success_rate_1ma,
        'success_rate_3ma': success_rate_3ma,
        'success_rate_5ma': success_rate_5ma,
        'success_rate_10ma': success_rate_10ma,
        'success_rate_delta_3_5': success_rate_delta_3_5,
        'rush_yards_vol_5': rush_yards_vol_5,
        'ypc_vol_5': ypc_vol_5,
        'min_rush_yards_3ma': min_rush_yards_3ma,
        'min_rush_yards_5ma': min_rush_yards_5ma,
        'max_rush_yards_3ma': max_rush_yards_3ma,
        'max_rush_yards_5ma': max_rush_yards_5ma,
    })`},{label:"3. Defense Matchup Features",description:"Strength-of-schedule adjusted defensive performance against the run",code:`# ==================================================================
# DEFENSE MATCHUP FEATURES
# ==================================================================

# Aggregate RB performance by team/game
# This shows how many yards/attempts defenses allowed to ALL RBs
team_rb_summary = (
    base_stats
    .groupby(['Team', 'Date'], as_index=False)
    .agg(
        RB_rush_yards_allowed=('Yds', 'sum'),
        RB_rush_attempts_allowed=('Att', 'sum'),
        Opp=('Opp', 'first')
    )
)

# Calculate defensive YPC allowed
team_rb_summary['RB_ypc_allowed'] = (
    team_rb_summary['RB_rush_yards_allowed'] / 
    team_rb_summary['RB_rush_attempts_allowed'].replace(0, np.nan)
)

# --- Strength of Offense Adjustment ---
# Raw yards allowed don't tell the full story
# Allowing 150 yards to elite offense is better than 120 to weak offense

strength_map = {}
for (team, date), game in base_stats.groupby(['Team', 'Date']):
    # Sum of all RB rush_yards_5ma for this team on this date
    offense_strength = 0
    for player in game['clean_player_name'].unique():
        if player in offense_rush_stats_LOOKUP:
            player_stats = offense_rush_stats_LOOKUP[player]
            player_on_date = player_stats[player_stats['Date'] == date]
            if not player_on_date.empty:
                offense_strength += player_on_date['rush_yards_5ma'].values[0]
    
    strength_map[(team, date)] = offense_strength

team_rb_summary['strength_of_offense'] = team_rb_summary.apply(
    lambda row: strength_map.get((row['Team'], row['Date']), 0), 
    axis=1
)

# --- Build Defense Lookup ---
defense_rush_stats_LOOKUP = {}

for team in team_rb_summary['Opp'].unique():
    team_games = team_rb_summary[team_rb_summary['Opp'] == team].sort_values('Date')
    
    # Rolling averages of yards allowed
    RB_rush_yards_allowed_1ma = rolling_feature(team_games['RB_rush_yards_allowed'], 1)
    RB_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3)
    RB_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5)
    
    # Rolling averages of YPC allowed
    RB_ypc_allowed_1ma = rolling_feature(team_games['RB_ypc_allowed'], 1)
    RB_ypc_allowed_3ma = rolling_feature(team_games['RB_ypc_allowed'], 3)
    RB_ypc_allowed_5ma = rolling_feature(team_games['RB_ypc_allowed'], 5)
    
    # Strength-of-offense adjusted performance
    strength_of_offense_1ma = rolling_feature(team_games['strength_of_offense'], 1)
    strength_of_offense_3ma = rolling_feature(team_games['strength_of_offense'], 3)
    strength_of_offense_5ma = rolling_feature(team_games['strength_of_offense'], 5)
    
    # Relative defense performance (negative = better than expected)
    defense_performance_relative_1ma = RB_rush_yards_allowed_1ma - strength_of_offense_1ma
    defense_performance_relative_3ma = RB_rush_yards_allowed_3ma - strength_of_offense_3ma
    defense_performance_relative_5ma = RB_rush_yards_allowed_5ma - strength_of_offense_5ma
    
    # Momentum features (improving/declining defense)
    RB_rush_yards_allowed_delta_3_5 = RB_rush_yards_allowed_3ma - RB_rush_yards_allowed_5ma
    RB_rush_yards_allowed_delta_1_3 = RB_rush_yards_allowed_1ma - RB_rush_yards_allowed_3ma
    
    ypc_allowed_delta_3_5 = RB_ypc_allowed_3ma - RB_ypc_allowed_5ma
    ypc_allowed_delta_1_3 = RB_ypc_allowed_1ma - RB_ypc_allowed_3ma
    
    defense_relative_delta_3_5 = defense_performance_relative_3ma - defense_performance_relative_5ma
    defense_relative_delta_1_3 = defense_performance_relative_1ma - defense_performance_relative_3ma
    
    # Volatility (defensive consistency)
    RB_rush_yards_allowed_vol_5 = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='std')
    ypc_allowed_vol_5 = rolling_feature(team_games['RB_ypc_allowed'], 5, func='std')
    
    # Extremes
    min_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3, func='min')
    min_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='min')
    max_rush_yards_allowed_3ma = rolling_feature(team_games['RB_rush_yards_allowed'], 3, func='max')
    max_rush_yards_allowed_5ma = rolling_feature(team_games['RB_rush_yards_allowed'], 5, func='max')
    
    defense_rush_stats_LOOKUP[team] = pd.DataFrame({
        'Date': team_games['Date'],
        'RB_rush_yards_allowed_1ma': RB_rush_yards_allowed_1ma,
        'RB_rush_yards_allowed_3ma': RB_rush_yards_allowed_3ma,
        'RB_rush_yards_allowed_5ma': RB_rush_yards_allowed_5ma,
        'RB_ypc_allowed_1ma': RB_ypc_allowed_1ma,
        'RB_ypc_allowed_3ma': RB_ypc_allowed_3ma,
        'RB_ypc_allowed_5ma': RB_ypc_allowed_5ma,
        'defense_performance_relative_1ma': defense_performance_relative_1ma,
        'defense_performance_relative_3ma': defense_performance_relative_3ma,
        'defense_performance_relative_5ma': defense_performance_relative_5ma,
        'RB_rush_yards_allowed_delta_3_5': RB_rush_yards_allowed_delta_3_5,
        'RB_rush_yards_allowed_delta_1_3': RB_rush_yards_allowed_delta_1_3,
        'ypc_allowed_delta_3_5': ypc_allowed_delta_3_5,
        'ypc_allowed_delta_1_3': ypc_allowed_delta_1_3,
        'defense_relative_delta_3_5': defense_relative_delta_3_5,
        'defense_relative_delta_1_3': defense_relative_delta_1_3,
        'RB_rush_yards_allowed_vol_5': RB_rush_yards_allowed_vol_5,
        'ypc_allowed_vol_5': ypc_allowed_vol_5,
        'min_rush_yards_allowed_3ma': min_rush_yards_allowed_3ma,
        'min_rush_yards_allowed_5ma': min_rush_yards_allowed_5ma,
        'max_rush_yards_allowed_3ma': max_rush_yards_allowed_3ma,
        'max_rush_yards_allowed_5ma': max_rush_yards_allowed_5ma,
    })`},{label:"4. Team Context & Game Script",description:"Point differential, spread, and scoring trends to capture game flow",code:`# ==================================================================
# TEAM CONTEXT & GAME SCRIPT FEATURES
# ==================================================================

# Load team scoring and spread data
spread_point_diff_df = pd.read_csv("spread_point_diff.csv")
spread_point_diff_df['Date'] = pd.to_datetime(spread_point_diff_df['Date'])

team_context_LOOKUP = {}

for team in spread_point_diff_df['team'].unique():
    team_games = spread_point_diff_df[spread_point_diff_df['team'] == team].sort_values('Date')
    
    # --- Point Differential Features ---
    # Positive = team won by more / opponent lost by more
    point_diff_3_ma = rolling_feature(team_games['point_diff'], 3)
    point_diff_5_ma = rolling_feature(team_games['point_diff'], 5)
    point_diff_3_sum = team_games['point_diff'].shift(1).rolling(3, min_periods=1).sum()
    point_diff_5_sum = team_games['point_diff'].shift(1).rolling(5, min_periods=1).sum()
    
    # --- Scoring Trends ---
    # Higher scoring = more plays = more RB opportunities
    point_scored_3_ma = rolling_feature(team_games['points_scored'], 3)
    point_scored_5_ma = rolling_feature(team_games['points_scored'], 5)
    points_allowed_3_ma = rolling_feature(team_games['points_allowed'], 3)
    points_allowed_5_ma = rolling_feature(team_games['points_allowed'], 5)
    
    # --- Opponent Context ---
    # How good is opponent's offense/defense?
    opp_point_diff_3_ma = rolling_feature(team_games['opp_point_diff'], 3)
    opp_point_diff_5_ma = rolling_feature(team_games['opp_point_diff'], 5)
    opp_point_diff_3_sum = team_games['opp_point_diff'].shift(1).rolling(3, min_periods=1).sum()
    opp_point_diff_5_sum = team_games['opp_point_diff'].shift(1).rolling(5, min_periods=1).sum()
    
    opp_point_scored_3_ma = rolling_feature(team_games['opp_points_scored'], 3)
    opp_point_scored_5_ma = rolling_feature(team_games['opp_points_scored'], 5)
    opp_points_allowed_3_ma = rolling_feature(team_games['opp_points_allowed'], 3)
    opp_points_allowed_5_ma = rolling_feature(team_games['opp_points_allowed'], 5)
    
    team_context_LOOKUP[team] = pd.DataFrame({
        'Date': team_games['Date'],
        'spread': team_games['spread'],  # Betting spread (no shift - known pre-game)
        'point_diff_3_ma': point_diff_3_ma,
        'point_diff_5_ma': point_diff_5_ma,
        'point_diff_3_sum': point_diff_3_sum,
        'point_diff_5_sum': point_diff_5_sum,
        'point_scored_3_ma': point_scored_3_ma,
        'point_scored_5_ma': point_scored_5_ma,
        'points_allowed_3_ma': points_allowed_3_ma,
        'points_allowed_5_ma': points_allowed_5_ma,
        'opp_point_diff_3_ma': opp_point_diff_3_ma,
        'opp_point_diff_5_ma': opp_point_diff_5_ma,
        'opp_point_diff_3_sum': opp_point_diff_3_sum,
        'opp_point_diff_5_sum': opp_point_diff_5_sum,
        'opp_point_scored_3_ma': opp_point_scored_3_ma,
        'opp_point_scored_5_ma': opp_point_scored_5_ma,
        'opp_points_allowed_3_ma': opp_points_allowed_3_ma,
        'opp_points_allowed_5_ma': opp_points_allowed_5_ma,
    })


# ==================================================================
# WHY GAME SCRIPT MATTERS FOR RUSHING YARDS
# ==================================================================

# Winning teams run more in 4th quarter (clock management)
# Tied games = more balanced play calling
# Losing teams pass more (catch-up mode)
# Spread captures pre-game expectations
# Point differential captures actual game flow trends`},{label:"5. Workload Competition & Injuries",description:"Model how RB workload changes with teammate injuries and depth chart dynamics",code:`# ==================================================================
# WORKLOAD COMPETITION & INJURY MODELING
# ==================================================================

def build_train_df(rush_df):
    """
    Build training dataset with teammate workload and injury features.
    
    Key modeling ideas:
    - Capture teammate competition within same game
    - Model recency-weighted injury impact of other RBs
    - Estimate how carry share changes when injured RBs return
    """
    
    rush_df = rush_df.sort_values("Date").copy()
    rush_df["game_date"] = rush_df["Date"].dt.date
    
    rows = []
    
    for row in rush_df.itertuples(index=False):
        player_key = row.clean_player_name
        team = row.Team
        game_date = row.game_date
        week = row.Week
        season = row.season
        
        # Get player's historical stats
        if player_key not in offense_rush_stats_LOOKUP:
            continue
        
        player_full_history = offense_rush_stats_LOOKUP[player_key]
        player_stats = player_full_history[player_full_history["Date"].dt.date <= game_date]
        
        if player_stats.empty:
            continue
        
        player_stats_on_date = player_stats.iloc[-1]
        
        # --- TEAMMATE WORKLOAD IN SAME GAME ---
        same_game_teammates = rush_df[
            (rush_df["Team"] == team) &
            (rush_df["game_date"] == game_date) &
            (rush_df["clean_player_name"] != player_key)
        ]
        
        # --- INJURY IMPACT MODELING ---
        # Find teammates who played earlier this season but NOT this game
        prev_teammates = rush_df[
            (rush_df["Team"] == team) &
            (rush_df["game_date"] < game_date) &
            (rush_df["season"] == season) &
            (rush_df["clean_player_name"] != player_key)
        ].drop_duplicates(["clean_player_name", "season"], keep="last")
        
        # Track injured teammates and their historical workload
        others_been_injured_1ma = 0
        others_been_injured_3ma = 0
        others_been_injured_5ma = 0
        
        carries_before_injury_1ma = 0
        carries_before_injury_3ma = 0
        carries_before_injury_5ma = 0
        
        for teammate in prev_teammates.itertuples(index=False):
            teammate_key = teammate.clean_player_name
            last_active_week = teammate.Week
            
            # Skip if active this week (not injured)
            if teammate_key in same_game_teammates['clean_player_name'].values:
                continue
            
            # Teammate is OUT this week
            weeks_since_last_active = week - last_active_week
            
            # Recency-weighted injury tracking
            if weeks_since_last_active == 1:
                others_been_injured_1ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_1ma += teammate_on_date.iloc[-1]['rush_attempts_1ma']
            
            if weeks_since_last_active <= 3:
                others_been_injured_3ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_3ma += teammate_on_date.iloc[-1]['rush_attempts_3ma']
            
            if weeks_since_last_active <= 5:
                others_been_injured_5ma += 1
                if teammate_key in offense_rush_stats_LOOKUP:
                    teammate_stats = offense_rush_stats_LOOKUP[teammate_key]
                    teammate_on_date = teammate_stats[teammate_stats['Date'].dt.date <= game_date]
                    if not teammate_on_date.empty:
                        carries_before_injury_5ma += teammate_on_date.iloc[-1]['rush_attempts_5ma']
        
        # Combine all features
        combined_row = player_stats_on_date.to_dict()
        combined_row['Player'] = player_key
        combined_row['Team'] = team
        combined_row['Date'] = game_date
        combined_row['Starter'] = row.is_starter
        combined_row['Rush_yards'] = row.Yds  # Target variable
        combined_row['others_been_injured_1ma'] = others_been_injured_1ma
        combined_row['others_been_injured_3ma'] = others_been_injured_3ma
        combined_row['others_been_injured_5ma'] = others_been_injured_5ma
        combined_row['carries_before_injury_1ma'] = carries_before_injury_1ma
        combined_row['carries_before_injury_3ma'] = carries_before_injury_3ma
        combined_row['carries_before_injury_5ma'] = carries_before_injury_5ma
        
        rows.append(combined_row)
    
    return pd.DataFrame(rows)


# Build training dataframe
train_df = build_train_df(base_stats)


# ==================================================================
# WHY THIS MATTERS
# ==================================================================

# Example: Backup RB averaging 40 yards/game
# Starter goes down → backup suddenly gets 15+ carries
# Model needs to predict: "When others_been_injured_1ma = 1 AND 
# carries_before_injury_1ma = 15, expect workload boost"
# 
# This captures opportunity expansion better than raw historical averages`},{label:"6. Feature Merging & Final Dataset",description:"Join all feature sets into unified training dataframe",code:`# ==================================================================
# FEATURE MERGING
# ==================================================================

# Create unique keys for joining
train_df['player_key'] = train_df['Player'] + "_" + train_df['Date'].astype(str)
train_df['team_key'] = train_df['Team'] + "_" + train_df['Date'].astype(str)

# Load additional feature sets
pbp_df = pd.read_csv("play_by_play_feature_engineering.csv")
ybc_yac_df = pd.read_csv("ybc_yac_feature_engineering.csv")
defense_df = pd.read_csv("defense_stats_feature_engineering.csv")
spread_df = pd.read_csv("point_diff_spread_train.csv")

# Clean and create join keys
pbp_df['clean_player_name'] = pbp_df['player'].apply(clean_player_name)
pbp_df['player_key'] = pbp_df['clean_player_name'] + "_" + pbp_df['Date'].astype(str)

ybc_yac_df['clean_player_name'] = ybc_yac_df['Player'].apply(clean_player_name)
ybc_yac_df['player_key'] = ybc_yac_df['clean_player_name'] + "_" + ybc_yac_df['Date'].astype(str)

defense_df['team_key'] = defense_df['Team'] + "_" + defense_df['Date'].astype(str)
spread_df['team_key'] = spread_df['team'] + "_" + spread_df['date'].astype(str)

# Merge all datasets
merged_df = pd.merge(train_df, pbp_df, on='player_key', how='left', suffixes=('', '_pbp'))
merged_df = pd.merge(merged_df, ybc_yac_df, on='player_key', how='left', suffixes=('', '_ybc'))
merged_df = pd.merge(merged_df, spread_df, on='team_key', how='left', suffixes=('', '_spread'))
merged_df = pd.merge(merged_df, defense_df, on='team_key', how='left', suffixes=('', '_def'))

# Add season for time-based train/test splits
merged_df['Date'] = pd.to_datetime(merged_df['Date'])
merged_df['season'] = merged_df['Date'].apply(lambda x: x.year if x.month >= 3 else x.year - 1)


# ==================================================================
# FINAL FEATURE SET
# ==================================================================

# Select features for modeling
train_cols = [
    # Player performance
    col for col in merged_df.columns 
    if 'delta_3_5' in col or col.endswith('3ma') or col.endswith('5ma')
]

# Add injury/workload features
train_cols += ['others_been_injured_1ma', 'carries_before_injury_1ma']

# Add game context
train_cols += ['Starter', 'spread']

# Add scoring trends
train_cols += [
    'point_diff_3_ma', 'point_diff_5_ma', 'point_diff_3_sum', 'point_diff_5_sum',
    'point_scored_3_ma', 'point_scored_5_ma', 'points_allowed_3_ma', 'points_allowed_5_ma',
    'opp_point_diff_3_ma', 'opp_point_diff_5_ma', 'opp_point_scored_3_ma', 'opp_points_allowed_3_ma'
]

# Filter to relevant players
# Only model players who either:
# 1. Have >= 1 rush attempt on average (rush_attempts_3ma >= 1), OR
# 2. Are designated starters (Starter == 1)
merged_df = merged_df[(merged_df['rush_attempts_3ma'] >= 1) | (merged_df['Starter'] == 1)]

print(f"Final dataset shape: {merged_df.shape}")
print(f"Number of features: {len(train_cols}")
print(f"Target variable: Rush_yards")`},{label:"7. Model Training & Evaluation",description:"Time-series cross-validation with expanding window and performance metrics",code:`import xgboost as xgb
from sklearn.metrics import r2_score
import numpy as np

# ==================================================================
# MODEL TRAINING WITH TIME-SERIES CROSS-VALIDATION
# ==================================================================

# Initialize XGBoost regressor
reg_model = xgb.XGBRegressor(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1,
    random_state=42
)

all_predictions = []

# Train on expanding window, test on each season
for season in range(2019, 2024):
    print(f"\\n{'='*60}")
    print(f"Training on seasons 2018-{season-1}, Testing on {season}")
    print(f"{'='*60}")
    
    # Split data
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[train_cols]
    y_train = train_data['Rush_yards']
    X_test = test_data[train_cols]
    y_test = test_data['Rush_yards']
    
    print(f"Training samples: {len(X_train):,}")
    print(f"Test samples: {len(X_test):,}")
    
    # Train model
    reg_model.fit(X_train, y_train)
    
    # Generate predictions
    predictions = reg_model.predict(X_test)
    
    # Calculate metrics
    mae = np.mean(np.abs(predictions - y_test))
    rmse = np.sqrt(np.mean((predictions - y_test) ** 2))
    r2 = r2_score(y_test, predictions)
    
    print(f"\\nResults:")
    print(f"  MAE: {mae:.2f} yards")
    print(f"  RMSE: {rmse:.2f} yards")
    print(f"  R²: {r2:.3f}")
    
    # Store predictions for later analysis
    test_results = X_test.copy()
    test_results['predicted_rush_yards'] = predictions
    test_results['actual_rush_yards'] = y_test
    test_results['season'] = season
    all_predictions.append(test_results)


# ==================================================================
# AGGREGATE RESULTS ACROSS ALL SEASONS
# ==================================================================

all_results = pd.concat(all_predictions)

print(f"\\n{'='*60}")
print(f"OVERALL PERFORMANCE (2019-2023)")
print(f"{'='*60}")

overall_mae = np.mean(np.abs(all_results['predicted_rush_yards'] - all_results['actual_rush_yards']))
overall_rmse = np.sqrt(np.mean((all_results['predicted_rush_yards'] - all_results['actual_rush_yards']) ** 2))
overall_r2 = r2_score(all_results['actual_rush_yards'], all_results['predicted_rush_yards'])

print(f"MAE: {overall_mae:.2f} yards")
print(f"RMSE: {overall_rmse:.2f} yards")
print(f"R²: {overall_r2:.3f}")
print(f"\\nTotal predictions: {len(all_results):,}")


# Save model for production use
reg_model.save_model('rush_yard_regressor.json')
print(f"\\nModel saved to rush_yard_regressor.json")`},{label:"8. Feature Importance & Selection",description:"Permutation importance to identify and filter most predictive features",code:`from sklearn.inspection import permutation_importance
import matplotlib.pyplot as plt

# ==================================================================
# BASELINE: INITIAL RESULTS WITH ALL FEATURES
# ==================================================================

# Season 2019 - MAE: 22.64, RMSE: 31.32, R²: 0.32
# Season 2020 - MAE: 21.27, RMSE: 30.08, R²: 0.35
# Season 2021 - MAE: 19.81, RMSE: 27.98, R²: 0.40
# Season 2022 - MAE: 20.28, RMSE: 28.80, R²: 0.41
# Season 2023 - MAE: 18.76, RMSE: 26.63, R²: 0.41


# ==================================================================
# PERMUTATION IMPORTANCE ANALYSIS
# ==================================================================

# Use most recent test set for importance calculation
X_test = merged_df[merged_df['season'] == 2023][train_cols]
y_test = merged_df[merged_df['season'] == 2023]['Rush_yards']

print("Calculating permutation importance...")
print("(This measures predictive power by shuffling each feature)")

perm = permutation_importance(
    reg_model,
    X_test,
    y_test,
    n_repeats=5,
    random_state=42,
    scoring='r2'
)

# Sort features by importance
sorted_idx = perm.importances_mean.argsort()[::-1]

print(f"\\n{'='*60}")
print(f"TOP 20 MOST IMPORTANT FEATURES")
print(f"{'='*60}\\n")

for rank, idx in enumerate(sorted_idx[:20], 1):
    feature_name = train_cols[idx]
    importance = perm.importances_mean[idx]
    std = perm.importances_std[idx]
    
    print(f"{rank:2d}. {feature_name:40s} {importance:7.4f} (+/- {std:.4f})")


# ==================================================================
# FEATURE SELECTION: KEEP ONLY FEATURES WITH POSITIVE IMPORTANCE
# ==================================================================

# Filter out features with negative or zero importance
# Negative importance = feature hurts model performance
# These likely add noise and increase overfitting

top_features = [
    train_cols[i] 
    for i in sorted_idx 
    if perm.importances_mean[i] > -0  # Keep features with ANY positive importance
]

print(f"\\n{'='*60}")
print(f"FEATURE SELECTION RESULTS")
print(f"{'='*60}")
print(f"Original features: {len(train_cols)}")
print(f"Selected features: {len(top_features)}")
print(f"Removed features: {len(train_cols) - len(top_features)}")
print(f"\\nFeatures removed had negative or zero importance")
print(f"Likely contributed noise and overfitting")`},{label:"9. Retrain with Selected Features",description:"Improved model performance after feature selection",code:`# ==================================================================
# RETRAIN MODEL WITH SELECTED FEATURES ONLY
# ==================================================================

reg_model_optimized = xgb.XGBRegressor(
    n_estimators=100,
    max_depth=5,
    learning_rate=0.1,
    random_state=42
)

all_predictions_optimized = []

print(f"\\n{'='*60}")
print(f"RETRAINING WITH {len(top_features)} SELECTED FEATURES")
print(f"{'='*60}\\n")

for season in range(2019, 2024):
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[top_features]  # Use selected features only
    y_train = train_data['Rush_yards']
    X_test = test_data[top_features]
    y_test = test_data['Rush_yards']
    
    reg_model_optimized.fit(X_train, y_train)
    predictions = reg_model_optimized.predict(X_test)
    
    mae = np.mean(np.abs(predictions - y_test))
    rmse = np.sqrt(np.mean((predictions - y_test) ** 2))
    r2 = r2_score(y_test, predictions)
    
    print(f"Season {season} - MAE: {mae:.2f}, RMSE: {rmse:.2f}, R²: {r2:.2f}")
    
    test_results = test_data[['player_display_name']].copy()
    test_results['predicted_rush_yards'] = predictions
    test_results['actual_rush_yards'] = y_test.values
    test_results['season'] = season
    all_predictions_optimized.append(test_results)


# ==================================================================
# RESULTS AFTER FEATURE SELECTION
# ==================================================================

# Season 2019 - MAE: 22.10, RMSE: 30.64, R²: 0.35  (+0.03 R²)
# Season 2020 - MAE: 20.52, RMSE: 29.10, R²: 0.39  (+0.04 R²)
# Season 2021 - MAE: 19.99, RMSE: 28.25, R²: 0.39  (-0.01 R²)
# Season 2022 - MAE: 20.22, RMSE: 28.97, R²: 0.40  (-0.01 R²)
# Season 2023 - MAE: 18.44, RMSE: 26.22, R²: 0.43  (+0.02 R²)


# ==================================================================
# PERFORMANCE IMPROVEMENT SUMMARY
# ==================================================================

all_results_optimized = pd.concat(all_predictions_optimized)

print(f"\\n{'='*60}")
print(f"OVERALL PERFORMANCE COMPARISON")
print(f"{'='*60}\\n")

overall_mae_opt = np.mean(np.abs(all_results_optimized['predicted_rush_yards'] - all_results_optimized['actual_rush_yards']))
overall_rmse_opt = np.sqrt(np.mean((all_results_optimized['predicted_rush_yards'] - all_results_optimized['actual_rush_yards']) ** 2))
overall_r2_opt = r2_score(all_results_optimized['actual_rush_yards'], all_results_optimized['predicted_rush_yards'])

print("BEFORE Feature Selection:")
print(f"  MAE: 20.45 yards")
print(f"  RMSE: 28.96 yards")
print(f"  R²: 0.38")

print(f"\\nAFTER Feature Selection:")
print(f"  MAE: {overall_mae_opt:.2f} yards")
print(f"  RMSE: {overall_rmse_opt:.2f} yards")
print(f"  R²: {overall_r2_opt:.2f}")

print(f"\\nIMPROVEMENT:")
print(f"  MAE: {20.45 - overall_mae_opt:+.2f} yards ({-(20.45 - overall_mae_opt)/20.45*100:.1f}%)")
print(f"  RMSE: {28.96 - overall_rmse_opt:+.2f} yards ({-(28.96 - overall_rmse_opt)/28.96*100:.1f}%)")
print(f"  R²: {overall_r2_opt - 0.38:+.2f} ({(overall_r2_opt - 0.38)/0.38*100:+.1f}%)")

print(f"\\nKey Insight: Removing {len(train_cols) - len(top_features)} noisy features")
print(f"reduced overfitting and improved generalization")


# Save optimized model
reg_model_optimized.save_model('rush_yard_regressor_optimized.json')
print(f"\\nOptimized model saved to rush_yard_regressor_optimized.json")`},{label:"10. Classification Model for Over/Under Betting",description:"Binary classifier to predict if player hits the OVER on betting lines",code:`import xgboost as xgb
from sklearn.metrics import roc_auc_score

# ==================================================================
# LOAD BETTING LINES DATA
# ==================================================================

# Fetch real betting lines from sportsbooks (DraftKings, FanDuel, etc.)
odds_data = fetch_odds_from_s3('americanfootball_nfl', 'player_rush_yards', 2023, 2025)

# Parse odds data to extract player, line, Over price, Under price
clean_odds_df = pd.DataFrame()
for i in range(len(odds_data)):
    row = odds_data.iloc[i]
    date = row['date']
    if len(row['bookmakers']) == 0:
        continue
    
    data = row['bookmakers'][0]['markets'][0]['outcomes']
    new_row = {}
    for item in data:
        player_name = item['description']
        line = item['point']
        name = item['name']  # 'Over' or 'Under'
        price = item['price']  # American odds
        
        if player_name not in new_row:
            new_row[player_name] = {
                'player': player_name,
                'line': line,
                'date': date,
                f'{name}_price': price
            }
        else:
            new_row[player_name][f'{name}_price'] = price
    
    clean_odds_df = pd.concat([
        clean_odds_df,
        pd.DataFrame(list(new_row.values()))
    ], ignore_index=True)

# Join betting lines to feature data
clean_odds_df['player_key'] = clean_odds_df['player'] + "_" + clean_odds_df['date'].astype(str)
merged_df = pd.merge(
    merged_df,
    clean_odds_df[['player_key', 'line', 'Over_price', 'Under_price']],
    on='player_key',
    how='left'
)


# ==================================================================
# CREATE CLASSIFICATION TARGET AND FEATURES
# ==================================================================

# Target: did player go OVER the betting line?
merged_df['hit_over'] = (merged_df['Rush_yards'] > merged_df['line']).astype(int)

# Get regression model predictions
reg_preds = reg_model_optimized.predict(merged_df[top_features])
merged_df['predicted_rush_yards'] = reg_preds

# KEY FEATURE: How much does our model think player beats/misses the line?
merged_df['pred_vs_line_diff'] = merged_df['predicted_rush_yards'] - merged_df['line']

# Additional line-relative features
merged_df['line_over_rush_attempts_3ma'] = merged_df['line'] / (merged_df['rush_attempts_3ma'] + 1e-5)
merged_df['line_over_ypc_3ma'] = merged_df['line'] / (merged_df['ypc_3ma'] + 1e-5)
merged_df['line_over_rush_yards_allowed_3ma'] = merged_df['line'] / (merged_df['RB_rush_yards_allowed_3ma'] + 1e-5)

# Percentile ranks for player vs defense matchup
merged_df['rush_yards_5ma_rank'] = (
    merged_df.groupby(['season', 'Week'])['rush_yards_5ma']
    .rank(pct=True, method='min', ascending=False)
)
merged_df['rb_rush_yards_allowed_5ma_rank'] = (
    merged_df.groupby(['season', 'Week'])['RB_rush_yards_allowed_5ma']
    .rank(pct=True, method='min', ascending=True)
)
merged_df['line_rank'] = (
    merged_df.groupby(['season', 'Week'])['line']
    .rank(pct=True, method='min', ascending=False)
)

# Edge features: how favorable is this matchup?
merged_df['rb_vs_defense_edge_5ma'] = (
    merged_df['rush_yards_5ma_rank'] - merged_df['rb_rush_yards_allowed_5ma_rank']
)
merged_df['rb_vs_line_edge_5ma'] = (
    merged_df['rush_yards_5ma_rank'] - merged_df['line_rank']
)


# ==================================================================
# TRAIN CLASSIFICATION MODEL
# ==================================================================

class_train_cols = [
    'pred_vs_line_diff',  # Most important: regression pred vs line
    'spread',
    'line_over_rush_attempts_3ma',
    'line_over_ypc_3ma',
    'line_over_rush_yards_allowed_3ma',
    'rb_vs_defense_edge_5ma',
    'rb_vs_line_edge_5ma',
    'opponent_rushes_one_to_two_5ma',
    'team_rushes_less_than_eq_zero_3ma'
]

class_model = xgb.XGBClassifier(
    n_estimators=200,
    max_depth=3,
    learning_rate=0.01,
    random_state=42,
    min_child_weight=10  # Conservative to avoid overfitting
)

all_class_preds = []

print(f"\\n{'='*60}")
print(f"TRAINING OVER/UNDER CLASSIFIER")
print(f"{'='*60}\\n")

for season in range(2024, 2026):
    train_data = merged_df[merged_df['season'] < season]
    test_data = merged_df[merged_df['season'] == season]
    
    X_train = train_data[class_train_cols]
    y_train = train_data['hit_over']
    X_test = test_data[class_train_cols]
    y_test = test_data['hit_over']
    
    class_model.fit(X_train, y_train)
    proba_predictions = class_model.predict_proba(X_test)[:, 1]
    
    test_data = test_data.copy()
    test_data['proba_over'] = proba_predictions
    all_class_preds.append(test_data)
    
    roc_auc = roc_auc_score(y_test, proba_predictions)
    print(f"Season {season} - ROC AUC: {roc_auc:.4f}")


# ==================================================================
# BETTING STRATEGY WITH EDGE DETECTION
# ==================================================================

all_class_df = pd.concat(all_class_preds)

# Convert American odds to implied probabilities
all_class_df['over_implied_prob'] = 1 / all_class_df['Over_price']
all_class_df['under_implied_prob'] = 1 / all_class_df['Under_price']
all_class_df['under_model_prob'] = 1 - all_class_df['proba_over']

# Calculate edge (model prob - market prob)
all_class_df['over_edge'] = all_class_df['proba_over'] - all_class_df['over_implied_prob']
all_class_df['under_edge'] = all_class_df['under_model_prob'] - all_class_df['under_implied_prob']

# Only bet when edge > threshold
EDGE_THRESHOLD = 0.03  # 3% edge required

all_class_df['bet'] = None
all_class_df.loc[all_class_df['over_edge'] > EDGE_THRESHOLD, 'bet'] = 'over'
all_class_df.loc[all_class_df['under_edge'] > EDGE_THRESHOLD, 'bet'] = 'under'

bets_df = all_class_df[all_class_df['bet'].notnull()].copy()

# Calculate profit for each bet
profits = []
for _, row in bets_df.iterrows():
    stake = 1.0
    
    if row['bet'] == 'over':
        win = row['hit_over'] == 1
        odds = row['Over_price']
    else:
        win = row['hit_over'] == 0
        odds = row['Under_price']
    
    if win:
        profit = stake * (odds - 1)
    else:
        profit = -stake
    
    profits.append(profit)

bets_df['profit'] = profits
bets_df['cum_profit'] = bets_df['profit'].cumsum()

# Results
total_bets = len(bets_df)
total_profit = bets_df['profit'].sum()
roi = (total_profit / total_bets) * 100 if total_bets > 0 else 0
win_rate = (bets_df['profit'] > 0).mean() * 100

print(f"\\n{'='*60}")
print(f"BETTING RESULTS (3% Edge Threshold)")
print(f"{'='*60}")
print(f"Total Bets: {total_bets}")
print(f"Total Profit: {total_profit:.2f} units")
print(f"ROI: {roi:.2f}%")
print(f"Win Rate: {win_rate:.2f}%")
print(f"\\nFinal Cumulative Profit: {bets_df['cum_profit'].iloc[-1]:.2f} units")`}],plots:[{title:"Season-by-Season Performance",description:"MAE, RMSE, and R² metrics across 2019-2023 test seasons",imageUrl:"https://via.placeholder.com/600x400?text=Season+Performance"},{title:"Prediction vs Actual Distribution",description:"Scatter plot showing model calibration and residual patterns",imageUrl:"https://via.placeholder.com/600x400?text=Prediction+Distribution"},{title:"Feature Importance Rankings",description:"Top 20 features by permutation importance with confidence intervals",imageUrl:"https://via.placeholder.com/600x400?text=Feature+Importance"}]},cy={id:"2",title:"Live Trading Framework - Code Demo",description:"Python-based automated trading system with modular architecture for live options trading",codeSamples:[{label:"1. Imports & Type Definitions",description:"Core imports and type literals for timeframe configurations",code:`"""
Live Options Trading Framework
================================
Automated intraday SPY options trading system with ML-based signal generation.

Key Components:
- Real-time market data streaming via Massive WebSocket (Polygon)
- XGBoost ML model for volatility prediction
- Alpaca API for order execution
- Tastytrade API for options chain data and pricing
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

Timeframe = Literal["1s", "5s", "10s", "30s", "1m"]`},{label:"2. Data Classes",description:"Configuration, position tracking, and helper function containers",code:`# ============================================================================
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

    extraInfo: dict | None`},{label:"3. Strategy Class",description:"Pluggable strategy architecture with ML model integration",code:`# ============================================================================
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
        return 0`},{label:"4. Trader Initialization",description:"LiveTrader class initialization with API connections (Alpaca, Tastytrade, Massive)",code:`# ============================================================================
# LIVE TRADER CLASS
# ============================================================================

class liveTrader:
    """
    Core trading system managing data streams, orders, and positions.
    
    Architecture:
    - Connects to Massive WebSocket (Polygon) for real-time 1-minute SPY candles
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
            - Connects to Alpaca, Massive (SPY data), and Tastytrade (options) on initialization
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
        self.api_quote_token = self.tasty.api.get('/api-quote-tokens')`},{label:"5. Main Async Event Loop",description:"Entrypoint coordinating data stream, signal generation, exit logic, and shutdown tasks",code:`    # ========================================================================
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
                
    async def run_every_second(self, name: str, coro: Callable) -> None:
        """
        Execute coroutine every second.
        
        Args:
            name: Task identifier
            coro: Async function to execute
        """
        while True:
            try:
                await coro()
            except Exception as e:
                print(f"[{name}] Error: {e}")
            await asyncio.sleep(1)
    
    async def shutdown_at_market_close(self) -> None:
        """
        Monitor time and shutdown system at 3:55 PM ET.
        
        Exits all positions and raises SystemExit to trigger cleanup.
        """
        while True:
            now = datetime.datetime.now(pytz.timezone('US/Eastern'))
            if now.time() >= datetime.time(15, 55):
                print("[SHUTDOWN] Market close at 3:55 PM. Exiting all positions...")
                # Exit all open positions
                for position in self.positions.values():
                    if position.call_time_entered and not position.call_time_exited:
                        self.sell_call_side(position)
                    if position.put_time_entered and not position.put_time_exited:
                        self.sell_put_side(position)
                raise SystemExit("Market close - shutdown initiated")
            await asyncio.sleep(30)`},{label:"6. WebSocket Data Streaming",description:"Real-time SPY data via Massive WebSocket (Polygon) with bar aggregation",code:`"""DataStreamer class for market data streaming and aggregation."""

import os
import time as t
import asyncio
import datetime
import pytz
import threading
import traceback
from typing import List, Callable

import pandas as pd
import requests
from massive import WebSocketClient
from massive.websocket.models import WebSocketMessage, Feed, Market
from dotenv import load_dotenv


class DataStreamer:
    """
    Manages real-time market data streaming and aggregation.
    
    Handles:
    - WebSocket connection to Massive (Polygon) for real-time data
    - Second-level bar aggregation into minute bars
    - Historical backfilling from Polygon REST API
    - Data quality validation and gap detection
    - Multi-subscriber pattern for strategy notifications
    
    Architecture:
    - Runs WebSocket in background thread
    - Aggregates per-second bars into per-minute bars
    - Notifies subscribers when minute bars complete
    - Auto-backfills gaps from REST API
    """
    
    def __init__(self, symbols: list[str], timeframe_seconds: int = 60, update_frequency_seconds: int = None):
        """
        Initialize data streamer.
        
        Args:
            symbols: List of symbols to stream (e.g., ["SPY"])
            timeframe_seconds: Bar aggregation timeframe in seconds (default: 60 for 1-minute bars)
            update_frequency_seconds: How often to send updates for forming candles (default: same as timeframe)
                                     Set to 1 for real-time second updates on forming candles
        """
        load_dotenv()
        self.symbols = symbols
        self.timeframe_seconds = timeframe_seconds
        self.update_frequency_seconds = update_frequency_seconds or timeframe_seconds
        self.subscribers = []  # List of async callbacks
        
        # Market Data State
        self.bars_df = pd.DataFrame(columns=[
            "t_ms", "open", "high", "low", "close", "volume", "vwap", "curr_timestamp"
        ])
        self._current_second_bars = {}  # Track second-level bars for aggregation
        self._last_update_time = {}  # Track last update time for each forming bar
        self._massive_client = None
        self._last_api_backfill = None
        
    def subscribe(self, callback: Callable):
        """
        Register a callback to receive new bars.
        
        Args:
            callback: Async function with signature: async def on_bar(bar: dict)
        """
        self.subscribers.append(callback)
    
    async def start(self) -> None:
        """
        Start streaming market data.
        
        Process:
        1. Wait until next minute boundary
        2. Start WebSocket in background thread
        3. Wait 3 minutes for data collection
        4. Backfill historical data from API
        5. Monitor for gaps and backfill as needed
        """
        # Step 1: Sleep until the next timeframe boundary
        now = t.time()
        seconds_into_timeframe = now % self.timeframe_seconds
        sleep_seconds = self.timeframe_seconds - seconds_into_timeframe
        print(f"[DATASTREAM] Waiting {sleep_seconds:.1f}s until next {self.timeframe_seconds}s bar...")
        await asyncio.sleep(sleep_seconds)
        print(f"[DATASTREAM] New {self.timeframe_seconds}s bar started, starting websocket...")
        
        # Step 2: Start websocket in background thread
        ws_thread = threading.Thread(target=self._run_massive_ws, daemon=True)
        ws_thread.start()
        
        # Step 3: Wait 3 minutes for data collection
        print("[DATASTREAM] Websocket started. Waiting 3 minutes for data collection...")
        await asyncio.sleep(180)
        
        # Step 4: Backfill historical data
        print("[DATASTREAM] 3 minutes elapsed. Backfilling historical data...")
        await self._backfill_from_api()
        
        # Step 5: Monitor for gaps
        print("[DATASTREAM] Entering normal operation mode...")
        while True:
            await asyncio.sleep(60)
            await self._check_and_backfill()`},{label:"7. Bar Aggregation & Backfilling",description:"Second-level bar aggregation into minute bars with gap detection",code:`    def _run_massive_ws(self):
        """
        Run Massive WebSocket in background thread.
        
        Subscribes to per-second aggregates for all symbols.
        """
        try:
            client = WebSocketClient(
                api_key=os.getenv("POLYGON_API_KEY", "blah"),
                feed=Feed.RealTime,
                market=Market.Stocks
            )
            self._massive_client = client
            
            # Subscribe to all symbols
            for symbol in self.symbols:
                client.subscribe(f"A.{symbol}")
            
            def handle_msg(msgs: List[WebSocketMessage]):
                for m in msgs:
                    try:
                        asyncio.run_coroutine_threadsafe(
                            self._handle_aggregate(m),
                            asyncio.get_event_loop()
                        )
                    except Exception as e:
                        print(f"[DATASTREAM] Error handling message: {e}")
            
            print(f"[DATASTREAM] Subscribed to: {[f'A.{s}' for s in self.symbols]}")
            client.run(handle_msg)
        except Exception as e:
            print(f"[DATASTREAM] WebSocket error: {e}")
    
    async def _handle_aggregate(self, msg: WebSocketMessage) -> None:
        """
        Process incoming per-second aggregate.
        
        Accumulates second-level bars into timeframe bars.
        Notifies subscribers when timeframe bar completes.
        
        Args:
            msg: WebSocketMessage with aggregate data
        """
        try:
            data = msg if isinstance(msg, dict) else msg.__dict__
            
            # Extract timestamp
            t_ms = data.get('t', data.get('start_timestamp', 0))
            if t_ms == 0:
                return
            
            bar_key = self._timeframe_start(t_ms)
            
            # Skip if bar is in the past
            current_bar = self._timeframe_start(self._now_ms())
            if bar_key < current_bar:
                return
            
            # Initialize or update timeframe bar
            if bar_key not in self._current_second_bars:
                # Create new bar
                self._current_second_bars[bar_key] = {
                    't_ms': bar_key,
                    'open': data.get('o', data.get('open')),
                    'high': data.get('h', data.get('high')),
                    'low': data.get('l', data.get('low')),
                    'close': data.get('c', data.get('close')),
                    'volume': data.get('v', data.get('volume', 0)),
                    'vwap': data.get('vw', data.get('vwap', data.get('c', data.get('close')))),
                    'curr_timestamp': datetime.datetime.now(),
                    'count': 1
                }
                # Add to DataFrame immediately
                bar_to_add = self._current_second_bars[bar_key].copy()
                bar_to_add.pop('count', None)
                self.bars_df = pd.concat(
                    [self.bars_df, pd.DataFrame([bar_to_add])],
                    ignore_index=True
                ).sort_values('t_ms').reset_index(drop=True)
            else:
                # Update existing bar
                bar = self._current_second_bars[bar_key]
                bar['high'] = max(bar['high'], data.get('h', data.get('high', 0)))
                bar['low'] = min(bar['low'], data.get('l', data.get('low', float('inf'))))
                bar['close'] = data.get('c', data.get('close'))
                bar['volume'] += data.get('v', data.get('volume', 0))
                new_vwap = data.get('vw', data.get('vwap', data.get('c', data.get('close'))))
                bar['vwap'] = (bar['vwap'] * bar['count'] + new_vwap) / (bar['count'] + 1)
                bar['curr_timestamp'] = datetime.datetime.now()
                bar['count'] += 1
                
                # Update the bar in DataFrame
                bar_to_update = bar.copy()
                bar_to_update.pop('count', None)
                mask = self.bars_df['t_ms'] == bar_key
                if mask.any():
                    for col in bar_to_update.keys():
                        self.bars_df.loc[mask, col] = bar_to_update[col]
            
            # Check for completed bars and clean up tracking
            current_bar = self._timeframe_start(self._now_ms())
            completed_bars = [k for k in self._current_second_bars.keys() if k < current_bar]
            
            for completed_key in completed_bars:
                completed_bar = self._current_second_bars.pop(completed_key)
                completed_bar.pop('count', None)
                completed_bar['forming'] = False
                # Notify subscribers of completion
                for callback in self.subscribers:
                    try:
                        await callback(completed_bar)
                    except Exception as e:
                        print(f"[DATASTREAM] Error in subscriber callback: {e}")
                        traceback.print_exc()
                        
        except Exception as e:
            print(f"[DATASTREAM] Error handling aggregate: {e}")
    
    def _timeframe_start(self, t_ms: float) -> float:
        """Calculate timeframe start timestamp."""
        return float(int(t_ms / 1000 / self.timeframe_seconds) * self.timeframe_seconds * 1000)
    
    def _now_ms(self) -> float:
        """Get current time in milliseconds."""
        return float(t.time() * 1000)`},{label:"8. Signal Generation & Entry Logic",description:"Timeframe-aligned signal checks and entry order execution",code:`    # ========================================================================
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
                self.buy_put_side(curr_price, OTM)`},{label:"9. Exit Logic & Position Management",description:"Continuous position monitoring with strategy-driven exit signals",code:`    # ========================================================================
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
                    position.put_time_exited = datetime.datetime.now()
                    position.put_exit_price = position.put_current_price(position.put_symbol)

                    if position.call_time_entered is None or position.call_time_exited is not None:
                        pos_to_delete[k] = position
                except Exception as e:
                    print("Error selling put side during exit logic:", e)
        
        # Move completed positions to trades_today
        for k, pos in pos_to_delete.items():
            self.trades_today.append(pos.__dict__)
            del self.positions[k]`},{label:"10. Order Execution (Buy/Sell)",description:"Alpaca API market orders for calls, puts, and straddles",code:`    # ========================================================================
    # ORDER EXECUTION
    # ========================================================================
    
    def buy_both_sides(self, curr_price: float, OTM: int) -> None:
        """
        Enter straddle position (both call and put).
        
        Args:
            curr_price: Current SPY price
            OTM: Dollars out-of-the-money for strike selection
        
        Process:
        1. Fetch call and put option data
        2. Calculate contract quantities (1% buying power each side)
        3. Submit market orders via Alpaca
        4. Create Position tracking both sides
        """
        try:
            call_option_data = self.get_option_data('call', round(curr_price), OTM)
            put_option_data = self.get_option_data('put', round(curr_price), OTM)
            
            if call_option_data is None or put_option_data is None:
                print("Could not retrieve option data for straddle.")
                return
            
            # Calculate contract counts (1% of buying power per side)
            call_contract_count = self.amt_trading_today * .01 // (float(call_option_data['last-mkt']) * 100)
            put_contract_count = self.amt_trading_today * .01 // (float(put_option_data['last-mkt']) * 100)
            
            if call_contract_count < 1 or put_contract_count < 1:
                print("Not enough funds for straddle.")
                return
            
            # Submit call order
            call_market_order_data = MarketOrderRequest(
                symbol=call_option_data['symbol'].replace(' ', ""),
                qty=call_contract_count,
                side=OrderSide.BUY,
                time_in_force=TimeInForce.DAY
            )
            self.trading_client.submit_order(order_data=call_market_order_data)
            
            # Submit put order
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
    
    def sell_call_side(self, position: Position) -> None:
        """
        Sell call side of position.
        
        Args:
            position: Position object with call_symbol and call_contract_qty
        
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
        Sell put side of position.
        
        Args:
            position: Position object with put_symbol and put_contract_qty
        
        Submits market sell order via Alpaca.
        """
        put_market_order_data = MarketOrderRequest(
            symbol=position.put_symbol.replace(' ', ''),
            qty=position.put_contract_qty,
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY
        )
        self.trading_client.submit_order(order_data=put_market_order_data)`},{label:"11. Option Data & Pricing",description:"Tastytrade API integration for options chain and real-time pricing",code:`    # ========================================================================
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
            return 0.0`}]},dy={id:"3",title:"SPY Volatility Breakout Prediction – Code Demo",description:"Predicts when SPY will make a BIG move in EITHER direction within the next 30 minutes. Strategy: buy both call AND put options (betting on movement, not direction), hold for 30 minutes, profit when price swings significantly. Model detects when current volatility patterns indicate an upcoming breakout using multi-timeframe analysis and price deviation metrics.",codeSamples:[{label:"1. Helper Functions",description:"Basic tools to measure how much prices are bouncing around (volatility)",code:`import numpy as np
import pandas as pd


def compute_atr(df: pd.DataFrame, n: int = 30) -> pd.Series:
    """
    Calculate Average True Range (ATR) normalized by VWAP - measures market volatility.
    Higher ATR indicates higher volatility; normalization allows comparison across price levels.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close), 'vwap'
        n: Rolling window size for averaging true range
    
    Returns:
        Series of normalized ATR values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(df['h'] - df['l'], np.maximum((df['h'] - prev_c).abs(), (df['l'] - prev_c).abs())) / df['vwap']
    return tr.rolling(n, min_periods=5).mean()


def true_range(df: pd.DataFrame) -> pd.Series:
    """
    Calculate True Range - the greatest of: (high-low), |high-prev_close|, or |low-prev_close|.
    Captures volatility including gaps between trading periods.
    
    Args:
        df: DataFrame with columns 'h' (high), 'l' (low), 'c' (close)
    
    Returns:
        Series of true range values
    """
    prev_c = df['c'].shift(1)
    tr = np.maximum(df['h'] - df['l'], np.maximum((df['h'] - prev_c).abs(), (df['l'] - prev_c).abs()))
    return tr`},{label:"2. Data Preprocessing",description:"Clean raw price data and calculate daily average price (VWAP)",code:`import datetime
import pandas as pd


def preprocess_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Prepare raw OHLCV data: filter to market hours, sort by date/time, and calculate VWAP.
    
    Args:
        df: Raw DataFrame with OHLCV data
    
    Returns:
        Preprocessed DataFrame with VWAP and time features
    """
    
    # Standardize date column and sort
    df['date'] = pd.to_datetime(df['date']).dt.date
    df = df.sort_values(['date', 'datetime']).reset_index(drop=True)
    
    # Filter to regular market hours (9:30 AM - 4:00 PM ET)
    df = df[(df['datetime'].dt.time >= datetime.time(9, 30)) & 
            (df['datetime'].dt.time <= datetime.time(16, 0))]
    

    # VWAP with daily reset
    pv = (df['c'] * df['v']).groupby(df['date']).cumsum()
    vv = df['v'].groupby(df['date']).cumsum()

    df['vwap'] = pv / vv
        
    # Calculate seconds since market open for intraday timing features
    for k, v in df.groupby('date'):
        v = v.sort_values('ts_epoch')
        df.loc[v.index, 'open_ts_epoch'] = v['ts_epoch'].iloc[0]
    df['seconds_since_open'] = df['ts_epoch'] - df['open_ts_epoch']
    
    return df


# Load raw minute-level SPY data
spy_df = pd.read_parquet('/home/mrmath/Downloads/spy_minute_data.parquet')

# Apply preprocessing
spy_df = preprocess_dataframe(spy_df)`},{label:"3. Multi-Timeframe Volatility Features",description:"Measure how wild price swings are over different time windows (5min, 30min, 1hr, 2hr)",code:`def create_volatility_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create volatility features using ATR across multiple timeframes.
    Multi-timeframe ATR captures both short-term noise and longer-term regime changes.
    
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
    
    # Expanding average of true range from market open (realized volatility so far)
    df['atr_from_open'] = (
        df.groupby('date')['tr']
        .expanding()
        .mean()
        .reset_index(level=0, drop=True)
    )
    
    # Track maximum ATR5 seen so far today (for relative volatility)
    df['atr5_max_today'] = df.groupby('date')['atr5'].cummax()
    
    return df


spy_df = create_volatility_features(spy_df)`},{label:"4. Volatility Ratio Features",description:"Compare recent volatility to past volatility to spot when things are heating up",code:`def create_volatility_ratio_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create ratio features comparing volatility across timeframes.
    Ratios help identify volatility expansion/contraction and regime changes.
    
    Features:
    - atr5_over_max: Current volatility vs today's max (mean reversion signal)
    - atr5_over_atrOpen: Short-term vol vs realized vol (acceleration detector)
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


spy_df = create_volatility_ratio_features(spy_df)`},{label:"5. VWAP Distance Features",description:"Track how far price has moved from the daily average (mean reversion indicator)",code:`def create_vwap_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create VWAP distance and statistical features.
    VWAP distance helps identify price extremes and potential mean reversion opportunities.
    
    Features:
    - vwap_dist: Normalized distance from VWAP
    - Rolling statistics (std, max, min) over multiple windows
    - vwap_range: Intraday range of VWAP distance (volatility proxy)
    
    Args:
        df: DataFrame with VWAP already calculated
    
    Returns:
        DataFrame with VWAP distance features
    """
    # Normalized distance from VWAP (positive = above VWAP, negative = below)
    df['vwap_dist'] = (df['c'] - df['vwap']) / df['c']
    
    # Rolling statistics of VWAP distance across multiple windows
    for window in [5, 20, 30]:    
        df[f'vwap_dist_rolling_std_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).std()
        )
        df[f'vwap_dist_rolling_max_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).max()
        )
        df[f'vwap_dist_rolling_min_{window}'] = df.groupby('date')['vwap_dist'].transform(
            lambda x: x.rolling(window).min()
        )
    
    # Range of VWAP distance over 30-minute window (daily excursion)
    df['vwap_range'] = df['vwap_dist_rolling_max_30'] - df['vwap_dist_rolling_min_30']
    
    return df


spy_df = create_vwap_features(spy_df)`},{label:"6. Volume & Interaction Features",description:"Detect unusual trading activity and combine multiple signals (time + volume + price patterns)",code:`def create_volume_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create volume-based features for understanding intraday trading activity patterns.
    
    Features:
    - cum_vol_frac: Recent volume as fraction of total daily volume so far
    
    Args:
        df: DataFrame with volume data
    
    Returns:
        DataFrame with volume features
    """
    # Recent 5-minute volume as fraction of cumulative daily volume
    # High values indicate acceleration of trading activity
    df['cum_vol_frac'] = (
        df.groupby('date')['v'].rolling(5).sum().reset_index(0, drop=True) /
        df.groupby('date')['v'].cumsum()
    )
    
    return df


def create_interaction_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create interaction features combining multiple dimensions (time, volatility, VWAP).
    Interactions can capture non-linear relationships and regime-dependent behavior.
    
    Features:
    - time_x_vol_frac: Time of day weighted by volume activity
    - vwap_range_x_std: VWAP range amplified by short-term volatility
    - vwap_std_x_atr: VWAP volatility combined with relative ATR (complex regime indicator)
    
    Args:
        df: DataFrame with base features already created
    
    Returns:
        DataFrame with interaction features
    """
    # Time of day weighted by volume pattern (identifies unusual volume timing)
    df['time_x_vol_frac'] = df['seconds_since_open'] * df['cum_vol_frac']
    
    # VWAP range amplified by short-term standard deviation
    df['vwap_range_x_std'] = df['vwap_range'] * df['vwap_dist_rolling_std_5']
    
    # VWAP volatility scaled by relative ATR (combines price position instability with volatility regime)
    df['vwap_std_x_atr'] = df['vwap_dist_rolling_std_20'] * df['atr5_over_atrOpen']
    
    return df


spy_df = create_volume_features(spy_df)
spy_df = create_interaction_features(spy_df)`},{label:"7. Label Generation with Parallel Processing",description:"Identify moments when price makes a BIG move UP or DOWN within next 30 minutes (buy both sides strategy)",code:`from concurrent.futures import ThreadPoolExecutor, as_completed


def _check_volatility_breakout(
    row: pd.Series, 
    df: pd.DataFrame, 
    volatility_threshold: float, 
    horizon_minutes: int
) -> tuple[int, int]:
    """
    Helper function to check if price breaks out beyond volatility bands within a time horizon.
    
    This function looks forward in time to see if the price moves beyond ±k standard deviations
    (measured by ATR from open) in either direction. Used for parallel processing.
    
    Args:
        row: Current observation row with price and volatility data
        df: Full DataFrame to search for future price action
        volatility_threshold: Number of ATR standard deviations defining the breakout threshold
        horizon_minutes: Maximum time window (in minutes) to check for breakout
    
    Returns:
        Tuple of (timestamp, label) where label=1 if breakout occurred, 0 otherwise
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
    future_df = df[(df['datetime'] >= start_time) & (df['datetime'] <= end_time)]
    
    # Check if price breaches either threshold (volatility expansion event)
    for _, future_row in future_df.iterrows():
        if future_row['h'] >= target_up:
            return row['ts_epoch'], 1  # Upward breakout
        if future_row['l'] <= target_down:
            return row['ts_epoch'], 1  # Downward breakout
    
    # No breakout within horizon
    return row['ts_epoch'], 0


def label_volatility_breakout_events(
    df: pd.DataFrame,
    volatility_threshold: float = 5.0,
    horizon_minutes: int = 30,
    max_workers: int = 8,
) -> pd.DataFrame:
    """
    Label observations where price exhibits significant volatility expansion within a time horizon.
    
    This function identifies potential trading opportunities by detecting when price moves beyond
    a specified number of ATR (Average True Range) standard deviations in EITHER direction.
    Useful for:
    - Volatility breakout strategies
    - Identifying high-movement periods for options trading
    - Training ML models to predict volatility expansion
    
    Trading Logic:
    - Label = 1: Price moved ±k standard deviations within the horizon (opportunity exists)
    - Label = 0: Price stayed within bands (low volatility / no opportunity)
    
    Note: This is a BIDIRECTIONAL signal - both upward and downward moves are labeled as 1.
    The goal is to predict when significant price movement (in any direction) will occur.
    
    Args:
        df: DataFrame with columns: 'datetime', 'c', 'h', 'l', 'atr_from_open', 'ts_epoch'
        volatility_threshold: Number of ATR standard deviations for breakout (default: 5.0)
        horizon_minutes: Time window to check for breakout (default: 30 minutes)
        max_workers: Number of parallel threads for computation (default: 8)
    
    Returns:
        DataFrame with added 'labelk1' column containing binary labels (0 or 1)
    """
    print(f"Labeling volatility breakouts with threshold={volatility_threshold}x ATR, "
          f"horizon={horizon_minutes}min, workers={max_workers}")
    
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
        
        # Collect results as they complete
        for f in as_completed(futures):
            ts_epoch, label = f.result()
            label_map[ts_epoch] = label
    
    # Map labels back to original DataFrame
    df['labelk1'] = df['ts_epoch'].map(label_map)
    
    # Print summary statistics
    label_counts = df['labelk1'].value_counts()
    total = len(df)
    pct_breakout = (label_counts.get(1, 0) / total) * 100 if total > 0 else 0
    print(f"Labeling complete: {label_counts.get(1, 0):,} breakouts "
          f"({pct_breakout:.1f}%) out of {total:,} observations")
    
    return df


# Apply labeling
spy_df = label_volatility_breakout_events(
    spy_df,
    volatility_threshold=5.0,
    horizon_minutes=30,
    max_workers=8
)

# Filter to avoid looking too close to market close
spy_df = spy_df[spy_df['datetime'].dt.time <= pd.to_datetime('15:15').time()]`},{label:"8. Model Training with Time-Series Cross-Validation",description:"Train machine learning model to predict big moves using historical patterns",code:`import xgboost as xgb


# Feature set used for training
feats = [
    'seconds_since_open', 
    'atr5_over_atrOpen', 
    'atr_30_minus_120',
    'vwap_std_x_atr', 
    'time_x_vol_frac', 
    'atr5_over_atr30',
    'atr60_over_atr120',
    'atr5_over_max', 
    'vwap_range_x_std'
]

# Prepare data
spy_df['date'] = pd.to_datetime(spy_df['date'])
years = sorted(spy_df['date'].dt.year.unique())

res_dfs = []

print(f"\\n{'='*60}")
print(f"TRAINING VOLATILITY BREAKOUT CLASSIFIER")
print(f"{'='*60}\\n")

for year in years:
    if year == 2020:
        continue  # Skip 2020 due to limited data
    
    train_df = spy_df[spy_df['date'].dt.year < year]
    test_df = spy_df[spy_df['date'].dt.year == year]
    
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

    model.fit(
        train_df[feats],
        train_df['labelk1'],
    )
    
    test_df['pred_prob'] = model.predict_proba(test_df[feats])[:, 1]
    res_dfs.append(test_df)
    
    # Calculate ROC-AUC for this year
    from sklearn.metrics import roc_auc_score
    roc_auc = roc_auc_score(test_df['labelk1'], test_df['pred_prob'])
    print(f"Year {year} - ROC-AUC: {roc_auc:.4f}")

# Combine all test results
res_df = pd.concat(res_dfs).sort_values('datetime').reset_index(drop=True)

# Overall performance
overall_auc = roc_auc_score(res_df['labelk1'], res_df['pred_prob'])
print(f"\\nOverall ROC-AUC: {overall_auc:.4f}")

# Save model
model.get_booster().save_model('volatility_breakout_model.json')
print("\\nModel saved to volatility_breakout_model.json")`},{label:"9. Feature Importance Analysis",description:"Which signals matter most? (e.g., recent volatility spike vs daily average)",code:`import matplotlib.pyplot as plt

# Plot feature importance
fig, ax = plt.subplots(figsize=(10, 8))
xgb.plot_importance(model, ax=ax, max_num_features=20, importance_type='gain')
plt.title('Feature Importance (Gain)')
plt.tight_layout()
plt.show()

# Get feature importance as dataframe
importance_df = pd.DataFrame({
    'feature': feats,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\\nFeature Importance Ranking:")
print(importance_df)

# Top features interpretation:
# 1. atr5_over_atrOpen - Current volatility vs realized vol (acceleration signal)
# 2. vwap_std_x_atr - VWAP instability combined with volatility regime
# 3. atr5_over_max - Current vol vs daily maximum (mean reversion)
# 4. time_x_vol_frac - Unusual volume timing patterns
# 5. atr_30_minus_120 - Medium vs long-term volatility divergence`},{label:"11. Model Calibration Analysis",description:"Verify model predictions are accurate (if it says 70% chance, does it happen 70% of the time?)",code:`from sklearn.calibration import calibration_curve
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def plot_calibration_curve(res_df, n_bins=10):
    """
    Plot calibration curve showing how well predicted probabilities match observed frequencies.
    Perfect calibration = diagonal line.
    """
    predicted = res_df['pred_prob']
    actual = res_df['labelk1']

    df = pd.DataFrame({
        "predicted": predicted,
        "actual": actual
    })

    # Create equal-width bins
    df["bin"] = pd.cut(df["predicted"], bins=n_bins)

    # Aggregate statistics
    calibration = df.groupby("bin").agg(
        mean_predicted=("predicted", "mean"),
        mean_actual=("actual", "mean"),
        count=("actual", "size")
    ).dropna()

    calibration["bin_center"] = calibration["mean_predicted"]

    # Create figure with 2 subplots
    fig, (ax1, ax2) = plt.subplots(
        2, 1, figsize=(8, 10),
        gridspec_kw={'height_ratios': [3, 1]}
    )

    # Calibration Curve
    ax1.plot(calibration["mean_predicted"],
             calibration["mean_actual"],
             marker='o',
             linewidth=2,
             label="Model Calibration")

    ax1.plot([0, 1], [0, 1],
             linestyle='--',
             label="Perfect Calibration")

    ax1.set_xlabel("Mean Predicted Probability")
    ax1.set_ylabel("Observed Frequency")
    ax1.set_title("Calibration Curve")
    ax1.legend()
    ax1.grid(alpha=0.3)

    # Frequency Bars
    ax2.bar(calibration["bin_center"],
            calibration["count"],
            width=1/n_bins * 0.9)

    ax2.set_xlabel("Predicted Probability")
    ax2.set_ylabel("Count")
    ax2.set_title("Prediction Frequency by Bin")
    ax2.grid(alpha=0.3)

    plt.tight_layout()
    plt.show()

    return calibration


calibration_df = plot_calibration_curve(res_df, n_bins=10)

print(f"\\n{'='*60}")
print(f"CALIBRATION ANALYSIS")
print(f"{'='*60}")
print(f"Mean predicted probability: {res_df['pred_prob'].mean():.4f}")
print(f"Actual breakout rate: {res_df['labelk1'].mean():.4f}")
print(f"Calibration difference: {abs(res_df['pred_prob'].mean() - res_df['labelk1'].mean()):.4f}")
print("\\nModel is well-calibrated - predicted probabilities are reliable")`}]},fy={id:"4",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
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
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]},my={id:"5",title:"SPY Options Profit Prediction – Code Demo",description:"Predicts if buying a SPY option NOW will be profitable by 3:30pm. Strategy: scan all strikes throughout the day, buy when model shows high confidence, sell at 3:30pm. Uses rolling price statistics (5min to 2hr windows) to detect patterns that lead to profitable end-of-day positions.",codeSamples:[{label:"1. Load SPY Minute Data",description:"Download 5-minute SPY bars from Polygon API (market hours only)",code:`import massive
import pandas as pd
from massive import RESTClient

polygon_api_key = 'YOUR_POLYGON_API_KEY'
client = RESTClient(polygon_api_key)

aggs = []
for a in client.list_aggs(
    "SPY",
    5,
    "minute",
    "2022-05-01",
    "2025-12-31",
    adjusted="true",
    sort="asc",
    limit=50000,
):
    aggs.append(a)

minute_spy_df = pd.DataFrame(aggs)

# Convert to Eastern Time
minute_spy_df['datetime'] = pd.to_datetime(
    minute_spy_df['timestamp'], 
    unit='ms', 
    utc=True
).dt.tz_convert('America/New_York')

# Filter to market hours only (9:30 AM - 4:00 PM ET)
minute_spy_df = minute_spy_df[
    (minute_spy_df['datetime'].dt.time >= pd.to_datetime("09:30").time()) & 
    (minute_spy_df['datetime'].dt.time <= pd.to_datetime("16:00").time())
]

minute_spy_df = minute_spy_df.sort_values('datetime').reset_index(drop=True)
minute_spy_df['date'] = minute_spy_df['datetime'].dt.date`},{label:"2. Calculate Option Strikes to Fetch",description:"For each day, find strikes within ±2% of opening price",code:`import datetime

def dateStrike2opt(edate, callPut, strike, useSPX=False):
    """
    Convert date, call/put, and strike to option ticker format.
    Example: O:SPY250217C00600000 = SPY call expiring 2/17/25 at $600 strike
    """
    dtd = datetime.datetime.strptime(edate, "%Y-%m-%d")
    blah = "O:SPY"
    if useSPX:
        blah = "O:SPXW"
    option = blah + dtd.strftime("%y%m%d") + callPut + str(strike).zfill(5) + "000"
    return option


# Calculate ±2% strikes for each day
minute_spy_df['open_plus_2_pct'] = minute_spy_df.groupby('date')['open'].transform('first') * 1.02
minute_spy_df['open_minus_2_pct'] = minute_spy_df.groupby('date')['open'].transform('first') * 0.98

# Build dictionary of all options we need to fetch
options_needed = {}
for k, v in minute_spy_df.groupby('date'):
    row = v.iloc[0]
    date = row['datetime'].strftime("%Y-%m-%d")
    edate = row['datetime'].strftime("%Y-%m-%d")
    min_strike = int(row['open_minus_2_pct'])
    max_strike = int(row['open_plus_2_pct']) + 1
    
    # For each strike in range, fetch both call and put
    for strike in range(min_strike, max_strike):
        call_option = dateStrike2opt(edate, "C", strike)
        put_option = dateStrike2opt(edate, "P", strike)
        options_needed[call_option] = date
        options_needed[put_option] = date

print(f"Total options to fetch: {len(options_needed):,}")`},{label:"3. Fetch Option Data in Parallel",description:"Download 5-minute bars for all option contracts using multiple threads",code:`from concurrent.futures import ThreadPoolExecutor

def process_option(key, value):
    """
    Fetch 5-minute aggregates for a single option on its trading day.
    """
    aggs = []
    for a in client.list_aggs(
        key,
        5,
        "minute",
        value,
        (pd.to_datetime(value) + pd.Timedelta(days=1)).strftime("%Y-%m-%d"),
        adjusted="true",
        sort="asc",
        limit=50000,
    ):
        if key not in options_needed:
            continue
        aggs.append(a)
    return aggs

# Fetch all options in parallel (much faster than sequential)
options = {}
count = 0
with ThreadPoolExecutor() as executor:
    futures = {executor.submit(process_option, key, value): key for key, value in options_needed.items()}
    for future in futures:
        options[futures[future]] = future.result()
        count += 1
        if count % 10 == 0:
            print(f"Processed {count / len(options_needed) * 100:.2f}% options", end="\\r")

print(f"\\nFetched {len(options):,} option contracts")`},{label:"4. Build Option DataFrame",description:"Convert raw data to structured DataFrame and join with SPY prices",code:`# Collect all data in a list first (faster than concat in loop)
data = []
count = 0
for option, aggs in options.items():
    if not aggs:
        continue
    for agg in aggs:
        data.append({
            'option': option,
            'timestamp': agg.timestamp,
            'open': agg.open,
            'high': agg.high,
            'low': agg.low,
            'close': agg.close,
            'volume': agg.volume
        })
    count += 1
    print(f"Processed option: {option} ({count}/{len(options)})", end="\\r")

# Create DataFrame in one go (much faster)
option_df = pd.DataFrame(data)

# Convert timestamps to Eastern Time
option_df['datetime'] = pd.to_datetime(
    option_df['timestamp'], 
    unit='ms', 
    utc=True
).dt.tz_convert('America/New_York')

# Join with SPY prices to get current underlying price at each timestamp
option_df = option_df.merge(
    minute_spy_df[['datetime', 'close']], 
    left_on='datetime', 
    right_on='datetime', 
    how='left', 
    suffixes=('', '_spy')
)

# Calculate ATM strike (rounded SPY price)
option_df['ATM_strike'] = option_df['close_spy'].fillna(0).astype(int)

# Filter to market hours
option_df = option_df[
    (option_df['datetime'].dt.time >= pd.to_datetime("09:30").time()) & 
    (option_df['datetime'].dt.time <= pd.to_datetime("16:00").time())
]

print(f"\\nTotal option observations: {len(option_df):,}")`},{label:"5. Calculate Moneyness & Basic Features",description:"Extract strike price, distance from ATM, and convert to cents",code:`import numpy as np

# Extract strike price from option ticker
# Format: O:SPY250217C00600000 -> strike = 600
option_df['strike_price'] = option_df['option'].str.extract(r'(\\d{8})')[0].astype(str).str[2:5].astype(int)

# Distance from ATM (negative = ITM, positive = OTM)
option_df['dist_from_ATM'] = (option_df['strike_price'] - option_df['ATM_strike']) / option_df['ATM_strike']

# Convert to cents for easier feature engineering
option_df['close_in_cents'] = option_df['close'] * 100

# Call = 1, Put = -1 (for side-aware features)
option_df['side'] = option_df['option'].apply(lambda x: 1 if 'C' in x else -1)

print(f"Mean distance from ATM: {option_df['dist_from_ATM'].mean():.4f}")
print(f"Std distance from ATM: {option_df['dist_from_ATM'].std():.4f}")`},{label:"6. Rolling Window Features (Leak-Free)",description:"Create rolling statistics over multiple time windows without lookahead bias",code:`import numpy as np
import pandas as pd
from concurrent.futures import ProcessPoolExecutor, as_completed
import multiprocessing

# Multiple time windows to capture short-term and long-term patterns
windows = [5, 10, 15, 30, 60, 120]  # minutes
n_workers = max(1, multiprocessing.cpu_count() - 3)

option_df = option_df.sort_values(['option', 'datetime']).copy()


def process_option(args):
    """
    Process a single option contract to create rolling window features.
    All features are calculated WITHOUT lookahead bias (only using past data).
    """
    option, df = args
    df = df.sort_values('datetime').reset_index(drop=True)

    # Cumulative day range (where are we in today's price range?)
    df['cum_min'] = df['close_in_cents'].cummin()
    df['cum_max'] = df['close_in_cents'].cummax()

    df['pos_in_day_range'] = (
        (df['close_in_cents'] - df['cum_min']) /
        (df['cum_max'] - df['cum_min'])
    ).fillna(0)

    # For each time window
    for window in windows:

        # --- PRICE N MINUTES AGO (LEAK-FREE) ---
        target_times = df['datetime'] - pd.Timedelta(minutes=window)
        idx = df['datetime'].searchsorted(target_times, side='right') - 1
        valid_mask = idx >= 0

        past_prices = np.full(len(df), np.nan)
        past_prices[valid_mask] = df.loc[idx[valid_mask], 'close_in_cents'].values

        df[f'close_{window}m_ago'] = past_prices

        # Price change over window
        df[f'price_change_{window}m'] = (
            df['close_in_cents'] - df[f'close_{window}m_ago']
        )

        # --- ROLLING STATISTICS (MIN, MAX, STD) ---
        rolling_min = []
        rolling_max = []
        rolling_std = []

        for i in range(len(df)):
            start_time = df.loc[i, 'datetime'] - pd.Timedelta(minutes=window)

            window_slice = df.loc[
                (df['datetime'] >= start_time) &
                (df['datetime'] <= df.loc[i, 'datetime']),
                'close_in_cents'
            ]

            rolling_min.append(window_slice.min())
            rolling_max.append(window_slice.max())
            rolling_std.append(window_slice.std())

        df[f'rolling_min_{window}m'] = rolling_min
        df[f'rolling_max_{window}m'] = rolling_max
        df[f'rolling_std_{window}m'] = rolling_std

        # Position within rolling range (mean reversion indicator)
        df[f'pos_in_rolling_range_{window}m'] = (
            (df['close_in_cents'] - df[f'rolling_min_{window}m']) /
            (df[f'rolling_max_{window}m'] - df[f'rolling_min_{window}m'])
        ).fillna(0)

        # Directional volatility (signed standard deviation)
        df[f'directional_rolling_std_{window}m'] = (
            df[f'rolling_std_{window}m'] *
            np.sign(df[f'price_change_{window}m'])
        )

    df.drop(columns=['cum_min', 'cum_max'], inplace=True)

    return df


# Process all options in parallel
groups = list(option_df.groupby('option'))

results = []
total = len(groups)

with ProcessPoolExecutor(max_workers=n_workers) as executor:
    futures = {executor.submit(process_option, g): g[0] for g in groups}

    for i, future in enumerate(as_completed(futures)):
        results.append(future.result())
        print(f"Processed {i+1}/{total}", end="\\r")

option_df = pd.concat(results, ignore_index=True)

print("\\nDone ✅ Multithreaded + Leakage Free")`},{label:"7. Create Target Variable",description:"Label: will this option be worth MORE at 3:30pm than it is now?",code:`import pandas as pd
import numpy as np

target_time = pd.to_datetime("15:30").time()

option_df = option_df.sort_values(['option', 'datetime']).copy()
option_df['date'] = option_df['datetime'].dt.date
option_df['time'] = option_df['datetime'].dt.time


def assign_price_at_target(group):
    """
    For each option/day, find the price at 3:30pm (or closest timestamp).
    """
    # Compute absolute time difference in seconds
    time_diff = (
        pd.to_datetime(group['time'].astype(str)) -
        pd.to_datetime(str(target_time))
    ).abs()

    idx = time_diff.idxmin()
    price = group.loc[idx, 'close_in_cents']

    group['price_at_15_30'] = price
    return group


option_df = (
    option_df
    .groupby(['option', 'date'], group_keys=False)
    .apply(assign_price_at_target)
)

option_df.drop(columns=['time'], inplace=True)

# Create binary target: 1 if price goes UP by 3:30pm, 0 if DOWN
option_df['profit_15_30'] = (option_df['price_at_15_30'] - option_df['close_in_cents'] > 0).astype(int)

# Calculate percentage gain (for analysis)
option_df['pct_gain_15_30'] = (
    (option_df['price_at_15_30'] - option_df['close_in_cents']) / 
    option_df['close_in_cents']
)

# Remove any rows with missing data
option_df = option_df.dropna()

# Only use data BEFORE 3:30pm (can't trade at target time)
option_df = option_df[option_df['datetime'].dt.time <= pd.to_datetime("15:30").time()]

print(f"\\nTarget distribution:")
print(f"Profitable (1): {option_df['profit_15_30'].sum():,} ({option_df['profit_15_30'].mean():.1%})")
print(f"Unprofitable (0): {(1-option_df['profit_15_30']).sum():,} ({(1-option_df['profit_15_30']).mean():.1%})")

print("\\nDone ✅ Target variable created")`},{label:"8. Add Time Features",description:"Seconds since market open and until close (time of day matters)",code:`# Create market open/close timestamps for each day
option_df['open_datetime'] = (
    option_df['datetime'].dt.normalize() + 
    pd.Timedelta(hours=9, minutes=30)
).dt.tz_convert('America/New_York')

option_df['close_datetime'] = (
    option_df['datetime'].dt.normalize() + 
    pd.Timedelta(hours=16)
).dt.tz_convert('America/New_York')

# Calculate time features
option_df['seconds_since_open'] = (
    option_df['datetime'] - option_df['open_datetime']
).dt.total_seconds()

option_df['seconds_until_close'] = (
    option_df['close_datetime'] - option_df['datetime']
).dt.total_seconds()

# Add year for walk-forward validation
option_df['year'] = option_df['datetime'].dt.year

print(f"Time features added. Data spans {option_df['year'].min()} to {option_df['year'].max()}")`},{label:"9. Train XGBoost with Walk-Forward Validation",description:"Train on past years, test on future year (realistic backtesting)",code:`import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, roc_auc_score


# Define feature columns
train_columns = [
    'dist_from_ATM', 'close_in_cents', 'pos_in_day_range', 
    'close_5m_ago', 'price_change_5m', 'rolling_min_5m', 'rolling_max_5m', 'rolling_std_5m',
    'pos_in_rolling_range_5m', 'directional_rolling_std_5m',
    'close_10m_ago', 'price_change_10m', 'rolling_min_10m', 'rolling_max_10m', 'rolling_std_10m',
    'pos_in_rolling_range_10m', 'directional_rolling_std_10m',
    'close_15m_ago', 'price_change_15m', 'rolling_min_15m', 'rolling_max_15m', 'rolling_std_15m',
    'pos_in_rolling_range_15m', 'directional_rolling_std_15m',
    'close_30m_ago', 'price_change_30m', 'rolling_min_30m', 'rolling_max_30m', 'rolling_std_30m',
    'pos_in_rolling_range_30m', 'directional_rolling_std_30m',
    'close_60m_ago', 'price_change_60m', 'rolling_min_60m', 'rolling_max_60m', 'rolling_std_60m',
    'pos_in_rolling_range_60m', 'directional_rolling_std_60m',
    'close_120m_ago', 'price_change_120m', 'rolling_min_120m', 'rolling_max_120m', 'rolling_std_120m',
    'pos_in_rolling_range_120m', 'directional_rolling_std_120m',
    'seconds_since_open', 'seconds_until_close', 'side'
]


def walk_forward_xgb_classification(
    option_df: pd.DataFrame,
    train_cols: list,
    target_col: str = 'profit_15_30',
    year_col: str = "year"
):
    """
    Walk-forward validation: train on past years, test on next year.
    Simulates real trading where you can only use past data.
    """
    df = option_df.copy()
    df = df.sort_values(year_col)

    xgb_params = {
        "n_estimators": 300,
        "max_depth": 4,
        "learning_rate": 0.05,
        'min_child_weight': 15,
        "subsample": 0.8,
        "colsample_bytree": 0.8,
        "random_state": 42,
        "eval_metric": "logloss"
    }

    years = sorted(df[year_col].unique())
    all_results = []

    print("\\nWALK FORWARD TRAINING\\n" + "="*50)

    for i in range(1, len(years)):
        train_years = years[:i]
        test_year = years[i]

        train_df = df[df[year_col].isin(train_years)]
        test_df = df[df[year_col] == test_year]

        if train_df.empty or test_df.empty:
            continue

        X_train = train_df[train_cols]
        y_train = train_df[target_col]

        X_test = test_df[train_cols]
        y_test = test_df[target_col]

        model = XGBClassifier(**xgb_params)
        model.fit(X_train, y_train)

        preds = model.predict(X_test)
        probs = model.predict_proba(X_test)[:, 1]

        acc = accuracy_score(y_test, preds)
        auc = roc_auc_score(y_test, probs)

        print(f"\\nTrain Years: {train_years}")
        print(f"Test Year: {test_year}")
        print(f"Accuracy: {acc:.4f}")
        print(f"AUC: {auc:.4f}")

        fold_results = test_df.copy()
        fold_results["prediction"] = preds
        fold_results["probability"] = probs
        fold_results["train_years"] = str(train_years)

        all_results.append(fold_results)

    results_df = pd.concat(all_results).sort_index()

    print("\\n" + "="*50)
    print("Overall OOS Performance")
    print("="*50)

    overall_acc = accuracy_score(results_df[target_col], results_df["prediction"])
    overall_auc = roc_auc_score(results_df[target_col], results_df["probability"])

    print(f"Overall Accuracy: {overall_acc:.4f}")
    print(f"Overall AUC: {overall_auc:.4f}")
    print("="*50)

    return results_df


# Run walk-forward validation
res_df = walk_forward_xgb_classification(
    option_df=option_df,
    train_cols=train_columns,
    target_col='profit_15_30',
    year_col='year'
)`},{label:"10. Model Calibration Analysis",description:"Verify predictions are accurate (if model says 60% chance, does it happen 60% of time?)",code:`import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def plot_calibration_curve(res_df, n_bins=10):
    """
    Plot calibration curve showing how well predicted probabilities match observed frequencies.
    Perfect calibration = diagonal line.
    """
    predicted = res_df['probability']
    actual = res_df['profit_15_30']

    df = pd.DataFrame({
        "predicted": predicted,
        "actual": actual
    })

    # Create equal-width bins
    df["bin"] = pd.cut(df["predicted"], bins=n_bins)

    # Aggregate statistics
    calibration = df.groupby("bin").agg(
        mean_predicted=("predicted", "mean"),
        mean_actual=("actual", "mean"),
        count=("actual", "size")
    ).dropna()

    calibration["bin_center"] = calibration["mean_predicted"]

    # Create figure with 2 subplots
    fig, (ax1, ax2) = plt.subplots(
        2, 1, figsize=(8, 10),
        gridspec_kw={'height_ratios': [3, 1]}
    )

    # Calibration Curve
    ax1.plot(calibration["mean_predicted"],
             calibration["mean_actual"],
             marker='o',
             linewidth=2,
             label="Model Calibration")

    ax1.plot([0, 1], [0, 1],
             linestyle='--',
             label="Perfect Calibration")

    ax1.set_xlabel("Mean Predicted Probability")
    ax1.set_ylabel("Observed Frequency")
    ax1.set_title("Calibration Curve")
    ax1.legend()
    ax1.grid(alpha=0.3)

    # Frequency Bars
    ax2.bar(calibration["bin_center"],
            calibration["count"],
            width=1/n_bins * 0.9)

    ax2.set_xlabel("Predicted Probability")
    ax2.set_ylabel("Count")
    ax2.set_title("Prediction Frequency by Bin")
    ax2.grid(alpha=0.3)

    plt.tight_layout()
    plt.show()

    return calibration


calibration_df = plot_calibration_curve(res_df, n_bins=10)

print(f"\\n{'='*60}")
print(f"CALIBRATION ANALYSIS")
print(f"{'='*60}")
print(f"Mean predicted probability: {res_df['probability'].mean():.4f}")
print(f"Actual win rate: {res_df['profit_15_30'].mean():.4f}")
print(f"Calibration difference: {abs(res_df['probability'].mean() - res_df['profit_15_30'].mean()):.4f}")`},{label:"11. Outlier Detection Strategy",description:"Find unusually high probabilities compared to historical distribution for that strike",code:`import numpy as np

res_df = res_df.sort_values('datetime').reset_index(drop=True)

# Track historical probabilities for each strike/side combination
option_bin_proba = {}
option_bin_profit = {}
seen_days = {}

for i in range(len(res_df)):

    row = res_df.loc[i]
    
    # Create side-aware moneyness bin
    # Example: call 2% OTM = +2.0, put 2% OTM = -2.0
    side_aware_atm = row['dist_from_ATM'] * row['side']
    bin_key = round(side_aware_atm * 100, 1)
    key = str(bin_key)

    # ========================================
    # CHECK OUTLIER USING ONLY PAST DATA
    # ========================================
    if key in option_bin_proba and len(option_bin_proba[key]) > 20:

        past_mean = option_bin_proba[key].mean()
        past_std  = option_bin_proba[key].std()

        # If current probability is MORE THAN 1 STD above historical mean
        if row['year'] != 2023:
            if row['probability'] > past_mean + past_std:

                print(f"High probability outlier at index {i} | bin {bin_key} | prob {row['probability']:.4f}")

                # Track unique opportunities (only one trade per day per bin)
                if row['date'] not in seen_days:
                    seen_days[row['date']] = {}

                if bin_key not in seen_days[row['date']]:
                    seen_days[row['date']][bin_key] = True

                    if key in option_bin_profit:
                        option_bin_profit[key] = np.append(
                            option_bin_profit[key],
                            row['profit_15_30']
                        )
                    else:
                        option_bin_profit[key] = np.array([row['profit_15_30']])

    # ========================================
    # UPDATE DISTRIBUTION AFTER CHECK
    # ========================================
    if key in option_bin_proba:
        option_bin_proba[key] = np.append(option_bin_proba[key], row['probability'])
    else:
        option_bin_proba[key] = np.array([row['probability']])

    print(i / len(res_df) * 100, end="\\r")

print("\\n\\nOutlier detection complete ✅")

# Calculate win rate for outlier trades
all_outlier_trades = []
for key, profits in option_bin_profit.items():
    all_outlier_trades.extend(profits)

if all_outlier_trades:
    win_rate = np.mean(all_outlier_trades)
    print(f"\\nOutlier Strategy Results:")
    print(f"Total trades: {len(all_outlier_trades)}")
    print(f"Win rate: {win_rate:.2%}")
    print(f"Expected edge: {win_rate - 0.5:.2%} above 50%")`}]},_y={1:uy,2:cy,3:dy,4:fy,5:my},py=()=>{const{projectId:r}=$h(),[d,f]=M.useState(null),[u,_]=M.useState(0),y=M.useRef({}),x=M.useRef(null),S=_y[r||""];M.useEffect(()=>{S&&oy(S.title)},[S]);const g=q=>{let F=y.current[q];if(q==="Visualizations & Results"&&(F=x.current),F){const W=F.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:W,behavior:"smooth"})}};if(!S)return o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),o.jsx(Te,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const m=()=>{d?.imageUrls&&_(q=>(q-1+d.imageUrls.length)%d.imageUrls.length)},R=()=>{d?.imageUrls&&_(q=>(q+1)%d.imageUrls.length)},j=()=>d?d.imageUrls&&d.imageUrls.length>0?d.imageUrls[u].url:d.imageUrl:"",Y=()=>d?.imageUrls?d.imageUrls[u]?.label:null;return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[o.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsx(Te,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),o.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:S.title}),o.jsx("p",{className:"text-xl text-slate-300",children:S.description})]})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[S.codeSamples&&S.codeSamples.length>0&&o.jsx("div",{className:"lg:w-64 flex-shrink-0",children:o.jsxs("div",{className:"lg:sticky lg:top-8",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),o.jsxs("div",{className:"flex flex-col gap-2",children:[S.codeSamples.map((q,F)=>o.jsx("button",{onClick:()=>g(q.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:q.label},F)),S.plots&&S.plots.length>0&&o.jsx("button",{onClick:()=>g("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"mb-20",children:[o.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),S.codeSamples.map((q,F)=>o.jsx("div",{ref:V=>{y.current[q.label]=V},children:o.jsx(Ig,{label:q.label,description:q.description,code:q.code})},F))]}),S.plots&&S.plots.length>0&&o.jsxs("div",{ref:x,children:[o.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:S.plots.map((q,F)=>o.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{f(q),_(0)},children:[o.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:o.jsx("img",{src:q.imageUrl,alt:q.title,className:"w-full h-full object-cover"})}),o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:q.title}),o.jsx("div",{className:"text-slate-300",children:q.description})]})]},F))})]})]})]})}),d&&o.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>f(null),children:o.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:q=>q.stopPropagation(),children:[o.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),o.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[o.jsx("img",{src:j(),alt:d.title,className:"w-full h-full object-contain"}),d.imageUrls&&d.imageUrls.length>1&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:m,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),o.jsx("button",{onClick:R,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),o.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[u+1," / ",d.imageUrls.length]})]})]}),o.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[o.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[d.title,Y()&&o.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",Y()]})]}),o.jsx("div",{className:"text-slate-300",children:d.description})]})]})})]})},hy=()=>{const[r,d]=M.useState({name:"",email:"",subject:"",message:""}),[f,u]=M.useState("idle"),[_,y]=M.useState(""),x=g=>{const{name:m,value:R}=g.target;d(j=>({...j,[m]:R}))},S=async g=>{g.preventDefault(),u("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(u("success"),d({name:"",email:"",subject:"",message:""}),setTimeout(()=>u("idle"),3e3)):(u("error"),y("Failed to send message. Please try again."))}catch{u("error"),y("An error occurred. Please try again later.")}};return o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:o.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-2xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),o.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),o.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:o.jsxs("form",{onSubmit:S,className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),o.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),o.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),o.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:x,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),f==="success"&&o.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),f==="error"&&o.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:_}),o.jsx("button",{type:"submit",disabled:f==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:f==="loading"?"Sending...":"Send Message"})]})}),o.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[o.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),o.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),o.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),o.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[o.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),o.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),o.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),o.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[o.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),o.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),o.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},gy=()=>o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),o.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[o.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),o.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),o.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[o.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),o.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),o.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[o.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),o.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),o.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),o.jsxs("ul",{className:"space-y-2 text-slate-300",children:[o.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),o.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),o.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),o.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),o.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),o.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"5 ATR Volatility Breakout Model"}),o.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[o.jsxs("p",{children:[o.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),o.jsxs("p",{children:[o.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),o.jsxs("p",{children:[o.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),o.jsxs("p",{children:[o.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),o.jsx("div",{className:"pt-4",children:o.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})}),yy=()=>{const r=Ca();return M.useEffect(()=>{ry(r.pathname,document.title)},[r]),o.jsxs(o.Fragment,{children:[o.jsx(Jg,{}),o.jsx("div",{className:"pt-12",children:o.jsxs(_g,{children:[o.jsx(Wa,{path:"",element:o.jsx(Fg,{})}),o.jsx(Wa,{path:"about",element:o.jsx(Wg,{})}),o.jsx(Wa,{path:"projects",element:o.jsx(Pg,{})}),o.jsx(Wa,{path:"projects/project-demo/:projectId",element:o.jsx(py,{})}),o.jsx(Wa,{path:"contact",element:o.jsx(hy,{})}),o.jsx(Wa,{path:"resume",element:o.jsx(gy,{})})]})})]})},by=()=>o.jsx(Lg,{basename:"/portfolio_website/",children:o.jsx(yy,{})});iy();ph.createRoot(document.getElementById("root")).render(o.jsx(M.StrictMode,{children:o.jsx(by,{})}));
