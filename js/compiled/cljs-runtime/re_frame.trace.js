goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__48056){
var map__48059 = p__48056;
var map__48059__$1 = cljs.core.__destructure_map(map__48059);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48059__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__48071_48110 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__48072_48111 = null;
var count__48073_48112 = (0);
var i__48074_48113 = (0);
while(true){
if((i__48074_48113 < count__48073_48112)){
var vec__48086_48114 = chunk__48072_48111.cljs$core$IIndexed$_nth$arity$2(null,i__48074_48113);
var k_48115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48086_48114,(0),null);
var cb_48116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48086_48114,(1),null);
try{var G__48090_48117 = cljs.core.deref(re_frame.trace.traces);
(cb_48116.cljs$core$IFn$_invoke$arity$1 ? cb_48116.cljs$core$IFn$_invoke$arity$1(G__48090_48117) : cb_48116.call(null,G__48090_48117));
}catch (e48089){var e_48118 = e48089;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_48115,"while storing",cljs.core.deref(re_frame.trace.traces),e_48118], 0));
}

var G__48119 = seq__48071_48110;
var G__48120 = chunk__48072_48111;
var G__48121 = count__48073_48112;
var G__48122 = (i__48074_48113 + (1));
seq__48071_48110 = G__48119;
chunk__48072_48111 = G__48120;
count__48073_48112 = G__48121;
i__48074_48113 = G__48122;
continue;
} else {
var temp__5804__auto___48123 = cljs.core.seq(seq__48071_48110);
if(temp__5804__auto___48123){
var seq__48071_48124__$1 = temp__5804__auto___48123;
if(cljs.core.chunked_seq_QMARK_(seq__48071_48124__$1)){
var c__5568__auto___48125 = cljs.core.chunk_first(seq__48071_48124__$1);
var G__48126 = cljs.core.chunk_rest(seq__48071_48124__$1);
var G__48127 = c__5568__auto___48125;
var G__48128 = cljs.core.count(c__5568__auto___48125);
var G__48129 = (0);
seq__48071_48110 = G__48126;
chunk__48072_48111 = G__48127;
count__48073_48112 = G__48128;
i__48074_48113 = G__48129;
continue;
} else {
var vec__48092_48130 = cljs.core.first(seq__48071_48124__$1);
var k_48131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48092_48130,(0),null);
var cb_48132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48092_48130,(1),null);
try{var G__48102_48133 = cljs.core.deref(re_frame.trace.traces);
(cb_48132.cljs$core$IFn$_invoke$arity$1 ? cb_48132.cljs$core$IFn$_invoke$arity$1(G__48102_48133) : cb_48132.call(null,G__48102_48133));
}catch (e48095){var e_48134 = e48095;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_48131,"while storing",cljs.core.deref(re_frame.trace.traces),e_48134], 0));
}

var G__48135 = cljs.core.next(seq__48071_48124__$1);
var G__48136 = null;
var G__48137 = (0);
var G__48138 = (0);
seq__48071_48110 = G__48135;
chunk__48072_48111 = G__48136;
count__48073_48112 = G__48137;
i__48074_48113 = G__48138;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
