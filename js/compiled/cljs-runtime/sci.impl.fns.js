goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__63982 = arguments.length;
switch (G__63982) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__64000 = fixed_arity;
switch (G__64000) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__64003){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__64003);

while(true){
var ret__63298__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63298__auto__)){
continue;
} else {
return ret__63298__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__64003 = null;
if (arguments.length > 0) {
var G__64933__i = 0, G__64933__a = new Array(arguments.length -  0);
while (G__64933__i < G__64933__a.length) {G__64933__a[G__64933__i] = arguments[G__64933__i + 0]; ++G__64933__i;}
  G__64003 = new cljs.core.IndexedSeq(G__64933__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__64003);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__64934){
var G__64003 = cljs.core.seq(arglist__64934);
return sci$impl$fns$arity_0__delegate(G__64003);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__64006,G__64007){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64006);

(invoc_array[vararg_idx] = G__64007);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__64006,var_args){
var G__64007 = null;
if (arguments.length > 1) {
var G__64937__i = 0, G__64937__a = new Array(arguments.length -  1);
while (G__64937__i < G__64937__a.length) {G__64937__a[G__64937__i] = arguments[G__64937__i + 1]; ++G__64937__i;}
  G__64007 = new cljs.core.IndexedSeq(G__64937__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__64006,G__64007);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__64939){
var G__64006 = cljs.core.first(arglist__64939);
var G__64007 = cljs.core.rest(arglist__64939);
return sci$impl$fns$arity_1__delegate(G__64006,G__64007);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__64022,G__64023,G__64024){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64022);

(invoc_array[(1)] = G__64023);

(invoc_array[vararg_idx] = G__64024);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__64022,G__64023,var_args){
var G__64024 = null;
if (arguments.length > 2) {
var G__64940__i = 0, G__64940__a = new Array(arguments.length -  2);
while (G__64940__i < G__64940__a.length) {G__64940__a[G__64940__i] = arguments[G__64940__i + 2]; ++G__64940__i;}
  G__64024 = new cljs.core.IndexedSeq(G__64940__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__64022,G__64023,G__64024);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__64941){
var G__64022 = cljs.core.first(arglist__64941);
arglist__64941 = cljs.core.next(arglist__64941);
var G__64023 = cljs.core.first(arglist__64941);
var G__64024 = cljs.core.rest(arglist__64941);
return sci$impl$fns$arity_2__delegate(G__64022,G__64023,G__64024);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__64032,G__64033,G__64034,G__64035){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64032);

(invoc_array[(1)] = G__64033);

(invoc_array[(2)] = G__64034);

(invoc_array[vararg_idx] = G__64035);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__64032,G__64033,G__64034,var_args){
var G__64035 = null;
if (arguments.length > 3) {
var G__64942__i = 0, G__64942__a = new Array(arguments.length -  3);
while (G__64942__i < G__64942__a.length) {G__64942__a[G__64942__i] = arguments[G__64942__i + 3]; ++G__64942__i;}
  G__64035 = new cljs.core.IndexedSeq(G__64942__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__64032,G__64033,G__64034,G__64035);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__64943){
var G__64032 = cljs.core.first(arglist__64943);
arglist__64943 = cljs.core.next(arglist__64943);
var G__64033 = cljs.core.first(arglist__64943);
arglist__64943 = cljs.core.next(arglist__64943);
var G__64034 = cljs.core.first(arglist__64943);
var G__64035 = cljs.core.rest(arglist__64943);
return sci$impl$fns$arity_3__delegate(G__64032,G__64033,G__64034,G__64035);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__64044,G__64045,G__64046,G__64047,G__64048){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64044);

(invoc_array[(1)] = G__64045);

(invoc_array[(2)] = G__64046);

(invoc_array[(3)] = G__64047);

(invoc_array[vararg_idx] = G__64048);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__64044,G__64045,G__64046,G__64047,var_args){
var G__64048 = null;
if (arguments.length > 4) {
var G__64944__i = 0, G__64944__a = new Array(arguments.length -  4);
while (G__64944__i < G__64944__a.length) {G__64944__a[G__64944__i] = arguments[G__64944__i + 4]; ++G__64944__i;}
  G__64048 = new cljs.core.IndexedSeq(G__64944__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__64044,G__64045,G__64046,G__64047,G__64048);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__64945){
var G__64044 = cljs.core.first(arglist__64945);
arglist__64945 = cljs.core.next(arglist__64945);
var G__64045 = cljs.core.first(arglist__64945);
arglist__64945 = cljs.core.next(arglist__64945);
var G__64046 = cljs.core.first(arglist__64945);
arglist__64945 = cljs.core.next(arglist__64945);
var G__64047 = cljs.core.first(arglist__64945);
var G__64048 = cljs.core.rest(arglist__64945);
return sci$impl$fns$arity_4__delegate(G__64044,G__64045,G__64046,G__64047,G__64048);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__64053,G__64054,G__64055,G__64056,G__64057,G__64058){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64053);

(invoc_array[(1)] = G__64054);

(invoc_array[(2)] = G__64055);

(invoc_array[(3)] = G__64056);

(invoc_array[(4)] = G__64057);

(invoc_array[vararg_idx] = G__64058);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__64053,G__64054,G__64055,G__64056,G__64057,var_args){
var G__64058 = null;
if (arguments.length > 5) {
var G__64949__i = 0, G__64949__a = new Array(arguments.length -  5);
while (G__64949__i < G__64949__a.length) {G__64949__a[G__64949__i] = arguments[G__64949__i + 5]; ++G__64949__i;}
  G__64058 = new cljs.core.IndexedSeq(G__64949__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__64053,G__64054,G__64055,G__64056,G__64057,G__64058);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__64950){
var G__64053 = cljs.core.first(arglist__64950);
arglist__64950 = cljs.core.next(arglist__64950);
var G__64054 = cljs.core.first(arglist__64950);
arglist__64950 = cljs.core.next(arglist__64950);
var G__64055 = cljs.core.first(arglist__64950);
arglist__64950 = cljs.core.next(arglist__64950);
var G__64056 = cljs.core.first(arglist__64950);
arglist__64950 = cljs.core.next(arglist__64950);
var G__64057 = cljs.core.first(arglist__64950);
var G__64058 = cljs.core.rest(arglist__64950);
return sci$impl$fns$arity_5__delegate(G__64053,G__64054,G__64055,G__64056,G__64057,G__64058);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__64060,G__64061,G__64062,G__64063,G__64064,G__64065,G__64066){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64060);

(invoc_array[(1)] = G__64061);

(invoc_array[(2)] = G__64062);

(invoc_array[(3)] = G__64063);

(invoc_array[(4)] = G__64064);

(invoc_array[(5)] = G__64065);

(invoc_array[vararg_idx] = G__64066);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__64060,G__64061,G__64062,G__64063,G__64064,G__64065,var_args){
var G__64066 = null;
if (arguments.length > 6) {
var G__64951__i = 0, G__64951__a = new Array(arguments.length -  6);
while (G__64951__i < G__64951__a.length) {G__64951__a[G__64951__i] = arguments[G__64951__i + 6]; ++G__64951__i;}
  G__64066 = new cljs.core.IndexedSeq(G__64951__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__64060,G__64061,G__64062,G__64063,G__64064,G__64065,G__64066);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__64952){
var G__64060 = cljs.core.first(arglist__64952);
arglist__64952 = cljs.core.next(arglist__64952);
var G__64061 = cljs.core.first(arglist__64952);
arglist__64952 = cljs.core.next(arglist__64952);
var G__64062 = cljs.core.first(arglist__64952);
arglist__64952 = cljs.core.next(arglist__64952);
var G__64063 = cljs.core.first(arglist__64952);
arglist__64952 = cljs.core.next(arglist__64952);
var G__64064 = cljs.core.first(arglist__64952);
arglist__64952 = cljs.core.next(arglist__64952);
var G__64065 = cljs.core.first(arglist__64952);
var G__64066 = cljs.core.rest(arglist__64952);
return sci$impl$fns$arity_6__delegate(G__64060,G__64061,G__64062,G__64063,G__64064,G__64065,G__64066);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64070);

(invoc_array[(1)] = G__64071);

(invoc_array[(2)] = G__64072);

(invoc_array[(3)] = G__64073);

(invoc_array[(4)] = G__64074);

(invoc_array[(5)] = G__64075);

(invoc_array[(6)] = G__64076);

(invoc_array[vararg_idx] = G__64077);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,var_args){
var G__64077 = null;
if (arguments.length > 7) {
var G__64953__i = 0, G__64953__a = new Array(arguments.length -  7);
while (G__64953__i < G__64953__a.length) {G__64953__a[G__64953__i] = arguments[G__64953__i + 7]; ++G__64953__i;}
  G__64077 = new cljs.core.IndexedSeq(G__64953__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__64954){
var G__64070 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64071 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64072 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64073 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64074 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64075 = cljs.core.first(arglist__64954);
arglist__64954 = cljs.core.next(arglist__64954);
var G__64076 = cljs.core.first(arglist__64954);
var G__64077 = cljs.core.rest(arglist__64954);
return sci$impl$fns$arity_7__delegate(G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__64083,G__64084,G__64085,G__64086,G__64087,G__64088,G__64089,G__64090,G__64091){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64083);

(invoc_array[(1)] = G__64084);

(invoc_array[(2)] = G__64085);

(invoc_array[(3)] = G__64086);

(invoc_array[(4)] = G__64087);

(invoc_array[(5)] = G__64088);

(invoc_array[(6)] = G__64089);

(invoc_array[(7)] = G__64090);

(invoc_array[vararg_idx] = G__64091);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__64083,G__64084,G__64085,G__64086,G__64087,G__64088,G__64089,G__64090,var_args){
var G__64091 = null;
if (arguments.length > 8) {
var G__64958__i = 0, G__64958__a = new Array(arguments.length -  8);
while (G__64958__i < G__64958__a.length) {G__64958__a[G__64958__i] = arguments[G__64958__i + 8]; ++G__64958__i;}
  G__64091 = new cljs.core.IndexedSeq(G__64958__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__64083,G__64084,G__64085,G__64086,G__64087,G__64088,G__64089,G__64090,G__64091);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__64959){
var G__64083 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64084 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64085 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64086 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64087 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64088 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64089 = cljs.core.first(arglist__64959);
arglist__64959 = cljs.core.next(arglist__64959);
var G__64090 = cljs.core.first(arglist__64959);
var G__64091 = cljs.core.rest(arglist__64959);
return sci$impl$fns$arity_8__delegate(G__64083,G__64084,G__64085,G__64086,G__64087,G__64088,G__64089,G__64090,G__64091);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__64092,G__64093,G__64094,G__64095,G__64096,G__64097,G__64098,G__64099,G__64100,G__64101){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64092);

(invoc_array[(1)] = G__64093);

(invoc_array[(2)] = G__64094);

(invoc_array[(3)] = G__64095);

(invoc_array[(4)] = G__64096);

(invoc_array[(5)] = G__64097);

(invoc_array[(6)] = G__64098);

(invoc_array[(7)] = G__64099);

(invoc_array[(8)] = G__64100);

(invoc_array[vararg_idx] = G__64101);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__64092,G__64093,G__64094,G__64095,G__64096,G__64097,G__64098,G__64099,G__64100,var_args){
var G__64101 = null;
if (arguments.length > 9) {
var G__64960__i = 0, G__64960__a = new Array(arguments.length -  9);
while (G__64960__i < G__64960__a.length) {G__64960__a[G__64960__i] = arguments[G__64960__i + 9]; ++G__64960__i;}
  G__64101 = new cljs.core.IndexedSeq(G__64960__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__64092,G__64093,G__64094,G__64095,G__64096,G__64097,G__64098,G__64099,G__64100,G__64101);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__64961){
var G__64092 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64093 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64094 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64095 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64096 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64097 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64098 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64099 = cljs.core.first(arglist__64961);
arglist__64961 = cljs.core.next(arglist__64961);
var G__64100 = cljs.core.first(arglist__64961);
var G__64101 = cljs.core.rest(arglist__64961);
return sci$impl$fns$arity_9__delegate(G__64092,G__64093,G__64094,G__64095,G__64096,G__64097,G__64098,G__64099,G__64100,G__64101);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64102);

(invoc_array[(1)] = G__64103);

(invoc_array[(2)] = G__64104);

(invoc_array[(3)] = G__64105);

(invoc_array[(4)] = G__64106);

(invoc_array[(5)] = G__64107);

(invoc_array[(6)] = G__64108);

(invoc_array[(7)] = G__64109);

(invoc_array[(8)] = G__64110);

(invoc_array[(9)] = G__64111);

(invoc_array[vararg_idx] = G__64112);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,var_args){
var G__64112 = null;
if (arguments.length > 10) {
var G__64962__i = 0, G__64962__a = new Array(arguments.length -  10);
while (G__64962__i < G__64962__a.length) {G__64962__a[G__64962__i] = arguments[G__64962__i + 10]; ++G__64962__i;}
  G__64112 = new cljs.core.IndexedSeq(G__64962__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__64963){
var G__64102 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64103 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64104 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64105 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64106 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64107 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64108 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64109 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64110 = cljs.core.first(arglist__64963);
arglist__64963 = cljs.core.next(arglist__64963);
var G__64111 = cljs.core.first(arglist__64963);
var G__64112 = cljs.core.rest(arglist__64963);
return sci$impl$fns$arity_10__delegate(G__64102,G__64103,G__64104,G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__64120,G__64121,G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129,G__64130,G__64131){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64120);

(invoc_array[(1)] = G__64121);

(invoc_array[(2)] = G__64122);

(invoc_array[(3)] = G__64123);

(invoc_array[(4)] = G__64124);

(invoc_array[(5)] = G__64125);

(invoc_array[(6)] = G__64126);

(invoc_array[(7)] = G__64127);

(invoc_array[(8)] = G__64128);

(invoc_array[(9)] = G__64129);

(invoc_array[(10)] = G__64130);

(invoc_array[vararg_idx] = G__64131);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__64120,G__64121,G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129,G__64130,var_args){
var G__64131 = null;
if (arguments.length > 11) {
var G__64964__i = 0, G__64964__a = new Array(arguments.length -  11);
while (G__64964__i < G__64964__a.length) {G__64964__a[G__64964__i] = arguments[G__64964__i + 11]; ++G__64964__i;}
  G__64131 = new cljs.core.IndexedSeq(G__64964__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__64120,G__64121,G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129,G__64130,G__64131);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__64965){
var G__64120 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64121 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64122 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64123 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64124 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64125 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64126 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64127 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64128 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64129 = cljs.core.first(arglist__64965);
arglist__64965 = cljs.core.next(arglist__64965);
var G__64130 = cljs.core.first(arglist__64965);
var G__64131 = cljs.core.rest(arglist__64965);
return sci$impl$fns$arity_11__delegate(G__64120,G__64121,G__64122,G__64123,G__64124,G__64125,G__64126,G__64127,G__64128,G__64129,G__64130,G__64131);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__64144,G__64145,G__64146,G__64147,G__64148,G__64149,G__64150,G__64151,G__64152,G__64153,G__64154,G__64155,G__64156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64144);

(invoc_array[(1)] = G__64145);

(invoc_array[(2)] = G__64146);

(invoc_array[(3)] = G__64147);

(invoc_array[(4)] = G__64148);

(invoc_array[(5)] = G__64149);

(invoc_array[(6)] = G__64150);

(invoc_array[(7)] = G__64151);

(invoc_array[(8)] = G__64152);

(invoc_array[(9)] = G__64153);

(invoc_array[(10)] = G__64154);

(invoc_array[(11)] = G__64155);

(invoc_array[vararg_idx] = G__64156);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__64144,G__64145,G__64146,G__64147,G__64148,G__64149,G__64150,G__64151,G__64152,G__64153,G__64154,G__64155,var_args){
var G__64156 = null;
if (arguments.length > 12) {
var G__64966__i = 0, G__64966__a = new Array(arguments.length -  12);
while (G__64966__i < G__64966__a.length) {G__64966__a[G__64966__i] = arguments[G__64966__i + 12]; ++G__64966__i;}
  G__64156 = new cljs.core.IndexedSeq(G__64966__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__64144,G__64145,G__64146,G__64147,G__64148,G__64149,G__64150,G__64151,G__64152,G__64153,G__64154,G__64155,G__64156);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__64967){
var G__64144 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64145 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64146 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64147 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64148 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64149 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64150 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64151 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64152 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64153 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64154 = cljs.core.first(arglist__64967);
arglist__64967 = cljs.core.next(arglist__64967);
var G__64155 = cljs.core.first(arglist__64967);
var G__64156 = cljs.core.rest(arglist__64967);
return sci$impl$fns$arity_12__delegate(G__64144,G__64145,G__64146,G__64147,G__64148,G__64149,G__64150,G__64151,G__64152,G__64153,G__64154,G__64155,G__64156);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__64165,G__64166,G__64167,G__64168,G__64169,G__64170,G__64171,G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64165);

(invoc_array[(1)] = G__64166);

(invoc_array[(2)] = G__64167);

(invoc_array[(3)] = G__64168);

(invoc_array[(4)] = G__64169);

(invoc_array[(5)] = G__64170);

(invoc_array[(6)] = G__64171);

(invoc_array[(7)] = G__64172);

(invoc_array[(8)] = G__64173);

(invoc_array[(9)] = G__64174);

(invoc_array[(10)] = G__64175);

(invoc_array[(11)] = G__64176);

(invoc_array[(12)] = G__64177);

(invoc_array[vararg_idx] = G__64178);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__64165,G__64166,G__64167,G__64168,G__64169,G__64170,G__64171,G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,var_args){
var G__64178 = null;
if (arguments.length > 13) {
var G__64968__i = 0, G__64968__a = new Array(arguments.length -  13);
while (G__64968__i < G__64968__a.length) {G__64968__a[G__64968__i] = arguments[G__64968__i + 13]; ++G__64968__i;}
  G__64178 = new cljs.core.IndexedSeq(G__64968__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__64165,G__64166,G__64167,G__64168,G__64169,G__64170,G__64171,G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__64969){
var G__64165 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64166 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64167 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64168 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64169 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64170 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64171 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64172 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64173 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64174 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64175 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64176 = cljs.core.first(arglist__64969);
arglist__64969 = cljs.core.next(arglist__64969);
var G__64177 = cljs.core.first(arglist__64969);
var G__64178 = cljs.core.rest(arglist__64969);
return sci$impl$fns$arity_13__delegate(G__64165,G__64166,G__64167,G__64168,G__64169,G__64170,G__64171,G__64172,G__64173,G__64174,G__64175,G__64176,G__64177,G__64178);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__64181,G__64182,G__64183,G__64184,G__64185,G__64186,G__64187,G__64188,G__64189,G__64190,G__64191,G__64192,G__64193,G__64194,G__64195){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64181);

(invoc_array[(1)] = G__64182);

(invoc_array[(2)] = G__64183);

(invoc_array[(3)] = G__64184);

(invoc_array[(4)] = G__64185);

(invoc_array[(5)] = G__64186);

(invoc_array[(6)] = G__64187);

(invoc_array[(7)] = G__64188);

(invoc_array[(8)] = G__64189);

(invoc_array[(9)] = G__64190);

(invoc_array[(10)] = G__64191);

(invoc_array[(11)] = G__64192);

(invoc_array[(12)] = G__64193);

(invoc_array[(13)] = G__64194);

(invoc_array[vararg_idx] = G__64195);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__64181,G__64182,G__64183,G__64184,G__64185,G__64186,G__64187,G__64188,G__64189,G__64190,G__64191,G__64192,G__64193,G__64194,var_args){
var G__64195 = null;
if (arguments.length > 14) {
var G__64973__i = 0, G__64973__a = new Array(arguments.length -  14);
while (G__64973__i < G__64973__a.length) {G__64973__a[G__64973__i] = arguments[G__64973__i + 14]; ++G__64973__i;}
  G__64195 = new cljs.core.IndexedSeq(G__64973__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__64181,G__64182,G__64183,G__64184,G__64185,G__64186,G__64187,G__64188,G__64189,G__64190,G__64191,G__64192,G__64193,G__64194,G__64195);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__64974){
var G__64181 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64182 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64183 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64184 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64185 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64186 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64187 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64188 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64189 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64190 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64191 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64192 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64193 = cljs.core.first(arglist__64974);
arglist__64974 = cljs.core.next(arglist__64974);
var G__64194 = cljs.core.first(arglist__64974);
var G__64195 = cljs.core.rest(arglist__64974);
return sci$impl$fns$arity_14__delegate(G__64181,G__64182,G__64183,G__64184,G__64185,G__64186,G__64187,G__64188,G__64189,G__64190,G__64191,G__64192,G__64193,G__64194,G__64195);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210,G__64211,G__64212,G__64213,G__64214,G__64215,G__64216,G__64217,G__64218){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64203);

(invoc_array[(1)] = G__64204);

(invoc_array[(2)] = G__64205);

(invoc_array[(3)] = G__64206);

(invoc_array[(4)] = G__64207);

(invoc_array[(5)] = G__64208);

(invoc_array[(6)] = G__64209);

(invoc_array[(7)] = G__64210);

(invoc_array[(8)] = G__64211);

(invoc_array[(9)] = G__64212);

(invoc_array[(10)] = G__64213);

(invoc_array[(11)] = G__64214);

(invoc_array[(12)] = G__64215);

(invoc_array[(13)] = G__64216);

(invoc_array[(14)] = G__64217);

(invoc_array[vararg_idx] = G__64218);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210,G__64211,G__64212,G__64213,G__64214,G__64215,G__64216,G__64217,var_args){
var G__64218 = null;
if (arguments.length > 15) {
var G__64975__i = 0, G__64975__a = new Array(arguments.length -  15);
while (G__64975__i < G__64975__a.length) {G__64975__a[G__64975__i] = arguments[G__64975__i + 15]; ++G__64975__i;}
  G__64218 = new cljs.core.IndexedSeq(G__64975__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210,G__64211,G__64212,G__64213,G__64214,G__64215,G__64216,G__64217,G__64218);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__64976){
var G__64203 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64204 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64205 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64206 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64207 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64208 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64209 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64210 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64211 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64212 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64213 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64214 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64215 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64216 = cljs.core.first(arglist__64976);
arglist__64976 = cljs.core.next(arglist__64976);
var G__64217 = cljs.core.first(arglist__64976);
var G__64218 = cljs.core.rest(arglist__64976);
return sci$impl$fns$arity_15__delegate(G__64203,G__64204,G__64205,G__64206,G__64207,G__64208,G__64209,G__64210,G__64211,G__64212,G__64213,G__64214,G__64215,G__64216,G__64217,G__64218);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235,G__64236,G__64237,G__64238){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64222);

(invoc_array[(1)] = G__64223);

(invoc_array[(2)] = G__64224);

(invoc_array[(3)] = G__64225);

(invoc_array[(4)] = G__64226);

(invoc_array[(5)] = G__64227);

(invoc_array[(6)] = G__64228);

(invoc_array[(7)] = G__64229);

(invoc_array[(8)] = G__64230);

(invoc_array[(9)] = G__64231);

(invoc_array[(10)] = G__64232);

(invoc_array[(11)] = G__64233);

(invoc_array[(12)] = G__64234);

(invoc_array[(13)] = G__64235);

(invoc_array[(14)] = G__64236);

(invoc_array[(15)] = G__64237);

(invoc_array[vararg_idx] = G__64238);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235,G__64236,G__64237,var_args){
var G__64238 = null;
if (arguments.length > 16) {
var G__64984__i = 0, G__64984__a = new Array(arguments.length -  16);
while (G__64984__i < G__64984__a.length) {G__64984__a[G__64984__i] = arguments[G__64984__i + 16]; ++G__64984__i;}
  G__64238 = new cljs.core.IndexedSeq(G__64984__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235,G__64236,G__64237,G__64238);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__64988){
var G__64222 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64223 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64224 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64225 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64226 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64227 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64228 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64229 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64230 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64231 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64232 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64233 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64234 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64235 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64236 = cljs.core.first(arglist__64988);
arglist__64988 = cljs.core.next(arglist__64988);
var G__64237 = cljs.core.first(arglist__64988);
var G__64238 = cljs.core.rest(arglist__64988);
return sci$impl$fns$arity_16__delegate(G__64222,G__64223,G__64224,G__64225,G__64226,G__64227,G__64228,G__64229,G__64230,G__64231,G__64232,G__64233,G__64234,G__64235,G__64236,G__64237,G__64238);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267,G__64268,G__64269){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64252);

(invoc_array[(1)] = G__64253);

(invoc_array[(2)] = G__64254);

(invoc_array[(3)] = G__64255);

(invoc_array[(4)] = G__64256);

(invoc_array[(5)] = G__64257);

(invoc_array[(6)] = G__64258);

(invoc_array[(7)] = G__64259);

(invoc_array[(8)] = G__64260);

(invoc_array[(9)] = G__64261);

(invoc_array[(10)] = G__64262);

(invoc_array[(11)] = G__64263);

(invoc_array[(12)] = G__64264);

(invoc_array[(13)] = G__64265);

(invoc_array[(14)] = G__64266);

(invoc_array[(15)] = G__64267);

(invoc_array[(16)] = G__64268);

(invoc_array[vararg_idx] = G__64269);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267,G__64268,var_args){
var G__64269 = null;
if (arguments.length > 17) {
var G__64989__i = 0, G__64989__a = new Array(arguments.length -  17);
while (G__64989__i < G__64989__a.length) {G__64989__a[G__64989__i] = arguments[G__64989__i + 17]; ++G__64989__i;}
  G__64269 = new cljs.core.IndexedSeq(G__64989__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267,G__64268,G__64269);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__64990){
var G__64252 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64253 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64254 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64255 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64256 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64257 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64258 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64259 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64260 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64261 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64262 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64263 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64264 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64265 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64266 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64267 = cljs.core.first(arglist__64990);
arglist__64990 = cljs.core.next(arglist__64990);
var G__64268 = cljs.core.first(arglist__64990);
var G__64269 = cljs.core.rest(arglist__64990);
return sci$impl$fns$arity_17__delegate(G__64252,G__64253,G__64254,G__64255,G__64256,G__64257,G__64258,G__64259,G__64260,G__64261,G__64262,G__64263,G__64264,G__64265,G__64266,G__64267,G__64268,G__64269);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289,G__64290,G__64291,G__64292){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64274);

(invoc_array[(1)] = G__64275);

(invoc_array[(2)] = G__64276);

(invoc_array[(3)] = G__64277);

(invoc_array[(4)] = G__64278);

(invoc_array[(5)] = G__64279);

(invoc_array[(6)] = G__64280);

(invoc_array[(7)] = G__64281);

(invoc_array[(8)] = G__64282);

(invoc_array[(9)] = G__64283);

(invoc_array[(10)] = G__64284);

(invoc_array[(11)] = G__64285);

(invoc_array[(12)] = G__64286);

(invoc_array[(13)] = G__64287);

(invoc_array[(14)] = G__64288);

(invoc_array[(15)] = G__64289);

(invoc_array[(16)] = G__64290);

(invoc_array[(17)] = G__64291);

(invoc_array[vararg_idx] = G__64292);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289,G__64290,G__64291,var_args){
var G__64292 = null;
if (arguments.length > 18) {
var G__64994__i = 0, G__64994__a = new Array(arguments.length -  18);
while (G__64994__i < G__64994__a.length) {G__64994__a[G__64994__i] = arguments[G__64994__i + 18]; ++G__64994__i;}
  G__64292 = new cljs.core.IndexedSeq(G__64994__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289,G__64290,G__64291,G__64292);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__64995){
var G__64274 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64275 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64276 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64277 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64278 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64279 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64280 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64281 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64282 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64283 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64284 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64285 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64286 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64287 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64288 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64289 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64290 = cljs.core.first(arglist__64995);
arglist__64995 = cljs.core.next(arglist__64995);
var G__64291 = cljs.core.first(arglist__64995);
var G__64292 = cljs.core.rest(arglist__64995);
return sci$impl$fns$arity_18__delegate(G__64274,G__64275,G__64276,G__64277,G__64278,G__64279,G__64280,G__64281,G__64282,G__64283,G__64284,G__64285,G__64286,G__64287,G__64288,G__64289,G__64290,G__64291,G__64292);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317,G__64318,G__64319,G__64320,G__64321){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64302);

(invoc_array[(1)] = G__64303);

(invoc_array[(2)] = G__64304);

(invoc_array[(3)] = G__64305);

(invoc_array[(4)] = G__64306);

(invoc_array[(5)] = G__64307);

(invoc_array[(6)] = G__64308);

(invoc_array[(7)] = G__64309);

(invoc_array[(8)] = G__64310);

(invoc_array[(9)] = G__64311);

(invoc_array[(10)] = G__64312);

(invoc_array[(11)] = G__64313);

(invoc_array[(12)] = G__64314);

(invoc_array[(13)] = G__64315);

(invoc_array[(14)] = G__64316);

(invoc_array[(15)] = G__64317);

(invoc_array[(16)] = G__64318);

(invoc_array[(17)] = G__64319);

(invoc_array[(18)] = G__64320);

(invoc_array[vararg_idx] = G__64321);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317,G__64318,G__64319,G__64320,var_args){
var G__64321 = null;
if (arguments.length > 19) {
var G__64996__i = 0, G__64996__a = new Array(arguments.length -  19);
while (G__64996__i < G__64996__a.length) {G__64996__a[G__64996__i] = arguments[G__64996__i + 19]; ++G__64996__i;}
  G__64321 = new cljs.core.IndexedSeq(G__64996__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317,G__64318,G__64319,G__64320,G__64321);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__64997){
var G__64302 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64303 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64304 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64305 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64306 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64307 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64308 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64309 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64310 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64311 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64312 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64313 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64314 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64315 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64316 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64317 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64318 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64319 = cljs.core.first(arglist__64997);
arglist__64997 = cljs.core.next(arglist__64997);
var G__64320 = cljs.core.first(arglist__64997);
var G__64321 = cljs.core.rest(arglist__64997);
return sci$impl$fns$arity_19__delegate(G__64302,G__64303,G__64304,G__64305,G__64306,G__64307,G__64308,G__64309,G__64310,G__64311,G__64312,G__64313,G__64314,G__64315,G__64316,G__64317,G__64318,G__64319,G__64320,G__64321);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340,G__64341,G__64342,G__64343,G__64344,G__64345,G__64346,G__64347,G__64348,G__64349,G__64350,G__64351,G__64352,G__64353){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64333);

(invoc_array[(1)] = G__64334);

(invoc_array[(2)] = G__64335);

(invoc_array[(3)] = G__64336);

(invoc_array[(4)] = G__64337);

(invoc_array[(5)] = G__64338);

(invoc_array[(6)] = G__64339);

(invoc_array[(7)] = G__64340);

(invoc_array[(8)] = G__64341);

(invoc_array[(9)] = G__64342);

(invoc_array[(10)] = G__64343);

(invoc_array[(11)] = G__64344);

(invoc_array[(12)] = G__64345);

(invoc_array[(13)] = G__64346);

(invoc_array[(14)] = G__64347);

(invoc_array[(15)] = G__64348);

(invoc_array[(16)] = G__64349);

(invoc_array[(17)] = G__64350);

(invoc_array[(18)] = G__64351);

(invoc_array[(19)] = G__64352);

(invoc_array[vararg_idx] = G__64353);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340,G__64341,G__64342,G__64343,G__64344,G__64345,G__64346,G__64347,G__64348,G__64349,G__64350,G__64351,G__64352,var_args){
var G__64353 = null;
if (arguments.length > 20) {
var G__65001__i = 0, G__65001__a = new Array(arguments.length -  20);
while (G__65001__i < G__65001__a.length) {G__65001__a[G__65001__i] = arguments[G__65001__i + 20]; ++G__65001__i;}
  G__64353 = new cljs.core.IndexedSeq(G__65001__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340,G__64341,G__64342,G__64343,G__64344,G__64345,G__64346,G__64347,G__64348,G__64349,G__64350,G__64351,G__64352,G__64353);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__65002){
var G__64333 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64334 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64335 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64336 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64337 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64338 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64339 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64340 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64341 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64342 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64343 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64344 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64345 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64346 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64347 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64348 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64349 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64350 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64351 = cljs.core.first(arglist__65002);
arglist__65002 = cljs.core.next(arglist__65002);
var G__64352 = cljs.core.first(arglist__65002);
var G__64353 = cljs.core.rest(arglist__65002);
return sci$impl$fns$arity_20__delegate(G__64333,G__64334,G__64335,G__64336,G__64337,G__64338,G__64339,G__64340,G__64341,G__64342,G__64343,G__64344,G__64345,G__64346,G__64347,G__64348,G__64349,G__64350,G__64351,G__64352,G__64353);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64000)].join('')));

}
})():(function (){var G__64365 = fixed_arity;
switch (G__64365) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__63298__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63298__auto__)){
continue;
} else {
return ret__63298__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__64368){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64368);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__64377,G__64378){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64377);

