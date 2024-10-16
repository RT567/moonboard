goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__66198 = arguments.length;
switch (G__66198) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__66207 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__66208 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__66208);

try{var G__66219 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__66219);

return G__66219;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__66207);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__66220 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__66221 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__66221);

try{var G__66222 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__66222);

return G__66222;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__66220);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__66229 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__66230 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__66230);

try{var G__66232 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__66232);

return G__66232;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__66229);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__66235 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__66236 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__66236);

try{var G__66241 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__66241);

return G__66241;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__66235);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__66244 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__66245 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__66245);

try{var G__66246 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__66246);

return G__66246;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__66244);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__66273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__66274 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66274);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66273);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66618 = arguments.length;
var i__5770__auto___66619 = (0);
while(true){
if((i__5770__auto___66619 < len__5769__auto___66618)){
args__5775__auto__.push((arguments[i__5770__auto___66619]));

var G__66620 = (i__5770__auto___66619 + (1));
i__5770__auto___66619 = G__66620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__66278 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__66279 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66280 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66281 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66282 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66283 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66285 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__66286 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__66287 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66288 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66289 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66290 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66291 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66292 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66293 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66286);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66287);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66288);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66289);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66290);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66291);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66292);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66293);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66284);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66283);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66282);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66281);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66280);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66279);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66278);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq66275){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66275));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__66294 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__66295 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66295);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66294);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66621 = arguments.length;
var i__5770__auto___66622 = (0);
while(true){
if((i__5770__auto___66622 < len__5769__auto___66621)){
args__5775__auto__.push((arguments[i__5770__auto___66622]));

var G__66623 = (i__5770__auto___66622 + (1));
i__5770__auto___66622 = G__66623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__66303 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66304 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66305 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66306 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66307 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66308 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66309 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__66310 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66311 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66312 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66313 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66314 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66315 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66316 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66310);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66311);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66312);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66313);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66314);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66315);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66316);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66309);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66308);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66307);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66306);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66305);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66304);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66303);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq66296){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66296));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66625 = arguments.length;
var i__5770__auto___66626 = (0);
while(true){
if((i__5770__auto___66626 < len__5769__auto___66625)){
args__5775__auto__.push((arguments[i__5770__auto___66626]));

var G__66627 = (i__5770__auto___66626 + (1));
i__5770__auto___66626 = G__66627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__66324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__66325 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66326 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66327 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66328 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66329 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66331 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__66332 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__66333 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66334 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66335 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66336 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66337 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66338 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66339 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66332);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66333);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66334);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66335);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66336);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66337);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66338);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66339);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66331);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66330);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66329);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66328);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66327);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66326);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66324);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq66318){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66318));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66628 = arguments.length;
var i__5770__auto___66629 = (0);
while(true){
if((i__5770__auto___66629 < len__5769__auto___66628)){
args__5775__auto__.push((arguments[i__5770__auto___66629]));

var G__66630 = (i__5770__auto___66629 + (1));
i__5770__auto___66629 = G__66630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__66348 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66349 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66350 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66351 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66352 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66353 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66354 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__66355 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66356 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66357 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66358 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66359 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66360 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66361 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66355);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66356);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66357);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66358);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66359);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66360);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66361);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66354);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66353);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66352);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66351);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66350);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66349);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66348);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq66346){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66346));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66631 = arguments.length;
var i__5770__auto___66632 = (0);
while(true){
if((i__5770__auto___66632 < len__5769__auto___66631)){
args__5775__auto__.push((arguments[i__5770__auto___66632]));

var G__66633 = (i__5770__auto___66632 + (1));
i__5770__auto___66632 = G__66633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__66558 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__66559 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66560 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66561 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66562 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66563 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66564 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__66565 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__66566 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66567 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__66568 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66569 = null;
var _STAR_print_newline_STAR__temp_val__66570 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66571 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66565);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66566);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66567);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66568);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66570);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66571);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66564);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66563);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66562);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66561);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66560);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66559);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66558);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq66364){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66364));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66636 = arguments.length;
var i__5770__auto___66637 = (0);
while(true){
if((i__5770__auto___66637 < len__5769__auto___66636)){
args__5775__auto__.push((arguments[i__5770__auto___66637]));

var G__66639 = (i__5770__auto___66637 + (1));
i__5770__auto___66637 = G__66639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__66574 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66575 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66576 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66577 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66578 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66580 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__66581 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66582 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66583 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66584 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66585 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66586 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66587 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66581);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66582);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66583);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66584);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66586);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66587);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66580);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66579);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66578);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66577);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66576);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66575);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66574);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq66573){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66573));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66640 = arguments.length;
var i__5770__auto___66641 = (0);
while(true){
if((i__5770__auto___66641 < len__5769__auto___66640)){
args__5775__auto__.push((arguments[i__5770__auto___66641]));

var G__66642 = (i__5770__auto___66641 + (1));
i__5770__auto___66641 = G__66642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__66589 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__66590 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__66591 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__66592 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__66593 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__66594 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__66595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__66596 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__66597 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__66598 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__66599 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__66600 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__66601 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__66602 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__66603 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__66604 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66597);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__66598);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__66599);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__66600);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__66601);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__66602);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66603);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__66604);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__66596);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66595);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__66594);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__66593);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__66592);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__66591);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__66590);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66589);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq66588){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66588));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66646 = arguments.length;
var i__5770__auto___66647 = (0);
while(true){
if((i__5770__auto___66647 < len__5769__auto___66646)){
args__5775__auto__.push((arguments[i__5770__auto___66647]));

var G__66648 = (i__5770__auto___66647 + (1));
i__5770__auto___66647 = G__66648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__66608__auto__","s__66608__auto__",1282236638,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__66609__auto__","x__66609__auto__",-1896871686,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__66608__auto__","s__66608__auto__",1282236638,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__66609__auto__","x__66609__auto__",-1896871686,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__66608__auto__","s__66608__auto__",1282236638,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq66610){
var G__66611 = cljs.core.first(seq66610);
var seq66610__$1 = cljs.core.next(seq66610);
var G__66612 = cljs.core.first(seq66610__$1);
var seq66610__$2 = cljs.core.next(seq66610__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66611,G__66612,seq66610__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
