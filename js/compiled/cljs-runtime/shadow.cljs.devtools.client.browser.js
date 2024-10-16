goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___81034 = arguments.length;
var i__5770__auto___81035 = (0);
while(true){
if((i__5770__auto___81035 < len__5769__auto___81034)){
args__5775__auto__.push((arguments[i__5770__auto___81035]));

var G__81036 = (i__5770__auto___81035 + (1));
i__5770__auto___81035 = G__81036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq79813){
var G__79814 = cljs.core.first(seq79813);
var seq79813__$1 = cljs.core.next(seq79813);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79814,seq79813__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__79847 = cljs.core.seq(sources);
var chunk__79848 = null;
var count__79849 = (0);
var i__79850 = (0);
while(true){
if((i__79850 < count__79849)){
var map__79875 = chunk__79848.cljs$core$IIndexed$_nth$arity$2(null,i__79850);
var map__79875__$1 = cljs.core.__destructure_map(map__79875);
var src = map__79875__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79875__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79875__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79875__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79878){var e_81044 = e79878;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_81044);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_81044.message)].join('')));
}

var G__81045 = seq__79847;
var G__81046 = chunk__79848;
var G__81047 = count__79849;
var G__81048 = (i__79850 + (1));
seq__79847 = G__81045;
chunk__79848 = G__81046;
count__79849 = G__81047;
i__79850 = G__81048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__79847);
if(temp__5804__auto__){
var seq__79847__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79847__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__79847__$1);
var G__81049 = cljs.core.chunk_rest(seq__79847__$1);
var G__81050 = c__5568__auto__;
var G__81051 = cljs.core.count(c__5568__auto__);
var G__81052 = (0);
seq__79847 = G__81049;
chunk__79848 = G__81050;
count__79849 = G__81051;
i__79850 = G__81052;
continue;
} else {
var map__79893 = cljs.core.first(seq__79847__$1);
var map__79893__$1 = cljs.core.__destructure_map(map__79893);
var src = map__79893__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79893__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79893__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79893__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e79904){var e_81053 = e79904;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_81053);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_81053.message)].join('')));
}

var G__81054 = cljs.core.next(seq__79847__$1);
var G__81055 = null;
var G__81056 = (0);
var G__81057 = (0);
seq__79847 = G__81054;
chunk__79848 = G__81055;
count__79849 = G__81056;
i__79850 = G__81057;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__79926 = cljs.core.seq(js_requires);
var chunk__79927 = null;
var count__79928 = (0);
var i__79929 = (0);
while(true){
if((i__79929 < count__79928)){
var js_ns = chunk__79927.cljs$core$IIndexed$_nth$arity$2(null,i__79929);
var require_str_81059 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_81059);


var G__81067 = seq__79926;
var G__81068 = chunk__79927;
var G__81069 = count__79928;
var G__81070 = (i__79929 + (1));
seq__79926 = G__81067;
chunk__79927 = G__81068;
count__79928 = G__81069;
i__79929 = G__81070;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__79926);
if(temp__5804__auto__){
var seq__79926__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__79926__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__79926__$1);
var G__81071 = cljs.core.chunk_rest(seq__79926__$1);
var G__81072 = c__5568__auto__;
var G__81073 = cljs.core.count(c__5568__auto__);
var G__81074 = (0);
seq__79926 = G__81071;
chunk__79927 = G__81072;
count__79928 = G__81073;
i__79929 = G__81074;
continue;
} else {
var js_ns = cljs.core.first(seq__79926__$1);
var require_str_81075 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_81075);