(invoc_array[(1)] = G__64378);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__64384,G__64385,G__64386){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64384);

(invoc_array[(1)] = G__64385);

(invoc_array[(2)] = G__64386);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__64387,G__64388,G__64389,G__64390){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64387);

(invoc_array[(1)] = G__64388);

(invoc_array[(2)] = G__64389);

(invoc_array[(3)] = G__64390);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__64395,G__64396,G__64397,G__64398,G__64399){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64395);

(invoc_array[(1)] = G__64396);

(invoc_array[(2)] = G__64397);

(invoc_array[(3)] = G__64398);

(invoc_array[(4)] = G__64399);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__64404,G__64405,G__64406,G__64407,G__64408,G__64409){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64404);

(invoc_array[(1)] = G__64405);

(invoc_array[(2)] = G__64406);

(invoc_array[(3)] = G__64407);

(invoc_array[(4)] = G__64408);

(invoc_array[(5)] = G__64409);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__64412,G__64413,G__64414,G__64415,G__64416,G__64417,G__64418){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64412);

(invoc_array[(1)] = G__64413);

(invoc_array[(2)] = G__64414);

(invoc_array[(3)] = G__64415);

(invoc_array[(4)] = G__64416);

(invoc_array[(5)] = G__64417);

(invoc_array[(6)] = G__64418);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__64428,G__64429,G__64430,G__64431,G__64432,G__64433,G__64434,G__64435){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64428);

