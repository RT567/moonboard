goog.provide('my_app2.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("my-app2.events","initialize-db","my-app2.events/initialize-db",-446156693),(function (_,___$1){
return my_app2.db.default_db;
}));
my_app2.events.toggle_hold = (function my_app2$events$toggle_hold(value,vec){
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([value]),vec))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vec,value);
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([value]),vec);

}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hold-clicked","hold-clicked",-290823769),(function (db,p__21516){
var vec__21517 = p__21516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21517,(0),null);
var hold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21517,(1),null);
var db_list = new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768).cljs$core$IFn$_invoke$arity$1(db);
var new_list = my_app2.events.toggle_hold(hold,db_list);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768),new_list);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-holds","clear-holds",1115176146),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grade-climb","grade-climb",-1605854086),(function (p__21520,event_vec){
var map__21521 = p__21520;
var map__21521__$1 = cljs.core.__destructure_map(map__21521);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"http://httpbin.org/get",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-fail","on-fail",-589260753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fail","process-fail",1181179141)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flag","flag",1088647881),true)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__21522){
var map__21523 = p__21522;
var map__21523__$1 = cljs.core.__destructure_map(map__21523);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,new cljs.core.Keyword(null,"url","url",276297046));
var success_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,new cljs.core.Keyword(null,"success-handler","success-handler",2043721730));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));
})], null)], 0));
}));

//# sourceMappingURL=my_app2.events.js.map
