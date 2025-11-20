(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function f(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=f(d);fetch(d.href,m)}})();function iy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var es={exports:{}},Ei={};var Vm;function ry(){if(Vm)return Ei;Vm=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,d,m){var y=null;if(m!==void 0&&(y=""+m),d.key!==void 0&&(y=""+d.key),"key"in d){m={};for(var j in d)j!=="key"&&(m[j]=d[j])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:y,ref:d!==void 0?d:null,props:m}}return Ei.Fragment=o,Ei.jsx=f,Ei.jsxs=f,Ei}var Zm;function uy(){return Zm||(Zm=1,es.exports=ry()),es.exports}var u=uy(),ts={exports:{}},ue={};var $m;function oy(){if($m)return ue;$m=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.iterator;function H(x){return x===null||typeof x!="object"?null:(x=N&&x[N]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function k(x,_,K){this.props=x,this.context=_,this.refs=Z,this.updater=K||G}k.prototype.isReactComponent={},k.prototype.setState=function(x,_){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,_,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=k.prototype;function Q(x,_,K){this.props=x,this.context=_,this.refs=Z,this.updater=K||G}var ne=Q.prototype=new Y;ne.constructor=Q,X(ne,k.prototype),ne.isPureReactComponent=!0;var V=Array.isArray;function F(){}var q={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function ye(x,_,K){var J=K.ref;return{$$typeof:i,type:x,key:_,ref:J!==void 0?J:null,props:K}}function Fe(x,_){return ye(x.type,_,x.props)}function Ie(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function Pe(x){var _={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(K){return _[K]})}var Bt=/\/+/g;function ft(x,_){return typeof x=="object"&&x!==null&&x.key!=null?Pe(""+x.key):_.toString(36)}function ct(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(F,F):(x.status="pending",x.then(function(_){x.status==="pending"&&(x.status="fulfilled",x.value=_)},function(_){x.status==="pending"&&(x.status="rejected",x.reason=_)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function R(x,_,K,J,le){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var me=!1;if(x===null)me=!0;else switch(ie){case"bigint":case"string":case"number":me=!0;break;case"object":switch(x.$$typeof){case i:case o:me=!0;break;case T:return me=x._init,R(me(x._payload),_,K,J,le)}}if(me)return le=le(x),me=J===""?"."+ft(x,0):J,V(le)?(K="",me!=null&&(K=me.replace(Bt,"$&/")+"/"),R(le,_,K,"",function(B){return B})):le!=null&&(Ie(le)&&(le=Fe(le,K+(le.key==null||x&&x.key===le.key?"":(""+le.key).replace(Bt,"$&/")+"/")+me)),_.push(le)),1;me=0;var ke=J===""?".":J+":";if(V(x))for(var Ee=0;Ee<x.length;Ee++)J=x[Ee],ie=ke+ft(J,Ee),me+=R(J,_,K,ie,le);else if(Ee=H(x),typeof Ee=="function")for(x=Ee.call(x),Ee=0;!(J=x.next()).done;)J=J.value,ie=ke+ft(J,Ee++),me+=R(J,_,K,ie,le);else if(ie==="object"){if(typeof x.then=="function")return R(ct(x),_,K,J,le);throw _=String(x),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return me}function $(x,_,K){if(x==null)return x;var J=[],le=0;return R(x,J,"","",function(ie){return _.call(K,ie,le++)}),J}function ee(x){if(x._status===-1){var _=x._result;_=_(),_.then(function(K){(x._status===0||x._status===-1)&&(x._status=1,x._result=K)},function(K){(x._status===0||x._status===-1)&&(x._status=2,x._result=K)}),x._status===-1&&(x._status=0,x._result=_)}if(x._status===1)return x._result.default;throw x._result}var fe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Se={map:$,forEach:function(x,_,K){$(x,function(){_.apply(this,arguments)},K)},count:function(x){var _=0;return $(x,function(){_++}),_},toArray:function(x){return $(x,function(_){return _})||[]},only:function(x){if(!Ie(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=w,ue.Children=Se,ue.Component=k,ue.Fragment=f,ue.Profiler=d,ue.PureComponent=Q,ue.StrictMode=c,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return q.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,_,K){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var J=X({},x.props),le=x.key;if(_!=null)for(ie in _.key!==void 0&&(le=""+_.key),_)!he.call(_,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&_.ref===void 0||(J[ie]=_[ie]);var ie=arguments.length-2;if(ie===1)J.children=K;else if(1<ie){for(var me=Array(ie),ke=0;ke<ie;ke++)me[ke]=arguments[ke+2];J.children=me}return ye(x.type,le,J)},ue.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ue.createElement=function(x,_,K){var J,le={},ie=null;if(_!=null)for(J in _.key!==void 0&&(ie=""+_.key),_)he.call(_,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(le[J]=_[J]);var me=arguments.length-2;if(me===1)le.children=K;else if(1<me){for(var ke=Array(me),Ee=0;Ee<me;Ee++)ke[Ee]=arguments[Ee+2];le.children=ke}if(x&&x.defaultProps)for(J in me=x.defaultProps,me)le[J]===void 0&&(le[J]=me[J]);return ye(x,ie,le)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:j,render:x}},ue.isValidElement=Ie,ue.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:ee}},ue.memo=function(x,_){return{$$typeof:p,type:x,compare:_===void 0?null:_}},ue.startTransition=function(x){var _=q.T,K={};q.T=K;try{var J=x(),le=q.S;le!==null&&le(K,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,fe)}catch(ie){fe(ie)}finally{_!==null&&K.types!==null&&(_.types=K.types),q.T=_}},ue.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ue.use=function(x){return q.H.use(x)},ue.useActionState=function(x,_,K){return q.H.useActionState(x,_,K)},ue.useCallback=function(x,_){return q.H.useCallback(x,_)},ue.useContext=function(x){return q.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,_){return q.H.useDeferredValue(x,_)},ue.useEffect=function(x,_){return q.H.useEffect(x,_)},ue.useEffectEvent=function(x){return q.H.useEffectEvent(x)},ue.useId=function(){return q.H.useId()},ue.useImperativeHandle=function(x,_,K){return q.H.useImperativeHandle(x,_,K)},ue.useInsertionEffect=function(x,_){return q.H.useInsertionEffect(x,_)},ue.useLayoutEffect=function(x,_){return q.H.useLayoutEffect(x,_)},ue.useMemo=function(x,_){return q.H.useMemo(x,_)},ue.useOptimistic=function(x,_){return q.H.useOptimistic(x,_)},ue.useReducer=function(x,_,K){return q.H.useReducer(x,_,K)},ue.useRef=function(x){return q.H.useRef(x)},ue.useState=function(x){return q.H.useState(x)},ue.useSyncExternalStore=function(x,_,K){return q.H.useSyncExternalStore(x,_,K)},ue.useTransition=function(){return q.H.useTransition()},ue.version="19.2.0",ue}var Km;function Ds(){return Km||(Km=1,ts.exports=oy()),ts.exports}var C=Ds();const jl=iy(C);var ns={exports:{}},Ti={},as={exports:{}},ls={};var Jm;function cy(){return Jm||(Jm=1,(function(i){function o(R,$){var ee=R.length;R.push($);e:for(;0<ee;){var fe=ee-1>>>1,Se=R[fe];if(0<d(Se,$))R[fe]=$,R[ee]=Se,ee=fe;else break e}}function f(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var $=R[0],ee=R.pop();if(ee!==$){R[0]=ee;e:for(var fe=0,Se=R.length,x=Se>>>1;fe<x;){var _=2*(fe+1)-1,K=R[_],J=_+1,le=R[J];if(0>d(K,ee))J<Se&&0>d(le,K)?(R[fe]=le,R[J]=ee,fe=J):(R[fe]=K,R[_]=ee,fe=_);else if(J<Se&&0>d(le,ee))R[fe]=le,R[J]=ee,fe=J;else break e}}return $}function d(R,$){var ee=R.sortIndex-$.sortIndex;return ee!==0?ee:R.id-$.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var y=Date,j=y.now();i.unstable_now=function(){return y.now()-j}}var b=[],p=[],T=1,w=null,N=3,H=!1,G=!1,X=!1,Z=!1,k=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ne(R){for(var $=f(p);$!==null;){if($.callback===null)c(p);else if($.startTime<=R)c(p),$.sortIndex=$.expirationTime,o(b,$);else break;$=f(p)}}function V(R){if(X=!1,ne(R),!G)if(f(b)!==null)G=!0,F||(F=!0,Pe());else{var $=f(p);$!==null&&ct(V,$.startTime-R)}}var F=!1,q=-1,he=5,ye=-1;function Fe(){return Z?!0:!(i.unstable_now()-ye<he)}function Ie(){if(Z=!1,F){var R=i.unstable_now();ye=R;var $=!0;try{e:{G=!1,X&&(X=!1,Y(q),q=-1),H=!0;var ee=N;try{t:{for(ne(R),w=f(b);w!==null&&!(w.expirationTime>R&&Fe());){var fe=w.callback;if(typeof fe=="function"){w.callback=null,N=w.priorityLevel;var Se=fe(w.expirationTime<=R);if(R=i.unstable_now(),typeof Se=="function"){w.callback=Se,ne(R),$=!0;break t}w===f(b)&&c(b),ne(R)}else c(b);w=f(b)}if(w!==null)$=!0;else{var x=f(p);x!==null&&ct(V,x.startTime-R),$=!1}}break e}finally{w=null,N=ee,H=!1}$=void 0}}finally{$?Pe():F=!1}}}var Pe;if(typeof Q=="function")Pe=function(){Q(Ie)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,ft=Bt.port2;Bt.port1.onmessage=Ie,Pe=function(){ft.postMessage(null)}}else Pe=function(){k(Ie,0)};function ct(R,$){q=k(function(){R(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_next=function(R){switch(N){case 1:case 2:case 3:var $=3;break;default:$=N}var ee=N;N=$;try{return R()}finally{N=ee}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ee=N;N=R;try{return $()}finally{N=ee}},i.unstable_scheduleCallback=function(R,$,ee){var fe=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?fe+ee:fe):ee=fe,R){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,R={id:T++,callback:$,priorityLevel:R,startTime:ee,expirationTime:Se,sortIndex:-1},ee>fe?(R.sortIndex=ee,o(p,R),f(b)===null&&R===f(p)&&(X?(Y(q),q=-1):X=!0,ct(V,ee-fe))):(R.sortIndex=Se,o(b,R),G||H||(G=!0,F||(F=!0,Pe()))),R},i.unstable_shouldYield=Fe,i.unstable_wrapCallback=function(R){var $=N;return function(){var ee=N;N=$;try{return R.apply(this,arguments)}finally{N=ee}}}})(ls)),ls}var Fm;function sy(){return Fm||(Fm=1,as.exports=cy()),as.exports}var is={exports:{}},st={};var Wm;function fy(){if(Wm)return st;Wm=1;var i=Ds();function o(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,p,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:b,containerInfo:p,implementation:T}}var y=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,st.createPortal=function(b,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(b,p,null,T)},st.flushSync=function(b){var p=y.T,T=c.p;try{if(y.T=null,c.p=2,b)return b()}finally{y.T=p,c.p=T,c.d.f()}},st.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},st.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},st.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var T=p.as,w=j(T,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:N,fetchPriority:H}):T==="script"&&c.d.X(b,{crossOrigin:w,integrity:N,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},st.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=j(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},st.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,w=j(T,p.crossOrigin);c.d.L(b,T,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},st.preloadModule=function(b,p){if(typeof b=="string")if(p){var T=j(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},st.requestFormReset=function(b){c.d.r(b)},st.unstable_batchedUpdates=function(b,p){return b(p)},st.useFormState=function(b,p,T){return y.H.useFormState(b,p,T)},st.useFormStatus=function(){return y.H.useHostTransitionStatus()},st.version="19.2.0",st}var Im;function dy(){if(Im)return is.exports;Im=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),is.exports=fy(),is.exports}var Pm;function hy(){if(Pm)return Ti;Pm=1;var i=sy(),o=Ds(),f=dy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return b(l),e;if(r===a)return b(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=r;else{for(var s=!1,h=l.child;h;){if(h===n){s=!0,n=l,a=r;break}if(h===a){s=!0,a=l,n=r;break}h=h.sibling}if(!s){for(h=r.child;h;){if(h===n){s=!0,n=r,a=l;break}if(h===a){s=!0,a=r,n=l;break}h=h.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,N=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),Ie=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=Ie&&e[Ie]||e["@@iterator"],typeof e=="function"?e:null)}var Bt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case k:return"Profiler";case Z:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case Q:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:ft(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return ft(e(t))}catch{}}return null}var ct=Array.isArray,R=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function x(e){return{current:e}}function _(e){0>Se||(e.current=fe[Se],fe[Se]=null,Se--)}function K(e,t){Se++,fe[Se]=e.current,e.current=t}var J=x(null),le=x(null),ie=x(null),me=x(null);function ke(e,t){switch(K(ie,t),K(le,e),K(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mm(t),e=gm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(J),K(J,e)}function Ee(){_(J),_(le),_(ie)}function B(e){e.memoizedState!==null&&K(me,e);var t=J.current,n=gm(t,e.type);t!==n&&(K(le,e),K(J,n))}function re(e){le.current===e&&(_(J),_(le)),me.current===e&&(_(me),xi._currentValue=ee)}var te,_e;function Ft(e){if(te===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);te=t&&t[1]||"",_e=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+_e}var Da=!1;function Lu(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(D){var M=D}Reflect.construct(e,[],L)}else{try{L.call()}catch(D){M=D}e.call(L.prototype)}}else{try{throw Error()}catch(D){M=D}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(D){if(D&&M&&typeof D.stack=="string")return[D.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),s=r[0],h=r[1];if(s&&h){var v=s.split(`
`),A=h.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===A.length)for(a=v.length-1,l=A.length-1;1<=a&&0<=l&&v[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==A[l]){var O=`
`+v[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=l);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ft(n):""}function Bg(e,t){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return e.child!==t&&t!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Lu(e.type,!1);case 11:return Lu(e.type.render,!1);case 1:return Lu(e.type,!0);case 31:return Ft("Activity");default:return""}}function Xs(e){try{var t="",n=null;do t+=Bg(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Hu=Object.prototype.hasOwnProperty,ku=i.unstable_scheduleCallback,Yu=i.unstable_cancelCallback,Lg=i.unstable_shouldYield,Hg=i.unstable_requestPaint,wt=i.unstable_now,kg=i.unstable_getCurrentPriorityLevel,Vs=i.unstable_ImmediatePriority,Zs=i.unstable_UserBlockingPriority,qi=i.unstable_NormalPriority,Yg=i.unstable_LowPriority,$s=i.unstable_IdlePriority,Gg=i.log,qg=i.unstable_setDisableYieldValue,Ol=null,Et=null;function Nn(e){if(typeof Gg=="function"&&qg(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Ol,e)}catch{}}var Tt=Math.clz32?Math.clz32:Vg,Qg=Math.log,Xg=Math.LN2;function Vg(e){return e>>>=0,e===0?32:31-(Qg(e)/Xg|0)|0}var Qi=256,Xi=262144,Vi=4194304;function oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=oa(a):(s&=h,s!==0?l=oa(s):n||(n=h&~e,n!==0&&(l=oa(n))))):(h=a&~r,h!==0?l=oa(h):s!==0?l=oa(s):n||(n=a&~e,n!==0&&(l=oa(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function Nl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ks(){var e=Vi;return Vi<<=1,(Vi&62914560)===0&&(Vi=4194304),e}function Gu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $g(e,t,n,a,l,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(n=s&~n;0<n;){var O=31-Tt(n),L=1<<O;h[O]=0,v[O]=-1;var M=A[O];if(M!==null)for(A[O]=null,O=0;O<M.length;O++){var D=M[O];D!==null&&(D.lane&=-536870913)}n&=~L}a!==0&&Js(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Js(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Tt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Tt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Ws(e,t){var n=t&-t;return n=(n&42)!==0?1:qu(n),(n&(e.suspendedLanes|t))!==0?0:n}function qu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Hm(e.type))}function Ps(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var _n=Math.random().toString(36).slice(2),lt="__reactFiber$"+_n,ht="__reactProps$"+_n,Ra="__reactContainer$"+_n,Xu="__reactEvents$"+_n,Kg="__reactListeners$"+_n,Jg="__reactHandles$"+_n,ef="__reactResources$"+_n,Ul="__reactMarker$"+_n;function Vu(e){delete e[lt],delete e[ht],delete e[Xu],delete e[Kg],delete e[Jg]}function Oa(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ra]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jm(e);e!==null;){if(n=e[lt])return n;e=jm(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[lt]||e[Ra]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function _a(e){var t=e[ef];return t||(t=e[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ul]=!0}var tf=new Set,nf={};function ca(e,t){Ua(e,t),Ua(e+"Capture",t)}function Ua(e,t){for(nf[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var Fg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),af={},lf={};function Wg(e){return Hu.call(lf,e)?!0:Hu.call(af,e)?!1:Fg.test(e)?lf[e]=!0:(af[e]=!0,!1)}function $i(e,t,n){if(Wg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ki(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ig(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zu(e){if(!e._valueTracker){var t=rf(e)?"checked":"value";e._valueTracker=Ig(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=rf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pg=/[\n"\\]/g;function Ht(e){return e.replace(Pg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $u(e,t,n,a,l,r,s,h){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Ku(e,s,Lt(t)):n!=null?Ku(e,s,Lt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Lt(h):e.removeAttribute("name")}function of(e,t,n,a,l,r,s,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Zu(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Zu(e)}function Ku(e,t,n){t==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ba(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function cf(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function sf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(ct(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Zu(e)}function La(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ff(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ep.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function df(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ff(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&ff(e,r,t[r])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return np.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Fu=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,ka=null;function hf(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if($u(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ht]||null;if(!l)throw Error(c(90));$u(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&uf(a)}break e;case"textarea":cf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ba(e,!!n.multiple,t,!1)}}}var Iu=!1;function mf(e,t,n){if(Iu)return e(t,n);Iu=!0;try{var a=e(t);return a}finally{if(Iu=!1,(Ha!==null||ka!==null)&&(Lr(),Ha&&(t=Ha,e=ka,ka=Ha=null,hf(t),e)))for(t=0;t<e.length;t++)hf(e[t])}}function Ll(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ht]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(hn)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{Pu=!1}var Un=null,eo=null,Wi=null;function gf(){if(Wi)return Wi;var e,t=eo,n=t.length,a,l="value"in Un?Un.value:Un.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===l[r-a];a++);return Wi=l.slice(e,1<a?1-a:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function pf(){return!1}function mt(e){function t(n,a,l,r,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pi:pf,this.isPropagationStopped=pf,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=mt(sa),kl=w({},sa,{view:0,detail:0}),ap=mt(kl),to,no,Yl,tr=w({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(to=e.screenX-Yl.screenX,no=e.screenY-Yl.screenY):no=to=0,Yl=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),yf=mt(tr),lp=w({},tr,{dataTransfer:0}),ip=mt(lp),rp=w({},kl,{relatedTarget:0}),ao=mt(rp),up=w({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),op=mt(up),cp=w({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sp=mt(cp),fp=w({},sa,{data:0}),vf=mt(fp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mp[e])?!!t[e]:!1}function lo(){return gp}var pp=w({},kl,{key:function(e){if(e.key){var t=dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yp=mt(pp),vp=w({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=mt(vp),bp=w({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),xp=mt(bp),Sp=w({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=mt(Sp),wp=w({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=mt(wp),Tp=w({},sa,{newState:0,oldState:0}),Cp=mt(Tp),zp=[9,13,27,32],io=hn&&"CompositionEvent"in window,Gl=null;hn&&"documentMode"in document&&(Gl=document.documentMode);var Ap=hn&&"TextEvent"in window&&!Gl,xf=hn&&(!io||Gl&&8<Gl&&11>=Gl),Sf=" ",jf=!1;function wf(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function Mp(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(jf=!0,Sf);case"textInput":return e=t.data,e===Sf&&jf?null:e;default:return null}}function Dp(e,t){if(Ya)return e==="compositionend"||!io&&wf(e,t)?(e=gf(),Wi=eo=Un=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xf&&t.locale!=="ko"?null:t.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rp[e.type]:t==="textarea"}function Cf(e,t,n,a){Ha?ka?ka.push(a):ka=[a]:Ha=a,t=Xr(t,"onChange"),0<t.length&&(n=new er("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ql=null,Ql=null;function Op(e){om(e,0)}function nr(e){var t=Bl(e);if(uf(t))return e}function zf(e,t){if(e==="change")return t}var Af=!1;if(hn){var ro;if(hn){var uo="oninput"in document;if(!uo){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),uo=typeof Mf.oninput=="function"}ro=uo}else ro=!1;Af=ro&&(!document.documentMode||9<document.documentMode)}function Df(){ql&&(ql.detachEvent("onpropertychange",Rf),Ql=ql=null)}function Rf(e){if(e.propertyName==="value"&&nr(Ql)){var t=[];Cf(t,Ql,e,Wu(e)),mf(Op,t)}}function Np(e,t,n){e==="focusin"?(Df(),ql=t,Ql=n,ql.attachEvent("onpropertychange",Rf)):e==="focusout"&&Df()}function _p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nr(Ql)}function Up(e,t){if(e==="click")return nr(t)}function Bp(e,t){if(e==="input"||e==="change")return nr(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Lp;function Xl(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Hu.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var n=Of(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function _f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ji(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hp=hn&&"documentMode"in document&&11>=document.documentMode,Ga=null,co=null,Vl=null,so=!1;function Bf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;so||Ga==null||Ga!==Ji(a)||(a=Ga,"selectionStart"in a&&oo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vl&&Xl(Vl,a)||(Vl=a,a=Xr(co,"onSelect"),0<a.length&&(t=new er("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ga)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qa={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},fo={},Lf={};hn&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function da(e){if(fo[e])return fo[e];if(!qa[e])return e;var t=qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lf)return fo[e]=t[n];return e}var Hf=da("animationend"),kf=da("animationiteration"),Yf=da("animationstart"),kp=da("transitionrun"),Yp=da("transitionstart"),Gp=da("transitioncancel"),Gf=da("transitionend"),qf=new Map,ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ho.push("scrollEnd");function Wt(e,t){qf.set(e,t),ca(t,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],Qa=0,mo=0;function lr(){for(var e=Qa,t=mo=Qa=0;t<e;){var n=kt[t];kt[t++]=null;var a=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var r=kt[t];if(kt[t++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}r!==0&&Qf(n,l,r)}}function ir(e,t,n,a){kt[Qa++]=e,kt[Qa++]=t,kt[Qa++]=n,kt[Qa++]=a,mo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function go(e,t,n,a){return ir(e,t,n,a),rr(e)}function ha(e,t){return ir(e,null,null,t),rr(e)}function Qf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-Tt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function rr(e){if(50<hi)throw hi=0,Ec=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function qp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new qp(e,t,n,a)}function po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ur(e,t,n,a,l,r){var s=0;if(a=e,typeof e=="function")po(e)&&(s=1);else if(typeof e=="string")s=$1(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=zt(31,n,t,l),e.elementType=ye,e.lanes=r,e;case X:return ma(n.children,l,r,t);case Z:s=8,l|=24;break;case k:return e=zt(12,n,t,l|2),e.elementType=k,e.lanes=r,e;case V:return e=zt(13,n,t,l),e.elementType=V,e.lanes=r,e;case F:return e=zt(19,n,t,l),e.elementType=F,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:s=10;break e;case Y:s=9;break e;case ne:s=11;break e;case q:s=14;break e;case he:s=16,a=null;break e}s=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(s,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function ma(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function yo(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Vf(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function vo(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zf=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Zf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xs(t)},Zf.set(e,t),t)}return{value:e,source:t,stack:Xs(t)}}var Va=[],Za=0,or=null,Zl=0,Gt=[],qt=0,Bn=null,nn=1,an="";function gn(e,t){Va[Za++]=Zl,Va[Za++]=or,or=e,Zl=t}function $f(e,t,n){Gt[qt++]=nn,Gt[qt++]=an,Gt[qt++]=Bn,Bn=e;var a=nn;e=an;var l=32-Tt(a)-1;a&=~(1<<l),n+=1;var r=32-Tt(t)+l;if(30<r){var s=l-l%5;r=(a&(1<<s)-1).toString(32),a>>=s,l-=s,nn=1<<32-Tt(t)+l|n<<l|a,an=r+e}else nn=1<<r|n<<l|a,an=e}function bo(e){e.return!==null&&(gn(e,1),$f(e,1,0))}function xo(e){for(;e===or;)or=Va[--Za],Va[Za]=null,Zl=Va[--Za],Va[Za]=null;for(;e===Bn;)Bn=Gt[--qt],Gt[qt]=null,an=Gt[--qt],Gt[qt]=null,nn=Gt[--qt],Gt[qt]=null}function Kf(e,t){Gt[qt++]=nn,Gt[qt++]=an,Gt[qt++]=Bn,nn=t.id,an=t.overflow,Bn=e}var it=null,Ue=null,xe=!1,Ln=null,Qt=!1,So=Error(c(519));function Hn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $l(Yt(t,e)),So}function Jf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[lt]=e,t[ht]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)pe(gi[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),of(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),sf(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||dm(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Hn(e,!0)}function Ff(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:it=it.return}}function $a(e){if(e!==it)return!1;if(!xe)return Ff(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||kc(e.type,e.memoizedProps)),n=!n),n&&Ue&&Hn(e),Ff(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=Sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ue=Sm(e)}else t===27?(t=Ue,In(e.type)?(e=Xc,Xc=null,Ue=e):Ue=t):Ue=it?Vt(e.stateNode.nextSibling):null;return!0}function ga(){Ue=it=null,xe=!1}function jo(){var e=Ln;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),Ln=null),e}function $l(e){Ln===null?Ln=[e]:Ln.push(e)}var wo=x(null),pa=null,pn=null;function kn(e,t,n){K(wo,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=wo.current,_(wo)}function Eo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function To(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var v=0;v<t.length;v++)if(h.context===t[v]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),Eo(r.return,n,e),a||(s=null);break e}r=h.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Eo(s,n,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Ka(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var h=l.type;Ct(l.pendingProps.value,s.value)||(e!==null?e.push(h):e=[h])}}else if(l===me.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(xi):e=[xi])}l=l.return}e!==null&&To(t,e,n,a),t.flags|=262144}function cr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){pa=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Wf(pa,e)}function sr(e,t){return pa===null&&ya(e),Wf(e,t)}function Wf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(c(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var Qp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Xp=i.unstable_scheduleCallback,Vp=i.unstable_NormalPriority,Ve={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Qp,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&Xp(Vp,function(){e.controller.abort()})}var Jl=null,zo=0,Ja=0,Fa=null;function Zp(e,t){if(Jl===null){var n=Jl=[];zo=0,Ja=Dc(),Fa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zo++,t.then(If,If),t}function If(){if(--zo===0&&Jl!==null){Fa!==null&&(Fa.status="fulfilled");var e=Jl;Jl=null,Ja=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $p(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Pf=R.S;R.S=function(e,t){Bh=wt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zp(e,t),Pf!==null&&Pf(e,t)};var va=x(null);function Ao(){var e=va.current;return e!==null?e:Ne.pooledCache}function fr(e,t){t===null?K(va,va.current):K(va,t.pool)}function ed(){var e=Ao();return e===null?null:{parent:Ve._currentValue,pool:e}}var Wa=Error(c(460)),Mo=Error(c(474)),dr=Error(c(542)),hr={then:function(){}};function td(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ld(e),e}throw xa=t,Wa}}function ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xa=n,Wa):n}}var xa=null;function ad(){if(xa===null)throw Error(c(459));var e=xa;return xa=null,e}function ld(e){if(e===Wa||e===dr)throw Error(c(483))}var Ia=null,Fl=0;function mr(e){var t=Fl;return Fl+=1,Ia===null&&(Ia=[]),nd(Ia,e,t)}function Wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gr(e,t){throw t.$$typeof===N?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function id(e){function t(E,S){if(e){var z=E.deletions;z===null?(E.deletions=[S],E.flags|=16):z.push(S)}}function n(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function a(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function l(E,S){return E=mn(E,S),E.index=0,E.sibling=null,E}function r(E,S,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<S?(E.flags|=67108866,S):z):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function s(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function h(E,S,z,U){return S===null||S.tag!==6?(S=yo(z,E.mode,U),S.return=E,S):(S=l(S,z),S.return=E,S)}function v(E,S,z,U){var P=z.type;return P===X?O(E,S,z.props.children,U,z.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===he&&ba(P)===S.type)?(S=l(S,z.props),Wl(S,z),S.return=E,S):(S=ur(z.type,z.key,z.props,null,E.mode,U),Wl(S,z),S.return=E,S)}function A(E,S,z,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=vo(z,E.mode,U),S.return=E,S):(S=l(S,z.children||[]),S.return=E,S)}function O(E,S,z,U,P){return S===null||S.tag!==7?(S=ma(z,E.mode,U,P),S.return=E,S):(S=l(S,z),S.return=E,S)}function L(E,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=yo(""+S,E.mode,z),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return z=ur(S.type,S.key,S.props,null,E.mode,z),Wl(z,S),z.return=E,z;case G:return S=vo(S,E.mode,z),S.return=E,S;case he:return S=ba(S),L(E,S,z)}if(ct(S)||Pe(S))return S=ma(S,E.mode,z,null),S.return=E,S;if(typeof S.then=="function")return L(E,mr(S),z);if(S.$$typeof===Q)return L(E,sr(E,S),z);gr(E,S)}return null}function M(E,S,z,U){var P=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return P!==null?null:h(E,S,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return z.key===P?v(E,S,z,U):null;case G:return z.key===P?A(E,S,z,U):null;case he:return z=ba(z),M(E,S,z,U)}if(ct(z)||Pe(z))return P!==null?null:O(E,S,z,U,null);if(typeof z.then=="function")return M(E,S,mr(z),U);if(z.$$typeof===Q)return M(E,S,sr(E,z),U);gr(E,z)}return null}function D(E,S,z,U,P){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(z)||null,h(S,E,""+U,P);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case H:return E=E.get(U.key===null?z:U.key)||null,v(S,E,U,P);case G:return E=E.get(U.key===null?z:U.key)||null,A(S,E,U,P);case he:return U=ba(U),D(E,S,z,U,P)}if(ct(U)||Pe(U))return E=E.get(z)||null,O(S,E,U,P,null);if(typeof U.then=="function")return D(E,S,z,mr(U),P);if(U.$$typeof===Q)return D(E,S,z,sr(S,U),P);gr(S,U)}return null}function W(E,S,z,U){for(var P=null,je=null,I=S,ce=S=0,be=null;I!==null&&ce<z.length;ce++){I.index>ce?(be=I,I=null):be=I.sibling;var we=M(E,I,z[ce],U);if(we===null){I===null&&(I=be);break}e&&I&&we.alternate===null&&t(E,I),S=r(we,S,ce),je===null?P=we:je.sibling=we,je=we,I=be}if(ce===z.length)return n(E,I),xe&&gn(E,ce),P;if(I===null){for(;ce<z.length;ce++)I=L(E,z[ce],U),I!==null&&(S=r(I,S,ce),je===null?P=I:je.sibling=I,je=I);return xe&&gn(E,ce),P}for(I=a(I);ce<z.length;ce++)be=D(I,E,ce,z[ce],U),be!==null&&(e&&be.alternate!==null&&I.delete(be.key===null?ce:be.key),S=r(be,S,ce),je===null?P=be:je.sibling=be,je=be);return e&&I.forEach(function(aa){return t(E,aa)}),xe&&gn(E,ce),P}function ae(E,S,z,U){if(z==null)throw Error(c(151));for(var P=null,je=null,I=S,ce=S=0,be=null,we=z.next();I!==null&&!we.done;ce++,we=z.next()){I.index>ce?(be=I,I=null):be=I.sibling;var aa=M(E,I,we.value,U);if(aa===null){I===null&&(I=be);break}e&&I&&aa.alternate===null&&t(E,I),S=r(aa,S,ce),je===null?P=aa:je.sibling=aa,je=aa,I=be}if(we.done)return n(E,I),xe&&gn(E,ce),P;if(I===null){for(;!we.done;ce++,we=z.next())we=L(E,we.value,U),we!==null&&(S=r(we,S,ce),je===null?P=we:je.sibling=we,je=we);return xe&&gn(E,ce),P}for(I=a(I);!we.done;ce++,we=z.next())we=D(I,E,ce,we.value,U),we!==null&&(e&&we.alternate!==null&&I.delete(we.key===null?ce:we.key),S=r(we,S,ce),je===null?P=we:je.sibling=we,je=we);return e&&I.forEach(function(ly){return t(E,ly)}),xe&&gn(E,ce),P}function Oe(E,S,z,U){if(typeof z=="object"&&z!==null&&z.type===X&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case H:e:{for(var P=z.key;S!==null;){if(S.key===P){if(P=z.type,P===X){if(S.tag===7){n(E,S.sibling),U=l(S,z.props.children),U.return=E,E=U;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===he&&ba(P)===S.type){n(E,S.sibling),U=l(S,z.props),Wl(U,z),U.return=E,E=U;break e}n(E,S);break}else t(E,S);S=S.sibling}z.type===X?(U=ma(z.props.children,E.mode,U,z.key),U.return=E,E=U):(U=ur(z.type,z.key,z.props,null,E.mode,U),Wl(U,z),U.return=E,E=U)}return s(E);case G:e:{for(P=z.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(E,S.sibling),U=l(S,z.children||[]),U.return=E,E=U;break e}else{n(E,S);break}else t(E,S);S=S.sibling}U=vo(z,E.mode,U),U.return=E,E=U}return s(E);case he:return z=ba(z),Oe(E,S,z,U)}if(ct(z))return W(E,S,z,U);if(Pe(z)){if(P=Pe(z),typeof P!="function")throw Error(c(150));return z=P.call(z),ae(E,S,z,U)}if(typeof z.then=="function")return Oe(E,S,mr(z),U);if(z.$$typeof===Q)return Oe(E,S,sr(E,z),U);gr(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(E,S.sibling),U=l(S,z),U.return=E,E=U):(n(E,S),U=yo(z,E.mode,U),U.return=E,E=U),s(E)):n(E,S)}return function(E,S,z,U){try{Fl=0;var P=Oe(E,S,z,U);return Ia=null,P}catch(I){if(I===Wa||I===dr)throw I;var je=zt(29,I,null,E.mode);return je.lanes=U,je.return=E,je}finally{}}}var Sa=id(!0),rd=id(!1),Yn=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=rr(e),Qf(e,null,n),t}return ir(e,a,t,n),rr(e)}function Il(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fs(e,n)}}function Oo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var No=!1;function Pl(){if(No){var e=Fa;if(e!==null)throw e}}function ei(e,t,n,a){No=!1;var l=e.updateQueue;Yn=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,A=v.next;v.next=null,s===null?r=A:s.next=A,s=v;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==s&&(h===null?O.firstBaseUpdate=A:h.next=A,O.lastBaseUpdate=v))}if(r!==null){var L=l.baseState;s=0,O=A=v=null,h=r;do{var M=h.lane&-536870913,D=M!==h.lane;if(D?(ve&M)===M:(a&M)===M){M!==0&&M===Ja&&(No=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var W=e,ae=h;M=t;var Oe=n;switch(ae.tag){case 1:if(W=ae.payload,typeof W=="function"){L=W.call(Oe,L,M);break e}L=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ae.payload,M=typeof W=="function"?W.call(Oe,L,M):W,M==null)break e;L=w({},L,M);break e;case 2:Yn=!0}}M=h.callback,M!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[M]:D.push(M))}else D={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(A=O=D,v=L):O=O.next=D,s|=M;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;D=h,h=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);O===null&&(v=L),l.baseState=v,l.firstBaseUpdate=A,l.lastBaseUpdate=O,r===null&&(l.shared.lanes=0),$n|=s,e.lanes=s,e.memoizedState=L}}function ud(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function od(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ud(n[e],t)}var Pa=x(null),pr=x(0);function cd(e,t){e=Cn,K(pr,e),K(Pa,t),Cn=e|t.baseLanes}function _o(){K(pr,Cn),K(Pa,Pa.current)}function Uo(){Cn=pr.current,_(Pa),_(pr)}var At=x(null),Xt=null;function Qn(e){var t=e.alternate;K(Qe,Qe.current&1),K(At,e),Xt===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Xt=e)}function Bo(e){K(Qe,Qe.current),K(At,e),Xt===null&&(Xt=e)}function sd(e){e.tag===22?(K(Qe,Qe.current),K(At,e),Xt===null&&(Xt=e)):Xn()}function Xn(){K(Qe,Qe.current),K(At,At.current)}function Mt(e){_(At),Xt===e&&(Xt=null),_(Qe)}var Qe=x(0);function yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qc(n)||Qc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,oe=null,De=null,Ze=null,vr=!1,el=!1,ja=!1,br=0,ti=0,tl=null,Kp=0;function Ge(){throw Error(c(321))}function Lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Ho(e,t,n,a,l,r){return vn=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?$d:Po,ja=!1,r=n(a,l),ja=!1,el&&(r=dd(t,n,a,l)),fd(e),r}function fd(e){R.H=li;var t=De!==null&&De.next!==null;if(vn=0,Ze=De=oe=null,vr=!1,ti=0,tl=null,t)throw Error(c(300));e===null||$e||(e=e.dependencies,e!==null&&cr(e)&&($e=!0))}function dd(e,t,n,a){oe=e;var l=0;do{if(el&&(tl=null),ti=0,el=!1,25<=l)throw Error(c(301));if(l+=1,Ze=De=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=Kd,r=t(n,a)}while(el);return r}function Jp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(oe.flags|=1024),t}function ko(){var e=br!==0;return br=0,e}function Yo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Go(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}vn=0,Ze=De=oe=null,el=!1,ti=br=0,tl=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?oe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Xe(){if(De===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ze===null?oe.memoizedState:Ze.next;if(t!==null)Ze=t,De=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?oe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function xr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ti;return ti+=1,tl===null&&(tl=[]),e=nd(tl,e,t),t=oe,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?$d:Po),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===Q)return rt(e)}throw Error(c(438,String(e)))}function qo(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xr(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Fe;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Xe();return Qo(t,De,e)}function Qo(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=s=null,v=null,A=t,O=!1;do{var L=A.lane&-536870913;if(L!==A.lane?(ve&L)===L:(vn&L)===L){var M=A.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),L===Ja&&(O=!0);else if((vn&M)===M){A=A.next,M===Ja&&(O=!0);continue}else L={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=L,s=r):v=v.next=L,oe.lanes|=M,$n|=M;L=A.action,ja&&n(r,L),r=A.hasEagerState?A.eagerState:n(r,L)}else M={lane:L,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=M,s=r):v=v.next=M,oe.lanes|=L,$n|=L;A=A.next}while(A!==null&&A!==t);if(v===null?s=r:v.next=h,!Ct(r,e.memoizedState)&&($e=!0,O&&(n=Fa,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Xo(e){var t=Xe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);Ct(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function hd(e,t,n){var a=oe,l=Xe(),r=xe;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var s=!Ct((De||l).memoizedState,n);if(s&&(l.memoizedState=n,$e=!0),l=l.queue,$o(pd.bind(null,a,l,e),[e]),l.getSnapshot!==t||s||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,nl(9,{destroy:void 0},gd.bind(null,a,l,n,t),null),Ne===null)throw Error(c(349));r||(vn&127)!==0||md(a,t,n)}return n}function md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=xr(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gd(e,t,n,a){t.value=n,t.getSnapshot=a,yd(t)&&vd(e)}function pd(e,t,n){return n(function(){yd(t)&&vd(e)})}function yd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function vd(e){var t=ha(e,2);t!==null&&bt(t,e,2)}function Vo(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),ja){Nn(!0);try{n()}finally{Nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function bd(e,t,n,a){return e.baseState=n,Qo(e,De,typeof a=="function"?a:bn)}function Fp(e,t,n,a,l){if(Tr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};R.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,xd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function xd(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=R.T,s={};R.T=s;try{var h=n(l,a),v=R.S;v!==null&&v(s,h),Sd(e,t,h)}catch(A){Zo(e,t,A)}finally{r!==null&&s.types!==null&&(r.types=s.types),R.T=r}}else try{r=n(l,a),Sd(e,t,r)}catch(A){Zo(e,t,A)}}function Sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){jd(e,t,a)},function(a){return Zo(e,t,a)}):jd(e,t,n)}function jd(e,t,n){t.status="fulfilled",t.value=n,wd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xd(e,n)))}function Zo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,wd(t),t=t.next;while(t!==a)}e.action=null}function wd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ed(e,t){return t}function Td(e,t){if(xe){var n=Ne.formState;if(n!==null){e:{var a=oe;if(xe){if(Ue){t:{for(var l=Ue,r=Qt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Ue=Vt(l.nextSibling),a=l.data==="F!";break e}}Hn(a)}a=!1}a&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ed,lastRenderedState:t},n.queue=a,n=Xd.bind(null,oe,a),a.dispatch=n,a=Vo(!1),r=Io.bind(null,oe,!1,a.queue),a=dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Fp.bind(null,oe,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Cd(e){var t=Xe();return zd(t,De,e)}function zd(e,t,n){if(t=Qo(e,t,Ed)[0],e=jr(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ni(t)}catch(s){throw s===Wa?dr:s}else a=t;t=Xe();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,nl(9,{destroy:void 0},Wp.bind(null,l,n),null)),[a,r,e]}function Wp(e,t){e.action=t}function Ad(e){var t=Xe(),n=De;if(n!==null)return zd(t,n,e);Xe(),t=t.memoizedState,n=Xe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function nl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=xr(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Md(){return Xe().memoizedState}function wr(e,t,n,a){var l=dt();oe.flags|=e,l.memoizedState=nl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Er(e,t,n,a){var l=Xe();a=a===void 0?null:a;var r=l.memoizedState.inst;De!==null&&a!==null&&Lo(a,De.memoizedState.deps)?l.memoizedState=nl(t,r,n,a):(oe.flags|=e,l.memoizedState=nl(1|t,r,n,a))}function Dd(e,t){wr(8390656,8,e,t)}function $o(e,t){Er(2048,8,e,t)}function Ip(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=xr(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rd(e){var t=Xe().memoizedState;return Ip({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Od(e,t){return Er(4,2,e,t)}function Nd(e,t){return Er(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ud(e,t,n){n=n!=null?n.concat([e]):null,Er(4,4,_d.bind(null,t,e),n)}function Ko(){}function Bd(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Lo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ld(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Lo(t,a[1]))return a[0];if(a=e(),ja){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a}function Jo(e,t,n){return n===void 0||(vn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Hh(),oe.lanes|=e,$n|=e,n)}function Hd(e,t,n,a){return Ct(n,t)?n:Pa.current!==null?(e=Jo(e,n,a),Ct(e,t)||($e=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(ve&261930)===0?($e=!0,e.memoizedState=n):(e=Hh(),oe.lanes|=e,$n|=e,t)}function kd(e,t,n,a,l){var r=$.p;$.p=r!==0&&8>r?r:8;var s=R.T,h={};R.T=h,Io(e,!1,t,n);try{var v=l(),A=R.S;if(A!==null&&A(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=$p(v,a);ai(e,t,O,Ot(e))}else ai(e,t,a,Ot(e))}catch(L){ai(e,t,{then:function(){},status:"rejected",reason:L},Ot())}finally{$.p=r,s!==null&&h.types!==null&&(s.types=h.types),R.T=s}}function Pp(){}function Fo(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Yd(e).queue;kd(e,l,t,ee,n===null?Pp:function(){return Gd(e),n(a)})}function Yd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gd(e){var t=Yd(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},Ot())}function Wo(){return rt(xi)}function qd(){return Xe().memoizedState}function Qd(){return Xe().memoizedState}function e1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=Gn(n);var a=qn(t,e,n);a!==null&&(bt(a,t,n),Il(a,t,n)),t={cache:Co()},e.payload=t;return}t=t.return}}function t1(e,t,n){var a=Ot();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(e)?Vd(t,n):(n=go(e,t,n,a),n!==null&&(bt(n,e,a),Zd(n,t,a)))}function Xd(e,t,n){var a=Ot();ai(e,t,n,a)}function ai(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))Vd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,h=r(s,n);if(l.hasEagerState=!0,l.eagerState=h,Ct(h,s))return ir(e,t,l,0),Ne===null&&lr(),!1}catch{}finally{}if(n=go(e,t,l,a),n!==null)return bt(n,e,a),Zd(n,t,a),!0}return!1}function Io(e,t,n,a){if(a={lane:2,revertLane:Dc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(c(479))}else t=go(e,n,a,2),t!==null&&bt(t,e,2)}function Tr(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Vd(e,t){el=vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fs(e,n)}}var li={readContext:rt,use:Sr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};li.useEffectEvent=Ge;var $d={readContext:rt,use:Sr,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Dd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,wr(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var a=e();if(ja){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=dt();if(n!==void 0){var l=n(t);if(ja){Nn(!0);try{n(t)}finally{Nn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=t1.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Vo(e);var t=e.queue,n=Xd.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ko,useDeferredValue:function(e,t){var n=dt();return Jo(n,e,t)},useTransition:function(){var e=Vo(!1);return e=kd.bind(null,oe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,l=dt();if(xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ne===null)throw Error(c(349));(ve&127)!==0||md(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,Dd(pd.bind(null,a,r,e),[e]),a.flags|=2048,nl(9,{destroy:void 0},gd.bind(null,a,r,n,t),null),n},useId:function(){var e=dt(),t=Ne.identifierPrefix;if(xe){var n=an,a=nn;n=(a&~(1<<32-Tt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Kp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wo,useFormState:Td,useActionState:Td,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Io.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:qo,useCacheRefresh:function(){return dt().memoizedState=e1.bind(null,oe)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Te&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Po={readContext:rt,use:Sr,useCallback:Bd,useContext:rt,useEffect:$o,useImperativeHandle:Ud,useInsertionEffect:Od,useLayoutEffect:Nd,useMemo:Ld,useReducer:jr,useRef:Md,useState:function(){return jr(bn)},useDebugValue:Ko,useDeferredValue:function(e,t){var n=Xe();return Hd(n,De.memoizedState,e,t)},useTransition:function(){var e=jr(bn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Wo,useFormState:Cd,useActionState:Cd,useOptimistic:function(e,t){var n=Xe();return bd(n,De,e,t)},useMemoCache:qo,useCacheRefresh:Qd};Po.useEffectEvent=Rd;var Kd={readContext:rt,use:Sr,useCallback:Bd,useContext:rt,useEffect:$o,useImperativeHandle:Ud,useInsertionEffect:Od,useLayoutEffect:Nd,useMemo:Ld,useReducer:Xo,useRef:Md,useState:function(){return Xo(bn)},useDebugValue:Ko,useDeferredValue:function(e,t){var n=Xe();return De===null?Jo(n,e,t):Hd(n,De.memoizedState,e,t)},useTransition:function(){var e=Xo(bn)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Wo,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var n=Xe();return De!==null?bd(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qo,useCacheRefresh:Qd};Kd.useEffectEvent=Rd;function ec(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ot(),l=Gn(a);l.payload=t,n!=null&&(l.callback=n),t=qn(e,l,a),t!==null&&(bt(t,e,a),Il(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ot(),l=Gn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=qn(e,l,a),t!==null&&(bt(t,e,a),Il(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),a=Gn(n);a.tag=2,t!=null&&(a.callback=t),t=qn(e,a,n),t!==null&&(bt(t,e,n),Il(t,e,n))}};function Jd(e,t,n,a,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,s):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,a)||!Xl(l,r):!0}function Fd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function wa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Wd(e){ar(e)}function Id(e){console.error(e)}function Pd(e){ar(e)}function Cr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function eh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nc(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Cr(e,t)},n}function th(e){return e=Gn(e),e.tag=3,e}function nh(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){eh(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){eh(t,n,a),typeof l!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function n1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ka(t,n,l,!0),n=At.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?Hr():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===hr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zc(e,a,l)),!1;case 22:return n.flags|=65536,a===hr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zc(e,a,l)),!1}throw Error(c(435,n.tag))}return zc(e,a,l),Hr(),!1}if(xe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==So&&(e=Error(c(422),{cause:a}),$l(Yt(e,n)))):(a!==So&&(t=Error(c(423),{cause:a}),$l(Yt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Yt(a,n),l=nc(e.stateNode,a,l),Oo(e,l),qe!==4&&(qe=2)),!1;var r=Error(c(520),{cause:a});if(r=Yt(r,n),di===null?di=[r]:di.push(r),qe!==4&&(qe=2),t===null)return!0;a=Yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=nc(n.stateNode,a,e),Oo(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=th(l),nh(l,e,n,a),Oo(n,l),!1}n=n.return}while(n!==null);return!1}var ac=Error(c(461)),$e=!1;function ut(e,t,n,a){t.child=e===null?rd(t,null,n,a):Sa(t,e.child,n,a)}function ah(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var s={};for(var h in a)h!=="ref"&&(s[h]=a[h])}else s=a;return ya(t),a=Ho(e,t,n,s,r,l),h=ko(),e!==null&&!$e?(Yo(e,t,l),xn(e,t,l)):(xe&&h&&bo(t),t.flags|=1,ut(e,t,a,l),t.child)}function lh(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!po(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,ih(e,t,r,a,l)):(e=ur(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!fc(e,l)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(s,a)&&e.ref===t.ref)return xn(e,t,l)}return t.flags|=1,e=mn(r,a),e.ref=t.ref,e.return=t,t.child=e}function ih(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(Xl(r,a)&&e.ref===t.ref)if($e=!1,t.pendingProps=a=r,fc(e,l))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,xn(e,t,l)}return lc(e,t,n,a,l)}function rh(e,t,n,a){var l=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~r}else a=0,t.child=null;return uh(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fr(t,r!==null?r.cachePool:null),r!==null?cd(t,r):_o(),sd(t);else return a=t.lanes=536870912,uh(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(fr(t,r.cachePool),cd(t,r),Xn(),t.memoizedState=null):(e!==null&&fr(t,null),_o(),Xn());return ut(e,t,l,n),t.child}function ii(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uh(e,t,n,a,l){var r=Ao();return r=r===null?null:{parent:Ve._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&fr(t,null),_o(),sd(t),e!==null&&Ka(e,t,a,!0),t.childLanes=l,null}function zr(e,t){return t=Mr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oh(e,t,n){return Sa(t,e.child,null,n),e=zr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function a1(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(a.mode==="hidden")return e=zr(t,a),t.lanes=536870912,ii(null,e);if(Bo(t),(e=Ue)?(e=xm(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Vf(e),n.return=t,t.child=n,it=t,Ue=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return zr(t,a)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(Bo(t),l)if(t.flags&256)t.flags&=-257,t=oh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if($e||Ka(e,t,n,!1),l=(n&e.childLanes)!==0,$e||l){if(a=Ne,a!==null&&(s=Ws(a,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,ha(e,s),bt(a,e,s),ac;Hr(),t=oh(e,t,n)}else e=r.treeContext,Ue=Vt(s.nextSibling),it=t,xe=!0,Ln=null,Qt=!1,e!==null&&Kf(t,e),t=zr(t,a),t.flags|=4096;return t}return e=mn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,a,l){return ya(t),n=Ho(e,t,n,a,void 0,l),a=ko(),e!==null&&!$e?(Yo(e,t,l),xn(e,t,l)):(xe&&a&&bo(t),t.flags|=1,ut(e,t,n,l),t.child)}function ch(e,t,n,a,l,r){return ya(t),t.updateQueue=null,n=dd(t,a,n,l),fd(e),a=ko(),e!==null&&!$e?(Yo(e,t,r),xn(e,t,r)):(xe&&a&&bo(t),t.flags|=1,ut(e,t,n,r),t.child)}function sh(e,t,n,a,l){if(ya(t),t.stateNode===null){var r=Xa,s=n.contextType;typeof s=="object"&&s!==null&&(r=rt(s)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=tc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Do(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?rt(s):Xa,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ec(t,n,s,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&tc.enqueueReplaceState(r,r.state,null),ei(t,a,r,l),Pl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,v=wa(n,h);r.props=v;var A=r.context,O=n.contextType;s=Xa,typeof O=="object"&&O!==null&&(s=rt(O));var L=n.getDerivedStateFromProps;O=typeof L=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||A!==s)&&Fd(t,r,a,s),Yn=!1;var M=t.memoizedState;r.state=M,ei(t,a,r,l),Pl(),A=t.memoizedState,h||M!==A||Yn?(typeof L=="function"&&(ec(t,n,L,a),A=t.memoizedState),(v=Yn||Jd(t,n,v,a,M,A,s))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=s,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Ro(e,t),s=t.memoizedProps,O=wa(n,s),r.props=O,L=t.pendingProps,M=r.context,A=n.contextType,v=Xa,typeof A=="object"&&A!==null&&(v=rt(A)),h=n.getDerivedStateFromProps,(A=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==L||M!==v)&&Fd(t,r,a,v),Yn=!1,M=t.memoizedState,r.state=M,ei(t,a,r,l),Pl();var D=t.memoizedState;s!==L||M!==D||Yn||e!==null&&e.dependencies!==null&&cr(e.dependencies)?(typeof h=="function"&&(ec(t,n,h,a),D=t.memoizedState),(O=Yn||Jd(t,n,O,a,M,D,v)||e!==null&&e.dependencies!==null&&cr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,D,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,D,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),r.props=a,r.state=D,r.context=v,a=O):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Ar(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Sa(t,e.child,null,l),t.child=Sa(t,null,n,l)):ut(e,t,n,l),t.memoizedState=r.state,e=t.child):e=xn(e,t,l),e}function fh(e,t,n,a){return ga(),t.flags|=256,ut(e,t,n,a),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:ed()}}function uc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function dh(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Qn(t):Xn(),(e=Ue)?(e=xm(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bn!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Vf(e),n.return=t,t.child=n,it=t,Ue=null)):e=null,e===null)throw Hn(t);return Qc(e)?t.lanes=32:t.lanes=536870912,null}var h=a.children;return a=a.fallback,l?(Xn(),l=t.mode,h=Mr({mode:"hidden",children:h},l),a=ma(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,a=t.child,a.memoizedState=rc(n),a.childLanes=uc(e,s,n),t.memoizedState=ic,ii(null,a)):(Qn(t),oc(t,h))}var v=e.memoizedState;if(v!==null&&(h=v.dehydrated,h!==null)){if(r)t.flags&256?(Qn(t),t.flags&=-257,t=cc(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),h=a.fallback,l=t.mode,a=Mr({mode:"visible",children:a.children},l),h=ma(h,l,n,null),h.flags|=2,a.return=t,h.return=t,a.sibling=h,t.child=a,Sa(t,e.child,null,n),a=t.child,a.memoizedState=rc(n),a.childLanes=uc(e,s,n),t.memoizedState=ic,t=ii(null,a));else if(Qn(t),Qc(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var A=s.dgst;s=A,a=Error(c(419)),a.stack="",a.digest=s,$l({value:a,source:null,stack:null}),t=cc(e,t,n)}else if($e||Ka(e,t,n,!1),s=(n&e.childLanes)!==0,$e||s){if(s=Ne,s!==null&&(a=Ws(s,n),a!==0&&a!==v.retryLane))throw v.retryLane=a,ha(e,a),bt(s,e,a),ac;qc(h)||Hr(),t=cc(e,t,n)}else qc(h)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ue=Vt(h.nextSibling),it=t,xe=!0,Ln=null,Qt=!1,e!==null&&Kf(t,e),t=oc(t,a.children),t.flags|=4096);return t}return l?(Xn(),h=a.fallback,l=t.mode,v=e.child,A=v.sibling,a=mn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,A!==null?h=mn(A,h):(h=ma(h,l,n,null),h.flags|=2),h.return=t,a.return=t,a.sibling=h,t.child=a,ii(null,a),a=t.child,h=e.child.memoizedState,h===null?h=rc(n):(l=h.cachePool,l!==null?(v=Ve._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=ed(),h={baseLanes:h.baseLanes|n,cachePool:l}),a.memoizedState=h,a.childLanes=uc(e,s,n),t.memoizedState=ic,ii(e.child,a)):(Qn(t),n=e.child,e=n.sibling,n=mn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function oc(e,t){return t=Mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mr(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function cc(e,t,n){return Sa(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Eo(e.return,t,n)}function sc(e,t,n,a,l,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=l,s.treeForkCount=r)}function mh(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;a=a.children;var s=Qe.current,h=(s&2)!==0;if(h?(s=s&1|2,t.flags|=128):s&=1,K(Qe,s),ut(e,t,a,n),a=xe?Zl:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hh(e,n,t);else if(e.tag===19)hh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),sc(t,!1,l,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}sc(t,!0,n,null,r,a);break;case"together":sc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&cr(e)))}function l1(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),kn(t,Ve,e.memoizedState.cache),ga();break;case 27:case 5:B(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:kn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?dh(e,t,n):(Qn(t),e=xn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ka(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return mh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,rh(e,t,n,t.pendingProps);case 24:kn(t,Ve,e.memoizedState.cache)}return xn(e,t,n)}function gh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!fc(e,n)&&(t.flags&128)===0)return $e=!1,l1(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,xe&&(t.flags&1048576)!==0&&$f(t,Zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")po(e)?(a=wa(e,a),t.tag=1,t=sh(null,t,e,a,n)):(t.tag=0,t=lc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ne){t.tag=11,t=ah(null,t,e,a,n);break e}else if(l===q){t.tag=14,t=lh(null,t,e,a,n);break e}}throw t=ft(e)||e,Error(c(306,t,""))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=wa(a,t.pendingProps),sh(e,t,a,l,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,Ro(e,t),ei(t,a,null,n);var s=t.memoizedState;if(a=s.cache,kn(t,Ve,a),a!==r.cache&&To(t,[Ve],n,!0),Pl(),a=s.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fh(e,t,a,n);break e}else if(a!==l){l=Yt(Error(c(424)),t),$l(l),t=fh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Vt(e.firstChild),it=t,xe=!0,Ln=null,Qt=!0,n=rd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ga(),a===l){t=xn(e,t,n);break e}ut(e,t,a,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=Cm(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=Vr(ie.current).createElement(n),a[lt]=t,a[ht]=e,ot(a,n,e),et(a),t.stateNode=a):t.memoizedState=Cm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return B(t),e===null&&xe&&(a=t.stateNode=wm(t.type,t.pendingProps,ie.current),it=t,Qt=!0,l=Ue,In(t.type)?(Xc=l,Ue=Vt(a.firstChild)):Ue=l),ut(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=a=Ue)&&(a=_1(a,t.type,t.pendingProps,Qt),a!==null?(t.stateNode=a,it=t,Ue=Vt(a.firstChild),Qt=!1,l=!0):l=!1),l||Hn(t)),B(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,a=r.children,kc(l,r)?a=null:s!==null&&kc(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Ho(e,t,Jp,null,null,n),xi._currentValue=l),Ar(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=Ue)&&(n=U1(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,it=t,Ue=null,e=!0):e=!1),e||Hn(t)),null;case 13:return dh(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Sa(t,null,a,n):ut(e,t,a,n),t.child;case 11:return ah(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,kn(t,t.type,a.value),ut(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,ya(t),l=rt(l),a=a(l),t.flags|=1,ut(e,t,a,n),t.child;case 14:return lh(e,t,t.type,t.pendingProps,n);case 15:return ih(e,t,t.type,t.pendingProps,n);case 19:return mh(e,t,n);case 31:return a1(e,t,n);case 22:return rh(e,t,n,t.pendingProps);case 24:return ya(t),a=rt(Ve),e===null?(l=Ao(),l===null&&(l=Ne,r=Co(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},Do(t),kn(t,Ve,l)):((e.lanes&n)!==0&&(Ro(e,t),ei(t,null,null,n),Pl()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),kn(t,Ve,a)):(a=r.cache,kn(t,Ve,a),a!==l.cache&&To(t,[Ve],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Sn(e){e.flags|=4}function dc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(qh())e.flags|=8192;else throw xa=hr,Mo}else e.flags&=-16777217}function ph(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rm(t))if(qh())e.flags|=8192;else throw xa=hr,Mo}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ks():536870912,e.lanes|=t,rl|=t)}function ri(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function i1(e,t,n){var a=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),yn(Ve),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($a(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jo())),Be(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Sn(t),r!==null?(Be(t),ph(t,r)):(Be(t),dc(t,l,null,a,n))):r?r!==e.memoizedState?(Sn(t),Be(t),ph(t,r)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Sn(t),Be(t),dc(t,l,e,a,n)),null;case 27:if(re(t),n=ie.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Sn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=J.current,$a(t)?Jf(t):(e=wm(l,a,n),t.stateNode=e,Sn(t))}return Be(t),null;case 5:if(re(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Sn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(r=J.current,$a(t))Jf(t);else{var s=Vr(ie.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}r[lt]=t,r[ht]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;e:switch(ot(r,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Sn(t)}}return Be(t),dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Sn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,$a(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=it,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||dm(e.nodeValue,n)),e||Hn(t,!0)}else e=Vr(e).createTextNode(a),e[lt]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=$a(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[lt]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=$a(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[lt]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else l=jo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Dr(t,t.updateQueue),Be(t),null);case 4:return Ee(),e===null&&_c(t.stateNode.containerInfo),Be(t),null;case 10:return yn(t.type),Be(t),null;case 19:if(_(Qe),a=t.memoizedState,a===null)return Be(t),null;if(l=(t.flags&128)!==0,r=a.rendering,r===null)if(l)ri(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=yr(e),r!==null){for(t.flags|=128,ri(a,!1),e=r.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xf(n,e),n=n.sibling;return K(Qe,Qe.current&1|2),xe&&gn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&wt()>Ur&&(t.flags|=128,l=!0,ri(a,!1),t.lanes=4194304)}else{if(!l)if(e=yr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!xe)return Be(t),null}else 2*wt()-a.renderingStartTime>Ur&&n!==536870912&&(t.flags|=128,l=!0,ri(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=wt(),e.sibling=null,n=Qe.current,K(Qe,l?n&1|2:n&1),xe&&gn(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return Mt(t),Uo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&_(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(Ve),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function r1(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(Ve),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return re(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(c(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Qe),null;case 4:return Ee(),null;case 10:return yn(t.type),null;case 22:case 23:return Mt(t),Uo(),e!==null&&_(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(Ve),null;case 25:return null;default:return null}}function yh(e,t){switch(xo(t),t.tag){case 3:yn(Ve),Ee();break;case 26:case 27:case 5:re(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:_(Qe);break;case 10:yn(t.type);break;case 22:case 23:Mt(t),Uo(),e!==null&&_(va);break;case 24:yn(Ve)}}function ui(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,s=n.inst;a=r(),s.destroy=a}n=n.next}while(n!==l)}}catch(h){Me(t,t.return,h)}}function Vn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var s=a.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,l=t;var v=n,A=h;try{A()}catch(O){Me(l,v,O)}}}a=a.next}while(a!==r)}}catch(O){Me(t,t.return,O)}}function vh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{od(t,n)}catch(a){Me(e,e.return,a)}}}function bh(e,t,n){n.props=wa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Me(e,t,a)}}function oi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Me(e,t,l)}}function ln(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Me(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Me(e,t,l)}else n.current=null}function xh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Me(e,e.return,l)}}function hc(e,t,n){try{var a=e.stateNode;A1(a,e.type,n,t),a[ht]=t}catch(l){Me(e,e.return,l)}}function Sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&In(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&In(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(a!==4&&(a===27&&In(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&In(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function jh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,a,n),t[lt]=e,t[ht]=n}catch(r){Me(e,e.return,r)}}var jn=!1,Ke=!1,pc=!1,wh=typeof WeakSet=="function"?WeakSet:Set,tt=null;function u1(e,t){if(e=e.containerInfo,Lc=Ir,e=Uf(e),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,h=-1,v=-1,A=0,O=0,L=e,M=null;t:for(;;){for(var D;L!==n||l!==0&&L.nodeType!==3||(h=s+l),L!==r||a!==0&&L.nodeType!==3||(v=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(D=L.firstChild)!==null;)M=L,L=D;for(;;){if(L===e)break t;if(M===n&&++A===l&&(h=s),M===r&&++O===a&&(v=s),(D=L.nextSibling)!==null)break;L=M,M=L.parentNode}L=D}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:e,selectionRange:n},Ir=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var W=wa(n.type,l);e=a.getSnapshotBeforeUpdate(W,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Me(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function Eh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),a&4&&ui(5,n);break;case 1:if(En(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Me(n,n.return,s)}else{var l=wa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Me(n,n.return,s)}}a&64&&vh(n),a&512&&oi(n,n.return);break;case 3:if(En(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{od(e,t)}catch(s){Me(n,n.return,s)}}break;case 27:t===null&&a&4&&jh(n);case 26:case 5:En(e,n),t===null&&a&4&&xh(n),a&512&&oi(n,n.return);break;case 12:En(e,n);break;case 31:En(e,n),a&4&&zh(e,n);break;case 13:En(e,n),a&4&&Ah(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=p1.bind(null,n),B1(e,n))));break;case 22:if(a=n.memoizedState!==null||jn,!a){t=t!==null&&t.memoizedState!==null||Ke,l=jn;var r=Ke;jn=a,(Ke=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),jn=l,Ke=r}break;case 30:break;default:En(e,n)}}function Th(e){var t=e.alternate;t!==null&&(e.alternate=null,Th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,gt=!1;function wn(e,t,n){for(n=n.child;n!==null;)Ch(e,t,n),n=n.sibling}function Ch(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 26:Ke||ln(n,t),wn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||ln(n,t);var a=He,l=gt;In(n.type)&&(He=n.stateNode,gt=!1),wn(e,t,n),yi(n.stateNode),He=a,gt=l;break;case 5:Ke||ln(n,t);case 6:if(a=He,l=gt,He=null,wn(e,t,n),He=a,gt=l,He!==null)if(gt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(n.stateNode)}catch(r){Me(n,t,r)}else try{He.removeChild(n.stateNode)}catch(r){Me(n,t,r)}break;case 18:He!==null&&(gt?(e=He,vm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ml(e)):vm(He,n.stateNode));break;case 4:a=He,l=gt,He=n.stateNode.containerInfo,gt=!0,wn(e,t,n),He=a,gt=l;break;case 0:case 11:case 14:case 15:Vn(2,n,t),Ke||Vn(4,n,t),wn(e,t,n);break;case 1:Ke||(ln(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&bh(n,t,a)),wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:Ke=(a=Ke)||n.memoizedState!==null,wn(e,t,n),Ke=a;break;default:wn(e,t,n)}}function zh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(n){Me(t,t.return,n)}}}function Ah(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(n){Me(t,t.return,n)}}function o1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wh),t;default:throw Error(c(435,e.tag))}}function Or(e,t){var n=o1(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=y1.bind(null,e,a);a.then(l,l)}})}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,s=t,h=s;e:for(;h!==null;){switch(h.tag){case 27:if(In(h.type)){He=h.stateNode,gt=!1;break e}break;case 5:He=h.stateNode,gt=!1;break e;case 3:case 4:He=h.stateNode.containerInfo,gt=!0;break e}h=h.return}if(He===null)throw Error(c(160));Ch(r,s,l),He=null,gt=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}var It=null;function Mh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),yt(e),a&4&&(Vn(3,e,e.return),ui(3,e),Vn(5,e,e.return));break;case 1:pt(t,e),yt(e),a&512&&(Ke||n===null||ln(n,n.return)),a&64&&jn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=It;if(pt(t,e),yt(e),a&512&&(Ke||n===null||ln(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ul]||r[lt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),ot(r,a,n),r[lt]=e,et(r),a=r;break e;case"link":var s=Mm("link","href",l).get(a+(n.href||""));if(s){for(var h=0;h<s.length;h++)if(r=s[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(h,1);break t}}r=l.createElement(a),ot(r,a,n),l.head.appendChild(r);break;case"meta":if(s=Mm("meta","content",l).get(a+(n.content||""))){for(h=0;h<s.length;h++)if(r=s[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(h,1);break t}}r=l.createElement(a),ot(r,a,n),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[lt]=e,et(r),a=r}e.stateNode=a}else Dm(l,e.type,e.stateNode);else e.stateNode=Am(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Dm(l,e.type,e.stateNode):Am(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hc(e,e.memoizedProps,n.memoizedProps)}break;case 27:pt(t,e),yt(e),a&512&&(Ke||n===null||ln(n,n.return)),n!==null&&a&4&&hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pt(t,e),yt(e),a&512&&(Ke||n===null||ln(n,n.return)),e.flags&32){l=e.stateNode;try{La(l,"")}catch(W){Me(e,e.return,W)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,hc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(pc=!0);break;case 6:if(pt(t,e),yt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(W){Me(e,e.return,W)}}break;case 3:if(Kr=null,l=It,It=Zr(t.containerInfo),pt(t,e),It=l,yt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(W){Me(e,e.return,W)}pc&&(pc=!1,Dh(e));break;case 4:a=It,It=Zr(e.stateNode.containerInfo),pt(t,e),yt(e),It=a;break;case 12:pt(t,e),yt(e);break;case 31:pt(t,e),yt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 13:pt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_r=wt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,A=jn,O=Ke;if(jn=A||l,Ke=O||v,pt(t,e),Ke=O,jn=A,yt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||jn||Ke||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=v.stateNode;var L=v.memoizedProps.style,M=L!=null&&L.hasOwnProperty("display")?L.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(W){Me(v,v.return,W)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(W){Me(v,v.return,W)}}}else if(t.tag===18){if(n===null){v=t;try{var D=v.stateNode;l?bm(D,!0):bm(v.stateNode,!1)}catch(W){Me(v,v.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Or(e,n))));break;case 19:pt(t,e),yt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 30:break;case 21:break;default:pt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Sh(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=mc(e);Rr(e,r,l);break;case 5:var s=n.stateNode;n.flags&32&&(La(s,""),n.flags&=-33);var h=mc(e);Rr(e,h,s);break;case 3:case 4:var v=n.stateNode.containerInfo,A=mc(e);gc(e,A,v);break;default:throw Error(c(161))}}catch(O){Me(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Eh(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vn(4,t,t.return),Ea(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&bh(t,t.return,n),Ea(t);break;case 27:yi(t.stateNode);case 26:case 5:ln(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(l,r,n),ui(4,r);break;case 1:if(Tn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Me(a,a.return,A)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)ud(v[l],h)}catch(A){Me(a,a.return,A)}}n&&s&64&&vh(r),oi(r,r.return);break;case 27:jh(r);case 26:case 5:Tn(l,r,n),n&&a===null&&s&4&&xh(r),oi(r,r.return);break;case 12:Tn(l,r,n);break;case 31:Tn(l,r,n),n&&s&4&&zh(l,r);break;case 13:Tn(l,r,n),n&&s&4&&Ah(l,r);break;case 22:r.memoizedState===null&&Tn(l,r,n),oi(r,r.return);break;case 30:break;default:Tn(l,r,n)}t=t.sibling}}function yc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Kl(n))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function Pt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rh(e,t,n,a),t=t.sibling}function Rh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,a),l&2048&&ui(9,t);break;case 1:Pt(e,t,n,a);break;case 3:Pt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e)));break;case 12:if(l&2048){Pt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,h=r.onPostCommit;typeof h=="function"&&h(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Me(t,t.return,v)}}else Pt(e,t,n,a);break;case 31:Pt(e,t,n,a);break;case 13:Pt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Pt(e,t,n,a):ci(e,t):r._visibility&2?Pt(e,t,n,a):(r._visibility|=2,al(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&yc(s,t);break;case 24:Pt(e,t,n,a),l&2048&&vc(t.alternate,t);break;default:Pt(e,t,n,a)}}function al(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,h=n,v=a,A=s.flags;switch(s.tag){case 0:case 11:case 15:al(r,s,h,v,l),ui(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?al(r,s,h,v,l):ci(r,s):(O._visibility|=2,al(r,s,h,v,l)),l&&A&2048&&yc(s.alternate,s);break;case 24:al(r,s,h,v,l),l&&A&2048&&vc(s.alternate,s);break;default:al(r,s,h,v,l)}t=t.sibling}}function ci(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ci(n,a),l&2048&&yc(a.alternate,a);break;case 24:ci(n,a),l&2048&&vc(a.alternate,a);break;default:ci(n,a)}t=t.sibling}}var si=8192;function ll(e,t,n){if(e.subtreeFlags&si)for(e=e.child;e!==null;)Oh(e,t,n),e=e.sibling}function Oh(e,t,n){switch(e.tag){case 26:ll(e,t,n),e.flags&si&&e.memoizedState!==null&&K1(n,It,e.memoizedState,e.memoizedProps);break;case 5:ll(e,t,n);break;case 3:case 4:var a=It;It=Zr(e.stateNode.containerInfo),ll(e,t,n),It=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=si,si=16777216,ll(e,t,n),si=a):ll(e,t,n));break;default:ll(e,t,n)}}function Nh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,Uh(a,e)}Nh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_h(e),e=e.sibling}function _h(e){switch(e.tag){case 0:case 11:case 15:fi(e),e.flags&2048&&Vn(9,e,e.return);break;case 3:fi(e);break;case 12:fi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nr(e)):fi(e);break;default:fi(e)}}function Nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];tt=a,Uh(a,e)}Nh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vn(8,t,t.return),Nr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nr(t));break;default:Nr(t)}e=e.sibling}}function Uh(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:Vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,tt=a;else e:for(n=e;tt!==null;){a=tt;var l=a.sibling,r=a.return;if(Th(a),a===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var c1={getCacheForType:function(e){var t=rt(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Ve).controller.signal}},s1=typeof WeakMap=="function"?WeakMap:Map,Te=0,Ne=null,ge=null,ve=0,Ae=0,Dt=null,Zn=!1,il=!1,bc=!1,Cn=0,qe=0,$n=0,Ta=0,xc=0,Rt=0,rl=0,di=null,vt=null,Sc=!1,_r=0,Bh=0,Ur=1/0,Br=null,Kn=null,We=0,Jn=null,ul=null,zn=0,jc=0,wc=null,Lh=null,hi=0,Ec=null;function Ot(){return(Te&2)!==0&&ve!==0?ve&-ve:R.T!==null?Dc():Is()}function Hh(){if(Rt===0)if((ve&536870912)===0||xe){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),Rt=e}else Rt=536870912;return e=At.current,e!==null&&(e.flags|=32),Rt}function bt(e,t,n){(e===Ne&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Fn(e,ve,Rt,!1)),_l(e,n),((Te&2)===0||e!==Ne)&&(e===Ne&&((Te&2)===0&&(Ta|=n),qe===4&&Fn(e,ve,Rt,!1)),rn(e))}function kh(e,t,n){if((Te&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Nl(e,t),l=a?h1(e,t):Cc(e,t,!0),r=a;do{if(l===0){il&&!a&&Fn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!f1(n)){l=Cc(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var h=e;l=di;var v=h.current.memoizedState.isDehydrated;if(v&&(ol(h,s).flags|=256),s=Cc(h,s,!1),s!==2){if(bc&&!v){h.errorRecoveryDisabledLanes|=r,Ta|=r,l=4;break e}r=vt,vt=l,r!==null&&(vt===null?vt=r:vt.push.apply(vt,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){ol(e,0),Fn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Fn(a,t,Rt,!Zn);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=_r+300-wt(),10<l)){if(Fn(a,t,Rt,!Zn),Zi(a,0,!0)!==0)break e;zn=t,a.timeoutHandle=pm(Yh.bind(null,a,n,vt,Br,Sc,t,Rt,Ta,rl,Zn,r,"Throttled",-0,0),l);break e}Yh(a,n,vt,Br,Sc,t,Rt,Ta,rl,Zn,r,null,-0,0)}}break}while(!0);rn(e)}function Yh(e,t,n,a,l,r,s,h,v,A,O,L,M,D){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Oh(t,r,L);var W=(r&62914560)===r?_r-wt():(r&4194048)===r?Bh-wt():0;if(W=J1(L,W),W!==null){zn=r,e.cancelPendingCommit=W(Kh.bind(null,e,t,r,n,a,l,s,h,v,O,L,null,M,D)),Fn(e,r,s,!A);return}}Kh(e,t,r,n,a,l,s,h,v)}function f1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!Ct(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t,n,a){t&=~xc,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-Tt(l),s=1<<r;a[r]=-1,l&=~s}n!==0&&Js(e,n,t)}function Lr(){return(Te&6)===0?(mi(0),!1):!0}function Tc(){if(ge!==null){if(Ae===0)var e=ge.return;else e=ge,pn=pa=null,Go(e),Ia=null,Fl=0,e=ge;for(;e!==null;)yh(e.alternate,e),e=e.return;ge=null}}function ol(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,R1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zn=0,Tc(),Ne=e,ge=n=mn(e.current,null),ve=t,Ae=0,Dt=null,Zn=!1,il=Nl(e,t),bc=!1,rl=Rt=xc=Ta=$n=qe=0,vt=di=null,Sc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-Tt(a),r=1<<l;t|=e[l],a&=~r}return Cn=t,lr(),n}function Gh(e,t){oe=null,R.H=li,t===Wa||t===dr?(t=ad(),Ae=3):t===Mo?(t=ad(),Ae=4):Ae=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(qe=1,Cr(e,Yt(t,e.current)))}function qh(){var e=At.current;return e===null?!0:(ve&4194048)===ve?Xt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Xt:!1}function Qh(){var e=R.H;return R.H=li,e===null?li:e}function Xh(){var e=R.A;return R.A=c1,e}function Hr(){qe=4,Zn||(ve&4194048)!==ve&&At.current!==null||(il=!0),($n&134217727)===0&&(Ta&134217727)===0||Ne===null||Fn(Ne,ve,Rt,!1)}function Cc(e,t,n){var a=Te;Te|=2;var l=Qh(),r=Xh();(Ne!==e||ve!==t)&&(Br=null,ol(e,t)),t=!1;var s=qe;e:do try{if(Ae!==0&&ge!==null){var h=ge,v=Dt;switch(Ae){case 8:Tc(),s=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var A=Ae;if(Ae=0,Dt=null,cl(e,h,v,A),n&&il){s=0;break e}break;default:A=Ae,Ae=0,Dt=null,cl(e,h,v,A)}}d1(),s=qe;break}catch(O){Gh(e,O)}while(!0);return t&&e.shellSuspendCounter++,pn=pa=null,Te=a,R.H=l,R.A=r,ge===null&&(Ne=null,ve=0,lr()),s}function d1(){for(;ge!==null;)Vh(ge)}function h1(e,t){var n=Te;Te|=2;var a=Qh(),l=Xh();Ne!==e||ve!==t?(Br=null,Ur=wt()+500,ol(e,t)):il=Nl(e,t);e:do try{if(Ae!==0&&ge!==null){t=ge;var r=Dt;t:switch(Ae){case 1:Ae=0,Dt=null,cl(e,t,r,1);break;case 2:case 9:if(td(r)){Ae=0,Dt=null,Zh(t);break}t=function(){Ae!==2&&Ae!==9||Ne!==e||(Ae=7),rn(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:td(r)?(Ae=0,Dt=null,Zh(t)):(Ae=0,Dt=null,cl(e,t,r,7));break;case 5:var s=null;switch(ge.tag){case 26:s=ge.memoizedState;case 5:case 27:var h=ge;if(s?Rm(s):h.stateNode.complete){Ae=0,Dt=null;var v=h.sibling;if(v!==null)ge=v;else{var A=h.return;A!==null?(ge=A,kr(A)):ge=null}break t}}Ae=0,Dt=null,cl(e,t,r,5);break;case 6:Ae=0,Dt=null,cl(e,t,r,6);break;case 8:Tc(),qe=6;break e;default:throw Error(c(462))}}m1();break}catch(O){Gh(e,O)}while(!0);return pn=pa=null,R.H=a,R.A=l,Te=n,ge!==null?0:(Ne=null,ve=0,lr(),qe)}function m1(){for(;ge!==null&&!Lg();)Vh(ge)}function Vh(e){var t=gh(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?kr(e):ge=t}function Zh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ch(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=ch(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Go(t);default:yh(n,t),t=ge=Xf(t,Cn),t=gh(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?kr(e):ge=t}function cl(e,t,n,a){pn=pa=null,Go(t),Ia=null,Fl=0;var l=t.return;try{if(n1(e,l,t,n,ve)){qe=1,Cr(e,Yt(n,e.current)),ge=null;return}}catch(r){if(l!==null)throw ge=l,r;qe=1,Cr(e,Yt(n,e.current)),ge=null;return}t.flags&32768?(xe||a===1?e=!0:il||(ve&536870912)!==0?e=!1:(Zn=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),$h(t,e)):kr(t)}function kr(e){var t=e;do{if((t.flags&32768)!==0){$h(t,Zn);return}e=t.return;var n=i1(t.alternate,t,Cn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);qe===0&&(qe=5)}function $h(e,t){do{var n=r1(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);qe=6,ge=null}function Kh(e,t,n,a,l,r,s,h,v){e.cancelPendingCommit=null;do Yr();while(We!==0);if((Te&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=mo,$g(e,n,r,s,h,v),e===Ne&&(ge=Ne=null,ve=0),ul=t,Jn=e,zn=n,jc=r,wc=l,Lh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,v1(qi,function(){return Ph(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=$.p,$.p=2,s=Te,Te|=4;try{u1(e,t,n)}finally{Te=s,$.p=l,R.T=a}}We=1,Jh(),Fh(),Wh()}}function Jh(){if(We===1){We=0;var e=Jn,t=ul,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var a=$.p;$.p=2;var l=Te;Te|=4;try{Mh(t,e);var r=Hc,s=Uf(e.containerInfo),h=r.focusedElem,v=r.selectionRange;if(s!==h&&h&&h.ownerDocument&&_f(h.ownerDocument.documentElement,h)){if(v!==null&&oo(h)){var A=v.start,O=v.end;if(O===void 0&&(O=A),"selectionStart"in h)h.selectionStart=A,h.selectionEnd=Math.min(O,h.value.length);else{var L=h.ownerDocument||document,M=L&&L.defaultView||window;if(M.getSelection){var D=M.getSelection(),W=h.textContent.length,ae=Math.min(v.start,W),Oe=v.end===void 0?ae:Math.min(v.end,W);!D.extend&&ae>Oe&&(s=Oe,Oe=ae,ae=s);var E=Nf(h,ae),S=Nf(h,Oe);if(E&&S&&(D.rangeCount!==1||D.anchorNode!==E.node||D.anchorOffset!==E.offset||D.focusNode!==S.node||D.focusOffset!==S.offset)){var z=L.createRange();z.setStart(E.node,E.offset),D.removeAllRanges(),ae>Oe?(D.addRange(z),D.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),D.addRange(z))}}}}for(L=[],D=h;D=D.parentNode;)D.nodeType===1&&L.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<L.length;h++){var U=L[h];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ir=!!Lc,Hc=Lc=null}finally{Te=l,$.p=a,R.T=n}}e.current=t,We=2}}function Fh(){if(We===2){We=0;var e=Jn,t=ul,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var a=$.p;$.p=2;var l=Te;Te|=4;try{Eh(e,t.alternate,t)}finally{Te=l,$.p=a,R.T=n}}We=3}}function Wh(){if(We===4||We===3){We=0,Hg();var e=Jn,t=ul,n=zn,a=Lh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ul=Jn=null,Ih(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Kn=null),Qu(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=R.T,l=$.p,$.p=2,R.T=null;try{for(var r=e.onRecoverableError,s=0;s<a.length;s++){var h=a[s];r(h.value,{componentStack:h.stack})}}finally{R.T=t,$.p=l}}(zn&3)!==0&&Yr(),rn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Ec?hi++:(hi=0,Ec=e):hi=0,mi(0)}}function Ih(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function Yr(){return Jh(),Fh(),Wh(),Ph()}function Ph(){if(We!==5)return!1;var e=Jn,t=jc;jc=0;var n=Qu(zn),a=R.T,l=$.p;try{$.p=32>n?32:n,R.T=null,n=wc,wc=null;var r=Jn,s=zn;if(We=0,ul=Jn=null,zn=0,(Te&6)!==0)throw Error(c(331));var h=Te;if(Te|=4,_h(r.current),Rh(r,r.current,s,n),Te=h,mi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ol,r)}catch{}return!0}finally{$.p=l,R.T=a,Ih(e,t)}}function em(e,t,n){t=Yt(n,t),t=nc(e.stateNode,t,2),e=qn(e,t,2),e!==null&&(_l(e,2),rn(e))}function Me(e,t,n){if(e.tag===3)em(e,e,n);else for(;t!==null;){if(t.tag===3){em(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=Yt(n,e),n=th(2),a=qn(t,n,2),a!==null&&(nh(n,a,t,e),_l(a,2),rn(a));break}}t=t.return}}function zc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new s1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(bc=!0,l.add(n),e=g1.bind(null,e,t,n),t.then(e,e))}function g1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(ve&n)===n&&(qe===4||qe===3&&(ve&62914560)===ve&&300>wt()-_r?(Te&2)===0&&ol(e,0):xc|=n,rl===ve&&(rl=0)),rn(e)}function tm(e,t){t===0&&(t=Ks()),e=ha(e,t),e!==null&&(_l(e,t),rn(e))}function p1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tm(e,n)}function y1(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),tm(e,n)}function v1(e,t){return ku(e,t)}var Gr=null,sl=null,Ac=!1,qr=!1,Mc=!1,Wn=0;function rn(e){e!==sl&&e.next===null&&(sl===null?Gr=sl=e:sl=sl.next=e),qr=!0,Ac||(Ac=!0,x1())}function mi(e,t){if(!Mc&&qr){Mc=!0;do for(var n=!1,a=Gr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var s=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-Tt(42|e)+1)-1,r&=l&~(s&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,im(a,r))}else r=ve,r=Zi(a,a===Ne?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Nl(a,r)||(n=!0,im(a,r));a=a.next}while(n);Mc=!1}}function b1(){nm()}function nm(){qr=Ac=!1;var e=0;Wn!==0&&D1()&&(e=Wn);for(var t=wt(),n=null,a=Gr;a!==null;){var l=a.next,r=am(a,t);r===0?(a.next=null,n===null?Gr=l:n.next=l,l===null&&(sl=n)):(n=a,(e!==0||(r&3)!==0)&&(qr=!0)),a=l}We!==0&&We!==5||mi(e),Wn!==0&&(Wn=0)}function am(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Tt(r),h=1<<s,v=l[s];v===-1?((h&n)===0||(h&a)!==0)&&(l[s]=Zg(h,t)):v<=t&&(e.expiredLanes|=h),r&=~h}if(t=Ne,n=ve,n=Zi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Yu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Nl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Yu(a),Qu(n)){case 2:case 8:n=Zs;break;case 32:n=qi;break;case 268435456:n=$s;break;default:n=qi}return a=lm.bind(null,e),n=ku(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Yu(a),e.callbackPriority=2,e.callbackNode=null,2}function lm(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var a=ve;return a=Zi(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(kh(e,a,t),am(e,wt()),e.callbackNode!=null&&e.callbackNode===n?lm.bind(null,e):null)}function im(e,t){if(Yr())return null;kh(e,t,!0)}function x1(){O1(function(){(Te&6)!==0?ku(Vs,b1):nm()})}function Dc(){if(Wn===0){var e=Ja;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Wn=e}return Wn}function rm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function um(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function S1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=rm((l[ht]||null).action),s=a.submitter;s&&(t=(t=s[ht]||null)?rm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var h=new er("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var v=s?um(l,s):new FormData(l);Fo(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=s?um(l,s):new FormData(l),Fo(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Rc=0;Rc<ho.length;Rc++){var Oc=ho[Rc],j1=Oc.toLowerCase(),w1=Oc[0].toUpperCase()+Oc.slice(1);Wt(j1,"on"+w1)}Wt(Hf,"onAnimationEnd"),Wt(kf,"onAnimationIteration"),Wt(Yf,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(kp,"onTransitionRun"),Wt(Yp,"onTransitionStart"),Wt(Gp,"onTransitionCancel"),Wt(Gf,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var s=a.length-1;0<=s;s--){var h=a[s],v=h.instance,A=h.currentTarget;if(h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=A;try{r(l)}catch(O){ar(O)}l.currentTarget=null,r=v}else for(s=0;s<a.length;s++){if(h=a[s],v=h.instance,A=h.currentTarget,h=h.listener,v!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=A;try{r(l)}catch(O){ar(O)}l.currentTarget=null,r=v}}}}function pe(e,t){var n=t[Xu];n===void 0&&(n=t[Xu]=new Set);var a=e+"__bubble";n.has(a)||(cm(t,e,2,!1),n.add(a))}function Nc(e,t,n){var a=0;t&&(a|=4),cm(n,e,a,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[Qr]){e[Qr]=!0,tf.forEach(function(n){n!=="selectionchange"&&(E1.has(n)||Nc(n,!1,e),Nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Nc("selectionchange",!1,t))}}function cm(e,t,n,a){switch(Hm(t)){case 2:var l=I1;break;case 8:l=P1;break;default:l=Jc}n=l.bind(null,t,n,e),l=void 0,!Pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Uc(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var h=a.stateNode.containerInfo;if(h===l)break;if(s===4)for(s=a.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;h!==null;){if(s=Oa(h),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){a=r=s;continue e}h=h.parentNode}}a=a.return}mf(function(){var A=r,O=Wu(n),L=[];e:{var M=qf.get(e);if(M!==void 0){var D=er,W=e;switch(e){case"keypress":if(Ii(n)===0)break e;case"keydown":case"keyup":D=yp;break;case"focusin":W="focus",D=ao;break;case"focusout":W="blur",D=ao;break;case"beforeblur":case"afterblur":D=ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=xp;break;case Hf:case kf:case Yf:D=op;break;case Gf:D=jp;break;case"scroll":case"scrollend":D=ap;break;case"wheel":D=Ep;break;case"copy":case"cut":case"paste":D=sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=bf;break;case"toggle":case"beforetoggle":D=Cp}var ae=(t&4)!==0,Oe=!ae&&(e==="scroll"||e==="scrollend"),E=ae?M!==null?M+"Capture":null:M;ae=[];for(var S=A,z;S!==null;){var U=S;if(z=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||z===null||E===null||(U=Ll(S,E),U!=null&&ae.push(pi(S,U,z))),Oe)break;S=S.return}0<ae.length&&(M=new D(M,W,null,n,O),L.push({event:M,listeners:ae}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",M&&n!==Fu&&(W=n.relatedTarget||n.fromElement)&&(Oa(W)||W[Ra]))break e;if((D||M)&&(M=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,D?(W=n.relatedTarget||n.toElement,D=A,W=W?Oa(W):null,W!==null&&(Oe=m(W),ae=W.tag,W!==Oe||ae!==5&&ae!==27&&ae!==6)&&(W=null)):(D=null,W=A),D!==W)){if(ae=yf,U="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=bf,U="onPointerLeave",E="onPointerEnter",S="pointer"),Oe=D==null?M:Bl(D),z=W==null?M:Bl(W),M=new ae(U,S+"leave",D,n,O),M.target=Oe,M.relatedTarget=z,U=null,Oa(O)===A&&(ae=new ae(E,S+"enter",W,n,O),ae.target=z,ae.relatedTarget=Oe,U=ae),Oe=U,D&&W)t:{for(ae=T1,E=D,S=W,z=0,U=E;U;U=ae(U))z++;U=0;for(var P=S;P;P=ae(P))U++;for(;0<z-U;)E=ae(E),z--;for(;0<U-z;)S=ae(S),U--;for(;z--;){if(E===S||S!==null&&E===S.alternate){ae=E;break t}E=ae(E),S=ae(S)}ae=null}else ae=null;D!==null&&sm(L,M,D,ae,!1),W!==null&&Oe!==null&&sm(L,Oe,W,ae,!0)}}e:{if(M=A?Bl(A):window,D=M.nodeName&&M.nodeName.toLowerCase(),D==="select"||D==="input"&&M.type==="file")var je=zf;else if(Tf(M))if(Af)je=Bp;else{je=_p;var I=Np}else D=M.nodeName,!D||D.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?A&&Ju(A.elementType)&&(je=zf):je=Up;if(je&&(je=je(e,A))){Cf(L,je,n,O);break e}I&&I(e,M,A),e==="focusout"&&A&&M.type==="number"&&A.memoizedProps.value!=null&&Ku(M,"number",M.value)}switch(I=A?Bl(A):window,e){case"focusin":(Tf(I)||I.contentEditable==="true")&&(Ga=I,co=A,Vl=null);break;case"focusout":Vl=co=Ga=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,Bf(L,n,O);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":Bf(L,n,O)}var ce;if(io)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ya?wf(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(xf&&n.locale!=="ko"&&(Ya||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ya&&(ce=gf()):(Un=O,eo="value"in Un?Un.value:Un.textContent,Ya=!0)),I=Xr(A,be),0<I.length&&(be=new vf(be,e,null,n,O),L.push({event:be,listeners:I}),ce?be.data=ce:(ce=Ef(n),ce!==null&&(be.data=ce)))),(ce=Ap?Mp(e,n):Dp(e,n))&&(be=Xr(A,"onBeforeInput"),0<be.length&&(I=new vf("onBeforeInput","beforeinput",null,n,O),L.push({event:I,listeners:be}),I.data=ce)),S1(L,e,A,n,O)}om(L,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ll(e,n),l!=null&&a.unshift(pi(e,l,r)),l=Ll(e,t),l!=null&&a.push(pi(e,l,r))),e.tag===3)return a;e=e.return}return[]}function T1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sm(e,t,n,a,l){for(var r=t._reactName,s=[];n!==null&&n!==a;){var h=n,v=h.alternate,A=h.stateNode;if(h=h.tag,v!==null&&v===a)break;h!==5&&h!==26&&h!==27||A===null||(v=A,l?(A=Ll(n,r),A!=null&&s.unshift(pi(n,A,v))):l||(A=Ll(n,r),A!=null&&s.push(pi(n,A,v)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var C1=/\r\n?/g,z1=/\u0000|\uFFFD/g;function fm(e){return(typeof e=="string"?e:""+e).replace(C1,`
`).replace(z1,"")}function dm(e,t){return t=fm(t),fm(e)===t}function Re(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||La(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&La(e,""+a);break;case"className":Ki(e,"class",a);break;case"tabIndex":Ki(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ki(e,n,a);break;case"style":df(e,a,r);break;case"data":if(t!=="object"){Ki(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",l.name,l,null),Re(e,t,"formEncType",l.formEncType,l,null),Re(e,t,"formMethod",l.formMethod,l,null),Re(e,t,"formTarget",l.formTarget,l,null)):(Re(e,t,"encType",l.encType,l,null),Re(e,t,"method",l.method,l,null),Re(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=dn);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Fi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),$i(e,"popover",a);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":$i(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tp.get(n)||n,$i(e,n,a))}}function Bc(e,t,n,a,l,r){switch(n){case"style":df(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?La(e,a):(typeof a=="number"||typeof a=="bigint")&&La(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[ht]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):$i(e,n,a)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,r,s,n,null)}}l&&Re(e,t,"srcSet",n.srcSet,n,null),a&&Re(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var h=r=s=l=null,v=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":l=O;break;case"type":s=O;break;case"checked":v=O;break;case"defaultChecked":A=O;break;case"value":r=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Re(e,t,a,O,n,null)}}of(e,r,h,v,A,s,l,!1);return;case"select":pe("invalid",e),a=s=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":s=h;break;case"multiple":a=h;default:Re(e,t,l,h,n,null)}t=r,n=s,e.multiple=!!a,t!=null?Ba(e,!!a,t,!1):n!=null&&Ba(e,!!a,n,!0);return;case"textarea":pe("invalid",e),r=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(h=n[s],h!=null))switch(s){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Re(e,t,s,h,n,null)}sf(e,a,l,r);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Re(e,t,v,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<gi.length;a++)pe(gi[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,A,a,n,null)}return;default:if(Ju(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&Bc(e,t,O,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Re(e,t,h,a,n,null))}function A1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,h=null,v=null,A=null,O=null;for(D in n){var L=n[D];if(n.hasOwnProperty(D)&&L!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=L;default:a.hasOwnProperty(D)||Re(e,t,D,null,a,L)}}for(var M in a){var D=a[M];if(L=n[M],a.hasOwnProperty(M)&&(D!=null||L!=null))switch(M){case"type":r=D;break;case"name":l=D;break;case"checked":A=D;break;case"defaultChecked":O=D;break;case"value":s=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:D!==L&&Re(e,t,M,D,a,L)}}$u(e,s,h,v,A,O,r,l);return;case"select":D=s=h=M=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":D=v;default:a.hasOwnProperty(r)||Re(e,t,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":M=r;break;case"defaultValue":h=r;break;case"multiple":s=r;default:r!==v&&Re(e,t,l,r,a,v)}t=h,n=s,a=D,M!=null?Ba(e,!!n,M,!1):!!a!=!!n&&(t!=null?Ba(e,!!n,t,!0):Ba(e,!!n,n?[]:"",!1));return;case"textarea":D=M=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Re(e,t,h,null,a,l)}for(s in a)if(l=a[s],r=n[s],a.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":M=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Re(e,t,s,l,a,r)}cf(e,M,D);return;case"option":for(var W in n)if(M=n[W],n.hasOwnProperty(W)&&M!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Re(e,t,W,null,a,M)}for(v in a)if(M=a[v],D=n[v],a.hasOwnProperty(v)&&M!==D&&(M!=null||D!=null))switch(v){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Re(e,t,v,M,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)M=n[ae],n.hasOwnProperty(ae)&&M!=null&&!a.hasOwnProperty(ae)&&Re(e,t,ae,null,a,M);for(A in a)if(M=a[A],D=n[A],a.hasOwnProperty(A)&&M!==D&&(M!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Re(e,t,A,M,a,D)}return;default:if(Ju(t)){for(var Oe in n)M=n[Oe],n.hasOwnProperty(Oe)&&M!==void 0&&!a.hasOwnProperty(Oe)&&Bc(e,t,Oe,void 0,a,M);for(O in a)M=a[O],D=n[O],!a.hasOwnProperty(O)||M===D||M===void 0&&D===void 0||Bc(e,t,O,M,a,D);return}}for(var E in n)M=n[E],n.hasOwnProperty(E)&&M!=null&&!a.hasOwnProperty(E)&&Re(e,t,E,null,a,M);for(L in a)M=a[L],D=n[L],!a.hasOwnProperty(L)||M===D||M==null&&D==null||Re(e,t,L,M,a,D)}function hm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],r=l.transferSize,s=l.initiatorType,h=l.duration;if(r&&h&&hm(s)){for(s=0,h=l.responseEnd,a+=1;a<n.length;a++){var v=n[a],A=v.startTime;if(A>h)break;var O=v.transferSize,L=v.initiatorType;O&&hm(L)&&(v=v.responseEnd,s+=O*(v<h?1:(h-A)/(v-A)))}if(--a,t+=8*(r+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Hc=null;function Vr(e){return e.nodeType===9?e:e.ownerDocument}function mm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yc=null;function D1(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,R1=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(e){return ym.resolve(null).then(e).catch(N1)}:pm;function N1(e){setTimeout(function(){throw e})}function In(e){return e==="head"}function vm(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ml(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")yi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yi(n);for(var r=n.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[Ul]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&yi(e.ownerDocument.body);n=l}while(n);ml(t)}function bm(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Gc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gc(n),Vu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function _1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ul])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function U1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function xm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$?"||e.data==="$~"}function Qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function B1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xc=null;function Sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function jm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wm(e,t,n){switch(t=Vr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vu(e)}var Zt=new Map,Em=new Set;function Zr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=$.d;$.d={f:L1,r:H1,D:k1,C:Y1,L:G1,m:q1,X:X1,S:Q1,M:V1};function L1(){var e=An.f(),t=Lr();return e||t}function H1(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?Gd(t):An.r(e)}var fl=typeof document>"u"?null:document;function Tm(e,t,n){var a=fl;if(a&&typeof t=="string"&&t){var l=Ht(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Em.has(l)||(Em.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),ot(t,"link",e),et(t),a.head.appendChild(t)))}}function k1(e){An.D(e),Tm("dns-prefetch",e,null)}function Y1(e,t){An.C(e,t),Tm("preconnect",e,t)}function G1(e,t,n){An.L(e,t,n);var a=fl;if(a&&e&&t){var l='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ht(n.imageSizes)+'"]')):l+='[href="'+Ht(e)+'"]';var r=l;switch(t){case"style":r=dl(e);break;case"script":r=hl(e)}Zt.has(r)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(vi(r))||t==="script"&&a.querySelector(bi(r))||(t=a.createElement("link"),ot(t,"link",e),et(t),a.head.appendChild(t)))}}function q1(e,t){An.m(e,t);var n=fl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ht(a)+'"][href="'+Ht(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hl(e)}if(!Zt.has(r)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bi(r)))return}a=n.createElement("link"),ot(a,"link",e),et(a),n.head.appendChild(a)}}}function Q1(e,t,n){An.S(e,t,n);var a=fl;if(a&&e){var l=_a(a).hoistableStyles,r=dl(e);t=t||"default";var s=l.get(r);if(!s){var h={loading:0,preload:null};if(s=a.querySelector(vi(r)))h.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(r))&&Vc(e,n);var v=s=a.createElement("link");et(v),ot(v,"link",e),v._p=new Promise(function(A,O){v.onload=A,v.onerror=O}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,$r(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:h},l.set(r,s)}}}function X1(e,t){An.X(e,t);var n=fl;if(n&&e){var a=_a(n).hoistableScripts,l=hl(e),r=a.get(l);r||(r=n.querySelector(bi(l)),r||(e=w({src:e,async:!0},t),(t=Zt.get(l))&&Zc(e,t),r=n.createElement("script"),et(r),ot(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function V1(e,t){An.M(e,t);var n=fl;if(n&&e){var a=_a(n).hoistableScripts,l=hl(e),r=a.get(l);r||(r=n.querySelector(bi(l)),r||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(l))&&Zc(e,t),r=n.createElement("script"),et(r),ot(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Cm(e,t,n,a){var l=(l=ie.current)?Zr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=dl(n.href),n=_a(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=dl(n.href);var r=_a(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(vi(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),r||Z1(l,e,n,s.state))),t&&a===null)throw Error(c(528,""));return s}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(n),n=_a(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function dl(e){return'href="'+Ht(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function zm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Z1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ot(t,"link",n),et(t),e.head.appendChild(t))}function hl(e){return'[src="'+Ht(e)+'"]'}function bi(e){return"script[async]"+e}function Am(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(a)return t.instance=a,et(a),a;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),et(a),ot(a,"style",l),$r(a,n.precedence,e),t.instance=a;case"stylesheet":l=dl(n.href);var r=e.querySelector(vi(l));if(r)return t.state.loading|=4,t.instance=r,et(r),r;a=zm(n),(l=Zt.get(l))&&Vc(a,l),r=(e.ownerDocument||e).createElement("link"),et(r);var s=r;return s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),ot(r,"link",a),t.state.loading|=4,$r(r,n.precedence,e),t.instance=r;case"script":return r=hl(n.src),(l=e.querySelector(bi(r)))?(t.instance=l,et(l),l):(a=n,(l=Zt.get(r))&&(a=w({},n),Zc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),ot(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$r(a,n.precedence,e));return t.instance}function $r(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,s=0;s<a.length;s++){var h=a[s];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kr=null;function Mm(e,t,n){if(Kr===null){var a=new Map,l=Kr=new Map;l.set(n,a)}else l=Kr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[Ul]||r[lt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var h=a.get(s);h?h.push(r):a.set(s,[r])}}return a}function Dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function K1(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=dl(a.href),r=t.querySelector(vi(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Jr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,et(r);return}r=t.ownerDocument||t,a=zm(a),(l=Zt.get(l))&&Vc(a,l),r=r.createElement("link"),et(r);var s=r;s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),ot(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Jr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $c=0;function J1(e,t){return e.stylesheets&&e.count===0&&Wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&$c===0&&($c=62500*M1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>$c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Jr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function Wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,t.forEach(F1,e),Fr=null,Jr.call(e))}function F1(e,t){if(!(t.state.loading&4)){var n=Fr.get(e);if(n)var a=n.get(null);else{n=new Map,Fr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=t.instance,s=l.getAttribute("data-precedence"),r=n.get(s)||a,r===a&&n.set(null,l),n.set(s,l),this.count++,a=Jr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var xi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function W1(e,t,n,a,l,r,s,h,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.hiddenUpdates=Gu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Om(e,t,n,a,l,r,s,h,v,A,O,L){return e=new W1(e,t,n,s,v,A,O,L,h),t=1,r===!0&&(t|=24),r=zt(3,null,null,t),e.current=r,r.stateNode=e,t=Co(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Do(r),e}function Nm(e){return e?(e=Xa,e):Xa}function _m(e,t,n,a,l,r){l=Nm(l),a.context===null?a.context=l:a.pendingContext=l,a=Gn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=qn(e,a,t),n!==null&&(bt(n,e,t),Il(n,e,t))}function Um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){Um(e,t),(e=e.alternate)&&Um(e,t)}function Bm(e){if(e.tag===13||e.tag===31){var t=ha(e,67108864);t!==null&&bt(t,e,67108864),Kc(e,67108864)}}function Lm(e){if(e.tag===13||e.tag===31){var t=Ot();t=qu(t);var n=ha(e,t);n!==null&&bt(n,e,t),Kc(e,t)}}var Ir=!0;function I1(e,t,n,a){var l=R.T;R.T=null;var r=$.p;try{$.p=2,Jc(e,t,n,a)}finally{$.p=r,R.T=l}}function P1(e,t,n,a){var l=R.T;R.T=null;var r=$.p;try{$.p=8,Jc(e,t,n,a)}finally{$.p=r,R.T=l}}function Jc(e,t,n,a){if(Ir){var l=Fc(a);if(l===null)Uc(e,t,a,Pr,n),km(e,a);else if(ty(l,e,t,n,a))a.stopPropagation();else if(km(e,a),t&4&&-1<ey.indexOf(e)){for(;l!==null;){var r=Na(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=oa(r.pendingLanes);if(s!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var v=1<<31-Tt(s);h.entanglements[1]|=v,s&=~v}rn(r),(Te&6)===0&&(Ur=wt()+500,mi(0))}}break;case 31:case 13:h=ha(r,2),h!==null&&bt(h,r,2),Lr(),Kc(r,2)}if(r=Fc(a),r===null&&Uc(e,t,a,Pr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Uc(e,t,a,null,n)}}function Fc(e){return e=Wu(e),Wc(e)}var Pr=null;function Wc(e){if(Pr=null,e=Oa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pr=e,null}function Hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kg()){case Vs:return 2;case Zs:return 8;case qi:case Yg:return 32;case $s:return 268435456;default:return 32}default:return 32}}var Ic=!1,Pn=null,ea=null,ta=null,Si=new Map,ji=new Map,na=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function km(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function wi(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Na(t),t!==null&&Bm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ty(e,t,n,a,l){switch(t){case"focusin":return Pn=wi(Pn,e,t,n,a,l),!0;case"dragenter":return ea=wi(ea,e,t,n,a,l),!0;case"mouseover":return ta=wi(ta,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return Si.set(r,wi(Si.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,ji.set(r,wi(ji.get(r)||null,e,t,n,a,l)),!0}return!1}function Ym(e){var t=Oa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,Ps(e.priority,function(){Lm(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,Ps(e.priority,function(){Lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fu=a,n.target.dispatchEvent(a),Fu=null}else return t=Na(n),t!==null&&Bm(t),e.blockedOn=n,!1;t.shift()}return!0}function Gm(e,t,n){eu(e)&&n.delete(t)}function ny(){Ic=!1,Pn!==null&&eu(Pn)&&(Pn=null),ea!==null&&eu(ea)&&(ea=null),ta!==null&&eu(ta)&&(ta=null),Si.forEach(Gm),ji.forEach(Gm)}function tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Ic||(Ic=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ny)))}var nu=null;function qm(e){nu!==e&&(nu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){nu===e&&(nu=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Wc(a||n)===null)continue;break}var r=Na(n);r!==null&&(e.splice(t,3),t-=3,Fo(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ml(e){function t(v){return tu(v,e)}Pn!==null&&tu(Pn,e),ea!==null&&tu(ea,e),ta!==null&&tu(ta,e),Si.forEach(t),ji.forEach(t);for(var n=0;n<na.length;n++){var a=na[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],s=l[ht]||null;if(typeof r=="function")s||qm(n);else if(s){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[ht]||null)h=s.formAction;else if(Wc(l)!==null)continue}else h=s.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),qm(n)}}}function Qm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Pc(e){this._internalRoot=e}au.prototype.render=Pc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ot();_m(n,a,e,t,null,null)},au.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_m(e.current,2,null,e,null,null),Lr(),t[Ra]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Ym(e)}};var Xm=o.version;if(Xm!=="19.2.0")throw Error(c(527,Xm,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var ay={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Ol=lu.inject(ay),Et=lu}catch{}}return Ti.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=Wd,r=Id,s=Pd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Om(e,1,!1,null,null,n,a,null,l,r,s,Qm),e[Ra]=t.current,_c(e),new Pc(t)},Ti.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",r=Wd,s=Id,h=Pd,v=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=Om(e,1,!0,t,n??null,a,l,v,r,s,h,Qm),t.context=Nm(null),n=t.current,a=Ot(),a=qu(a),l=Gn(a),l.callback=null,qn(n,l,a),n=a,t.current.lanes=n,_l(t,n),rn(t),e[Ra]=t.current,_c(e),new au(t)},Ti.version="19.2.0",Ti}var e0;function my(){if(e0)return ns.exports;e0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),ns.exports=hy(),ns.exports}var gy=my();var t0="popstate";function py(i={}){function o(c,d){let{pathname:m,search:y,hash:j}=c.location;return xs("",{pathname:m,search:y,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function f(c,d){return typeof d=="string"?d:Ui(d)}return vy(o,f,null,i)}function Ye(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function tn(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function yy(){return Math.random().toString(36).substring(2,10)}function n0(i,o){return{usr:i.state,key:i.key,idx:o}}function xs(i,o,f=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Al(o):o,state:f,key:o&&o.key||c||yy()}}function Ui({pathname:i="/",search:o="",hash:f=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(i+=f.charAt(0)==="#"?f:"#"+f),i}function Al(i){let o={};if(i){let f=i.indexOf("#");f>=0&&(o.hash=i.substring(f),i=i.substring(0,f));let c=i.indexOf("?");c>=0&&(o.search=i.substring(c),i=i.substring(0,c)),i&&(o.pathname=i)}return o}function vy(i,o,f,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,y=d.history,j="POP",b=null,p=T();p==null&&(p=0,y.replaceState({...y.state,idx:p},""));function T(){return(y.state||{idx:null}).idx}function w(){j="POP";let Z=T(),k=Z==null?null:Z-p;p=Z,b&&b({action:j,location:X.location,delta:k})}function N(Z,k){j="PUSH";let Y=xs(X.location,Z,k);p=T()+1;let Q=n0(Y,p),ne=X.createHref(Y);try{y.pushState(Q,"",ne)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;d.location.assign(ne)}m&&b&&b({action:j,location:X.location,delta:1})}function H(Z,k){j="REPLACE";let Y=xs(X.location,Z,k);p=T();let Q=n0(Y,p),ne=X.createHref(Y);y.replaceState(Q,"",ne),m&&b&&b({action:j,location:X.location,delta:0})}function G(Z){return by(Z)}let X={get action(){return j},get location(){return i(d,y)},listen(Z){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(t0,w),b=Z,()=>{d.removeEventListener(t0,w),b=null}},createHref(Z){return o(d,Z)},createURL:G,encodeLocation(Z){let k=G(Z);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:N,replace:H,go(Z){return y.go(Z)}};return X}function by(i,o=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(f,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Ui(i);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function k0(i,o,f="/"){return xy(i,o,f,!1)}function xy(i,o,f,c){let d=typeof o=="string"?Al(o):o,m=Rn(d.pathname||"/",f);if(m==null)return null;let y=Y0(i);Sy(y);let j=null;for(let b=0;j==null&&b<y.length;++b){let p=Oy(m);j=Dy(y[b],p,c)}return j}function Y0(i,o=[],f=[],c="",d=!1){let m=(y,j,b=d,p)=>{let T={relativePath:p===void 0?y.path||"":p,caseSensitive:y.caseSensitive===!0,childrenIndex:j,route:y};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&b)return;Ye(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let w=Dn([c,T.relativePath]),N=f.concat(T);y.children&&y.children.length>0&&(Ye(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Y0(y.children,o,N,w,b)),!(y.path==null&&!y.index)&&o.push({path:w,score:Ay(w,y.index),routesMeta:N})};return i.forEach((y,j)=>{if(y.path===""||!y.path?.includes("?"))m(y,j);else for(let b of G0(y.path))m(y,j,!0,b)}),o}function G0(i){let o=i.split("/");if(o.length===0)return[];let[f,...c]=o,d=f.endsWith("?"),m=f.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let y=G0(c.join("/")),j=[];return j.push(...y.map(b=>b===""?m:[m,b].join("/"))),d&&j.push(...y),j.map(b=>i.startsWith("/")&&b===""?"/":b)}function Sy(i){i.sort((o,f)=>o.score!==f.score?f.score-o.score:My(o.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var jy=/^:[\w-]+$/,wy=3,Ey=2,Ty=1,Cy=10,zy=-2,a0=i=>i==="*";function Ay(i,o){let f=i.split("/"),c=f.length;return f.some(a0)&&(c+=zy),o&&(c+=Ey),f.filter(d=>!a0(d)).reduce((d,m)=>d+(jy.test(m)?wy:m===""?Ty:Cy),c)}function My(i,o){return i.length===o.length&&i.slice(0,-1).every((c,d)=>c===o[d])?i[i.length-1]-o[o.length-1]:0}function Dy(i,o,f=!1){let{routesMeta:c}=i,d={},m="/",y=[];for(let j=0;j<c.length;++j){let b=c[j],p=j===c.length-1,T=m==="/"?o:o.slice(m.length)||"/",w=Tu({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},T),N=b.route;if(!w&&p&&f&&!c[c.length-1].route.index&&(w=Tu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},T)),!w)return null;Object.assign(d,w.params),y.push({params:d,pathname:Dn([m,w.pathname]),pathnameBase:Ly(Dn([m,w.pathnameBase])),route:N}),w.pathnameBase!=="/"&&(m=Dn([m,w.pathnameBase]))}return y}function Tu(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[f,c]=Ry(i.path,i.caseSensitive,i.end),d=o.match(f);if(!d)return null;let m=d[0],y=m.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:c.reduce((p,{paramName:T,isOptional:w},N)=>{if(T==="*"){let G=j[N]||"";y=m.slice(0,m.length-G.length).replace(/(.)\/+$/,"$1")}const H=j[N];return w&&!H?p[T]=void 0:p[T]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:y,pattern:i}}function Ry(i,o=!1,f=!0){tn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,j,b)=>(c.push({paramName:j,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function Oy(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return tn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Rn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,c=i.charAt(f);return c&&c!=="/"?null:i.slice(f)||"/"}var Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_y=i=>Ny.test(i);function Uy(i,o="/"){let{pathname:f,search:c="",hash:d=""}=typeof i=="string"?Al(i):i,m;if(f)if(_y(f))m=f;else{if(f.includes("//")){let y=f;f=f.replace(/\/\/+/g,"/"),tn(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${f}`)}f.startsWith("/")?m=l0(f.substring(1),"/"):m=l0(f,o)}else m=o;return{pathname:m,search:Hy(c),hash:ky(d)}}function l0(i,o){let f=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function rs(i,o,f,c){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function By(i){return i.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function q0(i){let o=By(i);return o.map((f,c)=>c===o.length-1?f.pathname:f.pathnameBase)}function Q0(i,o,f,c=!1){let d;typeof i=="string"?d=Al(i):(d={...i},Ye(!d.pathname||!d.pathname.includes("?"),rs("?","pathname","search",d)),Ye(!d.pathname||!d.pathname.includes("#"),rs("#","pathname","hash",d)),Ye(!d.search||!d.search.includes("#"),rs("#","search","hash",d)));let m=i===""||d.pathname==="",y=m?"/":d.pathname,j;if(y==null)j=f;else{let w=o.length-1;if(!c&&y.startsWith("..")){let N=y.split("/");for(;N[0]==="..";)N.shift(),w-=1;d.pathname=N.join("/")}j=w>=0?o[w]:"/"}let b=Uy(d,j),p=y&&y!=="/"&&y.endsWith("/"),T=(m||y===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(p||T)&&(b.pathname+="/"),b}var Dn=i=>i.join("/").replace(/\/\/+/g,"/"),Ly=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Hy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ky=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Yy(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var X0=["POST","PUT","PATCH","DELETE"];new Set(X0);var Gy=["GET",...X0];new Set(Gy);var Ml=C.createContext(null);Ml.displayName="DataRouter";var Mu=C.createContext(null);Mu.displayName="DataRouterState";C.createContext(!1);var V0=C.createContext({isTransitioning:!1});V0.displayName="ViewTransition";var qy=C.createContext(new Map);qy.displayName="Fetchers";var Qy=C.createContext(null);Qy.displayName="Await";var sn=C.createContext(null);sn.displayName="Navigation";var Hi=C.createContext(null);Hi.displayName="Location";var On=C.createContext({outlet:null,matches:[],isDataRoute:!1});On.displayName="Route";var Rs=C.createContext(null);Rs.displayName="RouteError";function Xy(i,{relative:o}={}){Ye(ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=C.useContext(sn),{hash:d,pathname:m,search:y}=Yi(i,{relative:o}),j=m;return f!=="/"&&(j=m==="/"?f:Dn([f,m])),c.createHref({pathname:j,search:y,hash:d})}function ki(){return C.useContext(Hi)!=null}function Ma(){return Ye(ki(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Hi).location}var Z0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $0(i){C.useContext(sn).static||C.useLayoutEffect(i)}function _t(){let{isDataRoute:i}=C.useContext(On);return i?av():Vy()}function Vy(){Ye(ki(),"useNavigate() may be used only in the context of a <Router> component.");let i=C.useContext(Ml),{basename:o,navigator:f}=C.useContext(sn),{matches:c}=C.useContext(On),{pathname:d}=Ma(),m=JSON.stringify(q0(c)),y=C.useRef(!1);return $0(()=>{y.current=!0}),C.useCallback((b,p={})=>{if(tn(y.current,Z0),!y.current)return;if(typeof b=="number"){f.go(b);return}let T=Q0(b,JSON.parse(m),d,p.relative==="path");i==null&&o!=="/"&&(T.pathname=T.pathname==="/"?o:Dn([o,T.pathname])),(p.replace?f.replace:f.push)(T,p.state,p)},[o,f,m,d,i])}C.createContext(null);function Yi(i,{relative:o}={}){let{matches:f}=C.useContext(On),{pathname:c}=Ma(),d=JSON.stringify(q0(f));return C.useMemo(()=>Q0(i,JSON.parse(d),c,o==="path"),[i,d,c,o])}function Zy(i,o){return K0(i,o)}function K0(i,o,f,c,d){Ye(ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=C.useContext(sn),{matches:y}=C.useContext(On),j=y[y.length-1],b=j?j.params:{},p=j?j.pathname:"/",T=j?j.pathnameBase:"/",w=j&&j.route;{let Y=w&&w.path||"";J0(p,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let N=Ma(),H;if(o){let Y=typeof o=="string"?Al(o):o;Ye(T==="/"||Y.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),H=Y}else H=N;let G=H.pathname||"/",X=G;if(T!=="/"){let Y=T.replace(/^\//,"").split("/");X="/"+G.replace(/^\//,"").split("/").slice(Y.length).join("/")}let Z=k0(i,{pathname:X});tn(w||Z!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),tn(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Wy(Z&&Z.map(Y=>Object.assign({},Y,{params:Object.assign({},b,Y.params),pathname:Dn([T,m.encodeLocation?m.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?T:Dn([T,m.encodeLocation?m.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),y,f,c,d);return o&&k?C.createElement(Hi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},k):k}function $y(){let i=nv(),o=Yy(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),f=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",i),y=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:m},"ErrorBoundary")," or"," ",C.createElement("code",{style:m},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},o),f?C.createElement("pre",{style:d},f):null,y)}var Ky=C.createElement($y,null),Jy=class extends C.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.onError?this.props.onError(i,o):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?C.createElement(On.Provider,{value:this.props.routeContext},C.createElement(Rs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fy({routeContext:i,match:o,children:f}){let c=C.useContext(Ml);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),C.createElement(On.Provider,{value:i},f)}function Wy(i,o=[],f=null,c=null,d=null){if(i==null){if(!f)return null;if(f.errors)i=f.matches;else if(o.length===0&&!f.initialized&&f.matches.length>0)i=f.matches;else return null}let m=i,y=f?.errors;if(y!=null){let T=m.findIndex(w=>w.route.id&&y?.[w.route.id]!==void 0);Ye(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,T+1))}let j=!1,b=-1;if(f)for(let T=0;T<m.length;T++){let w=m[T];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(b=T),w.route.id){let{loaderData:N,errors:H}=f,G=w.route.loader&&!N.hasOwnProperty(w.route.id)&&(!H||H[w.route.id]===void 0);if(w.route.lazy||G){j=!0,b>=0?m=m.slice(0,b+1):m=[m[0]];break}}}let p=f&&c?(T,w)=>{c(T,{location:f.location,params:f.matches?.[0]?.params??{},errorInfo:w})}:void 0;return m.reduceRight((T,w,N)=>{let H,G=!1,X=null,Z=null;f&&(H=y&&w.route.id?y[w.route.id]:void 0,X=w.route.errorElement||Ky,j&&(b<0&&N===0?(J0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,Z=null):b===N&&(G=!0,Z=w.route.hydrateFallbackElement||null)));let k=o.concat(m.slice(0,N+1)),Y=()=>{let Q;return H?Q=X:G?Q=Z:w.route.Component?Q=C.createElement(w.route.Component,null):w.route.element?Q=w.route.element:Q=T,C.createElement(Fy,{match:w,routeContext:{outlet:T,matches:k,isDataRoute:f!=null},children:Q})};return f&&(w.route.ErrorBoundary||w.route.errorElement||N===0)?C.createElement(Jy,{location:f.location,revalidation:f.revalidation,component:X,error:H,children:Y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:p}):Y()},null)}function Os(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iy(i){let o=C.useContext(Ml);return Ye(o,Os(i)),o}function Py(i){let o=C.useContext(Mu);return Ye(o,Os(i)),o}function ev(i){let o=C.useContext(On);return Ye(o,Os(i)),o}function Ns(i){let o=ev(i),f=o.matches[o.matches.length-1];return Ye(f.route.id,`${i} can only be used on routes that contain a unique "id"`),f.route.id}function tv(){return Ns("useRouteId")}function nv(){let i=C.useContext(Rs),o=Py("useRouteError"),f=Ns("useRouteError");return i!==void 0?i:o.errors?.[f]}function av(){let{router:i}=Iy("useNavigate"),o=Ns("useNavigate"),f=C.useRef(!1);return $0(()=>{f.current=!0}),C.useCallback(async(d,m={})=>{tn(f.current,Z0),f.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:o,...m}))},[i,o])}var i0={};function J0(i,o,f){!o&&!i0[i]&&(i0[i]=!0,tn(!1,f))}C.memo(lv);function lv({routes:i,future:o,state:f,unstable_onError:c}){return K0(i,void 0,f,c,o)}function St(i){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iv({basename:i="/",children:o=null,location:f,navigationType:c="POP",navigator:d,static:m=!1}){Ye(!ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=i.replace(/^\/*/,"/"),j=C.useMemo(()=>({basename:y,navigator:d,static:m,future:{}}),[y,d,m]);typeof f=="string"&&(f=Al(f));let{pathname:b="/",search:p="",hash:T="",state:w=null,key:N="default"}=f,H=C.useMemo(()=>{let G=Rn(b,y);return G==null?null:{location:{pathname:G,search:p,hash:T,state:w,key:N},navigationType:c}},[y,b,p,T,w,N,c]);return tn(H!=null,`<Router basename="${y}"> is not able to match the URL "${b}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:C.createElement(sn.Provider,{value:j},C.createElement(Hi.Provider,{children:o,value:H}))}function rv({children:i,location:o}){return Zy(Ss(i),o)}function Ss(i,o=[]){let f=[];return C.Children.forEach(i,(c,d)=>{if(!C.isValidElement(c))return;let m=[...o,d];if(c.type===C.Fragment){f.push.apply(f,Ss(c.props.children,m));return}Ye(c.type===St,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=Ss(c.props.children,m)),f.push(y)}),f}var yu="get",vu="application/x-www-form-urlencoded";function Du(i){return i!=null&&typeof i.tagName=="string"}function uv(i){return Du(i)&&i.tagName.toLowerCase()==="button"}function ov(i){return Du(i)&&i.tagName.toLowerCase()==="form"}function cv(i){return Du(i)&&i.tagName.toLowerCase()==="input"}function sv(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function fv(i,o){return i.button===0&&(!o||o==="_self")&&!sv(i)}var iu=null;function dv(){if(iu===null)try{new FormData(document.createElement("form"),0),iu=!1}catch{iu=!0}return iu}var hv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function us(i){return i!=null&&!hv.has(i)?(tn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`),null):i}function mv(i,o){let f,c,d,m,y;if(ov(i)){let j=i.getAttribute("action");c=j?Rn(j,o):null,f=i.getAttribute("method")||yu,d=us(i.getAttribute("enctype"))||vu,m=new FormData(i)}else if(uv(i)||cv(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||j.getAttribute("action");if(c=b?Rn(b,o):null,f=i.getAttribute("formmethod")||j.getAttribute("method")||yu,d=us(i.getAttribute("formenctype"))||us(j.getAttribute("enctype"))||vu,m=new FormData(j,i),!dv()){let{name:p,type:T,value:w}=i;if(T==="image"){let N=p?`${p}.`:"";m.append(`${N}x`,"0"),m.append(`${N}y`,"0")}else p&&m.append(p,w)}}else{if(Du(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=yu,c=null,d=vu,y=i}return m&&d==="text/plain"&&(y=m,m=void 0),{action:c,method:f.toLowerCase(),encType:d,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _s(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function gv(i,o,f){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${f}`:o&&Rn(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${f}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${f}`,c}async function pv(i,o){if(i.id in o)return o[i.id];try{let f=await import(i.module);return o[i.id]=f,f}catch(f){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yv(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function vv(i,o,f){let c=await Promise.all(i.map(async d=>{let m=o.routes[d.route.id];if(m){let y=await pv(m,f);return y.links?y.links():[]}return[]}));return jv(c.flat(1).filter(yv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function r0(i,o,f,c,d,m){let y=(b,p)=>f[p]?b.route.id!==f[p].route.id:!0,j=(b,p)=>f[p].pathname!==b.pathname||f[p].route.path?.endsWith("*")&&f[p].params["*"]!==b.params["*"];return m==="assets"?o.filter((b,p)=>y(b,p)||j(b,p)):m==="data"?o.filter((b,p)=>{let T=c.routes[b.route.id];if(!T||!T.hasLoader)return!1;if(y(b,p)||j(b,p))return!0;if(b.route.shouldRevalidate){let w=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function bv(i,o,{includeHydrateFallback:f}={}){return xv(i.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function xv(i){return[...new Set(i)]}function Sv(i){let o={},f=Object.keys(i).sort();for(let c of f)o[c]=i[c];return o}function jv(i,o){let f=new Set;return new Set(o),i.reduce((c,d)=>{let m=JSON.stringify(Sv(d));return f.has(m)||(f.add(m),c.push({key:m,link:d})),c},[])}function F0(){let i=C.useContext(Ml);return _s(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function wv(){let i=C.useContext(Mu);return _s(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Us=C.createContext(void 0);Us.displayName="FrameworkContext";function W0(){let i=C.useContext(Us);return _s(i,"You must render this element inside a <HydratedRouter> element"),i}function Ev(i,o){let f=C.useContext(Us),[c,d]=C.useState(!1),[m,y]=C.useState(!1),{onFocus:j,onBlur:b,onMouseEnter:p,onMouseLeave:T,onTouchStart:w}=o,N=C.useRef(null);C.useEffect(()=>{if(i==="render"&&y(!0),i==="viewport"){let X=k=>{k.forEach(Y=>{y(Y.isIntersecting)})},Z=new IntersectionObserver(X,{threshold:.5});return N.current&&Z.observe(N.current),()=>{Z.disconnect()}}},[i]),C.useEffect(()=>{if(c){let X=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(X)}}},[c]);let H=()=>{d(!0)},G=()=>{d(!1),y(!1)};return f?i!=="intent"?[m,N,{}]:[m,N,{onFocus:Ci(j,H),onBlur:Ci(b,G),onMouseEnter:Ci(p,H),onMouseLeave:Ci(T,G),onTouchStart:Ci(w,H)}]:[!1,N,{}]}function Ci(i,o){return f=>{i&&i(f),f.defaultPrevented||o(f)}}function Tv({page:i,...o}){let{router:f}=F0(),c=C.useMemo(()=>k0(f.routes,i,f.basename),[f.routes,i,f.basename]);return c?C.createElement(zv,{page:i,matches:c,...o}):null}function Cv(i){let{manifest:o,routeModules:f}=W0(),[c,d]=C.useState([]);return C.useEffect(()=>{let m=!1;return vv(i,o,f).then(y=>{m||d(y)}),()=>{m=!0}},[i,o,f]),c}function zv({page:i,matches:o,...f}){let c=Ma(),{manifest:d,routeModules:m}=W0(),{basename:y}=F0(),{loaderData:j,matches:b}=wv(),p=C.useMemo(()=>r0(i,o,b,d,c,"data"),[i,o,b,d,c]),T=C.useMemo(()=>r0(i,o,b,d,c,"assets"),[i,o,b,d,c]),w=C.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let G=new Set,X=!1;if(o.forEach(k=>{let Y=d.routes[k.route.id];!Y||!Y.hasLoader||(!p.some(Q=>Q.route.id===k.route.id)&&k.route.id in j&&m[k.route.id]?.shouldRevalidate||Y.hasClientLoader?X=!0:G.add(k.route.id))}),G.size===0)return[];let Z=gv(i,y,"data");return X&&G.size>0&&Z.searchParams.set("_routes",o.filter(k=>G.has(k.route.id)).map(k=>k.route.id).join(",")),[Z.pathname+Z.search]},[y,j,c,d,p,o,i,m]),N=C.useMemo(()=>bv(T,d),[T,d]),H=Cv(T);return C.createElement(C.Fragment,null,w.map(G=>C.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...f})),N.map(G=>C.createElement("link",{key:G,rel:"modulepreload",href:G,...f})),H.map(({key:G,link:X})=>C.createElement("link",{key:G,nonce:f.nonce,...X})))}function Av(...i){return o=>{i.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var I0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{I0&&(window.__reactRouterVersion="7.9.6")}catch{}function Mv({basename:i,children:o,window:f}){let c=C.useRef();c.current==null&&(c.current=py({window:f,v5Compat:!0}));let d=c.current,[m,y]=C.useState({action:d.action,location:d.location}),j=C.useCallback(b=>{C.startTransition(()=>y(b))},[y]);return C.useLayoutEffect(()=>d.listen(j),[d,j]),C.createElement(iv,{basename:i,children:o,location:m.location,navigationType:m.action,navigator:d})}var P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jt=C.forwardRef(function({onClick:o,discover:f="render",prefetch:c="none",relative:d,reloadDocument:m,replace:y,state:j,target:b,to:p,preventScrollReset:T,viewTransition:w,...N},H){let{basename:G}=C.useContext(sn),X=typeof p=="string"&&P0.test(p),Z,k=!1;if(typeof p=="string"&&X&&(Z=p,I0))try{let ye=new URL(window.location.href),Fe=p.startsWith("//")?new URL(ye.protocol+p):new URL(p),Ie=Rn(Fe.pathname,G);Fe.origin===ye.origin&&Ie!=null?p=Ie+Fe.search+Fe.hash:k=!0}catch{tn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=Xy(p,{relative:d}),[Q,ne,V]=Ev(c,N),F=Nv(p,{replace:y,state:j,target:b,preventScrollReset:T,relative:d,viewTransition:w});function q(ye){o&&o(ye),ye.defaultPrevented||F(ye)}let he=C.createElement("a",{...N,...V,href:Z||Y,onClick:k||m?o:q,ref:Av(H,ne),target:b,"data-discover":!X&&f==="render"?"true":void 0});return Q&&!X?C.createElement(C.Fragment,null,he,C.createElement(Tv,{page:Y})):he});Jt.displayName="Link";var Dv=C.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:c="",end:d=!1,style:m,to:y,viewTransition:j,children:b,...p},T){let w=Yi(y,{relative:p.relative}),N=Ma(),H=C.useContext(Mu),{navigator:G,basename:X}=C.useContext(sn),Z=H!=null&&Hv(w)&&j===!0,k=G.encodeLocation?G.encodeLocation(w).pathname:w.pathname,Y=N.pathname,Q=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;f||(Y=Y.toLowerCase(),Q=Q?Q.toLowerCase():null,k=k.toLowerCase()),Q&&X&&(Q=Rn(Q,X)||Q);const ne=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let V=Y===k||!d&&Y.startsWith(k)&&Y.charAt(ne)==="/",F=Q!=null&&(Q===k||!d&&Q.startsWith(k)&&Q.charAt(k.length)==="/"),q={isActive:V,isPending:F,isTransitioning:Z},he=V?o:void 0,ye;typeof c=="function"?ye=c(q):ye=[c,V?"active":null,F?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof m=="function"?m(q):m;return C.createElement(Jt,{...p,"aria-current":he,className:ye,ref:T,style:Fe,to:y,viewTransition:j},typeof b=="function"?b(q):b)});Dv.displayName="NavLink";var Rv=C.forwardRef(({discover:i="render",fetcherKey:o,navigate:f,reloadDocument:c,replace:d,state:m,method:y=yu,action:j,onSubmit:b,relative:p,preventScrollReset:T,viewTransition:w,...N},H)=>{let G=Bv(),X=Lv(j,{relative:p}),Z=y.toLowerCase()==="get"?"get":"post",k=typeof j=="string"&&P0.test(j),Y=Q=>{if(b&&b(Q),Q.defaultPrevented)return;Q.preventDefault();let ne=Q.nativeEvent.submitter,V=ne?.getAttribute("formmethod")||y;G(ne||Q.currentTarget,{fetcherKey:o,method:V,navigate:f,replace:d,state:m,relative:p,preventScrollReset:T,viewTransition:w})};return C.createElement("form",{ref:H,method:Z,action:X,onSubmit:c?b:Y,...N,"data-discover":!k&&i==="render"?"true":void 0})});Rv.displayName="Form";function Ov(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eg(i){let o=C.useContext(Ml);return Ye(o,Ov(i)),o}function Nv(i,{target:o,replace:f,state:c,preventScrollReset:d,relative:m,viewTransition:y}={}){let j=_t(),b=Ma(),p=Yi(i,{relative:m});return C.useCallback(T=>{if(fv(T,o)){T.preventDefault();let w=f!==void 0?f:Ui(b)===Ui(p);j(i,{replace:w,state:c,preventScrollReset:d,relative:m,viewTransition:y})}},[b,j,p,f,c,o,i,d,m,y])}var _v=0,Uv=()=>`__${String(++_v)}__`;function Bv(){let{router:i}=eg("useSubmit"),{basename:o}=C.useContext(sn),f=tv();return C.useCallback(async(c,d={})=>{let{action:m,method:y,encType:j,formData:b,body:p}=mv(c,o);if(d.navigate===!1){let T=d.fetcherKey||Uv();await i.fetch(T,f,d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||y,formEncType:d.encType||j,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||y,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:f,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,o,f])}function Lv(i,{relative:o}={}){let{basename:f}=C.useContext(sn),c=C.useContext(On);Ye(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...Yi(i||".",{relative:o})},y=Ma();if(i==null){m.search=y.search;let j=new URLSearchParams(m.search),b=j.getAll("index");if(b.some(T=>T==="")){j.delete("index"),b.filter(w=>w).forEach(w=>j.append("index",w));let T=j.toString();m.search=T?`?${T}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:Dn([f,m.pathname])),Ui(m)}function Hv(i,{relative:o}={}){let f=C.useContext(V0);Ye(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=eg("useViewTransitionState"),d=Yi(i,{relative:o});if(!f.isTransitioning)return!1;let m=Rn(f.currentLocation.pathname,c)||f.currentLocation.pathname,y=Rn(f.nextLocation.pathname,c)||f.nextLocation.pathname;return Tu(d.pathname,y)!=null||Tu(d.pathname,m)!=null}var jt=function(){return jt=Object.assign||function(o){for(var f,c=1,d=arguments.length;c<d;c++){f=arguments[c];for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(o[m]=f[m])}return o},jt.apply(this,arguments)};function Bi(i,o,f){if(f||arguments.length===2)for(var c=0,d=o.length,m;c<d;c++)(m||!(c in o))&&(m||(m=Array.prototype.slice.call(o,0,c)),m[c]=o[c]);return i.concat(m||Array.prototype.slice.call(o))}var Le="-ms-",_i="-moz-",ze="-webkit-",tg="comm",Ru="rule",Bs="decl",kv="@import",ng="@keyframes",Yv="@layer",ag=Math.abs,Ls=String.fromCharCode,js=Object.assign;function Gv(i,o){return at(i,0)^45?(((o<<2^at(i,0))<<2^at(i,1))<<2^at(i,2))<<2^at(i,3):0}function lg(i){return i.trim()}function Mn(i,o){return(i=o.exec(i))?i[0]:i}function de(i,o,f){return i.replace(o,f)}function bu(i,o,f){return i.indexOf(o,f)}function at(i,o){return i.charCodeAt(o)|0}function wl(i,o,f){return i.slice(o,f)}function cn(i){return i.length}function ig(i){return i.length}function Ni(i,o){return o.push(i),i}function qv(i,o){return i.map(o).join("")}function u0(i,o){return i.filter(function(f){return!Mn(f,o)})}var Ou=1,El=1,rg=0,Kt=0,Je=0,Dl="";function Nu(i,o,f,c,d,m,y,j){return{value:i,root:o,parent:f,type:c,props:d,children:m,line:Ou,column:El,length:y,return:"",siblings:j}}function ua(i,o){return js(Nu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},o)}function gl(i){for(;i.root;)i=ua(i.root,{children:[i]});Ni(i,i.siblings)}function Qv(){return Je}function Xv(){return Je=Kt>0?at(Dl,--Kt):0,El--,Je===10&&(El=1,Ou--),Je}function en(){return Je=Kt<rg?at(Dl,Kt++):0,El++,Je===10&&(El=1,Ou++),Je}function za(){return at(Dl,Kt)}function xu(){return Kt}function _u(i,o){return wl(Dl,i,o)}function ws(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vv(i){return Ou=El=1,rg=cn(Dl=i),Kt=0,[]}function Zv(i){return Dl="",i}function os(i){return lg(_u(Kt-1,Es(i===91?i+2:i===40?i+1:i)))}function $v(i){for(;(Je=za())&&Je<33;)en();return ws(i)>2||ws(Je)>3?"":" "}function Kv(i,o){for(;--o&&en()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return _u(i,xu()+(o<6&&za()==32&&en()==32))}function Es(i){for(;en();)switch(Je){case i:return Kt;case 34:case 39:i!==34&&i!==39&&Es(Je);break;case 40:i===41&&Es(i);break;case 92:en();break}return Kt}function Jv(i,o){for(;en()&&i+Je!==57;)if(i+Je===84&&za()===47)break;return"/*"+_u(o,Kt-1)+"*"+Ls(i===47?i:en())}function Fv(i){for(;!ws(za());)en();return _u(i,Kt)}function Wv(i){return Zv(Su("",null,null,null,[""],i=Vv(i),0,[0],i))}function Su(i,o,f,c,d,m,y,j,b){for(var p=0,T=0,w=y,N=0,H=0,G=0,X=1,Z=1,k=1,Y=0,Q="",ne=d,V=m,F=c,q=Q;Z;)switch(G=Y,Y=en()){case 40:if(G!=108&&at(q,w-1)==58){bu(q+=de(os(Y),"&","&\f"),"&\f",ag(p?j[p-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:q+=os(Y);break;case 9:case 10:case 13:case 32:q+=$v(G);break;case 92:q+=Kv(xu()-1,7);continue;case 47:switch(za()){case 42:case 47:Ni(Iv(Jv(en(),xu()),o,f,b),b);break;default:q+="/"}break;case 123*X:j[p++]=cn(q)*k;case 125*X:case 59:case 0:switch(Y){case 0:case 125:Z=0;case 59+T:k==-1&&(q=de(q,/\f/g,"")),H>0&&cn(q)-w&&Ni(H>32?c0(q+";",c,f,w-1,b):c0(de(q," ","")+";",c,f,w-2,b),b);break;case 59:q+=";";default:if(Ni(F=o0(q,o,f,p,T,d,j,Q,ne=[],V=[],w,m),m),Y===123)if(T===0)Su(q,o,F,F,ne,m,w,j,V);else switch(N===99&&at(q,3)===110?100:N){case 100:case 108:case 109:case 115:Su(i,F,F,c&&Ni(o0(i,F,F,0,0,d,j,Q,d,ne=[],w,V),V),d,V,w,j,c?ne:V);break;default:Su(q,F,F,F,[""],V,0,j,V)}}p=T=H=0,X=k=1,Q=q="",w=y;break;case 58:w=1+cn(q),H=G;default:if(X<1){if(Y==123)--X;else if(Y==125&&X++==0&&Xv()==125)continue}switch(q+=Ls(Y),Y*X){case 38:k=T>0?1:(q+="\f",-1);break;case 44:j[p++]=(cn(q)-1)*k,k=1;break;case 64:za()===45&&(q+=os(en())),N=za(),T=w=cn(Q=q+=Fv(xu())),Y++;break;case 45:G===45&&cn(q)==2&&(X=0)}}return m}function o0(i,o,f,c,d,m,y,j,b,p,T,w){for(var N=d-1,H=d===0?m:[""],G=ig(H),X=0,Z=0,k=0;X<c;++X)for(var Y=0,Q=wl(i,N+1,N=ag(Z=y[X])),ne=i;Y<G;++Y)(ne=lg(Z>0?H[Y]+" "+Q:de(Q,/&\f/g,H[Y])))&&(b[k++]=ne);return Nu(i,o,f,d===0?Ru:j,b,p,T,w)}function Iv(i,o,f,c){return Nu(i,o,f,tg,Ls(Qv()),wl(i,2,-2),0,c)}function c0(i,o,f,c,d){return Nu(i,o,f,Bs,wl(i,0,c),wl(i,c+1,-1),c,d)}function ug(i,o,f){switch(Gv(i,o)){case 5103:return ze+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+i+i;case 4789:return _i+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+i+_i+i+Le+i+i;case 5936:switch(at(i,o+11)){case 114:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ze+i+Le+de(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ze+i+Le+i+i;case 6165:return ze+i+Le+"flex-"+i+i;case 5187:return ze+i+de(i,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Le+"flex-$1$2")+i;case 5443:return ze+i+Le+"flex-item-"+de(i,/flex-|-self/g,"")+(Mn(i,/flex-|baseline/)?"":Le+"grid-row-"+de(i,/flex-|-self/g,""))+i;case 4675:return ze+i+Le+"flex-line-pack"+de(i,/align-content|flex-|-self/g,"")+i;case 5548:return ze+i+Le+de(i,"shrink","negative")+i;case 5292:return ze+i+Le+de(i,"basis","preferred-size")+i;case 6060:return ze+"box-"+de(i,"-grow","")+ze+i+Le+de(i,"grow","positive")+i;case 4554:return ze+de(i,/([^-])(transform)/g,"$1"+ze+"$2")+i;case 6187:return de(de(de(i,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),i,"")+i;case 5495:case 3959:return de(i,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return de(de(i,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+i+i;case 4200:if(!Mn(i,/flex-|baseline/))return Le+"grid-column-align"+wl(i,o)+i;break;case 2592:case 3360:return Le+de(i,"template-","")+i;case 4384:case 3616:return f&&f.some(function(c,d){return o=d,Mn(c.props,/grid-\w+-end/)})?~bu(i+(f=f[o].value),"span",0)?i:Le+de(i,"-start","")+i+Le+"grid-row-span:"+(~bu(f,"span",0)?Mn(f,/\d+/):+Mn(f,/\d+/)-+Mn(i,/\d+/))+";":Le+de(i,"-start","")+i;case 4896:case 4128:return f&&f.some(function(c){return Mn(c.props,/grid-\w+-start/)})?i:Le+de(de(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return de(i,/(.+)-inline(.+)/,ze+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(i)-1-o>6)switch(at(i,o+1)){case 109:if(at(i,o+4)!==45)break;case 102:return de(i,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+_i+(at(i,o+3)==108?"$3":"$2-$3"))+i;case 115:return~bu(i,"stretch",0)?ug(de(i,"stretch","fill-available"),o,f)+i:i}break;case 5152:case 5920:return de(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,y,j,b,p){return Le+d+":"+m+p+(y?Le+d+"-span:"+(j?b:+b-+m)+p:"")+i});case 4949:if(at(i,o+6)===121)return de(i,":",":"+ze)+i;break;case 6444:switch(at(i,at(i,14)===45?18:11)){case 120:return de(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(at(i,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Le+"$2box$3")+i;case 100:return de(i,":",":"+Le)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(i,"scroll-","scroll-snap-")+i}return i}function Cu(i,o){for(var f="",c=0;c<i.length;c++)f+=o(i[c],c,i,o)||"";return f}function Pv(i,o,f,c){switch(i.type){case Yv:if(i.children.length)break;case kv:case Bs:return i.return=i.return||i.value;case tg:return"";case ng:return i.return=i.value+"{"+Cu(i.children,c)+"}";case Ru:if(!cn(i.value=i.props.join(",")))return""}return cn(f=Cu(i.children,c))?i.return=i.value+"{"+f+"}":""}function eb(i){var o=ig(i);return function(f,c,d,m){for(var y="",j=0;j<o;j++)y+=i[j](f,c,d,m)||"";return y}}function tb(i){return function(o){o.root||(o=o.return)&&i(o)}}function nb(i,o,f,c){if(i.length>-1&&!i.return)switch(i.type){case Bs:i.return=ug(i.value,i.length,f);return;case ng:return Cu([ua(i,{value:de(i.value,"@","@"+ze)})],c);case Ru:if(i.length)return qv(f=i.props,function(d){switch(Mn(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gl(ua(i,{props:[de(d,/:(read-\w+)/,":"+_i+"$1")]})),gl(ua(i,{props:[d]})),js(i,{props:u0(f,c)});break;case"::placeholder":gl(ua(i,{props:[de(d,/:(plac\w+)/,":"+ze+"input-$1")]})),gl(ua(i,{props:[de(d,/:(plac\w+)/,":"+_i+"$1")]})),gl(ua(i,{props:[de(d,/:(plac\w+)/,Le+"input-$1")]})),gl(ua(i,{props:[d]})),js(i,{props:u0(f,c)});break}return""})}}var ab={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Tl=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",og="active",cg="data-styled-version",Uu="6.1.19",Hs=`/*!sc*/
`,zu=typeof window<"u"&&typeof document<"u",lb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),Bu=Object.freeze([]),Cl=Object.freeze({});function ib(i,o,f){return f===void 0&&(f=Cl),i.theme!==f.theme&&i.theme||o||f.theme}var sg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ub=/(^-|-$)/g;function s0(i){return i.replace(rb,"-").replace(ub,"")}var ob=/(a)(d)/gi,ru=52,f0=function(i){return String.fromCharCode(i+(i>25?39:97))};function Ts(i){var o,f="";for(o=Math.abs(i);o>ru;o=o/ru|0)f=f0(o%ru)+f;return(f0(o%ru)+f).replace(ob,"$1-$2")}var cs,fg=5381,Sl=function(i,o){for(var f=o.length;f;)i=33*i^o.charCodeAt(--f);return i},dg=function(i){return Sl(fg,i)};function hg(i){return Ts(dg(i)>>>0)}function cb(i){return i.displayName||i.name||"Component"}function ss(i){return typeof i=="string"&&!0}var mg=typeof Symbol=="function"&&Symbol.for,gg=mg?Symbol.for("react.memo"):60115,sb=mg?Symbol.for("react.forward_ref"):60112,fb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},db={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hb=((cs={})[sb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cs[gg]=pg,cs);function d0(i){return("type"in(o=i)&&o.type.$$typeof)===gg?pg:"$$typeof"in i?hb[i.$$typeof]:fb;var o}var mb=Object.defineProperty,gb=Object.getOwnPropertyNames,h0=Object.getOwnPropertySymbols,pb=Object.getOwnPropertyDescriptor,yb=Object.getPrototypeOf,m0=Object.prototype;function yg(i,o,f){if(typeof o!="string"){if(m0){var c=yb(o);c&&c!==m0&&yg(i,c,f)}var d=gb(o);h0&&(d=d.concat(h0(o)));for(var m=d0(i),y=d0(o),j=0;j<d.length;++j){var b=d[j];if(!(b in db||f&&f[b]||y&&b in y||m&&b in m)){var p=pb(o,b);try{mb(i,b,p)}catch{}}}}return i}function zl(i){return typeof i=="function"}function ks(i){return typeof i=="object"&&"styledComponentId"in i}function Ca(i,o){return i&&o?"".concat(i," ").concat(o):i||o||""}function Cs(i,o){if(i.length===0)return"";for(var f=i[0],c=1;c<i.length;c++)f+=i[c];return f}function Li(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function zs(i,o,f){if(f===void 0&&(f=!1),!f&&!Li(i)&&!Array.isArray(i))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)i[c]=zs(i[c],o[c]);else if(Li(o))for(var c in o)i[c]=zs(i[c],o[c]);return i}function Ys(i,o){Object.defineProperty(i,"toString",{value:o})}function Gi(i){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var vb=(function(){function i(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return i.prototype.indexOfGroup=function(o){for(var f=0,c=0;c<o;c++)f+=this.groupSizes[c];return f},i.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;o>=m;)if((m<<=1)<0)throw Gi(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var y=d;y<m;y++)this.groupSizes[y]=0}for(var j=this.indexOfGroup(o+1),b=(y=0,f.length);y<b;y++)this.tag.insertRule(j,f[y])&&(this.groupSizes[o]++,j++)},i.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],c=this.indexOfGroup(o),d=c+f;this.groupSizes[o]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var c=this.groupSizes[o],d=this.indexOfGroup(o),m=d+c,y=d;y<m;y++)f+="".concat(this.tag.getRule(y)).concat(Hs);return f},i})(),ju=new Map,Au=new Map,wu=1,uu=function(i){if(ju.has(i))return ju.get(i);for(;Au.has(wu);)wu++;var o=wu++;return ju.set(i,o),Au.set(o,i),o},bb=function(i,o){wu=o+1,ju.set(i,o),Au.set(o,i)},xb="style[".concat(Tl,"][").concat(cg,'="').concat(Uu,'"]'),Sb=new RegExp("^".concat(Tl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jb=function(i,o,f){for(var c,d=f.split(","),m=0,y=d.length;m<y;m++)(c=d[m])&&i.registerName(o,c)},wb=function(i,o){for(var f,c=((f=o.textContent)!==null&&f!==void 0?f:"").split(Hs),d=[],m=0,y=c.length;m<y;m++){var j=c[m].trim();if(j){var b=j.match(Sb);if(b){var p=0|parseInt(b[1],10),T=b[2];p!==0&&(bb(T,p),jb(i,T,b[3]),i.getTag().insertRules(p,d)),d.length=0}else d.push(j)}}},g0=function(i){for(var o=document.querySelectorAll(xb),f=0,c=o.length;f<c;f++){var d=o[f];d&&d.getAttribute(Tl)!==og&&(wb(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Eb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(i){var o=document.head,f=i||o,c=document.createElement("style"),d=(function(j){var b=Array.from(j.querySelectorAll("style[".concat(Tl,"]")));return b[b.length-1]})(f),m=d!==void 0?d.nextSibling:null;c.setAttribute(Tl,og),c.setAttribute(cg,Uu);var y=Eb();return y&&c.setAttribute("nonce",y),f.insertBefore(c,m),c},Tb=(function(){function i(o){this.element=vg(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var y=c[d];if(y.ownerNode===f)return y}throw Gi(17)})(this.element),this.length=0}return i.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},i.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},i})(),Cb=(function(){function i(o){this.element=vg(o),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var c=document.createTextNode(f);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},i.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},i})(),zb=(function(){function i(o){this.rules=[],this.length=0}return i.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},i.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},i.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},i})(),p0=zu,Ab={isServer:!zu,useCSSOMInjection:!lb},bg=(function(){function i(o,f,c){o===void 0&&(o=Cl),f===void 0&&(f={});var d=this;this.options=jt(jt({},Ab),o),this.gs=f,this.names=new Map(c),this.server=!!o.isServer,!this.server&&zu&&p0&&(p0=!1,g0(this)),Ys(this,function(){return(function(m){for(var y=m.getTag(),j=y.length,b="",p=function(w){var N=(function(k){return Au.get(k)})(w);if(N===void 0)return"continue";var H=m.names.get(N),G=y.getGroup(w);if(H===void 0||!H.size||G.length===0)return"continue";var X="".concat(Tl,".g").concat(w,'[id="').concat(N,'"]'),Z="";H!==void 0&&H.forEach(function(k){k.length>0&&(Z+="".concat(k,","))}),b+="".concat(G).concat(X,'{content:"').concat(Z,'"}').concat(Hs)},T=0;T<j;T++)p(T);return b})(d)})}return i.registerId=function(o){return uu(o)},i.prototype.rehydrate=function(){!this.server&&zu&&g0(this)},i.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new i(jt(jt({},this.options),o),this.gs,f&&this.names||void 0)},i.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(f){var c=f.useCSSOMInjection,d=f.target;return f.isServer?new zb(d):c?new Tb(d):new Cb(d)})(this.options),new vb(o)));var o},i.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},i.prototype.registerName=function(o,f){if(uu(o),this.names.has(o))this.names.get(o).add(f);else{var c=new Set;c.add(f),this.names.set(o,c)}},i.prototype.insertRules=function(o,f,c){this.registerName(o,f),this.getTag().insertRules(uu(o),c)},i.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},i.prototype.clearRules=function(o){this.getTag().clearGroup(uu(o)),this.clearNames(o)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Mb=/&/g,Db=/^\s*\/\/.*$/gm;function xg(i,o){return i.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=xg(f.children,o)),f})}function Rb(i){var o,f,c,d=Cl,m=d.options,y=m===void 0?Cl:m,j=d.plugins,b=j===void 0?Bu:j,p=function(N,H,G){return G.startsWith(f)&&G.endsWith(f)&&G.replaceAll(f,"").length>0?".".concat(o):N},T=b.slice();T.push(function(N){N.type===Ru&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(Mb,f).replace(c,p))}),y.prefix&&T.push(nb),T.push(Pv);var w=function(N,H,G,X){H===void 0&&(H=""),G===void 0&&(G=""),X===void 0&&(X="&"),o=X,f=H,c=new RegExp("\\".concat(f,"\\b"),"g");var Z=N.replace(Db,""),k=Wv(G||H?"".concat(G," ").concat(H," { ").concat(Z," }"):Z);y.namespace&&(k=xg(k,y.namespace));var Y=[];return Cu(k,eb(T.concat(tb(function(Q){return Y.push(Q)})))),Y};return w.hash=b.length?b.reduce(function(N,H){return H.name||Gi(15),Sl(N,H.name)},fg).toString():"",w}var Ob=new bg,As=Rb(),Sg=jl.createContext({shouldForwardProp:void 0,styleSheet:Ob,stylis:As});Sg.Consumer;jl.createContext(void 0);function y0(){return C.useContext(Sg)}var jg=(function(){function i(o,f){var c=this;this.inject=function(d,m){m===void 0&&(m=As);var y=c.name+m.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,m(c.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,Ys(this,function(){throw Gi(12,String(c.name))})}return i.prototype.getName=function(o){return o===void 0&&(o=As),this.name+o.hash},i})(),Nb=function(i){return i>="A"&&i<="Z"};function v0(i){for(var o="",f=0;f<i.length;f++){var c=i[f];if(f===1&&c==="-"&&i[0]==="-")return i;Nb(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var wg=function(i){return i==null||i===!1||i===""},Eg=function(i){var o,f,c=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!wg(m)&&(Array.isArray(m)&&m.isCss||zl(m)?c.push("".concat(v0(d),":"),m,";"):Li(m)?c.push.apply(c,Bi(Bi(["".concat(d," {")],Eg(m),!1),["}"],!1)):c.push("".concat(v0(d),": ").concat((o=d,(f=m)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||o in ab||o.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return c};function Aa(i,o,f,c){if(wg(i))return[];if(ks(i))return[".".concat(i.styledComponentId)];if(zl(i)){if(!zl(m=i)||m.prototype&&m.prototype.isReactComponent||!o)return[i];var d=i(o);return Aa(d,o,f,c)}var m;return i instanceof jg?f?(i.inject(f,c),[i.getName(c)]):[i]:Li(i)?Eg(i):Array.isArray(i)?Array.prototype.concat.apply(Bu,i.map(function(y){return Aa(y,o,f,c)})):[i.toString()]}function _b(i){for(var o=0;o<i.length;o+=1){var f=i[o];if(zl(f)&&!ks(f))return!1}return!0}var Ub=dg(Uu),Bb=(function(){function i(o,f,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&_b(o),this.componentId=f,this.baseHash=Sl(Ub,f),this.baseStyle=c,bg.registerId(f)}return i.prototype.generateAndInjectStyles=function(o,f,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=Ca(d,this.staticRulesId);else{var m=Cs(Aa(this.rules,o,f,c)),y=Ts(Sl(this.baseHash,m)>>>0);if(!f.hasNameForId(this.componentId,y)){var j=c(m,".".concat(y),void 0,this.componentId);f.insertRules(this.componentId,y,j)}d=Ca(d,y),this.staticRulesId=y}else{for(var b=Sl(this.baseHash,c.hash),p="",T=0;T<this.rules.length;T++){var w=this.rules[T];if(typeof w=="string")p+=w;else if(w){var N=Cs(Aa(w,o,f,c));b=Sl(b,N+T),p+=N}}if(p){var H=Ts(b>>>0);f.hasNameForId(this.componentId,H)||f.insertRules(this.componentId,H,c(p,".".concat(H),void 0,this.componentId)),d=Ca(d,H)}}return d},i})(),Tg=jl.createContext(void 0);Tg.Consumer;var fs={};function Lb(i,o,f){var c=ks(i),d=i,m=!ss(i),y=o.attrs,j=y===void 0?Bu:y,b=o.componentId,p=b===void 0?(function(ne,V){var F=typeof ne!="string"?"sc":s0(ne);fs[F]=(fs[F]||0)+1;var q="".concat(F,"-").concat(hg(Uu+F+fs[F]));return V?"".concat(V,"-").concat(q):q})(o.displayName,o.parentComponentId):b,T=o.displayName,w=T===void 0?(function(ne){return ss(ne)?"styled.".concat(ne):"Styled(".concat(cb(ne),")")})(i):T,N=o.displayName&&o.componentId?"".concat(s0(o.displayName),"-").concat(o.componentId):o.componentId||p,H=c&&d.attrs?d.attrs.concat(j).filter(Boolean):j,G=o.shouldForwardProp;if(c&&d.shouldForwardProp){var X=d.shouldForwardProp;if(o.shouldForwardProp){var Z=o.shouldForwardProp;G=function(ne,V){return X(ne,V)&&Z(ne,V)}}else G=X}var k=new Bb(f,N,c?d.componentStyle:void 0);function Y(ne,V){return(function(F,q,he){var ye=F.attrs,Fe=F.componentStyle,Ie=F.defaultProps,Pe=F.foldedComponentIds,Bt=F.styledComponentId,ft=F.target,ct=jl.useContext(Tg),R=y0(),$=F.shouldForwardProp||R.shouldForwardProp,ee=ib(q,ct,Ie)||Cl,fe=(function(le,ie,me){for(var ke,Ee=jt(jt({},ie),{className:void 0,theme:me}),B=0;B<le.length;B+=1){var re=zl(ke=le[B])?ke(Ee):ke;for(var te in re)Ee[te]=te==="className"?Ca(Ee[te],re[te]):te==="style"?jt(jt({},Ee[te]),re[te]):re[te]}return ie.className&&(Ee.className=Ca(Ee.className,ie.className)),Ee})(ye,q,ee),Se=fe.as||ft,x={};for(var _ in fe)fe[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&fe.theme===ee||(_==="forwardedAs"?x.as=fe.forwardedAs:$&&!$(_,Se)||(x[_]=fe[_]));var K=(function(le,ie){var me=y0(),ke=le.generateAndInjectStyles(ie,me.styleSheet,me.stylis);return ke})(Fe,fe),J=Ca(Pe,Bt);return K&&(J+=" "+K),fe.className&&(J+=" "+fe.className),x[ss(Se)&&!sg.has(Se)?"class":"className"]=J,he&&(x.ref=he),C.createElement(Se,x)})(Q,ne,V)}Y.displayName=w;var Q=jl.forwardRef(Y);return Q.attrs=H,Q.componentStyle=k,Q.displayName=w,Q.shouldForwardProp=G,Q.foldedComponentIds=c?Ca(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=N,Q.target=c?d.target:i,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ne){this._foldedDefaultProps=c?(function(V){for(var F=[],q=1;q<arguments.length;q++)F[q-1]=arguments[q];for(var he=0,ye=F;he<ye.length;he++)zs(V,ye[he],!0);return V})({},d.defaultProps,ne):ne}}),Ys(Q,function(){return".".concat(Q.styledComponentId)}),m&&yg(Q,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function b0(i,o){for(var f=[i[0]],c=0,d=o.length;c<d;c+=1)f.push(o[c],i[c+1]);return f}var x0=function(i){return Object.assign(i,{isCss:!0})};function Cg(i){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(zl(i)||Li(i))return x0(Aa(b0(Bu,Bi([i],o,!0))));var c=i;return o.length===0&&c.length===1&&typeof c[0]=="string"?Aa(c):x0(Aa(b0(c,o)))}function Ms(i,o,f){if(f===void 0&&(f=Cl),!o)throw Gi(1,o);var c=function(d){for(var m=[],y=1;y<arguments.length;y++)m[y-1]=arguments[y];return i(o,f,Cg.apply(void 0,Bi([d],m,!1)))};return c.attrs=function(d){return Ms(i,o,jt(jt({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Ms(i,o,jt(jt({},f),d))},c}var zg=function(i){return Ms(Lb,i)},g=zg;sg.forEach(function(i){g[i]=zg(i)});function Ut(i){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];var c=Cs(Cg.apply(void 0,Bi([i],o,!1))),d=hg(c);return new jg(d,c)}const Hb=g.nav`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #1e293b;
`,kb=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Yb=g(Jt)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;
  
  span {
    color: white;
  }
`,Gb=g.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`,zi=g.li`
  margin: 0 1rem;
`,Ai=g(Jt)`
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,qb=g.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Ag=g(Jt)`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`,Qb=g(Ag)`
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  
  &:hover {
    background: rgba(16, 185, 129, 0.1);
  }
`,Xb=g(Ag)`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
`,Vb=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,Zb=g.span`
  @media (max-width: 768px) {
    display: none;
  }
`,$b=g.button`
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
`,S0=g(Jt)`
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
`,Kb=g(Jt)`
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
`,Jb=g(Jt)`
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
`,ou=({isAuthenticated:i,user:o,onLogout:f})=>(_t(),u.jsx(Hb,{children:u.jsxs(kb,{children:[u.jsxs(Yb,{to:"/",children:["Nexter",u.jsx("span",{children:"Cloud"})]}),u.jsxs(Gb,{children:[u.jsx(zi,{children:u.jsx(Ai,{to:"/",children:"Home"})}),u.jsx(zi,{children:u.jsx(Ai,{to:"/#features",children:"Features"})}),u.jsx(zi,{children:u.jsx(Ai,{to:"/pricing",children:"Pricing"})}),u.jsx(zi,{children:u.jsx(Ai,{to:"/support",children:"Support"})}),u.jsx(zi,{children:u.jsx(Ai,{to:"/about",children:"About"})})]}),i&&o?u.jsxs(Vb,{children:[u.jsxs(Zb,{children:["Welcome, ",o.name]}),u.jsx(Jb,{to:"/payment-history",children:"My Payments"}),u.jsx(Kb,{to:"/dashboard",children:"Dashboard"}),u.jsx($b,{onClick:f,children:"Logout"}),u.jsx(S0,{to:"/admin/login",children:"Admin"})]}):u.jsxs(qb,{children:[u.jsx(Qb,{to:"/login",children:"Login"}),u.jsx(Xb,{to:"/signup",children:"Sign Up"}),u.jsx(S0,{to:"/admin/login",children:"Admin"})]})]})})),Mg=Ut`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`,Dg=Ut`
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
`,Rg=Ut`
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
`,Fb=Ut`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Wb=Ut`
  0%, 100% {
    box-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2;
  }
  50% {
    box-shadow: 0 0 15px #00ff9d, 0 0 25px #00ff9d, 0 0 35px #00ff9d;
  }
`,Ib=g.section`
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
`,Pb=g.div`
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
`,ex=g.div`
  text-align: left;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`,tx=g.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(90deg, #8a2be2, #00ff9d, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${Fb} 4s ease infinite;
  background-size: 300% 300%;
  text-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,nx=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
`,Og=g.button`
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
  animation: ${Rg} 2s infinite;
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
`,ax=g(Og)`
  background: transparent;
  border: 2px solid #8a2be2;
  animation: none;
  
  &:hover {
    background: rgba(138, 43, 226, 0.1);
    animation: none;
  }
`,lx=g.button`
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
`,ix=g.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  
  @media (max-width: 992px) {
    height: 350px;
  }
`,rx=g.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,ux=g.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  animation: ${Dg} 8s ease-in-out infinite;
  opacity: 0.7;
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
`,ox=g.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: ${Mg} 25s infinite linear;
  
  @media (max-width: 992px) {
    width: 150px;
    height: 150px;
  }
`,pl=g.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(138, 43, 226, 0.1);
  border: 2px solid #8a2be2;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: ${Wb} 3s ease-in-out infinite alternate;
  
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
`,yl=g.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #8a2be2, #00ff9d);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.7);
  animation: ${Rg} 4s infinite;
  
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
`,Ng=g.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 50%;
  animation: ${Mg} 30s infinite linear reverse;
  
  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
  }
`,cx=g(Ng)`
  width: 350px;
  height: 350px;
  border-color: rgba(0, 255, 157, 0.3);
  animation-duration: 40s;
  
  @media (max-width: 992px) {
    width: 280px;
    height: 280px;
  }
`,sx=g.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #00ff9d, #8a2be2);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.7);
  animation: ${Dg} 6s ease-in-out infinite;
`,fx=()=>{const i=_t(),o=[];for(let c=0;c<30;c++){const d=Math.random()*20+5;o.push(u.jsx(ux,{style:{width:`${d}px`,height:`${d}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*8}s`,animationDuration:`${8+Math.random()*10}s`,background:c%4===0?"linear-gradient(135deg, #8a2be2, #00ff9d)":c%4===1?"linear-gradient(135deg, #00ff9d, #8a2be2)":c%4===2?"linear-gradient(135deg, #00ccff, #8a2be2)":"linear-gradient(135deg, #ff00ff, #00ff9d)"}},c))}const f=[];for(let c=0;c<8;c++)f.push(u.jsx(sx,{style:{width:`${Math.random()*10+10}px`,height:`${Math.random()*10+10}px`,top:"50%",left:"50%",transform:`translate(-50%, -50%) rotate(${c*45}deg) translateX(150px)`,animationDelay:`${c*.5}s`}},c));return u.jsxs(Ib,{children:[u.jsx(rx,{children:o}),u.jsxs(Pb,{children:[u.jsxs(ex,{children:[u.jsx(tx,{children:"Premium Minecraft Server Hosting"}),u.jsx(nx,{children:"Experience unparalleled performance with our enterprise-grade infrastructure designed specifically for Minecraft servers. Powered by our custom 3D game panel with advanced features."}),u.jsxs("div",{children:[u.jsx(Og,{onClick:()=>i("/pricing"),children:"Get Started Now"}),u.jsx(ax,{onClick:()=>i("/pricing"),children:"View All Plans"})]}),u.jsx(lx,{onClick:()=>i("/pricing"),children:"View Pricing Plans"})]}),u.jsxs(ix,{children:[u.jsx(Ng,{}),u.jsx(cx,{}),f,u.jsxs(ox,{children:[u.jsx(pl,{className:"front",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),u.jsx(pl,{className:"back",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),u.jsx(pl,{className:"right",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),u.jsx(pl,{className:"left",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),u.jsx(pl,{className:"top",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})}),u.jsx(pl,{className:"bottom",children:u.jsx(yl,{children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"})})})})]})]})]})]})},dx=g.section`
  padding: 5rem 5%;
  background-color: #0a0a0a;
`,hx=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,mx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,gx=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,px=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,yx=g.div`
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
`,vx=g.div`
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
`,bx=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,xx=g.p`
  color: #cbd5e1;
  line-height: 1.6;
`,Sx=[{title:"NVME SSD Storage",description:"All our servers come with fast & latest RAID 1 NVME SSD storage drives for maximum performance.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})},{title:"DDoS Protection",description:"All servers with GB SHIELD DDoS protection. Keeping your servers up 24/7.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})},{title:"Instant Setup",description:"Your ordered server/service will be setup in seconds after payment, truly rapid.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})},{title:"Fast Processors",description:"Our servers are equipped with high performance Intel & AMD processors such as Intel I9/Ryzen9.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})})},{title:"24/7 Support",description:"We strive to ensure customer satisfaction by providing fast support 24/7.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})})},{title:"Global Network",description:"Choose one of our locations with low ping and fast download network.",icon:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}],jx=()=>u.jsx(dx,{children:u.jsxs(hx,{children:[u.jsx(mx,{children:"The Features You Deserve"}),u.jsx(gx,{children:"These are some of the benefits of being a NexterCloud customer"}),u.jsx(px,{children:Sx.map((i,o)=>u.jsxs(yx,{children:[u.jsx(vx,{children:i.icon}),u.jsx(bx,{children:i.title}),u.jsx(xx,{children:i.description})]},o))})]})}),wx=g.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`,Ex=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,Tx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Cx=g.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,zx=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Ax=g.div`
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
`,Mx=g.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(90deg, #8a2be2, #00ff9d);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`,Dx=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #8a2be2;
`,Rx=g.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  
  span {
    font-size: 1rem;
    color: #94a3b8;
    font-weight: 400;
  }
`,Ox=g.ul`
  list-style: none;
  margin-bottom: 2rem;
`,Nx=g.li`
  padding: 0.5rem 0;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  
  &::before {
    content: "→";
    margin-right: 0.5rem;
    color: #8a2be2;
  }
`,_x=g.button`
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
`,Ux=g.div`
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
`,Bx=()=>{const i=_t(),[o,f]=C.useState(""),c=[{name:"Normal Plan",price:.5,priceINR:40,features:["1 GB RAM","5 GB NVMe SSD","1 vCore","Ideal for: Friends / Test Servers"]},{name:"Bot Plan",price:1,priceINR:80,featured:!0,features:["2 GB RAM","10 GB NVMe SSD","1 vCore","Ideal for: Small SMP / Light Mods"]},{name:"SMP Plan",price:2,priceINR:160,features:["4 GB RAM","20 GB NVMe SSD","1.5 vCores","Ideal for: PvP / Regular SMP"]},{name:"Server Plan",price:4,priceINR:320,features:["8 GB RAM","30 GB NVMe SSD","3 vCores","Ideal for: Medium Servers / Mini-Games"]},{name:"Community Plan",price:5.5,priceINR:480,features:["12 GB RAM","40 GB NVMe SSD","4 vCores","Ideal for: Lifesteal / Heavy Modpacks"]},{name:"Nexter Plan",price:11,priceINR:960,features:["24 GB RAM","50 GB NVMe SSD","6 vCores","Ideal for: Public Networks / Intensive Loads"]},{name:"Beast Performance Plan",price:14,priceINR:1280,features:["32 GB RAM","60 GB NVMe SSD","8 vCores","Ideal for: Public Networks / Intensive Loads"]}],d=()=>{const m=localStorage.getItem("userToken"),y=localStorage.getItem("userData");m&&y?i("/billing"):(f("Please sign up and login first to purchase a plan"),setTimeout(()=>{f("")},3e3))};return u.jsx(wx,{id:"pricing",children:u.jsxs(Ex,{children:[u.jsx(Tx,{children:"Simple, Transparent Pricing"}),u.jsx(Cx,{children:"Choose the perfect plan for your Minecraft server"}),o&&u.jsx(Ux,{children:o}),u.jsx(zx,{children:c.map((m,y)=>u.jsxs(Ax,{featured:m.featured,children:[m.featured&&u.jsx(Mx,{children:"MOST POPULAR"}),u.jsx(Dx,{children:m.name}),u.jsxs(Rx,{children:["$",m.price,"/month",u.jsxs("div",{style:{fontSize:"0.9rem",color:"#94a3b8",marginTop:"0.5rem"},children:["₹",m.priceINR," INR"]})]}),u.jsx(Ox,{children:m.features.map((j,b)=>u.jsx(Nx,{children:j},b))}),u.jsx(_x,{onClick:d,children:"Get Started"})]},y))})]})})},Lx=g.section`
  padding: 5rem 5%;
  background-color: #0a0a0a;
`,Hx=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,kx=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
`,Yx=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 3rem;
`,Gx=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,qx=g.div`
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
`,Qx=g.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`,Xx=g.div`
  display: flex;
  align-items: center;
`,Vx=g.div`
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
`,Zx=g.div``,$x=g.h4`
  margin: 0;
  color: #f1f5f9;
`,Kx=g.p`
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
`,Jx=[{content:"NexterCloud has transformed our Minecraft server experience. The performance is incredible and our players have never been happier. The support team is also fantastic!",author:"Alex Johnson",role:"Server Owner"},{content:"I've tried multiple hosting providers, but NexterCloud stands out with its reliability and speed. The one-click mod installation saved me hours of work.",author:"Sarah Williams",role:"Minecraft Community Manager"},{content:"The uptime guarantee is no joke - our server has been running flawlessly for over a year. The pricing is also very competitive for the quality of service.",author:"Michael Chen",role:"Gaming Guild Leader"}],Fx=()=>u.jsx(Lx,{children:u.jsxs(Hx,{children:[u.jsx(kx,{children:"What Our Customers Say"}),u.jsx(Yx,{children:"Don't just take our word for it - hear from our satisfied customers"}),u.jsx(Gx,{children:Jx.map((i,o)=>u.jsxs(qx,{children:[u.jsx(Qx,{children:i.content}),u.jsxs(Xx,{children:[u.jsx(Vx,{children:i.author.charAt(0)}),u.jsxs(Zx,{children:[u.jsx($x,{children:i.author}),u.jsx(Kx,{children:i.role})]})]})]},o))})]})}),Gs=Ut`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Wx=Ut`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
`,Ix=Ut`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,Px=g.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
`,e2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,t2=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Gs} 1s ease-out;
`,n2=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Gs} 1s ease-out 0.2s both;
`,a2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,l2=g.div`
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  border: 1px solid #334155;
  transition: all 0.3s ease;
  animation: ${Gs} 1s ease-out 0.4s both, ${Ix} 6s ease-in-out infinite;
  
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
`,i2=g.h3`
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`,r2=g.div`
  font-family: 'Courier New', monospace;
  color: #e2e8f0;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`,u2=g.div`
  color: #10b981;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${Wx} 2s infinite;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
`,o2=()=>{const i=[{name:"India",latency:"12ms",status:"ONLINE"},{name:"USA",latency:"8ms",status:"ONLINE"},{name:"Germany",latency:"25ms",status:"ONLINE"},{name:"Singapore",latency:"5ms",status:"ONLINE"}];return u.jsx(Px,{id:"network",children:u.jsxs(e2,{children:[u.jsx(t2,{children:"Global Network"}),u.jsx(n2,{children:"Our servers are strategically located around the world for optimal performance"}),u.jsx(a2,{children:i.map((o,f)=>u.jsxs(l2,{children:[u.jsx(i2,{children:o.name}),u.jsx(r2,{children:o.latency}),u.jsx(u2,{children:o.status})]},f))})]})})},Rl=Ut`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c2=Ut`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`,s2=g.section`
  padding: 6rem 2rem;
  background: #0f172a;
  color: #ffffff;
  text-align: center;
`,f2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,d2=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Rl} 1s ease-out;
`,h2=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Rl} 1s ease-out 0.2s both;
`,m2=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,g2=g.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  font-family: 'Courier New', monospace;
  position: relative;
  animation: ${Rl} 1s ease-out 0.4s both;
  
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
    animation: ${c2} 8s linear infinite;
    pointer-events: none;
  }
`,p2=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #334155;
`,qs=g.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
`,y2=g(qs)`
  background: #ef4444;
`,v2=g(qs)`
  background: #f59e0b;
`,b2=g(qs)`
  background: #10b981;
`,x2=g.div`
  color: #94a3b8;
  font-size: 0.9rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'Courier New', monospace;
`,S2=g.div`
  background: #0f172a;
  padding: 1.5rem;
  border-radius: 0.5rem;
  height: 350px;
  overflow-y: auto;
  font-size: 0.9rem;
`,j2=g.div`
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
`,w2=g.div`
  background: #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid #334155;
  text-align: left;
  animation: ${Rl} 1s ease-out 0.6s both;
`,E2=g.h3`
  color: #00ff9d;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`,T2=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,C2=g.li`
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
`,z2=g.section`
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
`,A2=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`,M2=g.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #00ff9d;
  animation: ${Rl} 1s ease-out;
`,D2=g.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Rl} 1s ease-out 0.2s both;
`,R2=g.button`
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
`,O2=()=>{const i=_t(),o=[{text:"$ Server initializing...",type:"info"},{text:'$ Loading world: "SurvivalWorld"',type:"info"},{text:"$ Plugins loaded: 12",type:"info"},{text:"$ Starting Minecraft server on port 25565",type:"info"},{text:"$ Server started successfully!",type:"success"},{text:"[Player] Steve joined the game",type:"player"},{text:"[Player] Alex joined the game",type:"player"},{text:"[Steve] Hello everyone!",type:"player"},{text:"[Warning] Memory usage at 78%",type:"warning"},{text:"[Player] Alex left the game",type:"player"},{text:"[Player] Mike joined the game",type:"player"},{text:"$ World auto-saved",type:"info"},{text:"[Player] Steve: How do I craft a pickaxe?",type:"player"},{text:"[Player] Mike: Press E to open inventory",type:"player"},{text:""}],f=["Powerful Custom Game Panel - GBNODES has it's Own Fork of Pterodactyl Panel","Extremely Modern, Fast, Responsive Panel with Features to Cater All Your Needs","Custom Server Control Options","Easy to Use and Modern Server File Manager","Server Domain Setup, Plugin Installer, Mod Installer & Version Changer","One Click Server Installation, Egg Changer","Game Server Settings Configuration"];return u.jsxs(u.Fragment,{children:[u.jsx(s2,{id:"console",children:u.jsxs(f2,{children:[u.jsx(d2,{children:"Live Server Console"}),u.jsx(h2,{children:"Monitor your server in real-time with our intuitive console"}),u.jsxs(m2,{children:[u.jsxs(g2,{children:[u.jsxs(p2,{children:[u.jsx(y2,{}),u.jsx(v2,{}),u.jsx(b2,{}),u.jsx(x2,{children:"server-console.log"})]}),u.jsx(S2,{children:o.map((c,d)=>u.jsx(j2,{className:c.type,children:c.text},d))})]}),u.jsxs(w2,{children:[u.jsx(E2,{children:"Powerful Custom Game Panel"}),u.jsx(T2,{children:f.map((c,d)=>u.jsx(C2,{children:c},d))})]})]})]})}),u.jsx(z2,{children:u.jsxs(A2,{children:[u.jsx(M2,{children:"Get Your Server Today"}),u.jsx(D2,{children:"Ready to elevate your Minecraft experience? Join thousands of satisfied players on our premium hosting platform."}),u.jsx(R2,{onClick:()=>{i("/pricing"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100)},children:"View Pricing Plans"})]})})]})},N2=g.footer`
  background-color: #0a0a0a;
  color: #94a3b8;
  padding: 4rem 5% 2rem;
  border-top: 1px solid #1a1a1a;
`,_2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,U2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,cu=g.div``,B2=g.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  
  span {
    color: #10b981;
  }
`,L2=g.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #9ca3af;
`,H2=g.div`
  display: flex;
  gap: 1rem;
`,ds=g.a`
  color: #64748b;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,hs=g.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`,$t=g(Jt)`
  display: block;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #10b981;
  }
`,k2=g.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #1a1a1a;
  color: #64748b;
  font-size: 0.9rem;
`,su=()=>u.jsx(N2,{children:u.jsxs(_2,{children:[u.jsxs(U2,{children:[u.jsxs(cu,{children:[u.jsxs(B2,{children:["Nexter",u.jsx("span",{children:"Cloud"})]}),u.jsx(L2,{children:"Premium Minecraft server hosting with enterprise-grade infrastructure and 24/7 support."}),u.jsxs(H2,{children:[u.jsx(ds,{href:"#",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),u.jsx(ds,{href:"#",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}),u.jsx(ds,{href:"#",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),u.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),u.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})]})]}),u.jsxs(cu,{children:[u.jsx(hs,{children:"Services"}),u.jsx($t,{to:"/pricing",children:"Minecraft Hosting"}),u.jsx($t,{to:"/pricing",children:"VPS Servers"}),u.jsx($t,{to:"/pricing",children:"Dedicated Servers"}),u.jsx($t,{to:"/pricing",children:"Domain Names"})]}),u.jsxs(cu,{children:[u.jsx(hs,{children:"Company"}),u.jsx($t,{to:"/about",children:"About Us"}),u.jsx($t,{to:"/blog",children:"Blog"}),u.jsx($t,{to:"/careers",children:"Careers"}),u.jsx($t,{to:"/contact",children:"Contact"})]}),u.jsxs(cu,{children:[u.jsx(hs,{children:"Support"}),u.jsx($t,{to:"/support",children:"Help Center"}),u.jsx($t,{to:"/support",children:"Documentation"}),u.jsx($t,{to:"/support",children:"Server Status"}),u.jsx($t,{to:"/support",children:"Contact Support"})]})]}),u.jsxs(k2,{children:["© ",new Date().getFullYear()," NexterCloud. All rights reserved."]})]})}),Y2=g.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;
  min-height: 70vh;
`,G2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,q2=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0f172a;
`,Q2=g.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`,X2=()=>u.jsx(Y2,{children:u.jsxs(G2,{children:[u.jsx(q2,{children:"About NexterCloud"}),u.jsxs(Q2,{children:[u.jsx("p",{children:"NexterCloud is a premium Minecraft server hosting provider dedicated to delivering exceptional performance and reliability for Minecraft communities worldwide."}),u.jsx("p",{children:"Founded in 2020, our team of experts has years of experience in both gaming and infrastructure management. We understand the unique needs of Minecraft server administrators and players, which is why we've built our platform specifically for the Minecraft community."}),u.jsx("p",{children:"Our state-of-the-art data centers, powered by enterprise-grade hardware and backed by 24/7 monitoring, ensure your server stays online and performs at its best."})]})]})}),V2=g.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;
  min-height: 70vh;
`,Z2=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,$2=g.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #0f172a;
`,K2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,ms=g.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,gs=g.div`
  width: 70px;
  height: 70px;
  background-color: #dcfce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 35px;
    height: 35px;
    color: #10b981;
  }
`,ps=g.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0f172a;
`,ys=g.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,vs=g.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #059669;
  }
`,J2=()=>u.jsx(V2,{children:u.jsxs(Z2,{children:[u.jsx($2,{children:"Support Center"}),u.jsxs(K2,{children:[u.jsxs(ms,{children:[u.jsx(gs,{children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),u.jsx(ps,{children:"Contact Us"}),u.jsx(ys,{children:"Reach out to our support team for assistance with any issues or questions."}),u.jsx(vs,{children:"Email Support"})]}),u.jsxs(ms,{children:[u.jsx(gs,{children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),u.jsx(ps,{children:"Knowledge Base"}),u.jsx(ys,{children:"Browse our comprehensive documentation and tutorials for self-help."}),u.jsx(vs,{children:"Visit Knowledge Base"})]}),u.jsxs(ms,{children:[u.jsx(gs,{children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),u.jsx(ps,{children:"FAQ"}),u.jsx(ys,{children:"Find answers to commonly asked questions about our services."}),u.jsx(vs,{children:"View FAQ"})]})]})]})}),F2=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,W2=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,I2=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,j0=g.input`
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
`,P2=g.button`
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
`,e5=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,t5=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,n5=g(Jt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,a5=()=>{const[i,o]=C.useState(""),[f,c]=C.useState(""),[d,m]=C.useState(!1),[y,j]=C.useState(""),[b,p]=C.useState(""),T=_t(),w=async N=>{N.preventDefault(),m(!0),j(""),p("");try{i==="admin@example.com"&&f==="admin123"?(p("Login successful!"),localStorage.setItem("adminToken","admin-secret-token"),setTimeout(()=>{T("/admin/dashboard")},1500)):j("Invalid credentials")}catch{j("Login failed. Please try again.")}finally{m(!1)}};return u.jsx(F2,{children:u.jsxs(W2,{children:[u.jsx(I2,{children:"Admin Login"}),u.jsxs("form",{onSubmit:w,children:[u.jsx(j0,{type:"email",placeholder:"Admin Email",value:i,onChange:N=>o(N.target.value),required:!0}),u.jsx(j0,{type:"password",placeholder:"Password",value:f,onChange:N=>c(N.target.value),required:!0}),y&&u.jsx(e5,{children:y}),b&&u.jsx(t5,{children:b}),u.jsx(P2,{type:"submit",disabled:d,children:d?"Logging in...":"Login"})]}),u.jsx(n5,{to:"/",children:"← Back to Home"})]})})},nt=()=>typeof window<"u"?window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:4000":"https://client-website-backend-1.onrender.com":"http://localhost:4000",l5=g.div`
  background: #0f172a;
  color: white;
  min-height: 100vh;
`,i5=g.header`
  background: #1e293b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
`,r5=g.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  
  span {
    color: white;
  }
`,u5=g.nav`
  display: flex;
  gap: 1rem;
`,vl=g.button`
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
`,o5=g.button`
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
`,c5=g.main`
  padding: 2rem;
`,w0=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,un=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #334155;
`,la=g.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`,ia=g.div`
  color: #94a3b8;
`,ra=g.h2`
  margin: 2rem 0 1rem;
  color: #10b981;
`,Mi=g.table`
  width: 100%;
  border-collapse: collapse;
  background: #1e293b;
  border-radius: 0.5rem;
  overflow: hidden;
`,Di=g.thead`
  background: #334155;
`,xt=g.tr`
  border-bottom: 1px solid #334155;
  
  &:last-child {
    border-bottom: none;
  }
`,Ce=g.th`
  padding: 1rem;
  text-align: left;
  color: #94a3b8;
`,se=g.td`
  padding: 1rem;
`,Eu=g.span`
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
`,on=g.button`
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
`,bs=g.div`
  text-align: center;
  padding: 2rem;
  color: #94a3b8;
`,E0=g.div`
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
`,T0=g.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 500px;
`,C0=g.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`,s5=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,fu=g.label`
  font-weight: 500;
  color: #cbd5e1;
`,z0=g.input`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`,A0=g.select`
  padding: 0.8rem;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: white;
`,f5=g.button`
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
`,M0=g(Eu)`
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
`,du=g(on)`
  &.confirm {
    background: #10b981;
    color: white;
  }
  
  &.reject {
    background: #ef4444;
    color: white;
  }
`,d5=g.div`
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`,h5=g.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${i=>i.isOwn?"#0f172a":"#334155"};
  border-left: 3px solid ${i=>i.isOwn?"#10b981":"#3b82f6"};
`,m5=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
`,g5=g.div`
  color: #cbd5e1;
`,p5=g.form`
  display: flex;
  margin-top: 1rem;
`,y5=g.input`
  flex: 1;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
`,v5=g.button`
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
`,b5=()=>{const[i,o]=C.useState("dashboard"),[f,c]=C.useState({totalUsers:0,activeServers:0,systemStatus:"All Systems Operational"}),[d,m]=C.useState([]),[y,j]=C.useState([]),[b,p]=C.useState([]),[T,w]=C.useState([]),[N,H]=C.useState(!0),[G,X]=C.useState(!1),[Z,k]=C.useState(null),[Y,Q]=C.useState({name:"",email:"",plan:"Free",status:"active"}),[ne,V]=C.useState(!1),[F,q]=C.useState(null),[he,ye]=C.useState([]),[Fe,Ie]=C.useState(""),[Pe,Bt]=C.useState(!1),ft=_t();C.useEffect(()=>{localStorage.getItem("adminToken")?ct():ft("/admin/login")},[ft]);const ct=async()=>{try{H(!0);const B=await fetch(`${nt()}/api/admin/users`,{headers:{Authorization:"admin-secret-token"}});if(B.ok){const _e=await B.json();m(_e),c(Ft=>({...Ft,totalUsers:_e.length}))}const re=await fetch(`${nt()}/api/payment/history`,{headers:{Authorization:"admin-secret-token"}});if(re.ok){const _e=await re.json();p(_e.payments||[])}const te=await fetch(`${nt()}/api/messages`,{headers:{Authorization:"admin-secret-token"}});if(te.ok){const _e=await te.json();w(_e.messages||[])}j([{id:1,name:"Survival Server",user:"John Doe",status:"online",cpu:"45%",ram:"2.1GB",players:"12/20"},{id:2,name:"Creative World",user:"Jane Smith",status:"online",cpu:"22%",ram:"1.5GB",players:"3/10"},{id:3,name:"Skyblock Realm",user:"Bob Johnson",status:"offline",cpu:"0%",ram:"0GB",players:"0/15"},{id:4,name:"PvP Arena",user:"Alice Brown",status:"online",cpu:"68%",ram:"3.2GB",players:"18/20"}]),c(_e=>({..._e,activeServers:4,systemStatus:"All Systems Operational"}))}catch(B){console.error("Error loading data:",B)}finally{H(!1)}},R=()=>{localStorage.removeItem("adminToken"),ft("/admin/login")},$=B=>{k(B),Q({name:B.name,email:B.email,plan:B.plan,status:B.status}),X(!0)},ee=async B=>{if(window.confirm("Are you sure you want to delete this user? This action cannot be undone."))try{if((await fetch(`${nt()}/api/admin/users/${B}`,{method:"DELETE",headers:{Authorization:"admin-secret-token"}})).ok){const te=d.filter(_e=>_e.id!==B);m(te),c(_e=>({..._e,totalUsers:te.length}))}else alert("Failed to delete user")}catch(re){console.error("Error deleting user:",re),alert("Failed to delete user")}},fe=B=>{const re=d.map(te=>te.id===B?{...te,status:"suspended"}:te);m(re)},Se=B=>{const re=d.map(te=>te.id===B?{...te,status:"active"}:te);m(re)},x=B=>{const{name:re,value:te}=B.target;Q(_e=>({..._e,[re]:te}))},_=async B=>{B.preventDefault();try{if((await fetch(`${nt()}/api/admin/users/${Z.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify(Y)})).ok){const te=d.map(_e=>_e.id===Z.id?{..._e,name:Y.name,email:Y.email,plan:Y.plan,status:Y.status}:_e);m(te),X(!1),k(null)}else alert("Failed to update user")}catch(re){console.error("Error updating user:",re),alert("Failed to update user")}},K=async(B,re)=>{try{const te=await fetch(`${nt()}/api/payment/status/${B}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({status:re})});if(te.ok){const _e=await te.json(),Ft=b.map(Da=>Da.id===B?_e.paymentRecord:Da);p(Ft)}else alert("Failed to update payment status")}catch(te){console.error("Error updating payment status:",te),alert("Failed to update payment status")}},J=async()=>{try{const B=await fetch(`${nt()}/api/messages`,{headers:{Authorization:"admin-secret-token"}});if(B.ok){const re=await B.json();w(re.messages||[])}}catch(B){console.error("Error fetching messages:",B)}},le=async B=>{Bt(!0);try{const te=await(await fetch(`${nt()}/api/messages/payment/${B}`,{headers:{Authorization:"admin-secret-token","user-type":"admin"}})).json();te.success?ye(te.messages):console.error("Failed to fetch payment messages:",te.error)}catch(re){console.error("Error fetching payment messages:",re)}finally{Bt(!1)}},ie=async B=>{if(B.preventDefault(),!(!Fe.trim()||!F))try{const te=await(await fetch(`${nt()}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"},body:JSON.stringify({userId:F.userId,paymentId:F.id,message:Fe,userType:"admin"})})).json();te.success?(ye([...he,te.message]),Ie(""),J()):console.error("Failed to send message:",te.error)}catch(re){console.error("Error sending message:",re)}},me=async B=>{console.log("Opening message modal for payment:",B),q(B),V(!0),await le(B.id)},ke=async B=>{try{const te=await(await fetch(`${nt()}/api/messages/chat/${B}/close`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"}})).json();te.success?(J(),V(!1),q(null),alert("Chat closed successfully")):(console.error("Failed to close chat:",te.error),alert("Failed to close chat"))}catch(re){console.error("Error closing chat:",re),alert("Error closing chat")}},Ee=async B=>{try{const te=await(await fetch(`${nt()}/api/payment/${B}/hide`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"admin-secret-token"}})).json();te.success?(ct(),alert("Payment hidden from user successfully")):(console.error("Failed to hide payment:",te.error),alert("Failed to hide payment"))}catch(re){console.error("Error hiding payment:",re),alert("Error hiding payment")}};return u.jsxs(l5,{children:[u.jsxs(i5,{children:[u.jsxs(r5,{children:["Nexter",u.jsx("span",{children:"Cloud"})," Admin"]}),u.jsxs(u5,{children:[u.jsx(vl,{active:i==="dashboard",onClick:()=>o("dashboard"),children:"Dashboard"}),u.jsx(vl,{active:i==="users",onClick:()=>o("users"),children:"Users"}),u.jsx(vl,{active:i==="servers",onClick:()=>o("servers"),children:"Servers"}),u.jsx(vl,{active:i==="settings",onClick:()=>o("settings"),children:"Settings"}),u.jsx(vl,{active:i==="payments",onClick:()=>o("payments"),children:"Payments"}),u.jsx(vl,{active:i==="messages",onClick:()=>o("messages"),children:"Messages"})]}),u.jsx(o5,{onClick:R,children:"Logout"})]}),u.jsx(c5,{children:N?u.jsx(bs,{children:"Loading dashboard data..."}):u.jsxs(u.Fragment,{children:[i==="dashboard"&&u.jsxs(u.Fragment,{children:[u.jsxs(w0,{children:[u.jsxs(un,{children:[u.jsx(la,{children:f.totalUsers}),u.jsx(ia,{children:"Total Users"})]}),u.jsxs(un,{children:[u.jsx(la,{children:f.activeServers}),u.jsx(ia,{children:"Active Servers"})]}),u.jsxs(un,{children:[u.jsx(la,{children:f.pendingPayments}),u.jsx(ia,{children:"Pending Payments"})]}),u.jsxs(un,{children:[u.jsx(la,{children:u.jsx(Eu,{className:"active",children:f.systemStatus})}),u.jsx(ia,{children:"System Status"})]})]}),u.jsx(ra,{children:"Recent Activity"}),u.jsxs(Mi,{children:[u.jsx(Di,{children:u.jsxs(xt,{children:[u.jsx(Ce,{children:"User"}),u.jsx(Ce,{children:"Action"}),u.jsx(Ce,{children:"Server"}),u.jsx(Ce,{children:"Time"})]})}),u.jsxs("tbody",{children:[u.jsxs(xt,{children:[u.jsx(se,{children:"John Doe"}),u.jsx(se,{children:"Started server"}),u.jsx(se,{children:"Survival Server"}),u.jsx(se,{children:"2 hours ago"})]}),u.jsxs(xt,{children:[u.jsx(se,{children:"Jane Smith"}),u.jsx(se,{children:"Created server"}),u.jsx(se,{children:"Creative World"}),u.jsx(se,{children:"5 hours ago"})]}),u.jsxs(xt,{children:[u.jsx(se,{children:"Alice Brown"}),u.jsx(se,{children:"Stopped server"}),u.jsx(se,{children:"SkyBlock Realm"}),u.jsx(se,{children:"1 day ago"})]})]})]})]}),i==="users"&&u.jsxs(u.Fragment,{children:[u.jsx(ra,{children:"User Management"}),u.jsxs(Mi,{children:[u.jsx(Di,{children:u.jsxs(xt,{children:[u.jsx(Ce,{children:"ID"}),u.jsx(Ce,{children:"Name"}),u.jsx(Ce,{children:"Email"}),u.jsx(Ce,{children:"Plan"}),u.jsx(Ce,{children:"Status"}),u.jsx(Ce,{children:"Servers"}),u.jsx(Ce,{children:"Actions"})]})}),u.jsx("tbody",{children:d.length>0?d.map(B=>u.jsxs(xt,{children:[u.jsx(se,{children:B.id}),u.jsx(se,{children:B.name}),u.jsx(se,{children:B.email}),u.jsx(se,{children:B.plan}),u.jsx(se,{children:u.jsx(Eu,{className:B.status,children:B.status})}),u.jsx(se,{children:B.servers}),u.jsxs(se,{children:[u.jsx(on,{className:"edit",onClick:()=>$(B),children:"Edit"}),B.status==="suspended"?u.jsx(on,{className:"activate",onClick:()=>Se(B.id),children:"Activate"}):u.jsx(on,{className:"suspend",onClick:()=>fe(B.id),children:"Suspend"}),u.jsx(on,{className:"delete",onClick:()=>ee(B.id),children:"Delete"})]})]},B.id)):u.jsx(xt,{children:u.jsx(se,{colSpan:"7",style:{textAlign:"center"},children:"No users found"})})})]})]}),i==="servers"&&u.jsxs(u.Fragment,{children:[u.jsx(ra,{children:"Server Management"}),u.jsxs(Mi,{children:[u.jsx(Di,{children:u.jsxs(xt,{children:[u.jsx(Ce,{children:"ID"}),u.jsx(Ce,{children:"Name"}),u.jsx(Ce,{children:"User"}),u.jsx(Ce,{children:"Status"}),u.jsx(Ce,{children:"CPU"}),u.jsx(Ce,{children:"RAM"}),u.jsx(Ce,{children:"Players"}),u.jsx(Ce,{children:"Actions"})]})}),u.jsx("tbody",{children:y.length>0?y.map(B=>u.jsxs(xt,{children:[u.jsx(se,{children:B.id}),u.jsx(se,{children:B.name}),u.jsx(se,{children:B.user}),u.jsx(se,{children:u.jsx(Eu,{className:B.status==="online"?"active":"inactive",children:B.status})}),u.jsx(se,{children:B.cpu}),u.jsx(se,{children:B.ram}),u.jsx(se,{children:B.players}),u.jsxs(se,{children:[u.jsx(on,{className:"edit",children:"Start"}),u.jsx(on,{className:"suspend",children:"Stop"}),u.jsx(on,{className:"delete",children:"Delete"})]})]},B.id)):u.jsx(xt,{children:u.jsx(se,{colSpan:"8",style:{textAlign:"center"},children:"No servers found"})})})]})]}),i==="payments"&&u.jsxs(u.Fragment,{children:[u.jsx(ra,{children:"Payment Management"}),N?u.jsx(bs,{children:"Loading payments..."}):u.jsxs(Mi,{children:[u.jsx(Di,{children:u.jsxs(xt,{children:[u.jsx(Ce,{children:"Transaction ID"}),u.jsx(Ce,{children:"User"}),u.jsx(Ce,{children:"Plan"}),u.jsx(Ce,{children:"Amount"}),u.jsx(Ce,{children:"Date"}),u.jsx(Ce,{children:"Status"}),u.jsx(Ce,{children:"Actions"})]})}),u.jsx("tbody",{children:b.map(B=>u.jsxs(xt,{children:[u.jsx(se,{children:B.transactionId}),u.jsx(se,{children:B.userId}),u.jsx(se,{children:B.plan}),u.jsxs(se,{children:["$",B.amount]}),u.jsx(se,{children:new Date(B.timestamp).toLocaleString()}),u.jsx(se,{children:u.jsx(M0,{className:B.status,children:B.status})}),u.jsxs(se,{children:[B.status==="pending"&&u.jsxs(u.Fragment,{children:[u.jsx(du,{className:"confirm",onClick:()=>K(B.id,"confirmed"),children:"Confirm"}),u.jsx(du,{className:"reject",onClick:()=>K(B.id,"rejected"),children:"Reject"})]}),u.jsx(du,{className:"edit",onClick:()=>me(B),style:{marginLeft:"0.5rem"},children:"Message User"}),(B.status==="confirmed"||B.status==="rejected")&&u.jsx(du,{className:"delete",onClick:()=>Ee(B.id),style:{marginLeft:"0.5rem"},children:"Hide Payment"})]})]},B.id))})]})]}),i==="messages"&&u.jsxs(u.Fragment,{children:[u.jsx(ra,{children:"Messages"}),N?u.jsx(bs,{children:"Loading messages..."}):u.jsxs(Mi,{children:[u.jsx(Di,{children:u.jsxs(xt,{children:[u.jsx(Ce,{children:"Payment ID"}),u.jsx(Ce,{children:"User ID"}),u.jsx(Ce,{children:"Message"}),u.jsx(Ce,{children:"Date"}),u.jsx(Ce,{children:"Status"})]})}),u.jsx("tbody",{children:T.sort((B,re)=>new Date(re.timestamp)-new Date(B.timestamp)).map(B=>u.jsxs(xt,{children:[u.jsx(se,{children:B.paymentId||"N/A"}),u.jsx(se,{children:B.userId}),u.jsx(se,{children:B.message}),u.jsx(se,{children:new Date(B.timestamp).toLocaleString()}),u.jsx(se,{children:u.jsx(M0,{className:B.read?"confirmed":"pending",children:B.read?"Read":"Unread"})})]},B.id))})]})]}),i==="settings"&&u.jsxs(u.Fragment,{children:[u.jsx(ra,{children:"System Settings"}),u.jsxs(un,{children:[u.jsx("h3",{children:"Platform Configuration"}),u.jsx("p",{children:"Manage hosting plans, resource limits, and platform settings."}),u.jsx(on,{className:"edit",style:{marginTop:"1rem"},children:"Configure Plans"})]}),u.jsx(ra,{style:{marginTop:"2rem"},children:"System Monitoring"}),u.jsxs(w0,{children:[u.jsxs(un,{children:[u.jsx(la,{children:"99.8%"}),u.jsx(ia,{children:"Uptime"})]}),u.jsxs(un,{children:[u.jsx(la,{children:"4.2 TB"}),u.jsx(ia,{children:"Disk Usage"})]}),u.jsxs(un,{children:[u.jsx(la,{children:"68%"}),u.jsx(ia,{children:"Server Load"})]}),u.jsxs(un,{children:[u.jsx(la,{children:"24/7"}),u.jsx(ia,{children:"Support Status"})]})]}),u.jsx(ra,{style:{marginTop:"2rem"},children:"Payment QR Code"}),u.jsxs(un,{children:[u.jsx("h3",{children:"Upload Payment QR Code"}),u.jsx("p",{children:"Upload the QR code that users will see on the payout page."}),u.jsx("div",{style:{margin:"1rem 0"},children:u.jsx("input",{type:"file",accept:"image/*",onChange:B=>{const re=B.target.files[0];if(re){const te=new FileReader;te.onload=_e=>{localStorage.setItem("adminQRCode",_e.target.result),alert("QR Code uploaded and saved successfully!")},te.readAsDataURL(re)}},style:{padding:"0.5rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"0.375rem",color:"white",width:"100%",marginBottom:"1rem"}})}),u.jsx("p",{children:"Current QR Code:"}),u.jsx("div",{style:{width:"200px",height:"200px",margin:"1rem auto",border:"1px dashed #334155",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",background:"#0f172a"},children:(()=>{const B=localStorage.getItem("adminQRCode");return B?u.jsx("img",{src:B,alt:"Current Payment QR Code",style:{maxWidth:"100%",maxHeight:"100%"}}):u.jsx("span",{style:{color:"#94a3b8"},children:"No QR Code Set"})})()})]})]})]})}),G&&Z&&u.jsx(E0,{children:u.jsxs(T0,{children:[u.jsx(C0,{onClick:()=>X(!1),children:"×"}),u.jsx("h2",{children:"Edit User"}),u.jsxs(s5,{onSubmit:_,children:[u.jsxs("div",{children:[u.jsx(fu,{htmlFor:"name",children:"Name"}),u.jsx(z0,{type:"text",id:"name",name:"name",value:Y.name,onChange:x,required:!0})]}),u.jsxs("div",{children:[u.jsx(fu,{htmlFor:"email",children:"Email"}),u.jsx(z0,{type:"email",id:"email",name:"email",value:Y.email,onChange:x,required:!0})]}),u.jsxs("div",{children:[u.jsx(fu,{htmlFor:"plan",children:"Plan"}),u.jsxs(A0,{id:"plan",name:"plan",value:Y.plan,onChange:x,required:!0,children:[u.jsx("option",{value:"Free",children:"Free"}),u.jsx("option",{value:"Basic",children:"Basic"}),u.jsx("option",{value:"Premium",children:"Premium"})]})]}),u.jsxs("div",{children:[u.jsx(fu,{htmlFor:"status",children:"Status"}),u.jsxs(A0,{id:"status",name:"status",value:Y.status,onChange:x,required:!0,children:[u.jsx("option",{value:"active",children:"Active"}),u.jsx("option",{value:"inactive",children:"Inactive"}),u.jsx("option",{value:"suspended",children:"Suspended"})]})]}),u.jsx(f5,{type:"submit",children:"Update User"})]})]})}),ne&&F&&u.jsx(E0,{children:u.jsxs(T0,{children:[u.jsx(C0,{onClick:()=>V(!1),children:"×"}),u.jsxs("h3",{children:["Messages for Payment ",F.transactionId]}),Pe?u.jsx("div",{style:{textAlign:"center",color:"#cbd5e1",padding:"2rem"},children:"Loading messages..."}):u.jsxs(u.Fragment,{children:[u.jsx(d5,{children:he.length===0?u.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"1rem"},children:"No messages yet."}):he.map(B=>u.jsxs(h5,{isOwn:B.userType==="admin",children:[u.jsxs(m5,{children:[u.jsx("span",{children:B.userType==="admin"?"You (Admin)":"User"}),u.jsx("span",{children:new Date(B.timestamp).toLocaleString()})]}),u.jsx(g5,{children:B.message})]},B.id))}),u.jsxs(p5,{onSubmit:ie,children:[u.jsx(y5,{type:"text",value:Fe,onChange:B=>Ie(B.target.value),placeholder:"Type your message to user..."}),u.jsx(v5,{type:"submit",children:"Send"})]}),u.jsx("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"flex-end"},children:u.jsx(on,{className:"delete",onClick:()=>ke(F.id),children:"Close Chat"})})]})]})})]})},x5=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,S5=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,j5=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,D0=g.input`
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
`,w5=g.button`
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
`,E5=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,T5=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,C5=g.p`
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
`,z5=g(Jt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,A5=({onLogin:i})=>{const[o,f]=C.useState(""),[c,d]=C.useState(""),[m,y]=C.useState(!1),[j,b]=C.useState(""),[p,T]=C.useState(""),w=_t(),N=async H=>{H.preventDefault(),y(!0),b(""),T("");try{const X=await(await fetch(`${nt()}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:c})})).json();X.success?(T("Login successful!"),localStorage.setItem("userToken",X.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(X.user)),i(X.user),setTimeout(()=>{w("/")},1500)):b(X.error||"Login failed. Please try again.")}catch(G){console.error("Login error:",G),b("Login failed. Please try again.")}finally{y(!1)}};return u.jsx(x5,{children:u.jsxs(S5,{children:[u.jsx(j5,{children:"Login to Your Account"}),u.jsxs("form",{onSubmit:N,children:[u.jsx(D0,{type:"email",placeholder:"Email Address",value:o,onChange:H=>f(H.target.value),required:!0}),u.jsx(D0,{type:"password",placeholder:"Password",value:c,onChange:H=>d(H.target.value),required:!0}),j&&u.jsx(E5,{children:j}),p&&u.jsx(T5,{children:p}),u.jsx(w5,{type:"submit",disabled:m,children:m?"Logging in...":"Login"})]}),u.jsxs(C5,{children:["Don't have an account? ",u.jsx("button",{onClick:()=>w("/signup"),children:"Sign Up"})]}),u.jsx(z5,{to:"/",children:"← Back to Home"})]})})},M5=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  padding: 1rem;
`,D5=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,R5=g.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,hu=g.input`
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
`,O5=g.button`
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
`,N5=g.div`
  color: #ef4444;
  text-align: center;
  margin: 1rem 0;
`,_5=g.div`
  color: #10b981;
  text-align: center;
  margin: 1rem 0;
`,U5=g.p`
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
`,B5=g(Jt)`
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #10b981;
  }
`,L5=({onLogin:i})=>{const[o,f]=C.useState(""),[c,d]=C.useState(""),[m,y]=C.useState(""),[j,b]=C.useState(""),[p,T]=C.useState(!1),[w,N]=C.useState(""),[H,G]=C.useState(""),X=_t(),Z=async k=>{if(k.preventDefault(),T(!0),N(""),G(""),m!==j){N("Passwords do not match"),T(!1);return}try{const Q=await(await fetch(`${nt()}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,email:c,password:m})})).json();Q.success?(G("Account created successfully!"),localStorage.setItem("userToken",Q.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(Q.user)),i(Q.user),setTimeout(()=>{X("/")},1500)):N(Q.error||"Signup failed. Please try again.")}catch(Y){console.error("Signup error:",Y),N("Signup failed. Please try again.")}finally{T(!1)}};return u.jsx(M5,{children:u.jsxs(D5,{children:[u.jsx(R5,{children:"Create an Account"}),u.jsxs("form",{onSubmit:Z,children:[u.jsx(hu,{type:"text",placeholder:"Full Name",value:o,onChange:k=>f(k.target.value),required:!0}),u.jsx(hu,{type:"email",placeholder:"Email Address",value:c,onChange:k=>d(k.target.value),required:!0}),u.jsx(hu,{type:"password",placeholder:"Password",value:m,onChange:k=>y(k.target.value),required:!0}),u.jsx(hu,{type:"password",placeholder:"Confirm Password",value:j,onChange:k=>b(k.target.value),required:!0}),w&&u.jsx(N5,{children:w}),H&&u.jsx(_5,{children:H}),u.jsx(O5,{type:"submit",disabled:p,children:p?"Creating account...":"Sign Up"})]}),u.jsxs(U5,{children:["Already have an account? ",u.jsx("button",{onClick:()=>X("/login"),children:"Login"})]}),u.jsx(B5,{to:"/",children:"← Back to Home"})]})})},H5=Ut`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`,k5=Ut`
  0% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
`,Y5=Ut`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,G5=g.div`
  background: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding-top: 4rem;
`,q5=g.nav`
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
`,Q5=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,X5=g.div`
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
`,V5=g.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Ri=g.li`
  margin: 0 1rem;
`,Oi=g.a`
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
`,Z5=g.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,_g=g.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
`,$5=g(_g)`
  background: transparent;
  color: #00ff9d;
  border: 2px solid #00ff9d;
  
  &:hover {
    background: rgba(0, 255, 157, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
  }
`,K5=g(_g)`
  background: linear-gradient(90deg, #00ff9d, #00ffff);
  color: #000000;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
  }
`,J5=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,F5=g.span`
  @media (max-width: 768px) {
    display: none;
  }
`,W5=g.button`
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
`,R0=g.button`
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
`,I5=g.main`
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
`,P5=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
`,eS=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,tS=g.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`,nS=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,aS=g.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  animation: ${Y5} 2s infinite;
`,lS=g.span`
  color: #10b981;
  font-weight: 500;
  font-size: 0.9rem;
`,iS=g.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,rS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
  animation: ${k5} 3s ease-in-out infinite;
  overflow: hidden;
  height: fit-content;
`,uS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,oS=g.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,cS=g.div`
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
    animation: ${H5} 8s linear infinite;
    z-index: 2;
    pointer-events: none;
  }
`,sS=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Qs=g.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`,fS=g(Qs)`
  background: #ef4444;
  box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
`,dS=g(Qs)`
  background: #f59e0b;
  box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
`,hS=g(Qs)`
  background: #10b981;
  box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
`,mS=g.div`
  color: #9ca3af;
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  font-family: 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', monospace;
`,gS=g.div`
  color: #10b981;
  line-height: 1.6;
  height: 350px;
  overflow-y: auto;
  font-size: 0.875rem;
`,pS=g.div`
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
`,yS=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-row: 1;
  }
`,vS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`,bS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,xS=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,SS=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,mu=g.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
`,gu=g.div`
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
`,pu=g.div`
  font-size: 0.8rem;
  color: #9ca3af;
`,jS=g.div`
  background: rgba(17, 24, 39, 0.9);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(55, 65, 81, 0.7);
  backdrop-filter: blur(5px);
`,wS=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(55, 65, 81, 0.5);
`,ES=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #00ff9d;
`,TS=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,CS=g.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  
  &:last-child {
    border-bottom: none;
  }
`,zS=g.span`
  color: #cbd5e1;
`,AS=g.span`
  color: #34d399;
  font-size: 0.8rem;
`,MS=()=>{const i=_t(),[o,f]=C.useState(!1),[c,d]=C.useState(null);C.useEffect(()=>{const p=localStorage.getItem("userToken"),T=localStorage.getItem("userData");p&&T&&(f(!0),d(JSON.parse(T)))},[]);const m=()=>{f(!1),d(null),localStorage.removeItem("userToken"),localStorage.removeItem("userData"),i("/")},y=[{text:"$ Server initializing...",type:"info"},{text:'$ Loading world: "SurvivalWorld"',type:"info"},{text:"$ Plugins loaded: 12",type:"info"},{text:"$ Starting Minecraft server on port 25565",type:"info"},{text:"$ Server started successfully!",type:"success"},{text:"[Player] Steve joined the game",type:"player"},{text:"[Player] Alex joined the game",type:"player"},{text:"[Steve] Hello everyone!",type:"player"},{text:"[Warning] Memory usage at 78%",type:"warning"},{text:"[Player] Alex left the game",type:"player"},{text:"[Player] Mike joined the game",type:"player"},{text:"$ World auto-saved",type:"info"},{text:"[Player] Steve: How do I craft a pickaxe?",type:"player"},{text:"[Player] Mike: Press E to open inventory",type:"player"},{text:""}],j={players:12,cpu:"45%",memory:"2.1GB",uptime:"2d 14h"},b=[{name:"Steve",status:"Online"},{name:"Alex",status:"Online"},{name:"Mike",status:"Online"},{name:"Jenny",status:"Online"},{name:"Tom",status:"Online"},{name:"Sarah",status:"Online"}];return u.jsxs(G5,{children:[u.jsx(q5,{children:u.jsxs(Q5,{children:[u.jsxs(X5,{children:["Nexter",u.jsx("span",{children:"Cloud"})]}),u.jsxs(V5,{children:[u.jsx(Ri,{children:u.jsx(Oi,{href:"/",children:"Home"})}),u.jsx(Ri,{children:u.jsx(Oi,{href:"/#features",children:"Features"})}),u.jsx(Ri,{children:u.jsx(Oi,{href:"/#pricing",children:"Pricing"})}),u.jsx(Ri,{children:u.jsx(Oi,{href:"/support",children:"Support"})}),u.jsx(Ri,{children:u.jsx(Oi,{href:"/about",children:"About"})})]}),o&&c?u.jsxs(J5,{children:[u.jsxs(F5,{children:["Welcome, ",c.name]}),u.jsx(W5,{onClick:m,children:"Logout"}),u.jsx(R0,{onClick:()=>i("/admin/login"),children:"Admin"})]}):u.jsxs(Z5,{children:[u.jsx($5,{onClick:()=>i("/login"),children:"Login"}),u.jsx(K5,{onClick:()=>i("/signup"),children:"Sign Up"}),u.jsx(R0,{onClick:()=>i("/admin/login"),children:"Admin"})]})]})}),u.jsxs(I5,{children:[u.jsx(P5,{children:u.jsxs(eS,{children:[u.jsx(tS,{children:"SurvivalWorld"}),u.jsxs(nS,{children:[u.jsx(aS,{}),u.jsx(lS,{children:"ONLINE"})]})]})}),u.jsxs(iS,{children:[u.jsxs(rS,{children:[u.jsx(uS,{children:u.jsx(oS,{children:"Live Server Console"})}),u.jsxs(cS,{children:[u.jsxs(sS,{children:[u.jsx(fS,{}),u.jsx(dS,{}),u.jsx(hS,{}),u.jsx(mS,{children:"server-console.log"})]}),u.jsx(gS,{children:y.map((p,T)=>u.jsx(pS,{className:p.type,children:p.text},T))})]})]}),u.jsxs(yS,{children:[u.jsxs(vS,{children:[u.jsx(bS,{children:u.jsx(xS,{children:"Server Stats"})}),u.jsxs(SS,{children:[u.jsxs(mu,{children:[u.jsx(gu,{className:"players",children:j.players}),u.jsx(pu,{children:"Players"})]}),u.jsxs(mu,{children:[u.jsx(gu,{className:"cpu",children:j.cpu}),u.jsx(pu,{children:"CPU"})]}),u.jsxs(mu,{children:[u.jsx(gu,{className:"memory",children:j.memory}),u.jsx(pu,{children:"Memory"})]}),u.jsxs(mu,{children:[u.jsx(gu,{className:"uptime",children:j.uptime}),u.jsx(pu,{children:"Uptime"})]})]})]}),u.jsxs(jS,{children:[u.jsx(wS,{children:u.jsx(ES,{children:"Online Players"})}),u.jsx(TS,{children:b.map((p,T)=>u.jsxs(CS,{children:[u.jsx(zS,{children:p.name}),u.jsx(AS,{children:p.status})]},T))})]})]})]})]})]})},DS=()=>u.jsxs("div",{style:{padding:"2rem",background:"#0f172a",color:"#ffffff",textAlign:"center",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[u.jsx("h1",{style:{color:"#00ff9d",fontSize:"3rem",marginBottom:"1rem"},children:"Test Page"}),u.jsx("p",{style:{fontSize:"1.5rem",color:"#cbd5e1",marginBottom:"2rem"},children:"If you can see this, the React app is working!"}),u.jsxs("div",{style:{background:"#1e293b",padding:"2rem",borderRadius:"0.5rem",border:"1px solid #334155"},children:[u.jsx("h2",{style:{color:"#00ffff",marginBottom:"1rem"},children:"Server Locations"}),u.jsxs("ul",{style:{textAlign:"left",color:"#e2e8f0"},children:[u.jsx("li",{children:"India - 12ms"}),u.jsx("li",{children:"USA - 8ms"}),u.jsx("li",{children:"Germany - 25ms"}),u.jsx("li",{children:"Singapore - 5ms"})]})]})]}),RS=g.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,OS=g.form`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #334155;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,NS=g.h2`
  text-align: center;
  color: #00ff9d;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,O0=g.div`
  margin-bottom: 1rem;
`,N0=g.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #cbd5e1;
  font-weight: 500;
`,_0=g.input`
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
`,_S=g.button`
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
`,Ug=g.div`
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  text-align: center;
`,US=g(Ug)`
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  color: #10b981;
`,BS=g(Ug)`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #ef4444;
`,LS=()=>{const i=_t(),[o,f]=C.useState({email:"",password:""}),[c,d]=C.useState(!1),[m,y]=C.useState(""),[j,b]=C.useState(""),p=w=>{const{name:N,value:H}=w.target;f(G=>({...G,[N]:H}))},T=async w=>{if(w.preventDefault(),d(!0),y(""),b(""),!o.email||!o.password){y("Please enter both email and password"),d(!1);return}try{const N=await fetch(`${nt()}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email.toLowerCase().trim(),password:o.password})}),H=await N.json();N.ok&&H.success?(localStorage.setItem("userToken",H.token||"fake-user-jwt-token"),localStorage.setItem("userData",JSON.stringify(H.user)),b("Login successful! Redirecting to payment page..."),setTimeout(()=>{i("/payout")},2e3)):y(H.error||"Invalid credentials")}catch{y("Network error. Please try again.")}finally{d(!1)}};return u.jsx(RS,{children:u.jsxs(OS,{onSubmit:T,children:[u.jsx(NS,{children:"Billing Authentication"}),m&&u.jsx(BS,{children:m}),j&&u.jsx(US,{children:j}),u.jsxs(O0,{children:[u.jsx(N0,{htmlFor:"email",children:"Email"}),u.jsx(_0,{id:"email",type:"text",name:"email",value:o.email,onChange:p,placeholder:"Enter your email",autoComplete:"off",spellCheck:"false"})]}),u.jsxs(O0,{children:[u.jsx(N0,{htmlFor:"password",children:"Password"}),u.jsx(_0,{id:"password",type:"password",name:"password",value:o.password,onChange:p,placeholder:"Enter your password",autoComplete:"off"})]}),u.jsx(_S,{type:"submit",disabled:c,children:c?"Processing...":"Continue to Payment"})]})})},HS=()=>{const i=_t(),[o,f]=C.useState(!1),[c,d]=C.useState(300),[m,y]=C.useState(!1);C.useEffect(()=>{if(c<=0){y(!0);return}const p=setInterval(()=>{d(T=>T-1)},1e3);return()=>clearInterval(p)},[c]);const j=p=>{const T=Math.floor(p/60),w=p%60;return`${T.toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}`},b=async()=>{f(!0);try{const p=JSON.parse(localStorage.getItem("userData"));if(!p){alert("User not found. Please log in again."),i("/login");return}const T="TXN-"+Date.now()+"-"+Math.floor(Math.random()*1e3),N=await(await fetch(`${nt()}/api/payment/record`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:p.id,plan:"Starter",amount:5,transactionId:T})})).json();N.success?i("/payment-history"):alert(N.error||"Error recording payment. Please contact support.")}catch(p){console.error("Error recording payment:",p),alert("Network error. Please try again.")}finally{f(!1)}};return u.jsx("div",{style:{padding:"5rem 2rem",background:"#000000",color:"white",minHeight:"100vh"},children:u.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",background:"#111827",borderRadius:"0.5rem",padding:"2rem",border:"1px solid #334155",textAlign:"center"},children:[u.jsx("h2",{style:{textAlign:"center",fontSize:"2rem",marginBottom:"2rem",color:"#10b981"},children:"Complete Your Payment"}),m?u.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid #ef4444",color:"#ef4444",padding:"1rem",borderRadius:"0.375rem",marginBottom:"1rem"},children:[u.jsx("h3",{children:"Payment Failed"}),u.jsx("p",{children:"Payment was not completed within the 5-minute time limit. Please try again."}),u.jsx("button",{onClick:()=>{y(!1),d(300)},style:{padding:"0.5rem 1rem",background:"#ef4444",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"1rem",fontWeight:"600",cursor:"pointer",marginTop:"1rem"},children:"Try Again"})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"Scan the QR code below with your payment app to complete the transaction"}),u.jsxs("p",{style:{color:"#f59e0b",fontWeight:"bold",marginTop:"1rem"},children:["Time remaining: ",j(c)]}),u.jsx("div",{style:{width:"300px",height:"300px",background:"#1e293b",border:"2px dashed #334155",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",margin:"2rem auto",color:"#94a3b8",fontSize:"1.2rem"},children:(()=>{const p=localStorage.getItem("adminQRCode");return p?u.jsx("img",{src:p,alt:"Payment QR Code",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}):"QR Code Will Be Placed Here by Admin"})()}),u.jsx("p",{children:"After completing the payment, your service will be activated shortly."})]}),!m&&u.jsx("button",{onClick:b,disabled:o,style:{padding:"1rem 2rem",background:"linear-gradient(90deg, #10b981, #059669)",color:"white",border:"none",borderRadius:"0.375rem",fontSize:"1rem",fontWeight:"600",cursor:o?"not-allowed":"pointer",transition:"all 0.3s ease",marginTop:"1rem",opacity:o?.7:1},children:o?"Processing...":"I Have Completed Payment"})]})})},U0=g.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem;
`,B0=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #334155;
`,L0=g.h2`
  color: #00ff9d;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`,kS=g.button`
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
`,YS=g.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`,bl=g.th`
  background: #0f172a;
  color: #00ff9d;
  text-align: left;
  padding: 1rem;
  border: 1px solid #334155;
`,xl=g.td`
  padding: 1rem;
  border: 1px solid #334155;
  color: #cbd5e1;
`,GS=g.tr`
  &:nth-child(even) {
    background: #1e293b;
  }
  
  &:nth-child(odd) {
    background: #0f172a;
  }
`,qS=g.span`
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
`,QS=g.button`
  background: linear-gradient(90deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`,XS=g.div`
  text-align: center;
  color: #94a3b8;
  padding: 2rem;
`,H0=g.button`
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
`,VS=g.div`
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
`,ZS=g.div`
  background: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid #334155;
`,$S=g.button`
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
`,KS=g.div`
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
`,JS=g.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: ${i=>i.isOwn?"#0f172a":"#334155"};
  border-left: 3px solid ${i=>i.isOwn?"#10b981":"#3b82f6"};
`,FS=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
`,WS=g.div`
  color: #cbd5e1;
`,IS=g.form`
  display: flex;
  margin-top: 1rem;
`,PS=g.input`
  flex: 1;
  padding: 0.75rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: white;
`,e3=g.button`
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
`,t3=()=>{const i=_t(),[o,f]=C.useState([]),[c,d]=C.useState(!0),[m,y]=C.useState(!1),[j,b]=C.useState(null),[p,T]=C.useState([]),[w,N]=C.useState(""),[H,G]=C.useState(!1);C.useEffect(()=>{X()},[]);const X=async()=>{try{const V=JSON.parse(localStorage.getItem("userData"));if(!V){i("/login");return}const F=V.id,q=await fetch(`${nt()}/api/payment/history/${F}`);if(q.ok){const he=await q.json();f(he.payments||[])}else console.error("Failed to load payment history")}catch(V){console.error("Error loading payment history:",V)}finally{d(!1)}},Z=async V=>{G(!0);try{const q=await(await fetch(`${nt()}/api/messages/payment/${V}`,{headers:{"user-type":"user"}})).json();q.success&&T(q.messages)}catch(F){console.error("Error fetching messages:",F)}finally{G(!1)}},k=async V=>{if(V.preventDefault(),!(!w.trim()||!j))try{const F=JSON.parse(localStorage.getItem("userData"));if(!F)return;const he=await(await fetch(`${nt()}/api/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:F.id,paymentId:j.id,message:w,userType:"user"})})).json();he.success&&(T([...p,he.message]),N(""))}catch(F){console.error("Error sending message:",F)}},Y=async V=>{b(V),y(!0),await Z(V.id)},Q=V=>{const F={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(V).toLocaleDateString(void 0,F)},ne=V=>{const F=`
Minecraft Server Hosting Receipt
================================

Transaction ID: ${V.transactionId}
Date: ${Q(V.timestamp)}
Plan: ${V.plan}
Amount: $${V.amount}

Customer Information:
Name: ${user?.name}
Email: ${user?.email}

Thank you for your purchase!
    `.trim(),q=new Blob([F],{type:"text/plain"}),he=URL.createObjectURL(q),ye=document.createElement("a");ye.href=he,ye.download=`receipt-${V.transactionId}.txt`,document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),URL.revokeObjectURL(he)};return c?u.jsx(U0,{children:u.jsxs(B0,{children:[u.jsx(L0,{children:"Payment History"}),u.jsx("div",{style:{textAlign:"center",color:"#cbd5e1"},children:"Loading..."})]})}):u.jsxs(U0,{children:[u.jsxs(B0,{children:[u.jsx(kS,{onClick:()=>i(-1),children:"← Back"}),u.jsx(L0,{children:"Payment History"}),o.length===0?u.jsx(XS,{children:"No payments found."}):u.jsxs(YS,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx(bl,{children:"Transaction ID"}),u.jsx(bl,{children:"Date"}),u.jsx(bl,{children:"Plan"}),u.jsx(bl,{children:"Amount"}),u.jsx(bl,{children:"Status"}),u.jsx(bl,{children:"Actions"})]})}),u.jsx("tbody",{children:o.map(V=>u.jsxs(GS,{children:[u.jsx(xl,{children:V.transactionId}),u.jsx(xl,{children:Q(V.timestamp)}),u.jsx(xl,{children:V.plan}),u.jsxs(xl,{children:["$",V.amount]}),u.jsx(xl,{children:u.jsx(qS,{className:V.status,children:V.status})}),u.jsx(xl,{children:V.status==="confirmed"?u.jsx(H0,{onClick:()=>Y(V),children:"View Chat"}):u.jsxs(u.Fragment,{children:[u.jsx(QS,{onClick:()=>ne(V),children:"Download Receipt"}),u.jsx(H0,{onClick:()=>Y(V),children:"Message Admin"})]})})]},V.id))})]})]}),m&&j&&u.jsx(VS,{children:u.jsxs(ZS,{children:[u.jsx($S,{onClick:()=>y(!1),children:"×"}),u.jsxs("h3",{children:["Messages for Payment ",j.transactionId]}),H?u.jsx("div",{style:{textAlign:"center",color:"#cbd5e1",padding:"2rem"},children:"Loading messages..."}):u.jsxs(u.Fragment,{children:[u.jsx(KS,{children:p.length===0?u.jsx("div",{style:{textAlign:"center",color:"#94a3b8",padding:"1rem"},children:"No messages yet. Start a conversation with the admin."}):p.map(V=>u.jsxs(JS,{isOwn:V.userType==="user",children:[u.jsxs(FS,{children:[u.jsx("span",{children:V.userType==="user"?"You":"Admin"}),u.jsx("span",{children:Q(V.timestamp)})]}),u.jsx(WS,{children:V.message})]},V.id))}),u.jsxs(IS,{onSubmit:k,children:[u.jsx(PS,{type:"text",value:w,onChange:V=>N(V.target.value),placeholder:"Type your message to admin..."}),u.jsx(e3,{type:"submit",children:"Send"})]})]})]})})]})};function n3(){const[i,o]=C.useState(!1),[f,c]=C.useState(null);C.useEffect(()=>{const y=localStorage.getItem("userToken"),j=localStorage.getItem("userData");y&&j&&(o(!0),c(JSON.parse(j)))},[]);const d=y=>{o(!0),c(y)},m=()=>{o(!1),c(null),localStorage.removeItem("userToken"),localStorage.removeItem("userData")};return u.jsx("div",{className:"App",children:u.jsxs(rv,{children:[u.jsx(St,{path:"/",element:u.jsxs(u.Fragment,{children:[u.jsx(ou,{isAuthenticated:i,user:f,onLogout:m}),u.jsx(fx,{}),u.jsx(jx,{}),u.jsx(o2,{}),u.jsx(O2,{}),u.jsx(Fx,{}),u.jsx(su,{})]})}),u.jsx(St,{path:"/pricing",element:u.jsxs(u.Fragment,{children:[u.jsx(ou,{isAuthenticated:i,user:f,onLogout:m}),u.jsx(Bx,{}),u.jsx(su,{})]})}),u.jsx(St,{path:"/about",element:u.jsxs(u.Fragment,{children:[u.jsx(ou,{isAuthenticated:i,user:f,onLogout:m}),u.jsx(X2,{}),u.jsx(su,{})]})}),u.jsx(St,{path:"/support",element:u.jsxs(u.Fragment,{children:[u.jsx(ou,{isAuthenticated:i,user:f,onLogout:m}),u.jsx(J2,{}),u.jsx(su,{})]})}),u.jsx(St,{path:"/login",element:u.jsx(A5,{onLogin:d})}),u.jsx(St,{path:"/signup",element:u.jsx(L5,{onLogin:d})}),u.jsx(St,{path:"/admin/login",element:u.jsx(a5,{})}),u.jsx(St,{path:"/admin/dashboard",element:u.jsx(b5,{})}),u.jsx(St,{path:"/dashboard",element:u.jsx(MS,{})}),u.jsx(St,{path:"/billing",element:u.jsx(LS,{})}),u.jsx(St,{path:"/payout",element:u.jsx(HS,{})}),u.jsx(St,{path:"/payment-history",element:u.jsx(t3,{})}),u.jsx(St,{path:"/test",element:u.jsx(DS,{})})]})})}gy.createRoot(document.getElementById("root")).render(u.jsx(jl.StrictMode,{children:u.jsx(Mv,{children:u.jsx(n3,{})})}));