(invoc_array[(1)] = G__64429);

(invoc_array[(2)] = G__64430);

(invoc_array[(3)] = G__64431);

(invoc_array[(4)] = G__64432);

(invoc_array[(5)] = G__64433);

(invoc_array[(6)] = G__64434);

(invoc_array[(7)] = G__64435);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__64440,G__64441,G__64442,G__64443,G__64444,G__64445,G__64446,G__64447,G__64448){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64440);

(invoc_array[(1)] = G__64441);

(invoc_array[(2)] = G__64442);

(invoc_array[(3)] = G__64443);

(invoc_array[(4)] = G__64444);

(invoc_array[(5)] = G__64445);

(invoc_array[(6)] = G__64446);

(invoc_array[(7)] = G__64447);

(invoc_array[(8)] = G__64448);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__64451,G__64452,G__64453,G__64454,G__64455,G__64456,G__64457,G__64458,G__64459,G__64460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64451);

(invoc_array[(1)] = G__64452);

(invoc_array[(2)] = G__64453);

(invoc_array[(3)] = G__64454);

(invoc_array[(4)] = G__64455);

(invoc_array[(5)] = G__64456);

(invoc_array[(6)] = G__64457);

(invoc_array[(7)] = G__64458);

(invoc_array[(8)] = G__64459);

