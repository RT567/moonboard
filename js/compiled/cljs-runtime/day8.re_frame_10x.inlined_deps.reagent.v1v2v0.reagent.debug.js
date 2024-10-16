goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__28942__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28943__i = 0, G__28943__a = new Array(arguments.length -  0);
while (G__28943__i < G__28943__a.length) {G__28943__a[G__28943__i] = arguments[G__28943__i + 0]; ++G__28943__i;}
  args = new cljs.core.IndexedSeq(G__28943__a,0,null);
} 
return G__28942__delegate.call(this,args);};
G__28942.cljs$lang$maxFixedArity = 0;
G__28942.cljs$lang$applyTo = (function (arglist__28944){
var args = cljs.core.seq(arglist__28944);
return G__28942__delegate(args);
});
G__28942.cljs$core$IFn$_invoke$arity$variadic = G__28942__delegate;
return G__28942;
})()
);

(o.error = (function() { 
var G__28945__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28946__i = 0, G__28946__a = new Array(arguments.length -  0);
while (G__28946__i < G__28946__a.length) {G__28946__a[G__28946__i] = arguments[G__28946__i + 0]; ++G__28946__i;}
  args = new cljs.core.IndexedSeq(G__28946__a,0,null);
} 
return G__28945__delegate.call(this,args);};
G__28945.cljs$lang$maxFixedArity = 0;
G__28945.cljs$lang$applyTo = (function (arglist__28947){
var args = cljs.core.seq(arglist__28947);
return G__28945__delegate(args);
});
G__28945.cljs$core$IFn$_invoke$arity$variadic = G__28945__delegate;
return G__28945;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.js.map
