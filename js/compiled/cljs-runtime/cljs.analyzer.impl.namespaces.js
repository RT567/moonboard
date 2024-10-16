goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__74785 = libspec;
var seq__74787 = cljs.core.seq(vec__74785);
var first__74788 = cljs.core.first(seq__74787);
var seq__74787__$1 = cljs.core.next(seq__74787);
var lib = first__74788;
var spec = seq__74787__$1;
var libspec__$1 = vec__74785;
var vec__74789 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74789,(0),null);
var vec__74793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74789,(1),null);
var seq__74794 = cljs.core.seq(vec__74793);
var first__74795 = cljs.core.first(seq__74794);
var seq__74794__$1 = cljs.core.next(seq__74794);
var _ = first__74795;
var first__74795__$1 = cljs.core.first(seq__74794__$1);
var seq__74794__$2 = cljs.core.next(seq__74794__$1);
var alias = first__74795__$1;
var post_spec = seq__74794__$2;
var post = vec__74793;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__74804 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74804,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__74804;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__74808 = cljs.core.seq(new_as_aliases);
var chunk__74809 = null;
var count__74810 = (0);
var i__74811 = (0);
while(true){
if((i__74811 < count__74810)){
var vec__74822 = chunk__74809.cljs$core$IIndexed$_nth$arity$2(null,i__74811);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74822,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74822,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__74877 = seq__74808;
var G__74878 = chunk__74809;
var G__74879 = count__74810;
var G__74880 = (i__74811 + (1));
seq__74808 = G__74877;
chunk__74809 = G__74878;
count__74810 = G__74879;
i__74811 = G__74880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74808);
if(temp__5804__auto__){
var seq__74808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74808__$1);
var G__74881 = cljs.core.chunk_rest(seq__74808__$1);
var G__74882 = c__5568__auto__;
var G__74883 = cljs.core.count(c__5568__auto__);
var G__74884 = (0);
seq__74808 = G__74881;
chunk__74809 = G__74882;
count__74810 = G__74883;
i__74811 = G__74884;
continue;
} else {
var vec__74837 = cljs.core.first(seq__74808__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74837,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74837,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__74885 = cljs.core.next(seq__74808__$1);
var G__74886 = null;
var G__74887 = (0);
var G__74888 = (0);
seq__74808 = G__74885;
chunk__74809 = G__74886;
count__74810 = G__74887;
i__74811 = G__74888;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__74850 = arguments.length;
switch (G__74850) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__74853 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__74853__$1 = cljs.core.__destructure_map(map__74853);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74853__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74853__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__74855 = ret__$1;
var G__74855__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74855,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__74855);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74855__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__74855__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74859,p__74860){
var map__74861 = p__74859;
var map__74861__$1 = cljs.core.__destructure_map(map__74861);
var ret__$1 = map__74861__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74861__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__74862 = p__74860;
var seq__74863 = cljs.core.seq(vec__74862);
var first__74864 = cljs.core.first(seq__74863);
var seq__74863__$1 = cljs.core.next(seq__74863);
var spec_key = first__74864;
var libspecs = seq__74863__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__74865 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__74865__$1 = cljs.core.__destructure_map(map__74865);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74865__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74865__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__74868 = ret__$1;
var G__74868__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74868,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__74868);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__74868__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__74868__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