(invoc_array[(9)] = G__64460);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__64463,G__64464,G__64465,G__64466,G__64467,G__64468,G__64469,G__64470,G__64471,G__64472,G__64473){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64463);

(invoc_array[(1)] = G__64464);

(invoc_array[(2)] = G__64465);

(invoc_array[(3)] = G__64466);

(invoc_array[(4)] = G__64467);

(invoc_array[(5)] = G__64468);

(invoc_array[(6)] = G__64469);

(invoc_array[(7)] = G__64470);

(invoc_array[(8)] = G__64471);

(invoc_array[(9)] = G__64472);

(invoc_array[(10)] = G__64473);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__64478,G__64479,G__64480,G__64481,G__64482,G__64483,G__64484,G__64485,G__64486,G__64487,G__64488,G__64489){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64478);

(invoc_array[(1)] = G__64479);

(invoc_array[(2)] = G__64480);

(invoc_array[(3)] = G__64481);

(invoc_array[(4)] = G__64482);

(invoc_array[(5)] = G__64483);

(invoc_array[(6)] = G__64484);

(invoc_array[(7)] = G__64485);

(invoc_array[(8)] = G__64486);

(invoc_array[(9)] = G__64487);

(invoc_array[(10)] = G__64488);

(invoc_array[(11)] = G__64489);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__64493,G__64494,G__64495,G__64496,G__64497,G__64498,G__64499,G__64500,G__64501,G__64502,G__64503,G__64504,G__64505){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64493);

