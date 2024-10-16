goog.provide('sci.lang');
sci.lang.class_name = (function sci$lang$class_name(s){
var temp__5802__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1)));
} else {
return s;
}
});
sci.lang.package_name = (function sci$lang$package_name(s){
var temp__5802__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i);
} else {
return s;
}
});

/**
* @constructor
 * @implements {cljs.core.INamed}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.types.IBox}
*/
sci.lang.Type = (function (data,namespace,name){
this.data = data;
this.namespace = namespace;
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 4096;
});
(sci.lang.Type.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Type.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
}));

(sci.lang.Type.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return (self__.data = v);
}));

(sci.lang.Type.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sci.impl","type-name","sci.impl/type-name",-1528979388).cljs$core$IFn$_invoke$arity$1(self__.data));
}));

(sci.lang.Type.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
}));

(sci.lang.Type.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.namespace == null)){
var ns = sci.lang.package_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1));
(self__.namespace = ns);

return ns;
} else {
return self__.namespace;
}
}));

(sci.lang.Type.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.name == null)){
var nom = sci.lang.class_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1));
(self__.name = nom);

return nom;
} else {
return self__.name;
}
}));

(sci.lang.Type.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(sci.lang.Type.cljs$lang$type = true);

(sci.lang.Type.cljs$lang$ctorStr = "sci.lang/Type");

(sci.lang.Type.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.lang/Type");
}));

/**
 * Positional factory function for sci.lang/Type.
 */
sci.lang.__GT_Type = (function sci$lang$__GT_Type(data,namespace,name){
return (new sci.lang.Type(data,namespace,name));
});

sci.lang.throw_root_binding = (function sci$lang$throw_root_binding(this$){
throw (new Error(["Can't change/establish root binding of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," with set"].join('')));
});
sci.lang.notify_watches = (function sci$lang$notify_watches(ref,watches,old_val,new_val){
if(cljs.core.truth_(watches)){
if((cljs.core.count(watches) > (0))){
cljs.core.reduce_kv((function (_,k,f){
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(k,ref,old_val,new_val) : f.call(null,k,ref,old_val,new_val));

return null;
}),null,watches);
} else {
}
} else {
}

return ref;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {sci.impl.vars.DynVar}
 * @implements {sci.impl.vars.CtxVar}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.vars.IVar}
 * @implements {sci.impl.types.HasName}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {sci.impl.types.IBox}
*/
sci.lang.Var = (function (root,sym,meta,thread_bound,needs_ctx,watches){
this.root = root;
this.sym = sym;
this.meta = meta;
this.thread_bound = thread_bound;
this.needs_ctx = needs_ctx;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2147647489;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.lang.Var.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.sci$impl$vars$IVar$toSymbol$arity$1(null))].join('');
}));

(sci.lang.Var.prototype.sci$impl$vars$DynVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Var.prototype.sci$impl$vars$DynVar$dynamic_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(self__.meta);
}));

(sci.lang.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#'");

return cljs.core._pr_writer(a__$1.sci$impl$vars$IVar$toSymbol$arity$1(null),writer,opts);
}));

(sci.lang.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Var.prototype.sci$impl$vars$IVar$bindRoot$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var old_root_62682 = this$__$1.root;
var vm__61830__auto___62683 = self__.meta;
if(cljs.core.truth_((function (){var or__5045__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__61830__auto___62683));
}
})())){
(self__.root = v);
} else {
var the_var__61831__auto___62684 = this$__$1;
var ns__61832__auto___62685 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__61830__auto___62683);
var ns_name__61833__auto___62686 = sci.impl.types.getName(ns__61832__auto___62685);
var name__61834__auto___62687 = the_var__61831__auto___62684.sci$impl$types$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__61833__auto___62686),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__61834__auto___62687)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}

sci.lang.notify_watches(this$__$1,self__.watches,old_root_62682,v);

