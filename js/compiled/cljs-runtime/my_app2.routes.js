goog.provide('my_app2.routes');
if((typeof my_app2 !== 'undefined') && (typeof my_app2.routes !== 'undefined') && (typeof my_app2.routes.panels !== 'undefined')){
} else {
my_app2.routes.panels = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79961 = cljs.core.get_global_hierarchy;
return (fexpr__79961.cljs$core$IFn$_invoke$arity$0 ? fexpr__79961.cljs$core$IFn$_invoke$arity$0() : fexpr__79961.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("my-app2.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
my_app2.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
my_app2.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
my_app2.routes.parse = (function my_app2$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(my_app2.routes.routes),url);
});
my_app2.routes.url_for = (function my_app2$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___79991 = arguments.length;
var i__5770__auto___79993 = (0);
while(true){
if((i__5770__auto___79993 < len__5769__auto___79991)){
args__5775__auto__.push((arguments[i__5770__auto___79993]));

var G__79994 = (i__5770__auto___79993 + (1));
i__5770__auto___79993 = G__79994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return my_app2.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(my_app2.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(my_app2.routes.routes)], null),args));
}));

(my_app2.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(my_app2.routes.url_for.cljs$lang$applyTo = (function (seq79968){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79968));
}));

my_app2.routes.dispatch = (function my_app2$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("my-app2.events","set-active-panel","my-app2.events/set-active-panel",1643653885),panel], null));
});
if((typeof my_app2 !== 'undefined') && (typeof my_app2.routes !== 'undefined') && (typeof my_app2.routes.history !== 'undefined')){
} else {
my_app2.routes.history = pushy.core.pushy(my_app2.routes.dispatch,my_app2.routes.parse);
}
my_app2.routes.navigate_BANG_ = (function my_app2$routes$navigate_BANG_(handler){
return my_app2.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,my_app2.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
my_app2.routes.start_BANG_ = (function my_app2$routes$start_BANG_(){
return my_app2.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return my_app2.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=my_app2.routes.js.map
