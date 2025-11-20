(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();function ny(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var mc={exports:{}},_i={};var Jh;function ay(){if(Jh)return _i;Jh=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var j in d)j!=="key"&&(h[j]=d[j])}else h=d;return d=h.ref,{$$typeof:i,type:s,key:p,ref:d!==void 0?d:null,props:h}}return _i.Fragment=u,_i.jsx=c,_i.jsxs=c,_i}var Kh;function ly(){return Kh||(Kh=1,mc.exports=ay()),mc.exports}var o=ly(),hc={exports:{}},oe={};var Fh;function iy(){if(Fh)return oe;Fh=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),O=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=O&&x[O]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,Z={};function G(x,U,J){this.props=x,this.context=U,this.refs=Z,this.updater=J||k}G.prototype.isReactComponent={},G.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function q(){}q.prototype=G.prototype;function X(x,U,J){this.props=x,this.context=U,this.refs=Z,this.updater=J||k}var ae=X.prototype=new q;ae.constructor=X,Y(ae,G.prototype),ae.isPureReactComponent=!0;var V=Array.isArray;function K(){}var Q={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function be(x,U,J){var F=J.ref;return{$$typeof:i,type:x,key:U,ref:F!==void 0?F:null,props:J}}function at(x,U){return be(x.type,U,x.props)}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function Ze(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return U[J]})}var Lt=/\/+/g;function mt(x,U){return typeof x=="object"&&x!==null&&x.key!=null?Ze(""+x.key):U.toString(36)}function st(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(K,K):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,U,J,F,ie){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch(re){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case i:case u:ge=!0;break;case T:return ge=x._init,N(ge(x._payload),U,J,F,ie)}}if(ge)return ie=ie(x),ge=F===""?"."+mt(x,0):F,V(ie)?(J="",ge!=null&&(J=ge.replace(Lt,"$&/")+"/"),N(ie,U,J,"",function(It){return It})):ie!=null&&(Pe(ie)&&(ie=at(ie,J+(ie.key==null||x&&x.key===ie.key?"":(""+ie.key).replace(Lt,"$&/")+"/")+ge)),U.push(ie)),1;ge=0;var Ye=F===""?".":F+":";if(V(x))for(var Ee=0;Ee<x.length;Ee++)F=x[Ee],re=Ye+mt(F,Ee),ge+=N(F,U,J,re,ie);else if(Ee=B(x),typeof Ee=="function")for(x=Ee.call(x),Ee=0;!(F=x.next()).done;)F=F.value,re=Ye+mt(F,Ee++),ge+=N(F,U,J,re,ie);else if(re==="object"){if(typeof x.then=="function")return N(st(x),U,J,F,ie);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ge}function $(x,U,J){if(x==null)return x;var F=[],ie=0;return N(x,F,"","",function(re){return U.call(J,re,ie++)}),F}function te(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var se=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},me={map:$,forEach:function(x,U,J){$(x,function(){U.apply(this,arguments)},J)},count:function(x){var U=0;return $(x,function(){U++}),U},toArray:function(x){return $(x,function(U){return U})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return oe.Activity=E,oe.Children=me,oe.Component=G,oe.Fragment=c,oe.Profiler=d,oe.PureComponent=X,oe.StrictMode=s,oe.Suspense=v,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,oe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},oe.cache=function(x){return function(){return x.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(x,U,J){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var F=Y({},x.props),ie=x.key;if(U!=null)for(re in U.key!==void 0&&(ie=""+U.key),U)!he.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(F[re]=U[re]);var re=arguments.length-2;if(re===1)F.children=J;else if(1<re){for(var ge=Array(re),Ye=0;Ye<re;Ye++)ge[Ye]=arguments[Ye+2];F.children=ge}return be(x.type,ie,F)},oe.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},oe.createElement=function(x,U,J){var F,ie={},re=null;if(U!=null)for(F in U.key!==void 0&&(re=""+U.key),U)he.call(U,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=U[F]);var ge=arguments.length-2;if(ge===1)ie.children=J;else if(1<ge){for(var Ye=Array(ge),Ee=0;Ee<ge;Ee++)Ye[Ee]=arguments[Ee+2];ie.children=Ye}if(x&&x.defaultProps)for(F in ge=x.defaultProps,ge)ie[F]===void 0&&(ie[F]=ge[F]);return be(x,re,ie)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:j,render:x}},oe.isValidElement=Pe,oe.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:te}},oe.memo=function(x,U){return{$$typeof:y,type:x,compare:U===void 0?null:U}},oe.startTransition=function(x){var U=Q.T,J={};Q.T=J;try{var F=x(),ie=Q.S;ie!==null&&ie(J,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(K,se)}catch(re){se(re)}finally{U!==null&&J.types!==null&&(U.types=J.types),Q.T=U}},oe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},oe.use=function(x){return Q.H.use(x)},oe.useActionState=function(x,U,J){return Q.H.useActionState(x,U,J)},oe.useCallback=function(x,U){return Q.H.useCallback(x,U)},oe.useContext=function(x){return Q.H.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x,U){return Q.H.useDeferredValue(x,U)},oe.useEffect=function(x,U){return Q.H.useEffect(x,U)},oe.useEffectEvent=function(x){return Q.H.useEffectEvent(x)},oe.useId=function(){return Q.H.useId()},oe.useImperativeHandle=function(x,U,J){return Q.H.useImperativeHandle(x,U,J)},oe.useInsertionEffect=function(x,U){return Q.H.useInsertionEffect(x,U)},oe.useLayoutEffect=function(x,U){return Q.H.useLayoutEffect(x,U)},oe.useMemo=function(x,U){return Q.H.useMemo(x,U)},oe.useOptimistic=function(x,U){return Q.H.useOptimistic(x,U)},oe.useReducer=function(x,U,J){return Q.H.useReducer(x,U,J)},oe.useRef=function(x){return Q.H.useRef(x)},oe.useState=function(x){return Q.H.useState(x)},oe.useSyncExternalStore=function(x,U,J){return Q.H.useSyncExternalStore(x,U,J)},oe.useTransition=function(){return Q.H.useTransition()},oe.version="19.2.0",oe}var Wh;function Lc(){return Wh||(Wh=1,hc.exports=iy()),hc.exports}var w=Lc();const Ml=ny(w);var gc={exports:{}},Ui={},pc={exports:{}},yc={};var Ih;function ry(){return Ih||(Ih=1,(function(i){function u(N,$){var te=N.length;N.push($);e:for(;0<te;){var se=te-1>>>1,me=N[se];if(0<d(me,$))N[se]=$,N[te]=me,te=se;else break e}}function c(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var $=N[0],te=N.pop();if(te!==$){N[0]=te;e:for(var se=0,me=N.length,x=me>>>1;se<x;){var U=2*(se+1)-1,J=N[U],F=U+1,ie=N[F];if(0>d(J,te))F<me&&0>d(ie,J)?(N[se]=ie,N[F]=te,se=F):(N[se]=J,N[U]=te,se=U);else if(F<me&&0>d(ie,te))N[se]=ie,N[F]=te,se=F;else break e}}return $}function d(N,$){var te=N.sortIndex-$.sortIndex;return te!==0?te:N.id-$.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var p=Date,j=p.now();i.unstable_now=function(){return p.now()-j}}var v=[],y=[],T=1,E=null,O=3,B=!1,k=!1,Y=!1,Z=!1,G=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(N){for(var $=c(y);$!==null;){if($.callback===null)s(y);else if($.startTime<=N)s(y),$.sortIndex=$.expirationTime,u(v,$);else break;$=c(y)}}function V(N){if(Y=!1,ae(N),!k)if(c(v)!==null)k=!0,K||(K=!0,Ze());else{var $=c(y);$!==null&&st(V,$.startTime-N)}}var K=!1,Q=-1,he=5,be=-1;function at(){return Z?!0:!(i.unstable_now()-be<he)}function Pe(){if(Z=!1,K){var N=i.unstable_now();be=N;var $=!0;try{e:{k=!1,Y&&(Y=!1,q(Q),Q=-1),B=!0;var te=O;try{t:{for(ae(N),E=c(v);E!==null&&!(E.expirationTime>N&&at());){var se=E.callback;if(typeof se=="function"){E.callback=null,O=E.priorityLevel;var me=se(E.expirationTime<=N);if(N=i.unstable_now(),typeof me=="function"){E.callback=me,ae(N),$=!0;break t}E===c(v)&&s(v),ae(N)}else s(v);E=c(v)}if(E!==null)$=!0;else{var x=c(y);x!==null&&st(V,x.startTime-N),$=!1}}break e}finally{E=null,O=te,B=!1}$=void 0}}finally{$?Ze():K=!1}}}var Ze;if(typeof X=="function")Ze=function(){X(Pe)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,mt=Lt.port2;Lt.port1.onmessage=Pe,Ze=function(){mt.postMessage(null)}}else Ze=function(){G(Pe,0)};function st(N,$){Q=G(function(){N(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return O},i.unstable_next=function(N){switch(O){case 1:case 2:case 3:var $=3;break;default:$=O}var te=O;O=$;try{return N()}finally{O=te}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var te=O;O=N;try{return $()}finally{O=te}},i.unstable_scheduleCallback=function(N,$,te){var se=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?se+te:se):te=se,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=te+me,N={id:T++,callback:$,priorityLevel:N,startTime:te,expirationTime:me,sortIndex:-1},te>se?(N.sortIndex=te,u(y,N),c(v)===null&&N===c(y)&&(Y?(q(Q),Q=-1):Y=!0,st(V,te-se))):(N.sortIndex=me,u(v,N),k||B||(k=!0,K||(K=!0,Ze()))),N},i.unstable_shouldYield=at,i.unstable_wrapCallback=function(N){var $=O;return function(){var te=O;O=$;try{return N.apply(this,arguments)}finally{O=te}}}})(yc)),yc}var Ph;function oy(){return Ph||(Ph=1,pc.exports=ry()),pc.exports}var bc={exports:{}},ft={};var e0;function uy(){if(e0)return ft;e0=1;var i=Lc();function u(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,y,T){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:E==null?null:""+E,children:v,containerInfo:y,implementation:T}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ft.createPortal=function(v,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return h(v,y,null,T)},ft.flushSync=function(v){var y=p.T,T=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=T,s.d.f()}},ft.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},ft.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},ft.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var T=y.as,E=j(T,y.crossOrigin),O=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:B}):T==="script"&&s.d.X(v,{crossOrigin:E,integrity:O,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ft.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=j(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},ft.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,E=j(T,y.crossOrigin);s.d.L(v,T,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ft.preloadModule=function(v,y){if(typeof v=="string")if(y){var T=j(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},ft.requestFormReset=function(v){s.d.r(v)},ft.unstable_batchedUpdates=function(v,y){return v(y)},ft.useFormState=function(v,y,T){return p.H.useFormState(v,y,T)},ft.useFormStatus=function(){return p.H.useHostTransitionStatus()},ft.version="19.2.0",ft}var t0;function sy(){if(t0)return bc.exports;t0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),bc.exports=uy(),bc.exports}var n0;function cy(){if(n0)return Ui;n0=1;var i=oy(),u=Lc(),c=sy();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return v(l),e;if(r===a)return v(l),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,m=l.child;m;){if(m===n){f=!0,n=l,a=r;break}if(m===a){f=!0,a=l,n=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===n){f=!0,n=r,a=l;break}if(m===a){f=!0,a=r,n=l;break}m=m.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,O=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case G:return"Profiler";case Z:return"StrictMode";case V:return"Suspense";case K:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:mt(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return mt(e(t))}catch{}}return null}var st=Array.isArray,N=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},se=[],me=-1;function x(e){return{current:e}}function U(e){0>me||(e.current=se[me],se[me]=null,me--)}function J(e,t){me++,se[me]=e.current,e.current=t}var F=x(null),ie=x(null),re=x(null),ge=x(null);function Ye(e,t){switch(J(re,t),J(ie,e),J(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yh(t),e=bh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(F),J(F,e)}function Ee(){U(F),U(ie),U(re)}function It(e){e.memoizedState!==null&&J(ge,e);var t=F.current,n=bh(t,e.type);t!==n&&(J(ie,e),J(F,n))}function Pt(e){ie.current===e&&(U(F),U(ie)),ge.current===e&&(U(ge),Oi._currentValue=te)}var ht,da;function mn(e){if(ht===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ht=t&&t[1]||"",da=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+da}var Ua=!1;function Ba(e,t){if(!e||Ua)return"";Ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(R){var M=R}Reflect.construct(e,[],H)}else{try{H.call()}catch(R){M=R}e.call(H.prototype)}}else{try{throw Error()}catch(R){M=R}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(R){if(R&&M&&typeof R.stack=="string")return[R.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var b=f.split(`
`),A=m.split(`
`);for(l=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===b.length||l===A.length)for(a=b.length-1,l=A.length-1;1<=a&&0<=l&&b[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(b[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||b[a]!==A[l]){var _=`
`+b[a].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=a&&0<=l);break}}}finally{Ua=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?mn(n):""}function Wo(e,t){switch(e.tag){case 26:case 27:case 5:return mn(e.type);case 16:return mn("Lazy");case 13:return e.child!==t&&t!==null?mn("Suspense Fallback"):mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Ba(e.type,!1);case 11:return Ba(e.type.render,!1);case 1:return Ba(e.type,!0);case 31:return mn("Activity");default:return""}}function Ii(e){try{var t="",n=null;do t+=Wo(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var kl=Object.prototype.hasOwnProperty,Yl=i.unstable_scheduleCallback,Gl=i.unstable_cancelCallback,Io=i.unstable_shouldYield,Po=i.unstable_requestPaint,ct=i.unstable_now,eu=i.unstable_getCurrentPriorityLevel,D=i.unstable_ImmediatePriority,P=i.unstable_UserBlockingPriority,ee=i.unstable_NormalPriority,Ae=i.unstable_LowPriority,Bn=i.unstable_IdlePriority,Pi=i.log,kg=i.unstable_setDisableYieldValue,ql=null,Ct=null;function Ln(e){if(typeof Pi=="function"&&kg(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(ql,e)}catch{}}var Tt=Math.clz32?Math.clz32:qg,Yg=Math.log,Gg=Math.LN2;function qg(e){return e>>>=0,e===0?32:31-(Yg(e)/Gg|0)|0}var er=256,tr=262144,nr=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ar(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~r,a!==0?l=ma(a):(f&=m,f!==0?l=ma(f):n||(n=m&~e,n!==0&&(l=ma(n))))):(m=a&~r,m!==0?l=ma(m):f!==0?l=ma(f):n||(n=a&~e,n!==0&&(l=ma(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wc(){var e=nr;return nr<<=1,(nr&62914560)===0&&(nr=4194304),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xg(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=f&~n;0<n;){var _=31-Tt(n),H=1<<_;m[_]=0,b[_]=-1;var M=A[_];if(M!==null)for(A[_]=null,_=0;_<M.length;_++){var R=M[_];R!==null&&(R.lane&=-536870913)}n&=~H}a!==0&&Ic(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Ic(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Tt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Tt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function ef(e,t){var n=t&-t;return n=(n&42)!==0?1:nu(n),(n&(e.suspendedLanes|t))!==0?0:n}function nu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function au(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tf(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Gh(e.type))}function nf(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Hn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Hn,gt="__reactProps$"+Hn,La="__reactContainer$"+Hn,lu="__reactEvents$"+Hn,Vg="__reactListeners$"+Hn,Zg="__reactHandles$"+Hn,af="__reactResources$"+Hn,Vl="__reactMarker$"+Hn;function iu(e){delete e[lt],delete e[gt],delete e[lu],delete e[Vg],delete e[Zg]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[La]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ch(e);e!==null;){if(n=e[lt])return n;e=Ch(e)}return t}e=n,n=e.parentNode}return null}function ka(e){if(e=e[lt]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ya(e){var t=e[af];return t||(t=e[af]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Vl]=!0}var lf=new Set,rf={};function ha(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(rf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var $g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),of={},uf={};function Jg(e){return kl.call(uf,e)?!0:kl.call(of,e)?!1:$g.test(e)?uf[e]=!0:(of[e]=!0,!1)}function lr(e,t,n){if(Jg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ir(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ru(e){if(!e._valueTracker){var t=sf(e)?"checked":"value";e._valueTracker=Kg(e,t,""+e[t])}}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=sf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fg=/[\n"\\]/g;function kt(e){return e.replace(Fg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ou(e,t,n,a,l,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?uu(e,f,Ht(t)):n!=null?uu(e,f,Ht(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ht(m):e.removeAttribute("name")}function ff(e,t,n,a,l,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ru(e);return}n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),ru(e)}function uu(e,t,n){t==="number"&&rr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function qa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function df(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function mf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(st(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ru(e)}function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Wg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&hf(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&hf(e,r,t[r])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function or(e){return Pg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var cu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Va=null;function pf(e){var t=ka(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ou(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[gt]||null;if(!l)throw Error(s(90));ou(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&cf(a)}break e;case"textarea":df(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&qa(e,!!n.multiple,t,!1)}}}var du=!1;function yf(e,t,n){if(du)return e(t,n);du=!0;try{var a=e(t);return a}finally{if(du=!1,(Xa!==null||Va!==null)&&(Jr(),Xa&&(t=Xa,e=Va,Va=Xa=null,pf(t),e)))for(t=0;t<e.length;t++)pf(e[t])}}function $l(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(pn)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{mu=!1}var kn=null,hu=null,ur=null;function bf(){if(ur)return ur;var e,t=hu,n=t.length,a,l="value"in kn?kn.value:kn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return ur=l.slice(e,1<a?1-a:void 0)}function sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function vf(){return!1}function pt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?cr:vf,this.isPropagationStopped=vf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=pt(ga),Kl=E({},ga,{view:0,detail:0}),ep=pt(Kl),gu,pu,Fl,dr=E({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(gu=e.screenX-Fl.screenX,pu=e.screenY-Fl.screenY):pu=gu=0,Fl=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),xf=pt(dr),tp=E({},dr,{dataTransfer:0}),np=pt(tp),ap=E({},Kl,{relatedTarget:0}),yu=pt(ap),lp=E({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=pt(lp),rp=E({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=pt(rp),up=E({},ga,{data:0}),Sf=pt(up),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function bu(){return dp}var mp=E({},Kl,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=pt(mp),gp=E({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=pt(gp),pp=E({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),yp=pt(pp),bp=E({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=pt(bp),xp=E({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=pt(xp),jp=E({},ga,{newState:0,oldState:0}),wp=pt(jp),Ep=[9,13,27,32],vu=pn&&"CompositionEvent"in window,Wl=null;pn&&"documentMode"in document&&(Wl=document.documentMode);var Cp=pn&&"TextEvent"in window&&!Wl,wf=pn&&(!vu||Wl&&8<Wl&&11>=Wl),Ef=" ",Cf=!1;function Tf(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Za=!1;function Tp(e,t){switch(e){case"compositionend":return zf(t);case"keypress":return t.which!==32?null:(Cf=!0,Ef);case"textInput":return e=t.data,e===Ef&&Cf?null:e;default:return null}}function zp(e,t){if(Za)return e==="compositionend"||!vu&&Tf(e,t)?(e=bf(),ur=hu=kn=null,Za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Mf(e,t,n,a){Xa?Va?Va.push(a):Va=[a]:Xa=a,t=to(t,"onChange"),0<t.length&&(n=new fr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Il=null,Pl=null;function Mp(e){fh(e,0)}function mr(e){var t=Zl(e);if(cf(t))return e}function Of(e,t){if(e==="change")return t}var Rf=!1;if(pn){var xu;if(pn){var Su="oninput"in document;if(!Su){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Su=typeof Df.oninput=="function"}xu=Su}else xu=!1;Rf=xu&&(!document.documentMode||9<document.documentMode)}function Nf(){Il&&(Il.detachEvent("onpropertychange",_f),Pl=Il=null)}function _f(e){if(e.propertyName==="value"&&mr(Pl)){var t=[];Mf(t,Pl,e,fu(e)),yf(Mp,t)}}function Op(e,t,n){e==="focusin"?(Nf(),Il=t,Pl=n,Il.attachEvent("onpropertychange",_f)):e==="focusout"&&Nf()}function Rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mr(Pl)}function Dp(e,t){if(e==="click")return mr(t)}function Np(e,t){if(e==="input"||e==="change")return mr(t)}function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:_p;function ei(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!kl.call(t,l)||!zt(e[l],t[l]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,t){var n=Uf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rr(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Up=pn&&"documentMode"in document&&11>=document.documentMode,$a=null,wu=null,ti=null,Eu=!1;function kf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||$a==null||$a!==rr(a)||(a=$a,"selectionStart"in a&&ju(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ti&&ei(ti,a)||(ti=a,a=to(wu,"onSelect"),0<a.length&&(t=new fr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=$a)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ja={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},Cu={},Yf={};pn&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function ya(e){if(Cu[e])return Cu[e];if(!Ja[e])return e;var t=Ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return Cu[e]=t[n];return e}var Gf=ya("animationend"),qf=ya("animationiteration"),Qf=ya("animationstart"),Bp=ya("transitionrun"),Lp=ya("transitionstart"),Hp=ya("transitioncancel"),Xf=ya("transitionend"),Vf=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function en(e,t){Vf.set(e,t),ha(t,[e])}var hr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],Ka=0,zu=0;function gr(){for(var e=Ka,t=zu=Ka=0;t<e;){var n=Yt[t];Yt[t++]=null;var a=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var r=Yt[t];if(Yt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Zf(n,l,r)}}function pr(e,t,n,a){Yt[Ka++]=e,Yt[Ka++]=t,Yt[Ka++]=n,Yt[Ka++]=a,zu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Au(e,t,n,a){return pr(e,t,n,a),yr(e)}function ba(e,t){return pr(e,null,null,t),yr(e)}function Zf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Tt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function yr(e){if(50<wi)throw wi=0,Ls=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function kp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,a){return new kp(e,t,n,a)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $f(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function br(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")Mu(e)&&(f=1);else if(typeof e=="string")f=X1(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=At(31,n,t,l),e.elementType=be,e.lanes=r,e;case Y:return va(n.children,l,r,t);case Z:f=8,l|=24;break;case G:return e=At(12,n,t,l|2),e.elementType=G,e.lanes=r,e;case V:return e=At(13,n,t,l),e.elementType=V,e.lanes=r,e;case K:return e=At(19,n,t,l),e.elementType=K,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:f=10;break e;case q:f=9;break e;case ae:f=11;break e;case Q:f=14;break e;case he:f=16,a=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=At(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function va(e,t,n,a){return e=At(7,e,a,t),e.lanes=n,e}function Ou(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Jf(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Ru(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kf=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Kf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ii(t)},Kf.set(e,t),t)}return{value:e,source:t,stack:Ii(t)}}var Wa=[],Ia=0,vr=null,ni=0,qt=[],Qt=0,Yn=null,rn=1,on="";function bn(e,t){Wa[Ia++]=ni,Wa[Ia++]=vr,vr=e,ni=t}function Ff(e,t,n){qt[Qt++]=rn,qt[Qt++]=on,qt[Qt++]=Yn,Yn=e;var a=rn;e=on;var l=32-Tt(a)-1;a&=~(1<<l),n+=1;var r=32-Tt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,rn=1<<32-Tt(t)+l|n<<l|a,on=r+e}else rn=1<<r|n<<l|a,on=e}function Du(e){e.return!==null&&(bn(e,1),Ff(e,1,0))}function Nu(e){for(;e===vr;)vr=Wa[--Ia],Wa[Ia]=null,ni=Wa[--Ia],Wa[Ia]=null;for(;e===Yn;)Yn=qt[--Qt],qt[Qt]=null,on=qt[--Qt],qt[Qt]=null,rn=qt[--Qt],qt[Qt]=null}function Wf(e,t){qt[Qt++]=rn,qt[Qt++]=on,qt[Qt++]=Yn,rn=t.id,on=t.overflow,Yn=e}var it=null,Ue=null,Se=!1,Gn=null,Xt=!1,_u=Error(s(519));function qn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(Gt(t,e)),_u}function If(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[lt]=e,t[gt]=a,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<Ci.length;n++)ye(Ci[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),ff(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),mf(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||gh(t.textContent,n)?(a.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),a.onScroll!=null&&ye("scroll",t),a.onScrollEnd!=null&&ye("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||qn(e,!0)}function Pf(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:it=it.return}}function Pa(e){if(e!==it)return!1;if(!Se)return Pf(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Is(e.type,e.memoizedProps)),n=!n),n&&Ue&&qn(e),Pf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Eh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Eh(e)}else t===27?(t=Ue,na(e.type)?(e=ac,ac=null,Ue=e):Ue=t):Ue=it?Zt(e.stateNode.nextSibling):null;return!0}function xa(){Ue=it=null,Se=!1}function Uu(){var e=Gn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Gn=null),e}function ai(e){Gn===null?Gn=[e]:Gn.push(e)}var Bu=x(null),Sa=null,vn=null;function Qn(e,t,n){J(Bu,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=Bu.current,U(Bu)}function Lu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Hu(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=l;for(var b=0;b<t.length;b++)if(m.context===t[b]){r.lanes|=n,m=r.alternate,m!==null&&(m.lanes|=n),Lu(r.return,n,e),a||(f=null);break e}r=m.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Lu(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function el(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var m=l.type;zt(l.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(l===ge.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Oi):e=[Oi])}l=l.return}e!==null&&Hu(t,e,n,a),t.flags|=262144}function xr(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Sa=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return ed(Sa,e)}function Sr(e,t){return Sa===null&&ja(e),ed(e,t)}function ed(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},vn===null){if(e===null)throw Error(s(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return n}var Yp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gp=i.unstable_scheduleCallback,qp=i.unstable_NormalPriority,$e={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new Yp,data:new Map,refCount:0}}function li(e){e.refCount--,e.refCount===0&&Gp(qp,function(){e.controller.abort()})}var ii=null,Yu=0,tl=0,nl=null;function Qp(e,t){if(ii===null){var n=ii=[];Yu=0,tl=Qs(),nl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Yu++,t.then(td,td),t}function td(){if(--Yu===0&&ii!==null){nl!==null&&(nl.status="fulfilled");var e=ii;ii=null,tl=0,nl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var nd=N.S;N.S=function(e,t){km=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qp(e,t),nd!==null&&nd(e,t)};var wa=x(null);function Gu(){var e=wa.current;return e!==null?e:_e.pooledCache}function jr(e,t){t===null?J(wa,wa.current):J(wa,t.pool)}function ad(){var e=Gu();return e===null?null:{parent:$e._currentValue,pool:e}}var al=Error(s(460)),qu=Error(s(474)),wr=Error(s(542)),Er={then:function(){}};function ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function id(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,od(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,od(e),e}throw Ca=t,al}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ca=n,al):n}}var Ca=null;function rd(){if(Ca===null)throw Error(s(459));var e=Ca;return Ca=null,e}function od(e){if(e===al||e===wr)throw Error(s(483))}var ll=null,ri=0;function Cr(e){var t=ri;return ri+=1,ll===null&&(ll=[]),id(ll,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tr(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ud(e){function t(C,S){if(e){var z=C.deletions;z===null?(C.deletions=[S],C.flags|=16):z.push(S)}}function n(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function a(C){for(var S=new Map;C!==null;)C.key!==null?S.set(C.key,C):S.set(C.index,C),C=C.sibling;return S}function l(C,S){return C=yn(C,S),C.index=0,C.sibling=null,C}function r(C,S,z){return C.index=z,e?(z=C.alternate,z!==null?(z=z.index,z<S?(C.flags|=67108866,S):z):(C.flags|=67108866,S)):(C.flags|=1048576,S)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,S,z,L){return S===null||S.tag!==6?(S=Ou(z,C.mode,L),S.return=C,S):(S=l(S,z),S.return=C,S)}function b(C,S,z,L){var ne=z.type;return ne===Y?_(C,S,z.props.children,L,z.key):S!==null&&(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===he&&Ea(ne)===S.type)?(S=l(S,z.props),oi(S,z),S.return=C,S):(S=br(z.type,z.key,z.props,null,C.mode,L),oi(S,z),S.return=C,S)}function A(C,S,z,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Ru(z,C.mode,L),S.return=C,S):(S=l(S,z.children||[]),S.return=C,S)}function _(C,S,z,L,ne){return S===null||S.tag!==7?(S=va(z,C.mode,L,ne),S.return=C,S):(S=l(S,z),S.return=C,S)}function H(C,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Ou(""+S,C.mode,z),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case B:return z=br(S.type,S.key,S.props,null,C.mode,z),oi(z,S),z.return=C,z;case k:return S=Ru(S,C.mode,z),S.return=C,S;case he:return S=Ea(S),H(C,S,z)}if(st(S)||Ze(S))return S=va(S,C.mode,z,null),S.return=C,S;if(typeof S.then=="function")return H(C,Cr(S),z);if(S.$$typeof===X)return H(C,Sr(C,S),z);Tr(C,S)}return null}function M(C,S,z,L){var ne=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ne!==null?null:m(C,S,""+z,L);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case B:return z.key===ne?b(C,S,z,L):null;case k:return z.key===ne?A(C,S,z,L):null;case he:return z=Ea(z),M(C,S,z,L)}if(st(z)||Ze(z))return ne!==null?null:_(C,S,z,L,null);if(typeof z.then=="function")return M(C,S,Cr(z),L);if(z.$$typeof===X)return M(C,S,Sr(C,z),L);Tr(C,z)}return null}function R(C,S,z,L,ne){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return C=C.get(z)||null,m(S,C,""+L,ne);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case B:return C=C.get(L.key===null?z:L.key)||null,b(S,C,L,ne);case k:return C=C.get(L.key===null?z:L.key)||null,A(S,C,L,ne);case he:return L=Ea(L),R(C,S,z,L,ne)}if(st(L)||Ze(L))return C=C.get(z)||null,_(S,C,L,ne,null);if(typeof L.then=="function")return R(C,S,z,Cr(L),ne);if(L.$$typeof===X)return R(C,S,z,Sr(S,L),ne);Tr(S,L)}return null}function W(C,S,z,L){for(var ne=null,je=null,I=S,ce=S=0,xe=null;I!==null&&ce<z.length;ce++){I.index>ce?(xe=I,I=null):xe=I.sibling;var we=M(C,I,z[ce],L);if(we===null){I===null&&(I=xe);break}e&&I&&we.alternate===null&&t(C,I),S=r(we,S,ce),je===null?ne=we:je.sibling=we,je=we,I=xe}if(ce===z.length)return n(C,I),Se&&bn(C,ce),ne;if(I===null){for(;ce<z.length;ce++)I=H(C,z[ce],L),I!==null&&(S=r(I,S,ce),je===null?ne=I:je.sibling=I,je=I);return Se&&bn(C,ce),ne}for(I=a(I);ce<z.length;ce++)xe=R(I,C,ce,z[ce],L),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?ce:xe.key),S=r(xe,S,ce),je===null?ne=xe:je.sibling=xe,je=xe);return e&&I.forEach(function(oa){return t(C,oa)}),Se&&bn(C,ce),ne}function le(C,S,z,L){if(z==null)throw Error(s(151));for(var ne=null,je=null,I=S,ce=S=0,xe=null,we=z.next();I!==null&&!we.done;ce++,we=z.next()){I.index>ce?(xe=I,I=null):xe=I.sibling;var oa=M(C,I,we.value,L);if(oa===null){I===null&&(I=xe);break}e&&I&&oa.alternate===null&&t(C,I),S=r(oa,S,ce),je===null?ne=oa:je.sibling=oa,je=oa,I=xe}if(we.done)return n(C,I),Se&&bn(C,ce),ne;if(I===null){for(;!we.done;ce++,we=z.next())we=H(C,we.value,L),we!==null&&(S=r(we,S,ce),je===null?ne=we:je.sibling=we,je=we);return Se&&bn(C,ce),ne}for(I=a(I);!we.done;ce++,we=z.next())we=R(I,C,ce,we.value,L),we!==null&&(e&&we.alternate!==null&&I.delete(we.key===null?ce:we.key),S=r(we,S,ce),je===null?ne=we:je.sibling=we,je=we);return e&&I.forEach(function(ty){return t(C,ty)}),Se&&bn(C,ce),ne}function Ne(C,S,z,L){if(typeof z=="object"&&z!==null&&z.type===Y&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case B:e:{for(var ne=z.key;S!==null;){if(S.key===ne){if(ne=z.type,ne===Y){if(S.tag===7){n(C,S.sibling),L=l(S,z.props.children),L.return=C,C=L;break e}}else if(S.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===he&&Ea(ne)===S.type){n(C,S.sibling),L=l(S,z.props),oi(L,z),L.return=C,C=L;break e}n(C,S);break}else t(C,S);S=S.sibling}z.type===Y?(L=va(z.props.children,C.mode,L,z.key),L.return=C,C=L):(L=br(z.type,z.key,z.props,null,C.mode,L),oi(L,z),L.return=C,C=L)}return f(C);case k:e:{for(ne=z.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(C,S.sibling),L=l(S,z.children||[]),L.return=C,C=L;break e}else{n(C,S);break}else t(C,S);S=S.sibling}L=Ru(z,C.mode,L),L.return=C,C=L}return f(C);case he:return z=Ea(z),Ne(C,S,z,L)}if(st(z))return W(C,S,z,L);if(Ze(z)){if(ne=Ze(z),typeof ne!="function")throw Error(s(150));return z=ne.call(z),le(C,S,z,L)}if(typeof z.then=="function")return Ne(C,S,Cr(z),L);if(z.$$typeof===X)return Ne(C,S,Sr(C,z),L);Tr(C,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(C,S.sibling),L=l(S,z),L.return=C,C=L):(n(C,S),L=Ou(z,C.mode,L),L.return=C,C=L),f(C)):n(C,S)}return function(C,S,z,L){try{ri=0;var ne=Ne(C,S,z,L);return ll=null,ne}catch(I){if(I===al||I===wr)throw I;var je=At(29,I,null,C.mode);return je.lanes=L,je.return=C,je}finally{}}}var Ta=ud(!0),sd=ud(!1),Xn=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ce&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=yr(e),Zf(e,null,n),t}return pr(e,a,t,n),yr(e)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pc(e,n)}}function Vu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Zu=!1;function si(){if(Zu){var e=nl;if(e!==null)throw e}}function ci(e,t,n,a){Zu=!1;var l=e.updateQueue;Xn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var b=m,A=b.next;b.next=null,f===null?r=A:f.next=A,f=b;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==f&&(m===null?_.firstBaseUpdate=A:m.next=A,_.lastBaseUpdate=b))}if(r!==null){var H=l.baseState;f=0,_=A=b=null,m=r;do{var M=m.lane&-536870913,R=M!==m.lane;if(R?(ve&M)===M:(a&M)===M){M!==0&&M===tl&&(Zu=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var W=e,le=m;M=t;var Ne=n;switch(le.tag){case 1:if(W=le.payload,typeof W=="function"){H=W.call(Ne,H,M);break e}H=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=le.payload,M=typeof W=="function"?W.call(Ne,H,M):W,M==null)break e;H=E({},H,M);break e;case 2:Xn=!0}}M=m.callback,M!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[M]:R.push(M))}else R={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(A=_=R,b=H):_=_.next=R,f|=M;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;R=m,m=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);_===null&&(b=H),l.baseState=b,l.firstBaseUpdate=A,l.lastBaseUpdate=_,r===null&&(l.shared.lanes=0),Wn|=f,e.lanes=f,e.memoizedState=H}}function cd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function fd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cd(n[e],t)}var il=x(null),zr=x(0);function dd(e,t){e=Mn,J(zr,e),J(il,t),Mn=e|t.baseLanes}function $u(){J(zr,Mn),J(il,il.current)}function Ju(){Mn=zr.current,U(il),U(zr)}var Mt=x(null),Vt=null;function $n(e){var t=e.alternate;J(Xe,Xe.current&1),J(Mt,e),Vt===null&&(t===null||il.current!==null||t.memoizedState!==null)&&(Vt=e)}function Ku(e){J(Xe,Xe.current),J(Mt,e),Vt===null&&(Vt=e)}function md(e){e.tag===22?(J(Xe,Xe.current),J(Mt,e),Vt===null&&(Vt=e)):Jn()}function Jn(){J(Xe,Xe.current),J(Mt,Mt.current)}function Ot(e){U(Mt),Vt===e&&(Vt=null),U(Xe)}var Xe=x(0);function Ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||tc(n)||nc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sn=0,ue=null,Re=null,Je=null,Mr=!1,rl=!1,za=!1,Or=0,fi=0,ol=null,Vp=0;function qe(){throw Error(s(321))}function Fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Wu(e,t,n,a,l,r){return Sn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Fd:ds,za=!1,r=n(a,l),za=!1,rl&&(r=gd(t,n,a,l)),hd(e),r}function hd(e){N.H=hi;var t=Re!==null&&Re.next!==null;if(Sn=0,Je=Re=ue=null,Mr=!1,fi=0,ol=null,t)throw Error(s(300));e===null||Ke||(e=e.dependencies,e!==null&&xr(e)&&(Ke=!0))}function gd(e,t,n,a){ue=e;var l=0;do{if(rl&&(ol=null),fi=0,rl=!1,25<=l)throw Error(s(301));if(l+=1,Je=Re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=Wd,r=t(n,a)}while(rl);return r}function Zp(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?di(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ue.flags|=1024),t}function Iu(){var e=Or!==0;return Or=0,e}function Pu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(Mr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mr=!1}Sn=0,Je=Re=ue=null,rl=!1,fi=Or=0,ol=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ue.memoizedState=Je=e:Je=Je.next=e,Je}function Ve(){if(Re===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Je===null?ue.memoizedState:Je.next;if(t!==null)Je=t,Re=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Je===null?ue.memoizedState=Je=e:Je=Je.next=e}return Je}function Rr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(e){var t=fi;return fi+=1,ol===null&&(ol=[]),e=id(ol,e,t),t=ue,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Fd:ds),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return di(e);if(e.$$typeof===X)return rt(e)}throw Error(s(438,String(e)))}function ts(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Rr(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function Nr(e){var t=Ve();return ns(t,Re,e)}function ns(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var m=f=null,b=null,A=t,_=!1;do{var H=A.lane&-536870913;if(H!==A.lane?(ve&H)===H:(Sn&H)===H){var M=A.revertLane;if(M===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),H===tl&&(_=!0);else if((Sn&M)===M){A=A.next,M===tl&&(_=!0);continue}else H={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=H,f=r):b=b.next=H,ue.lanes|=M,Wn|=M;H=A.action,za&&n(r,H),r=A.hasEagerState?A.eagerState:n(r,H)}else M={lane:H,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=M,f=r):b=b.next=M,ue.lanes|=H,Wn|=H;A=A.next}while(A!==null&&A!==t);if(b===null?f=r:b.next=m,!zt(r,e.memoizedState)&&(Ke=!0,_&&(n=nl,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=b,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function as(e){var t=Ve(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);zt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function pd(e,t,n){var a=ue,l=Ve(),r=Se;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!zt((Re||l).memoizedState,n);if(f&&(l.memoizedState=n,Ke=!0),l=l.queue,rs(vd.bind(null,a,l,e),[e]),l.getSnapshot!==t||f||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,ul(9,{destroy:void 0},bd.bind(null,a,l,n,t),null),_e===null)throw Error(s(349));r||(Sn&127)!==0||yd(a,t,n)}return n}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=Rr(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,a){t.value=n,t.getSnapshot=a,xd(t)&&Sd(e)}function vd(e,t,n){return n(function(){xd(t)&&Sd(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Sd(e){var t=ba(e,2);t!==null&&St(t,e,2)}function ls(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),za){Ln(!0);try{n()}finally{Ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function jd(e,t,n,a){return e.baseState=n,ns(e,Re,typeof a=="function"?a:jn)}function $p(e,t,n,a,l){if(Br(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};N.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,wd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function wd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=N.T,f={};N.T=f;try{var m=n(l,a),b=N.S;b!==null&&b(f,m),Ed(e,t,m)}catch(A){is(e,t,A)}finally{r!==null&&f.types!==null&&(r.types=f.types),N.T=r}}else try{r=n(l,a),Ed(e,t,r)}catch(A){is(e,t,A)}}function Ed(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Cd(e,t,a)},function(a){return is(e,t,a)}):Cd(e,t,n)}function Cd(e,t,n){t.status="fulfilled",t.value=n,Td(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wd(e,n)))}function is(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Td(t),t=t.next;while(t!==a)}e.action=null}function Td(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zd(e,t){return t}function Ad(e,t){if(Se){var n=_e.formState;if(n!==null){e:{var a=ue;if(Se){if(Ue){t:{for(var l=Ue,r=Xt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Zt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ue=Zt(l.nextSibling),a=l.data==="F!";break e}}qn(a)}a=!1}a&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:t},n.queue=a,n=$d.bind(null,ue,a),a.dispatch=n,a=ls(!1),r=fs.bind(null,ue,!1,a.queue),a=dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=$p.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Md(e){var t=Ve();return Od(t,Re,e)}function Od(e,t,n){if(t=ns(e,t,zd)[0],e=Nr(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=di(t)}catch(f){throw f===al?wr:f}else a=t;t=Ve();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,ul(9,{destroy:void 0},Jp.bind(null,l,n),null)),[a,r,e]}function Jp(e,t){e.action=t}function Rd(e){var t=Ve(),n=Re;if(n!==null)return Od(t,n,e);Ve(),t=t.memoizedState,n=Ve();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ul(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Rr(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Dd(){return Ve().memoizedState}function _r(e,t,n,a){var l=dt();ue.flags|=e,l.memoizedState=ul(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ur(e,t,n,a){var l=Ve();a=a===void 0?null:a;var r=l.memoizedState.inst;Re!==null&&a!==null&&Fu(a,Re.memoizedState.deps)?l.memoizedState=ul(t,r,n,a):(ue.flags|=e,l.memoizedState=ul(1|t,r,n,a))}function Nd(e,t){_r(8390656,8,e,t)}function rs(e,t){Ur(2048,8,e,t)}function Kp(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Rr(),ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _d(e){var t=Ve().memoizedState;return Kp({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ud(e,t){return Ur(4,2,e,t)}function Bd(e,t){return Ur(4,4,e,t)}function Ld(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,n){n=n!=null?n.concat([e]):null,Ur(4,4,Ld.bind(null,t,e),n)}function os(){}function kd(e,t){var n=Ve();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Fu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=Ve();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Fu(t,a[1]))return a[0];if(a=e(),za){Ln(!0);try{e()}finally{Ln(!1)}}return n.memoizedState=[a,t],a}function us(e,t,n){return n===void 0||(Sn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Gm(),ue.lanes|=e,Wn|=e,n)}function Gd(e,t,n,a){return zt(n,t)?n:il.current!==null?(e=us(e,n,a),zt(e,t)||(Ke=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(ve&261930)===0?(Ke=!0,e.memoizedState=n):(e=Gm(),ue.lanes|=e,Wn|=e,t)}function qd(e,t,n,a,l){var r=$.p;$.p=r!==0&&8>r?r:8;var f=N.T,m={};N.T=m,fs(e,!1,t,n);try{var b=l(),A=N.S;if(A!==null&&A(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var _=Xp(b,a);mi(e,t,_,Nt(e))}else mi(e,t,a,Nt(e))}catch(H){mi(e,t,{then:function(){},status:"rejected",reason:H},Nt())}finally{$.p=r,f!==null&&m.types!==null&&(f.types=m.types),N.T=f}}function Fp(){}function ss(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Qd(e).queue;qd(e,l,t,te,n===null?Fp:function(){return Xd(e),n(a)})}function Qd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xd(e){var t=Qd(e);t.next===null&&(t=e.alternate.memoizedState),mi(e,t.next.queue,{},Nt())}function cs(){return rt(Oi)}function Vd(){return Ve().memoizedState}function Zd(){return Ve().memoizedState}function Wp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=Vn(n);var a=Zn(t,e,n);a!==null&&(St(a,t,n),ui(a,t,n)),t={cache:ku()},e.payload=t;return}t=t.return}}function Ip(e,t,n){var a=Nt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Br(e)?Jd(t,n):(n=Au(e,t,n,a),n!==null&&(St(n,e,a),Kd(n,t,a)))}function $d(e,t,n){var a=Nt();mi(e,t,n,a)}function mi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Br(e))Jd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,n);if(l.hasEagerState=!0,l.eagerState=m,zt(m,f))return pr(e,t,l,0),_e===null&&gr(),!1}catch{}finally{}if(n=Au(e,t,l,a),n!==null)return St(n,e,a),Kd(n,t,a),!0}return!1}function fs(e,t,n,a){if(a={lane:2,revertLane:Qs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Br(e)){if(t)throw Error(s(479))}else t=Au(e,n,a,2),t!==null&&St(t,e,2)}function Br(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Jd(e,t){rl=Mr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pc(e,n)}}var hi={readContext:rt,use:Dr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};hi.useEffectEvent=qe;var Fd={readContext:rt,use:Dr,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Nd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,_r(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){_r(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var a=e();if(za){Ln(!0);try{e()}finally{Ln(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=dt();if(n!==void 0){var l=n(t);if(za){Ln(!0);try{n(t)}finally{Ln(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Ip.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=ls(e);var t=e.queue,n=$d.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:os,useDeferredValue:function(e,t){var n=dt();return us(n,e,t)},useTransition:function(){var e=ls(!1);return e=qd.bind(null,ue,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=dt();if(Se){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),_e===null)throw Error(s(349));(ve&127)!==0||yd(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,Nd(vd.bind(null,a,r,e),[e]),a.flags|=2048,ul(9,{destroy:void 0},bd.bind(null,a,r,n,t),null),n},useId:function(){var e=dt(),t=_e.identifierPrefix;if(Se){var n=on,a=rn;n=(a&~(1<<32-Tt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:cs,useFormState:Ad,useActionState:Ad,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fs.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:ts,useCacheRefresh:function(){return dt().memoizedState=Wp.bind(null,ue)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},ds={readContext:rt,use:Dr,useCallback:kd,useContext:rt,useEffect:rs,useImperativeHandle:Hd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Yd,useReducer:Nr,useRef:Dd,useState:function(){return Nr(jn)},useDebugValue:os,useDeferredValue:function(e,t){var n=Ve();return Gd(n,Re.memoizedState,e,t)},useTransition:function(){var e=Nr(jn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:pd,useId:Vd,useHostTransitionStatus:cs,useFormState:Md,useActionState:Md,useOptimistic:function(e,t){var n=Ve();return jd(n,Re,e,t)},useMemoCache:ts,useCacheRefresh:Zd};ds.useEffectEvent=_d;var Wd={readContext:rt,use:Dr,useCallback:kd,useContext:rt,useEffect:rs,useImperativeHandle:Hd,useInsertionEffect:Ud,useLayoutEffect:Bd,useMemo:Yd,useReducer:as,useRef:Dd,useState:function(){return as(jn)},useDebugValue:os,useDeferredValue:function(e,t){var n=Ve();return Re===null?us(n,e,t):Gd(n,Re.memoizedState,e,t)},useTransition:function(){var e=as(jn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:di(e),t]},useSyncExternalStore:pd,useId:Vd,useHostTransitionStatus:cs,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,t){var n=Ve();return Re!==null?jd(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ts,useCacheRefresh:Zd};Wd.useEffectEvent=_d;function ms(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Nt(),l=Vn(a);l.payload=t,n!=null&&(l.callback=n),t=Zn(e,l,a),t!==null&&(St(t,e,a),ui(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Nt(),l=Vn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Zn(e,l,a),t!==null&&(St(t,e,a),ui(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),a=Vn(n);a.tag=2,t!=null&&(a.callback=t),t=Zn(e,a,n),t!==null&&(St(t,e,n),ui(t,e,n))}};function Id(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!ei(n,a)||!ei(l,r):!0}function Pd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function em(e){hr(e)}function tm(e){console.error(e)}function nm(e){hr(e)}function Lr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function am(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function gs(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Lr(e,t)},n}function lm(e){return e=Vn(e),e.tag=3,e}function im(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){am(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){am(t,n,a),typeof l!="function"&&(In===null?In=new Set([this]):In.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function Pp(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&el(t,n,l,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?Kr():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Er?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ys(e,a,l)),!1;case 22:return n.flags|=65536,a===Er?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ys(e,a,l)),!1}throw Error(s(435,n.tag))}return Ys(e,a,l),Kr(),!1}if(Se)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==_u&&(e=Error(s(422),{cause:a}),ai(Gt(e,n)))):(a!==_u&&(t=Error(s(423),{cause:a}),ai(Gt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Gt(a,n),l=gs(e.stateNode,a,l),Vu(e,l),Qe!==4&&(Qe=2)),!1;var r=Error(s(520),{cause:a});if(r=Gt(r,n),ji===null?ji=[r]:ji.push(r),Qe!==4&&(Qe=2),t===null)return!0;a=Gt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=gs(n.stateNode,a,e),Vu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=lm(l),im(l,e,n,a),Vu(n,l),!1}n=n.return}while(n!==null);return!1}var ps=Error(s(461)),Ke=!1;function ot(e,t,n,a){t.child=e===null?sd(t,null,n,a):Ta(t,e.child,n,a)}function rm(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var m in a)m!=="ref"&&(f[m]=a[m])}else f=a;return ja(t),a=Wu(e,t,n,f,r,l),m=Iu(),e!==null&&!Ke?(Pu(e,t,l),wn(e,t,l)):(Se&&m&&Du(t),t.flags|=1,ot(e,t,a,l),t.child)}function om(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!Mu(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,um(e,t,r,a,l)):(e=br(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Es(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(f,a)&&e.ref===t.ref)return wn(e,t,l)}return t.flags|=1,e=yn(r,a),e.ref=t.ref,e.return=t,t.child=e}function um(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(ei(r,a)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=a=r,Es(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,wn(e,t,l)}return ys(e,t,n,a,l)}function sm(e,t,n,a){var l=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~r}else a=0,t.child=null;return cm(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jr(t,r!==null?r.cachePool:null),r!==null?dd(t,r):$u(),md(t);else return a=t.lanes=536870912,cm(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(jr(t,r.cachePool),dd(t,r),Jn(),t.memoizedState=null):(e!==null&&jr(t,null),$u(),Jn());return ot(e,t,l,n),t.child}function gi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cm(e,t,n,a,l){var r=Gu();return r=r===null?null:{parent:$e._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&jr(t,null),$u(),md(t),e!==null&&el(e,t,a,!0),t.childLanes=l,null}function Hr(e,t){return t=Yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fm(e,t,n){return Ta(t,e.child,null,n),e=Hr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function e1(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(a.mode==="hidden")return e=Hr(t,a),t.lanes=536870912,gi(null,e);if(Ku(t),(e=Ue)?(e=wh(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:rn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Jf(e),n.return=t,t.child=n,it=t,Ue=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return Hr(t,a)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(Ku(t),l)if(t.flags&256)t.flags&=-257,t=fm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ke||el(e,t,n,!1),l=(n&e.childLanes)!==0,Ke||l){if(a=_e,a!==null&&(f=ef(a,n),f!==0&&f!==r.retryLane))throw r.retryLane=f,ba(e,f),St(a,e,f),ps;Kr(),t=fm(e,t,n)}else e=r.treeContext,Ue=Zt(f.nextSibling),it=t,Se=!0,Gn=null,Xt=!1,e!==null&&Wf(t,e),t=Hr(t,a),t.flags|=4096;return t}return e=yn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function kr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ys(e,t,n,a,l){return ja(t),n=Wu(e,t,n,a,void 0,l),a=Iu(),e!==null&&!Ke?(Pu(e,t,l),wn(e,t,l)):(Se&&a&&Du(t),t.flags|=1,ot(e,t,n,l),t.child)}function dm(e,t,n,a,l,r){return ja(t),t.updateQueue=null,n=gd(t,a,n,l),hd(e),a=Iu(),e!==null&&!Ke?(Pu(e,t,r),wn(e,t,r)):(Se&&a&&Du(t),t.flags|=1,ot(e,t,n,r),t.child)}function mm(e,t,n,a,l){if(ja(t),t.stateNode===null){var r=Fa,f=n.contextType;typeof f=="object"&&f!==null&&(r=rt(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=hs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Qu(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?rt(f):Fa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(ms(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&hs.enqueueReplaceState(r,r.state,null),ci(t,a,r,l),si(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,b=Aa(n,m);r.props=b;var A=r.context,_=n.contextType;f=Fa,typeof _=="object"&&_!==null&&(f=rt(_));var H=n.getDerivedStateFromProps;_=typeof H=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||A!==f)&&Pd(t,r,a,f),Xn=!1;var M=t.memoizedState;r.state=M,ci(t,a,r,l),si(),A=t.memoizedState,m||M!==A||Xn?(typeof H=="function"&&(ms(t,n,H,a),A=t.memoizedState),(b=Xn||Id(t,n,b,a,M,A,f))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=f,a=b):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Xu(e,t),f=t.memoizedProps,_=Aa(n,f),r.props=_,H=t.pendingProps,M=r.context,A=n.contextType,b=Fa,typeof A=="object"&&A!==null&&(b=rt(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==H||M!==b)&&Pd(t,r,a,b),Xn=!1,M=t.memoizedState,r.state=M,ci(t,a,r,l),si();var R=t.memoizedState;f!==H||M!==R||Xn||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof m=="function"&&(ms(t,n,m,a),R=t.memoizedState),(_=Xn||Id(t,n,_,a,M,R,b)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,R,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,R,b)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),r.props=a,r.state=R,r.context=b,a=_):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,kr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ta(t,e.child,null,l),t.child=Ta(t,null,n,l)):ot(e,t,n,l),t.memoizedState=r.state,e=t.child):e=wn(e,t,l),e}function hm(e,t,n,a){return xa(),t.flags|=256,ot(e,t,n,a),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vs(e){return{baseLanes:e,cachePool:ad()}}function xs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function gm(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?$n(t):Jn(),(e=Ue)?(e=wh(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:rn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Jf(e),n.return=t,t.child=n,it=t,Ue=null)):e=null,e===null)throw qn(t);return nc(e)?t.lanes=32:t.lanes=536870912,null}var m=a.children;return a=a.fallback,l?(Jn(),l=t.mode,m=Yr({mode:"hidden",children:m},l),a=va(a,l,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,a=t.child,a.memoizedState=vs(n),a.childLanes=xs(e,f,n),t.memoizedState=bs,gi(null,a)):($n(t),Ss(t,m))}var b=e.memoizedState;if(b!==null&&(m=b.dehydrated,m!==null)){if(r)t.flags&256?($n(t),t.flags&=-257,t=js(e,t,n)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),m=a.fallback,l=t.mode,a=Yr({mode:"visible",children:a.children},l),m=va(m,l,n,null),m.flags|=2,a.return=t,m.return=t,a.sibling=m,t.child=a,Ta(t,e.child,null,n),a=t.child,a.memoizedState=vs(n),a.childLanes=xs(e,f,n),t.memoizedState=bs,t=gi(null,a));else if($n(t),nc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var A=f.dgst;f=A,a=Error(s(419)),a.stack="",a.digest=f,ai({value:a,source:null,stack:null}),t=js(e,t,n)}else if(Ke||el(e,t,n,!1),f=(n&e.childLanes)!==0,Ke||f){if(f=_e,f!==null&&(a=ef(f,n),a!==0&&a!==b.retryLane))throw b.retryLane=a,ba(e,a),St(f,e,a),ps;tc(m)||Kr(),t=js(e,t,n)}else tc(m)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ue=Zt(m.nextSibling),it=t,Se=!0,Gn=null,Xt=!1,e!==null&&Wf(t,e),t=Ss(t,a.children),t.flags|=4096);return t}return l?(Jn(),m=a.fallback,l=t.mode,b=e.child,A=b.sibling,a=yn(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,A!==null?m=yn(A,m):(m=va(m,l,n,null),m.flags|=2),m.return=t,a.return=t,a.sibling=m,t.child=a,gi(null,a),a=t.child,m=e.child.memoizedState,m===null?m=vs(n):(l=m.cachePool,l!==null?(b=$e._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=ad(),m={baseLanes:m.baseLanes|n,cachePool:l}),a.memoizedState=m,a.childLanes=xs(e,f,n),t.memoizedState=bs,gi(e.child,a)):($n(t),n=e.child,e=n.sibling,n=yn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Ss(e,t){return t=Yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yr(e,t){return e=At(22,e,null,t),e.lanes=0,e}function js(e,t,n){return Ta(t,e.child,null,n),e=Ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Lu(e.return,t,n)}function ws(e,t,n,a,l,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:r}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=l,f.treeForkCount=r)}function ym(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;a=a.children;var f=Xe.current,m=(f&2)!==0;if(m?(f=f&1|2,t.flags|=128):f&=1,J(Xe,f),ot(e,t,a,n),a=Se?ni:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,n,t);else if(e.tag===19)pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ar(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ws(t,!1,l,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ws(t,!0,n,null,r,a);break;case"together":ws(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(el(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Es(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function t1(e,t,n){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),Qn(t,$e,e.memoizedState.cache),xa();break;case 27:case 5:It(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ku(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?($n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?gm(e,t,n):($n(t),e=wn(e,t,n),e!==null?e.sibling:null);$n(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(el(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return ym(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Xe,Xe.current),a)break;return null;case 22:return t.lanes=0,sm(e,t,n,t.pendingProps);case 24:Qn(t,$e,e.memoizedState.cache)}return wn(e,t,n)}function bm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Es(e,n)&&(t.flags&128)===0)return Ke=!1,t1(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,Se&&(t.flags&1048576)!==0&&Ff(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")Mu(e)?(a=Aa(e,a),t.tag=1,t=mm(null,t,e,a,n)):(t.tag=0,t=ys(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ae){t.tag=11,t=rm(null,t,e,a,n);break e}else if(l===Q){t.tag=14,t=om(null,t,e,a,n);break e}}throw t=mt(e)||e,Error(s(306,t,""))}}return t;case 0:return ys(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Aa(a,t.pendingProps),mm(e,t,a,l,n);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,Xu(e,t),ci(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Qn(t,$e,a),a!==r.cache&&Hu(t,[$e],n,!0),si(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=hm(e,t,a,n);break e}else if(a!==l){l=Gt(Error(s(424)),t),ai(l),t=hm(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Zt(e.firstChild),it=t,Se=!0,Gn=null,Xt=!0,n=sd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xa(),a===l){t=wn(e,t,n);break e}ot(e,t,a,n)}t=t.child}return t;case 26:return kr(e,t),e===null?(n=Mh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,a=no(re.current).createElement(n),a[lt]=t,a[gt]=e,ut(a,n,e),et(a),t.stateNode=a):t.memoizedState=Mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return It(t),e===null&&Se&&(a=t.stateNode=Th(t.type,t.pendingProps,re.current),it=t,Xt=!0,l=Ue,na(t.type)?(ac=l,Ue=Zt(a.firstChild)):Ue=l),ot(e,t,t.pendingProps.children,n),kr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=a=Ue)&&(a=R1(a,t.type,t.pendingProps,Xt),a!==null?(t.stateNode=a,it=t,Ue=Zt(a.firstChild),Xt=!1,l=!0):l=!1),l||qn(t)),It(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Is(l,r)?a=null:f!==null&&Is(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=Wu(e,t,Zp,null,null,n),Oi._currentValue=l),kr(e,t),ot(e,t,a,n),t.child;case 6:return e===null&&Se&&((e=n=Ue)&&(n=D1(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,it=t,Ue=null,e=!0):e=!1),e||qn(t)),null;case 13:return gm(e,t,n);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ta(t,null,a,n):ot(e,t,a,n),t.child;case 11:return rm(e,t,t.type,t.pendingProps,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Qn(t,t.type,a.value),ot(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ja(t),l=rt(l),a=a(l),t.flags|=1,ot(e,t,a,n),t.child;case 14:return om(e,t,t.type,t.pendingProps,n);case 15:return um(e,t,t.type,t.pendingProps,n);case 19:return ym(e,t,n);case 31:return e1(e,t,n);case 22:return sm(e,t,n,t.pendingProps);case 24:return ja(t),a=rt($e),e===null?(l=Gu(),l===null&&(l=_e,r=ku(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},Qu(t),Qn(t,$e,l)):((e.lanes&n)!==0&&(Xu(e,t),ci(t,null,null,n),si()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Qn(t,$e,a)):(a=r.cache,Qn(t,$e,a),a!==l.cache&&Hu(t,[$e],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function En(e){e.flags|=4}function Cs(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Vm())e.flags|=8192;else throw Ca=Er,qu}else e.flags&=-16777217}function vm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t))if(Vm())e.flags|=8192;else throw Ca=Er,qu}function Gr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wc():536870912,e.lanes|=t,dl|=t)}function pi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function n1(e,t,n){var a=t.pendingProps;switch(Nu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),xn($e),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Uu())),Be(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(En(t),r!==null?(Be(t),vm(t,r)):(Be(t),Cs(t,l,null,a,n))):r?r!==e.memoizedState?(En(t),Be(t),vm(t,r)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&En(t),Be(t),Cs(t,l,e,a,n)),null;case 27:if(Pt(t),n=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&En(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}e=F.current,Pa(t)?If(t):(e=Th(l,a,n),t.stateNode=e,En(t))}return Be(t),null;case 5:if(Pt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&En(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}if(r=F.current,Pa(t))If(t);else{var f=no(re.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(l,{is:a.is}):f.createElement(l)}}r[lt]=t,r[gt]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=r;e:switch(ut(r,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&En(t)}}return Be(t),Cs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&En(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Pa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=it,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||gh(e.nodeValue,n)),e||qn(t,!0)}else e=no(e).createTextNode(a),e[lt]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Pa(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[lt]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Pa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[lt]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else l=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Gr(t,t.updateQueue),Be(t),null);case 4:return Ee(),e===null&&$s(t.stateNode.containerInfo),Be(t),null;case 10:return xn(t.type),Be(t),null;case 19:if(U(Xe),a=t.memoizedState,a===null)return Be(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)pi(a,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ar(e),r!==null){for(t.flags|=128,pi(a,!1),e=r.updateQueue,t.updateQueue=e,Gr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)$f(n,e),n=n.sibling;return J(Xe,Xe.current&1|2),Se&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ct()>Zr&&(t.flags|=128,l=!0,pi(a,!1),t.lanes=4194304)}else{if(!l)if(e=Ar(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Gr(t,e),pi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!Se)return Be(t),null}else 2*ct()-a.renderingStartTime>Zr&&n!==536870912&&(t.flags|=128,l=!0,pi(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ct(),e.sibling=null,n=Xe.current,J(Xe,l?n&1|2:n&1),Se&&bn(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return Ot(t),Ju(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Gr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&U(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn($e),Be(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function a1(e,t){switch(Nu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn($e),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(s(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Xe),null;case 4:return Ee(),null;case 10:return xn(t.type),null;case 22:case 23:return Ot(t),Ju(),e!==null&&U(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn($e),null;case 25:return null;default:return null}}function xm(e,t){switch(Nu(t),t.tag){case 3:xn($e),Ee();break;case 26:case 27:case 5:Pt(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:U(Xe);break;case 10:xn(t.type);break;case 22:case 23:Ot(t),Ju(),e!==null&&U(wa);break;case 24:xn($e)}}function yi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(m){Oe(t,t.return,m)}}function Kn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,l=t;var b=n,A=m;try{A()}catch(_){Oe(l,b,_)}}}a=a.next}while(a!==r)}}catch(_){Oe(t,t.return,_)}}function Sm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fd(t,n)}catch(a){Oe(e,e.return,a)}}}function jm(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Oe(e,t,a)}}function bi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Oe(e,t,l)}}function un(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Oe(e,t,l)}else n.current=null}function wm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Oe(e,e.return,l)}}function Ts(e,t,n){try{var a=e.stateNode;C1(a,e.type,n,t),a[gt]=t}catch(l){Oe(e,e.return,l)}}function Em(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}function qr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qr(e,t,n),e=e.sibling;e!==null;)qr(e,t,n),e=e.sibling}function Cm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ut(t,a,n),t[lt]=e,t[gt]=n}catch(r){Oe(e,e.return,r)}}var Cn=!1,Fe=!1,Ms=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,tt=null;function l1(e,t){if(e=e.containerInfo,Fs=so,e=Hf(e),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,m=-1,b=-1,A=0,_=0,H=e,M=null;t:for(;;){for(var R;H!==n||l!==0&&H.nodeType!==3||(m=f+l),H!==r||a!==0&&H.nodeType!==3||(b=f+a),H.nodeType===3&&(f+=H.nodeValue.length),(R=H.firstChild)!==null;)M=H,H=R;for(;;){if(H===e)break t;if(M===n&&++A===l&&(m=f),M===r&&++_===a&&(b=f),(R=H.nextSibling)!==null)break;H=M,M=H.parentNode}H=R}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ws={focusedElem:e,selectionRange:n},so=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var W=Aa(n.type,l);e=a.getSnapshotBeforeUpdate(W,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(le){Oe(n,n.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ec(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function zm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),a&4&&yi(5,n);break;case 1:if(zn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Oe(n,n.return,f)}else{var l=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Oe(n,n.return,f)}}a&64&&Sm(n),a&512&&bi(n,n.return);break;case 3:if(zn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fd(e,t)}catch(f){Oe(n,n.return,f)}}break;case 27:t===null&&a&4&&Cm(n);case 26:case 5:zn(e,n),t===null&&a&4&&wm(n),a&512&&bi(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),a&4&&Om(e,n);break;case 13:zn(e,n),a&4&&Rm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=m1.bind(null,n),N1(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||Fe,l=Cn;var r=Fe;Cn=a,(Fe=t)&&!r?An(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),Cn=l,Fe=r}break;case 30:break;default:zn(e,n)}}function Am(e){var t=e.alternate;t!==null&&(e.alternate=null,Am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&iu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,yt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)Mm(e,t,n),n=n.sibling}function Mm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 26:Fe||un(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||un(n,t);var a=ke,l=yt;na(n.type)&&(ke=n.stateNode,yt=!1),Tn(e,t,n),zi(n.stateNode),ke=a,yt=l;break;case 5:Fe||un(n,t);case 6:if(a=ke,l=yt,ke=null,Tn(e,t,n),ke=a,yt=l,ke!==null)if(yt)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(r){Oe(n,t,r)}else try{ke.removeChild(n.stateNode)}catch(r){Oe(n,t,r)}break;case 18:ke!==null&&(yt?(e=ke,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xl(e)):Sh(ke,n.stateNode));break;case 4:a=ke,l=yt,ke=n.stateNode.containerInfo,yt=!0,Tn(e,t,n),ke=a,yt=l;break;case 0:case 11:case 14:case 15:Kn(2,n,t),Fe||Kn(4,n,t),Tn(e,t,n);break;case 1:Fe||(un(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&jm(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:Fe=(a=Fe)||n.memoizedState!==null,Tn(e,t,n),Fe=a;break;default:Tn(e,t,n)}}function Om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xl(e)}catch(n){Oe(t,t.return,n)}}}function Rm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xl(e)}catch(n){Oe(t,t.return,n)}}function i1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tm),t;default:throw Error(s(435,e.tag))}}function Qr(e,t){var n=i1(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=h1.bind(null,e,a);a.then(l,l)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(na(m.type)){ke=m.stateNode,yt=!1;break e}break;case 5:ke=m.stateNode,yt=!1;break e;case 3:case 4:ke=m.stateNode.containerInfo,yt=!0;break e}m=m.return}if(ke===null)throw Error(s(160));Mm(r,f,l),ke=null,yt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}var tn=null;function Dm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),vt(e),a&4&&(Kn(3,e,e.return),yi(3,e),Kn(5,e,e.return));break;case 1:bt(t,e),vt(e),a&512&&(Fe||n===null||un(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=tn;if(bt(t,e),vt(e),a&512&&(Fe||n===null||un(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Vl]||r[lt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),ut(r,a,n),r[lt]=e,et(r),a=r;break e;case"link":var f=Dh("link","href",l).get(a+(n.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(m,1);break t}}r=l.createElement(a),ut(r,a,n),l.head.appendChild(r);break;case"meta":if(f=Dh("meta","content",l).get(a+(n.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(m,1);break t}}r=l.createElement(a),ut(r,a,n),l.head.appendChild(r);break;default:throw Error(s(468,a))}r[lt]=e,et(r),a=r}e.stateNode=a}else Nh(l,e.type,e.stateNode);else e.stateNode=Rh(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Nh(l,e.type,e.stateNode):Rh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ts(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),vt(e),a&512&&(Fe||n===null||un(n,n.return)),n!==null&&a&4&&Ts(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),vt(e),a&512&&(Fe||n===null||un(n,n.return)),e.flags&32){l=e.stateNode;try{Qa(l,"")}catch(W){Oe(e,e.return,W)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Ts(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Ms=!0);break;case 6:if(bt(t,e),vt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(W){Oe(e,e.return,W)}}break;case 3:if(io=null,l=tn,tn=ao(t.containerInfo),bt(t,e),tn=l,vt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(W){Oe(e,e.return,W)}Ms&&(Ms=!1,Nm(e));break;case 4:a=tn,tn=ao(e.stateNode.containerInfo),bt(t,e),vt(e),tn=a;break;case 12:bt(t,e),vt(e);break;case 31:bt(t,e),vt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Qr(e,a)));break;case 13:bt(t,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vr=ct()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Qr(e,a)));break;case 22:l=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=Cn,_=Fe;if(Cn=A||l,Fe=_||b,bt(t,e),Fe=_,Cn=A,vt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||b||Cn||Fe||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(r=b.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=b.stateNode;var H=b.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(W){Oe(b,b.return,W)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(W){Oe(b,b.return,W)}}}else if(t.tag===18){if(n===null){b=t;try{var R=b.stateNode;l?jh(R,!0):jh(b.stateNode,!1)}catch(W){Oe(b,b.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Qr(e,n))));break;case 19:bt(t,e),vt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Qr(e,a)));break;case 30:break;case 21:break;default:bt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Em(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,r=zs(e);qr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(Qa(f,""),n.flags&=-33);var m=zs(e);qr(e,m,f);break;case 3:case 4:var b=n.stateNode.containerInfo,A=zs(e);As(e,A,b);break;default:throw Error(s(161))}}catch(_){Oe(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zm(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kn(4,t,t.return),Ma(t);break;case 1:un(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&jm(t,t.return,n),Ma(t);break;case 27:zi(t.stateNode);case 26:case 5:un(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function An(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:An(l,r,n),yi(4,r);break;case 1:if(An(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Oe(a,a.return,A)}if(a=r,l=a.updateQueue,l!==null){var m=a.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)cd(b[l],m)}catch(A){Oe(a,a.return,A)}}n&&f&64&&Sm(r),bi(r,r.return);break;case 27:Cm(r);case 26:case 5:An(l,r,n),n&&a===null&&f&4&&wm(r),bi(r,r.return);break;case 12:An(l,r,n);break;case 31:An(l,r,n),n&&f&4&&Om(l,r);break;case 13:An(l,r,n),n&&f&4&&Rm(l,r);break;case 22:r.memoizedState===null&&An(l,r,n),bi(r,r.return);break;case 30:break;default:An(l,r,n)}t=t.sibling}}function Os(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&li(n))}function Rs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e))}function nn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_m(e,t,n,a),t=t.sibling}function _m(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,n,a),l&2048&&yi(9,t);break;case 1:nn(e,t,n,a);break;case 3:nn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&li(e)));break;case 12:if(l&2048){nn(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Oe(t,t.return,b)}}else nn(e,t,n,a);break;case 31:nn(e,t,n,a);break;case 13:nn(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?nn(e,t,n,a):vi(e,t):r._visibility&2?nn(e,t,n,a):(r._visibility|=2,sl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Os(f,t);break;case 24:nn(e,t,n,a),l&2048&&Rs(t.alternate,t);break;default:nn(e,t,n,a)}}function sl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,f=t,m=n,b=a,A=f.flags;switch(f.tag){case 0:case 11:case 15:sl(r,f,m,b,l),yi(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?sl(r,f,m,b,l):vi(r,f):(_._visibility|=2,sl(r,f,m,b,l)),l&&A&2048&&Os(f.alternate,f);break;case 24:sl(r,f,m,b,l),l&&A&2048&&Rs(f.alternate,f);break;default:sl(r,f,m,b,l)}t=t.sibling}}function vi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:vi(n,a),l&2048&&Os(a.alternate,a);break;case 24:vi(n,a),l&2048&&Rs(a.alternate,a);break;default:vi(n,a)}t=t.sibling}}var xi=8192;function cl(e,t,n){if(e.subtreeFlags&xi)for(e=e.child;e!==null;)Um(e,t,n),e=e.sibling}function Um(e,t,n){switch(e.tag){case 26:cl(e,t,n),e.flags&xi&&e.memoizedState!==null&&V1(n,tn,e.memoizedState,e.memoizedProps);break;case 5:cl(e,t,n);break;case 3:case 4:var a=tn;tn=ao(e.stateNode.containerInfo),cl(e,t,n),tn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=xi,xi=16777216,cl(e,t,n),xi=a):cl(e,t,n));break;default:cl(e,t,n)}}function Bm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,Hm(a,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xr(e)):Si(e);break;default:Si(e)}}function Xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,Hm(a,e)}Bm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kn(8,t,t.return),Xr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xr(t));break;default:Xr(t)}e=e.sibling}}function Hm(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:li(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,tt=a;else e:for(n=e;tt!==null;){a=tt;var l=a.sibling,r=a.return;if(Am(a),a===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var r1={getCacheForType:function(e){var t=rt($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt($e).controller.signal}},o1=typeof WeakMap=="function"?WeakMap:Map,Ce=0,_e=null,pe=null,ve=0,Me=0,Rt=null,Fn=!1,fl=!1,Ds=!1,Mn=0,Qe=0,Wn=0,Oa=0,Ns=0,Dt=0,dl=0,ji=null,xt=null,_s=!1,Vr=0,km=0,Zr=1/0,$r=null,In=null,Ie=0,Pn=null,ml=null,On=0,Us=0,Bs=null,Ym=null,wi=0,Ls=null;function Nt(){return(Ce&2)!==0&&ve!==0?ve&-ve:N.T!==null?Qs():tf()}function Gm(){if(Dt===0)if((ve&536870912)===0||Se){var e=tr;tr<<=1,(tr&3932160)===0&&(tr=262144),Dt=e}else Dt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Dt}function St(e,t,n){(e===_e&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(hl(e,0),ea(e,ve,Dt,!1)),Xl(e,n),((Ce&2)===0||e!==_e)&&(e===_e&&((Ce&2)===0&&(Oa|=n),Qe===4&&ea(e,ve,Dt,!1)),sn(e))}function qm(e,t,n){if((Ce&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ql(e,t),l=a?c1(e,t):ks(e,t,!0),r=a;do{if(l===0){fl&&!a&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!u1(n)){l=ks(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;l=ji;var b=m.current.memoizedState.isDehydrated;if(b&&(hl(m,f).flags|=256),f=ks(m,f,!1),f!==2){if(Ds&&!b){m.errorRecoveryDisabledLanes|=r,Oa|=r,l=4;break e}r=xt,xt=l,r!==null&&(xt===null?xt=r:xt.push.apply(xt,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){hl(e,0),ea(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ea(a,t,Dt,!Fn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Vr+300-ct(),10<l)){if(ea(a,t,Dt,!Fn),ar(a,0,!0)!==0)break e;On=t,a.timeoutHandle=vh(Qm.bind(null,a,n,xt,$r,_s,t,Dt,Oa,dl,Fn,r,"Throttled",-0,0),l);break e}Qm(a,n,xt,$r,_s,t,Dt,Oa,dl,Fn,r,null,-0,0)}}break}while(!0);sn(e)}function Qm(e,t,n,a,l,r,f,m,b,A,_,H,M,R){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Um(t,r,H);var W=(r&62914560)===r?Vr-ct():(r&4194048)===r?km-ct():0;if(W=Z1(H,W),W!==null){On=r,e.cancelPendingCommit=W(Wm.bind(null,e,t,r,n,a,l,f,m,b,_,H,null,M,R)),ea(e,r,f,!A);return}}Wm(e,t,r,n,a,l,f,m,b)}function u1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!zt(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,a){t&=~Ns,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-Tt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Ic(e,n,t)}function Jr(){return(Ce&6)===0?(Ei(0),!1):!0}function Hs(){if(pe!==null){if(Me===0)var e=pe.return;else e=pe,vn=Sa=null,es(e),ll=null,ri=0,e=pe;for(;e!==null;)xm(e.alternate,e),e=e.return;pe=null}}function hl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,A1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,Hs(),_e=e,pe=n=yn(e.current,null),ve=t,Me=0,Rt=null,Fn=!1,fl=Ql(e,t),Ds=!1,dl=Dt=Ns=Oa=Wn=Qe=0,xt=ji=null,_s=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Tt(a),r=1<<l;t|=e[l],a&=~r}return Mn=t,gr(),n}function Xm(e,t){ue=null,N.H=hi,t===al||t===wr?(t=rd(),Me=3):t===qu?(t=rd(),Me=4):Me=t===ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,pe===null&&(Qe=1,Lr(e,Gt(t,e.current)))}function Vm(){var e=Mt.current;return e===null?!0:(ve&4194048)===ve?Vt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Vt:!1}function Zm(){var e=N.H;return N.H=hi,e===null?hi:e}function $m(){var e=N.A;return N.A=r1,e}function Kr(){Qe=4,Fn||(ve&4194048)!==ve&&Mt.current!==null||(fl=!0),(Wn&134217727)===0&&(Oa&134217727)===0||_e===null||ea(_e,ve,Dt,!1)}function ks(e,t,n){var a=Ce;Ce|=2;var l=Zm(),r=$m();(_e!==e||ve!==t)&&($r=null,hl(e,t)),t=!1;var f=Qe;e:do try{if(Me!==0&&pe!==null){var m=pe,b=Rt;switch(Me){case 8:Hs(),f=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var A=Me;if(Me=0,Rt=null,gl(e,m,b,A),n&&fl){f=0;break e}break;default:A=Me,Me=0,Rt=null,gl(e,m,b,A)}}s1(),f=Qe;break}catch(_){Xm(e,_)}while(!0);return t&&e.shellSuspendCounter++,vn=Sa=null,Ce=a,N.H=l,N.A=r,pe===null&&(_e=null,ve=0,gr()),f}function s1(){for(;pe!==null;)Jm(pe)}function c1(e,t){var n=Ce;Ce|=2;var a=Zm(),l=$m();_e!==e||ve!==t?($r=null,Zr=ct()+500,hl(e,t)):fl=Ql(e,t);e:do try{if(Me!==0&&pe!==null){t=pe;var r=Rt;t:switch(Me){case 1:Me=0,Rt=null,gl(e,t,r,1);break;case 2:case 9:if(ld(r)){Me=0,Rt=null,Km(t);break}t=function(){Me!==2&&Me!==9||_e!==e||(Me=7),sn(e)},r.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:ld(r)?(Me=0,Rt=null,Km(t)):(Me=0,Rt=null,gl(e,t,r,7));break;case 5:var f=null;switch(pe.tag){case 26:f=pe.memoizedState;case 5:case 27:var m=pe;if(f?_h(f):m.stateNode.complete){Me=0,Rt=null;var b=m.sibling;if(b!==null)pe=b;else{var A=m.return;A!==null?(pe=A,Fr(A)):pe=null}break t}}Me=0,Rt=null,gl(e,t,r,5);break;case 6:Me=0,Rt=null,gl(e,t,r,6);break;case 8:Hs(),Qe=6;break e;default:throw Error(s(462))}}f1();break}catch(_){Xm(e,_)}while(!0);return vn=Sa=null,N.H=a,N.A=l,Ce=n,pe!==null?0:(_e=null,ve=0,gr(),Qe)}function f1(){for(;pe!==null&&!Io();)Jm(pe)}function Jm(e){var t=bm(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Fr(e):pe=t}function Km(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dm(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=dm(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:es(t);default:xm(n,t),t=pe=$f(t,Mn),t=bm(n,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Fr(e):pe=t}function gl(e,t,n,a){vn=Sa=null,es(t),ll=null,ri=0;var l=t.return;try{if(Pp(e,l,t,n,ve)){Qe=1,Lr(e,Gt(n,e.current)),pe=null;return}}catch(r){if(l!==null)throw pe=l,r;Qe=1,Lr(e,Gt(n,e.current)),pe=null;return}t.flags&32768?(Se||a===1?e=!0:fl||(ve&536870912)!==0?e=!1:(Fn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Fm(t,e)):Fr(t)}function Fr(e){var t=e;do{if((t.flags&32768)!==0){Fm(t,Fn);return}e=t.return;var n=n1(t.alternate,t,Mn);if(n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Qe===0&&(Qe=5)}function Fm(e,t){do{var n=a1(e.alternate,e);if(n!==null){n.flags&=32767,pe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=n}while(e!==null);Qe=6,pe=null}function Wm(e,t,n,a,l,r,f,m,b){e.cancelPendingCommit=null;do Wr();while(Ie!==0);if((Ce&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=zu,Xg(e,n,r,f,m,b),e===_e&&(pe=_e=null,ve=0),ml=t,Pn=e,On=n,Us=r,Bs=l,Ym=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g1(ee,function(){return nh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,l=$.p,$.p=2,f=Ce,Ce|=4;try{l1(e,t,n)}finally{Ce=f,$.p=l,N.T=a}}Ie=1,Im(),Pm(),eh()}}function Im(){if(Ie===1){Ie=0;var e=Pn,t=ml,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=$.p;$.p=2;var l=Ce;Ce|=4;try{Dm(t,e);var r=Ws,f=Hf(e.containerInfo),m=r.focusedElem,b=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&Lf(m.ownerDocument.documentElement,m)){if(b!==null&&ju(m)){var A=b.start,_=b.end;if(_===void 0&&(_=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(_,m.value.length);else{var H=m.ownerDocument||document,M=H&&H.defaultView||window;if(M.getSelection){var R=M.getSelection(),W=m.textContent.length,le=Math.min(b.start,W),Ne=b.end===void 0?le:Math.min(b.end,W);!R.extend&&le>Ne&&(f=Ne,Ne=le,le=f);var C=Bf(m,le),S=Bf(m,Ne);if(C&&S&&(R.rangeCount!==1||R.anchorNode!==C.node||R.anchorOffset!==C.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var z=H.createRange();z.setStart(C.node,C.offset),R.removeAllRanges(),le>Ne?(R.addRange(z),R.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),R.addRange(z))}}}}for(H=[],R=m;R=R.parentNode;)R.nodeType===1&&H.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<H.length;m++){var L=H[m];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}so=!!Fs,Ws=Fs=null}finally{Ce=l,$.p=a,N.T=n}}e.current=t,Ie=2}}function Pm(){if(Ie===2){Ie=0;var e=Pn,t=ml,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=$.p;$.p=2;var l=Ce;Ce|=4;try{zm(e,t.alternate,t)}finally{Ce=l,$.p=a,N.T=n}}Ie=3}}function eh(){if(Ie===4||Ie===3){Ie=0,Po();var e=Pn,t=ml,n=On,a=Ym;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,ml=Pn=null,th(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(In=null),au(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,l=$.p,$.p=2,N.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var m=a[f];r(m.value,{componentStack:m.stack})}}finally{N.T=t,$.p=l}}(On&3)!==0&&Wr(),sn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Ls?wi++:(wi=0,Ls=e):wi=0,Ei(0)}}function th(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,li(t)))}function Wr(){return Im(),Pm(),eh(),nh()}function nh(){if(Ie!==5)return!1;var e=Pn,t=Us;Us=0;var n=au(On),a=N.T,l=$.p;try{$.p=32>n?32:n,N.T=null,n=Bs,Bs=null;var r=Pn,f=On;if(Ie=0,ml=Pn=null,On=0,(Ce&6)!==0)throw Error(s(331));var m=Ce;if(Ce|=4,Lm(r.current),_m(r,r.current,f,n),Ce=m,Ei(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ql,r)}catch{}return!0}finally{$.p=l,N.T=a,th(e,t)}}function ah(e,t,n){t=Gt(n,t),t=gs(e.stateNode,t,2),e=Zn(e,t,2),e!==null&&(Xl(e,2),sn(e))}function Oe(e,t,n){if(e.tag===3)ah(e,e,n);else for(;t!==null;){if(t.tag===3){ah(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(In===null||!In.has(a))){e=Gt(n,e),n=lm(2),a=Zn(t,n,2),a!==null&&(im(n,a,t,e),Xl(a,2),sn(a));break}}t=t.return}}function Ys(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new o1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Ds=!0,l.add(n),e=d1.bind(null,e,t,n),t.then(e,e))}function d1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(ve&n)===n&&(Qe===4||Qe===3&&(ve&62914560)===ve&&300>ct()-Vr?(Ce&2)===0&&hl(e,0):Ns|=n,dl===ve&&(dl=0)),sn(e)}function lh(e,t){t===0&&(t=Wc()),e=ba(e,t),e!==null&&(Xl(e,t),sn(e))}function m1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function h1(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),lh(e,n)}function g1(e,t){return Yl(e,t)}var Ir=null,pl=null,Gs=!1,Pr=!1,qs=!1,ta=0;function sn(e){e!==pl&&e.next===null&&(pl===null?Ir=pl=e:pl=pl.next=e),Pr=!0,Gs||(Gs=!0,y1())}function Ei(e,t){if(!qs&&Pr){qs=!0;do for(var n=!1,a=Ir;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,m=a.pingedLanes;r=(1<<31-Tt(42|e)+1)-1,r&=l&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,uh(a,r))}else r=ve,r=ar(a,a===_e?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Ql(a,r)||(n=!0,uh(a,r));a=a.next}while(n);qs=!1}}function p1(){ih()}function ih(){Pr=Gs=!1;var e=0;ta!==0&&z1()&&(e=ta);for(var t=ct(),n=null,a=Ir;a!==null;){var l=a.next,r=rh(a,t);r===0?(a.next=null,n===null?Ir=l:n.next=l,l===null&&(pl=n)):(n=a,(e!==0||(r&3)!==0)&&(Pr=!0)),a=l}Ie!==0&&Ie!==5||Ei(e),ta!==0&&(ta=0)}function rh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-Tt(r),m=1<<f,b=l[f];b===-1?((m&n)===0||(m&a)!==0)&&(l[f]=Qg(m,t)):b<=t&&(e.expiredLanes|=m),r&=~m}if(t=_e,n=ve,n=ar(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Gl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Gl(a),au(n)){case 2:case 8:n=P;break;case 32:n=ee;break;case 268435456:n=Bn;break;default:n=ee}return a=oh.bind(null,e),n=Yl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Gl(a),e.callbackPriority=2,e.callbackNode=null,2}function oh(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var a=ve;return a=ar(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(qm(e,a,t),rh(e,ct()),e.callbackNode!=null&&e.callbackNode===n?oh.bind(null,e):null)}function uh(e,t){if(Wr())return null;qm(e,t,!0)}function y1(){M1(function(){(Ce&6)!==0?Yl(D,p1):ih()})}function Qs(){if(ta===0){var e=tl;e===0&&(e=er,er<<=1,(er&261888)===0&&(er=256)),ta=e}return ta}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:or(""+e)}function ch(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function b1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=sh((l[gt]||null).action),f=a.submitter;f&&(t=(t=f[gt]||null)?sh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new fr("action","action",null,a,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ta!==0){var b=f?ch(l,f):new FormData(l);ss(n,{pending:!0,data:b,method:l.method,action:r},null,b)}}else typeof r=="function"&&(m.preventDefault(),b=f?ch(l,f):new FormData(l),ss(n,{pending:!0,data:b,method:l.method,action:r},r,b))},currentTarget:l}]})}}for(var Xs=0;Xs<Tu.length;Xs++){var Vs=Tu[Xs],v1=Vs.toLowerCase(),x1=Vs[0].toUpperCase()+Vs.slice(1);en(v1,"on"+x1)}en(Gf,"onAnimationEnd"),en(qf,"onAnimationIteration"),en(Qf,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(Bp,"onTransitionRun"),en(Lp,"onTransitionStart"),en(Hp,"onTransitionCancel"),en(Xf,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var m=a[f],b=m.instance,A=m.currentTarget;if(m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(_){hr(_)}l.currentTarget=null,r=b}else for(f=0;f<a.length;f++){if(m=a[f],b=m.instance,A=m.currentTarget,m=m.listener,b!==r&&l.isPropagationStopped())break e;r=m,l.currentTarget=A;try{r(l)}catch(_){hr(_)}l.currentTarget=null,r=b}}}}function ye(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var a=e+"__bubble";n.has(a)||(dh(t,e,2,!1),n.add(a))}function Zs(e,t,n){var a=0;t&&(a|=4),dh(n,e,a,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function $s(e){if(!e[eo]){e[eo]=!0,lf.forEach(function(n){n!=="selectionchange"&&(S1.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Zs("selectionchange",!1,t))}}function dh(e,t,n,a){switch(Gh(t)){case 2:var l=K1;break;case 8:l=F1;break;default:l=uc}n=l.bind(null,t,n,e),l=void 0,!mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Js(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var m=a.stateNode.containerInfo;if(m===l)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;m!==null;){if(f=Ha(m),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=r=f;continue e}m=m.parentNode}}a=a.return}yf(function(){var A=r,_=fu(n),H=[];e:{var M=Vf.get(e);if(M!==void 0){var R=fr,W=e;switch(e){case"keypress":if(sr(n)===0)break e;case"keydown":case"keyup":R=hp;break;case"focusin":W="focus",R=yu;break;case"focusout":W="blur",R=yu;break;case"beforeblur":case"afterblur":R=yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=yp;break;case Gf:case qf:case Qf:R=ip;break;case Xf:R=vp;break;case"scroll":case"scrollend":R=ep;break;case"wheel":R=Sp;break;case"copy":case"cut":case"paste":R=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=jf;break;case"toggle":case"beforetoggle":R=wp}var le=(t&4)!==0,Ne=!le&&(e==="scroll"||e==="scrollend"),C=le?M!==null?M+"Capture":null:M;le=[];for(var S=A,z;S!==null;){var L=S;if(z=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||z===null||C===null||(L=$l(S,C),L!=null&&le.push(Ti(S,L,z))),Ne)break;S=S.return}0<le.length&&(M=new R(M,W,null,n,_),H.push({event:M,listeners:le}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",M&&n!==cu&&(W=n.relatedTarget||n.fromElement)&&(Ha(W)||W[La]))break e;if((R||M)&&(M=_.window===_?_:(M=_.ownerDocument)?M.defaultView||M.parentWindow:window,R?(W=n.relatedTarget||n.toElement,R=A,W=W?Ha(W):null,W!==null&&(Ne=h(W),le=W.tag,W!==Ne||le!==5&&le!==27&&le!==6)&&(W=null)):(R=null,W=A),R!==W)){if(le=xf,L="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(le=jf,L="onPointerLeave",C="onPointerEnter",S="pointer"),Ne=R==null?M:Zl(R),z=W==null?M:Zl(W),M=new le(L,S+"leave",R,n,_),M.target=Ne,M.relatedTarget=z,L=null,Ha(_)===A&&(le=new le(C,S+"enter",W,n,_),le.target=z,le.relatedTarget=Ne,L=le),Ne=L,R&&W)t:{for(le=j1,C=R,S=W,z=0,L=C;L;L=le(L))z++;L=0;for(var ne=S;ne;ne=le(ne))L++;for(;0<z-L;)C=le(C),z--;for(;0<L-z;)S=le(S),L--;for(;z--;){if(C===S||S!==null&&C===S.alternate){le=C;break t}C=le(C),S=le(S)}le=null}else le=null;R!==null&&mh(H,M,R,le,!1),W!==null&&Ne!==null&&mh(H,Ne,W,le,!0)}}e:{if(M=A?Zl(A):window,R=M.nodeName&&M.nodeName.toLowerCase(),R==="select"||R==="input"&&M.type==="file")var je=Of;else if(Af(M))if(Rf)je=Np;else{je=Rp;var I=Op}else R=M.nodeName,!R||R.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?A&&su(A.elementType)&&(je=Of):je=Dp;if(je&&(je=je(e,A))){Mf(H,je,n,_);break e}I&&I(e,M,A),e==="focusout"&&A&&M.type==="number"&&A.memoizedProps.value!=null&&uu(M,"number",M.value)}switch(I=A?Zl(A):window,e){case"focusin":(Af(I)||I.contentEditable==="true")&&($a=I,wu=A,ti=null);break;case"focusout":ti=wu=$a=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,kf(H,n,_);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":kf(H,n,_)}var ce;if(vu)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Za?Tf(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(wf&&n.locale!=="ko"&&(Za||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Za&&(ce=bf()):(kn=_,hu="value"in kn?kn.value:kn.textContent,Za=!0)),I=to(A,xe),0<I.length&&(xe=new Sf(xe,e,null,n,_),H.push({event:xe,listeners:I}),ce?xe.data=ce:(ce=zf(n),ce!==null&&(xe.data=ce)))),(ce=Cp?Tp(e,n):zp(e,n))&&(xe=to(A,"onBeforeInput"),0<xe.length&&(I=new Sf("onBeforeInput","beforeinput",null,n,_),H.push({event:I,listeners:xe}),I.data=ce)),b1(H,e,A,n,_)}fh(H,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=$l(e,n),l!=null&&a.unshift(Ti(e,l,r)),l=$l(e,t),l!=null&&a.push(Ti(e,l,r))),e.tag===3)return a;e=e.return}return[]}function j1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mh(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var m=n,b=m.alternate,A=m.stateNode;if(m=m.tag,b!==null&&b===a)break;m!==5&&m!==26&&m!==27||A===null||(b=A,l?(A=$l(n,r),A!=null&&f.unshift(Ti(n,A,b))):l||(A=$l(n,r),A!=null&&f.push(Ti(n,A,b)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var w1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function hh(e){return(typeof e=="string"?e:""+e).replace(w1,`
`).replace(E1,"")}function gh(e,t){return t=hh(t),hh(e)===t}function De(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Qa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Qa(e,""+a);break;case"className":ir(e,"class",a);break;case"tabIndex":ir(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ir(e,n,a);break;case"style":gf(e,a,r);break;case"data":if(t!=="object"){ir(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=or(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",l.name,l,null),De(e,t,"formEncType",l.formEncType,l,null),De(e,t,"formMethod",l.formMethod,l,null),De(e,t,"formTarget",l.formTarget,l,null)):(De(e,t,"encType",l.encType,l,null),De(e,t,"method",l.method,l,null),De(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=or(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=or(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),lr(e,"popover",a);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":lr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ig.get(n)||n,lr(e,n,a))}}function Ks(e,t,n,a,l,r){switch(n){case"style":gf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Qa(e,a):(typeof a=="number"||typeof a=="bigint")&&Qa(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[gt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):lr(e,n,a)}}}function ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:De(e,t,r,f,n,null)}}l&&De(e,t,"srcSet",n.srcSet,n,null),a&&De(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var m=r=f=l=null,b=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var _=n[a];if(_!=null)switch(a){case"name":l=_;break;case"type":f=_;break;case"checked":b=_;break;case"defaultChecked":A=_;break;case"value":r=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,t));break;default:De(e,t,a,_,n,null)}}ff(e,r,m,b,A,f,l,!1);return;case"select":ye("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":a=m;default:De(e,t,l,m,n,null)}t=r,n=f,e.multiple=!!a,t!=null?qa(e,!!a,t,!1):n!=null&&qa(e,!!a,n,!0);return;case"textarea":ye("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(m=n[f],m!=null))switch(f){case"value":a=m;break;case"defaultValue":l=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:De(e,t,f,m,n,null)}mf(e,a,l,r);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:De(e,t,b,a,n,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<Ci.length;a++)ye(Ci[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:De(e,t,A,a,n,null)}return;default:if(su(t)){for(_ in n)n.hasOwnProperty(_)&&(a=n[_],a!==void 0&&Ks(e,t,_,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&De(e,t,m,a,n,null))}function C1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,m=null,b=null,A=null,_=null;for(R in n){var H=n[R];if(n.hasOwnProperty(R)&&H!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":b=H;default:a.hasOwnProperty(R)||De(e,t,R,null,a,H)}}for(var M in a){var R=a[M];if(H=n[M],a.hasOwnProperty(M)&&(R!=null||H!=null))switch(M){case"type":r=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":_=R;break;case"value":f=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:R!==H&&De(e,t,M,R,a,H)}}ou(e,f,m,b,A,_,r,l);return;case"select":R=f=m=M=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":R=b;default:a.hasOwnProperty(r)||De(e,t,r,null,a,b)}for(l in a)if(r=a[l],b=n[l],a.hasOwnProperty(l)&&(r!=null||b!=null))switch(l){case"value":M=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==b&&De(e,t,l,r,a,b)}t=m,n=f,a=R,M!=null?qa(e,!!n,M,!1):!!a!=!!n&&(t!=null?qa(e,!!n,t,!0):qa(e,!!n,n?[]:"",!1));return;case"textarea":R=M=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:De(e,t,m,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":M=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==r&&De(e,t,f,l,a,r)}df(e,M,R);return;case"option":for(var W in n)if(M=n[W],n.hasOwnProperty(W)&&M!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:De(e,t,W,null,a,M)}for(b in a)if(M=a[b],R=n[b],a.hasOwnProperty(b)&&M!==R&&(M!=null||R!=null))switch(b){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:De(e,t,b,M,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in n)M=n[le],n.hasOwnProperty(le)&&M!=null&&!a.hasOwnProperty(le)&&De(e,t,le,null,a,M);for(A in a)if(M=a[A],R=n[A],a.hasOwnProperty(A)&&M!==R&&(M!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:De(e,t,A,M,a,R)}return;default:if(su(t)){for(var Ne in n)M=n[Ne],n.hasOwnProperty(Ne)&&M!==void 0&&!a.hasOwnProperty(Ne)&&Ks(e,t,Ne,void 0,a,M);for(_ in a)M=a[_],R=n[_],!a.hasOwnProperty(_)||M===R||M===void 0&&R===void 0||Ks(e,t,_,M,a,R);return}}for(var C in n)M=n[C],n.hasOwnProperty(C)&&M!=null&&!a.hasOwnProperty(C)&&De(e,t,C,null,a,M);for(H in a)M=a[H],R=n[H],!a.hasOwnProperty(H)||M===R||M==null&&R==null||De(e,t,H,M,a,R)}function ph(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function T1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],r=l.transferSize,f=l.initiatorType,m=l.duration;if(r&&m&&ph(f)){for(f=0,m=l.responseEnd,a+=1;a<n.length;a++){var b=n[a],A=b.startTime;if(A>m)break;var _=b.transferSize,H=b.initiatorType;_&&ph(H)&&(b=b.responseEnd,f+=_*(b<m?1:(m-A)/(b-A)))}if(--a,t+=8*(r+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fs=null,Ws=null;function no(e){return e.nodeType===9?e:e.ownerDocument}function yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ps=null;function z1(){var e=window.event;return e&&e.type==="popstate"?e===Ps?!1:(Ps=e,!0):(Ps=null,!1)}var vh=typeof setTimeout=="function"?setTimeout:void 0,A1=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(O1)}:vh;function O1(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function Sh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),xl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")zi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zi(n);for(var r=n.firstChild;r;){var f=r.nextSibling,m=r.nodeName;r[Vl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=f}}else n==="body"&&zi(e.ownerDocument.body);n=l}while(n);xl(t)}function jh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ec(n),iu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function R1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function D1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function tc(e){return e.data==="$?"||e.data==="$~"}function nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ac=null;function Eh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Th(e,t,n){switch(t=no(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);iu(e)}var $t=new Map,zh=new Set;function ao(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=$.d;$.d={f:_1,r:U1,D:B1,C:L1,L:H1,m:k1,X:G1,S:Y1,M:q1};function _1(){var e=Rn.f(),t=Jr();return e||t}function U1(e){var t=ka(e);t!==null&&t.tag===5&&t.type==="form"?Xd(t):Rn.r(e)}var yl=typeof document>"u"?null:document;function Ah(e,t,n){var a=yl;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),zh.has(l)||(zh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),ut(t,"link",e),et(t),a.head.appendChild(t)))}}function B1(e){Rn.D(e),Ah("dns-prefetch",e,null)}function L1(e,t){Rn.C(e,t),Ah("preconnect",e,t)}function H1(e,t,n){Rn.L(e,t,n);var a=yl;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var r=l;switch(t){case"style":r=bl(e);break;case"script":r=vl(e)}$t.has(r)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ai(r))||t==="script"&&a.querySelector(Mi(r))||(t=a.createElement("link"),ut(t,"link",e),et(t),a.head.appendChild(t)))}}function k1(e,t){Rn.m(e,t);var n=yl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=vl(e)}if(!$t.has(r)&&(e=E({rel:"modulepreload",href:e},t),$t.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Mi(r)))return}a=n.createElement("link"),ut(a,"link",e),et(a),n.head.appendChild(a)}}}function Y1(e,t,n){Rn.S(e,t,n);var a=yl;if(a&&e){var l=Ya(a).hoistableStyles,r=bl(e);t=t||"default";var f=l.get(r);if(!f){var m={loading:0,preload:null};if(f=a.querySelector(Ai(r)))m.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(r))&&lc(e,n);var b=f=a.createElement("link");et(b),ut(b,"link",e),b._p=new Promise(function(A,_){b.onload=A,b.onerror=_}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,lo(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:m},l.set(r,f)}}}function G1(e,t){Rn.X(e,t);var n=yl;if(n&&e){var a=Ya(n).hoistableScripts,l=vl(e),r=a.get(l);r||(r=n.querySelector(Mi(l)),r||(e=E({src:e,async:!0},t),(t=$t.get(l))&&ic(e,t),r=n.createElement("script"),et(r),ut(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function q1(e,t){Rn.M(e,t);var n=yl;if(n&&e){var a=Ya(n).hoistableScripts,l=vl(e),r=a.get(l);r||(r=n.querySelector(Mi(l)),r||(e=E({src:e,async:!0,type:"module"},t),(t=$t.get(l))&&ic(e,t),r=n.createElement("script"),et(r),ut(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Mh(e,t,n,a){var l=(l=re.current)?ao(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bl(n.href),n=Ya(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bl(n.href);var r=Ya(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(Ai(e)))&&!r._p&&(f.instance=r,f.state.loading=5),$t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,n),r||Q1(l,e,n,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vl(n),n=Ya(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function bl(e){return'href="'+kt(e)+'"'}function Ai(e){return'link[rel="stylesheet"]['+e+"]"}function Oh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Q1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ut(t,"link",n),et(t),e.head.appendChild(t))}function vl(e){return'[src="'+kt(e)+'"]'}function Mi(e){return"script[async]"+e}function Rh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,et(a),a;var l=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),et(a),ut(a,"style",l),lo(a,n.precedence,e),t.instance=a;case"stylesheet":l=bl(n.href);var r=e.querySelector(Ai(l));if(r)return t.state.loading|=4,t.instance=r,et(r),r;a=Oh(n),(l=$t.get(l))&&lc(a,l),r=(e.ownerDocument||e).createElement("link"),et(r);var f=r;return f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),ut(r,"link",a),t.state.loading|=4,lo(r,n.precedence,e),t.instance=r;case"script":return r=vl(n.src),(l=e.querySelector(Mi(r)))?(t.instance=l,et(l),l):(a=n,(l=$t.get(r))&&(a=E({},n),ic(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),ut(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,lo(a,n.precedence,e));return t.instance}function lo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var m=a[f];if(m.dataset.precedence===t)r=m;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var io=null;function Dh(e,t,n){if(io===null){var a=new Map,l=io=new Map;l.set(n,a)}else l=io,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[Vl]||r[lt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=a.get(f);m?m.push(r):a.set(f,[r])}}return a}function Nh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function X1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V1(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=bl(a.href),r=t.querySelector(Ai(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ro.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,et(r);return}r=t.ownerDocument||t,a=Oh(a),(l=$t.get(l))&&lc(a,l),r=r.createElement("link"),et(r);var f=r;f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),ut(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ro.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var rc=0;function Z1(e,t){return e.stylesheets&&e.count===0&&uo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&uo(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&rc===0&&(rc=62500*T1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uo(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ro(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oo=null;function uo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oo=new Map,t.forEach($1,e),oo=null,ro.call(e))}function $1(e,t){if(!(t.state.loading&4)){var n=oo.get(e);if(n)var a=n.get(null);else{n=new Map,oo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=ro.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Oi={$$typeof:X,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function J1(e,t,n,a,l,r,f,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Uh(e,t,n,a,l,r,f,m,b,A,_,H){return e=new J1(e,t,n,f,b,A,_,H,m),t=1,r===!0&&(t|=24),r=At(3,null,null,t),e.current=r,r.stateNode=e,t=ku(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Qu(r),e}function Bh(e){return e?(e=Fa,e):Fa}function Lh(e,t,n,a,l,r){l=Bh(l),a.context===null?a.context=l:a.pendingContext=l,a=Vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Zn(e,a,t),n!==null&&(St(n,e,t),ui(n,e,t))}function Hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oc(e,t){Hh(e,t),(e=e.alternate)&&Hh(e,t)}function kh(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&St(t,e,67108864),oc(e,67108864)}}function Yh(e){if(e.tag===13||e.tag===31){var t=Nt();t=nu(t);var n=ba(e,t);n!==null&&St(n,e,t),oc(e,t)}}var so=!0;function K1(e,t,n,a){var l=N.T;N.T=null;var r=$.p;try{$.p=2,uc(e,t,n,a)}finally{$.p=r,N.T=l}}function F1(e,t,n,a){var l=N.T;N.T=null;var r=$.p;try{$.p=8,uc(e,t,n,a)}finally{$.p=r,N.T=l}}function uc(e,t,n,a){if(so){var l=sc(a);if(l===null)Js(e,t,a,co,n),qh(e,a);else if(I1(l,e,t,n,a))a.stopPropagation();else if(qh(e,a),t&4&&-1<W1.indexOf(e)){for(;l!==null;){var r=ka(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=ma(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var b=1<<31-Tt(f);m.entanglements[1]|=b,f&=~b}sn(r),(Ce&6)===0&&(Zr=ct()+500,Ei(0))}}break;case 31:case 13:m=ba(r,2),m!==null&&St(m,r,2),Jr(),oc(r,2)}if(r=sc(a),r===null&&Js(e,t,a,co,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Js(e,t,a,null,n)}}function sc(e){return e=fu(e),cc(e)}var co=null;function cc(e){if(co=null,e=Ha(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return co=e,null}function Gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eu()){case D:return 2;case P:return 8;case ee:case Ae:return 32;case Bn:return 268435456;default:return 32}default:return 32}}var fc=!1,aa=null,la=null,ia=null,Ri=new Map,Di=new Map,ra=[],W1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function Ni(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=ka(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function I1(e,t,n,a,l){switch(t){case"focusin":return aa=Ni(aa,e,t,n,a,l),!0;case"dragenter":return la=Ni(la,e,t,n,a,l),!0;case"mouseover":return ia=Ni(ia,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return Ri.set(r,Ni(Ri.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Di.set(r,Ni(Di.get(r)||null,e,t,n,a,l)),!0}return!1}function Qh(e){var t=Ha(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,nf(e.priority,function(){Yh(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,nf(e.priority,function(){Yh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);cu=a,n.target.dispatchEvent(a),cu=null}else return t=ka(n),t!==null&&kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Xh(e,t,n){fo(e)&&n.delete(t)}function P1(){fc=!1,aa!==null&&fo(aa)&&(aa=null),la!==null&&fo(la)&&(la=null),ia!==null&&fo(ia)&&(ia=null),Ri.forEach(Xh),Di.forEach(Xh)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,fc||(fc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,P1)))}var ho=null;function Vh(e){ho!==e&&(ho=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ho===e&&(ho=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(cc(a||n)===null)continue;break}var r=ka(n);r!==null&&(e.splice(t,3),t-=3,ss(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function xl(e){function t(b){return mo(b,e)}aa!==null&&mo(aa,e),la!==null&&mo(la,e),ia!==null&&mo(ia,e),Ri.forEach(t),Di.forEach(t);for(var n=0;n<ra.length;n++){var a=ra[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)Qh(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[gt]||null;if(typeof r=="function")f||Vh(n);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[gt]||null)m=f.formAction;else if(cc(l)!==null)continue}else m=f.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),Vh(n)}}}function Zh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function dc(e){this._internalRoot=e}go.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Nt();Lh(n,a,e,t,null,null)},go.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lh(e.current,2,null,e,null,null),Jr(),t[La]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&Qh(e)}};var $h=u.version;if($h!=="19.2.0")throw Error(s(527,$h,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var ey={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{ql=po.inject(ey),Ct=po}catch{}}return Ui.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",l=em,r=tm,f=nm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Uh(e,1,!1,null,null,n,a,null,l,r,f,Zh),e[La]=t.current,$s(e),new dc(t)},Ui.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,l="",r=em,f=tm,m=nm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Uh(e,1,!0,t,n??null,a,l,b,r,f,m,Zh),t.context=Bh(null),n=t.current,a=Nt(),a=nu(a),l=Vn(a),l.callback=null,Zn(n,l,a),n=a,t.current.lanes=n,Xl(t,n),sn(t),e[La]=t.current,$s(e),new go(t)},Ui.version="19.2.0",Ui}var a0;function fy(){if(a0)return gc.exports;a0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),gc.exports=cy(),gc.exports}var dy=fy();var l0="popstate";function my(i={}){function u(s,d){let{pathname:h,search:p,hash:j}=s.location;return zc("",{pathname:h,search:p,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(s,d){return typeof d=="string"?d:Vi(d)}return gy(u,c,null,i)}function Ge(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function ln(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function hy(){return Math.random().toString(36).substring(2,10)}function i0(i,u){return{usr:i.state,key:i.key,idx:u}}function zc(i,u,c=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?Ul(u):u,state:c,key:u&&u.key||s||hy()}}function Vi({pathname:i="/",search:u="",hash:c=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function Ul(i){let u={};if(i){let c=i.indexOf("#");c>=0&&(u.hash=i.substring(c),i=i.substring(0,c));let s=i.indexOf("?");s>=0&&(u.search=i.substring(s),i=i.substring(0,s)),i&&(u.pathname=i)}return u}function gy(i,u,c,s={}){let{window:d=document.defaultView,v5Compat:h=!1}=s,p=d.history,j="POP",v=null,y=T();y==null&&(y=0,p.replaceState({...p.state,idx:y},""));function T(){return(p.state||{idx:null}).idx}function E(){j="POP";let Z=T(),G=Z==null?null:Z-y;y=Z,v&&v({action:j,location:Y.location,delta:G})}function O(Z,G){j="PUSH";let q=zc(Y.location,Z,G);y=T()+1;let X=i0(q,y),ae=Y.createHref(q);try{p.pushState(X,"",ae)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;d.location.assign(ae)}h&&v&&v({action:j,location:Y.location,delta:1})}function B(Z,G){j="REPLACE";let q=zc(Y.location,Z,G);y=T();let X=i0(q,y),ae=Y.createHref(q);p.replaceState(X,"",ae),h&&v&&v({action:j,location:Y.location,delta:0})}function k(Z){return py(Z)}let Y={get action(){return j},get location(){return i(d,p)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(l0,E),v=Z,()=>{d.removeEventListener(l0,E),v=null}},createHref(Z){return u(d,Z)},createURL:k,encodeLocation(Z){let G=k(Z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:O,replace:B,go(Z){return p.go(Z)}};return Y}function py(i,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(c,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Vi(i);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function q0(i,u,c="/"){return yy(i,u,c,!1)}function yy(i,u,c,s){let d=typeof u=="string"?Ul(u):u,h=_n(d.pathname||"/",c);if(h==null)return null;let p=Q0(i);by(p);let j=null;for(let v=0;j==null&&v<p.length;++v){let y=My(h);j=zy(p[v],y,s)}return j}function Q0(i,u=[],c=[],s="",d=!1){let h=(p,j,v=d,y)=>{let T={relativePath:y===void 0?p.path||"":y,caseSensitive:p.caseSensitive===!0,childrenIndex:j,route:p};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(s)&&v)return;Ge(T.relativePath.startsWith(s),`Absolute route path "${T.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(s.length)}let E=Nn([s,T.relativePath]),O=c.concat(T);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Q0(p.children,u,O,E,v)),!(p.path==null&&!p.index)&&u.push({path:E,score:Cy(E,p.index),routesMeta:O})};return i.forEach((p,j)=>{if(p.path===""||!p.path?.includes("?"))h(p,j);else for(let v of X0(p.path))h(p,j,!0,v)}),u}function X0(i){let u=i.split("/");if(u.length===0)return[];let[c,...s]=u,d=c.endsWith("?"),h=c.replace(/\?$/,"");if(s.length===0)return d?[h,""]:[h];let p=X0(s.join("/")),j=[];return j.push(...p.map(v=>v===""?h:[h,v].join("/"))),d&&j.push(...p),j.map(v=>i.startsWith("/")&&v===""?"/":v)}function by(i){i.sort((u,c)=>u.score!==c.score?c.score-u.score:Ty(u.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var vy=/^:[\w-]+$/,xy=3,Sy=2,jy=1,wy=10,Ey=-2,r0=i=>i==="*";function Cy(i,u){let c=i.split("/"),s=c.length;return c.some(r0)&&(s+=Ey),u&&(s+=Sy),c.filter(d=>!r0(d)).reduce((d,h)=>d+(vy.test(h)?xy:h===""?jy:wy),s)}function Ty(i,u){return i.length===u.length&&i.slice(0,-1).every((s,d)=>s===u[d])?i[i.length-1]-u[u.length-1]:0}function zy(i,u,c=!1){let{routesMeta:s}=i,d={},h="/",p=[];for(let j=0;j<s.length;++j){let v=s[j],y=j===s.length-1,T=h==="/"?u:u.slice(h.length)||"/",E=ko({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},T),O=v.route;if(!E&&y&&c&&!s[s.length-1].route.index&&(E=ko({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!E)return null;Object.assign(d,E.params),p.push({params:d,pathname:Nn([h,E.pathname]),pathnameBase:_y(Nn([h,E.pathnameBase])),route:O}),E.pathnameBase!=="/"&&(h=Nn([h,E.pathnameBase]))}return p}function ko(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,s]=Ay(i.path,i.caseSensitive,i.end),d=u.match(c);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:s.reduce((y,{paramName:T,isOptional:E},O)=>{if(T==="*"){let k=j[O]||"";p=h.slice(0,h.length-k.length).replace(/(.)\/+$/,"$1")}const B=j[O];return E&&!B?y[T]=void 0:y[T]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:p,pattern:i}}function Ay(i,u=!1,c=!0){ln(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,j,v)=>(s.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),s]}function My(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return ln(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function _n(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,s=i.charAt(c);return s&&s!=="/"?null:i.slice(c)||"/"}var Oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ry=i=>Oy.test(i);function Dy(i,u="/"){let{pathname:c,search:s="",hash:d=""}=typeof i=="string"?Ul(i):i,h;if(c)if(Ry(c))h=c;else{if(c.includes("//")){let p=c;c=c.replace(/\/\/+/g,"/"),ln(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${c}`)}c.startsWith("/")?h=o0(c.substring(1),"/"):h=o0(c,u)}else h=u;return{pathname:h,search:Uy(s),hash:By(d)}}function o0(i,u){let c=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function vc(i,u,c,s){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ny(i){return i.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function V0(i){let u=Ny(i);return u.map((c,s)=>s===u.length-1?c.pathname:c.pathnameBase)}function Z0(i,u,c,s=!1){let d;typeof i=="string"?d=Ul(i):(d={...i},Ge(!d.pathname||!d.pathname.includes("?"),vc("?","pathname","search",d)),Ge(!d.pathname||!d.pathname.includes("#"),vc("#","pathname","hash",d)),Ge(!d.search||!d.search.includes("#"),vc("#","search","hash",d)));let h=i===""||d.pathname==="",p=h?"/":d.pathname,j;if(p==null)j=c;else{let E=u.length-1;if(!s&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),E-=1;d.pathname=O.join("/")}j=E>=0?u[E]:"/"}let v=Dy(d,j),y=p&&p!=="/"&&p.endsWith("/"),T=(h||p===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(y||T)&&(v.pathname+="/"),v}var Nn=i=>i.join("/").replace(/\/\/+/g,"/"),_y=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,By=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Ly(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $0=["POST","PUT","PATCH","DELETE"];new Set($0);var Hy=["GET",...$0];new Set(Hy);var Bl=w.createContext(null);Bl.displayName="DataRouter";var Qo=w.createContext(null);Qo.displayName="DataRouterState";w.createContext(!1);var J0=w.createContext({isTransitioning:!1});J0.displayName="ViewTransition";var ky=w.createContext(new Map);ky.displayName="Fetchers";var Yy=w.createContext(null);Yy.displayName="Await";var dn=w.createContext(null);dn.displayName="Navigation";var Ji=w.createContext(null);Ji.displayName="Location";var Un=w.createContext({outlet:null,matches:[],isDataRoute:!1});Un.displayName="Route";var Hc=w.createContext(null);Hc.displayName="RouteError";function Gy(i,{relative:u}={}){Ge(Ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=w.useContext(dn),{hash:d,pathname:h,search:p}=Fi(i,{relative:u}),j=h;return c!=="/"&&(j=h==="/"?c:Nn([c,h])),s.createHref({pathname:j,search:p,hash:d})}function Ki(){return w.useContext(Ji)!=null}function _a(){return Ge(Ki(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ji).location}var K0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function F0(i){w.useContext(dn).static||w.useLayoutEffect(i)}function Ut(){let{isDataRoute:i}=w.useContext(Un);return i?eb():qy()}function qy(){Ge(Ki(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(Bl),{basename:u,navigator:c}=w.useContext(dn),{matches:s}=w.useContext(Un),{pathname:d}=_a(),h=JSON.stringify(V0(s)),p=w.useRef(!1);return F0(()=>{p.current=!0}),w.useCallback((v,y={})=>{if(ln(p.current,K0),!p.current)return;if(typeof v=="number"){c.go(v);return}let T=Z0(v,JSON.parse(h),d,y.relative==="path");i==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:Nn([u,T.pathname])),(y.replace?c.replace:c.push)(T,y.state,y)},[u,c,h,d,i])}w.createContext(null);function Fi(i,{relative:u}={}){let{matches:c}=w.useContext(Un),{pathname:s}=_a(),d=JSON.stringify(V0(c));return w.useMemo(()=>Z0(i,JSON.parse(d),s,u==="path"),[i,d,s,u])}function Qy(i,u){return W0(i,u)}function W0(i,u,c,s,d){Ge(Ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=w.useContext(dn),{matches:p}=w.useContext(Un),j=p[p.length-1],v=j?j.params:{},y=j?j.pathname:"/",T=j?j.pathnameBase:"/",E=j&&j.route;{let q=E&&E.path||"";I0(y,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let O=_a(),B;if(u){let q=typeof u=="string"?Ul(u):u;Ge(T==="/"||q.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${q.pathname}" was given in the \`location\` prop.`),B=q}else B=O;let k=B.pathname||"/",Y=k;if(T!=="/"){let q=T.replace(/^\//,"").split("/");Y="/"+k.replace(/^\//,"").split("/").slice(q.length).join("/")}let Z=q0(i,{pathname:Y});ln(E||Z!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),ln(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Jy(Z&&Z.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:Nn([T,h.encodeLocation?h.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?T:Nn([T,h.encodeLocation?h.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),p,c,s,d);return u&&G?w.createElement(Ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},G):G}function Xy(){let i=Py(),u=Ly(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},h={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:h},"ErrorBoundary")," or"," ",w.createElement("code",{style:h},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},u),c?w.createElement("pre",{style:d},c):null,p)}var Vy=w.createElement(Xy,null),Zy=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){this.props.onError?this.props.onError(i,u):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?w.createElement(Un.Provider,{value:this.props.routeContext},w.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $y({routeContext:i,match:u,children:c}){let s=w.useContext(Bl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),w.createElement(Un.Provider,{value:i},c)}function Jy(i,u=[],c=null,s=null,d=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let h=i,p=c?.errors;if(p!=null){let T=h.findIndex(E=>E.route.id&&p?.[E.route.id]!==void 0);Ge(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,T+1))}let j=!1,v=-1;if(c)for(let T=0;T<h.length;T++){let E=h[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(v=T),E.route.id){let{loaderData:O,errors:B}=c,k=E.route.loader&&!O.hasOwnProperty(E.route.id)&&(!B||B[E.route.id]===void 0);if(E.route.lazy||k){j=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let y=c&&s?(T,E)=>{s(T,{location:c.location,params:c.matches?.[0]?.params??{},errorInfo:E})}:void 0;return h.reduceRight((T,E,O)=>{let B,k=!1,Y=null,Z=null;c&&(B=p&&E.route.id?p[E.route.id]:void 0,Y=E.route.errorElement||Vy,j&&(v<0&&O===0?(I0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,Z=null):v===O&&(k=!0,Z=E.route.hydrateFallbackElement||null)));let G=u.concat(h.slice(0,O+1)),q=()=>{let X;return B?X=Y:k?X=Z:E.route.Component?X=w.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=T,w.createElement($y,{match:E,routeContext:{outlet:T,matches:G,isDataRoute:c!=null},children:X})};return c&&(E.route.ErrorBoundary||E.route.errorElement||O===0)?w.createElement(Zy,{location:c.location,revalidation:c.revalidation,component:Y,error:B,children:q(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:y}):q()},null)}function kc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ky(i){let u=w.useContext(Bl);return Ge(u,kc(i)),u}function Fy(i){let u=w.useContext(Qo);return Ge(u,kc(i)),u}function Wy(i){let u=w.useContext(Un);return Ge(u,kc(i)),u}function Yc(i){let u=Wy(i),c=u.matches[u.matches.length-1];return Ge(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Iy(){return Yc("useRouteId")}function Py(){let i=w.useContext(Hc),u=Fy("useRouteError"),c=Yc("useRouteError");return i!==void 0?i:u.errors?.[c]}function eb(){let{router:i}=Ky("useNavigate"),u=Yc("useNavigate"),c=w.useRef(!1);return F0(()=>{c.current=!0}),w.useCallback(async(d,h={})=>{ln(c.current,K0),c.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...h}))},[i,u])}var u0={};function I0(i,u,c){!u&&!u0[i]&&(u0[i]=!0,ln(!1,c))}w.memo(tb);function tb({routes:i,future:u,state:c,unstable_onError:s}){return W0(i,void 0,c,s,u)}function wt(i){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nb({basename:i="/",children:u=null,location:c,navigationType:s="POP",navigator:d,static:h=!1}){Ge(!Ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=i.replace(/^\/*/,"/"),j=w.useMemo(()=>({basename:p,navigator:d,static:h,future:{}}),[p,d,h]);typeof c=="string"&&(c=Ul(c));let{pathname:v="/",search:y="",hash:T="",state:E=null,key:O="default"}=c,B=w.useMemo(()=>{let k=_n(v,p);return k==null?null:{location:{pathname:k,search:y,hash:T,state:E,key:O},navigationType:s}},[p,v,y,T,E,O,s]);return ln(B!=null,`<Router basename="${p}"> is not able to match the URL "${v}${y}${T}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:w.createElement(dn.Provider,{value:j},w.createElement(Ji.Provider,{children:u,value:B}))}function ab({children:i,location:u}){return Qy(Ac(i),u)}function Ac(i,u=[]){let c=[];return w.Children.forEach(i,(s,d)=>{if(!w.isValidElement(s))return;let h=[...u,d];if(s.type===w.Fragment){c.push.apply(c,Ac(s.props.children,h));return}Ge(s.type===wt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||h.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=Ac(s.props.children,h)),c.push(p)}),c}var Ro="get",Do="application/x-www-form-urlencoded";function Xo(i){return i!=null&&typeof i.tagName=="string"}function lb(i){return Xo(i)&&i.tagName.toLowerCase()==="button"}function ib(i){return Xo(i)&&i.tagName.toLowerCase()==="form"}function rb(i){return Xo(i)&&i.tagName.toLowerCase()==="input"}function ob(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ub(i,u){return i.button===0&&(!u||u==="_self")&&!ob(i)}var yo=null;function sb(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var cb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xc(i){return i!=null&&!cb.has(i)?(ln(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Do}"`),null):i}function fb(i,u){let c,s,d,h,p;if(ib(i)){let j=i.getAttribute("action");s=j?_n(j,u):null,c=i.getAttribute("method")||Ro,d=xc(i.getAttribute("enctype"))||Do,h=new FormData(i)}else if(lb(i)||rb(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||j.getAttribute("action");if(s=v?_n(v,u):null,c=i.getAttribute("formmethod")||j.getAttribute("method")||Ro,d=xc(i.getAttribute("formenctype"))||xc(j.getAttribute("enctype"))||Do,h=new FormData(j,i),!sb()){let{name:y,type:T,value:E}=i;if(T==="image"){let O=y?`${y}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else y&&h.append(y,E)}}else{if(Xo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Ro,s=null,d=Do,p=i}return h&&d==="text/plain"&&(p=h,h=void 0),{action:s,method:c.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gc(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function db(i,u,c){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${c}`:u&&_n(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function mb(i,u){if(i.id in u)return u[i.id];try{let c=await import(i.module);return u[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function gb(i,u,c){let s=await Promise.all(i.map(async d=>{let h=u.routes[d.route.id];if(h){let p=await mb(h,c);return p.links?p.links():[]}return[]}));return vb(s.flat(1).filter(hb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function s0(i,u,c,s,d,h){let p=(v,y)=>c[y]?v.route.id!==c[y].route.id:!0,j=(v,y)=>c[y].pathname!==v.pathname||c[y].route.path?.endsWith("*")&&c[y].params["*"]!==v.params["*"];return h==="assets"?u.filter((v,y)=>p(v,y)||j(v,y)):h==="data"?u.filter((v,y)=>{let T=s.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(p(v,y)||j(v,y))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function pb(i,u,{includeHydrateFallback:c}={}){return yb(i.map(s=>{let d=u.routes[s.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function yb(i){return[...new Set(i)]}function bb(i){let u={},c=Object.keys(i).sort();for(let s of c)u[s]=i[s];return u}function vb(i,u){let c=new Set;return new Set(u),i.reduce((s,d)=>{let h=JSON.stringify(bb(d));return c.has(h)||(c.add(h),s.push({key:h,link:d})),s},[])}function P0(){let i=w.useContext(Bl);return Gc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function xb(){let i=w.useContext(Qo);return Gc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var qc=w.createContext(void 0);qc.displayName="FrameworkContext";function eg(){let i=w.useContext(qc);return Gc(i,"You must render this element inside a <HydratedRouter> element"),i}function Sb(i,u){let c=w.useContext(qc),[s,d]=w.useState(!1),[h,p]=w.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:y,onMouseLeave:T,onTouchStart:E}=u,O=w.useRef(null);w.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let Y=G=>{G.forEach(q=>{p(q.isIntersecting)})},Z=new IntersectionObserver(Y,{threshold:.5});return O.current&&Z.observe(O.current),()=>{Z.disconnect()}}},[i]),w.useEffect(()=>{if(s){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[s]);let B=()=>{d(!0)},k=()=>{d(!1),p(!1)};return c?i!=="intent"?[h,O,{}]:[h,O,{onFocus:Bi(j,B),onBlur:Bi(v,k),onMouseEnter:Bi(y,B),onMouseLeave:Bi(T,k),onTouchStart:Bi(E,B)}]:[!1,O,{}]}function Bi(i,u){return c=>{i&&i(c),c.defaultPrevented||u(c)}}function jb({page:i,...u}){let{router:c}=P0(),s=w.useMemo(()=>q0(c.routes,i,c.basename),[c.routes,i,c.basename]);return s?w.createElement(Eb,{page:i,matches:s,...u}):null}function wb(i){let{manifest:u,routeModules:c}=eg(),[s,d]=w.useState([]);return w.useEffect(()=>{let h=!1;return gb(i,u,c).then(p=>{h||d(p)}),()=>{h=!0}},[i,u,c]),s}function Eb({page:i,matches:u,...c}){let s=_a(),{manifest:d,routeModules:h}=eg(),{basename:p}=P0(),{loaderData:j,matches:v}=xb(),y=w.useMemo(()=>s0(i,u,v,d,s,"data"),[i,u,v,d,s]),T=w.useMemo(()=>s0(i,u,v,d,s,"assets"),[i,u,v,d,s]),E=w.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let k=new Set,Y=!1;if(u.forEach(G=>{let q=d.routes[G.route.id];!q||!q.hasLoader||(!y.some(X=>X.route.id===G.route.id)&&G.route.id in j&&h[G.route.id]?.shouldRevalidate||q.hasClientLoader?Y=!0:k.add(G.route.id))}),k.size===0)return[];let Z=db(i,p,"data");return Y&&k.size>0&&Z.searchParams.set("_routes",u.filter(G=>k.has(G.route.id)).map(G=>G.route.id).join(",")),[Z.pathname+Z.search]},[p,j,s,d,y,u,i,h]),O=w.useMemo(()=>pb(T,d),[T,d]),B=wb(T);return w.createElement(w.Fragment,null,E.map(k=>w.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),O.map(k=>w.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),B.map(({key:k,link:Y})=>w.createElement("link",{key:k,nonce:c.nonce,...Y})))}function Cb(...i){return u=>{i.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tg&&(window.__reactRouterVersion="7.9.6")}catch{}function Tb({basename:i,children:u,window:c}){let s=w.useRef();s.current==null&&(s.current=my({window:c,v5Compat:!0}));let d=s.current,[h,p]=w.useState({action:d.action,location:d.location}),j=w.useCallback(v=>{w.startTransition(()=>p(v))},[p]);return w.useLayoutEffect(()=>d.listen(j),[d,j]),w.createElement(nb,{basename:i,children:u,location:h.location,navigationType:h.action,navigator:d})}var ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wt=w.forwardRef(function({onClick:u,discover:c="render",prefetch:s="none",relative:d,reloadDocument:h,replace:p,state:j,target:v,to:y,preventScrollReset:T,viewTransition:E,...O},B){let{basename:k}=w.useContext(dn),Y=typeof y=="string"&&ng.test(y),Z,G=!1;if(typeof y=="string"&&Y&&(Z=y,tg))try{let be=new URL(window.location.href),at=y.startsWith("//")?new URL(be.protocol+y):new URL(y),Pe=_n(at.pathname,k);at.origin===be.origin&&Pe!=null?y=Pe+at.search+at.hash:G=!0}catch{ln(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Gy(y,{relative:d}),[X,ae,V]=Sb(s,O),K=Ob(y,{replace:p,state:j,target:v,preventScrollReset:T,relative:d,viewTransition:E});function Q(be){u&&u(be),be.defaultPrevented||K(be)}let he=w.createElement("a",{...O,...V,href:Z||q,onClick:G||h?u:Q,ref:Cb(B,ae),target:v,"data-discover":!Y&&c==="render"?"true":void 0});return X&&!Y?w.createElement(w.Fragment,null,he,w.createElement(jb,{page:q})):he});Wt.displayName="Link";var zb=w.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:s="",end:d=!1,style:h,to:p,viewTransition:j,children:v,...y},T){let E=Fi(p,{relative:y.relative}),O=_a(),B=w.useContext(Qo),{navigator:k,basename:Y}=w.useContext(dn),Z=B!=null&&Ub(E)&&j===!0,G=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,q=O.pathname,X=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;c||(q=q.toLowerCase(),X=X?X.toLowerCase():null,G=G.toLowerCase()),X&&Y&&(X=_n(X,Y)||X);const ae=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let V=q===G||!d&&q.startsWith(G)&&q.charAt(ae)==="/",K=X!=null&&(X===G||!d&&X.startsWith(G)&&X.charAt(G.length)==="/"),Q={isActive:V,isPending:K,isTransitioning:Z},he=V?u:void 0,be;typeof s=="function"?be=s(Q):be=[s,V?"active":null,K?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let at=typeof h=="function"?h(Q):h;return w.createElement(Wt,{...y,"aria-current":he,className:be,ref:T,style:at,to:p,viewTransition:j},typeof v=="function"?v(Q):v)});zb.displayName="NavLink";var Ab=w.forwardRef(({discover:i="render",fetcherKey:u,navigate:c,reloadDocument:s,replace:d,state:h,method:p=Ro,action:j,onSubmit:v,relative:y,preventScrollReset:T,viewTransition:E,...O},B)=>{let k=Nb(),Y=_b(j,{relative:y}),Z=p.toLowerCase()==="get"?"get":"post",G=typeof j=="string"&&ng.test(j),q=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,V=ae?.getAttribute("formmethod")||p;k(ae||X.currentTarget,{fetcherKey:u,method:V,navigate:c,replace:d,state:h,relative:y,preventScrollReset:T,viewTransition:E})};return w.createElement("form",{ref:B,method:Z,action:Y,onSubmit:s?v:q,...O,"data-discover":!G&&i==="render"?"true":void 0})});Ab.displayName="Form";function Mb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ag(i){let u=w.useContext(Bl);return Ge(u,Mb(i)),u}function Ob(i,{target:u,replace:c,state:s,preventScrollReset:d,relative:h,viewTransition:p}={}){let j=Ut(),v=_a(),y=Fi(i,{relative:h});return w.useCallback(T=>{if(ub(T,u)){T.preventDefault();let E=c!==void 0?c:Vi(v)===Vi(y);j(i,{replace:E,state:s,preventScrollReset:d,relative:h,viewTransition:p})}},[v,j,y,c,s,u,i,d,h,p])}var Rb=0,Db=()=>`__${String(++Rb)}__`;function Nb(){let{router:i}=ag("useSubmit"),{basename:u}=w.useContext(dn),c=Iy();return w.useCallback(async(s,d={})=>{let{action:h,method:p,encType:j,formData:v,body:y}=fb(s,u);if(d.navigate===!1){let T=d.fetcherKey||Db();await i.fetch(T,c,d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:y,formMethod:d.method||p,formEncType:d.encType||j,flushSync:d.flushSync})}else await i.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:v,body:y,formMethod:d.method||p,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,c])}function _b(i,{relative:u}={}){let{basename:c}=w.useContext(dn),s=w.useContext(Un);Ge(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),h={...Fi(i||".",{relative:u})},p=_a();if(i==null){h.search=p.search;let j=new URLSearchParams(h.search),v=j.getAll("index");if(v.some(T=>T==="")){j.delete("index"),v.filter(E=>E).forEach(E=>j.append("index",E));let T=j.toString();h.search=T?`?${T}`:""}}return(!i||i===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:Nn([c,h.pathname])),Vi(h)}function Ub(i,{relative:u}={}){let c=w.useContext(J0);Ge(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ag("useViewTransitionState"),d=Fi(i,{relative:u});if(!c.isTransitioning)return!1;let h=_n(c.currentLocation.pathname,s)||c.currentLocation.pathname,p=_n(c.nextLocation.pathname,s)||c.nextLocation.pathname;return ko(d.pathname,p)!=null||ko(d.pathname,h)!=null}var Et=function(){return Et=Object.assign||function(u){for(var c,s=1,d=arguments.length;s<d;s++){c=arguments[s];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(u[h]=c[h])}return u},Et.apply(this,arguments)};function Zi(i,u,c){if(c||arguments.length===2)for(var s=0,d=u.length,h;s<d;s++)(h||!(s in u))&&(h||(h=Array.prototype.slice.call(u,0,s)),h[s]=u[s]);return i.concat(h||Array.prototype.slice.call(u))}var Le="-ms-",Xi="-moz-",ze="-webkit-",lg="comm",Vo="rule",Qc="decl",Bb="@import",ig="@keyframes",Lb="@layer",rg=Math.abs,Xc=String.fromCharCode,Mc=Object.assign;function Hb(i,u){return nt(i,0)^45?(((u<<2^nt(i,0))<<2^nt(i,1))<<2^nt(i,2))<<2^nt(i,3):0}function og(i){return i.trim()}function Dn(i,u){return(i=u.exec(i))?i[0]:i}function de(i,u,c){return i.replace(u,c)}function No(i,u,c){return i.indexOf(u,c)}function nt(i,u){return i.charCodeAt(u)|0}function Ol(i,u,c){return i.slice(u,c)}function fn(i){return i.length}function ug(i){return i.length}function Qi(i,u){return u.push(i),i}function kb(i,u){return i.map(u).join("")}function c0(i,u){return i.filter(function(c){return!Dn(c,u)})}var Zo=1,Rl=1,sg=0,Ft=0,We=0,Ll="";function $o(i,u,c,s,d,h,p,j){return{value:i,root:u,parent:c,type:s,props:d,children:h,line:Zo,column:Rl,length:p,return:"",siblings:j}}function fa(i,u){return Mc($o("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Sl(i){for(;i.root;)i=fa(i.root,{children:[i]});Qi(i,i.siblings)}function Yb(){return We}function Gb(){return We=Ft>0?nt(Ll,--Ft):0,Rl--,We===10&&(Rl=1,Zo--),We}function an(){return We=Ft<sg?nt(Ll,Ft++):0,Rl++,We===10&&(Rl=1,Zo++),We}function Da(){return nt(Ll,Ft)}function _o(){return Ft}function Jo(i,u){return Ol(Ll,i,u)}function Oc(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qb(i){return Zo=Rl=1,sg=fn(Ll=i),Ft=0,[]}function Qb(i){return Ll="",i}function Sc(i){return og(Jo(Ft-1,Rc(i===91?i+2:i===40?i+1:i)))}function Xb(i){for(;(We=Da())&&We<33;)an();return Oc(i)>2||Oc(We)>3?"":" "}function Vb(i,u){for(;--u&&an()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Jo(i,_o()+(u<6&&Da()==32&&an()==32))}function Rc(i){for(;an();)switch(We){case i:return Ft;case 34:case 39:i!==34&&i!==39&&Rc(We);break;case 40:i===41&&Rc(i);break;case 92:an();break}return Ft}function Zb(i,u){for(;an()&&i+We!==57;)if(i+We===84&&Da()===47)break;return"/*"+Jo(u,Ft-1)+"*"+Xc(i===47?i:an())}function $b(i){for(;!Oc(Da());)an();return Jo(i,Ft)}function Jb(i){return Qb(Uo("",null,null,null,[""],i=qb(i),0,[0],i))}function Uo(i,u,c,s,d,h,p,j,v){for(var y=0,T=0,E=p,O=0,B=0,k=0,Y=1,Z=1,G=1,q=0,X="",ae=d,V=h,K=s,Q=X;Z;)switch(k=q,q=an()){case 40:if(k!=108&&nt(Q,E-1)==58){No(Q+=de(Sc(q),"&","&\f"),"&\f",rg(y?j[y-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:Q+=Sc(q);break;case 9:case 10:case 13:case 32:Q+=Xb(k);break;case 92:Q+=Vb(_o()-1,7);continue;case 47:switch(Da()){case 42:case 47:Qi(Kb(Zb(an(),_o()),u,c,v),v);break;default:Q+="/"}break;case 123*Y:j[y++]=fn(Q)*G;case 125*Y:case 59:case 0:switch(q){case 0:case 125:Z=0;case 59+T:G==-1&&(Q=de(Q,/\f/g,"")),B>0&&fn(Q)-E&&Qi(B>32?d0(Q+";",s,c,E-1,v):d0(de(Q," ","")+";",s,c,E-2,v),v);break;case 59:Q+=";";default:if(Qi(K=f0(Q,u,c,y,T,d,j,X,ae=[],V=[],E,h),h),q===123)if(T===0)Uo(Q,u,K,K,ae,h,E,j,V);else switch(O===99&&nt(Q,3)===110?100:O){case 100:case 108:case 109:case 115:Uo(i,K,K,s&&Qi(f0(i,K,K,0,0,d,j,X,d,ae=[],E,V),V),d,V,E,j,s?ae:V);break;default:Uo(Q,K,K,K,[""],V,0,j,V)}}y=T=B=0,Y=G=1,X=Q="",E=p;break;case 58:E=1+fn(Q),B=k;default:if(Y<1){if(q==123)--Y;else if(q==125&&Y++==0&&Gb()==125)continue}switch(Q+=Xc(q),q*Y){case 38:G=T>0?1:(Q+="\f",-1);break;case 44:j[y++]=(fn(Q)-1)*G,G=1;break;case 64:Da()===45&&(Q+=Sc(an())),O=Da(),T=E=fn(X=Q+=$b(_o())),q++;break;case 45:k===45&&fn(Q)==2&&(Y=0)}}return h}function f0(i,u,c,s,d,h,p,j,v,y,T,E){for(var O=d-1,B=d===0?h:[""],k=ug(B),Y=0,Z=0,G=0;Y<s;++Y)for(var q=0,X=Ol(i,O+1,O=rg(Z=p[Y])),ae=i;q<k;++q)(ae=og(Z>0?B[q]+" "+X:de(X,/&\f/g,B[q])))&&(v[G++]=ae);return $o(i,u,c,d===0?Vo:j,v,y,T,E)}function Kb(i,u,c,s){return $o(i,u,c,lg,Xc(Yb()),Ol(i,2,-2),0,s)}function d0(i,u,c,s,d){return $o(i,u,c,Qc,Ol(i,0,s),Ol(i,s+1,-1),s,d)}function cg(i,u,c){switch(Hb(i,u)){case 5103:return ze+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+i+i;case 4789:return Xi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+i+Xi+i+Le+i+i;case 5936:switch(nt(i,u+11)){case 114:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ze+i+Le+i+i;case 6165:return ze+i+Le+"flex-"+i+i;case 5187:return ze+i+de(i,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Le+"flex-$1$2")+i;case 5443:return ze+i+Le+"flex-item-"+de(i,/flex-|-self/g,"")+(Dn(i,/flex-|baseline/)?"":Le+"grid-row-"+de(i,/flex-|-self/g,""))+i;case 4675:return ze+i+Le+"flex-line-pack"+de(i,/align-content|flex-|-self/g,"")+i;case 5548:return ze+i+Le+de(i,"shrink","negative")+i;case 5292:return ze+i+Le+de(i,"basis","preferred-size")+i;case 6060:return ze+"box-"+de(i,"-grow","")+ze+i+Le+de(i,"grow","positive")+i;case 4554:return ze+de(i,/([^-])(transform)/g,"$1"+ze+"$2")+i;case 6187:return de(de(de(i,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),i,"")+i;case 5495:case 3959:return de(i,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return de(de(i,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+i+i;case 4200:if(!Dn(i,/flex-|baseline/))return Le+"grid-column-align"+Ol(i,u)+i;break;case 2592:case 3360:return Le+de(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(s,d){return u=d,Dn(s.props,/grid-\w+-end/)})?~No(i+(c=c[u].value),"span",0)?i:Le+de(i,"-start","")+i+Le+"grid-row-span:"+(~No(c,"span",0)?Dn(c,/\d+/):+Dn(c,/\d+/)-+Dn(i,/\d+/))+";":Le+de(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(s){return Dn(s.props,/grid-\w+-start/)})?i:Le+de(de(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return de(i,/(.+)-inline(.+)/,ze+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(i)-1-u>6)switch(nt(i,u+1)){case 109:if(nt(i,u+4)!==45)break;case 102:return de(i,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Xi+(nt(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~No(i,"stretch",0)?cg(de(i,"stretch","fill-available"),u,c)+i:i}break;case 5152:case 5920:return de(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,h,p,j,v,y){return Le+d+":"+h+y+(p?Le+d+"-span:"+(j?v:+v-+h)+y:"")+i});case 4949:if(nt(i,u+6)===121)return de(i,":",":"+ze)+i;break;case 6444:switch(nt(i,nt(i,14)===45?18:11)){case 120:return de(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(nt(i,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Le+"$2box$3")+i;case 100:return de(i,":",":"+Le)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(i,"scroll-","scroll-snap-")+i}return i}function Yo(i,u){for(var c="",s=0;s<i.length;s++)c+=u(i[s],s,i,u)||"";return c}function Fb(i,u,c,s){switch(i.type){case Lb:if(i.children.length)break;case Bb:case Qc:return i.return=i.return||i.value;case lg:return"";case ig:return i.return=i.value+"{"+Yo(i.children,s)+"}";case Vo:if(!fn(i.value=i.props.join(",")))return""}return fn(c=Yo(i.children,s))?i.return=i.value+"{"+c+"}":""}function Wb(i){var u=ug(i);return function(c,s,d,h){for(var p="",j=0;j<u;j++)p+=i[j](c,s,d,h)||"";return p}}function Ib(i){return function(u){u.root||(u=u.return)&&i(u)}}function Pb(i,u,c,s){if(i.length>-1&&!i.return)switch(i.type){case Qc:i.return=cg(i.value,i.length,c);return;case ig:return Yo([fa(i,{value:de(i.value,"@","@"+ze)})],s);case Vo:if(i.length)return kb(c=i.props,function(d){switch(Dn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sl(fa(i,{props:[de(d,/:(read-\w+)/,":"+Xi+"$1")]})),Sl(fa(i,{props:[d]})),Mc(i,{props:c0(c,s)});break;case"::placeholder":Sl(fa(i,{props:[de(d,/:(plac\w+)/,":"+ze+"input-$1")]})),Sl(fa(i,{props:[de(d,/:(plac\w+)/,":"+Xi+"$1")]})),Sl(fa(i,{props:[de(d,/:(plac\w+)/,Le+"input-$1")]})),Sl(fa(i,{props:[d]})),Mc(i,{props:c0(c,s)});break}return""})}}var ev={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},Dl=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",fg="active",dg="data-styled-version",Ko="6.1.19",Vc=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",tv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),Fo=Object.freeze([]),Nl=Object.freeze({});function nv(i,u,c){return c===void 0&&(c=Nl),i.theme!==c.theme&&i.theme||u||c.theme}var mg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),av=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lv=/(^-|-$)/g;function m0(i){return i.replace(av,"-").replace(lv,"")}var iv=/(a)(d)/gi,bo=52,h0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Dc(i){var u,c="";for(u=Math.abs(i);u>bo;u=u/bo|0)c=h0(u%bo)+c;return(h0(u%bo)+c).replace(iv,"$1-$2")}var jc,hg=5381,Al=function(i,u){for(var c=u.length;c;)i=33*i^u.charCodeAt(--c);return i},gg=function(i){return Al(hg,i)};function pg(i){return Dc(gg(i)>>>0)}function rv(i){return i.displayName||i.name||"Component"}function wc(i){return typeof i=="string"&&!0}var yg=typeof Symbol=="function"&&Symbol.for,bg=yg?Symbol.for("react.memo"):60115,ov=yg?Symbol.for("react.forward_ref"):60112,uv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cv=((jc={})[ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jc[bg]=vg,jc);function g0(i){return("type"in(u=i)&&u.type.$$typeof)===bg?vg:"$$typeof"in i?cv[i.$$typeof]:uv;var u}var fv=Object.defineProperty,dv=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,mv=Object.getOwnPropertyDescriptor,hv=Object.getPrototypeOf,y0=Object.prototype;function xg(i,u,c){if(typeof u!="string"){if(y0){var s=hv(u);s&&s!==y0&&xg(i,s,c)}var d=dv(u);p0&&(d=d.concat(p0(u)));for(var h=g0(i),p=g0(u),j=0;j<d.length;++j){var v=d[j];if(!(v in sv||c&&c[v]||p&&v in p||h&&v in h)){var y=mv(u,v);try{fv(i,v,y)}catch{}}}}return i}function _l(i){return typeof i=="function"}function Zc(i){return typeof i=="object"&&"styledComponentId"in i}function Ra(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Nc(i,u){if(i.length===0)return"";for(var c=i[0],s=1;s<i.length;s++)c+=i[s];return c}function $i(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function _c(i,u,c){if(c===void 0&&(c=!1),!c&&!$i(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)i[s]=_c(i[s],u[s]);else if($i(u))for(var s in u)i[s]=_c(i[s],u[s]);return i}function $c(i,u){Object.defineProperty(i,"toString",{value:u})}function Wi(i){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var gv=(function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var c=0,s=0;s<u;s++)c+=this.groupSizes[s];return c},i.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,h=d;u>=h;)if((h<<=1)<0)throw Wi(16,"".concat(u));this.groupSizes=new Uint32Array(h),this.groupSizes.set(s),this.length=h;for(var p=d;p<h;p++)this.groupSizes[p]=0}for(var j=this.indexOfGroup(u+1),v=(p=0,c.length);p<v;p++)this.tag.insertRule(j,c[p])&&(this.groupSizes[u]++,j++)},i.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],s=this.indexOfGroup(u),d=s+c;this.groupSizes[u]=0;for(var h=s;h<d;h++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var s=this.groupSizes[u],d=this.indexOfGroup(u),h=d+s,p=d;p<h;p++)c+="".concat(this.tag.getRule(p)).concat(Vc);return c},i})(),Bo=new Map,qo=new Map,Lo=1,vo=function(i){if(Bo.has(i))return Bo.get(i);for(;qo.has(Lo);)Lo++;var u=Lo++;return Bo.set(i,u),qo.set(u,i),u},pv=function(i,u){Lo=u+1,Bo.set(i,u),qo.set(u,i)},yv="style[".concat(Dl,"][").concat(dg,'="').concat(Ko,'"]'),bv=new RegExp("^".concat(Dl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vv=function(i,u,c){for(var s,d=c.split(","),h=0,p=d.length;h<p;h++)(s=d[h])&&i.registerName(u,s)},xv=function(i,u){for(var c,s=((c=u.textContent)!==null&&c!==void 0?c:"").split(Vc),d=[],h=0,p=s.length;h<p;h++){var j=s[h].trim();if(j){var v=j.match(bv);if(v){var y=0|parseInt(v[1],10),T=v[2];y!==0&&(pv(T,y),vv(i,T,v[3]),i.getTag().insertRules(y,d)),d.length=0}else d.push(j)}}},b0=function(i){for(var u=document.querySelectorAll(yv),c=0,s=u.length;c<s;c++){var d=u[c];d&&d.getAttribute(Dl)!==fg&&(xv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Sv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sg=function(i){var u=document.head,c=i||u,s=document.createElement("style"),d=(function(j){var v=Array.from(j.querySelectorAll("style[".concat(Dl,"]")));return v[v.length-1]})(c),h=d!==void 0?d.nextSibling:null;s.setAttribute(Dl,fg),s.setAttribute(dg,Ko);var p=Sv();return p&&s.setAttribute("nonce",p),c.insertBefore(s,h),s},jv=(function(){function i(u){this.element=Sg(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var s=document.styleSheets,d=0,h=s.length;d<h;d++){var p=s[d];if(p.ownerNode===c)return p}throw Wi(17)})(this.element),this.length=0}return i.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},i})(),wv=(function(){function i(u){this.element=Sg(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var s=document.createTextNode(c);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i})(),Ev=(function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,c){return u<=this.length&&(this.rules.splice(u,0,c),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i})(),v0=Go,Cv={isServer:!Go,useCSSOMInjection:!tv},jg=(function(){function i(u,c,s){u===void 0&&(u=Nl),c===void 0&&(c={});var d=this;this.options=Et(Et({},Cv),u),this.gs=c,this.names=new Map(s),this.server=!!u.isServer,!this.server&&Go&&v0&&(v0=!1,b0(this)),$c(this,function(){return(function(h){for(var p=h.getTag(),j=p.length,v="",y=function(E){var O=(function(G){return qo.get(G)})(E);if(O===void 0)return"continue";var B=h.names.get(O),k=p.getGroup(E);if(B===void 0||!B.size||k.length===0)return"continue";var Y="".concat(Dl,".g").concat(E,'[id="').concat(O,'"]'),Z="";B!==void 0&&B.forEach(function(G){G.length>0&&(Z+="".concat(G,","))}),v+="".concat(k).concat(Y,'{content:"').concat(Z,'"}').concat(Vc)},T=0;T<j;T++)y(T);return v})(d)})}return i.registerId=function(u){return vo(u)},i.prototype.rehydrate=function(){!this.server&&Go&&b0(this)},i.prototype.reconstructWithOptions=function(u,c){return c===void 0&&(c=!0),new i(Et(Et({},this.options),u),this.gs,c&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(c){var s=c.useCSSOMInjection,d=c.target;return c.isServer?new Ev(d):s?new jv(d):new wv(d)})(this.options),new gv(u)));var u},i.prototype.hasNameForId=function(u,c){return this.names.has(u)&&this.names.get(u).has(c)},i.prototype.registerName=function(u,c){if(vo(u),this.names.has(u))this.names.get(u).add(c);else{var s=new Set;s.add(c),this.names.set(u,s)}},i.prototype.insertRules=function(u,c,s){this.registerName(u,c),this.getTag().insertRules(vo(u),s)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(vo(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Tv=/&/g,zv=/^\s*\/\/.*$/gm;function wg(i,u){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=wg(c.children,u)),c})}function Av(i){var u,c,s,d=Nl,h=d.options,p=h===void 0?Nl:h,j=d.plugins,v=j===void 0?Fo:j,y=function(O,B,k){return k.startsWith(c)&&k.endsWith(c)&&k.replaceAll(c,"").length>0?".".concat(u):O},T=v.slice();T.push(function(O){O.type===Vo&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(Tv,c).replace(s,y))}),p.prefix&&T.push(Pb),T.push(Fb);var E=function(O,B,k,Y){B===void 0&&(B=""),k===void 0&&(k=""),Y===void 0&&(Y="&"),u=Y,c=B,s=new RegExp("\\".concat(c,"\\b"),"g");var Z=O.replace(zv,""),G=Jb(k||B?"".concat(k," ").concat(B," { ").concat(Z," }"):Z);p.namespace&&(G=wg(G,p.namespace));var q=[];return Yo(G,Wb(T.concat(Ib(function(X){return q.push(X)})))),q};return E.hash=v.length?v.reduce(function(O,B){return B.name||Wi(15),Al(O,B.name)},hg).toString():"",E}var Mv=new jg,Uc=Av(),Eg=Ml.createContext({shouldForwardProp:void 0,styleSheet:Mv,stylis:Uc});Eg.Consumer;Ml.createContext(void 0);function x0(){return w.useContext(Eg)}var Cg=(function(){function i(u,c){var s=this;this.inject=function(d,h){h===void 0&&(h=Uc);var p=s.name+h.hash;d.hasNameForId(s.id,p)||d.insertRules(s.id,p,h(s.rules,p,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,$c(this,function(){throw Wi(12,String(s.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=Uc),this.name+u.hash},i})(),Ov=function(i){return i>="A"&&i<="Z"};function S0(i){for(var u="",c=0;c<i.length;c++){var s=i[c];if(c===1&&s==="-"&&i[0]==="-")return i;Ov(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var Tg=function(i){return i==null||i===!1||i===""},zg=function(i){var u,c,s=[];for(var d in i){var h=i[d];i.hasOwnProperty(d)&&!Tg(h)&&(Array.isArray(h)&&h.isCss||_l(h)?s.push("".concat(S0(d),":"),h,";"):$i(h)?s.push.apply(s,Zi(Zi(["".concat(d," {")],zg(h),!1),["}"],!1)):s.push("".concat(S0(d),": ").concat((u=d,(c=h)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||u in ev||u.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return s};function Na(i,u,c,s){if(Tg(i))return[];if(Zc(i))return[".".concat(i.styledComponentId)];if(_l(i)){if(!_l(h=i)||h.prototype&&h.prototype.isReactComponent||!u)return[i];var d=i(u);return Na(d,u,c,s)}var h;return i instanceof Cg?c?(i.inject(c,s),[i.getName(s)]):[i]:$i(i)?zg(i):Array.isArray(i)?Array.prototype.concat.apply(Fo,i.map(function(p){return Na(p,u,c,s)})):[i.toString()]}function Rv(i){for(var u=0;u<i.length;u+=1){var c=i[u];if(_l(c)&&!Zc(c))return!1}return!0}var Dv=gg(Ko),Nv=(function(){function i(u,c,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Rv(u),this.componentId=c,this.baseHash=Al(Dv,c),this.baseStyle=s,jg.registerId(c)}return i.prototype.generateAndInjectStyles=function(u,c,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=Ra(d,this.staticRulesId);else{var h=Nc(Na(this.rules,u,c,s)),p=Dc(Al(this.baseHash,h)>>>0);if(!c.hasNameForId(this.componentId,p)){var j=s(h,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,j)}d=Ra(d,p),this.staticRulesId=p}else{for(var v=Al(this.baseHash,s.hash),y="",T=0;T<this.rules.length;T++){var E=this.rules[T];if(typeof E=="string")y+=E;else if(E){var O=Nc(Na(E,u,c,s));v=Al(v,O+T),y+=O}}if(y){var B=Dc(v>>>0);c.hasNameForId(this.componentId,B)||c.insertRules(this.componentId,B,s(y,".".concat(B),void 0,this.componentId)),d=Ra(d,B)}}return d},i})(),Ag=Ml.createContext(void 0);Ag.Consumer;var Ec={};function _v(i,u,c){var s=Zc(i),d=i,h=!wc(i),p=u.attrs,j=p===void 0?Fo:p,v=u.componentId,y=v===void 0?(function(ae,V){var K=typeof ae!="string"?"sc":m0(ae);Ec[K]=(Ec[K]||0)+1;var Q="".concat(K,"-").concat(pg(Ko+K+Ec[K]));return V?"".concat(V,"-").concat(Q):Q})(u.displayName,u.parentComponentId):v,T=u.displayName,E=T===void 0?(function(ae){return wc(ae)?"styled.".concat(ae):"Styled(".concat(rv(ae),")")})(i):T,O=u.displayName&&u.componentId?"".concat(m0(u.displayName),"-").concat(u.componentId):u.componentId||y,B=s&&d.attrs?d.attrs.concat(j).filter(Boolean):j,k=u.shouldForwardProp;if(s&&d.shouldForwardProp){var Y=d.shouldForwardProp;if(u.shouldForwardProp){var Z=u.shouldForwardProp;k=function(ae,V){return Y(ae,V)&&Z(ae,V)}}else k=Y}var G=new Nv(c,O,s?d.componentStyle:void 0);function q(ae,V){return(function(K,Q,he){var be=K.attrs,at=K.componentStyle,Pe=K.defaultProps,Ze=K.foldedComponentIds,Lt=K.styledComponentId,mt=K.target,st=Ml.useContext(Ag),N=x0(),$=K.shouldForwardProp||N.shouldForwardProp,te=nv(Q,st,Pe)||Nl,se=(function(ie,re,ge){for(var Ye,Ee=Et(Et({},re),{className:void 0,theme:ge}),It=0;It<ie.length;It+=1){var Pt=_l(Ye=ie[It])?Ye(Ee):Ye;for(var ht in Pt)Ee[ht]=ht==="className"?Ra(Ee[ht],Pt[ht]):ht==="style"?Et(Et({},Ee[ht]),Pt[ht]):Pt[ht]}return re.className&&(Ee.className=Ra(Ee.className,re.className)),Ee})(be,Q,te),me=se.as||mt,x={};for(var U in se)se[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&se.theme===te||(U==="forwardedAs"?x.as=se.forwardedAs:$&&!$(U,me)||(x[U]=se[U]));var J=(function(ie,re){var ge=x0(),Ye=ie.generateAndInjectStyles(re,ge.styleSheet,ge.stylis);return Ye})(at,se),F=Ra(Ze,Lt);return J&&(F+=" "+J),se.className&&(F+=" "+se.className),x[wc(me)&&!mg.has(me)?"class":"className"]=F,he&&(x.ref=he),w.createElement(me,x)})(X,ae,V)}q.displayName=E;var X=Ml.forwardRef(q);return X.attrs=B,X.componentStyle=G,X.displayName=E,X.shouldForwardProp=k,X.foldedComponentIds=s?Ra(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=O,X.target=s?d.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?(function(V){for(var K=[],Q=1;Q<arguments.length;Q++)K[Q-1]=arguments[Q];for(var he=0,be=K;he<be.length;he++)_c(V,be[he],!0);return V})({},d.defaultProps,ae):ae}}),$c(X,function(){return".".concat(X.styledComponentId)}),h&&xg(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function j0(i,u){for(var c=[i[0]],s=0,d=u.length;s<d;s+=1)c.push(u[s],i[s+1]);return c}var w0=function(i){return Object.assign(i,{isCss:!0})};function Mg(i){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(_l(i)||$i(i))return w0(Na(j0(Fo,Zi([i],u,!0))));var s=i;return u.length===0&&s.length===1&&typeof s[0]=="string"?Na(s):w0(Na(j0(s,u)))}function Bc(i,u,c){if(c===void 0&&(c=Nl),!u)throw Wi(1,u);var s=function(d){for(var h=[],p=1;p<arguments.length;p++)h[p-1]=arguments[p];return i(u,c,Mg.apply(void 0,Zi([d],h,!1)))};return s.attrs=function(d){return Bc(i,u,Et(Et({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return Bc(i,u,Et(Et({},c),d))},s}var Og=function(i){return Bc(_v,i)},g=Og;mg.forEach(function(i){g[i]=Og(i)});function Bt(i){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];var s=Nc(Mg.apply(void 0,Zi([i],u,!1))),d=pg(s);return new Cg(d,s)}const Uv=g.nav`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #1e293b;
`,Bv=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Lv=g(Wt)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;
  
  span {
    color: white;
  }
`,Hv=g.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Li=g.li`
  margin: 0 1rem;
`,Hi=g(Wt)`
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,kv=g.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Rg=g(Wt)`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`,Yv=g(Rg)`
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  
  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }
`,Gv=g(Rg)`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
`,qv=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,Qv=g.span`
  @media (max-width: 768px) {
    display: none;
  }
`,Xv=g.button`
  background: transparent;
  color: #cbd5e1;
  border: 1px solid #334155;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #10b981;
    border-color: #10b981;
  }
`,E0=g(Wt)`
  background: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`,Vv=g(Wt)`
  background: #00ff9d;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00e68a;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
  }
`,Zv=g(Wt)`
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
`,xo=({isAuthenticated:i,user:u,onLogout:c})=>{const s=Ut(),d=h=>{h.preventDefault(),s("/"),setTimeout(()=>{const p=document.getElementById("features");p&&p.scrollIntoView({behavior:"smooth"})},100)};return o.jsx(Uv,{children:o.jsxs(Bv,{children:[o.jsxs(Lv,{to:"/",children:["Nexter",o.jsx("span",{children:"Cloud"})]}),o.jsxs(Hv,{children:[o.jsx(Li,{children:o.jsx(Hi,{to:"/",children:"Home"})}),o.jsx(Li,{children:o.jsx(Hi,{to:"/#features",onClick:d,children:"Features"})}),o.jsx(Li,{children:o.jsx(Hi,{to:"/pricing",children:"Pricing"})}),o.jsx(Li,{children:o.jsx(Hi,{to:"/support",children:"Support"})}),o.jsx(Li,{children:o.jsx(Hi,{to:"/about",children:"About"})})]}),i&&u?o.jsxs(qv,{children:[o.jsxs(Qv,{children:["Welcome, ",u.name]}),o.jsx(Zv,{to:"/payment-history",children:"My Payments"}),o.jsx(Vv,{to:"/dashboard",children:"Dashboard"}),o.jsx(Xv,{onClick:c,children:"Logout"}),o.jsx(E0,{to:"/admin/login",children:"Admin"})]}):o.jsxs(kv,{children:[o.jsx(Yv,{to:"/login",children:"Login"}),o.jsx(Gv,{to:"/signup",children:"Sign Up"}),o.jsx(E0,{to:"/admin/login",children:"Admin"})]})]})})},Dg=Bt`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`,Ng=Bt`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-15px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`,_g=Bt`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(138, 43, 226, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(138, 43, 226, 0);
  }
`,$v=Bt`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Jv=Bt`
  0%, 100% {
    box-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2;
  }
  50% {
    box-shadow: 0 0 15px #00ff9d, 0 0 25px #00ff9d, 0 0 35px #00ff9d;
  }
`,Kv=g.section`
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
  color: white;
  padding: 8rem 5% 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 255, 157, 0.15) 0%, transparent 40%);
    z-index: 1;
  }
`,Fv=g.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Wv=g.div`
  text-align: left;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`,Iv=g.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(90deg, #8a2be2, #00ff9d, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${$v} 4s ease infinite;
  background-size: 300% 300%;
  text-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Pv=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
`,Ug=g.button`
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0.5rem;
  box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
  animation: ${_g} 2s infinite;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(138, 43, 226, 0.5);
    animation: none;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 992px) {
    display: block;
    margin: 1rem auto;
  }
`,ex=g(Ug)`
  background: transparent;
  border: 2px solid #8a2be2;
  animation: none;
  
  &:hover {
    background: rgba(138, 43, 226, 0.1);
    animation: none;
  }
`,tx=g.button`
  background: none;
  border: none;
  color: #8a2be2;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: underline;
  margin-top: 1rem;
  
  &:hover {
    color: #00ff9d;
    text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
  }
`,nx=g.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  
  @media (max-width: 992px) {
    height: 350px;
  }
`,ax=g.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,lx=g.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  animation: ${Ng} 8s ease-in-out infinite;
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`,ix=g.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: ${Dg} 25s infinite linear;
  
  @media (max-width: 992px) {
    width: 150px;
    height: 150px;
  }
`,jl=g.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(138, 43, 226, 0.1);
  border: 2px solid #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: ${Jv} 3s ease-in-out infinite alternate;
  
  @media (max-width: 992px) {
    width: 150px;
    height: 150px;
  }
  
  &.front {
    transform: translateZ(100px);
    
    @media (max-width: 992px) {
      transform: translateZ(75px);
    }
  }
  
  &.back {
    transform: rotateY(180deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(180deg) translateZ(75px);
    }
  }
  
  &.right {
    transform: rotateY(90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(90deg) translateZ(75px);
    }
  }
  
  &.left {
    transform: rotateY(-90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateY(-90deg) translateZ(75px);
    }
  }
  
  &.top {
    transform: rotateX(90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateX(90deg) translateZ(75px);
    }
  }
  
  &.bottom {
    transform: rotateX(-90deg) translateZ(100px);
    
    @media (max-width: 992px) {
      transform: rotateX(-90deg) translateZ(75px);
    }
  }
`,wl=g.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.7);
  animation: ${_g} 4s infinite;
  
  @media (max-width: 992px) {
    width: 75px;
    height: 75px;
  }
  
  svg {
    width: 60px;
    height: 60px;
    fill: white;
    
    @media (max-width: 992px) {
      width: 45px;
      height: 45px;
    }
  }
`,Bg=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 50%;
  animation: ${Dg} 30s infinite linear reverse;
  
  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
  }
`,rx=g(Bg)`
  width: 350px;
  height: 350px;
  border-color: rgba(0, 255, 157, 0.3);
  animation-duration: 40s;
  
  @media (max-width: 992px) {
    width: 280px;
    height: 280px;
  }
`,ox=g.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #00ff9d, #8a2be2);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.7);
  animation: ${Ng} 6s ease-in-out infinite;
`,ux=()=>{const i=Ut(),u=[];for(let s=0;s<30;s++){const d=Math.random()*20+5;u.push(o.jsx(lx,{style:{width:`${d}px`,height:`${d}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*8}s`,animationDuration:`${8+Math.random()*10}s`,background:s%4===0?"linear-gradient(135deg, #8a2be2, #00ff9d)":s%4===1?"linear-gradient(135deg, #00ff9d, #8a2be2)":s%4===2?"linear-gradient(135deg, #00ccff, #8a2be2)":"linear-gradient(135deg, #ff00ff, #00ff9d)"}},s))}const c=[];for(let s=0;s<8;s++)c.push(o.jsx(ox,{style:{width:`${Math.random()*10+10}px`,height:`${Math.random()*10+10}px`,top:"50%",left:"50%",transform:`translate(-50%, -50%) rotate(${s*45}deg) translateX(150px)`,animationDelay:`${s*.5}s`}},s));return o.jsxs(Kv,{children:[o.jsx(ax,{children:u}),o.jsxs(Fv,{children:[o.jsxs(Wv,{children:[o.jsx(Iv,{children:"Premium Minecraft Server Hosting"}),o.jsx(Pv,{children:"Experience unparalleled performance with our enterprise-grade infrastructure designed specifically for Minecraft servers. Powered by our custom 3D game panel with advanced features."}),o.jsxs("div",{children:[o.jsx(Ug,{onClick:()=>i("/pricing"),children:"Get Started Now"}),o.jsx(ex,{onClick:()=>i("/pricing"),children:"View All Plans"})]}),o.jsx(tx,{onClick:()=>i("/pricing"),children:"View Pricing Plans"})]}),o.jsxs(nx,{children:[o.jsx(Bg,{}),o.jsx(rx,{}),c,o.jsxs(ix,{children:[o.jsx(jl,{className:"front",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),o.jsx(jl,{className:"back",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),o.jsx(jl,{className:"right",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),o.jsx(jl,{className:"left",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),o.jsx(jl,{className:"top",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),o.jsx(jl,{className:"bottom",children:o.jsx(wl,{children:o.jsx("svg",{viewBox:"0 0 24 24",children:o.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})})]})]})]})]})},sx=g.section`
  padding: 5rem 5%;
  background-color: #0a0a0a;
`,cx=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,fx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,dx=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,mx=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,hx=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2a2a2a;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
    border-color: #10b981;
  }
`,gx=g.div`
  width: 60px;
  height: 60px;
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: #10b981;
  }
`,px=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,yx=g.p`
  color: #cbd5e1;
  line-height: 1.6;
`,bx=[{title:"NVME SSD Storage",description:"All our servers come with fast & latest RAID 1 NVME SSD storage drives for maximum performance.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})},{title:"DDoS Protection",description:"All servers with GB SHIELD DDoS protection. Keeping your servers up 24/7.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})},{title:"Instant Setup",description:"Your ordered server/service will be setup in seconds after payment, truly rapid.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})},{title:"Fast Processors",description:"Our servers are equipped with high performance Intel & AMD processors such as Intel I9/Ryzen9.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})})},{title:"24/7 Support",description:"We strive to ensure customer satisfaction by providing fast support 24/7.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})})},{title:"Global Network",description:"Choose one of our locations with low ping and fast download network.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}],vx=()=>o.jsx(sx,{id:"features",children:o.jsxs(cx,{children:[o.jsx(fx,{children:"The Features You Deserve"}),o.jsx(dx,{children:"These are some of the benefits of being a NexterCloud customer"}),o.jsx(mx,{children:bx.map((i,u)=>o.jsxs(hx,{children:[o.jsx(gx,{children:i.icon}),o.jsx(px,{children:i.title}),o.jsx(yx,{children:i.description})]},u))})]})}),xx=g.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`,Sx=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,jx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,wx=g.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Ex=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Cx=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid #334155;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  ${i=>i.featured&&`
    border: 2px solid #8a2be2;
    box-shadow: 0 20px 25px -5px rgba(138, 43, 226, 0.1), 0 10px 10px -5px rgba(138, 43, 226, 0.04);
  `}
`,Tx=g.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`,zx=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #8a2be2;
`,Ax=g.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  
  span {
    font-size: 1rem;
    color: #94a3b8;
    font-weight: 400;
  }
`,Mx=g.ul`
  list-style: none;
  margin-bottom: 2rem;
`,Ox=g.li`
  padding: 0.5rem 0;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  
  &::before {
    content: "→";
    margin-right: 0.5rem;
    color: #8a2be2;
  }
`,Rx=g.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
  }
`,Dx=g.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ef4444;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Nx=()=>{const i=Ut(),[u,c]=w.useState(""),s=[{name:"Normal Plan",price:.5,priceINR:40,features:["1 GB RAM","5 GB NVMe SSD","1 vCore","Ideal for: Friends / Test Servers"]},{name:"Bot Plan",price:1,priceINR:80,featured:!0,features:["2 GB RAM","10 GB NVMe SSD","1 vCore","Ideal for: Small SMP / Light Mods"]},{name:"SMP Plan",price:2,priceINR:160,features:["4 GB RAM","20 GB NVMe SSD","1.5 vCores","Ideal for: PvP / Regular SMP"]},{name:"Server Plan",price:4,priceINR:320,features:["8 GB RAM","30 GB NVMe SSD","3 vCores","Ideal for: Medium Servers / Mini-Games"]},{name:"Community Plan",price:5.5,priceINR:480,features:["12 GB RAM","40 GB NVMe SSD","4 vCores","Ideal for: Lifesteal / Heavy Modpacks"]},{name:"Nexter Plan",price:11,priceINR:960,features:["24 GB RAM","50 GB NVMe SSD","6 vCores","Ideal for: Public Networks / Intensive Loads"]},{name:"Beast Performance Plan",price:14,priceINR:1280,features:["32 GB RAM","60 GB NVMe SSD","8 vCores","Ideal for: Public Networks / Intensive Loads"]}],d=()=>{const h=localStorage.getItem("userToken"),p=localStorage.getItem("userData");h&&p?i("/billing"):(c("Please sign up and login first to purchase a plan"),setTimeout(()=>{c("")},3e3))};return o.jsx(xx,{id:"pricing",children:o.jsxs(Sx,{children:[o.jsx(jx,{children:"Simple, Transparent Pricing"}),o.jsx(wx,{children:"Choose the perfect plan for your Minecraft server"}),u&&o.jsx(Dx,{children:u}),o.jsx(Ex,{children:s.map((h,p)=>o.jsxs(Cx,{featured:h.featured,children:[h.featured&&o.jsx(Tx,{children:"MOST POPULAR"}),o.jsx(zx,{children:h.name}),o.jsxs(Ax,{children:["$",h.price,"/month",o.jsxs("div",{style:{fontSize:"0.9rem",color:"#94a3b8",marginTop:"0.5rem"},children:["₹",h.priceINR," INR"]})]}),o.jsx(Mx,{children:h.features.map((j,v)=>o.jsx(Ox,{children:j},v))}),o.jsx(Rx,{onClick:d,children:"Get Started"})]},p))})]})})},_x=g.section`
  padding: 5rem 5%;
  background-color: #0a0a0a;
`,Ux=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,Bx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,Lx=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,Hx=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,kx=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #2a2a2a;
  
  &::before {
    content: """;
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 5rem;
    color: rgba(16, 185, 129, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
  }
`,Yx=g.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`,Gx=g.div`
  display: flex;
  align-items: center;
`,qx=g.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  color: #10b981;
`,Qx=g.div``,Xx=g.h4`
  margin: 0;
  color: #f1f5f9;
`,Vx=g.p`
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
`,Zx=[{content:"NexterCloud has transformed our Minecraft server experience. The performance is incredible and our players have never been happier. The support team is also fantastic!",author:"Alex Johnson",role:"Server Owner"},{content:"I've tried multiple hosting providers, but NexterCloud stands out with its reliability and speed. The one-click mod installation saved me hours of work.",author:"Sarah Williams",role:"Minecraft Community Manager"},{content:"The uptime guarantee is no joke - our server has been running flawlessly for over a year. The pricing is also very competitive for the quality of service.",author:"Michael Chen",role:"Gaming Guild Leader"}],$x=()=>o.jsx(_x,{children:o.jsxs(Ux,{children:[o.jsx(Bx,{children:"What Our Customers Say"}),o.jsx(Lx,{children:"Don't just take our word for it - hear from our satisfied customers"}),o.jsx(Hx,{children:Zx.map((i,u)=>o.jsxs(kx,{children:[o.jsx(Yx,{children:i.content}),o.jsxs(Gx,{children:[o.jsx(qx,{children:i.author.charAt(0)}),o.jsxs(Qx,{children:[o.jsx(Xx,{children:i.author}),o.jsx(Vx,{children:i.role})]})]})]},u))})]})}),Jc=Bt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Jx=Bt`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`,Kx=Bt`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Fx=g.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Wx=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ix=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Jc} 1s ease-out;
`,Px=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Jc} 1s ease-out 0.2s both;
`,e2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,t2=g.div`
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  border: 1px solid #334155;
  transition: all 0.3s ease;
  animation: ${Jc} 1s ease-out 0.4s both, ${Kx} 6s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00ff9d;
    box-shadow: 0 10px 25px rgba(0, 255, 157, 0.2);
  }
  
  &:nth-child(2) {
    animation-delay: 0.6s, 1s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.8s, 2s;
  }
  
  &:nth-child(4) {
    animation-delay: 1s, 3s;
  }
`,n2=g.h3`
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`,a2=g.div`
  font-family: 'Courier New', monospace;
  color: #e2e8f0;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`,l2=g.div`
  color: #10b981;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${Jx} 2s infinite;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
`,i2=()=>{const i=[{name:"India",latency:"12ms",status:"ONLINE"},{name:"USA",latency:"8ms",status:"ONLINE"},{name:"Germany",latency:"25ms",status:"ONLINE"},{name:"Singapore",latency:"5ms",status:"ONLINE"}];return o.jsx(Fx,{id:"network",children:o.jsxs(Wx,{children:[o.jsx(Ix,{children:"Global Network"}),o.jsx(Px,{children:"Our servers are strategically located around the world for optimal performance"}),o.jsx(e2,{children:i.map((u,c)=>o.jsxs(t2,{children:[o.jsx(n2,{children:u.name}),o.jsx(a2,{children:u.latency}),o.jsx(l2,{children:u.status})]},c))})]})})},Hl=Bt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,r2=Bt`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`,o2=g.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
`,u2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,s2=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Hl} 1s ease-out;
`,c2=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Hl} 1s ease-out 0.2s both;
`,f2=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,d2=g.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  font-family: 'Courier New', monospace;
  position: relative;
  animation: ${Hl} 1s ease-out 0.4s both;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 255, 157, 0.05) 50%
    );
    background-size: 100% 3px;
    animation: ${r2} 8s linear infinite;
    pointer-events: none;
  }
`,m2=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #334155;
`,Kc=g.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
`,h2=g(Kc)`
  background: #ef4444;
`,g2=g(Kc)`
  background: #f59e0b;
`,p2=g(Kc)`
  background: #10b981;
`,y2=g.div`
  color: #94a3b8;
  font-size: 0.9rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'Courier New', monospace;
`,b2=g.div`
  background: #0f172a;
  padding: 1.5rem;
  border-radius: 0.5rem;
  height: 350px;
  overflow-y: auto;
  font-size: 0.9rem;
`,v2=g.div`
  margin-bottom: 0.25rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  &.info {
    color: #60a5fa;
  }
  
  &.success {
    color: #34d399;
  }
  
  &.warning {
    color: #fbbf24;
  }
  
  &.error {
    color: #f87171;
  }
  
  &.player {
    color: #a78bfa;
  }
  
  &:last-child {
    color: #94a3b8;
  }
`,x2=g.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  animation: ${Hl} 1s ease-out 0.6s both;
`,S2=g.h3`
  color: #00ff9d;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`,j2=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,w2=g.li`
  color: #cbd5e1;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '✓';
    color: #10b981;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`,E2=g.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
  }
`,C2=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`,T2=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Hl} 1s ease-out;
`,z2=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Hl} 1s ease-out 0.2s both;
`,A2=g.button`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0.5rem;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.5);
  }
`,M2=()=>{const i=Ut(),u=[{text:"$ Server initializing...",type:"info"},{text:'$ Loading world: "SurvivalWorld"',type:"info"},{text:"$ Plugins loaded: 12",type:"info"},{text:"$ Starting Minecraft server on port 25565",type:"info"},{text:"$ Server started successfully!",type:"success"},{text:"[Player] Steve joined the game",type:"player"},{text:"[Player] Alex joined the game",type:"player"},{text:"[Steve] Hello everyone!",type:"player"},{text:"[Warning] Memory usage at 78%",type:"warning"},{text:"[Player] Alex left the game",type:"player"},{text:"[Player] Mike joined the game",type:"player"},{text:"$ World auto-saved",type:"info"},{text:"[Player] Steve: How do I craft a pickaxe?",type:"player"},{text:"[Player] Mike: Press E to open inventory",type:"player"},{text:""}],c=["Powerful Custom Game Panel - GBNODES has it's Own Fork of Pterodactyl Panel","Extremely Modern, Fast, Responsive Panel with Features to Cater All Your Needs","Custom Server Control Options","Easy to Use and Modern Server File Manager","Server Domain Setup, Plugin Installer, Mod Installer & Version Changer","One Click Server Installation, Egg Changer","Game Server Settings Configuration"];return o.jsxs(o.Fragment,{children:[o.jsx(o2,{id:"console",children:o.jsxs(u2,{children:[o.jsx(s2,{children:"Live Server Console"}),o.jsx(c2,{children:"Monitor your server in real-time with our intuitive console"}),o.jsxs(f2,{children:[o.jsxs(d2,{children:[o.jsxs(m2,{children:[o.jsx(h2,{}),o.jsx(g2,{}),o.jsx(p2,{}),o.jsx(y2,{children:"server-console.log"})]}),o.jsx(b2,{children:u.map((s,d)=>o.jsx(v2,{className:s.type,children:s.text},d))})]}),o.jsxs(x2,{children:[o.jsx(S2,{children:"Powerful Custom Game Panel"}),o.jsx(j2,{children:c.map((s,d)=>o.jsx(w2,{children:s},d))})]})]})]})}),o.jsx(E2,{children:o.jsxs(C2,{children:[o.jsx(T2,{children:"Get Your Server Today"}),o.jsx(z2,{children:"Ready to elevate your Minecraft experience? Join thousands of satisfied players on our premium hosting platform."}),o.jsx(A2,{onClick:()=>{i("/pricing"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)},children:"View Pricing Plans"})]})})]})},O2=g.footer`
  background-color: #0a0a0a;
  color: #94a3b8;
  padding: 4rem 5% 2rem;
  border-top: 1px solid #1a1a1a;
`,R2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,D2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,So=g.div``,N2=g.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  
  span {
    color: #10b981;
  }
`,_2=g.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #9ca3af;
`,U2=g.div`
  display: flex;
  gap: 1rem;
`,Cc=g.a`
  color: #64748b;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,Tc=g.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`,Jt=g(Wt)`
  display: block;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,B2=g.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #1a1a1a;
  color: #64748b;
  font-size: 0.9rem;
`,jo=()=>o.jsx(O2,{children:o.jsxs(R2,{children:[o.jsxs(D2,{children:[o.jsxs(So,{children:[o.jsxs(N2,{children:["Nexter",o.jsx("span",{children:"Cloud"})]}),o.jsx(_2,{children:"Premium Minecraft server hosting with enterprise-grade infrastructure and 24/7 support."}),o.jsxs(U2,{children:[o.jsx(Cc,{href:"#",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),o.jsx(Cc,{href:"#",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}),o.jsx(Cc,{href:"#",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),o.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),o.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})]})]}),o.jsxs(So,{children:[o.jsx(Tc,{children:"Services"}),o.jsx(Jt,{to:"/pricing",children:"Minecraft Hosting"}),o.jsx(Jt,{to:"/pricing",children:"VPS Servers"}),o.jsx(Jt,{to:"/pricing",children:"Dedicated Servers"}),o.jsx(Jt,{to:"/pricing",children:"Domain Names"})]}),o.jsxs(So,{children:[o.jsx(Tc,{children:"Company"}),o.jsx(Jt,{to:"/about",children:"About Us"}),o.jsx(Jt,{to:"/blog",children:"Blog"}),o.jsx(Jt,{to:"/careers",children:"Careers"}),o.jsx(Jt,{to:"/contact",children:"Contact"})]}),o.jsxs(So,{children:[o.jsx(Tc,{children:"Support"}),o.jsx(Jt,{to:"/support",children:"Help Center"}),o.jsx(Jt,{to:"/support",children:"Documentation"}),o.jsx(Jt,{to:"/support",children:"Server Status"}),o.jsx(Jt,{to:"/support",children:"Contact Support"})]})]}),o.jsxs(B2,{children:["© ",new Date().getFullYear()," NexterCloud. All rights reserved."]})]})}),L2=g.div`
  padding: 5rem 5% 3rem;
  background: #0a0a0a;
  color: #f1f5f9;
  min-height: 100vh;
`,H2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,k2=g.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #10b981;
`,Y2=g.p`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,wo=g.section`
  margin: 3rem 0;
`,Eo=g.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #10b981;
  border-bottom: 2px solid #1e293b;
  padding-bottom: 0.5rem;
`,El=g.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
`,G2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,q2=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #2a2a2a;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #10b981;
  }
`,Q2=g.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #1e293b;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #10b981;
`,X2=g.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
`,V2=g.p`
  color: #10b981;
  font-weight: 600;
  margin-bottom: 1rem;
`,Z2=g.p`
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
`,$2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`,J2=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #2a2a2a;
`,K2=g.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.5rem;
`,F2=g.div`
  color: #94a3b8;
  font-size: 1.1rem;
`,W2=g.div`
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  margin: 3rem 0;
  
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
  
  p {
    color: #f0fdf4;
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
`,I2=()=>{const i=[{name:"Alex Johnson",role:"Founder & CEO",bio:"10+ years in cloud infrastructure and gaming server management."},{name:"Sarah Williams",role:"CTO",bio:"Expert in distributed systems and high-performance computing."},{name:"Michael Chen",role:"Head of Operations",bio:"Specializes in customer service and 24/7 support systems."},{name:"Emma Davis",role:"Security Lead",bio:"Cybersecurity expert with focus on DDoS protection and data safety."}],u=[{number:"5000+",label:"Happy Customers"},{number:"99.9%",label:"Uptime Guarantee"},{number:"24/7",label:"Support Availability"},{number:"100+",label:"Server Locations"}];return o.jsx(L2,{children:o.jsxs(H2,{children:[o.jsx(k2,{children:"About NexterCloud"}),o.jsx(Y2,{children:"Learn more about our mission, team, and commitment to excellence"}),o.jsxs(wo,{children:[o.jsx(Eo,{children:"Our Story"}),o.jsx(El,{children:"Founded in 2020, NexterCloud began with a simple mission: to provide affordable, high-performance Minecraft server hosting without compromising on quality or support. What started as a small team of passionate gamers has grown into a leading provider of cloud gaming solutions."}),o.jsx(El,{children:"We understand that gaming is more than just a hobby—it's a community. That's why we've built our services around fostering connections, ensuring reliability, and providing the tools our customers need to create incredible experiences."})]}),o.jsxs(W2,{children:[o.jsx("h2",{children:"Our Mission"}),o.jsx("p",{children:"To empower gamers and server administrators with cutting-edge cloud technology, exceptional customer support, and a platform that brings communities together. We're committed to making high-quality server hosting accessible to everyone, regardless of their technical expertise."})]}),o.jsxs(wo,{children:[o.jsx(Eo,{children:"Meet Our Team"}),o.jsx(G2,{children:i.map((c,s)=>o.jsxs(q2,{children:[o.jsx(Q2,{children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"40",height:"40",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),o.jsx(X2,{children:c.name}),o.jsx(V2,{children:c.role}),o.jsx(Z2,{children:c.bio})]},s))})]}),o.jsxs(wo,{children:[o.jsx(Eo,{children:"By The Numbers"}),o.jsx($2,{children:u.map((c,s)=>o.jsxs(J2,{children:[o.jsx(K2,{children:c.number}),o.jsx(F2,{children:c.label})]},s))})]}),o.jsxs(wo,{children:[o.jsx(Eo,{children:"Our Values"}),o.jsxs(El,{children:[o.jsx("strong",{children:"Customer First:"})," Everything we do is focused on providing the best experience for our customers."]}),o.jsxs(El,{children:[o.jsx("strong",{children:"Innovation:"})," We constantly evolve our technology to stay ahead of industry trends and customer needs."]}),o.jsxs(El,{children:[o.jsx("strong",{children:"Reliability:"})," We believe in building systems that our customers can depend on, 24/7."]}),o.jsxs(El,{children:[o.jsx("strong",{children:"Community:"})," We're gamers ourselves, and we understand the importance of fostering strong communities."]})]})]})})},He=()=>typeof window<"u"?window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:4000":"https://final-website-1-fsmv.onrender.com":"http://localhost:4000",P2=g.div`
  padding: 5rem 5% 3rem;
  background: #0a0a0a;
  color: #f1f5f9;
  min-height: 100vh;
`,e5=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,t5=g.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #10b981;
`,n5=g.p`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,a5=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,l5=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid #2a2a2a;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #10b981;
  }
`,i5=g.div`
  width: 60px;
  height: 60px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: #10b981;
  }
`,r5=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,o5=g.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,u5=g.div`
  background: #1a1a1a;
  border-radius: 0.5rem;
  border: 1px solid #2a2a2a;
  overflow: hidden;
  margin-top: 2rem;
`,s5=g.div`
  background: #1e293b;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,c5=g.h2`
  font-size: 1.3rem;
  color: #10b981;
  margin: 0;
`,f5=g.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.9rem;
`,d5=g.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
`,m5=g.div`
  height: 400px;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,h5=g.div`
  max-width: 80%;
  padding: 1rem;
  border-radius: 0.5rem;
  align-self: ${i=>i.isOwn?"flex-end":"flex-start"};
  background: ${i=>i.isOwn?"#10b981":"#2d2d2d"};
  color: ${i=>i.isOwn?"#000000":"#f1f5f9"};
`,g5=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.8;
`,p5=g.div`
  line-height: 1.5;
`,y5=g.div`
  padding: 1.5rem;
  border-top: 1px solid #2a2a2a;
  background: #1e293b;
`,b5=g.form`
  display: flex;
  gap: 1rem;
`,v5=g.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0a0a0a;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`,x5=g.button`
  padding: 0.75rem 1.5rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: #059669;
  }
  
  &:disabled {
    background: #334155;
    cursor: not-allowed;
  }
`,S5=()=>{const[i,u]=w.useState([]),[c,s]=w.useState(""),[d,h]=w.useState(!1),[p,j]=w.useState(null),[v,y]=w.useState("");w.useEffect(()=>{const O=localStorage.getItem("userData");O&&j(JSON.parse(O))},[]),w.useEffect(()=>{p&&(async()=>{if(p)try{h(!0);const B=await fetch(`${He()}/api/support/messages`,{headers:{"user-id":p.id}});if(B.ok){const k=await B.json();k.success&&u(k.messages)}}catch(B){console.error("Error loading messages:",B),y("Failed to load messages")}finally{h(!1)}})()},[p]);const T=async O=>{if(O.preventDefault(),!(!c.trim()||!p))try{const B=await fetch(`${He()}/api/support/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:p.id,message:c,userType:"user"})});if(B.ok){const k=await B.json();k.success&&(u(Y=>[...Y,k.message]),s(""))}else y("Failed to send message")}catch(B){console.error("Error sending message:",B),y("Network error. Failed to send message.")}},E=[{title:"24/7 Live Chat",description:"Get instant help from our support team anytime, day or night.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})},{title:"Email Support",description:"Send us an email and we'll respond within 24 hours.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})},{title:"Knowledge Base",description:"Browse our extensive library of help articles and tutorials.",icon:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}];return o.jsx(P2,{children:o.jsxs(e5,{children:[o.jsx(t5,{children:"24/7 Support"}),o.jsx(n5,{children:"We're here to help you with any questions or issues you might have"}),v&&o.jsx("div",{style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid #ef4444",color:"#ef4444",padding:"1rem",borderRadius:"0.375rem",marginBottom:"1rem"},children:v}),o.jsx(a5,{children:E.map((O,B)=>o.jsxs(l5,{children:[o.jsx(i5,{children:O.icon}),o.jsx(r5,{children:O.title}),o.jsx(o5,{children:O.description})]},B))}),o.jsxs(u5,{children:[o.jsxs(s5,{children:[o.jsx(c5,{children:"Live Chat with Support"}),o.jsxs(f5,{children:[o.jsx(d5,{}),"Online Now"]})]}),o.jsx(m5,{children:i.length>0?i.map(O=>o.jsxs(h5,{isOwn:O.userType==="user",children:[o.jsxs(g5,{children:[o.jsx("span",{children:O.userType==="admin"?"Support Agent":"You"}),o.jsx("span",{children:new Date(O.timestamp).toLocaleTimeString()})]}),o.jsx(p5,{children:O.message})]},O.id)):o.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"2rem"},children:d?"Loading messages...":"No messages yet. Start a conversation!"})}),o.jsxs(y5,{children:[o.jsxs(b5,{onSubmit:T,children:[o.jsx(v5,{type:"text",value:c,onChange:O=>{s(O.target.value),y("")},placeholder:"Type your message here...",disabled:!p}),o.jsx(x5,{type:"submit",disabled:!c.trim()||!p,children:"Send"})]}),!p&&o.jsx("p",{style:{textAlign:"center",color:"#f59e0b",marginTop:"0.5rem",fontSize:"0.9rem"},children:"Please log in to use the live chat feature"})]})]})]})})},j5=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,w5=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,E5=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,C0=g.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`,C5=g.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,T5=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,z5=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,A5=g(Wt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,M5=()=>{const[i,u]=w.useState(""),[c,s]=w.useState(""),[d,h]=w.useState(!1),[p,j]=w.useState(""),[v,y]=w.useState(""),T=Ut(),E=async O=>{O.preventDefault(),h(!0),j(""),y("");try{i==="admin@example.com"&&c==="admin123"?(y("Login successful!"),localStorage.setItem("adminToken","admin-secret-token"),setTimeout(()=>{T("/admin/dashboard")},1500)):j("Invalid credentials")}catch{j("Login failed. Please try again.")}finally{h(!1)}};return o.jsx(j5,{children:o.jsxs(w5,{children:[o.jsx(E5,{children:"Admin Login"}),o.jsxs("form",{onSubmit:E,children:[o.jsx(C0,{type:"email",placeholder:"Admin Email",value:i,onChange:O=>u(O.target.value),required:!0}),o.jsx(C0,{type:"password",placeholder:"Password",value:c,onChange:O=>s(O.target.value),required:!0}),p&&o.jsx(T5,{children:p}),v&&o.jsx(z5,{children:v}),o.jsx(C5,{type:"submit",disabled:d,children:d?"Logging in...":"Login"})]}),o.jsx(A5,{to:"/",children:"← Back to Home"})]})})},O5=g.div`
  background: #0f172a;
  color: white;
  min-height: 100vh;
`,R5=g.header`
  background: #1e293b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
`,D5=g.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  
  span {
    color: white;
  }
`,N5=g.nav`
  display: flex;
  gap: 1rem;
`,Cl=g.button`
  background: transparent;
  color: #94a3b8;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover, &.active {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }
`,_5=g.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #dc2626;
  }
`,U5=g.main`
  padding: 2rem;
`,T0=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,cn=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #334155;
`,ua=g.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`,sa=g.div`
  color: #94a3b8;
`,ca=g.h2`
  margin: 2rem 0 1rem;
  color: #10b981;
`,ki=g.table`
  width: 100%;
  border-collapse: collapse;
  background: #1e293b;
  border-radius: 0.5rem;
  overflow: hidden;
`,Yi=g.thead`
  background: #334155;
`,jt=g.tr`
  border-bottom: 1px solid #334155;
  
  &:last-child {
    border-bottom: none;
  }
`,Te=g.th`
  padding: 1rem;
  text-align: left;
  color: #94a3b8;
`,fe=g.td`
  padding: 1rem;
`,Ho=g.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &.active {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }
  
  &.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
  
  &.suspended {
    background: rgba(156, 163, 175, 0.2);
    color: #9ca3af;
  }
  
  &.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }
`,Kt=g.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin: 0 0.25rem;
  
  &.edit {
    background: #3b82f6;
    color: white;
  }
  
  &.delete {
    background: #ef4444;
    color: white;
  }
  
  &.suspend {
    background: #f59e0b;
    color: white;
  }
  
  &.activate {
    background: #10b981;
    color: white;
  }
  
  &:hover {
    opacity: 0.8;
  }
`,z0=g.div`
  text-align: center;
  padding: 2rem;
  color: #94a3b8;
`,A0=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,M0=g.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 500px;
`,O0=g.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`,B5=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Co=g.label`
  font-weight: 500;
  color: #cbd5e1;
`,R0=g.input`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`,D0=g.select`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`,L5=g.button`
  padding: 1rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,H5=g(Ho)`
  &.confirmed {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }
  
  &.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }
  
  &.rejected {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
`,To=g(Kt)`
  &.confirm {
    background: #10b981;
    color: white;
  }
  
  &.reject {
    background: #ef4444;
    color: white;
  }
`,k5=g.div`
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`,Y5=g.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${i=>i.isOwn?"#0f172a":"#334155"};
  border-left: 3px solid ${i=>i.isOwn?"#10b981":"#3b82f6"};
`,G5=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
`,q5=g.div`
  color: #cbd5e1;
`,Q5=g.form`
  display: flex;
  margin-top: 1rem;
`,X5=g.input`
  flex: 1;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
`,V5=g.button`
  background: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: #059669;
  }
`,Z5=()=>{const[i,u]=w.useState("dashboard"),[c,s]=w.useState({totalUsers:0,activeServers:0,pendingPayments:0,systemStatus:"Operational"}),[d,h]=w.useState([]),[p,j]=w.useState([]),[v,y]=w.useState([]),[T,E]=w.useState([]),[O,B]=w.useState(!0),[k,Y]=w.useState(!1),[Z,G]=w.useState(null),[q,X]=w.useState({name:"",email:"",plan:"Free",status:"active"}),[ae,V]=w.useState(!1),[K,Q]=w.useState(null),[he,be]=w.useState([]),[at,Pe]=w.useState(!1),[Ze,Lt]=w.useState(""),[mt,st]=w.useState(null),[N,$]=w.useState(!1),[te,se]=w.useState([]),[me,x]=w.useState(null),[U,J]=w.useState(""),[F,ie]=w.useState(!1),re=Ut();w.useEffect(()=>{if(!localStorage.getItem("adminToken")){re("/admin/login");return}ge(),Io(),ct()},[re]);const ge=async()=>{try{B(!0);const D=await fetch(`${He()}/api/admin/users`,{headers:{Authorization:"admin-secret-token"}});if(D.ok){const Ae=await D.json();h(Ae),s(Bn=>({...Bn,totalUsers:Ae.length}))}const P=await fetch(`${He()}/api/payment/history`,{headers:{Authorization:"admin-secret-token"}});if(P.ok){const Ae=await P.json();j(Ae.payments||[])}const ee=await fetch(`${He()}/api/messages`,{headers:{Authorization:"admin-secret-token"}});if(ee.ok){const Ae=await ee.json();y(Ae.messages||[])}E([{id:1,name:"Survival Server",user:"John Doe",status:"online",cpu:"45%",ram:"2.1GB",players:"12/20"},{id:2,name:"Creative World",user:"Jane Smith",status:"online",cpu:"22%",ram:"1.5GB",players:"3/10"},{id:3,name:"Skyblock Realm",user:"Bob Johnson",status:"offline",cpu:"0%",ram:"0GB",players:"0/15"},{id:4,name:"PvP Arena",user:"Alice Brown",status:"online",cpu:"68%",ram:"3.2GB",players:"18/20"}]),s(Ae=>({...Ae,activeServers:4,systemStatus:"All Systems Operational"}))}catch(D){console.error("Error loading data:",D)}finally{B(!1)}},Ye=()=>{localStorage.removeItem("adminToken"),re("/admin/login")},Ee=D=>{G(D),X({name:D.name,email:D.email,plan:D.plan,status:D.status}),Y(!0)},It=async D=>{if(window.confirm("Are you sure you want to delete this user? This action cannot be undone."))try{if((await fetch(`${He()}/api/admin/users/${D}`,{method:"DELETE",headers:{Authorization:"admin-secret-token"}})).ok){const ee=d.filter(Ae=>Ae.id!==D);h(ee),s(Ae=>({...Ae,totalUsers:ee.length}))}else alert("Failed to delete user")}catch(P){console.error("Error deleting user:",P),alert("Failed to delete user")}},Pt=D=>{const P=d.map(ee=>ee.id===D?{...ee,status:"suspended"}:ee);h(P)},ht=D=>{const P=d.map(ee=>ee.id===D?{...ee,status:"active"}:ee);h(P)},da=D=>{const{name:P,value:ee}=D.target;X(Ae=>({...Ae,[P]:ee}))},mn=async D=>{D.preventDefault();try{if((await fetch(`${He()}/api/admin/users/${Z.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify(q)})).ok){const ee=d.map(Ae=>Ae.id===Z.id?{...Ae,name:q.name,email:q.email,plan:q.plan,status:q.status}:Ae);h(ee),Y(!1),G(null)}else alert("Failed to update user")}catch(P){console.error("Error updating user:",P),alert("Failed to update user")}},Ua=async(D,P)=>{try{const ee=await fetch(`${He()}/api/payment/status/${D}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({status:P})});if(ee.ok){const Ae=await ee.json(),Bn=p.map(Pi=>Pi.id===D?Ae.paymentRecord:Pi);j(Bn)}else alert("Failed to update payment status")}catch(ee){console.error("Error updating payment status:",ee),alert("Failed to update payment status")}},Ba=async()=>{try{const D=await fetch(`${He()}/api/messages`,{headers:{Authorization:"admin-secret-token"}});if(D.ok){const P=await D.json();y(P.messages||[])}}catch(D){console.error("Error fetching messages:",D)}},Wo=async D=>{Pe(!0);try{const ee=await(await fetch(`${He()}/api/messages/payment/${D}`,{headers:{Authorization:"admin-secret-token","user-type":"admin"}})).json();ee.success?be(ee.messages):console.error("Failed to fetch payment messages:",ee.error)}catch(P){console.error("Error fetching payment messages:",P)}finally{Pe(!1)}},Ii=async D=>{if(D.preventDefault(),!(!Ze.trim()||!K))try{const ee=await(await fetch(`${He()}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({userId:K.userId,paymentId:K.id,message:Ze,userType:"admin"})})).json();ee.success?(be([...he,ee.message]),Lt(""),Ba()):console.error("Failed to send message:",ee.error)}catch(P){console.error("Error sending message:",P)}},kl=async D=>{console.log("Opening message modal for payment:",D),Q(D),V(!0),await Wo(D.id)},Yl=async D=>{try{const ee=await(await fetch(`${He()}/api/messages/chat/${D}/close`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"}})).json();ee.success?(Ba(),V(!1),Q(null),alert("Chat closed successfully")):(console.error("Failed to close chat:",ee.error),alert("Failed to close chat"))}catch(P){console.error("Error closing chat:",P),alert("Error closing chat")}},Gl=async D=>{try{const ee=await(await fetch(`${He()}/api/payment/${D}/hide`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"}})).json();ee.success?(ge(),alert("Payment hidden from user successfully")):(console.error("Failed to hide payment:",ee.error),alert("Failed to hide payment"))}catch(P){console.error("Error hiding payment:",P),alert("Error hiding payment")}},Io=async()=>{try{const D=await fetch(`${He()}/api/admin/settings`,{headers:{Authorization:"admin-secret-token"}});if(D.ok){const P=await D.json();P.success&&P.settings.qrCode&&st(P.settings.qrCode)}}catch(D){console.error("Error loading admin settings:",D)}},Po=async D=>{try{$(!0);const P=await fetch(`${He()}/api/admin/settings`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({qrCode:D})});if(P.ok){const ee=await P.json();ee.success?(st(D),alert("QR Code uploaded and saved successfully!")):alert("Failed to save QR Code: "+(ee.error||"Unknown error"))}else alert("Failed to save QR Code")}catch(P){console.error("Error saving QR code:",P),alert("Network error. Failed to save QR Code.")}finally{$(!1)}},ct=async()=>{try{ie(!0);const D=await fetch(`${He()}/api/admin/support/messages`,{headers:{Authorization:"admin-secret-token"}});if(D.ok){const P=await D.json();P.success&&se(P.messages)}}catch(D){console.error("Error loading support messages:",D)}finally{ie(!1)}},eu=async(D,P)=>{try{const ee=await fetch(`${He()}/api/admin/support/messages`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({userId:D,message:P})});if(ee.ok){const Ae=await ee.json();if(Ae.success)return se(Bn=>[...Bn,Ae.message]),J(""),!0}return!1}catch(ee){return console.error("Error sending support reply:",ee),!1}};return o.jsxs(O5,{children:[o.jsxs(R5,{children:[o.jsxs(D5,{children:["Nexter",o.jsx("span",{children:"Cloud"})," Admin"]}),o.jsxs(N5,{children:[o.jsx(Cl,{active:i==="dashboard",onClick:()=>u("dashboard"),children:"Dashboard"}),o.jsx(Cl,{active:i==="users",onClick:()=>u("users"),children:"Users"}),o.jsx(Cl,{active:i==="servers",onClick:()=>u("servers"),children:"Servers"}),o.jsx(Cl,{active:i==="settings",onClick:()=>u("settings"),children:"Settings"}),o.jsx(Cl,{active:i==="payments",onClick:()=>u("payments"),children:"Payments"}),o.jsx(Cl,{active:i==="messages",onClick:()=>u("messages"),children:"Messages"})]}),o.jsx(_5,{onClick:Ye,children:"Logout"})]}),o.jsx(U5,{children:O?o.jsx(z0,{children:"Loading dashboard data..."}):o.jsxs(o.Fragment,{children:[i==="dashboard"&&o.jsxs(o.Fragment,{children:[o.jsxs(T0,{children:[o.jsxs(cn,{children:[o.jsx(ua,{children:c.totalUsers}),o.jsx(sa,{children:"Total Users"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:c.activeServers}),o.jsx(sa,{children:"Active Servers"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:c.pendingPayments}),o.jsx(sa,{children:"Pending Payments"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:o.jsx(Ho,{className:"active",children:c.systemStatus})}),o.jsx(sa,{children:"System Status"})]})]}),o.jsx(ca,{children:"Recent Activity"}),o.jsxs(ki,{children:[o.jsx(Yi,{children:o.jsxs(jt,{children:[o.jsx(Te,{children:"User"}),o.jsx(Te,{children:"Action"}),o.jsx(Te,{children:"Server"}),o.jsx(Te,{children:"Time"})]})}),o.jsxs("tbody",{children:[o.jsxs(jt,{children:[o.jsx(fe,{children:"John Doe"}),o.jsx(fe,{children:"Started server"}),o.jsx(fe,{children:"Survival Server"}),o.jsx(fe,{children:"2 hours ago"})]}),o.jsxs(jt,{children:[o.jsx(fe,{children:"Jane Smith"}),o.jsx(fe,{children:"Created server"}),o.jsx(fe,{children:"Creative World"}),o.jsx(fe,{children:"5 hours ago"})]}),o.jsxs(jt,{children:[o.jsx(fe,{children:"Alice Brown"}),o.jsx(fe,{children:"Stopped server"}),o.jsx(fe,{children:"SkyBlock Realm"}),o.jsx(fe,{children:"1 day ago"})]})]})]})]}),i==="users"&&o.jsxs(o.Fragment,{children:[o.jsx(ca,{children:"User Management"}),o.jsxs(ki,{children:[o.jsx(Yi,{children:o.jsxs(jt,{children:[o.jsx(Te,{children:"ID"}),o.jsx(Te,{children:"Name"}),o.jsx(Te,{children:"Email"}),o.jsx(Te,{children:"Plan"}),o.jsx(Te,{children:"Status"}),o.jsx(Te,{children:"Servers"}),o.jsx(Te,{children:"Actions"})]})}),o.jsx("tbody",{children:d.length>0?d.map(D=>o.jsxs(jt,{children:[o.jsx(fe,{children:D.id}),o.jsx(fe,{children:D.name}),o.jsx(fe,{children:D.email}),o.jsx(fe,{children:D.plan}),o.jsx(fe,{children:o.jsx(Ho,{className:D.status,children:D.status})}),o.jsx(fe,{children:D.servers}),o.jsxs(fe,{children:[o.jsx(Kt,{className:"edit",onClick:()=>Ee(D),children:"Edit"}),D.status==="suspended"?o.jsx(Kt,{className:"activate",onClick:()=>ht(D.id),children:"Activate"}):o.jsx(Kt,{className:"suspend",onClick:()=>Pt(D.id),children:"Suspend"}),o.jsx(Kt,{className:"delete",onClick:()=>It(D.id),children:"Delete"})]})]},D.id)):o.jsx(jt,{children:o.jsx(fe,{colSpan:"7",style:{textAlign:"center"},children:"No users found"})})})]})]}),i==="servers"&&o.jsxs(o.Fragment,{children:[o.jsx(ca,{children:"Server Management"}),o.jsxs(ki,{children:[o.jsx(Yi,{children:o.jsxs(jt,{children:[o.jsx(Te,{children:"ID"}),o.jsx(Te,{children:"Name"}),o.jsx(Te,{children:"User"}),o.jsx(Te,{children:"Status"}),o.jsx(Te,{children:"CPU"}),o.jsx(Te,{children:"RAM"}),o.jsx(Te,{children:"Players"}),o.jsx(Te,{children:"Actions"})]})}),o.jsx("tbody",{children:T.length>0?T.map(D=>o.jsxs(jt,{children:[o.jsx(fe,{children:D.id}),o.jsx(fe,{children:D.name}),o.jsx(fe,{children:D.user}),o.jsx(fe,{children:o.jsx(Ho,{className:D.status==="online"?"active":"inactive",children:D.status})}),o.jsx(fe,{children:D.cpu}),o.jsx(fe,{children:D.ram}),o.jsx(fe,{children:D.players}),o.jsxs(fe,{children:[o.jsx(Kt,{className:"edit",children:"Start"}),o.jsx(Kt,{className:"suspend",children:"Stop"}),o.jsx(Kt,{className:"delete",children:"Delete"})]})]},D.id)):o.jsx(jt,{children:o.jsx(fe,{colSpan:"8",style:{textAlign:"center"},children:"No servers found"})})})]})]}),i==="payments"&&o.jsxs(o.Fragment,{children:[o.jsx(ca,{children:"Payment Management"}),O?o.jsx(z0,{children:"Loading payments..."}):o.jsxs(ki,{children:[o.jsx(Yi,{children:o.jsxs(jt,{children:[o.jsx(Te,{children:"Transaction ID"}),o.jsx(Te,{children:"User"}),o.jsx(Te,{children:"Plan"}),o.jsx(Te,{children:"Amount"}),o.jsx(Te,{children:"Date"}),o.jsx(Te,{children:"Status"}),o.jsx(Te,{children:"Actions"})]})}),o.jsx("tbody",{children:p.map(D=>o.jsxs(jt,{children:[o.jsx(fe,{children:D.transactionId}),o.jsx(fe,{children:D.userId}),o.jsx(fe,{children:D.plan}),o.jsxs(fe,{children:["$",D.amount]}),o.jsx(fe,{children:new Date(D.timestamp).toLocaleString()}),o.jsx(fe,{children:o.jsx(H5,{className:D.status,children:D.status})}),o.jsxs(fe,{children:[D.status==="pending"&&o.jsxs(o.Fragment,{children:[o.jsx(To,{className:"confirm",onClick:()=>Ua(D.id,"confirmed"),children:"Confirm"}),o.jsx(To,{className:"reject",onClick:()=>Ua(D.id,"rejected"),children:"Reject"})]}),o.jsx(To,{className:"edit",onClick:()=>kl(D),style:{marginLeft:"0.5rem"},children:"Message User"}),(D.status==="confirmed"||D.status==="rejected")&&o.jsx(To,{className:"delete",onClick:()=>Gl(D.id),style:{marginLeft:"0.5rem"},children:"Hide Payment"})]})]},D.id))})]})]}),i==="messages"&&o.jsxs(o.Fragment,{children:[o.jsx(ca,{children:"Support Chat"}),o.jsxs("div",{style:{display:"flex",gap:"2rem",marginTop:"1rem"},children:[o.jsxs("div",{style:{flex:1,background:"#1e293b",borderRadius:"0.5rem",padding:"1rem",maxHeight:"500px",overflowY:"auto"},children:[o.jsx("h3",{children:"Users with Support Requests"}),usersLoading?o.jsx("p",{children:"Loading users..."}):o.jsxs(ki,{children:[o.jsx(Yi,{children:o.jsxs(jt,{children:[o.jsx(Te,{children:"User"}),o.jsx(Te,{children:"Email"}),o.jsx(Te,{children:"Last Message"}),o.jsx(Te,{children:"Actions"})]})}),o.jsx("tbody",{children:d.filter(D=>te.some(P=>P.userId==D.id)).map(D=>{const P=te.filter(ee=>ee.userId==D.id).sort((ee,Ae)=>new Date(Ae.timestamp)-new Date(ee.timestamp))[0];return o.jsxs(jt,{children:[o.jsx(fe,{children:D.name}),o.jsx(fe,{children:D.email}),o.jsx(fe,{children:P?o.jsxs("div",{children:[o.jsxs("div",{children:[P.message.substring(0,30),"..."]}),o.jsx("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:new Date(P.timestamp).toLocaleString()})]}):"No messages"}),o.jsx(fe,{children:o.jsx(Kt,{className:"edit",onClick:()=>x(D),children:"Chat"})})]},D.id)})})]})]}),o.jsx("div",{style:{flex:2,background:"#1e293b",borderRadius:"0.5rem",padding:"1rem",display:"flex",flexDirection:"column"},children:me?o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{borderBottom:"1px solid #334155",paddingBottom:"1rem",marginBottom:"1rem"},children:[o.jsxs("h3",{children:["Chat with ",me.name]}),o.jsx("p",{style:{color:"#94a3b8"},children:me.email})]}),o.jsx("div",{style:{flex:1,overflowY:"auto",maxHeight:"300px",marginBottom:"1rem"},children:te.filter(D=>D.userId==me.id).sort((D,P)=>new Date(D.timestamp)-new Date(P.timestamp)).map(D=>o.jsx("div",{style:{marginBottom:"1rem",textAlign:D.userType==="admin"?"right":"left"},children:o.jsxs("div",{style:{display:"inline-block",background:D.userType==="admin"?"#10b981":"#334155",color:D.userType==="admin"?"#000":"#fff",padding:"0.5rem 1rem",borderRadius:"0.5rem",maxWidth:"80%"},children:[o.jsx("div",{style:{fontSize:"0.8rem",opacity:.8},children:D.userType==="admin"?"You (Admin)":me.name}),o.jsx("div",{children:D.message}),o.jsx("div",{style:{fontSize:"0.7rem",marginTop:"0.25rem"},children:new Date(D.timestamp).toLocaleString()})]})},D.id))}),o.jsx("div",{style:{borderTop:"1px solid #334155",paddingTop:"1rem"},children:o.jsx("form",{onSubmit:async D=>{D.preventDefault(),U.trim()&&await eu(me.id,U)&&ct()},children:o.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[o.jsx("input",{type:"text",value:U,onChange:D=>J(D.target.value),placeholder:"Type your reply...",style:{flex:1,padding:"0.5rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"0.375rem",color:"white"}}),o.jsx(Kt,{type:"submit",className:"edit",disabled:!U.trim(),children:"Send"})]})})})]}):o.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"2rem"},children:"Select a user to start chatting"})})]})]}),i==="settings"&&o.jsxs(o.Fragment,{children:[o.jsx(ca,{children:"System Settings"}),o.jsxs(cn,{children:[o.jsx("h3",{children:"Platform Configuration"}),o.jsx("p",{children:"Manage hosting plans, resource limits, and platform settings."}),o.jsx(Kt,{className:"edit",style:{marginTop:"1rem"},children:"Configure Plans"})]}),o.jsx(ca,{style:{marginTop:"2rem"},children:"System Monitoring"}),o.jsxs(T0,{children:[o.jsxs(cn,{children:[o.jsx(ua,{children:"99.8%"}),o.jsx(sa,{children:"Uptime"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:"4.2 TB"}),o.jsx(sa,{children:"Disk Usage"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:"68%"}),o.jsx(sa,{children:"Server Load"})]}),o.jsxs(cn,{children:[o.jsx(ua,{children:"24/7"}),o.jsx(sa,{children:"Support Status"})]})]}),o.jsx(ca,{style:{marginTop:"2rem"},children:"Payment QR Code"}),o.jsxs(cn,{children:[o.jsx("h3",{children:"Upload Payment QR Code"}),o.jsx("p",{children:"Upload the QR code that users will see on the payout page."}),o.jsxs("div",{style:{margin:"1rem 0"},children:[o.jsx("input",{type:"file",accept:"image/*",onChange:D=>{const P=D.target.files[0];if(P){const ee=new FileReader;ee.onload=Ae=>{Po(Ae.target.result)},ee.readAsDataURL(P)}},style:{padding:"0.5rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"0.375rem",color:"white",width:"100%",marginBottom:"1rem"},disabled:N}),N&&o.jsx("p",{children:"Saving QR code..."})]}),o.jsx("p",{children:"Current QR Code:"}),o.jsx("div",{style:{width:"200px",height:"200px",margin:"1rem auto",border:"1px dashed #334155",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",background:"#0f172a"},children:mt?o.jsx("img",{src:mt,alt:"Current Payment QR Code",style:{maxWidth:"100%",maxHeight:"100%"}}):o.jsx("span",{style:{color:"#94a3b8"},children:"No QR Code Set"})})]})]})]})}),k&&Z&&o.jsx(A0,{children:o.jsxs(M0,{children:[o.jsx(O0,{onClick:()=>Y(!1),children:"×"}),o.jsx("h2",{children:"Edit User"}),o.jsxs(B5,{onSubmit:mn,children:[o.jsxs("div",{children:[o.jsx(Co,{htmlFor:"name",children:"Name"}),o.jsx(R0,{type:"text",id:"name",name:"name",value:q.name,onChange:da,required:!0})]}),o.jsxs("div",{children:[o.jsx(Co,{htmlFor:"email",children:"Email"}),o.jsx(R0,{type:"email",id:"email",name:"email",value:q.email,onChange:da,required:!0})]}),o.jsxs("div",{children:[o.jsx(Co,{htmlFor:"plan",children:"Plan"}),o.jsxs(D0,{id:"plan",name:"plan",value:q.plan,onChange:da,required:!0,children:[o.jsx("option",{value:"Free",children:"Free"}),o.jsx("option",{value:"Basic",children:"Basic"}),o.jsx("option",{value:"Premium",children:"Premium"})]})]}),o.jsxs("div",{children:[o.jsx(Co,{htmlFor:"status",children:"Status"}),o.jsxs(D0,{id:"status",name:"status",value:q.status,onChange:da,required:!0,children:[o.jsx("option",{value:"active",children:"Active"}),o.jsx("option",{value:"inactive",children:"Inactive"}),o.jsx("option",{value:"suspended",children:"Suspended"})]})]}),o.jsx(L5,{type:"submit",children:"Update User"})]})]})}),ae&&K&&o.jsx(A0,{children:o.jsxs(M0,{children:[o.jsx(O0,{onClick:()=>V(!1),children:"×"}),o.jsxs("h3",{children:["Messages for Payment ",K.transactionId]}),at?o.jsx("div",{style:{textAlign:"center",color:"#cbd5e1",padding:"2rem"},children:"Loading messages..."}):o.jsxs(o.Fragment,{children:[o.jsx(k5,{children:he.length===0?o.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"1rem"},children:"No messages yet."}):he.map(D=>o.jsxs(Y5,{isOwn:D.userType==="admin",children:[o.jsxs(G5,{children:[o.jsx("span",{children:D.userType==="admin"?"You (Admin)":"User"}),o.jsx("span",{children:new Date(D.timestamp).toLocaleString()})]}),o.jsx(q5,{children:D.message})]},D.id))}),o.jsxs(Q5,{onSubmit:Ii,children:[o.jsx(X5,{type:"text",value:Ze,onChange:D=>Lt(D.target.value),placeholder:"Type your message to user..."}),o.jsx(V5,{type:"submit",children:"Send"})]}),o.jsx("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"flex-end"},children:o.jsx(Kt,{className:"delete",onClick:()=>Yl(K.id),children:"Close Chat"})})]})]})})]})},$5=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,J5=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,K5=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,N0=g.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`,F5=g.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,W5=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,I5=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,P5=g.p`
  text-align: center;
  color: #94a3b8;
  margin-top: 1.5rem;
  
  button {
    background: none;
    border: none;
    color: #10b981;
    cursor: pointer;
    font-weight: 600;
  }
`,eS=g(Wt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,tS=({onLogin:i})=>{const[u,c]=w.useState(""),[s,d]=w.useState(""),[h,p]=w.useState(!1),[j,v]=w.useState(""),[y,T]=w.useState(""),E=Ut(),O=async B=>{B.preventDefault(),p(!0),v(""),T("");try{const Y=await(await fetch(`${He()}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:s})})).json();Y.success?(T("Login successful!"),localStorage.setItem("userToken",Y.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(Y.user)),i(Y.user),setTimeout(()=>{E("/")},1500)):v(Y.error||"Login failed. Please try again.")}catch(k){console.error("Login error:",k),v("Login failed. Please try again.")}finally{p(!1)}};return o.jsx($5,{children:o.jsxs(J5,{children:[o.jsx(K5,{children:"Login to Your Account"}),o.jsxs("form",{onSubmit:O,children:[o.jsx(N0,{type:"email",placeholder:"Email Address",value:u,onChange:B=>c(B.target.value),required:!0}),o.jsx(N0,{type:"password",placeholder:"Password",value:s,onChange:B=>d(B.target.value),required:!0}),j&&o.jsx(W5,{children:j}),y&&o.jsx(I5,{children:y}),o.jsx(F5,{type:"submit",disabled:h,children:h?"Logging in...":"Login"})]}),o.jsxs(P5,{children:["Don't have an account? ",o.jsx("button",{onClick:()=>E("/signup"),children:"Sign Up"})]}),o.jsx(eS,{to:"/",children:"← Back to Home"})]})})},nS=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,aS=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,lS=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,zo=g.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
  
  &:focus {
    outline: none;
    border-color: #10b981;
  }
`,iS=g.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,rS=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,oS=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,uS=g.p`
  text-align: center;
  color: #94a3b8;
  margin-top: 1.5rem;
  
  button {
    background: none;
    border: none;
    color: #10b981;
    cursor: pointer;
    font-weight: 600;
  }
`,sS=g(Wt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,cS=({onLogin:i})=>{const[u,c]=w.useState(""),[s,d]=w.useState(""),[h,p]=w.useState(""),[j,v]=w.useState(""),[y,T]=w.useState(!1),[E,O]=w.useState(""),[B,k]=w.useState(""),Y=Ut(),Z=async G=>{if(G.preventDefault(),T(!0),O(""),k(""),h!==j){O("Passwords do not match"),T(!1);return}try{const X=await(await fetch(`${He()}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,email:s,password:h})})).json();X.success?(k("Account created successfully!"),localStorage.setItem("userToken",X.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(X.user)),i(X.user),setTimeout(()=>{Y("/")},1500)):O(X.error||"Signup failed. Please try again.")}catch(q){console.error("Signup error:",q),O("Signup failed. Please try again.")}finally{T(!1)}};return o.jsx(nS,{children:o.jsxs(aS,{children:[o.jsx(lS,{children:"Create an Account"}),o.jsxs("form",{onSubmit:Z,children:[o.jsx(zo,{type:"text",placeholder:"Full Name",value:u,onChange:G=>c(G.target.value),required:!0}),o.jsx(zo,{type:"email",placeholder:"Email Address",value:s,onChange:G=>d(G.target.value),required:!0}),o.jsx(zo,{type:"password",placeholder:"Password",value:h,onChange:G=>p(G.target.value),required:!0}),o.jsx(zo,{type:"password",placeholder:"Confirm Password",value:j,onChange:G=>v(G.target.value),required:!0}),E&&o.jsx(rS,{children:E}),B&&o.jsx(oS,{children:B}),o.jsx(iS,{type:"submit",disabled:y,children:y?"Creating account...":"Sign Up"})]}),o.jsxs(uS,{children:["Already have an account? ",o.jsx("button",{onClick:()=>Y("/login"),children:"Login"})]}),o.jsx(sS,{to:"/",children:"← Back to Home"})]})})},fS=Bt`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`,dS=Bt`
  0% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
`,mS=Bt`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,hS=g.div`
  background: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 4rem;
`,gS=g.nav`
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
`,pS=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,yS=g.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ff9d;
  text-decoration: none;
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    color: white;
  }
`,bS=g.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Gi=g.li`
  margin: 0 1rem;
`,qi=g.a`
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #00ff9d;
  }
  
  &.active {
    color: #00ff9d;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #00ff9d;
    }
  }
`,vS=g.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Lg=g.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
`,xS=g(Lg)`
  background: transparent;
  color: #00ff9d;
  border: 2px solid #00ff9d;
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
  }
`,SS=g(Lg)`
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  color: #000000;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
  }
`,jS=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,wS=g.span`
  @media (max-width: 768px) {
    display: none;
  }
`,ES=g.button`
  background: transparent;
  color: #cbd5e1;
  border: 1px solid rgba(51, 65, 85, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ff9d;
    border-color: #00ff9d;
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.2);
  }
`,_0=g.button`
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
  }
`,CS=g.main`
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
`,TS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
`,zS=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,AS=g.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`,MS=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=g.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  animation: ${mS} 2s infinite;
`,RS=g.span`
  color: #10b981;
  font-weight: 500;
  font-size: 0.9rem;
`,DS=g.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,NS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
  animation: ${dS} 3s ease-in-out infinite;
  overflow: hidden;
  height: fit-content;
`,_S=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,US=g.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,BS=g.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 1.5rem;
  font-family: 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', monospace;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 255, 157, 0.05) 50%
    );
    background-size: 100% 3px;
    animation: ${fS} 8s linear infinite;
    z-index: 2;
    pointer-events: none;
  }
`,LS=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Fc=g.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`,HS=g(Fc)`
  background: #ef4444;
  box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
`,kS=g(Fc)`
  background: #f59e0b;
  box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
`,YS=g(Fc)`
  background: #10b981;
  box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
`,GS=g.div`
  color: #9ca3af;
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', monospace;
`,qS=g.div`
  color: #10b981;
  line-height: 1.6;
  height: 350px;
  overflow-y: auto;
  font-size: 0.875rem;
`,QS=g.div`
  margin-bottom: 0.125rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  &.info {
    color: #60a5fa;
    text-shadow: 0 0 2px rgba(96, 165, 250, 0.5);
  }
  
  &.success {
    color: #34d399;
    text-shadow: 0 0 2px rgba(52, 211, 153, 0.5);
  }
  
  &.warning {
    color: #fbbf24;
    text-shadow: 0 0 2px rgba(251, 191, 36, 0.5);
  }
  
  &.error {
    color: #f87171;
    text-shadow: 0 0 2px rgba(248, 113, 113, 0.5);
  }
  
  &.player {
    color: #a78bfa;
    text-shadow: 0 0 2px rgba(167, 139, 250, 0.5);
  }
  
  &:last-child {
    color: #9ca3af;
  }
`,XS=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-row: 1;
  }
`,VS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`,ZS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,$S=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,JS=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Ao=g.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`,Mo=g.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  
  &.players {
    color: #60a5fa;
  }
  
  &.cpu {
    color: #fbbf24;
  }
  
  &.memory {
    color: #a78bfa;
  }
  
  &.uptime {
    color: #34d399;
  }
`,Oo=g.div`
  font-size: 0.8rem;
  color: #9ca3af;
`,KS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`,FS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,WS=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,IS=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,PS=g.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  
  &:last-child {
    border-bottom: none;
  }
`,e3=g.span`
  color: #cbd5e1;
`,t3=g.span`
  color: #34d399;
  font-size: 0.8rem;
`,n3=()=>{const i=Ut(),[u,c]=w.useState(!1),[s,d]=w.useState(null);w.useEffect(()=>{const y=localStorage.getItem("userToken"),T=localStorage.getItem("userData");y&&T&&(c(!0),d(JSON.parse(T)))},[]);const h=()=>{c(!1),d(null),localStorage.removeItem("userToken"),localStorage.removeItem("userData"),i("/")},p=[{text:"$ Server initializing...",type:"info"},{text:'$ Loading world: "SurvivalWorld"',type:"info"},{text:"$ Plugins loaded: 12",type:"info"},{text:"$ Starting Minecraft server on port 25565",type:"info"},{text:"$ Server started successfully!",type:"success"},{text:"[Player] Steve joined the game",type:"player"},{text:"[Player] Alex joined the game",type:"player"},{text:"[Steve] Hello everyone!",type:"player"},{text:"[Warning] Memory usage at 78%",type:"warning"},{text:"[Player] Alex left the game",type:"player"},{text:"[Player] Mike joined the game",type:"player"},{text:"$ World auto-saved",type:"info"},{text:"[Player] Steve: How do I craft a pickaxe?",type:"player"},{text:"[Player] Mike: Press E to open inventory",type:"player"},{text:""}],j={players:12,cpu:"45%",memory:"2.1GB",uptime:"2d 14h"},v=[{name:"Steve",status:"Online"},{name:"Alex",status:"Online"},{name:"Mike",status:"Online"},{name:"Jenny",status:"Online"},{name:"Tom",status:"Online"},{name:"Sarah",status:"Online"}];return o.jsxs(hS,{children:[o.jsx(gS,{children:o.jsxs(pS,{children:[o.jsxs(yS,{children:["Nexter",o.jsx("span",{children:"Cloud"})]}),o.jsxs(bS,{children:[o.jsx(Gi,{children:o.jsx(qi,{href:"/",children:"Home"})}),o.jsx(Gi,{children:o.jsx(qi,{href:"/#features",children:"Features"})}),o.jsx(Gi,{children:o.jsx(qi,{href:"/#pricing",children:"Pricing"})}),o.jsx(Gi,{children:o.jsx(qi,{href:"/support",children:"Support"})}),o.jsx(Gi,{children:o.jsx(qi,{href:"/about",children:"About"})})]}),u&&s?o.jsxs(jS,{children:[o.jsxs(wS,{children:["Welcome, ",s.name]}),o.jsx(ES,{onClick:h,children:"Logout"}),o.jsx(_0,{onClick:()=>i("/admin/login"),children:"Admin"})]}):o.jsxs(vS,{children:[o.jsx(xS,{onClick:()=>i("/login"),children:"Login"}),o.jsx(SS,{onClick:()=>i("/signup"),children:"Sign Up"}),o.jsx(_0,{onClick:()=>i("/admin/login"),children:"Admin"})]})]})}),o.jsxs(CS,{children:[o.jsx(TS,{children:o.jsxs(zS,{children:[o.jsx(AS,{children:"SurvivalWorld"}),o.jsxs(MS,{children:[o.jsx(OS,{}),o.jsx(RS,{children:"ONLINE"})]})]})}),o.jsxs(DS,{children:[o.jsxs(NS,{children:[o.jsx(_S,{children:o.jsx(US,{children:"Live Server Console"})}),o.jsxs(BS,{children:[o.jsxs(LS,{children:[o.jsx(HS,{}),o.jsx(kS,{}),o.jsx(YS,{}),o.jsx(GS,{children:"server-console.log"})]}),o.jsx(qS,{children:p.map((y,T)=>o.jsx(QS,{className:y.type,children:y.text},T))})]})]}),o.jsxs(XS,{children:[o.jsxs(VS,{children:[o.jsx(ZS,{children:o.jsx($S,{children:"Server Stats"})}),o.jsxs(JS,{children:[o.jsxs(Ao,{children:[o.jsx(Mo,{className:"players",children:j.players}),o.jsx(Oo,{children:"Players"})]}),o.jsxs(Ao,{children:[o.jsx(Mo,{className:"cpu",children:j.cpu}),o.jsx(Oo,{children:"CPU"})]}),o.jsxs(Ao,{children:[o.jsx(Mo,{className:"memory",children:j.memory}),o.jsx(Oo,{children:"Memory"})]}),o.jsxs(Ao,{children:[o.jsx(Mo,{className:"uptime",children:j.uptime}),o.jsx(Oo,{children:"Uptime"})]})]})]}),o.jsxs(KS,{children:[o.jsx(FS,{children:o.jsx(WS,{children:"Online Players"})}),o.jsx(IS,{children:v.map((y,T)=>o.jsxs(PS,{children:[o.jsx(e3,{children:y.name}),o.jsx(t3,{children:y.status})]},T))})]})]})]})]})]})},a3=()=>o.jsxs("div",{style:{padding:"2rem",background:"#0f172a",color:"#ffffff",textAlign:"center",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o.jsx("h1",{style:{color:"#00ff9d",fontSize:"3rem",marginBottom:"1rem"},children:"Test Page"}),o.jsx("p",{style:{fontSize:"1.5rem",color:"#cbd5e1",marginBottom:"2rem"},children:"If you can see this, the React app is working!"}),o.jsxs("div",{style:{background:"#1e293b",padding:"2rem",borderRadius:"0.5rem",border:"1px solid #334155"},children:[o.jsx("h2",{style:{color:"#00ffff",marginBottom:"1rem"},children:"Server Locations"}),o.jsxs("ul",{style:{textAlign:"left",color:"#e2e8f0"},children:[o.jsx("li",{children:"India - 12ms"}),o.jsx("li",{children:"USA - 8ms"}),o.jsx("li",{children:"Germany - 25ms"}),o.jsx("li",{children:"Singapore - 5ms"})]})]})]}),l3=g.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,i3=g.form`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #334155;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,r3=g.h2`
  text-align: center;
  color: #00ff9d;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,U0=g.div`
  margin-bottom: 1rem;
`,B0=g.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #cbd5e1;
  font-weight: 500;
`,L0=g.input`
  width: 100%;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00ff9d;
    box-shadow: 0 0 0 3px rgba(0, 255, 157, 0.1);
  }
`,o3=g.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,Hg=g.div`
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  text-align: center;
`,u3=g(Hg)`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  color: #10b981;
`,s3=g(Hg)`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #ef4444;
`,c3=()=>{const i=Ut(),[u,c]=w.useState({email:"",password:""}),[s,d]=w.useState(!1),[h,p]=w.useState(""),[j,v]=w.useState(""),y=E=>{const{name:O,value:B}=E.target;c(k=>({...k,[O]:B}))},T=async E=>{if(E.preventDefault(),d(!0),p(""),v(""),!u.email||!u.password){p("Please enter both email and password"),d(!1);return}try{const O=await fetch(`${He()}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u.email.toLowerCase().trim(),password:u.password})}),B=await O.json();O.ok&&B.success?(localStorage.setItem("userToken",B.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(B.user)),v("Login successful! Redirecting to payment page..."),setTimeout(()=>{i("/payout")},2e3)):p(B.error||"Invalid credentials")}catch{p("Network error. Please try again.")}finally{d(!1)}};return o.jsx(l3,{children:o.jsxs(i3,{onSubmit:T,children:[o.jsx(r3,{children:"Billing Authentication"}),h&&o.jsx(s3,{children:h}),j&&o.jsx(u3,{children:j}),o.jsxs(U0,{children:[o.jsx(B0,{htmlFor:"email",children:"Email"}),o.jsx(L0,{id:"email",type:"text",name:"email",value:u.email,onChange:y,placeholder:"Enter your email",autoComplete:"off",spellCheck:"false"})]}),o.jsxs(U0,{children:[o.jsx(B0,{htmlFor:"password",children:"Password"}),o.jsx(L0,{id:"password",type:"password",name:"password",value:u.password,onChange:y,placeholder:"Enter your password",autoComplete:"off"})]}),o.jsx(o3,{type:"submit",disabled:s,children:s?"Processing...":"Continue to Payment"})]})})},f3=()=>{const[i,u]=w.useState(300),[c,s]=w.useState(!1),[d,h]=w.useState(!1),[p,j]=w.useState(null),[v,y]=w.useState(!0),T=Ut(),E=k=>{const Y=Math.floor(k/60),Z=k%60;return`${Y.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`},O=async()=>{try{const k=await fetch(`${He()}/api/admin/settings`);if(k.ok){const Y=await k.json();Y.settings&&Y.settings.qrCode&&j(Y.settings.qrCode)}}catch(k){console.error("Error loading QR code:",k)}finally{y(!1)}};w.useEffect(()=>{O();const k=setInterval(()=>{u(Y=>Y<=1?(clearInterval(k),h(!0),0):Y-1)},1e3);return()=>clearInterval(k)},[]);const B=async()=>{s(!0);try{const k=JSON.parse(localStorage.getItem("userData"));if(!k){alert("User not found. Please log in again."),T("/login");return}const Y="TXN-"+Date.now()+"-"+Math.floor(Math.random()*1e3),G=await(await fetch(`${He()}/api/payment/record`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:k.id,plan:"Starter",amount:5,transactionId:Y})})).json();G.success?T("/payment-history"):alert(G.error||"Error recording payment. Please contact support.")}catch(k){console.error("Error recording payment:",k),alert("Network error. Please try again.")}finally{s(!1)}};return o.jsx("div",{style:{padding:"5rem 2rem",background:"#000000",color:"white",minHeight:"100vh"},children:o.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",background:"#111827",borderRadius:"0.5rem",padding:"2rem",border:"1px solid #334155",textAlign:"center"},children:[o.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"2rem",color:"#10b981"},children:"Complete Your Payment"}),d?o.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid #ef4444",color:"#ef4444",padding:"1rem",borderRadius:"0.375rem",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Payment Failed"}),o.jsx("p",{children:"Payment was not completed within the 5-minute time limit. Please try again."}),o.jsx("button",{onClick:()=>{h(!1),u(300)},style:{padding:"0.5rem 1rem",background:"#ef4444",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"1rem",fontWeight:"600",cursor:"pointer",marginTop:"1rem"},children:"Try Again"})]}):o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Scan the QR code below with your payment app to complete the transaction"}),o.jsxs("p",{style:{color:"#f59e0b",fontWeight:"bold",marginTop:"1rem"},children:["Time remaining: ",E(i)]}),o.jsx("div",{style:{width:"300px",height:"300px",background:"#1e293b",border:"2px dashed #334155",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",margin:"2rem auto",color:"#94a3b8",fontSize:"1.2rem"},children:v?"Loading QR Code...":p?o.jsx("img",{src:p,alt:"Payment QR Code",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}):"QR Code Will Be Placed Here by Admin"}),o.jsx("p",{children:"After completing the payment, your service will be activated shortly."})]}),!d&&o.jsx("button",{onClick:B,disabled:c,style:{padding:"1rem 2rem",background:"linear-gradient(90deg, #10b981, #059669)",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"1rem",fontWeight:"600",cursor:c?"not-allowed":"pointer",transition:"all 0.3s ease",marginTop:"1rem",opacity:c?.7:1},children:c?"Processing...":"I Have Completed Payment"})]})})},H0=g.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem;
`,k0=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #334155;
`,Y0=g.h2`
  color: #00ff9d;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`,d3=g.button`
  background: #0f172a;
  color: #cbd5e1;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    background: #1e293b;
  }
`,m3=g.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,Tl=g.th`
  background: #0f172a;
  color: #00ff9d;
  text-align: left;
  padding: 1rem;
  border: 1px solid #334155;
`,zl=g.td`
  padding: 1rem;
  border: 1px solid #334155;
  color: #cbd5e1;
`,h3=g.tr`
  &:nth-child(even) {
    background: #1e293b;
  }
  
  &:nth-child(odd) {
    background: #0f172a;
  }
`,g3=g.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &.confirmed {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }
  
  &.pending {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }
  
  &.rejected {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }
`,p3=g.button`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,y3=g.div`
  text-align: center;
  color: #94a3b8;
  padding: 2rem;
`,G0=g.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  
  &:hover {
    background: #2563eb;
  }
`,b3=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,v3=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #334155;
`,x3=g.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: #94a3b8;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: #cbd5e1;
  }
`,S3=g.div`
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`,j3=g.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${i=>i.isOwn?"#0f172a":"#334155"};
  border-left: 3px solid ${i=>i.isOwn?"#10b981":"#3b82f6"};
`,w3=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
`,E3=g.div`
  color: #cbd5e1;
`,C3=g.form`
  display: flex;
  margin-top: 1rem;
`,T3=g.input`
  flex: 1;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
`,z3=g.button`
  background: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: #059669;
  }
`,A3=()=>{const i=Ut(),[u,c]=w.useState([]),[s,d]=w.useState(!0),[h,p]=w.useState(!1),[j,v]=w.useState(null),[y,T]=w.useState([]),[E,O]=w.useState(""),[B,k]=w.useState(!1);w.useEffect(()=>{Y()},[]);const Y=async()=>{try{const V=JSON.parse(localStorage.getItem("userData"));if(!V){i("/login");return}const K=V.id,Q=await fetch(`${He()}/api/payment/history/${K}`);if(Q.ok){const he=await Q.json();c(he.payments||[])}else console.error("Failed to load payment history")}catch(V){console.error("Error loading payment history:",V)}finally{d(!1)}},Z=async V=>{k(!0);try{const Q=await(await fetch(`${He()}/api/messages/payment/${V}`,{headers:{"user-type":"user"}})).json();Q.success&&T(Q.messages)}catch(K){console.error("Error fetching messages:",K)}finally{k(!1)}},G=async V=>{if(V.preventDefault(),!(!E.trim()||!j))try{const K=JSON.parse(localStorage.getItem("userData"));if(!K)return;const he=await(await fetch(`${He()}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:K.id,paymentId:j.id,message:E,userType:"user"})})).json();he.success&&(T([...y,he.message]),O(""))}catch(K){console.error("Error sending message:",K)}},q=async V=>{v(V),p(!0),await Z(V.id)},X=V=>{const K={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(V).toLocaleDateString(void 0,K)},ae=V=>{const K=`
Minecraft Server Hosting Receipt
================================

Transaction ID: ${V.transactionId}
Date: ${X(V.timestamp)}
Plan: ${V.plan}
Amount: $${V.amount}

Customer Information:
Name: ${user?.name}
Email: ${user?.email}

Thank you for your purchase!
    `.trim(),Q=new Blob([K],{type:"text/plain"}),he=URL.createObjectURL(Q),be=document.createElement("a");be.href=he,be.download=`receipt-${V.transactionId}.txt`,document.body.appendChild(be),be.click(),document.body.removeChild(be),URL.revokeObjectURL(he)};return s?o.jsx(H0,{children:o.jsxs(k0,{children:[o.jsx(Y0,{children:"Payment History"}),o.jsx("div",{style:{textAlign:"center",color:"#cbd5e1"},children:"Loading..."})]})}):o.jsxs(H0,{children:[o.jsxs(k0,{children:[o.jsx(d3,{onClick:()=>i(-1),children:"← Back"}),o.jsx(Y0,{children:"Payment History"}),u.length===0?o.jsx(y3,{children:"No payments found."}):o.jsxs(m3,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(Tl,{children:"Transaction ID"}),o.jsx(Tl,{children:"Date"}),o.jsx(Tl,{children:"Plan"}),o.jsx(Tl,{children:"Amount"}),o.jsx(Tl,{children:"Status"}),o.jsx(Tl,{children:"Actions"})]})}),o.jsx("tbody",{children:u.map(V=>o.jsxs(h3,{children:[o.jsx(zl,{children:V.transactionId}),o.jsx(zl,{children:X(V.timestamp)}),o.jsx(zl,{children:V.plan}),o.jsxs(zl,{children:["$",V.amount]}),o.jsx(zl,{children:o.jsx(g3,{className:V.status,children:V.status})}),o.jsx(zl,{children:V.status==="confirmed"?o.jsx(G0,{onClick:()=>q(V),children:"View Chat"}):o.jsxs(o.Fragment,{children:[o.jsx(p3,{onClick:()=>ae(V),children:"Download Receipt"}),o.jsx(G0,{onClick:()=>q(V),children:"Message Admin"})]})})]},V.id))})]})]}),h&&j&&o.jsx(b3,{children:o.jsxs(v3,{children:[o.jsx(x3,{onClick:()=>p(!1),children:"×"}),o.jsxs("h3",{children:["Messages for Payment ",j.transactionId]}),B?o.jsx("div",{style:{textAlign:"center",color:"#cbd5e1",padding:"2rem"},children:"Loading messages..."}):o.jsxs(o.Fragment,{children:[o.jsx(S3,{children:y.length===0?o.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"1rem"},children:"No messages yet. Start a conversation with the admin."}):y.map(V=>o.jsxs(j3,{isOwn:V.userType==="user",children:[o.jsxs(w3,{children:[o.jsx("span",{children:V.userType==="user"?"You":"Admin"}),o.jsx("span",{children:X(V.timestamp)})]}),o.jsx(E3,{children:V.message})]},V.id))}),o.jsxs(C3,{onSubmit:G,children:[o.jsx(T3,{type:"text",value:E,onChange:V=>O(V.target.value),placeholder:"Type your message to admin..."}),o.jsx(z3,{type:"submit",children:"Send"})]})]})]})})]})};function M3(){const[i,u]=w.useState(!1),[c,s]=w.useState(null);w.useEffect(()=>{const p=localStorage.getItem("userToken"),j=localStorage.getItem("userData");p&&j&&(u(!0),s(JSON.parse(j)))},[]);const d=p=>{u(!0),s(p)},h=()=>{u(!1),s(null),localStorage.removeItem("userToken"),localStorage.removeItem("userData")};return o.jsx("div",{className:"App",children:o.jsxs(ab,{children:[o.jsx(wt,{path:"/",element:o.jsxs(o.Fragment,{children:[o.jsx(xo,{isAuthenticated:i,user:c,onLogout:h}),o.jsx(ux,{}),o.jsx(vx,{}),o.jsx(i2,{}),o.jsx(M2,{}),o.jsx($x,{}),o.jsx(jo,{})]})}),o.jsx(wt,{path:"/pricing",element:o.jsxs(o.Fragment,{children:[o.jsx(xo,{isAuthenticated:i,user:c,onLogout:h}),o.jsx(Nx,{}),o.jsx(jo,{})]})}),o.jsx(wt,{path:"/about",element:o.jsxs(o.Fragment,{children:[o.jsx(xo,{isAuthenticated:i,user:c,onLogout:h}),o.jsx(I2,{}),o.jsx(jo,{})]})}),o.jsx(wt,{path:"/support",element:o.jsxs(o.Fragment,{children:[o.jsx(xo,{isAuthenticated:i,user:c,onLogout:h}),o.jsx(S5,{}),o.jsx(jo,{})]})}),o.jsx(wt,{path:"/login",element:o.jsx(tS,{onLogin:d})}),o.jsx(wt,{path:"/signup",element:o.jsx(cS,{onLogin:d})}),o.jsx(wt,{path:"/admin/login",element:o.jsx(M5,{})}),o.jsx(wt,{path:"/admin/dashboard",element:o.jsx(Z5,{})}),o.jsx(wt,{path:"/dashboard",element:o.jsx(n3,{})}),o.jsx(wt,{path:"/billing",element:o.jsx(c3,{})}),o.jsx(wt,{path:"/payout",element:o.jsx(f3,{})}),o.jsx(wt,{path:"/payment-history",element:o.jsx(A3,{})}),o.jsx(wt,{path:"/test",element:o.jsx(a3,{})})]})})}dy.createRoot(document.getElementById("root")).render(o.jsx(Ml.StrictMode,{children:o.jsx(Tb,{children:o.jsx(M3,{})})}));
