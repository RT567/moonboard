goog.provide('re_com.util');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function re_com$util$fmap_$_iter__76979(s__76980){
return (new cljs.core.LazySeq(null,(function (){
var s__76980__$1 = s__76980;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76980__$1);
if(temp__5804__auto__){
var s__76980__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76980__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__76980__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__76982 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__76981 = (0);
while(true){
if((i__76981 < size__5522__auto__)){
var vec__76998 = cljs.core._nth(c__5521__auto__,i__76981);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76998,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76998,(1),null);
cljs.core.chunk_append(b__76982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__77290 = (i__76981 + (1));
i__76981 = G__77290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76982),re_com$util$fmap_$_iter__76979(cljs.core.chunk_rest(s__76980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76982),null);
}
} else {
var vec__77010 = cljs.core.first(s__76980__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77010,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77010,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__76979(cljs.core.rest(s__76980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77297 = arguments.length;
var i__5770__auto___77298 = (0);
while(true){
if((i__5770__auto___77298 < len__5769__auto___77297)){
args__5775__auto__.push((arguments[i__5770__auto___77298]));

var G__77300 = (i__5770__auto___77298 + (1));
i__5770__auto___77298 = G__77300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq77018){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77018));
}));

/**
 * Only assoc-in if no value exists at ks
 */
re_com.util.assoc_in_if_empty = (function re_com$util$assoc_in_if_empty(m,ks,v){
return cljs.core.assoc_in(m,ks,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,v));
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77325 = arguments.length;
var i__5770__auto___77326 = (0);
while(true){
if((i__5770__auto___77326 < len__5769__auto___77325)){
args__5775__auto__.push((arguments[i__5770__auto___77326]));

var G__77328 = (i__5770__auto___77326 + (1));
i__5770__auto___77326 = G__77328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq77091){
var G__77092 = cljs.core.first(seq77091);
var seq77091__$1 = cljs.core.next(seq77091);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77092,seq77091__$1);
}));

/**
 * takes n numbers (could also be strings) and converts them to a space separated px string
 *   e.g. (px-n 10 2 30 4) => '10px 2px 30px 4px' for use in :padding, :margin etc.
 *   Most useful when the args are calculations
 *   e.g. (px-n top-margin (inc h-width) (- top-margin 5) (dec h-width))
 *   Note: Doesn't support :negative like px above but it will work with negative numbers
 */
re_com.util.px_n = (function re_com$util$px_n(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77334 = arguments.length;
var i__5770__auto___77335 = (0);
while(true){
if((i__5770__auto___77335 < len__5769__auto___77334)){
args__5775__auto__.push((arguments[i__5770__auto___77335]));

var G__77336 = (i__5770__auto___77335 + (1));
i__5770__auto___77335 = G__77336;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77113_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77113_SHARP_),"px"].join('');
}),vals));
}));

(re_com.util.px_n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.px_n.cljs$lang$applyTo = (function (seq77114){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77114));
}));

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
re_com.util.pluralize = (function re_com$util$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77348 = arguments.length;
var i__5770__auto___77349 = (0);
while(true){
if((i__5770__auto___77349 < len__5769__auto___77348)){
args__5775__auto__.push((arguments[i__5770__auto___77349]));

var G__77350 = (i__5770__auto___77349 + (1));
i__5770__auto___77349 = G__77350;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__77145){
var vec__77147 = p__77145;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77147,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(re_com.util.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.pluralize.cljs$lang$applyTo = (function (seq77131){
var G__77132 = cljs.core.first(seq77131);
var seq77131__$1 = cljs.core.next(seq77131);
var G__77133 = cljs.core.first(seq77131__$1);
var seq77131__$2 = cljs.core.next(seq77131__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77132,G__77133,seq77131__$2);
}));

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77361 = arguments.length;
var i__5770__auto___77362 = (0);
while(true){
if((i__5770__auto___77362 < len__5769__auto___77361)){
args__5775__auto__.push((arguments[i__5770__auto___77362]));

var G__77363 = (i__5770__auto___77362 + (1));
i__5770__auto___77362 = G__77363;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__77186){
var map__77191 = p__77186;
var map__77191__$1 = cljs.core.__destructure_map(map__77191);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77191__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq77177){
var G__77179 = cljs.core.first(seq77177);
var seq77177__$1 = cljs.core.next(seq77177);
var G__77180 = cljs.core.first(seq77177__$1);
var seq77177__$2 = cljs.core.next(seq77177__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77179,G__77180,seq77177__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77365 = arguments.length;
var i__5770__auto___77366 = (0);
while(true){
if((i__5770__auto___77366 < len__5769__auto___77365)){
args__5775__auto__.push((arguments[i__5770__auto___77366]));

var G__77367 = (i__5770__auto___77366 + (1));
i__5770__auto___77366 = G__77367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__77211){
var map__77212 = p__77211;
var map__77212__$1 = cljs.core.__destructure_map(map__77212);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77212__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77199_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__77199_SHARP_) : id_fn.call(null,p1__77199_SHARP_)),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq77201){
var G__77202 = cljs.core.first(seq77201);
var seq77201__$1 = cljs.core.next(seq77201);
var G__77203 = cljs.core.first(seq77201__$1);
var seq77201__$2 = cljs.core.next(seq77201__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77202,G__77203,seq77201__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77373 = arguments.length;
var i__5770__auto___77374 = (0);
while(true){
if((i__5770__auto___77374 < len__5769__auto___77373)){
args__5775__auto__.push((arguments[i__5770__auto___77374]));

var G__77375 = (i__5770__auto___77374 + (1));
i__5770__auto___77374 = G__77375;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__77239){
var map__77241 = p__77239;
var map__77241__$1 = cljs.core.__destructure_map(map__77241);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77241__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv((function (p1__77221_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__77221_SHARP_) : id_fn.call(null,p1__77221_SHARP_)),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq77228){
var G__77229 = cljs.core.first(seq77228);
var seq77228__$1 = cljs.core.next(seq77228);
var G__77230 = cljs.core.first(seq77228__$1);
var seq77228__$2 = cljs.core.next(seq77228__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77229,G__77230,seq77228__$2);
}));

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__77387 = current_node.parentNode;
var G__77388 = (sum_scroll_left + current_node.scrollLeft);
var G__77389 = (sum_scroll_top + current_node.scrollTop);
current_node = G__77387;
sum_scroll_left = G__77388;
sum_scroll_top = G__77389;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=re_com.util.js.map
