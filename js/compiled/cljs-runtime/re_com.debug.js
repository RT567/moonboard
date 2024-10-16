goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__76379){
var map__76380 = p__76379;
var map__76380__$1 = cljs.core.__destructure_map(map__76380);
var args = map__76380__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76380__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76380__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__76383 = src;
var map__76383__$1 = cljs.core.__destructure_map(map__76383);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76383__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76383__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__76413 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76413,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__76413;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__76441 = arguments.length;
switch (G__76441) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__76463_76655 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__76456_SHARP_,p2__76455_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__76455_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__76456_SHARP_ + (1)));
}),stack));
var chunk__76464_76656 = null;
var count__76465_76657 = (0);
var i__76466_76658 = (0);
while(true){
if((i__76466_76658 < count__76465_76657)){
var map__76505_76660 = chunk__76464_76656.cljs$core$IIndexed$_nth$arity$2(null,i__76466_76658);
var map__76505_76661__$1 = cljs.core.__destructure_map(map__76505_76660);
var i_76662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505_76661__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_76663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505_76661__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_76664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505_76661__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_76665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505_76661__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_76666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505_76661__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_76664)){
if(cljs.core.truth_(src_76665)){
var vec__76507_76671 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_76665,/:/);
var file_76672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76507_76671,(0),null);
var line_76673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76507_76671,(1),null);
if(cljs.core.truth_(args_76666)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76662),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76664)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76672),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76673),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_76666,el_76663);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76662),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76664)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76672),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76673),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_76663);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76662),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76664)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_76666,el_76663);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76662),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_76663);
}


var G__76675 = seq__76463_76655;
var G__76676 = chunk__76464_76656;
var G__76677 = count__76465_76657;
var G__76678 = (i__76466_76658 + (1));
seq__76463_76655 = G__76675;
chunk__76464_76656 = G__76676;
count__76465_76657 = G__76677;
i__76466_76658 = G__76678;
continue;
} else {
var temp__5804__auto___76680 = cljs.core.seq(seq__76463_76655);
if(temp__5804__auto___76680){
var seq__76463_76681__$1 = temp__5804__auto___76680;
if(cljs.core.chunked_seq_QMARK_(seq__76463_76681__$1)){
var c__5568__auto___76683 = cljs.core.chunk_first(seq__76463_76681__$1);
var G__76684 = cljs.core.chunk_rest(seq__76463_76681__$1);
var G__76685 = c__5568__auto___76683;
var G__76686 = cljs.core.count(c__5568__auto___76683);
var G__76687 = (0);
seq__76463_76655 = G__76684;
chunk__76464_76656 = G__76685;
count__76465_76657 = G__76686;
i__76466_76658 = G__76687;
continue;
} else {
var map__76516_76688 = cljs.core.first(seq__76463_76681__$1);
var map__76516_76689__$1 = cljs.core.__destructure_map(map__76516_76688);
var i_76690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76516_76689__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_76691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76516_76689__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_76692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76516_76689__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_76693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76516_76689__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_76694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76516_76689__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_76692)){
if(cljs.core.truth_(src_76693)){
var vec__76519_76698 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_76693,/:/);
var file_76699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76519_76698,(0),null);
var line_76700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76519_76698,(1),null);
if(cljs.core.truth_(args_76694)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76690),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76692)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76699),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76700),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_76694,el_76691);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76690),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76692)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76699),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76700),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_76691);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76690),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_76692)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_76694,el_76691);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_76690),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_76691);
}