return v;
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$getRawRoot$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.root;
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$toSymbol$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var temp__5802__auto__ = (function (){var G__62270 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.meta);
if((G__62270 == null)){
return null;
} else {
return cljs.core.name(G__62270);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sym_name = temp__5802__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var G__62278 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(self__.meta);
var G__62278__$1 = (((G__62278 == null))?null:sci.impl.types.getName(G__62278));
if((G__62278__$1 == null)){
return null;
} else {
return cljs.core.name(G__62278__$1);
}
})(),sym_name);
} else {
return self__.sym;
}
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$isMacro$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(self__.meta);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5808__auto__ = cljs.core.meta(self__.root);
if((temp__5808__auto__ == null)){
return null;
} else {
var m = temp__5808__auto__;
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
}
}
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$setThreadBound$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (this$__$1.thread_bound = v);
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$unbind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vm__61830__auto__ = self__.meta;
if(cljs.core.truth_((function (){var or__5045__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(vm__61830__auto__));
}
})())){
return (this$__$1.root = (new sci.impl.vars.SciUnbound(this$__$1)));
} else {
var the_var__61831__auto__ = this$__$1;
var ns__61832__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm__61830__auto__);
var ns_name__61833__auto__ = sci.impl.types.getName(ns__61832__auto__);
var name__61834__auto__ = the_var__61831__auto__.sci$impl$types$HasName$getName$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Built-in var #'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name__61833__auto__),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__61834__auto__)," is read-only."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),this$__$1], null));
}
}));

(sci.lang.Var.prototype.sci$impl$vars$IVar$hasRoot$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (!((self__.root instanceof sci.impl.vars.SciUnbound)));
}));

(sci.lang.Var.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Var.prototype.sci$impl$types$IBox$setVal$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var b = temp__5802__auto__;
return sci.impl.types.setVal(b,v);
} else {
if(cljs.core.truth_(sci.impl.unrestrict._STAR_unrestricted_STAR_)){
return (this$__$1.root = v);
} else {
return sci.lang.throw_root_binding(this$__$1);
}
}
}));

(sci.lang.Var.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.root;
}));

(sci.lang.Var.prototype.sci$impl$types$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Var.prototype.sci$impl$types$HasName$getName$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.meta);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return self__.sym;
}
}));

(sci.lang.Var.prototype.sci$impl$vars$CtxVar$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Var.prototype.sci$impl$vars$CtxVar$needs_ctx_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.needs_ctx;
}));

(sci.lang.Var.prototype.sci$impl$vars$CtxVar$needs_ctx_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.needs_ctx = true);
}));

