(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var Uo={exports:{}},Yn={};var Pf;function P_(){if(Pf)return Yn;Pf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,h){var x=null;if(h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),"key"in m){h={};for(var R in m)R!=="key"&&(h[R]=m[R])}else h=m;return m=h.ref,{$$typeof:o,type:u,key:x,ref:m!==void 0?m:null,props:h}}return Yn.Fragment=d,Yn.jsx=f,Yn.jsxs=f,Yn}var Wf;function W_(){return Wf||(Wf=1,Uo.exports=P_()),Uo.exports}var s=W_(),Ho={exports:{}},te={};var $f;function $_(){if($f)return te;$f=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),U=Symbol.iterator;function G(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,Y={};function Z(y,z,L){this.props=y,this.context=z,this.refs=Y,this.updater=L||B}Z.prototype.isReactComponent={},Z.prototype.setState=function(y,z){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,z,"setState")},Z.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function q(){}q.prototype=Z.prototype;function J(y,z,L){this.props=y,this.context=z,this.refs=Y,this.updater=L||B}var pe=J.prototype=new q;pe.constructor=J,k(pe,Z.prototype),pe.isPureReactComponent=!0;var _e=Array.isArray;function ye(){}var $={H:null,A:null,T:null,S:null},xe=Object.prototype.hasOwnProperty;function Ue(y,z,L){var X=L.ref;return{$$typeof:o,type:y,key:z,ref:X!==void 0?X:null,props:L}}function Ve(y,z){return Ue(y.type,z,y.props)}function lt(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function ke(y){var z={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(L){return z[L]})}var Lt=/\/+/g;function ft(y,z){return typeof y=="object"&&y!==null&&y.key!=null?ke(""+y.key):z.toString(36)}function nt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ye,ye):(y.status="pending",y.then(function(z){y.status==="pending"&&(y.status="fulfilled",y.value=z)},function(z){y.status==="pending"&&(y.status="rejected",y.reason=z)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function C(y,z,L,X,I){var ne=typeof y;(ne==="undefined"||ne==="boolean")&&(y=null);var ee=!1;if(y===null)ee=!0;else switch(ne){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(y.$$typeof){case o:case d:ee=!0;break;case j:return ee=y._init,C(ee(y._payload),z,L,X,I)}}if(ee)return I=I(y),ee=X===""?"."+ft(y,0):X,_e(I)?(L="",ee!=null&&(L=ee.replace(Lt,"$&/")+"/"),C(I,z,L,"",function(fa){return fa})):I!=null&&(lt(I)&&(I=Ve(I,L+(I.key==null||y&&y.key===I.key?"":(""+I.key).replace(Lt,"$&/")+"/")+ee)),z.push(I)),1;ee=0;var Qe=X===""?".":X+":";if(_e(y))for(var Ae=0;Ae<y.length;Ae++)X=y[Ae],ne=Qe+ft(X,Ae),ee+=C(X,z,L,ne,I);else if(Ae=G(y),typeof Ae=="function")for(y=Ae.call(y),Ae=0;!(X=y.next()).done;)X=X.value,ne=Qe+ft(X,Ae++),ee+=C(X,z,L,ne,I);else if(ne==="object"){if(typeof y.then=="function")return C(nt(y),z,L,X,I);throw z=String(y),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ee}function H(y,z,L){if(y==null)return y;var X=[],I=0;return C(y,X,"","",function(ne){return z.call(L,ne,I++)}),X}function P(y){if(y._status===-1){var z=y._result;z=z(),z.then(function(L){(y._status===0||y._status===-1)&&(y._status=1,y._result=L)},function(L){(y._status===0||y._status===-1)&&(y._status=2,y._result=L)}),y._status===-1&&(y._status=0,y._result=z)}if(y._status===1)return y._result.default;throw y._result}var he=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},de={map:H,forEach:function(y,z,L){H(y,function(){z.apply(this,arguments)},L)},count:function(y){var z=0;return H(y,function(){z++}),z},toArray:function(y){return H(y,function(z){return z})||[]},only:function(y){if(!lt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return te.Activity=N,te.Children=de,te.Component=Z,te.Fragment=f,te.Profiler=m,te.PureComponent=J,te.StrictMode=u,te.Suspense=v,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,te.__COMPILER_RUNTIME={__proto__:null,c:function(y){return $.H.useMemoCache(y)}},te.cache=function(y){return function(){return y.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(y,z,L){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var X=k({},y.props),I=y.key;if(z!=null)for(ne in z.key!==void 0&&(I=""+z.key),z)!xe.call(z,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&z.ref===void 0||(X[ne]=z[ne]);var ne=arguments.length-2;if(ne===1)X.children=L;else if(1<ne){for(var ee=Array(ne),Qe=0;Qe<ne;Qe++)ee[Qe]=arguments[Qe+2];X.children=ee}return Ue(y.type,I,X)},te.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},te.createElement=function(y,z,L){var X,I={},ne=null;if(z!=null)for(X in z.key!==void 0&&(ne=""+z.key),z)xe.call(z,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(I[X]=z[X]);var ee=arguments.length-2;if(ee===1)I.children=L;else if(1<ee){for(var Qe=Array(ee),Ae=0;Ae<ee;Ae++)Qe[Ae]=arguments[Ae+2];I.children=Qe}if(y&&y.defaultProps)for(X in ee=y.defaultProps,ee)I[X]===void 0&&(I[X]=ee[X]);return Ue(y,ne,I)},te.createRef=function(){return{current:null}},te.forwardRef=function(y){return{$$typeof:R,render:y}},te.isValidElement=lt,te.lazy=function(y){return{$$typeof:j,_payload:{_status:-1,_result:y},_init:P}},te.memo=function(y,z){return{$$typeof:_,type:y,compare:z===void 0?null:z}},te.startTransition=function(y){var z=$.T,L={};$.T=L;try{var X=y(),I=$.S;I!==null&&I(L,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ye,he)}catch(ne){he(ne)}finally{z!==null&&L.types!==null&&(z.types=L.types),$.T=z}},te.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},te.use=function(y){return $.H.use(y)},te.useActionState=function(y,z,L){return $.H.useActionState(y,z,L)},te.useCallback=function(y,z){return $.H.useCallback(y,z)},te.useContext=function(y){return $.H.useContext(y)},te.useDebugValue=function(){},te.useDeferredValue=function(y,z){return $.H.useDeferredValue(y,z)},te.useEffect=function(y,z){return $.H.useEffect(y,z)},te.useEffectEvent=function(y){return $.H.useEffectEvent(y)},te.useId=function(){return $.H.useId()},te.useImperativeHandle=function(y,z,L){return $.H.useImperativeHandle(y,z,L)},te.useInsertionEffect=function(y,z){return $.H.useInsertionEffect(y,z)},te.useLayoutEffect=function(y,z){return $.H.useLayoutEffect(y,z)},te.useMemo=function(y,z){return $.H.useMemo(y,z)},te.useOptimistic=function(y,z){return $.H.useOptimistic(y,z)},te.useReducer=function(y,z,L){return $.H.useReducer(y,z,L)},te.useRef=function(y){return $.H.useRef(y)},te.useState=function(y){return $.H.useState(y)},te.useSyncExternalStore=function(y,z,L){return $.H.useSyncExternalStore(y,z,L)},te.useTransition=function(){return $.H.useTransition()},te.version="19.2.3",te}var If;function Fo(){return If||(If=1,Ho.exports=$_()),Ho.exports}var E=Fo(),Lo={exports:{}},Gn={},ko={exports:{}},Bo={};var em;function I_(){return em||(em=1,(function(o){function d(C,H){var P=C.length;C.push(H);e:for(;0<P;){var he=P-1>>>1,de=C[he];if(0<m(de,H))C[he]=H,C[P]=de,P=he;else break e}}function f(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var H=C[0],P=C.pop();if(P!==H){C[0]=P;e:for(var he=0,de=C.length,y=de>>>1;he<y;){var z=2*(he+1)-1,L=C[z],X=z+1,I=C[X];if(0>m(L,P))X<de&&0>m(I,L)?(C[he]=I,C[X]=P,he=X):(C[he]=L,C[z]=P,he=z);else if(X<de&&0>m(I,P))C[he]=I,C[X]=P,he=X;else break e}}return H}function m(C,H){var P=C.sortIndex-H.sortIndex;return P!==0?P:C.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var x=Date,R=x.now();o.unstable_now=function(){return x.now()-R}}var v=[],_=[],j=1,N=null,U=3,G=!1,B=!1,k=!1,Y=!1,Z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function pe(C){for(var H=f(_);H!==null;){if(H.callback===null)u(_);else if(H.startTime<=C)u(_),H.sortIndex=H.expirationTime,d(v,H);else break;H=f(_)}}function _e(C){if(k=!1,pe(C),!B)if(f(v)!==null)B=!0,ye||(ye=!0,ke());else{var H=f(_);H!==null&&nt(_e,H.startTime-C)}}var ye=!1,$=-1,xe=5,Ue=-1;function Ve(){return Y?!0:!(o.unstable_now()-Ue<xe)}function lt(){if(Y=!1,ye){var C=o.unstable_now();Ue=C;var H=!0;try{e:{B=!1,k&&(k=!1,q($),$=-1),G=!0;var P=U;try{t:{for(pe(C),N=f(v);N!==null&&!(N.expirationTime>C&&Ve());){var he=N.callback;if(typeof he=="function"){N.callback=null,U=N.priorityLevel;var de=he(N.expirationTime<=C);if(C=o.unstable_now(),typeof de=="function"){N.callback=de,pe(C),H=!0;break t}N===f(v)&&u(v),pe(C)}else u(v);N=f(v)}if(N!==null)H=!0;else{var y=f(_);y!==null&&nt(_e,y.startTime-C),H=!1}}break e}finally{N=null,U=P,G=!1}H=void 0}}finally{H?ke():ye=!1}}}var ke;if(typeof J=="function")ke=function(){J(lt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,ft=Lt.port2;Lt.port1.onmessage=lt,ke=function(){ft.postMessage(null)}}else ke=function(){Z(lt,0)};function nt(C,H){$=Z(function(){C(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(C){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var P=U;U=H;try{return C()}finally{U=P}},o.unstable_requestPaint=function(){Y=!0},o.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=U;U=C;try{return H()}finally{U=P}},o.unstable_scheduleCallback=function(C,H,P){var he=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?he+P:he):P=he,C){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=P+de,C={id:j++,callback:H,priorityLevel:C,startTime:P,expirationTime:de,sortIndex:-1},P>he?(C.sortIndex=P,d(_,C),f(v)===null&&C===f(_)&&(k?(q($),$=-1):k=!0,nt(_e,P-he))):(C.sortIndex=de,d(v,C),B||G||(B=!0,ye||(ye=!0,ke()))),C},o.unstable_shouldYield=Ve,o.unstable_wrapCallback=function(C){var H=U;return function(){var P=U;U=H;try{return C.apply(this,arguments)}finally{U=P}}}})(Bo)),Bo}var tm;function eh(){return tm||(tm=1,ko.exports=I_()),ko.exports}var qo={exports:{}},Ie={};var am;function th(){if(am)return Ie;am=1;var o=Fo();function d(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)_+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(v,_,j){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:N==null?null:""+N,children:v,containerInfo:_,implementation:j}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ie.createPortal=function(v,_){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(d(299));return h(v,_,null,j)},Ie.flushSync=function(v){var _=x.T,j=u.p;try{if(x.T=null,u.p=2,v)return v()}finally{x.T=_,u.p=j,u.d.f()}},Ie.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,u.d.C(v,_))},Ie.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Ie.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var j=_.as,N=R(j,_.crossOrigin),U=typeof _.integrity=="string"?_.integrity:void 0,G=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;j==="style"?u.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:N,integrity:U,fetchPriority:G}):j==="script"&&u.d.X(v,{crossOrigin:N,integrity:U,fetchPriority:G,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ie.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var j=R(_.as,_.crossOrigin);u.d.M(v,{crossOrigin:j,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&u.d.M(v)},Ie.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var j=_.as,N=R(j,_.crossOrigin);u.d.L(v,j,{crossOrigin:N,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ie.preloadModule=function(v,_){if(typeof v=="string")if(_){var j=R(_.as,_.crossOrigin);u.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:j,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else u.d.m(v)},Ie.requestFormReset=function(v){u.d.r(v)},Ie.unstable_batchedUpdates=function(v,_){return v(_)},Ie.useFormState=function(v,_,j){return x.H.useFormState(v,_,j)},Ie.useFormStatus=function(){return x.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var lm;function ah(){if(lm)return qo.exports;lm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),qo.exports=th(),qo.exports}var nm;function lh(){if(nm)return Gn;nm=1;var o=eh(),d=Fo(),f=ah();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(u(188))}function _(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),e;if(i===l)return v(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,c=n.child;c;){if(c===a){r=!0,a=n,l=i;break}if(c===l){r=!0,l=n,a=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===a){r=!0,a=i,l=n;break}if(c===l){r=!0,l=i,a=n;break}c=c.sibling}if(!r)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,U=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),J=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Ue=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case _e:return"Suspense";case ye:return"SuspenseList";case Ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case J:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:ft(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return ft(e(t))}catch{}}return null}var nt=Array.isArray,C=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},he=[],de=-1;function y(e){return{current:e}}function z(e){0>de||(e.current=he[de],he[de]=null,de--)}function L(e,t){de++,he[de]=e.current,e.current=t}var X=y(null),I=y(null),ne=y(null),ee=y(null);function Qe(e,t){switch(L(ne,t),L(I,e),L(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vf(t),e=bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(X),L(X,e)}function Ae(){z(X),z(I),z(ne)}function fa(e){e.memoizedState!==null&&L(ee,e);var t=X.current,a=bf(t,e.type);t!==a&&(L(I,e),L(X,a))}function qa(e){I.current===e&&(z(X),z(I)),ee.current===e&&(z(ee),Ln._currentValue=P)}var Zl,Kn;function Xt(e){if(Zl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||"",Kn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zl+e+Kn}var V=!1;function re(e,t){if(!e||V)return"";V=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var p=r.split(`
`),w=c.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===w.length)for(l=p.length-1,n=w.length-1;1<=l&&0<=n&&p[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==w[n]){var D=`
`+p[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{V=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return e.child!==t&&t!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return Xt("Activity");default:return""}}function et(e){try{var t="",a=null;do t+=je(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var St=Object.prototype.hasOwnProperty,Qt=o.unstable_scheduleCallback,sl=o.unstable_cancelCallback,ma=o.unstable_shouldYield,vs=o.unstable_requestPaint,tt=o.unstable_now,bs=o.unstable_getCurrentPriorityLevel,xs=o.unstable_ImmediatePriority,Jn=o.unstable_UserBlockingPriority,Pn=o.unstable_NormalPriority,Dm=o.unstable_LowPriority,$o=o.unstable_IdlePriority,Mm=o.log,Om=o.unstable_setDisableYieldValue,Kl=null,mt=null;function pa(e){if(typeof Mm=="function"&&Om(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Kl,e)}catch{}}var pt=Math.clz32?Math.clz32:Hm,zm=Math.log,Um=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(zm(e)/Um|0)|0}var Wn=256,$n=262144,In=4194304;function Ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ei(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ya(l):(r&=c,r!==0?n=Ya(r):a||(a=c&~e,a!==0&&(n=Ya(a))))):(c=l&~i,c!==0?n=Ya(c):r!==0?n=Ya(r):a||(a=l&~e,a!==0&&(n=Ya(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Io(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function Ss(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var D=31-pt(a),O=1<<D;c[D]=0,p[D]=-1;var T=w[D];if(T!==null)for(w[D]=null,D=0;D<T.length;D++){var A=T[D];A!==null&&(A.lane&=-536870913)}a&=~O}l!==0&&eu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function eu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function tu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function au(e,t){var a=t&-t;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|t))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Vf(e.type))}function nu(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var _a=Math.random().toString(36).slice(2),Ke="__reactFiber$"+_a,it="__reactProps$"+_a,rl="__reactContainer$"+_a,Es="__reactEvents$"+_a,Bm="__reactListeners$"+_a,qm="__reactHandles$"+_a,iu="__reactResources$"+_a,Wl="__reactMarker$"+_a;function Ns(e){delete e[Ke],delete e[it],delete e[Es],delete e[Bm],delete e[qm]}function ol(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[rl]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Af(e);e!==null;){if(a=e[Ke])return a;e=Af(e)}return t}e=a,a=e.parentNode}return null}function ul(e){if(e=e[Ke]||e[rl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function cl(e){var t=e[iu];return t||(t=e[iu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Wl]=!0}var su=new Set,ru={};function Ga(e,t){dl(e,t),dl(e+"Capture",t)}function dl(e,t){for(ru[e]=t,e=0;e<t.length;e++)su.add(t[e])}var Ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},uu={};function Gm(e){return St.call(uu,e)?!0:St.call(ou,e)?!1:Ym.test(e)?uu[e]=!0:(ou[e]=!0,!1)}function ti(e,t,a){if(Gm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ai(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ft(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){if(!e._valueTracker){var t=cu(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=cu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xm=/[\n"\\]/g;function Tt(e){return e.replace(Xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function js(e,t,a,l,n,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Rs(e,r,wt(t)):a!=null?Rs(e,r,wt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+wt(c):e.removeAttribute("name")}function fu(e,t,a,l,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){As(e);return}a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),As(e)}function Rs(e,t,a){t==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function mu(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function pu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(nt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),As(e)}function ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _u(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&_u(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&_u(e,i,t[i])}function Cs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ni(e){return Zm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ds=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,_l=null;function gu(e){var t=ul(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(js(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(u(90));js(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&du(l)}break e;case"textarea":mu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&fl(e,!!a.multiple,t,!1)}}}var Os=!1;function yu(e,t,a){if(Os)return e(t,a);Os=!0;try{var l=e(t);return l}finally{if(Os=!1,(pl!==null||_l!==null)&&(Qi(),pl&&(t=pl,e=_l,_l=pl=null,gu(t),e)))for(t=0;t<e.length;t++)gu(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Kt)try{var en={};Object.defineProperty(en,"passive",{get:function(){zs=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{zs=!1}var ha=null,Us=null,ii=null;function vu(){if(ii)return ii;var e,t=Us,a=t.length,l,n="value"in ha?ha.value:ha.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return ii=n.slice(e,1<l?1-l:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function bu(){return!1}function st(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:bu,this.isPropagationStopped=bu,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=st(Va),tn=N({},Va,{view:0,detail:0}),Km=st(tn),Hs,Ls,an,ui=N({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(Hs=e.screenX-an.screenX,Ls=e.screenY-an.screenY):Ls=Hs=0,an=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),xu=st(ui),Jm=N({},ui,{dataTransfer:0}),Pm=st(Jm),Wm=N({},tn,{relatedTarget:0}),ks=st(Wm),$m=N({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=st($m),ep=N({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=st(ep),ap=N({},Va,{data:0}),Su=st(ap),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function Bs(){return sp}var rp=N({},tn,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),op=st(rp),up=N({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=st(up),cp=N({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),dp=st(cp),fp=N({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=st(fp),pp=N({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=st(pp),hp=N({},Va,{newState:0,oldState:0}),gp=st(hp),yp=[9,13,27,32],qs=Kt&&"CompositionEvent"in window,ln=null;Kt&&"documentMode"in document&&(ln=document.documentMode);var vp=Kt&&"TextEvent"in window&&!ln,Tu=Kt&&(!qs||ln&&8<ln&&11>=ln),Eu=" ",Nu=!1;function Au(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hl=!1;function bp(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Nu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Nu?null:e;default:return null}}function xp(e,t){if(hl)return e==="compositionend"||!qs&&Au(e,t)?(e=vu(),ii=Us=ha=null,hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function Cu(e,t,a,l){pl?_l?_l.push(l):_l=[l]:pl=l,t=$i(t,"onChange"),0<t.length&&(a=new oi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,sn=null;function wp(e){mf(e,0)}function ci(e){var t=$l(e);if(du(t))return e}function Du(e,t){if(e==="change")return t}var Mu=!1;if(Kt){var Ys;if(Kt){var Gs="oninput"in document;if(!Gs){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Gs=typeof Ou.oninput=="function"}Ys=Gs}else Ys=!1;Mu=Ys&&(!document.documentMode||9<document.documentMode)}function zu(){nn&&(nn.detachEvent("onpropertychange",Uu),sn=nn=null)}function Uu(e){if(e.propertyName==="value"&&ci(sn)){var t=[];Cu(t,sn,e,Ms(e)),yu(wp,t)}}function Tp(e,t,a){e==="focusin"?(zu(),nn=t,sn=a,nn.attachEvent("onpropertychange",Uu)):e==="focusout"&&zu()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(sn)}function Np(e,t){if(e==="click")return ci(t)}function Ap(e,t){if(e==="input"||e==="change")return ci(t)}function jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:jp;function rn(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!St.call(t,n)||!_t(e[n],t[n]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var a=Hu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hu(a)}}function ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=li(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=li(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rp=Kt&&"documentMode"in document&&11>=document.documentMode,gl=null,Xs=null,on=null,Qs=!1;function qu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qs||gl==null||gl!==li(l)||(l=gl,"selectionStart"in l&&Vs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),on&&rn(on,l)||(on=l,l=$i(Xs,"onSelect"),0<l.length&&(t=new oi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=gl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var yl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Fs={},Yu={};Kt&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete yl.animationend.animation,delete yl.animationiteration.animation,delete yl.animationstart.animation),"TransitionEvent"in window||delete yl.transitionend.transition);function Qa(e){if(Fs[e])return Fs[e];if(!yl[e])return e;var t=yl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yu)return Fs[e]=t[a];return e}var Gu=Qa("animationend"),Vu=Qa("animationiteration"),Xu=Qa("animationstart"),Cp=Qa("transitionrun"),Dp=Qa("transitionstart"),Mp=Qa("transitioncancel"),Qu=Qa("transitionend"),Fu=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function zt(e,t){Fu.set(e,t),Ga(t,[e])}var di=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],vl=0,Ks=0;function fi(){for(var e=vl,t=Ks=vl=0;t<e;){var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Zu(a,n,i)}}function mi(e,t,a,l){Et[vl++]=e,Et[vl++]=t,Et[vl++]=a,Et[vl++]=l,Ks|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Js(e,t,a,l){return mi(e,t,a,l),pi(e)}function Fa(e,t){return mi(e,null,null,t),pi(e)}function Zu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function pi(e){if(50<Cn)throw Cn=0,no=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bl={};function Op(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,l){return new Op(e,t,a,l)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ku(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")Ps(e)&&(r=1);else if(typeof e=="string")r=k_(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ue:return e=ht(31,a,t,n),e.elementType=Ue,e.lanes=i,e;case k:return Za(a.children,n,i,t);case Y:r=8,n|=24;break;case Z:return e=ht(12,a,t,n|2),e.elementType=Z,e.lanes=i,e;case _e:return e=ht(13,a,t,n),e.elementType=_e,e.lanes=i,e;case ye:return e=ht(19,a,t,n),e.elementType=ye,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:r=10;break e;case q:r=9;break e;case pe:r=11;break e;case $:r=14;break e;case xe:r=16,l=null;break e}r=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ht(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Za(e,t,a,l){return e=ht(7,e,l,t),e.lanes=a,e}function Ws(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function Ju(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function $s(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pu=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=Pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:et(t)},Pu.set(e,t),t)}return{value:e,source:t,stack:et(t)}}var xl=[],Sl=0,hi=null,un=0,At=[],jt=0,ga=null,kt=1,Bt="";function Pt(e,t){xl[Sl++]=un,xl[Sl++]=hi,hi=e,un=t}function Wu(e,t,a){At[jt++]=kt,At[jt++]=Bt,At[jt++]=ga,ga=e;var l=kt;e=Bt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,kt=1<<32-pt(t)+n|a<<n|l,Bt=i+e}else kt=1<<i|a<<n|l,Bt=e}function Is(e){e.return!==null&&(Pt(e,1),Wu(e,1,0))}function er(e){for(;e===hi;)hi=xl[--Sl],xl[Sl]=null,un=xl[--Sl],xl[Sl]=null;for(;e===ga;)ga=At[--jt],At[jt]=null,Bt=At[--jt],At[jt]=null,kt=At[--jt],At[jt]=null}function $u(e,t){At[jt++]=kt,At[jt++]=Bt,At[jt++]=ga,kt=t.id,Bt=t.overflow,ga=e}var Je=null,Re=null,ce=!1,ya=null,Rt=!1,tr=Error(u(519));function va(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cn(Nt(t,e)),tr}function Iu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ke]=e,t[it]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Mn.length;a++)se(Mn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),fu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),pu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gf(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||va(e,!0)}function ec(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Je=Je.return}}function wl(e){if(e!==Je)return!1;if(!ce)return ec(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bo(e.type,e.memoizedProps)),a=!a),a&&Re&&va(e),ec(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Nf(e)}else t===27?(t=Re,Oa(e.type)?(e=Eo,Eo=null,Re=e):Re=t):Re=Je?Dt(e.stateNode.nextSibling):null;return!0}function Ka(){Re=Je=null,ce=!1}function ar(){var e=ya;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ya=null),e}function cn(e){ya===null?ya=[e]:ya.push(e)}var lr=y(null),Ja=null,Wt=null;function ba(e,t,a){L(lr,t._currentValue),t._currentValue=a}function $t(e){e._currentValue=lr.current,z(lr)}function nr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ir(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var p=0;p<t.length;p++)if(c.context===t[p]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),nr(i.return,a,e),l||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(u(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),nr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Tl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=n.type;_t(n.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(n===ee.current){if(r=n.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}n=n.return}e!==null&&ir(t,e,a,l),t.flags|=262144}function gi(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ja=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return tc(Ja,e)}function yi(e,t){return Ja===null&&Pa(e),tc(e,t)}function tc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(u(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var zp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Up=o.unstable_scheduleCallback,Hp=o.unstable_NormalPriority,Be={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new zp,data:new Map,refCount:0}}function dn(e){e.refCount--,e.refCount===0&&Up(Hp,function(){e.controller.abort()})}var fn=null,rr=0,El=0,Nl=null;function Lp(e,t){if(fn===null){var a=fn=[];rr=0,El=co(),Nl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return rr++,t.then(ac,ac),t}function ac(){if(--rr===0&&fn!==null){Nl!==null&&(Nl.status="fulfilled");var e=fn;fn=null,El=0,Nl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var lc=C.S;C.S=function(e,t){qd=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lp(e,t),lc!==null&&lc(e,t)};var Wa=y(null);function or(){var e=Wa.current;return e!==null?e:Ee.pooledCache}function vi(e,t){t===null?L(Wa,Wa.current):L(Wa,t.pool)}function nc(){var e=or();return e===null?null:{parent:Be._currentValue,pool:e}}var Al=Error(u(460)),ur=Error(u(474)),bi=Error(u(542)),xi={then:function(){}};function ic(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oc(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,oc(e),e}throw Ia=t,Al}}function $a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ia=a,Al):a}}var Ia=null;function rc(){if(Ia===null)throw Error(u(459));var e=Ia;return Ia=null,e}function oc(e){if(e===Al||e===bi)throw Error(u(483))}var jl=null,mn=0;function Si(e){var t=mn;return mn+=1,jl===null&&(jl=[]),sc(jl,e,t)}function pn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wi(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uc(e){function t(b,g){if(e){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=Jt(b,g),b.index=0,b.sibling=null,b}function i(b,g,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=67108866,g):S):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function c(b,g,S,M){return g===null||g.tag!==6?(g=Ws(S,b.mode,M),g.return=b,g):(g=n(g,S),g.return=b,g)}function p(b,g,S,M){var K=S.type;return K===k?D(b,g,S.props.children,M,S.key):g!==null&&(g.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===xe&&$a(K)===g.type)?(g=n(g,S.props),pn(g,S),g.return=b,g):(g=_i(S.type,S.key,S.props,null,b.mode,M),pn(g,S),g.return=b,g)}function w(b,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=$s(S,b.mode,M),g.return=b,g):(g=n(g,S.children||[]),g.return=b,g)}function D(b,g,S,M,K){return g===null||g.tag!==7?(g=Za(S,b.mode,M,K),g.return=b,g):(g=n(g,S),g.return=b,g)}function O(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Ws(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case G:return S=_i(g.type,g.key,g.props,null,b.mode,S),pn(S,g),S.return=b,S;case B:return g=$s(g,b.mode,S),g.return=b,g;case xe:return g=$a(g),O(b,g,S)}if(nt(g)||ke(g))return g=Za(g,b.mode,S,null),g.return=b,g;if(typeof g.then=="function")return O(b,Si(g),S);if(g.$$typeof===J)return O(b,yi(b,g),S);wi(b,g)}return null}function T(b,g,S,M){var K=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return K!==null?null:c(b,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case G:return S.key===K?p(b,g,S,M):null;case B:return S.key===K?w(b,g,S,M):null;case xe:return S=$a(S),T(b,g,S,M)}if(nt(S)||ke(S))return K!==null?null:D(b,g,S,M,null);if(typeof S.then=="function")return T(b,g,Si(S),M);if(S.$$typeof===J)return T(b,g,yi(b,S),M);wi(b,S)}return null}function A(b,g,S,M,K){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(S)||null,c(g,b,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case G:return b=b.get(M.key===null?S:M.key)||null,p(g,b,M,K);case B:return b=b.get(M.key===null?S:M.key)||null,w(g,b,M,K);case xe:return M=$a(M),A(b,g,S,M,K)}if(nt(M)||ke(M))return b=b.get(S)||null,D(g,b,M,K,null);if(typeof M.then=="function")return A(b,g,S,Si(M),K);if(M.$$typeof===J)return A(b,g,S,yi(g,M),K);wi(g,M)}return null}function Q(b,g,S,M){for(var K=null,fe=null,F=g,le=g=0,ue=null;F!==null&&le<S.length;le++){F.index>le?(ue=F,F=null):ue=F.sibling;var me=T(b,F,S[le],M);if(me===null){F===null&&(F=ue);break}e&&F&&me.alternate===null&&t(b,F),g=i(me,g,le),fe===null?K=me:fe.sibling=me,fe=me,F=ue}if(le===S.length)return a(b,F),ce&&Pt(b,le),K;if(F===null){for(;le<S.length;le++)F=O(b,S[le],M),F!==null&&(g=i(F,g,le),fe===null?K=F:fe.sibling=F,fe=F);return ce&&Pt(b,le),K}for(F=l(F);le<S.length;le++)ue=A(F,b,le,S[le],M),ue!==null&&(e&&ue.alternate!==null&&F.delete(ue.key===null?le:ue.key),g=i(ue,g,le),fe===null?K=ue:fe.sibling=ue,fe=ue);return e&&F.forEach(function(ka){return t(b,ka)}),ce&&Pt(b,le),K}function W(b,g,S,M){if(S==null)throw Error(u(151));for(var K=null,fe=null,F=g,le=g=0,ue=null,me=S.next();F!==null&&!me.done;le++,me=S.next()){F.index>le?(ue=F,F=null):ue=F.sibling;var ka=T(b,F,me.value,M);if(ka===null){F===null&&(F=ue);break}e&&F&&ka.alternate===null&&t(b,F),g=i(ka,g,le),fe===null?K=ka:fe.sibling=ka,fe=ka,F=ue}if(me.done)return a(b,F),ce&&Pt(b,le),K;if(F===null){for(;!me.done;le++,me=S.next())me=O(b,me.value,M),me!==null&&(g=i(me,g,le),fe===null?K=me:fe.sibling=me,fe=me);return ce&&Pt(b,le),K}for(F=l(F);!me.done;le++,me=S.next())me=A(F,b,le,me.value,M),me!==null&&(e&&me.alternate!==null&&F.delete(me.key===null?le:me.key),g=i(me,g,le),fe===null?K=me:fe.sibling=me,fe=me);return e&&F.forEach(function(J_){return t(b,J_)}),ce&&Pt(b,le),K}function Te(b,g,S,M){if(typeof S=="object"&&S!==null&&S.type===k&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case G:e:{for(var K=S.key;g!==null;){if(g.key===K){if(K=S.type,K===k){if(g.tag===7){a(b,g.sibling),M=n(g,S.props.children),M.return=b,b=M;break e}}else if(g.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===xe&&$a(K)===g.type){a(b,g.sibling),M=n(g,S.props),pn(M,S),M.return=b,b=M;break e}a(b,g);break}else t(b,g);g=g.sibling}S.type===k?(M=Za(S.props.children,b.mode,M,S.key),M.return=b,b=M):(M=_i(S.type,S.key,S.props,null,b.mode,M),pn(M,S),M.return=b,b=M)}return r(b);case B:e:{for(K=S.key;g!==null;){if(g.key===K)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(b,g.sibling),M=n(g,S.children||[]),M.return=b,b=M;break e}else{a(b,g);break}else t(b,g);g=g.sibling}M=$s(S,b.mode,M),M.return=b,b=M}return r(b);case xe:return S=$a(S),Te(b,g,S,M)}if(nt(S))return Q(b,g,S,M);if(ke(S)){if(K=ke(S),typeof K!="function")throw Error(u(150));return S=K.call(S),W(b,g,S,M)}if(typeof S.then=="function")return Te(b,g,Si(S),M);if(S.$$typeof===J)return Te(b,g,yi(b,S),M);wi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(b,g.sibling),M=n(g,S),M.return=b,b=M):(a(b,g),M=Ws(S,b.mode,M),M.return=b,b=M),r(b)):a(b,g)}return function(b,g,S,M){try{mn=0;var K=Te(b,g,S,M);return jl=null,K}catch(F){if(F===Al||F===bi)throw F;var fe=ht(29,F,null,b.mode);return fe.lanes=M,fe.return=b,fe}}}var el=uc(!0),cc=uc(!1),xa=!1;function cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ge&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=pi(e),Zu(e,null,a),t}return mi(e,l,t,a),pi(e)}function _n(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,tu(e,a)}}function fr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mr=!1;function hn(){if(mr){var e=Nl;if(e!==null)throw e}}function gn(e,t,a,l){mr=!1;var n=e.updateQueue;xa=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var p=c,w=p.next;p.next=null,r===null?i=w:r.next=w,r=p;var D=e.alternate;D!==null&&(D=D.updateQueue,c=D.lastBaseUpdate,c!==r&&(c===null?D.firstBaseUpdate=w:c.next=w,D.lastBaseUpdate=p))}if(i!==null){var O=n.baseState;r=0,D=w=p=null,c=i;do{var T=c.lane&-536870913,A=T!==c.lane;if(A?(oe&T)===T:(l&T)===T){T!==0&&T===El&&(mr=!0),D!==null&&(D=D.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,W=c;T=t;var Te=a;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){O=Q.call(Te,O,T);break e}O=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,T=typeof Q=="function"?Q.call(Te,O,T):Q,T==null)break e;O=N({},O,T);break e;case 2:xa=!0}}T=c.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[T]:A.push(T))}else A={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},D===null?(w=D=A,p=O):D=D.next=A,r|=T;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;A=c,c=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);D===null&&(p=O),n.baseState=p,n.firstBaseUpdate=w,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),ja|=r,e.lanes=r,e.memoizedState=O}}function dc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function fc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dc(a[e],t)}var Rl=y(null),Ti=y(0);function mc(e,t){e=ra,L(Ti,e),L(Rl,t),ra=e|t.baseLanes}function pr(){L(Ti,ra),L(Rl,Rl.current)}function _r(){ra=Ti.current,z(Rl),z(Ti)}var gt=y(null),Ct=null;function Ta(e){var t=e.alternate;L(He,He.current&1),L(gt,e),Ct===null&&(t===null||Rl.current!==null||t.memoizedState!==null)&&(Ct=e)}function hr(e){L(He,He.current),L(gt,e),Ct===null&&(Ct=e)}function pc(e){e.tag===22?(L(He,He.current),L(gt,e),Ct===null&&(Ct=e)):Ea()}function Ea(){L(He,He.current),L(gt,gt.current)}function yt(e){z(gt),Ct===e&&(Ct=null),z(He)}var He=y(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wo(a)||To(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ae=null,Se=null,qe=null,Ni=!1,Cl=!1,tl=!1,Ai=0,yn=0,Dl=null,Bp=0;function Oe(){throw Error(u(321))}function gr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!_t(e[a],t[a]))return!1;return!0}function yr(e,t,a,l,n,i){return It=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Wc:Or,tl=!1,i=a(l,n),tl=!1,Cl&&(i=hc(t,a,l,n)),_c(e),i}function _c(e){C.H=xn;var t=Se!==null&&Se.next!==null;if(It=0,qe=Se=ae=null,Ni=!1,yn=0,Dl=null,t)throw Error(u(300));e===null||Ye||(e=e.dependencies,e!==null&&gi(e)&&(Ye=!0))}function hc(e,t,a,l){ae=e;var n=0;do{if(Cl&&(Dl=null),yn=0,Cl=!1,25<=n)throw Error(u(301));if(n+=1,qe=Se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=$c,i=t(a,l)}while(Cl);return i}function qp(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?vn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ae.flags|=1024),t}function vr(){var e=Ai!==0;return Ai=0,e}function br(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xr(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}It=0,qe=Se=ae=null,Cl=!1,yn=Ai=0,Dl=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ae.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(Se===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=qe===null?ae.memoizedState:qe.next;if(t!==null)qe=t,Se=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},qe===null?ae.memoizedState=qe=e:qe=qe.next=e}return qe}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vn(e){var t=yn;return yn+=1,Dl===null&&(Dl=[]),e=sc(Dl,e,t),t=ae,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Wc:Or),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vn(e);if(e.$$typeof===J)return Pe(e)}throw Error(u(438,String(e)))}function Sr(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ji(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ve;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=Le();return wr(t,Se,e)}function wr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=r=null,p=null,w=t,D=!1;do{var O=w.lane&-536870913;if(O!==w.lane?(oe&O)===O:(It&O)===O){var T=w.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),O===El&&(D=!0);else if((It&T)===T){w=w.next,T===El&&(D=!0);continue}else O={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=O,r=i):p=p.next=O,ae.lanes|=T,ja|=T;O=w.action,tl&&a(i,O),i=w.hasEagerState?w.eagerState:a(i,O)}else T={lane:O,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=T,r=i):p=p.next=T,ae.lanes|=O,ja|=O;w=w.next}while(w!==null&&w!==t);if(p===null?r=i:p.next=c,!_t(i,e.memoizedState)&&(Ye=!0,D&&(a=Nl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Tr(e){var t=Le(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);_t(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function gc(e,t,a){var l=ae,n=Le(),i=ce;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var r=!_t((Se||n).memoizedState,a);if(r&&(n.memoizedState=a,Ye=!0),n=n.queue,Ar(bc.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Ml(9,{destroy:void 0},vc.bind(null,l,n,a,t),null),Ee===null)throw Error(u(349));i||(It&127)!==0||yc(l,t,a)}return a}function yc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=ji(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vc(e,t,a,l){t.value=a,t.getSnapshot=l,xc(t)&&Sc(e)}function bc(e,t,a){return a(function(){xc(t)&&Sc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!_t(e,a)}catch{return!0}}function Sc(e){var t=Fa(e,2);t!==null&&dt(t,e,2)}function Er(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),tl){pa(!0);try{a()}finally{pa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function wc(e,t,a,l){return e.baseState=a,wr(e,Se,typeof l=="function"?l:ea)}function Yp(e,t,a,l,n){if(Oi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};C.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Tc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Tc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=C.T,r={};C.T=r;try{var c=a(n,l),p=C.S;p!==null&&p(r,c),Ec(e,t,c)}catch(w){Nr(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),C.T=i}}else try{i=a(n,l),Ec(e,t,i)}catch(w){Nr(e,t,w)}}function Ec(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Nc(e,t,l)},function(l){return Nr(e,t,l)}):Nc(e,t,a)}function Nc(e,t,a){t.status="fulfilled",t.value=a,Ac(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Tc(e,a)))}function Nr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ac(t),t=t.next;while(t!==l)}e.action=null}function Ac(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jc(e,t){return t}function Rc(e,t){if(ce){var a=Ee.formState;if(a!==null){e:{var l=ae;if(ce){if(Re){t:{for(var n=Re,i=Rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Dt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Re=Dt(n.nextSibling),l=n.data==="F!";break e}}va(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jc,lastRenderedState:t},a.queue=l,a=Kc.bind(null,ae,l),l.dispatch=a,l=Er(!1),i=Mr.bind(null,ae,!1,l.queue),l=at(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Yp.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Cc(e){var t=Le();return Dc(t,Se,e)}function Dc(e,t,a){if(t=wr(e,t,jc)[0],e=Ci(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=vn(t)}catch(r){throw r===Al?bi:r}else l=t;t=Le();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,Ml(9,{destroy:void 0},Gp.bind(null,n,a),null)),[l,i,e]}function Gp(e,t){e.action=t}function Mc(e){var t=Le(),a=Se;if(a!==null)return Dc(t,a,e);Le(),t=t.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=ji(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Oc(){return Le().memoizedState}function Di(e,t,a,l){var n=at();ae.flags|=e,n.memoizedState=Ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function Mi(e,t,a,l){var n=Le();l=l===void 0?null:l;var i=n.memoizedState.inst;Se!==null&&l!==null&&gr(l,Se.memoizedState.deps)?n.memoizedState=Ml(t,i,a,l):(ae.flags|=e,n.memoizedState=Ml(1|t,i,a,l))}function zc(e,t){Di(8390656,8,e,t)}function Ar(e,t){Mi(2048,8,e,t)}function Vp(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=ji(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Uc(e){var t=Le().memoizedState;return Vp({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Hc(e,t){return Mi(4,2,e,t)}function Lc(e,t){return Mi(4,4,e,t)}function kc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,a){a=a!=null?a.concat([e]):null,Mi(4,4,kc.bind(null,t,e),a)}function jr(){}function qc(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&gr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Yc(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&gr(t,l[1]))return l[0];if(l=e(),tl){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l}function Rr(e,t,a){return a===void 0||(It&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Gd(),ae.lanes|=e,ja|=e,a)}function Gc(e,t,a,l){return _t(a,t)?a:Rl.current!==null?(e=Rr(e,a,l),_t(e,t)||(Ye=!0),e):(It&42)===0||(It&1073741824)!==0&&(oe&261930)===0?(Ye=!0,e.memoizedState=a):(e=Gd(),ae.lanes|=e,ja|=e,t)}function Vc(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var r=C.T,c={};C.T=c,Mr(e,!1,t,a);try{var p=n(),w=C.S;if(w!==null&&w(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=kp(p,l);bn(e,t,D,xt(e))}else bn(e,t,l,xt(e))}catch(O){bn(e,t,{then:function(){},status:"rejected",reason:O},xt())}finally{H.p=i,r!==null&&c.types!==null&&(r.types=c.types),C.T=r}}function Xp(){}function Cr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Xc(e).queue;Vc(e,n,t,P,a===null?Xp:function(){return Qc(e),a(l)})}function Xc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qc(e){var t=Xc(e);t.next===null&&(t=e.alternate.memoizedState),bn(e,t.next.queue,{},xt())}function Dr(){return Pe(Ln)}function Fc(){return Le().memoizedState}function Zc(){return Le().memoizedState}function Qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=Sa(a);var l=wa(t,e,a);l!==null&&(dt(l,t,a),_n(l,t,a)),t={cache:sr()},e.payload=t;return}t=t.return}}function Fp(e,t,a){var l=xt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)?Jc(t,a):(a=Js(e,t,a,l),a!==null&&(dt(a,e,l),Pc(a,t,l)))}function Kc(e,t,a){var l=xt();bn(e,t,a,l)}function bn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))Jc(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,a);if(n.hasEagerState=!0,n.eagerState=c,_t(c,r))return mi(e,t,n,0),Ee===null&&fi(),!1}catch{}if(a=Js(e,t,n,l),a!==null)return dt(a,e,l),Pc(a,t,l),!0}return!1}function Mr(e,t,a,l){if(l={lane:2,revertLane:co(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(u(479))}else t=Js(e,a,l,2),t!==null&&dt(t,e,2)}function Oi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Jc(e,t){Cl=Ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Pc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,tu(e,a)}}var xn={readContext:Pe,use:Ri,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};xn.useEffectEvent=Oe;var Wc={readContext:Pe,use:Ri,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:zc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Di(4194308,4,kc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){Di(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if(tl){pa(!0);try{e()}finally{pa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var n=a(t);if(tl){pa(!0);try{a(t)}finally{pa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fp.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=Er(e);var t=e.queue,a=Kc.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jr,useDeferredValue:function(e,t){var a=at();return Rr(a,e,t)},useTransition:function(){var e=Er(!1);return e=Vc.bind(null,ae,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=at();if(ce){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ee===null)throw Error(u(349));(oe&127)!==0||yc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,zc(bc.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,{destroy:void 0},vc.bind(null,l,i,a,t),null),a},useId:function(){var e=at(),t=Ee.identifierPrefix;if(ce){var a=Bt,l=kt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dr,useFormState:Rc,useActionState:Rc,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mr.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Sr,useCacheRefresh:function(){return at().memoizedState=Qp.bind(null,ae)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Or={readContext:Pe,use:Ri,useCallback:qc,useContext:Pe,useEffect:Ar,useImperativeHandle:Bc,useInsertionEffect:Hc,useLayoutEffect:Lc,useMemo:Yc,useReducer:Ci,useRef:Oc,useState:function(){return Ci(ea)},useDebugValue:jr,useDeferredValue:function(e,t){var a=Le();return Gc(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ci(ea)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:vn(e),t]},useSyncExternalStore:gc,useId:Fc,useHostTransitionStatus:Dr,useFormState:Cc,useActionState:Cc,useOptimistic:function(e,t){var a=Le();return wc(a,Se,e,t)},useMemoCache:Sr,useCacheRefresh:Zc};Or.useEffectEvent=Uc;var $c={readContext:Pe,use:Ri,useCallback:qc,useContext:Pe,useEffect:Ar,useImperativeHandle:Bc,useInsertionEffect:Hc,useLayoutEffect:Lc,useMemo:Yc,useReducer:Tr,useRef:Oc,useState:function(){return Tr(ea)},useDebugValue:jr,useDeferredValue:function(e,t){var a=Le();return Se===null?Rr(a,e,t):Gc(a,Se.memoizedState,e,t)},useTransition:function(){var e=Tr(ea)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:vn(e),t]},useSyncExternalStore:gc,useId:Fc,useHostTransitionStatus:Dr,useFormState:Mc,useActionState:Mc,useOptimistic:function(e,t){var a=Le();return Se!==null?wc(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:Zc};$c.useEffectEvent=Uc;function zr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ur={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=xt(),n=Sa(l);n.payload=t,a!=null&&(n.callback=a),t=wa(e,n,l),t!==null&&(dt(t,e,l),_n(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=xt(),n=Sa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=wa(e,n,l),t!==null&&(dt(t,e,l),_n(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),l=Sa(a);l.tag=2,t!=null&&(l.callback=t),t=wa(e,l,a),t!==null&&(dt(t,e,a),_n(t,e,a))}};function Ic(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(n,i):!0}function ed(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ur.enqueueReplaceState(t,t.state,null)}function al(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function td(e){di(e)}function ad(e){console.error(e)}function ld(e){di(e)}function zi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Hr(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){zi(e,t)},a}function id(e){return e=Sa(e),e.tag=3,e}function sd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){nd(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){nd(t,a,l),typeof n!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Tl(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?Fi():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ro(e,l,n)),!1;case 22:return a.flags|=65536,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ro(e,l,n)),!1}throw Error(u(435,a.tag))}return ro(e,l,n),Fi(),!1}if(ce)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==tr&&(e=Error(u(422),{cause:l}),cn(Nt(e,a)))):(l!==tr&&(t=Error(u(423),{cause:l}),cn(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=Hr(e.stateNode,l,n),fr(e,n),ze!==4&&(ze=2)),!1;var i=Error(u(520),{cause:l});if(i=Nt(i,a),Rn===null?Rn=[i]:Rn.push(i),ze!==4&&(ze=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Hr(a.stateNode,l,e),fr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=id(n),sd(n,e,a,l),fr(a,n),!1}a=a.return}while(a!==null);return!1}var Lr=Error(u(461)),Ye=!1;function We(e,t,a,l){t.child=e===null?cc(t,null,a,l):el(t,e.child,a,l)}function rd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return Pa(t),l=yr(e,t,a,r,i,n),c=vr(),e!==null&&!Ye?(br(e,t,n),ta(e,t,n)):(ce&&c&&Is(t),t.flags|=1,We(e,t,l,n),t.child)}function od(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Ps(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,ud(e,t,i,l,n)):(e=_i(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Qr(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(r,l)&&e.ref===t.ref)return ta(e,t,n)}return t.flags|=1,e=Jt(i,l),e.ref=t.ref,e.return=t,t.child=e}function ud(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(rn(i,l)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=l=i,Qr(e,n))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,ta(e,t,n)}return kr(e,t,a,l,n)}function cd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return dd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?mc(t,i):pr(),pc(t);else return l=t.lanes=536870912,dd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),mc(t,i),Ea(),t.memoizedState=null):(e!==null&&vi(t,null),pr(),Ea());return We(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dd(e,t,a,l,n){var i=or();return i=i===null?null:{parent:Be._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),pr(),pc(t),e!==null&&Tl(e,t,l,!0),t.childLanes=n,null}function Ui(e,t){return t=Li({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fd(e,t,a){return el(t,e.child,null,a),e=Ui(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Kp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Ui(t,l),t.lanes=536870912,Sn(null,e);if(hr(t),(e=Re)?(e=Ef(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:kt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=t,t.child=a,Je=t,Re=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Ui(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(hr(t),n)if(t.flags&256)t.flags&=-257,t=fd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ye||Tl(e,t,a,!1),n=(a&e.childLanes)!==0,Ye||n){if(l=Ee,l!==null&&(r=au(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Fa(e,r),dt(l,e,r),Lr;Fi(),t=fd(e,t,a)}else e=i.treeContext,Re=Dt(r.nextSibling),Je=t,ce=!0,ya=null,Rt=!1,e!==null&&$u(t,e),t=Ui(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function kr(e,t,a,l,n){return Pa(t),a=yr(e,t,a,l,void 0,n),l=vr(),e!==null&&!Ye?(br(e,t,n),ta(e,t,n)):(ce&&l&&Is(t),t.flags|=1,We(e,t,a,n),t.child)}function md(e,t,a,l,n,i){return Pa(t),t.updateQueue=null,a=hc(t,l,a,n),_c(e),l=vr(),e!==null&&!Ye?(br(e,t,i),ta(e,t,i)):(ce&&l&&Is(t),t.flags|=1,We(e,t,a,i),t.child)}function pd(e,t,a,l,n){if(Pa(t),t.stateNode===null){var i=bl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Pe(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ur,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},cr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Pe(r):bl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(zr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ur.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,p=al(a,c);i.props=p;var w=i.context,D=a.contextType;r=bl,typeof D=="object"&&D!==null&&(r=Pe(D));var O=a.getDerivedStateFromProps;D=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==r)&&ed(t,i,l,r),xa=!1;var T=t.memoizedState;i.state=T,gn(t,l,i,n),hn(),w=t.memoizedState,c||T!==w||xa?(typeof O=="function"&&(zr(t,a,O,l),w=t.memoizedState),(p=xa||Ic(t,a,p,l,T,w,r))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,dr(e,t),r=t.memoizedProps,D=al(a,r),i.props=D,O=t.pendingProps,T=i.context,w=a.contextType,p=bl,typeof w=="object"&&w!==null&&(p=Pe(w)),c=a.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==O||T!==p)&&ed(t,i,l,p),xa=!1,T=t.memoizedState,i.state=T,gn(t,l,i,n),hn();var A=t.memoizedState;r!==O||T!==A||xa||e!==null&&e.dependencies!==null&&gi(e.dependencies)?(typeof c=="function"&&(zr(t,a,c,l),A=t.memoizedState),(D=xa||Ic(t,a,D,l,T,A,p)||e!==null&&e.dependencies!==null&&gi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=p,l=D):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Hi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=el(t,e.child,null,n),t.child=el(t,null,a,n)):We(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ta(e,t,n),e}function _d(e,t,a,l){return Ka(),t.flags|=256,We(e,t,a,l),t.child}var Br={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(e){return{baseLanes:e,cachePool:nc()}}function Yr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function hd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(n?Ta(t):Ea(),(e=Re)?(e=Ef(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:kt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=t,t.child=a,Je=t,Re=null)):e=null,e===null)throw va(t);return To(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(Ea(),n=t.mode,c=Li({mode:"hidden",children:c},n),l=Za(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=qr(a),l.childLanes=Yr(e,r,a),t.memoizedState=Br,Sn(null,l)):(Ta(t),Gr(t,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(i)t.flags&256?(Ta(t),t.flags&=-257,t=Vr(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),c=l.fallback,n=t.mode,l=Li({mode:"visible",children:l.children},n),c=Za(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,el(t,e.child,null,a),l=t.child,l.memoizedState=qr(a),l.childLanes=Yr(e,r,a),t.memoizedState=Br,t=Sn(null,l));else if(Ta(t),To(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(u(419)),l.stack="",l.digest=r,cn({value:l,source:null,stack:null}),t=Vr(e,t,a)}else if(Ye||Tl(e,t,a,!1),r=(a&e.childLanes)!==0,Ye||r){if(r=Ee,r!==null&&(l=au(r,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Fa(e,l),dt(r,e,l),Lr;wo(c)||Fi(),t=Vr(e,t,a)}else wo(c)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Re=Dt(c.nextSibling),Je=t,ce=!0,ya=null,Rt=!1,e!==null&&$u(t,e),t=Gr(t,l.children),t.flags|=4096);return t}return n?(Ea(),c=l.fallback,n=t.mode,p=e.child,w=p.sibling,l=Jt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,w!==null?c=Jt(w,c):(c=Za(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Sn(null,l),l=t.child,c=e.child.memoizedState,c===null?c=qr(a):(n=c.cachePool,n!==null?(p=Be._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=nc(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Yr(e,r,a),t.memoizedState=Br,Sn(e.child,l)):(Ta(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Gr(e,t){return t=Li({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Li(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function Vr(e,t,a){return el(t,e.child,null,a),e=Gr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),nr(e.return,t,a)}function Xr(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function yd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=He.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,L(He,r),We(e,t,l,a),l=ce?un:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,a,t);else if(e.tag===19)gd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Xr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Xr(t,!0,a,null,i,l);break;case"together":Xr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Tl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gi(e)))}function Jp(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),ba(t,Be,e.memoizedState.cache),Ka();break;case 27:case 5:fa(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ta(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hd(e,t,a):(Ta(t),e=ta(e,t,a),e!==null?e.sibling:null);Ta(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Tl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return yd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(He,He.current),l)break;return null;case 22:return t.lanes=0,cd(e,t,a,t.pendingProps);case 24:ba(t,Be,e.memoizedState.cache)}return ta(e,t,a)}function vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Qr(e,a)&&(t.flags&128)===0)return Ye=!1,Jp(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,ce&&(t.flags&1048576)!==0&&Wu(t,un,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e=="function")Ps(e)?(l=al(e,l),t.tag=1,t=pd(null,t,e,l,a)):(t.tag=0,t=kr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===pe){t.tag=11,t=rd(null,t,e,l,a);break e}else if(n===$){t.tag=14,t=od(null,t,e,l,a);break e}}throw t=ft(e)||e,Error(u(306,t,""))}}return t;case 0:return kr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=al(l,t.pendingProps),pd(e,t,l,n,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,dr(e,t),gn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ba(t,Be,l),l!==i.cache&&ir(t,[Be],a,!0),hn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_d(e,t,l,a);break e}else if(l!==n){n=Nt(Error(u(424)),t),cn(n),t=_d(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Dt(e.firstChild),Je=t,ce=!0,ya=null,Rt=!0,a=cc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ka(),l===n){t=ta(e,t,a);break e}We(e,t,l,a)}t=t.child}return t;case 26:return Hi(e,t),e===null?(a=Df(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Ii(ne.current).createElement(a),l[Ke]=t,l[it]=e,$e(l,a,e),Fe(l),t.stateNode=l):t.memoizedState=Df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fa(t),e===null&&ce&&(l=t.stateNode=jf(t.type,t.pendingProps,ne.current),Je=t,Rt=!0,n=Re,Oa(t.type)?(Eo=n,Re=Dt(l.firstChild)):Re=n),We(e,t,t.pendingProps.children,a),Hi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((n=l=Re)&&(l=E_(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Je=t,Re=Dt(l.firstChild),Rt=!1,n=!0):n=!1),n||va(t)),fa(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,bo(n,i)?l=null:r!==null&&bo(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=yr(e,t,qp,null,null,a),Ln._currentValue=n),Hi(e,t),We(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=Re)&&(a=N_(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Je=t,Re=null,e=!0):e=!1),e||va(t)),null;case 13:return hd(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=el(t,null,l,a):We(e,t,l,a),t.child;case 11:return rd(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ba(t,t.type,l.value),We(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Pa(t),n=Pe(n),l=l(n),t.flags|=1,We(e,t,l,a),t.child;case 14:return od(e,t,t.type,t.pendingProps,a);case 15:return ud(e,t,t.type,t.pendingProps,a);case 19:return yd(e,t,a);case 31:return Kp(e,t,a);case 22:return cd(e,t,a,t.pendingProps);case 24:return Pa(t),l=Pe(Be),e===null?(n=or(),n===null&&(n=Ee,i=sr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},cr(t),ba(t,Be,n)):((e.lanes&a)!==0&&(dr(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ba(t,Be,l)):(l=i.cache,ba(t,Be,l),l!==n.cache&&ir(t,[Be],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function aa(e){e.flags|=4}function Fr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Fd())e.flags|=8192;else throw Ia=xi,ur}else e.flags&=-16777217}function bd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hf(t))if(Fd())e.flags|=8192;else throw Ia=xi,ur}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Io():536870912,e.lanes|=t,Hl|=t)}function wn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Pp(e,t,a){var l=t.pendingProps;switch(er(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),$t(Be),Ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wl(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ar())),Ce(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(aa(t),i!==null?(Ce(t),bd(t,i)):(Ce(t),Fr(t,n,null,l,a))):i?i!==e.memoizedState?(aa(t),Ce(t),bd(t,i)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&aa(t),Ce(t),Fr(t,n,e,l,a)),null;case 27:if(qa(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}e=X.current,wl(t)?Iu(t):(e=jf(n,l,a),t.stateNode=e,aa(t))}return Ce(t),null;case 5:if(qa(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}if(i=X.current,wl(t))Iu(t);else{var r=Ii(ne.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[Ke]=t,i[it]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch($e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&aa(t)}}return Ce(t),Fr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&aa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,wl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gf(e.nodeValue,a)),e||va(t,!0)}else e=Ii(e).createTextNode(l),e[Ke]=t,t.stateNode=e}return Ce(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=wl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ke]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else a=ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=wl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ke]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),n=!1}else n=ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ki(t,t.updateQueue),Ce(t),null);case 4:return Ae(),e===null&&_o(t.stateNode.containerInfo),Ce(t),null;case 10:return $t(t.type),Ce(t),null;case 19:if(z(He),l=t.memoizedState,l===null)return Ce(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)wn(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,wn(l,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ku(a,e),a=a.sibling;return L(He,He.current&1|2),ce&&Pt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&tt()>Vi&&(t.flags|=128,n=!0,wn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),wn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return Ce(t),null}else 2*tt()-l.renderingStartTime>Vi&&a!==536870912&&(t.flags|=128,n=!0,wn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tt(),e.sibling=null,a=He.current,L(He,n?a&1|2:a&1),ce&&Pt(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return yt(t),_r(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),a=t.updateQueue,a!==null&&ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(Wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),$t(Be),Ce(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Wp(e,t){switch(er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(Be),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qa(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(u(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(He),null;case 4:return Ae(),null;case 10:return $t(t.type),null;case 22:case 23:return yt(t),_r(),e!==null&&z(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(Be),null;case 25:return null;default:return null}}function xd(e,t){switch(er(t),t.tag){case 3:$t(Be),Ae();break;case 26:case 27:case 5:qa(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:z(He);break;case 10:$t(t.type);break;case 22:case 23:yt(t),_r(),e!==null&&z(Wa);break;case 24:$t(Be)}}function Tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(c){be(t,t.return,c)}}function Na(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=t;var p=a,w=c;try{w()}catch(D){be(n,p,D)}}}l=l.next}while(l!==i)}}catch(D){be(t,t.return,D)}}function Sd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fc(t,a)}catch(l){be(e,e.return,l)}}}function wd(e,t,a){a.props=al(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,t,l)}}function En(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){be(e,t,n)}}function qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){be(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){be(e,t,n)}else a.current=null}function Td(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){be(e,e.return,n)}}function Zr(e,t,a){try{var l=e.stateNode;v_(l,e.type,a,t),l[it]=t}catch(n){be(e,e.return,n)}}function Ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Kr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Jr(e,t,a),e=e.sibling;e!==null;)Jr(e,t,a),e=e.sibling}function Bi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bi(e,t,a),e=e.sibling;e!==null;)Bi(e,t,a),e=e.sibling}function Nd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ke]=e,t[it]=a}catch(i){be(e,e.return,i)}}var la=!1,Ge=!1,Pr=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function $p(e,t){if(e=e.containerInfo,yo=ss,e=Bu(e),Vs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,c=-1,p=-1,w=0,D=0,O=e,T=null;t:for(;;){for(var A;O!==a||n!==0&&O.nodeType!==3||(c=r+n),O!==i||l!==0&&O.nodeType!==3||(p=r+l),O.nodeType===3&&(r+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break t;if(T===a&&++w===n&&(c=r),T===i&&++D===l&&(p=r),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(vo={focusedElem:e,selectionRange:a},ss=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=al(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){be(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)So(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":So(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function jd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),l&4&&Tn(5,a);break;case 1:if(ia(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){be(a,a.return,r)}else{var n=al(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){be(a,a.return,r)}}l&64&&Sd(a),l&512&&En(a,a.return);break;case 3:if(ia(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fc(e,t)}catch(r){be(a,a.return,r)}}break;case 27:t===null&&l&4&&Nd(a);case 26:case 5:ia(e,a),t===null&&l&4&&Td(a),l&512&&En(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),l&4&&Dd(e,a);break;case 13:ia(e,a),l&4&&Md(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r_.bind(null,a),A_(e,a))));break;case 22:if(l=a.memoizedState!==null||la,!l){t=t!==null&&t.memoizedState!==null||Ge,n=la;var i=Ge;la=l,(Ge=t)&&!i?sa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),la=n,Ge=i}break;case 30:break;default:ia(e,a)}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ns(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,rt=!1;function na(e,t,a){for(a=a.child;a!==null;)Cd(e,t,a),a=a.sibling}function Cd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Kl,a)}catch{}switch(a.tag){case 26:Ge||qt(a,t),na(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||qt(a,t);var l=De,n=rt;Oa(a.type)&&(De=a.stateNode,rt=!1),na(e,t,a),zn(a.stateNode),De=l,rt=n;break;case 5:Ge||qt(a,t);case 6:if(l=De,n=rt,De=null,na(e,t,a),De=l,rt=n,De!==null)if(rt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(i){be(a,t,i)}else try{De.removeChild(a.stateNode)}catch(i){be(a,t,i)}break;case 18:De!==null&&(rt?(e=De,wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Xl(e)):wf(De,a.stateNode));break;case 4:l=De,n=rt,De=a.stateNode.containerInfo,rt=!0,na(e,t,a),De=l,rt=n;break;case 0:case 11:case 14:case 15:Na(2,a,t),Ge||Na(4,a,t),na(e,t,a);break;case 1:Ge||(qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wd(a,t,l)),na(e,t,a);break;case 21:na(e,t,a);break;case 22:Ge=(l=Ge)||a.memoizedState!==null,na(e,t,a),Ge=l;break;default:na(e,t,a)}}function Dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xl(e)}catch(a){be(t,t.return,a)}}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(a){be(t,t.return,a)}}function Ip(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ad),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ad),t;default:throw Error(u(435,e.tag))}}function qi(e,t){var a=Ip(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=o_.bind(null,e,l);l.then(n,n)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Oa(c.type)){De=c.stateNode,rt=!1;break e}break;case 5:De=c.stateNode,rt=!1;break e;case 3:case 4:De=c.stateNode.containerInfo,rt=!0;break e}c=c.return}if(De===null)throw Error(u(160));Cd(i,r,n),De=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}var Ut=null;function Od(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),ut(e),l&4&&(Na(3,e,e.return),Tn(3,e),Na(5,e,e.return));break;case 1:ot(t,e),ut(e),l&512&&(Ge||a===null||qt(a,a.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ot(t,e),ut(e),l&512&&(Ge||a===null||qt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,l,a),i[Ke]=e,Fe(i),l=i;break e;case"link":var r=zf("link","href",n).get(l+(a.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;case"meta":if(r=zf("meta","content",n).get(l+(a.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(c,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[Ke]=e,Fe(i),l=i}e.stateNode=l}else Uf(n,e.type,e.stateNode);else e.stateNode=Of(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Uf(n,e.type,e.stateNode):Of(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Zr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),ut(e),l&512&&(Ge||a===null||qt(a,a.return)),a!==null&&l&4&&Zr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),ut(e),l&512&&(Ge||a===null||qt(a,a.return)),e.flags&32){n=e.stateNode;try{ml(n,"")}catch(Q){be(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Zr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Pr=!0);break;case 6:if(ot(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){be(e,e.return,Q)}}break;case 3:if(as=null,n=Ut,Ut=es(t.containerInfo),ot(t,e),Ut=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch(Q){be(e,e.return,Q)}Pr&&(Pr=!1,zd(e));break;case 4:l=Ut,Ut=es(e.stateNode.containerInfo),ot(t,e),ut(e),Ut=l;break;case 12:ot(t,e),ut(e);break;case 31:ot(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 13:ot(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gi=tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,w=la,D=Ge;if(la=w||n,Ge=D||p,ot(t,e),Ge=D,la=w,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||la||Ge||ll(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=p.stateNode;var O=p.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){be(p,p.return,Q)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(Q){be(p,p.return,Q)}}}else if(t.tag===18){if(a===null){p=t;try{var A=p.stateNode;n?Tf(A,!0):Tf(p.stateNode,!1)}catch(Q){be(p,p.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qi(e,a))));break;case 19:ot(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qi(e,l)));break;case 30:break;case 21:break;default:ot(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ed(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Kr(e);Bi(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(ml(r,""),a.flags&=-33);var c=Kr(e);Bi(e,c,r);break;case 3:case 4:var p=a.stateNode.containerInfo,w=Kr(e);Jr(e,w,p);break;default:throw Error(u(161))}}catch(D){be(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jd(e,t.alternate,t),t=t.sibling}function ll(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),ll(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wd(t,t.return,a),ll(t);break;case 27:zn(t.stateNode);case 26:case 5:qt(t,t.return),ll(t);break;case 22:t.memoizedState===null&&ll(t);break;case 30:ll(t);break;default:ll(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:sa(n,i,a),Tn(4,i);break;case 1:if(sa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){be(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)dc(p[n],c)}catch(w){be(l,l.return,w)}}a&&r&64&&Sd(i),En(i,i.return);break;case 27:Nd(i);case 26:case 5:sa(n,i,a),a&&l===null&&r&4&&Td(i),En(i,i.return);break;case 12:sa(n,i,a);break;case 31:sa(n,i,a),a&&r&4&&Dd(n,i);break;case 13:sa(n,i,a),a&&r&4&&Md(n,i);break;case 22:i.memoizedState===null&&sa(n,i,a),En(i,i.return);break;case 30:break;default:sa(n,i,a)}t=t.sibling}}function Wr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&dn(a))}function $r(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dn(e))}function Ht(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,l),t=t.sibling}function Ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,a,l),n&2048&&Tn(9,t);break;case 1:Ht(e,t,a,l);break;case 3:Ht(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dn(e)));break;case 12:if(n&2048){Ht(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){be(t,t.return,p)}}else Ht(e,t,a,l);break;case 31:Ht(e,t,a,l);break;case 13:Ht(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,a,l):Nn(e,t):i._visibility&2?Ht(e,t,a,l):(i._visibility|=2,Ol(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Wr(r,t);break;case 24:Ht(e,t,a,l),n&2048&&$r(t.alternate,t);break;default:Ht(e,t,a,l)}}function Ol(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=a,p=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:Ol(i,r,c,p,n),Tn(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?Ol(i,r,c,p,n):Nn(i,r):(D._visibility|=2,Ol(i,r,c,p,n)),n&&w&2048&&Wr(r.alternate,r);break;case 24:Ol(i,r,c,p,n),n&&w&2048&&$r(r.alternate,r);break;default:Ol(i,r,c,p,n)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Nn(a,l),n&2048&&Wr(l.alternate,l);break;case 24:Nn(a,l),n&2048&&$r(l.alternate,l);break;default:Nn(a,l)}t=t.sibling}}var An=8192;function zl(e,t,a){if(e.subtreeFlags&An)for(e=e.child;e!==null;)Hd(e,t,a),e=e.sibling}function Hd(e,t,a){switch(e.tag){case 26:zl(e,t,a),e.flags&An&&e.memoizedState!==null&&B_(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,a);break;case 3:case 4:var l=Ut;Ut=es(e.stateNode.containerInfo),zl(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=An,An=16777216,zl(e,t,a),An=l):zl(e,t,a));break;default:zl(e,t,a)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,Bd(l,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kd(e),e=e.sibling}function kd(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&Na(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yi(e)):jn(e);break;default:jn(e)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,Bd(l,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),Yi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Yi(t));break;default:Yi(t)}e=e.sibling}}function Bd(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:Na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:dn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ze=l;else e:for(a=e;Ze!==null;){l=Ze;var n=l.sibling,i=l.return;if(Rd(l),l===a){Ze=null;break e}if(n!==null){n.return=i,Ze=n;break e}Ze=i}}}var e_={getCacheForType:function(e){var t=Pe(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Be).controller.signal}},t_=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ee=null,ie=null,oe=0,ve=0,vt=null,Aa=!1,Ul=!1,Ir=!1,ra=0,ze=0,ja=0,nl=0,eo=0,bt=0,Hl=0,Rn=null,ct=null,to=!1,Gi=0,qd=0,Vi=1/0,Xi=null,Ra=null,Xe=0,Ca=null,Ll=null,oa=0,ao=0,lo=null,Yd=null,Cn=0,no=null;function xt(){return(ge&2)!==0&&oe!==0?oe&-oe:C.T!==null?co():lu()}function Gd(){if(bt===0)if((oe&536870912)===0||ce){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),bt=e}else bt=536870912;return e=gt.current,e!==null&&(e.flags|=32),bt}function dt(e,t,a){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(kl(e,0),Da(e,oe,bt,!1)),Pl(e,a),((ge&2)===0||e!==Ee)&&(e===Ee&&((ge&2)===0&&(nl|=a),ze===4&&Da(e,oe,bt,!1)),Yt(e))}function Vd(e,t,a){if((ge&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),n=l?n_(e,t):so(e,t,!0),i=l;do{if(n===0){Ul&&!l&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!a_(a)){n=so(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;n=Rn;var p=c.current.memoizedState.isDehydrated;if(p&&(kl(c,r).flags|=256),r=so(c,r,!1),r!==2){if(Ir&&!p){c.errorRecoveryDisabledLanes|=i,nl|=i,n=4;break e}i=ct,ct=n,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){kl(e,0),Da(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Da(l,t,bt,!Aa);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Gi+300-tt(),10<n)){if(Da(l,t,bt,!Aa),ei(l,0,!0)!==0)break e;oa=t,l.timeoutHandle=xf(Xd.bind(null,l,a,ct,Xi,to,t,bt,nl,Hl,Aa,i,"Throttled",-0,0),n);break e}Xd(l,a,ct,Xi,to,t,bt,nl,Hl,Aa,i,null,-0,0)}}break}while(!0);Yt(e)}function Xd(e,t,a,l,n,i,r,c,p,w,D,O,T,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Hd(t,i,O);var Q=(i&62914560)===i?Gi-tt():(i&4194048)===i?qd-tt():0;if(Q=q_(O,Q),Q!==null){oa=i,e.cancelPendingCommit=Q($d.bind(null,e,t,i,a,l,n,r,c,p,D,O,null,T,A)),Da(e,i,r,!w);return}}$d(e,t,i,a,l,n,r,c,p)}function a_(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!_t(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,l){t&=~eo,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&eu(e,a,t)}function Qi(){return(ge&6)===0?(Dn(0),!1):!0}function io(){if(ie!==null){if(ve===0)var e=ie.return;else e=ie,Wt=Ja=null,xr(e),jl=null,mn=0,e=ie;for(;e!==null;)xd(e.alternate,e),e=e.return;ie=null}}function kl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,S_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,io(),Ee=e,ie=a=Jt(e.current,null),oe=t,ve=0,vt=null,Aa=!1,Ul=Jl(e,t),Ir=!1,Hl=bt=eo=nl=ja=ze=0,ct=Rn=null,to=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ra=t,fi(),a}function Qd(e,t){ae=null,C.H=xn,t===Al||t===bi?(t=rc(),ve=3):t===ur?(t=rc(),ve=4):ve=t===Lr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,ie===null&&(ze=1,zi(e,Nt(t,e.current)))}function Fd(){var e=gt.current;return e===null?!0:(oe&4194048)===oe?Ct===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Ct:!1}function Zd(){var e=C.H;return C.H=xn,e===null?xn:e}function Kd(){var e=C.A;return C.A=e_,e}function Fi(){ze=4,Aa||(oe&4194048)!==oe&&gt.current!==null||(Ul=!0),(ja&134217727)===0&&(nl&134217727)===0||Ee===null||Da(Ee,oe,bt,!1)}function so(e,t,a){var l=ge;ge|=2;var n=Zd(),i=Kd();(Ee!==e||oe!==t)&&(Xi=null,kl(e,t)),t=!1;var r=ze;e:do try{if(ve!==0&&ie!==null){var c=ie,p=vt;switch(ve){case 8:io(),r=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var w=ve;if(ve=0,vt=null,Bl(e,c,p,w),a&&Ul){r=0;break e}break;default:w=ve,ve=0,vt=null,Bl(e,c,p,w)}}l_(),r=ze;break}catch(D){Qd(e,D)}while(!0);return t&&e.shellSuspendCounter++,Wt=Ja=null,ge=l,C.H=n,C.A=i,ie===null&&(Ee=null,oe=0,fi()),r}function l_(){for(;ie!==null;)Jd(ie)}function n_(e,t){var a=ge;ge|=2;var l=Zd(),n=Kd();Ee!==e||oe!==t?(Xi=null,Vi=tt()+500,kl(e,t)):Ul=Jl(e,t);e:do try{if(ve!==0&&ie!==null){t=ie;var i=vt;t:switch(ve){case 1:ve=0,vt=null,Bl(e,t,i,1);break;case 2:case 9:if(ic(i)){ve=0,vt=null,Pd(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Yt(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:ic(i)?(ve=0,vt=null,Pd(t)):(ve=0,vt=null,Bl(e,t,i,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var c=ie;if(r?Hf(r):c.stateNode.complete){ve=0,vt=null;var p=c.sibling;if(p!==null)ie=p;else{var w=c.return;w!==null?(ie=w,Zi(w)):ie=null}break t}}ve=0,vt=null,Bl(e,t,i,5);break;case 6:ve=0,vt=null,Bl(e,t,i,6);break;case 8:io(),ze=6;break e;default:throw Error(u(462))}}i_();break}catch(D){Qd(e,D)}while(!0);return Wt=Ja=null,C.H=l,C.A=n,ge=a,ie!==null?0:(Ee=null,oe=0,fi(),ze)}function i_(){for(;ie!==null&&!ma();)Jd(ie)}function Jd(e){var t=vd(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Zi(e):ie=t}function Pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=md(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=md(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:xr(t);default:xd(a,t),t=ie=Ku(t,ra),t=vd(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Zi(e):ie=t}function Bl(e,t,a,l){Wt=Ja=null,xr(t),jl=null,mn=0;var n=t.return;try{if(Zp(e,n,t,a,oe)){ze=1,zi(e,Nt(a,e.current)),ie=null;return}}catch(i){if(n!==null)throw ie=n,i;ze=1,zi(e,Nt(a,e.current)),ie=null;return}t.flags&32768?(ce||l===1?e=!0:Ul||(oe&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wd(t,e)):Zi(t)}function Zi(e){var t=e;do{if((t.flags&32768)!==0){Wd(t,Aa);return}e=t.return;var a=Pp(t.alternate,t,ra);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ze===0&&(ze=5)}function Wd(e,t){do{var a=Wp(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);ze=6,ie=null}function $d(e,t,a,l,n,i,r,c,p){e.cancelPendingCommit=null;do Ki();while(Xe!==0);if((ge&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Ks,km(e,a,i,r,c,p),e===Ee&&(ie=Ee=null,oe=0),Ll=t,Ca=e,oa=a,ao=i,lo=n,Yd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u_(Pn,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=H.p,H.p=2,r=ge,ge|=4;try{$p(e,t,a)}finally{ge=r,H.p=n,C.T=l}}Xe=1,Id(),ef(),tf()}}function Id(){if(Xe===1){Xe=0;var e=Ca,t=Ll,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=ge;ge|=4;try{Od(t,e);var i=vo,r=Bu(e.containerInfo),c=i.focusedElem,p=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&ku(c.ownerDocument.documentElement,c)){if(p!==null&&Vs(c)){var w=p.start,D=p.end;if(D===void 0&&(D=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(D,c.value.length);else{var O=c.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),Q=c.textContent.length,W=Math.min(p.start,Q),Te=p.end===void 0?W:Math.min(p.end,Q);!A.extend&&W>Te&&(r=Te,Te=W,W=r);var b=Lu(c,W),g=Lu(c,Te);if(b&&g&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=O.createRange();S.setStart(b.node,b.offset),A.removeAllRanges(),W>Te?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(O=[],A=c;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var M=O[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ss=!!yo,vo=yo=null}finally{ge=n,H.p=l,C.T=a}}e.current=t,Xe=2}}function ef(){if(Xe===2){Xe=0;var e=Ca,t=Ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var l=H.p;H.p=2;var n=ge;ge|=4;try{jd(e,t.alternate,t)}finally{ge=n,H.p=l,C.T=a}}Xe=3}}function tf(){if(Xe===4||Xe===3){Xe=0,vs();var e=Ca,t=Ll,a=oa,l=Yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Ll=Ca=null,af(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ra=null),Ts(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,n=H.p,H.p=2,C.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var c=l[r];i(c.value,{componentStack:c.stack})}}finally{C.T=t,H.p=n}}(oa&3)!==0&&Ki(),Yt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===no?Cn++:(Cn=0,no=e):Cn=0,Dn(0)}}function af(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dn(t)))}function Ki(){return Id(),ef(),tf(),lf()}function lf(){if(Xe!==5)return!1;var e=Ca,t=ao;ao=0;var a=Ts(oa),l=C.T,n=H.p;try{H.p=32>a?32:a,C.T=null,a=lo,lo=null;var i=Ca,r=oa;if(Xe=0,Ll=Ca=null,oa=0,(ge&6)!==0)throw Error(u(331));var c=ge;if(ge|=4,kd(i.current),Ud(i,i.current,r,a),ge=c,Dn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Kl,i)}catch{}return!0}finally{H.p=n,C.T=l,af(e,t)}}function nf(e,t,a){t=Nt(a,t),t=Hr(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(Pl(e,2),Yt(e))}function be(e,t,a){if(e.tag===3)nf(e,e,a);else for(;t!==null;){if(t.tag===3){nf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){e=Nt(a,e),a=id(2),l=wa(t,a,2),l!==null&&(sd(a,l,t,e),Pl(l,2),Yt(l));break}}t=t.return}}function ro(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new t_;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ir=!0,n.add(a),e=s_.bind(null,e,t,a),t.then(e,e))}function s_(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(oe&a)===a&&(ze===4||ze===3&&(oe&62914560)===oe&&300>tt()-Gi?(ge&2)===0&&kl(e,0):eo|=a,Hl===oe&&(Hl=0)),Yt(e)}function sf(e,t){t===0&&(t=Io()),e=Fa(e,t),e!==null&&(Pl(e,t),Yt(e))}function r_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sf(e,a)}function o_(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),sf(e,a)}function u_(e,t){return Qt(e,t)}var Ji=null,ql=null,oo=!1,Pi=!1,uo=!1,Ma=0;function Yt(e){e!==ql&&e.next===null&&(ql===null?Ji=ql=e:ql=ql.next=e),Pi=!0,oo||(oo=!0,d_())}function Dn(e,t){if(!uo&&Pi){uo=!0;do for(var a=!1,l=Ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,cf(l,i))}else i=oe,i=ei(l,l===Ee?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Jl(l,i)||(a=!0,cf(l,i));l=l.next}while(a);uo=!1}}function c_(){rf()}function rf(){Pi=oo=!1;var e=0;Ma!==0&&x_()&&(e=Ma);for(var t=tt(),a=null,l=Ji;l!==null;){var n=l.next,i=of(l,t);i===0?(l.next=null,a===null?Ji=n:a.next=n,n===null&&(ql=a)):(a=l,(e!==0||(i&3)!==0)&&(Pi=!0)),l=n}Xe!==0&&Xe!==5||Dn(e),Ma!==0&&(Ma=0)}function of(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-pt(i),c=1<<r,p=n[r];p===-1?((c&a)===0||(c&l)!==0)&&(n[r]=Lm(c,t)):p<=t&&(e.expiredLanes|=c),i&=~c}if(t=Ee,a=oe,a=ei(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&sl(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&sl(l),Ts(a)){case 2:case 8:a=Jn;break;case 32:a=Pn;break;case 268435456:a=$o;break;default:a=Pn}return l=uf.bind(null,e),a=Qt(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&sl(l),e.callbackPriority=2,e.callbackNode=null,2}function uf(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ki()&&e.callbackNode!==a)return null;var l=oe;return l=ei(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vd(e,l,t),of(e,tt()),e.callbackNode!=null&&e.callbackNode===a?uf.bind(null,e):null)}function cf(e,t){if(Ki())return null;Vd(e,t,!0)}function d_(){w_(function(){(ge&6)!==0?Qt(xs,c_):rf()})}function co(){if(Ma===0){var e=El;e===0&&(e=Wn,Wn<<=1,(Wn&261888)===0&&(Wn=256)),Ma=e}return Ma}function df(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ni(""+e)}function ff(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f_(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=df((n[it]||null).action),r=l.submitter;r&&(t=(t=r[it]||null)?df(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new oi("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ma!==0){var p=r?ff(n,r):new FormData(n);Cr(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(c.preventDefault(),p=r?ff(n,r):new FormData(n),Cr(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var fo=0;fo<Zs.length;fo++){var mo=Zs[fo],m_=mo.toLowerCase(),p_=mo[0].toUpperCase()+mo.slice(1);zt(m_,"on"+p_)}zt(Gu,"onAnimationEnd"),zt(Vu,"onAnimationIteration"),zt(Xu,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Cp,"onTransitionRun"),zt(Dp,"onTransitionStart"),zt(Mp,"onTransitionCancel"),zt(Qu,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));function mf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var c=l[r],p=c.instance,w=c.currentTarget;if(c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(D){di(D)}n.currentTarget=null,i=p}else for(r=0;r<l.length;r++){if(c=l[r],p=c.instance,w=c.currentTarget,c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(D){di(D)}n.currentTarget=null,i=p}}}}function se(e,t){var a=t[Es];a===void 0&&(a=t[Es]=new Set);var l=e+"__bubble";a.has(l)||(pf(t,e,2,!1),a.add(l))}function po(e,t,a){var l=0;t&&(l|=4),pf(a,e,l,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[Wi]){e[Wi]=!0,su.forEach(function(a){a!=="selectionchange"&&(__.has(a)||po(a,!1,e),po(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,po("selectionchange",!1,t))}}function pf(e,t,a,l){switch(Vf(t)){case 2:var n=V_;break;case 8:n=X_;break;default:n=Co}a=n.bind(null,t,a,e),n=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ho(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=ol(c),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=i=r;continue e}c=c.parentNode}}l=l.return}yu(function(){var w=i,D=Ms(a),O=[];e:{var T=Fu.get(e);if(T!==void 0){var A=oi,Q=e;switch(e){case"keypress":if(si(a)===0)break e;case"keydown":case"keyup":A=op;break;case"focusin":Q="focus",A=ks;break;case"focusout":Q="blur",A=ks;break;case"beforeblur":case"afterblur":A=ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=dp;break;case Gu:case Vu:case Xu:A=Im;break;case Qu:A=mp;break;case"scroll":case"scrollend":A=Km;break;case"wheel":A=_p;break;case"copy":case"cut":case"paste":A=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=wu;break;case"toggle":case"beforetoggle":A=gp}var W=(t&4)!==0,Te=!W&&(e==="scroll"||e==="scrollend"),b=W?T!==null?T+"Capture":null:T;W=[];for(var g=w,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||b===null||(M=Il(g,b),M!=null&&W.push(On(g,M,S))),Te)break;g=g.return}0<W.length&&(T=new A(T,Q,null,a,D),O.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==Ds&&(Q=a.relatedTarget||a.fromElement)&&(ol(Q)||Q[rl]))break e;if((A||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,A?(Q=a.relatedTarget||a.toElement,A=w,Q=Q?ol(Q):null,Q!==null&&(Te=h(Q),W=Q.tag,Q!==Te||W!==5&&W!==27&&W!==6)&&(Q=null)):(A=null,Q=w),A!==Q)){if(W=xu,M="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=wu,M="onPointerLeave",b="onPointerEnter",g="pointer"),Te=A==null?T:$l(A),S=Q==null?T:$l(Q),T=new W(M,g+"leave",A,a,D),T.target=Te,T.relatedTarget=S,M=null,ol(D)===w&&(W=new W(b,g+"enter",Q,a,D),W.target=S,W.relatedTarget=Te,M=W),Te=M,A&&Q)t:{for(W=h_,b=A,g=Q,S=0,M=b;M;M=W(M))S++;M=0;for(var K=g;K;K=W(K))M++;for(;0<S-M;)b=W(b),S--;for(;0<M-S;)g=W(g),M--;for(;S--;){if(b===g||g!==null&&b===g.alternate){W=b;break t}b=W(b),g=W(g)}W=null}else W=null;A!==null&&_f(O,T,A,W,!1),Q!==null&&Te!==null&&_f(O,Te,Q,W,!0)}}e:{if(T=w?$l(w):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var fe=Du;else if(Ru(T))if(Mu)fe=Ap;else{fe=Ep;var F=Tp}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Cs(w.elementType)&&(fe=Du):fe=Np;if(fe&&(fe=fe(e,w))){Cu(O,fe,a,D);break e}F&&F(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&Rs(T,"number",T.value)}switch(F=w?$l(w):window,e){case"focusin":(Ru(F)||F.contentEditable==="true")&&(gl=F,Xs=w,on=null);break;case"focusout":on=Xs=gl=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,qu(O,a,D);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":qu(O,a,D)}var le;if(qs)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else hl?Au(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Tu&&a.locale!=="ko"&&(hl||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&hl&&(le=vu()):(ha=D,Us="value"in ha?ha.value:ha.textContent,hl=!0)),F=$i(w,ue),0<F.length&&(ue=new Su(ue,e,null,a,D),O.push({event:ue,listeners:F}),le?ue.data=le:(le=ju(a),le!==null&&(ue.data=le)))),(le=vp?bp(e,a):xp(e,a))&&(ue=$i(w,"onBeforeInput"),0<ue.length&&(F=new Su("onBeforeInput","beforeinput",null,a,D),O.push({event:F,listeners:ue}),F.data=le)),f_(O,e,w,a,D)}mf(O,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(On(e,n,i)),n=Il(e,t),n!=null&&l.push(On(e,n,i))),e.tag===3)return l;e=e.return}return[]}function h_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _f(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var c=a,p=c.alternate,w=c.stateNode;if(c=c.tag,p!==null&&p===l)break;c!==5&&c!==26&&c!==27||w===null||(p=w,n?(w=Il(a,i),w!=null&&r.unshift(On(a,w,p))):n||(w=Il(a,i),w!=null&&r.push(On(a,w,p)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var g_=/\r\n?/g,y_=/\u0000|\uFFFD/g;function hf(e){return(typeof e=="string"?e:""+e).replace(g_,`
`).replace(y_,"")}function gf(e,t){return t=hf(t),hf(e)===t}function we(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ml(e,""+l);break;case"className":ai(e,"class",l);break;case"tabIndex":ai(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,a,l);break;case"style":hu(e,l,i);break;case"data":if(t!=="object"){ai(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ni(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",n.name,n,null),we(e,t,"formEncType",n.formEncType,n,null),we(e,t,"formMethod",n.formMethod,n,null),we(e,t,"formTarget",n.formTarget,n,null)):(we(e,t,"encType",n.encType,n,null),we(e,t,"method",n.method,n,null),we(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ni(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ni(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),ti(e,"popover",l);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ti(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fm.get(a)||a,ti(e,a,l))}}function go(e,t,a,l,n,i){switch(a){case"style":hu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ml(e,l):(typeof l=="number"||typeof l=="bigint")&&ml(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ru.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ti(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,i,r,a,null)}}n&&we(e,t,"srcSet",a.srcSet,a,null),l&&we(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var c=i=r=n=null,p=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":r=D;break;case"checked":p=D;break;case"defaultChecked":w=D;break;case"value":i=D;break;case"defaultValue":c=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:we(e,t,l,D,a,null)}}fu(e,i,c,p,w,r,n,!1);return;case"select":se("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:we(e,t,n,c,a,null)}t=i,a=r,e.multiple=!!l,t!=null?fl(e,!!l,t,!1):a!=null&&fl(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:we(e,t,r,c,a,null)}pu(e,l,n,i);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":we(e,t,p,l,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Mn.length;l++)se(Mn[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,w,l,a,null)}return;default:if(Cs(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&go(e,t,D,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&we(e,t,c,l,a,null))}function v_(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,p=null,w=null,D=null;for(A in a){var O=a[A];if(a.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=O;default:l.hasOwnProperty(A)||we(e,t,A,null,l,O)}}for(var T in l){var A=l[T];if(O=a[T],l.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":i=A;break;case"name":n=A;break;case"checked":w=A;break;case"defaultChecked":D=A;break;case"value":r=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==O&&we(e,t,T,A,l,O)}}js(e,r,c,p,w,D,i,n);return;case"select":A=r=c=T=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":A=p;default:l.hasOwnProperty(i)||we(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":T=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==p&&we(e,t,n,i,l,p)}t=c,a=r,l=A,T!=null?fl(e,!!a,T,!1):!!l!=!!a&&(t!=null?fl(e,!!a,t,!0):fl(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:we(e,t,c,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":T=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&we(e,t,r,n,l,i)}mu(e,T,A);return;case"option":for(var Q in a)T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!l.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:we(e,t,Q,null,l,T));for(p in l)T=l[p],A=a[p],l.hasOwnProperty(p)&&T!==A&&(T!=null||A!=null)&&(p==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":we(e,t,p,T,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)T=a[W],a.hasOwnProperty(W)&&T!=null&&!l.hasOwnProperty(W)&&we(e,t,W,null,l,T);for(w in l)if(T=l[w],A=a[w],l.hasOwnProperty(w)&&T!==A&&(T!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:we(e,t,w,T,l,A)}return;default:if(Cs(t)){for(var Te in a)T=a[Te],a.hasOwnProperty(Te)&&T!==void 0&&!l.hasOwnProperty(Te)&&go(e,t,Te,void 0,l,T);for(D in l)T=l[D],A=a[D],!l.hasOwnProperty(D)||T===A||T===void 0&&A===void 0||go(e,t,D,T,l,A);return}}for(var b in a)T=a[b],a.hasOwnProperty(b)&&T!=null&&!l.hasOwnProperty(b)&&we(e,t,b,null,l,T);for(O in l)T=l[O],A=a[O],!l.hasOwnProperty(O)||T===A||T==null&&A==null||we(e,t,O,T,l,A)}function yf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,c=n.duration;if(i&&c&&yf(r)){for(r=0,c=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],w=p.startTime;if(w>c)break;var D=p.transferSize,O=p.initiatorType;D&&yf(O)&&(p=p.responseEnd,r+=D*(p<c?1:(c-w)/(p-w)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yo=null,vo=null;function Ii(e){return e.nodeType===9?e:e.ownerDocument}function vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=null;function x_(){var e=window.event;return e&&e.type==="popstate"?e===xo?!1:(xo=e,!0):(xo=null,!1)}var xf=typeof setTimeout=="function"?setTimeout:void 0,S_=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(e){return Sf.resolve(null).then(e).catch(T_)}:xf;function T_(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function wf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Xl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[Wl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&zn(e.ownerDocument.body);a=n}while(a);Xl(t)}function Tf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function So(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":So(a),Ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function E_(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function N_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Dt(e.nextSibling),e===null))return null;return e}function Ef(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dt(e.nextSibling),e===null))return null;return e}function wo(e){return e.data==="$?"||e.data==="$~"}function To(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A_(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Eo=null;function Nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Dt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function jf(e,t,a){switch(t=Ii(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function zn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ns(e)}var Mt=new Map,Rf=new Set;function es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=H.d;H.d={f:j_,r:R_,D:C_,C:D_,L:M_,m:O_,X:U_,S:z_,M:H_};function j_(){var e=ua.f(),t=Qi();return e||t}function R_(e){var t=ul(e);t!==null&&t.tag===5&&t.type==="form"?Qc(t):ua.r(e)}var Yl=typeof document>"u"?null:document;function Cf(e,t,a){var l=Yl;if(l&&typeof t=="string"&&t){var n=Tt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Rf.has(n)||(Rf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Fe(t),l.head.appendChild(t)))}}function C_(e){ua.D(e),Cf("dns-prefetch",e,null)}function D_(e,t){ua.C(e,t),Cf("preconnect",e,t)}function M_(e,t,a){ua.L(e,t,a);var l=Yl;if(l&&e&&t){var n='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Tt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Tt(a.imageSizes)+'"]')):n+='[href="'+Tt(e)+'"]';var i=n;switch(t){case"style":i=Gl(e);break;case"script":i=Vl(e)}Mt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Un(i))||t==="script"&&l.querySelector(Hn(i))||(t=l.createElement("link"),$e(t,"link",e),Fe(t),l.head.appendChild(t)))}}function O_(e,t){ua.m(e,t);var a=Yl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vl(e)}if(!Mt.has(i)&&(e=N({rel:"modulepreload",href:e},t),Mt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Hn(i)))return}l=a.createElement("link"),$e(l,"link",e),Fe(l),a.head.appendChild(l)}}}function z_(e,t,a){ua.S(e,t,a);var l=Yl;if(l&&e){var n=cl(l).hoistableStyles,i=Gl(e);t=t||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(Un(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(i))&&No(e,a);var p=r=l.createElement("link");Fe(p),$e(p,"link",e),p._p=new Promise(function(w,D){p.onload=w,p.onerror=D}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ts(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function U_(e,t){ua.X(e,t);var a=Yl;if(a&&e){var l=cl(a).hoistableScripts,n=Vl(e),i=l.get(n);i||(i=a.querySelector(Hn(n)),i||(e=N({src:e,async:!0},t),(t=Mt.get(n))&&Ao(e,t),i=a.createElement("script"),Fe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function H_(e,t){ua.M(e,t);var a=Yl;if(a&&e){var l=cl(a).hoistableScripts,n=Vl(e),i=l.get(n);i||(i=a.querySelector(Hn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=Mt.get(n))&&Ao(e,t),i=a.createElement("script"),Fe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Df(e,t,a,l){var n=(n=ne.current)?es(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Gl(a.href),a=cl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gl(a.href);var i=cl(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Un(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),i||L_(n,e,a,r.state))),t&&l===null)throw Error(u(528,""));return r}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(a),a=cl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gl(e){return'href="'+Tt(e)+'"'}function Un(e){return'link[rel="stylesheet"]['+e+"]"}function Mf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function L_(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Fe(t),e.head.appendChild(t))}function Vl(e){return'[src="'+Tt(e)+'"]'}function Hn(e){return"script[async]"+e}function Of(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Tt(a.href)+'"]');if(l)return t.instance=l,Fe(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Fe(l),$e(l,"style",n),ts(l,a.precedence,e),t.instance=l;case"stylesheet":n=Gl(a.href);var i=e.querySelector(Un(n));if(i)return t.state.loading|=4,t.instance=i,Fe(i),i;l=Mf(a),(n=Mt.get(n))&&No(l,n),i=(e.ownerDocument||e).createElement("link"),Fe(i);var r=i;return r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),$e(i,"link",l),t.state.loading|=4,ts(i,a.precedence,e),t.instance=i;case"script":return i=Vl(a.src),(n=e.querySelector(Hn(i)))?(t.instance=n,Fe(n),n):(l=a,(n=Mt.get(i))&&(l=N({},a),Ao(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Fe(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ts(l,a.precedence,e));return t.instance}function ts(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function No(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var as=null;function zf(e,t,a){if(as===null){var l=new Map,n=as=new Map;n.set(a,l)}else n=as,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=l.get(r);c?c.push(i):l.set(r,[i])}}return l}function Uf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function k_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B_(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Gl(l.href),i=t.querySelector(Un(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ls.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Fe(i);return}i=t.ownerDocument||t,l=Mf(l),(n=Mt.get(n))&&No(l,n),i=i.createElement("link"),Fe(i);var r=i;r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),$e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ls.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var jo=0;function q_(e,t){return e.stylesheets&&e.count===0&&is(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&is(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&jo===0&&(jo=62500*b_());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&is(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>jo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ls(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ns=null;function is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ns=new Map,t.forEach(Y_,e),ns=null,ls.call(e))}function Y_(e,t){if(!(t.state.loading&4)){var a=ns.get(e);if(a)var l=a.get(null);else{a=new Map,ns.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=ls.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Ln={$$typeof:J,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function G_(e,t,a,l,n,i,r,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Lf(e,t,a,l,n,i,r,c,p,w,D,O){return e=new G_(e,t,a,r,p,w,D,O,c),t=1,i===!0&&(t|=24),i=ht(3,null,null,t),e.current=i,i.stateNode=e,t=sr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},cr(i),e}function kf(e){return e?(e=bl,e):bl}function Bf(e,t,a,l,n,i){n=kf(n),l.context===null?l.context=n:l.pendingContext=n,l=Sa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=wa(e,l,t),a!==null&&(dt(a,e,t),_n(a,e,t))}function qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ro(e,t){qf(e,t),(e=e.alternate)&&qf(e,t)}function Yf(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&dt(t,e,67108864),Ro(e,67108864)}}function Gf(e){if(e.tag===13||e.tag===31){var t=xt();t=ws(t);var a=Fa(e,t);a!==null&&dt(a,e,t),Ro(e,t)}}var ss=!0;function V_(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=2,Co(e,t,a,l)}finally{H.p=i,C.T=n}}function X_(e,t,a,l){var n=C.T;C.T=null;var i=H.p;try{H.p=8,Co(e,t,a,l)}finally{H.p=i,C.T=n}}function Co(e,t,a,l){if(ss){var n=Do(l);if(n===null)ho(e,t,l,rs,a),Xf(e,l);else if(F_(n,e,t,a,l))l.stopPropagation();else if(Xf(e,l),t&4&&-1<Q_.indexOf(e)){for(;n!==null;){var i=ul(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Ya(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var p=1<<31-pt(r);c.entanglements[1]|=p,r&=~p}Yt(i),(ge&6)===0&&(Vi=tt()+500,Dn(0))}}break;case 31:case 13:c=Fa(i,2),c!==null&&dt(c,i,2),Qi(),Ro(i,2)}if(i=Do(l),i===null&&ho(e,t,l,rs,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ho(e,t,l,null,a)}}function Do(e){return e=Ms(e),Mo(e)}var rs=null;function Mo(e){if(rs=null,e=ol(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=R(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rs=e,null}function Vf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bs()){case xs:return 2;case Jn:return 8;case Pn:case Dm:return 32;case $o:return 268435456;default:return 32}default:return 32}}var Oo=!1,za=null,Ua=null,Ha=null,kn=new Map,Bn=new Map,La=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xf(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function qn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ul(t),t!==null&&Yf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function F_(e,t,a,l,n){switch(t){case"focusin":return za=qn(za,e,t,a,l,n),!0;case"dragenter":return Ua=qn(Ua,e,t,a,l,n),!0;case"mouseover":return Ha=qn(Ha,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return kn.set(i,qn(kn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Bn.set(i,qn(Bn.get(i)||null,e,t,a,l,n)),!0}return!1}function Qf(e){var t=ol(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,nu(e.priority,function(){Gf(a)});return}}else if(t===31){if(t=R(a),t!==null){e.blockedOn=t,nu(e.priority,function(){Gf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Do(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ds=l,a.target.dispatchEvent(l),Ds=null}else return t=ul(a),t!==null&&Yf(t),e.blockedOn=a,!1;t.shift()}return!0}function Ff(e,t,a){os(e)&&a.delete(t)}function Z_(){Oo=!1,za!==null&&os(za)&&(za=null),Ua!==null&&os(Ua)&&(Ua=null),Ha!==null&&os(Ha)&&(Ha=null),kn.forEach(Ff),Bn.forEach(Ff)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Oo||(Oo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Z_)))}var cs=null;function Zf(e){cs!==e&&(cs=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Mo(l||a)===null)continue;break}var i=ul(a);i!==null&&(e.splice(t,3),t-=3,Cr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Xl(e){function t(p){return us(p,e)}za!==null&&us(za,e),Ua!==null&&us(Ua,e),Ha!==null&&us(Ha,e),kn.forEach(t),Bn.forEach(t);for(var a=0;a<La.length;a++){var l=La[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Qf(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[it]||null;if(typeof i=="function")r||Zf(a);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[it]||null)c=r.formAction;else if(Mo(n)!==null)continue}else c=r.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Zf(a)}}}function Kf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function zo(e){this._internalRoot=e}ds.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=xt();Bf(a,l,e,t,null,null)},ds.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bf(e.current,2,null,e,null,null),Qi(),t[rl]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&Qf(e)}};var Jf=d.version;if(Jf!=="19.2.3")throw Error(u(527,Jf,"19.2.3"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=_(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var K_={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{Kl=fs.inject(K_),mt=fs}catch{}}return Gn.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=td,i=ad,r=ld;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Lf(e,1,!1,null,null,a,l,null,n,i,r,Kf),e[rl]=t.current,_o(e),new zo(t)},Gn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=td,r=ad,c=ld,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Lf(e,1,!0,t,a??null,l,n,p,i,r,c,Kf),t.context=kf(null),a=t.current,l=xt(),l=ws(l),n=Sa(l),n.callback=null,wa(a,n,l),a=l,t.current.lanes=a,Pl(t,a),Yt(t),e[rl]=t.current,_o(e),new ds(t)},Gn.version="19.2.3",Gn}var im;function nh(){if(im)return Lo.exports;im=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Lo.exports=lh(),Lo.exports}var ih=nh();var sm="popstate";function sh(o={}){function d(u,m){let{pathname:h,search:x,hash:R}=u.location;return Xo("",{pathname:h,search:x,hash:R},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:Xn(m)}return oh(d,f,null,o)}function Me(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Gt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function rh(){return Math.random().toString(36).substring(2,10)}function rm(o,d){return{usr:o.state,key:o.key,idx:d}}function Xo(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Ql(d):d,state:f,key:d&&d.key||u||rh()}}function Xn({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Ql(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function oh(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:h=!1}=u,x=m.history,R="POP",v=null,_=j();_==null&&(_=0,x.replaceState({...x.state,idx:_},""));function j(){return(x.state||{idx:null}).idx}function N(){R="POP";let Y=j(),Z=Y==null?null:Y-_;_=Y,v&&v({action:R,location:k.location,delta:Z})}function U(Y,Z){R="PUSH";let q=Xo(k.location,Y,Z);_=j()+1;let J=rm(q,_),pe=k.createHref(q);try{x.pushState(J,"",pe)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;m.location.assign(pe)}h&&v&&v({action:R,location:k.location,delta:1})}function G(Y,Z){R="REPLACE";let q=Xo(k.location,Y,Z);_=j();let J=rm(q,_),pe=k.createHref(q);x.replaceState(J,"",pe),h&&v&&v({action:R,location:k.location,delta:0})}function B(Y){return uh(Y)}let k={get action(){return R},get location(){return o(m,x)},listen(Y){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener(sm,N),v=Y,()=>{m.removeEventListener(sm,N),v=null}},createHref(Y){return d(m,Y)},createURL:B,encodeLocation(Y){let Z=B(Y);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:U,replace:G,go(Y){return x.go(Y)}};return k}function uh(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Me(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:Xn(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function fm(o,d,f="/"){return ch(o,d,f,!1)}function ch(o,d,f,u){let m=typeof d=="string"?Ql(d):d,h=da(m.pathname||"/",f);if(h==null)return null;let x=mm(o);dh(x);let R=null;for(let v=0;R==null&&v<x.length;++v){let _=Sh(h);R=bh(x[v],_,u)}return R}function mm(o,d=[],f=[],u="",m=!1){let h=(x,R,v=m,_)=>{let j={relativePath:_===void 0?x.path||"":_,caseSensitive:x.caseSensitive===!0,childrenIndex:R,route:x};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&v)return;Me(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let N=ca([u,j.relativePath]),U=f.concat(j);x.children&&x.children.length>0&&(Me(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),mm(x.children,d,U,N,v)),!(x.path==null&&!x.index)&&d.push({path:N,score:yh(N,x.index),routesMeta:U})};return o.forEach((x,R)=>{if(x.path===""||!x.path?.includes("?"))h(x,R);else for(let v of pm(x.path))h(x,R,!0,v)}),d}function pm(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(u.length===0)return m?[h,""]:[h];let x=pm(u.join("/")),R=[];return R.push(...x.map(v=>v===""?h:[h,v].join("/"))),m&&R.push(...x),R.map(v=>o.startsWith("/")&&v===""?"/":v)}function dh(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:vh(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var fh=/^:[\w-]+$/,mh=3,ph=2,_h=1,hh=10,gh=-2,om=o=>o==="*";function yh(o,d){let f=o.split("/"),u=f.length;return f.some(om)&&(u+=gh),d&&(u+=ph),f.filter(m=>!om(m)).reduce((m,h)=>m+(fh.test(h)?mh:h===""?_h:hh),u)}function vh(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function bh(o,d,f=!1){let{routesMeta:u}=o,m={},h="/",x=[];for(let R=0;R<u.length;++R){let v=u[R],_=R===u.length-1,j=h==="/"?d:d.slice(h.length)||"/",N=hs({path:v.relativePath,caseSensitive:v.caseSensitive,end:_},j),U=v.route;if(!N&&_&&f&&!u[u.length-1].route.index&&(N=hs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},j)),!N)return null;Object.assign(m,N.params),x.push({params:m,pathname:ca([h,N.pathname]),pathnameBase:Nh(ca([h,N.pathnameBase])),route:U}),N.pathnameBase!=="/"&&(h=ca([h,N.pathnameBase]))}return x}function hs(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=xh(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let h=m[0],x=h.replace(/(.)\/+$/,"$1"),R=m.slice(1);return{params:u.reduce((_,{paramName:j,isOptional:N},U)=>{if(j==="*"){let B=R[U]||"";x=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const G=R[U];return N&&!G?_[j]=void 0:_[j]=(G||"").replace(/%2F/g,"/"),_},{}),pathname:h,pathnameBase:x,pattern:o}}function xh(o,d=!1,f=!0){Gt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,R,v)=>(u.push({paramName:R,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function Sh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Gt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function da(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}var wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Th(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Ql(o):o,h;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?h=um(f.substring(1),"/"):h=um(f,d)):h=d,{pathname:h,search:Ah(u),hash:jh(m)}}function um(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Yo(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eh(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function _m(o){let d=Eh(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function hm(o,d,f,u=!1){let m;typeof o=="string"?m=Ql(o):(m={...o},Me(!m.pathname||!m.pathname.includes("?"),Yo("?","pathname","search",m)),Me(!m.pathname||!m.pathname.includes("#"),Yo("#","pathname","hash",m)),Me(!m.search||!m.search.includes("#"),Yo("#","search","hash",m)));let h=o===""||m.pathname==="",x=h?"/":m.pathname,R;if(x==null)R=f;else{let N=d.length-1;if(!u&&x.startsWith("..")){let U=x.split("/");for(;U[0]==="..";)U.shift(),N-=1;m.pathname=U.join("/")}R=N>=0?d[N]:"/"}let v=Th(m,R),_=x&&x!=="/"&&x.endsWith("/"),j=(h||x===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(_||j)&&(v.pathname+="/"),v}var ca=o=>o.join("/").replace(/\/\/+/g,"/"),Nh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ah=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,jh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Rh=class{constructor(o,d,f,u=!1){this.status=o,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Ch(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Dh(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ym(o,d){let f=o;if(typeof f!="string"||!wh.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(gm)try{let h=new URL(window.location.href),x=f.startsWith("//")?new URL(h.protocol+f):new URL(f),R=da(x.pathname,d);x.origin===h.origin&&R!=null?f=R+x.search+x.hash:m=!0}catch{Gt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var Mh=["GET",...vm];new Set(Mh);var Fl=E.createContext(null);Fl.displayName="DataRouter";var gs=E.createContext(null);gs.displayName="DataRouterState";var Oh=E.createContext(!1),bm=E.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var zh=E.createContext(new Map);zh.displayName="Fetchers";var Uh=E.createContext(null);Uh.displayName="Await";var Ot=E.createContext(null);Ot.displayName="Navigation";var Qn=E.createContext(null);Qn.displayName="Location";var Vt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Vt.displayName="Route";var Zo=E.createContext(null);Zo.displayName="RouteError";var xm="REACT_ROUTER_ERROR",Hh="REDIRECT",Lh="ROUTE_ERROR_RESPONSE";function kh(o){if(o.startsWith(`${xm}:${Hh}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Bh(o){if(o.startsWith(`${xm}:${Lh}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Rh(d.status,d.statusText,d.data)}catch{}}function qh(o,{relative:d}={}){Me(Fn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=E.useContext(Ot),{hash:m,pathname:h,search:x}=Zn(o,{relative:d}),R=h;return f!=="/"&&(R=h==="/"?f:ca([f,h])),u.createHref({pathname:R,search:x,hash:m})}function Fn(){return E.useContext(Qn)!=null}function il(){return Me(Fn(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Qn).location}var Sm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wm(o){E.useContext(Ot).static||E.useLayoutEffect(o)}function Yh(){let{isDataRoute:o}=E.useContext(Vt);return o?tg():Gh()}function Gh(){Me(Fn(),"useNavigate() may be used only in the context of a <Router> component.");let o=E.useContext(Fl),{basename:d,navigator:f}=E.useContext(Ot),{matches:u}=E.useContext(Vt),{pathname:m}=il(),h=JSON.stringify(_m(u)),x=E.useRef(!1);return wm(()=>{x.current=!0}),E.useCallback((v,_={})=>{if(Gt(x.current,Sm),!x.current)return;if(typeof v=="number"){f.go(v);return}let j=hm(v,JSON.parse(h),m,_.relative==="path");o==null&&d!=="/"&&(j.pathname=j.pathname==="/"?d:ca([d,j.pathname])),(_.replace?f.replace:f.push)(j,_.state,_)},[d,f,h,m,o])}E.createContext(null);function Vh(){let{matches:o}=E.useContext(Vt),d=o[o.length-1];return d?d.params:{}}function Zn(o,{relative:d}={}){let{matches:f}=E.useContext(Vt),{pathname:u}=il(),m=JSON.stringify(_m(f));return E.useMemo(()=>hm(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Xh(o,d){return Tm(o,d)}function Tm(o,d,f,u,m){Me(Fn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=E.useContext(Ot),{matches:x}=E.useContext(Vt),R=x[x.length-1],v=R?R.params:{},_=R?R.pathname:"/",j=R?R.pathnameBase:"/",N=R&&R.route;{let q=N&&N.path||"";Nm(_,!N||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let U=il(),G;if(d){let q=typeof d=="string"?Ql(d):d;Me(j==="/"||q.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${q.pathname}" was given in the \`location\` prop.`),G=q}else G=U;let B=G.pathname||"/",k=B;if(j!=="/"){let q=j.replace(/^\//,"").split("/");k="/"+B.replace(/^\//,"").split("/").slice(q.length).join("/")}let Y=fm(o,{pathname:k});Gt(N||Y!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Gt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=Jh(Y&&Y.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:ca([j,h.encodeLocation?h.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?j:ca([j,h.encodeLocation?h.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),x,f,u,m);return d&&Z?E.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},Z):Z}function Qh(){let o=eg(),d=Ch(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",o),x=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:h},"ErrorBoundary")," or"," ",E.createElement("code",{style:h},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),f?E.createElement("pre",{style:m},f):null,x)}var Fh=E.createElement(Qh,null),Em=class extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=Bh(o.digest);f&&(o=f)}let d=o!==void 0?E.createElement(Vt.Provider,{value:this.props.routeContext},E.createElement(Zo.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?E.createElement(Zh,{error:o},d):d}};Em.contextType=Oh;var Go=new WeakMap;function Zh({children:o,error:d}){let{basename:f}=E.useContext(Ot);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=kh(d.digest);if(u){let m=Go.get(d);if(m)throw m;let h=ym(u.location,f);if(gm&&!Go.get(d))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw Go.set(d,x),x}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return o}function Kh({routeContext:o,match:d,children:f}){let u=E.useContext(Fl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(Vt.Provider,{value:o},f)}function Jh(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let h=o,x=f?.errors;if(x!=null){let j=h.findIndex(N=>N.route.id&&x?.[N.route.id]!==void 0);Me(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),h=h.slice(0,Math.min(h.length,j+1))}let R=!1,v=-1;if(f)for(let j=0;j<h.length;j++){let N=h[j];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(v=j),N.route.id){let{loaderData:U,errors:G}=f,B=N.route.loader&&!U.hasOwnProperty(N.route.id)&&(!G||G[N.route.id]===void 0);if(N.route.lazy||B){R=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let _=f&&u?(j,N)=>{u(j,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Dh(f.matches),errorInfo:N})}:void 0;return h.reduceRight((j,N,U)=>{let G,B=!1,k=null,Y=null;f&&(G=x&&N.route.id?x[N.route.id]:void 0,k=N.route.errorElement||Fh,R&&(v<0&&U===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,Y=null):v===U&&(B=!0,Y=N.route.hydrateFallbackElement||null)));let Z=d.concat(h.slice(0,U+1)),q=()=>{let J;return G?J=k:B?J=Y:N.route.Component?J=E.createElement(N.route.Component,null):N.route.element?J=N.route.element:J=j,E.createElement(Kh,{match:N,routeContext:{outlet:j,matches:Z,isDataRoute:f!=null},children:J})};return f&&(N.route.ErrorBoundary||N.route.errorElement||U===0)?E.createElement(Em,{location:f.location,revalidation:f.revalidation,component:k,error:G,children:q(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:_}):q()},null)}function Ko(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ph(o){let d=E.useContext(Fl);return Me(d,Ko(o)),d}function Wh(o){let d=E.useContext(gs);return Me(d,Ko(o)),d}function $h(o){let d=E.useContext(Vt);return Me(d,Ko(o)),d}function Jo(o){let d=$h(o),f=d.matches[d.matches.length-1];return Me(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Ih(){return Jo("useRouteId")}function eg(){let o=E.useContext(Zo),d=Wh("useRouteError"),f=Jo("useRouteError");return o!==void 0?o:d.errors?.[f]}function tg(){let{router:o}=Ph("useNavigate"),d=Jo("useNavigate"),f=E.useRef(!1);return wm(()=>{f.current=!0}),E.useCallback(async(m,h={})=>{Gt(f.current,Sm),f.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:d,...h}))},[o,d])}var cm={};function Nm(o,d,f){!d&&!cm[o]&&(cm[o]=!0,Gt(!1,f))}E.memo(ag);function ag({routes:o,future:d,state:f,onError:u}){return Tm(o,void 0,f,u,d)}function Ba(o){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lg({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:h=!1,unstable_useTransitions:x}){Me(!Fn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let R=o.replace(/^\/*/,"/"),v=E.useMemo(()=>({basename:R,navigator:m,static:h,unstable_useTransitions:x,future:{}}),[R,m,h,x]);typeof f=="string"&&(f=Ql(f));let{pathname:_="/",search:j="",hash:N="",state:U=null,key:G="default"}=f,B=E.useMemo(()=>{let k=da(_,R);return k==null?null:{location:{pathname:k,search:j,hash:N,state:U,key:G},navigationType:u}},[R,_,j,N,U,G,u]);return Gt(B!=null,`<Router basename="${R}"> is not able to match the URL "${_}${j}${N}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:E.createElement(Ot.Provider,{value:v},E.createElement(Qn.Provider,{children:d,value:B}))}function ng({children:o,location:d}){return Xh(Qo(o),d)}function Qo(o,d=[]){let f=[];return E.Children.forEach(o,(u,m)=>{if(!E.isValidElement(u))return;let h=[...d,m];if(u.type===E.Fragment){f.push.apply(f,Qo(u.props.children,h));return}Me(u.type===Ba,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!u.props.index||!u.props.children,"An index route cannot have child routes.");let x={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(x.children=Qo(u.props.children,h)),f.push(x)}),f}var ps="get",_s="application/x-www-form-urlencoded";function ys(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function ig(o){return ys(o)&&o.tagName.toLowerCase()==="button"}function sg(o){return ys(o)&&o.tagName.toLowerCase()==="form"}function rg(o){return ys(o)&&o.tagName.toLowerCase()==="input"}function og(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ug(o,d){return o.button===0&&(!d||d==="_self")&&!og(o)}var ms=null;function cg(){if(ms===null)try{new FormData(document.createElement("form"),0),ms=!1}catch{ms=!0}return ms}var dg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vo(o){return o!=null&&!dg.has(o)?(Gt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_s}"`),null):o}function fg(o,d){let f,u,m,h,x;if(sg(o)){let R=o.getAttribute("action");u=R?da(R,d):null,f=o.getAttribute("method")||ps,m=Vo(o.getAttribute("enctype"))||_s,h=new FormData(o)}else if(ig(o)||rg(o)&&(o.type==="submit"||o.type==="image")){let R=o.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||R.getAttribute("action");if(u=v?da(v,d):null,f=o.getAttribute("formmethod")||R.getAttribute("method")||ps,m=Vo(o.getAttribute("formenctype"))||Vo(R.getAttribute("enctype"))||_s,h=new FormData(R,o),!cg()){let{name:_,type:j,value:N}=o;if(j==="image"){let U=_?`${_}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else _&&h.append(_,N)}}else{if(ys(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ps,u=null,m=_s,x=o}return h&&m==="text/plain"&&(x=h,h=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Po(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function mg(o,d,f,u){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:d&&da(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function pg(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _g(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function hg(o,d,f){let u=await Promise.all(o.map(async m=>{let h=d.routes[m.route.id];if(h){let x=await pg(h,f);return x.links?x.links():[]}return[]}));return bg(u.flat(1).filter(_g).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function dm(o,d,f,u,m,h){let x=(v,_)=>f[_]?v.route.id!==f[_].route.id:!0,R=(v,_)=>f[_].pathname!==v.pathname||f[_].route.path?.endsWith("*")&&f[_].params["*"]!==v.params["*"];return h==="assets"?d.filter((v,_)=>x(v,_)||R(v,_)):h==="data"?d.filter((v,_)=>{let j=u.routes[v.route.id];if(!j||!j.hasLoader)return!1;if(x(v,_)||R(v,_))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function gg(o,d,{includeHydrateFallback:f}={}){return yg(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function yg(o){return[...new Set(o)]}function vg(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function bg(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let h=JSON.stringify(vg(m));return f.has(h)||(f.add(h),u.push({key:h,link:m})),u},[])}function Am(){let o=E.useContext(Fl);return Po(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function xg(){let o=E.useContext(gs);return Po(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Wo=E.createContext(void 0);Wo.displayName="FrameworkContext";function jm(){let o=E.useContext(Wo);return Po(o,"You must render this element inside a <HydratedRouter> element"),o}function Sg(o,d){let f=E.useContext(Wo),[u,m]=E.useState(!1),[h,x]=E.useState(!1),{onFocus:R,onBlur:v,onMouseEnter:_,onMouseLeave:j,onTouchStart:N}=d,U=E.useRef(null);E.useEffect(()=>{if(o==="render"&&x(!0),o==="viewport"){let k=Z=>{Z.forEach(q=>{x(q.isIntersecting)})},Y=new IntersectionObserver(k,{threshold:.5});return U.current&&Y.observe(U.current),()=>{Y.disconnect()}}},[o]),E.useEffect(()=>{if(u){let k=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(k)}}},[u]);let G=()=>{m(!0)},B=()=>{m(!1),x(!1)};return f?o!=="intent"?[h,U,{}]:[h,U,{onFocus:Vn(R,G),onBlur:Vn(v,B),onMouseEnter:Vn(_,G),onMouseLeave:Vn(j,B),onTouchStart:Vn(N,G)}]:[!1,U,{}]}function Vn(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function wg({page:o,...d}){let{router:f}=Am(),u=E.useMemo(()=>fm(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?E.createElement(Eg,{page:o,matches:u,...d}):null}function Tg(o){let{manifest:d,routeModules:f}=jm(),[u,m]=E.useState([]);return E.useEffect(()=>{let h=!1;return hg(o,d,f).then(x=>{h||m(x)}),()=>{h=!0}},[o,d,f]),u}function Eg({page:o,matches:d,...f}){let u=il(),{future:m,manifest:h,routeModules:x}=jm(),{basename:R}=Am(),{loaderData:v,matches:_}=xg(),j=E.useMemo(()=>dm(o,d,_,h,u,"data"),[o,d,_,h,u]),N=E.useMemo(()=>dm(o,d,_,h,u,"assets"),[o,d,_,h,u]),U=E.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let k=new Set,Y=!1;if(d.forEach(q=>{let J=h.routes[q.route.id];!J||!J.hasLoader||(!j.some(pe=>pe.route.id===q.route.id)&&q.route.id in v&&x[q.route.id]?.shouldRevalidate||J.hasClientLoader?Y=!0:k.add(q.route.id))}),k.size===0)return[];let Z=mg(o,R,m.unstable_trailingSlashAwareDataRequests,"data");return Y&&k.size>0&&Z.searchParams.set("_routes",d.filter(q=>k.has(q.route.id)).map(q=>q.route.id).join(",")),[Z.pathname+Z.search]},[R,m.unstable_trailingSlashAwareDataRequests,v,u,h,j,d,o,x]),G=E.useMemo(()=>gg(N,h),[N,h]),B=Tg(N);return E.createElement(E.Fragment,null,U.map(k=>E.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...f})),G.map(k=>E.createElement("link",{key:k,rel:"modulepreload",href:k,...f})),B.map(({key:k,link:Y})=>E.createElement("link",{key:k,nonce:f.nonce,...Y,crossOrigin:Y.crossOrigin??f.crossOrigin})))}function Ng(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ag&&(window.__reactRouterVersion="7.13.0")}catch{}function jg({basename:o,children:d,unstable_useTransitions:f,window:u}){let m=E.useRef();m.current==null&&(m.current=sh({window:u,v5Compat:!0}));let h=m.current,[x,R]=E.useState({action:h.action,location:h.location}),v=E.useCallback(_=>{f===!1?R(_):E.startTransition(()=>R(_))},[f]);return E.useLayoutEffect(()=>h.listen(v),[h,v]),E.createElement(lg,{basename:o,children:d,location:x.location,navigationType:x.action,navigator:h,unstable_useTransitions:f})}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=E.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:h,replace:x,state:R,target:v,to:_,preventScrollReset:j,viewTransition:N,unstable_defaultShouldRevalidate:U,...G},B){let{basename:k,unstable_useTransitions:Y}=E.useContext(Ot),Z=typeof _=="string"&&Rm.test(_),q=ym(_,k);_=q.to;let J=qh(_,{relative:m}),[pe,_e,ye]=Sg(u,G),$=Mg(_,{replace:x,state:R,target:v,preventScrollReset:j,relative:m,viewTransition:N,unstable_defaultShouldRevalidate:U,unstable_useTransitions:Y});function xe(Ve){d&&d(Ve),Ve.defaultPrevented||$(Ve)}let Ue=E.createElement("a",{...G,...ye,href:q.absoluteURL||J,onClick:q.isExternal||h?d:xe,ref:Ng(B,_e),target:v,"data-discover":!Z&&f==="render"?"true":void 0});return pe&&!Z?E.createElement(E.Fragment,null,Ue,E.createElement(wg,{page:J})):Ue});Ne.displayName="Link";var Rg=E.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:h,to:x,viewTransition:R,children:v,..._},j){let N=Zn(x,{relative:_.relative}),U=il(),G=E.useContext(gs),{navigator:B,basename:k}=E.useContext(Ot),Y=G!=null&&Lg(N)&&R===!0,Z=B.encodeLocation?B.encodeLocation(N).pathname:N.pathname,q=U.pathname,J=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;f||(q=q.toLowerCase(),J=J?J.toLowerCase():null,Z=Z.toLowerCase()),J&&k&&(J=da(J,k)||J);const pe=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let _e=q===Z||!m&&q.startsWith(Z)&&q.charAt(pe)==="/",ye=J!=null&&(J===Z||!m&&J.startsWith(Z)&&J.charAt(Z.length)==="/"),$={isActive:_e,isPending:ye,isTransitioning:Y},xe=_e?d:void 0,Ue;typeof u=="function"?Ue=u($):Ue=[u,_e?"active":null,ye?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof h=="function"?h($):h;return E.createElement(Ne,{..._,"aria-current":xe,className:Ue,ref:j,style:Ve,to:x,viewTransition:R},typeof v=="function"?v($):v)});Rg.displayName="NavLink";var Cg=E.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:h,method:x=ps,action:R,onSubmit:v,relative:_,preventScrollReset:j,viewTransition:N,unstable_defaultShouldRevalidate:U,...G},B)=>{let{unstable_useTransitions:k}=E.useContext(Ot),Y=Ug(),Z=Hg(R,{relative:_}),q=x.toLowerCase()==="get"?"get":"post",J=typeof R=="string"&&Rm.test(R),pe=_e=>{if(v&&v(_e),_e.defaultPrevented)return;_e.preventDefault();let ye=_e.nativeEvent.submitter,$=ye?.getAttribute("formmethod")||x,xe=()=>Y(ye||_e.currentTarget,{fetcherKey:d,method:$,navigate:f,replace:m,state:h,relative:_,preventScrollReset:j,viewTransition:N,unstable_defaultShouldRevalidate:U});k&&f!==!1?E.startTransition(()=>xe()):xe()};return E.createElement("form",{ref:B,method:q,action:Z,onSubmit:u?v:pe,...G,"data-discover":!J&&o==="render"?"true":void 0})});Cg.displayName="Form";function Dg(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(o){let d=E.useContext(Fl);return Me(d,Dg(o)),d}function Mg(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:R,unstable_useTransitions:v}={}){let _=Yh(),j=il(),N=Zn(o,{relative:h});return E.useCallback(U=>{if(ug(U,d)){U.preventDefault();let G=f!==void 0?f:Xn(j)===Xn(N),B=()=>_(o,{replace:G,state:u,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:R});v?E.startTransition(()=>B()):B()}},[j,_,N,f,u,d,o,m,h,x,R,v])}var Og=0,zg=()=>`__${String(++Og)}__`;function Ug(){let{router:o}=Cm("useSubmit"),{basename:d}=E.useContext(Ot),f=Ih(),u=o.fetch,m=o.navigate;return E.useCallback(async(h,x={})=>{let{action:R,method:v,encType:_,formData:j,body:N}=fg(h,d);if(x.navigate===!1){let U=x.fetcherKey||zg();await u(U,f,x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:j,body:N,formMethod:x.method||v,formEncType:x.encType||_,flushSync:x.flushSync})}else await m(x.action||R,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:j,body:N,formMethod:x.method||v,formEncType:x.encType||_,replace:x.replace,state:x.state,fromRouteId:f,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,m,d,f])}function Hg(o,{relative:d}={}){let{basename:f}=E.useContext(Ot),u=E.useContext(Vt);Me(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),h={...Zn(o||".",{relative:d})},x=il();if(o==null){h.search=x.search;let R=new URLSearchParams(h.search),v=R.getAll("index");if(v.some(j=>j==="")){R.delete("index"),v.filter(N=>N).forEach(N=>R.append("index",N));let j=R.toString();h.search=j?`?${j}`:""}}return(!o||o===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:ca([f,h.pathname])),Xn(h)}function Lg(o,{relative:d}={}){let f=E.useContext(bm);Me(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Cm("useViewTransitionState"),m=Zn(o,{relative:d});if(!f.isTransitioning)return!1;let h=da(f.currentLocation.pathname,u)||f.currentLocation.pathname,x=da(f.nextLocation.pathname,u)||f.nextLocation.pathname;return hs(m.pathname,x)!=null||hs(m.pathname,h)!=null}const kg=()=>{const[o,d]=E.useState(!1),f=()=>{d(!o)},u=()=>{d(!1)};return s.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700",children:[s.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[s.jsxs(Ne,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:u,children:[s.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:s.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),s.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),s.jsxs("button",{onClick:f,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"rotate-45 translate-y-2":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"opacity-0":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"-rotate-45 -translate-y-2":""}`})]}),s.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[s.jsx("li",{children:s.jsx(Ne,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/trading",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Trading"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),o&&s.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:s.jsxs("ul",{className:"flex flex-col space-y-0",children:[s.jsx("li",{children:s.jsx(Ne,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Home"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"About"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Projects"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/trading",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Trading"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Resume"})}),s.jsx("li",{children:s.jsx(Ne,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Contact"})})]})})]})},Bg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsx("div",{className:"grid grid-cols-1 gap-8 md:gap-12 items-center",children:s.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[s.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[s.jsx(Ne,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),s.jsx(Ne,{to:"/about",className:"px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-colors text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-600/75",children:"Learn About Me"}),s.jsx(Ne,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]})})})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),s.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Built a Python-based automated trading framework with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, and Alpaca API order execution."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSockets"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),s.jsx(Ne,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Developed an XGBoost regression pipeline using historical NFL data, engineered rolling workload and efficiency features, and evaluated performance on out-of-sample seasons."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Feature Engineering"})]}),s.jsx(Ne,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),s.jsx("div",{className:"text-center mt-8 md:mt-12",children:s.jsx(Ne,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(o=>s.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:s.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:o})},o))})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),s.jsx(Ne,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),qg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),s.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:s.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),s.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),s.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),s.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),s.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("a",{href:"https://www.linkedin.com/in/eric-jackson27",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),s.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),s.jsx("div",{className:"space-y-6",children:s.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),s.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),s.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),s.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),s.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),s.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),s.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),s.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),s.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),s.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),s.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),s.jsx("span",{className:"text-slate-300 text-sm",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),s.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),s.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]})]})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),s.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),s.jsx(Ne,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),Yg=()=>{const[o,d]=E.useState("all"),[f,u]=E.useState(new Set),m=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"27.8 yards"},{label:"R² Score",value:"0.46"},{label:"Classification ROC-AUC",value:"0.626"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["Feature engineering from historical game data","Out-of-sample validation on full season","Classification model for over/under predictions","Actionable insights for sports analytics"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Tastytrade dxFeed"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["Real-time market data streaming via Tastytrade dxFeed WebSocket","Pluggable strategy architecture with async event loop","Alpaca API for automated order execution","Position tracking with entry/exit prices and P&L","Daily auto-shutdown at market close","Configurable timeframes and data requirements"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"XGBoost model for predicting volatility breakouts in SPY options",fullDesc:"Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Binary classification for volatility breakout prediction","Parallel label generation for large datasets","Model calibration analysis with Brier score and log loss","Feature engineering with interaction terms"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"/",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]},{id:5,title:"Options Profit Prediction Model",category:"machine-learning",shortDesc:"XGBoost model predicting profitable SPY options trades",fullDesc:"Built binary classifier with 100+ engineered features to predict end-of-day profitability for SPY options. Includes SHAP-driven interaction features, intraday positioning metrics, and EV analysis by strike/threshold. Deployed to AWS S3 for production inference.",technologies:["Python","XGBoost","SHAP","AWS S3","Pandas"],metrics:[{label:"Features",value:"100+"},{label:"Target",value:"EOD Profit"},{label:"Deployment",value:"AWS S3"}],image:"💰",github:"#",demo:"project-demo/5",highlights:["100+ engineered features across price, volume, and microstructure","SHAP analysis for feature discovery and interaction terms","Intraday positioning features (distance from day high/low)","Expected value analysis by OTM strike and confidence threshold","Statistical validation with paired t-tests","Production deployment to AWS S3"]},{id:6,title:"Intraday Direction Classifier",category:"machine-learning",shortDesc:"XGBoost model for second-level SPY directional prediction",fullDesc:"Multi-class XGBoost classifier predicting SPY near-term movement intensity (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization with multi-threaded backtesting framework.",technologies:["Python","XGBoost","Pandas","ThreadPoolExecutor"],metrics:[{label:"Overall Accuracy",value:"60%"},{label:"Classes",value:"5 (Directional)"},{label:"Frequency",value:"1-second"}],image:"🎯",github:"#",demo:"project-demo/6",highlights:["Multi-class classifier for intraday momentum (5 classes)","Feature selection from colleague's proprietary indicators","Options trading strategy with consecutive signal logic","Multi-threaded backtesting engine for fast validation","Position management with 10-minute hold duration","Risk controls with time-based entry/exit cutoffs","Real-time option pricing from Polygon API"]}],h=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],x=o==="all"?m:m.filter(v=>v.category===o),R=v=>{u(_=>{const j=new Set(_);return j.has(v)?j.delete(v):j.add(v),j})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),s.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[s.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),s.jsx("select",{id:"category-filter",value:o,onChange:v=>d(v.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:h.map(v=>s.jsx("option",{value:v.value,children:v.label},v.value))}),s.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",x.length," project",x.length!==1?"s":""]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:x.length===0?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:x.map(v=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[s.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:s.jsx("span",{className:"text-6xl",children:v.image})}),s.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[s.jsx("div",{className:"mb-3",children:s.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:h.find(_=>_.value===v.category)?.label})}),s.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:v.title}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:v.shortDesc}),s.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:v.fullDesc}),s.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:v.metrics.map((_,j)=>s.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[s.jsx("p",{className:"text-slate-400 text-xs mb-1",children:_.label}),s.jsx("p",{className:"text-white font-bold text-sm",children:_.value})]},j))}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:v.technologies.map(_=>s.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:_},_))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),s.jsx("ul",{className:"space-y-1",children:(f.has(v.id)?v.highlights:v.highlights.slice(0,3)).map((_,j)=>s.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),s.jsx("span",{children:_})]},j))}),v.highlights.length>3&&s.jsx("button",{onClick:()=>R(v.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:f.has(v.id)?"- Show Less":`+ Show ${v.highlights.length-3} More`})]}),s.jsxs("div",{className:"flex gap-4 mt-auto",children:[s.jsx("a",{href:v.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),s.jsx(Ne,{to:v.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},v.id))})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),s.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),s.jsx(Ne,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},Gg=({label:o,description:d,code:f,language:u="python"})=>{const[m,h]=E.useState(!1),x=()=>{navigator.clipboard.writeText(f),h(!0),setTimeout(()=>h(!1),2e3)};return s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[s.jsxs("div",{className:"bg-slate-800 px-6 py-4 border-b border-slate-600",children:[s.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:o}),s.jsx("p",{className:"text-slate-300 text-sm",children:d})]}),s.jsxs("div",{className:"relative",children:[s.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:s.jsx("code",{children:f})}),s.jsx("button",{onClick:x,className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:m?"✓ Copied":"Copy"})]})]})},Vg={id:"1",title:"Sports Analytics Predictions – Code Demo",description:"Explore the implementation of an NFL rushing yards prediction pipeline, including feature engineering and modeling. Results are below code samples",codeSamples:[{label:"Feature Engineering",description:"Rolling window features for workload, efficiency, momentum, and volatility metrics",code:`import pandas as pd

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

`}],plots:[{title:"Feature Importance",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"Top predictive features learned by the model provide insight into which variables have the greatest impact on predicting rushing yards."}),s.jsx("p",{children:"For the features not defined earlier:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("b",{children:"starter_flag"}),": player started that game"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_breakaway_rate_5_ma"}),": average count of rushes > 40 yards last 5 games / average carries last 5 games"]}),s.jsxs("li",{children:[s.jsx("b",{children:"team_dependency"}),": pct_of_carries_5ma / (others_rush_attempts_5ma + 10",s.jsx("sup",{children:"-6"}),")"]}),s.jsxs("li",{children:[s.jsx("b",{children:"explosive_index"}),": 0.5 * off_explosive_rate_5_ma + 0.3 * off_breakaway_rate_5_ma + 0.2 * rushes_16_to_20_5_ma_share + 0.1 * rushes_21_plus_5_ma_share"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_explosive_rate_5_ma"}),": average count of rushes ≥ 11 yards last 5 games / average count of rushes"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_16_to_20_5_ma_share"}),": proportion of rushes between 16 and 20 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_21_plus_5_ma_share"}),": proportion of rushes ≥ 21 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rush_yards_rank_pct"}),": rank of rush yards for that season normalized by max rank"]})]})]}),imageUrl:"/rush_yard_featureImportance.png"},{title:"Residual Errors of NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["This histogram shows the distribution of prediction errors (",s.jsx("em",{children:"predicted minus actual rushing yards"}),") across NFL games."]}),s.jsx("p",{children:"Errors are centered close to zero, indicating little overall bias, while the right-skewed tail and occasional large negative errors reveal games where the model significantly over- or under-estimated rushing output."}),s.jsx("p",{children:"The vertical reference lines mark perfect prediction, mean error, and median error, helping illustrate both typical performance and the presence of outlier games."})]}),imageUrl:"/error_NFL.png"},{title:"Actual vs Predicted NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"This chart shows the weekly predicted rushing yards compared to actual results for four standout players throughout the 2024 season"}),s.jsx("p",{className:"text-sm text-slate-400 mt-4",children:"Click image to navigate player-specific error distributions →"})]}),imageUrl:"/bijan_err.png",imageUrls:[{url:"/bijan_err.png",label:"Bijan Robinson"},{url:"/henry_error.png",label:"Derrick Henry"},{url:"/saquon_err.png",label:"Saquon Barkley"},{url:"/taylor_err.png",label:"Jonathan Taylor"}]}]},Xg={id:"2",title:"Live Trading Framework - Code Demo",description:"Python-based automated trading system implementation",codeSamples:[{label:"Initial Setup and ansyncio Loop",description:"Python-based live trading system with async event loop",code:`"""
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
            return 0.0`}],plots:[{title:"Trading Performance",description:"Cumulative returns and drawdown analysis",imageUrl:"https://via.placeholder.com/600x400?text=Trading+Performance"},{title:"Signal Accuracy",description:"Win rate and profit factor by signal type",imageUrl:"https://via.placeholder.com/600x400?text=Signal+Accuracy"},{title:"Risk Metrics",description:"Sharpe ratio and maximum drawdown over time",imageUrl:"https://via.placeholder.com/600x400?text=Risk+Metrics"}]},Qg={id:"3",title:"Volatility Breakout Prediction – Code Demo",description:"XGBoost model predicting when SPY will move 5x the expanding average true range (measured from market open) within 30 minutes. Achieved 0.686 ROC-AUC on one year of minute-level data.",codeSamples:[{label:"Helper Functions & ATR Calculation",description:"RSI, ATR, and True Range calculations for volatility measurement",code:`import numpy as np
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
    `}],plots:[{title:"Feature Importance Analysis",description:"XGBoost feature importance ranked by gain. ATR ratios and VWAP interactions dominate predictive power.",imageUrl:"/featureImportanceVolatilityModel.png"},{title:"Model Calibration Curve",description:"Calibration analysis showing model's predicted probabilities vs actual breakout frequencies. Near-perfect calibration indicates reliable probability estimates.",imageUrl:"/volatility_calibCurve.png"}]},Fg={id:"5",title:"Options Profit Prediction Model – Code Demo",description:"XGBoost binary classifier predicting profitable SPY options trades at end of day. Features 100+ engineered variables across price dynamics, volume patterns, and intraday positioning. Deployed to AWS S3 for production inference.",codeSamples:[{label:"Multi-Window Feature Engineering",description:"Parallel processing to create 100+ features across price, direction, momentum, and volume dimensions",code:`import numpy as np
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
print("Downloaded and verified:", local_path)`}],plots:[{title:"Feature Importance (XGBoost)",description:"Top 20 features ranked by XGBoost gain. Intraday positioning (dist_from_day_low, day_low_so_far) and momentum from open dominate predictive power.",imageUrl:"https://via.placeholder.com/800x600?text=Feature+Importance"},{title:"SHAP Global Importance",description:"SHAP summary plot showing feature impact distribution. Intraday position features, moneyness interactions, and time-to-expiry dominate.",imageUrl:"https://via.placeholder.com/800x600?text=SHAP+Summary"},{title:"Model Calibration Curve",description:"Predicted probabilities vs observed outcomes. Model shows good calibration across probability ranges, with slight overconfidence at extremes.",imageUrl:"https://via.placeholder.com/800x600?text=Calibration+Curve"},{title:"Confidence vs True Outcome by Bin",description:"Model confidence buckets vs actual profitability rates. Higher confidence predictions show significantly better hit rates, validating model's probability estimates.",imageUrl:"https://via.placeholder.com/800x600?text=Confidence+vs+Outcome"},{title:"Expected Value by OTM & Threshold",description:"Heatmap of EV across strike prices (OTM) and model confidence thresholds. Identifies optimal entry conditions for maximum expected return.",imageUrl:"https://via.placeholder.com/800x600?text=EV+Heatmap"},{title:"Statistical Validation",description:"Paired t-test results showing model hit-rate significantly outperforms baseline (p < 0.001). Cohen's d indicates strong practical significance.",imageUrl:"https://via.placeholder.com/800x600?text=Statistical+Tests"}]},Zg={id:"6",title:"Intraday Direction Classifier – Code Demo",description:"XGBoost multi-class classifier predicting SPY's near-term directional movement (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization. Backtested on live options trades with risk-managed position sizing.",codeSamples:[{label:"Model Overview & Performance",description:"5-class prediction system for intraday SPY momentum with strong accuracy on extreme moves",code:`"""
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
    print(f"{key:.<30} {value}")`}],plots:[{title:"XGBoost Confusion Matrix",description:"Model classification performance across 5 directional classes. Strong diagonal indicates high accuracy, particularly on Neutral predictions (3.4M correct). The model shows good discrimination between extreme moves (Heavy Up/Down) and neutral periods, which is critical for the trading strategy. Note the minimal confusion between Heavy Up and Heavy Down (near-zero off-diagonal), demonstrating the model avoids catastrophic directional errors.",imageUrl:"/confusion_matrix_xgboost.png"},{title:"Trade P&L Distribution",description:"Distribution of profit and loss across all backtest trades. Shows risk-reward profile with positive skew - more frequent small losses offset by occasional larger wins. Options decay works against us on neutral moves, but strong directional predictions generate outsized returns. Median trade: ~$30 profit. Long right tail indicates potential for 200%+ gains on correctly timed extreme moves.",imageUrl:"https://via.placeholder.com/800x500?text=Trade+P%26L+Distribution"},{title:"Cumulative Returns",description:"Equity curve showing cumulative P&L over backtest period. Steady upward trajectory indicates consistent edge from model predictions. Drawdown periods align with low-volatility regimes where model generates fewer high-confidence signals. Maximum drawdown of ~$812 occurred during mid-December consolidation. Overall positive slope validates strategy's robustness across different market conditions.",imageUrl:"https://via.placeholder.com/800x500?text=Cumulative+Returns+Curve"},{title:"Win Rate by Time of Day",description:"Strategy performance segmented by market hours. Win rate peaks at market open (9:30-10:00 AM) at 61% due to high volatility and stronger trends. Performance dips during lunch (12:00-1:00 PM) to 48% as markets consolidate. Secondary peak at 2:30-3:30 PM (58%) captures end-of-day momentum. Strategy automatically stops entering positions after 3:25 PM to avoid unpredictable close.",imageUrl:"https://via.placeholder.com/800x500?text=Win+Rate+by+Hour"},{title:"Feature Importance (Anonymized)",description:"Relative importance of input features in the XGBoost model (feature names redacted per colleague's proprietary work). Top features capture price momentum, volatility regimes, and microstructure patterns at multiple timeframes. The model uses ~40 features total after my selection process, down from original 100+ candidates. Feature selection improved out-of-sample accuracy by 3.2% while reducing overfitting.",imageUrl:"https://via.placeholder.com/800x500?text=Feature+Importance"}]},Kg=()=>{const{projectId:o}=Vh(),[d,f]=E.useState(null),[u,m]=E.useState(0),h=E.useRef({}),x=E.useRef(null),R=B=>{let k=h.current[B];if(B==="Visualizations & Results"&&(k=x.current),k){const q=k.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:q,behavior:"smooth"})}},_={1:Vg,2:Xg,3:Qg,4:{id:"4",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
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
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]},5:Fg,6:Zg}[o||""];if(!_)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),s.jsx(Ne,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const j=()=>{d?.imageUrls&&m(B=>(B-1+d.imageUrls.length)%d.imageUrls.length)},N=()=>{d?.imageUrls&&m(B=>(B+1)%d.imageUrls.length)},U=()=>d?d.imageUrls&&d.imageUrls.length>0?d.imageUrls[u].url:d.imageUrl:"",G=()=>d?.imageUrls?d.imageUrls[u]?.label:null;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx(Ne,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:_.title}),s.jsx("p",{className:"text-xl text-slate-300",children:_.description})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[_.codeSamples&&_.codeSamples.length>0&&s.jsx("div",{className:"lg:w-64 flex-shrink-0",children:s.jsxs("div",{className:"lg:sticky lg:top-8",children:[s.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[_.codeSamples.map((B,k)=>s.jsx("button",{onClick:()=>R(B.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:B.label},k)),_.plots&&_.plots.length>0&&s.jsx("button",{onClick:()=>R("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"mb-20",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),_.codeSamples.map((B,k)=>s.jsx("div",{ref:Y=>{h.current[B.label]=Y},children:s.jsx(Gg,{label:B.label,description:B.description,code:B.code})},k))]}),s.jsxs("div",{ref:x,children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:_.plots.map((B,k)=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{f(B),m(0)},children:[s.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:s.jsx("img",{src:B.imageUrl,alt:B.title,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:B.title}),s.jsx("div",{className:"text-slate-300",children:B.description})]})]},k))})]})]})]})}),d&&s.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>f(null),children:s.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:B=>B.stopPropagation(),children:[s.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),s.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[s.jsx("img",{src:U(),alt:d.title,className:"w-full h-full object-contain"}),d.imageUrls&&d.imageUrls.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:j,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),s.jsx("button",{onClick:N,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[u+1," / ",d.imageUrls.length]})]})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[s.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[d.title,G()&&s.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",G()]})]}),s.jsx("div",{className:"text-slate-300",children:d.description})]})]})})]})},Jg=()=>{const[o,d]=E.useState({name:"",email:"",subject:"",message:""}),[f,u]=E.useState("idle"),[m,h]=E.useState(""),x=v=>{const{name:_,value:j}=v.target;d(N=>({...N,[_]:j}))},R=async v=>{v.preventDefault(),u("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(u("success"),d({name:"",email:"",subject:"",message:""}),setTimeout(()=>u("idle"),3e3)):(u("error"),h("Failed to send message. Please try again."))}catch{u("error"),h("An error occurred. Please try again later.")}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),s.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),s.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:s.jsxs("form",{onSubmit:R,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),s.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),s.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:x,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),f==="success"&&s.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),f==="error"&&s.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:m}),s.jsx("button",{type:"submit",disabled:f==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:f==="loading"?"Sending...":"Send Message"})]})}),s.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),s.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),s.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),s.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},Pg=()=>s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),s.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),s.jsxs("ul",{className:"space-y-2 text-slate-300",children:[s.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),s.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),s.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),s.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),s.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"5 ATR Volatility Breakout Model"}),s.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),s.jsx("div",{className:"pt-4",children:s.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})}),Wg=()=>{const[o,d]=E.useState(null),[f,u]=E.useState([]),[m,h]=E.useState(null),[x,R]=E.useState(!0),[v,_]=E.useState(null),[j,N]=E.useState("1M"),[U,G]=E.useState("none"),[B,k]=E.useState(!1),[Y,Z]=E.useState(""),[q,J]=E.useState(""),[pe,_e]=E.useState(""),[ye,$]=E.useState(""),[xe,Ue]=E.useState(""),[Ve,lt]=E.useState(""),[ke,Lt]=E.useState(null),[ft,nt]=E.useState(null),C="https://portfoliowebsitebackend-production-fa3b.up.railway.app",H=new Date,P=H.toISOString().slice(0,10),he=new Date(H);he.setDate(H.getDate()+1);const de=he.toISOString().slice(0,10),y=U==="range"&&!!(Y&&q),z=U==="day"&&!!pe,L=U==="day"?"1Min":U==="range"?"1D":j==="1D"?"1Min":"1D",X=U==="day"?"1D":U==="range"?"ALL":j,I=L==="1Min";E.useEffect(()=>{if(U==="day"&&!pe||U==="range"&&!(Y&&q))return;(async()=>{R(!0),_(null),h(null);try{const re=new URLSearchParams({period:X,timeframe:L});z?re.set("day",pe):y&&(re.set("start",Y),re.set("end",q));const[je,et,St]=await Promise.all([fetch(`${C}/api/account`),fetch(`${C}/api/positions`),fetch(`${C}/api/portfolio-history?${re.toString()}`)]);if(!je.ok||!et.ok||!St.ok)throw new Error("Failed to fetch data from backend");const Qt=await je.json(),sl=await et.json(),ma=await St.json();d(Qt),u(sl),h(ma)}catch(re){_(re instanceof Error?re.message:"An error occurred"),console.error("Error fetching trading data:",re)}finally{R(!1)}})()},[j,Y,q,pe,X,L,z,y,C]);const ne=()=>{if(m&&m.equity&&m.equity.length>0){const V=m.equity[0],je=m.equity[m.equity.length-1]-V,et=V>0?je/V*100:0;if(U!=="none")return{totalReturn:je,totalReturnPct:et}}if(!o)return{totalReturn:0,totalReturnPct:0};if(j==="1D"){const V=parseFloat(o.equity),re=parseFloat(o.last_equity),je=V-re,et=je/re*100;return{totalReturn:je,totalReturnPct:et}}if(m&&m.equity&&m.equity.length>0){const V=m.equity[0],je=parseFloat(o.equity)-V,et=je/V*100;return{totalReturn:je,totalReturnPct:et}}return{totalReturn:0,totalReturnPct:0}},ee=V=>{const re=typeof V=="string"?parseFloat(V):V;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(re)},Qe=V=>V==null||V===""?"—":ee(V),Ae=V=>{const re=typeof V=="string"?parseFloat(V):V;return`${re>=0?"+":""}${re.toFixed(2)}%`};if(x)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white text-xl",children:"Loading trading data..."})});if(v)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-red-400 text-xl",children:["Error: ",v]})});const{totalReturn:fa,totalReturnPct:qa}=ne(),Zl=!!m?.equity?.length,Kn=U!=="none"&&Zl?m.equity[m.equity.length-1]:o?.equity,Xt=U!=="none"?null:o?.cash;return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-2",children:"Trading Dashboard"}),s.jsx("p",{className:"text-sm sm:text-base text-slate-400",children:"Alpaca Paper Trading Account Performance"})]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8",children:[s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Portfolio Value"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:Qe(Kn)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Cash"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:Qe(Xt)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Total Return"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${fa>=0?"text-green-400":"text-red-400"}`,children:ee(fa)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Return %"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${qa>=0?"text-green-400":"text-red-400"}`,children:Ae(qa)})]})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Portfolio Performance"}),s.jsxs("div",{className:"flex gap-1 sm:gap-2 flex-wrap items-center",children:[["1D","1W","1M","3M","ALL"].map(V=>s.jsx("button",{onClick:()=>{N(V),G("none"),_e(""),Z(""),J("")},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${j===V&&U==="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:V},V)),s.jsxs("div",{className:"relative",children:[s.jsx("button",{type:"button",onClick:()=>{k(V=>{const re=!V;return re&&($(Y),Ue(q),lt(pe)),re})},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${U!=="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:"Custom ▾"}),B&&s.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10 p-3 space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date (minute)"}),s.jsx("input",{type:"date",value:Ve,onChange:V=>lt(V.target.value),max:P,className:"w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("button",{type:"button",onClick:()=>{!Ve||Ve>P||(G("day"),_e(Ve),Z(""),J(""),k(!1))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!Ve||Ve>P,children:"Apply custom date"})]}),s.jsxs("div",{className:"border-t border-slate-800 pt-3 space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date range (daily)"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{type:"date",value:ye,onChange:V=>$(V.target.value),max:de,className:"w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("input",{type:"date",value:xe,onChange:V=>Ue(V.target.value),max:de,className:"w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"})]}),s.jsx("button",{type:"button",onClick:()=>{ye&&xe&&(ye>de||xe>de||(G("range"),Z(ye),J(xe),_e(""),k(!1)))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!(ye&&xe)||ye>de||xe>de,children:"Apply date range"})]}),s.jsx("button",{type:"button",onClick:()=>{G("none"),_e(""),Z(""),J(""),lt(""),$(""),Ue(""),k(!1)},className:"w-full text-sm px-3 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600",children:"Clear custom"})]})]})]})]}),m&&m.equity&&m.equity.length>0?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"relative h-48 sm:h-64 bg-slate-900/50 rounded-lg p-4",onMouseLeave:()=>{Lt(null),nt(null)},children:[s.jsx("svg",{width:"100%",height:"100%",className:"overflow-visible",onMouseMove:V=>{const je=V.currentTarget.getBoundingClientRect(),et=(V.clientX-je.left)/je.width*100,St=Math.round(et/100*(m.equity.length-1));St>=0&&St<m.equity.length&&(Lt(St),nt({x:V.clientX-je.left,y:V.clientY-je.top}))},children:m.equity.map((V,re)=>{if(re===0)return null;const je=m.equity[re-1],et=(re-1)/(m.equity.length-1)*100,St=re/(m.equity.length-1)*100,Qt=Math.min(...m.equity),ma=Math.max(...m.equity)-Qt,vs=ma>0?100-(je-Qt)/ma*80-10:50,tt=ma>0?100-(V-Qt)/ma*80-10:50,bs=m.equity[0],Jn=m.equity[m.equity.length-1]>=bs;return s.jsx("line",{x1:`${et}%`,y1:`${vs}%`,x2:`${St}%`,y2:`${tt}%`,stroke:Jn?"#4ade80":"#f87171",strokeWidth:"2"},re)})}),ke!==null&&ft&&m.profit_loss_pct&&s.jsxs("div",{className:"absolute bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white pointer-events-none",style:{left:`${ft.x}px`,top:`${ft.y-60}px`,transform:"translateX(-50%)"},children:[s.jsx("div",{className:"text-xs text-slate-400 mb-1",children:I?new Date(m.timestamp[ke]*1e3).toLocaleString():new Date(m.timestamp[ke]*1e3).toLocaleDateString()}),s.jsx("div",{className:"font-semibold",children:Ae(m.profit_loss_pct[ke])}),s.jsx("div",{className:"text-xs text-slate-400",children:ee(m.equity[ke])})]})]}),s.jsxs("div",{className:"flex justify-between text-xs sm:text-sm text-slate-400 mt-4 mb-2",children:[s.jsxs("span",{className:"truncate",children:["Start: ",ee(m.equity[0])]}),s.jsxs("span",{className:"truncate text-right",children:["Current: ",ee(m.equity[m.equity.length-1])]})]}),s.jsxs("div",{className:"flex justify-between text-xs text-slate-500 px-4",children:[s.jsx("span",{children:I?new Date(m.timestamp[0]*1e3).toLocaleString():new Date(m.timestamp[0]*1e3).toLocaleDateString()}),s.jsx("span",{children:I?new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleString():new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleDateString()})]}),s.jsx("div",{className:"mt-4 p-3 bg-slate-900/30 rounded-lg border border-slate-700 text-xs text-slate-400",children:j==="ALL"&&s.jsxs("p",{className:"mt-2 text-slate-300",children:["⚠️ ",s.jsx("span",{className:"font-semibold",children:"Early Performance:"})," The portfolio experienced a ~20% decline in the first week due to trading bugs."]})})]}):s.jsx("div",{className:"h-64 flex items-center justify-center text-slate-400",children:x?"Loading chart data...":"No data available for this period"})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-6",children:"Current Positions"}),f.length===0?s.jsx("p",{className:"text-slate-400",children:"No open positions"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"block md:hidden space-y-4",children:f.map(V=>{const re=parseFloat(V.unrealized_pl),je=parseFloat(V.unrealized_plpc)*100;return s.jsxs("div",{className:"bg-slate-900/50 rounded-lg p-4 border border-slate-600",children:[s.jsxs("div",{className:"flex justify-between items-start mb-3",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-bold text-white",children:V.symbol}),s.jsxs("p",{className:"text-xs text-slate-400",children:["Qty: ",V.qty]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:`text-sm font-bold ${re>=0?"text-green-400":"text-red-400"}`,children:ee(V.unrealized_pl)}),s.jsx("p",{className:`text-xs font-semibold ${je>=0?"text-green-400":"text-red-400"}`,children:Ae(je)})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Avg Price"}),s.jsx("p",{className:"text-white font-semibold",children:ee(V.avg_entry_price)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Current Price"}),s.jsx("p",{className:"text-white font-semibold",children:ee(V.current_price)})]}),s.jsxs("div",{className:"col-span-2",children:[s.jsx("p",{className:"text-slate-400",children:"Market Value"}),s.jsx("p",{className:"text-white font-semibold",children:ee(V.market_value)})]})]})]},V.symbol)})}),s.jsx("div",{className:"hidden md:block overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-700",children:[s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Symbol"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Quantity"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Avg Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Current Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Market Value"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L %"})]})}),s.jsx("tbody",{children:f.map(V=>{const re=parseFloat(V.unrealized_pl),je=parseFloat(V.unrealized_plpc)*100;return s.jsxs("tr",{className:"border-b border-slate-700/50",children:[s.jsx("td",{className:"py-3 px-4 text-white font-medium",children:V.symbol}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:V.qty}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ee(V.avg_entry_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ee(V.current_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:ee(V.market_value)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${re>=0?"text-green-400":"text-red-400"}`,children:ee(V.unrealized_pl)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${je>=0?"text-green-400":"text-red-400"}`,children:Ae(je)})]},V.symbol)})})]})})]})]})]})})},$g=()=>s.jsxs(jg,{basename:"/portfolio_website/",children:[s.jsx(kg,{}),s.jsx("div",{className:"pt-16",children:s.jsxs(ng,{children:[s.jsx(Ba,{path:"",element:s.jsx(Bg,{})}),s.jsx(Ba,{path:"about",element:s.jsx(qg,{})}),s.jsx(Ba,{path:"projects",element:s.jsx(Yg,{})}),s.jsx(Ba,{path:"projects/project-demo/:projectId",element:s.jsx(Kg,{})}),s.jsx(Ba,{path:"trading",element:s.jsx(Wg,{})}),s.jsx(Ba,{path:"contact",element:s.jsx(Jg,{})}),s.jsx(Ba,{path:"resume",element:s.jsx(Pg,{})})]})})]});ih.createRoot(document.getElementById("root")).render(s.jsx(E.StrictMode,{children:s.jsx($g,{})}));