var G__81076 = cljs.core.next(seq__79926__$1);
var G__81077 = null;
var G__81078 = (0);
var G__81079 = (0);
seq__79926 = G__81076;
chunk__79927 = G__81077;
count__79928 = G__81078;
i__79929 = G__81079;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__79950){
var map__79951 = p__79950;
var map__79951__$1 = cljs.core.__destructure_map(map__79951);
var msg = map__79951__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79951__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79951__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79952(s__79953){
return (new cljs.core.LazySeq(null,(function (){
var s__79953__$1 = s__79953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79953__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__79959 = cljs.core.first(xs__6360__auto__);
var map__79959__$1 = cljs.core.__destructure_map(map__79959);
var src = map__79959__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79959__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79959__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__79953__$1,map__79959,map__79959__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79951,map__79951__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79952_$_iter__79954(s__79955){
return (new cljs.core.LazySeq(null,((function (s__79953__$1,map__79959,map__79959__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79951,map__79951__$1,msg,info,reload_info){
return (function (){
var s__79955__$1 = s__79955;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79955__$1);
if(temp__5804__auto____$1){
var s__79955__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79955__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__79955__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__79957 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__79956 = (0);
while(true){
if((i__79956 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__79956);
cljs.core.chunk_append(b__79957,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__81081 = (i__79956 + (1));
i__79956 = G__81081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79957),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79952_$_iter__79954(cljs.core.chunk_rest(s__79955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79957),null);
}
} else {
var warning = cljs.core.first(s__79955__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79952_$_iter__79954(cljs.core.rest(s__79955__$2)));
}
} else {
return null;
}
break;
}
});})(s__79953__$1,map__79959,map__79959__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79951,map__79951__$1,msg,info,reload_info))
,null,null));
});})(s__79953__$1,map__79959,map__79959__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__79951,map__79951__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__79952(cljs.core.rest(s__79953__$1)));
} else {
var G__81083 = cljs.core.rest(s__79953__$1);
s__79953__$1 = G__81083;
continue;
}
} else {
var G__81085 = cljs.core.rest(s__79953__$1);
s__79953__$1 = G__81085;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__79962_81087 = cljs.core.seq(warnings);
var chunk__79963_81088 = null;
var count__79964_81089 = (0);
var i__79965_81090 = (0);
while(true){
if((i__79965_81090 < count__79964_81089)){
var map__79976_81091 = chunk__79963_81088.cljs$core$IIndexed$_nth$arity$2(null,i__79965_81090);
var map__79976_81092__$1 = cljs.core.__destructure_map(map__79976_81091);
var w_81093 = map__79976_81092__$1;
var msg_81094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79976_81092__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_81095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79976_81092__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_81096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79976_81092__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_81097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79976_81092__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_81097)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_81095),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_81096),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_81094__$1)].join(''));


var G__81098 = seq__79962_81087;
var G__81099 = chunk__79963_81088;
var G__81100 = count__79964_81089;
var G__81101 = (i__79965_81090 + (1));
seq__79962_81087 = G__81098;
chunk__79963_81088 = G__81099;
count__79964_81089 = G__81100;
i__79965_81090 = G__81101;
continue;
} else {
var temp__5804__auto___81102 = cljs.core.seq(seq__79962_81087);
if(temp__5804__auto___81102){
var seq__79962_81103__$1 = temp__5804__auto___81102;
if(cljs.core.chunked_seq_QMARK_(seq__79962_81103__$1)){
var c__5568__auto___81104 = cljs.core.chunk_first(seq__79962_81103__$1);
var G__81105 = cljs.core.chunk_rest(seq__79962_81103__$1);
var G__81106 = c__5568__auto___81104;
var G__81107 = cljs.core.count(c__5568__auto___81104);
var G__81108 = (0);
seq__79962_81087 = G__81105;
chunk__79963_81088 = G__81106;
count__79964_81089 = G__81107;
i__79965_81090 = G__81108;
continue;
} else {
var map__79977_81109 = cljs.core.first(seq__79962_81103__$1);
var map__79977_81110__$1 = cljs.core.__destructure_map(map__79977_81109);
var w_81111 = map__79977_81110__$1;
var msg_81112__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79977_81110__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_81113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79977_81110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_81114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79977_81110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_81115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79977_81110__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_81115)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_81113),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_81114),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_81112__$1)].join(''));