var G__76706 = cljs.core.next(seq__76463_76681__$1);
var G__76707 = null;
var G__76708 = (0);
var G__76709 = (0);
seq__76463_76655 = G__76706;
chunk__76464_76656 = G__76707;
count__76465_76657 = G__76708;
i__76466_76658 = G__76709;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__76525 = cljs.core.seq(problems);
var chunk__76526 = null;
var count__76527 = (0);
var i__76528 = (0);
while(true){
if((i__76528 < count__76527)){
var map__76544 = chunk__76526.cljs$core$IIndexed$_nth$arity$2(null,i__76528);
var map__76544__$1 = cljs.core.__destructure_map(map__76544);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76544__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76544__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76544__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76544__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76544__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__76547_76710 = problem;
var G__76547_76711__$1 = (((G__76547_76710 instanceof cljs.core.Keyword))?G__76547_76710.fqn:null);
switch (G__76547_76711__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__76721 = seq__76525;
var G__76722 = chunk__76526;
var G__76723 = count__76527;
var G__76724 = (i__76528 + (1));
seq__76525 = G__76721;
chunk__76526 = G__76722;
count__76527 = G__76723;
i__76528 = G__76724;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76525);
if(temp__5804__auto__){
var seq__76525__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76525__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__76525__$1);
var G__76727 = cljs.core.chunk_rest(seq__76525__$1);
var G__76728 = c__5568__auto__;
var G__76729 = cljs.core.count(c__5568__auto__);
var G__76730 = (0);
seq__76525 = G__76727;
chunk__76526 = G__76728;
count__76527 = G__76729;
i__76528 = G__76730;
continue;
} else {
var map__76552 = cljs.core.first(seq__76525__$1);
var map__76552__$1 = cljs.core.__destructure_map(map__76552);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76552__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76552__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76552__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76552__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76552__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__76556_76734 = problem;
var G__76556_76735__$1 = (((G__76556_76734 instanceof cljs.core.Keyword))?G__76556_76734.fqn:null);
switch (G__76556_76735__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__76742 = cljs.core.next(seq__76525__$1);
var G__76743 = null;
var G__76744 = (0);
var G__76745 = (0);
seq__76525 = G__76742;
chunk__76526 = G__76743;
count__76527 = G__76744;
i__76528 = G__76745;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__76567){
var map__76568 = p__76567;
var map__76568__$1 = cljs.core.__destructure_map(map__76568);
var src = map__76568__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76568__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___76758 = arguments.length;
var i__5770__auto___76759 = (0);
while(true){
if((i__5770__auto___76759 < len__5769__auto___76758)){
args__5775__auto__.push((arguments[i__5770__auto___76759]));

var G__76761 = (i__5770__auto___76759 + (1));
i__5770__auto___76759 = G__76761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__76586){
var map__76587 = p__76586;
var map__76587__$1 = cljs.core.__destructure_map(map__76587);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76587__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76587__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76587__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__76772__delegate = function (p__76598){
var map__76599 = p__76598;
var map__76599__$1 = cljs.core.__destructure_map(map__76599);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76599__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76599__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76599__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__76772 = function (var_args){
var p__76598 = null;
if (arguments.length > 0) {
var G__76780__i = 0, G__76780__a = new Array(arguments.length -  0);
while (G__76780__i < G__76780__a.length) {G__76780__a[G__76780__i] = arguments[G__76780__i + 0]; ++G__76780__i;}
  p__76598 = new cljs.core.IndexedSeq(G__76780__a,0,null);
} 
return G__76772__delegate.call(this,p__76598);};
G__76772.cljs$lang$maxFixedArity = 0;
G__76772.cljs$lang$applyTo = (function (arglist__76785){
var p__76598 = cljs.core.seq(arglist__76785);
return G__76772__delegate(p__76598);
});
G__76772.cljs$core$IFn$_invoke$arity$variadic = G__76772__delegate;
return G__76772;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq76581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76581));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___76792 = arguments.length;
var i__5770__auto___76793 = (0);
while(true){
if((i__5770__auto___76793 < len__5769__auto___76792)){
args__5775__auto__.push((arguments[i__5770__auto___76793]));

var G__76794 = (i__5770__auto___76793 + (1));
i__5770__auto___76793 = G__76794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__76614){
var map__76615 = p__76614;
var map__76615__$1 = cljs.core.__destructure_map(map__76615);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76615__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76615__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__76802__delegate = function (p__76617){
var map__76619 = p__76617;
var map__76619__$1 = cljs.core.__destructure_map(map__76619);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76619__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76619__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__76802 = function (var_args){
var p__76617 = null;
if (arguments.length > 0) {
var G__76805__i = 0, G__76805__a = new Array(arguments.length -  0);
while (G__76805__i < G__76805__a.length) {G__76805__a[G__76805__i] = arguments[G__76805__i + 0]; ++G__76805__i;}
  p__76617 = new cljs.core.IndexedSeq(G__76805__a,0,null);
} 
return G__76802__delegate.call(this,p__76617);};
G__76802.cljs$lang$maxFixedArity = 0;
G__76802.cljs$lang$applyTo = (function (arglist__76806){
var p__76617 = cljs.core.seq(arglist__76806);
return G__76802__delegate(p__76617);
});
G__76802.cljs$core$IFn$_invoke$arity$variadic = G__76802__delegate;
return G__76802;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq76605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76605));
}));


//# sourceMappingURL=re_com.debug.js.map
