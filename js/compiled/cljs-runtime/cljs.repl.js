goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73921){
var map__73922 = p__73921;
var map__73922__$1 = cljs.core.__destructure_map(map__73922);
var m = map__73922__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73922__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73929_74236 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73930_74237 = null;
var count__73931_74238 = (0);
var i__73932_74239 = (0);
while(true){
if((i__73932_74239 < count__73931_74238)){
var f_74240 = chunk__73930_74237.cljs$core$IIndexed$_nth$arity$2(null,i__73932_74239);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_74240], 0));


var G__74242 = seq__73929_74236;
var G__74243 = chunk__73930_74237;
var G__74244 = count__73931_74238;
var G__74245 = (i__73932_74239 + (1));
seq__73929_74236 = G__74242;
chunk__73930_74237 = G__74243;
count__73931_74238 = G__74244;
i__73932_74239 = G__74245;
continue;
} else {
var temp__5804__auto___74246 = cljs.core.seq(seq__73929_74236);
if(temp__5804__auto___74246){
var seq__73929_74247__$1 = temp__5804__auto___74246;
if(cljs.core.chunked_seq_QMARK_(seq__73929_74247__$1)){
var c__5568__auto___74248 = cljs.core.chunk_first(seq__73929_74247__$1);
var G__74249 = cljs.core.chunk_rest(seq__73929_74247__$1);
var G__74250 = c__5568__auto___74248;
var G__74251 = cljs.core.count(c__5568__auto___74248);
var G__74252 = (0);
seq__73929_74236 = G__74249;
chunk__73930_74237 = G__74250;
count__73931_74238 = G__74251;
i__73932_74239 = G__74252;
continue;
} else {
var f_74253 = cljs.core.first(seq__73929_74247__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_74253], 0));


var G__74254 = cljs.core.next(seq__73929_74247__$1);
var G__74255 = null;
var G__74256 = (0);
var G__74257 = (0);
seq__73929_74236 = G__74254;
chunk__73930_74237 = G__74255;
count__73931_74238 = G__74256;
i__73932_74239 = G__74257;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_74259 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_74259], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_74259)))?cljs.core.second(arglists_74259):arglists_74259)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73944_74262 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73946_74263 = null;
var count__73947_74264 = (0);
var i__73948_74265 = (0);
while(true){
if((i__73948_74265 < count__73947_74264)){
var vec__73981_74266 = chunk__73946_74263.cljs$core$IIndexed$_nth$arity$2(null,i__73948_74265);
var name_74267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73981_74266,(0),null);
var map__73984_74268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73981_74266,(1),null);
var map__73984_74269__$1 = cljs.core.__destructure_map(map__73984_74268);
var doc_74270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73984_74269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_74271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73984_74269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_74267], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_74271], 0));

if(cljs.core.truth_(doc_74270)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_74270], 0));
} else {
}


var G__74273 = seq__73944_74262;
var G__74274 = chunk__73946_74263;
var G__74275 = count__73947_74264;
var G__74276 = (i__73948_74265 + (1));
seq__73944_74262 = G__74273;
chunk__73946_74263 = G__74274;
count__73947_74264 = G__74275;
i__73948_74265 = G__74276;
continue;
} else {
var temp__5804__auto___74277 = cljs.core.seq(seq__73944_74262);
if(temp__5804__auto___74277){
var seq__73944_74278__$1 = temp__5804__auto___74277;
if(cljs.core.chunked_seq_QMARK_(seq__73944_74278__$1)){
var c__5568__auto___74279 = cljs.core.chunk_first(seq__73944_74278__$1);
var G__74280 = cljs.core.chunk_rest(seq__73944_74278__$1);
var G__74281 = c__5568__auto___74279;
var G__74282 = cljs.core.count(c__5568__auto___74279);
var G__74283 = (0);
seq__73944_74262 = G__74280;
chunk__73946_74263 = G__74281;
count__73947_74264 = G__74282;
i__73948_74265 = G__74283;
continue;
} else {
var vec__73989_74284 = cljs.core.first(seq__73944_74278__$1);
var name_74285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73989_74284,(0),null);
var map__73992_74286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73989_74284,(1),null);
var map__73992_74287__$1 = cljs.core.__destructure_map(map__73992_74286);
var doc_74288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73992_74287__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_74289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73992_74287__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_74285], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_74289], 0));

if(cljs.core.truth_(doc_74288)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_74288], 0));
} else {
}


var G__74291 = cljs.core.next(seq__73944_74278__$1);
var G__74292 = null;
var G__74293 = (0);
var G__74294 = (0);
seq__73944_74262 = G__74291;
chunk__73946_74263 = G__74292;
count__73947_74264 = G__74293;
i__73948_74265 = G__74294;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__73996 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73997 = null;
var count__73998 = (0);
var i__73999 = (0);
while(true){
if((i__73999 < count__73998)){
var role = chunk__73997.cljs$core$IIndexed$_nth$arity$2(null,i__73999);
var temp__5804__auto___74300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___74300__$1)){
var spec_74302 = temp__5804__auto___74300__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_74302)], 0));
} else {
}


var G__74309 = seq__73996;
var G__74310 = chunk__73997;
var G__74311 = count__73998;
var G__74312 = (i__73999 + (1));
seq__73996 = G__74309;
chunk__73997 = G__74310;
count__73998 = G__74311;
i__73999 = G__74312;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__73996);
if(temp__5804__auto____$1){
var seq__73996__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__73996__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__73996__$1);
var G__74316 = cljs.core.chunk_rest(seq__73996__$1);
var G__74317 = c__5568__auto__;
var G__74318 = cljs.core.count(c__5568__auto__);
var G__74319 = (0);
seq__73996 = G__74316;
chunk__73997 = G__74317;
count__73998 = G__74318;
i__73999 = G__74319;
continue;
} else {
var role = cljs.core.first(seq__73996__$1);
var temp__5804__auto___74326__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___74326__$2)){
var spec_74328 = temp__5804__auto___74326__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_74328)], 0));
} else {
}


