goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52095 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52096 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52096);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___52231 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___52231)){
var new_db_52232 = temp__5804__auto___52231;
var fexpr__52100_52233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52100_52233.cljs$core$IFn$_invoke$arity$1 ? fexpr__52100_52233.cljs$core$IFn$_invoke$arity$1(new_db_52232) : fexpr__52100_52233.call(null,new_db_52232));
} else {
}

var seq__52102 = cljs.core.seq(effects_without_db);
var chunk__52103 = null;
var count__52104 = (0);
var i__52105 = (0);
while(true){
if((i__52105 < count__52104)){
var vec__52115 = chunk__52103.cljs$core$IIndexed$_nth$arity$2(null,i__52105);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52115,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52115,(1),null);
var temp__5802__auto___52234 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52234)){
var effect_fn_52235 = temp__5802__auto___52234;
(effect_fn_52235.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52235.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52235.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__52237 = seq__52102;
var G__52238 = chunk__52103;
var G__52239 = count__52104;
var G__52240 = (i__52105 + (1));
seq__52102 = G__52237;
chunk__52103 = G__52238;
count__52104 = G__52239;
i__52105 = G__52240;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52102);
if(temp__5804__auto__){
var seq__52102__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52102__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52102__$1);
var G__52242 = cljs.core.chunk_rest(seq__52102__$1);
var G__52243 = c__5568__auto__;
var G__52244 = cljs.core.count(c__5568__auto__);
var G__52245 = (0);
seq__52102 = G__52242;
chunk__52103 = G__52243;
count__52104 = G__52244;
i__52105 = G__52245;
continue;
} else {
var vec__52119 = cljs.core.first(seq__52102__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52119,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52119,(1),null);
var temp__5802__auto___52246 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52246)){
var effect_fn_52247 = temp__5802__auto___52246;
(effect_fn_52247.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52247.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52247.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__52248 = cljs.core.next(seq__52102__$1);
var G__52249 = null;
var G__52250 = (0);
var G__52251 = (0);
seq__52102 = G__52248;
chunk__52103 = G__52249;
count__52104 = G__52250;
i__52105 = G__52251;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21695__auto___52252 = re_frame.interop.now();
var duration__21696__auto___52253 = (end__21695__auto___52252 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21696__auto___52253,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21695__auto___52252);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52095);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___52254 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___52254)){
var new_db_52255 = temp__5804__auto___52254;
var fexpr__52126_52256 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52126_52256.cljs$core$IFn$_invoke$arity$1 ? fexpr__52126_52256.cljs$core$IFn$_invoke$arity$1(new_db_52255) : fexpr__52126_52256.call(null,new_db_52255));
} else {
}

