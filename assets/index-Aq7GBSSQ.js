(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var Bo={exports:{}},Pn={};var em;function P_(){if(em)return Pn;em=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,h){var x=null;if(h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),"key"in m){h={};for(var j in m)j!=="key"&&(h[j]=m[j])}else h=m;return m=h.ref,{$$typeof:o,type:u,key:x,ref:m!==void 0?m:null,props:h}}return Pn.Fragment=d,Pn.jsx=f,Pn.jsxs=f,Pn}var tm;function W_(){return tm||(tm=1,Bo.exports=P_()),Bo.exports}var s=W_(),Yo={exports:{}},ae={};var am;function $_(){if(am)return ae;am=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.iterator;function F(y){return y===null||typeof y!="object"?null:(y=k&&y[k]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,X={};function K(y,O,Y){this.props=y,this.context=O,this.refs=X,this.updater=Y||H}K.prototype.isReactComponent={},K.prototype.setState=function(y,O){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,O,"setState")},K.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function G(){}G.prototype=K.prototype;function J(y,O,Y){this.props=y,this.context=O,this.refs=X,this.updater=Y||H}var ye=J.prototype=new G;ye.constructor=J,q(ye,K.prototype),ye.isPureReactComponent=!0;var de=Array.isArray;function Se(){}var ee={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Le(y,O,Y){var V=Y.ref;return{$$typeof:o,type:y,key:O,ref:V!==void 0?V:null,props:Y}}function Qe(y,O){return Le(y.type,O,y.props)}function ut(y){return typeof y=="object"&&y!==null&&y.$$typeof===o}function He(y){var O={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return O[Y]})}var Lt=/\/+/g;function rt(y,O){return typeof y=="object"&&y!==null&&y.key!=null?He(""+y.key):O.toString(36)}function ct(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Se,Se):(y.status="pending",y.then(function(O){y.status==="pending"&&(y.status="fulfilled",y.value=O)},function(O){y.status==="pending"&&(y.status="rejected",y.reason=O)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function R(y,O,Y,V,I){var ie=typeof y;(ie==="undefined"||ie==="boolean")&&(y=null);var pe=!1;if(y===null)pe=!0;else switch(ie){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(y.$$typeof){case o:case d:pe=!0;break;case D:return pe=y._init,R(pe(y._payload),O,Y,V,I)}}if(pe)return I=I(y),pe=V===""?"."+rt(y,0):V,de(I)?(Y="",pe!=null&&(Y=pe.replace(Lt,"$&/")+"/"),R(I,O,Y,"",function(ha){return ha})):I!=null&&(ut(I)&&(I=Qe(I,Y+(I.key==null||y&&y.key===I.key?"":(""+I.key).replace(Lt,"$&/")+"/")+pe)),O.push(I)),1;pe=0;var Je=V===""?".":V+":";if(de(y))for(var De=0;De<y.length;De++)V=y[De],ie=Je+rt(V,De),pe+=R(V,O,Y,ie,I);else if(De=F(y),typeof De=="function")for(y=De.call(y),De=0;!(V=y.next()).done;)V=V.value,ie=Je+rt(V,De++),pe+=R(V,O,Y,ie,I);else if(ie==="object"){if(typeof y.then=="function")return R(ct(y),O,Y,V,I);throw O=String(y),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return pe}function B(y,O,Y){if(y==null)return y;var V=[],I=0;return R(y,V,"","",function(ie){return O.call(Y,ie,I++)}),V}function W(y){if(y._status===-1){var O=y._result;O=O(),O.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=O)}if(y._status===1)return y._result.default;throw y._result}var me=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},_e={map:B,forEach:function(y,O,Y){B(y,function(){O.apply(this,arguments)},Y)},count:function(y){var O=0;return B(y,function(){O++}),O},toArray:function(y){return B(y,function(O){return O})||[]},only:function(y){if(!ut(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return ae.Activity=N,ae.Children=_e,ae.Component=K,ae.Fragment=f,ae.Profiler=m,ae.PureComponent=J,ae.StrictMode=u,ae.Suspense=v,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ae.__COMPILER_RUNTIME={__proto__:null,c:function(y){return ee.H.useMemoCache(y)}},ae.cache=function(y){return function(){return y.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(y,O,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var V=q({},y.props),I=y.key;if(O!=null)for(ie in O.key!==void 0&&(I=""+O.key),O)!we.call(O,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&O.ref===void 0||(V[ie]=O[ie]);var ie=arguments.length-2;if(ie===1)V.children=Y;else if(1<ie){for(var pe=Array(ie),Je=0;Je<ie;Je++)pe[Je]=arguments[Je+2];V.children=pe}return Le(y.type,I,V)},ae.createContext=function(y){return y={$$typeof:x,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},ae.createElement=function(y,O,Y){var V,I={},ie=null;if(O!=null)for(V in O.key!==void 0&&(ie=""+O.key),O)we.call(O,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=O[V]);var pe=arguments.length-2;if(pe===1)I.children=Y;else if(1<pe){for(var Je=Array(pe),De=0;De<pe;De++)Je[De]=arguments[De+2];I.children=Je}if(y&&y.defaultProps)for(V in pe=y.defaultProps,pe)I[V]===void 0&&(I[V]=pe[V]);return Le(y,ie,I)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(y){return{$$typeof:j,render:y}},ae.isValidElement=ut,ae.lazy=function(y){return{$$typeof:D,_payload:{_status:-1,_result:y},_init:W}},ae.memo=function(y,O){return{$$typeof:_,type:y,compare:O===void 0?null:O}},ae.startTransition=function(y){var O=ee.T,Y={};ee.T=Y;try{var V=y(),I=ee.S;I!==null&&I(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Se,me)}catch(ie){me(ie)}finally{O!==null&&Y.types!==null&&(O.types=Y.types),ee.T=O}},ae.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ae.use=function(y){return ee.H.use(y)},ae.useActionState=function(y,O,Y){return ee.H.useActionState(y,O,Y)},ae.useCallback=function(y,O){return ee.H.useCallback(y,O)},ae.useContext=function(y){return ee.H.useContext(y)},ae.useDebugValue=function(){},ae.useDeferredValue=function(y,O){return ee.H.useDeferredValue(y,O)},ae.useEffect=function(y,O){return ee.H.useEffect(y,O)},ae.useEffectEvent=function(y){return ee.H.useEffectEvent(y)},ae.useId=function(){return ee.H.useId()},ae.useImperativeHandle=function(y,O,Y){return ee.H.useImperativeHandle(y,O,Y)},ae.useInsertionEffect=function(y,O){return ee.H.useInsertionEffect(y,O)},ae.useLayoutEffect=function(y,O){return ee.H.useLayoutEffect(y,O)},ae.useMemo=function(y,O){return ee.H.useMemo(y,O)},ae.useOptimistic=function(y,O){return ee.H.useOptimistic(y,O)},ae.useReducer=function(y,O,Y){return ee.H.useReducer(y,O,Y)},ae.useRef=function(y){return ee.H.useRef(y)},ae.useState=function(y){return ee.H.useState(y)},ae.useSyncExternalStore=function(y,O,Y){return ee.H.useSyncExternalStore(y,O,Y)},ae.useTransition=function(){return ee.H.useTransition()},ae.version="19.2.3",ae}var lm;function Wo(){return lm||(lm=1,Yo.exports=$_()),Yo.exports}var E=Wo(),Go={exports:{}},Wn={},Vo={exports:{}},Xo={};var nm;function I_(){return nm||(nm=1,(function(o){function d(R,B){var W=R.length;R.push(B);e:for(;0<W;){var me=W-1>>>1,_e=R[me];if(0<m(_e,B))R[me]=B,R[W]=_e,W=me;else break e}}function f(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var B=R[0],W=R.pop();if(W!==B){R[0]=W;e:for(var me=0,_e=R.length,y=_e>>>1;me<y;){var O=2*(me+1)-1,Y=R[O],V=O+1,I=R[V];if(0>m(Y,W))V<_e&&0>m(I,Y)?(R[me]=I,R[V]=W,me=V):(R[me]=Y,R[O]=W,me=O);else if(V<_e&&0>m(I,W))R[me]=I,R[V]=W,me=V;else break e}}return B}function m(R,B){var W=R.sortIndex-B.sortIndex;return W!==0?W:R.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var x=Date,j=x.now();o.unstable_now=function(){return x.now()-j}}var v=[],_=[],D=1,N=null,k=3,F=!1,H=!1,q=!1,X=!1,K=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ye(R){for(var B=f(_);B!==null;){if(B.callback===null)u(_);else if(B.startTime<=R)u(_),B.sortIndex=B.expirationTime,d(v,B);else break;B=f(_)}}function de(R){if(q=!1,ye(R),!H)if(f(v)!==null)H=!0,Se||(Se=!0,He());else{var B=f(_);B!==null&&ct(de,B.startTime-R)}}var Se=!1,ee=-1,we=5,Le=-1;function Qe(){return X?!0:!(o.unstable_now()-Le<we)}function ut(){if(X=!1,Se){var R=o.unstable_now();Le=R;var B=!0;try{e:{H=!1,q&&(q=!1,G(ee),ee=-1),F=!0;var W=k;try{t:{for(ye(R),N=f(v);N!==null&&!(N.expirationTime>R&&Qe());){var me=N.callback;if(typeof me=="function"){N.callback=null,k=N.priorityLevel;var _e=me(N.expirationTime<=R);if(R=o.unstable_now(),typeof _e=="function"){N.callback=_e,ye(R),B=!0;break t}N===f(v)&&u(v),ye(R)}else u(v);N=f(v)}if(N!==null)B=!0;else{var y=f(_);y!==null&&ct(de,y.startTime-R),B=!1}}break e}finally{N=null,k=W,F=!1}B=void 0}}finally{B?He():Se=!1}}}var He;if(typeof J=="function")He=function(){J(ut)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,rt=Lt.port2;Lt.port1.onmessage=ut,He=function(){rt.postMessage(null)}}else He=function(){K(ut,0)};function ct(R,B){ee=K(function(){R(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_next=function(R){switch(k){case 1:case 2:case 3:var B=3;break;default:B=k}var W=k;k=B;try{return R()}finally{k=W}},o.unstable_requestPaint=function(){X=!0},o.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=k;k=R;try{return B()}finally{k=W}},o.unstable_scheduleCallback=function(R,B,W){var me=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?me+W:me):W=me,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,R={id:D++,callback:B,priorityLevel:R,startTime:W,expirationTime:_e,sortIndex:-1},W>me?(R.sortIndex=W,d(_,R),f(v)===null&&R===f(_)&&(q?(G(ee),ee=-1):q=!0,ct(de,W-me))):(R.sortIndex=_e,d(v,R),H||F||(H=!0,Se||(Se=!0,He()))),R},o.unstable_shouldYield=Qe,o.unstable_wrapCallback=function(R){var B=k;return function(){var W=k;k=B;try{return R.apply(this,arguments)}finally{k=W}}}})(Xo)),Xo}var im;function eh(){return im||(im=1,Vo.exports=I_()),Vo.exports}var Qo={exports:{}},st={};var sm;function th(){if(sm)return st;sm=1;var o=Wo();function d(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)_+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(v,_,D){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:N==null?null:""+N,children:v,containerInfo:_,implementation:D}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,st.createPortal=function(v,_){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(d(299));return h(v,_,null,D)},st.flushSync=function(v){var _=x.T,D=u.p;try{if(x.T=null,u.p=2,v)return v()}finally{x.T=_,u.p=D,u.d.f()}},st.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,u.d.C(v,_))},st.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},st.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var D=_.as,N=j(D,_.crossOrigin),k=typeof _.integrity=="string"?_.integrity:void 0,F=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;D==="style"?u.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:N,integrity:k,fetchPriority:F}):D==="script"&&u.d.X(v,{crossOrigin:N,integrity:k,fetchPriority:F,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},st.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var D=j(_.as,_.crossOrigin);u.d.M(v,{crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&u.d.M(v)},st.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var D=_.as,N=j(D,_.crossOrigin);u.d.L(v,D,{crossOrigin:N,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},st.preloadModule=function(v,_){if(typeof v=="string")if(_){var D=j(_.as,_.crossOrigin);u.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else u.d.m(v)},st.requestFormReset=function(v){u.d.r(v)},st.unstable_batchedUpdates=function(v,_){return v(_)},st.useFormState=function(v,_,D){return x.H.useFormState(v,_,D)},st.useFormStatus=function(){return x.H.useHostTransitionStatus()},st.version="19.2.3",st}var rm;function ah(){if(rm)return Qo.exports;rm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Qo.exports=th(),Qo.exports}var om;function lh(){if(om)return Wn;om=1;var o=eh(),d=Wo(),f=ah();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(u(188))}function _(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),e;if(i===l)return v(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,c=n.child;c;){if(c===a){r=!0,a=n,l=i;break}if(c===l){r=!0,l=n,a=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===a){r=!0,a=i,l=n;break}if(c===l){r=!0,l=i,a=n;break}c=c.sibling}if(!r)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,k=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function He(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Profiler";case X:return"StrictMode";case de:return"Suspense";case Se:return"SuspenseList";case Le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case J:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var ct=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function y(e){return{current:e}}function O(e){0>_e||(e.current=me[_e],me[_e]=null,_e--)}function Y(e,t){_e++,me[_e]=e.current,e.current=t}var V=y(null),I=y(null),ie=y(null),pe=y(null);function Je(e,t){switch(Y(ie,t),Y(I,e),Y(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wf(t),e=Tf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(V),Y(V,e)}function De(){O(V),O(I),O(ie)}function ha(e){e.memoizedState!==null&&Y(pe,e);var t=V.current,a=Tf(t,e.type);t!==a&&(Y(I,e),Y(V,a))}function Ga(e){I.current===e&&(O(V),O(I)),pe.current===e&&(O(pe),Fn._currentValue=W)}var ol,$l;function Zt(e){if(ol===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||"",$l=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ol+e+$l}var Pe=!1;function ul(e,t){if(!e||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var T=A}Reflect.construct(e,[],z)}else{try{z.call()}catch(A){T=A}e.call(z.prototype)}}else{try{throw Error()}catch(A){T=A}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var p=r.split(`
`),w=c.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===w.length)for(l=p.length-1,n=w.length-1;1<=l&&0<=n&&p[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==w[n]){var C=`
`+p[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=n);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function cl(e,t){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==t&&t!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ul(e.type,!1);case 11:return ul(e.type.render,!1);case 1:return ul(e.type,!0);case 31:return Zt("Activity");default:return""}}function Il(e){try{var t="",a=null;do t+=cl(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var dl=Object.prototype.hasOwnProperty,en=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,Es=o.unstable_shouldYield,L=o.unstable_requestPaint,U=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,te=o.unstable_ImmediatePriority,it=o.unstable_UserBlockingPriority,Be=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,Kt=o.unstable_IdlePriority,an=o.log,ln=o.unstable_setDisableYieldValue,Jt=null,Ie=null;function Fe(e){if(typeof an=="function"&&ln(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Jt,e)}catch{}}var Ze=Math.clz32?Math.clz32:Lm,Ns=Math.log,Um=Math.LN2;function Lm(e){return e>>>=0,e===0?32:31-(Ns(e)/Um|0)|0}var li=256,ni=262144,ii=4194304;function Va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function si(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Va(l):(r&=c,r!==0?n=Va(r):a||(a=c&~e,a!==0&&(n=Va(a))))):(c=l&~i,c!==0?n=Va(c):r!==0?n=Va(r):a||(a=l&~e,a!==0&&(n=Va(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lu(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function As(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function km(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var C=31-Ze(a),z=1<<C;c[C]=0,p[C]=-1;var T=w[C];if(T!==null)for(w[C]=null,C=0;C<T.length;C++){var A=T[C];A!==null&&(A.lane&=-536870913)}a&=~z}l!==0&&nu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function nu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ze(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function iu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ze(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function su(e,t){var a=t&-t;return a=(a&42)!==0?1:js(a),(a&(e.suspendedLanes|t))!==0?0:a}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ru(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Zf(e.type))}function ou(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var ga=Math.random().toString(36).slice(2),et="__reactFiber$"+ga,dt="__reactProps$"+ga,fl="__reactContainer$"+ga,Rs="__reactEvents$"+ga,qm="__reactListeners$"+ga,Bm="__reactHandles$"+ga,uu="__reactResources$"+ga,rn="__reactMarker$"+ga;function Cs(e){delete e[et],delete e[dt],delete e[Rs],delete e[qm],delete e[Bm]}function ml(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[fl]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[et])return a;e=Cf(e)}return t}e=a,a=e.parentNode}return null}function pl(e){if(e=e[et]||e[fl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function on(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function _l(e){var t=e[uu];return t||(t=e[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[rn]=!0}var cu=new Set,du={};function Xa(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(du[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var Ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fu={},mu={};function Gm(e){return dl.call(mu,e)?!0:dl.call(fu,e)?!1:Ym.test(e)?mu[e]=!0:(fu[e]=!0,!1)}function ri(e,t,a){if(Gm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function oi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){if(!e._valueTracker){var t=pu(e)?"checked":"value";e._valueTracker=Vm(e,t,""+e[t])}}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=pu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xm=/[\n"\\]/g;function Nt(e){return e.replace(Xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Os(e,t,a,l,n,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?zs(e,r,Et(t)):a!=null?zs(e,r,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Et(c):e.removeAttribute("name")}function hu(e,t,a,l,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ms(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ms(e)}function zs(e,t,a){t==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function gu(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function yu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(ct(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ms(e)}function yl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function xu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&vu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&vu(e,i,t[i])}function Us(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(e){return Zm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var Ls=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,xl=null;function bu(e){var t=pl(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Os(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[dt]||null;if(!n)throw Error(u(90));Os(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&_u(l)}break e;case"textarea":gu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var ks=!1;function Su(e,t,a){if(ks)return e(t,a);ks=!0;try{var l=e(t);return l}finally{if(ks=!1,(vl!==null||xl!==null)&&(Wi(),vl&&(t=vl,e=xl,xl=vl=null,bu(t),e)))for(t=0;t<e.length;t++)bu(e[t])}}function un(e,t){var a=e.stateNode;if(a===null)return null;var l=a[dt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=!1;if($t)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){qs=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{qs=!1}var ya=null,Bs=null,di=null;function wu(){if(di)return di;var e,t=Bs,a=t.length,l,n="value"in ya?ya.value:ya.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return di=n.slice(e,1<l?1-l:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function Tu(){return!1}function ft(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mi:Tu,this.isPropagationStopped=Tu,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=ft(Qa),dn=N({},Qa,{view:0,detail:0}),Km=ft(dn),Ys,Gs,fn,_i=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Ys=e.screenX-fn.screenX,Gs=e.screenY-fn.screenY):Gs=Ys=0,fn=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Eu=ft(_i),Jm=N({},_i,{dataTransfer:0}),Pm=ft(Jm),Wm=N({},dn,{relatedTarget:0}),Vs=ft(Wm),$m=N({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=ft($m),ep=N({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=ft(ep),ap=N({},Qa,{data:0}),Nu=ft(ap),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function Xs(){return sp}var rp=N({},dn,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),op=ft(rp),up=N({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=ft(up),cp=N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),dp=ft(cp),fp=N({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=ft(fp),pp=N({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=ft(pp),hp=N({},Qa,{newState:0,oldState:0}),gp=ft(hp),yp=[9,13,27,32],Qs=$t&&"CompositionEvent"in window,mn=null;$t&&"documentMode"in document&&(mn=document.documentMode);var vp=$t&&"TextEvent"in window&&!mn,ju=$t&&(!Qs||mn&&8<mn&&11>=mn),Du=" ",Ru=!1;function Cu(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function xp(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Ru=!0,Du);case"textInput":return e=t.data,e===Du&&Ru?null:e;default:return null}}function bp(e,t){if(bl)return e==="compositionend"||!Qs&&Cu(e,t)?(e=wu(),di=Bs=ya=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function zu(e,t,a,l){vl?xl?xl.push(l):xl=[l]:vl=l,t=ns(t,"onChange"),0<t.length&&(a=new pi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var pn=null,_n=null;function wp(e){gf(e,0)}function hi(e){var t=on(e);if(_u(t))return e}function Uu(e,t){if(e==="change")return t}var Lu=!1;if($t){var Fs;if($t){var Zs="oninput"in document;if(!Zs){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),Zs=typeof Hu.oninput=="function"}Fs=Zs}else Fs=!1;Lu=Fs&&(!document.documentMode||9<document.documentMode)}function ku(){pn&&(pn.detachEvent("onpropertychange",qu),_n=pn=null)}function qu(e){if(e.propertyName==="value"&&hi(_n)){var t=[];zu(t,_n,e,Hs(e)),Su(wp,t)}}function Tp(e,t,a){e==="focusin"?(ku(),pn=t,_n=a,pn.attachEvent("onpropertychange",qu)):e==="focusout"&&ku()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(_n)}function Np(e,t){if(e==="click")return hi(t)}function Ap(e,t){if(e==="input"||e==="change")return hi(t)}function jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:jp;function hn(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!dl.call(t,n)||!yt(e[n],t[n]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yu(e,t){var a=Bu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bu(a)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ui(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ui(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dp=$t&&"documentMode"in document&&11>=document.documentMode,Sl=null,Js=null,gn=null,Ps=!1;function Xu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ps||Sl==null||Sl!==ui(l)||(l=Sl,"selectionStart"in l&&Ks(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gn&&hn(gn,l)||(gn=l,l=ns(Js,"onSelect"),0<l.length&&(t=new pi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Sl)))}function Fa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var wl={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Ws={},Qu={};$t&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete wl.animationend.animation,delete wl.animationiteration.animation,delete wl.animationstart.animation),"TransitionEvent"in window||delete wl.transitionend.transition);function Za(e){if(Ws[e])return Ws[e];if(!wl[e])return e;var t=wl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Qu)return Ws[e]=t[a];return e}var Fu=Za("animationend"),Zu=Za("animationiteration"),Ku=Za("animationstart"),Rp=Za("transitionrun"),Cp=Za("transitionstart"),Mp=Za("transitioncancel"),Ju=Za("transitionend"),Pu=new Map,$s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$s.push("scrollEnd");function kt(e,t){Pu.set(e,t),Xa(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],Tl=0,Is=0;function yi(){for(var e=Tl,t=Is=Tl=0;t<e;){var a=At[t];At[t++]=null;var l=At[t];At[t++]=null;var n=At[t];At[t++]=null;var i=At[t];if(At[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Wu(a,n,i)}}function vi(e,t,a,l){At[Tl++]=e,At[Tl++]=t,At[Tl++]=a,At[Tl++]=l,Is|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function er(e,t,a,l){return vi(e,t,a,l),xi(e)}function Ka(e,t){return vi(e,null,null,t),xi(e)}function Wu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ze(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function xi(e){if(50<qn)throw qn=0,uo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var El={};function Op(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,l){return new Op(e,t,a,l)}function tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $u(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")tr(e)&&(r=1);else if(typeof e=="string")r=k_(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Le:return e=vt(31,a,t,n),e.elementType=Le,e.lanes=i,e;case q:return Ja(a.children,n,i,t);case X:r=8,n|=24;break;case K:return e=vt(12,a,t,n|2),e.elementType=K,e.lanes=i,e;case de:return e=vt(13,a,t,n),e.elementType=de,e.lanes=i,e;case Se:return e=vt(19,a,t,n),e.elementType=Se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:r=10;break e;case G:r=9;break e;case ye:r=11;break e;case ee:r=14;break e;case we:r=16,l=null;break e}r=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=vt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ja(e,t,a,l){return e=vt(7,e,l,t),e.lanes=a,e}function ar(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function Iu(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function lr(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ec=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=ec.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Il(t)},ec.set(e,t),t)}return{value:e,source:t,stack:Il(t)}}var Nl=[],Al=0,Si=null,yn=0,Dt=[],Rt=0,va=null,Yt=1,Gt="";function ea(e,t){Nl[Al++]=yn,Nl[Al++]=Si,Si=e,yn=t}function tc(e,t,a){Dt[Rt++]=Yt,Dt[Rt++]=Gt,Dt[Rt++]=va,va=e;var l=Yt;e=Gt;var n=32-Ze(l)-1;l&=~(1<<n),a+=1;var i=32-Ze(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Yt=1<<32-Ze(t)+n|a<<n|l,Gt=i+e}else Yt=1<<i|a<<n|l,Gt=e}function nr(e){e.return!==null&&(ea(e,1),tc(e,1,0))}function ir(e){for(;e===Si;)Si=Nl[--Al],Nl[Al]=null,yn=Nl[--Al],Nl[Al]=null;for(;e===va;)va=Dt[--Rt],Dt[Rt]=null,Gt=Dt[--Rt],Dt[Rt]=null,Yt=Dt[--Rt],Dt[Rt]=null}function ac(e,t){Dt[Rt++]=Yt,Dt[Rt++]=Gt,Dt[Rt++]=va,Yt=t.id,Gt=t.overflow,va=e}var tt=null,Re=null,fe=!1,xa=null,Ct=!1,sr=Error(u(519));function ba(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(jt(t,e)),sr}function lc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[et]=e,t[dt]=l,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Yn.length;a++)oe(Yn[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),hu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),yu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||bf(t.textContent,a)?(l.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),l.onScroll!=null&&oe("scroll",t),l.onScrollEnd!=null&&oe("scrollend",t),l.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||ba(e,!0)}function nc(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:tt=tt.return}}function jl(e){if(e!==tt)return!1;if(!fe)return nc(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Eo(e.type,e.memoizedProps)),a=!a),a&&Re&&ba(e),nc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Rf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Re=Rf(e)}else t===27?(t=Re,Ua(e.type)?(e=Ro,Ro=null,Re=e):Re=t):Re=tt?Ot(e.stateNode.nextSibling):null;return!0}function Pa(){Re=tt=null,fe=!1}function rr(){var e=xa;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),xa=null),e}function vn(e){xa===null?xa=[e]:xa.push(e)}var or=y(null),Wa=null,ta=null;function Sa(e,t,a){Y(or,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=or.current,O(or)}function ur(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function cr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var p=0;p<t.length;p++)if(c.context===t[p]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),ur(i.return,a,e),l||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(u(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),ur(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Dl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=n.type;yt(n.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(n===pe.current){if(r=n.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Fn):e=[Fn])}n=n.return}e!==null&&cr(t,e,a,l),t.flags|=262144}function wi(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Wa=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return ic(Wa,e)}function Ti(e,t){return Wa===null&&$a(e),ic(e,t)}function ic(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(u(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var zp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Up=o.unstable_scheduleCallback,Lp=o.unstable_NormalPriority,Ye={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dr(){return{controller:new zp,data:new Map,refCount:0}}function xn(e){e.refCount--,e.refCount===0&&Up(Lp,function(){e.controller.abort()})}var bn=null,fr=0,Rl=0,Cl=null;function Hp(e,t){if(bn===null){var a=bn=[];fr=0,Rl=ho(),Cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return fr++,t.then(sc,sc),t}function sc(){if(--fr===0&&bn!==null){Cl!==null&&(Cl.status="fulfilled");var e=bn;bn=null,Rl=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var rc=R.S;R.S=function(e,t){Xd=U(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hp(e,t),rc!==null&&rc(e,t)};var Ia=y(null);function mr(){var e=Ia.current;return e!==null?e:Ae.pooledCache}function Ei(e,t){t===null?Y(Ia,Ia.current):Y(Ia,t.pool)}function oc(){var e=mr();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ml=Error(u(460)),pr=Error(u(474)),Ni=Error(u(542)),Ai={then:function(){}};function uc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Wt,Wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fc(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fc(e),e}throw tl=t,Ml}}function el(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(tl=a,Ml):a}}var tl=null;function dc(){if(tl===null)throw Error(u(459));var e=tl;return tl=null,e}function fc(e){if(e===Ml||e===Ni)throw Error(u(483))}var Ol=null,Sn=0;function ji(e){var t=Sn;return Sn+=1,Ol===null&&(Ol=[]),cc(Ol,e,t)}function wn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Di(e,t){throw t.$$typeof===k?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mc(e){function t(b,g){if(e){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=It(b,g),b.index=0,b.sibling=null,b}function i(b,g,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=67108866,g):S):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function c(b,g,S,M){return g===null||g.tag!==6?(g=ar(S,b.mode,M),g.return=b,g):(g=n(g,S),g.return=b,g)}function p(b,g,S,M){var P=S.type;return P===q?C(b,g,S.props.children,M,S.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===we&&el(P)===g.type)?(g=n(g,S.props),wn(g,S),g.return=b,g):(g=bi(S.type,S.key,S.props,null,b.mode,M),wn(g,S),g.return=b,g)}function w(b,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=lr(S,b.mode,M),g.return=b,g):(g=n(g,S.children||[]),g.return=b,g)}function C(b,g,S,M,P){return g===null||g.tag!==7?(g=Ja(S,b.mode,M,P),g.return=b,g):(g=n(g,S),g.return=b,g)}function z(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ar(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case F:return S=bi(g.type,g.key,g.props,null,b.mode,S),wn(S,g),S.return=b,S;case H:return g=lr(g,b.mode,S),g.return=b,g;case we:return g=el(g),z(b,g,S)}if(ct(g)||He(g))return g=Ja(g,b.mode,S,null),g.return=b,g;if(typeof g.then=="function")return z(b,ji(g),S);if(g.$$typeof===J)return z(b,Ti(b,g),S);Di(b,g)}return null}function T(b,g,S,M){var P=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return P!==null?null:c(b,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case F:return S.key===P?p(b,g,S,M):null;case H:return S.key===P?w(b,g,S,M):null;case we:return S=el(S),T(b,g,S,M)}if(ct(S)||He(S))return P!==null?null:C(b,g,S,M,null);if(typeof S.then=="function")return T(b,g,ji(S),M);if(S.$$typeof===J)return T(b,g,Ti(b,S),M);Di(b,S)}return null}function A(b,g,S,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(S)||null,c(g,b,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case F:return b=b.get(M.key===null?S:M.key)||null,p(g,b,M,P);case H:return b=b.get(M.key===null?S:M.key)||null,w(g,b,M,P);case we:return M=el(M),A(b,g,S,M,P)}if(ct(M)||He(M))return b=b.get(S)||null,C(g,b,M,P,null);if(typeof M.then=="function")return A(b,g,S,ji(M),P);if(M.$$typeof===J)return A(b,g,S,Ti(g,M),P);Di(g,M)}return null}function Q(b,g,S,M){for(var P=null,he=null,Z=g,ne=g=0,ce=null;Z!==null&&ne<S.length;ne++){Z.index>ne?(ce=Z,Z=null):ce=Z.sibling;var ge=T(b,Z,S[ne],M);if(ge===null){Z===null&&(Z=ce);break}e&&Z&&ge.alternate===null&&t(b,Z),g=i(ge,g,ne),he===null?P=ge:he.sibling=ge,he=ge,Z=ce}if(ne===S.length)return a(b,Z),fe&&ea(b,ne),P;if(Z===null){for(;ne<S.length;ne++)Z=z(b,S[ne],M),Z!==null&&(g=i(Z,g,ne),he===null?P=Z:he.sibling=Z,he=Z);return fe&&ea(b,ne),P}for(Z=l(Z);ne<S.length;ne++)ce=A(Z,b,ne,S[ne],M),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?ne:ce.key),g=i(ce,g,ne),he===null?P=ce:he.sibling=ce,he=ce);return e&&Z.forEach(function(Ba){return t(b,Ba)}),fe&&ea(b,ne),P}function $(b,g,S,M){if(S==null)throw Error(u(151));for(var P=null,he=null,Z=g,ne=g=0,ce=null,ge=S.next();Z!==null&&!ge.done;ne++,ge=S.next()){Z.index>ne?(ce=Z,Z=null):ce=Z.sibling;var Ba=T(b,Z,ge.value,M);if(Ba===null){Z===null&&(Z=ce);break}e&&Z&&Ba.alternate===null&&t(b,Z),g=i(Ba,g,ne),he===null?P=Ba:he.sibling=Ba,he=Ba,Z=ce}if(ge.done)return a(b,Z),fe&&ea(b,ne),P;if(Z===null){for(;!ge.done;ne++,ge=S.next())ge=z(b,ge.value,M),ge!==null&&(g=i(ge,g,ne),he===null?P=ge:he.sibling=ge,he=ge);return fe&&ea(b,ne),P}for(Z=l(Z);!ge.done;ne++,ge=S.next())ge=A(Z,b,ne,ge.value,M),ge!==null&&(e&&ge.alternate!==null&&Z.delete(ge.key===null?ne:ge.key),g=i(ge,g,ne),he===null?P=ge:he.sibling=ge,he=ge);return e&&Z.forEach(function(J_){return t(b,J_)}),fe&&ea(b,ne),P}function Ne(b,g,S,M){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case F:e:{for(var P=S.key;g!==null;){if(g.key===P){if(P=S.type,P===q){if(g.tag===7){a(b,g.sibling),M=n(g,S.props.children),M.return=b,b=M;break e}}else if(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===we&&el(P)===g.type){a(b,g.sibling),M=n(g,S.props),wn(M,S),M.return=b,b=M;break e}a(b,g);break}else t(b,g);g=g.sibling}S.type===q?(M=Ja(S.props.children,b.mode,M,S.key),M.return=b,b=M):(M=bi(S.type,S.key,S.props,null,b.mode,M),wn(M,S),M.return=b,b=M)}return r(b);case H:e:{for(P=S.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(b,g.sibling),M=n(g,S.children||[]),M.return=b,b=M;break e}else{a(b,g);break}else t(b,g);g=g.sibling}M=lr(S,b.mode,M),M.return=b,b=M}return r(b);case we:return S=el(S),Ne(b,g,S,M)}if(ct(S))return Q(b,g,S,M);if(He(S)){if(P=He(S),typeof P!="function")throw Error(u(150));return S=P.call(S),$(b,g,S,M)}if(typeof S.then=="function")return Ne(b,g,ji(S),M);if(S.$$typeof===J)return Ne(b,g,Ti(b,S),M);Di(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(b,g.sibling),M=n(g,S),M.return=b,b=M):(a(b,g),M=ar(S,b.mode,M),M.return=b,b=M),r(b)):a(b,g)}return function(b,g,S,M){try{Sn=0;var P=Ne(b,g,S,M);return Ol=null,P}catch(Z){if(Z===Ml||Z===Ni)throw Z;var he=vt(29,Z,null,b.mode);return he.lanes=M,he.return=b,he}}}var al=mc(!0),pc=mc(!1),wa=!1;function _r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=xi(e),Wu(e,null,a),t}return vi(e,l,t,a),xi(e)}function Tn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,iu(e,a)}}function gr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var yr=!1;function En(){if(yr){var e=Cl;if(e!==null)throw e}}function Nn(e,t,a,l){yr=!1;var n=e.updateQueue;wa=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var p=c,w=p.next;p.next=null,r===null?i=w:r.next=w,r=p;var C=e.alternate;C!==null&&(C=C.updateQueue,c=C.lastBaseUpdate,c!==r&&(c===null?C.firstBaseUpdate=w:c.next=w,C.lastBaseUpdate=p))}if(i!==null){var z=n.baseState;r=0,C=w=p=null,c=i;do{var T=c.lane&-536870913,A=T!==c.lane;if(A?(ue&T)===T:(l&T)===T){T!==0&&T===Rl&&(yr=!0),C!==null&&(C=C.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,$=c;T=t;var Ne=a;switch($.tag){case 1:if(Q=$.payload,typeof Q=="function"){z=Q.call(Ne,z,T);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=$.payload,T=typeof Q=="function"?Q.call(Ne,z,T):Q,T==null)break e;z=N({},z,T);break e;case 2:wa=!0}}T=c.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[T]:A.push(T))}else A={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},C===null?(w=C=A,p=z):C=C.next=A,r|=T;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;A=c,c=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);C===null&&(p=z),n.baseState=p,n.firstBaseUpdate=w,n.lastBaseUpdate=C,i===null&&(n.shared.lanes=0),Ra|=r,e.lanes=r,e.memoizedState=z}}function _c(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function hc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_c(a[e],t)}var zl=y(null),Ri=y(0);function gc(e,t){e=da,Y(Ri,e),Y(zl,t),da=e|t.baseLanes}function vr(){Y(Ri,da),Y(zl,zl.current)}function xr(){da=Ri.current,O(zl),O(Ri)}var xt=y(null),Mt=null;function Na(e){var t=e.alternate;Y(ke,ke.current&1),Y(xt,e),Mt===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(Mt=e)}function br(e){Y(ke,ke.current),Y(xt,e),Mt===null&&(Mt=e)}function yc(e){e.tag===22?(Y(ke,ke.current),Y(xt,e),Mt===null&&(Mt=e)):Aa()}function Aa(){Y(ke,ke.current),Y(xt,xt.current)}function bt(e){O(xt),Mt===e&&(Mt=null),O(ke)}var ke=y(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jo(a)||Do(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,le=null,Te=null,Ge=null,Mi=!1,Ul=!1,ll=!1,Oi=0,An=0,Ll=null,qp=0;function ze(){throw Error(u(321))}function Sr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function wr(e,t,a,l,n,i){return la=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?td:kr,ll=!1,i=a(l,n),ll=!1,Ul&&(i=xc(t,a,l,n)),vc(e),i}function vc(e){R.H=Rn;var t=Te!==null&&Te.next!==null;if(la=0,Ge=Te=le=null,Mi=!1,An=0,Ll=null,t)throw Error(u(300));e===null||Ve||(e=e.dependencies,e!==null&&wi(e)&&(Ve=!0))}function xc(e,t,a,l){le=e;var n=0;do{if(Ul&&(Ll=null),An=0,Ul=!1,25<=n)throw Error(u(301));if(n+=1,Ge=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=ad,i=t(a,l)}while(Ul);return i}function Bp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?jn(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(le.flags|=1024),t}function Tr(){var e=Oi!==0;return Oi=0,e}function Er(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Nr(e){if(Mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mi=!1}la=0,Ge=Te=le=null,Ul=!1,An=Oi=0,Ll=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Te===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ge===null?le.memoizedState:Ge.next;if(t!==null)Ge=t,Te=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jn(e){var t=An;return An+=1,Ll===null&&(Ll=[]),e=cc(Ll,e,t),t=le,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?td:kr),e}function Ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jn(e);if(e.$$typeof===J)return at(e)}throw Error(u(438,String(e)))}function Ar(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zi(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qe;return t.index++,a}function na(e,t){return typeof t=="function"?t(e):t}function Li(e){var t=qe();return jr(t,Te,e)}function jr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=r=null,p=null,w=t,C=!1;do{var z=w.lane&-536870913;if(z!==w.lane?(ue&z)===z:(la&z)===z){var T=w.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),z===Rl&&(C=!0);else if((la&T)===T){w=w.next,T===Rl&&(C=!0);continue}else z={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=z,r=i):p=p.next=z,le.lanes|=T,Ra|=T;z=w.action,ll&&a(i,z),i=w.hasEagerState?w.eagerState:a(i,z)}else T={lane:z,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(c=p=T,r=i):p=p.next=T,le.lanes|=z,Ra|=z;w=w.next}while(w!==null&&w!==t);if(p===null?r=i:p.next=c,!yt(i,e.memoizedState)&&(Ve=!0,C&&(a=Cl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Dr(e){var t=qe(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);yt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function bc(e,t,a){var l=le,n=qe(),i=fe;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var r=!yt((Te||n).memoizedState,a);if(r&&(n.memoizedState=a,Ve=!0),n=n.queue,Mr(Tc.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Hl(9,{destroy:void 0},wc.bind(null,l,n,a,t),null),Ae===null)throw Error(u(349));i||(la&127)!==0||Sc(l,t,a)}return a}function Sc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=zi(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wc(e,t,a,l){t.value=a,t.getSnapshot=l,Ec(t)&&Nc(e)}function Tc(e,t,a){return a(function(){Ec(t)&&Nc(e)})}function Ec(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function Nc(e){var t=Ka(e,2);t!==null&&gt(t,e,2)}function Rr(e){var t=ot();if(typeof e=="function"){var a=e;if(e=a(),ll){Fe(!0);try{a()}finally{Fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function Ac(e,t,a,l){return e.baseState=a,jr(e,Te,typeof l=="function"?l:na)}function Yp(e,t,a,l,n){if(qi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,jc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function jc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,r={};R.T=r;try{var c=a(n,l),p=R.S;p!==null&&p(r,c),Dc(e,t,c)}catch(w){Cr(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),R.T=i}}else try{i=a(n,l),Dc(e,t,i)}catch(w){Cr(e,t,w)}}function Dc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Rc(e,t,l)},function(l){return Cr(e,t,l)}):Rc(e,t,a)}function Rc(e,t,a){t.status="fulfilled",t.value=a,Cc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,jc(e,a)))}function Cr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Cc(t),t=t.next;while(t!==l)}e.action=null}function Cc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Mc(e,t){return t}function Oc(e,t){if(fe){var a=Ae.formState;if(a!==null){e:{var l=le;if(fe){if(Re){t:{for(var n=Re,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Re=Ot(n.nextSibling),l=n.data==="F!";break e}}ba(l)}l=!1}l&&(t=a[0])}}return a=ot(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mc,lastRenderedState:t},a.queue=l,a=$c.bind(null,le,l),l.dispatch=a,l=Rr(!1),i=Hr.bind(null,le,!1,l.queue),l=ot(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Yp.bind(null,le,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function zc(e){var t=qe();return Uc(t,Te,e)}function Uc(e,t,a){if(t=jr(e,t,Mc)[0],e=Li(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=jn(t)}catch(r){throw r===Ml?Ni:r}else l=t;t=qe();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Hl(9,{destroy:void 0},Gp.bind(null,n,a),null)),[l,i,e]}function Gp(e,t){e.action=t}function Lc(e){var t=qe(),a=Te;if(a!==null)return Uc(t,a,e);qe(),t=t.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Hl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=zi(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Hc(){return qe().memoizedState}function Hi(e,t,a,l){var n=ot();le.flags|=e,n.memoizedState=Hl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ki(e,t,a,l){var n=qe();l=l===void 0?null:l;var i=n.memoizedState.inst;Te!==null&&l!==null&&Sr(l,Te.memoizedState.deps)?n.memoizedState=Hl(t,i,a,l):(le.flags|=e,n.memoizedState=Hl(1|t,i,a,l))}function kc(e,t){Hi(8390656,8,e,t)}function Mr(e,t){ki(2048,8,e,t)}function Vp(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=zi(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function qc(e){var t=qe().memoizedState;return Vp({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Bc(e,t){return ki(4,2,e,t)}function Yc(e,t){return ki(4,4,e,t)}function Gc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vc(e,t,a){a=a!=null?a.concat([e]):null,ki(4,4,Gc.bind(null,t,e),a)}function Or(){}function Xc(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Sr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Qc(e,t){var a=qe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Sr(t,l[1]))return l[0];if(l=e(),ll){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[l,t],l}function zr(e,t,a){return a===void 0||(la&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fd(),le.lanes|=e,Ra|=e,a)}function Fc(e,t,a,l){return yt(a,t)?a:zl.current!==null?(e=zr(e,a,l),yt(e,t)||(Ve=!0),e):(la&42)===0||(la&1073741824)!==0&&(ue&261930)===0?(Ve=!0,e.memoizedState=a):(e=Fd(),le.lanes|=e,Ra|=e,t)}function Zc(e,t,a,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;var r=R.T,c={};R.T=c,Hr(e,!1,t,a);try{var p=n(),w=R.S;if(w!==null&&w(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=kp(p,l);Dn(e,t,C,Tt(e))}else Dn(e,t,l,Tt(e))}catch(z){Dn(e,t,{then:function(){},status:"rejected",reason:z},Tt())}finally{B.p=i,r!==null&&c.types!==null&&(r.types=c.types),R.T=r}}function Xp(){}function Ur(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Kc(e).queue;Zc(e,n,t,W,a===null?Xp:function(){return Jc(e),a(l)})}function Kc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jc(e){var t=Kc(e);t.next===null&&(t=e.alternate.memoizedState),Dn(e,t.next.queue,{},Tt())}function Lr(){return at(Fn)}function Pc(){return qe().memoizedState}function Wc(){return qe().memoizedState}function Qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=Ta(a);var l=Ea(t,e,a);l!==null&&(gt(l,t,a),Tn(l,t,a)),t={cache:dr()},e.payload=t;return}t=t.return}}function Fp(e,t,a){var l=Tt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)?Ic(t,a):(a=er(e,t,a,l),a!==null&&(gt(a,e,l),ed(a,t,l)))}function $c(e,t,a){var l=Tt();Dn(e,t,a,l)}function Dn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Ic(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,a);if(n.hasEagerState=!0,n.eagerState=c,yt(c,r))return vi(e,t,n,0),Ae===null&&yi(),!1}catch{}if(a=er(e,t,n,l),a!==null)return gt(a,e,l),ed(a,t,l),!0}return!1}function Hr(e,t,a,l){if(l={lane:2,revertLane:ho(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(u(479))}else t=er(e,a,l,2),t!==null&&gt(t,e,2)}function qi(e){var t=e.alternate;return e===le||t!==null&&t===le}function Ic(e,t){Ul=Mi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ed(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,iu(e,a)}}var Rn={readContext:at,use:Ui,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};Rn.useEffectEvent=ze;var td={readContext:at,use:Ui,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:kc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Hi(4194308,4,Gc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var a=ot();t=t===void 0?null:t;var l=e();if(ll){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ot();if(a!==void 0){var n=a(t);if(ll){Fe(!0);try{a(t)}finally{Fe(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fp.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Rr(e);var t=e.queue,a=$c.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Or,useDeferredValue:function(e,t){var a=ot();return zr(a,e,t)},useTransition:function(){var e=Rr(!1);return e=Zc.bind(null,le,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=ot();if(fe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ae===null)throw Error(u(349));(ue&127)!==0||Sc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,kc(Tc.bind(null,l,i,e),[e]),l.flags|=2048,Hl(9,{destroy:void 0},wc.bind(null,l,i,a,t),null),a},useId:function(){var e=ot(),t=Ae.identifierPrefix;if(fe){var a=Gt,l=Yt;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Oi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lr,useFormState:Oc,useActionState:Oc,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hr.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ar,useCacheRefresh:function(){return ot().memoizedState=Qp.bind(null,le)},useEffectEvent:function(e){var t=ot(),a={impl:e};return t.memoizedState=a,function(){if((ve&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},kr={readContext:at,use:Ui,useCallback:Xc,useContext:at,useEffect:Mr,useImperativeHandle:Vc,useInsertionEffect:Bc,useLayoutEffect:Yc,useMemo:Qc,useReducer:Li,useRef:Hc,useState:function(){return Li(na)},useDebugValue:Or,useDeferredValue:function(e,t){var a=qe();return Fc(a,Te.memoizedState,e,t)},useTransition:function(){var e=Li(na)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:bc,useId:Pc,useHostTransitionStatus:Lr,useFormState:zc,useActionState:zc,useOptimistic:function(e,t){var a=qe();return Ac(a,Te,e,t)},useMemoCache:Ar,useCacheRefresh:Wc};kr.useEffectEvent=qc;var ad={readContext:at,use:Ui,useCallback:Xc,useContext:at,useEffect:Mr,useImperativeHandle:Vc,useInsertionEffect:Bc,useLayoutEffect:Yc,useMemo:Qc,useReducer:Dr,useRef:Hc,useState:function(){return Dr(na)},useDebugValue:Or,useDeferredValue:function(e,t){var a=qe();return Te===null?zr(a,e,t):Fc(a,Te.memoizedState,e,t)},useTransition:function(){var e=Dr(na)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:jn(e),t]},useSyncExternalStore:bc,useId:Pc,useHostTransitionStatus:Lr,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,t){var a=qe();return Te!==null?Ac(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:Wc};ad.useEffectEvent=qc;function qr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Br={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=Ta(l);n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(gt(t,e,l),Tn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Tt(),n=Ta(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ea(e,n,l),t!==null&&(gt(t,e,l),Tn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),l=Ta(a);l.tag=2,t!=null&&(l.callback=t),t=Ea(e,l,a),t!==null&&(gt(t,e,a),Tn(t,e,a))}};function ld(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!hn(a,l)||!hn(n,i):!0}function nd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Br.enqueueReplaceState(t,t.state,null)}function nl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function id(e){gi(e)}function sd(e){console.error(e)}function rd(e){gi(e)}function Bi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function od(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Yr(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Bi(e,t)},a}function ud(e){return e=Ta(e),e.tag=3,e}function cd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){od(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){od(t,a,l),typeof n!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Dl(t,a,n,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return Mt===null?$i():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ai?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),mo(e,l,n)),!1;case 22:return a.flags|=65536,l===Ai?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),mo(e,l,n)),!1}throw Error(u(435,a.tag))}return mo(e,l,n),$i(),!1}if(fe)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==sr&&(e=Error(u(422),{cause:l}),vn(jt(e,a)))):(l!==sr&&(t=Error(u(423),{cause:l}),vn(jt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=jt(l,a),n=Yr(e.stateNode,l,n),gr(e,n),Ue!==4&&(Ue=2)),!1;var i=Error(u(520),{cause:l});if(i=jt(i,a),kn===null?kn=[i]:kn.push(i),Ue!==4&&(Ue=2),t===null)return!0;l=jt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Yr(a.stateNode,l,e),gr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ca===null||!Ca.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ud(n),cd(n,e,a,l),gr(a,n),!1}a=a.return}while(a!==null);return!1}var Gr=Error(u(461)),Ve=!1;function lt(e,t,a,l){t.child=e===null?pc(t,null,a,l):al(t,e.child,a,l)}function dd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return $a(t),l=wr(e,t,a,r,i,n),c=Tr(),e!==null&&!Ve?(Er(e,t,n),ia(e,t,n)):(fe&&c&&nr(t),t.flags|=1,lt(e,t,l,n),t.child)}function fd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!tr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,md(e,t,i,l,n)):(e=bi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Pr(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:hn,a(r,l)&&e.ref===t.ref)return ia(e,t,n)}return t.flags|=1,e=It(i,l),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(hn(i,l)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=l=i,Pr(e,n))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,ia(e,t,n)}return Vr(e,t,a,l,n)}function pd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return _d(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ei(t,i!==null?i.cachePool:null),i!==null?gc(t,i):vr(),yc(t);else return l=t.lanes=536870912,_d(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ei(t,i.cachePool),gc(t,i),Aa(),t.memoizedState=null):(e!==null&&Ei(t,null),vr(),Aa());return lt(e,t,n,a),t.child}function Cn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _d(e,t,a,l,n){var i=mr();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ei(t,null),vr(),yc(t),e!==null&&Dl(e,t,l,!0),t.childLanes=n,null}function Yi(e,t){return t=Vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hd(e,t,a){return al(t,e.child,null,a),e=Yi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Kp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(l.mode==="hidden")return e=Yi(t,l),t.lanes=536870912,Cn(null,e);if(br(t),(e=Re)?(e=Df(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Yt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=Iu(e),a.return=t,t.child=a,tt=t,Re=null)):e=null,e===null)throw ba(t);return t.lanes=536870912,null}return Yi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(br(t),n)if(t.flags&256)t.flags&=-257,t=hd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ve||Dl(e,t,a,!1),n=(a&e.childLanes)!==0,Ve||n){if(l=Ae,l!==null&&(r=su(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Ka(e,r),gt(l,e,r),Gr;$i(),t=hd(e,t,a)}else e=i.treeContext,Re=Ot(r.nextSibling),tt=t,fe=!0,xa=null,Ct=!1,e!==null&&ac(t,e),t=Yi(t,l),t.flags|=4096;return t}return e=It(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vr(e,t,a,l,n){return $a(t),a=wr(e,t,a,l,void 0,n),l=Tr(),e!==null&&!Ve?(Er(e,t,n),ia(e,t,n)):(fe&&l&&nr(t),t.flags|=1,lt(e,t,a,n),t.child)}function gd(e,t,a,l,n,i){return $a(t),t.updateQueue=null,a=xc(t,l,a,n),vc(e),l=Tr(),e!==null&&!Ve?(Er(e,t,i),ia(e,t,i)):(fe&&l&&nr(t),t.flags|=1,lt(e,t,a,i),t.child)}function yd(e,t,a,l,n){if($a(t),t.stateNode===null){var i=El,r=a.contextType;typeof r=="object"&&r!==null&&(i=at(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Br,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},_r(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?at(r):El,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(qr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Br.enqueueReplaceState(i,i.state,null),Nn(t,l,i,n),En(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,p=nl(a,c);i.props=p;var w=i.context,C=a.contextType;r=El,typeof C=="object"&&C!==null&&(r=at(C));var z=a.getDerivedStateFromProps;C=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==r)&&nd(t,i,l,r),wa=!1;var T=t.memoizedState;i.state=T,Nn(t,l,i,n),En(),w=t.memoizedState,c||T!==w||wa?(typeof z=="function"&&(qr(t,a,z,l),w=t.memoizedState),(p=wa||ld(t,a,p,l,T,w,r))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,hr(e,t),r=t.memoizedProps,C=nl(a,r),i.props=C,z=t.pendingProps,T=i.context,w=a.contextType,p=El,typeof w=="object"&&w!==null&&(p=at(w)),c=a.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==z||T!==p)&&nd(t,i,l,p),wa=!1,T=t.memoizedState,i.state=T,Nn(t,l,i,n),En();var A=t.memoizedState;r!==z||T!==A||wa||e!==null&&e.dependencies!==null&&wi(e.dependencies)?(typeof c=="function"&&(qr(t,a,c,l),A=t.memoizedState),(C=wa||ld(t,a,C,l,T,A,p)||e!==null&&e.dependencies!==null&&wi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=p,l=C):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Gi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=al(t,e.child,null,n),t.child=al(t,null,a,n)):lt(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ia(e,t,n),e}function vd(e,t,a,l){return Pa(),t.flags|=256,lt(e,t,a,l),t.child}var Xr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qr(e){return{baseLanes:e,cachePool:oc()}}function Fr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function xd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?Na(t):Aa(),(e=Re)?(e=Df(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:Yt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},a=Iu(e),a.return=t,t.child=a,tt=t,Re=null)):e=null,e===null)throw ba(t);return Do(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(Aa(),n=t.mode,c=Vi({mode:"hidden",children:c},n),l=Ja(l,n,a,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=Qr(a),l.childLanes=Fr(e,r,a),t.memoizedState=Xr,Cn(null,l)):(Na(t),Zr(t,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(i)t.flags&256?(Na(t),t.flags&=-257,t=Kr(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),c=l.fallback,n=t.mode,l=Vi({mode:"visible",children:l.children},n),c=Ja(c,n,a,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,al(t,e.child,null,a),l=t.child,l.memoizedState=Qr(a),l.childLanes=Fr(e,r,a),t.memoizedState=Xr,t=Cn(null,l));else if(Na(t),Do(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(u(419)),l.stack="",l.digest=r,vn({value:l,source:null,stack:null}),t=Kr(e,t,a)}else if(Ve||Dl(e,t,a,!1),r=(a&e.childLanes)!==0,Ve||r){if(r=Ae,r!==null&&(l=su(r,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ka(e,l),gt(r,e,l),Gr;jo(c)||$i(),t=Kr(e,t,a)}else jo(c)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Re=Ot(c.nextSibling),tt=t,fe=!0,xa=null,Ct=!1,e!==null&&ac(t,e),t=Zr(t,l.children),t.flags|=4096);return t}return n?(Aa(),c=l.fallback,n=t.mode,p=e.child,w=p.sibling,l=It(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,w!==null?c=It(w,c):(c=Ja(c,n,a,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Cn(null,l),l=t.child,c=e.child.memoizedState,c===null?c=Qr(a):(n=c.cachePool,n!==null?(p=Ye._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=oc(),c={baseLanes:c.baseLanes|a,cachePool:n}),l.memoizedState=c,l.childLanes=Fr(e,r,a),t.memoizedState=Xr,Cn(e.child,l)):(Na(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Zr(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Kr(e,t,a){return al(t,e.child,null,a),e=Zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ur(e.return,t,a)}function Jr(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function Sd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=ke.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,Y(ke,r),lt(e,t,l,a),l=fe?yn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,a,t);else if(e.tag===19)bd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ci(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Jr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ci(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Jr(t,!0,a,null,i,l);break;case"together":Jr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ia(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ra|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Dl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Pr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wi(e)))}function Jp(e,t,a){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),Sa(t,Ye,e.memoizedState.cache),Pa();break;case 27:case 5:ha(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,br(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?xd(e,t,a):(Na(t),e=ia(e,t,a),e!==null?e.sibling:null);Na(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Dl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Sd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(ke,ke.current),l)break;return null;case 22:return t.lanes=0,pd(e,t,a,t.pendingProps);case 24:Sa(t,Ye,e.memoizedState.cache)}return ia(e,t,a)}function wd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!Pr(e,a)&&(t.flags&128)===0)return Ve=!1,Jp(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,fe&&(t.flags&1048576)!==0&&tc(t,yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=el(t.elementType),t.type=e,typeof e=="function")tr(e)?(l=nl(e,l),t.tag=1,t=yd(null,t,e,l,a)):(t.tag=0,t=Vr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ye){t.tag=11,t=dd(null,t,e,l,a);break e}else if(n===ee){t.tag=14,t=fd(null,t,e,l,a);break e}}throw t=rt(e)||e,Error(u(306,t,""))}}return t;case 0:return Vr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=nl(l,t.pendingProps),yd(e,t,l,n,a);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,hr(e,t),Nn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,Sa(t,Ye,l),l!==i.cache&&cr(t,[Ye],a,!0),En(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=vd(e,t,l,a);break e}else if(l!==n){n=jt(Error(u(424)),t),vn(n),t=vd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=Ot(e.firstChild),tt=t,fe=!0,xa=null,Ct=!0,a=pc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Pa(),l===n){t=ia(e,t,a);break e}lt(e,t,l,a)}t=t.child}return t;case 26:return Gi(e,t),e===null?(a=Uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,l=is(ie.current).createElement(a),l[et]=t,l[dt]=e,nt(l,a,e),We(l),t.stateNode=l):t.memoizedState=Uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ha(t),e===null&&fe&&(l=t.stateNode=Mf(t.type,t.pendingProps,ie.current),tt=t,Ct=!0,n=Re,Ua(t.type)?(Ro=n,Re=Ot(l.firstChild)):Re=n),lt(e,t,t.pendingProps.children,a),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=l=Re)&&(l=E_(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,tt=t,Re=Ot(l.firstChild),Ct=!1,n=!0):n=!1),n||ba(t)),ha(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Eo(n,i)?l=null:r!==null&&Eo(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=wr(e,t,Bp,null,null,a),Fn._currentValue=n),Gi(e,t),lt(e,t,l,a),t.child;case 6:return e===null&&fe&&((e=a=Re)&&(a=N_(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,tt=t,Re=null,e=!0):e=!1),e||ba(t)),null;case 13:return xd(e,t,a);case 4:return Je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=al(t,null,l,a):lt(e,t,l,a),t.child;case 11:return dd(e,t,t.type,t.pendingProps,a);case 7:return lt(e,t,t.pendingProps,a),t.child;case 8:return lt(e,t,t.pendingProps.children,a),t.child;case 12:return lt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Sa(t,t.type,l.value),lt(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,$a(t),n=at(n),l=l(n),t.flags|=1,lt(e,t,l,a),t.child;case 14:return fd(e,t,t.type,t.pendingProps,a);case 15:return md(e,t,t.type,t.pendingProps,a);case 19:return Sd(e,t,a);case 31:return Kp(e,t,a);case 22:return pd(e,t,a,t.pendingProps);case 24:return $a(t),l=at(Ye),e===null?(n=mr(),n===null&&(n=Ae,i=dr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},_r(t),Sa(t,Ye,n)):((e.lanes&a)!==0&&(hr(e,t),Nn(t,null,null,a),En()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Sa(t,Ye,l)):(l=i.cache,Sa(t,Ye,l),l!==n.cache&&cr(t,[Ye],a,!0))),lt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function sa(e){e.flags|=4}function Wr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Pd())e.flags|=8192;else throw tl=Ai,pr}else e.flags&=-16777217}function Td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bf(t))if(Pd())e.flags|=8192;else throw tl=Ai,pr}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lu():536870912,e.lanes|=t,Yl|=t)}function Mn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Pp(e,t,a){var l=t.pendingProps;switch(ir(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),aa(Ye),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jl(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rr())),Ce(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(sa(t),i!==null?(Ce(t),Td(t,i)):(Ce(t),Wr(t,n,null,l,a))):i?i!==e.memoizedState?(sa(t),Ce(t),Td(t,i)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&sa(t),Ce(t),Wr(t,n,e,l,a)),null;case 27:if(Ga(t),a=ie.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}e=V.current,jl(t)?lc(t):(e=Mf(n,l,a),t.stateNode=e,sa(t))}return Ce(t),null;case 5:if(Ga(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ce(t),null}if(i=V.current,jl(t))lc(t);else{var r=is(ie.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[et]=t,i[dt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(nt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&sa(t)}}return Ce(t),Wr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ie.current,jl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=tt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bf(e.nodeValue,a)),e||ba(t,!0)}else e=is(e).createTextNode(l),e[et]=t,t.stateNode=e}return Ce(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=jl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[et]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else a=rr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=jl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[et]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),n=!1}else n=rr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Xi(t,t.updateQueue),Ce(t),null);case 4:return De(),e===null&&xo(t.stateNode.containerInfo),Ce(t),null;case 10:return aa(t.type),Ce(t),null;case 19:if(O(ke),l=t.memoizedState,l===null)return Ce(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Mn(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ci(e),i!==null){for(t.flags|=128,Mn(l,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$u(a,e),a=a.sibling;return Y(ke,ke.current&1|2),fe&&ea(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&U()>Ji&&(t.flags|=128,n=!0,Mn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ci(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!fe)return Ce(t),null}else 2*U()-l.renderingStartTime>Ji&&a!==536870912&&(t.flags|=128,n=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=U(),e.sibling=null,a=ke.current,Y(ke,n?a&1|2:a&1),fe&&ea(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return bt(t),xr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),a=t.updateQueue,a!==null&&Xi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Ye),Ce(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Wp(e,t){switch(ir(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Ye),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ga(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(u(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(ke),null;case 4:return De(),null;case 10:return aa(t.type),null;case 22:case 23:return bt(t),xr(),e!==null&&O(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Ye),null;case 25:return null;default:return null}}function Ed(e,t){switch(ir(t),t.tag){case 3:aa(Ye),De();break;case 26:case 27:case 5:Ga(t);break;case 4:De();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:O(ke);break;case 10:aa(t.type);break;case 22:case 23:bt(t),xr(),e!==null&&O(Ia);break;case 24:aa(Ye)}}function On(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(c){be(t,t.return,c)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=t;var p=a,w=c;try{w()}catch(C){be(n,p,C)}}}l=l.next}while(l!==i)}}catch(C){be(t,t.return,C)}}function Nd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hc(t,a)}catch(l){be(e,e.return,l)}}}function Ad(e,t,a){a.props=nl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,t,l)}}function zn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){be(e,t,n)}}function Vt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){be(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){be(e,t,n)}else a.current=null}function jd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){be(e,e.return,n)}}function $r(e,t,a){try{var l=e.stateNode;v_(l,e.type,a,t),l[dt]=t}catch(n){be(e,e.return,n)}}function Dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Ir(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Wt));else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(eo(e,t,a),e=e.sibling;e!==null;)eo(e,t,a),e=e.sibling}function Qi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qi(e,t,a),e=e.sibling;e!==null;)Qi(e,t,a),e=e.sibling}function Rd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);nt(t,l,a),t[et]=e,t[dt]=a}catch(i){be(e,e.return,i)}}var ra=!1,Xe=!1,to=!1,Cd=typeof WeakSet=="function"?WeakSet:Set,$e=null;function $p(e,t){if(e=e.containerInfo,wo=fs,e=Vu(e),Ks(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,c=-1,p=-1,w=0,C=0,z=e,T=null;t:for(;;){for(var A;z!==a||n!==0&&z.nodeType!==3||(c=r+n),z!==i||l!==0&&z.nodeType!==3||(p=r+l),z.nodeType===3&&(r+=z.nodeValue.length),(A=z.firstChild)!==null;)T=z,z=A;for(;;){if(z===e)break t;if(T===a&&++w===n&&(c=r),T===i&&++C===l&&(p=r),(A=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=A}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(To={focusedElem:e,selectionRange:a},fs=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=nl(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){be(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ao(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ao(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Md(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&On(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){be(a,a.return,r)}else{var n=nl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){be(a,a.return,r)}}l&64&&Nd(a),l&512&&zn(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hc(e,t)}catch(r){be(a,a.return,r)}}break;case 27:t===null&&l&4&&Rd(a);case 26:case 5:ua(e,a),t===null&&l&4&&jd(a),l&512&&zn(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&Ud(e,a);break;case 13:ua(e,a),l&4&&Ld(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r_.bind(null,a),A_(e,a))));break;case 22:if(l=a.memoizedState!==null||ra,!l){t=t!==null&&t.memoizedState!==null||Xe,n=ra;var i=Xe;ra=l,(Xe=t)&&!i?ca(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),ra=n,Xe=i}break;case 30:break;default:ua(e,a)}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Cs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,mt=!1;function oa(e,t,a){for(a=a.child;a!==null;)zd(e,t,a),a=a.sibling}function zd(e,t,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Xe||Vt(a,t),oa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Vt(a,t);var l=Me,n=mt;Ua(a.type)&&(Me=a.stateNode,mt=!1),oa(e,t,a),Vn(a.stateNode),Me=l,mt=n;break;case 5:Xe||Vt(a,t);case 6:if(l=Me,n=mt,Me=null,oa(e,t,a),Me=l,mt=n,Me!==null)if(mt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(i){be(a,t,i)}else try{Me.removeChild(a.stateNode)}catch(i){be(a,t,i)}break;case 18:Me!==null&&(mt?(e=Me,Af(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Jl(e)):Af(Me,a.stateNode));break;case 4:l=Me,n=mt,Me=a.stateNode.containerInfo,mt=!0,oa(e,t,a),Me=l,mt=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Xe||ja(4,a,t),oa(e,t,a);break;case 1:Xe||(Vt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ad(a,t,l)),oa(e,t,a);break;case 21:oa(e,t,a);break;case 22:Xe=(l=Xe)||a.memoizedState!==null,oa(e,t,a),Xe=l;break;default:oa(e,t,a)}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jl(e)}catch(a){be(t,t.return,a)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(a){be(t,t.return,a)}}function Ip(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cd),t;default:throw Error(u(435,e.tag))}}function Fi(e,t){var a=Ip(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=o_.bind(null,e,l);l.then(n,n)}})}function pt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Ua(c.type)){Me=c.stateNode,mt=!1;break e}break;case 5:Me=c.stateNode,mt=!1;break e;case 3:case 4:Me=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Me===null)throw Error(u(160));zd(i,r,n),Me=null,mt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}var qt=null;function Hd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),_t(e),l&4&&(ja(3,e,e.return),On(3,e),ja(5,e,e.return));break;case 1:pt(t,e),_t(e),l&512&&(Xe||a===null||Vt(a,a.return)),l&64&&ra&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=qt;if(pt(t,e),_t(e),l&512&&(Xe||a===null||Vt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[rn]||i[et]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),nt(i,l,a),i[et]=e,We(i),l=i;break e;case"link":var r=kf("link","href",n).get(l+(a.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(c,1);break t}}i=n.createElement(l),nt(i,l,a),n.head.appendChild(i);break;case"meta":if(r=kf("meta","content",n).get(l+(a.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(c,1);break t}}i=n.createElement(l),nt(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[et]=e,We(i),l=i}e.stateNode=l}else qf(n,e.type,e.stateNode);else e.stateNode=Hf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?qf(n,e.type,e.stateNode):Hf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$r(e,e.memoizedProps,a.memoizedProps)}break;case 27:pt(t,e),_t(e),l&512&&(Xe||a===null||Vt(a,a.return)),a!==null&&l&4&&$r(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pt(t,e),_t(e),l&512&&(Xe||a===null||Vt(a,a.return)),e.flags&32){n=e.stateNode;try{yl(n,"")}catch(Q){be(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,$r(e,n,a!==null?a.memoizedProps:n)),l&1024&&(to=!0);break;case 6:if(pt(t,e),_t(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){be(e,e.return,Q)}}break;case 3:if(os=null,n=qt,qt=ss(t.containerInfo),pt(t,e),qt=n,_t(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Jl(t.containerInfo)}catch(Q){be(e,e.return,Q)}to&&(to=!1,kd(e));break;case 4:l=qt,qt=ss(e.stateNode.containerInfo),pt(t,e),_t(e),qt=l;break;case 12:pt(t,e),_t(e);break;case 31:pt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 13:pt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ki=U()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,w=ra,C=Xe;if(ra=w||n,Xe=C||p,pt(t,e),Xe=C,ra=w,_t(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||ra||Xe||il(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=p.stateNode;var z=p.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){be(p,p.return,Q)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(Q){be(p,p.return,Q)}}}else if(t.tag===18){if(a===null){p=t;try{var A=p.stateNode;n?jf(A,!0):jf(p.stateNode,!1)}catch(Q){be(p,p.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Fi(e,a))));break;case 19:pt(t,e),_t(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Fi(e,l)));break;case 30:break;case 21:break;default:pt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Dd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Ir(e);Qi(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(yl(r,""),a.flags&=-33);var c=Ir(e);Qi(e,c,r);break;case 3:case 4:var p=a.stateNode.containerInfo,w=Ir(e);eo(e,w,p);break;default:throw Error(u(161))}}catch(C){be(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Md(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),il(t);break;case 1:Vt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ad(t,t.return,a),il(t);break;case 27:Vn(t.stateNode);case 26:case 5:Vt(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function ca(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:ca(n,i,a),On(4,i);break;case 1:if(ca(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){be(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)_c(p[n],c)}catch(w){be(l,l.return,w)}}a&&r&64&&Nd(i),zn(i,i.return);break;case 27:Rd(i);case 26:case 5:ca(n,i,a),a&&l===null&&r&4&&jd(i),zn(i,i.return);break;case 12:ca(n,i,a);break;case 31:ca(n,i,a),a&&r&4&&Ud(n,i);break;case 13:ca(n,i,a),a&&r&4&&Ld(n,i);break;case 22:i.memoizedState===null&&ca(n,i,a),zn(i,i.return);break;case 30:break;default:ca(n,i,a)}t=t.sibling}}function ao(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xn(a))}function lo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xn(e))}function Bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,a,l),t=t.sibling}function qd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,l),n&2048&&On(9,t);break;case 1:Bt(e,t,a,l);break;case 3:Bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xn(e)));break;case 12:if(n&2048){Bt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){be(t,t.return,p)}}else Bt(e,t,a,l);break;case 31:Bt(e,t,a,l);break;case 13:Bt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Bt(e,t,a,l):Un(e,t):i._visibility&2?Bt(e,t,a,l):(i._visibility|=2,kl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ao(r,t);break;case 24:Bt(e,t,a,l),n&2048&&lo(t.alternate,t);break;default:Bt(e,t,a,l)}}function kl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=a,p=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:kl(i,r,c,p,n),On(8,r);break;case 23:break;case 22:var C=r.stateNode;r.memoizedState!==null?C._visibility&2?kl(i,r,c,p,n):Un(i,r):(C._visibility|=2,kl(i,r,c,p,n)),n&&w&2048&&ao(r.alternate,r);break;case 24:kl(i,r,c,p,n),n&&w&2048&&lo(r.alternate,r);break;default:kl(i,r,c,p,n)}t=t.sibling}}function Un(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Un(a,l),n&2048&&ao(l.alternate,l);break;case 24:Un(a,l),n&2048&&lo(l.alternate,l);break;default:Un(a,l)}t=t.sibling}}var Ln=8192;function ql(e,t,a){if(e.subtreeFlags&Ln)for(e=e.child;e!==null;)Bd(e,t,a),e=e.sibling}function Bd(e,t,a){switch(e.tag){case 26:ql(e,t,a),e.flags&Ln&&e.memoizedState!==null&&q_(a,qt,e.memoizedState,e.memoizedProps);break;case 5:ql(e,t,a);break;case 3:case 4:var l=qt;qt=ss(e.stateNode.containerInfo),ql(e,t,a),qt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ln,Ln=16777216,ql(e,t,a),Ln=l):ql(e,t,a));break;default:ql(e,t,a)}}function Yd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];$e=l,Vd(l,e)}Yd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gd(e),e=e.sibling}function Gd(e){switch(e.tag){case 0:case 11:case 15:Hn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Hn(e);break;case 12:Hn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zi(e)):Hn(e);break;default:Hn(e)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];$e=l,Vd(l,e)}Yd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Zi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Zi(t));break;default:Zi(t)}e=e.sibling}}function Vd(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,$e=l;else e:for(a=e;$e!==null;){l=$e;var n=l.sibling,i=l.return;if(Od(l),l===a){$e=null;break e}if(n!==null){n.return=i,$e=n;break e}$e=i}}}var e_={getCacheForType:function(e){var t=at(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Ye).controller.signal}},t_=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ae=null,re=null,ue=0,xe=0,St=null,Da=!1,Bl=!1,no=!1,da=0,Ue=0,Ra=0,sl=0,io=0,wt=0,Yl=0,kn=null,ht=null,so=!1,Ki=0,Xd=0,Ji=1/0,Pi=null,Ca=null,Ke=0,Ma=null,Gl=null,fa=0,ro=0,oo=null,Qd=null,qn=0,uo=null;function Tt(){return(ve&2)!==0&&ue!==0?ue&-ue:R.T!==null?ho():ru()}function Fd(){if(wt===0)if((ue&536870912)===0||fe){var e=ni;ni<<=1,(ni&3932160)===0&&(ni=262144),wt=e}else wt=536870912;return e=xt.current,e!==null&&(e.flags|=32),wt}function gt(e,t,a){(e===Ae&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),Oa(e,ue,wt,!1)),sn(e,a),((ve&2)===0||e!==Ae)&&(e===Ae&&((ve&2)===0&&(sl|=a),Ue===4&&Oa(e,ue,wt,!1)),Xt(e))}function Zd(e,t,a){if((ve&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||nn(e,t),n=l?n_(e,t):fo(e,t,!0),i=l;do{if(n===0){Bl&&!l&&Oa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!a_(a)){n=fo(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;n=kn;var p=c.current.memoizedState.isDehydrated;if(p&&(Vl(c,r).flags|=256),r=fo(c,r,!1),r!==2){if(no&&!p){c.errorRecoveryDisabledLanes|=i,sl|=i,n=4;break e}i=ht,ht=n,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Vl(e,0),Oa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Oa(l,t,wt,!Da);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Ki+300-U(),10<n)){if(Oa(l,t,wt,!Da),si(l,0,!0)!==0)break e;fa=t,l.timeoutHandle=Ef(Kd.bind(null,l,a,ht,Pi,so,t,wt,sl,Yl,Da,i,"Throttled",-0,0),n);break e}Kd(l,a,ht,Pi,so,t,wt,sl,Yl,Da,i,null,-0,0)}}break}while(!0);Xt(e)}function Kd(e,t,a,l,n,i,r,c,p,w,C,z,T,A){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Bd(t,i,z);var Q=(i&62914560)===i?Ki-U():(i&4194048)===i?Xd-U():0;if(Q=B_(z,Q),Q!==null){fa=i,e.cancelPendingCommit=Q(af.bind(null,e,t,i,a,l,n,r,c,p,C,z,null,T,A)),Oa(e,i,r,!w);return}}af(e,t,i,a,l,n,r,c,p)}function a_(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!yt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oa(e,t,a,l){t&=~io,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ze(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&nu(e,a,t)}function Wi(){return(ve&6)===0?(Bn(0),!1):!0}function co(){if(re!==null){if(xe===0)var e=re.return;else e=re,ta=Wa=null,Nr(e),Ol=null,Sn=0,e=re;for(;e!==null;)Ed(e.alternate,e),e=e.return;re=null}}function Vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,S_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,co(),Ae=e,re=a=It(e.current,null),ue=t,xe=0,St=null,Da=!1,Bl=nn(e,t),no=!1,Yl=wt=io=sl=Ra=Ue=0,ht=kn=null,so=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ze(l),i=1<<n;t|=e[n],l&=~i}return da=t,yi(),a}function Jd(e,t){le=null,R.H=Rn,t===Ml||t===Ni?(t=dc(),xe=3):t===pr?(t=dc(),xe=4):xe=t===Gr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,re===null&&(Ue=1,Bi(e,jt(t,e.current)))}function Pd(){var e=xt.current;return e===null?!0:(ue&4194048)===ue?Mt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Mt:!1}function Wd(){var e=R.H;return R.H=Rn,e===null?Rn:e}function $d(){var e=R.A;return R.A=e_,e}function $i(){Ue=4,Da||(ue&4194048)!==ue&&xt.current!==null||(Bl=!0),(Ra&134217727)===0&&(sl&134217727)===0||Ae===null||Oa(Ae,ue,wt,!1)}function fo(e,t,a){var l=ve;ve|=2;var n=Wd(),i=$d();(Ae!==e||ue!==t)&&(Pi=null,Vl(e,t)),t=!1;var r=Ue;e:do try{if(xe!==0&&re!==null){var c=re,p=St;switch(xe){case 8:co(),r=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var w=xe;if(xe=0,St=null,Xl(e,c,p,w),a&&Bl){r=0;break e}break;default:w=xe,xe=0,St=null,Xl(e,c,p,w)}}l_(),r=Ue;break}catch(C){Jd(e,C)}while(!0);return t&&e.shellSuspendCounter++,ta=Wa=null,ve=l,R.H=n,R.A=i,re===null&&(Ae=null,ue=0,yi()),r}function l_(){for(;re!==null;)Id(re)}function n_(e,t){var a=ve;ve|=2;var l=Wd(),n=$d();Ae!==e||ue!==t?(Pi=null,Ji=U()+500,Vl(e,t)):Bl=nn(e,t);e:do try{if(xe!==0&&re!==null){t=re;var i=St;t:switch(xe){case 1:xe=0,St=null,Xl(e,t,i,1);break;case 2:case 9:if(uc(i)){xe=0,St=null,ef(t);break}t=function(){xe!==2&&xe!==9||Ae!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:uc(i)?(xe=0,St=null,ef(t)):(xe=0,St=null,Xl(e,t,i,7));break;case 5:var r=null;switch(re.tag){case 26:r=re.memoizedState;case 5:case 27:var c=re;if(r?Bf(r):c.stateNode.complete){xe=0,St=null;var p=c.sibling;if(p!==null)re=p;else{var w=c.return;w!==null?(re=w,Ii(w)):re=null}break t}}xe=0,St=null,Xl(e,t,i,5);break;case 6:xe=0,St=null,Xl(e,t,i,6);break;case 8:co(),Ue=6;break e;default:throw Error(u(462))}}i_();break}catch(C){Jd(e,C)}while(!0);return ta=Wa=null,R.H=l,R.A=n,ve=a,re!==null?0:(Ae=null,ue=0,yi(),Ue)}function i_(){for(;re!==null&&!Es();)Id(re)}function Id(e){var t=wd(e.alternate,e,da);e.memoizedProps=e.pendingProps,t===null?Ii(e):re=t}function ef(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=gd(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=gd(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Nr(t);default:Ed(a,t),t=re=$u(t,da),t=wd(a,t,da)}e.memoizedProps=e.pendingProps,t===null?Ii(e):re=t}function Xl(e,t,a,l){ta=Wa=null,Nr(t),Ol=null,Sn=0;var n=t.return;try{if(Zp(e,n,t,a,ue)){Ue=1,Bi(e,jt(a,e.current)),re=null;return}}catch(i){if(n!==null)throw re=n,i;Ue=1,Bi(e,jt(a,e.current)),re=null;return}t.flags&32768?(fe||l===1?e=!0:Bl||(ue&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),tf(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){tf(t,Da);return}e=t.return;var a=Pp(t.alternate,t,da);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ue===0&&(Ue=5)}function tf(e,t){do{var a=Wp(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ue=6,re=null}function af(e,t,a,l,n,i,r,c,p){e.cancelPendingCommit=null;do es();while(Ke!==0);if((ve&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Is,km(e,a,i,r,c,p),e===Ae&&(re=Ae=null,ue=0),Gl=t,Ma=e,fa=a,ro=i,oo=n,Qd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,u_(Be,function(){return of(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=B.p,B.p=2,r=ve,ve|=4;try{$p(e,t,a)}finally{ve=r,B.p=n,R.T=l}}Ke=1,lf(),nf(),sf()}}function lf(){if(Ke===1){Ke=0;var e=Ma,t=Gl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=B.p;B.p=2;var n=ve;ve|=4;try{Hd(t,e);var i=To,r=Vu(e.containerInfo),c=i.focusedElem,p=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&Gu(c.ownerDocument.documentElement,c)){if(p!==null&&Ks(c)){var w=p.start,C=p.end;if(C===void 0&&(C=w),"selectionStart"in c)c.selectionStart=w,c.selectionEnd=Math.min(C,c.value.length);else{var z=c.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var A=T.getSelection(),Q=c.textContent.length,$=Math.min(p.start,Q),Ne=p.end===void 0?$:Math.min(p.end,Q);!A.extend&&$>Ne&&(r=Ne,Ne=$,$=r);var b=Yu(c,$),g=Yu(c,Ne);if(b&&g&&(A.rangeCount!==1||A.anchorNode!==b.node||A.anchorOffset!==b.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=z.createRange();S.setStart(b.node,b.offset),A.removeAllRanges(),$>Ne?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(z=[],A=c;A=A.parentNode;)A.nodeType===1&&z.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var M=z[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}fs=!!wo,To=wo=null}finally{ve=n,B.p=l,R.T=a}}e.current=t,Ke=2}}function nf(){if(Ke===2){Ke=0;var e=Ma,t=Gl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=B.p;B.p=2;var n=ve;ve|=4;try{Md(e,t.alternate,t)}finally{ve=n,B.p=l,R.T=a}}Ke=3}}function sf(){if(Ke===4||Ke===3){Ke=0,L();var e=Ma,t=Gl,a=fa,l=Qd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Gl=Ma=null,rf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ca=null),Ds(a),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=B.p,B.p=2,R.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var c=l[r];i(c.value,{componentStack:c.stack})}}finally{R.T=t,B.p=n}}(fa&3)!==0&&es(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===uo?qn++:(qn=0,uo=e):qn=0,Bn(0)}}function rf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xn(t)))}function es(){return lf(),nf(),sf(),of()}function of(){if(Ke!==5)return!1;var e=Ma,t=ro;ro=0;var a=Ds(fa),l=R.T,n=B.p;try{B.p=32>a?32:a,R.T=null,a=oo,oo=null;var i=Ma,r=fa;if(Ke=0,Gl=Ma=null,fa=0,(ve&6)!==0)throw Error(u(331));var c=ve;if(ve|=4,Gd(i.current),qd(i,i.current,r,a),ve=c,Bn(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Jt,i)}catch{}return!0}finally{B.p=n,R.T=l,rf(e,t)}}function uf(e,t,a){t=jt(a,t),t=Yr(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(sn(e,2),Xt(e))}function be(e,t,a){if(e.tag===3)uf(e,e,a);else for(;t!==null;){if(t.tag===3){uf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){e=jt(a,e),a=ud(2),l=Ea(t,a,2),l!==null&&(cd(a,l,t,e),sn(l,2),Xt(l));break}}t=t.return}}function mo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new t_;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(no=!0,n.add(a),e=s_.bind(null,e,t,a),t.then(e,e))}function s_(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ae===e&&(ue&a)===a&&(Ue===4||Ue===3&&(ue&62914560)===ue&&300>U()-Ki?(ve&2)===0&&Vl(e,0):io|=a,Yl===ue&&(Yl=0)),Xt(e)}function cf(e,t){t===0&&(t=lu()),e=Ka(e,t),e!==null&&(sn(e,t),Xt(e))}function r_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),cf(e,a)}function o_(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),cf(e,a)}function u_(e,t){return en(e,t)}var ts=null,Ql=null,po=!1,as=!1,_o=!1,za=0;function Xt(e){e!==Ql&&e.next===null&&(Ql===null?ts=Ql=e:Ql=Ql.next=e),as=!0,po||(po=!0,d_())}function Bn(e,t){if(!_o&&as){_o=!0;do for(var a=!1,l=ts;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-Ze(42|e)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,pf(l,i))}else i=ue,i=si(l,l===Ae?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||nn(l,i)||(a=!0,pf(l,i));l=l.next}while(a);_o=!1}}function c_(){df()}function df(){as=po=!1;var e=0;za!==0&&b_()&&(e=za);for(var t=U(),a=null,l=ts;l!==null;){var n=l.next,i=ff(l,t);i===0?(l.next=null,a===null?ts=n:a.next=n,n===null&&(Ql=a)):(a=l,(e!==0||(i&3)!==0)&&(as=!0)),l=n}Ke!==0&&Ke!==5||Bn(e),za!==0&&(za=0)}function ff(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Ze(i),c=1<<r,p=n[r];p===-1?((c&a)===0||(c&l)!==0)&&(n[r]=Hm(c,t)):p<=t&&(e.expiredLanes|=c),i&=~c}if(t=Ae,a=ue,a=si(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&tn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&tn(l),Ds(a)){case 2:case 8:a=it;break;case 32:a=Be;break;case 268435456:a=Kt;break;default:a=Be}return l=mf.bind(null,e),a=en(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&tn(l),e.callbackPriority=2,e.callbackNode=null,2}function mf(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(es()&&e.callbackNode!==a)return null;var l=ue;return l=si(e,e===Ae?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zd(e,l,t),ff(e,U()),e.callbackNode!=null&&e.callbackNode===a?mf.bind(null,e):null)}function pf(e,t){if(es())return null;Zd(e,t,!0)}function d_(){w_(function(){(ve&6)!==0?en(te,c_):df()})}function ho(){if(za===0){var e=Rl;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),za=e}return za}function _f(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ci(""+e)}function hf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f_(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=_f((n[dt]||null).action),r=l.submitter;r&&(t=(t=r[dt]||null)?_f(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new pi("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var p=r?hf(n,r):new FormData(n);Ur(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(c.preventDefault(),p=r?hf(n,r):new FormData(n),Ur(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var go=0;go<$s.length;go++){var yo=$s[go],m_=yo.toLowerCase(),p_=yo[0].toUpperCase()+yo.slice(1);kt(m_,"on"+p_)}kt(Fu,"onAnimationEnd"),kt(Zu,"onAnimationIteration"),kt(Ku,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Rp,"onTransitionRun"),kt(Cp,"onTransitionStart"),kt(Mp,"onTransitionCancel"),kt(Ju,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yn));function gf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var c=l[r],p=c.instance,w=c.currentTarget;if(c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(C){gi(C)}n.currentTarget=null,i=p}else for(r=0;r<l.length;r++){if(c=l[r],p=c.instance,w=c.currentTarget,c=c.listener,p!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=w;try{i(n)}catch(C){gi(C)}n.currentTarget=null,i=p}}}}function oe(e,t){var a=t[Rs];a===void 0&&(a=t[Rs]=new Set);var l=e+"__bubble";a.has(l)||(yf(t,e,2,!1),a.add(l))}function vo(e,t,a){var l=0;t&&(l|=4),yf(a,e,l,t)}var ls="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[ls]){e[ls]=!0,cu.forEach(function(a){a!=="selectionchange"&&(__.has(a)||vo(a,!1,e),vo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ls]||(t[ls]=!0,vo("selectionchange",!1,t))}}function yf(e,t,a,l){switch(Zf(t)){case 2:var n=V_;break;case 8:n=X_;break;default:n=Uo}a=n.bind(null,t,a,e),n=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function bo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=ml(c),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=i=r;continue e}c=c.parentNode}}l=l.return}Su(function(){var w=i,C=Hs(a),z=[];e:{var T=Pu.get(e);if(T!==void 0){var A=pi,Q=e;switch(e){case"keypress":if(fi(a)===0)break e;case"keydown":case"keyup":A=op;break;case"focusin":Q="focus",A=Vs;break;case"focusout":Q="blur",A=Vs;break;case"beforeblur":case"afterblur":A=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=dp;break;case Fu:case Zu:case Ku:A=Im;break;case Ju:A=mp;break;case"scroll":case"scrollend":A=Km;break;case"wheel":A=_p;break;case"copy":case"cut":case"paste":A=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Au;break;case"toggle":case"beforetoggle":A=gp}var $=(t&4)!==0,Ne=!$&&(e==="scroll"||e==="scrollend"),b=$?T!==null?T+"Capture":null:T;$=[];for(var g=w,S;g!==null;){var M=g;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||b===null||(M=un(g,b),M!=null&&$.push(Gn(g,M,S))),Ne)break;g=g.return}0<$.length&&(T=new A(T,Q,null,a,C),z.push({event:T,listeners:$}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==Ls&&(Q=a.relatedTarget||a.fromElement)&&(ml(Q)||Q[fl]))break e;if((A||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,A?(Q=a.relatedTarget||a.toElement,A=w,Q=Q?ml(Q):null,Q!==null&&(Ne=h(Q),$=Q.tag,Q!==Ne||$!==5&&$!==27&&$!==6)&&(Q=null)):(A=null,Q=w),A!==Q)){if($=Eu,M="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=Au,M="onPointerLeave",b="onPointerEnter",g="pointer"),Ne=A==null?T:on(A),S=Q==null?T:on(Q),T=new $(M,g+"leave",A,a,C),T.target=Ne,T.relatedTarget=S,M=null,ml(C)===w&&($=new $(b,g+"enter",Q,a,C),$.target=S,$.relatedTarget=Ne,M=$),Ne=M,A&&Q)t:{for($=h_,b=A,g=Q,S=0,M=b;M;M=$(M))S++;M=0;for(var P=g;P;P=$(P))M++;for(;0<S-M;)b=$(b),S--;for(;0<M-S;)g=$(g),M--;for(;S--;){if(b===g||g!==null&&b===g.alternate){$=b;break t}b=$(b),g=$(g)}$=null}else $=null;A!==null&&vf(z,T,A,$,!1),Q!==null&&Ne!==null&&vf(z,Ne,Q,$,!0)}}e:{if(T=w?on(w):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var he=Uu;else if(Ou(T))if(Lu)he=Ap;else{he=Ep;var Z=Tp}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Us(w.elementType)&&(he=Uu):he=Np;if(he&&(he=he(e,w))){zu(z,he,a,C);break e}Z&&Z(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&zs(T,"number",T.value)}switch(Z=w?on(w):window,e){case"focusin":(Ou(Z)||Z.contentEditable==="true")&&(Sl=Z,Js=w,gn=null);break;case"focusout":gn=Js=Sl=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Xu(z,a,C);break;case"selectionchange":if(Dp)break;case"keydown":case"keyup":Xu(z,a,C)}var ne;if(Qs)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else bl?Cu(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(ju&&a.locale!=="ko"&&(bl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&bl&&(ne=wu()):(ya=C,Bs="value"in ya?ya.value:ya.textContent,bl=!0)),Z=ns(w,ce),0<Z.length&&(ce=new Nu(ce,e,null,a,C),z.push({event:ce,listeners:Z}),ne?ce.data=ne:(ne=Mu(a),ne!==null&&(ce.data=ne)))),(ne=vp?xp(e,a):bp(e,a))&&(ce=ns(w,"onBeforeInput"),0<ce.length&&(Z=new Nu("onBeforeInput","beforeinput",null,a,C),z.push({event:Z,listeners:ce}),Z.data=ne)),f_(z,e,w,a,C)}gf(z,t)})}function Gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ns(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=un(e,a),n!=null&&l.unshift(Gn(e,n,i)),n=un(e,t),n!=null&&l.push(Gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function h_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vf(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var c=a,p=c.alternate,w=c.stateNode;if(c=c.tag,p!==null&&p===l)break;c!==5&&c!==26&&c!==27||w===null||(p=w,n?(w=un(a,i),w!=null&&r.unshift(Gn(a,w,p))):n||(w=un(a,i),w!=null&&r.push(Gn(a,w,p)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var g_=/\r\n?/g,y_=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(g_,`
`).replace(y_,"")}function bf(e,t){return t=xf(t),xf(e)===t}function Ee(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||yl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&yl(e,""+l);break;case"className":oi(e,"class",l);break;case"tabIndex":oi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(e,a,l);break;case"style":xu(e,l,i);break;case"data":if(t!=="object"){oi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ci(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Wt);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ci(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),ri(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ri(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fm.get(a)||a,ri(e,a,l))}}function So(e,t,a,l,n,i){switch(a){case"style":xu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?yl(e,l):(typeof l=="number"||typeof l=="bigint")&&yl(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!du.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[dt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ri(e,a,l)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,i,r,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var c=i=r=n=null,p=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var C=a[l];if(C!=null)switch(l){case"name":n=C;break;case"type":r=C;break;case"checked":p=C;break;case"defaultChecked":w=C;break;case"value":i=C;break;case"defaultValue":c=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Ee(e,t,l,C,a,null)}}hu(e,i,c,p,w,r,n,!1);return;case"select":oe("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:Ee(e,t,n,c,a,null)}t=i,a=r,e.multiple=!!l,t!=null?gl(e,!!l,t,!1):a!=null&&gl(e,!!l,a,!0);return;case"textarea":oe("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Ee(e,t,r,c,a,null)}yu(e,l,n,i);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,p,l,a,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<Yn.length;l++)oe(Yn[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,w,l,a,null)}return;default:if(Us(t)){for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!==void 0&&So(e,t,C,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&Ee(e,t,c,l,a,null))}function v_(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,p=null,w=null,C=null;for(A in a){var z=a[A];if(a.hasOwnProperty(A)&&z!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=z;default:l.hasOwnProperty(A)||Ee(e,t,A,null,l,z)}}for(var T in l){var A=l[T];if(z=a[T],l.hasOwnProperty(T)&&(A!=null||z!=null))switch(T){case"type":i=A;break;case"name":n=A;break;case"checked":w=A;break;case"defaultChecked":C=A;break;case"value":r=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==z&&Ee(e,t,T,A,l,z)}}Os(e,r,c,p,w,C,i,n);return;case"select":A=r=c=T=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":A=p;default:l.hasOwnProperty(i)||Ee(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":T=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==p&&Ee(e,t,n,i,l,p)}t=c,a=r,l=A,T!=null?gl(e,!!a,T,!1):!!l!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ee(e,t,c,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":T=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&Ee(e,t,r,n,l,i)}gu(e,T,A);return;case"option":for(var Q in a)T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!l.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:Ee(e,t,Q,null,l,T));for(p in l)T=l[p],A=a[p],l.hasOwnProperty(p)&&T!==A&&(T!=null||A!=null)&&(p==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Ee(e,t,p,T,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)T=a[$],a.hasOwnProperty($)&&T!=null&&!l.hasOwnProperty($)&&Ee(e,t,$,null,l,T);for(w in l)if(T=l[w],A=a[w],l.hasOwnProperty(w)&&T!==A&&(T!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Ee(e,t,w,T,l,A)}return;default:if(Us(t)){for(var Ne in a)T=a[Ne],a.hasOwnProperty(Ne)&&T!==void 0&&!l.hasOwnProperty(Ne)&&So(e,t,Ne,void 0,l,T);for(C in l)T=l[C],A=a[C],!l.hasOwnProperty(C)||T===A||T===void 0&&A===void 0||So(e,t,C,T,l,A);return}}for(var b in a)T=a[b],a.hasOwnProperty(b)&&T!=null&&!l.hasOwnProperty(b)&&Ee(e,t,b,null,l,T);for(z in l)T=l[z],A=a[z],!l.hasOwnProperty(z)||T===A||T==null&&A==null||Ee(e,t,z,T,l,A)}function Sf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,c=n.duration;if(i&&c&&Sf(r)){for(r=0,c=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],w=p.startTime;if(w>c)break;var C=p.transferSize,z=p.initiatorType;C&&Sf(z)&&(p=p.responseEnd,r+=C*(p<c?1:(c-w)/(p-w)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wo=null,To=null;function is(e){return e.nodeType===9?e:e.ownerDocument}function wf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=null;function b_(){var e=window.event;return e&&e.type==="popstate"?e===No?!1:(No=e,!0):(No=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,S_=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(T_)}:Ef;function T_(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Af(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Jl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Vn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Vn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[rn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Vn(e.ownerDocument.body);a=n}while(a);Jl(t)}function jf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ao(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ao(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function E_(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function N_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ot(e.nextSibling),e===null))return null;return e}function Df(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function jo(e){return e.data==="$?"||e.data==="$~"}function Do(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function A_(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ro=null;function Rf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ot(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Mf(e,t,a){switch(t=is(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Cs(e)}var zt=new Map,Of=new Set;function ss(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=B.d;B.d={f:j_,r:D_,D:R_,C:C_,L:M_,m:O_,X:U_,S:z_,M:L_};function j_(){var e=ma.f(),t=Wi();return e||t}function D_(e){var t=pl(e);t!==null&&t.tag===5&&t.type==="form"?Jc(t):ma.r(e)}var Fl=typeof document>"u"?null:document;function zf(e,t,a){var l=Fl;if(l&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Of.has(n)||(Of.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),nt(t,"link",e),We(t),l.head.appendChild(t)))}}function R_(e){ma.D(e),zf("dns-prefetch",e,null)}function C_(e,t){ma.C(e,t),zf("preconnect",e,t)}function M_(e,t,a){ma.L(e,t,a);var l=Fl;if(l&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Nt(a.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var i=n;switch(t){case"style":i=Zl(e);break;case"script":i=Kl(e)}zt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),zt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Xn(i))||t==="script"&&l.querySelector(Qn(i))||(t=l.createElement("link"),nt(t,"link",e),We(t),l.head.appendChild(t)))}}function O_(e,t){ma.m(e,t);var a=Fl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Kl(e)}if(!zt.has(i)&&(e=N({rel:"modulepreload",href:e},t),zt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qn(i)))return}l=a.createElement("link"),nt(l,"link",e),We(l),a.head.appendChild(l)}}}function z_(e,t,a){ma.S(e,t,a);var l=Fl;if(l&&e){var n=_l(l).hoistableStyles,i=Zl(e);t=t||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(Xn(i)))c.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=zt.get(i))&&Co(e,a);var p=r=l.createElement("link");We(p),nt(p,"link",e),p._p=new Promise(function(w,C){p.onload=w,p.onerror=C}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,rs(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function U_(e,t){ma.X(e,t);var a=Fl;if(a&&e){var l=_l(a).hoistableScripts,n=Kl(e),i=l.get(n);i||(i=a.querySelector(Qn(n)),i||(e=N({src:e,async:!0},t),(t=zt.get(n))&&Mo(e,t),i=a.createElement("script"),We(i),nt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function L_(e,t){ma.M(e,t);var a=Fl;if(a&&e){var l=_l(a).hoistableScripts,n=Kl(e),i=l.get(n);i||(i=a.querySelector(Qn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&Mo(e,t),i=a.createElement("script"),We(i),nt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Uf(e,t,a,l){var n=(n=ie.current)?ss(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Zl(a.href),a=_l(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zl(a.href);var i=_l(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Xn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zt.set(e,a),i||H_(n,e,a,r.state))),t&&l===null)throw Error(u(528,""));return r}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kl(a),a=_l(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Zl(e){return'href="'+Nt(e)+'"'}function Xn(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function H_(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),nt(t,"link",a),We(t),e.head.appendChild(t))}function Kl(e){return'[src="'+Nt(e)+'"]'}function Qn(e){return"script[async]"+e}function Hf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,We(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),nt(l,"style",n),rs(l,a.precedence,e),t.instance=l;case"stylesheet":n=Zl(a.href);var i=e.querySelector(Xn(n));if(i)return t.state.loading|=4,t.instance=i,We(i),i;l=Lf(a),(n=zt.get(n))&&Co(l,n),i=(e.ownerDocument||e).createElement("link"),We(i);var r=i;return r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),nt(i,"link",l),t.state.loading|=4,rs(i,a.precedence,e),t.instance=i;case"script":return i=Kl(a.src),(n=e.querySelector(Qn(i)))?(t.instance=n,We(n),n):(l=a,(n=zt.get(i))&&(l=N({},a),Mo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),We(n),nt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,rs(l,a.precedence,e));return t.instance}function rs(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var os=null;function kf(e,t,a){if(os===null){var l=new Map,n=os=new Map;n.set(a,l)}else n=os,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[rn]||i[et]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=l.get(r);c?c.push(i):l.set(r,[i])}}return l}function qf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function k_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q_(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Zl(l.href),i=t.querySelector(Xn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=us.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,We(i);return}i=t.ownerDocument||t,l=Lf(l),(n=zt.get(n))&&Co(l,n),i=i.createElement("link"),We(i);var r=i;r._p=new Promise(function(c,p){r.onload=c,r.onerror=p}),nt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=us.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Oo=0;function B_(e,t){return e.stylesheets&&e.count===0&&ds(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ds(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Oo===0&&(Oo=62500*x_());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ds(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Oo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function us(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ds(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cs=null;function ds(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cs=new Map,t.forEach(Y_,e),cs=null,us.call(e))}function Y_(e,t){if(!(t.state.loading&4)){var a=cs.get(e);if(a)var l=a.get(null);else{a=new Map,cs.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=us.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Fn={$$typeof:J,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function G_(e,t,a,l,n,i,r,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=As(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=As(0),this.hiddenUpdates=As(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Yf(e,t,a,l,n,i,r,c,p,w,C,z){return e=new G_(e,t,a,r,p,w,C,z,c),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=dr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},_r(i),e}function Gf(e){return e?(e=El,e):El}function Vf(e,t,a,l,n,i){n=Gf(n),l.context===null?l.context=n:l.pendingContext=n,l=Ta(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ea(e,l,t),a!==null&&(gt(a,e,t),Tn(a,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zo(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function Qf(e){if(e.tag===13||e.tag===31){var t=Ka(e,67108864);t!==null&&gt(t,e,67108864),zo(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var t=Tt();t=js(t);var a=Ka(e,t);a!==null&&gt(a,e,t),zo(e,t)}}var fs=!0;function V_(e,t,a,l){var n=R.T;R.T=null;var i=B.p;try{B.p=2,Uo(e,t,a,l)}finally{B.p=i,R.T=n}}function X_(e,t,a,l){var n=R.T;R.T=null;var i=B.p;try{B.p=8,Uo(e,t,a,l)}finally{B.p=i,R.T=n}}function Uo(e,t,a,l){if(fs){var n=Lo(l);if(n===null)bo(e,t,l,ms,a),Kf(e,l);else if(F_(n,e,t,a,l))l.stopPropagation();else if(Kf(e,l),t&4&&-1<Q_.indexOf(e)){for(;n!==null;){var i=pl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Va(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var p=1<<31-Ze(r);c.entanglements[1]|=p,r&=~p}Xt(i),(ve&6)===0&&(Ji=U()+500,Bn(0))}}break;case 31:case 13:c=Ka(i,2),c!==null&&gt(c,i,2),Wi(),zo(i,2)}if(i=Lo(l),i===null&&bo(e,t,l,ms,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else bo(e,t,l,null,a)}}function Lo(e){return e=Hs(e),Ho(e)}var ms=null;function Ho(e){if(ms=null,e=ml(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ms=e,null}function Zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case te:return 2;case it:return 8;case Be:case Ht:return 32;case Kt:return 268435456;default:return 32}default:return 32}}var ko=!1,La=null,Ha=null,ka=null,Zn=new Map,Kn=new Map,qa=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Jn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=pl(t),t!==null&&Qf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function F_(e,t,a,l,n){switch(t){case"focusin":return La=Jn(La,e,t,a,l,n),!0;case"dragenter":return Ha=Jn(Ha,e,t,a,l,n),!0;case"mouseover":return ka=Jn(ka,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Zn.set(i,Jn(Zn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Kn.set(i,Jn(Kn.get(i)||null,e,t,a,l,n)),!0}return!1}function Jf(e){var t=ml(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,ou(e.priority,function(){Ff(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,ou(e.priority,function(){Ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ls=l,a.target.dispatchEvent(l),Ls=null}else return t=pl(a),t!==null&&Qf(t),e.blockedOn=a,!1;t.shift()}return!0}function Pf(e,t,a){ps(e)&&a.delete(t)}function Z_(){ko=!1,La!==null&&ps(La)&&(La=null),Ha!==null&&ps(Ha)&&(Ha=null),ka!==null&&ps(ka)&&(ka=null),Zn.forEach(Pf),Kn.forEach(Pf)}function _s(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Z_)))}var hs=null;function Wf(e){hs!==e&&(hs=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hs===e&&(hs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Ho(l||a)===null)continue;break}var i=pl(a);i!==null&&(e.splice(t,3),t-=3,Ur(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Jl(e){function t(p){return _s(p,e)}La!==null&&_s(La,e),Ha!==null&&_s(Ha,e),ka!==null&&_s(ka,e),Zn.forEach(t),Kn.forEach(t);for(var a=0;a<qa.length;a++){var l=qa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Jf(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[dt]||null;if(typeof i=="function")r||Wf(a);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[dt]||null)c=r.formAction;else if(Ho(n)!==null)continue}else c=r.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Wf(a)}}}function $f(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function qo(e){this._internalRoot=e}gs.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=Tt();Vf(a,l,e,t,null,null)},gs.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vf(e.current,2,null,e,null,null),Wi(),t[fl]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ru();e={blockedOn:null,target:e,priority:t};for(var a=0;a<qa.length&&t!==0&&t<qa[a].priority;a++);qa.splice(a,0,e),a===0&&Jf(e)}};var If=d.version;if(If!=="19.2.3")throw Error(u(527,If,"19.2.3"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=_(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var K_={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Jt=ys.inject(K_),Ie=ys}catch{}}return Wn.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=id,i=sd,r=rd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Yf(e,1,!1,null,null,a,l,null,n,i,r,$f),e[fl]=t.current,xo(e),new qo(t)},Wn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",i=id,r=sd,c=rd,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Yf(e,1,!0,t,a??null,l,n,p,i,r,c,$f),t.context=Gf(null),a=t.current,l=Tt(),l=js(l),n=Ta(l),n.callback=null,Ea(a,n,l),a=l,t.current.lanes=a,sn(t,a),Xt(t),e[fl]=t.current,xo(e),new gs(t)},Wn.version="19.2.3",Wn}var um;function nh(){if(um)return Go.exports;um=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Go.exports=lh(),Go.exports}var ih=nh();var cm="popstate";function sh(o={}){function d(u,m){let{pathname:h,search:x,hash:j}=u.location;return Jo("",{pathname:h,search:x,hash:j},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:In(m)}return oh(d,f,null,o)}function Oe(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Qt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function rh(){return Math.random().toString(36).substring(2,10)}function dm(o,d){return{usr:o.state,key:o.key,idx:d}}function Jo(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Pl(d):d,state:f,key:d&&d.key||u||rh()}}function In({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Pl(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function oh(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:h=!1}=u,x=m.history,j="POP",v=null,_=D();_==null&&(_=0,x.replaceState({...x.state,idx:_},""));function D(){return(x.state||{idx:null}).idx}function N(){j="POP";let X=D(),K=X==null?null:X-_;_=X,v&&v({action:j,location:q.location,delta:K})}function k(X,K){j="PUSH";let G=Jo(q.location,X,K);_=D()+1;let J=dm(G,_),ye=q.createHref(G);try{x.pushState(J,"",ye)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;m.location.assign(ye)}h&&v&&v({action:j,location:q.location,delta:1})}function F(X,K){j="REPLACE";let G=Jo(q.location,X,K);_=D();let J=dm(G,_),ye=q.createHref(G);x.replaceState(J,"",ye),h&&v&&v({action:j,location:q.location,delta:0})}function H(X){return uh(X)}let q={get action(){return j},get location(){return o(m,x)},listen(X){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener(cm,N),v=X,()=>{m.removeEventListener(cm,N),v=null}},createHref(X){return d(m,X)},createURL:H,encodeLocation(X){let K=H(X);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:k,replace:F,go(X){return x.go(X)}};return q}function uh(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:In(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function hm(o,d,f="/"){return ch(o,d,f,!1)}function ch(o,d,f,u){let m=typeof d=="string"?Pl(d):d,h=_a(m.pathname||"/",f);if(h==null)return null;let x=gm(o);dh(x);let j=null;for(let v=0;j==null&&v<x.length;++v){let _=Sh(h);j=xh(x[v],_,u)}return j}function gm(o,d=[],f=[],u="",m=!1){let h=(x,j,v=m,_)=>{let D={relativePath:_===void 0?x.path||"":_,caseSensitive:x.caseSensitive===!0,childrenIndex:j,route:x};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(u)&&v)return;Oe(D.relativePath.startsWith(u),`Absolute route path "${D.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(u.length)}let N=pa([u,D.relativePath]),k=f.concat(D);x.children&&x.children.length>0&&(Oe(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),gm(x.children,d,k,N,v)),!(x.path==null&&!x.index)&&d.push({path:N,score:yh(N,x.index),routesMeta:k})};return o.forEach((x,j)=>{if(x.path===""||!x.path?.includes("?"))h(x,j);else for(let v of ym(x.path))h(x,j,!0,v)}),d}function ym(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(u.length===0)return m?[h,""]:[h];let x=ym(u.join("/")),j=[];return j.push(...x.map(v=>v===""?h:[h,v].join("/"))),m&&j.push(...x),j.map(v=>o.startsWith("/")&&v===""?"/":v)}function dh(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:vh(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var fh=/^:[\w-]+$/,mh=3,ph=2,_h=1,hh=10,gh=-2,fm=o=>o==="*";function yh(o,d){let f=o.split("/"),u=f.length;return f.some(fm)&&(u+=gh),d&&(u+=ph),f.filter(m=>!fm(m)).reduce((m,h)=>m+(fh.test(h)?mh:h===""?_h:hh),u)}function vh(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function xh(o,d,f=!1){let{routesMeta:u}=o,m={},h="/",x=[];for(let j=0;j<u.length;++j){let v=u[j],_=j===u.length-1,D=h==="/"?d:d.slice(h.length)||"/",N=Ss({path:v.relativePath,caseSensitive:v.caseSensitive,end:_},D),k=v.route;if(!N&&_&&f&&!u[u.length-1].route.index&&(N=Ss({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},D)),!N)return null;Object.assign(m,N.params),x.push({params:m,pathname:pa([h,N.pathname]),pathnameBase:Nh(pa([h,N.pathnameBase])),route:k}),N.pathnameBase!=="/"&&(h=pa([h,N.pathnameBase]))}return x}function Ss(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=bh(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let h=m[0],x=h.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:u.reduce((_,{paramName:D,isOptional:N},k)=>{if(D==="*"){let H=j[k]||"";x=h.slice(0,h.length-H.length).replace(/(.)\/+$/,"$1")}const F=j[k];return N&&!F?_[D]=void 0:_[D]=(F||"").replace(/%2F/g,"/"),_},{}),pathname:h,pathnameBase:x,pattern:o}}function bh(o,d=!1,f=!0){Qt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,j,v)=>(u.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function Sh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Qt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function _a(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}var wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Th(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Pl(o):o,h;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?h=mm(f.substring(1),"/"):h=mm(f,d)):h=d,{pathname:h,search:Ah(u),hash:jh(m)}}function mm(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Fo(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eh(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function vm(o){let d=Eh(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function xm(o,d,f,u=!1){let m;typeof o=="string"?m=Pl(o):(m={...o},Oe(!m.pathname||!m.pathname.includes("?"),Fo("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),Fo("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),Fo("#","search","hash",m)));let h=o===""||m.pathname==="",x=h?"/":m.pathname,j;if(x==null)j=f;else{let N=d.length-1;if(!u&&x.startsWith("..")){let k=x.split("/");for(;k[0]==="..";)k.shift(),N-=1;m.pathname=k.join("/")}j=N>=0?d[N]:"/"}let v=Th(m,j),_=x&&x!=="/"&&x.endsWith("/"),D=(h||x===".")&&f.endsWith("/");return!v.pathname.endsWith("/")&&(_||D)&&(v.pathname+="/"),v}var pa=o=>o.join("/").replace(/\/\/+/g,"/"),Nh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ah=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,jh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Dh=class{constructor(o,d,f,u=!1){this.status=o,this.statusText=d||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Rh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Ch(o){return o.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sm(o,d){let f=o;if(typeof f!="string"||!wh.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(bm)try{let h=new URL(window.location.href),x=f.startsWith("//")?new URL(h.protocol+f):new URL(f),j=_a(x.pathname,d);x.origin===h.origin&&j!=null?f=j+x.search+x.hash:m=!0}catch{Qt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var wm=["POST","PUT","PATCH","DELETE"];new Set(wm);var Mh=["GET",...wm];new Set(Mh);var Wl=E.createContext(null);Wl.displayName="DataRouter";var ws=E.createContext(null);ws.displayName="DataRouterState";var Oh=E.createContext(!1),Tm=E.createContext({isTransitioning:!1});Tm.displayName="ViewTransition";var zh=E.createContext(new Map);zh.displayName="Fetchers";var Uh=E.createContext(null);Uh.displayName="Await";var Ut=E.createContext(null);Ut.displayName="Navigation";var ei=E.createContext(null);ei.displayName="Location";var Ft=E.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var $o=E.createContext(null);$o.displayName="RouteError";var Em="REACT_ROUTER_ERROR",Lh="REDIRECT",Hh="ROUTE_ERROR_RESPONSE";function kh(o){if(o.startsWith(`${Em}:${Lh}:{`))try{let d=JSON.parse(o.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function qh(o){if(o.startsWith(`${Em}:${Hh}:{`))try{let d=JSON.parse(o.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Dh(d.status,d.statusText,d.data)}catch{}}function Bh(o,{relative:d}={}){Oe(ti(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=E.useContext(Ut),{hash:m,pathname:h,search:x}=ai(o,{relative:d}),j=h;return f!=="/"&&(j=h==="/"?f:pa([f,h])),u.createHref({pathname:j,search:x,hash:m})}function ti(){return E.useContext(ei)!=null}function rl(){return Oe(ti(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(ei).location}var Nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(o){E.useContext(Ut).static||E.useLayoutEffect(o)}function Yh(){let{isDataRoute:o}=E.useContext(Ft);return o?tg():Gh()}function Gh(){Oe(ti(),"useNavigate() may be used only in the context of a <Router> component.");let o=E.useContext(Wl),{basename:d,navigator:f}=E.useContext(Ut),{matches:u}=E.useContext(Ft),{pathname:m}=rl(),h=JSON.stringify(vm(u)),x=E.useRef(!1);return Am(()=>{x.current=!0}),E.useCallback((v,_={})=>{if(Qt(x.current,Nm),!x.current)return;if(typeof v=="number"){f.go(v);return}let D=xm(v,JSON.parse(h),m,_.relative==="path");o==null&&d!=="/"&&(D.pathname=D.pathname==="/"?d:pa([d,D.pathname])),(_.replace?f.replace:f.push)(D,_.state,_)},[d,f,h,m,o])}E.createContext(null);function Vh(){let{matches:o}=E.useContext(Ft),d=o[o.length-1];return d?d.params:{}}function ai(o,{relative:d}={}){let{matches:f}=E.useContext(Ft),{pathname:u}=rl(),m=JSON.stringify(vm(f));return E.useMemo(()=>xm(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Xh(o,d){return jm(o,d)}function jm(o,d,f,u,m){Oe(ti(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=E.useContext(Ut),{matches:x}=E.useContext(Ft),j=x[x.length-1],v=j?j.params:{},_=j?j.pathname:"/",D=j?j.pathnameBase:"/",N=j&&j.route;{let G=N&&N.path||"";Rm(_,!N||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let k=rl(),F;if(d){let G=typeof d=="string"?Pl(d):d;Oe(D==="/"||G.pathname?.startsWith(D),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${G.pathname}" was given in the \`location\` prop.`),F=G}else F=k;let H=F.pathname||"/",q=H;if(D!=="/"){let G=D.replace(/^\//,"").split("/");q="/"+H.replace(/^\//,"").split("/").slice(G.length).join("/")}let X=hm(o,{pathname:q});Qt(N||X!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Qt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Jh(X&&X.map(G=>Object.assign({},G,{params:Object.assign({},v,G.params),pathname:pa([D,h.encodeLocation?h.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?D:pa([D,h.encodeLocation?h.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),x,f,u,m);return d&&K?E.createElement(ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},K):K}function Qh(){let o=eg(),d=Rh(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},x=null;return console.error("Error handled by React Router default ErrorBoundary:",o),x=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:h},"ErrorBoundary")," or"," ",E.createElement("code",{style:h},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),f?E.createElement("pre",{style:m},f):null,x)}var Fh=E.createElement(Qh,null),Dm=class extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.onError?this.props.onError(o,d):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const f=qh(o.digest);f&&(o=f)}let d=o!==void 0?E.createElement(Ft.Provider,{value:this.props.routeContext},E.createElement($o.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?E.createElement(Zh,{error:o},d):d}};Dm.contextType=Oh;var Zo=new WeakMap;function Zh({children:o,error:d}){let{basename:f}=E.useContext(Ut);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=kh(d.digest);if(u){let m=Zo.get(d);if(m)throw m;let h=Sm(u.location,f);if(bm&&!Zo.get(d))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw Zo.set(d,x),x}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return o}function Kh({routeContext:o,match:d,children:f}){let u=E.useContext(Wl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(Ft.Provider,{value:o},f)}function Jh(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let h=o,x=f?.errors;if(x!=null){let D=h.findIndex(N=>N.route.id&&x?.[N.route.id]!==void 0);Oe(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),h=h.slice(0,Math.min(h.length,D+1))}let j=!1,v=-1;if(f)for(let D=0;D<h.length;D++){let N=h[D];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(v=D),N.route.id){let{loaderData:k,errors:F}=f,H=N.route.loader&&!k.hasOwnProperty(N.route.id)&&(!F||F[N.route.id]===void 0);if(N.route.lazy||H){j=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let _=f&&u?(D,N)=>{u(D,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:Ch(f.matches),errorInfo:N})}:void 0;return h.reduceRight((D,N,k)=>{let F,H=!1,q=null,X=null;f&&(F=x&&N.route.id?x[N.route.id]:void 0,q=N.route.errorElement||Fh,j&&(v<0&&k===0?(Rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,X=null):v===k&&(H=!0,X=N.route.hydrateFallbackElement||null)));let K=d.concat(h.slice(0,k+1)),G=()=>{let J;return F?J=q:H?J=X:N.route.Component?J=E.createElement(N.route.Component,null):N.route.element?J=N.route.element:J=D,E.createElement(Kh,{match:N,routeContext:{outlet:D,matches:K,isDataRoute:f!=null},children:J})};return f&&(N.route.ErrorBoundary||N.route.errorElement||k===0)?E.createElement(Dm,{location:f.location,revalidation:f.revalidation,component:q,error:F,children:G(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:_}):G()},null)}function Io(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ph(o){let d=E.useContext(Wl);return Oe(d,Io(o)),d}function Wh(o){let d=E.useContext(ws);return Oe(d,Io(o)),d}function $h(o){let d=E.useContext(Ft);return Oe(d,Io(o)),d}function eu(o){let d=$h(o),f=d.matches[d.matches.length-1];return Oe(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Ih(){return eu("useRouteId")}function eg(){let o=E.useContext($o),d=Wh("useRouteError"),f=eu("useRouteError");return o!==void 0?o:d.errors?.[f]}function tg(){let{router:o}=Ph("useNavigate"),d=eu("useNavigate"),f=E.useRef(!1);return Am(()=>{f.current=!0}),E.useCallback(async(m,h={})=>{Qt(f.current,Nm),f.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:d,...h}))},[o,d])}var pm={};function Rm(o,d,f){!d&&!pm[o]&&(pm[o]=!0,Qt(!1,f))}E.memo(ag);function ag({routes:o,future:d,state:f,onError:u}){return jm(o,void 0,f,u,d)}function Ya(o){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lg({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:h=!1,unstable_useTransitions:x}){Oe(!ti(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=o.replace(/^\/*/,"/"),v=E.useMemo(()=>({basename:j,navigator:m,static:h,unstable_useTransitions:x,future:{}}),[j,m,h,x]);typeof f=="string"&&(f=Pl(f));let{pathname:_="/",search:D="",hash:N="",state:k=null,key:F="default"}=f,H=E.useMemo(()=>{let q=_a(_,j);return q==null?null:{location:{pathname:q,search:D,hash:N,state:k,key:F},navigationType:u}},[j,_,D,N,k,F,u]);return Qt(H!=null,`<Router basename="${j}"> is not able to match the URL "${_}${D}${N}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:E.createElement(Ut.Provider,{value:v},E.createElement(ei.Provider,{children:d,value:H}))}function ng({children:o,location:d}){return Xh(Po(o),d)}function Po(o,d=[]){let f=[];return E.Children.forEach(o,(u,m)=>{if(!E.isValidElement(u))return;let h=[...d,m];if(u.type===E.Fragment){f.push.apply(f,Po(u.props.children,h));return}Oe(u.type===Ya,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let x={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(x.children=Po(u.props.children,h)),f.push(x)}),f}var xs="get",bs="application/x-www-form-urlencoded";function Ts(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function ig(o){return Ts(o)&&o.tagName.toLowerCase()==="button"}function sg(o){return Ts(o)&&o.tagName.toLowerCase()==="form"}function rg(o){return Ts(o)&&o.tagName.toLowerCase()==="input"}function og(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ug(o,d){return o.button===0&&(!d||d==="_self")&&!og(o)}var vs=null;function cg(){if(vs===null)try{new FormData(document.createElement("form"),0),vs=!1}catch{vs=!0}return vs}var dg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ko(o){return o!=null&&!dg.has(o)?(Qt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):o}function fg(o,d){let f,u,m,h,x;if(sg(o)){let j=o.getAttribute("action");u=j?_a(j,d):null,f=o.getAttribute("method")||xs,m=Ko(o.getAttribute("enctype"))||bs,h=new FormData(o)}else if(ig(o)||rg(o)&&(o.type==="submit"||o.type==="image")){let j=o.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||j.getAttribute("action");if(u=v?_a(v,d):null,f=o.getAttribute("formmethod")||j.getAttribute("method")||xs,m=Ko(o.getAttribute("formenctype"))||Ko(j.getAttribute("enctype"))||bs,h=new FormData(j,o),!cg()){let{name:_,type:D,value:N}=o;if(D==="image"){let k=_?`${_}.`:"";h.append(`${k}x`,"0"),h.append(`${k}y`,"0")}else _&&h.append(_,N)}}else{if(Ts(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=xs,u=null,m=bs,x=o}return h&&m==="text/plain"&&(x=h,h=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tu(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function mg(o,d,f,u){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:d&&_a(m.pathname,d)==="/"?m.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function pg(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _g(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function hg(o,d,f){let u=await Promise.all(o.map(async m=>{let h=d.routes[m.route.id];if(h){let x=await pg(h,f);return x.links?x.links():[]}return[]}));return xg(u.flat(1).filter(_g).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function _m(o,d,f,u,m,h){let x=(v,_)=>f[_]?v.route.id!==f[_].route.id:!0,j=(v,_)=>f[_].pathname!==v.pathname||f[_].route.path?.endsWith("*")&&f[_].params["*"]!==v.params["*"];return h==="assets"?d.filter((v,_)=>x(v,_)||j(v,_)):h==="data"?d.filter((v,_)=>{let D=u.routes[v.route.id];if(!D||!D.hasLoader)return!1;if(x(v,_)||j(v,_))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function gg(o,d,{includeHydrateFallback:f}={}){return yg(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function yg(o){return[...new Set(o)]}function vg(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function xg(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let h=JSON.stringify(vg(m));return f.has(h)||(f.add(h),u.push({key:h,link:m})),u},[])}function Cm(){let o=E.useContext(Wl);return tu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function bg(){let o=E.useContext(ws);return tu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var au=E.createContext(void 0);au.displayName="FrameworkContext";function Mm(){let o=E.useContext(au);return tu(o,"You must render this element inside a <HydratedRouter> element"),o}function Sg(o,d){let f=E.useContext(au),[u,m]=E.useState(!1),[h,x]=E.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:_,onMouseLeave:D,onTouchStart:N}=d,k=E.useRef(null);E.useEffect(()=>{if(o==="render"&&x(!0),o==="viewport"){let q=K=>{K.forEach(G=>{x(G.isIntersecting)})},X=new IntersectionObserver(q,{threshold:.5});return k.current&&X.observe(k.current),()=>{X.disconnect()}}},[o]),E.useEffect(()=>{if(u){let q=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(q)}}},[u]);let F=()=>{m(!0)},H=()=>{m(!1),x(!1)};return f?o!=="intent"?[h,k,{}]:[h,k,{onFocus:$n(j,F),onBlur:$n(v,H),onMouseEnter:$n(_,F),onMouseLeave:$n(D,H),onTouchStart:$n(N,F)}]:[!1,k,{}]}function $n(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function wg({page:o,...d}){let{router:f}=Cm(),u=E.useMemo(()=>hm(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?E.createElement(Eg,{page:o,matches:u,...d}):null}function Tg(o){let{manifest:d,routeModules:f}=Mm(),[u,m]=E.useState([]);return E.useEffect(()=>{let h=!1;return hg(o,d,f).then(x=>{h||m(x)}),()=>{h=!0}},[o,d,f]),u}function Eg({page:o,matches:d,...f}){let u=rl(),{future:m,manifest:h,routeModules:x}=Mm(),{basename:j}=Cm(),{loaderData:v,matches:_}=bg(),D=E.useMemo(()=>_m(o,d,_,h,u,"data"),[o,d,_,h,u]),N=E.useMemo(()=>_m(o,d,_,h,u,"assets"),[o,d,_,h,u]),k=E.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let q=new Set,X=!1;if(d.forEach(G=>{let J=h.routes[G.route.id];!J||!J.hasLoader||(!D.some(ye=>ye.route.id===G.route.id)&&G.route.id in v&&x[G.route.id]?.shouldRevalidate||J.hasClientLoader?X=!0:q.add(G.route.id))}),q.size===0)return[];let K=mg(o,j,m.unstable_trailingSlashAwareDataRequests,"data");return X&&q.size>0&&K.searchParams.set("_routes",d.filter(G=>q.has(G.route.id)).map(G=>G.route.id).join(",")),[K.pathname+K.search]},[j,m.unstable_trailingSlashAwareDataRequests,v,u,h,D,d,o,x]),F=E.useMemo(()=>gg(N,h),[N,h]),H=Tg(N);return E.createElement(E.Fragment,null,k.map(q=>E.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...f})),F.map(q=>E.createElement("link",{key:q,rel:"modulepreload",href:q,...f})),H.map(({key:q,link:X})=>E.createElement("link",{key:q,nonce:f.nonce,...X,crossOrigin:X.crossOrigin??f.crossOrigin})))}function Ng(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ag&&(window.__reactRouterVersion="7.13.0")}catch{}function jg({basename:o,children:d,unstable_useTransitions:f,window:u}){let m=E.useRef();m.current==null&&(m.current=sh({window:u,v5Compat:!0}));let h=m.current,[x,j]=E.useState({action:h.action,location:h.location}),v=E.useCallback(_=>{f===!1?j(_):E.startTransition(()=>j(_))},[f]);return E.useLayoutEffect(()=>h.listen(v),[h,v]),E.createElement(lg,{basename:o,children:d,location:x.location,navigationType:x.action,navigator:h,unstable_useTransitions:f})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=E.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:h,replace:x,state:j,target:v,to:_,preventScrollReset:D,viewTransition:N,unstable_defaultShouldRevalidate:k,...F},H){let{basename:q,unstable_useTransitions:X}=E.useContext(Ut),K=typeof _=="string"&&Om.test(_),G=Sm(_,q);_=G.to;let J=Bh(_,{relative:m}),[ye,de,Se]=Sg(u,F),ee=Mg(_,{replace:x,state:j,target:v,preventScrollReset:D,relative:m,viewTransition:N,unstable_defaultShouldRevalidate:k,unstable_useTransitions:X});function we(Qe){d&&d(Qe),Qe.defaultPrevented||ee(Qe)}let Le=E.createElement("a",{...F,...Se,href:G.absoluteURL||J,onClick:G.isExternal||h?d:we,ref:Ng(H,de),target:v,"data-discover":!K&&f==="render"?"true":void 0});return ye&&!K?E.createElement(E.Fragment,null,Le,E.createElement(wg,{page:J})):Le});je.displayName="Link";var Dg=E.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:h,to:x,viewTransition:j,children:v,..._},D){let N=ai(x,{relative:_.relative}),k=rl(),F=E.useContext(ws),{navigator:H,basename:q}=E.useContext(Ut),X=F!=null&&Hg(N)&&j===!0,K=H.encodeLocation?H.encodeLocation(N).pathname:N.pathname,G=k.pathname,J=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;f||(G=G.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&q&&(J=_a(J,q)||J);const ye=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let de=G===K||!m&&G.startsWith(K)&&G.charAt(ye)==="/",Se=J!=null&&(J===K||!m&&J.startsWith(K)&&J.charAt(K.length)==="/"),ee={isActive:de,isPending:Se,isTransitioning:X},we=de?d:void 0,Le;typeof u=="function"?Le=u(ee):Le=[u,de?"active":null,Se?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Qe=typeof h=="function"?h(ee):h;return E.createElement(je,{..._,"aria-current":we,className:Le,ref:D,style:Qe,to:x,viewTransition:j},typeof v=="function"?v(ee):v)});Dg.displayName="NavLink";var Rg=E.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:h,method:x=xs,action:j,onSubmit:v,relative:_,preventScrollReset:D,viewTransition:N,unstable_defaultShouldRevalidate:k,...F},H)=>{let{unstable_useTransitions:q}=E.useContext(Ut),X=Ug(),K=Lg(j,{relative:_}),G=x.toLowerCase()==="get"?"get":"post",J=typeof j=="string"&&Om.test(j),ye=de=>{if(v&&v(de),de.defaultPrevented)return;de.preventDefault();let Se=de.nativeEvent.submitter,ee=Se?.getAttribute("formmethod")||x,we=()=>X(Se||de.currentTarget,{fetcherKey:d,method:ee,navigate:f,replace:m,state:h,relative:_,preventScrollReset:D,viewTransition:N,unstable_defaultShouldRevalidate:k});q&&f!==!1?E.startTransition(()=>we()):we()};return E.createElement("form",{ref:H,method:G,action:K,onSubmit:u?v:ye,...F,"data-discover":!J&&o==="render"?"true":void 0})});Rg.displayName="Form";function Cg(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zm(o){let d=E.useContext(Wl);return Oe(d,Cg(o)),d}function Mg(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:j,unstable_useTransitions:v}={}){let _=Yh(),D=rl(),N=ai(o,{relative:h});return E.useCallback(k=>{if(ug(k,d)){k.preventDefault();let F=f!==void 0?f:In(D)===In(N),H=()=>_(o,{replace:F,state:u,preventScrollReset:m,relative:h,viewTransition:x,unstable_defaultShouldRevalidate:j});v?E.startTransition(()=>H()):H()}},[D,_,N,f,u,d,o,m,h,x,j,v])}var Og=0,zg=()=>`__${String(++Og)}__`;function Ug(){let{router:o}=zm("useSubmit"),{basename:d}=E.useContext(Ut),f=Ih(),u=o.fetch,m=o.navigate;return E.useCallback(async(h,x={})=>{let{action:j,method:v,encType:_,formData:D,body:N}=fg(h,d);if(x.navigate===!1){let k=x.fetcherKey||zg();await u(k,f,x.action||j,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:D,body:N,formMethod:x.method||v,formEncType:x.encType||_,flushSync:x.flushSync})}else await m(x.action||j,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:D,body:N,formMethod:x.method||v,formEncType:x.encType||_,replace:x.replace,state:x.state,fromRouteId:f,flushSync:x.flushSync,viewTransition:x.viewTransition})},[u,m,d,f])}function Lg(o,{relative:d}={}){let{basename:f}=E.useContext(Ut),u=E.useContext(Ft);Oe(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),h={...ai(o||".",{relative:d})},x=rl();if(o==null){h.search=x.search;let j=new URLSearchParams(h.search),v=j.getAll("index");if(v.some(D=>D==="")){j.delete("index"),v.filter(N=>N).forEach(N=>j.append("index",N));let D=j.toString();h.search=D?`?${D}`:""}}return(!o||o===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:pa([f,h.pathname])),In(h)}function Hg(o,{relative:d}={}){let f=E.useContext(Tm);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=zm("useViewTransitionState"),m=ai(o,{relative:d});if(!f.isTransitioning)return!1;let h=_a(f.currentLocation.pathname,u)||f.currentLocation.pathname,x=_a(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Ss(m.pathname,x)!=null||Ss(m.pathname,h)!=null}const kg=()=>{const[o,d]=E.useState(!1),f=()=>{d(!o)},u=()=>{d(!1)};return s.jsxs("nav",{className:"bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700",children:[s.jsxs("div",{className:"max-w-7xl flex items-center justify-between mx-auto px-4 py-4",children:[s.jsxs(je,{to:"/",className:"flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity",onClick:u,children:[s.jsx("div",{className:"h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0",children:s.jsx("span",{className:"text-sm font-bold text-slate-900",children:"EJ"})}),s.jsx("span",{className:"text-lg sm:text-xl font-semibold text-white hidden sm:inline",children:"Portfolio"})]}),s.jsxs("button",{onClick:f,className:"md:hidden flex flex-col space-y-1.5 focus:outline-none","aria-label":"Toggle menu",children:[s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"rotate-45 translate-y-2":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"opacity-0":""}`}),s.jsx("span",{className:`block w-6 h-0.5 bg-white transition-all duration-300 ${o?"-rotate-45 -translate-y-2":""}`})]}),s.jsxs("ul",{className:"hidden md:flex flex-row space-x-8",children:[s.jsx("li",{children:s.jsx(je,{to:"/",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Home"})}),s.jsx("li",{children:s.jsx(je,{to:"/about",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"About"})}),s.jsx("li",{children:s.jsx(je,{to:"/projects",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Projects"})}),s.jsx("li",{children:s.jsx(je,{to:"/trading",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Trading"})}),s.jsx("li",{children:s.jsx(je,{to:"/resume",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Resume"})}),s.jsx("li",{children:s.jsx(je,{to:"/contact",className:"text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200",children:"Contact"})})]})]}),o&&s.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:s.jsxs("ul",{className:"flex flex-col space-y-0",children:[s.jsx("li",{children:s.jsx(je,{to:"/",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Home"})}),s.jsx("li",{children:s.jsx(je,{to:"/about",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"About"})}),s.jsx("li",{children:s.jsx(je,{to:"/projects",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Projects"})}),s.jsx("li",{children:s.jsx(je,{to:"/trading",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Trading"})}),s.jsx("li",{children:s.jsx(je,{to:"/resume",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Resume"})}),s.jsx("li",{children:s.jsx(je,{to:"/contact",className:"text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200",onClick:u,children:"Contact"})})]})})]})},qg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 md:pt-20 md:pb-32",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsx("div",{className:"grid grid-cols-1 gap-8 md:gap-12 items-center",children:s.jsxs("div",{className:"space-y-4 md:space-y-6 z-10",children:[s.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",children:["Hi, my name is ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Eric Jackson"})]}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed",children:"Applied mathematics & computer science student focused on data science, machine learning, and analytical systems."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4",children:[s.jsx(je,{to:"/projects",className:"px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center",children:"View My Work"}),s.jsx(je,{to:"/about",className:"px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-colors text-center shadow-lg shadow-purple-500/50 hover:shadow-purple-600/75",children:"Learn About Me"}),s.jsx(je,{to:"/contact",className:"px-6 sm:px-8 py-2 sm:py-3 border-2 border-slate-400 hover:border-white text-white font-semibold rounded-lg transition-colors text-center",children:"Get In Touch"})]})]})})})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-2 md:mb-4",children:"Featured Projects"}),s.jsx("p",{className:"text-slate-300 mb-8 md:mb-12 text-base md:text-lg",children:"Personal projects focused on data-driven modeling and real-world systems"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Live Trading"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Built a Python-based automated trading framework with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, and Alpaca API order execution."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Asyncio"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"WebSockets"}),s.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:"Alpaca API"})]}),s.jsx(je,{to:"/projects/project-demo/2",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]}),s.jsxs("div",{className:"group bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-blue-400",children:[s.jsx("div",{className:"h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center",children:s.jsx("p",{className:"text-slate-300 font-semibold text-sm sm:text-base",children:"Sports Analytics"})}),s.jsxs("div",{className:"p-4 md:p-6 space-y-3",children:[s.jsx("h3",{className:"text-lg md:text-xl font-bold text-white",children:"NFL Rushing Yards Prediction"}),s.jsx("p",{className:"text-slate-300 text-sm",children:"Developed an XGBoost regression pipeline using historical NFL data, engineered rolling workload and efficiency features, and evaluated performance on out-of-sample seasons."}),s.jsxs("div",{className:"flex gap-2 flex-wrap pt-2",children:[s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Python"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"XGBoost"}),s.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs",children:"Feature Engineering"})]}),s.jsx(je,{to:"/projects/project-demo/1",className:"inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm",children:"View Project →"})]})]})]}),s.jsx("div",{className:"text-center mt-8 md:mt-12",children:s.jsx(je,{to:"/projects",className:"inline-block px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base",children:"View All Projects"})})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-center",children:"Skills & Technologies"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6",children:["Python","Pandas","SQL","Machine Learning","Statistical Modeling","AWS","Docker","Git"].map(o=>s.jsx("div",{className:"bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg p-4 md:p-6 text-center border border-slate-600 hover:border-blue-400",children:s.jsx("p",{className:"text-white font-semibold text-sm md:text-base",children:o})},o))})]})}),s.jsx("section",{className:"py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-4 md:space-y-6",children:[s.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white",children:"Let's connect"}),s.jsx("p",{className:"text-base sm:text-lg md:text-xl text-blue-100",children:"Open to internships, research, and data-driven projects in analytics, machine learning, and applied math."}),s.jsx(je,{to:"/contact",className:"inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors text-sm sm:text-base",children:"Contact Me"})]})})]}),Bg=()=>s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"About Eric Jackson"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-20 blur-3xl"}),s.jsx("div",{className:"relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 overflow-hidden",children:s.jsx("img",{src:"good_boy_pic1.jpeg",alt:"Profile",className:"w-full h-full object-cover rounded-lg"})})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600 space-y-4",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Facts"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Full Name"}),s.jsx("p",{className:"text-white font-semibold",children:"Eric Jackson"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Education"}),s.jsx("p",{className:"text-white font-semibold",children:"Applied Math & CS"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"University"}),s.jsx("p",{className:"text-white font-semibold",children:"University of Delaware"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400 text-sm",children:"Specialization"}),s.jsx("p",{className:"text-white font-semibold",children:"Data Science & ML"})]})]})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("a",{href:"https://www.linkedin.com/in/eric-jackson27",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"in"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white text-sm font-bold",children:"GH"}),s.jsx("a",{href:"#",className:"w-12 h-12 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors text-white",children:"✉"})]})]}),s.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Professional Summary"}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed mb-4",children:"I'm a Data Science enthusiast and incoming graduate with a degree in Applied Mathematics and Computer Science from the University of Delaware's Honors College. Currently, I'm passionate about building machine learning solutions that drive real business value, from predictive analytics to live trading frameworks and ML models."}),s.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"My experience spans data pipeline development, feature engineering, and deploying production ML models. I combine strong mathematical foundations with practical software engineering to solve complex data-driven problems. I'm particularly interested in financial analytics and sports data science."})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Work Experience"}),s.jsx("div",{className:"space-y-6",children:s.jsxs("div",{className:"border-l-4 border-blue-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Data Science Intern"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Technologies: Python, SQL, K-Means Clustering"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Extracted user-level data from Amazon Redshift using SQL to build datasets for K-Means clustering, enabling actionable insights into customer behavior"}),s.jsx("li",{children:"• Diagnosed and resolved data and modeling issues in production K-Means pipeline, including low-signal features, misinterpreted clusters, and inconsistent behavioral definitions"}),s.jsx("li",{children:"• Redesigned feature engineering pipeline, increasing silhouette scores and producing more interpretable clusters for effective customer segmentation"}),s.jsx("li",{children:"• Streamlined cluster usability for downstream analytics, improving decision-making for marketing campaigns"})]})]})})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Education"}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-6 border border-slate-600",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Bachelor of Science in Applied Mathematics & Computer Science"}),s.jsx("p",{className:"text-blue-400 font-semibold",children:"University of Delaware, Newark, DE"}),s.jsx("p",{className:"text-slate-400 text-sm",children:"Honors College | Expected May 2027"})]})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"University Activities"}),s.jsxs("div",{className:"border-l-4 border-cyan-400 pl-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white",children:"Paid Instructional Assistant"}),s.jsx("p",{className:"text-cyan-400 font-semibold",children:"General Computer Science for Engineers"}),s.jsxs("ul",{className:"text-slate-300 mt-3 space-y-2 text-sm",children:[s.jsx("li",{children:"• Lead lectures assisting engineering students new to computer science in understanding core programming concepts"}),s.jsx("li",{children:"• Provide one-on-one support to students in Python programming, troubleshooting, and reinforcing best practices"})]})]})]})]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-blue-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-blue-400 mb-4",children:"Languages"}),s.jsx("div",{className:"space-y-2",children:["Python","SQL","C++","C","JavaScript","TypeScript"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-cyan-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:"ML & Data Science"}),s.jsx("div",{className:"space-y-2",children:["scikit-learn","XGBoost","Feature Engineering","Statistical Modeling","Hypothesis Testing","EDA"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-4",children:"Data & Visualization"}),s.jsx("div",{className:"space-y-2",children:["Pandas","NumPy","Matplotlib","Seaborn","Plotly"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-purple-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-green-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-4",children:"Cloud & Infrastructure"}),s.jsx("div",{className:"space-y-2",children:["AWS (S3, Redshift, ECS, ECR)","Docker","Firebase","WebSocket Streaming"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full"}),s.jsx("span",{className:"text-slate-300 text-sm",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-yellow-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-yellow-400 mb-4",children:"Developer Tools"}),s.jsx("div",{className:"space-y-2",children:["Git","Bash","Jupyter Notebook","Visual Studio Code","Docker"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]}),s.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-pink-400 transition-colors",children:[s.jsx("h3",{className:"text-2xl font-bold text-pink-400 mb-4",children:"Databases"}),s.jsx("div",{className:"space-y-2",children:["Amazon Redshift","SQL Databases","Firebase"].map(o=>s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-pink-400 rounded-full"}),s.jsx("span",{className:"text-slate-300",children:o})]},o))})]})]})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Let's Collaborate"}),s.jsx("p",{className:"text-xl text-blue-100",children:"I'm always excited to discuss data science projects, ML opportunities, or collaborate on interesting problems."}),s.jsx(je,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]}),Yg=()=>{const[o,d]=E.useState("all"),[f,u]=E.useState(new Set),m=[{id:1,title:"Sports Analytics Predictions",category:"machine-learning",shortDesc:"NFL rushing yards prediction using XGBoost",fullDesc:"Built an end-to-end machine learning pipeline to predict NFL rushing yards using historical game data. The model engineers rolling workload, efficiency, and matchup features to achieve competitive predictive performance.",technologies:["Python","XGBoost","Pandas","Scikit-learn"],metrics:[{label:"RMSE",value:"27.8 yards"},{label:"R² Score",value:"0.46"},{label:"Classification ROC-AUC",value:"0.626"}],image:"📊",github:"#",demo:"project-demo/1",highlights:["Feature engineering from historical game data","Out-of-sample validation on full season","Classification model for over/under predictions","Actionable insights for sports analytics"]},{id:2,title:"Live Trading Framework",category:"systems-engineering",shortDesc:"Automated intraday SPY options trading framework",fullDesc:"Built a live Python trading framework for SPY options with real-time Tastytrade dxFeed WebSocket data streaming, pluggable ML model integration, Alpaca API order execution, and automated daily shutdown at market close.",technologies:["Python","WebSocket","Alpaca API","Asyncio","Docker"],metrics:[{label:"Data Source",value:"Tastytrade dxFeed"},{label:"Execution",value:"Alpaca API"},{label:"Architecture",value:"Async/Event-driven"}],image:"⚙️",github:"#",demo:"project-demo/2",highlights:["Real-time market data streaming via Tastytrade dxFeed WebSocket","Pluggable strategy architecture with async event loop","Alpaca API for automated order execution","Position tracking with entry/exit prices and P&L","Daily auto-shutdown at market close","Configurable timeframes and data requirements"]},{id:3,title:"Volatility Breakout Prediction Model",category:"machine-learning",shortDesc:"XGBoost model for predicting volatility breakouts in SPY options",fullDesc:"Built XGBoost binary classification model to predict when price will move 5x the average true range (measured from market open) within 30 minutes. Uses expanding intraday volatility, multi-timeframe ATR windows, VWAP distance metrics, and volume patterns for regime detection.",technologies:["Python","XGBoost","Pandas","Scikit-learn","NumPy"],metrics:[{label:"ROC-AUC",value:"0.686"},{label:"Target",value:"5x ATR from Open"},{label:"Training Data",value:"1 Year"}],image:"📈",github:"#",demo:"project-demo/3",highlights:["Multi-timeframe ATR analysis (5, 30, 60, 120 minute windows)","VWAP distance metrics with rolling statistics","Binary classification for volatility breakout prediction","Parallel label generation for large datasets","Model calibration analysis with Brier score and log loss","Feature engineering with interaction terms"]},{id:4,title:"Portfolio Website",category:"web-development",shortDesc:"Personal portfolio built with React & Tailwind CSS",fullDesc:"A modern, responsive portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS for a clean, professional design.",technologies:["React","TypeScript","Tailwind CSS","Vite"],metrics:[{label:"Framework",value:"React 19"},{label:"Styling",value:"Tailwind CSS"},{label:"Build Tool",value:"Vite"}],image:"💼",github:"#",demo:"/",highlights:["Responsive design for all devices","Dark theme with modern aesthetics","Project showcase with filters","Contact form integration","Performance optimized"]},{id:5,title:"Options Profit Prediction Model",category:"machine-learning",shortDesc:"XGBoost model predicting profitable SPY options trades",fullDesc:"Built binary classifier with 100+ engineered features to predict end-of-day profitability for SPY options. Includes SHAP-driven interaction features, intraday positioning metrics, and EV analysis by strike/threshold. Deployed to AWS S3 for production inference.",technologies:["Python","XGBoost","SHAP","AWS S3","Pandas"],metrics:[{label:"Features",value:"100+"},{label:"Target",value:"EOD Profit"},{label:"Deployment",value:"AWS S3"}],image:"💰",github:"#",demo:"project-demo/5",highlights:["100+ engineered features across price, volume, and microstructure","SHAP analysis for feature discovery and interaction terms","Intraday positioning features (distance from day high/low)","Expected value analysis by OTM strike and confidence threshold","Statistical validation with paired t-tests","Production deployment to AWS S3"]},{id:6,title:"Intraday Direction Classifier",category:"machine-learning",shortDesc:"XGBoost model for second-level SPY directional prediction",fullDesc:"Multi-class XGBoost classifier predicting SPY near-term movement intensity (Heavy Down, Moderate Down, Neutral, Moderate Up, Heavy Up) at 1-second intervals. Features engineered by colleague; I performed feature selection and strategy optimization with multi-threaded backtesting framework.",technologies:["Python","XGBoost","Pandas","ThreadPoolExecutor"],metrics:[{label:"Overall Accuracy",value:"60%"},{label:"Classes",value:"5 (Directional)"},{label:"Frequency",value:"1-second"}],image:"🎯",github:"#",demo:"project-demo/6",highlights:["Multi-class classifier for intraday momentum (5 classes)","Feature selection from colleague's proprietary indicators","Options trading strategy with consecutive signal logic","Multi-threaded backtesting engine for fast validation","Position management with 10-minute hold duration","Risk controls with time-based entry/exit cutoffs","Real-time option pricing from Polygon API"]}],h=[{value:"all",label:"All Projects"},{value:"machine-learning",label:"Machine Learning"},{value:"systems-engineering",label:"Systems Engineering"},{value:"web-development",label:"Web Development"}],x=o==="all"?m:m.filter(v=>v.category===o),j=v=>{u(_=>{const D=new Set(_);return D.has(v)?D.delete(v):D.add(v),D})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6",children:"My Projects"}),s.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"A collection of data science, machine learning, and web development projects I've built"}),s.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"})]})}),s.jsx("section",{className:"py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[s.jsx("label",{htmlFor:"category-filter",className:"text-white font-semibold",children:"Filter by category:"}),s.jsx("select",{id:"category-filter",value:o,onChange:v=>d(v.target.value),className:"px-6 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-colors cursor-pointer",children:h.map(v=>s.jsx("option",{value:v.value,children:v.label},v.value))}),s.jsxs("div",{className:"text-slate-400 text-sm",children:["Showing ",x.length," project",x.length!==1?"s":""]})]})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:x.length===0?s.jsx("div",{className:"text-center py-12",children:s.jsx("p",{className:"text-xl text-slate-400",children:"No projects found in this category."})}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:x.map(v=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col",children:[s.jsx("div",{className:"h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border-b border-slate-600",children:s.jsx("span",{className:"text-6xl",children:v.image})}),s.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[s.jsx("div",{className:"mb-3",children:s.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold",children:h.find(_=>_.value===v.category)?.label})}),s.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:v.title}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:v.shortDesc}),s.jsx("p",{className:"text-slate-300 text-sm mb-6 flex-grow",children:v.fullDesc}),s.jsx("div",{className:"grid grid-cols-3 gap-3 mb-6",children:v.metrics.map((_,D)=>s.jsxs("div",{className:"bg-slate-600/50 rounded p-3 text-center",children:[s.jsx("p",{className:"text-slate-400 text-xs mb-1",children:_.label}),s.jsx("p",{className:"text-white font-bold text-sm",children:_.value})]},D))}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"TECHNOLOGIES"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:v.technologies.map(_=>s.jsx("span",{className:"px-3 py-1 bg-slate-600/70 text-slate-200 rounded text-xs",children:_},_))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("p",{className:"text-slate-400 text-xs font-semibold mb-2",children:"HIGHLIGHTS"}),s.jsx("ul",{className:"space-y-1",children:(f.has(v.id)?v.highlights:v.highlights.slice(0,3)).map((_,D)=>s.jsxs("li",{className:"text-slate-300 text-xs flex items-start gap-2",children:[s.jsx("span",{className:"text-blue-400 mt-1",children:"✓"}),s.jsx("span",{children:_})]},D))}),v.highlights.length>3&&s.jsx("button",{onClick:()=>j(v.id),className:"text-blue-400 hover:text-blue-300 text-xs mt-2 font-medium transition-colors",children:f.has(v.id)?"- Show Less":`+ Show ${v.highlights.length-3} More`})]}),s.jsxs("div",{className:"flex gap-4 mt-auto",children:[s.jsx("a",{href:v.github,className:"flex-1 px-4 py-2 bg-slate-600 hover:bg-blue-500 text-white font-semibold rounded transition-colors text-center text-sm",children:"GitHub"}),s.jsx(je,{to:v.demo,className:"flex-1 px-4 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded transition-colors text-center text-sm",children:"View Project"})]})]})]},v.id))})})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-4xl font-bold text-white",children:"Interested in My Work?"}),s.jsx("p",{className:"text-xl text-blue-100",children:"Let's discuss how I can help with your data science or ML challenges."}),s.jsx(je,{to:"/contact",className:"inline-block px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-lg transition-colors",children:"Get In Touch"})]})})]})},Gg=({label:o,description:d,code:f,language:u="python"})=>{const[m,h]=E.useState(!1),x=()=>{navigator.clipboard.writeText(f),h(!0),setTimeout(()=>h(!1),2e3)};return s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden mb-6",children:[s.jsxs("div",{className:"bg-slate-800 px-6 py-4 border-b border-slate-600",children:[s.jsx("h3",{className:"text-lg font-bold text-white mb-1",children:o}),s.jsx("p",{className:"text-slate-300 text-sm",children:d})]}),s.jsxs("div",{className:"relative",children:[s.jsx("pre",{className:"px-6 py-4 overflow-x-auto text-sm text-slate-200 bg-slate-900",children:s.jsx("code",{children:f})}),s.jsx("button",{onClick:x,className:"absolute top-3 right-3 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors",children:m?"✓ Copied":"Copy"})]})]})},Vg={id:"1",title:"Sports Analytics Predictions – Code Demo",description:"Explore the implementation of an NFL rushing yards prediction pipeline, including feature engineering and modeling. Results are below code samples",codeSamples:[{label:"Feature Engineering",description:"Rolling window features for workload, efficiency, momentum, and volatility metrics",code:`import pandas as pd

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
    print(f"{key:.<30} {value}")`}],plots:[{title:"XGBoost Confusion Matrix",description:"Model classification performance across 5 directional classes. Strong diagonal indicates high accuracy, particularly on Neutral predictions (3.4M correct). The model shows good discrimination between extreme moves (Heavy Up/Down) and neutral periods, which is critical for the trading strategy. Note the minimal confusion between Heavy Up and Heavy Down (near-zero off-diagonal), demonstrating the model avoids catastrophic directional errors.",imageUrl:"/confusion_matrix_xgboost.png"},{title:"Trade P&L Distribution",description:"Distribution of profit and loss across all backtest trades. Shows risk-reward profile with positive skew - more frequent small losses offset by occasional larger wins. Options decay works against us on neutral moves, but strong directional predictions generate outsized returns. Median trade: ~$30 profit. Long right tail indicates potential for 200%+ gains on correctly timed extreme moves.",imageUrl:"https://via.placeholder.com/800x500?text=Trade+P%26L+Distribution"},{title:"Cumulative Returns",description:"Equity curve showing cumulative P&L over backtest period. Steady upward trajectory indicates consistent edge from model predictions. Drawdown periods align with low-volatility regimes where model generates fewer high-confidence signals. Maximum drawdown of ~$812 occurred during mid-December consolidation. Overall positive slope validates strategy's robustness across different market conditions.",imageUrl:"https://via.placeholder.com/800x500?text=Cumulative+Returns+Curve"},{title:"Win Rate by Time of Day",description:"Strategy performance segmented by market hours. Win rate peaks at market open (9:30-10:00 AM) at 61% due to high volatility and stronger trends. Performance dips during lunch (12:00-1:00 PM) to 48% as markets consolidate. Secondary peak at 2:30-3:30 PM (58%) captures end-of-day momentum. Strategy automatically stops entering positions after 3:25 PM to avoid unpredictable close.",imageUrl:"https://via.placeholder.com/800x500?text=Win+Rate+by+Hour"},{title:"Feature Importance (Anonymized)",description:"Relative importance of input features in the XGBoost model (feature names redacted per colleague's proprietary work). Top features capture price momentum, volatility regimes, and microstructure patterns at multiple timeframes. The model uses ~40 features total after my selection process, down from original 100+ candidates. Feature selection improved out-of-sample accuracy by 3.2% while reducing overfitting.",imageUrl:"https://via.placeholder.com/800x500?text=Feature+Importance"}]},Kg=()=>{const{projectId:o}=Vh(),[d,f]=E.useState(null),[u,m]=E.useState(0),h=E.useRef({}),x=E.useRef(null),j=H=>{let q=h.current[H];if(H==="Visualizations & Results"&&(q=x.current),q){const G=q.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:G,behavior:"smooth"})}},_={1:Vg,2:Xg,3:Qg,4:{id:"4",title:"Portfolio Website - Code Demo",description:"Technical implementation of this portfolio",codeSamples:[{label:"Responsive Layout Component",description:"Tailwind CSS-based responsive grid system",code:`export const ResponsiveGrid: React.FC<Props> = ({ children }) => {
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
}`}],plots:[{title:"Component Architecture",description:"Visual representation of component hierarchy",imageUrl:"https://via.placeholder.com/600x400?text=Component+Architecture"},{title:"Performance Metrics",description:"Lighthouse scores and Core Web Vitals",imageUrl:"https://via.placeholder.com/600x400?text=Performance+Metrics"}]},5:Fg,6:Zg}[o||""];if(!_)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Project Not Found"}),s.jsx(je,{to:"/projects",className:"text-blue-400 hover:text-blue-300",children:"← Back to Projects"})]})});const D=()=>{d?.imageUrls&&m(H=>(H-1+d.imageUrls.length)%d.imageUrls.length)},N=()=>{d?.imageUrls&&m(H=>(H+1)%d.imageUrls.length)},k=()=>d?d.imageUrls&&d.imageUrls.length>0?d.imageUrls[u].url:d.imageUrl:"",F=()=>d?.imageUrls?d.imageUrls[u]?.label:null;return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[s.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700",children:s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx(je,{to:"/projects",className:"text-blue-400 hover:text-blue-300 mb-4 inline-block",children:"← Back to Projects"}),s.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:_.title}),s.jsx("p",{className:"text-xl text-slate-300",children:_.description})]})}),s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:flex-row gap-8",children:[_.codeSamples&&_.codeSamples.length>0&&s.jsx("div",{className:"lg:w-64 flex-shrink-0",children:s.jsxs("div",{className:"lg:sticky lg:top-8",children:[s.jsx("h3",{className:"text-lg font-semibold text-slate-400 mb-4",children:"Jump to Section:"}),s.jsxs("div",{className:"flex flex-col gap-2",children:[_.codeSamples.map((H,q)=>s.jsx("button",{onClick:()=>j(H.label),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:H.label},q)),_.plots&&_.plots.length>0&&s.jsx("button",{onClick:()=>j("Visualizations & Results"),className:"px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all font-medium text-left text-sm",children:"Visualizations & Results"})]})]})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"mb-20",children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Code Samples"}),_.codeSamples.map((H,q)=>s.jsx("div",{ref:X=>{h.current[H.label]=X},children:s.jsx(Gg,{label:H.label,description:H.description,code:H.code})},q))]}),s.jsxs("div",{ref:x,children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-12",children:"Visualizations & Results"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:_.plots.map((H,q)=>s.jsxs("div",{className:"bg-slate-700/50 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-400 transition-colors cursor-pointer hover:shadow-lg hover:shadow-blue-500/20",onClick:()=>{f(H),m(0)},children:[s.jsx("div",{className:"aspect-video bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors",children:s.jsx("img",{src:H.imageUrl,alt:H.title,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:H.title}),s.jsx("div",{className:"text-slate-300",children:H.description})]})]},q))})]})]})]})}),d&&s.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",onClick:()=>f(null),children:s.jsxs("div",{className:"relative max-w-4xl w-full max-h-[90vh] flex flex-col",onClick:H=>H.stopPropagation(),children:[s.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 text-xl font-bold",children:"✕"}),s.jsxs("div",{className:"bg-slate-900 rounded-lg overflow-hidden flex-1 flex items-center justify-center relative",children:[s.jsx("img",{src:k(),alt:d.title,className:"w-full h-full object-contain"}),d.imageUrls&&d.imageUrls.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:D,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"‹"}),s.jsx("button",{onClick:N,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl font-bold z-20",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-semibold",children:[u+1," / ",d.imageUrls.length]})]})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-b-lg border-t border-slate-700",children:[s.jsxs("h3",{className:"text-2xl font-bold text-white mb-2",children:[d.title,F()&&s.jsxs("span",{className:"text-blue-400 text-lg ml-2",children:["— ",F()]})]}),s.jsx("div",{className:"text-slate-300",children:d.description})]})]})})]})},Jg=()=>{const[o,d]=E.useState({name:"",email:"",subject:"",message:""}),[f,u]=E.useState("idle"),[m,h]=E.useState(""),x=v=>{const{name:_,value:D}=v.target;d(N=>({...N,[_]:D}))},j=async v=>{v.preventDefault(),u("loading");try{(await fetch("https://formspree.io/f/mbdobjoj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(u("success"),d({name:"",email:"",subject:"",message:""}),setTimeout(()=>u("idle"),3e3)):(u("error"),h("Failed to send message. Please try again."))}catch{u("error"),h("An error occurred. Please try again later.")}};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"pt-20 pb-32 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-2xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4",children:["Get In ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",children:"Touch"})]}),s.jsx("p",{className:"text-xl text-slate-300",children:"Have a question or want to work together? I'd love to hear from you."})]}),s.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm",children:s.jsxs("form",{onSubmit:j,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),s.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"Your name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),s.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"your.email@example.com"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),s.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:x,required:!0,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors",placeholder:"What is this about?"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",value:o.message,onChange:x,required:!0,rows:6,className:"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none",placeholder:"Your message..."})]}),f==="success"&&s.jsx("div",{className:"p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300",children:"Thank you! Your message has been sent successfully."}),f==="error"&&s.jsx("div",{className:"p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300",children:m}),s.jsx("button",{type:"submit",disabled:f==="loading",className:"w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200",children:f==="loading"?"Sending...":"Send Message"})]})}),s.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"✉️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Email"}),s.jsx("p",{className:"text-slate-400",children:"ericjack@udel.edu"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🔗"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"LinkedIn"}),s.jsx("p",{className:"text-slate-400",children:"linkedin.com/in/eric-jackson27"})]}),s.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center",children:[s.jsx("div",{className:"text-4xl mb-4",children:"⚙️"}),s.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"GitHub"}),s.jsx("p",{className:"text-slate-400",children:"github.com/yourprofile"})]})]})]})})})},Pg=()=>s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-5xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-10 backdrop-blur-sm space-y-10",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl font-bold text-white mb-3",children:"Resume Highlights"}),s.jsx("p",{className:"text-slate-300 text-lg",children:"Applied Mathematics & Computer Science student focused on data science, machine learning, and quantitative systems."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"+4%"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Expected value from ML trading models using XGBoost and live market data"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-cyan-400",children:"0.46 R²"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"NFL rushing yard predictions with engineered workload and matchup features"})]}),s.jsxs("div",{className:"bg-slate-900/60 rounded-xl p-6",children:[s.jsx("h3",{className:"text-3xl font-bold text-blue-400",children:"Production ML"}),s.jsx("p",{className:"text-slate-300 mt-2",children:"Rebuilt clustering pipelines used by marketing analytics teams"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"Data Science Intern — Victory Capital Management"}),s.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Python · SQL · K-Means · Amazon Redshift"}),s.jsxs("ul",{className:"space-y-2 text-slate-300",children:[s.jsx("li",{children:"▸ Built K-Means datasets from Redshift user-level data for customer segmentation"}),s.jsx("li",{children:"▸ Diagnosed production ML failures including low-signal features and cluster misuse"}),s.jsx("li",{children:"▸ Redesigned feature pipelines to improve silhouette scores and interpretability"}),s.jsx("li",{children:"▸ Improved downstream analytics usability for marketing decision-making"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Selected Projects"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Sports Analytics Predictions"}),s.jsx("p",{className:"text-slate-300",children:"Built an XGBoost pipeline on real NFL rushing data with rolling workload and matchup features. Achieved RMSE of 27.8 yards and ROC-AUC of 0.626 on out-of-sample predictions."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"Live Trading Framework"}),s.jsx("p",{className:"text-slate-300",children:"Built automated intraday SPY options trading framework with Tastytrade dxFeed WebSocket for real-time data, pluggable ML model integration, and Alpaca API for order execution."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-semibold text-cyan-400",children:"5 ATR Volatility Breakout Model"}),s.jsx("p",{className:"text-slate-300",children:"Built XGBoost model to predict when SPY will move 5x the expanding average true range from market open within 30 minutes, using multi-timeframe ATR, VWAP distance, and volume patterns."})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Technical Skills"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300",children:[s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Languages:"})," Python, SQL, C++, JavaScript, TypeScript"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"ML:"})," XGBoost, scikit-learn, clustering, feature engineering"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Data:"})," Pandas, NumPy, Matplotlib, Seaborn, Plotly"]}),s.jsxs("p",{children:[s.jsx("span",{className:"text-blue-400 font-semibold",children:"Infra:"})," AWS, Docker, Redshift, Firebase"]})]})]}),s.jsx("div",{className:"pt-4",children:s.jsx("a",{href:"/portfolio_website/resume.pdf",download:!0,className:"inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors",children:"Download Full Resume (PDF)"})})]})})}),Wg=()=>{const[o,d]=E.useState(null),[f,u]=E.useState([]),[m,h]=E.useState(null),[x,j]=E.useState(null),[v,_]=E.useState(!0),[D,N]=E.useState(null),[k,F]=E.useState("1M"),[H,q]=E.useState("none"),[X,K]=E.useState(!1),[G,J]=E.useState(""),[ye,de]=E.useState(""),[Se,ee]=E.useState(""),[we,Le]=E.useState(""),[Qe,ut]=E.useState(""),[He,Lt]=E.useState(""),[rt,ct]=E.useState(null),[R,B]=E.useState(null),[W,me]=E.useState(new Date),_e="https://portfoliowebsitebackend-production-fa3b.up.railway.app",y=new Date,O=y.toISOString().slice(0,10),Y=new Date(y);Y.setDate(y.getDate()+1);const V=Y.toISOString().slice(0,10),I=H==="range"&&!!(G&&ye),ie=H==="day"&&!!Se,pe=H==="day"?"1Min":H==="range"?"1D":k==="1D"?"1Min":"1D",Je=H==="day"?"1D":H==="range"?"ALL":k,De=pe==="1Min";E.useEffect(()=>{if(H==="day"&&!Se||H==="range"&&!(G&&ye))return;(async()=>{_(!0),N(null),h(null),j(null);try{const U=new URLSearchParams({period:Je,timeframe:pe});ie?U.set("day",Se):I&&(U.set("start",G),U.set("end",ye));const se=[fetch(`${_e}/api/account`),fetch(`${_e}/api/positions`),fetch(`${_e}/api/portfolio-history?${U.toString()}`)];let te=null;if(I){const Fe=new Date(G);Fe.setDate(Fe.getDate()-1);const Ze=Fe.toISOString().slice(0,10),Ns=new URLSearchParams({period:"1D",timeframe:"1D",start:Ze,end:Ze});se.push(fetch(`${_e}/api/portfolio-history?${Ns.toString()}`))}const[it,Be,Ht,...Kt]=await Promise.all(se);if(te=I?Kt[0]:null,!it.ok||!Be.ok||!Ht.ok)throw new Error("Failed to fetch data from backend");const an=await it.json(),ln=await Be.json(),Jt=await Ht.json();let Ie=null;if(I&&te&&te.ok){const Fe=await te.json();if(Fe.equity&&Fe.equity.length>0){const Ze=Fe.equity[Fe.equity.length-1];Ze!==0&&(Ie=Ze)}}d(an),u(ln),h(Jt),j(Ie)}catch(U){N(U instanceof Error?U.message:"An error occurred"),console.error("Error fetching trading data:",U)}finally{_(!1)}})()},[k,G,ye,Se,Je,pe,ie,I,_e]);const ha=L=>{const U=new Date(W);L==="prev"?U.setDate(U.getDate()-1):U.setDate(U.getDate()+1),U<=new Date&&(me(U),ee(U.toISOString().slice(0,10)),q("day"),J(""),de(""))},Ga=L=>{const U=new Date(W);if(L==="prev"?U.setDate(U.getDate()-7):U.setDate(U.getDate()+7),U<=new Date){me(U);const se=new Date(U),te=new Date(U);te.setDate(te.getDate()+6),te>new Date&&te.setTime(new Date().getTime()),J(se.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},ol=L=>{const U=new Date(W);if(L==="prev"?U.setMonth(U.getMonth()-1):U.setMonth(U.getMonth()+1),U<=new Date){me(U);const se=new Date(U.getFullYear(),U.getMonth(),1),te=new Date(U.getFullYear(),U.getMonth()+1,0);te>new Date&&te.setTime(new Date().getTime()),J(se.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},$l=L=>{const U=new Date(W);if(L==="prev"?U.setMonth(U.getMonth()-3):U.setMonth(U.getMonth()+3),U<=new Date){me(U);const se=new Date(U.getFullYear(),U.getMonth(),1),te=new Date(U.getFullYear(),U.getMonth()+3,0);te>new Date&&te.setTime(new Date().getTime()),J(se.toISOString().slice(0,10)),de(te.toISOString().slice(0,10)),q("range")}},Zt=()=>{if(m&&m.equity&&m.equity.length>0){const L=I&&x!==null?x:m.equity[0],se=m.equity[m.equity.length-1]-L,te=L>0?se/L*100:0;if(H!=="none")return{totalReturn:se,totalReturnPct:te}}if(!o)return{totalReturn:0,totalReturnPct:0};if(k==="1D"){const L=parseFloat(o.equity),U=parseFloat(o.last_equity),se=L-U,te=se/U*100;return{totalReturn:se,totalReturnPct:te}}if(m&&m.equity&&m.equity.length>0){const L=m.equity[0],se=parseFloat(o.equity)-L,te=se/L*100;return{totalReturn:se,totalReturnPct:te}}return{totalReturn:0,totalReturnPct:0}},Pe=L=>{const U=typeof L=="string"?parseFloat(L):L;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(U)},ul=L=>L==null||L===""?"—":Pe(L),cl=L=>{const U=typeof L=="string"?parseFloat(L):L;return`${U>=0?"+":""}${U.toFixed(2)}%`};if(v)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white text-xl",children:"Loading trading data..."})});if(D)return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center",children:s.jsxs("div",{className:"text-red-400 text-xl",children:["Error: ",D]})});const{totalReturn:Il,totalReturnPct:dl}=Zt(),en=!!m?.equity?.length,tn=H!=="none"&&en?m.equity[m.equity.length-1]:o?.equity,Es=H!=="none"?null:o?.cash;return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-2",children:"Trading Dashboard"}),s.jsx("p",{className:"text-sm sm:text-base text-slate-400",children:"Alpaca Paper Trading Account Performance"})]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8",children:[s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Portfolio Value"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:ul(tn)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Cash"}),s.jsx("p",{className:"text-lg sm:text-3xl font-bold text-white",children:ul(Es)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Total Return"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${Il>=0?"text-green-400":"text-red-400"}`,children:Pe(Il)})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-slate-700",children:[s.jsx("h3",{className:"text-slate-400 text-xs sm:text-sm mb-2",children:"Return %"}),s.jsx("p",{className:`text-lg sm:text-3xl font-bold ${dl>=0?"text-green-400":"text-red-400"}`,children:cl(dl)})]})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 mb-8",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Portfolio Performance"}),s.jsxs("div",{className:"flex gap-1 sm:gap-2 flex-wrap items-center",children:[["1D","1W","1M","3M","ALL"].map(L=>{const U=(L==="1D"||L==="1W"||L==="1M"||L==="3M")&&k===L;return s.jsxs("div",{className:"flex items-center gap-1",children:[U&&s.jsx("button",{onClick:()=>{L==="1D"?ha("prev"):L==="1W"?Ga("prev"):L==="1M"?ol("prev"):L==="3M"&&$l("prev")},className:"px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors",children:"←"}),s.jsx("button",{onClick:()=>{F(L),q("none"),ee(""),J(""),de(""),me(new Date),j(null)},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${k===L&&H==="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:L}),U&&s.jsx("button",{onClick:()=>{L==="1D"?ha("next"):L==="1W"?Ga("next"):L==="1M"?ol("next"):L==="3M"&&$l("next")},className:"px-2 sm:px-2 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors",children:"→"})]},L)}),s.jsxs("div",{className:"relative",children:[s.jsx("button",{type:"button",onClick:()=>{K(L=>{const U=!L;return U&&(Le(G),ut(ye),Lt(Se)),U})},className:`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${H!=="none"?"bg-blue-500 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,children:"Custom ▾"}),X&&s.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-10 p-3 space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date (minute)"}),s.jsx("input",{type:"date",value:He,onChange:L=>Lt(L.target.value),max:O,placeholder:"yyyy-mm-dd",className:"w-full bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("button",{type:"button",onClick:()=>{!He||He>O||(q("day"),ee(He),J(""),de(""),K(!1))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!He||He>O,children:"Apply custom date"})]}),s.jsxs("div",{className:"border-t border-slate-800 pt-3 space-y-2",children:[s.jsx("div",{className:"text-xs uppercase tracking-wide text-slate-400",children:"Custom date range (daily)"}),s.jsxs("div",{className:"flex gap-2 min-w-0",children:[s.jsx("input",{type:"date",value:we,onChange:L=>Le(L.target.value),max:V,placeholder:"yyyy-mm-dd",className:"flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"}),s.jsx("input",{type:"date",value:Qe,onChange:L=>ut(L.target.value),max:V,placeholder:"yyyy-mm-dd",className:"flex-1 min-w-0 bg-slate-900/60 text-slate-100 border border-slate-700 rounded-md px-3 py-2 text-sm"})]}),s.jsx("button",{type:"button",onClick:()=>{we&&Qe&&(we>V||Qe>V||(q("range"),J(we),de(Qe),ee(""),K(!1)))},className:"w-full text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50",disabled:!(we&&Qe)||we>V||Qe>V,children:"Apply date range"})]}),s.jsx("button",{type:"button",onClick:()=>{q("none"),ee(""),J(""),de(""),Lt(""),Le(""),ut(""),K(!1)},className:"w-full text-sm px-3 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600",children:"Clear custom"})]})]})]})]}),m&&m.equity&&m.equity.length>0?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"relative bg-slate-900/50 rounded-lg p-4 pt-2 flex",onMouseLeave:()=>{ct(null),B(null)},children:[s.jsx("div",{className:"relative flex flex-col justify-between h-48 sm:h-64 mr-6",style:{minWidth:"70px"},children:(()=>{const L=Math.min(...m.equity),se=Math.max(...m.equity)-L,te=5,it=[];for(let Be=te;Be>=0;Be--){const Ht=L+Be*se/te;it.push(s.jsx("div",{className:"text-xs text-slate-400",style:{position:"relative",top:0,marginBottom:Be>0?`${1/te*100}%`:0,height:"calc(100% / 6)",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:Pe(Ht)},Be))}return it})()}),s.jsxs("div",{className:"relative h-48 sm:h-64 w-full",children:[s.jsx("svg",{width:"100%",height:"100%",className:"overflow-visible",style:{zIndex:1},onMouseMove:L=>{const se=L.currentTarget.getBoundingClientRect(),te=(L.clientX-se.left)/se.width*100,it=Math.round(te/100*(m.equity.length-1));it>=0&&it<m.equity.length&&(ct(it),B({x:L.clientX-se.left,y:L.clientY-se.top}))},children:m.equity.map((L,U)=>{if(U===0)return null;const se=m.equity[U-1],te=(U-1)/(m.equity.length-1)*100,it=U/(m.equity.length-1)*100,Be=Math.min(...m.equity),Kt=Math.max(...m.equity)-Be,an=Kt>0?(1-(se-Be)/Kt)*80+10:50,ln=Kt>0?(1-(L-Be)/Kt)*80+10:50,Jt=m.equity[0],Fe=m.equity[m.equity.length-1]>=Jt;return s.jsx("line",{x1:`${te}%`,y1:`${an}%`,x2:`${it}%`,y2:`${ln}%`,stroke:Fe?"#4ade80":"#f87171",strokeWidth:"2"},U)})}),s.jsx("div",{className:"absolute bottom-1 left-0 right-0 flex justify-between px-2 text-xs text-slate-500",children:(()=>{const L=[],U=m.equity.length,se=Math.max(1,Math.ceil(U/6));for(let te=0;te<U&&!(te>=U);te+=se){const it=U>1?te/(U-1)*100:0,Be=te===0,Ht=te>=U-se;L.push(s.jsx("div",{className:"absolute text-xs text-slate-500 whitespace-nowrap",style:{left:Be?"0":Ht?"auto":`${it}%`,right:Ht?"0":"auto",transform:Be||Ht?"translateX(0)":"translateX(-50%)"},children:De?new Date(m.timestamp[te]*1e3).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):new Date(m.timestamp[te]*1e3).toLocaleDateString("en-US",{month:"short",day:"numeric"})},te))}return L})()}),rt!==null&&R&&m.profit_loss_pct&&s.jsxs("div",{className:"absolute bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm text-white pointer-events-none",style:{left:`${R.x}px`,top:`${R.y-60}px`,transform:"translateX(-50%)"},children:[s.jsx("div",{className:"text-xs text-slate-400 mb-1",children:De?new Date(m.timestamp[rt]*1e3).toLocaleString():new Date(m.timestamp[rt]*1e3).toLocaleDateString()}),s.jsx("div",{className:"font-semibold",children:cl(m.profit_loss_pct[rt])}),s.jsx("div",{className:"text-xs text-slate-400",children:Pe(m.equity[rt])})]})]})]}),s.jsxs("div",{className:"flex justify-between text-xs sm:text-sm text-slate-400 mt-6 mb-2 px-2",children:[s.jsxs("span",{className:"truncate",children:["Start: ",Pe(I&&x!==null?x:m.equity[0])]}),s.jsxs("span",{className:"truncate text-right",children:["Current: ",Pe(m.equity[m.equity.length-1])]})]}),s.jsxs("div",{className:"flex justify-between text-xs text-slate-500 px-2 hidden",children:[s.jsx("span",{children:De?new Date(m.timestamp[0]*1e3).toLocaleString():new Date(m.timestamp[0]*1e3).toLocaleDateString()}),s.jsx("span",{children:De?new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleString():new Date(m.timestamp[m.timestamp.length-1]*1e3).toLocaleDateString()})]}),k==="ALL"&&H==="none"&&s.jsxs("div",{className:"mt-4 p-3 bg-yellow-900/40 rounded-lg border border-yellow-700 text-sm flex items-center gap-2",children:[s.jsx("span",{className:"text-yellow-400 text-lg",children:"⚠️"}),s.jsx("span",{className:"text-yellow-200 font-semibold",children:"Early Performance:"}),s.jsx("span",{className:"text-yellow-100",children:"The portfolio experienced a ~20% decline in the first few months due to trading bugs."})]})]}):s.jsx("div",{className:"h-64 flex items-center justify-center text-slate-400",children:v?"Loading chart data...":"No data available for this period"})]}),s.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700",children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-6",children:"Current Positions"}),f.length===0?s.jsx("p",{className:"text-slate-400",children:"No open positions"}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"block md:hidden space-y-4",children:f.map(L=>{const U=parseFloat(L.unrealized_pl),se=parseFloat(L.unrealized_plpc)*100;return s.jsxs("div",{className:"bg-slate-900/50 rounded-lg p-4 border border-slate-600",children:[s.jsxs("div",{className:"flex justify-between items-start mb-3",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-bold text-white",children:L.symbol}),s.jsxs("p",{className:"text-xs text-slate-400",children:["Qty: ",L.qty]})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("p",{className:`text-sm font-bold ${U>=0?"text-green-400":"text-red-400"}`,children:Pe(L.unrealized_pl)}),s.jsx("p",{className:`text-xs font-semibold ${se>=0?"text-green-400":"text-red-400"}`,children:cl(se)})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Avg Price"}),s.jsx("p",{className:"text-white font-semibold",children:Pe(L.avg_entry_price)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-slate-400",children:"Current Price"}),s.jsx("p",{className:"text-white font-semibold",children:Pe(L.current_price)})]}),s.jsxs("div",{className:"col-span-2",children:[s.jsx("p",{className:"text-slate-400",children:"Market Value"}),s.jsx("p",{className:"text-white font-semibold",children:Pe(L.market_value)})]})]})]},L.symbol)})}),s.jsx("div",{className:"hidden md:block overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-700",children:[s.jsx("th",{className:"text-left py-3 px-4 text-slate-400 font-medium",children:"Symbol"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Quantity"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Avg Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Current Price"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"Market Value"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L"}),s.jsx("th",{className:"text-right py-3 px-4 text-slate-400 font-medium",children:"P/L %"})]})}),s.jsx("tbody",{children:f.map(L=>{const U=parseFloat(L.unrealized_pl),se=parseFloat(L.unrealized_plpc)*100;return s.jsxs("tr",{className:"border-b border-slate-700/50",children:[s.jsx("td",{className:"py-3 px-4 text-white font-medium",children:L.symbol}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:L.qty}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:Pe(L.avg_entry_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:Pe(L.current_price)}),s.jsx("td",{className:"py-3 px-4 text-right text-slate-300",children:Pe(L.market_value)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${U>=0?"text-green-400":"text-red-400"}`,children:Pe(L.unrealized_pl)}),s.jsx("td",{className:`py-3 px-4 text-right font-medium ${se>=0?"text-green-400":"text-red-400"}`,children:cl(se)})]},L.symbol)})})]})})]})]})]})})},$g=()=>s.jsxs(jg,{basename:"/portfolio_website/",children:[s.jsx(kg,{}),s.jsx("div",{className:"pt-16",children:s.jsxs(ng,{children:[s.jsx(Ya,{path:"",element:s.jsx(qg,{})}),s.jsx(Ya,{path:"about",element:s.jsx(Bg,{})}),s.jsx(Ya,{path:"projects",element:s.jsx(Yg,{})}),s.jsx(Ya,{path:"projects/project-demo/:projectId",element:s.jsx(Kg,{})}),s.jsx(Ya,{path:"trading",element:s.jsx(Wg,{})}),s.jsx(Ya,{path:"contact",element:s.jsx(Jg,{})}),s.jsx(Ya,{path:"resume",element:s.jsx(Pg,{})})]})})]});ih.createRoot(document.getElementById("root")).render(s.jsx(E.StrictMode,{children:s.jsx($g,{})}));
