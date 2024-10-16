goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__49723 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49724 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49724);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__49725 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49726 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49726);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49725);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49723);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$render(var_args){
var G__49736 = arguments.length;
switch (G__49736) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

var vec__49740 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49740,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

var seq__49749_49792 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.roots));
var chunk__49750_49793 = null;
var count__49751_49794 = (0);
var i__49752_49795 = (0);
while(true){
if((i__49752_49795 < count__49751_49794)){
var vec__49767_49796 = chunk__49750_49793.cljs$core$IIndexed$_nth$arity$2(null,i__49752_49795);
var container_49797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767_49796,(0),null);
var comp_49798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767_49796,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component(comp_49798,container_49797);


var G__49805 = seq__49749_49792;
var G__49806 = chunk__49750_49793;
var G__49807 = count__49751_49794;
var G__49808 = (i__49752_49795 + (1));
seq__49749_49792 = G__49805;
chunk__49750_49793 = G__49806;
count__49751_49794 = G__49807;
i__49752_49795 = G__49808;
continue;
} else {
var temp__5804__auto___49809 = cljs.core.seq(seq__49749_49792);
if(temp__5804__auto___49809){
var seq__49749_49811__$1 = temp__5804__auto___49809;
if(cljs.core.chunked_seq_QMARK_(seq__49749_49811__$1)){
var c__5568__auto___49812 = cljs.core.chunk_first(seq__49749_49811__$1);
var G__49813 = cljs.core.chunk_rest(seq__49749_49811__$1);
var G__49814 = c__5568__auto___49812;
var G__49815 = cljs.core.count(c__5568__auto___49812);
var G__49816 = (0);
seq__49749_49792 = G__49813;
chunk__49750_49793 = G__49814;
count__49751_49794 = G__49815;
i__49752_49795 = G__49816;
continue;
} else {
var vec__49773_49817 = cljs.core.first(seq__49749_49811__$1);
var container_49818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49773_49817,(0),null);
var comp_49819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49773_49817,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.re_render_component(comp_49819,container_49818);


var G__49820 = cljs.core.next(seq__49749_49811__$1);
var G__49821 = null;
var G__49822 = (0);
var G__49823 = (0);
seq__49749_49792 = G__49820;
chunk__49750_49793 = G__49821;
count__49751_49794 = G__49822;
i__49752_49795 = G__49823;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.js.map