(invoc_array[(1)] = G__64494);

(invoc_array[(2)] = G__64495);

(invoc_array[(3)] = G__64496);

(invoc_array[(4)] = G__64497);

(invoc_array[(5)] = G__64498);

(invoc_array[(6)] = G__64499);

(invoc_array[(7)] = G__64500);

(invoc_array[(8)] = G__64501);

(invoc_array[(9)] = G__64502);

(invoc_array[(10)] = G__64503);

(invoc_array[(11)] = G__64504);

(invoc_array[(12)] = G__64505);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__64517,G__64518,G__64519,G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527,G__64528,G__64529,G__64531){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64517);

(invoc_array[(1)] = G__64518);

(invoc_array[(2)] = G__64519);

(invoc_array[(3)] = G__64520);

(invoc_array[(4)] = G__64521);

(invoc_array[(5)] = G__64522);

(invoc_array[(6)] = G__64523);

(invoc_array[(7)] = G__64524);

(invoc_array[(8)] = G__64525);

(invoc_array[(9)] = G__64526);

(invoc_array[(10)] = G__64527);

(invoc_array[(11)] = G__64528);

(invoc_array[(12)] = G__64529);

(invoc_array[(13)] = G__64531);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547,G__64548,G__64549,G__64550,G__64551,G__64552,G__64553,G__64554){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64540);