var G__74333 = cljs.core.next(seq__73996__$1);
var G__74334 = null;
var G__74335 = (0);
var G__74336 = (0);
seq__73996 = G__74333;
chunk__73997 = G__74334;
count__73998 = G__74335;
i__73999 = G__74336;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__74344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__74345 = cljs.core.ex_cause(t);
via = G__74344;
t = G__74345;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__74069 = datafied_throwable;
var map__74069__$1 = cljs.core.__destructure_map(map__74069);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74069__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74069__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74069__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__74070 = cljs.core.last(via);
var map__74070__$1 = cljs.core.__destructure_map(map__74070);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74070__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74070__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74070__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__74071 = data;
var map__74071__$1 = cljs.core.__destructure_map(map__74071);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74071__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74071__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74071__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__74072 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__74072__$1 = cljs.core.__destructure_map(map__74072);
var top_data = map__74072__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74072__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__74083 = phase;
var G__74083__$1 = (((G__74083 instanceof cljs.core.Keyword))?G__74083.fqn:null);
switch (G__74083__$1) {
case "read-source":
var map__74093 = data;
var map__74093__$1 = cljs.core.__destructure_map(map__74093);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74093__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74093__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__74094 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__74094__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74094,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__74094);
var G__74094__$2 = (cljs.core.truth_((function (){var fexpr__74107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74107.cljs$core$IFn$_invoke$arity$1 ? fexpr__74107.cljs$core$IFn$_invoke$arity$1(source) : fexpr__74107.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74094__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__74094__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74094__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__74094__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__74108 = top_data;
var G__74108__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74108,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__74108);
var G__74108__$2 = (cljs.core.truth_((function (){var fexpr__74110 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74110.cljs$core$IFn$_invoke$arity$1 ? fexpr__74110.cljs$core$IFn$_invoke$arity$1(source) : fexpr__74110.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__74108__$1);
var G__74108__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74108__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__74108__$2);
var G__74108__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74108__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__74108__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74108__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__74108__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__74116 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74116,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74116,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74116,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74116,(3),null);
var G__74128 = top_data;
var G__74128__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74128,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__74128);
var G__74128__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74128__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__74128__$1);
var G__74128__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74128__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__74128__$2);
var G__74128__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74128__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__74128__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74128__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__74128__$4;
}

break;
case "execution":
var vec__74130 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74130,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74130,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74130,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74130,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__74066_SHARP_){
var or__5045__auto__ = (p1__74066_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__74135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__74135.cljs$core$IFn$_invoke$arity$1 ? fexpr__74135.cljs$core$IFn$_invoke$arity$1(p1__74066_SHARP_) : fexpr__74135.call(null,p1__74066_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__74137 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__74137__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74137,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__74137);
var G__74137__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74137__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__74137__$1);
var G__74137__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74137__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__74137__$2);
var G__74137__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74137__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__74137__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74137__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__74137__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74083__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__74147){
var map__74148 = p__74147;
var map__74148__$1 = cljs.core.__destructure_map(map__74148);
var triage_data = map__74148__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74148__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__74163 = phase;
var G__74163__$1 = (((G__74163 instanceof cljs.core.Keyword))?G__74163.fqn:null);
switch (G__74163__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__74164 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__74165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74166 = loc;
var G__74167 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74169_74474 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74170_74475 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74171_74476 = true;
var _STAR_print_fn_STAR__temp_val__74172_74477 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74171_74476);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74172_74477);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74144_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__74144_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74170_74475);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74169_74474);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__74164,G__74165,G__74166,G__74167) : format.call(null,G__74164,G__74165,G__74166,G__74167));

break;
case "macroexpansion":
var G__74175 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__74176 = cause_type;
var G__74177 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74178 = loc;
var G__74179 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74175,G__74176,G__74177,G__74178,G__74179) : format.call(null,G__74175,G__74176,G__74177,G__74178,G__74179));

break;
case "compile-syntax-check":
var G__74182 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__74183 = cause_type;
var G__74184 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74185 = loc;
var G__74186 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74182,G__74183,G__74184,G__74185,G__74186) : format.call(null,G__74182,G__74183,G__74184,G__74185,G__74186));

break;
case "compilation":
var G__74188 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__74189 = cause_type;
var G__74190 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74191 = loc;
var G__74192 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74188,G__74189,G__74190,G__74191,G__74192) : format.call(null,G__74188,G__74189,G__74190,G__74191,G__74192));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__74193 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__74194 = symbol;
var G__74195 = loc;
var G__74196 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74198_74492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74199_74493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74200_74494 = true;
var _STAR_print_fn_STAR__temp_val__74201_74495 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74200_74494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74201_74495);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74145_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__74145_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74199_74493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74198_74492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__74193,G__74194,G__74195,G__74196) : format.call(null,G__74193,G__74194,G__74195,G__74196));
} else {
var G__74207 = "Execution error%s at %s(%s).\n%s\n";
var G__74208 = cause_type;
var G__74209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__74210 = loc;
var G__74211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__74207,G__74208,G__74209,G__74210,G__74211) : format.call(null,G__74207,G__74208,G__74209,G__74210,G__74211));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74163__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
