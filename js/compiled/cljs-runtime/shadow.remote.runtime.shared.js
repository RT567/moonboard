goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__73837){
var map__73838 = p__73837;
var map__73838__$1 = cljs.core.__destructure_map(map__73838);
var runtime = map__73838__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73838__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_73980 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_73980)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__73844 = runtime;
var G__73845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_73980);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__73844,G__73845) : shadow.remote.runtime.shared.process.call(null,G__73844,G__73845));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__73847,res){
var map__73848 = p__73847;
var map__73848__$1 = cljs.core.__destructure_map(map__73848);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73848__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73848__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__73849 = res;
var G__73849__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73849,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__73849);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73849__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__73849__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__73852 = arguments.length;
switch (G__73852) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__73854,msg,handlers,timeout_after_ms){
var map__73855 = p__73854;
var map__73855__$1 = cljs.core.__destructure_map(map__73855);
var runtime = map__73855__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___74005 = arguments.length;
var i__5770__auto___74006 = (0);
while(true){
if((i__5770__auto___74006 < len__5769__auto___74005)){
args__5775__auto__.push((arguments[i__5770__auto___74006]));

var G__74008 = (i__5770__auto___74006 + (1));
i__5770__auto___74006 = G__74008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__73861,ev,args){
var map__73862 = p__73861;
var map__73862__$1 = cljs.core.__destructure_map(map__73862);
var runtime = map__73862__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73862__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__73863 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__73866 = null;
var count__73867 = (0);
var i__73868 = (0);
while(true){
if((i__73868 < count__73867)){
var ext = chunk__73866.cljs$core$IIndexed$_nth$arity$2(null,i__73868);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__74016 = seq__73863;
var G__74017 = chunk__73866;
var G__74018 = count__73867;
var G__74019 = (i__73868 + (1));
seq__73863 = G__74016;
chunk__73866 = G__74017;
count__73867 = G__74018;
i__73868 = G__74019;
continue;
} else {
var G__74023 = seq__73863;
var G__74024 = chunk__73866;
var G__74025 = count__73867;
var G__74026 = (i__73868 + (1));
seq__73863 = G__74023;
chunk__73866 = G__74024;
count__73867 = G__74025;
i__73868 = G__74026;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73863);
if(temp__5804__auto__){
var seq__73863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73863__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73863__$1);
var G__74028 = cljs.core.chunk_rest(seq__73863__$1);
var G__74029 = c__5568__auto__;
var G__74030 = cljs.core.count(c__5568__auto__);
var G__74031 = (0);
seq__73863 = G__74028;
chunk__73866 = G__74029;
count__73867 = G__74030;
i__73868 = G__74031;
continue;
} else {
var ext = cljs.core.first(seq__73863__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__74033 = cljs.core.next(seq__73863__$1);
var G__74034 = null;
var G__74035 = (0);
var G__74036 = (0);
seq__73863 = G__74033;
chunk__73866 = G__74034;
count__73867 = G__74035;
i__73868 = G__74036;
continue;
} else {
var G__74038 = cljs.core.next(seq__73863__$1);
var G__74039 = null;
var G__74040 = (0);
var G__74041 = (0);
seq__73863 = G__74038;
chunk__73866 = G__74039;
count__73867 = G__74040;
i__73868 = G__74041;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq73857){
var G__73858 = cljs.core.first(seq73857);
var seq73857__$1 = cljs.core.next(seq73857);
var G__73860 = cljs.core.first(seq73857__$1);
var seq73857__$2 = cljs.core.next(seq73857__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73858,G__73860,seq73857__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__73874,p__73875){
var map__73876 = p__73874;
var map__73876__$1 = cljs.core.__destructure_map(map__73876);
var runtime = map__73876__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73876__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__73877 = p__73875;
var map__73877__$1 = cljs.core.__destructure_map(map__73877);
var msg = map__73877__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73877__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__73878 = cljs.core.deref(state_ref);
var map__73878__$1 = cljs.core.__destructure_map(map__73878);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73878__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73878__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__73883,msg){
var map__73884 = p__73883;
var map__73884__$1 = cljs.core.__destructure_map(map__73884);
var runtime = map__73884__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73884__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__73888,key,p__73889){
var map__73890 = p__73888;
var map__73890__$1 = cljs.core.__destructure_map(map__73890);
var state = map__73890__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73890__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__73891 = p__73889;
var map__73891__$1 = cljs.core.__destructure_map(map__73891);
var spec = map__73891__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73891__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__73892,key,spec){
var map__73893 = p__73892;
var map__73893__$1 = cljs.core.__destructure_map(map__73893);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__73896_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__73896_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__73897_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__73897_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__73898_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__73898_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__73899_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__73899_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__73900_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__73900_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__73908,key){
var map__73909 = p__73908;
var map__73909__$1 = cljs.core.__destructure_map(map__73909);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__73911,msg){
var map__73913 = p__73911;
var map__73913__$1 = cljs.core.__destructure_map(map__73913);
var runtime = map__73913__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73913__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__73916,p__73917){
var map__73918 = p__73916;
var map__73918__$1 = cljs.core.__destructure_map(map__73918);
var runtime = map__73918__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73918__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__73919 = p__73917;
var map__73919__$1 = cljs.core.__destructure_map(map__73919);
var msg = map__73919__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73919__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73919__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__73923 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__73925 = null;
var count__73926 = (0);
var i__73927 = (0);
while(true){
if((i__73927 < count__73926)){
var map__73937 = chunk__73925.cljs$core$IIndexed$_nth$arity$2(null,i__73927);
var map__73937__$1 = cljs.core.__destructure_map(map__73937);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73937__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__74076 = seq__73923;
var G__74077 = chunk__73925;
var G__74078 = count__73926;
var G__74079 = (i__73927 + (1));
seq__73923 = G__74076;
chunk__73925 = G__74077;
count__73926 = G__74078;
i__73927 = G__74079;
continue;
} else {
var G__74084 = seq__73923;
var G__74085 = chunk__73925;
var G__74086 = count__73926;
var G__74087 = (i__73927 + (1));
seq__73923 = G__74084;
chunk__73925 = G__74085;
count__73926 = G__74086;
i__73927 = G__74087;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73923);
if(temp__5804__auto__){
var seq__73923__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73923__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73923__$1);
var G__74089 = cljs.core.chunk_rest(seq__73923__$1);
var G__74090 = c__5568__auto__;
var G__74091 = cljs.core.count(c__5568__auto__);
var G__74092 = (0);
seq__73923 = G__74089;
chunk__73925 = G__74090;
count__73926 = G__74091;
i__73927 = G__74092;
continue;
} else {
var map__73938 = cljs.core.first(seq__73923__$1);
var map__73938__$1 = cljs.core.__destructure_map(map__73938);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73938__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__74095 = cljs.core.next(seq__73923__$1);
var G__74096 = null;
var G__74097 = (0);
var G__74098 = (0);
seq__73923 = G__74095;
chunk__73925 = G__74096;
count__73926 = G__74097;
i__73927 = G__74098;
continue;
} else {
var G__74099 = cljs.core.next(seq__73923__$1);
var G__74100 = null;
var G__74101 = (0);
var G__74102 = (0);
seq__73923 = G__74099;
chunk__73925 = G__74100;
count__73926 = G__74101;
i__73927 = G__74102;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
