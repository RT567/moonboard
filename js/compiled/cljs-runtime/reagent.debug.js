goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40261__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40262__i = 0, G__40262__a = new Array(arguments.length -  0);
while (G__40262__i < G__40262__a.length) {G__40262__a[G__40262__i] = arguments[G__40262__i + 0]; ++G__40262__i;}
  args = new cljs.core.IndexedSeq(G__40262__a,0,null);
} 
return G__40261__delegate.call(this,args);};
G__40261.cljs$lang$maxFixedArity = 0;
G__40261.cljs$lang$applyTo = (function (arglist__40263){
var args = cljs.core.seq(arglist__40263);
return G__40261__delegate(args);
});
G__40261.cljs$core$IFn$_invoke$arity$variadic = G__40261__delegate;
return G__40261;
})()
);

(o.error = (function() { 
var G__40264__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40265__i = 0, G__40265__a = new Array(arguments.length -  0);
while (G__40265__i < G__40265__a.length) {G__40265__a[G__40265__i] = arguments[G__40265__i + 0]; ++G__40265__i;}
  args = new cljs.core.IndexedSeq(G__40265__a,0,null);
} 
return G__40264__delegate.call(this,args);};
G__40264.cljs$lang$maxFixedArity = 0;
G__40264.cljs$lang$applyTo = (function (arglist__40266){
var args = cljs.core.seq(arglist__40266);
return G__40264__delegate(args);
});
G__40264.cljs$core$IFn$_invoke$arity$variadic = G__40264__delegate;
return G__40264;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