var G__81116 = cljs.core.next(seq__79962_81103__$1);
var G__81117 = null;
var G__81118 = (0);
var G__81119 = (0);
seq__79962_81087 = G__81116;
chunk__79963_81088 = G__81117;
count__79964_81089 = G__81118;
i__79965_81090 = G__81119;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__79949_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__79949_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__80004){
var map__80005 = p__80004;
var map__80005__$1 = cljs.core.__destructure_map(map__80005);
var msg = map__80005__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80005__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80005__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__80006 = cljs.core.seq(updates);
var chunk__80008 = null;
var count__80009 = (0);
var i__80010 = (0);
while(true){
if((i__80010 < count__80009)){
var path = chunk__80008.cljs$core$IIndexed$_nth$arity$2(null,i__80010);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__80240_81122 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__80244_81124 = null;
var count__80245_81125 = (0);
var i__80246_81126 = (0);
while(true){
if((i__80246_81126 < count__80245_81125)){
var node_81127 = chunk__80244_81124.cljs$core$IIndexed$_nth$arity$2(null,i__80246_81126);
if(cljs.core.not(node_81127.shadow$old)){
var path_match_81128 = shadow.cljs.devtools.client.browser.match_paths(node_81127.getAttribute("href"),path);
if(cljs.core.truth_(path_match_81128)){
var new_link_81129 = (function (){var G__80368 = node_81127.cloneNode(true);
G__80368.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_81128),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80368;
})();
(node_81127.shadow$old = true);

(new_link_81129.onload = ((function (seq__80240_81122,chunk__80244_81124,count__80245_81125,i__80246_81126,seq__80006,chunk__80008,count__80009,i__80010,new_link_81129,path_match_81128,node_81127,path,map__80005,map__80005__$1,msg,updates,reload_info){
return (function (e){
var seq__80378_81130 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80380_81131 = null;
var count__80381_81132 = (0);
var i__80382_81133 = (0);
while(true){
if((i__80382_81133 < count__80381_81132)){
var map__80400_81134 = chunk__80380_81131.cljs$core$IIndexed$_nth$arity$2(null,i__80382_81133);
var map__80400_81135__$1 = cljs.core.__destructure_map(map__80400_81134);
var task_81136 = map__80400_81135__$1;
var fn_str_81137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80400_81135__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80400_81135__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81139 = goog.getObjectByName(fn_str_81137,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81138)].join(''));

(fn_obj_81139.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81139.cljs$core$IFn$_invoke$arity$2(path,new_link_81129) : fn_obj_81139.call(null,path,new_link_81129));


var G__81140 = seq__80378_81130;
var G__81141 = chunk__80380_81131;
var G__81142 = count__80381_81132;
var G__81143 = (i__80382_81133 + (1));
seq__80378_81130 = G__81140;
chunk__80380_81131 = G__81141;
count__80381_81132 = G__81142;
i__80382_81133 = G__81143;
continue;
} else {
var temp__5804__auto___81144 = cljs.core.seq(seq__80378_81130);
if(temp__5804__auto___81144){
var seq__80378_81145__$1 = temp__5804__auto___81144;
if(cljs.core.chunked_seq_QMARK_(seq__80378_81145__$1)){
var c__5568__auto___81146 = cljs.core.chunk_first(seq__80378_81145__$1);
var G__81147 = cljs.core.chunk_rest(seq__80378_81145__$1);
var G__81148 = c__5568__auto___81146;
var G__81149 = cljs.core.count(c__5568__auto___81146);
var G__81150 = (0);
seq__80378_81130 = G__81147;
chunk__80380_81131 = G__81148;
count__80381_81132 = G__81149;
i__80382_81133 = G__81150;
continue;
} else {
var map__80410_81151 = cljs.core.first(seq__80378_81145__$1);
var map__80410_81152__$1 = cljs.core.__destructure_map(map__80410_81151);
var task_81153 = map__80410_81152__$1;
var fn_str_81154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80410_81152__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80410_81152__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81156 = goog.getObjectByName(fn_str_81154,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81155)].join(''));

(fn_obj_81156.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81156.cljs$core$IFn$_invoke$arity$2(path,new_link_81129) : fn_obj_81156.call(null,path,new_link_81129));


var G__81157 = cljs.core.next(seq__80378_81145__$1);
var G__81158 = null;
var G__81159 = (0);
var G__81160 = (0);
seq__80378_81130 = G__81157;
chunk__80380_81131 = G__81158;
count__80381_81132 = G__81159;
i__80382_81133 = G__81160;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_81127);
});})(seq__80240_81122,chunk__80244_81124,count__80245_81125,i__80246_81126,seq__80006,chunk__80008,count__80009,i__80010,new_link_81129,path_match_81128,node_81127,path,map__80005,map__80005__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_81128], 0));

goog.dom.insertSiblingAfter(new_link_81129,node_81127);


var G__81162 = seq__80240_81122;
var G__81163 = chunk__80244_81124;
var G__81164 = count__80245_81125;
var G__81165 = (i__80246_81126 + (1));
seq__80240_81122 = G__81162;
chunk__80244_81124 = G__81163;
count__80245_81125 = G__81164;
i__80246_81126 = G__81165;
continue;
} else {
var G__81167 = seq__80240_81122;
var G__81168 = chunk__80244_81124;
var G__81169 = count__80245_81125;
var G__81170 = (i__80246_81126 + (1));
seq__80240_81122 = G__81167;
chunk__80244_81124 = G__81168;
count__80245_81125 = G__81169;
i__80246_81126 = G__81170;
continue;
}
} else {
var G__81174 = seq__80240_81122;
var G__81175 = chunk__80244_81124;
var G__81176 = count__80245_81125;
var G__81177 = (i__80246_81126 + (1));
seq__80240_81122 = G__81174;
chunk__80244_81124 = G__81175;
count__80245_81125 = G__81176;
i__80246_81126 = G__81177;
continue;
}
} else {
var temp__5804__auto___81179 = cljs.core.seq(seq__80240_81122);
if(temp__5804__auto___81179){
var seq__80240_81180__$1 = temp__5804__auto___81179;
if(cljs.core.chunked_seq_QMARK_(seq__80240_81180__$1)){
var c__5568__auto___81182 = cljs.core.chunk_first(seq__80240_81180__$1);
var G__81183 = cljs.core.chunk_rest(seq__80240_81180__$1);
var G__81184 = c__5568__auto___81182;
var G__81185 = cljs.core.count(c__5568__auto___81182);
var G__81186 = (0);
seq__80240_81122 = G__81183;
chunk__80244_81124 = G__81184;
count__80245_81125 = G__81185;
i__80246_81126 = G__81186;
continue;
} else {
var node_81187 = cljs.core.first(seq__80240_81180__$1);
if(cljs.core.not(node_81187.shadow$old)){
var path_match_81188 = shadow.cljs.devtools.client.browser.match_paths(node_81187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_81188)){
var new_link_81190 = (function (){var G__80429 = node_81187.cloneNode(true);
G__80429.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_81188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80429;
})();
(node_81187.shadow$old = true);

(new_link_81190.onload = ((function (seq__80240_81122,chunk__80244_81124,count__80245_81125,i__80246_81126,seq__80006,chunk__80008,count__80009,i__80010,new_link_81190,path_match_81188,node_81187,seq__80240_81180__$1,temp__5804__auto___81179,path,map__80005,map__80005__$1,msg,updates,reload_info){
return (function (e){
var seq__80433_81191 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80435_81192 = null;
var count__80436_81193 = (0);
var i__80437_81194 = (0);
while(true){
if((i__80437_81194 < count__80436_81193)){
var map__80475_81195 = chunk__80435_81192.cljs$core$IIndexed$_nth$arity$2(null,i__80437_81194);
var map__80475_81196__$1 = cljs.core.__destructure_map(map__80475_81195);
var task_81197 = map__80475_81196__$1;
var fn_str_81198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475_81196__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80475_81196__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81201 = goog.getObjectByName(fn_str_81198,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81199)].join(''));

(fn_obj_81201.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81201.cljs$core$IFn$_invoke$arity$2(path,new_link_81190) : fn_obj_81201.call(null,path,new_link_81190));


var G__81202 = seq__80433_81191;
var G__81203 = chunk__80435_81192;
var G__81204 = count__80436_81193;
var G__81205 = (i__80437_81194 + (1));
seq__80433_81191 = G__81202;
chunk__80435_81192 = G__81203;
count__80436_81193 = G__81204;
i__80437_81194 = G__81205;
continue;
} else {
var temp__5804__auto___81206__$1 = cljs.core.seq(seq__80433_81191);
if(temp__5804__auto___81206__$1){
var seq__80433_81207__$1 = temp__5804__auto___81206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80433_81207__$1)){
var c__5568__auto___81208 = cljs.core.chunk_first(seq__80433_81207__$1);
var G__81209 = cljs.core.chunk_rest(seq__80433_81207__$1);
var G__81210 = c__5568__auto___81208;
var G__81211 = cljs.core.count(c__5568__auto___81208);
var G__81212 = (0);
seq__80433_81191 = G__81209;
chunk__80435_81192 = G__81210;
count__80436_81193 = G__81211;
i__80437_81194 = G__81212;
continue;
} else {
var map__80484_81213 = cljs.core.first(seq__80433_81207__$1);
var map__80484_81214__$1 = cljs.core.__destructure_map(map__80484_81213);
var task_81215 = map__80484_81214__$1;
var fn_str_81216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80484_81214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80484_81214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81218 = goog.getObjectByName(fn_str_81216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81217)].join(''));

(fn_obj_81218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81218.cljs$core$IFn$_invoke$arity$2(path,new_link_81190) : fn_obj_81218.call(null,path,new_link_81190));


var G__81269 = cljs.core.next(seq__80433_81207__$1);
var G__81270 = null;
var G__81271 = (0);
var G__81272 = (0);
seq__80433_81191 = G__81269;
chunk__80435_81192 = G__81270;
count__80436_81193 = G__81271;
i__80437_81194 = G__81272;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_81187);
});})(seq__80240_81122,chunk__80244_81124,count__80245_81125,i__80246_81126,seq__80006,chunk__80008,count__80009,i__80010,new_link_81190,path_match_81188,node_81187,seq__80240_81180__$1,temp__5804__auto___81179,path,map__80005,map__80005__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_81188], 0));

goog.dom.insertSiblingAfter(new_link_81190,node_81187);


var G__81274 = cljs.core.next(seq__80240_81180__$1);
var G__81275 = null;
var G__81276 = (0);
var G__81277 = (0);
seq__80240_81122 = G__81274;
chunk__80244_81124 = G__81275;
count__80245_81125 = G__81276;
i__80246_81126 = G__81277;
continue;
} else {
var G__81278 = cljs.core.next(seq__80240_81180__$1);
var G__81279 = null;
var G__81280 = (0);
var G__81281 = (0);
seq__80240_81122 = G__81278;
chunk__80244_81124 = G__81279;
count__80245_81125 = G__81280;
i__80246_81126 = G__81281;
continue;
}
} else {
var G__81282 = cljs.core.next(seq__80240_81180__$1);
var G__81283 = null;
var G__81284 = (0);
var G__81285 = (0);
seq__80240_81122 = G__81282;
chunk__80244_81124 = G__81283;
count__80245_81125 = G__81284;
i__80246_81126 = G__81285;
continue;
}
}
} else {
}
}
break;
}


