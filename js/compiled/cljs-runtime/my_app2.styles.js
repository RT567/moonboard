goog.provide('my_app2.styles');
/**
 * @param {...*} var_args
 */
my_app2.styles.linear_gradient = (function() { 
var my_app2$styles$linear_gradient__delegate = function (args__41708__auto__){
return (new garden.types.CSSFunction("linear-gradient",cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() {
var G__82376 = null;
var G__82376__4 = (function (c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
var G__82376__5 = (function (dir,c1,p1,c2,p2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,p2], null)], null);
});
G__82376 = function(dir,c1,p1,c2,p2){
switch(arguments.length){
case 4:
return G__82376__4.call(this,dir,c1,p1,c2);
case 5:
return G__82376__5.call(this,dir,c1,p1,c2,p2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82376.cljs$core$IFn$_invoke$arity$4 = G__82376__4;
G__82376.cljs$core$IFn$_invoke$arity$5 = G__82376__5;
return G__82376;
})()
,args__41708__auto__),null,null,null));
};
var my_app2$styles$linear_gradient = function (var_args){
var args__41708__auto__ = null;
if (arguments.length > 0) {
var G__82377__i = 0, G__82377__a = new Array(arguments.length -  0);
while (G__82377__i < G__82377__a.length) {G__82377__a[G__82377__i] = arguments[G__82377__i + 0]; ++G__82377__i;}
  args__41708__auto__ = new cljs.core.IndexedSeq(G__82377__a,0,null);
} 
return my_app2$styles$linear_gradient__delegate.call(this,args__41708__auto__);};
my_app2$styles$linear_gradient.cljs$lang$maxFixedArity = 0;
my_app2$styles$linear_gradient.cljs$lang$applyTo = (function (arglist__82378){
var args__41708__auto__ = cljs.core.seq(arglist__82378);
return my_app2$styles$linear_gradient__delegate(args__41708__auto__);
});
my_app2$styles$linear_gradient.cljs$core$IFn$_invoke$arity$variadic = my_app2$styles$linear_gradient__delegate;
return my_app2$styles$linear_gradient;
})()
;
my_app2.styles.defaults_factory$ = (function my_app2$styles$defaults_factory$(style_name82368,params82369){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),style_name82368,new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"#ddd","#ddd",-1886570548),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),my_app2.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),new cljs.core.Keyword(null,"white","white",-483998618),garden.units.px((2)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((2))], 0)),my_app2.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0)),my_app2.styles.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.units.deg((90)),garden.color.rgba.cljs$core$IFn$_invoke$arity$4((255),(255),(255),0.3),garden.units.px((1)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),garden.units.px((1))], 0))], null),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((100)),garden.units.px((100))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((20)),garden.units.px((20))], null)], null),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-2)),garden.units.px((-2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.units.px((-1)),garden.units.px((-1))], null)], null)], null)], null)], null))], null);
});

var factory_name82370_82379 = spade.util.factory__GT_name(my_app2.styles.defaults_factory$);
my_app2.styles.defaults = spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"global","global",93595047),factory_name82370_82379,my_app2.styles.defaults_factory$,null);
my_app2.styles.level1_factory$ = (function my_app2$styles$level1_factory$(style_name82371,params82372){
var style82374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name82371)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),spade.runtime.compile_css(style82374),new cljs.core.Keyword(null,"name","name",1843675177),style_name82371], null);
});

var factory_name82373_82380 = spade.util.factory__GT_name(my_app2.styles.level1_factory$);
my_app2.styles.level1 = (function my_app2$styles$level1(){
return spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name82373_82380,my_app2.styles.level1_factory$,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=my_app2.styles.js.map