(invoc_array[(1)] = G__64541);

(invoc_array[(2)] = G__64542);

(invoc_array[(3)] = G__64543);

(invoc_array[(4)] = G__64544);

(invoc_array[(5)] = G__64545);

(invoc_array[(6)] = G__64546);

(invoc_array[(7)] = G__64547);

(invoc_array[(8)] = G__64548);

(invoc_array[(9)] = G__64549);

(invoc_array[(10)] = G__64550);

(invoc_array[(11)] = G__64551);

(invoc_array[(12)] = G__64552);

(invoc_array[(13)] = G__64553);

(invoc_array[(14)] = G__64554);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__64561,G__64562,G__64563,G__64564,G__64565,G__64566,G__64567,G__64568,G__64569,G__64570,G__64571,G__64572,G__64573,G__64574,G__64575,G__64576){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64561);

(invoc_array[(1)] = G__64562);

(invoc_array[(2)] = G__64563);

(invoc_array[(3)] = G__64564);

(invoc_array[(4)] = G__64565);

(invoc_array[(5)] = G__64566);

(invoc_array[(6)] = G__64567);

(invoc_array[(7)] = G__64568);

(invoc_array[(8)] = G__64569);

(invoc_array[(9)] = G__64570);

(invoc_array[(10)] = G__64571);