var seq__52127 = cljs.core.seq(effects_without_db);
var chunk__52128 = null;
var count__52129 = (0);
var i__52130 = (0);
while(true){
if((i__52130 < count__52129)){
var vec__52143 = chunk__52128.cljs$core$IIndexed$_nth$arity$2(null,i__52130);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52143,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52143,(1),null);
var temp__5802__auto___52257 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52257)){
var effect_fn_52258 = temp__5802__auto___52257;
(effect_fn_52258.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52258.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52258.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__52260 = seq__52127;
var G__52261 = chunk__52128;
var G__52262 = count__52129;
var G__52263 = (i__52130 + (1));
seq__52127 = G__52260;
chunk__52128 = G__52261;
count__52129 = G__52262;
i__52130 = G__52263;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52127);
if(temp__5804__auto__){
var seq__52127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52127__$1);
var G__52264 = cljs.core.chunk_rest(seq__52127__$1);
var G__52265 = c__5568__auto__;
var G__52266 = cljs.core.count(c__5568__auto__);
var G__52267 = (0);
seq__52127 = G__52264;
chunk__52128 = G__52265;
count__52129 = G__52266;
i__52130 = G__52267;
continue;
} else {
var vec__52153 = cljs.core.first(seq__52127__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(1),null);
var temp__5802__auto___52269 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52269)){
var effect_fn_52270 = temp__5802__auto___52269;
(effect_fn_52270.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52270.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52270.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__52271 = cljs.core.next(seq__52127__$1);
var G__52272 = null;
var G__52273 = (0);
var G__52274 = (0);
seq__52127 = G__52271;
chunk__52128 = G__52272;
count__52129 = G__52273;
i__52130 = G__52274;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52170){
var map__52172 = p__52170;
var map__52172__$1 = cljs.core.__destructure_map(map__52172);
var effect = map__52172__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52175 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52176 = null;
var count__52177 = (0);
var i__52178 = (0);
while(true){
if((i__52178 < count__52177)){
var effect = chunk__52176.cljs$core$IIndexed$_nth$arity$2(null,i__52178);
re_frame.fx.dispatch_later(effect);


var G__52275 = seq__52175;
var G__52276 = chunk__52176;
var G__52277 = count__52177;
var G__52278 = (i__52178 + (1));
seq__52175 = G__52275;
chunk__52176 = G__52276;
count__52177 = G__52277;
i__52178 = G__52278;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52175);
if(temp__5804__auto__){
var seq__52175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52175__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52175__$1);
var G__52283 = cljs.core.chunk_rest(seq__52175__$1);
var G__52284 = c__5568__auto__;
var G__52285 = cljs.core.count(c__5568__auto__);
var G__52286 = (0);
seq__52175 = G__52283;
chunk__52176 = G__52284;
count__52177 = G__52285;
i__52178 = G__52286;
continue;
} else {
var effect = cljs.core.first(seq__52175__$1);
re_frame.fx.dispatch_later(effect);


var G__52287 = cljs.core.next(seq__52175__$1);
var G__52288 = null;
var G__52289 = (0);
var G__52290 = (0);
seq__52175 = G__52287;
chunk__52176 = G__52288;
count__52177 = G__52289;
i__52178 = G__52290;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52179 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52180 = null;
var count__52181 = (0);
var i__52182 = (0);
while(true){
if((i__52182 < count__52181)){
var vec__52197 = chunk__52180.cljs$core$IIndexed$_nth$arity$2(null,i__52182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___52291 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52291)){
var effect_fn_52292 = temp__5802__auto___52291;
(effect_fn_52292.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52292.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52292.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52293 = seq__52179;
var G__52294 = chunk__52180;
var G__52295 = count__52181;
var G__52296 = (i__52182 + (1));
seq__52179 = G__52293;
chunk__52180 = G__52294;
count__52181 = G__52295;
i__52182 = G__52296;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52179);
if(temp__5804__auto__){
var seq__52179__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52179__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52179__$1);
var G__52297 = cljs.core.chunk_rest(seq__52179__$1);
var G__52298 = c__5568__auto__;
var G__52299 = cljs.core.count(c__5568__auto__);
var G__52300 = (0);
seq__52179 = G__52297;
chunk__52180 = G__52298;
count__52181 = G__52299;
i__52182 = G__52300;
continue;
} else {
var vec__52200 = cljs.core.first(seq__52179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___52301 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___52301)){
var effect_fn_52302 = temp__5802__auto___52301;
(effect_fn_52302.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52302.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52302.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52303 = cljs.core.next(seq__52179__$1);
var G__52304 = null;
var G__52305 = (0);
var G__52306 = (0);
seq__52179 = G__52303;
chunk__52180 = G__52304;
count__52181 = G__52305;
i__52182 = G__52306;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52209 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52210 = null;
var count__52211 = (0);
var i__52212 = (0);
while(true){
if((i__52212 < count__52211)){
var event = chunk__52210.cljs$core$IIndexed$_nth$arity$2(null,i__52212);
re_frame.router.dispatch(event);


var G__52307 = seq__52209;
var G__52308 = chunk__52210;
var G__52309 = count__52211;
var G__52310 = (i__52212 + (1));
seq__52209 = G__52307;
chunk__52210 = G__52308;
count__52211 = G__52309;
i__52212 = G__52310;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52209);
if(temp__5804__auto__){
var seq__52209__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52209__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52209__$1);
var G__52311 = cljs.core.chunk_rest(seq__52209__$1);
var G__52312 = c__5568__auto__;
var G__52313 = cljs.core.count(c__5568__auto__);
var G__52314 = (0);
seq__52209 = G__52311;
chunk__52210 = G__52312;
count__52211 = G__52313;
i__52212 = G__52314;
continue;
} else {
var event = cljs.core.first(seq__52209__$1);
re_frame.router.dispatch(event);


var G__52315 = cljs.core.next(seq__52209__$1);
var G__52316 = null;
var G__52317 = (0);
var G__52318 = (0);
seq__52209 = G__52315;
chunk__52210 = G__52316;
count__52211 = G__52317;
i__52212 = G__52318;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52216 = cljs.core.seq(value);
var chunk__52217 = null;
var count__52218 = (0);
var i__52219 = (0);
while(true){
if((i__52219 < count__52218)){
var event = chunk__52217.cljs$core$IIndexed$_nth$arity$2(null,i__52219);
clear_event(event);


var G__52321 = seq__52216;
var G__52322 = chunk__52217;
var G__52323 = count__52218;
var G__52324 = (i__52219 + (1));
seq__52216 = G__52321;
chunk__52217 = G__52322;
count__52218 = G__52323;
i__52219 = G__52324;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52216);
if(temp__5804__auto__){
var seq__52216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52216__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52216__$1);
var G__52325 = cljs.core.chunk_rest(seq__52216__$1);
var G__52326 = c__5568__auto__;
var G__52327 = cljs.core.count(c__5568__auto__);
var G__52328 = (0);
seq__52216 = G__52325;
chunk__52217 = G__52326;
count__52218 = G__52327;
i__52219 = G__52328;
continue;
} else {
var event = cljs.core.first(seq__52216__$1);
clear_event(event);


var G__52329 = cljs.core.next(seq__52216__$1);
var G__52330 = null;
var G__52331 = (0);
var G__52332 = (0);
seq__52216 = G__52329;
chunk__52217 = G__52330;
count__52218 = G__52331;
i__52219 = G__52332;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52227 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52228 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52228);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21695__auto___52335 = re_frame.interop.now();
var duration__21696__auto___52336 = (end__21695__auto___52335 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21696__auto___52336,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21695__auto___52335);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52227);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
