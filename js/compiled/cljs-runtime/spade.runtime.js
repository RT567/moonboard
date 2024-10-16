goog.provide('spade.runtime');
if((typeof spade !== 'undefined') && (typeof spade.runtime !== 'undefined') && (typeof spade.runtime._STAR_injected_STAR_ !== 'undefined')){
} else {
spade.runtime._STAR_injected_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof spade !== 'undefined') && (typeof spade.runtime !== 'undefined') && (typeof spade.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
spade.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),goog.DEBUG], null);
}
spade.runtime.__GT_css_var = (function spade$runtime$__GT_css_var(n){
return garden.types.__GT_CSSFunction("var",n);
});
spade.runtime.compile_css = (function spade$runtime$compile_css(elements){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spade.runtime._STAR_css_compile_flags_STAR_,elements], 0));
});
spade.runtime.perform_update_BANG_ = (function spade$runtime$perform_update_BANG_(obj,css){
return (new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(obj).innerHTML = css);
});
spade.runtime.update_BANG_ = (function spade$runtime$update_BANG_(id,css){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(spade.runtime._STAR_injected_STAR_,cljs.core.update,id,(function spade$runtime$update_BANG__$_update_injected_style(obj){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(obj),css)){
} else {
spade.runtime.perform_update_BANG_(obj,css);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"source","source",-433931539),css);
}));
});
spade.runtime.inject_BANG_ = (function spade$runtime$inject_BANG_(id,css){
var head = document.head;
var element = (function (){var G__82362 = document.createElement("style");
G__82362.setAttribute("spade-id",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

return G__82362;
})();
var obj = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"source","source",-433931539),css,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
if((!((head == null)))){
} else {
throw (new Error(["Assert failed: ","An head element is required in the dom to inject the style.","\n","(some? head)"].join('')));
}

head.appendChild(element);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(spade.runtime._STAR_injected_STAR_,cljs.core.assoc,id,obj);

return spade.runtime.perform_update_BANG_(obj,css);
});
spade.runtime.compose_names = (function spade$runtime$compose_names(p__82363){
var map__82364 = p__82363;
var map__82364__$1 = cljs.core.__destructure_map(map__82364);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var composed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82364__$1,new cljs.core.Keyword(null,"composes","composes",-378837833));
if(cljs.core.not(composed)){
return style_name;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (typeof new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item);
} else {
throw (new Error(["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')));

}
}
}),((cljs.core.seq_QMARK_(composed))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
spade.runtime.ensure_style_BANG_ = (function spade$runtime$ensure_style_BANG_(mode,base_style_name,factory,params){
var map__82365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(factory,base_style_name,params,params);
var map__82365__$1 = cljs.core.__destructure_map(map__82365);
var info = map__82365__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spade.runtime._STAR_injected_STAR_),style_name);
if(cljs.core.truth_(existing)){
spade.runtime.update_BANG_(style_name,css);
} else {
spade.runtime.inject_BANG_(style_name,css);
}

var G__82366 = mode;
var G__82366__$1 = (((G__82366 instanceof cljs.core.Keyword))?G__82366.fqn:null);
switch (G__82366__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),spade.runtime.compose_names(info)], null);

break;
case "class":
case "keyframes":
return spade.runtime.compose_names(info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82366__$1)].join('')));

}
});

//# sourceMappingURL=spade.runtime.js.map
