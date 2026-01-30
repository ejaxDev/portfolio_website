(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const _ of p)if(_.type==="childList")for(const x of _.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&c(x)}).observe(document,{childList:!0,subtree:!0});function d(p){const _={};return p.integrity&&(_.integrity=p.integrity),p.referrerPolicy&&(_.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?_.credentials="include":p.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function c(p){if(p.ep)return;p.ep=!0;const _=d(p);fetch(p.href,_)}})();var Au={exports:{}},Dn={};var Zd;function Wh(){if(Zd)return Dn;Zd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,p,_){var x=null;if(_!==void 0&&(x=""+_),p.key!==void 0&&(x=""+p.key),"key"in p){_={};for(var R in p)R!=="key"&&(_[R]=p[R])}else _=p;return p=_.ref,{$$typeof:r,type:c,key:x,ref:p!==void 0?p:null,props:_}}return Dn.Fragment=f,Dn.jsx=d,Dn.jsxs=d,Dn}var Kd;function $h(){return Kd||(Kd=1,Au.exports=Wh()),Au.exports}var u=$h(),wu={exports:{}},$={};var Fd;function Ph(){if(Fd)return $;Fd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.iterator;function X(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,G={};function K(y,M,L){this.props=y,this.context=M,this.refs=G,this.updater=L||B}K.prototype.isReactComponent={},K.prototype.setState=function(y,M){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,M,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function k(){}k.prototype=K.prototype;function J(y,M,L){this.props=y,this.context=M,this.refs=G,this.updater=L||B}var xe=J.prototype=new k;xe.constructor=J,q(xe,K.prototype),xe.isPureReactComponent=!0;var be=Array.isArray;function we(){}var P={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function ke(y,M,L){var V=L.ref;return{$$typeof:r,type:y,key:M,ref:V!==void 0?V:null,props:L}}function pt(y,M){return ke(y.type,M,y.props)}function Ct(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function We(y){var M={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return M[L]})}var Ra=/\/+/g;function Lt(y,M){return typeof y=="object"&&y!==null&&y.key!=null?We(""+y.key):M.toString(36)}function At(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(we,we):(y.status="pending",y.then(function(M){y.status==="pending"&&(y.status="fulfilled",y.value=M)},function(M){y.status==="pending"&&(y.status="rejected",y.reason=M)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function D(y,M,L,V,I){var ae=typeof y;(ae==="undefined"||ae==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case r:case f:fe=!0;break;case C:return fe=y._init,D(fe(y._payload),M,L,V,I)}}if(fe)return I=I(y),fe=V===""?"."+Lt(y,0):V,be(I)?(L="",fe!=null&&(L=fe.replace(Ra,"$&/")+"/"),D(I,M,L,"",function(Ll){return Ll})):I!=null&&(Ct(I)&&(I=pt(I,L+(I.key==null||y&&y.key===I.key?"":(""+I.key).replace(Ra,"$&/")+"/")+fe)),M.push(I)),1;fe=0;var Fe=V===""?".":V+":";if(be(y))for(var De=0;De<y.length;De++)V=y[De],ae=Fe+Lt(V,De),fe+=D(V,M,L,ae,I);else if(De=X(y),typeof De=="function")for(y=De.call(y),De=0;!(V=y.next()).done;)V=V.value,ae=Fe+Lt(V,De++),fe+=D(V,M,L,ae,I);else if(ae==="object"){if(typeof y.then=="function")return D(At(y),M,L,V,I);throw M=String(y),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(y,M,L){if(y==null)return y;var V=[],I=0;return D(y,V,"","",function(ae){return M.call(L,ae,I++)}),V}function W(y){if(y._status===-1){var M=y._result;M=M(),M.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=M)}if(y._status===1)return y._result.default;throw y._result}var pe=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},ye={map:H,forEach:function(y,M,L){H(y,function(){M.apply(this,arguments)},L)},count:function(y){var M=0;return H(y,function(){M++}),M},toArray:function(y){return H(y,function(M){return M})||[]},only:function(y){if(!Ct(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return $.Activity=A,$.Children=ye,$.Component=K,$.Fragment=d,$.Profiler=p,$.PureComponent=J,$.StrictMode=c,$.Suspense=v,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,$.__COMPILER_RUNTIME={__proto__:null,c:function(y){return P.H.useMemoCache(y)}},$.cache=function(y){return function(){return y.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(y,M,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var V=q({},y.props),I=y.key;if(M!=null)for(ae in M.key!==void 0&&(I=""+M.key),M)!Ce.call(M,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&M.ref===void 0||(V[ae]=M[ae]);var ae=arguments.length-2;if(ae===1)V.children=L;else if(1<ae){for(var fe=Array(ae),Fe=0;Fe<ae;Fe++)fe[Fe]=arguments[Fe+2];V.children=fe}return ke(y.type,I,V)},$.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:_,_context:y},y},$.createElement=function(y,M,L){var V,I={},ae=null;if(M!=null)for(V in M.key!==void 0&&(ae=""+M.key),M)Ce.call(M,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=M[V]);var fe=arguments.length-2;if(fe===1)I.children=L;else if(1<fe){for(var Fe=Array(fe),De=0;De<fe;De++)Fe[De]=arguments[De+2];I.children=Fe}if(y&&y.defaultProps)for(V in fe=y.defaultProps,fe)I[V]===void 0&&(I[V]=fe[V]);return ke(y,ae,I)},$.createRef=function(){return{current:null}},$.forwardRef=function(y){return{$$typeof:R,render:y}},$.isValidElement=Ct,$.lazy=function(y){return{$$typeof:C,_payload:{_status:-1,_result:y},_init:W}},$.memo=function(y,M){return{$$typeof:h,type:y,compare:M===void 0?null:M}},$.startTransition=function(y){var M=P.T,L={};P.T=L;try{var V=y(),I=P.S;I!==null&&I(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(we,pe)}catch(ae){pe(ae)}finally{M!==null&&L.types!==null&&(M.types=L.types),P.T=M}},$.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},$.use=function(y){return P.H.use(y)},$.useActionState=function(y,M,L){return P.H.useActionState(y,M,L)},$.useCallback=function(y,M){return P.H.useCallback(y,M)},$.useContext=function(y){return P.H.useContext(y)},$.useDebugValue=function(){},$.useDeferredValue=function(y,M){return P.H.useDeferredValue(y,M)},$.useEffect=function(y,M){return P.H.useEffect(y,M)},$.useEffectEvent=function(y){return P.H.useEffectEvent(y)},$.useId=function(){return P.H.useId()},$.useImperativeHandle=function(y,M,L){return P.H.useImperativeHandle(y,M,L)},$.useInsertionEffect=function(y,M){return P.H.useInsertionEffect(y,M)},$.useLayoutEffect=function(y,M){return P.H.useLayoutEffect(y,M)},$.useMemo=function(y,M){return P.H.useMemo(y,M)},$.useOptimistic=function(y,M){return P.H.useOptimistic(y,M)},$.useReducer=function(y,M,L){return P.H.useReducer(y,M,L)},$.useRef=function(y){return P.H.useRef(y)},$.useState=function(y){return P.H.useState(y)},$.useSyncExternalStore=function(y,M,L){return P.H.useSyncExternalStore(y,M,L)},$.useTransition=function(){return P.H.useTransition()},$.version="19.2.3",$}var Jd;function Lu(){return Jd||(Jd=1,wu.exports=Ph()),wu.exports}var w=Lu(),ju={exports:{}},On={},Ru={exports:{}},Cu={};var Wd;function Ih(){return Wd||(Wd=1,(function(r){function f(D,H){var W=D.length;D.push(H);e:for(;0<W;){var pe=W-1>>>1,ye=D[pe];if(0<p(ye,H))D[pe]=H,D[W]=ye,W=pe;else break e}}function d(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var H=D[0],W=D.pop();if(W!==H){D[0]=W;e:for(var pe=0,ye=D.length,y=ye>>>1;pe<y;){var M=2*(pe+1)-1,L=D[M],V=M+1,I=D[V];if(0>p(L,W))V<ye&&0>p(I,L)?(D[pe]=I,D[V]=W,pe=V):(D[pe]=L,D[M]=W,pe=M);else if(V<ye&&0>p(I,W))D[pe]=I,D[V]=W,pe=V;else break e}}return H}function p(D,H){var W=D.sortIndex-H.sortIndex;return W!==0?W:D.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;r.unstable_now=function(){return _.now()}}else{var x=Date,R=x.now();r.unstable_now=function(){return x.now()-R}}var v=[],h=[],C=1,A=null,U=3,X=!1,B=!1,q=!1,G=!1,K=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function xe(D){for(var H=d(h);H!==null;){if(H.callback===null)c(h);else if(H.startTime<=D)c(h),H.sortIndex=H.expirationTime,f(v,H);else break;H=d(h)}}function be(D){if(q=!1,xe(D),!B)if(d(v)!==null)B=!0,we||(we=!0,We());else{var H=d(h);H!==null&&At(be,H.startTime-D)}}var we=!1,P=-1,Ce=5,ke=-1;function pt(){return G?!0:!(r.unstable_now()-ke<Ce)}function Ct(){if(G=!1,we){var D=r.unstable_now();ke=D;var H=!0;try{e:{B=!1,q&&(q=!1,k(P),P=-1),X=!0;var W=U;try{t:{for(xe(D),A=d(v);A!==null&&!(A.expirationTime>D&&pt());){var pe=A.callback;if(typeof pe=="function"){A.callback=null,U=A.priorityLevel;var ye=pe(A.expirationTime<=D);if(D=r.unstable_now(),typeof ye=="function"){A.callback=ye,xe(D),H=!0;break t}A===d(v)&&c(v),xe(D)}else c(v);A=d(v)}if(A!==null)H=!0;else{var y=d(h);y!==null&&At(be,y.startTime-D),H=!1}}break e}finally{A=null,U=W,X=!1}H=void 0}}finally{H?We():we=!1}}}var We;if(typeof J=="function")We=function(){J(Ct)};else if(typeof MessageChannel<"u"){var Ra=new MessageChannel,Lt=Ra.port2;Ra.port1.onmessage=Ct,We=function(){Lt.postMessage(null)}}else We=function(){K(Ct,0)};function At(D,H){P=K(function(){D(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(D){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var W=U;U=H;try{return D()}finally{U=W}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=U;U=D;try{return H()}finally{U=W}},r.unstable_scheduleCallback=function(D,H,W){var pe=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pe+W:pe):W=pe,D){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=W+ye,D={id:C++,callback:H,priorityLevel:D,startTime:W,expirationTime:ye,sortIndex:-1},W>pe?(D.sortIndex=W,f(h,D),d(v)===null&&D===d(h)&&(q?(k(P),P=-1):q=!0,At(be,W-pe))):(D.sortIndex=ye,f(v,D),B||X||(B=!0,we||(we=!0,We()))),D},r.unstable_shouldYield=pt,r.unstable_wrapCallback=function(D){var H=U;return function(){var W=U;U=H;try{return D.apply(this,arguments)}finally{U=W}}}})(Cu)),Cu}var $d;function e_(){return $d||($d=1,Ru.exports=Ih()),Ru.exports}var Du={exports:{}},Ke={};var Pd;function t_(){if(Pd)return Ke;Pd=1;var r=Lu();function f(v){var h="https://react.dev/errors/"+v;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+v+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function _(v,h,C){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:A==null?null:""+A,children:v,containerInfo:h,implementation:C}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(v,h){if(v==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ke.createPortal=function(v,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(f(299));return _(v,h,null,C)},Ke.flushSync=function(v){var h=x.T,C=c.p;try{if(x.T=null,c.p=2,v)return v()}finally{x.T=h,c.p=C,c.d.f()}},Ke.preconnect=function(v,h){typeof v=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(v,h))},Ke.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Ke.preinit=function(v,h){if(typeof v=="string"&&h&&typeof h.as=="string"){var C=h.as,A=R(C,h.crossOrigin),U=typeof h.integrity=="string"?h.integrity:void 0,X=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?c.d.S(v,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:A,integrity:U,fetchPriority:X}):C==="script"&&c.d.X(v,{crossOrigin:A,integrity:U,fetchPriority:X,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ke.preinitModule=function(v,h){if(typeof v=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=R(h.as,h.crossOrigin);c.d.M(v,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(v)},Ke.preload=function(v,h){if(typeof v=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,A=R(C,h.crossOrigin);c.d.L(v,C,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ke.preloadModule=function(v,h){if(typeof v=="string")if(h){var C=R(h.as,h.crossOrigin);c.d.m(v,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(v)},Ke.requestFormReset=function(v){c.d.r(v)},Ke.unstable_batchedUpdates=function(v,h){return v(h)},Ke.useFormState=function(v,h,C){return x.H.useFormState(v,h,C)},Ke.useFormStatus=function(){return x.H.useHostTransitionStatus()},Ke.version="19.2.3",Ke}var Id;function a_(){if(Id)return Du.exports;Id=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Du.exports=t_(),Du.exports}var em;function l_(){if(em)return On;em=1;var r=e_(),f=Lu(),d=a_();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(_(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),e;if(i===l)return v(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,o=n.child;o;){if(o===a){s=!0,a=n,l=i;break}if(o===l){s=!0,l=n,a=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===a){s=!0,a=i,l=n;break}if(o===l){s=!0,l=i,a=n;break}o=o.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,U=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),J=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var Ra=Symbol.for("react.client.reference");function Lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ra?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case G:return"StrictMode";case be:return"Suspense";case we:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case J:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:Lt(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return Lt(e(t))}catch{}}return null}var At=Array.isArray,D=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pe=[],ye=-1;function y(e){return{current:e}}function M(e){0>ye||(e.current=pe[ye],pe[ye]=null,ye--)}function L(e,t){ye++,pe[ye]=e.current,e.current=t}var V=y(null),I=y(null),ae=y(null),fe=y(null);function Fe(e,t){switch(L(ae,t),L(I,e),L(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hd(t),e=_d(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(V),L(V,e)}function De(){M(V),M(I),M(ae)}function Ll(e){e.memoizedState!==null&&L(fe,e);var t=V.current,a=_d(t,e.type);t!==a&&(L(I,e),L(V,a))}function Bn(e){I.current===e&&(M(V),M(I)),fe.current===e&&(M(fe),wn._currentValue=W)}var us,Vu;function Ca(e){if(us===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||"",Vu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+us+e+Vu}var cs=!1;function os(e,t){if(!e||cs)return"";cs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(N){var T=N}Reflect.construct(e,[],z)}else{try{z.call()}catch(N){T=N}e.call(z.prototype)}}else{try{throw Error()}catch(N){T=N}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(N){if(N&&T&&typeof N.stack=="string")return[N.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var m=s.split(`
`),E=o.split(`
`);for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===m.length||n===E.length)for(l=m.length-1,n=E.length-1;1<=l&&0<=n&&m[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(m[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==E[n]){var j=`
`+m[l].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=l&&0<=n);break}}}finally{cs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ca(a):""}function wm(e,t){switch(e.tag){case 26:case 27:case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return e.child!==t&&t!==null?Ca("Suspense Fallback"):Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 15:return os(e.type,!1);case 11:return os(e.type.render,!1);case 1:return os(e.type,!0);case 31:return Ca("Activity");default:return""}}function Xu(e){try{var t="",a=null;do t+=wm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fs=Object.prototype.hasOwnProperty,ds=r.unstable_scheduleCallback,ms=r.unstable_cancelCallback,jm=r.unstable_shouldYield,Rm=r.unstable_requestPaint,nt=r.unstable_now,Cm=r.unstable_getCurrentPriorityLevel,Qu=r.unstable_ImmediatePriority,Zu=r.unstable_UserBlockingPriority,qn=r.unstable_NormalPriority,Dm=r.unstable_LowPriority,Ku=r.unstable_IdlePriority,Om=r.log,zm=r.unstable_setDisableYieldValue,Bl=null,it=null;function na(e){if(typeof Om=="function"&&zm(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Bl,e)}catch{}}var st=Math.clz32?Math.clz32:Hm,Mm=Math.log,Um=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Mm(e)/Um|0)|0}var Yn=256,kn=262144,Gn=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Da(l):(s&=o,s!==0?n=Da(s):a||(a=o&~e,a!==0&&(n=Da(a))))):(o=l&~i,o!==0?n=Da(o):s!==0?n=Da(s):a||(a=l&~e,a!==0&&(n=Da(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(){var e=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),e}function ps(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bm(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,m=e.expirationTimes,E=e.hiddenUpdates;for(a=s&~a;0<a;){var j=31-st(a),z=1<<j;o[j]=0,m[j]=-1;var T=E[j];if(T!==null)for(E[j]=null,j=0;j<T.length;j++){var N=T[j];N!==null&&(N.lane&=-536870913)}a&=~z}l!==0&&Ju(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Ju(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Wu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-st(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function $u(e,t){var a=t&-t;return a=(a&42)!==0?1:hs(a),(a&(e.suspendedLanes|t))!==0?0:a}function hs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function Iu(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ia=Math.random().toString(36).slice(2),Ge="__reactFiber$"+ia,$e="__reactProps$"+ia,$a="__reactContainer$"+ia,gs="__reactEvents$"+ia,qm="__reactListeners$"+ia,Ym="__reactHandles$"+ia,ec="__reactResources$"+ia,kl="__reactMarker$"+ia;function ys(e){delete e[Ge],delete e[$e],delete e[gs],delete e[qm],delete e[Ym]}function Pa(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[$a]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ed(e);e!==null;){if(a=e[Ge])return a;e=Ed(e)}return t}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[Ge]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function el(e){var t=e[ec];return t||(t=e[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[kl]=!0}var tc=new Set,ac={};function Oa(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(ac[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lc={},nc={};function Gm(e){return fs.call(nc,e)?!0:fs.call(lc,e)?!1:km.test(e)?nc[e]=!0:(lc[e]=!0,!1)}function Xn(e,t,a){if(Gm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Bt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){if(!e._valueTracker){var t=ic(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=ic(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xm=/[\n"\\]/g;function _t(e){return e.replace(Xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bs(e,t,a,l,n,i,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?xs(e,s,ht(t)):a!=null?xs(e,s,ht(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ht(o):e.removeAttribute("name")}function rc(e,t,a,l,n,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){vs(e);return}a=a!=null?""+ht(a):"",t=t!=null?""+ht(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),vs(e)}function xs(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ht(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function uc(e,t,a){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ht(a):""}function cc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(At(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ht(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),vs(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&oc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&oc(e,i,t[i])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Es=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function dc(e){var t=Ia(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(bs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(c(90));bs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&sc(l)}break e;case"textarea":uc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Ns=!1;function mc(e,t,a){if(Ns)return e(t,a);Ns=!0;try{var l=e(t);return l}finally{if(Ns=!1,(nl!==null||il!==null)&&(Mi(),nl&&(t=nl,e=il,il=nl=null,dc(t),e)))for(t=0;t<e.length;t++)dc(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=!1;if(Yt)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){As=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{As=!1}var sa=null,ws=null,Fn=null;function pc(){if(Fn)return Fn;var e,t=ws,a=t.length,l,n="value"in sa?sa.value:sa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return Fn=n.slice(e,1<l?1-l:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function hc(){return!1}function Pe(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wn:hc,this.isPropagationStopped=hc,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=Pe(za),Ql=A({},za,{view:0,detail:0}),Fm=Pe(Ql),js,Rs,Zl,Pn=A({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(js=e.screenX-Zl.screenX,Rs=e.screenY-Zl.screenY):Rs=js=0,Zl=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Rs}}),_c=Pe(Pn),Jm=A({},Pn,{dataTransfer:0}),Wm=Pe(Jm),$m=A({},Ql,{relatedTarget:0}),Cs=Pe($m),Pm=A({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=Pe(Pm),ep=A({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=Pe(ep),ap=A({},za,{data:0}),gc=Pe(ap),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function Ds(){return sp}var rp=A({},Ql,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),up=Pe(rp),cp=A({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Pe(cp),op=A({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),fp=Pe(op),dp=A({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=Pe(dp),pp=A({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hp=Pe(pp),_p=A({},za,{newState:0,oldState:0}),gp=Pe(_p),yp=[9,13,27,32],Os=Yt&&"CompositionEvent"in window,Kl=null;Yt&&"documentMode"in document&&(Kl=document.documentMode);var vp=Yt&&"TextEvent"in window&&!Kl,vc=Yt&&(!Os||Kl&&8<Kl&&11>=Kl),bc=" ",xc=!1;function Sc(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function bp(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(xc=!0,bc);case"textInput":return e=t.data,e===bc&&xc?null:e;default:return null}}function xp(e,t){if(sl)return e==="compositionend"||!Os&&Sc(e,t)?(e=pc(),Fn=ws=sa=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vc&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function Nc(e,t,a,l){nl?il?il.push(l):il=[l]:nl=l,t=ki(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Fl=null,Jl=null;function Ep(e){cd(e,0)}function In(e){var t=Gl(e);if(sc(t))return e}function Ac(e,t){if(e==="change")return t}var wc=!1;if(Yt){var zs;if(Yt){var Ms="oninput"in document;if(!Ms){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),Ms=typeof jc.oninput=="function"}zs=Ms}else zs=!1;wc=zs&&(!document.documentMode||9<document.documentMode)}function Rc(){Fl&&(Fl.detachEvent("onpropertychange",Cc),Jl=Fl=null)}function Cc(e){if(e.propertyName==="value"&&In(Jl)){var t=[];Nc(t,Jl,e,Ts(e)),mc(Ep,t)}}function Tp(e,t,a){e==="focusin"?(Rc(),Fl=t,Jl=a,Fl.attachEvent("onpropertychange",Cc)):e==="focusout"&&Rc()}function Np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return In(Jl)}function Ap(e,t){if(e==="click")return In(t)}function wp(e,t){if(e==="input"||e==="change")return In(t)}function jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:jp;function Wl(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!fs.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=Dc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dc(a)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rp=Yt&&"documentMode"in document&&11>=document.documentMode,rl=null,Hs=null,$l=null,Ls=!1;function Uc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ls||rl==null||rl!==Zn(l)||(l=rl,"selectionStart"in l&&Us(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Wl($l,l)||($l=l,l=ki(Hs,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Bs={},Hc={};Yt&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function Ua(e){if(Bs[e])return Bs[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Hc)return Bs[e]=t[a];return e}var Lc=Ua("animationend"),Bc=Ua("animationiteration"),qc=Ua("animationstart"),Cp=Ua("transitionrun"),Dp=Ua("transitionstart"),Op=Ua("transitioncancel"),Yc=Ua("transitionend"),kc=new Map,qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qs.push("scrollEnd");function wt(e,t){kc.set(e,t),Oa(t,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gt=[],cl=0,Ys=0;function ti(){for(var e=cl,t=Ys=cl=0;t<e;){var a=gt[t];gt[t++]=null;var l=gt[t];gt[t++]=null;var n=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Gc(a,n,i)}}function ai(e,t,a,l){gt[cl++]=e,gt[cl++]=t,gt[cl++]=a,gt[cl++]=l,Ys|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ks(e,t,a,l){return ai(e,t,a,l),li(e)}function Ha(e,t){return ai(e,null,null,t),li(e)}function Gc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-st(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function li(e){if(50<bn)throw bn=0,Wr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function zp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new zp(e,t,a,l)}function Gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")Gs(e)&&(s=1);else if(typeof e=="string")s=Bh(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=ut(31,a,t,n),e.elementType=ke,e.lanes=i,e;case q:return La(a.children,n,i,t);case G:s=8,n|=24;break;case K:return e=ut(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case be:return e=ut(13,a,t,n),e.elementType=be,e.lanes=i,e;case we:return e=ut(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:s=10;break e;case k:s=9;break e;case xe:s=11;break e;case P:s=14;break e;case Ce:s=16,l=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ut(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function La(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function Vs(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function Xc(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function Xs(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qc=new WeakMap;function yt(e,t){if(typeof e=="object"&&e!==null){var a=Qc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Xu(t)},Qc.set(e,t),t)}return{value:e,source:t,stack:Xu(t)}}var fl=[],dl=0,ii=null,Pl=0,vt=[],bt=0,ra=null,Dt=1,Ot="";function Gt(e,t){fl[dl++]=Pl,fl[dl++]=ii,ii=e,Pl=t}function Zc(e,t,a){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=ra,ra=e;var l=Dt;e=Ot;var n=32-st(l)-1;l&=~(1<<n),a+=1;var i=32-st(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Dt=1<<32-st(t)+n|a<<n|l,Ot=i+e}else Dt=1<<i|a<<n|l,Ot=e}function Qs(e){e.return!==null&&(Gt(e,1),Zc(e,1,0))}function Zs(e){for(;e===ii;)ii=fl[--dl],fl[dl]=null,Pl=fl[--dl],fl[dl]=null;for(;e===ra;)ra=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null}function Kc(e,t){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=ra,Dt=t.id,Ot=t.overflow,ra=e}var Ve=null,Se=null,re=!1,ua=null,xt=!1,Ks=Error(c(519));function ca(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(yt(t,e)),Ks}function Fc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ge]=e,t[$e]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),rc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),cc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||md(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ca(e,!0)}function Jc(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:xt=!1;return;case 27:case 3:xt=!0;return;default:Ve=Ve.return}}function ml(e){if(e!==Ve)return!1;if(!re)return Jc(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fu(e.type,e.memoizedProps)),a=!a),a&&Se&&ca(e),Jc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Se=Sd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Se=Sd(e)}else t===27?(t=Se,Ea(e.type)?(e=_u,_u=null,Se=e):Se=t):Se=Ve?Et(e.stateNode.nextSibling):null;return!0}function Ba(){Se=Ve=null,re=!1}function Fs(){var e=ua;return e!==null&&(at===null?at=e:at.push.apply(at,e),ua=null),e}function Il(e){ua===null?ua=[e]:ua.push(e)}var Js=y(null),qa=null,Vt=null;function oa(e,t,a){L(Js,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Js.current,M(Js)}function Ws(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function $s(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var m=0;m<t.length;m++)if(o.context===t[m]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Ws(i.return,a,e),l||(s=null);break e}i=o.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(c(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ws(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var o=n.type;rt(n.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(n===fe.current){if(s=n.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&$s(t,e,a,l),t.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){qa=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Wc(qa,e)}function ri(e,t){return qa===null&&Ya(e),Wc(e,t)}function Wc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(c(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var Mp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Up=r.unstable_scheduleCallback,Hp=r.unstable_NormalPriority,Me={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ps(){return{controller:new Mp,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&Up(Hp,function(){e.controller.abort()})}var tn=null,Is=0,hl=0,_l=null;function Lp(e,t){if(tn===null){var a=tn=[];Is=0,hl=au(),_l={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Is++,t.then($c,$c),t}function $c(){if(--Is===0&&tn!==null){_l!==null&&(_l.status="fulfilled");var e=tn;tn=null,hl=0,_l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Pc=D.S;D.S=function(e,t){Lf=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lp(e,t),Pc!==null&&Pc(e,t)};var ka=y(null);function er(){var e=ka.current;return e!==null?e:ve.pooledCache}function ui(e,t){t===null?L(ka,ka.current):L(ka,t.pool)}function Ic(){var e=er();return e===null?null:{parent:Me._currentValue,pool:e}}var gl=Error(c(460)),tr=Error(c(474)),ci=Error(c(542)),oi={then:function(){}};function eo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function to(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lo(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lo(e),e}throw Va=t,gl}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,gl):a}}var Va=null;function ao(){if(Va===null)throw Error(c(459));var e=Va;return Va=null,e}function lo(e){if(e===gl||e===ci)throw Error(c(483))}var yl=null,an=0;function fi(e){var t=an;return an+=1,yl===null&&(yl=[]),to(yl,e,t)}function ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function di(e,t){throw t.$$typeof===U?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function no(e){function t(b,g){if(e){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=kt(b,g),b.index=0,b.sibling=null,b}function i(b,g,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=67108866,g):S):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function s(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function o(b,g,S,O){return g===null||g.tag!==6?(g=Vs(S,b.mode,O),g.return=b,g):(g=n(g,S),g.return=b,g)}function m(b,g,S,O){var Z=S.type;return Z===q?j(b,g,S.props.children,O,S.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&Ga(Z)===g.type)?(g=n(g,S.props),ln(g,S),g.return=b,g):(g=ni(S.type,S.key,S.props,null,b.mode,O),ln(g,S),g.return=b,g)}function E(b,g,S,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Xs(S,b.mode,O),g.return=b,g):(g=n(g,S.children||[]),g.return=b,g)}function j(b,g,S,O,Z){return g===null||g.tag!==7?(g=La(S,b.mode,O,Z),g.return=b,g):(g=n(g,S),g.return=b,g)}function z(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Vs(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case X:return S=ni(g.type,g.key,g.props,null,b.mode,S),ln(S,g),S.return=b,S;case B:return g=Xs(g,b.mode,S),g.return=b,g;case Ce:return g=Ga(g),z(b,g,S)}if(At(g)||We(g))return g=La(g,b.mode,S,null),g.return=b,g;if(typeof g.then=="function")return z(b,fi(g),S);if(g.$$typeof===J)return z(b,ri(b,g),S);di(b,g)}return null}function T(b,g,S,O){var Z=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:o(b,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case X:return S.key===Z?m(b,g,S,O):null;case B:return S.key===Z?E(b,g,S,O):null;case Ce:return S=Ga(S),T(b,g,S,O)}if(At(S)||We(S))return Z!==null?null:j(b,g,S,O,null);if(typeof S.then=="function")return T(b,g,fi(S),O);if(S.$$typeof===J)return T(b,g,ri(b,S),O);di(b,S)}return null}function N(b,g,S,O,Z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return b=b.get(S)||null,o(g,b,""+O,Z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case X:return b=b.get(O.key===null?S:O.key)||null,m(g,b,O,Z);case B:return b=b.get(O.key===null?S:O.key)||null,E(g,b,O,Z);case Ce:return O=Ga(O),N(b,g,S,O,Z)}if(At(O)||We(O))return b=b.get(S)||null,j(g,b,O,Z,null);if(typeof O.then=="function")return N(b,g,S,fi(O),Z);if(O.$$typeof===J)return N(b,g,S,ri(g,O),Z);di(g,O)}return null}function Y(b,g,S,O){for(var Z=null,ue=null,Q=g,te=g=0,se=null;Q!==null&&te<S.length;te++){Q.index>te?(se=Q,Q=null):se=Q.sibling;var ce=T(b,Q,S[te],O);if(ce===null){Q===null&&(Q=se);break}e&&Q&&ce.alternate===null&&t(b,Q),g=i(ce,g,te),ue===null?Z=ce:ue.sibling=ce,ue=ce,Q=se}if(te===S.length)return a(b,Q),re&&Gt(b,te),Z;if(Q===null){for(;te<S.length;te++)Q=z(b,S[te],O),Q!==null&&(g=i(Q,g,te),ue===null?Z=Q:ue.sibling=Q,ue=Q);return re&&Gt(b,te),Z}for(Q=l(Q);te<S.length;te++)se=N(Q,b,te,S[te],O),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?te:se.key),g=i(se,g,te),ue===null?Z=se:ue.sibling=se,ue=se);return e&&Q.forEach(function(ja){return t(b,ja)}),re&&Gt(b,te),Z}function F(b,g,S,O){if(S==null)throw Error(c(151));for(var Z=null,ue=null,Q=g,te=g=0,se=null,ce=S.next();Q!==null&&!ce.done;te++,ce=S.next()){Q.index>te?(se=Q,Q=null):se=Q.sibling;var ja=T(b,Q,ce.value,O);if(ja===null){Q===null&&(Q=se);break}e&&Q&&ja.alternate===null&&t(b,Q),g=i(ja,g,te),ue===null?Z=ja:ue.sibling=ja,ue=ja,Q=se}if(ce.done)return a(b,Q),re&&Gt(b,te),Z;if(Q===null){for(;!ce.done;te++,ce=S.next())ce=z(b,ce.value,O),ce!==null&&(g=i(ce,g,te),ue===null?Z=ce:ue.sibling=ce,ue=ce);return re&&Gt(b,te),Z}for(Q=l(Q);!ce.done;te++,ce=S.next())ce=N(Q,b,te,ce.value,O),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?te:ce.key),g=i(ce,g,te),ue===null?Z=ce:ue.sibling=ce,ue=ce);return e&&Q.forEach(function(Jh){return t(b,Jh)}),re&&Gt(b,te),Z}function ge(b,g,S,O){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case X:e:{for(var Z=S.key;g!==null;){if(g.key===Z){if(Z=S.type,Z===q){if(g.tag===7){a(b,g.sibling),O=n(g,S.props.children),O.return=b,b=O;break e}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&Ga(Z)===g.type){a(b,g.sibling),O=n(g,S.props),ln(O,S),O.return=b,b=O;break e}a(b,g);break}else t(b,g);g=g.sibling}S.type===q?(O=La(S.props.children,b.mode,O,S.key),O.return=b,b=O):(O=ni(S.type,S.key,S.props,null,b.mode,O),ln(O,S),O.return=b,b=O)}return s(b);case B:e:{for(Z=S.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(b,g.sibling),O=n(g,S.children||[]),O.return=b,b=O;break e}else{a(b,g);break}else t(b,g);g=g.sibling}O=Xs(S,b.mode,O),O.return=b,b=O}return s(b);case Ce:return S=Ga(S),ge(b,g,S,O)}if(At(S))return Y(b,g,S,O);if(We(S)){if(Z=We(S),typeof Z!="function")throw Error(c(150));return S=Z.call(S),F(b,g,S,O)}if(typeof S.then=="function")return ge(b,g,fi(S),O);if(S.$$typeof===J)return ge(b,g,ri(b,S),O);di(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(b,g.sibling),O=n(g,S),O.return=b,b=O):(a(b,g),O=Vs(S,b.mode,O),O.return=b,b=O),s(b)):a(b,g)}return function(b,g,S,O){try{an=0;var Z=ge(b,g,S,O);return yl=null,Z}catch(Q){if(Q===gl||Q===ci)throw Q;var ue=ut(29,Q,null,b.mode);return ue.lanes=O,ue.return=b,ue}}}var Xa=no(!0),io=no(!1),fa=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=li(e),Gc(e,null,a),t}return ai(e,l,t,a),li(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Wu(e,a)}}function nr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ir=!1;function sn(){if(ir){var e=_l;if(e!==null)throw e}}function rn(e,t,a,l){ir=!1;var n=e.updateQueue;fa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var m=o,E=m.next;m.next=null,s===null?i=E:s.next=E,s=m;var j=e.alternate;j!==null&&(j=j.updateQueue,o=j.lastBaseUpdate,o!==s&&(o===null?j.firstBaseUpdate=E:o.next=E,j.lastBaseUpdate=m))}if(i!==null){var z=n.baseState;s=0,j=E=m=null,o=i;do{var T=o.lane&-536870913,N=T!==o.lane;if(N?(ie&T)===T:(l&T)===T){T!==0&&T===hl&&(ir=!0),j!==null&&(j=j.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Y=e,F=o;T=t;var ge=a;switch(F.tag){case 1:if(Y=F.payload,typeof Y=="function"){z=Y.call(ge,z,T);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=F.payload,T=typeof Y=="function"?Y.call(ge,z,T):Y,T==null)break e;z=A({},z,T);break e;case 2:fa=!0}}T=o.callback,T!==null&&(e.flags|=64,N&&(e.flags|=8192),N=n.callbacks,N===null?n.callbacks=[T]:N.push(T))}else N={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},j===null?(E=j=N,m=z):j=j.next=N,s|=T;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;N=o,o=N.next,N.next=null,n.lastBaseUpdate=N,n.shared.pending=null}}while(!0);j===null&&(m=z),n.baseState=m,n.firstBaseUpdate=E,n.lastBaseUpdate=j,i===null&&(n.shared.lanes=0),ya|=s,e.lanes=s,e.memoizedState=z}}function so(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ro(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)so(a[e],t)}var vl=y(null),mi=y(0);function uo(e,t){e=It,L(mi,e),L(vl,t),It=e|t.baseLanes}function sr(){L(mi,It),L(vl,vl.current)}function rr(){It=mi.current,M(vl),M(mi)}var ct=y(null),St=null;function pa(e){var t=e.alternate;L(Oe,Oe.current&1),L(ct,e),St===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(St=e)}function ur(e){L(Oe,Oe.current),L(ct,e),St===null&&(St=e)}function co(e){e.tag===22?(L(Oe,Oe.current),L(ct,e),St===null&&(St=e)):ha()}function ha(){L(Oe,Oe.current),L(ct,ct.current)}function ot(e){M(ct),St===e&&(St=null),M(Oe)}var Oe=y(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pu(a)||hu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,ee=null,he=null,Ue=null,hi=!1,bl=!1,Qa=!1,_i=0,un=0,xl=null,qp=0;function je(){throw Error(c(321))}function cr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function or(e,t,a,l,n,i){return Qt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ko:Nr,Qa=!1,i=a(l,n),Qa=!1,bl&&(i=fo(t,a,l,n)),oo(e),i}function oo(e){D.H=fn;var t=he!==null&&he.next!==null;if(Qt=0,Ue=he=ee=null,hi=!1,un=0,xl=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&si(e)&&(He=!0))}function fo(e,t,a,l){ee=e;var n=0;do{if(bl&&(xl=null),un=0,bl=!1,25<=n)throw Error(c(301));if(n+=1,Ue=he=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Fo,i=t(a,l)}while(bl);return i}function Yp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?cn(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(ee.flags|=1024),t}function fr(){var e=_i!==0;return _i=0,e}function dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function mr(e){if(hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hi=!1}Qt=0,Ue=he=ee=null,bl=!1,un=_i=0,xl=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function ze(){if(he===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Ue===null?ee.memoizedState:Ue.next;if(t!==null)Ue=t,he=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var t=un;return un+=1,xl===null&&(xl=[]),e=to(xl,e,t),t=ee,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ko:Nr),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===J)return Xe(e)}throw Error(c(438,String(e)))}function pr(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gi(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=pt;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function vi(e){var t=ze();return hr(t,he,e)}function hr(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=s=null,m=null,E=t,j=!1;do{var z=E.lane&-536870913;if(z!==E.lane?(ie&z)===z:(Qt&z)===z){var T=E.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),z===hl&&(j=!0);else if((Qt&T)===T){E=E.next,T===hl&&(j=!0);continue}else z={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(o=m=z,s=i):m=m.next=z,ee.lanes|=T,ya|=T;z=E.action,Qa&&a(i,z),i=E.hasEagerState?E.eagerState:a(i,z)}else T={lane:z,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},m===null?(o=m=T,s=i):m=m.next=T,ee.lanes|=z,ya|=z;E=E.next}while(E!==null&&E!==t);if(m===null?s=i:m.next=o,!rt(i,e.memoizedState)&&(He=!0,j&&(a=_l,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=m,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function _r(e){var t=ze(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);rt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function mo(e,t,a){var l=ee,n=ze(),i=re;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!rt((he||n).memoizedState,a);if(s&&(n.memoizedState=a,He=!0),n=n.queue,vr(_o.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Sl(9,{destroy:void 0},ho.bind(null,l,n,a,t),null),ve===null)throw Error(c(349));i||(Qt&127)!==0||po(l,t,a)}return a}function po(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=gi(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ho(e,t,a,l){t.value=a,t.getSnapshot=l,go(t)&&yo(e)}function _o(e,t,a){return a(function(){go(t)&&yo(e)})}function go(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function yo(e){var t=Ha(e,2);t!==null&&lt(t,e,2)}function gr(e){var t=Je();if(typeof e=="function"){var a=e;if(e=a(),Qa){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function vo(e,t,a,l){return e.baseState=a,hr(e,he,typeof l=="function"?l:Zt)}function kp(e,t,a,l,n){if(Si(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,bo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function bo(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,s={};D.T=s;try{var o=a(n,l),m=D.S;m!==null&&m(s,o),xo(e,t,o)}catch(E){yr(e,t,E)}finally{i!==null&&s.types!==null&&(i.types=s.types),D.T=i}}else try{i=a(n,l),xo(e,t,i)}catch(E){yr(e,t,E)}}function xo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){So(e,t,l)},function(l){return yr(e,t,l)}):So(e,t,a)}function So(e,t,a){t.status="fulfilled",t.value=a,Eo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,bo(e,a)))}function yr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Eo(t),t=t.next;while(t!==l)}e.action=null}function Eo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function To(e,t){return t}function No(e,t){if(re){var a=ve.formState;if(a!==null){e:{var l=ee;if(re){if(Se){t:{for(var n=Se,i=xt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=Et(n.nextSibling),l=n.data==="F!";break e}}ca(l)}l=!1}l&&(t=a[0])}}return a=Je(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},a.queue=l,a=Xo.bind(null,ee,l),l.dispatch=a,l=gr(!1),i=Tr.bind(null,ee,!1,l.queue),l=Je(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=kp.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ao(e){var t=ze();return wo(t,he,e)}function wo(e,t,a){if(t=hr(e,t,To)[0],e=vi(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=cn(t)}catch(s){throw s===gl?ci:s}else l=t;t=ze();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,Sl(9,{destroy:void 0},Gp.bind(null,n,a),null)),[l,i,e]}function Gp(e,t){e.action=t}function jo(e){var t=ze(),a=he;if(a!==null)return wo(t,a,e);ze(),t=t.memoizedState,a=ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Sl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=gi(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ro(){return ze().memoizedState}function bi(e,t,a,l){var n=Je();ee.flags|=e,n.memoizedState=Sl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xi(e,t,a,l){var n=ze();l=l===void 0?null:l;var i=n.memoizedState.inst;he!==null&&l!==null&&cr(l,he.memoizedState.deps)?n.memoizedState=Sl(t,i,a,l):(ee.flags|=e,n.memoizedState=Sl(1|t,i,a,l))}function Co(e,t){bi(8390656,8,e,t)}function vr(e,t){xi(2048,8,e,t)}function Vp(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=gi(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Do(e){var t=ze().memoizedState;return Vp({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Oo(e,t){return xi(4,2,e,t)}function zo(e,t){return xi(4,4,e,t)}function Mo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uo(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,Mo.bind(null,t,e),a)}function br(){}function Ho(e,t){var a=ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&cr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Lo(e,t){var a=ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&cr(t,l[1]))return l[0];if(l=e(),Qa){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l}function xr(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qf(),ee.lanes|=e,ya|=e,a)}function Bo(e,t,a,l){return rt(a,t)?a:vl.current!==null?(e=xr(e,a,l),rt(e,t)||(He=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(ie&261930)===0?(He=!0,e.memoizedState=a):(e=qf(),ee.lanes|=e,ya|=e,t)}function qo(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var s=D.T,o={};D.T=o,Tr(e,!1,t,a);try{var m=n(),E=D.S;if(E!==null&&E(o,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var j=Bp(m,l);on(e,t,j,mt(e))}else on(e,t,l,mt(e))}catch(z){on(e,t,{then:function(){},status:"rejected",reason:z},mt())}finally{H.p=i,s!==null&&o.types!==null&&(s.types=o.types),D.T=s}}function Xp(){}function Sr(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Yo(e).queue;qo(e,n,t,W,a===null?Xp:function(){return ko(e),a(l)})}function Yo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ko(e){var t=Yo(e);t.next===null&&(t=e.alternate.memoizedState),on(e,t.next.queue,{},mt())}function Er(){return Xe(wn)}function Go(){return ze().memoizedState}function Vo(){return ze().memoizedState}function Qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=da(a);var l=ma(t,e,a);l!==null&&(lt(l,t,a),nn(l,t,a)),t={cache:Ps()},e.payload=t;return}t=t.return}}function Zp(e,t,a){var l=mt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Si(e)?Qo(t,a):(a=ks(e,t,a,l),a!==null&&(lt(a,e,l),Zo(a,t,l)))}function Xo(e,t,a){var l=mt();on(e,t,a,l)}function on(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Si(e))Qo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,a);if(n.hasEagerState=!0,n.eagerState=o,rt(o,s))return ai(e,t,n,0),ve===null&&ti(),!1}catch{}if(a=ks(e,t,n,l),a!==null)return lt(a,e,l),Zo(a,t,l),!0}return!1}function Tr(e,t,a,l){if(l={lane:2,revertLane:au(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Si(e)){if(t)throw Error(c(479))}else t=ks(e,a,l,2),t!==null&&lt(t,e,2)}function Si(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Qo(e,t){bl=hi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Zo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Wu(e,a)}}var fn={readContext:Xe,use:yi,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};fn.useEffectEvent=je;var Ko={readContext:Xe,use:yi,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Co,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Mo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){bi(4,2,e,t)},useMemo:function(e,t){var a=Je();t=t===void 0?null:t;var l=e();if(Qa){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Je();if(a!==void 0){var n=a(t);if(Qa){na(!0);try{a(t)}finally{na(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Zp.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=gr(e);var t=e.queue,a=Xo.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:br,useDeferredValue:function(e,t){var a=Je();return xr(a,e,t)},useTransition:function(){var e=gr(!1);return e=qo.bind(null,ee,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=Je();if(re){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ve===null)throw Error(c(349));(ie&127)!==0||po(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Co(_o.bind(null,l,i,e),[e]),l.flags|=2048,Sl(9,{destroy:void 0},ho.bind(null,l,i,a,t),null),a},useId:function(){var e=Je(),t=ve.identifierPrefix;if(re){var a=Ot,l=Dt;a=(l&~(1<<32-st(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=_i++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Er,useFormState:No,useActionState:No,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Tr.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:pr,useCacheRefresh:function(){return Je().memoizedState=Qp.bind(null,ee)},useEffectEvent:function(e){var t=Je(),a={impl:e};return t.memoizedState=a,function(){if((oe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Nr={readContext:Xe,use:yi,useCallback:Ho,useContext:Xe,useEffect:vr,useImperativeHandle:Uo,useInsertionEffect:Oo,useLayoutEffect:zo,useMemo:Lo,useReducer:vi,useRef:Ro,useState:function(){return vi(Zt)},useDebugValue:br,useDeferredValue:function(e,t){var a=ze();return Bo(a,he.memoizedState,e,t)},useTransition:function(){var e=vi(Zt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:mo,useId:Go,useHostTransitionStatus:Er,useFormState:Ao,useActionState:Ao,useOptimistic:function(e,t){var a=ze();return vo(a,he,e,t)},useMemoCache:pr,useCacheRefresh:Vo};Nr.useEffectEvent=Do;var Fo={readContext:Xe,use:yi,useCallback:Ho,useContext:Xe,useEffect:vr,useImperativeHandle:Uo,useInsertionEffect:Oo,useLayoutEffect:zo,useMemo:Lo,useReducer:_r,useRef:Ro,useState:function(){return _r(Zt)},useDebugValue:br,useDeferredValue:function(e,t){var a=ze();return he===null?xr(a,e,t):Bo(a,he.memoizedState,e,t)},useTransition:function(){var e=_r(Zt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:cn(e),t]},useSyncExternalStore:mo,useId:Go,useHostTransitionStatus:Er,useFormState:jo,useActionState:jo,useOptimistic:function(e,t){var a=ze();return he!==null?vo(a,he,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:pr,useCacheRefresh:Vo};Fo.useEffectEvent=Do;function Ar(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=mt(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=ma(e,n,l),t!==null&&(lt(t,e,l),nn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=mt(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ma(e,n,l),t!==null&&(lt(t,e,l),nn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=ma(e,l,a),t!==null&&(lt(t,e,a),nn(t,e,a))}};function Jo(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(n,i):!0}function Wo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&wr.enqueueReplaceState(t,t.state,null)}function Za(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function $o(e){ei(e)}function Po(e){console.error(e)}function Io(e){ei(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ef(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jr(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function tf(e){return e=da(e),e.tag=3,e}function af(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){ef(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ef(t,a,l),typeof n!="function"&&(va===null?va=new Set([this]):va.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Kp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return St===null?Ui():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===oi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ir(e,l,n)),!1;case 22:return a.flags|=65536,l===oi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ir(e,l,n)),!1}throw Error(c(435,a.tag))}return Ir(e,l,n),Ui(),!1}if(re)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ks&&(e=Error(c(422),{cause:l}),Il(yt(e,a)))):(l!==Ks&&(t=Error(c(423),{cause:l}),Il(yt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=yt(l,a),n=jr(e.stateNode,l,n),nr(e,n),Re!==4&&(Re=2)),!1;var i=Error(c(520),{cause:l});if(i=yt(i,a),vn===null?vn=[i]:vn.push(i),Re!==4&&(Re=2),t===null)return!0;l=yt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=jr(a.stateNode,l,e),nr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(va===null||!va.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=tf(n),af(n,e,a,l),nr(a,n),!1}a=a.return}while(a!==null);return!1}var Rr=Error(c(461)),He=!1;function Qe(e,t,a,l){t.child=e===null?io(t,null,a,l):Xa(t,e.child,a,l)}function lf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var o in l)o!=="ref"&&(s[o]=l[o])}else s=l;return Ya(t),l=or(e,t,a,s,i,n),o=fr(),e!==null&&!He?(dr(e,t,n),Kt(e,t,n)):(re&&o&&Qs(t),t.flags|=1,Qe(e,t,l,n),t.child)}function nf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Gs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,sf(e,t,i,l,n)):(e=ni(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Lr(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(s,l)&&e.ref===t.ref)return Kt(e,t,n)}return t.flags|=1,e=kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Wl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Lr(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Kt(e,t,n)}return Cr(e,t,a,l,n)}function rf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return uf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?uo(t,i):sr(),co(t);else return l=t.lanes=536870912,uf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ui(t,i.cachePool),uo(t,i),ha(),t.memoizedState=null):(e!==null&&ui(t,null),sr(),ha());return Qe(e,t,n,a),t.child}function dn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uf(e,t,a,l,n){var i=er();return i=i===null?null:{parent:Me._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ui(t,null),sr(),co(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function Ti(e,t){return t=Ai({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cf(e,t,a){return Xa(t,e.child,null,a),e=Ti(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function Fp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=Ti(t,l),t.lanes=536870912,dn(null,e);if(ur(t),(e=Se)?(e=xd(e,xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Xc(e),a.return=t,t.child=a,Ve=t,Se=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Ti(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(ur(t),n)if(t.flags&256)t.flags&=-257,t=cf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||pl(e,t,a,!1),n=(a&e.childLanes)!==0,He||n){if(l=ve,l!==null&&(s=$u(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ha(e,s),lt(l,e,s),Rr;Ui(),t=cf(e,t,a)}else e=i.treeContext,Se=Et(s.nextSibling),Ve=t,re=!0,ua=null,xt=!1,e!==null&&Kc(t,e),t=Ti(t,l),t.flags|=4096;return t}return e=kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Cr(e,t,a,l,n){return Ya(t),a=or(e,t,a,l,void 0,n),l=fr(),e!==null&&!He?(dr(e,t,n),Kt(e,t,n)):(re&&l&&Qs(t),t.flags|=1,Qe(e,t,a,n),t.child)}function of(e,t,a,l,n,i){return Ya(t),t.updateQueue=null,a=fo(t,l,a,n),oo(e),l=fr(),e!==null&&!He?(dr(e,t,i),Kt(e,t,i)):(re&&l&&Qs(t),t.flags|=1,Qe(e,t,a,i),t.child)}function ff(e,t,a,l,n){if(Ya(t),t.stateNode===null){var i=ol,s=a.contextType;typeof s=="object"&&s!==null&&(i=Xe(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ar(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Xe(s):ol,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ar(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&wr.enqueueReplaceState(i,i.state,null),rn(t,l,i,n),sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,m=Za(a,o);i.props=m;var E=i.context,j=a.contextType;s=ol,typeof j=="object"&&j!==null&&(s=Xe(j));var z=a.getDerivedStateFromProps;j=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||E!==s)&&Wo(t,i,l,s),fa=!1;var T=t.memoizedState;i.state=T,rn(t,l,i,n),sn(),E=t.memoizedState,o||T!==E||fa?(typeof z=="function"&&(Ar(t,a,z,l),E=t.memoizedState),(m=fa||Jo(t,a,m,l,T,E,s))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=s,l=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lr(e,t),s=t.memoizedProps,j=Za(a,s),i.props=j,z=t.pendingProps,T=i.context,E=a.contextType,m=ol,typeof E=="object"&&E!==null&&(m=Xe(E)),o=a.getDerivedStateFromProps,(E=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==z||T!==m)&&Wo(t,i,l,m),fa=!1,T=t.memoizedState,i.state=T,rn(t,l,i,n),sn();var N=t.memoizedState;s!==z||T!==N||fa||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof o=="function"&&(Ar(t,a,o,l),N=t.memoizedState),(j=fa||Jo(t,a,j,l,T,N,m)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,N,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,N,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=m,l=j):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ni(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Xa(t,e.child,null,n),t.child=Xa(t,null,a,n)):Qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Kt(e,t,n),e}function df(e,t,a,l){return Ba(),t.flags|=256,Qe(e,t,a,l),t.child}var Dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Or(e){return{baseLanes:e,cachePool:Ic()}}function zr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=dt),e}function mf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?pa(t):ha(),(e=Se)?(e=xd(e,xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Xc(e),a.return=t,t.child=a,Ve=t,Se=null)):e=null,e===null)throw ca(t);return hu(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ha(),n=t.mode,o=Ai({mode:"hidden",children:o},n),l=La(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=Or(a),l.childLanes=zr(e,s,a),t.memoizedState=Dr,dn(null,l)):(pa(t),Mr(t,o))}var m=e.memoizedState;if(m!==null&&(o=m.dehydrated,o!==null)){if(i)t.flags&256?(pa(t),t.flags&=-257,t=Ur(e,t,a)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),o=l.fallback,n=t.mode,l=Ai({mode:"visible",children:l.children},n),o=La(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Xa(t,e.child,null,a),l=t.child,l.memoizedState=Or(a),l.childLanes=zr(e,s,a),t.memoizedState=Dr,t=dn(null,l));else if(pa(t),hu(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var E=s.dgst;s=E,l=Error(c(419)),l.stack="",l.digest=s,Il({value:l,source:null,stack:null}),t=Ur(e,t,a)}else if(He||pl(e,t,a,!1),s=(a&e.childLanes)!==0,He||s){if(s=ve,s!==null&&(l=$u(s,a),l!==0&&l!==m.retryLane))throw m.retryLane=l,Ha(e,l),lt(s,e,l),Rr;pu(o)||Ui(),t=Ur(e,t,a)}else pu(o)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Se=Et(o.nextSibling),Ve=t,re=!0,ua=null,xt=!1,e!==null&&Kc(t,e),t=Mr(t,l.children),t.flags|=4096);return t}return n?(ha(),o=l.fallback,n=t.mode,m=e.child,E=m.sibling,l=kt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,E!==null?o=kt(E,o):(o=La(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,dn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=Or(a):(n=o.cachePool,n!==null?(m=Me._currentValue,n=n.parent!==m?{parent:m,pool:m}:n):n=Ic(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=zr(e,s,a),t.memoizedState=Dr,dn(e.child,l)):(pa(t),a=e.child,e=a.sibling,a=kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Mr(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Ur(e,t,a){return Xa(t,e.child,null,a),e=Mr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ws(e.return,t,a)}function Hr(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function hf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Oe.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,L(Oe,s),Qe(e,t,l,a),l=re?Pl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pf(e,a,t);else if(e.tag===19)pf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&pi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Hr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&pi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Hr(t,!0,a,null,i,l);break;case"together":Hr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Lr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Jp(e,t,a){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),oa(t,Me,e.memoizedState.cache),Ba();break;case 27:case 5:Ll(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ur(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(pa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?mf(e,t,a):(pa(t),e=Kt(e,t,a),e!==null?e.sibling:null);pa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return hf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Oe,Oe.current),l)break;return null;case 22:return t.lanes=0,rf(e,t,a,t.pendingProps);case 24:oa(t,Me,e.memoizedState.cache)}return Kt(e,t,a)}function _f(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Lr(e,a)&&(t.flags&128)===0)return He=!1,Jp(e,t,a);He=(e.flags&131072)!==0}else He=!1,re&&(t.flags&1048576)!==0&&Zc(t,Pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Gs(e)?(l=Za(e,l),t.tag=1,t=ff(null,t,e,l,a)):(t.tag=0,t=Cr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===xe){t.tag=11,t=lf(null,t,e,l,a);break e}else if(n===P){t.tag=14,t=nf(null,t,e,l,a);break e}}throw t=Lt(e)||e,Error(c(306,t,""))}}return t;case 0:return Cr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Za(l,t.pendingProps),ff(e,t,l,n,a);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,lr(e,t),rn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,oa(t,Me,l),l!==i.cache&&$s(t,[Me],a,!0),sn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=df(e,t,l,a);break e}else if(l!==n){n=yt(Error(c(424)),t),Il(n),t=df(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Se=Et(e.firstChild),Ve=t,re=!0,ua=null,xt=!0,a=io(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ba(),l===n){t=Kt(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=wd(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Gi(ae.current).createElement(a),l[Ge]=t,l[$e]=e,Ze(l,a,e),qe(l),t.stateNode=l):t.memoizedState=wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ll(t),e===null&&re&&(l=t.stateNode=Td(t.type,t.pendingProps,ae.current),Ve=t,xt=!0,n=Se,Ea(t.type)?(_u=n,Se=Et(l.firstChild)):Se=n),Qe(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=l=Se)&&(l=Nh(l,t.type,t.pendingProps,xt),l!==null?(t.stateNode=l,Ve=t,Se=Et(l.firstChild),xt=!1,n=!0):n=!1),n||ca(t)),Ll(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,fu(n,i)?l=null:s!==null&&fu(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=or(e,t,Yp,null,null,a),wn._currentValue=n),Ni(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Se)&&(a=Ah(a,t.pendingProps,xt),a!==null?(t.stateNode=a,Ve=t,Se=null,e=!0):e=!1),e||ca(t)),null;case 13:return mf(e,t,a);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Xa(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return lf(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,oa(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ya(t),n=Xe(n),l=l(n),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return nf(e,t,t.type,t.pendingProps,a);case 15:return sf(e,t,t.type,t.pendingProps,a);case 19:return hf(e,t,a);case 31:return Fp(e,t,a);case 22:return rf(e,t,a,t.pendingProps);case 24:return Ya(t),l=Xe(Me),e===null?(n=er(),n===null&&(n=ve,i=Ps(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ar(t),oa(t,Me,n)):((e.lanes&a)!==0&&(lr(e,t),rn(t,null,null,a),sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),oa(t,Me,l)):(l=i.cache,oa(t,Me,l),l!==n.cache&&$s(t,[Me],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Ft(e){e.flags|=4}function Br(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Vf())e.flags|=8192;else throw Va=oi,tr}else e.flags&=-16777217}function gf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Od(t))if(Vf())e.flags|=8192;else throw Va=oi,tr}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fu():536870912,e.lanes|=t,Al|=t)}function mn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Wp(e,t,a){var l=t.pendingProps;switch(Zs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(Me),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fs())),Ee(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Ft(t),i!==null?(Ee(t),gf(t,i)):(Ee(t),Br(t,n,null,l,a))):i?i!==e.memoizedState?(Ft(t),Ee(t),gf(t,i)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ft(t),Ee(t),Br(t,n,e,l,a)),null;case 27:if(Bn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}e=V.current,ml(t)?Fc(t):(e=Td(n,l,a),t.stateNode=e,Ft(t))}return Ee(t),null;case 5:if(Bn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}if(i=V.current,ml(t))Fc(t);else{var s=Gi(ae.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Ge]=t,i[$e]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Ze(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ft(t)}}return Ee(t),Br(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Ft(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||md(e.nodeValue,a)),e||ca(t,!0)}else e=Gi(e).createTextNode(l),e[Ge]=t,t.stateNode=e}return Ee(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ge]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else a=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ee(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Ge]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),n=!1}else n=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),Ee(t),null);case 4:return De(),e===null&&su(t.stateNode.containerInfo),Ee(t),null;case 10:return Xt(t.type),Ee(t),null;case 19:if(M(Oe),l=t.memoizedState,l===null)return Ee(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)mn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=pi(e),i!==null){for(t.flags|=128,mn(l,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Vc(a,e),a=a.sibling;return L(Oe,Oe.current&1|2),re&&Gt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>Oi&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=pi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return Ee(t),null}else 2*nt()-l.renderingStartTime>Oi&&a!==536870912&&(t.flags|=128,n=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,a=Oe.current,L(Oe,n?a&1|2:a&1),re&&Gt(t,l.treeForkCount),e):(Ee(t),null);case 22:case 23:return ot(t),rr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&M(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(Me),Ee(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function $p(e,t){switch(Zs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(Me),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(c(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(Oe),null;case 4:return De(),null;case 10:return Xt(t.type),null;case 22:case 23:return ot(t),rr(),e!==null&&M(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(Me),null;case 25:return null;default:return null}}function yf(e,t){switch(Zs(t),t.tag){case 3:Xt(Me),De();break;case 26:case 27:case 5:Bn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:M(Oe);break;case 10:Xt(t.type);break;case 22:case 23:ot(t),rr(),e!==null&&M(ka);break;case 24:Xt(Me)}}function pn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(o){me(t,t.return,o)}}function _a(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,n=t;var m=a,E=o;try{E()}catch(j){me(n,m,j)}}}l=l.next}while(l!==i)}}catch(j){me(t,t.return,j)}}function vf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ro(t,a)}catch(l){me(e,e.return,l)}}}function bf(e,t,a){a.props=Za(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function hn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){me(e,t,n)}}function zt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){me(e,t,n)}else a.current=null}function xf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){me(e,e.return,n)}}function qr(e,t,a){try{var l=e.stateNode;vh(l,e.type,a,t),l[$e]=t}catch(n){me(e,e.return,n)}}function Sf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Yr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(kr(e,t,a),e=e.sibling;e!==null;)kr(e,t,a),e=e.sibling}function ji(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ji(e,t,a),e=e.sibling;e!==null;)ji(e,t,a),e=e.sibling}function Ef(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[Ge]=e,t[$e]=a}catch(i){me(e,e.return,i)}}var Jt=!1,Le=!1,Gr=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Pp(e,t){if(e=e.containerInfo,cu=Ji,e=Mc(e),Us(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,o=-1,m=-1,E=0,j=0,z=e,T=null;t:for(;;){for(var N;z!==a||n!==0&&z.nodeType!==3||(o=s+n),z!==i||l!==0&&z.nodeType!==3||(m=s+l),z.nodeType===3&&(s+=z.nodeValue.length),(N=z.firstChild)!==null;)T=z,z=N;for(;;){if(z===e)break t;if(T===a&&++E===n&&(o=s),T===i&&++j===l&&(m=s),(N=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=N}a=o===-1||m===-1?null:{start:o,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(ou={focusedElem:e,selectionRange:a},Ji=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Y=Za(a.type,n);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){me(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)mu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Nf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),l&4&&pn(5,a);break;case 1:if($t(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){me(a,a.return,s)}else{var n=Za(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){me(a,a.return,s)}}l&64&&vf(a),l&512&&hn(a,a.return);break;case 3:if($t(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ro(e,t)}catch(s){me(a,a.return,s)}}break;case 27:t===null&&l&4&&Ef(a);case 26:case 5:$t(e,a),t===null&&l&4&&xf(a),l&512&&hn(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),l&4&&jf(e,a);break;case 13:$t(e,a),l&4&&Rf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rh.bind(null,a),wh(e,a))));break;case 22:if(l=a.memoizedState!==null||Jt,!l){t=t!==null&&t.memoizedState!==null||Le,n=Jt;var i=Le;Jt=l,(Le=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Jt=n,Le=i}break;case 30:break;default:$t(e,a)}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ys(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,Ie=!1;function Wt(e,t,a){for(a=a.child;a!==null;)wf(e,t,a),a=a.sibling}function wf(e,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Bl,a)}catch{}switch(a.tag){case 26:Le||zt(a,t),Wt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||zt(a,t);var l=Te,n=Ie;Ea(a.type)&&(Te=a.stateNode,Ie=!1),Wt(e,t,a),Tn(a.stateNode),Te=l,Ie=n;break;case 5:Le||zt(a,t);case 6:if(l=Te,n=Ie,Te=null,Wt(e,t,a),Te=l,Ie=n,Te!==null)if(Ie)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(i){me(a,t,i)}else try{Te.removeChild(a.stateNode)}catch(i){me(a,t,i)}break;case 18:Te!==null&&(Ie?(e=Te,vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):vd(Te,a.stateNode));break;case 4:l=Te,n=Ie,Te=a.stateNode.containerInfo,Ie=!0,Wt(e,t,a),Te=l,Ie=n;break;case 0:case 11:case 14:case 15:_a(2,a,t),Le||_a(4,a,t),Wt(e,t,a);break;case 1:Le||(zt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&bf(a,t,l)),Wt(e,t,a);break;case 21:Wt(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,Wt(e,t,a),Le=l;break;default:Wt(e,t,a)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){me(t,t.return,a)}}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){me(t,t.return,a)}}function Ip(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(c(435,e.tag))}}function Ri(e,t){var a=Ip(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=uh.bind(null,e,l);l.then(n,n)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Ea(o.type)){Te=o.stateNode,Ie=!1;break e}break;case 5:Te=o.stateNode,Ie=!1;break e;case 3:case 4:Te=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(Te===null)throw Error(c(160));wf(i,s,n),Te=null,Ie=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}var jt=null;function Cf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(_a(3,e,e.return),pn(3,e),_a(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(Le||a===null||zt(a,a.return)),l&64&&Jt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=jt;if(et(t,e),tt(e),l&512&&(Le||a===null||zt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[kl]||i[Ge]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[Ge]=e,qe(i),l=i;break e;case"link":var s=Cd("link","href",n).get(l+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(s=Cd("meta","content",n).get(l+(a.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ge]=e,qe(i),l=i}e.stateNode=l}else Dd(n,e.type,e.stateNode);else e.stateNode=Rd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Dd(n,e.type,e.stateNode):Rd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qr(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(Le||a===null||zt(a,a.return)),a!==null&&l&4&&qr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(Le||a===null||zt(a,a.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(Y){me(e,e.return,Y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,qr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Gr=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Y){me(e,e.return,Y)}}break;case 3:if(Qi=null,n=jt,jt=Vi(t.containerInfo),et(t,e),jt=n,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(Y){me(e,e.return,Y)}Gr&&(Gr=!1,Df(e));break;case 4:l=jt,jt=Vi(e.stateNode.containerInfo),et(t,e),tt(e),jt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Di=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 22:n=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,E=Jt,j=Le;if(Jt=E||n,Le=j||m,et(t,e),Le=j,Jt=E,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||m||Jt||Le||Ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=m.stateNode;var z=m.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Y){me(m,m.return,Y)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=n?"":m.memoizedProps}catch(Y){me(m,m.return,Y)}}}else if(t.tag===18){if(a===null){m=t;try{var N=m.stateNode;n?bd(N,!0):bd(m.stateNode,!1)}catch(Y){me(m,m.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ri(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ri(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Sf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=Yr(e);ji(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(ll(s,""),a.flags&=-33);var o=Yr(e);ji(e,o,s);break;case 3:case 4:var m=a.stateNode.containerInfo,E=Yr(e);kr(e,E,m);break;default:throw Error(c(161))}}catch(j){me(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Df(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nf(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),Ka(t);break;case 1:zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bf(t,t.return,a),Ka(t);break;case 27:Tn(t.stateNode);case 26:case 5:zt(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(n,i,a),pn(4,i);break;case 1:if(Pt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){me(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var m=n.shared.hiddenCallbacks;if(m!==null)for(n.shared.hiddenCallbacks=null,n=0;n<m.length;n++)so(m[n],o)}catch(E){me(l,l.return,E)}}a&&s&64&&vf(i),hn(i,i.return);break;case 27:Ef(i);case 26:case 5:Pt(n,i,a),a&&l===null&&s&4&&xf(i),hn(i,i.return);break;case 12:Pt(n,i,a);break;case 31:Pt(n,i,a),a&&s&4&&jf(n,i);break;case 13:Pt(n,i,a),a&&s&4&&Rf(n,i);break;case 22:i.memoizedState===null&&Pt(n,i,a),hn(i,i.return);break;case 30:break;default:Pt(n,i,a)}t=t.sibling}}function Vr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Xr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e))}function Rt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(e,t,a,l),t=t.sibling}function Of(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,l),n&2048&&pn(9,t);break;case 1:Rt(e,t,a,l);break;case 3:Rt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&en(e)));break;case 12:if(n&2048){Rt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){me(t,t.return,m)}}else Rt(e,t,a,l);break;case 31:Rt(e,t,a,l);break;case 13:Rt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Rt(e,t,a,l):_n(e,t):i._visibility&2?Rt(e,t,a,l):(i._visibility|=2,El(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Vr(s,t);break;case 24:Rt(e,t,a,l),n&2048&&Xr(t.alternate,t);break;default:Rt(e,t,a,l)}}function El(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,o=a,m=l,E=s.flags;switch(s.tag){case 0:case 11:case 15:El(i,s,o,m,n),pn(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&2?El(i,s,o,m,n):_n(i,s):(j._visibility|=2,El(i,s,o,m,n)),n&&E&2048&&Vr(s.alternate,s);break;case 24:El(i,s,o,m,n),n&&E&2048&&Xr(s.alternate,s);break;default:El(i,s,o,m,n)}t=t.sibling}}function _n(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:_n(a,l),n&2048&&Vr(l.alternate,l);break;case 24:_n(a,l),n&2048&&Xr(l.alternate,l);break;default:_n(a,l)}t=t.sibling}}var gn=8192;function Tl(e,t,a){if(e.subtreeFlags&gn)for(e=e.child;e!==null;)zf(e,t,a),e=e.sibling}function zf(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&gn&&e.memoizedState!==null&&qh(a,jt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=jt;jt=Vi(e.stateNode.containerInfo),Tl(e,t,a),jt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gn,gn=16777216,Tl(e,t,a),gn=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function Mf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Hf(l,e)}Mf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uf(e),e=e.sibling}function Uf(e){switch(e.tag){case 0:case 11:case 15:yn(e),e.flags&2048&&_a(9,e,e.return);break;case 3:yn(e);break;case 12:yn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ci(e)):yn(e);break;default:yn(e)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Hf(l,e)}Mf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),Ci(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ci(t));break;default:Ci(t)}e=e.sibling}}function Hf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:_a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:en(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(Af(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var eh={getCacheForType:function(e){var t=Xe(Me),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Me).controller.signal}},th=typeof WeakMap=="function"?WeakMap:Map,oe=0,ve=null,le=null,ie=0,de=0,ft=null,ga=!1,Nl=!1,Qr=!1,It=0,Re=0,ya=0,Fa=0,Zr=0,dt=0,Al=0,vn=null,at=null,Kr=!1,Di=0,Lf=0,Oi=1/0,zi=null,va=null,Be=0,ba=null,wl=null,ea=0,Fr=0,Jr=null,Bf=null,bn=0,Wr=null;function mt(){return(oe&2)!==0&&ie!==0?ie&-ie:D.T!==null?au():Pu()}function qf(){if(dt===0)if((ie&536870912)===0||re){var e=kn;kn<<=1,(kn&3932160)===0&&(kn=262144),dt=e}else dt=536870912;return e=ct.current,e!==null&&(e.flags|=32),dt}function lt(e,t,a){(e===ve&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(jl(e,0),xa(e,ie,dt,!1)),Yl(e,a),((oe&2)===0||e!==ve)&&(e===ve&&((oe&2)===0&&(Fa|=a),Re===4&&xa(e,ie,dt,!1)),Mt(e))}function Yf(e,t,a){if((oe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),n=l?nh(e,t):Pr(e,t,!0),i=l;do{if(n===0){Nl&&!l&&xa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ah(a)){n=Pr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;n=vn;var m=o.current.memoizedState.isDehydrated;if(m&&(jl(o,s).flags|=256),s=Pr(o,s,!1),s!==2){if(Qr&&!m){o.errorRecoveryDisabledLanes|=i,Fa|=i,n=4;break e}i=at,at=n,i!==null&&(at===null?at=i:at.push.apply(at,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){jl(e,0),xa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:xa(l,t,dt,!ga);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Di+300-nt(),10<n)){if(xa(l,t,dt,!ga),Vn(l,0,!0)!==0)break e;ea=t,l.timeoutHandle=gd(kf.bind(null,l,a,at,zi,Kr,t,dt,Fa,Al,ga,i,"Throttled",-0,0),n);break e}kf(l,a,at,zi,Kr,t,dt,Fa,Al,ga,i,null,-0,0)}}break}while(!0);Mt(e)}function kf(e,t,a,l,n,i,s,o,m,E,j,z,T,N){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},zf(t,i,z);var Y=(i&62914560)===i?Di-nt():(i&4194048)===i?Lf-nt():0;if(Y=Yh(z,Y),Y!==null){ea=i,e.cancelPendingCommit=Y(Jf.bind(null,e,t,i,a,l,n,s,o,m,j,z,null,T,N)),xa(e,i,s,!E);return}}Jf(e,t,i,a,l,n,s,o,m)}function ah(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,a,l){t&=~Zr,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-st(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&Ju(e,a,t)}function Mi(){return(oe&6)===0?(xn(0),!1):!0}function $r(){if(le!==null){if(de===0)var e=le.return;else e=le,Vt=qa=null,mr(e),yl=null,an=0,e=le;for(;e!==null;)yf(e.alternate,e),e=e.return;le=null}}function jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,$r(),ve=e,le=a=kt(e.current,null),ie=t,de=0,ft=null,ga=!1,Nl=ql(e,t),Qr=!1,Al=dt=Zr=Fa=ya=Re=0,at=vn=null,Kr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-st(l),i=1<<n;t|=e[n],l&=~i}return It=t,ti(),a}function Gf(e,t){ee=null,D.H=fn,t===gl||t===ci?(t=ao(),de=3):t===tr?(t=ao(),de=4):de=t===Rr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Re=1,Ei(e,yt(t,e.current)))}function Vf(){var e=ct.current;return e===null?!0:(ie&4194048)===ie?St===null:(ie&62914560)===ie||(ie&536870912)!==0?e===St:!1}function Xf(){var e=D.H;return D.H=fn,e===null?fn:e}function Qf(){var e=D.A;return D.A=eh,e}function Ui(){Re=4,ga||(ie&4194048)!==ie&&ct.current!==null||(Nl=!0),(ya&134217727)===0&&(Fa&134217727)===0||ve===null||xa(ve,ie,dt,!1)}function Pr(e,t,a){var l=oe;oe|=2;var n=Xf(),i=Qf();(ve!==e||ie!==t)&&(zi=null,jl(e,t)),t=!1;var s=Re;e:do try{if(de!==0&&le!==null){var o=le,m=ft;switch(de){case 8:$r(),s=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var E=de;if(de=0,ft=null,Rl(e,o,m,E),a&&Nl){s=0;break e}break;default:E=de,de=0,ft=null,Rl(e,o,m,E)}}lh(),s=Re;break}catch(j){Gf(e,j)}while(!0);return t&&e.shellSuspendCounter++,Vt=qa=null,oe=l,D.H=n,D.A=i,le===null&&(ve=null,ie=0,ti()),s}function lh(){for(;le!==null;)Zf(le)}function nh(e,t){var a=oe;oe|=2;var l=Xf(),n=Qf();ve!==e||ie!==t?(zi=null,Oi=nt()+500,jl(e,t)):Nl=ql(e,t);e:do try{if(de!==0&&le!==null){t=le;var i=ft;t:switch(de){case 1:de=0,ft=null,Rl(e,t,i,1);break;case 2:case 9:if(eo(i)){de=0,ft=null,Kf(t);break}t=function(){de!==2&&de!==9||ve!==e||(de=7),Mt(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:eo(i)?(de=0,ft=null,Kf(t)):(de=0,ft=null,Rl(e,t,i,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var o=le;if(s?Od(s):o.stateNode.complete){de=0,ft=null;var m=o.sibling;if(m!==null)le=m;else{var E=o.return;E!==null?(le=E,Hi(E)):le=null}break t}}de=0,ft=null,Rl(e,t,i,5);break;case 6:de=0,ft=null,Rl(e,t,i,6);break;case 8:$r(),Re=6;break e;default:throw Error(c(462))}}ih();break}catch(j){Gf(e,j)}while(!0);return Vt=qa=null,D.H=l,D.A=n,oe=a,le!==null?0:(ve=null,ie=0,ti(),Re)}function ih(){for(;le!==null&&!jm();)Zf(le)}function Zf(e){var t=_f(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Hi(e):le=t}function Kf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=of(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=of(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:mr(t);default:yf(a,t),t=le=Vc(t,It),t=_f(a,t,It)}e.memoizedProps=e.pendingProps,t===null?Hi(e):le=t}function Rl(e,t,a,l){Vt=qa=null,mr(t),yl=null,an=0;var n=t.return;try{if(Kp(e,n,t,a,ie)){Re=1,Ei(e,yt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;Re=1,Ei(e,yt(a,e.current)),le=null;return}t.flags&32768?(re||l===1?e=!0:Nl||(ie&536870912)!==0?e=!1:(ga=e=!0,(l===2||l===9||l===3||l===6)&&(l=ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ff(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){Ff(t,ga);return}e=t.return;var a=Wp(t.alternate,t,It);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function Ff(e,t){do{var a=$p(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function Jf(e,t,a,l,n,i,s,o,m){e.cancelPendingCommit=null;do Li();while(Be!==0);if((oe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Ys,Bm(e,a,i,s,o,m),e===ve&&(le=ve=null,ie=0),wl=t,ba=e,ea=a,Fr=i,Jr=n,Bf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ch(qn,function(){return ed(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=H.p,H.p=2,s=oe,oe|=4;try{Pp(e,t,a)}finally{oe=s,H.p=n,D.T=l}}Be=1,Wf(),$f(),Pf()}}function Wf(){if(Be===1){Be=0;var e=ba,t=wl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{Cf(t,e);var i=ou,s=Mc(e.containerInfo),o=i.focusedElem,m=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&zc(o.ownerDocument.documentElement,o)){if(m!==null&&Us(o)){var E=m.start,j=m.end;if(j===void 0&&(j=E),"selectionStart"in o)o.selectionStart=E,o.selectionEnd=Math.min(j,o.value.length);else{var z=o.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var N=T.getSelection(),Y=o.textContent.length,F=Math.min(m.start,Y),ge=m.end===void 0?F:Math.min(m.end,Y);!N.extend&&F>ge&&(s=ge,ge=F,F=s);var b=Oc(o,F),g=Oc(o,ge);if(b&&g&&(N.rangeCount!==1||N.anchorNode!==b.node||N.anchorOffset!==b.offset||N.focusNode!==g.node||N.focusOffset!==g.offset)){var S=z.createRange();S.setStart(b.node,b.offset),N.removeAllRanges(),F>ge?(N.addRange(S),N.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),N.addRange(S))}}}}for(z=[],N=o;N=N.parentNode;)N.nodeType===1&&z.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<z.length;o++){var O=z[o];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Ji=!!cu,ou=cu=null}finally{oe=n,H.p=l,D.T=a}}e.current=t,Be=2}}function $f(){if(Be===2){Be=0;var e=ba,t=wl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{Nf(e,t.alternate,t)}finally{oe=n,H.p=l,D.T=a}}Be=3}}function Pf(){if(Be===4||Be===3){Be=0,Rm();var e=ba,t=wl,a=ea,l=Bf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,wl=ba=null,If(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(va=null),_s(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=H.p,H.p=2,D.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var o=l[s];i(o.value,{componentStack:o.stack})}}finally{D.T=t,H.p=n}}(ea&3)!==0&&Li(),Mt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Wr?bn++:(bn=0,Wr=e):bn=0,xn(0)}}function If(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,en(t)))}function Li(){return Wf(),$f(),Pf(),ed()}function ed(){if(Be!==5)return!1;var e=ba,t=Fr;Fr=0;var a=_s(ea),l=D.T,n=H.p;try{H.p=32>a?32:a,D.T=null,a=Jr,Jr=null;var i=ba,s=ea;if(Be=0,wl=ba=null,ea=0,(oe&6)!==0)throw Error(c(331));var o=oe;if(oe|=4,Uf(i.current),Of(i,i.current,s,a),oe=o,xn(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Bl,i)}catch{}return!0}finally{H.p=n,D.T=l,If(e,t)}}function td(e,t,a){t=yt(a,t),t=jr(e.stateNode,t,2),e=ma(e,t,2),e!==null&&(Yl(e,2),Mt(e))}function me(e,t,a){if(e.tag===3)td(e,e,a);else for(;t!==null;){if(t.tag===3){td(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(va===null||!va.has(l))){e=yt(a,e),a=tf(2),l=ma(t,a,2),l!==null&&(af(a,l,t,e),Yl(l,2),Mt(l));break}}t=t.return}}function Ir(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new th;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Qr=!0,n.add(a),e=sh.bind(null,e,t,a),t.then(e,e))}function sh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(Re===4||Re===3&&(ie&62914560)===ie&&300>nt()-Di?(oe&2)===0&&jl(e,0):Zr|=a,Al===ie&&(Al=0)),Mt(e)}function ad(e,t){t===0&&(t=Fu()),e=Ha(e,t),e!==null&&(Yl(e,t),Mt(e))}function rh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ad(e,a)}function uh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),ad(e,a)}function ch(e,t){return ds(e,t)}var Bi=null,Cl=null,eu=!1,qi=!1,tu=!1,Sa=0;function Mt(e){e!==Cl&&e.next===null&&(Cl===null?Bi=Cl=e:Cl=Cl.next=e),qi=!0,eu||(eu=!0,fh())}function xn(e,t){if(!tu&&qi){tu=!0;do for(var a=!1,l=Bi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-st(42|e)+1)-1,i&=n&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,sd(l,i))}else i=ie,i=Vn(l,l===ve?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ql(l,i)||(a=!0,sd(l,i));l=l.next}while(a);tu=!1}}function oh(){ld()}function ld(){qi=eu=!1;var e=0;Sa!==0&&xh()&&(e=Sa);for(var t=nt(),a=null,l=Bi;l!==null;){var n=l.next,i=nd(l,t);i===0?(l.next=null,a===null?Bi=n:a.next=n,n===null&&(Cl=a)):(a=l,(e!==0||(i&3)!==0)&&(qi=!0)),l=n}Be!==0&&Be!==5||xn(e),Sa!==0&&(Sa=0)}function nd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-st(i),o=1<<s,m=n[s];m===-1?((o&a)===0||(o&l)!==0)&&(n[s]=Lm(o,t)):m<=t&&(e.expiredLanes|=o),i&=~o}if(t=ve,a=ie,a=Vn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ms(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ms(l),_s(a)){case 2:case 8:a=Zu;break;case 32:a=qn;break;case 268435456:a=Ku;break;default:a=qn}return l=id.bind(null,e),a=ds(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ms(l),e.callbackPriority=2,e.callbackNode=null,2}function id(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Li()&&e.callbackNode!==a)return null;var l=ie;return l=Vn(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Yf(e,l,t),nd(e,nt()),e.callbackNode!=null&&e.callbackNode===a?id.bind(null,e):null)}function sd(e,t){if(Li())return null;Yf(e,t,!0)}function fh(){Eh(function(){(oe&6)!==0?ds(Qu,oh):ld()})}function au(){if(Sa===0){var e=hl;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Sa=e}return Sa}function rd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function ud(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=rd((n[$e]||null).action),s=l.submitter;s&&(t=(t=s[$e]||null)?rd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var o=new $n("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Sa!==0){var m=s?ud(n,s):new FormData(n);Sr(a,{pending:!0,data:m,method:n.method,action:i},null,m)}}else typeof i=="function"&&(o.preventDefault(),m=s?ud(n,s):new FormData(n),Sr(a,{pending:!0,data:m,method:n.method,action:i},i,m))},currentTarget:n}]})}}for(var lu=0;lu<qs.length;lu++){var nu=qs[lu],mh=nu.toLowerCase(),ph=nu[0].toUpperCase()+nu.slice(1);wt(mh,"on"+ph)}wt(Lc,"onAnimationEnd"),wt(Bc,"onAnimationIteration"),wt(qc,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Cp,"onTransitionRun"),wt(Dp,"onTransitionStart"),wt(Op,"onTransitionCancel"),wt(Yc,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function cd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var o=l[s],m=o.instance,E=o.currentTarget;if(o=o.listener,m!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(j){ei(j)}n.currentTarget=null,i=m}else for(s=0;s<l.length;s++){if(o=l[s],m=o.instance,E=o.currentTarget,o=o.listener,m!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=E;try{i(n)}catch(j){ei(j)}n.currentTarget=null,i=m}}}}function ne(e,t){var a=t[gs];a===void 0&&(a=t[gs]=new Set);var l=e+"__bubble";a.has(l)||(od(t,e,2,!1),a.add(l))}function iu(e,t,a){var l=0;t&&(l|=4),od(a,e,l,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function su(e){if(!e[Yi]){e[Yi]=!0,tc.forEach(function(a){a!=="selectionchange"&&(hh.has(a)||iu(a,!1,e),iu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,iu("selectionchange",!1,t))}}function od(e,t,a,l){switch(qd(t)){case 2:var n=Vh;break;case 8:n=Xh;break;default:n=xu}a=n.bind(null,t,a,e),n=void 0,!As||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ru(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===n)break;if(s===4)for(s=l.return;s!==null;){var m=s.tag;if((m===3||m===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;o!==null;){if(s=Pa(o),s===null)return;if(m=s.tag,m===5||m===6||m===26||m===27){l=i=s;continue e}o=o.parentNode}}l=l.return}mc(function(){var E=i,j=Ts(a),z=[];e:{var T=kc.get(e);if(T!==void 0){var N=$n,Y=e;switch(e){case"keypress":if(Jn(a)===0)break e;case"keydown":case"keyup":N=up;break;case"focusin":Y="focus",N=Cs;break;case"focusout":Y="blur",N=Cs;break;case"beforeblur":case"afterblur":N=Cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=fp;break;case Lc:case Bc:case qc:N=Im;break;case Yc:N=mp;break;case"scroll":case"scrollend":N=Fm;break;case"wheel":N=hp;break;case"copy":case"cut":case"paste":N=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=yc;break;case"toggle":case"beforetoggle":N=gp}var F=(t&4)!==0,ge=!F&&(e==="scroll"||e==="scrollend"),b=F?T!==null?T+"Capture":null:T;F=[];for(var g=E,S;g!==null;){var O=g;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||b===null||(O=Vl(g,b),O!=null&&F.push(En(g,O,S))),ge)break;g=g.return}0<F.length&&(T=new N(T,Y,null,a,j),z.push({event:T,listeners:F}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",T&&a!==Es&&(Y=a.relatedTarget||a.fromElement)&&(Pa(Y)||Y[$a]))break e;if((N||T)&&(T=j.window===j?j:(T=j.ownerDocument)?T.defaultView||T.parentWindow:window,N?(Y=a.relatedTarget||a.toElement,N=E,Y=Y?Pa(Y):null,Y!==null&&(ge=_(Y),F=Y.tag,Y!==ge||F!==5&&F!==27&&F!==6)&&(Y=null)):(N=null,Y=E),N!==Y)){if(F=_c,O="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(F=yc,O="onPointerLeave",b="onPointerEnter",g="pointer"),ge=N==null?T:Gl(N),S=Y==null?T:Gl(Y),T=new F(O,g+"leave",N,a,j),T.target=ge,T.relatedTarget=S,O=null,Pa(j)===E&&(F=new F(b,g+"enter",Y,a,j),F.target=S,F.relatedTarget=ge,O=F),ge=O,N&&Y)t:{for(F=_h,b=N,g=Y,S=0,O=b;O;O=F(O))S++;O=0;for(var Z=g;Z;Z=F(Z))O++;for(;0<S-O;)b=F(b),S--;for(;0<O-S;)g=F(g),O--;for(;S--;){if(b===g||g!==null&&b===g.alternate){F=b;break t}b=F(b),g=F(g)}F=null}else F=null;N!==null&&fd(z,T,N,F,!1),Y!==null&&ge!==null&&fd(z,ge,Y,F,!0)}}e:{if(T=E?Gl(E):window,N=T.nodeName&&T.nodeName.toLowerCase(),N==="select"||N==="input"&&T.type==="file")var ue=Ac;else if(Tc(T))if(wc)ue=wp;else{ue=Np;var Q=Tp}else N=T.nodeName,!N||N.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Ss(E.elementType)&&(ue=Ac):ue=Ap;if(ue&&(ue=ue(e,E))){Nc(z,ue,a,j);break e}Q&&Q(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&xs(T,"number",T.value)}switch(Q=E?Gl(E):window,e){case"focusin":(Tc(Q)||Q.contentEditable==="true")&&(rl=Q,Hs=E,$l=null);break;case"focusout":$l=Hs=rl=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Uc(z,a,j);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":Uc(z,a,j)}var te;if(Os)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else sl?Sc(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(vc&&a.locale!=="ko"&&(sl||se!=="onCompositionStart"?se==="onCompositionEnd"&&sl&&(te=pc()):(sa=j,ws="value"in sa?sa.value:sa.textContent,sl=!0)),Q=ki(E,se),0<Q.length&&(se=new gc(se,e,null,a,j),z.push({event:se,listeners:Q}),te?se.data=te:(te=Ec(a),te!==null&&(se.data=te)))),(te=vp?bp(e,a):xp(e,a))&&(se=ki(E,"onBeforeInput"),0<se.length&&(Q=new gc("onBeforeInput","beforeinput",null,a,j),z.push({event:Q,listeners:se}),Q.data=te)),dh(z,e,E,a,j)}cd(z,t)})}function En(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Vl(e,a),n!=null&&l.unshift(En(e,n,i)),n=Vl(e,t),n!=null&&l.push(En(e,n,i))),e.tag===3)return l;e=e.return}return[]}function _h(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fd(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var o=a,m=o.alternate,E=o.stateNode;if(o=o.tag,m!==null&&m===l)break;o!==5&&o!==26&&o!==27||E===null||(m=E,n?(E=Vl(a,i),E!=null&&s.unshift(En(a,E,m))):n||(E=Vl(a,i),E!=null&&s.push(En(a,E,m)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var gh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(yh,"")}function md(e,t){return t=dd(t),dd(e)===t}function _e(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,a,l);break;case"style":fc(e,l,i);break;case"data":if(t!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&_e(e,t,"name",n.name,n,null),_e(e,t,"formEncType",n.formEncType,n,null),_e(e,t,"formMethod",n.formMethod,n,null),_e(e,t,"formTarget",n.formTarget,n,null)):(_e(e,t,"encType",n.encType,n,null),_e(e,t,"method",n.method,n,null),_e(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Xn(e,"popover",l);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zm.get(a)||a,Xn(e,a,l))}}function uu(e,t,a,l,n,i){switch(a){case"style":fc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ac.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:_e(e,t,i,s,a,null)}}n&&_e(e,t,"srcSet",a.srcSet,a,null),l&&_e(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var o=i=s=n=null,m=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var j=a[l];if(j!=null)switch(l){case"name":n=j;break;case"type":s=j;break;case"checked":m=j;break;case"defaultChecked":E=j;break;case"value":i=j;break;case"defaultValue":o=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:_e(e,t,l,j,a,null)}}rc(e,i,o,m,E,s,n,!1);return;case"select":ne("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:_e(e,t,n,o,a,null)}t=i,a=s,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:_e(e,t,s,o,a,null)}cc(e,l,n,i);return;case"option":for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null)&&(m==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":_e(e,t,m,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Sn.length;l++)ne(Sn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:_e(e,t,E,l,a,null)}return;default:if(Ss(t)){for(j in a)a.hasOwnProperty(j)&&(l=a[j],l!==void 0&&uu(e,t,j,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&_e(e,t,o,l,a,null))}function vh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,o=null,m=null,E=null,j=null;for(N in a){var z=a[N];if(a.hasOwnProperty(N)&&z!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":m=z;default:l.hasOwnProperty(N)||_e(e,t,N,null,l,z)}}for(var T in l){var N=l[T];if(z=a[T],l.hasOwnProperty(T)&&(N!=null||z!=null))switch(T){case"type":i=N;break;case"name":n=N;break;case"checked":E=N;break;case"defaultChecked":j=N;break;case"value":s=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==z&&_e(e,t,T,N,l,z)}}bs(e,s,o,m,E,j,i,n);return;case"select":N=s=o=T=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":N=m;default:l.hasOwnProperty(i)||_e(e,t,i,null,l,m)}for(n in l)if(i=l[n],m=a[n],l.hasOwnProperty(n)&&(i!=null||m!=null))switch(n){case"value":T=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==m&&_e(e,t,n,i,l,m)}t=o,a=s,l=N,T!=null?al(e,!!a,T,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":N=T=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(e,t,o,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":T=n;break;case"defaultValue":N=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&_e(e,t,s,n,l,i)}uc(e,T,N);return;case"option":for(var Y in a)T=a[Y],a.hasOwnProperty(Y)&&T!=null&&!l.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:_e(e,t,Y,null,l,T));for(m in l)T=l[m],N=a[m],l.hasOwnProperty(m)&&T!==N&&(T!=null||N!=null)&&(m==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":_e(e,t,m,T,l,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)T=a[F],a.hasOwnProperty(F)&&T!=null&&!l.hasOwnProperty(F)&&_e(e,t,F,null,l,T);for(E in l)if(T=l[E],N=a[E],l.hasOwnProperty(E)&&T!==N&&(T!=null||N!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:_e(e,t,E,T,l,N)}return;default:if(Ss(t)){for(var ge in a)T=a[ge],a.hasOwnProperty(ge)&&T!==void 0&&!l.hasOwnProperty(ge)&&uu(e,t,ge,void 0,l,T);for(j in l)T=l[j],N=a[j],!l.hasOwnProperty(j)||T===N||T===void 0&&N===void 0||uu(e,t,j,T,l,N);return}}for(var b in a)T=a[b],a.hasOwnProperty(b)&&T!=null&&!l.hasOwnProperty(b)&&_e(e,t,b,null,l,T);for(z in l)T=l[z],N=a[z],!l.hasOwnProperty(z)||T===N||T==null&&N==null||_e(e,t,z,T,l,N)}function pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,o=n.duration;if(i&&o&&pd(s)){for(s=0,o=n.responseEnd,l+=1;l<a.length;l++){var m=a[l],E=m.startTime;if(E>o)break;var j=m.transferSize,z=m.initiatorType;j&&pd(z)&&(m=m.responseEnd,s+=j*(m<o?1:(o-E)/(m-E)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cu=null,ou=null;function Gi(e){return e.nodeType===9?e:e.ownerDocument}function hd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _d(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=null;function xh(){var e=window.event;return e&&e.type==="popstate"?e===du?!1:(du=e,!0):(du=null,!1)}var gd=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(Th)}:gd;function Th(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function vd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Tn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tn(a);for(var i=a.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[kl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&Tn(e.ownerDocument.body);a=n}while(a);Ml(t)}function bd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mu(a),ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Nh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function Ah(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function xd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function pu(e){return e.data==="$?"||e.data==="$~"}function hu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _u=null;function Sd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Et(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,a){switch(t=Gi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Tn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ys(e)}var Tt=new Map,Nd=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=H.d;H.d={f:jh,r:Rh,D:Ch,C:Dh,L:Oh,m:zh,X:Uh,S:Mh,M:Hh};function jh(){var e=ta.f(),t=Mi();return e||t}function Rh(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?ko(t):ta.r(e)}var Dl=typeof document>"u"?null:document;function Ad(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=_t(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Nd.has(n)||(Nd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),qe(t),l.head.appendChild(t)))}}function Ch(e){ta.D(e),Ad("dns-prefetch",e,null)}function Dh(e,t){ta.C(e,t),Ad("preconnect",e,t)}function Oh(e,t,a){ta.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+_t(a.imageSizes)+'"]')):n+='[href="'+_t(e)+'"]';var i=n;switch(t){case"style":i=Ol(e);break;case"script":i=zl(e)}Tt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Nn(i))||t==="script"&&l.querySelector(An(i))||(t=l.createElement("link"),Ze(t,"link",e),qe(t),l.head.appendChild(t)))}}function zh(e,t){ta.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zl(e)}if(!Tt.has(i)&&(e=A({rel:"modulepreload",href:e},t),Tt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(An(i)))return}l=a.createElement("link"),Ze(l,"link",e),qe(l),a.head.appendChild(l)}}}function Mh(e,t,a){ta.S(e,t,a);var l=Dl;if(l&&e){var n=el(l).hoistableStyles,i=Ol(e);t=t||"default";var s=n.get(i);if(!s){var o={loading:0,preload:null};if(s=l.querySelector(Nn(i)))o.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(i))&&gu(e,a);var m=s=l.createElement("link");qe(m),Ze(m,"link",e),m._p=new Promise(function(E,j){m.onload=E,m.onerror=j}),m.addEventListener("load",function(){o.loading|=1}),m.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xi(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:o},n.set(i,s)}}}function Uh(e,t){ta.X(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=A({src:e,async:!0},t),(t=Tt.get(n))&&yu(e,t),i=a.createElement("script"),qe(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Hh(e,t){ta.M(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(An(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&yu(e,t),i=a.createElement("script"),qe(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function wd(e,t,a,l){var n=(n=ae.current)?Vi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=el(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var i=el(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(Nn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),i||Lh(n,e,a,s.state))),t&&l===null)throw Error(c(528,""));return s}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zl(a),a=el(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ol(e){return'href="'+_t(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function jd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Lh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),qe(t),e.head.appendChild(t))}function zl(e){return'[src="'+_t(e)+'"]'}function An(e){return"script[async]"+e}function Rd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Ze(l,"style",n),Xi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ol(a.href);var i=e.querySelector(Nn(n));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;l=jd(a),(n=Tt.get(n))&&gu(l,n),i=(e.ownerDocument||e).createElement("link"),qe(i);var s=i;return s._p=new Promise(function(o,m){s.onload=o,s.onerror=m}),Ze(i,"link",l),t.state.loading|=4,Xi(i,a.precedence,e),t.instance=i;case"script":return i=zl(a.src),(n=e.querySelector(An(i)))?(t.instance=n,qe(n),n):(l=a,(n=Tt.get(i))&&(l=A({},a),yu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Xi(l,a.precedence,e));return t.instance}function Xi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var o=l[s];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qi=null;function Cd(e,t,a){if(Qi===null){var l=new Map,n=Qi=new Map;n.set(a,l)}else n=Qi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[kl]||i[Ge]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var o=l.get(s);o?o.push(i):l.set(s,[i])}}return l}function Dd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Od(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ol(l.href),i=t.querySelector(Nn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,qe(i);return}i=t.ownerDocument||t,l=jd(l),(n=Tt.get(n))&&gu(l,n),i=i.createElement("link"),qe(i);var s=i;s._p=new Promise(function(o,m){s.onload=o,s.onerror=m}),Ze(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var vu=0;function Yh(e,t){return e.stylesheets&&e.count===0&&Fi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&vu===0&&(vu=62500*bh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>vu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Fi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,t.forEach(kh,e),Ki=null,Zi.call(e))}function kh(e,t){if(!(t.state.loading&4)){var a=Ki.get(e);if(a)var l=a.get(null);else{a=new Map,Ki.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var wn={$$typeof:J,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Gh(e,t,a,l,n,i,s,o,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.hiddenUpdates=ps(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function zd(e,t,a,l,n,i,s,o,m,E,j,z){return e=new Gh(e,t,a,s,m,E,j,z,o),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=Ps(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ar(i),e}function Md(e){return e?(e=ol,e):ol}function Ud(e,t,a,l,n,i){n=Md(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ma(e,l,t),a!==null&&(lt(a,e,t),nn(a,e,t))}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function bu(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function Ld(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&lt(t,e,67108864),bu(e,67108864)}}function Bd(e){if(e.tag===13||e.tag===31){var t=mt();t=hs(t);var a=Ha(e,t);a!==null&&lt(a,e,t),bu(e,t)}}var Ji=!0;function Vh(e,t,a,l){var n=D.T;D.T=null;var i=H.p;try{H.p=2,xu(e,t,a,l)}finally{H.p=i,D.T=n}}function Xh(e,t,a,l){var n=D.T;D.T=null;var i=H.p;try{H.p=8,xu(e,t,a,l)}finally{H.p=i,D.T=n}}function xu(e,t,a,l){if(Ji){var n=Su(l);if(n===null)ru(e,t,l,Wi,a),Yd(e,l);else if(Zh(n,e,t,a,l))l.stopPropagation();else if(Yd(e,l),t&4&&-1<Qh.indexOf(e)){for(;n!==null;){var i=Ia(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Da(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var m=1<<31-st(s);o.entanglements[1]|=m,s&=~m}Mt(i),(oe&6)===0&&(Oi=nt()+500,xn(0))}}break;case 31:case 13:o=Ha(i,2),o!==null&&lt(o,i,2),Mi(),bu(i,2)}if(i=Su(l),i===null&&ru(e,t,l,Wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ru(e,t,l,null,a)}}function Su(e){return e=Ts(e),Eu(e)}var Wi=null;function Eu(e){if(Wi=null,e=Pa(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=R(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wi=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case Qu:return 2;case Zu:return 8;case qn:case Dm:return 32;case Ku:return 268435456;default:return 32}default:return 32}}var Tu=!1,Ta=null,Na=null,Aa=null,jn=new Map,Rn=new Map,wa=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Cn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ia(t),t!==null&&Ld(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zh(e,t,a,l,n){switch(t){case"focusin":return Ta=Cn(Ta,e,t,a,l,n),!0;case"dragenter":return Na=Cn(Na,e,t,a,l,n),!0;case"mouseover":return Aa=Cn(Aa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return jn.set(i,Cn(jn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,Cn(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function kd(e){var t=Pa(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,Iu(e.priority,function(){Bd(a)});return}}else if(t===31){if(t=R(a),t!==null){e.blockedOn=t,Iu(e.priority,function(){Bd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Su(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Es=l,a.target.dispatchEvent(l),Es=null}else return t=Ia(a),t!==null&&Ld(t),e.blockedOn=a,!1;t.shift()}return!0}function Gd(e,t,a){$i(e)&&a.delete(t)}function Kh(){Tu=!1,Ta!==null&&$i(Ta)&&(Ta=null),Na!==null&&$i(Na)&&(Na=null),Aa!==null&&$i(Aa)&&(Aa=null),jn.forEach(Gd),Rn.forEach(Gd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kh)))}var Ii=null;function Vd(e){Ii!==e&&(Ii=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ii===e&&(Ii=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Eu(l||a)===null)continue;break}var i=Ia(a);i!==null&&(e.splice(t,3),t-=3,Sr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ml(e){function t(m){return Pi(m,e)}Ta!==null&&Pi(Ta,e),Na!==null&&Pi(Na,e),Aa!==null&&Pi(Aa,e),jn.forEach(t),Rn.forEach(t);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)kd(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[$e]||null;if(typeof i=="function")s||Vd(a);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[$e]||null)o=s.formAction;else if(Eu(n)!==null)continue}else o=s.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Vd(a)}}}function Xd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Nu(e){this._internalRoot=e}es.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=mt();Ud(a,l,e,t,null,null)},es.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ud(e.current,2,null,e,null,null),Mi(),t[$a]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<wa.length&&t!==0&&t<wa[a].priority;a++);wa.splice(a,0,e),a===0&&kd(e)}};var Qd=f.version;if(Qd!=="19.2.3")throw Error(c(527,Qd,"19.2.3"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Fh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Bl=ts.inject(Fh),it=ts}catch{}}return On.createRoot=function(e,t){if(!p(e))throw Error(c(299));var a=!1,l="",n=$o,i=Po,s=Io;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=zd(e,1,!1,null,null,a,l,null,n,i,s,Xd),e[$a]=t.current,su(e),new Nu(t)},On.hydrateRoot=function(e,t,a){if(!p(e))throw Error(c(299));var l=!1,n="",i=$o,s=Po,o=Io,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=zd(e,1,!0,t,a??null,l,n,m,i,s,o,Xd),t.context=Md(null),a=t.current,l=mt(),l=hs(l),n=da(l),n.callback=null,ma(a,n,l),a=l,t.current.lanes=a,Yl(t,a),Mt(t),e[$a]=t.current,su(e),new es(t)},On.version="19.2.3",On}var tm;function n_(){if(tm)return ju.exports;tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),ju.exports=l_(),ju.exports}var i_=n_();var am="popstate";function s_(r={}){function f(c,p){let{pathname:_,search:x,hash:R}=c.location;return Uu("",{pathname:_,search:x,hash:R},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(c,p){return typeof p=="string"?p:Mn(p)}return u_(f,d,null,r)}function Ae(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Ut(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function r_(){return Math.random().toString(36).substring(2,10)}function lm(r,f){return{usr:r.state,key:r.key,idx:f}}function Uu(r,f,d=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Ul(f):f,state:d,key:f&&f.key||c||r_()}}function Mn({pathname:r="/",search:f="",hash:d=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Ul(r){let f={};if(r){let d=r.indexOf("#");d>=0&&(f.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(f.search=r.substring(c),r=r.substring(0,c)),r&&(f.pathname=r)}return f}function u_(r,f,d,c={}){let{window:p=document.defaultView,v5Compat:_=!1}=c,x=p.history,R="POP",v=null,h=C();h==null&&(h=0,x.replaceState({...x.state,idx:h},""));function C(){return(x.state||{idx:null}).idx}function A(){R="POP";let G=C(),K=G==null?null:G-h;h=G,v&&v({action:R,location:q.location,delta:K})}function U(G,K){R="PUSH";let k=Uu(q.location,G,K);h=C()+1;let J=lm(k,h),xe=q.createHref(k);try{x.pushState(J,"",xe)}catch(be){if(be instanceof DOMException&&be.name==="DataCloneError")throw be;p.location.assign(xe)}_&&v&&v({action:R,location:q.location,delta:1})}function X(G,K){R="REPLACE";let k=Uu(q.location,G,K);h=C();let J=lm(k,h),xe=q.createHref(k);x.replaceState(J,"",xe),_&&v&&v({action:R,location:q.location,delta:0})}function B(G){return c_(G)}let q={get action(){return R},get location(){return r(p,x)},listen(G){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(am,A),v=G,()=>{p.removeEventListener(am,A),v=null}},createHref(G){return f(p,G)},createURL:B,encodeLocation(G){let K=B(G);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:X,go(G){return x.go(G)}};return q}function c_(r,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Mn(r);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function um(r,f,d="/"){return o_(r,f,d,!1)}function o_(r,f,d,c){let p=typeof f=="string"?Ul(f):f,_=la(p.pathname||"/",d);if(_==null)return null;let x=cm(r);f_(x);let R=null;for(let v=0;R==null&&v<x.length;++v){let h=S_(_);R=b_(x[v],h,c)}return R}function cm(r,f=[],d=[],c="",p=!1){let _=(x,R,v=p,h)=>{let C={relativePath:h===void 0?x.path||"":h,caseSensitive:x.caseSensitive===!0,childrenIndex:R,route:x};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&v)return;Ae(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let A=aa([c,C.relativePath]),U=d.concat(C);x.children&&x.children.length>0&&(Ae(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),cm(x.children,f,U,A,v)),!(x.path==null&&!x.index)&&f.push({path:A,score:y_(A,x.index),routesMeta:U})};return r.forEach((x,R)=>{if(x.path===""||!x.path?.includes("?"))_(x,R);else for(let v of om(x.path))_(x,R,!0,v)}),f}function om(r){let f=r.split("/");if(f.length===0)return[];let[d,...c]=f,p=d.endsWith("?"),_=d.replace(/\?$/,"");if(c.length===0)return p?[_,""]:[_];let x=om(c.join("/")),R=[];return R.push(...x.map(v=>v===""?_:[_,v].join("/"))),p&&R.push(...x),R.map(v=>r.startsWith("/")&&v===""?"/":v)}function f_(r){r.sort((f,d)=>f.score!==d.score?d.score-f.score:v_(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var d_=/^:[\w-]+$/,m_=3,p_=2,h_=1,__=10,g_=-2,nm=r=>r==="*";function y_(r,f){let d=r.split("/"),c=d.length;return d.some(nm)&&(c+=g_),f&&(c+=p_),d.filter(p=>!nm(p)).reduce((p,_)=>p+(d_.test(_)?m_:_===""?h_:__),c)}function v_(r,f){return r.length===f.length&&r.slice(0,-1).every((c,p)=>c===f[p])?r[r.length-1]-f[f.length-1]:0}function b_(r,f,d=!1){let{routesMeta:c}=r,p={},_="/",x=[];for(let R=0;R<c.length;++R){let v=c[R],h=R===c.length-1,C=_==="/"?f:f.slice(_.length)||"/",A=is({path:v.relativePath,caseSensitive:v.caseSensitive,end:h},C),U=v.route;if(!A&&h&&d&&!c[c.length-1].route.index&&(A=is({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},C)),!A)return null;Object.assign(p,A.params),x.push({params:p,pathname:aa([_,A.pathname]),pathnameBase:A_(aa([_,A.pathnameBase])),route:U}),A.pathnameBase!=="/"&&(_=aa([_,A.pathnameBase]))}return x}function is(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=x_(r.path,r.caseSensitive,r.end),p=f.match(d);if(!p)return null;let _=p[0],x=_.replace(/(.)\/+$/,"$1"),R=p.slice(1);return{params:c.reduce((h,{paramName:C,isOptional:A},U)=>{if(C==="*"){let B=R[U]||"";x=_.slice(0,_.length-B.length).replace(/(.)\/+$/,"$1")}const X=R[U];return A&&!X?h[C]=void 0:h[C]=(X||"").replace(/%2F/g,"/"),h},{}),pathname:_,pathnameBase:x,pattern:r}}function x_(r,f=!1,d=!0){Ut(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,R,v)=>(c.push({paramName:R,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,f?void 0:"i"),c]}function S_(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ut(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function la(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}var E_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function T_(r,f="/"){let{pathname:d,search:c="",hash:p=""}=typeof r=="string"?Ul(r):r,_;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?_=im(d.substring(1),"/"):_=im(d,f)):_=f,{pathname:_,search:w_(c),hash:j_(p)}}function im(r,f){let d=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Ou(r,f,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N_(r){return r.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function fm(r){let f=N_(r);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function dm(r,f,d,c=!1){let p;typeof r=="string"?p=Ul(r):(p={...r},Ae(!p.pathname||!p.pathname.includes("?"),Ou("?","pathname","search",p)),Ae(!p.pathname||!p.pathname.includes("#"),Ou("#","pathname","hash",p)),Ae(!p.search||!p.search.includes("#"),Ou("#","search","hash",p)));let _=r===""||p.pathname==="",x=_?"/":p.pathname,R;if(x==null)R=d;else{let A=f.length-1;if(!c&&x.startsWith("..")){let U=x.split("/");for(;U[0]==="..";)U.shift(),A-=1;p.pathname=U.join("/")}R=A>=0?f[A]:"/"}let v=T_(p,R),h=x&&x!=="/"&&x.endsWith("/"),C=(_||x===".")&&d.endsWith("/");return!v.pathname.endsWith("/")&&(h||C)&&(v.pathname+="/"),v}var aa=r=>r.join("/").replace(/\/\/+/g,"/"),A_=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),w_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,j_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,R_=class{constructor(r,f,d,c=!1){this.status=r,this.statusText=f||"",this.internal=c,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function C_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function D_(r){return r.map(f=>f.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pm(r,f){let d=r;if(typeof d!="string"||!E_.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let c=d,p=!1;if(mm)try{let _=new URL(window.location.href),x=d.startsWith("//")?new URL(_.protocol+d):new URL(d),R=la(x.pathname,f);x.origin===_.origin&&R!=null?d=R+x.search+x.hash:p=!0}catch{Ut(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:p,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hm=["POST","PUT","PATCH","DELETE"];new Set(hm);var O_=["GET",...hm];new Set(O_);var Hl=w.createContext(null);Hl.displayName="DataRouter";var ss=w.createContext(null);ss.displayName="DataRouterState";var z_=w.createContext(!1),_m=w.createContext({isTransitioning:!1});_m.displayName="ViewTransition";var M_=w.createContext(new Map);M_.displayName="Fetchers";var U_=w.createContext(null);U_.displayName="Await";var Nt=w.createContext(null);Nt.displayName="Navigation";var Un=w.createContext(null);Un.displayName="Location";var Ht=w.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var Bu=w.createContext(null);Bu.displayName="RouteError";var gm="REACT_ROUTER_ERROR",H_="REDIRECT",L_="ROUTE_ERROR_RESPONSE";function B_(r){if(r.startsWith(`${gm}:${H_}:{`))try{let f=JSON.parse(r.slice(28));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.location=="string"&&typeof f.reloadDocument=="boolean"&&typeof f.replace=="boolean")return f}catch{}}function q_(r){if(r.startsWith(`${gm}:${L_}:{`))try{let f=JSON.parse(r.slice(40));if(typeof f=="object"&&f&&typeof f.status=="number"&&typeof f.statusText=="string")return new R_(f.status,f.statusText,f.data)}catch{}}function Y_(r,{relative:f}={}){Ae(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=w.useContext(Nt),{hash:p,pathname:_,search:x}=Ln(r,{relative:f}),R=_;return d!=="/"&&(R=_==="/"?d:aa([d,_])),c.createHref({pathname:R,search:x,hash:p})}function Hn(){return w.useContext(Un)!=null}function Wa(){return Ae(Hn(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Un).location}var ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(r){w.useContext(Nt).static||w.useLayoutEffect(r)}function k_(){let{isDataRoute:r}=w.useContext(Ht);return r?t0():G_()}function G_(){Ae(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let r=w.useContext(Hl),{basename:f,navigator:d}=w.useContext(Nt),{matches:c}=w.useContext(Ht),{pathname:p}=Wa(),_=JSON.stringify(fm(c)),x=w.useRef(!1);return vm(()=>{x.current=!0}),w.useCallback((v,h={})=>{if(Ut(x.current,ym),!x.current)return;if(typeof v=="number"){d.go(v);return}let C=dm(v,JSON.parse(_),p,h.relative==="path");r==null&&f!=="/"&&(C.pathname=C.pathname==="/"?f:aa([f,C.pathname])),(h.replace?d.replace:d.push)(C,h.state,h)},[f,d,_,p,r])}w.createContext(null);function V_(){let{matches:r}=w.useContext(Ht),f=r[r.length-1];return f?f.params:{}}function Ln(r,{relative:f}={}){let{matches:d}=w.useContext(Ht),{pathname:c}=Wa(),p=JSON.stringify(fm(d));return w.useMemo(()=>dm(r,JSON.parse(p),c,f==="path"),[r,p,c,f])}function X_(r,f){return bm(r,f)}function bm(r,f,d,c,p){Ae(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=w.useContext(Nt),{matches:x}=w.useContext(Ht),R=x[x.length-1],v=R?R.params:{},h=R?R.pathname:"/",C=R?R.pathnameBase:"/",A=R&&R.route;{let k=A&&A.path||"";Sm(h,!A||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let U=Wa(),X;if(f){let k=typeof f=="string"?Ul(f):f;Ae(C==="/"||k.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${k.pathname}" was given in the \`location\` prop.`),X=k}else X=U;let B=X.pathname||"/",q=B;if(C!=="/"){let k=C.replace(/^\//,"").split("/");q="/"+B.replace(/^\//,"").split("/").slice(k.length).join("/")}let G=um(r,{pathname:q});Ut(A||G!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Ut(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=J_(G&&G.map(k=>Object.assign({},k,{params:Object.assign({},v,k.params),pathname:aa([C,_.encodeLocation?_.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?C:aa([C,_.encodeLocation?_.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),x,d,c,p);return f&&K?w.createElement(Un.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},K):K}function Q_(){let r=e0(),f=C_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:c},_={padding:"2px 4px",backgroundColor:c},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:_},"ErrorBoundary")," or"," ",w.createElement("code",{style:_},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},f),d?w.createElement("pre",{style:p},d):null,x)}var Z_=w.createElement(Q_,null),xm=class extends w.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){this.props.onError?this.props.onError(r,f):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=q_(r.digest);d&&(r=d)}let f=r!==void 0?w.createElement(Ht.Provider,{value:this.props.routeContext},w.createElement(Bu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?w.createElement(K_,{error:r},f):f}};xm.contextType=z_;var zu=new WeakMap;function K_({children:r,error:f}){let{basename:d}=w.useContext(Nt);if(typeof f=="object"&&f&&"digest"in f&&typeof f.digest=="string"){let c=B_(f.digest);if(c){let p=zu.get(f);if(p)throw p;let _=pm(c.location,d);if(mm&&!zu.get(f))if(_.isExternal||c.reloadDocument)window.location.href=_.absoluteURL||_.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(_.to,{replace:c.replace}));throw zu.set(f,x),x}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${_.absoluteURL||_.to}`})}}return r}function F_({routeContext:r,match:f,children:d}){let c=w.useContext(Hl);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),w.createElement(Ht.Provider,{value:r},d)}function J_(r,f=[],d=null,c=null,p=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let _=r,x=d?.errors;if(x!=null){let C=_.findIndex(A=>A.route.id&&x?.[A.route.id]!==void 0);Ae(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),_=_.slice(0,Math.min(_.length,C+1))}let R=!1,v=-1;if(d)for(let C=0;C<_.length;C++){let A=_[C];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(v=C),A.route.id){let{loaderData:U,errors:X}=d,B=A.route.loader&&!U.hasOwnProperty(A.route.id)&&(!X||X[A.route.id]===void 0);if(A.route.lazy||B){R=!0,v>=0?_=_.slice(0,v+1):_=[_[0]];break}}}let h=d&&c?(C,A)=>{c(C,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:D_(d.matches),errorInfo:A})}:void 0;return _.reduceRight((C,A,U)=>{let X,B=!1,q=null,G=null;d&&(X=x&&A.route.id?x[A.route.id]:void 0,q=A.route.errorElement||Z_,R&&(v<0&&U===0?(Sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,G=null):v===U&&(B=!0,G=A.route.hydrateFallbackElement||null)));let K=f.concat(_.slice(0,U+1)),k=()=>{let J;return X?J=q:B?J=G:A.route.Component?J=w.createElement(A.route.Component,null):A.route.element?J=A.route.element:J=C,w.createElement(F_,{match:A,routeContext:{outlet:C,matches:K,isDataRoute:d!=null},children:J})};return d&&(A.route.ErrorBoundary||A.route.errorElement||U===0)?w.createElement(xm,{location:d.location,revalidation:d.revalidation,component:q,error:X,children:k(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:h}):k()},null)}function qu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W_(r){let f=w.useContext(Hl);return Ae(f,qu(r)),f}function $_(r){let f=w.useContext(ss);return Ae(f,qu(r)),f}function P_(r){let f=w.useContext(Ht);return Ae(f,qu(r)),f}function Yu(r){let f=P_(r),d=f.matches[f.matches.length-1];return Ae(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function I_(){return Yu("useRouteId")}function e0(){let r=w.useContext(Bu),f=$_("useRouteError"),d=Yu("useRouteError");return r!==void 0?r:f.errors?.[d]}function t0(){let{router:r}=W_("useNavigate"),f=Yu("useNavigate"),d=w.useRef(!1);return vm(()=>{d.current=!0}),w.useCallback(async(p,_={})=>{Ut(d.current,ym),d.current&&(typeof p=="number"?await r.navigate(p):await r.navigate(p,{fromRouteId:f,..._}))},[r,f])}var sm={};function Sm(r,f,d){!f&&!sm[r]&&(sm[r]=!0,Ut(!1,d))}w.memo(a0);function a0({routes:r,future:f,state:d,onError:c}){return bm(r,void 0,d,c,f)}function Ja(r){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l0({basename:r="/",children:f=null,location:d,navigationType:c="POP",navigator:p,static:_=!1,unstable_useTransitions:x}){Ae(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let R=r.replace(/^\/*/,"/"),v=w.useMemo(()=>({basename:R,navigator:p,static:_,unstable_useTransitions:x,future:{}}),[R,p,_,x]);typeof d=="string"&&(d=Ul(d));let{pathname:h="/",search:C="",hash:A="",state:U=null,key:X="default"}=d,B=w.useMemo(()=>{let q=la(h,R);return q==null?null:{location:{pathname:q,search:C,hash:A,state:U,key:X},navigationType:c}},[R,h,C,A,U,X,c]);return Ut(B!=null,`<Router basename="${R}"> is not able to match the URL "${h}${C}${A}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:w.createElement(Nt.Provider,{value:v},w.createElement(Un.Provider,{children:f,value:B}))}function n0({children:r,location:f}){return X_(Hu(r),f)}function Hu(r,f=[]){let d=[];return w.Children.forEach(r,(c,p)=>{if(!w.isValidElement(c))return;let _=[...f,p];if(c.type===w.Fragment){d.push.apply(d,Hu(c.props.children,_));return}Ae(c.type===Ja,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!c.props.index||!c.props.children,"An index route cannot have child routes.");let x={id:c.props.id||_.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(x.children=Hu(c.props.children,_)),d.push(x)}),d}var ls="get",ns="application/x-www-form-urlencoded";function rs(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function i0(r){return rs(r)&&r.tagName.toLowerCase()==="button"}function s0(r){return rs(r)&&r.tagName.toLowerCase()==="form"}function r0(r){return rs(r)&&r.tagName.toLowerCase()==="input"}function u0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function c0(r,f){return r.button===0&&(!f||f==="_self")&&!u0(r)}var as=null;function o0(){if(as===null)try{new FormData(document.createElement("form"),0),as=!1}catch{as=!0}return as}var f0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mu(r){return r!=null&&!f0.has(r)?(Ut(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ns}"`),null):r}function d0(r,f){let d,c,p,_,x;if(s0(r)){let R=r.getAttribute("action");c=R?la(R,f):null,d=r.getAttribute("method")||ls,p=Mu(r.getAttribute("enctype"))||ns,_=new FormData(r)}else if(i0(r)||r0(r)&&(r.type==="submit"||r.type==="image")){let R=r.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=r.getAttribute("formaction")||R.getAttribute("action");if(c=v?la(v,f):null,d=r.getAttribute("formmethod")||R.getAttribute("method")||ls,p=Mu(r.getAttribute("formenctype"))||Mu(R.getAttribute("enctype"))||ns,_=new FormData(R,r),!o0()){let{name:h,type:C,value:A}=r;if(C==="image"){let U=h?`${h}.`:"";_.append(`${U}x`,"0"),_.append(`${U}y`,"0")}else h&&_.append(h,A)}}else{if(rs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ls,c=null,p=ns,x=r}return _&&p==="text/plain"&&(x=_,_=void 0),{action:c,method:d.toLowerCase(),encType:p,formData:_,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ku(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function m0(r,f,d,c){let p=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${c}`:p.pathname=`${p.pathname}.${c}`:p.pathname==="/"?p.pathname=`_root.${c}`:f&&la(p.pathname,f)==="/"?p.pathname=`${f.replace(/\/$/,"")}/_root.${c}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${c}`,p}async function p0(r,f){if(r.id in f)return f[r.id];try{let d=await import(r.module);return f[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function _0(r,f,d){let c=await Promise.all(r.map(async p=>{let _=f.routes[p.route.id];if(_){let x=await p0(_,d);return x.links?x.links():[]}return[]}));return b0(c.flat(1).filter(h0).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function rm(r,f,d,c,p,_){let x=(v,h)=>d[h]?v.route.id!==d[h].route.id:!0,R=(v,h)=>d[h].pathname!==v.pathname||d[h].route.path?.endsWith("*")&&d[h].params["*"]!==v.params["*"];return _==="assets"?f.filter((v,h)=>x(v,h)||R(v,h)):_==="data"?f.filter((v,h)=>{let C=c.routes[v.route.id];if(!C||!C.hasLoader)return!1;if(x(v,h)||R(v,h))return!0;if(v.route.shouldRevalidate){let A=v.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function g0(r,f,{includeHydrateFallback:d}={}){return y0(r.map(c=>{let p=f.routes[c.route.id];if(!p)return[];let _=[p.module];return p.clientActionModule&&(_=_.concat(p.clientActionModule)),p.clientLoaderModule&&(_=_.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(_=_.concat(p.hydrateFallbackModule)),p.imports&&(_=_.concat(p.imports)),_}).flat(1))}function y0(r){return[...new Set(r)]}function v0(r){let f={},d=Object.keys(r).sort();for(let c of d)f[c]=r[c];return f}function b0(r,f){let d=new Set;return new Set(f),r.reduce((c,p)=>{let _=JSON.stringify(v0(p));return d.has(_)||(d.add(_),c.push({key:_,link:p})),c},[])}function Em(){let r=w.useContext(Hl);return ku(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function x0(){let r=w.useContext(ss);return ku(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Gu=w.createContext(void 0);Gu.displayName="FrameworkContext";function Tm(){let r=w.useContext(Gu);return ku(r,"You must render this element inside a <HydratedRouter> element"),r}function S0(r,f){let d=w.useContext(Gu),[c,p]=w.useState(!1),[_,x]=w.useState(!1),{onFocus:R,onBlur:v,onMouseEnter:h,onMouseLeave:C,onTouchStart:A}=f,U=w.useRef(null);w.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let q=K=>{K.forEach(k=>{x(k.isIntersecting)})},G=new IntersectionObserver(q,{threshold:.5});return U.current&&G.observe(U.current),()=>{G.disconnect()}}},[r]),w.useEffect(()=>{if(c){let q=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(q)}}},[c]);let X=()=>{p(!0)},B=()=>{p(!1),x(!1)};return d?r!=="intent"?[_,U,{}]:[_,U,{onFocus:zn(R,X),onBlur:zn(v,B),onMouseEnter:zn(h,X),onMouseLeave:zn(C,B),onTouchStart:zn(A,X)}]:[!1,U,{}]}function zn(r,f){return d=>{r&&r(d),d.defaultPrevented||f(d)}}function E0({page:r,...f}){let{router:d}=Em(),c=w.useMemo(()=>um(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?w.createElement(N0,{page:r,matches:c,...f}):null}function T0(r){let{manifest:f,routeModules:d}=Tm(),[c,p]=w.useState([]);return w.useEffect(()=>{let _=!1;return _0(r,f,d).then(x=>{_||p(x)}),()=>{_=!0}},[r,f,d]),c}function N0({page:r,matches:f,...d}){let c=Wa(),{future:p,manifest:_,routeModules:x}=Tm(),{basename:R}=Em(),{loaderData:v,matches:h}=x0(),C=w.useMemo(()=>rm(r,f,h,_,c,"data"),[r,f,h,_,c]),A=w.useMemo(()=>rm(r,f,h,_,c,"assets"),[r,f,h,_,c]),U=w.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let q=new Set,G=!1;if(f.forEach(k=>{let J=_.routes[k.route.id];!J||!J.hasLoader||(!C.some(xe=>xe.route.id===k.route.id)&&k.route.id in v&&x[k.route.id]?.shouldRevalidate||J.hasClientLoader?G=!0:q.add(k.route.id))}),q.size===0)return[];let K=m0(r,R,p.unstable_trailingSlashAwareDataRequests,"data");return G&&q.size>0&&K.searchParams.set("_routes",f.filter(k=>q.has(k.route.id)).map(k=>k.route.id).join(",")),[K.pathname+K.search]},[R,p.unstable_trailingSlashAwareDataRequests,v,c,_,C,f,r,x]),X=w.useMemo(()=>g0(A,_),[A,_]),B=T0(A);return w.createElement(w.Fragment,null,U.map(q=>w.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...d})),X.map(q=>w.createElement("link",{key:q,rel:"modulepreload",href:q,...d})),B.map(({key:q,link:G})=>w.createElement("link",{key:q,nonce:d.nonce,...G,crossOrigin:G.crossOrigin??d.crossOrigin})))}function A0(...r){return f=>{r.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var w0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w0&&(window.__reactRouterVersion="7.13.0")}catch{}function j0({basename:r,children:f,unstable_useTransitions:d,window:c}){let p=w.useRef();p.current==null&&(p.current=s_({window:c,v5Compat:!0}));let _=p.current,[x,R]=w.useState({action:_.action,location:_.location}),v=w.useCallback(h=>{d===!1?R(h):w.startTransition(()=>R(h))},[d]);return w.useLayoutEffect(()=>_.listen(v),[_,v]),w.createElement(l0,{basename:r,children:f,location:x.location,navigationType:x.action,navigator:_,unstable_useTransitions:d})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=w.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:p,reloadDocument:_,replace:x,state:R,target:v,to:h,preventScrollReset:C,viewTransition:A,unstable_defaultShouldRevalidate:U,...X},B){let{basename:q,unstable_useTransitions:G}=w.useContext(Nt),K=typeof h=="string"&&Nm.test(h),k=pm(h,q);h=k.to;let J=Y_(h,{relative:p}),[xe,be,we]=S0(c,X),P=O0(h,{replace:x,state:R,target:v,preventScrollReset:C,relative:p,viewTransition:A,unstable_defaultShouldRevalidate:U,unstable_useTransitions:G});function Ce(pt){f&&f(pt),pt.defaultPrevented||P(pt)}let ke=w.createElement("a",{...X,...we,href:k.absoluteURL||J,onClick:k.isExternal||_?f:Ce,ref:A0(B,be),target:v,"data-discover":!K&&d==="render"?"true":void 0});return xe&&!K?w.createElement(w.Fragment,null,ke,w.createElement(E0,{page:J})):ke});Ne.displayName="Link";var R0=w.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:p=!1,style:_,to:x,viewTransition:R,children:v,...h},C){let A=Ln(x,{relative:h.relative}),U=Wa(),X=w.useContext(ss),{navigator:B,basename:q}=w.useContext(Nt),G=X!=null&&L0(A)&&R===!0,K=B.encodeLocation?B.encodeLocation(A).pathname:A.pathname,k=U.pathname,J=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(k=k.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=la(J,q)||J);const xe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let be=k===K||!p&&k.startsWith(K)&&k.charAt(xe)==="/",we=J!=null&&(J===K||!p&&J.startsWith(K)&&J.charAt(K.length)==="/"),P={isActive:be,isPending:we,isTransitioning:G},Ce=be?f:void 0,ke;typeof c=="function"?ke=c(P):ke=[c,be?"active":null,we?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let pt=typeof _=="function"?_(P):_;return w.createElement(Ne,{...h,"aria-current":Ce,className:ke,ref:C,style:pt,to:x,viewTransition:R},typeof v=="function"?v(P):v)});R0.displayName="NavLink";var C0=w.forwardRef(({discover:r="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:p,state:_,method:x=ls,action:R,onSubmit:v,relative:h,preventScrollReset:C,viewTransition:A,unstable_defaultShouldRevalidate:U,...X},B)=>{let{unstable_useTransitions:q}=w.useContext(Nt),G=U0(),K=H0(R,{relative:h}),k=x.toLowerCase()==="get"?"get":"post",J=typeof R=="string"&&Nm.test(R),xe=be=>{if(v&&v(be),be.defaultPrevented)return;be.preventDefault();let we=be.nativeEvent.submitter,P=we?.getAttribute("formmethod")||x,Ce=()=>G(we||be.currentTarget,{fetcherKey:f,method:P,navigate:d,replace:p,state:_,relative:h,preventScrollReset:C,viewTransition:A,unstable_defaultShouldRevalidate:U});q&&d!==!1?w.startTransition(()=>Ce()):Ce()};return w.createElement("form",{ref:B,method:k,action:K,onSubmit:c?v:xe,...X,"data-discover":!J&&r==="render"?"true":void 0})});C0.displayName="Form";function D0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Am(r){let f=w.useContext(Hl);return Ae(f,D0(r)),f}function O0(r,{target:f,replace:d,state:c,preventScrollReset:p,relative:_,viewTransition:x,unstable_defaultShouldRevalidate:R,unstable_useTransitions:v}={}){let h=k_(),C=Wa(),A=Ln(r,{relative:_});return w.useCallback(U=>{if(c0(U,f)){U.preventDefault();let X=d!==void 0?d:Mn(C)===Mn(A),B=()=>h(r,{replace:X,state:c,preventScrollReset:p,relative:_,viewTransition:x,unstable_defaultShouldRevalidate:R});v?w.startTransition(()=>B()):B()}},[C,h,A,d,c,f,r,p,_,x,R,v])}var z0=0,M0=()=>`__${String(++z0)}__`;function U0(){let{router:r}=Am("useSubmit"),{basename:f}=w.useContext(Nt),d=I_(),c=r.fetch,p=r.navigate;return w.useCallback(async(_,x={})=>{let{action:R,method:v,encType:h,formData:C,body:A}=d0(_,f);if(x.navigate===!1){let U=x.fetcherKey||M0();await c(U,d,x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:C,body:A,formMethod:x.method||v,formEncType:x.encType||h,flushSync:x.flushSync})}else await p(x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:C,body:A,formMethod:x.method||v,formEncType:x.encType||h,replace:x.replace,state:x.state,fromRouteId:d,flushSync:x.flushSync,viewTransition:x.viewTransition})},[c,p,f,d])}function H0(r,{relative:f}={}){let{basename:d}=w.useContext(Nt),c=w.useContext(Ht);Ae(c,"useFormAction must be used inside a RouteContext");let[p]=c.matches.slice(-1),_={...Ln(r||".",{relative:f})},x=Wa();if(r==null){_.search=x.search;let R=new URLSearchParams(_.search),v=R.getAll("index");if(v.some(C=>C==="")){R.delete("index"),v.filter(A=>A).forEach(A=>R.append("index",A));let C=R.toString();_.search=C?`?${C}`:""}}return(!r||r===".")&&p.route.index&&(_.search=_.search?_.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(_.pathname=_.pathname==="/"?d:aa([d,_.pathname])),Mn(_)}function L0(r,{relative:f}={}){let d=w.useContext(_m);Ae(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Am("useViewTransitionState"),p=Ln(r,{relative:f});if(!d.isTransitioning)return!1;let _=la(d.currentLocation.pathname,c)||d.currentLocation.pathname,x=la(d.nextLocation.pathname,c)||d.nextLocation.pathname;return is(p.pathname,x)!=null||is(p.pathname,_)!=null}const B0=()=>{const[r,f]=w.useState(!1),d=()=>{f(!r)},c=()=>{f(!1)};return u.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700",children:[u.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[u.jsxs(Ne,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:c,children:[u.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:u.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),u.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),u.jsxs("button",{onClick:d,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[u.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"rotate-45 translate-y-2":""}`}),u.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"opacity-0":""}`}),u.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${r?"-rotate-45 -translate-y-2":""}`})]}),u.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[u.jsx("li",{children:u.jsx(Ne,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),r&&u.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:u.jsxs("ul",{className:"flex flex-col space-y-0",children:[u.jsx("li",{children:u.jsx(Ne,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:c,children:"Home"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:c,children:"About"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:c,children:"Projects"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:c,children:"Resume"})}),u.jsx("li",{children:u.jsx(Ne,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:c,children:"Contact"})})]})})]})},q0=()=>u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[u.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center",children:[u.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[u.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),u.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[u.jsx(Ne,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),u.jsx(Ne,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]}),u.jsxs("div",{className:"relative h-64 sm:h-80 md:h-96 mt-8 md:mt-0 md:block",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),u.jsx("div",{className:"relative h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:u.jsx("img",{src:"/portfolio_website/good_boy_pic2.jpeg",alt:"Profile",className:"object-cover w-full h-full rounded-lg"})})]})]})})}),u.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),u.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[u.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[u.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:u.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),u.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[u.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),u.jsx("p",{className:"text-slate-300 text-sm",children:"Built a Python-based automated trading framework with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, and Alpaca API order execution."}),u.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[u.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),u.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),u.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSockets"}),u.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),u.jsx(Ne,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),u.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[u.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:u.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),u.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[u.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),u.jsx("p",{className:"text-slate-300 text-sm",children:"Developed an XGBoost regression pipeline using historical NFL data, engineered rolling workload and efficiency features, and evaluated performance on out-of-sample seasons."}),u.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[u.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),u.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),u.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Feature Engineering"})]}),u.jsx(Ne,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),u.jsx("div",{className:"text-center mt-8 md:mt-12",children:u.jsx(Ne,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),u.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(r=>u.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:u.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:r})},r))})]})}),u.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),u.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),u.jsx(Ne,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),Y0=()=>u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),u.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),u.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),u.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:u.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),u.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),u.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),u.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),u.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),u.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),u.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),u.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),u.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),u.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),u.jsx("div",{className:"space-y-6",children:u.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),u.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),u.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),u.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[u.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),u.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),u.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),u.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[u.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),u.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),u.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),u.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),u.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),u.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[u.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),u.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),u.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),u.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),u.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),u.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),u.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),u.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),u.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),u.jsx("span",{className:"text-slate-300 text-sm",children:r})]},r))})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),u.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),u.jsx("span",{className:"text-slate-300",children:r})]},r))})]}),u.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[u.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),u.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(r=>u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),u.jsx("span",{className:"text-slate-300",children:r})]},r))})]})]})]})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[u.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),u.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),u.jsx(Ne,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),k0=()=>{const[r,f]=w.useState("all"),[d,c]=w.useState(new Set),p=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"27.8 yards"},{label:"R² Score",value:"0.46"},{label:"Classification ROC-AUC",value:"0.626"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["Feature engineering from historical game data","Out-of-sample validation on full season","Classification model for over/under predictions","Actionable insights for sports analytics"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Tastytrade dxFeed"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["Real-time market data streaming via Tastytrade dxFeed WebSocket","Pluggable strategy architecture with async event loop","Alpaca API for automated order execution","Position tracking with entry/exit prices and P&L","Daily auto-shutdown at market close","Configurable timeframes and data requirements"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"XGBoost model for predicting volatility breakouts in SPY options",fullDesc:"Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Binary classification for volatility breakout prediction","Parallel label generation for large datasets","Model calibration analysis with Brier score and log loss","Feature engineering with interaction terms"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"/",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]}],_=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],x=r==="all"?p:p.filter(v=>v.category===r),R=v=>{c(h=>{const C=new Set(h);return C.has(v)?C.delete(v):C.add(v),C})};return u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),u.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),u.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),u.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[u.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),u.jsx("select",{id:"category-filter",value:r,onChange:v=>f(v.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:_.map(v=>u.jsx("option",{value:v.value,children:v.label},v.value))}),u.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",x.length," project",x.length!==1?"s":""]})]})})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:x.length===0?u.jsx("div",{className:"text-center py-12",children:u.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:x.map(v=>u.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[u.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:u.jsx("span",{className:"text-6xl",children:v.image})}),u.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[u.jsx("div",{className:"mb-3",children:u.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:_.find(h=>h.value===v.category)?.label})}),u.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:v.title}),u.jsx("p",{className:"text-slate-400 text-sm mb-4",children:v.shortDesc}),u.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:v.fullDesc}),u.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:v.metrics.map((h,C)=>u.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[u.jsx("p",{className:"text-slate-400 text-xs mb-1",children:h.label}),u.jsx("p",{className:"text-white font-bold text-sm",children:h.value})]},C))}),u.jsxs("div",{className:"mb-6",children:[u.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:v.technologies.map(h=>u.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:h},h))})]}),u.jsxs("div",{className:"mb-6",children:[u.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),u.jsx("ul",{className:"space-y-1",children:(d.has(v.id)?v.highlights:v.highlights.slice(0,3)).map((h,C)=>u.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[u.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),u.jsx("span",{children:h})]},C))}),v.highlights.length>3&&u.jsx("button",{onClick:()=>R(v.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:d.has(v.id)?"- Show Less":`+ Show ${v.highlights.length-3} More`})]}),u.jsxs("div",{className:"flex gap-4 mt-auto",children:[u.jsx("a",{href:v.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),u.jsx(Ne,{to:v.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},v.id))})})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[u.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),u.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),u.jsx(Ne,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},G0=({label:r,description:f,code:d,language:c="python"})=>{const[p,_]=w.useState(!1),x=()=>{navigator.clipboard.writeText(d),_(!0),setTimeout(()=>_(!1),2e3)};return u.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[u.jsxs("div",{className:"bg-slate-800 px-6 py-4 border-b border-slate-600",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:r}),u.jsx("p",{className:"text-slate-300 text-sm",children:f})]}),u.jsxs("div",{className:"relative",children:[u.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:u.jsx("code",{children:d})}),u.jsx("button",{onClick:x,className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:p?"✓ Copied":"Copy"})]})]})},V0={id:"1",title:"Sports Analytics Predictions – Code Demo",description:"Explore the implementation of an NFL rushing yards prediction pipeline, including feature engineering and modeling. Results are below code samples",codeSamples:[{label:"Feature Engineering",description:"Rolling window features for workload, efficiency, momentum, and volatility metrics",code:`import pandas as pd

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

`}],plots:[{title:"Feature Importance",description:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Top predictive features learned by the model provide insight into which variables have the greatest impact on predicting rushing yards."}),u.jsx("p",{children:"For the features not defined earlier:"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("b",{children:"starter_flag"}),": player started that game"]}),u.jsxs("li",{children:[u.jsx("b",{children:"off_breakaway_rate_5_ma"}),": average count of rushes > 40 yards last 5 games / average carries last 5 games"]}),u.jsxs("li",{children:[u.jsx("b",{children:"team_dependency"}),": pct_of_carries_5ma / (others_rush_attempts_5ma + 10",u.jsx("sup",{children:"-6"}),")"]}),u.jsxs("li",{children:[u.jsx("b",{children:"explosive_index"}),": 0.5 * off_explosive_rate_5_ma + 0.3 * off_breakaway_rate_5_ma + 0.2 * rushes_16_to_20_5_ma_share + 0.1 * rushes_21_plus_5_ma_share"]}),u.jsxs("li",{children:[u.jsx("b",{children:"off_explosive_rate_5_ma"}),": average count of rushes ≥ 11 yards last 5 games / average count of rushes"]}),u.jsxs("li",{children:[u.jsx("b",{children:"rushes_16_to_20_5_ma_share"}),": proportion of rushes between 16 and 20 yards last 5 games / average carries"]}),u.jsxs("li",{children:[u.jsx("b",{children:"rushes_21_plus_5_ma_share"}),": proportion of rushes ≥ 21 yards last 5 games / average carries"]}),u.jsxs("li",{children:[u.jsx("b",{children:"rush_yards_rank_pct"}),": rank of rush yards for that season normalized by max rank"]})]})]}),imageUrl:"/portfolio_website/rush_yard_featureImportance.png"},{title:"Residual Errors of NFL Rushing Yards",description:u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["This histogram shows the distribution of prediction errors (",u.jsx("em",{children:"predicted minus actual rushing yards"}),") across NFL games."]}),u.jsx("p",{children:"Errors are centered close to zero, indicating little overall bias, while the right-skewed tail and occasional large negative errors reveal games where the model significantly over- or under-estimated rushing output."}),u.jsx("p",{children:"The vertical reference lines mark perfect prediction, mean error, and median error, helping illustrate both typical performance and the presence of outlier games."})]}),imageUrl:"/portfolio_website/error_NFL.png"},{title:"Actual vs Predicted NFL Rushing Yards",description:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"This chart shows the weekly predicted rushing yards compared to actual results for four standout players throughout the 2024 season"}),u.jsx("p",{className:"text-sm text-slate-400 mt-4",children:"Click image to navigate player-specific error distributions →"})]}),imageUrl:"/portfolio_website/bijan_err.png",imageUrls:[{url:"/portfolio_website/bijan_err.png",label:"Bijan Robinson"},{url:"/portfolio_website/henry_error.png",label:"Derrick Henry"},{url:"/portfolio_website/saquon_err.png",label:"Saquon Barkley"},{url:"/portfolio_website/taylor_err.png",label:"Jonathan Taylor"}]}]},X0={id:"2",title:"Live Trading Framework - Code Demo",description:"Python-based automated trading system implementation",codeSamples:[{label:"Initial Setup and ansyncio Loop",description:"Python-based live trading system with async event loop",code:`"""
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
            return 0.0`}],plots:[{title:"Trading Performance",description:"Cumulative returns and drawdown analysis",imageUrl:"https://via.placeholder.com/600x400?text=Trading+Performance"},{title:"Signal Accuracy",description:"Win rate and profit factor by signal type",imageUrl:"https://via.placeholder.com/600x400?text=Signal+Accuracy"},{title:"Risk Metrics",description:"Sharpe ratio and maximum drawdown over time",imageUrl:"https://via.placeholder.com/600x400?text=Risk+Metrics"}]},Q0={id:"3",title:"Volatility Breakout Prediction – Code Demo",description:"XGBoost model predicting when SPY will move 5x the expanding average true range (measured from market open) within 30 minutes. Achieved 0.686 ROC-AUC on one year of minute-level data.",codeSamples:[{label:"Helper Functions & ATR Calculation",description:"RSI, ATR, and True Range calculations for volatility measurement",code:`import numpy as np
import pandas as pd

def calculate_rsi(prices: pd.Series, period: int = 14) -> pd.Series:
    """
    Calculate Relative Strength Index (RSI) - momentum oscillator measuring 
    speed and magnitude of price changes.
    RSI values range from 0-100, with >70 indicating overbought and <30 
    indicating oversold conditions.
    
    Args:
        prices: Series of closing prices
        period: Lookback window for RSI calculation (default: 14)
    
    Returns:
        Series of RSI values
    """
    delta = prices.diff()
    gain = (delta.where(delta > 0, 0)).rolling(
        window=period, min_periods=period
    ).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(
        window=period, min_periods=period
    ).mean()
    rs = gain / loss
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
    `}],plots:[{title:"Feature Importance Analysis",description:"XGBoost feature importance ranked by gain. ATR ratios and VWAP interactions dominate predictive power.",imageUrl:"/portfolio_website/featureImportanceVolatilityModel.png"},{title:"Model Calibration Curve",description:"Calibration analysis showing model's predicted probabilities vs actual breakout frequencies. Near-perfect calibration indicates reliable probability estimates.",imageUrl:"/portfolio_website/volatility_calibCurve.png"}]},Z0=()=>{const{projectId:r}=V_(),[f,d]=w.useState(null),[c,p]=w.useState(0),_=w.useRef({}),x=w.useRef(null),R=B=>{let q=_.current[B];if(B==="Visualizations & Results"&&(q=x.current),q){const k=q.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:k,behavior:"smooth"})}},h={1:V0,2:X0,3:Q0,4:{id:"3",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
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
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]}}[r||""];if(!h)return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),u.jsx(Ne,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const C=()=>{f?.imageUrls&&p(B=>(B-1+f.imageUrls.length)%f.imageUrls.length)},A=()=>{f?.imageUrls&&p(B=>(B+1)%f.imageUrls.length)},U=()=>f?f.imageUrls&&f.imageUrls.length>0?f.imageUrls[c].url:f.imageUrl:"",X=()=>f?.imageUrls?f.imageUrls[c]?.label:null;return u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[u.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx(Ne,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),u.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:h.title}),u.jsx("p",{className:"text-xl text-slate-300",children:h.description})]})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[h.codeSamples&&h.codeSamples.length>0&&u.jsx("div",{className:"lg:w-64 flex-shrink-0",children:u.jsxs("div",{className:"lg:sticky lg:top-8",children:[u.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),u.jsxs("div",{className:"flex flex-col gap-2",children:[h.codeSamples.map((B,q)=>u.jsx("button",{onClick:()=>R(B.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:B.label},q)),h.plots&&h.plots.length>0&&u.jsx("button",{onClick:()=>R("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"mb-20",children:[u.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),h.codeSamples.map((B,q)=>u.jsx("div",{ref:G=>{_.current[B.label]=G},children:u.jsx(G0,{label:B.label,description:B.description,code:B.code})},q))]}),u.jsxs("div",{ref:x,children:[u.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:h.plots.map((B,q)=>u.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{d(B),p(0)},children:[u.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:u.jsx("img",{src:B.imageUrl,alt:B.title,className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:B.title}),u.jsx("div",{className:"text-slate-300",children:B.description})]})]},q))})]})]})]})}),f&&u.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>d(null),children:u.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:B=>B.stopPropagation(),children:[u.jsx("button",{onClick:()=>d(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),u.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[u.jsx("img",{src:U(),alt:f.title,className:"w-full h-full object-contain"}),f.imageUrls&&f.imageUrls.length>1&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:C,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),u.jsx("button",{onClick:A,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),u.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[c+1," / ",f.imageUrls.length]})]})]}),u.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[u.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[f.title,X()&&u.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",X()]})]}),u.jsx("div",{className:"text-slate-300",children:f.description})]})]})})]})},K0=()=>{const[r,f]=w.useState({name:"",email:"",subject:"",message:""}),[d,c]=w.useState("idle"),[p,_]=w.useState(""),x=v=>{const{name:h,value:C}=v.target;f(A=>({...A,[h]:C}))},R=async v=>{v.preventDefault(),c("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(c("success"),f({name:"",email:"",subject:"",message:""}),setTimeout(()=>c("idle"),3e3)):(c("error"),_("Failed to send message. Please try again."))}catch{c("error"),_("An error occurred. Please try again later.")}};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:u.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsxs("div",{className:"text-center mb-12",children:[u.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),u.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),u.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:u.jsxs("form",{onSubmit:R,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),u.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),u.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),u.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),u.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:x,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),d==="success"&&u.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),d==="error"&&u.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:p}),u.jsx("button",{type:"submit",disabled:d==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:d==="loading"?"Sending...":"Send Message"})]})}),u.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[u.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),u.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),u.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),u.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[u.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),u.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),u.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),u.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[u.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),u.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),u.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},F0=()=>u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),u.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[u.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),u.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),u.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[u.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),u.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),u.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[u.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),u.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),u.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),u.jsxs("ul",{className:"space-y-2 text-slate-300",children:[u.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),u.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),u.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),u.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),u.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),u.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"ML Models for Trading"}),u.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[u.jsxs("p",{children:[u.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),u.jsxs("p",{children:[u.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),u.jsx("div",{className:"pt-4",children:u.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})}),J0=()=>u.jsxs(j0,{basename:"/portfolio_website",children:[u.jsx(B0,{}),u.jsx("div",{className:"pt-16",children:u.jsxs(n0,{children:[u.jsx(Ja,{path:"/",element:u.jsx(q0,{})}),u.jsx(Ja,{path:"/about",element:u.jsx(Y0,{})}),u.jsx(Ja,{path:"/projects",element:u.jsx(k0,{})}),u.jsx(Ja,{path:"/projects/project-demo/:projectId",element:u.jsx(Z0,{})}),u.jsx(Ja,{path:"/contact",element:u.jsx(K0,{})}),u.jsx(Ja,{path:"/resume",element:u.jsx(F0,{})})]})})]});i_.createRoot(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(J0,{})}));
