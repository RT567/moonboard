goog.provide('spade.util');
/**
 * Given a style factory function, return an appropriate name for its
 * style. This function assumes it will be called *once* for any given
 * factory; subsequent calls for the same factory *may not* return the
 * same value (especially under :simple optimizations).
 */
spade.util.factory__GT_name = (function spade$util$factory__GT_name(factory){
var given_name = factory.name;
if(cljs.core.empty_QMARK_(given_name)){
return cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("SPD"));
} else {
return clojure.string.replace(clojure.string.replace(clojure.string.replace(given_name,"_factory$",""),/[_$]/,"-"),/^-/,"_");
}
});
spade.util.sanitize = (function spade$util$sanitize(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/[^A-Za-z0-9-_]/,"-");
});
spade.util.params__GT_key = (function spade$util$params__GT_key(p){
try{return cljs.core.hash(p);
}catch (e81832){var _ = e81832;
return null;
}});
spade.util.build_style_name = (function spade$util$build_style_name(base,style_key,params){
if(cljs.core.truth_(style_key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",spade.util.sanitize(style_key)].join('');
} else {
if(cljs.core.seq(params)){
var temp__5802__auto__ = spade.util.params__GT_key(params);
if(cljs.core.truth_(temp__5802__auto__)){
var pkey = temp__5802__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkey)].join('');
} else {
var msg = ["WARNING: no key provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join('');
console.warn(msg);

return base;
}
} else {
return base;

}
}
});

//# sourceMappingURL=spade.util.js.map