(sci.lang.Var.prototype.call = (function (unused__10314__auto__){
var self__ = this;
var self__ = this;
var G__62323 = (arguments.length - (1));
switch (G__62323) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(sci.lang.Var.prototype.apply = (function (self__,args62255){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62255)));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__62518 = cljs.core.deref(this$);
return (fexpr__62518.cljs$core$IFn$_invoke$arity$0 ? fexpr__62518.cljs$core$IFn$_invoke$arity$0() : fexpr__62518.call(null));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__62527 = cljs.core.deref(this$);
return (fexpr__62527.cljs$core$IFn$_invoke$arity$1 ? fexpr__62527.cljs$core$IFn$_invoke$arity$1(a) : fexpr__62527.call(null,a));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__62530 = cljs.core.deref(this$);
return (fexpr__62530.cljs$core$IFn$_invoke$arity$2 ? fexpr__62530.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__62530.call(null,a,b));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__62532 = cljs.core.deref(this$);
return (fexpr__62532.cljs$core$IFn$_invoke$arity$3 ? fexpr__62532.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__62532.call(null,a,b,c));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__62542 = cljs.core.deref(this$);
return (fexpr__62542.cljs$core$IFn$_invoke$arity$4 ? fexpr__62542.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__62542.call(null,a,b,c,d));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__62545 = cljs.core.deref(this$);
return (fexpr__62545.cljs$core$IFn$_invoke$arity$5 ? fexpr__62545.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__62545.call(null,a,b,c,d,e));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var fexpr__62551 = cljs.core.deref(this$);
return (fexpr__62551.cljs$core$IFn$_invoke$arity$6 ? fexpr__62551.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : fexpr__62551.call(null,a,b,c,d,e,f));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var fexpr__62552 = cljs.core.deref(this$);
return (fexpr__62552.cljs$core$IFn$_invoke$arity$7 ? fexpr__62552.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : fexpr__62552.call(null,a,b,c,d,e,f,g));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var fexpr__62553 = cljs.core.deref(this$);
return (fexpr__62553.cljs$core$IFn$_invoke$arity$8 ? fexpr__62553.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : fexpr__62553.call(null,a,b,c,d,e,f,g,h));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__62562 = cljs.core.deref(this$);
return (fexpr__62562.cljs$core$IFn$_invoke$arity$9 ? fexpr__62562.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : fexpr__62562.call(null,a,b,c,d,e,f,g,h,i));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__62566 = cljs.core.deref(this$);
return (fexpr__62566.cljs$core$IFn$_invoke$arity$10 ? fexpr__62566.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : fexpr__62566.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__62570 = cljs.core.deref(this$);
return (fexpr__62570.cljs$core$IFn$_invoke$arity$11 ? fexpr__62570.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : fexpr__62570.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__62571 = cljs.core.deref(this$);
return (fexpr__62571.cljs$core$IFn$_invoke$arity$12 ? fexpr__62571.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : fexpr__62571.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__62572 = cljs.core.deref(this$);
return (fexpr__62572.cljs$core$IFn$_invoke$arity$13 ? fexpr__62572.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : fexpr__62572.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__62582 = cljs.core.deref(this$);
return (fexpr__62582.cljs$core$IFn$_invoke$arity$14 ? fexpr__62582.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : fexpr__62582.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__62583 = cljs.core.deref(this$);
return (fexpr__62583.cljs$core$IFn$_invoke$arity$15 ? fexpr__62583.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : fexpr__62583.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__62586 = cljs.core.deref(this$);
return (fexpr__62586.cljs$core$IFn$_invoke$arity$16 ? fexpr__62586.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : fexpr__62586.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__62590 = cljs.core.deref(this$);
return (fexpr__62590.cljs$core$IFn$_invoke$arity$17 ? fexpr__62590.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : fexpr__62590.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__62594 = cljs.core.deref(this$);
return (fexpr__62594.cljs$core$IFn$_invoke$arity$18 ? fexpr__62594.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__62594.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__62595 = cljs.core.deref(this$);
return (fexpr__62595.cljs$core$IFn$_invoke$arity$19 ? fexpr__62595.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__62595.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__62596 = cljs.core.deref(this$);
return (fexpr__62596.cljs$core$IFn$_invoke$arity$20 ? fexpr__62596.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__62596.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(sci.lang.Var.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(sci.lang.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.thread_bound)){
var temp__5802__auto__ = sci.impl.vars.get_thread_binding(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var tbox = temp__5802__auto__;
return sci.impl.types.getVal(tbox);
} else {
return self__.root;
}
} else {
return self__.root;
}
}));

(sci.lang.Var.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"sym","sym",195671222,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"thread-bound","thread-bound",1232527493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.lang.Var.cljs$lang$type = true);

(sci.lang.Var.cljs$lang$ctorStr = "sci.lang/Var");

(sci.lang.Var.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.lang/Var");
}));

/**
 * Positional factory function for sci.lang/Var.
 */
sci.lang.__GT_Var = (function sci$lang$__GT_Var(root,sym,meta,thread_bound,needs_ctx,watches){
return (new sci.lang.Var(root,sym,meta,thread_bound,needs_ctx,watches));
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.types.HasName}
*/
sci.lang.Namespace = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 131072;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.lang.Namespace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name);
}));

(sci.lang.Namespace.prototype.sci$impl$types$HasName$ = cljs.core.PROTOCOL_SENTINEL);

(sci.lang.Namespace.prototype.sci$impl$types$HasName$getName$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(sci.lang.Namespace.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(sci.lang.Namespace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(sci.lang.Namespace.cljs$lang$type = true);

(sci.lang.Namespace.cljs$lang$ctorStr = "sci.lang/Namespace");

(sci.lang.Namespace.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.lang/Namespace");
}));

/**
 * Positional factory function for sci.lang/Namespace.
 */
sci.lang.__GT_Namespace = (function sci$lang$__GT_Namespace(name,meta){
return (new sci.lang.Namespace(name,meta));
});


//# sourceMappingURL=sci.lang.js.map