var G__81286 = seq__80006;
var G__81287 = chunk__80008;
var G__81288 = count__80009;
var G__81289 = (i__80010 + (1));
seq__80006 = G__81286;
chunk__80008 = G__81287;
count__80009 = G__81288;
i__80010 = G__81289;
continue;
} else {
var G__81290 = seq__80006;
var G__81291 = chunk__80008;
var G__81292 = count__80009;
var G__81293 = (i__80010 + (1));
seq__80006 = G__81290;
chunk__80008 = G__81291;
count__80009 = G__81292;
i__80010 = G__81293;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__80006);
if(temp__5804__auto__){
var seq__80006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__80006__$1);
var G__81294 = cljs.core.chunk_rest(seq__80006__$1);
var G__81295 = c__5568__auto__;
var G__81296 = cljs.core.count(c__5568__auto__);
var G__81297 = (0);
seq__80006 = G__81294;
chunk__80008 = G__81295;
count__80009 = G__81296;
i__80010 = G__81297;
continue;
} else {
var path = cljs.core.first(seq__80006__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__80494_81300 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__80498_81301 = null;
var count__80499_81302 = (0);
var i__80500_81303 = (0);
while(true){
if((i__80500_81303 < count__80499_81302)){
var node_81304 = chunk__80498_81301.cljs$core$IIndexed$_nth$arity$2(null,i__80500_81303);
if(cljs.core.not(node_81304.shadow$old)){
var path_match_81307 = shadow.cljs.devtools.client.browser.match_paths(node_81304.getAttribute("href"),path);
if(cljs.core.truth_(path_match_81307)){
var new_link_81308 = (function (){var G__80627 = node_81304.cloneNode(true);
G__80627.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_81307),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80627;
})();
(node_81304.shadow$old = true);

(new_link_81308.onload = ((function (seq__80494_81300,chunk__80498_81301,count__80499_81302,i__80500_81303,seq__80006,chunk__80008,count__80009,i__80010,new_link_81308,path_match_81307,node_81304,path,seq__80006__$1,temp__5804__auto__,map__80005,map__80005__$1,msg,updates,reload_info){
return (function (e){
var seq__80631_81309 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80633_81310 = null;
var count__80634_81311 = (0);
var i__80635_81312 = (0);
while(true){
if((i__80635_81312 < count__80634_81311)){
var map__80675_81325 = chunk__80633_81310.cljs$core$IIndexed$_nth$arity$2(null,i__80635_81312);
var map__80675_81326__$1 = cljs.core.__destructure_map(map__80675_81325);
var task_81327 = map__80675_81326__$1;
var fn_str_81328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80675_81326__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80675_81326__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81330 = goog.getObjectByName(fn_str_81328,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81329)].join(''));

(fn_obj_81330.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81330.cljs$core$IFn$_invoke$arity$2(path,new_link_81308) : fn_obj_81330.call(null,path,new_link_81308));


var G__81331 = seq__80631_81309;
var G__81332 = chunk__80633_81310;
var G__81333 = count__80634_81311;
var G__81334 = (i__80635_81312 + (1));
seq__80631_81309 = G__81331;
chunk__80633_81310 = G__81332;
count__80634_81311 = G__81333;
i__80635_81312 = G__81334;
continue;
} else {
var temp__5804__auto___81335__$1 = cljs.core.seq(seq__80631_81309);
if(temp__5804__auto___81335__$1){
var seq__80631_81336__$1 = temp__5804__auto___81335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80631_81336__$1)){
var c__5568__auto___81337 = cljs.core.chunk_first(seq__80631_81336__$1);
var G__81338 = cljs.core.chunk_rest(seq__80631_81336__$1);
var G__81339 = c__5568__auto___81337;
var G__81340 = cljs.core.count(c__5568__auto___81337);
var G__81341 = (0);
seq__80631_81309 = G__81338;
chunk__80633_81310 = G__81339;
count__80634_81311 = G__81340;
i__80635_81312 = G__81341;
continue;
} else {
var map__80693_81342 = cljs.core.first(seq__80631_81336__$1);
var map__80693_81343__$1 = cljs.core.__destructure_map(map__80693_81342);
var task_81344 = map__80693_81343__$1;
var fn_str_81345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80693_81343__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80693_81343__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81347 = goog.getObjectByName(fn_str_81345,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81346)].join(''));

(fn_obj_81347.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81347.cljs$core$IFn$_invoke$arity$2(path,new_link_81308) : fn_obj_81347.call(null,path,new_link_81308));


var G__81348 = cljs.core.next(seq__80631_81336__$1);
var G__81349 = null;
var G__81350 = (0);
var G__81351 = (0);
seq__80631_81309 = G__81348;
chunk__80633_81310 = G__81349;
count__80634_81311 = G__81350;
i__80635_81312 = G__81351;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_81304);
});})(seq__80494_81300,chunk__80498_81301,count__80499_81302,i__80500_81303,seq__80006,chunk__80008,count__80009,i__80010,new_link_81308,path_match_81307,node_81304,path,seq__80006__$1,temp__5804__auto__,map__80005,map__80005__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_81307], 0));

goog.dom.insertSiblingAfter(new_link_81308,node_81304);


var G__81352 = seq__80494_81300;
var G__81353 = chunk__80498_81301;
var G__81354 = count__80499_81302;
var G__81355 = (i__80500_81303 + (1));
seq__80494_81300 = G__81352;
chunk__80498_81301 = G__81353;
count__80499_81302 = G__81354;
i__80500_81303 = G__81355;
continue;
} else {
var G__81356 = seq__80494_81300;
var G__81357 = chunk__80498_81301;
var G__81358 = count__80499_81302;
var G__81359 = (i__80500_81303 + (1));
seq__80494_81300 = G__81356;
chunk__80498_81301 = G__81357;
count__80499_81302 = G__81358;
i__80500_81303 = G__81359;
continue;
}
} else {
var G__81360 = seq__80494_81300;
var G__81361 = chunk__80498_81301;
var G__81362 = count__80499_81302;
var G__81363 = (i__80500_81303 + (1));
seq__80494_81300 = G__81360;
chunk__80498_81301 = G__81361;
count__80499_81302 = G__81362;
i__80500_81303 = G__81363;
continue;
}
} else {
var temp__5804__auto___81364__$1 = cljs.core.seq(seq__80494_81300);
if(temp__5804__auto___81364__$1){
var seq__80494_81365__$1 = temp__5804__auto___81364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80494_81365__$1)){
var c__5568__auto___81366 = cljs.core.chunk_first(seq__80494_81365__$1);
var G__81367 = cljs.core.chunk_rest(seq__80494_81365__$1);
var G__81368 = c__5568__auto___81366;
var G__81369 = cljs.core.count(c__5568__auto___81366);
var G__81370 = (0);
seq__80494_81300 = G__81367;
chunk__80498_81301 = G__81368;
count__80499_81302 = G__81369;
i__80500_81303 = G__81370;
continue;
} else {
var node_81373 = cljs.core.first(seq__80494_81365__$1);
if(cljs.core.not(node_81373.shadow$old)){
var path_match_81374 = shadow.cljs.devtools.client.browser.match_paths(node_81373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_81374)){
var new_link_81375 = (function (){var G__80729 = node_81373.cloneNode(true);
G__80729.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_81374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__80729;
})();
(node_81373.shadow$old = true);

(new_link_81375.onload = ((function (seq__80494_81300,chunk__80498_81301,count__80499_81302,i__80500_81303,seq__80006,chunk__80008,count__80009,i__80010,new_link_81375,path_match_81374,node_81373,seq__80494_81365__$1,temp__5804__auto___81364__$1,path,seq__80006__$1,temp__5804__auto__,map__80005,map__80005__$1,msg,updates,reload_info){
return (function (e){
var seq__80732_81376 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__80734_81377 = null;
var count__80735_81378 = (0);
var i__80736_81379 = (0);
while(true){
if((i__80736_81379 < count__80735_81378)){
var map__80869_81380 = chunk__80734_81377.cljs$core$IIndexed$_nth$arity$2(null,i__80736_81379);
var map__80869_81381__$1 = cljs.core.__destructure_map(map__80869_81380);
var task_81382 = map__80869_81381__$1;
var fn_str_81383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869_81381__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869_81381__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81385 = goog.getObjectByName(fn_str_81383,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81384)].join(''));

(fn_obj_81385.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81385.cljs$core$IFn$_invoke$arity$2(path,new_link_81375) : fn_obj_81385.call(null,path,new_link_81375));


var G__81386 = seq__80732_81376;
var G__81387 = chunk__80734_81377;
var G__81388 = count__80735_81378;
var G__81389 = (i__80736_81379 + (1));
seq__80732_81376 = G__81386;
chunk__80734_81377 = G__81387;
count__80735_81378 = G__81388;
i__80736_81379 = G__81389;
continue;
} else {
var temp__5804__auto___81390__$2 = cljs.core.seq(seq__80732_81376);
if(temp__5804__auto___81390__$2){
var seq__80732_81391__$1 = temp__5804__auto___81390__$2;
if(cljs.core.chunked_seq_QMARK_(seq__80732_81391__$1)){
var c__5568__auto___81392 = cljs.core.chunk_first(seq__80732_81391__$1);
var G__81393 = cljs.core.chunk_rest(seq__80732_81391__$1);
var G__81394 = c__5568__auto___81392;
var G__81395 = cljs.core.count(c__5568__auto___81392);
var G__81396 = (0);
seq__80732_81376 = G__81393;
chunk__80734_81377 = G__81394;
count__80735_81378 = G__81395;
i__80736_81379 = G__81396;
continue;
} else {
var map__80888_81397 = cljs.core.first(seq__80732_81391__$1);
var map__80888_81398__$1 = cljs.core.__destructure_map(map__80888_81397);
var task_81399 = map__80888_81398__$1;
var fn_str_81400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888_81398__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_81401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888_81398__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_81402 = goog.getObjectByName(fn_str_81400,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_81401)].join(''));

(fn_obj_81402.cljs$core$IFn$_invoke$arity$2 ? fn_obj_81402.cljs$core$IFn$_invoke$arity$2(path,new_link_81375) : fn_obj_81402.call(null,path,new_link_81375));


var G__81403 = cljs.core.next(seq__80732_81391__$1);
var G__81404 = null;
var G__81405 = (0);
var G__81406 = (0);
seq__80732_81376 = G__81403;
chunk__80734_81377 = G__81404;
count__80735_81378 = G__81405;
i__80736_81379 = G__81406;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_81373);
});})(seq__80494_81300,chunk__80498_81301,count__80499_81302,i__80500_81303,seq__80006,chunk__80008,count__80009,i__80010,new_link_81375,path_match_81374,node_81373,seq__80494_81365__$1,temp__5804__auto___81364__$1,path,seq__80006__$1,temp__5804__auto__,map__80005,map__80005__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_81374], 0));

goog.dom.insertSiblingAfter(new_link_81375,node_81373);


var G__81407 = cljs.core.next(seq__80494_81365__$1);
var G__81408 = null;
var G__81409 = (0);
var G__81410 = (0);
seq__80494_81300 = G__81407;
chunk__80498_81301 = G__81408;
count__80499_81302 = G__81409;
i__80500_81303 = G__81410;
continue;
} else {
var G__81411 = cljs.core.next(seq__80494_81365__$1);
var G__81412 = null;
var G__81413 = (0);
var G__81414 = (0);
seq__80494_81300 = G__81411;
chunk__80498_81301 = G__81412;
count__80499_81302 = G__81413;
i__80500_81303 = G__81414;
continue;
}
} else {
var G__81415 = cljs.core.next(seq__80494_81365__$1);
var G__81416 = null;
var G__81417 = (0);
var G__81418 = (0);
seq__80494_81300 = G__81415;
chunk__80498_81301 = G__81416;
count__80499_81302 = G__81417;
i__80500_81303 = G__81418;
continue;
}
}
} else {
}
}
break;
}


