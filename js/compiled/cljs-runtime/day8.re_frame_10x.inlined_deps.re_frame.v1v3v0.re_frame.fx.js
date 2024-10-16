goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37175 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37176 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37176);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___37369 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___37369)){
var new_db_37370 = temp__5804__auto___37369;
var fexpr__37181_37372 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37181_37372.cljs$core$IFn$_invoke$arity$1 ? fexpr__37181_37372.cljs$core$IFn$_invoke$arity$1(new_db_37370) : fexpr__37181_37372.call(null,new_db_37370));
} else {
}

var seq__37185 = cljs.core.seq(effects_without_db);
var chunk__37186 = null;
var count__37187 = (0);
var i__37188 = (0);
while(true){
if((i__37188 < count__37187)){
var vec__37210 = chunk__37186.cljs$core$IIndexed$_nth$arity$2(null,i__37188);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37210,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37210,(1),null);
var temp__5802__auto___37374 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37374)){
var effect_fn_37375 = temp__5802__auto___37374;
(effect_fn_37375.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37375.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37375.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37376 = seq__37185;
var G__37377 = chunk__37186;
var G__37378 = count__37187;
var G__37379 = (i__37188 + (1));
seq__37185 = G__37376;
chunk__37186 = G__37377;
count__37187 = G__37378;
i__37188 = G__37379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37185);
if(temp__5804__auto__){
var seq__37185__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37185__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37185__$1);
var G__37380 = cljs.core.chunk_rest(seq__37185__$1);
var G__37381 = c__5568__auto__;
var G__37382 = cljs.core.count(c__5568__auto__);
var G__37383 = (0);
seq__37185 = G__37380;
chunk__37186 = G__37381;
count__37187 = G__37382;
i__37188 = G__37383;
continue;
} else {
var vec__37218 = cljs.core.first(seq__37185__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37218,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37218,(1),null);
var temp__5802__auto___37384 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37384)){
var effect_fn_37385 = temp__5802__auto___37384;
(effect_fn_37385.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37385.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37385.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37386 = cljs.core.next(seq__37185__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37185 = G__37386;
chunk__37186 = G__37387;
count__37187 = G__37388;
i__37188 = G__37389;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__35234__auto___37391 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__35235__auto___37392 = (end__35234__auto___37391 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35235__auto___37392,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__35234__auto___37391);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37175);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___37394 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___37394)){
var new_db_37396 = temp__5804__auto___37394;
var fexpr__37223_37397 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37223_37397.cljs$core$IFn$_invoke$arity$1 ? fexpr__37223_37397.cljs$core$IFn$_invoke$arity$1(new_db_37396) : fexpr__37223_37397.call(null,new_db_37396));
} else {
}

