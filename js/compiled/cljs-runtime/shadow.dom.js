goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_77977 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_77977(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_77983 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_77983(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__76602 = coll;
var G__76603 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__76602,G__76603) : shadow.dom.lazy_native_coll_seq.call(null,G__76602,G__76603));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__76627 = arguments.length;
switch (G__76627) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__76638 = arguments.length;
switch (G__76638) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__76659 = arguments.length;
switch (G__76659) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__76682 = arguments.length;
switch (G__76682) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__76715 = arguments.length;
switch (G__76715) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__76750 = arguments.length;
switch (G__76750) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e76766){if((e76766 instanceof Object)){
var e = e76766;
return console.log("didnt support attachEvent",el,e);
} else {
throw e76766;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__76786 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__76787 = null;
var count__76788 = (0);
var i__76789 = (0);
while(true){
if((i__76789 < count__76788)){
var el = chunk__76787.cljs$core$IIndexed$_nth$arity$2(null,i__76789);
var handler_78010__$1 = ((function (seq__76786,chunk__76787,count__76788,i__76789,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__76786,chunk__76787,count__76788,i__76789,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_78010__$1);


var G__78014 = seq__76786;
var G__78015 = chunk__76787;
var G__78016 = count__76788;
var G__78017 = (i__76789 + (1));
seq__76786 = G__78014;
chunk__76787 = G__78015;
count__76788 = G__78016;
i__76789 = G__78017;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76786);
if(temp__5804__auto__){
var seq__76786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76786__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76786__$1);
var G__78018 = cljs.core.chunk_rest(seq__76786__$1);
var G__78019 = c__5568__auto__;
var G__78020 = cljs.core.count(c__5568__auto__);
var G__78021 = (0);
seq__76786 = G__78018;
chunk__76787 = G__78019;
count__76788 = G__78020;
i__76789 = G__78021;
continue;
} else {
var el = cljs.core.first(seq__76786__$1);
var handler_78022__$1 = ((function (seq__76786,chunk__76787,count__76788,i__76789,el,seq__76786__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__76786,chunk__76787,count__76788,i__76789,el,seq__76786__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_78022__$1);


var G__78023 = cljs.core.next(seq__76786__$1);
var G__78024 = null;
var G__78025 = (0);
var G__78026 = (0);
seq__76786 = G__78023;
chunk__76787 = G__78024;
count__76788 = G__78025;
i__76789 = G__78026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__76824 = arguments.length;
switch (G__76824) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__76837 = cljs.core.seq(events);
var chunk__76838 = null;
var count__76839 = (0);
var i__76840 = (0);
while(true){
if((i__76840 < count__76839)){
var vec__76860 = chunk__76838.cljs$core$IIndexed$_nth$arity$2(null,i__76840);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__78031 = seq__76837;
var G__78032 = chunk__76838;
var G__78033 = count__76839;
var G__78034 = (i__76840 + (1));
seq__76837 = G__78031;
chunk__76838 = G__78032;
count__76839 = G__78033;
i__76840 = G__78034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76837);
if(temp__5804__auto__){
var seq__76837__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76837__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76837__$1);
var G__78038 = cljs.core.chunk_rest(seq__76837__$1);
var G__78039 = c__5568__auto__;
var G__78040 = cljs.core.count(c__5568__auto__);
var G__78041 = (0);
seq__76837 = G__78038;
chunk__76838 = G__78039;
count__76839 = G__78040;
i__76840 = G__78041;
continue;
} else {
var vec__76867 = cljs.core.first(seq__76837__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76867,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__78042 = cljs.core.next(seq__76837__$1);
var G__78043 = null;
var G__78044 = (0);
var G__78045 = (0);
seq__76837 = G__78042;
chunk__76838 = G__78043;
count__76839 = G__78044;
i__76840 = G__78045;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__76875 = cljs.core.seq(styles);
var chunk__76876 = null;
var count__76877 = (0);
var i__76878 = (0);
while(true){
if((i__76878 < count__76877)){
var vec__76897 = chunk__76876.cljs$core$IIndexed$_nth$arity$2(null,i__76878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76897,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__78049 = seq__76875;
var G__78050 = chunk__76876;
var G__78051 = count__76877;
var G__78052 = (i__76878 + (1));
seq__76875 = G__78049;
chunk__76876 = G__78050;
count__76877 = G__78051;
i__76878 = G__78052;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76875);
if(temp__5804__auto__){
var seq__76875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76875__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76875__$1);
var G__78053 = cljs.core.chunk_rest(seq__76875__$1);
var G__78054 = c__5568__auto__;
var G__78055 = cljs.core.count(c__5568__auto__);
var G__78056 = (0);
seq__76875 = G__78053;
chunk__76876 = G__78054;
count__76877 = G__78055;
i__76878 = G__78056;
continue;
} else {
var vec__76902 = cljs.core.first(seq__76875__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76902,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__78057 = cljs.core.next(seq__76875__$1);
var G__78058 = null;
var G__78059 = (0);
var G__78060 = (0);
seq__76875 = G__78057;
chunk__76876 = G__78058;
count__76877 = G__78059;
i__76878 = G__78060;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__76908_78061 = key;
var G__76908_78062__$1 = (((G__76908_78061 instanceof cljs.core.Keyword))?G__76908_78061.fqn:null);
switch (G__76908_78062__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_78064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_78064,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_78064,"aria-");
}
})())){
el.setAttribute(ks_78064,value);
} else {
(el[ks_78064] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__76948){
var map__76949 = p__76948;
var map__76949__$1 = cljs.core.__destructure_map(map__76949);
var props = map__76949__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76949__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__76952 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76952,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76952,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76952,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__76958 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__76958,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__76958;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__76969 = arguments.length;
switch (G__76969) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__76991){
var vec__76993 = p__76991;
var seq__76994 = cljs.core.seq(vec__76993);
var first__76995 = cljs.core.first(seq__76994);
var seq__76994__$1 = cljs.core.next(seq__76994);
var nn = first__76995;
var first__76995__$1 = cljs.core.first(seq__76994__$1);
var seq__76994__$2 = cljs.core.next(seq__76994__$1);
var np = first__76995__$1;
var nc = seq__76994__$2;
var node = vec__76993;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77003 = nn;
var G__77004 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__77003,G__77004) : create_fn.call(null,G__77003,G__77004));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77008 = nn;
var G__77009 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__77008,G__77009) : create_fn.call(null,G__77008,G__77009));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__77020 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77020,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77020,(1),null);
var seq__77024_78085 = cljs.core.seq(node_children);
var chunk__77027_78086 = null;
var count__77028_78087 = (0);
var i__77029_78088 = (0);
while(true){
if((i__77029_78088 < count__77028_78087)){
var child_struct_78089 = chunk__77027_78086.cljs$core$IIndexed$_nth$arity$2(null,i__77029_78088);
var children_78090 = shadow.dom.dom_node(child_struct_78089);
if(cljs.core.seq_QMARK_(children_78090)){
var seq__77079_78091 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_78090));
var chunk__77081_78092 = null;
var count__77082_78093 = (0);
var i__77083_78094 = (0);
while(true){
if((i__77083_78094 < count__77082_78093)){
var child_78096 = chunk__77081_78092.cljs$core$IIndexed$_nth$arity$2(null,i__77083_78094);
if(cljs.core.truth_(child_78096)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78096);


var G__78100 = seq__77079_78091;
var G__78101 = chunk__77081_78092;
var G__78102 = count__77082_78093;
var G__78103 = (i__77083_78094 + (1));
seq__77079_78091 = G__78100;
chunk__77081_78092 = G__78101;
count__77082_78093 = G__78102;
i__77083_78094 = G__78103;
continue;
} else {
var G__78104 = seq__77079_78091;
var G__78105 = chunk__77081_78092;
var G__78106 = count__77082_78093;
var G__78107 = (i__77083_78094 + (1));
seq__77079_78091 = G__78104;
chunk__77081_78092 = G__78105;
count__77082_78093 = G__78106;
i__77083_78094 = G__78107;
continue;
}
} else {
var temp__5804__auto___78108 = cljs.core.seq(seq__77079_78091);
if(temp__5804__auto___78108){
var seq__77079_78109__$1 = temp__5804__auto___78108;
if(cljs.core.chunked_seq_QMARK_(seq__77079_78109__$1)){
var c__5568__auto___78110 = cljs.core.chunk_first(seq__77079_78109__$1);
var G__78111 = cljs.core.chunk_rest(seq__77079_78109__$1);
var G__78112 = c__5568__auto___78110;
var G__78113 = cljs.core.count(c__5568__auto___78110);
var G__78114 = (0);
seq__77079_78091 = G__78111;
chunk__77081_78092 = G__78112;
count__77082_78093 = G__78113;
i__77083_78094 = G__78114;
continue;
} else {
var child_78115 = cljs.core.first(seq__77079_78109__$1);
if(cljs.core.truth_(child_78115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78115);


var G__78116 = cljs.core.next(seq__77079_78109__$1);
var G__78117 = null;
var G__78118 = (0);
var G__78119 = (0);
seq__77079_78091 = G__78116;
chunk__77081_78092 = G__78117;
count__77082_78093 = G__78118;
i__77083_78094 = G__78119;
continue;
} else {
var G__78120 = cljs.core.next(seq__77079_78109__$1);
var G__78121 = null;
var G__78122 = (0);
var G__78123 = (0);
seq__77079_78091 = G__78120;
chunk__77081_78092 = G__78121;
count__77082_78093 = G__78122;
i__77083_78094 = G__78123;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_78090);
}


var G__78124 = seq__77024_78085;
var G__78125 = chunk__77027_78086;
var G__78126 = count__77028_78087;
var G__78127 = (i__77029_78088 + (1));
seq__77024_78085 = G__78124;
chunk__77027_78086 = G__78125;
count__77028_78087 = G__78126;
i__77029_78088 = G__78127;
continue;
} else {
var temp__5804__auto___78128 = cljs.core.seq(seq__77024_78085);
if(temp__5804__auto___78128){
var seq__77024_78129__$1 = temp__5804__auto___78128;
if(cljs.core.chunked_seq_QMARK_(seq__77024_78129__$1)){
var c__5568__auto___78130 = cljs.core.chunk_first(seq__77024_78129__$1);
var G__78131 = cljs.core.chunk_rest(seq__77024_78129__$1);
var G__78132 = c__5568__auto___78130;
var G__78133 = cljs.core.count(c__5568__auto___78130);
var G__78134 = (0);
seq__77024_78085 = G__78131;
chunk__77027_78086 = G__78132;
count__77028_78087 = G__78133;
i__77029_78088 = G__78134;
continue;
} else {
var child_struct_78135 = cljs.core.first(seq__77024_78129__$1);
var children_78136 = shadow.dom.dom_node(child_struct_78135);
if(cljs.core.seq_QMARK_(children_78136)){
var seq__77116_78137 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_78136));
var chunk__77118_78138 = null;
var count__77119_78139 = (0);
var i__77120_78140 = (0);
while(true){
if((i__77120_78140 < count__77119_78139)){
var child_78141 = chunk__77118_78138.cljs$core$IIndexed$_nth$arity$2(null,i__77120_78140);
if(cljs.core.truth_(child_78141)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78141);


var G__78142 = seq__77116_78137;
var G__78143 = chunk__77118_78138;
var G__78144 = count__77119_78139;
var G__78145 = (i__77120_78140 + (1));
seq__77116_78137 = G__78142;
chunk__77118_78138 = G__78143;
count__77119_78139 = G__78144;
i__77120_78140 = G__78145;
continue;
} else {
var G__78146 = seq__77116_78137;
var G__78147 = chunk__77118_78138;
var G__78148 = count__77119_78139;
var G__78149 = (i__77120_78140 + (1));
seq__77116_78137 = G__78146;
chunk__77118_78138 = G__78147;
count__77119_78139 = G__78148;
i__77120_78140 = G__78149;
continue;
}
} else {
var temp__5804__auto___78150__$1 = cljs.core.seq(seq__77116_78137);
if(temp__5804__auto___78150__$1){
var seq__77116_78151__$1 = temp__5804__auto___78150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77116_78151__$1)){
var c__5568__auto___78153 = cljs.core.chunk_first(seq__77116_78151__$1);
var G__78154 = cljs.core.chunk_rest(seq__77116_78151__$1);
var G__78155 = c__5568__auto___78153;
var G__78156 = cljs.core.count(c__5568__auto___78153);
var G__78157 = (0);
seq__77116_78137 = G__78154;
chunk__77118_78138 = G__78155;
count__77119_78139 = G__78156;
i__77120_78140 = G__78157;
continue;
} else {
var child_78161 = cljs.core.first(seq__77116_78151__$1);
if(cljs.core.truth_(child_78161)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_78161);


var G__78162 = cljs.core.next(seq__77116_78151__$1);
var G__78163 = null;
var G__78164 = (0);
var G__78165 = (0);
seq__77116_78137 = G__78162;
chunk__77118_78138 = G__78163;
count__77119_78139 = G__78164;
i__77120_78140 = G__78165;
continue;
} else {
var G__78166 = cljs.core.next(seq__77116_78151__$1);
var G__78167 = null;
var G__78168 = (0);
var G__78169 = (0);
seq__77116_78137 = G__78166;
chunk__77118_78138 = G__78167;
count__77119_78139 = G__78168;
i__77120_78140 = G__78169;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_78136);
}


var G__78170 = cljs.core.next(seq__77024_78129__$1);
var G__78171 = null;
var G__78172 = (0);
var G__78173 = (0);
seq__77024_78085 = G__78170;
chunk__77027_78086 = G__78171;
count__77028_78087 = G__78172;
i__77029_78088 = G__78173;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__77187 = cljs.core.seq(node);
var chunk__77188 = null;
var count__77189 = (0);
var i__77190 = (0);
while(true){
if((i__77190 < count__77189)){
var n = chunk__77188.cljs$core$IIndexed$_nth$arity$2(null,i__77190);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__78176 = seq__77187;
var G__78177 = chunk__77188;
var G__78178 = count__77189;
var G__78179 = (i__77190 + (1));
seq__77187 = G__78176;
chunk__77188 = G__78177;
count__77189 = G__78178;
i__77190 = G__78179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77187);
if(temp__5804__auto__){
var seq__77187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77187__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77187__$1);
var G__78181 = cljs.core.chunk_rest(seq__77187__$1);
var G__78182 = c__5568__auto__;
var G__78183 = cljs.core.count(c__5568__auto__);
var G__78184 = (0);
seq__77187 = G__78181;
chunk__77188 = G__78182;
count__77189 = G__78183;
i__77190 = G__78184;
continue;
} else {
var n = cljs.core.first(seq__77187__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__78185 = cljs.core.next(seq__77187__$1);
var G__78186 = null;
var G__78187 = (0);
var G__78188 = (0);
seq__77187 = G__78185;
chunk__77188 = G__78186;
count__77189 = G__78187;
i__77190 = G__78188;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__77215 = arguments.length;
switch (G__77215) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__77232 = arguments.length;
switch (G__77232) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__77265 = arguments.length;
switch (G__77265) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78203 = arguments.length;
var i__5770__auto___78204 = (0);
while(true){
if((i__5770__auto___78204 < len__5769__auto___78203)){
args__5775__auto__.push((arguments[i__5770__auto___78204]));

var G__78205 = (i__5770__auto___78204 + (1));
i__5770__auto___78204 = G__78205;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__77338_78206 = cljs.core.seq(nodes);
var chunk__77339_78207 = null;
var count__77340_78208 = (0);
var i__77341_78209 = (0);
while(true){
if((i__77341_78209 < count__77340_78208)){
var node_78216 = chunk__77339_78207.cljs$core$IIndexed$_nth$arity$2(null,i__77341_78209);
fragment.appendChild(shadow.dom._to_dom(node_78216));


var G__78217 = seq__77338_78206;
var G__78218 = chunk__77339_78207;
var G__78219 = count__77340_78208;
var G__78220 = (i__77341_78209 + (1));
seq__77338_78206 = G__78217;
chunk__77339_78207 = G__78218;
count__77340_78208 = G__78219;
i__77341_78209 = G__78220;
continue;
} else {
var temp__5804__auto___78221 = cljs.core.seq(seq__77338_78206);
if(temp__5804__auto___78221){
var seq__77338_78222__$1 = temp__5804__auto___78221;
if(cljs.core.chunked_seq_QMARK_(seq__77338_78222__$1)){
var c__5568__auto___78224 = cljs.core.chunk_first(seq__77338_78222__$1);
var G__78225 = cljs.core.chunk_rest(seq__77338_78222__$1);
var G__78226 = c__5568__auto___78224;
var G__78227 = cljs.core.count(c__5568__auto___78224);
var G__78228 = (0);
seq__77338_78206 = G__78225;
chunk__77339_78207 = G__78226;
count__77340_78208 = G__78227;
i__77341_78209 = G__78228;
continue;
} else {
var node_78229 = cljs.core.first(seq__77338_78222__$1);
fragment.appendChild(shadow.dom._to_dom(node_78229));


var G__78230 = cljs.core.next(seq__77338_78222__$1);
var G__78231 = null;
var G__78232 = (0);
var G__78233 = (0);
seq__77338_78206 = G__78230;
chunk__77339_78207 = G__78231;
count__77340_78208 = G__78232;
i__77341_78209 = G__78233;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq77315){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77315));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__77380_78235 = cljs.core.seq(scripts);
var chunk__77381_78236 = null;
var count__77382_78237 = (0);
var i__77383_78238 = (0);
while(true){
if((i__77383_78238 < count__77382_78237)){
var vec__77394_78242 = chunk__77381_78236.cljs$core$IIndexed$_nth$arity$2(null,i__77383_78238);
var script_tag_78243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77394_78242,(0),null);
var script_body_78244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77394_78242,(1),null);
eval(script_body_78244);


var G__78245 = seq__77380_78235;
var G__78246 = chunk__77381_78236;
var G__78247 = count__77382_78237;
var G__78248 = (i__77383_78238 + (1));
seq__77380_78235 = G__78245;
chunk__77381_78236 = G__78246;
count__77382_78237 = G__78247;
i__77383_78238 = G__78248;
continue;
} else {
var temp__5804__auto___78250 = cljs.core.seq(seq__77380_78235);
if(temp__5804__auto___78250){
var seq__77380_78252__$1 = temp__5804__auto___78250;
if(cljs.core.chunked_seq_QMARK_(seq__77380_78252__$1)){
var c__5568__auto___78253 = cljs.core.chunk_first(seq__77380_78252__$1);
var G__78254 = cljs.core.chunk_rest(seq__77380_78252__$1);
var G__78255 = c__5568__auto___78253;
var G__78256 = cljs.core.count(c__5568__auto___78253);
var G__78257 = (0);
seq__77380_78235 = G__78254;
chunk__77381_78236 = G__78255;
count__77382_78237 = G__78256;
i__77383_78238 = G__78257;
continue;
} else {
var vec__77402_78258 = cljs.core.first(seq__77380_78252__$1);
var script_tag_78259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77402_78258,(0),null);
var script_body_78260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77402_78258,(1),null);
eval(script_body_78260);


var G__78262 = cljs.core.next(seq__77380_78252__$1);
var G__78263 = null;
var G__78264 = (0);
var G__78265 = (0);
seq__77380_78235 = G__78262;
chunk__77381_78236 = G__78263;
count__77382_78237 = G__78264;
i__77383_78238 = G__78265;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__77411){
var vec__77412 = p__77411;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77412,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77412,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__77437 = arguments.length;
switch (G__77437) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__77470 = cljs.core.seq(style_keys);
var chunk__77471 = null;
var count__77472 = (0);
var i__77473 = (0);
while(true){
if((i__77473 < count__77472)){
var it = chunk__77471.cljs$core$IIndexed$_nth$arity$2(null,i__77473);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__78286 = seq__77470;
var G__78287 = chunk__77471;
var G__78288 = count__77472;
var G__78289 = (i__77473 + (1));
seq__77470 = G__78286;
chunk__77471 = G__78287;
count__77472 = G__78288;
i__77473 = G__78289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__77470);
if(temp__5804__auto__){
var seq__77470__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77470__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__77470__$1);
var G__78291 = cljs.core.chunk_rest(seq__77470__$1);
var G__78292 = c__5568__auto__;
var G__78293 = cljs.core.count(c__5568__auto__);
var G__78294 = (0);
seq__77470 = G__78291;
chunk__77471 = G__78292;
count__77472 = G__78293;
i__77473 = G__78294;
continue;
} else {
var it = cljs.core.first(seq__77470__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__78295 = cljs.core.next(seq__77470__$1);
var G__78296 = null;
var G__78297 = (0);
var G__78298 = (0);
seq__77470 = G__78295;
chunk__77471 = G__78296;
count__77472 = G__78297;
i__77473 = G__78298;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77491,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77507 = k77491;
var G__77507__$1 = (((G__77507 instanceof cljs.core.Keyword))?G__77507.fqn:null);
switch (G__77507__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77491,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77515){
var vec__77516 = p__77515;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77516,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77516,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77490){
var self__ = this;
var G__77490__$1 = this;
return (new cljs.core.RecordIter((0),G__77490__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77493,other77494){
var self__ = this;
var this77493__$1 = this;
return (((!((other77494 == null)))) && ((((this77493__$1.constructor === other77494.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77493__$1.x,other77494.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77493__$1.y,other77494.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77493__$1.__extmap,other77494.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77491){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77555 = k77491;
var G__77555__$1 = (((G__77555 instanceof cljs.core.Keyword))?G__77555.fqn:null);
switch (G__77555__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77491);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77490){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77557 = cljs.core.keyword_identical_QMARK_;
var expr__77558 = k__5352__auto__;
if(cljs.core.truth_((pred__77557.cljs$core$IFn$_invoke$arity$2 ? pred__77557.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__77558) : pred__77557.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__77558)))){
return (new shadow.dom.Coordinate(G__77490,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77557.cljs$core$IFn$_invoke$arity$2 ? pred__77557.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__77558) : pred__77557.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__77558)))){
return (new shadow.dom.Coordinate(self__.x,G__77490,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77490),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77490){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__77490,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__77502){
var extmap__5385__auto__ = (function (){var G__77576 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77502,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__77502)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77576);
} else {
return G__77576;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__77502),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__77502),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k77598,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__77616 = k77598;
var G__77616__$1 = (((G__77616 instanceof cljs.core.Keyword))?G__77616.fqn:null);
switch (G__77616__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77598,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__77622){
var vec__77624 = p__77622;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77624,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77624,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77597){
var self__ = this;
var G__77597__$1 = this;
return (new cljs.core.RecordIter((0),G__77597__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77599,other77600){
var self__ = this;
var this77599__$1 = this;
return (((!((other77600 == null)))) && ((((this77599__$1.constructor === other77600.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77599__$1.w,other77600.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77599__$1.h,other77600.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77599__$1.__extmap,other77600.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k77598){
var self__ = this;
var this__5350__auto____$1 = this;
var G__77654 = k77598;
var G__77654__$1 = (((G__77654 instanceof cljs.core.Keyword))?G__77654.fqn:null);
switch (G__77654__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77598);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__77597){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__77658 = cljs.core.keyword_identical_QMARK_;
var expr__77659 = k__5352__auto__;
if(cljs.core.truth_((pred__77658.cljs$core$IFn$_invoke$arity$2 ? pred__77658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__77659) : pred__77658.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__77659)))){
return (new shadow.dom.Size(G__77597,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77658.cljs$core$IFn$_invoke$arity$2 ? pred__77658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__77659) : pred__77658.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__77659)))){
return (new shadow.dom.Size(self__.w,G__77597,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__77597),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__77597){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__77597,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__77603){
var extmap__5385__auto__ = (function (){var G__77673 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77603,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__77603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77673);
} else {
return G__77673;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__77603),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__77603),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__78371 = (i + (1));
var G__78372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__78371;
ret = G__78372;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77715){
var vec__77716 = p__77715;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77716,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__77732 = arguments.length;
switch (G__77732) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__78382 = ps;
var G__78383 = (i + (1));
el__$1 = G__78382;
i = G__78383;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__77801 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77801,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77801,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77801,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__77804_78391 = cljs.core.seq(props);
var chunk__77805_78392 = null;
var count__77806_78393 = (0);
var i__77807_78394 = (0);
while(true){
if((i__77807_78394 < count__77806_78393)){
var vec__77823_78395 = chunk__77805_78392.cljs$core$IIndexed$_nth$arity$2(null,i__77807_78394);
var k_78396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77823_78395,(0),null);
var v_78397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77823_78395,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_78396);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_78396),v_78397);


var G__78400 = seq__77804_78391;
var G__78401 = chunk__77805_78392;
var G__78402 = count__77806_78393;
var G__78403 = (i__77807_78394 + (1));
seq__77804_78391 = G__78400;
chunk__77805_78392 = G__78401;
count__77806_78393 = G__78402;
i__77807_78394 = G__78403;
continue;
} else {
var temp__5804__auto___78404 = cljs.core.seq(seq__77804_78391);
if(temp__5804__auto___78404){
var seq__77804_78405__$1 = temp__5804__auto___78404;
if(cljs.core.chunked_seq_QMARK_(seq__77804_78405__$1)){
var c__5568__auto___78406 = cljs.core.chunk_first(seq__77804_78405__$1);
var G__78407 = cljs.core.chunk_rest(seq__77804_78405__$1);
var G__78408 = c__5568__auto___78406;
var G__78409 = cljs.core.count(c__5568__auto___78406);
var G__78410 = (0);
seq__77804_78391 = G__78407;
chunk__77805_78392 = G__78408;
count__77806_78393 = G__78409;
i__77807_78394 = G__78410;
continue;
} else {
var vec__77831_78411 = cljs.core.first(seq__77804_78405__$1);
var k_78412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77831_78411,(0),null);
var v_78413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77831_78411,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_78412);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_78412),v_78413);


var G__78414 = cljs.core.next(seq__77804_78405__$1);
var G__78415 = null;
var G__78416 = (0);
var G__78417 = (0);
seq__77804_78391 = G__78414;
chunk__77805_78392 = G__78415;
count__77806_78393 = G__78416;
i__77807_78394 = G__78417;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__77839 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77839,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77839,(1),null);
var seq__77845_78418 = cljs.core.seq(node_children);
var chunk__77847_78419 = null;
var count__77848_78420 = (0);
var i__77849_78421 = (0);
while(true){
if((i__77849_78421 < count__77848_78420)){
var child_struct_78423 = chunk__77847_78419.cljs$core$IIndexed$_nth$arity$2(null,i__77849_78421);
if((!((child_struct_78423 == null)))){
if(typeof child_struct_78423 === 'string'){
var text_78427 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_78427),child_struct_78423].join(''));
} else {
var children_78428 = shadow.dom.svg_node(child_struct_78423);
if(cljs.core.seq_QMARK_(children_78428)){
var seq__77881_78429 = cljs.core.seq(children_78428);
var chunk__77883_78430 = null;
var count__77884_78431 = (0);
var i__77885_78432 = (0);
while(true){
if((i__77885_78432 < count__77884_78431)){
var child_78433 = chunk__77883_78430.cljs$core$IIndexed$_nth$arity$2(null,i__77885_78432);
if(cljs.core.truth_(child_78433)){
node.appendChild(child_78433);


var G__78434 = seq__77881_78429;
var G__78435 = chunk__77883_78430;
var G__78436 = count__77884_78431;
var G__78437 = (i__77885_78432 + (1));
seq__77881_78429 = G__78434;
chunk__77883_78430 = G__78435;
count__77884_78431 = G__78436;
i__77885_78432 = G__78437;
continue;
} else {
var G__78438 = seq__77881_78429;
var G__78439 = chunk__77883_78430;
var G__78440 = count__77884_78431;
var G__78441 = (i__77885_78432 + (1));
seq__77881_78429 = G__78438;
chunk__77883_78430 = G__78439;
count__77884_78431 = G__78440;
i__77885_78432 = G__78441;
continue;
}
} else {
var temp__5804__auto___78442 = cljs.core.seq(seq__77881_78429);
if(temp__5804__auto___78442){
var seq__77881_78443__$1 = temp__5804__auto___78442;
if(cljs.core.chunked_seq_QMARK_(seq__77881_78443__$1)){
var c__5568__auto___78444 = cljs.core.chunk_first(seq__77881_78443__$1);
var G__78445 = cljs.core.chunk_rest(seq__77881_78443__$1);
var G__78446 = c__5568__auto___78444;
var G__78447 = cljs.core.count(c__5568__auto___78444);
var G__78448 = (0);
seq__77881_78429 = G__78445;
chunk__77883_78430 = G__78446;
count__77884_78431 = G__78447;
i__77885_78432 = G__78448;
continue;
} else {
var child_78449 = cljs.core.first(seq__77881_78443__$1);
if(cljs.core.truth_(child_78449)){
node.appendChild(child_78449);


var G__78451 = cljs.core.next(seq__77881_78443__$1);
var G__78452 = null;
var G__78453 = (0);
var G__78454 = (0);
seq__77881_78429 = G__78451;
chunk__77883_78430 = G__78452;
count__77884_78431 = G__78453;
i__77885_78432 = G__78454;
continue;
} else {
var G__78455 = cljs.core.next(seq__77881_78443__$1);
var G__78456 = null;
var G__78457 = (0);
var G__78458 = (0);
seq__77881_78429 = G__78455;
chunk__77883_78430 = G__78456;
count__77884_78431 = G__78457;
i__77885_78432 = G__78458;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_78428);
}
}


var G__78459 = seq__77845_78418;
var G__78460 = chunk__77847_78419;
var G__78461 = count__77848_78420;
var G__78462 = (i__77849_78421 + (1));
seq__77845_78418 = G__78459;
chunk__77847_78419 = G__78460;
count__77848_78420 = G__78461;
i__77849_78421 = G__78462;
continue;
} else {
var G__78463 = seq__77845_78418;
var G__78464 = chunk__77847_78419;
var G__78465 = count__77848_78420;
var G__78466 = (i__77849_78421 + (1));
seq__77845_78418 = G__78463;
chunk__77847_78419 = G__78464;
count__77848_78420 = G__78465;
i__77849_78421 = G__78466;
continue;
}
} else {
var temp__5804__auto___78467 = cljs.core.seq(seq__77845_78418);
if(temp__5804__auto___78467){
var seq__77845_78468__$1 = temp__5804__auto___78467;
if(cljs.core.chunked_seq_QMARK_(seq__77845_78468__$1)){
var c__5568__auto___78469 = cljs.core.chunk_first(seq__77845_78468__$1);
var G__78470 = cljs.core.chunk_rest(seq__77845_78468__$1);
var G__78471 = c__5568__auto___78469;
var G__78472 = cljs.core.count(c__5568__auto___78469);
var G__78473 = (0);
seq__77845_78418 = G__78470;
chunk__77847_78419 = G__78471;
count__77848_78420 = G__78472;
i__77849_78421 = G__78473;
continue;
} else {
var child_struct_78476 = cljs.core.first(seq__77845_78468__$1);
if((!((child_struct_78476 == null)))){
if(typeof child_struct_78476 === 'string'){
var text_78477 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_78477),child_struct_78476].join(''));
} else {
var children_78478 = shadow.dom.svg_node(child_struct_78476);
if(cljs.core.seq_QMARK_(children_78478)){
var seq__77887_78481 = cljs.core.seq(children_78478);
var chunk__77889_78482 = null;
var count__77890_78483 = (0);
var i__77891_78484 = (0);
while(true){
if((i__77891_78484 < count__77890_78483)){
var child_78485 = chunk__77889_78482.cljs$core$IIndexed$_nth$arity$2(null,i__77891_78484);
if(cljs.core.truth_(child_78485)){
node.appendChild(child_78485);


var G__78487 = seq__77887_78481;
var G__78488 = chunk__77889_78482;
var G__78489 = count__77890_78483;
var G__78490 = (i__77891_78484 + (1));
seq__77887_78481 = G__78487;
chunk__77889_78482 = G__78488;
count__77890_78483 = G__78489;
i__77891_78484 = G__78490;
continue;
} else {
var G__78491 = seq__77887_78481;
var G__78492 = chunk__77889_78482;
var G__78493 = count__77890_78483;
var G__78494 = (i__77891_78484 + (1));
seq__77887_78481 = G__78491;
chunk__77889_78482 = G__78492;
count__77890_78483 = G__78493;
i__77891_78484 = G__78494;
continue;
}
} else {
var temp__5804__auto___78495__$1 = cljs.core.seq(seq__77887_78481);
if(temp__5804__auto___78495__$1){
var seq__77887_78498__$1 = temp__5804__auto___78495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77887_78498__$1)){
var c__5568__auto___78500 = cljs.core.chunk_first(seq__77887_78498__$1);
var G__78501 = cljs.core.chunk_rest(seq__77887_78498__$1);
var G__78502 = c__5568__auto___78500;
var G__78503 = cljs.core.count(c__5568__auto___78500);
var G__78504 = (0);
seq__77887_78481 = G__78501;
chunk__77889_78482 = G__78502;
count__77890_78483 = G__78503;
i__77891_78484 = G__78504;
continue;
} else {
var child_78505 = cljs.core.first(seq__77887_78498__$1);
if(cljs.core.truth_(child_78505)){
node.appendChild(child_78505);


var G__78507 = cljs.core.next(seq__77887_78498__$1);
var G__78508 = null;
var G__78509 = (0);
var G__78510 = (0);
seq__77887_78481 = G__78507;
chunk__77889_78482 = G__78508;
count__77890_78483 = G__78509;
i__77891_78484 = G__78510;
continue;
} else {
var G__78511 = cljs.core.next(seq__77887_78498__$1);
var G__78512 = null;
var G__78513 = (0);
var G__78514 = (0);
seq__77887_78481 = G__78511;
chunk__77889_78482 = G__78512;
count__77890_78483 = G__78513;
i__77891_78484 = G__78514;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_78478);
}
}


var G__78515 = cljs.core.next(seq__77845_78468__$1);
var G__78516 = null;
var G__78517 = (0);
var G__78518 = (0);
seq__77845_78418 = G__78515;
chunk__77847_78419 = G__78516;
count__77848_78420 = G__78517;
i__77849_78421 = G__78518;
continue;
} else {
var G__78519 = cljs.core.next(seq__77845_78468__$1);
var G__78520 = null;
var G__78521 = (0);
var G__78522 = (0);
seq__77845_78418 = G__78519;
chunk__77847_78419 = G__78520;
count__77848_78420 = G__78521;
i__77849_78421 = G__78522;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___78524 = arguments.length;
var i__5770__auto___78525 = (0);
while(true){
if((i__5770__auto___78525 < len__5769__auto___78524)){
args__5775__auto__.push((arguments[i__5770__auto___78525]));

var G__78526 = (i__5770__auto___78525 + (1));
i__5770__auto___78525 = G__78526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq77904){
var G__77906 = cljs.core.first(seq77904);
var seq77904__$1 = cljs.core.next(seq77904);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77906,seq77904__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__77923 = arguments.length;
switch (G__77923) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33108__auto___78541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_77937){
var state_val_77938 = (state_77937[(1)]);
if((state_val_77938 === (1))){
var state_77937__$1 = state_77937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77937__$1,(2),once_or_cleanup);
} else {
if((state_val_77938 === (2))){
var inst_77930 = (state_77937[(2)]);
var inst_77935 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_77937__$1 = (function (){var statearr_77941 = state_77937;
(statearr_77941[(7)] = inst_77930);

return statearr_77941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_77937__$1,inst_77935);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32945__auto__ = null;
var shadow$dom$state_machine__32945__auto____0 = (function (){
var statearr_77943 = [null,null,null,null,null,null,null,null];
(statearr_77943[(0)] = shadow$dom$state_machine__32945__auto__);

(statearr_77943[(1)] = (1));

return statearr_77943;
});
var shadow$dom$state_machine__32945__auto____1 = (function (state_77937){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_77937);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e77944){var ex__32948__auto__ = e77944;
var statearr_77947_78544 = state_77937;
(statearr_77947_78544[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_77937[(4)]))){
var statearr_77950_78545 = state_77937;
(statearr_77950_78545[(1)] = cljs.core.first((state_77937[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78549 = state_77937;
state_77937 = G__78549;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
shadow$dom$state_machine__32945__auto__ = function(state_77937){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32945__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32945__auto____1.call(this,state_77937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32945__auto____0;
shadow$dom$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32945__auto____1;
return shadow$dom$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_77958 = f__33109__auto__();
(statearr_77958[(6)] = c__33108__auto___78541);

return statearr_77958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