(invoc_array[(11)] = G__64572);

(invoc_array[(12)] = G__64573);

(invoc_array[(13)] = G__64574);

(invoc_array[(14)] = G__64575);

(invoc_array[(15)] = G__64576);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__64584,G__64585,G__64586,G__64587,G__64588,G__64589,G__64590,G__64591,G__64592,G__64593,G__64594,G__64595,G__64596,G__64597,G__64598,G__64599,G__64600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64584);

(invoc_array[(1)] = G__64585);

(invoc_array[(2)] = G__64586);

(invoc_array[(3)] = G__64587);

(invoc_array[(4)] = G__64588);

(invoc_array[(5)] = G__64589);

(invoc_array[(6)] = G__64590);

(invoc_array[(7)] = G__64591);

(invoc_array[(8)] = G__64592);

(invoc_array[(9)] = G__64593);

(invoc_array[(10)] = G__64594);

(invoc_array[(11)] = G__64595);

(invoc_array[(12)] = G__64596);

(invoc_array[(13)] = G__64597);

(invoc_array[(14)] = G__64598);

(invoc_array[(15)] = G__64599);

(invoc_array[(16)] = G__64600);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64666);

(invoc_array[(1)] = G__64667);

(invoc_array[(2)] = G__64668);

(invoc_array[(3)] = G__64669);

(invoc_array[(4)] = G__64670);

(invoc_array[(5)] = G__64671);

(invoc_array[(6)] = G__64672);

(invoc_array[(7)] = G__64673);

