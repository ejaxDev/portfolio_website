(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var Ao={exports:{}},Di={};var Kf;function W_(){if(Kf)return Di;Kf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,h){var b=null;if(h!==void 0&&(b=""+h),m.key!==void 0&&(b=""+m.key),"key"in m){h={};for(var j in m)j!=="key"&&(h[j]=m[j])}else h=m;return m=h.ref,{$$typeof:o,type:u,key:b,ref:m!==void 0?m:null,props:h}}return Di.Fragment=d,Di.jsx=f,Di.jsxs=f,Di}var Jf;function $_(){return Jf||(Jf=1,Ao.exports=W_()),Ao.exports}var s=$_(),jo={exports:{}},I={};var Pf;function I_(){if(Pf)return I;Pf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function Q(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,G={};function K(y,z,B){this.props=y,this.context=z,this.refs=G,this.updater=B||k}K.prototype.isReactComponent={},K.prototype.setState=function(y,z){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,z,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function H(){}H.prototype=K.prototype;function P(y,z,B){this.props=y,this.context=z,this.refs=G,this.updater=B||k}var ge=P.prototype=new H;ge.constructor=P,q(ge,K.prototype),ge.isPureReactComponent=!0;var pe=Array.isArray;function V(){}var Y={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function Ee(y,z,B){var F=B.ref;return{$$typeof:o,type:y,key:z,ref:F!==void 0?F:null,props:B}}function Ce(y,z){return Ee(y.type,z,y.props)}function Xe(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function He(y){var z={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(B){return z[B]})}var Ie=/\/+/g;function Rt(y,z){return typeof y=="object"&&y!==null&&y.key!=null?He(""+y.key):z.toString(36)}function rt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(V,V):(y.status="pending",y.then(function(z){y.status==="pending"&&(y.status="fulfilled",y.value=z)},function(z){y.status==="pending"&&(y.status="rejected",y.reason=z)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function D(y,z,B,F,ee){var ie=typeof y;(ie==="undefined"||ie==="boolean")&&(y=null);var me=!1;if(y===null)me=!0;else switch(ie){case"bigint":case"string":case"number":me=!0;break;case"object":switch(y.$$typeof){case o:case d:me=!0;break;case R:return me=y._init,D(me(y._payload),z,B,F,ee)}}if(me)return ee=ee(y),me=F===""?"."+Rt(y,0):F,pe(ee)?(B="",me!=null&&(B=me.replace(Ie,"$&/")+"/"),D(ee,z,B,"",function(kl){return kl})):ee!=null&&(Xe(ee)&&(ee=Ce(ee,B+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(Ie,"$&/")+"/")+me)),z.push(ee)),1;me=0;var We=F===""?".":F+":";if(pe(y))for(var Oe=0;Oe<y.length;Oe++)F=y[Oe],ie=We+Rt(F,Oe),me+=D(F,z,B,ie,ee);else if(Oe=Q(y),typeof Oe=="function")for(y=Oe.call(y),Oe=0;!(F=y.next()).done;)F=F.value,ie=We+Rt(F,Oe++),me+=D(F,z,B,ie,ee);else if(ie==="object"){if(typeof y.then=="function")return D(rt(y),z,B,F,ee);throw z=String(y),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return me}function L(y,z,B){if(y==null)return y;var F=[],ee=0;return D(y,F,"","",function(ie){return z.call(B,ie,ee++)}),F}function $(y){if(y._status===-1){var z=y._result;z=z(),z.then(function(B){(y._status===0||y._status===-1)&&(y._status=1,y._result=B)},function(B){(y._status===0||y._status===-1)&&(y._status=2,y._result=B)}),y._status===-1&&(y._status=0,y._result=z)}if(y._status===1)return y._result.default;throw y._result}var ye=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:L,forEach:function(y,z,B){L(y,function(){z.apply(this,arguments)},B)},count:function(y){var z=0;return L(y,function(){z++}),z},toArray:function(y){return L(y,function(z){return z})||[]},only:function(y){if(!Xe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return I.Activity=E,I.Children=Se,I.Component=K,I.Fragment=f,I.Profiler=m,I.PureComponent=P,I.StrictMode=u,I.Suspense=v,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,I.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Y.H.useMemoCache(y)}},I.cache=function(y){return function(){return y.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(y,z,B){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var F=q({},y.props),ee=y.key;if(z!=null)for(ie in z.key!==void 0&&(ee=""+z.key),z)!le.call(z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&z.ref===void 0||(F[ie]=z[ie]);var ie=arguments.length-2;if(ie===1)F.children=B;else if(1<ie){for(var me=Array(ie),We=0;We<ie;We++)me[We]=arguments[We+2];F.children=me}return Ee(y.type,ee,F)},I.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},I.createElement=function(y,z,B){var F,ee={},ie=null;if(z!=null)for(F in z.key!==void 0&&(ie=""+z.key),z)le.call(z,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ee[F]=z[F]);var me=arguments.length-2;if(me===1)ee.children=B;else if(1<me){for(var We=Array(me),Oe=0;Oe<me;Oe++)We[Oe]=arguments[Oe+2];ee.children=We}if(y&&y.defaultProps)for(F in me=y.defaultProps,me)ee[F]===void 0&&(ee[F]=me[F]);return Ee(y,ie,ee)},I.createRef=function(){return{current:null}},I.forwardRef=function(y){return{$$typeof:j,render:y}},I.isValidElement=Xe,I.lazy=function(y){return{$$typeof:R,_payload:{_status:-1,_result:y},_init:$}},I.memo=function(y,z){return{$$typeof:_,type:y,compare:z===void 0?null:z}},I.startTransition=function(y){var z=Y.T,B={};Y.T=B;try{var F=y(),ee=Y.S;ee!==null&&ee(B,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(V,ye)}catch(ie){ye(ie)}finally{z!==null&&B.types!==null&&(z.types=B.types),Y.T=z}},I.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},I.use=function(y){return Y.H.use(y)},I.useActionState=function(y,z,B){return Y.H.useActionState(y,z,B)},I.useCallback=function(y,z){return Y.H.useCallback(y,z)},I.useContext=function(y){return Y.H.useContext(y)},I.useDebugValue=function(){},I.useDeferredValue=function(y,z){return Y.H.useDeferredValue(y,z)},I.useEffect=function(y,z){return Y.H.useEffect(y,z)},I.useEffectEvent=function(y){return Y.H.useEffectEvent(y)},I.useId=function(){return Y.H.useId()},I.useImperativeHandle=function(y,z,B){return Y.H.useImperativeHandle(y,z,B)},I.useInsertionEffect=function(y,z){return Y.H.useInsertionEffect(y,z)},I.useLayoutEffect=function(y,z){return Y.H.useLayoutEffect(y,z)},I.useMemo=function(y,z){return Y.H.useMemo(y,z)},I.useOptimistic=function(y,z){return Y.H.useOptimistic(y,z)},I.useReducer=function(y,z,B){return Y.H.useReducer(y,z,B)},I.useRef=function(y){return Y.H.useRef(y)},I.useState=function(y){return Y.H.useState(y)},I.useSyncExternalStore=function(y,z,B){return Y.H.useSyncExternalStore(y,z,B)},I.useTransition=function(){return Y.H.useTransition()},I.version="19.2.3",I}var Wf;function ko(){return Wf||(Wf=1,jo.exports=I_()),jo.exports}var A=ko(),Ro={exports:{}},Mi={},Co={exports:{}},Do={};var $f;function eh(){return $f||($f=1,(function(o){function d(D,L){var $=D.length;D.push(L);e:for(;0<$;){var ye=$-1>>>1,Se=D[ye];if(0<m(Se,L))D[ye]=L,D[$]=Se,$=ye;else break e}}function f(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var L=D[0],$=D.pop();if($!==L){D[0]=$;e:for(var ye=0,Se=D.length,y=Se>>>1;ye<y;){var z=2*(ye+1)-1,B=D[z],F=z+1,ee=D[F];if(0>m(B,$))F<Se&&0>m(ee,B)?(D[ye]=ee,D[F]=$,ye=F):(D[ye]=B,D[z]=$,ye=z);else if(F<Se&&0>m(ee,$))D[ye]=ee,D[F]=$,ye=F;else break e}}return L}function m(D,L){var $=D.sortIndex-L.sortIndex;return $!==0?$:D.id-L.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var b=Date,j=b.now();o.unstable_now=function(){return b.now()-j}}var v=[],_=[],R=1,E=null,U=3,Q=!1,k=!1,q=!1,G=!1,K=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function ge(D){for(var L=f(_);L!==null;){if(L.callback===null)u(_);else if(L.startTime<=D)u(_),L.sortIndex=L.expirationTime,d(v,L);else break;L=f(_)}}function pe(D){if(q=!1,ge(D),!k)if(f(v)!==null)k=!0,V||(V=!0,He());else{var L=f(_);L!==null&&rt(pe,L.startTime-D)}}var V=!1,Y=-1,le=5,Ee=-1;function Ce(){return G?!0:!(o.unstable_now()-Ee<le)}function Xe(){if(G=!1,V){var D=o.unstable_now();Ee=D;var L=!0;try{e:{k=!1,q&&(q=!1,H(Y),Y=-1),Q=!0;var $=U;try{t:{for(ge(D),E=f(v);E!==null&&!(E.expirationTime>D&&Ce());){var ye=E.callback;if(typeof ye=="function"){E.callback=null,U=E.priorityLevel;var Se=ye(E.expirationTime<=D);if(D=o.unstable_now(),typeof Se=="function"){E.callback=Se,ge(D),L=!0;break t}E===f(v)&&u(v),ge(D)}else u(v);E=f(v)}if(E!==null)L=!0;else{var y=f(_);y!==null&&rt(pe,y.startTime-D),L=!1}}break e}finally{E=null,U=$,Q=!1}L=void 0}}finally{L?He():V=!1}}}var He;if(typeof P=="function")He=function(){P(Xe)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Rt=Ie.port2;Ie.port1.onmessage=Xe,He=function(){Rt.postMessage(null)}}else He=function(){K(Xe,0)};function rt(D,L){Y=K(function(){D(o.unstable_now())},L)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(D){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var $=U;U=L;try{return D()}finally{U=$}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=U;U=D;try{return L()}finally{U=$}},o.unstable_scheduleCallback=function(D,L,$){var ye=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ye+$:ye):$=ye,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=$+Se,D={id:R++,callback:L,priorityLevel:D,startTime:$,expirationTime:Se,sortIndex:-1},$>ye?(D.sortIndex=$,d(_,D),f(v)===null&&D===f(_)&&(q?(H(Y),Y=-1):q=!0,rt(pe,$-ye))):(D.sortIndex=Se,d(v,D),k||Q||(k=!0,V||(V=!0,He()))),D},o.unstable_shouldYield=Ce,o.unstable_wrapCallback=function(D){var L=U;return function(){var $=U;U=L;try{return D.apply(this,arguments)}finally{U=$}}}})(Do)),Do}var If;function th(){return If||(If=1,Co.exports=eh()),Co.exports}var Mo={exports:{}},Pe={};var em;function ah(){if(em)return Pe;em=1;var o=ko();function d(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)_+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(v,_,R){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:E==null?null:""+E,children:v,containerInfo:_,implementation:R}}var b=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Pe.createPortal=function(v,_){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(d(299));return h(v,_,null,R)},Pe.flushSync=function(v){var _=b.T,R=u.p;try{if(b.T=null,u.p=2,v)return v()}finally{b.T=_,u.p=R,u.d.f()}},Pe.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,u.d.C(v,_))},Pe.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Pe.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var R=_.as,E=j(R,_.crossOrigin),U=typeof _.integrity=="string"?_.integrity:void 0,Q=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;R==="style"?u.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:Q}):R==="script"&&u.d.X(v,{crossOrigin:E,integrity:U,fetchPriority:Q,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Pe.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var R=j(_.as,_.crossOrigin);u.d.M(v,{crossOrigin:R,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&u.d.M(v)},Pe.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var R=_.as,E=j(R,_.crossOrigin);u.d.L(v,R,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Pe.preloadModule=function(v,_){if(typeof v=="string")if(_){var R=j(_.as,_.crossOrigin);u.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:R,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else u.d.m(v)},Pe.requestFormReset=function(v){u.d.r(v)},Pe.unstable_batchedUpdates=function(v,_){return v(_)},Pe.useFormState=function(v,_,R){return b.H.useFormState(v,_,R)},Pe.useFormStatus=function(){return b.H.useHostTransitionStatus()},Pe.version="19.2.3",Pe}var tm;function lh(){if(tm)return Mo.exports;tm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Mo.exports=ah(),Mo.exports}var am;function ih(){if(am)return Mi;am=1;var o=th(),d=ko(),f=lh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(u(188))}function _(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return v(i),e;if(n===l)return v(i),t;n=n.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=n;else{for(var r=!1,c=i.child;c;){if(c===a){r=!0,a=i,l=n;break}if(c===l){r=!0,l=i,a=n;break}c=c.sibling}if(!r){for(c=n.child;c;){if(c===a){r=!0,a=n,l=i;break}if(c===l){r=!0,l=n,a=i;break}c=c.sibling}if(!r)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case G:return"StrictMode";case pe:return"Suspense";case V:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case P:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var rt=Array.isArray,D=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function y(e){return{current:e}}function z(e){0>Se||(e.current=ye[Se],ye[Se]=null,Se--)}function B(e,t){Se++,ye[Se]=e.current,e.current=t}var F=y(null),ee=y(null),ie=y(null),me=y(null);function We(e,t){switch(B(ie,t),B(ee,e),B(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gf(t),e=yf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(F),B(F,e)}function Oe(){z(F),z(ee),z(ie)}function kl(e){e.memoizedState!==null&&B(me,e);var t=F.current,a=yf(t,e.type);t!==a&&(B(ee,e),B(F,a))}function Li(e){ee.current===e&&(z(F),z(ee)),me.current===e&&(z(me),Ai._currentValue=$)}var os,Fo;function Ma(e){if(os===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||"",Fo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+e+Fo}var us=!1;function cs(e,t){if(!e||us)return"";us=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(N){var T=N}Reflect.construct(e,[],O)}else{try{O.call()}catch(N){T=N}e.call(O.prototype)}}else{try{throw Error()}catch(N){T=N}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(N){if(N&&T&&typeof N.stack=="string")return[N.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),r=n[0],c=n[1];if(r&&c){var p=r.split(`
`),w=c.split(`
`);for(i=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(l===p.length||i===w.length)for(l=p.length-1,i=w.length-1;1<=l&&0<=i&&p[l]!==w[i];)i--;for(;1<=l&&0<=i;l--,i--)if(p[l]!==w[i]){if(l!==1||i!==1)do if(l--,i--,0>i||p[l]!==w[i]){var C=`
`+p[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=i);break}}}finally{us=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ma(a):""}function jm(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return cs(e.type,!1);case 11:return cs(e.type.render,!1);case 1:return cs(e.type,!0);case 31:return Ma("Activity");default:return""}}function Zo(e){try{var t="",a=null;do t+=jm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ds=Object.prototype.hasOwnProperty,fs=o.unstable_scheduleCallback,ms=o.unstable_cancelCallback,Rm=o.unstable_shouldYield,Cm=o.unstable_requestPaint,ot=o.unstable_now,Dm=o.unstable_getCurrentPriorityLevel,Ko=o.unstable_ImmediatePriority,Jo=o.unstable_UserBlockingPriority,ki=o.unstable_NormalPriority,Mm=o.unstable_LowPriority,Po=o.unstable_IdlePriority,Om=o.log,zm=o.unstable_setDisableYieldValue,Bl=null,ut=null;function sa(e){if(typeof Om=="function"&&zm(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Bl,e)}catch{}}var ct=Math.clz32?Math.clz32:Lm,Um=Math.log,Hm=Math.LN2;function Lm(e){return e>>>=0,e===0?32:31-(Um(e)/Hm|0)|0}var Bi=256,qi=262144,Yi=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~n,l!==0?i=Oa(l):(r&=c,r!==0?i=Oa(r):a||(a=c&~e,a!==0&&(i=Oa(a))))):(c=l&~n,c!==0?i=Oa(c):r!==0?i=Oa(r):a||(a=l&~e,a!==0&&(i=Oa(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wo(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function ps(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bm(e,t,a,l,i,n){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var C=31-ct(a),O=1<<C;c[C]=0,p[C]=-1;var T=w[C];if(T!==null)for(w[C]=null,C=0;C<T.length;C++){var N=T[C];N!==null&&(N.lane&=-536870913)}a&=~O}l!==0&&$o(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(r&~t))}function $o(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Io(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function eu(e,t){var a=t&-t;return a=(a&42)!==0?1:_s(a),(a&(e.suspendedLanes|t))!==0?0:a}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tu(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Yf(e.type))}function au(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ra=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ra,et="__reactProps$"+ra,Wa="__reactContainer$"+ra,gs="__reactEvents$"+ra,qm="__reactListeners$"+ra,Ym="__reactHandles$"+ra,lu="__reactResources$"+ra,Gl="__reactMarker$"+ra;function ys(e){delete e[Qe],delete e[et],delete e[gs],delete e[qm],delete e[Ym]}function $a(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ef(e);e!==null;){if(a=e[Qe])return a;e=Ef(e)}return t}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[Qe]||e[Wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function el(e){var t=e[lu];return t||(t=e[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Gl]=!0}var iu=new Set,nu={};function za(e,t){tl(e,t),tl(e+"Capture",t)}function tl(e,t){for(nu[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var Gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),su={},ru={};function Vm(e){return ds.call(ru,e)?!0:ds.call(su,e)?!1:Gm.test(e)?ru[e]=!0:(su[e]=!0,!1)}function Vi(e,t,a){if(Vm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Bt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,n.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){if(!e._valueTracker){var t=ou(e)?"checked":"value";e._valueTracker=Xm(e,t,""+e[t])}}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=ou(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qm=/[\n"\\]/g;function bt(e){return e.replace(Qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bs(e,t,a,l,i,n,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?xs(e,r,vt(t)):a!=null?xs(e,r,vt(a)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+vt(c):e.removeAttribute("name")}function cu(e,t,a,l,i,n,r,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){vs(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),vs(e)}function xs(e,t,a){t==="number"&&Qi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function al(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function du(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function fu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(rt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),vs(e)}function ll(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Fm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&mu(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&mu(e,n,t[n])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Km=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return Km.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var ws=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,nl=null;function _u(e){var t=Ia(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(bs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[et]||null;if(!i)throw Error(u(90));bs(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&uu(l)}break e;case"textarea":du(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&al(e,!!a.multiple,t,!1)}}}var Es=!1;function hu(e,t,a){if(Es)return e(t,a);Es=!0;try{var l=e(t);return l}finally{if(Es=!1,(il!==null||nl!==null)&&(zn(),il&&(t=il,e=nl,nl=il=null,_u(t),e)))for(t=0;t<e.length;t++)_u(e[t])}}function Xl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[et]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=!1;if(Yt)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Ns=!1}var oa=null,As=null,Zi=null;function gu(){if(Zi)return Zi;var e,t=As,a=t.length,l,i="value"in oa?oa.value:oa.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===i[n-l];l++);return Zi=i.slice(e,1<l?1-l:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ji(){return!0}function yu(){return!1}function tt(e){function t(a,l,i,n,r){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ji:yu,this.isPropagationStopped=yu,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=tt(Ua),Fl=E({},Ua,{view:0,detail:0}),Jm=tt(Fl),js,Rs,Zl,Wi=E({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zl&&(Zl&&e.type==="mousemove"?(js=e.screenX-Zl.screenX,Rs=e.screenY-Zl.screenY):Rs=js=0,Zl=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Rs}}),vu=tt(Wi),Pm=E({},Wi,{dataTransfer:0}),Wm=tt(Pm),$m=E({},Fl,{relatedTarget:0}),Cs=tt($m),Im=E({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=tt(Im),tp=E({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=tt(tp),lp=E({},Ua,{data:0}),bu=tt(lp),ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function Ds(){return rp}var op=E({},Fl,{key:function(e){if(e.key){var t=ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),up=tt(op),cp=E({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=tt(cp),dp=E({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),fp=tt(dp),mp=E({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=tt(mp),_p=E({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hp=tt(_p),gp=E({},Ua,{newState:0,oldState:0}),yp=tt(gp),vp=[9,13,27,32],Ms=Yt&&"CompositionEvent"in window,Kl=null;Yt&&"documentMode"in document&&(Kl=document.documentMode);var bp=Yt&&"TextEvent"in window&&!Kl,Su=Yt&&(!Ms||Kl&&8<Kl&&11>=Kl),wu=" ",Tu=!1;function Eu(e,t){switch(e){case"keyup":return vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function xp(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Tu=!0,wu);case"textInput":return e=t.data,e===wu&&Tu?null:e;default:return null}}function Sp(e,t){if(sl)return e==="compositionend"||!Ms&&Eu(e,t)?(e=gu(),Zi=As=oa=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wp[e.type]:t==="textarea"}function ju(e,t,a,l){il?nl?nl.push(l):nl=[l]:il=l,t=Yn(t,"onChange"),0<t.length&&(a=new Pi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,Pl=null;function Tp(e){df(e,0)}function $i(e){var t=Vl(e);if(uu(t))return e}function Ru(e,t){if(e==="change")return t}var Cu=!1;if(Yt){var Os;if(Yt){var zs="oninput"in document;if(!zs){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),zs=typeof Du.oninput=="function"}Os=zs}else Os=!1;Cu=Os&&(!document.documentMode||9<document.documentMode)}function Mu(){Jl&&(Jl.detachEvent("onpropertychange",Ou),Pl=Jl=null)}function Ou(e){if(e.propertyName==="value"&&$i(Pl)){var t=[];ju(t,Pl,e,Ts(e)),hu(Tp,t)}}function Ep(e,t,a){e==="focusin"?(Mu(),Jl=t,Pl=a,Jl.attachEvent("onpropertychange",Ou)):e==="focusout"&&Mu()}function Np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Pl)}function Ap(e,t){if(e==="click")return $i(t)}function jp(e,t){if(e==="input"||e==="change")return $i(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Rp;function Wl(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!ds.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var a=zu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zu(a)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qi(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cp=Yt&&"documentMode"in document&&11>=document.documentMode,rl=null,Hs=null,$l=null,Ls=!1;function ku(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ls||rl==null||rl!==Qi(l)||(l=rl,"selectionStart"in l&&Us(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Wl($l,l)||($l=l,l=Yn(Hs,"onSelect"),0<l.length&&(t=new Pi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=rl)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ol={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},ks={},Bu={};Yt&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function La(e){if(ks[e])return ks[e];if(!ol[e])return e;var t=ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bu)return ks[e]=t[a];return e}var qu=La("animationend"),Yu=La("animationiteration"),Gu=La("animationstart"),Dp=La("transitionrun"),Mp=La("transitionstart"),Op=La("transitioncancel"),Vu=La("transitionend"),Xu=new Map,Bs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bs.push("scrollEnd");function Ct(e,t){Xu.set(e,t),za(t,[e])}var Ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],ul=0,qs=0;function en(){for(var e=ul,t=qs=ul=0;t<e;){var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var i=xt[t];xt[t++]=null;var n=xt[t];if(xt[t++]=null,l!==null&&i!==null){var r=l.pending;r===null?i.next=i:(i.next=r.next,r.next=i),l.pending=i}n!==0&&Qu(a,i,n)}}function tn(e,t,a,l){xt[ul++]=e,xt[ul++]=t,xt[ul++]=a,xt[ul++]=l,qs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ys(e,t,a,l){return tn(e,t,a,l),an(e)}function ka(e,t){return tn(e,null,null,t),an(e)}function Qu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-ct(a),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),n):null}function an(e){if(50<bi)throw bi=0,Pr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cl={};function zp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,a,l){return new zp(e,t,a,l)}function Gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ft(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ln(e,t,a,l,i,n){var r=0;if(l=e,typeof e=="function")Gs(e)&&(r=1);else if(typeof e=="string")r=B_(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=ft(31,a,t,i),e.elementType=Ee,e.lanes=n,e;case q:return Ba(a.children,i,n,t);case G:r=8,i|=24;break;case K:return e=ft(12,a,t,i|2),e.elementType=K,e.lanes=n,e;case pe:return e=ft(13,a,t,i),e.elementType=pe,e.lanes=n,e;case V:return e=ft(19,a,t,i),e.elementType=V,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:r=10;break e;case H:r=9;break e;case ge:r=11;break e;case Y:r=14;break e;case le:r=16,l=null;break e}r=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ft(r,a,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function Ba(e,t,a,l){return e=ft(7,e,l,t),e.lanes=a,e}function Vs(e,t,a){return e=ft(6,e,null,t),e.lanes=a,e}function Zu(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Xs(e,t,a){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ku=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var a=Ku.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zo(t)},Ku.set(e,t),t)}return{value:e,source:t,stack:Zo(t)}}var dl=[],fl=0,nn=null,Il=0,wt=[],Tt=0,ua=null,Ut=1,Ht="";function Vt(e,t){dl[fl++]=Il,dl[fl++]=nn,nn=e,Il=t}function Ju(e,t,a){wt[Tt++]=Ut,wt[Tt++]=Ht,wt[Tt++]=ua,ua=e;var l=Ut;e=Ht;var i=32-ct(l)-1;l&=~(1<<i),a+=1;var n=32-ct(t)+i;if(30<n){var r=i-i%5;n=(l&(1<<r)-1).toString(32),l>>=r,i-=r,Ut=1<<32-ct(t)+i|a<<i|l,Ht=n+e}else Ut=1<<n|a<<i|l,Ht=e}function Qs(e){e.return!==null&&(Vt(e,1),Ju(e,1,0))}function Fs(e){for(;e===nn;)nn=dl[--fl],dl[fl]=null,Il=dl[--fl],dl[fl]=null;for(;e===ua;)ua=wt[--Tt],wt[Tt]=null,Ht=wt[--Tt],wt[Tt]=null,Ut=wt[--Tt],wt[Tt]=null}function Pu(e,t){wt[Tt++]=Ut,wt[Tt++]=Ht,wt[Tt++]=ua,Ut=t.id,Ht=t.overflow,ua=e}var Fe=null,Ne=null,ue=!1,ca=null,Et=!1,Zs=Error(u(519));function da(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ei(St(t,e)),Zs}function Wu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[et]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Si.length;a++)se(Si[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),cu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),fu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||_f(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||da(e,!0)}function $u(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Fe=Fe.return}}function ml(e){if(e!==Fe)return!1;if(!ue)return $u(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||fo(e.type,e.memoizedProps)),a=!a),a&&Ne&&da(e),$u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=Tf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=Tf(e)}else t===27?(t=Ne,Ea(e.type)?(e=go,go=null,Ne=e):Ne=t):Ne=Fe?At(e.stateNode.nextSibling):null;return!0}function qa(){Ne=Fe=null,ue=!1}function Ks(){var e=ca;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),ca=null),e}function ei(e){ca===null?ca=[e]:ca.push(e)}var Js=y(null),Ya=null,Xt=null;function fa(e,t,a){B(Js,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=Js.current,z(Js)}function Ps(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ws(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var r=i.child;n=n.firstContext;e:for(;n!==null;){var c=n;n=i;for(var p=0;p<t.length;p++)if(c.context===t[p]){n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),Ps(n.return,a,e),l||(r=null);break e}n=c.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(u(341));r.lanes|=a,n=r.alternate,n!==null&&(n.lanes|=a),Ps(r,a,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function pl(e,t,a,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=i.type;dt(i.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(i===me.current){if(r=i.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ai):e=[Ai])}i=i.return}e!==null&&Ws(t,e,a,l),t.flags|=262144}function sn(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ya=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Iu(Ya,e)}function rn(e,t){return Ya===null&&Ga(e),Iu(e,t)}function Iu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(u(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var Up=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Hp=o.unstable_scheduleCallback,Lp=o.unstable_NormalPriority,Le={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $s(){return{controller:new Up,data:new Map,refCount:0}}function ti(e){e.refCount--,e.refCount===0&&Hp(Lp,function(){e.controller.abort()})}var ai=null,Is=0,_l=0,hl=null;function kp(e,t){if(ai===null){var a=ai=[];Is=0,_l=ao(),hl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Is++,t.then(ec,ec),t}function ec(){if(--Is===0&&ai!==null){hl!==null&&(hl.status="fulfilled");var e=ai;ai=null,_l=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var tc=D.S;D.S=function(e,t){kd=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kp(e,t),tc!==null&&tc(e,t)};var Va=y(null);function er(){var e=Va.current;return e!==null?e:we.pooledCache}function on(e,t){t===null?B(Va,Va.current):B(Va,t.pool)}function ac(){var e=er();return e===null?null:{parent:Le._currentValue,pool:e}}var gl=Error(u(460)),tr=Error(u(474)),un=Error(u(542)),cn={then:function(){}};function lc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ic(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sc(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sc(e),e}throw Qa=t,gl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,gl):a}}var Qa=null;function nc(){if(Qa===null)throw Error(u(459));var e=Qa;return Qa=null,e}function sc(e){if(e===gl||e===un)throw Error(u(483))}var yl=null,li=0;function dn(e){var t=li;return li+=1,yl===null&&(yl=[]),ic(yl,e,t)}function ii(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fn(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rc(e){function t(x,g){if(e){var S=x.deletions;S===null?(x.deletions=[g],x.flags|=16):S.push(g)}}function a(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function l(x){for(var g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(x,g){return x=Gt(x,g),x.index=0,x.sibling=null,x}function n(x,g,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<g?(x.flags|=67108866,g):S):(x.flags|=67108866,g)):(x.flags|=1048576,g)}function r(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function c(x,g,S,M){return g===null||g.tag!==6?(g=Vs(S,x.mode,M),g.return=x,g):(g=i(g,S),g.return=x,g)}function p(x,g,S,M){var J=S.type;return J===q?C(x,g,S.props.children,M,S.key):g!==null&&(g.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Xa(J)===g.type)?(g=i(g,S.props),ii(g,S),g.return=x,g):(g=ln(S.type,S.key,S.props,null,x.mode,M),ii(g,S),g.return=x,g)}function w(x,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Xs(S,x.mode,M),g.return=x,g):(g=i(g,S.children||[]),g.return=x,g)}function C(x,g,S,M,J){return g===null||g.tag!==7?(g=Ba(S,x.mode,M,J),g.return=x,g):(g=i(g,S),g.return=x,g)}function O(x,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Vs(""+g,x.mode,S),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return S=ln(g.type,g.key,g.props,null,x.mode,S),ii(S,g),S.return=x,S;case k:return g=Xs(g,x.mode,S),g.return=x,g;case le:return g=Xa(g),O(x,g,S)}if(rt(g)||He(g))return g=Ba(g,x.mode,S,null),g.return=x,g;if(typeof g.then=="function")return O(x,dn(g),S);if(g.$$typeof===P)return O(x,rn(x,g),S);fn(x,g)}return null}function T(x,g,S,M){var J=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return J!==null?null:c(x,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return S.key===J?p(x,g,S,M):null;case k:return S.key===J?w(x,g,S,M):null;case le:return S=Xa(S),T(x,g,S,M)}if(rt(S)||He(S))return J!==null?null:C(x,g,S,M,null);if(typeof S.then=="function")return T(x,g,dn(S),M);if(S.$$typeof===P)return T(x,g,rn(x,S),M);fn(x,S)}return null}function N(x,g,S,M,J){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return x=x.get(S)||null,c(g,x,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Q:return x=x.get(M.key===null?S:M.key)||null,p(g,x,M,J);case k:return x=x.get(M.key===null?S:M.key)||null,w(g,x,M,J);case le:return M=Xa(M),N(x,g,S,M,J)}if(rt(M)||He(M))return x=x.get(S)||null,C(g,x,M,J,null);if(typeof M.then=="function")return N(x,g,S,dn(M),J);if(M.$$typeof===P)return N(x,g,S,rn(g,M),J);fn(g,M)}return null}function X(x,g,S,M){for(var J=null,ce=null,Z=g,ae=g=0,oe=null;Z!==null&&ae<S.length;ae++){Z.index>ae?(oe=Z,Z=null):oe=Z.sibling;var de=T(x,Z,S[ae],M);if(de===null){Z===null&&(Z=oe);break}e&&Z&&de.alternate===null&&t(x,Z),g=n(de,g,ae),ce===null?J=de:ce.sibling=de,ce=de,Z=oe}if(ae===S.length)return a(x,Z),ue&&Vt(x,ae),J;if(Z===null){for(;ae<S.length;ae++)Z=O(x,S[ae],M),Z!==null&&(g=n(Z,g,ae),ce===null?J=Z:ce.sibling=Z,ce=Z);return ue&&Vt(x,ae),J}for(Z=l(Z);ae<S.length;ae++)oe=N(Z,x,ae,S[ae],M),oe!==null&&(e&&oe.alternate!==null&&Z.delete(oe.key===null?ae:oe.key),g=n(oe,g,ae),ce===null?J=oe:ce.sibling=oe,ce=oe);return e&&Z.forEach(function(Ca){return t(x,Ca)}),ue&&Vt(x,ae),J}function W(x,g,S,M){if(S==null)throw Error(u(151));for(var J=null,ce=null,Z=g,ae=g=0,oe=null,de=S.next();Z!==null&&!de.done;ae++,de=S.next()){Z.index>ae?(oe=Z,Z=null):oe=Z.sibling;var Ca=T(x,Z,de.value,M);if(Ca===null){Z===null&&(Z=oe);break}e&&Z&&Ca.alternate===null&&t(x,Z),g=n(Ca,g,ae),ce===null?J=Ca:ce.sibling=Ca,ce=Ca,Z=oe}if(de.done)return a(x,Z),ue&&Vt(x,ae),J;if(Z===null){for(;!de.done;ae++,de=S.next())de=O(x,de.value,M),de!==null&&(g=n(de,g,ae),ce===null?J=de:ce.sibling=de,ce=de);return ue&&Vt(x,ae),J}for(Z=l(Z);!de.done;ae++,de=S.next())de=N(Z,x,ae,de.value,M),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?ae:de.key),g=n(de,g,ae),ce===null?J=de:ce.sibling=de,ce=de);return e&&Z.forEach(function(P_){return t(x,P_)}),ue&&Vt(x,ae),J}function xe(x,g,S,M){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:e:{for(var J=S.key;g!==null;){if(g.key===J){if(J=S.type,J===q){if(g.tag===7){a(x,g.sibling),M=i(g,S.props.children),M.return=x,x=M;break e}}else if(g.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Xa(J)===g.type){a(x,g.sibling),M=i(g,S.props),ii(M,S),M.return=x,x=M;break e}a(x,g);break}else t(x,g);g=g.sibling}S.type===q?(M=Ba(S.props.children,x.mode,M,S.key),M.return=x,x=M):(M=ln(S.type,S.key,S.props,null,x.mode,M),ii(M,S),M.return=x,x=M)}return r(x);case k:e:{for(J=S.key;g!==null;){if(g.key===J)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(x,g.sibling),M=i(g,S.children||[]),M.return=x,x=M;break e}else{a(x,g);break}else t(x,g);g=g.sibling}M=Xs(S,x.mode,M),M.return=x,x=M}return r(x);case le:return S=Xa(S),xe(x,g,S,M)}if(rt(S))return X(x,g,S,M);if(He(S)){if(J=He(S),typeof J!="function")throw Error(u(150));return S=J.call(S),W(x,g,S,M)}if(typeof S.then=="function")return xe(x,g,dn(S),M);if(S.$$typeof===P)return xe(x,g,rn(x,S),M);fn(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(x,g.sibling),M=i(g,S),M.return=x,x=M):(a(x,g),M=Vs(S,x.mode,M),M.return=x,x=M),r(x)):a(x,g)}return function(x,g,S,M){try{li=0;var J=xe(x,g,S,M);return yl=null,J}catch(Z){if(Z===gl||Z===un)throw Z;var ce=ft(29,Z,null,x.mode);return ce.lanes=M,ce.return=x,ce}}}var Fa=rc(!0),oc=rc(!1),ma=!1;function ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=an(e),Qu(e,null,a),t}return tn(e,l,t,a),an(e)}function ni(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Io(e,a)}}function ir(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=r:n=n.next=r,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var nr=!1;function si(){if(nr){var e=hl;if(e!==null)throw e}}function ri(e,t,a,l){nr=!1;var i=e.updateQueue;ma=!1;var n=i.firstBaseUpdate,r=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var p=c,w=p.next;p.next=null,r===null?n=w:r.next=w,r=p;var C=e.alternate;C!==null&&(C=C.updateQueue,c=C.lastBaseUpdate,c!==r&&(c===null?C.firstBaseUpdate=w:c.next=w,C.lastBaseUpdate=p))}if(n!==null){var O=i.baseState;r=0,C=w=p=null,c=n;do{var T=c.lane&-536870913,N=T!==c.lane;if(N?(re&T)===T:(l&T)===T){T!==0&&T===_l&&(nr=!0),C!==null&&(C=C.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var X=e,W=c;T=t;var xe=a;switch(W.tag){case 1:if(X=W.payload,typeof X=="function"){O=X.call(xe,O,T);break e}O=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=W.payload,T=typeof X=="function"?X.call(xe,O,T):X,T==null)break e;O=E({},O,T);break e;case 2:ma=!0}}T=c.callback,T!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[T]:N.push(T))}else N={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},C===null?(w=C=N,p=O):C=C.next=N,r|=T;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;N=c,c=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);C===null&&(p=O),i.baseState=p,i.firstBaseUpdate=w,i.lastBaseUpdate=C,n===null&&(i.shared.lanes=0),ba|=r,e.lanes=r,e.memoizedState=O}}function uc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function cc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)uc(a[e],t)}var vl=y(null),mn=y(0);function dc(e,t){e=ea,B(mn,e),B(vl,t),ea=e|t.baseLanes}function sr(){B(mn,ea),B(vl,vl.current)}function rr(){ea=mn.current,z(vl),z(mn)}var mt=y(null),Nt=null;function ha(e){var t=e.alternate;B(ze,ze.current&1),B(mt,e),Nt===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(Nt=e)}function or(e){B(ze,ze.current),B(mt,e),Nt===null&&(Nt=e)}function fc(e){e.tag===22?(B(ze,ze.current),B(mt,e),Nt===null&&(Nt=e)):ga()}function ga(){B(ze,ze.current),B(mt,mt.current)}function pt(e){z(mt),Nt===e&&(Nt=null),z(ze)}var ze=y(0);function pn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_o(a)||ho(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,te=null,ve=null,ke=null,_n=!1,bl=!1,Za=!1,hn=0,oi=0,xl=null,qp=0;function De(){throw Error(u(321))}function ur(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function cr(e,t,a,l,i,n){return Ft=n,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Jc:Er,Za=!1,n=a(l,i),Za=!1,bl&&(n=pc(t,a,l,i)),mc(e),n}function mc(e){D.H=di;var t=ve!==null&&ve.next!==null;if(Ft=0,ke=ve=te=null,_n=!1,oi=0,xl=null,t)throw Error(u(300));e===null||Be||(e=e.dependencies,e!==null&&sn(e)&&(Be=!0))}function pc(e,t,a,l){te=e;var i=0;do{if(bl&&(xl=null),oi=0,bl=!1,25<=i)throw Error(u(301));if(i+=1,ke=ve=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}D.H=Pc,n=t(a,l)}while(bl);return n}function Yp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ui(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(te.flags|=1024),t}function dr(){var e=hn!==0;return hn=0,e}function fr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function mr(e){if(_n){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_n=!1}Ft=0,ke=ve=te=null,bl=!1,oi=hn=0,xl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?te.memoizedState=ke=e:ke=ke.next=e,ke}function Ue(){if(ve===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?te.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?te.memoizedState=ke=e:ke=ke.next=e}return ke}function gn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ui(e){var t=oi;return oi+=1,xl===null&&(xl=[]),e=ic(xl,e,t),t=te,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Jc:Er),e}function yn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ui(e);if(e.$$typeof===P)return Ze(e)}throw Error(u(438,String(e)))}function pr(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gn(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ce;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function vn(e){var t=Ue();return _r(t,ve,e)}function _r(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var r=i.next;i.next=n.next,n.next=r}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var c=r=null,p=null,w=t,C=!1;do{var O=w.lane&-536870913;if(O!==w.lane?(re&O)===O:(Ft&O)===O){var T=w.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),O===_l&&(C=!0);else if((Ft&T)===T){w=w.next,T===_l&&(C=!0);continue}else O={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=O,r=n):p=p.next=O,te.lanes|=T,ba|=T;O=w.action,Za&&a(n,O),n=w.hasEagerState?w.eagerState:a(n,O)}else T={lane:O,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=T,r=n):p=p.next=T,te.lanes|=O,ba|=O;w=w.next}while(w!==null&&w!==t);if(p===null?r=n:p.next=c,!dt(n,e.memoizedState)&&(Be=!0,C&&(a=hl,a!==null)))throw a;e.memoizedState=n,e.baseState=r,e.baseQueue=p,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hr(e){var t=Ue(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do n=e(n,r.action),r=r.next;while(r!==i);dt(n,t.memoizedState)||(Be=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function _c(e,t,a){var l=te,i=Ue(),n=ue;if(n){if(a===void 0)throw Error(u(407));a=a()}else a=t();var r=!dt((ve||i).memoizedState,a);if(r&&(i.memoizedState=a,Be=!0),i=i.queue,vr(yc.bind(null,l,i,e),[e]),i.getSnapshot!==t||r||ke!==null&&ke.memoizedState.tag&1){if(l.flags|=2048,Sl(9,{destroy:void 0},gc.bind(null,l,i,a,t),null),we===null)throw Error(u(349));n||(Ft&127)!==0||hc(l,t,a)}return a}function hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=gn(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function gc(e,t,a,l){t.value=a,t.getSnapshot=l,vc(t)&&bc(e)}function yc(e,t,a){return a(function(){vc(t)&&bc(e)})}function vc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function bc(e){var t=ka(e,2);t!==null&&st(t,e,2)}function gr(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Za){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function xc(e,t,a,l){return e.baseState=a,_r(e,ve,typeof l=="function"?l:Zt)}function Gp(e,t,a,l,i){if(Sn(e))throw Error(u(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){n.listeners.push(r)}};D.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,Sc(t,n)):(n.next=a.next,t.pending=a.next=n)}}function Sc(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=D.T,r={};D.T=r;try{var c=a(i,l),p=D.S;p!==null&&p(r,c),wc(e,t,c)}catch(w){yr(e,t,w)}finally{n!==null&&r.types!==null&&(n.types=r.types),D.T=n}}else try{n=a(i,l),wc(e,t,n)}catch(w){yr(e,t,w)}}function wc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tc(e,t,l)},function(l){return yr(e,t,l)}):Tc(e,t,a)}function Tc(e,t,a){t.status="fulfilled",t.value=a,Ec(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Sc(e,a)))}function yr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ec(t),t=t.next;while(t!==l)}e.action=null}function Ec(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nc(e,t){return t}function Ac(e,t){if(ue){var a=we.formState;if(a!==null){e:{var l=te;if(ue){if(Ne){t:{for(var i=Ne,n=Et;i.nodeType!==8;){if(!n){i=null;break t}if(i=At(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Ne=At(i.nextSibling),l=i.data==="F!";break e}}da(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nc,lastRenderedState:t},a.queue=l,a=Fc.bind(null,te,l),l.dispatch=a,l=gr(!1),n=Tr.bind(null,te,!1,l.queue),l=$e(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Gp.bind(null,te,i,n,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function jc(e){var t=Ue();return Rc(t,ve,e)}function Rc(e,t,a){if(t=_r(e,t,Nc)[0],e=vn(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ui(t)}catch(r){throw r===gl?un:r}else l=t;t=Ue();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Sl(9,{destroy:void 0},Vp.bind(null,i,a),null)),[l,n,e]}function Vp(e,t){e.action=t}function Cc(e){var t=Ue(),a=ve;if(a!==null)return Rc(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Sl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=gn(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Dc(){return Ue().memoizedState}function bn(e,t,a,l){var i=$e();te.flags|=e,i.memoizedState=Sl(1|t,{destroy:void 0},a,l===void 0?null:l)}function xn(e,t,a,l){var i=Ue();l=l===void 0?null:l;var n=i.memoizedState.inst;ve!==null&&l!==null&&ur(l,ve.memoizedState.deps)?i.memoizedState=Sl(t,n,a,l):(te.flags|=e,i.memoizedState=Sl(1|t,n,a,l))}function Mc(e,t){bn(8390656,8,e,t)}function vr(e,t){xn(2048,8,e,t)}function Xp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=gn(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Oc(e){var t=Ue().memoizedState;return Xp({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function zc(e,t){return xn(4,2,e,t)}function Uc(e,t){return xn(4,4,e,t)}function Hc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,a){a=a!=null?a.concat([e]):null,xn(4,4,Hc.bind(null,t,e),a)}function br(){}function kc(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ur(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Bc(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ur(t,l[1]))return l[0];if(l=e(),Za){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function xr(e,t,a){return a===void 0||(Ft&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=qd(),te.lanes|=e,ba|=e,a)}function qc(e,t,a,l){return dt(a,t)?a:vl.current!==null?(e=xr(e,a,l),dt(e,t)||(Be=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(re&261930)===0?(Be=!0,e.memoizedState=a):(e=qd(),te.lanes|=e,ba|=e,t)}function Yc(e,t,a,l,i){var n=L.p;L.p=n!==0&&8>n?n:8;var r=D.T,c={};D.T=c,Tr(e,!1,t,a);try{var p=i(),w=D.S;if(w!==null&&w(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=Bp(p,l);ci(e,t,C,gt(e))}else ci(e,t,l,gt(e))}catch(O){ci(e,t,{then:function(){},status:"rejected",reason:O},gt())}finally{L.p=n,r!==null&&c.types!==null&&(r.types=c.types),D.T=r}}function Qp(){}function Sr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=Gc(e).queue;Yc(e,i,t,$,a===null?Qp:function(){return Vc(e),a(l)})}function Gc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vc(e){var t=Gc(e);t.next===null&&(t=e.alternate.memoizedState),ci(e,t.next.queue,{},gt())}function wr(){return Ze(Ai)}function Xc(){return Ue().memoizedState}function Qc(){return Ue().memoizedState}function Fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=pa(a);var l=_a(t,e,a);l!==null&&(st(l,t,a),ni(l,t,a)),t={cache:$s()},e.payload=t;return}t=t.return}}function Zp(e,t,a){var l=gt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sn(e)?Zc(t,a):(a=Ys(e,t,a,l),a!==null&&(st(a,e,l),Kc(a,t,l)))}function Fc(e,t,a){var l=gt();ci(e,t,a,l)}function ci(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sn(e))Zc(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var r=t.lastRenderedState,c=n(r,a);if(i.hasEagerState=!0,i.eagerState=c,dt(c,r))return tn(e,t,i,0),we===null&&en(),!1}catch{}if(a=Ys(e,t,i,l),a!==null)return st(a,e,l),Kc(a,t,l),!0}return!1}function Tr(e,t,a,l){if(l={lane:2,revertLane:ao(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Sn(e)){if(t)throw Error(u(479))}else t=Ys(e,a,l,2),t!==null&&st(t,e,2)}function Sn(e){var t=e.alternate;return e===te||t!==null&&t===te}function Zc(e,t){bl=_n=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Kc(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Io(e,a)}}var di={readContext:Ze,use:yn,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};di.useEffectEvent=De;var Jc={readContext:Ze,use:yn,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Mc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bn(4194308,4,Hc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bn(4194308,4,e,t)},useInsertionEffect:function(e,t){bn(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Za){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var i=a(t);if(Za){sa(!0);try{a(t)}finally{sa(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Zp.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=gr(e);var t=e.queue,a=Fc.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:br,useDeferredValue:function(e,t){var a=$e();return xr(a,e,t)},useTransition:function(){var e=gr(!1);return e=Yc.bind(null,te,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,i=$e();if(ue){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),we===null)throw Error(u(349));(re&127)!==0||hc(l,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,Mc(yc.bind(null,l,n,e),[e]),l.flags|=2048,Sl(9,{destroy:void 0},gc.bind(null,l,n,a,t),null),a},useId:function(){var e=$e(),t=we.identifierPrefix;if(ue){var a=Ht,l=Ut;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wr,useFormState:Ac,useActionState:Ac,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Tr.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:pr,useCacheRefresh:function(){return $e().memoizedState=Fp.bind(null,te)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Er={readContext:Ze,use:yn,useCallback:kc,useContext:Ze,useEffect:vr,useImperativeHandle:Lc,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Bc,useReducer:vn,useRef:Dc,useState:function(){return vn(Zt)},useDebugValue:br,useDeferredValue:function(e,t){var a=Ue();return qc(a,ve.memoizedState,e,t)},useTransition:function(){var e=vn(Zt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:ui(e),t]},useSyncExternalStore:_c,useId:Xc,useHostTransitionStatus:wr,useFormState:jc,useActionState:jc,useOptimistic:function(e,t){var a=Ue();return xc(a,ve,e,t)},useMemoCache:pr,useCacheRefresh:Qc};Er.useEffectEvent=Oc;var Pc={readContext:Ze,use:yn,useCallback:kc,useContext:Ze,useEffect:vr,useImperativeHandle:Lc,useInsertionEffect:zc,useLayoutEffect:Uc,useMemo:Bc,useReducer:hr,useRef:Dc,useState:function(){return hr(Zt)},useDebugValue:br,useDeferredValue:function(e,t){var a=Ue();return ve===null?xr(a,e,t):qc(a,ve.memoizedState,e,t)},useTransition:function(){var e=hr(Zt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:ui(e),t]},useSyncExternalStore:_c,useId:Xc,useHostTransitionStatus:wr,useFormState:Cc,useActionState:Cc,useOptimistic:function(e,t){var a=Ue();return ve!==null?xc(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:pr,useCacheRefresh:Qc};Pc.useEffectEvent=Oc;function Nr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ar={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),i=pa(l);i.payload=t,a!=null&&(i.callback=a),t=_a(e,i,l),t!==null&&(st(t,e,l),ni(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),i=pa(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=_a(e,i,l),t!==null&&(st(t,e,l),ni(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=_a(e,l,a),t!==null&&(st(t,e,a),ni(t,e,a))}};function Wc(e,t,a,l,i,n,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,r):t.prototype&&t.prototype.isPureReactComponent?!Wl(a,l)||!Wl(i,n):!0}function $c(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ar.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Ic(e){Ii(e)}function ed(e){console.error(e)}function td(e){Ii(e)}function wn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ad(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function jr(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){wn(e,t)},a}function ld(e){return e=pa(e),e.tag=3,e}function id(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){ad(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ad(t,a,l),typeof i!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Kp(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,i,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Un():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===cn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ir(e,l,i)),!1;case 22:return a.flags|=65536,l===cn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ir(e,l,i)),!1}throw Error(u(435,a.tag))}return Ir(e,l,i),Un(),!1}if(ue)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Zs&&(e=Error(u(422),{cause:l}),ei(St(e,a)))):(l!==Zs&&(t=Error(u(423),{cause:l}),ei(St(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=St(l,a),i=jr(e.stateNode,l,i),ir(e,i),Me!==4&&(Me=2)),!1;var n=Error(u(520),{cause:l});if(n=St(n,a),vi===null?vi=[n]:vi.push(n),Me!==4&&(Me=2),t===null)return!0;l=St(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=jr(a.stateNode,l,e),ir(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(xa===null||!xa.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ld(i),id(i,e,a,l),ir(a,i),!1}a=a.return}while(a!==null);return!1}var Rr=Error(u(461)),Be=!1;function Ke(e,t,a,l){t.child=e===null?oc(t,null,a,l):Fa(t,e.child,a,l)}function nd(e,t,a,l,i){a=a.render;var n=t.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return Ga(t),l=cr(e,t,a,r,n,i),c=dr(),e!==null&&!Be?(fr(e,t,i),Kt(e,t,i)):(ue&&c&&Qs(t),t.flags|=1,Ke(e,t,l,i),t.child)}function sd(e,t,a,l,i){if(e===null){var n=a.type;return typeof n=="function"&&!Gs(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,rd(e,t,n,l,i)):(e=ln(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!Lr(e,i)){var r=n.memoizedProps;if(a=a.compare,a=a!==null?a:Wl,a(r,l)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=Gt(n,l),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,a,l,i){if(e!==null){var n=e.memoizedProps;if(Wl(n,l)&&e.ref===t.ref)if(Be=!1,t.pendingProps=l=n,Lr(e,i))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return Cr(e,t,a,l,i)}function od(e,t,a,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return ud(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&on(t,n!==null?n.cachePool:null),n!==null?dc(t,n):sr(),fc(t);else return l=t.lanes=536870912,ud(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(on(t,n.cachePool),dc(t,n),ga(),t.memoizedState=null):(e!==null&&on(t,null),sr(),ga());return Ke(e,t,i,a),t.child}function fi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ud(e,t,a,l,i){var n=er();return n=n===null?null:{parent:Le._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&on(t,null),sr(),fc(t),e!==null&&pl(e,t,l,!0),t.childLanes=i,null}function Tn(e,t){return t=Nn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cd(e,t,a){return Fa(t,e.child,null,a),e=Tn(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function Jp(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(l.mode==="hidden")return e=Tn(t,l),t.lanes=536870912,fi(null,e);if(or(t),(e=Ne)?(e=wf(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=t,t.child=a,Fe=t,Ne=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return Tn(t,l)}var n=e.memoizedState;if(n!==null){var r=n.dehydrated;if(or(t),i)if(t.flags&256)t.flags&=-257,t=cd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Be||pl(e,t,a,!1),i=(a&e.childLanes)!==0,Be||i){if(l=we,l!==null&&(r=eu(l,a),r!==0&&r!==n.retryLane))throw n.retryLane=r,ka(e,r),st(l,e,r),Rr;Un(),t=cd(e,t,a)}else e=n.treeContext,Ne=At(r.nextSibling),Fe=t,ue=!0,ca=null,Et=!1,e!==null&&Pu(t,e),t=Tn(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function En(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Cr(e,t,a,l,i){return Ga(t),a=cr(e,t,a,l,void 0,i),l=dr(),e!==null&&!Be?(fr(e,t,i),Kt(e,t,i)):(ue&&l&&Qs(t),t.flags|=1,Ke(e,t,a,i),t.child)}function dd(e,t,a,l,i,n){return Ga(t),t.updateQueue=null,a=pc(t,l,a,i),mc(e),l=dr(),e!==null&&!Be?(fr(e,t,n),Kt(e,t,n)):(ue&&l&&Qs(t),t.flags|=1,Ke(e,t,a,n),t.child)}function fd(e,t,a,l,i){if(Ga(t),t.stateNode===null){var n=cl,r=a.contextType;typeof r=="object"&&r!==null&&(n=Ze(r)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ar,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},ar(t),r=a.contextType,n.context=typeof r=="object"&&r!==null?Ze(r):cl,n.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Nr(t,a,r,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(r=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),r!==n.state&&Ar.enqueueReplaceState(n,n.state,null),ri(t,l,n,i),si(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var c=t.memoizedProps,p=Ka(a,c);n.props=p;var w=n.context,C=a.contextType;r=cl,typeof C=="object"&&C!==null&&(r=Ze(C));var O=a.getDerivedStateFromProps;C=typeof O=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,C||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||w!==r)&&$c(t,n,l,r),ma=!1;var T=t.memoizedState;n.state=T,ri(t,l,n,i),si(),w=t.memoizedState,c||T!==w||ma?(typeof O=="function"&&(Nr(t,a,O,l),w=t.memoizedState),(p=ma||Wc(t,a,p,l,T,w,r))?(C||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),n.props=l,n.state=w,n.context=r,l=p):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,lr(e,t),r=t.memoizedProps,C=Ka(a,r),n.props=C,O=t.pendingProps,T=n.context,w=a.contextType,p=cl,typeof w=="object"&&w!==null&&(p=Ze(w)),c=a.getDerivedStateFromProps,(w=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(r!==O||T!==p)&&$c(t,n,l,p),ma=!1,T=t.memoizedState,n.state=T,ri(t,l,n,i),si();var N=t.memoizedState;r!==O||T!==N||ma||e!==null&&e.dependencies!==null&&sn(e.dependencies)?(typeof c=="function"&&(Nr(t,a,c,l),N=t.memoizedState),(C=ma||Wc(t,a,C,l,T,N,p)||e!==null&&e.dependencies!==null&&sn(e.dependencies))?(w||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,N,p),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,N,p)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),n.props=l,n.state=N,n.context=p,l=C):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,En(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,a,i)):Ke(e,t,a,i),t.memoizedState=n.state,e=t.child):e=Kt(e,t,i),e}function md(e,t,a,l){return qa(),t.flags|=256,Ke(e,t,a,l),t.child}var Dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mr(e){return{baseLanes:e,cachePool:ac()}}function Or(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ht),e}function pd(e,t,a){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,r;if((r=n)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(i?ha(t):ga(),(e=Ne)?(e=wf(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Zu(e),a.return=t,t.child=a,Fe=t,Ne=null)):e=null,e===null)throw da(t);return ho(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,i?(ga(),i=t.mode,c=Nn({mode:"hidden",children:c},i),l=Ba(l,i,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Mr(a),l.childLanes=Or(e,r,a),t.memoizedState=Dr,fi(null,l)):(ha(t),zr(t,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(n)t.flags&256?(ha(t),t.flags&=-257,t=Ur(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),c=l.fallback,i=t.mode,l=Nn({mode:"visible",children:l.children},i),c=Ba(c,i,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Fa(t,e.child,null,a),l=t.child,l.memoizedState=Mr(a),l.childLanes=Or(e,r,a),t.memoizedState=Dr,t=fi(null,l));else if(ha(t),ho(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(u(419)),l.stack="",l.digest=r,ei({value:l,source:null,stack:null}),t=Ur(e,t,a)}else if(Be||pl(e,t,a,!1),r=(a&e.childLanes)!==0,Be||r){if(r=we,r!==null&&(l=eu(r,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,ka(e,l),st(r,e,l),Rr;_o(c)||Un(),t=Ur(e,t,a)}else _o(c)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ne=At(c.nextSibling),Fe=t,ue=!0,ca=null,Et=!1,e!==null&&Pu(t,e),t=zr(t,l.children),t.flags|=4096);return t}return i?(ga(),c=l.fallback,i=t.mode,p=e.child,w=p.sibling,l=Gt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,w!==null?c=Gt(w,c):(c=Ba(c,i,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,fi(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Mr(a):(i=c.cachePool,i!==null?(p=Le._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=ac(),c={baseLanes:c.baseLanes|a,cachePool:i}),l.memoizedState=c,l.childLanes=Or(e,r,a),t.memoizedState=Dr,fi(e.child,l)):(ha(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function zr(e,t){return t=Nn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nn(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function Ur(e,t,a){return Fa(t,e.child,null,a),e=zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ps(e.return,t,a)}function Hr(e,t,a,l,i,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=i,r.treeForkCount=n)}function hd(e,t,a){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var r=ze.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,B(ze,r),Ke(e,t,l,a),l=ue?Il:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,a,t);else if(e.tag===19)_d(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&pn(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Hr(t,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pn(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Hr(t,!0,a,null,n,l);break;case"together":Hr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Lr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sn(e)))}function Pp(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),fa(t,Le,e.memoizedState.cache),qa();break;case 27:case 5:kl(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,or(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?pd(e,t,a):(ha(t),e=Kt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return hd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(ze,ze.current),l)break;return null;case 22:return t.lanes=0,od(e,t,a,t.pendingProps);case 24:fa(t,Le,e.memoizedState.cache)}return Kt(e,t,a)}function gd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Lr(e,a)&&(t.flags&128)===0)return Be=!1,Pp(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,ue&&(t.flags&1048576)!==0&&Ju(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Gs(e)?(l=Ka(e,l),t.tag=1,t=fd(null,t,e,l,a)):(t.tag=0,t=Cr(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===ge){t.tag=11,t=nd(null,t,e,l,a);break e}else if(i===Y){t.tag=14,t=sd(null,t,e,l,a);break e}}throw t=Rt(e)||e,Error(u(306,t,""))}}return t;case 0:return Cr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Ka(l,t.pendingProps),fd(e,t,l,i,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,lr(e,t),ri(t,l,null,a);var r=t.memoizedState;if(l=r.cache,fa(t,Le,l),l!==n.cache&&Ws(t,[Le],a,!0),si(),l=r.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=md(e,t,l,a);break e}else if(l!==i){i=St(Error(u(424)),t),ei(i),t=md(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=At(e.firstChild),Fe=t,ue=!0,ca=null,Et=!0,a=oc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),l===i){t=Kt(e,t,a);break e}Ke(e,t,l,a)}t=t.child}return t;case 26:return En(e,t),e===null?(a=Rf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,l=Gn(ie.current).createElement(a),l[Qe]=t,l[et]=e,Je(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=Rf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kl(t),e===null&&ue&&(l=t.stateNode=Nf(t.type,t.pendingProps,ie.current),Fe=t,Et=!0,i=Ne,Ea(t.type)?(go=i,Ne=At(l.firstChild)):Ne=i),Ke(e,t,t.pendingProps.children,a),En(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((i=l=Ne)&&(l=N_(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Fe=t,Ne=At(l.firstChild),Et=!1,i=!0):i=!1),i||da(t)),kl(t),i=t.type,n=t.pendingProps,r=e!==null?e.memoizedProps:null,l=n.children,fo(i,n)?l=null:r!==null&&fo(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=cr(e,t,Yp,null,null,a),Ai._currentValue=i),En(e,t),Ke(e,t,l,a),t.child;case 6:return e===null&&ue&&((e=a=Ne)&&(a=A_(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Fe=t,Ne=null,e=!0):e=!1),e||da(t)),null;case 13:return pd(e,t,a);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Fa(t,null,l,a):Ke(e,t,l,a),t.child;case 11:return nd(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Ke(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ga(t),i=Ze(i),l=l(i),t.flags|=1,Ke(e,t,l,a),t.child;case 14:return sd(e,t,t.type,t.pendingProps,a);case 15:return rd(e,t,t.type,t.pendingProps,a);case 19:return hd(e,t,a);case 31:return Jp(e,t,a);case 22:return od(e,t,a,t.pendingProps);case 24:return Ga(t),l=Ze(Le),e===null?(i=er(),i===null&&(i=we,n=$s(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:l,cache:i},ar(t),fa(t,Le,i)):((e.lanes&a)!==0&&(lr(e,t),ri(t,null,null,a),si()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),fa(t,Le,l)):(l=n.cache,fa(t,Le,l),l!==i.cache&&Ws(t,[Le],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Jt(e){e.flags|=4}function kr(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Xd())e.flags|=8192;else throw Qa=cn,tr}else e.flags&=-16777217}function yd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zf(t))if(Xd())e.flags|=8192;else throw Qa=cn,tr}function An(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wo():536870912,e.lanes|=t,Nl|=t)}function mi(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Wp(e,t,a){var l=t.pendingProps;switch(Fs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Qt(Le),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ks())),Ae(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Jt(t),n!==null?(Ae(t),yd(t,n)):(Ae(t),kr(t,i,null,l,a))):n?n!==e.memoizedState?(Jt(t),Ae(t),yd(t,n)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),Ae(t),kr(t,i,e,l,a)),null;case 27:if(Li(t),a=ie.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}e=F.current,ml(t)?Wu(t):(e=Nf(i,l,a),t.stateNode=e,Jt(t))}return Ae(t),null;case 5:if(Li(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}if(n=F.current,ml(t))Wu(t);else{var r=Gn(ie.current);switch(n){case 1:n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=r.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?r.createElement(i,{is:l.is}):r.createElement(i)}}n[Qe]=t,n[et]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=n;e:switch(Je(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return Ae(t),kr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ie.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Fe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_f(e.nodeValue,a)),e||da(t,!0)}else e=Gn(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return Ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else a=Ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ae(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else i=Ks(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),An(t,t.updateQueue),Ae(t),null);case 4:return Oe(),e===null&&so(t.stateNode.containerInfo),Ae(t),null;case 10:return Qt(t.type),Ae(t),null;case 19:if(z(ze),l=t.memoizedState,l===null)return Ae(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)mi(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=pn(e),n!==null){for(t.flags|=128,mi(l,!1),e=n.updateQueue,t.updateQueue=e,An(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Fu(a,e),a=a.sibling;return B(ze,ze.current&1|2),ue&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ot()>Mn&&(t.flags|=128,i=!0,mi(l,!1),t.lanes=4194304)}else{if(!i)if(e=pn(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,An(t,e),mi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ue)return Ae(t),null}else 2*ot()-l.renderingStartTime>Mn&&a!==536870912&&(t.flags|=128,i=!0,mi(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ot(),e.sibling=null,a=ze.current,B(ze,i?a&1|2:a&1),ue&&Vt(t,l.treeForkCount),e):(Ae(t),null);case 22:case 23:return pt(t),rr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),a=t.updateQueue,a!==null&&An(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&z(Va),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Le),Ae(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $p(e,t){switch(Fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Le),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Li(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(ze),null;case 4:return Oe(),null;case 10:return Qt(t.type),null;case 22:case 23:return pt(t),rr(),e!==null&&z(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Le),null;case 25:return null;default:return null}}function vd(e,t){switch(Fs(t),t.tag){case 3:Qt(Le),Oe();break;case 26:case 27:case 5:Li(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:z(ze);break;case 10:Qt(t.type);break;case 22:case 23:pt(t),rr(),e!==null&&z(Va);break;case 24:Qt(Le)}}function pi(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var n=a.create,r=a.inst;l=n(),r.destroy=l}a=a.next}while(a!==i)}}catch(c){he(t,t.return,c)}}function ya(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,i=t;var p=a,w=c;try{w()}catch(C){he(i,p,C)}}}l=l.next}while(l!==n)}}catch(C){he(t,t.return,C)}}function bd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{cc(t,a)}catch(l){he(e,e.return,l)}}}function xd(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function _i(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){he(e,t,i)}}function Lt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){he(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){he(e,t,i)}else a.current=null}function Sd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){he(e,e.return,i)}}function Br(e,t,a){try{var l=e.stateNode;b_(l,e.type,a,t),l[et]=t}catch(i){he(e,e.return,i)}}function wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function qr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Yr(e,t,a),e=e.sibling;e!==null;)Yr(e,t,a),e=e.sibling}function jn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jn(e,t,a),e=e.sibling;e!==null;)jn(e,t,a),e=e.sibling}function Td(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Je(t,l,a),t[Qe]=e,t[et]=a}catch(n){he(e,e.return,n)}}var Pt=!1,qe=!1,Gr=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ip(e,t){if(e=e.containerInfo,uo=Jn,e=Lu(e),Us(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var r=0,c=-1,p=-1,w=0,C=0,O=e,T=null;t:for(;;){for(var N;O!==a||i!==0&&O.nodeType!==3||(c=r+i),O!==n||l!==0&&O.nodeType!==3||(p=r+l),O.nodeType===3&&(r+=O.nodeValue.length),(N=O.firstChild)!==null;)T=O,O=N;for(;;){if(O===e)break t;if(T===a&&++w===i&&(c=r),T===n&&++C===l&&(p=r),(N=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=N}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(co={focusedElem:e,selectionRange:a},Jn=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var X=Ka(a.type,i);e=l.getSnapshotBeforeUpdate(X,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){he(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)po(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":po(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function Nd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),l&4&&pi(5,a);break;case 1:if($t(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){he(a,a.return,r)}else{var i=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){he(a,a.return,r)}}l&64&&bd(a),l&512&&_i(a,a.return);break;case 3:if($t(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{cc(e,t)}catch(r){he(a,a.return,r)}}break;case 27:t===null&&l&4&&Td(a);case 26:case 5:$t(e,a),t===null&&l&4&&Sd(a),l&512&&_i(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),l&4&&Rd(e,a);break;case 13:$t(e,a),l&4&&Cd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=o_.bind(null,a),j_(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||qe,i=Pt;var n=qe;Pt=l,(qe=t)&&!n?It(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Pt=i,qe=n}break;case 30:break;default:$t(e,a)}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ys(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,at=!1;function Wt(e,t,a){for(a=a.child;a!==null;)jd(e,t,a),a=a.sibling}function jd(e,t,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Bl,a)}catch{}switch(a.tag){case 26:qe||Lt(a,t),Wt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Lt(a,t);var l=je,i=at;Ea(a.type)&&(je=a.stateNode,at=!1),Wt(e,t,a),Ti(a.stateNode),je=l,at=i;break;case 5:qe||Lt(a,t);case 6:if(l=je,i=at,je=null,Wt(e,t,a),je=l,at=i,je!==null)if(at)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(n){he(a,t,n)}else try{je.removeChild(a.stateNode)}catch(n){he(a,t,n)}break;case 18:je!==null&&(at?(e=je,xf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zl(e)):xf(je,a.stateNode));break;case 4:l=je,i=at,je=a.stateNode.containerInfo,at=!0,Wt(e,t,a),je=l,at=i;break;case 0:case 11:case 14:case 15:ya(2,a,t),qe||ya(4,a,t),Wt(e,t,a);break;case 1:qe||(Lt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&xd(a,t,l)),Wt(e,t,a);break;case 21:Wt(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Wt(e,t,a),qe=l;break;default:Wt(e,t,a)}}function Rd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zl(e)}catch(a){he(t,t.return,a)}}}function Cd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zl(e)}catch(a){he(t,t.return,a)}}function e_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ed),t;default:throw Error(u(435,e.tag))}}function Rn(e,t){var a=e_(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=u_.bind(null,e,l);l.then(i,i)}})}function lt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Ea(c.type)){je=c.stateNode,at=!1;break e}break;case 5:je=c.stateNode,at=!1;break e;case 3:case 4:je=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(je===null)throw Error(u(160));jd(n,r,i),je=null,at=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}var Dt=null;function Dd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),it(e),l&4&&(ya(3,e,e.return),pi(3,e),ya(5,e,e.return));break;case 1:lt(t,e),it(e),l&512&&(qe||a===null||Lt(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Dt;if(lt(t,e),it(e),l&512&&(qe||a===null||Lt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Gl]||n[Qe]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Je(n,l,a),n[Qe]=e,Ge(n),l=n;break e;case"link":var r=Mf("link","href",i).get(l+(a.href||""));if(r){for(var c=0;c<r.length;c++)if(n=r[c],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(c,1);break t}}n=i.createElement(l),Je(n,l,a),i.head.appendChild(n);break;case"meta":if(r=Mf("meta","content",i).get(l+(a.content||""))){for(c=0;c<r.length;c++)if(n=r[c],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(c,1);break t}}n=i.createElement(l),Je(n,l,a),i.head.appendChild(n);break;default:throw Error(u(468,l))}n[Qe]=e,Ge(n),l=n}e.stateNode=l}else Of(i,e.type,e.stateNode);else e.stateNode=Df(i,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Of(i,e.type,e.stateNode):Df(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Br(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),it(e),l&512&&(qe||a===null||Lt(a,a.return)),a!==null&&l&4&&Br(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),it(e),l&512&&(qe||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{ll(i,"")}catch(X){he(e,e.return,X)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Br(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Gr=!0);break;case 6:if(lt(t,e),it(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(X){he(e,e.return,X)}}break;case 3:if(Qn=null,i=Dt,Dt=Vn(t.containerInfo),lt(t,e),Dt=i,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(t.containerInfo)}catch(X){he(e,e.return,X)}Gr&&(Gr=!1,Md(e));break;case 4:l=Dt,Dt=Vn(e.stateNode.containerInfo),lt(t,e),it(e),Dt=l;break;case 12:lt(t,e),it(e);break;case 31:lt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 13:lt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dn=ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,w=Pt,C=qe;if(Pt=w||i,qe=C||p,lt(t,e),qe=C,Pt=w,it(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||Pt||qe||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(n=p.stateNode,i)r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=p.stateNode;var O=p.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(X){he(p,p.return,X)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(X){he(p,p.return,X)}}}else if(t.tag===18){if(a===null){p=t;try{var N=p.stateNode;i?Sf(N,!0):Sf(p.stateNode,!1)}catch(X){he(p,p.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Rn(e,a))));break;case 19:lt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rn(e,l)));break;case 30:break;case 21:break;default:lt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,n=qr(e);jn(e,n,i);break;case 5:var r=a.stateNode;a.flags&32&&(ll(r,""),a.flags&=-33);var c=qr(e);jn(e,c,r);break;case 3:case 4:var p=a.stateNode.containerInfo,w=qr(e);Yr(e,w,p);break;default:throw Error(u(161))}}catch(C){he(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Md(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nd(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Ja(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&xd(t,t.return,a),Ja(t);break;case 27:Ti(t.stateNode);case 26:case 5:Lt(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,r=n.flags;switch(n.tag){case 0:case 11:case 15:It(i,n,a),pi(4,n);break;case 1:if(It(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){he(l,l.return,w)}if(l=n,i=l.updateQueue,i!==null){var c=l.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)uc(p[i],c)}catch(w){he(l,l.return,w)}}a&&r&64&&bd(n),_i(n,n.return);break;case 27:Td(n);case 26:case 5:It(i,n,a),a&&l===null&&r&4&&Sd(n),_i(n,n.return);break;case 12:It(i,n,a);break;case 31:It(i,n,a),a&&r&4&&Rd(i,n);break;case 13:It(i,n,a),a&&r&4&&Cd(i,n);break;case 22:n.memoizedState===null&&It(i,n,a),_i(n,n.return);break;case 30:break;default:It(i,n,a)}t=t.sibling}}function Vr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ti(a))}function Xr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Od(e,t,a,l),t=t.sibling}function Od(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),i&2048&&pi(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ti(e)));break;case 12:if(i&2048){Mt(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,r=n.id,c=n.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){he(t,t.return,p)}}else Mt(e,t,a,l);break;case 31:Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,r=t.alternate,t.memoizedState!==null?n._visibility&2?Mt(e,t,a,l):hi(e,t):n._visibility&2?Mt(e,t,a,l):(n._visibility|=2,wl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Vr(r,t);break;case 24:Mt(e,t,a,l),i&2048&&Xr(t.alternate,t);break;default:Mt(e,t,a,l)}}function wl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,r=t,c=a,p=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:wl(n,r,c,p,i),pi(8,r);break;case 23:break;case 22:var C=r.stateNode;r.memoizedState!==null?C._visibility&2?wl(n,r,c,p,i):hi(n,r):(C._visibility|=2,wl(n,r,c,p,i)),i&&w&2048&&Vr(r.alternate,r);break;case 24:wl(n,r,c,p,i),i&&w&2048&&Xr(r.alternate,r);break;default:wl(n,r,c,p,i)}t=t.sibling}}function hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:hi(a,l),i&2048&&Vr(l.alternate,l);break;case 24:hi(a,l),i&2048&&Xr(l.alternate,l);break;default:hi(a,l)}t=t.sibling}}var gi=8192;function Tl(e,t,a){if(e.subtreeFlags&gi)for(e=e.child;e!==null;)zd(e,t,a),e=e.sibling}function zd(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&gi&&e.memoizedState!==null&&q_(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=Dt;Dt=Vn(e.stateNode.containerInfo),Tl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gi,gi=16777216,Tl(e,t,a),gi=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function Ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Ld(l,e)}Ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 0:case 11:case 15:yi(e),e.flags&2048&&ya(9,e,e.return);break;case 3:yi(e);break;case 12:yi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cn(e)):yi(e);break;default:yi(e)}}function Cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ve=l,Ld(l,e)}Ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Cn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Cn(t));break;default:Cn(t)}e=e.sibling}}function Ld(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ti(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else e:for(a=e;Ve!==null;){l=Ve;var i=l.sibling,n=l.return;if(Ad(l),l===a){Ve=null;break e}if(i!==null){i.return=n,Ve=i;break e}Ve=n}}}var t_={getCacheForType:function(e){var t=Ze(Le),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(Le).controller.signal}},a_=typeof WeakMap=="function"?WeakMap:Map,fe=0,we=null,ne=null,re=0,_e=0,_t=null,va=!1,El=!1,Qr=!1,ea=0,Me=0,ba=0,Pa=0,Fr=0,ht=0,Nl=0,vi=null,nt=null,Zr=!1,Dn=0,kd=0,Mn=1/0,On=null,xa=null,Ye=0,Sa=null,Al=null,ta=0,Kr=0,Jr=null,Bd=null,bi=0,Pr=null;function gt(){return(fe&2)!==0&&re!==0?re&-re:D.T!==null?ao():tu()}function qd(){if(ht===0)if((re&536870912)===0||ue){var e=qi;qi<<=1,(qi&3932160)===0&&(qi=262144),ht=e}else ht=536870912;return e=mt.current,e!==null&&(e.flags|=32),ht}function st(e,t,a){(e===we&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(jl(e,0),wa(e,re,ht,!1)),Yl(e,a),((fe&2)===0||e!==we)&&(e===we&&((fe&2)===0&&(Pa|=a),Me===4&&wa(e,re,ht,!1)),kt(e))}function Yd(e,t,a){if((fe&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ql(e,t),i=l?n_(e,t):$r(e,t,!0),n=l;do{if(i===0){El&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!l_(a)){i=$r(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;i=vi;var p=c.current.memoizedState.isDehydrated;if(p&&(jl(c,r).flags|=256),r=$r(c,r,!1),r!==2){if(Qr&&!p){c.errorRecoveryDisabledLanes|=n,Pa|=n,i=4;break e}n=nt,nt=i,n!==null&&(nt===null?nt=n:nt.push.apply(nt,n))}i=r}if(n=!1,i!==2)continue}}if(i===1){jl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,ht,!va);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Dn+300-ot(),10<i)){if(wa(l,t,ht,!va),Gi(l,0,!0)!==0)break e;ta=t,l.timeoutHandle=vf(Gd.bind(null,l,a,nt,On,Zr,t,ht,Pa,Nl,va,n,"Throttled",-0,0),i);break e}Gd(l,a,nt,On,Zr,t,ht,Pa,Nl,va,n,null,-0,0)}}break}while(!0);kt(e)}function Gd(e,t,a,l,i,n,r,c,p,w,C,O,T,N){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},zd(t,n,O);var X=(n&62914560)===n?Dn-ot():(n&4194048)===n?kd-ot():0;if(X=Y_(O,X),X!==null){ta=n,e.cancelPendingCommit=X(Pd.bind(null,e,t,n,a,l,i,r,c,p,C,O,null,T,N)),wa(e,n,r,!w);return}}Pd(e,t,n,a,l,i,r,c,p)}function l_(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!dt(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~Fr,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-ct(i),r=1<<n;l[n]=-1,i&=~r}a!==0&&$o(e,a,t)}function zn(){return(fe&6)===0?(xi(0),!1):!0}function Wr(){if(ne!==null){if(_e===0)var e=ne.return;else e=ne,Xt=Ya=null,mr(e),yl=null,li=0,e=ne;for(;e!==null;)vd(e.alternate,e),e=e.return;ne=null}}function jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,w_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Wr(),we=e,ne=a=Gt(e.current,null),re=t,_e=0,_t=null,va=!1,El=ql(e,t),Qr=!1,Nl=ht=Fr=Pa=ba=Me=0,nt=vi=null,Zr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-ct(l),n=1<<i;t|=e[i],l&=~n}return ea=t,en(),a}function Vd(e,t){te=null,D.H=di,t===gl||t===un?(t=nc(),_e=3):t===tr?(t=nc(),_e=4):_e=t===Rr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,ne===null&&(Me=1,wn(e,St(t,e.current)))}function Xd(){var e=mt.current;return e===null?!0:(re&4194048)===re?Nt===null:(re&62914560)===re||(re&536870912)!==0?e===Nt:!1}function Qd(){var e=D.H;return D.H=di,e===null?di:e}function Fd(){var e=D.A;return D.A=t_,e}function Un(){Me=4,va||(re&4194048)!==re&&mt.current!==null||(El=!0),(ba&134217727)===0&&(Pa&134217727)===0||we===null||wa(we,re,ht,!1)}function $r(e,t,a){var l=fe;fe|=2;var i=Qd(),n=Fd();(we!==e||re!==t)&&(On=null,jl(e,t)),t=!1;var r=Me;e:do try{if(_e!==0&&ne!==null){var c=ne,p=_t;switch(_e){case 8:Wr(),r=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var w=_e;if(_e=0,_t=null,Rl(e,c,p,w),a&&El){r=0;break e}break;default:w=_e,_e=0,_t=null,Rl(e,c,p,w)}}i_(),r=Me;break}catch(C){Vd(e,C)}while(!0);return t&&e.shellSuspendCounter++,Xt=Ya=null,fe=l,D.H=i,D.A=n,ne===null&&(we=null,re=0,en()),r}function i_(){for(;ne!==null;)Zd(ne)}function n_(e,t){var a=fe;fe|=2;var l=Qd(),i=Fd();we!==e||re!==t?(On=null,Mn=ot()+500,jl(e,t)):El=ql(e,t);e:do try{if(_e!==0&&ne!==null){t=ne;var n=_t;t:switch(_e){case 1:_e=0,_t=null,Rl(e,t,n,1);break;case 2:case 9:if(lc(n)){_e=0,_t=null,Kd(t);break}t=function(){_e!==2&&_e!==9||we!==e||(_e=7),kt(e)},n.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:lc(n)?(_e=0,_t=null,Kd(t)):(_e=0,_t=null,Rl(e,t,n,7));break;case 5:var r=null;switch(ne.tag){case 26:r=ne.memoizedState;case 5:case 27:var c=ne;if(r?zf(r):c.stateNode.complete){_e=0,_t=null;var p=c.sibling;if(p!==null)ne=p;else{var w=c.return;w!==null?(ne=w,Hn(w)):ne=null}break t}}_e=0,_t=null,Rl(e,t,n,5);break;case 6:_e=0,_t=null,Rl(e,t,n,6);break;case 8:Wr(),Me=6;break e;default:throw Error(u(462))}}s_();break}catch(C){Vd(e,C)}while(!0);return Xt=Ya=null,D.H=l,D.A=i,fe=a,ne!==null?0:(we=null,re=0,en(),Me)}function s_(){for(;ne!==null&&!Rm();)Zd(ne)}function Zd(e){var t=gd(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Hn(e):ne=t}function Kd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=dd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=dd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:mr(t);default:vd(a,t),t=ne=Fu(t,ea),t=gd(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Hn(e):ne=t}function Rl(e,t,a,l){Xt=Ya=null,mr(t),yl=null,li=0;var i=t.return;try{if(Kp(e,i,t,a,re)){Me=1,wn(e,St(a,e.current)),ne=null;return}}catch(n){if(i!==null)throw ne=i,n;Me=1,wn(e,St(a,e.current)),ne=null;return}t.flags&32768?(ue||l===1?e=!0:El||(re&536870912)!==0?e=!1:(va=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jd(t,e)):Hn(t)}function Hn(e){var t=e;do{if((t.flags&32768)!==0){Jd(t,va);return}e=t.return;var a=Wp(t.alternate,t,ea);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Me===0&&(Me=5)}function Jd(e,t){do{var a=$p(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Me=6,ne=null}function Pd(e,t,a,l,i,n,r,c,p){e.cancelPendingCommit=null;do Ln();while(Ye!==0);if((fe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(n=t.lanes|t.childLanes,n|=qs,Bm(e,a,n,r,c,p),e===we&&(ne=we=null,re=0),Al=t,Sa=e,ta=a,Kr=n,Jr=i,Bd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c_(ki,function(){return tf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,i=L.p,L.p=2,r=fe,fe|=4;try{Ip(e,t,a)}finally{fe=r,L.p=i,D.T=l}}Ye=1,Wd(),$d(),Id()}}function Wd(){if(Ye===1){Ye=0;var e=Sa,t=Al,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var i=fe;fe|=4;try{Dd(t,e);var n=co,r=Lu(e.containerInfo),c=n.focusedElem,p=n.selectionRange;if(r!==c&&c&&c.ownerDocument&&Hu(c.ownerDocument.documentElement,c)){if(p!==null&&Us(c)){var w=p.start,C=p.end;if(C===void 0&&(C=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(C,c.value.length);else{var O=c.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var N=T.getSelection(),X=c.textContent.length,W=Math.min(p.start,X),xe=p.end===void 0?W:Math.min(p.end,X);!N.extend&&W>xe&&(r=xe,xe=W,W=r);var x=Uu(c,W),g=Uu(c,xe);if(x&&g&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==g.node||N.focusOffset!==g.offset)){var S=O.createRange();S.setStart(x.node,x.offset),N.removeAllRanges(),W>xe?(N.addRange(S),N.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),N.addRange(S))}}}}for(O=[],N=c;N=N.parentNode;)N.nodeType===1&&O.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var M=O[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Jn=!!uo,co=uo=null}finally{fe=i,L.p=l,D.T=a}}e.current=t,Ye=2}}function $d(){if(Ye===2){Ye=0;var e=Sa,t=Al,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var i=fe;fe|=4;try{Nd(e,t.alternate,t)}finally{fe=i,L.p=l,D.T=a}}Ye=3}}function Id(){if(Ye===4||Ye===3){Ye=0,Cm();var e=Sa,t=Al,a=ta,l=Bd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Al=Sa=null,ef(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(xa=null),hs(a),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,i=L.p,L.p=2,D.T=null;try{for(var n=e.onRecoverableError,r=0;r<l.length;r++){var c=l[r];n(c.value,{componentStack:c.stack})}}finally{D.T=t,L.p=i}}(ta&3)!==0&&Ln(),kt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Pr?bi++:(bi=0,Pr=e):bi=0,xi(0)}}function ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ti(t)))}function Ln(){return Wd(),$d(),Id(),tf()}function tf(){if(Ye!==5)return!1;var e=Sa,t=Kr;Kr=0;var a=hs(ta),l=D.T,i=L.p;try{L.p=32>a?32:a,D.T=null,a=Jr,Jr=null;var n=Sa,r=ta;if(Ye=0,Al=Sa=null,ta=0,(fe&6)!==0)throw Error(u(331));var c=fe;if(fe|=4,Hd(n.current),Od(n,n.current,r,a),fe=c,xi(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Bl,n)}catch{}return!0}finally{L.p=i,D.T=l,ef(e,t)}}function af(e,t,a){t=St(a,t),t=jr(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(Yl(e,2),kt(e))}function he(e,t,a){if(e.tag===3)af(e,e,a);else for(;t!==null;){if(t.tag===3){af(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))){e=St(a,e),a=ld(2),l=_a(t,a,2),l!==null&&(id(a,l,t,e),Yl(l,2),kt(l));break}}t=t.return}}function Ir(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new a_;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Qr=!0,i.add(a),e=r_.bind(null,e,t,a),t.then(e,e))}function r_(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(re&a)===a&&(Me===4||Me===3&&(re&62914560)===re&&300>ot()-Dn?(fe&2)===0&&jl(e,0):Fr|=a,Nl===re&&(Nl=0)),kt(e)}function lf(e,t){t===0&&(t=Wo()),e=ka(e,t),e!==null&&(Yl(e,t),kt(e))}function o_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),lf(e,a)}function u_(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),lf(e,a)}function c_(e,t){return fs(e,t)}var kn=null,Cl=null,eo=!1,Bn=!1,to=!1,Ta=0;function kt(e){e!==Cl&&e.next===null&&(Cl===null?kn=Cl=e:Cl=Cl.next=e),Bn=!0,eo||(eo=!0,f_())}function xi(e,t){if(!to&&Bn){to=!0;do for(var a=!1,l=kn;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var r=l.suspendedLanes,c=l.pingedLanes;n=(1<<31-ct(42|e)+1)-1,n&=i&~(r&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,of(l,n))}else n=re,n=Gi(l,l===we?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||ql(l,n)||(a=!0,of(l,n));l=l.next}while(a);to=!1}}function d_(){nf()}function nf(){Bn=eo=!1;var e=0;Ta!==0&&S_()&&(e=Ta);for(var t=ot(),a=null,l=kn;l!==null;){var i=l.next,n=sf(l,t);n===0?(l.next=null,a===null?kn=i:a.next=i,i===null&&(Cl=a)):(a=l,(e!==0||(n&3)!==0)&&(Bn=!0)),l=i}Ye!==0&&Ye!==5||xi(e),Ta!==0&&(Ta=0)}function sf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var r=31-ct(n),c=1<<r,p=i[r];p===-1?((c&a)===0||(c&l)!==0)&&(i[r]=km(c,t)):p<=t&&(e.expiredLanes|=c),n&=~c}if(t=we,a=re,a=Gi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ms(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ms(l),hs(a)){case 2:case 8:a=Jo;break;case 32:a=ki;break;case 268435456:a=Po;break;default:a=ki}return l=rf.bind(null,e),a=fs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ms(l),e.callbackPriority=2,e.callbackNode=null,2}function rf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ln()&&e.callbackNode!==a)return null;var l=re;return l=Gi(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Yd(e,l,t),sf(e,ot()),e.callbackNode!=null&&e.callbackNode===a?rf.bind(null,e):null)}function of(e,t){if(Ln())return null;Yd(e,t,!0)}function f_(){T_(function(){(fe&6)!==0?fs(Ko,d_):nf()})}function ao(){if(Ta===0){var e=_l;e===0&&(e=Bi,Bi<<=1,(Bi&261888)===0&&(Bi=256)),Ta=e}return Ta}function uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function cf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m_(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var n=uf((i[et]||null).action),r=l.submitter;r&&(t=(t=r[et]||null)?uf(t.formAction):r.getAttribute("formAction"),t!==null&&(n=t,r=null));var c=new Pi("action","action",null,l,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ta!==0){var p=r?cf(i,r):new FormData(i);Sr(a,{pending:!0,data:p,method:i.method,action:n},null,p)}}else typeof n=="function"&&(c.preventDefault(),p=r?cf(i,r):new FormData(i),Sr(a,{pending:!0,data:p,method:i.method,action:n},n,p))},currentTarget:i}]})}}for(var lo=0;lo<Bs.length;lo++){var io=Bs[lo],p_=io.toLowerCase(),__=io[0].toUpperCase()+io.slice(1);Ct(p_,"on"+__)}Ct(qu,"onAnimationEnd"),Ct(Yu,"onAnimationIteration"),Ct(Gu,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Dp,"onTransitionRun"),Ct(Mp,"onTransitionStart"),Ct(Op,"onTransitionCancel"),Ct(Vu,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Si));function df(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var r=l.length-1;0<=r;r--){var c=l[r],p=c.instance,w=c.currentTarget;if(c=c.listener,p!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=w;try{n(i)}catch(C){Ii(C)}i.currentTarget=null,n=p}else for(r=0;r<l.length;r++){if(c=l[r],p=c.instance,w=c.currentTarget,c=c.listener,p!==n&&i.isPropagationStopped())break e;n=c,i.currentTarget=w;try{n(i)}catch(C){Ii(C)}i.currentTarget=null,n=p}}}}function se(e,t){var a=t[gs];a===void 0&&(a=t[gs]=new Set);var l=e+"__bubble";a.has(l)||(ff(t,e,2,!1),a.add(l))}function no(e,t,a){var l=0;t&&(l|=4),ff(a,e,l,t)}var qn="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[qn]){e[qn]=!0,iu.forEach(function(a){a!=="selectionchange"&&(h_.has(a)||no(a,!1,e),no(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qn]||(t[qn]=!0,no("selectionchange",!1,t))}}function ff(e,t,a,l){switch(Yf(t)){case 2:var i=X_;break;case 8:i=Q_;break;default:i=So}a=i.bind(null,t,a,e),i=void 0,!Ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ro(e,t,a,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===i)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;c!==null;){if(r=$a(c),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=n=r;continue e}c=c.parentNode}}l=l.return}hu(function(){var w=n,C=Ts(a),O=[];e:{var T=Xu.get(e);if(T!==void 0){var N=Pi,X=e;switch(e){case"keypress":if(Ki(a)===0)break e;case"keydown":case"keyup":N=up;break;case"focusin":X="focus",N=Cs;break;case"focusout":X="blur",N=Cs;break;case"beforeblur":case"afterblur":N=Cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=fp;break;case qu:case Yu:case Gu:N=ep;break;case Vu:N=pp;break;case"scroll":case"scrollend":N=Jm;break;case"wheel":N=hp;break;case"copy":case"cut":case"paste":N=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xu;break;case"toggle":case"beforetoggle":N=yp}var W=(t&4)!==0,xe=!W&&(e==="scroll"||e==="scrollend"),x=W?T!==null?T+"Capture":null:T;W=[];for(var g=w,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||x===null||(M=Xl(g,x),M!=null&&W.push(wi(g,M,S))),xe)break;g=g.return}0<W.length&&(T=new N(T,X,null,a,C),O.push({event:T,listeners:W}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",T&&a!==ws&&(X=a.relatedTarget||a.fromElement)&&($a(X)||X[Wa]))break e;if((N||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,N?(X=a.relatedTarget||a.toElement,N=w,X=X?$a(X):null,X!==null&&(xe=h(X),W=X.tag,X!==xe||W!==5&&W!==27&&W!==6)&&(X=null)):(N=null,X=w),N!==X)){if(W=vu,M="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=xu,M="onPointerLeave",x="onPointerEnter",g="pointer"),xe=N==null?T:Vl(N),S=X==null?T:Vl(X),T=new W(M,g+"leave",N,a,C),T.target=xe,T.relatedTarget=S,M=null,$a(C)===w&&(W=new W(x,g+"enter",X,a,C),W.target=S,W.relatedTarget=xe,M=W),xe=M,N&&X)t:{for(W=g_,x=N,g=X,S=0,M=x;M;M=W(M))S++;M=0;for(var J=g;J;J=W(J))M++;for(;0<S-M;)x=W(x),S--;for(;0<M-S;)g=W(g),M--;for(;S--;){if(x===g||g!==null&&x===g.alternate){W=x;break t}x=W(x),g=W(g)}W=null}else W=null;N!==null&&mf(O,T,N,W,!1),X!==null&&xe!==null&&mf(O,xe,X,W,!0)}}e:{if(T=w?Vl(w):window,N=T.nodeName&&T.nodeName.toLowerCase(),N==="select"||N==="input"&&T.type==="file")var ce=Ru;else if(Au(T))if(Cu)ce=jp;else{ce=Np;var Z=Ep}else N=T.nodeName,!N||N.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Ss(w.elementType)&&(ce=Ru):ce=Ap;if(ce&&(ce=ce(e,w))){ju(O,ce,a,C);break e}Z&&Z(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&xs(T,"number",T.value)}switch(Z=w?Vl(w):window,e){case"focusin":(Au(Z)||Z.contentEditable==="true")&&(rl=Z,Hs=w,$l=null);break;case"focusout":$l=Hs=rl=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,ku(O,a,C);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":ku(O,a,C)}var ae;if(Ms)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else sl?Eu(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Su&&a.locale!=="ko"&&(sl||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&sl&&(ae=gu()):(oa=C,As="value"in oa?oa.value:oa.textContent,sl=!0)),Z=Yn(w,oe),0<Z.length&&(oe=new bu(oe,e,null,a,C),O.push({event:oe,listeners:Z}),ae?oe.data=ae:(ae=Nu(a),ae!==null&&(oe.data=ae)))),(ae=bp?xp(e,a):Sp(e,a))&&(oe=Yn(w,"onBeforeInput"),0<oe.length&&(Z=new bu("onBeforeInput","beforeinput",null,a,C),O.push({event:Z,listeners:oe}),Z.data=ae)),m_(O,e,w,a,C)}df(O,t)})}function wi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yn(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Xl(e,a),i!=null&&l.unshift(wi(e,i,n)),i=Xl(e,t),i!=null&&l.push(wi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function g_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mf(e,t,a,l,i){for(var n=t._reactName,r=[];a!==null&&a!==l;){var c=a,p=c.alternate,w=c.stateNode;if(c=c.tag,p!==null&&p===l)break;c!==5&&c!==26&&c!==27||w===null||(p=w,i?(w=Xl(a,n),w!=null&&r.unshift(wi(a,w,p))):i||(w=Xl(a,n),w!=null&&r.push(wi(a,w,p)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var y_=/\r\n?/g,v_=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(y_,`
`).replace(v_,"")}function _f(e,t){return t=pf(t),pf(e)===t}function be(e,t,a,l,i,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ll(e,""+l);break;case"className":Xi(e,"class",l);break;case"tabIndex":Xi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xi(e,a,l);break;case"style":pu(e,l,n);break;case"data":if(t!=="object"){Xi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",i.name,i,null),be(e,t,"formEncType",i.formEncType,i,null),be(e,t,"formMethod",i.formMethod,i,null),be(e,t,"formTarget",i.formTarget,i,null)):(be(e,t,"encType",i.encType,i,null),be(e,t,"method",i.method,i,null),be(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Vi(e,"popover",l);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zm.get(a)||a,Vi(e,a,l))}}function oo(e,t,a,l,i,n){switch(a){case"style":pu(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[et]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Vi(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var r=a[n];if(r!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:be(e,t,n,r,a,null)}}i&&be(e,t,"srcSet",a.srcSet,a,null),l&&be(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var c=n=r=i=null,p=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":i=C;break;case"type":r=C;break;case"checked":p=C;break;case"defaultChecked":w=C;break;case"value":n=C;break;case"defaultValue":c=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:be(e,t,l,C,a,null)}}cu(e,n,c,p,w,r,i,!1);return;case"select":se("invalid",e),l=r=n=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:be(e,t,i,c,a,null)}t=n,a=r,e.multiple=!!l,t!=null?al(e,!!l,t,!1):a!=null&&al(e,!!l,a,!0);return;case"textarea":se("invalid",e),n=i=l=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:be(e,t,r,c,a,null)}fu(e,l,i,n);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":be(e,t,p,l,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Si.length;l++)se(Si[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:be(e,t,w,l,a,null)}return;default:if(Ss(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&oo(e,t,C,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&be(e,t,c,l,a,null))}function b_(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,r=null,c=null,p=null,w=null,C=null;for(N in a){var O=a[N];if(a.hasOwnProperty(N)&&O!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":p=O;default:l.hasOwnProperty(N)||be(e,t,N,null,l,O)}}for(var T in l){var N=l[T];if(O=a[T],l.hasOwnProperty(T)&&(N!=null||O!=null))switch(T){case"type":n=N;break;case"name":i=N;break;case"checked":w=N;break;case"defaultChecked":C=N;break;case"value":r=N;break;case"defaultValue":c=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==O&&be(e,t,T,N,l,O)}}bs(e,r,c,p,w,C,n,i);return;case"select":N=r=c=T=null;for(n in a)if(p=a[n],a.hasOwnProperty(n)&&p!=null)switch(n){case"value":break;case"multiple":N=p;default:l.hasOwnProperty(n)||be(e,t,n,null,l,p)}for(i in l)if(n=l[i],p=a[i],l.hasOwnProperty(i)&&(n!=null||p!=null))switch(i){case"value":T=n;break;case"defaultValue":c=n;break;case"multiple":r=n;default:n!==p&&be(e,t,i,n,l,p)}t=c,a=r,l=N,T!=null?al(e,!!a,T,!1):!!l!=!!a&&(t!=null?al(e,!!a,t,!0):al(e,!!a,a?[]:"",!1));return;case"textarea":N=T=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,l,i)}for(r in l)if(i=l[r],n=a[r],l.hasOwnProperty(r)&&(i!=null||n!=null))switch(r){case"value":T=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==n&&be(e,t,r,i,l,n)}du(e,T,N);return;case"option":for(var X in a)T=a[X],a.hasOwnProperty(X)&&T!=null&&!l.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:be(e,t,X,null,l,T));for(p in l)T=l[p],N=a[p],l.hasOwnProperty(p)&&T!==N&&(T!=null||N!=null)&&(p==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":be(e,t,p,T,l,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)T=a[W],a.hasOwnProperty(W)&&T!=null&&!l.hasOwnProperty(W)&&be(e,t,W,null,l,T);for(w in l)if(T=l[w],N=a[w],l.hasOwnProperty(w)&&T!==N&&(T!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:be(e,t,w,T,l,N)}return;default:if(Ss(t)){for(var xe in a)T=a[xe],a.hasOwnProperty(xe)&&T!==void 0&&!l.hasOwnProperty(xe)&&oo(e,t,xe,void 0,l,T);for(C in l)T=l[C],N=a[C],!l.hasOwnProperty(C)||T===N||T===void 0&&N===void 0||oo(e,t,C,T,l,N);return}}for(var x in a)T=a[x],a.hasOwnProperty(x)&&T!=null&&!l.hasOwnProperty(x)&&be(e,t,x,null,l,T);for(O in l)T=l[O],N=a[O],!l.hasOwnProperty(O)||T===N||T==null&&N==null||be(e,t,O,T,l,N)}function hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,r=i.initiatorType,c=i.duration;if(n&&c&&hf(r)){for(r=0,c=i.responseEnd,l+=1;l<a.length;l++){var p=a[l],w=p.startTime;if(w>c)break;var C=p.transferSize,O=p.initiatorType;C&&hf(O)&&(p=p.responseEnd,r+=C*(p<c?1:(c-w)/(p-w)))}if(--l,t+=8*(n+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uo=null,co=null;function Gn(e){return e.nodeType===9?e:e.ownerDocument}function gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mo=null;function S_(){var e=window.event;return e&&e.type==="popstate"?e===mo?!1:(mo=e,!0):(mo=null,!1)}var vf=typeof setTimeout=="function"?setTimeout:void 0,w_=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(e){return bf.resolve(null).then(e).catch(E_)}:vf;function E_(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function xf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),zl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ti(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ti(a);for(var n=a.firstChild;n;){var r=n.nextSibling,c=n.nodeName;n[Gl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=r}}else a==="body"&&Ti(e.ownerDocument.body);a=i}while(a);zl(t)}function Sf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function po(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":po(a),ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function N_(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function A_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function _o(e){return e.data==="$?"||e.data==="$~"}function ho(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j_(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var go=null;function Tf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return At(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nf(e,t,a){switch(t=Gn(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ti(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ys(e)}var jt=new Map,Af=new Set;function Vn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=L.d;L.d={f:R_,r:C_,D:D_,C:M_,L:O_,m:z_,X:H_,S:U_,M:L_};function R_(){var e=aa.f(),t=zn();return e||t}function C_(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?Vc(t):aa.r(e)}var Dl=typeof document>"u"?null:document;function jf(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Af.has(i)||(Af.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function D_(e){aa.D(e),jf("dns-prefetch",e,null)}function M_(e,t){aa.C(e,t),jf("preconnect",e,t)}function O_(e,t,a){aa.L(e,t,a);var l=Dl;if(l&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+bt(a.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var n=i;switch(t){case"style":n=Ml(e);break;case"script":n=Ol(e)}jt.has(n)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),jt.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Ei(n))||t==="script"&&l.querySelector(Ni(n))||(t=l.createElement("link"),Je(t,"link",e),Ge(t),l.head.appendChild(t)))}}function z_(e,t){aa.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ol(e)}if(!jt.has(n)&&(e=E({rel:"modulepreload",href:e},t),jt.set(n,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ni(n)))return}l=a.createElement("link"),Je(l,"link",e),Ge(l),a.head.appendChild(l)}}}function U_(e,t,a){aa.S(e,t,a);var l=Dl;if(l&&e){var i=el(l).hoistableStyles,n=Ml(e);t=t||"default";var r=i.get(n);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(Ei(n)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=jt.get(n))&&yo(e,a);var p=r=l.createElement("link");Ge(p),Je(p,"link",e),p._p=new Promise(function(w,C){p.onload=w,p.onerror=C}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Xn(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:c},i.set(n,r)}}}function H_(e,t){aa.X(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,i=Ol(e),n=l.get(i);n||(n=a.querySelector(Ni(i)),n||(e=E({src:e,async:!0},t),(t=jt.get(i))&&vo(e,t),n=a.createElement("script"),Ge(n),Je(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function L_(e,t){aa.M(e,t);var a=Dl;if(a&&e){var l=el(a).hoistableScripts,i=Ol(e),n=l.get(i);n||(n=a.querySelector(Ni(i)),n||(e=E({src:e,async:!0,type:"module"},t),(t=jt.get(i))&&vo(e,t),n=a.createElement("script"),Ge(n),Je(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Rf(e,t,a,l){var i=(i=ie.current)?Vn(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ml(a.href),a=el(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var n=el(i).hoistableStyles,r=n.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,r),(n=i.querySelector(Ei(e)))&&!n._p&&(r.instance=n,r.state.loading=5),jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jt.set(e,a),n||k_(i,e,a,r.state))),t&&l===null)throw Error(u(528,""));return r}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(a),a=el(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ml(e){return'href="'+bt(e)+'"'}function Ei(e){return'link[rel="stylesheet"]['+e+"]"}function Cf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function k_(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),Ge(t),e.head.appendChild(t))}function Ol(e){return'[src="'+bt(e)+'"]'}function Ni(e){return"script[async]"+e}function Df(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Je(l,"style",i),Xn(l,a.precedence,e),t.instance=l;case"stylesheet":i=Ml(a.href);var n=e.querySelector(Ei(i));if(n)return t.state.loading|=4,t.instance=n,Ge(n),n;l=Cf(a),(i=jt.get(i))&&yo(l,i),n=(e.ownerDocument||e).createElement("link"),Ge(n);var r=n;return r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),Je(n,"link",l),t.state.loading|=4,Xn(n,a.precedence,e),t.instance=n;case"script":return n=Ol(a.src),(i=e.querySelector(Ni(n)))?(t.instance=i,Ge(i),i):(l=a,(i=jt.get(n))&&(l=E({},a),vo(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ge(i),Je(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Xn(l,a.precedence,e));return t.instance}function Xn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===t)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function yo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qn=null;function Mf(e,t,a){if(Qn===null){var l=new Map,i=Qn=new Map;i.set(a,l)}else i=Qn,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[Gl]||n[Qe]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var r=n.getAttribute(t)||"";r=e+r;var c=l.get(r);c?c.push(n):l.set(r,[n])}}return l}function Of(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function B_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q_(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ml(l.href),n=t.querySelector(Ei(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fn.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,Ge(n);return}n=t.ownerDocument||t,l=Cf(l),(i=jt.get(i))&&yo(l,i),n=n.createElement("link"),Ge(n);var r=n;r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),Je(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Fn.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var bo=0;function Y_(e,t){return e.stylesheets&&e.count===0&&Kn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Kn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&bo===0&&(bo=62500*x_());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>bo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Fn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zn=null;function Kn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zn=new Map,t.forEach(G_,e),Zn=null,Fn.call(e))}function G_(e,t){if(!(t.state.loading&4)){var a=Zn.get(e);if(a)var l=a.get(null);else{a=new Map,Zn.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var r=i[n];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}i=t.instance,r=i.getAttribute("data-precedence"),n=a.get(r)||l,n===l&&a.set(null,i),a.set(r,i),this.count++,l=Fn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ai={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function V_(e,t,a,l,i,n,r,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.hiddenUpdates=ps(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Uf(e,t,a,l,i,n,r,c,p,w,C,O){return e=new V_(e,t,a,r,p,w,C,O,c),t=1,n===!0&&(t|=24),n=ft(3,null,null,t),e.current=n,n.stateNode=e,t=$s(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},ar(n),e}function Hf(e){return e?(e=cl,e):cl}function Lf(e,t,a,l,i,n){i=Hf(i),l.context===null?l.context=i:l.pendingContext=i,l=pa(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=_a(e,l,t),a!==null&&(st(a,e,t),ni(a,e,t))}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function xo(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function Bf(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&st(t,e,67108864),xo(e,67108864)}}function qf(e){if(e.tag===13||e.tag===31){var t=gt();t=_s(t);var a=ka(e,t);a!==null&&st(a,e,t),xo(e,t)}}var Jn=!0;function X_(e,t,a,l){var i=D.T;D.T=null;var n=L.p;try{L.p=2,So(e,t,a,l)}finally{L.p=n,D.T=i}}function Q_(e,t,a,l){var i=D.T;D.T=null;var n=L.p;try{L.p=8,So(e,t,a,l)}finally{L.p=n,D.T=i}}function So(e,t,a,l){if(Jn){var i=wo(l);if(i===null)ro(e,t,l,Pn,a),Gf(e,l);else if(Z_(i,e,t,a,l))l.stopPropagation();else if(Gf(e,l),t&4&&-1<F_.indexOf(e)){for(;i!==null;){var n=Ia(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var r=Oa(n.pendingLanes);if(r!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var p=1<<31-ct(r);c.entanglements[1]|=p,r&=~p}kt(n),(fe&6)===0&&(Mn=ot()+500,xi(0))}}break;case 31:case 13:c=ka(n,2),c!==null&&st(c,n,2),zn(),xo(n,2)}if(n=wo(l),n===null&&ro(e,t,l,Pn,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else ro(e,t,l,null,a)}}function wo(e){return e=Ts(e),To(e)}var Pn=null;function To(e){if(Pn=null,e=$a(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pn=e,null}function Yf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dm()){case Ko:return 2;case Jo:return 8;case ki:case Mm:return 32;case Po:return 268435456;default:return 32}default:return 32}}var Eo=!1,Na=null,Aa=null,ja=null,ji=new Map,Ri=new Map,Ra=[],F_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gf(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function Ci(e,t,a,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Ia(t),t!==null&&Bf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z_(e,t,a,l,i){switch(t){case"focusin":return Na=Ci(Na,e,t,a,l,i),!0;case"dragenter":return Aa=Ci(Aa,e,t,a,l,i),!0;case"mouseover":return ja=Ci(ja,e,t,a,l,i),!0;case"pointerover":var n=i.pointerId;return ji.set(n,Ci(ji.get(n)||null,e,t,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ri.set(n,Ci(Ri.get(n)||null,e,t,a,l,i)),!0}return!1}function Vf(e){var t=$a(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,au(e.priority,function(){qf(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,au(e.priority,function(){qf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ws=l,a.target.dispatchEvent(l),ws=null}else return t=Ia(a),t!==null&&Bf(t),e.blockedOn=a,!1;t.shift()}return!0}function Xf(e,t,a){Wn(e)&&a.delete(t)}function K_(){Eo=!1,Na!==null&&Wn(Na)&&(Na=null),Aa!==null&&Wn(Aa)&&(Aa=null),ja!==null&&Wn(ja)&&(ja=null),ji.forEach(Xf),Ri.forEach(Xf)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,K_)))}var In=null;function Qf(e){In!==e&&(In=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){In===e&&(In=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(To(l||a)===null)continue;break}var n=Ia(a);n!==null&&(e.splice(t,3),t-=3,Sr(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function zl(e){function t(p){return $n(p,e)}Na!==null&&$n(Na,e),Aa!==null&&$n(Aa,e),ja!==null&&$n(ja,e),ji.forEach(t),Ri.forEach(t);for(var a=0;a<Ra.length;a++){var l=Ra[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Vf(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],r=i[et]||null;if(typeof n=="function")r||Qf(a);else if(r){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,r=n[et]||null)c=r.formAction;else if(To(i)!==null)continue}else c=r.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Qf(a)}}}function Ff(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function No(e){this._internalRoot=e}es.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=gt();Lf(a,l,e,t,null,null)},es.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lf(e.current,2,null,e,null,null),zn(),t[Wa]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=tu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ra.length&&t!==0&&t<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Vf(e)}};var Zf=d.version;if(Zf!=="19.2.3")throw Error(u(527,Zf,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=_(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var J_={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Bl=ts.inject(J_),ut=ts}catch{}}return Mi.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",i=Ic,n=ed,r=td;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Uf(e,1,!1,null,null,a,l,null,i,n,r,Ff),e[Wa]=t.current,so(e),new No(t)},Mi.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,i="",n=Ic,r=ed,c=td,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Uf(e,1,!0,t,a??null,l,i,p,n,r,c,Ff),t.context=Hf(null),a=t.current,l=gt(),l=_s(l),i=pa(l),i.callback=null,_a(a,i,l),a=l,t.current.lanes=a,Yl(t,a),kt(t),e[Wa]=t.current,so(e),new es(t)},Mi.version="19.2.3",Mi}var lm;function nh(){if(lm)return Ro.exports;lm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ro.exports=ih(),Ro.exports}var sh=nh();var im="popstate";function rh(o={}){function d(u,m){let{pathname:h,search:b,hash:j}=u.location;return Ho("",{pathname:h,search:b,hash:j},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:zi(m)}return uh(d,f,null,o)}function Re(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Ot(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function oh(){return Math.random().toString(36).substring(2,10)}function nm(o,d){return{usr:o.state,key:o.key,idx:d}}function Ho(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Ul(d):d,state:f,key:d&&d.key||u||oh()}}function zi({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Ul(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function uh(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:h=!1}=u,b=m.history,j="POP",v=null,_=R();_==null&&(_=0,b.replaceState({...b.state,idx:_},""));function R(){return(b.state||{idx:null}).idx}function E(){j="POP";let G=R(),K=G==null?null:G-_;_=G,v&&v({action:j,location:q.location,delta:K})}function U(G,K){j="PUSH";let H=Ho(q.location,G,K);_=R()+1;let P=nm(H,_),ge=q.createHref(H);try{b.pushState(P,"",ge)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;m.location.assign(ge)}h&&v&&v({action:j,location:q.location,delta:1})}function Q(G,K){j="REPLACE";let H=Ho(q.location,G,K);_=R();let P=nm(H,_),ge=q.createHref(H);b.replaceState(P,"",ge),h&&v&&v({action:j,location:q.location,delta:0})}function k(G){return ch(G)}let q={get action(){return j},get location(){return o(m,b)},listen(G){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener(im,E),v=G,()=>{m.removeEventListener(im,E),v=null}},createHref(G){return d(m,G)},createURL:k,encodeLocation(G){let K=k(G);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:U,replace:Q,go(G){return b.go(G)}};return q}function ch(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Re(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:zi(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function cm(o,d,f="/"){return dh(o,d,f,!1)}function dh(o,d,f,u){let m=typeof d=="string"?Ul(d):d,h=na(m.pathname||"/",f);if(h==null)return null;let b=dm(o);fh(b);let j=null;for(let v=0;j==null&&v<b.length;++v){let _=wh(h);j=xh(b[v],_,u)}return j}function dm(o,d=[],f=[],u="",m=!1){let h=(b,j,v=m,_)=>{let R={relativePath:_===void 0?b.path||"":_,caseSensitive:b.caseSensitive===!0,childrenIndex:j,route:b};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(u)&&v)return;Re(R.relativePath.startsWith(u),`Absolute route path "${R.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(u.length)}let E=ia([u,R.relativePath]),U=f.concat(R);b.children&&b.children.length>0&&(Re(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),dm(b.children,d,U,E,v)),!(b.path==null&&!b.index)&&d.push({path:E,score:vh(E,b.index),routesMeta:U})};return o.forEach((b,j)=>{if(b.path===""||!b.path?.includes("?"))h(b,j);else for(let v of fm(b.path))h(b,j,!0,v)}),d}function fm(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(u.length===0)return m?[h,""]:[h];let b=fm(u.join("/")),j=[];return j.push(...b.map(v=>v===""?h:[h,v].join("/"))),m&&j.push(...b),j.map(v=>o.startsWith("/")&&v===""?"/":v)}function fh(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:bh(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var mh=/^:[\w-]+$/,ph=3,_h=2,hh=1,gh=10,yh=-2,sm=o=>o==="*";function vh(o,d){let f=o.split("/"),u=f.length;return f.some(sm)&&(u+=yh),d&&(u+=_h),f.filter(m=>!sm(m)).reduce((m,h)=>m+(mh.test(h)?ph:h===""?hh:gh),u)}function bh(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function xh(o,d,f=!1){let{routesMeta:u}=o,m={},h="/",b=[];for(let j=0;j<u.length;++j){let v=u[j],_=j===u.length-1,R=h==="/"?d:d.slice(h.length)||"/",E=ns({path:v.relativePath,caseSensitive:v.caseSensitive,end:_},R),U=v.route;if(!E&&_&&f&&!u[u.length-1].route.index&&(E=ns({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},R)),!E)return null;Object.assign(m,E.params),b.push({params:m,pathname:ia([h,E.pathname]),pathnameBase:Ah(ia([h,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(h=ia([h,E.pathnameBase]))}return b}function ns(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=Sh(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let h=m[0],b=h.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:u.reduce((_,{paramName:R,isOptional:E},U)=>{if(R==="*"){let k=j[U]||"";b=h.slice(0,h.length-k.length).replace(/(.)\/+$/,"$1")}const Q=j[U];return E&&!Q?_[R]=void 0:_[R]=(Q||"").replace(/%2F/g,"/"),_},{}),pathname:h,pathnameBase:b,pattern:o}}function Sh(o,d=!1,f=!0){Ot(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,v)=>(u.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function wh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Ot(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function na(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}var Th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Eh(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Ul(o):o,h;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?h=rm(f.substring(1),"/"):h=rm(f,d)):h=d,{pathname:h,search:jh(u),hash:Rh(m)}}function rm(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Oo(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nh(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Bo(o){let d=Nh(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function qo(o,d,f,u=!1){let m;typeof o=="string"?m=Ul(o):(m={...o},Re(!m.pathname||!m.pathname.includes("?"),Oo("?","pathname","search",m)),Re(!m.pathname||!m.pathname.includes("#"),Oo("#","pathname","hash",m)),Re(!m.search||!m.search.includes("#"),Oo("#","search","hash",m)));let h=o===""||m.pathname==="",b=h?"/":m.pathname,j;if(b==null)j=f;else{let E=d.length-1;if(!u&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),E-=1;m.pathname=U.join("/")}j=E>=0?d[E]:"/"}let v=Eh(m,j),_=b&&b!=="/"&&b.endsWith("/"),R=(h||b===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(_||R)&&(v.pathname+="/"),v}var ia=o=>o.join("/").replace(/\/\/+/g,"/"),Ah=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),jh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Rh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Ch=class{constructor(o,d,f,u=!1){this.status=o,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Dh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Mh(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pm(o,d){let f=o;if(typeof f!="string"||!Th.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(mm)try{let h=new URL(window.location.href),b=f.startsWith("//")?new URL(h.protocol+f):new URL(f),j=na(b.pathname,d);b.origin===h.origin&&j!=null?f=j+b.search+b.hash:m=!0}catch{Ot(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _m=["POST","PUT","PATCH","DELETE"];new Set(_m);var Oh=["GET",..._m];new Set(Oh);var Hl=A.createContext(null);Hl.displayName="DataRouter";var ss=A.createContext(null);ss.displayName="DataRouterState";var zh=A.createContext(!1),hm=A.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var Uh=A.createContext(new Map);Uh.displayName="Fetchers";var Hh=A.createContext(null);Hh.displayName="Await";var yt=A.createContext(null);yt.displayName="Navigation";var Ui=A.createContext(null);Ui.displayName="Location";var zt=A.createContext({outlet:null,matches:[],isDataRoute:!1});zt.displayName="Route";var Yo=A.createContext(null);Yo.displayName="RouteError";var gm="REACT_ROUTER_ERROR",Lh="REDIRECT",kh="ROUTE_ERROR_RESPONSE";function Bh(o){if(o.startsWith(`${gm}:${Lh}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function qh(o){if(o.startsWith(`${gm}:${kh}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Ch(d.status,d.statusText,d.data)}catch{}}function Yh(o,{relative:d}={}){Re(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=A.useContext(yt),{hash:m,pathname:h,search:b}=Hi(o,{relative:d}),j=h;return f!=="/"&&(j=h==="/"?f:ia([f,h])),u.createHref({pathname:j,search:b,hash:m})}function Ll(){return A.useContext(Ui)!=null}function Da(){return Re(Ll(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ui).location}var ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(o){A.useContext(yt).static||A.useLayoutEffect(o)}function bm(){let{isDataRoute:o}=A.useContext(zt);return o?tg():Gh()}function Gh(){Re(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let o=A.useContext(Hl),{basename:d,navigator:f}=A.useContext(yt),{matches:u}=A.useContext(zt),{pathname:m}=Da(),h=JSON.stringify(Bo(u)),b=A.useRef(!1);return vm(()=>{b.current=!0}),A.useCallback((v,_={})=>{if(Ot(b.current,ym),!b.current)return;if(typeof v=="number"){f.go(v);return}let R=qo(v,JSON.parse(h),m,_.relative==="path");o==null&&d!=="/"&&(R.pathname=R.pathname==="/"?d:ia([d,R.pathname])),(_.replace?f.replace:f.push)(R,_.state,_)},[d,f,h,m,o])}A.createContext(null);function Vh(){let{matches:o}=A.useContext(zt),d=o[o.length-1];return d?d.params:{}}function Hi(o,{relative:d}={}){let{matches:f}=A.useContext(zt),{pathname:u}=Da(),m=JSON.stringify(Bo(f));return A.useMemo(()=>qo(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Xh(o,d){return xm(o,d)}function xm(o,d,f,u,m){Re(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(yt),{matches:b}=A.useContext(zt),j=b[b.length-1],v=j?j.params:{},_=j?j.pathname:"/",R=j?j.pathnameBase:"/",E=j&&j.route;{let H=E&&E.path||"";wm(_,!E||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let U=Da(),Q;if(d){let H=typeof d=="string"?Ul(d):d;Re(R==="/"||H.pathname?.startsWith(R),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${H.pathname}" was given in the \`location\` prop.`),Q=H}else Q=U;let k=Q.pathname||"/",q=k;if(R!=="/"){let H=R.replace(/^\//,"").split("/");q="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=cm(o,{pathname:q});Ot(E||G!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Ot(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Jh(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:ia([R,h.encodeLocation?h.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?R:ia([R,h.encodeLocation?h.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),b,f,u,m);return d&&K?A.createElement(Ui.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},K):K}function Qh(){let o=eg(),d=Dh(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",o),b=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},d),f?A.createElement("pre",{style:m},f):null,b)}var Fh=A.createElement(Qh,null),Sm=class extends A.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=qh(o.digest);f&&(o=f)}let d=o!==void 0?A.createElement(zt.Provider,{value:this.props.routeContext},A.createElement(Yo.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?A.createElement(Zh,{error:o},d):d}};Sm.contextType=zh;var zo=new WeakMap;function Zh({children:o,error:d}){let{basename:f}=A.useContext(yt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Bh(d.digest);if(u){let m=zo.get(d);if(m)throw m;let h=pm(u.location,f);if(mm&&!zo.get(d))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw zo.set(d,b),b}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return o}function Kh({routeContext:o,match:d,children:f}){let u=A.useContext(Hl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),A.createElement(zt.Provider,{value:o},f)}function Jh(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let h=o,b=f?.errors;if(b!=null){let R=h.findIndex(E=>E.route.id&&b?.[E.route.id]!==void 0);Re(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),h=h.slice(0,Math.min(h.length,R+1))}let j=!1,v=-1;if(f)for(let R=0;R<h.length;R++){let E=h[R];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(v=R),E.route.id){let{loaderData:U,errors:Q}=f,k=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!Q||Q[E.route.id]===void 0);if(E.route.lazy||k){j=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let _=f&&u?(R,E)=>{u(R,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Mh(f.matches),errorInfo:E})}:void 0;return h.reduceRight((R,E,U)=>{let Q,k=!1,q=null,G=null;f&&(Q=b&&E.route.id?b[E.route.id]:void 0,q=E.route.errorElement||Fh,j&&(v<0&&U===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,G=null):v===U&&(k=!0,G=E.route.hydrateFallbackElement||null)));let K=d.concat(h.slice(0,U+1)),H=()=>{let P;return Q?P=q:k?P=G:E.route.Component?P=A.createElement(E.route.Component,null):E.route.element?P=E.route.element:P=R,A.createElement(Kh,{match:E,routeContext:{outlet:R,matches:K,isDataRoute:f!=null},children:P})};return f&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?A.createElement(Sm,{location:f.location,revalidation:f.revalidation,component:q,error:Q,children:H(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:_}):H()},null)}function Go(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ph(o){let d=A.useContext(Hl);return Re(d,Go(o)),d}function Wh(o){let d=A.useContext(ss);return Re(d,Go(o)),d}function $h(o){let d=A.useContext(zt);return Re(d,Go(o)),d}function Vo(o){let d=$h(o),f=d.matches[d.matches.length-1];return Re(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Ih(){return Vo("useRouteId")}function eg(){let o=A.useContext(Yo),d=Wh("useRouteError"),f=Vo("useRouteError");return o!==void 0?o:d.errors?.[f]}function tg(){let{router:o}=Ph("useNavigate"),d=Vo("useNavigate"),f=A.useRef(!1);return vm(()=>{f.current=!0}),A.useCallback(async(m,h={})=>{Ot(f.current,ym),f.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:d,...h}))},[o,d])}var om={};function wm(o,d,f){!d&&!om[o]&&(om[o]=!0,Ot(!1,f))}A.memo(ag);function ag({routes:o,future:d,state:f,onError:u}){return xm(o,void 0,f,u,d)}function lg({to:o,replace:d,state:f,relative:u}){Re(Ll(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=A.useContext(yt);Ot(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=A.useContext(zt),{pathname:b}=Da(),j=bm(),v=qo(o,Bo(h),b,u==="path"),_=JSON.stringify(v);return A.useEffect(()=>{j(JSON.parse(_),{replace:d,state:f,relative:u})},[j,_,u,d,f]),null}function la(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ig({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:h=!1,unstable_useTransitions:b}){Re(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=o.replace(/^\/*/,"/"),v=A.useMemo(()=>({basename:j,navigator:m,static:h,unstable_useTransitions:b,future:{}}),[j,m,h,b]);typeof f=="string"&&(f=Ul(f));let{pathname:_="/",search:R="",hash:E="",state:U=null,key:Q="default"}=f,k=A.useMemo(()=>{let q=na(_,j);return q==null?null:{location:{pathname:q,search:R,hash:E,state:U,key:Q},navigationType:u}},[j,_,R,E,U,Q,u]);return Ot(k!=null,`<Router basename="${j}"> is not able to match the URL "${_}${R}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:A.createElement(yt.Provider,{value:v},A.createElement(Ui.Provider,{children:d,value:k}))}function ng({children:o,location:d}){return Xh(Lo(o),d)}function Lo(o,d=[]){let f=[];return A.Children.forEach(o,(u,m)=>{if(!A.isValidElement(u))return;let h=[...d,m];if(u.type===A.Fragment){f.push.apply(f,Lo(u.props.children,h));return}Re(u.type===la,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=Lo(u.props.children,h)),f.push(b)}),f}var ls="get",is="application/x-www-form-urlencoded";function rs(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function sg(o){return rs(o)&&o.tagName.toLowerCase()==="button"}function rg(o){return rs(o)&&o.tagName.toLowerCase()==="form"}function og(o){return rs(o)&&o.tagName.toLowerCase()==="input"}function ug(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function cg(o,d){return o.button===0&&(!d||d==="_self")&&!ug(o)}var as=null;function dg(){if(as===null)try{new FormData(document.createElement("form"),0),as=!1}catch{as=!0}return as}var fg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uo(o){return o!=null&&!fg.has(o)?(Ot(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${is}"`),null):o}function mg(o,d){let f,u,m,h,b;if(rg(o)){let j=o.getAttribute("action");u=j?na(j,d):null,f=o.getAttribute("method")||ls,m=Uo(o.getAttribute("enctype"))||is,h=new FormData(o)}else if(sg(o)||og(o)&&(o.type==="submit"||o.type==="image")){let j=o.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||j.getAttribute("action");if(u=v?na(v,d):null,f=o.getAttribute("formmethod")||j.getAttribute("method")||ls,m=Uo(o.getAttribute("formenctype"))||Uo(j.getAttribute("enctype"))||is,h=new FormData(j,o),!dg()){let{name:_,type:R,value:E}=o;if(R==="image"){let U=_?`${_}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else _&&h.append(_,E)}}else{if(rs(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ls,u=null,m=is,b=o}return h&&m==="text/plain"&&(b=h,h=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:h,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xo(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function pg(o,d,f,u){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:d&&na(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function _g(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function gg(o,d,f){let u=await Promise.all(o.map(async m=>{let h=d.routes[m.route.id];if(h){let b=await _g(h,f);return b.links?b.links():[]}return[]}));return xg(u.flat(1).filter(hg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function um(o,d,f,u,m,h){let b=(v,_)=>f[_]?v.route.id!==f[_].route.id:!0,j=(v,_)=>f[_].pathname!==v.pathname||f[_].route.path?.endsWith("*")&&f[_].params["*"]!==v.params["*"];return h==="assets"?d.filter((v,_)=>b(v,_)||j(v,_)):h==="data"?d.filter((v,_)=>{let R=u.routes[v.route.id];if(!R||!R.hasLoader)return!1;if(b(v,_)||j(v,_))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function yg(o,d,{includeHydrateFallback:f}={}){return vg(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function vg(o){return[...new Set(o)]}function bg(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function xg(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let h=JSON.stringify(bg(m));return f.has(h)||(f.add(h),u.push({key:h,link:m})),u},[])}function Tm(){let o=A.useContext(Hl);return Xo(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Sg(){let o=A.useContext(ss);return Xo(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Qo=A.createContext(void 0);Qo.displayName="FrameworkContext";function Em(){let o=A.useContext(Qo);return Xo(o,"You must render this element inside a <HydratedRouter> element"),o}function wg(o,d){let f=A.useContext(Qo),[u,m]=A.useState(!1),[h,b]=A.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:_,onMouseLeave:R,onTouchStart:E}=d,U=A.useRef(null);A.useEffect(()=>{if(o==="render"&&b(!0),o==="viewport"){let q=K=>{K.forEach(H=>{b(H.isIntersecting)})},G=new IntersectionObserver(q,{threshold:.5});return U.current&&G.observe(U.current),()=>{G.disconnect()}}},[o]),A.useEffect(()=>{if(u){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[u]);let Q=()=>{m(!0)},k=()=>{m(!1),b(!1)};return f?o!=="intent"?[h,U,{}]:[h,U,{onFocus:Oi(j,Q),onBlur:Oi(v,k),onMouseEnter:Oi(_,Q),onMouseLeave:Oi(R,k),onTouchStart:Oi(E,Q)}]:[!1,U,{}]}function Oi(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function Tg({page:o,...d}){let{router:f}=Tm(),u=A.useMemo(()=>cm(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?A.createElement(Ng,{page:o,matches:u,...d}):null}function Eg(o){let{manifest:d,routeModules:f}=Em(),[u,m]=A.useState([]);return A.useEffect(()=>{let h=!1;return gg(o,d,f).then(b=>{h||m(b)}),()=>{h=!0}},[o,d,f]),u}function Ng({page:o,matches:d,...f}){let u=Da(),{future:m,manifest:h,routeModules:b}=Em(),{basename:j}=Tm(),{loaderData:v,matches:_}=Sg(),R=A.useMemo(()=>um(o,d,_,h,u,"data"),[o,d,_,h,u]),E=A.useMemo(()=>um(o,d,_,h,u,"assets"),[o,d,_,h,u]),U=A.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let q=new Set,G=!1;if(d.forEach(H=>{let P=h.routes[H.route.id];!P||!P.hasLoader||(!R.some(ge=>ge.route.id===H.route.id)&&H.route.id in v&&b[H.route.id]?.shouldRevalidate||P.hasClientLoader?G=!0:q.add(H.route.id))}),q.size===0)return[];let K=pg(o,j,m.unstable_trailingSlashAwareDataRequests,"data");return G&&q.size>0&&K.searchParams.set("_routes",d.filter(H=>q.has(H.route.id)).map(H=>H.route.id).join(",")),[K.pathname+K.search]},[j,m.unstable_trailingSlashAwareDataRequests,v,u,h,R,d,o,b]),Q=A.useMemo(()=>yg(E,h),[E,h]),k=Eg(E);return A.createElement(A.Fragment,null,U.map(q=>A.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...f})),Q.map(q=>A.createElement("link",{key:q,rel:"modulepreload",href:q,...f})),k.map(({key:q,link:G})=>A.createElement("link",{key:q,nonce:f.nonce,...G,crossOrigin:G.crossOrigin??f.crossOrigin})))}function Ag(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jg&&(window.__reactRouterVersion="7.13.0")}catch{}function Rg({basename:o,children:d,unstable_useTransitions:f,window:u}){let m=A.useRef();m.current==null&&(m.current=rh({window:u,v5Compat:!0}));let h=m.current,[b,j]=A.useState({action:h.action,location:h.location}),v=A.useCallback(_=>{f===!1?j(_):A.startTransition(()=>j(_))},[f]);return A.useLayoutEffect(()=>h.listen(v),[h,v]),A.createElement(ig,{basename:o,children:d,location:b.location,navigationType:b.action,navigator:h,unstable_useTransitions:f})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=A.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:h,replace:b,state:j,target:v,to:_,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:U,...Q},k){let{basename:q,unstable_useTransitions:G}=A.useContext(yt),K=typeof _=="string"&&Nm.test(_),H=pm(_,q);_=H.to;let P=Yh(_,{relative:m}),[ge,pe,V]=wg(u,Q),Y=Og(_,{replace:b,state:j,target:v,preventScrollReset:R,relative:m,viewTransition:E,unstable_defaultShouldRevalidate:U,unstable_useTransitions:G});function le(Ce){d&&d(Ce),Ce.defaultPrevented||Y(Ce)}let Ee=A.createElement("a",{...Q,...V,href:H.absoluteURL||P,onClick:H.isExternal||h?d:le,ref:Ag(k,pe),target:v,"data-discover":!K&&f==="render"?"true":void 0});return ge&&!K?A.createElement(A.Fragment,null,Ee,A.createElement(Tg,{page:P})):Ee});Te.displayName="Link";var Cg=A.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:h,to:b,viewTransition:j,children:v,..._},R){let E=Hi(b,{relative:_.relative}),U=Da(),Q=A.useContext(ss),{navigator:k,basename:q}=A.useContext(yt),G=Q!=null&&kg(E)&&j===!0,K=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,H=U.pathname,P=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;f||(H=H.toLowerCase(),P=P?P.toLowerCase():null,K=K.toLowerCase()),P&&q&&(P=na(P,q)||P);const ge=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let pe=H===K||!m&&H.startsWith(K)&&H.charAt(ge)==="/",V=P!=null&&(P===K||!m&&P.startsWith(K)&&P.charAt(K.length)==="/"),Y={isActive:pe,isPending:V,isTransitioning:G},le=pe?d:void 0,Ee;typeof u=="function"?Ee=u(Y):Ee=[u,pe?"active":null,V?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof h=="function"?h(Y):h;return A.createElement(Te,{..._,"aria-current":le,className:Ee,ref:R,style:Ce,to:b,viewTransition:j},typeof v=="function"?v(Y):v)});Cg.displayName="NavLink";var Dg=A.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:h,method:b=ls,action:j,onSubmit:v,relative:_,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:U,...Q},k)=>{let{unstable_useTransitions:q}=A.useContext(yt),G=Hg(),K=Lg(j,{relative:_}),H=b.toLowerCase()==="get"?"get":"post",P=typeof j=="string"&&Nm.test(j),ge=pe=>{if(v&&v(pe),pe.defaultPrevented)return;pe.preventDefault();let V=pe.nativeEvent.submitter,Y=V?.getAttribute("formmethod")||b,le=()=>G(V||pe.currentTarget,{fetcherKey:d,method:Y,navigate:f,replace:m,state:h,relative:_,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:U});q&&f!==!1?A.startTransition(()=>le()):le()};return A.createElement("form",{ref:k,method:H,action:K,onSubmit:u?v:ge,...Q,"data-discover":!P&&o==="render"?"true":void 0})});Dg.displayName="Form";function Mg(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Am(o){let d=A.useContext(Hl);return Re(d,Mg(o)),d}function Og(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:h,viewTransition:b,unstable_defaultShouldRevalidate:j,unstable_useTransitions:v}={}){let _=bm(),R=Da(),E=Hi(o,{relative:h});return A.useCallback(U=>{if(cg(U,d)){U.preventDefault();let Q=f!==void 0?f:zi(R)===zi(E),k=()=>_(o,{replace:Q,state:u,preventScrollReset:m,relative:h,viewTransition:b,unstable_defaultShouldRevalidate:j});v?A.startTransition(()=>k()):k()}},[R,_,E,f,u,d,o,m,h,b,j,v])}var zg=0,Ug=()=>`__${String(++zg)}__`;function Hg(){let{router:o}=Am("useSubmit"),{basename:d}=A.useContext(yt),f=Ih(),u=o.fetch,m=o.navigate;return A.useCallback(async(h,b={})=>{let{action:j,method:v,encType:_,formData:R,body:E}=mg(h,d);if(b.navigate===!1){let U=b.fetcherKey||Ug();await u(U,f,b.action||j,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:E,formMethod:b.method||v,formEncType:b.encType||_,flushSync:b.flushSync})}else await m(b.action||j,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:E,formMethod:b.method||v,formEncType:b.encType||_,replace:b.replace,state:b.state,fromRouteId:f,flushSync:b.flushSync,viewTransition:b.viewTransition})},[u,m,d,f])}function Lg(o,{relative:d}={}){let{basename:f}=A.useContext(yt),u=A.useContext(zt);Re(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),h={...Hi(o||".",{relative:d})},b=Da();if(o==null){h.search=b.search;let j=new URLSearchParams(h.search),v=j.getAll("index");if(v.some(R=>R==="")){j.delete("index"),v.filter(E=>E).forEach(E=>j.append("index",E));let R=j.toString();h.search=R?`?${R}`:""}}return(!o||o===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:ia([f,h.pathname])),zi(h)}function kg(o,{relative:d}={}){let f=A.useContext(hm);Re(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Am("useViewTransitionState"),m=Hi(o,{relative:d});if(!f.isTransitioning)return!1;let h=na(f.currentLocation.pathname,u)||f.currentLocation.pathname,b=na(f.nextLocation.pathname,u)||f.nextLocation.pathname;return ns(m.pathname,b)!=null||ns(m.pathname,h)!=null}const Bg=()=>{const[o,d]=A.useState(!1),f=()=>{d(!o)},u=()=>{d(!1)};return s.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700",children:[s.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[s.jsxs(Te,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:u,children:[s.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:s.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),s.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),s.jsxs("button",{onClick:f,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"rotate-45 translate-y-2":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"opacity-0":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"-rotate-45 -translate-y-2":""}`})]}),s.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[s.jsx("li",{children:s.jsx(Te,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),s.jsx("li",{children:s.jsx(Te,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),s.jsx("li",{children:s.jsx(Te,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),s.jsx("li",{children:s.jsx(Te,{to:"/trading",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Trading"})}),s.jsx("li",{children:s.jsx(Te,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),s.jsx("li",{children:s.jsx(Te,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),o&&s.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:s.jsxs("ul",{className:"flex flex-col space-y-0",children:[s.jsx("li",{children:s.jsx(Te,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Home"})}),s.jsx("li",{children:s.jsx(Te,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"About"})}),s.jsx("li",{children:s.jsx(Te,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Projects"})}),s.jsx("li",{children:s.jsx(Te,{to:"/trading",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Trading"})}),s.jsx("li",{children:s.jsx(Te,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Resume"})}),s.jsx("li",{children:s.jsx(Te,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Contact"})})]})})]})},qg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid grid-cols-1 gap-8 md:gap-12 items-center",children:[s.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[s.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[s.jsx(Te,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),s.jsx(Te,{to:"/about",className:"px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-colors text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-600/75",children:"Learn About Me"}),s.jsx(Te,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]}),s.jsxs("div",{className:"relative h-64 sm:h-80 md:h-96 mt-8 md:mt-0 md:block",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),s.jsx("div",{className:"relative h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:s.jsx("img",{src:"/portfolio_website/good_boy_pic2.jpeg",alt:"Profile",className:"object-cover w-full h-full rounded-lg"})})]})]})})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),s.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Built a Python-based automated trading framework with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, and Alpaca API order execution."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSockets"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),s.jsx(Te,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Developed an XGBoost regression pipeline using historical NFL data, engineered rolling workload and efficiency features, and evaluated performance on out-of-sample seasons."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Feature Engineering"})]}),s.jsx(Te,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),s.jsx("div",{className:"text-center mt-8 md:mt-12",children:s.jsx(Te,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(o=>s.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:s.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:o})},o))})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),s.jsx(Te,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),Yg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),s.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:s.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),s.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),s.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),s.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),s.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("a",{href:"https://www.linkedin.com/in/eric-jackson27",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),s.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),s.jsx("div",{className:"space-y-6",children:s.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),s.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),s.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),s.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),s.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),s.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),s.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),s.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),s.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),s.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),s.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),s.jsx("span",{className:"text-slate-300 text-sm",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),s.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),s.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]})]})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),s.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),s.jsx(Te,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),Gg=()=>{const[o,d]=A.useState("all"),[f,u]=A.useState(new Set),m=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"27.8 yards"},{label:"R² Score",value:"0.46"},{label:"Classification ROC-AUC",value:"0.626"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["Feature engineering from historical game data","Out-of-sample validation on full season","Classification model for over/under predictions","Actionable insights for sports analytics"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Tastytrade dxFeed"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["Real-time market data streaming via Tastytrade dxFeed WebSocket","Pluggable strategy architecture with async event loop","Alpaca API for automated order execution","Position tracking with entry/exit prices and P&L","Daily auto-shutdown at market close","Configurable timeframes and data requirements"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"XGBoost model for predicting volatility breakouts in SPY options",fullDesc:"Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Binary classification for volatility breakout prediction","Parallel label generation for large datasets","Model calibration analysis with Brier score and log loss","Feature engineering with interaction terms"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"/",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]},{id:5,title:"Options Profit Prediction Model",category:"machine-learning",shortDesc:"XGBoost model predicting profitable SPY options trades",fullDesc:"Built binary classifier with 100+ engineered features to predict end-of-day profitability for SPY options. Includes SHAP-driven interaction features, intraday positioning metrics, and EV analysis by strike/threshold. Deployed to AWS S3 for production inference.",technologies:["Python","XGBoost","SHAP","AWS S3","Pandas"],metrics:[{label:"Features",value:"100+"},{label:"Target",value:"EOD Profit"},{label:"Deployment",value:"AWS S3"}],image:"💰",github:"#",demo:"project-demo/5",highlights:["100+ engineered features across price, volume, and microstructure","SHAP analysis for feature discovery and interaction terms","Intraday positioning features (distance from day high/low)","Expected value analysis by OTM strike and confidence threshold","Statistical validation with paired t-tests","Production deployment to AWS S3"]},{id:6,title:"Intraday Direction Classifier",category:"machine-learning",shortDesc:"XGBoost model for second-level SPY directional prediction",fullDesc:"Multi-class XGBoost classifier predicting SPY near-term movement intensity (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization with multi-threaded backtesting framework.",technologies:["Python","XGBoost","Pandas","ThreadPoolExecutor"],metrics:[{label:"Overall Accuracy",value:"60%"},{label:"Classes",value:"5 (Directional)"},{label:"Frequency",value:"1-second"}],image:"🎯",github:"#",demo:"project-demo/6",highlights:["Multi-class classifier for intraday momentum (5 classes)","Feature selection from colleague's proprietary indicators","Options trading strategy with consecutive signal logic","Multi-threaded backtesting engine for fast validation","Position management with 10-minute hold duration","Risk controls with time-based entry/exit cutoffs","Real-time option pricing from Polygon API"]}],h=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],b=o==="all"?m:m.filter(v=>v.category===o),j=v=>{u(_=>{const R=new Set(_);return R.has(v)?R.delete(v):R.add(v),R})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),s.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[s.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),s.jsx("select",{id:"category-filter",value:o,onChange:v=>d(v.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:h.map(v=>s.jsx("option",{value:v.value,children:v.label},v.value))}),s.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",b.length," project",b.length!==1?"s":""]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:b.length===0?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:b.map(v=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[s.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:s.jsx("span",{className:"text-6xl",children:v.image})}),s.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[s.jsx("div",{className:"mb-3",children:s.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:h.find(_=>_.value===v.category)?.label})}),s.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:v.title}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:v.shortDesc}),s.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:v.fullDesc}),s.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:v.metrics.map((_,R)=>s.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[s.jsx("p",{className:"text-slate-400 text-xs mb-1",children:_.label}),s.jsx("p",{className:"text-white font-bold text-sm",children:_.value})]},R))}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:v.technologies.map(_=>s.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:_},_))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),s.jsx("ul",{className:"space-y-1",children:(f.has(v.id)?v.highlights:v.highlights.slice(0,3)).map((_,R)=>s.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),s.jsx("span",{children:_})]},R))}),v.highlights.length>3&&s.jsx("button",{onClick:()=>j(v.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:f.has(v.id)?"- Show Less":`+ Show ${v.highlights.length-3} More`})]}),s.jsxs("div",{className:"flex gap-4 mt-auto",children:[s.jsx("a",{href:v.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),s.jsx(Te,{to:v.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},v.id))})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),s.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),s.jsx(Te,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},Vg=({label:o,description:d,code:f,language:u="python"})=>{const[m,h]=A.useState(!1),b=()=>{navigator.clipboard.writeText(f),h(!0),setTimeout(()=>h(!1),2e3)};return s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[s.jsxs("div",{className:"bg-slate-800 px-6 py-4 border-b border-slate-600",children:[s.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:o}),s.jsx("p",{className:"text-slate-300 text-sm",children:d})]}),s.jsxs("div",{className:"relative",children:[s.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:s.jsx("code",{children:f})}),s.jsx("button",{onClick:b,className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:m?"✓ Copied":"Copy"})]})]})},Xg={id:"1",title:"Sports Analytics Predictions – Code Demo",description:"Explore the implementation of an NFL rushing yards prediction pipeline, including feature engineering and modeling. Results are below code samples",codeSamples:[{label:"Feature Engineering",description:"Rolling window features for workload, efficiency, momentum, and volatility metrics",code:`import pandas as pd

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

`}],plots:[{title:"Feature Importance",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"Top predictive features learned by the model provide insight into which variables have the greatest impact on predicting rushing yards."}),s.jsx("p",{children:"For the features not defined earlier:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("b",{children:"starter_flag"}),": player started that game"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_breakaway_rate_5_ma"}),": average count of rushes > 40 yards last 5 games / average carries last 5 games"]}),s.jsxs("li",{children:[s.jsx("b",{children:"team_dependency"}),": pct_of_carries_5ma / (others_rush_attempts_5ma + 10",s.jsx("sup",{children:"-6"}),")"]}),s.jsxs("li",{children:[s.jsx("b",{children:"explosive_index"}),": 0.5 * off_explosive_rate_5_ma + 0.3 * off_breakaway_rate_5_ma + 0.2 * rushes_16_to_20_5_ma_share + 0.1 * rushes_21_plus_5_ma_share"]}),s.jsxs("li",{children:[s.jsx("b",{children:"off_explosive_rate_5_ma"}),": average count of rushes ≥ 11 yards last 5 games / average count of rushes"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_16_to_20_5_ma_share"}),": proportion of rushes between 16 and 20 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rushes_21_plus_5_ma_share"}),": proportion of rushes ≥ 21 yards last 5 games / average carries"]}),s.jsxs("li",{children:[s.jsx("b",{children:"rush_yards_rank_pct"}),": rank of rush yards for that season normalized by max rank"]})]})]}),imageUrl:"/portfolio_website/rush_yard_featureImportance.png"},{title:"Residual Errors of NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["This histogram shows the distribution of prediction errors (",s.jsx("em",{children:"predicted minus actual rushing yards"}),") across NFL games."]}),s.jsx("p",{children:"Errors are centered close to zero, indicating little overall bias, while the right-skewed tail and occasional large negative errors reveal games where the model significantly over- or under-estimated rushing output."}),s.jsx("p",{children:"The vertical reference lines mark perfect prediction, mean error, and median error, helping illustrate both typical performance and the presence of outlier games."})]}),imageUrl:"/portfolio_website/error_NFL.png"},{title:"Actual vs Predicted NFL Rushing Yards",description:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"This chart shows the weekly predicted rushing yards compared to actual results for four standout players throughout the 2024 season"}),s.jsx("p",{className:"text-sm text-slate-400 mt-4",children:"Click image to navigate player-specific error distributions →"})]}),imageUrl:"/portfolio_website/bijan_err.png",imageUrls:[{url:"/portfolio_website/bijan_err.png",label:"Bijan Robinson"},{url:"/portfolio_website/henry_error.png",label:"Derrick Henry"},{url:"/portfolio_website/saquon_err.png",label:"Saquon Barkley"},{url:"/portfolio_website/taylor_err.png",label:"Jonathan Taylor"}]}]},Qg={id:"2",title:"Live Trading Framework - Code Demo",description:"Python-based automated trading system implementation",codeSamples:[{label:"Initial Setup and ansyncio Loop",description:"Python-based live trading system with async event loop",code:`"""
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
            return 0.0`}],plots:[{title:"Trading Performance",description:"Cumulative returns and drawdown analysis",imageUrl:"https://via.placeholder.com/600x400?text=Trading+Performance"},{title:"Signal Accuracy",description:"Win rate and profit factor by signal type",imageUrl:"https://via.placeholder.com/600x400?text=Signal+Accuracy"},{title:"Risk Metrics",description:"Sharpe ratio and maximum drawdown over time",imageUrl:"https://via.placeholder.com/600x400?text=Risk+Metrics"}]},Fg={id:"3",title:"Volatility Breakout Prediction – Code Demo",description:"XGBoost model predicting when SPY will move 5x the expanding average true range (measured from market open) within 30 minutes. Achieved 0.686 ROC-AUC on one year of minute-level data.",codeSamples:[{label:"Helper Functions & ATR Calculation",description:"RSI, ATR, and True Range calculations for volatility measurement",code:`import numpy as np
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
    `}],plots:[{title:"Feature Importance Analysis",description:"XGBoost feature importance ranked by gain. ATR ratios and VWAP interactions dominate predictive power.",imageUrl:"/portfolio_website/featureImportanceVolatilityModel.png"},{title:"Model Calibration Curve",description:"Calibration analysis showing model's predicted probabilities vs actual breakout frequencies. Near-perfect calibration indicates reliable probability estimates.",imageUrl:"/portfolio_website/volatility_calibCurve.png"}]},Zg={id:"5",title:"Options Profit Prediction Model – Code Demo",description:"XGBoost binary classifier predicting profitable SPY options trades at end of day. Features 100+ engineered variables across price dynamics, volume patterns, and intraday positioning. Deployed to AWS S3 for production inference.",codeSamples:[{label:"Multi-Window Feature Engineering",description:"Parallel processing to create 100+ features across price, direction, momentum, and volume dimensions",code:`import numpy as np
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
print("Downloaded and verified:", local_path)`}],plots:[{title:"Feature Importance (XGBoost)",description:"Top 20 features ranked by XGBoost gain. Intraday positioning (dist_from_day_low, day_low_so_far) and momentum from open dominate predictive power.",imageUrl:"https://via.placeholder.com/800x600?text=Feature+Importance"},{title:"SHAP Global Importance",description:"SHAP summary plot showing feature impact distribution. Intraday position features, moneyness interactions, and time-to-expiry dominate.",imageUrl:"https://via.placeholder.com/800x600?text=SHAP+Summary"},{title:"Model Calibration Curve",description:"Predicted probabilities vs observed outcomes. Model shows good calibration across probability ranges, with slight overconfidence at extremes.",imageUrl:"https://via.placeholder.com/800x600?text=Calibration+Curve"},{title:"Confidence vs True Outcome by Bin",description:"Model confidence buckets vs actual profitability rates. Higher confidence predictions show significantly better hit rates, validating model's probability estimates.",imageUrl:"https://via.placeholder.com/800x600?text=Confidence+vs+Outcome"},{title:"Expected Value by OTM & Threshold",description:"Heatmap of EV across strike prices (OTM) and model confidence thresholds. Identifies optimal entry conditions for maximum expected return.",imageUrl:"https://via.placeholder.com/800x600?text=EV+Heatmap"},{title:"Statistical Validation",description:"Paired t-test results showing model hit-rate significantly outperforms baseline (p < 0.001). Cohen's d indicates strong practical significance.",imageUrl:"https://via.placeholder.com/800x600?text=Statistical+Tests"}]},Kg={id:"6",title:"Intraday Direction Classifier – Code Demo",description:"XGBoost multi-class classifier predicting SPY's near-term directional movement (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization. Backtested on live options trades with risk-managed position sizing.",codeSamples:[{label:"Model Overview & Performance",description:"5-class prediction system for intraday SPY momentum with strong accuracy on extreme moves",code:`"""
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
    print(f"{key:.<30} {value}")`}],plots:[{title:"XGBoost Confusion Matrix",description:"Model classification performance across 5 directional classes. Strong diagonal indicates high accuracy, particularly on Neutral predictions (3.4M correct). The model shows good discrimination between extreme moves (Heavy Up/Down) and neutral periods, which is critical for the trading strategy. Note the minimal confusion between Heavy Up and Heavy Down (near-zero off-diagonal), demonstrating the model avoids catastrophic directional errors.",imageUrl:"/confusion_matrix_xgboost.png"},{title:"Trade P&L Distribution",description:"Distribution of profit and loss across all backtest trades. Shows risk-reward profile with positive skew - more frequent small losses offset by occasional larger wins. Options decay works against us on neutral moves, but strong directional predictions generate outsized returns. Median trade: ~$30 profit. Long right tail indicates potential for 200%+ gains on correctly timed extreme moves.",imageUrl:"https://via.placeholder.com/800x500?text=Trade+P%26L+Distribution"},{title:"Cumulative Returns",description:"Equity curve showing cumulative P&L over backtest period. Steady upward trajectory indicates consistent edge from model predictions. Drawdown periods align with low-volatility regimes where model generates fewer high-confidence signals. Maximum drawdown of ~$812 occurred during mid-December consolidation. Overall positive slope validates strategy's robustness across different market conditions.",imageUrl:"https://via.placeholder.com/800x500?text=Cumulative+Returns+Curve"},{title:"Win Rate by Time of Day",description:"Strategy performance segmented by market hours. Win rate peaks at market open (9:30-10:00 AM) at 61% due to high volatility and stronger trends. Performance dips during lunch (12:00-1:00 PM) to 48% as markets consolidate. Secondary peak at 2:30-3:30 PM (58%) captures end-of-day momentum. Strategy automatically stops entering positions after 3:25 PM to avoid unpredictable close.",imageUrl:"https://via.placeholder.com/800x500?text=Win+Rate+by+Hour"},{title:"Feature Importance (Anonymized)",description:"Relative importance of input features in the XGBoost model (feature names redacted per colleague's proprietary work). Top features capture price momentum, volatility regimes, and microstructure patterns at multiple timeframes. The model uses ~40 features total after my selection process, down from original 100+ candidates. Feature selection improved out-of-sample accuracy by 3.2% while reducing overfitting.",imageUrl:"https://via.placeholder.com/800x500?text=Feature+Importance"}]},Jg=()=>{const{projectId:o}=Vh(),[d,f]=A.useState(null),[u,m]=A.useState(0),h=A.useRef({}),b=A.useRef(null),j=k=>{let q=h.current[k];if(k==="Visualizations & Results"&&(q=b.current),q){const H=q.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:H,behavior:"smooth"})}},_={1:Xg,2:Qg,3:Fg,4:{id:"4",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
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
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]},5:Zg,6:Kg}[o||""];if(!_)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),s.jsx(Te,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const R=()=>{d?.imageUrls&&m(k=>(k-1+d.imageUrls.length)%d.imageUrls.length)},E=()=>{d?.imageUrls&&m(k=>(k+1)%d.imageUrls.length)},U=()=>d?d.imageUrls&&d.imageUrls.length>0?d.imageUrls[u].url:d.imageUrl:"",Q=()=>d?.imageUrls?d.imageUrls[u]?.label:null;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx(Te,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:_.title}),s.jsx("p",{className:"text-xl text-slate-300",children:_.description})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[_.codeSamples&&_.codeSamples.length>0&&s.jsx("div",{className:"lg:w-64 flex-shrink-0",children:s.jsxs("div",{className:"lg:sticky lg:top-8",children:[s.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[_.codeSamples.map((k,q)=>s.jsx("button",{onClick:()=>j(k.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:k.label},q)),_.plots&&_.plots.length>0&&s.jsx("button",{onClick:()=>j("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"mb-20",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),_.codeSamples.map((k,q)=>s.jsx("div",{ref:G=>{h.current[k.label]=G},children:s.jsx(Vg,{label:k.label,description:k.description,code:k.code})},q))]}),s.jsxs("div",{ref:b,children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:_.plots.map((k,q)=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{f(k),m(0)},children:[s.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:s.jsx("img",{src:k.imageUrl,alt:k.title,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:k.title}),s.jsx("div",{className:"text-slate-300",children:k.description})]})]},q))})]})]})]})}),d&&s.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>f(null),children:s.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:k=>k.stopPropagation(),children:[s.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),s.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[s.jsx("img",{src:U(),alt:d.title,className:"w-full h-full object-contain"}),d.imageUrls&&d.imageUrls.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:R,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),s.jsx("button",{onClick:E,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[u+1," / ",d.imageUrls.length]})]})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[s.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[d.title,Q()&&s.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",Q()]})]}),s.jsx("div",{className:"text-slate-300",children:d.description})]})]})})]})},Pg=()=>{const[o,d]=A.useState({name:"",email:"",subject:"",message:""}),[f,u]=A.useState("idle"),[m,h]=A.useState(""),b=v=>{const{name:_,value:R}=v.target;d(E=>({...E,[_]:R}))},j=async v=>{v.preventDefault(),u("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(u("success"),d({name:"",email:"",subject:"",message:""}),setTimeout(()=>u("idle"),3e3)):(u("error"),h("Failed to send message. Please try again."))}catch{u("error"),h("An error occurred. Please try again later.")}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),s.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),s.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:s.jsxs("form",{onSubmit:j,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),s.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:b,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:b,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),s.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:b,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:b,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),f==="success"&&s.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),f==="error"&&s.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:m}),s.jsx("button",{type:"submit",disabled:f==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:f==="loading"?"Sending...":"Send Message"})]})}),s.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),s.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),s.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),s.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},Wg=()=>s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),s.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),s.jsxs("ul",{className:"space-y-2 text-slate-300",children:[s.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),s.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),s.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),s.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),s.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"5 ATR Volatility Breakout Model"}),s.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),s.jsx("div",{className:"pt-4",children:s.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})}),$g=()=>{const[o,d]=A.useState(null),[f,u]=A.useState([]),[m,h]=A.useState(null),[b,j]=A.useState(!0),[v,_]=A.useState(null),[R,E]=A.useState("1M"),[U,Q]=A.useState(null),[k,q]=A.useState(null),G="https://portfoliowebsitebackend-production-fa3b.up.railway.app";A.useEffect(()=>{(async()=>{j(!0),_(null);try{const[Y,le,Ee]=await Promise.all([fetch(`${G}/api/account`),fetch(`${G}/api/positions`),fetch(`${G}/api/portfolio-history?period=${R}&timeframe=1D`)]);if(!Y.ok||!le.ok||!Ee.ok)throw new Error("Failed to fetch data from backend");const Ce=await Y.json(),Xe=await le.json(),He=await Ee.json();d(Ce),u(Xe),h(He)}catch(Y){_(Y instanceof Error?Y.message:"An error occurred"),console.error("Error fetching trading data:",Y)}finally{j(!1)}})()},[R,G]);const K=()=>{if(m&&m.equity&&m.equity.length>0){const Ce=m.equity[0],He=m.equity[m.equity.length-1]-Ce,Ie=He/Ce*100;return{totalReturn:He,totalReturnPct:Ie}}if(!o)return{totalReturn:0,totalReturnPct:0};const V=parseFloat(o.equity),Y=parseFloat(o.last_equity),le=V-Y,Ee=le/Y*100;return{totalReturn:le,totalReturnPct:Ee}},H=V=>{const Y=typeof V=="string"?parseFloat(V):V;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Y)},P=V=>{const Y=typeof V=="string"?parseFloat(V):V;return`${Y>=0?"+":""}${Y.toFixed(2)}%`};if(b)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white text-xl",children:"Loading trading data..."})});if(v)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-red-400 text-xl",children:["Error: ",v]})});const{totalReturn:ge,totalReturnPct:pe}=K();return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-2",children:"Trading Dashboard"}),s.jsx("p",{className:"text-sm sm:text-base text-slate-400",children:"Alpaca Paper Trading Account Performance"})]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8",children:[s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Portfolio Value"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:o&&H(o.equity)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Cash"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:o&&H(o.cash)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Total Return"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${ge>=0?"text-green-400":"text-red-400"}`,children:H(ge)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Return %"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${pe>=0?"text-green-400":"text-red-400"}`,children:P(pe)})]})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Portfolio Performance"}),s.jsx("div",{className:"flex gap-1 sm:gap-2 flex-wrap",children:["1D","1W","1M","3M","ALL"].map(V=>s.jsx("button",{onClick:()=>E(V),className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${R===V?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:V},V))})]}),m&&m.equity&&m.equity.length>0?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"relative h-48 sm:h-64 bg-slate-900/50 rounded-lg p-4",onMouseLeave:()=>{Q(null),q(null)},children:[s.jsx("svg",{width:"100%",height:"100%",className:"overflow-visible",onMouseMove:V=>{const le=V.currentTarget.getBoundingClientRect(),Ee=(V.clientX-le.left)/le.width*100,Ce=Math.round(Ee/100*(m.equity.length-1));Ce>=0&&Ce<m.equity.length&&(Q(Ce),q({x:V.clientX-le.left,y:V.clientY-le.top}))},children:m.equity.map((V,Y)=>{if(Y===0)return null;const le=m.equity[Y-1],Ee=(Y-1)/(m.equity.length-1)*100,Ce=Y/(m.equity.length-1)*100,Xe=Math.min(...m.equity),Ie=Math.max(...m.equity)-Xe,Rt=Ie>0?100-(le-Xe)/Ie*80-10:50,rt=Ie>0?100-(V-Xe)/Ie*80-10:50,D=m.equity[0],$=m.equity[m.equity.length-1]>=D;return s.jsx("line",{x1:`${Ee}%`,y1:`${Rt}%`,x2:`${Ce}%`,y2:`${rt}%`,stroke:$?"#4ade80":"#f87171",strokeWidth:"2"},Y)})}),U!==null&&k&&m.profit_loss_pct&&s.jsxs("div",{className:"absolute bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white pointer-events-none",style:{left:`${k.x}px`,top:`${k.y-60}px`,transform:"translateX(-50%)"},children:[s.jsx("div",{className:"text-xs text-slate-400 mb-1",children:new Date(m.timestamp[U]*1e3).toLocaleDateString()}),s.jsx("div",{className:"font-semibold",children:P(m.profit_loss_pct[U])}),s.jsx("div",{className:"text-xs text-slate-400",children:H(m.equity[U])})]})]}),s.jsxs("div",{className:"flex justify-between text-xs sm:text-sm text-slate-400 mt-4 mb-2",children:[s.jsxs("span",{className:"truncate",children:["Start: ",H(m.equity[0])]}),s.jsxs("span",{className:"truncate text-right",children:["Current: ",H(m.equity[m.equity.length-1])]})]}),s.jsxs("div",{className:"flex justify-between text-xs text-slate-500 px-4",children:[s.jsx("span",{children:new Date(m.timestamp[0]*1e3).toLocaleDateString()}),s.jsx("span",{children:new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleDateString()})]}),s.jsxs("div",{className:"mt-4 p-3 bg-slate-900/30 rounded-lg border border-slate-700 text-xs text-slate-400",children:[s.jsxs("p",{children:["📊 ",s.jsx("span",{className:"font-semibold",children:"Note:"}),` Chart data does not include the current trading day. The "Total Return" and "Return %" at the top reflect my real-time portfolio value including today's changes.`]}),R==="ALL"&&s.jsxs("p",{className:"mt-2 text-slate-300",children:["⚠️ ",s.jsx("span",{className:"font-semibold",children:"Early Performance:"})," The portfolio experienced a ~20% decline in the first week due to trading bugs."]})]})]}):s.jsx("div",{className:"h-64 flex items-center justify-center text-slate-400",children:b?"Loading chart data...":"No data available for this period"})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-6",children:"Current Positions"}),f.length===0?s.jsx("p",{className:"text-slate-400",children:"No open positions"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"block md:hidden space-y-4",children:f.map(V=>{const Y=parseFloat(V.unrealized_pl),le=parseFloat(V.unrealized_plpc)*100;return s.jsxs("div",{className:"bg-slate-900/50 rounded-lg p-4 border border-slate-600",children:[s.jsxs("div",{className:"flex justify-between items-start mb-3",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-bold text-white",children:V.symbol}),s.jsxs("p",{className:"text-xs text-slate-400",children:["Qty: ",V.qty]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:`text-sm font-bold ${Y>=0?"text-green-400":"text-red-400"}`,children:H(V.unrealized_pl)}),s.jsx("p",{className:`text-xs font-semibold ${le>=0?"text-green-400":"text-red-400"}`,children:P(le)})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Avg Price"}),s.jsx("p",{className:"text-white font-semibold",children:H(V.avg_entry_price)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Current Price"}),s.jsx("p",{className:"text-white font-semibold",children:H(V.current_price)})]}),s.jsxs("div",{className:"col-span-2",children:[s.jsx("p",{className:"text-slate-400",children:"Market Value"}),s.jsx("p",{className:"text-white font-semibold",children:H(V.market_value)})]})]})]},V.symbol)})}),s.jsx("div",{className:"hidden md:block overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-700",children:[s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Symbol"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Quantity"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Avg Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Current Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Market Value"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L %"})]})}),s.jsx("tbody",{children:f.map(V=>{const Y=parseFloat(V.unrealized_pl),le=parseFloat(V.unrealized_plpc)*100;return s.jsxs("tr",{className:"border-b border-slate-700/50",children:[s.jsx("td",{className:"py-3 px-4 text-white font-medium",children:V.symbol}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:V.qty}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:H(V.avg_entry_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:H(V.current_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:H(V.market_value)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${Y>=0?"text-green-400":"text-red-400"}`,children:H(V.unrealized_pl)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${le>=0?"text-green-400":"text-red-400"}`,children:P(le)})]},V.symbol)})})]})})]})]})]})})},Ig=()=>s.jsxs(Rg,{basename:"/portfolio_website",children:[s.jsx(Bg,{}),s.jsx("div",{className:"pt-16",children:s.jsxs(ng,{children:[s.jsx(la,{path:"/",element:s.jsx(qg,{})}),s.jsx(la,{path:"/about",element:s.jsx(Yg,{})}),s.jsx(la,{path:"/projects",element:s.jsx(Gg,{})}),s.jsx(la,{path:"/projects/project-demo/:projectId",element:s.jsx(Jg,{})}),s.jsx(la,{path:"/trading",element:s.jsx($g,{})}),s.jsx(la,{path:"/contact",element:s.jsx(Pg,{})}),s.jsx(la,{path:"/resume",element:s.jsx(Wg,{})}),s.jsx(la,{path:"*",element:s.jsx(lg,{to:"/",replace:!0})})]})})]});sh.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(Ig,{})}));