var seq__37225 = cljs.core.seq(effects_without_db);
var chunk__37226 = null;
var count__37227 = (0);
var i__37228 = (0);
while(true){
if((i__37228 < count__37227)){
var vec__37249 = chunk__37226.cljs$core$IIndexed$_nth$arity$2(null,i__37228);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(1),null);
var temp__5802__auto___37399 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37399)){
var effect_fn_37400 = temp__5802__auto___37399;
(effect_fn_37400.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37400.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37400.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37402 = seq__37225;
var G__37403 = chunk__37226;
var G__37404 = count__37227;
var G__37405 = (i__37228 + (1));
seq__37225 = G__37402;
chunk__37226 = G__37403;
count__37227 = G__37404;
i__37228 = G__37405;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37225);
if(temp__5804__auto__){
var seq__37225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37225__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37225__$1);
var G__37407 = cljs.core.chunk_rest(seq__37225__$1);
var G__37408 = c__5568__auto__;
var G__37409 = cljs.core.count(c__5568__auto__);
var G__37410 = (0);
seq__37225 = G__37407;
chunk__37226 = G__37408;
count__37227 = G__37409;
i__37228 = G__37410;
continue;
} else {
var vec__37261 = cljs.core.first(seq__37225__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37261,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37261,(1),null);
var temp__5802__auto___37411 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37411)){
var effect_fn_37412 = temp__5802__auto___37411;
(effect_fn_37412.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37412.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37412.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37413 = cljs.core.next(seq__37225__$1);
var G__37414 = null;
var G__37415 = (0);
var G__37416 = (0);
seq__37225 = G__37413;
chunk__37226 = G__37414;
count__37227 = G__37415;
i__37228 = G__37416;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__37268){
var map__37273 = p__37268;
var map__37273__$1 = cljs.core.__destructure_map(map__37273);
var effect = map__37273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__37279 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37280 = null;
var count__37281 = (0);
var i__37282 = (0);
while(true){
if((i__37282 < count__37281)){
var effect = chunk__37280.cljs$core$IIndexed$_nth$arity$2(null,i__37282);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__37436 = seq__37279;
var G__37437 = chunk__37280;
var G__37438 = count__37281;
var G__37439 = (i__37282 + (1));
seq__37279 = G__37436;
chunk__37280 = G__37437;
count__37281 = G__37438;
i__37282 = G__37439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37279);
if(temp__5804__auto__){
var seq__37279__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37279__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37279__$1);
var G__37441 = cljs.core.chunk_rest(seq__37279__$1);
var G__37442 = c__5568__auto__;
var G__37443 = cljs.core.count(c__5568__auto__);
var G__37444 = (0);
seq__37279 = G__37441;
chunk__37280 = G__37442;
count__37281 = G__37443;
i__37282 = G__37444;
continue;
} else {
var effect = cljs.core.first(seq__37279__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__37445 = cljs.core.next(seq__37279__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37279 = G__37445;
chunk__37280 = G__37446;
count__37281 = G__37447;
i__37282 = G__37448;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__37299 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37300 = null;
var count__37301 = (0);
var i__37302 = (0);
while(true){
if((i__37302 < count__37301)){
var vec__37323 = chunk__37300.cljs$core$IIndexed$_nth$arity$2(null,i__37302);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37452 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37452)){
var effect_fn_37456 = temp__5802__auto___37452;
(effect_fn_37456.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37456.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37456.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37457 = seq__37299;
var G__37458 = chunk__37300;
var G__37459 = count__37301;
var G__37460 = (i__37302 + (1));
seq__37299 = G__37457;
chunk__37300 = G__37458;
count__37301 = G__37459;
i__37302 = G__37460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37299);
if(temp__5804__auto__){
var seq__37299__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37299__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37299__$1);
var G__37461 = cljs.core.chunk_rest(seq__37299__$1);
var G__37463 = c__5568__auto__;
var G__37464 = cljs.core.count(c__5568__auto__);
var G__37465 = (0);
seq__37299 = G__37461;
chunk__37300 = G__37463;
count__37301 = G__37464;
i__37302 = G__37465;
continue;
} else {
var vec__37334 = cljs.core.first(seq__37299__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37334,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37334,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37471 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37471)){
var effect_fn_37472 = temp__5802__auto___37471;
(effect_fn_37472.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37472.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37472.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37473 = cljs.core.next(seq__37299__$1);
var G__37474 = null;
var G__37475 = (0);
var G__37476 = (0);
seq__37299 = G__37473;
chunk__37300 = G__37474;
count__37301 = G__37475;
i__37302 = G__37476;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37343 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37344 = null;
var count__37345 = (0);
var i__37346 = (0);
while(true){
if((i__37346 < count__37345)){
var event = chunk__37344.cljs$core$IIndexed$_nth$arity$2(null,i__37346);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__37481 = seq__37343;
var G__37482 = chunk__37344;
var G__37483 = count__37345;
var G__37484 = (i__37346 + (1));
seq__37343 = G__37481;
chunk__37344 = G__37482;
count__37345 = G__37483;
i__37346 = G__37484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37343);
if(temp__5804__auto__){
var seq__37343__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37343__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37343__$1);
var G__37485 = cljs.core.chunk_rest(seq__37343__$1);
var G__37486 = c__5568__auto__;
var G__37487 = cljs.core.count(c__5568__auto__);
var G__37488 = (0);
seq__37343 = G__37485;
chunk__37344 = G__37486;
count__37345 = G__37487;
i__37346 = G__37488;
continue;
} else {
var event = cljs.core.first(seq__37343__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__37489 = cljs.core.next(seq__37343__$1);
var G__37490 = null;
var G__37491 = (0);
var G__37492 = (0);
seq__37343 = G__37489;
chunk__37344 = G__37490;
count__37345 = G__37491;
i__37346 = G__37492;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37352 = cljs.core.seq(value);
var chunk__37353 = null;
var count__37354 = (0);
var i__37355 = (0);
while(true){
if((i__37355 < count__37354)){
var event = chunk__37353.cljs$core$IIndexed$_nth$arity$2(null,i__37355);
clear_event(event);


var G__37494 = seq__37352;
var G__37495 = chunk__37353;
var G__37496 = count__37354;
var G__37497 = (i__37355 + (1));
seq__37352 = G__37494;
chunk__37353 = G__37495;
count__37354 = G__37496;
i__37355 = G__37497;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37352);
if(temp__5804__auto__){
var seq__37352__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37352__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37352__$1);
var G__37499 = cljs.core.chunk_rest(seq__37352__$1);
var G__37500 = c__5568__auto__;
var G__37501 = cljs.core.count(c__5568__auto__);
var G__37502 = (0);
seq__37352 = G__37499;
chunk__37353 = G__37500;
count__37354 = G__37501;
i__37355 = G__37502;
continue;
} else {
var event = cljs.core.first(seq__37352__$1);
clear_event(event);


var G__37504 = cljs.core.next(seq__37352__$1);
var G__37505 = null;
var G__37506 = (0);
var G__37507 = (0);
seq__37352 = G__37504;
chunk__37353 = G__37505;
count__37354 = G__37506;
i__37355 = G__37507;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
