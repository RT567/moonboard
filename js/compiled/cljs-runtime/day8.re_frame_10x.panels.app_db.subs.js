goog.provide('day8.re_frame_10x.panels.app_db.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__66196,_){
var map__66197 = p__66196;
var map__66197__$1 = cljs.core.__destructure_map(map__66197);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
return app_db;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66201,_){
var map__66205 = p__66201;
var map__66205__$1 = cljs.core.__destructure_map(map__66205);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66199_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__66199_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__66199_SHARP_));
}),paths));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null),(function (p__66209,p__66210){
var vec__66211 = p__66209;
var map__66214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66211,(0),null);
var map__66214__$1 = cljs.core.__destructure_map(map__66214);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66214__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66211,(1),null);
var vec__66215 = p__66210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66215,(0),null);
var map__66218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66215,(1),null);
var map__66218__$1 = cljs.core.__destructure_map(map__66218);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66218__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(db_after,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","small-data?","day8.re-frame-10x.panels.app-db.subs/small-data?",1741117145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__66223,_){
var vec__66225 = p__66223;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66225,(0),null);
var map__66228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66225,(1),null);
var map__66228__$1 = cljs.core.__destructure_map(map__66228);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148)], null))], null);
}),(function (p__66234,_){
var vec__66237 = p__66234;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66237,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66237,(1),null);
return day8.re_frame_10x.tools.coll.nodes_fewer_than_QMARK_(data,limit);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","search-string","day8.re-frame-10x.panels.app-db.subs/search-string",-1224926557),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66242,_){
var map__66243 = p__66242;
var map__66243__$1 = cljs.core.__destructure_map(map__66243);
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66243__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return search_string;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66247,_){
var map__66248 = p__66247;
var map__66248__$1 = cljs.core.__destructure_map(map__66248);
var json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66248__$1,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
return json_ml_expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264)], null),(function (expansions,p__66250){
var vec__66251 = p__66250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66251,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66251,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","reagent-id","day8.re-frame-10x.panels.app-db.subs/reagent-id",-1515896944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66254,_){
var map__66256 = p__66254;
var map__66256__$1 = cljs.core.__destructure_map(map__66256);
var reagent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66256__$1,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
return reagent_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66258,_){
var map__66259 = p__66258;
var map__66259__$1 = cljs.core.__destructure_map(map__66259);
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66259__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
return data_path_annotations_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__66261,p__66262){
var map__66263 = p__66261;
var map__66263__$1 = cljs.core.__destructure_map(map__66263);
var expand_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66263__$1,new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886));
var vec__66264 = p__66262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66264,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66264,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expand_all_QMARK_,path_id);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.subs.js.map