var G__81419 = cljs.core.next(seq__80006__$1);
var G__81420 = null;
var G__81421 = (0);
var G__81422 = (0);
seq__80006 = G__81419;
chunk__80008 = G__81420;
count__80009 = G__81421;
i__80010 = G__81422;
continue;
} else {
var G__81423 = cljs.core.next(seq__80006__$1);
var G__81424 = null;
var G__81425 = (0);
var G__81426 = (0);
seq__80006 = G__81423;
chunk__80008 = G__81424;
count__80009 = G__81425;
i__80010 = G__81426;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__80916){
var map__80917 = p__80916;
var map__80917__$1 = cljs.core.__destructure_map(map__80917);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80917__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__80920,done,error){
var map__80922 = p__80920;
var map__80922__$1 = cljs.core.__destructure_map(map__80922);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80922__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__80945,done,error){
var map__80946 = p__80945;
var map__80946__$1 = cljs.core.__destructure_map(map__80946);
var msg = map__80946__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80946__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__80950){
var map__80951 = p__80950;
var map__80951__$1 = cljs.core.__destructure_map(map__80951);
var src = map__80951__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80951__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__80954 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__80954) : done.call(null,G__80954));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__80955){
var map__80958 = p__80955;
var map__80958__$1 = cljs.core.__destructure_map(map__80958);
var msg__$1 = map__80958__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80958__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e80960){var ex = e80960;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__80968){
var map__80980 = p__80968;
var map__80980__$1 = cljs.core.__destructure_map(map__80980);
var env = map__80980__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80980__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__81003){
var map__81004 = p__81003;
var map__81004__$1 = cljs.core.__destructure_map(map__81004);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81004__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81004__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__81016){
var map__81021 = p__81016;
var map__81021__$1 = cljs.core.__destructure_map(map__81021);
var svc = map__81021__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81021__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
