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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hold-clicked","hold-clicked",-290823769),(function (db,p__21874){
var vec__21875 = p__21874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(0),null);
var hold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(1),null);
var db_list = new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768).cljs$core$IFn$_invoke$arity$1(db);
var new_list = my_app2.events.toggle_hold(hold,db_list);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768),new_list);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-holds","clear-holds",1115176146),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grade-climb-old-broken","grade-climb-old-broken",-208442410),(function (p__21878,event_vec){
var map__21879 = p__21878;
var map__21879__$1 = cljs.core.__destructure_map(map__21879);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"http://httpbin.org/get",new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-fail","on-fail",-589260753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fail","process-fail",1181179141)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flag","flag",1088647881),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grade-climb","grade-climb",-1605854086),(function (p__21880,_){
var map__21881 = p__21880;
var map__21881__$1 = cljs.core.__destructure_map(map__21881);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"db","db",993250759));
var holds = new cljs.core.Keyword(null,"selected-holds","selected-holds",-59437768).cljs$core$IFn$_invoke$arity$1(db);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in grade event"], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://moonboard-fastapi.onrender.com/grade_climb",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"holds","holds",-1141888792),holds], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fail","process-fail",1181179141)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flag","flag",1088647881),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__21882){
var vec__21883 = p__21882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,(1),null);
var grade = new cljs.core.Keyword(null,"grade","grade",2117054771).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grade], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"grade","grade",2117054771),grade,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flag","flag",1088647881),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-fail","process-fail",1181179141),(function (db,p__21886){
var vec__21887 = p__21886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flag","flag",1088647881),false], 0));
}));

//# sourceMappingURL=my_app2.events.js.map
