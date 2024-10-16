goog.provide('my_app2.core');
my_app2.core.dev_setup = (function my_app2$core$dev_setup(){
if(my_app2.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
my_app2.core.mount_root = (function my_app2$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.main_panel], null),root_el);
});
my_app2.core.init = (function my_app2$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("my-app2.events","initialize-db","my-app2.events/initialize-db",-446156693)], null));

my_app2.core.dev_setup();

return my_app2.core.mount_root();
});

//# sourceMappingURL=my_app2.core.js.map