(invoc_array[(8)] = G__64674);

(invoc_array[(9)] = G__64675);

(invoc_array[(10)] = G__64676);

(invoc_array[(11)] = G__64677);

(invoc_array[(12)] = G__64678);

(invoc_array[(13)] = G__64679);

(invoc_array[(14)] = G__64680);

(invoc_array[(15)] = G__64681);

(invoc_array[(16)] = G__64682);

(invoc_array[(17)] = G__64683);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__64686,G__64687,G__64688,G__64689,G__64690,G__64691,G__64692,G__64693,G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64686);

(invoc_array[(1)] = G__64687);

(invoc_array[(2)] = G__64688);

(invoc_array[(3)] = G__64689);

(invoc_array[(4)] = G__64690);

(invoc_array[(5)] = G__64691);

(invoc_array[(6)] = G__64692);

(invoc_array[(7)] = G__64693);

(invoc_array[(8)] = G__64694);

(invoc_array[(9)] = G__64695);

(invoc_array[(10)] = G__64696);

(invoc_array[(11)] = G__64697);

(invoc_array[(12)] = G__64698);

(invoc_array[(13)] = G__64699);

(invoc_array[(14)] = G__64700);

(invoc_array[(15)] = G__64701);

(invoc_array[(16)] = G__64702);

(invoc_array[(17)] = G__64703);

(invoc_array[(18)] = G__64704);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__64712,G__64713,G__64714,G__64715,G__64716,G__64717,G__64718,G__64719,G__64720,G__64721,G__64722,G__64723,G__64724,G__64725,G__64726,G__64727,G__64728,G__64729,G__64730,G__64731){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64712);

(invoc_array[(1)] = G__64713);

(invoc_array[(2)] = G__64714);

(invoc_array[(3)] = G__64715);

(invoc_array[(4)] = G__64716);

(invoc_array[(5)] = G__64717);

(invoc_array[(6)] = G__64718);

(invoc_array[(7)] = G__64719);

(invoc_array[(8)] = G__64720);

(invoc_array[(9)] = G__64721);

(invoc_array[(10)] = G__64722);

(invoc_array[(11)] = G__64723);

(invoc_array[(12)] = G__64724);

(invoc_array[(13)] = G__64725);

(invoc_array[(14)] = G__64726);

(invoc_array[(15)] = G__64727);

(invoc_array[(16)] = G__64728);

(invoc_array[(17)] = G__64729);

(invoc_array[(18)] = G__64730);

(invoc_array[(19)] = G__64731);

while(true){
var ret__63299__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63299__auto__)){
continue;
} else {
return ret__63299__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64365)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__65018 = cljs.core.next(params__$1);
var G__65019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__65020 = lets;
params__$1 = G__65018;
new_params = G__65019;
lets = G__65020;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__65021 = cljs.core.next(params__$1);
var G__65022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__65023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__65021;
new_params = G__65022;
lets = G__65023;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65024 = arguments.length;
var i__5770__auto___65025 = (0);
while(true){
if((i__5770__auto___65025 < len__5769__auto___65024)){
args__5775__auto__.push((arguments[i__5770__auto___65025]));

var G__65026 = (i__5770__auto___65025 + (1));
i__5770__auto___65025 = G__65026;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__64755 = sig;
var seq__64756 = cljs.core.seq(vec__64755);
var first__64757 = cljs.core.first(seq__64756);
var seq__64756__$1 = cljs.core.next(seq__64756);
var params = first__64757;
var body = seq__64756__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq64750){
var G__64751 = cljs.core.first(seq64750);
var seq64750__$1 = cljs.core.next(seq64750);
var G__64752 = cljs.core.first(seq64750__$1);
var seq64750__$2 = cljs.core.next(seq64750__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64751,G__64752,seq64750__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__65034 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__65035 = cljs.core.next(fdecls);
ret = G__65034;
fdecls = G__65035;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65036 = arguments.length;
var i__5770__auto___65037 = (0);
while(true){
if((i__5770__auto___65037 < len__5769__auto___65036)){
args__5775__auto__.push((arguments[i__5770__auto___65037]));

var G__65038 = (i__5770__auto___65037 + (1));
i__5770__auto___65037 = G__65038;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq64785){
var G__64787 = cljs.core.first(seq64785);
var seq64785__$1 = cljs.core.next(seq64785);
var G__64788 = cljs.core.first(seq64785__$1);
var seq64785__$2 = cljs.core.next(seq64785__$1);
var G__64790 = cljs.core.first(seq64785__$2);
var seq64785__$3 = cljs.core.next(seq64785__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64787,G__64788,G__64790,seq64785__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65041 = arguments.length;
var i__5770__auto___65042 = (0);
while(true){
if((i__5770__auto___65042 < len__5769__auto___65041)){
args__5775__auto__.push((arguments[i__5770__auto___65042]));

var G__65043 = (i__5770__auto___65042 + (1));
i__5770__auto___65042 = G__65043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__65044 = cljs.core.cons(f,p);
var G__65045 = cljs.core.next(args__$1);
p = G__65044;
args__$1 = G__65045;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__65047 = cljs.core.cons(f,p);
var G__65048 = cljs.core.next(args__$1);
p = G__65047;
args__$1 = G__65048;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__65052 = cljs.core.next(fd);
fd = G__65052;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__65053 = cljs.core.next(fd);
fd = G__65053;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__65054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__65055 = cljs.core.next(ds);
acc = G__65054;
ds = G__65055;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__65056 = cljs.core.next(p);
var G__65057 = cljs.core.cons(cljs.core.first(p),d);
p = G__65056;
d = G__65057;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq64814){
var G__64815 = cljs.core.first(seq64814);
var seq64814__$1 = cljs.core.next(seq64814);
var G__64816 = cljs.core.first(seq64814__$1);
var seq64814__$2 = cljs.core.next(seq64814__$1);
var G__64817 = cljs.core.first(seq64814__$2);
var seq64814__$3 = cljs.core.next(seq64814__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64815,G__64816,G__64817,seq64814__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
