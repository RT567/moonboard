goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73830 = (function (f,blockable,meta73831){
this.f = f;
this.blockable = blockable;
this.meta73831 = meta73831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73832,meta73831__$1){
var self__ = this;
var _73832__$1 = this;
return (new cljs.core.async.t_cljs$core$async73830(self__.f,self__.blockable,meta73831__$1));
}));

(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73832){
var self__ = this;
var _73832__$1 = this;
return self__.meta73831;
}));

(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async73830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async73830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta73831","meta73831",795875298,null)], null);
}));

(cljs.core.async.t_cljs$core$async73830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73830");

(cljs.core.async.t_cljs$core$async73830.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73830.
 */
cljs.core.async.__GT_t_cljs$core$async73830 = (function cljs$core$async$__GT_t_cljs$core$async73830(f,blockable,meta73831){
return (new cljs.core.async.t_cljs$core$async73830(f,blockable,meta73831));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__73827 = arguments.length;
switch (G__73827) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async73830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__73835 = arguments.length;
switch (G__73835) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__73846 = arguments.length;
switch (G__73846) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__73853 = arguments.length;
switch (G__73853) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_76630 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76630) : fn1.call(null,val_76630));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_76630) : fn1.call(null,val_76630));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__73859 = arguments.length;
switch (G__73859) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___76650 = n;
var x_76651 = (0);
while(true){
if((x_76651 < n__5636__auto___76650)){
(a[x_76651] = x_76651);

var G__76652 = (x_76651 + (1));
x_76651 = G__76652;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73871 = (function (flag,meta73872){
this.flag = flag;
this.meta73872 = meta73872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73873,meta73872__$1){
var self__ = this;
var _73873__$1 = this;
return (new cljs.core.async.t_cljs$core$async73871(self__.flag,meta73872__$1));
}));

(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73873){
var self__ = this;
var _73873__$1 = this;
return self__.meta73872;
}));

(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async73871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta73872","meta73872",313698029,null)], null);
}));

(cljs.core.async.t_cljs$core$async73871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73871");

(cljs.core.async.t_cljs$core$async73871.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73871.
 */
cljs.core.async.__GT_t_cljs$core$async73871 = (function cljs$core$async$__GT_t_cljs$core$async73871(flag,meta73872){
return (new cljs.core.async.t_cljs$core$async73871(flag,meta73872));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async73871(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73885 = (function (flag,cb,meta73886){
this.flag = flag;
this.cb = cb;
this.meta73886 = meta73886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73887,meta73886__$1){
var self__ = this;
var _73887__$1 = this;
return (new cljs.core.async.t_cljs$core$async73885(self__.flag,self__.cb,meta73886__$1));
}));

(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73887){
var self__ = this;
var _73887__$1 = this;
return self__.meta73886;
}));

(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async73885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta73886","meta73886",-515181031,null)], null);
}));

(cljs.core.async.t_cljs$core$async73885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73885");

(cljs.core.async.t_cljs$core$async73885.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async73885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73885.
 */
cljs.core.async.__GT_t_cljs$core$async73885 = (function cljs$core$async$__GT_t_cljs$core$async73885(flag,cb,meta73886){
return (new cljs.core.async.t_cljs$core$async73885(flag,cb,meta73886));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async73885(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73894_SHARP_){
var G__73906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73894_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73906) : fret.call(null,G__73906));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__73895_SHARP_){
var G__73907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73895_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__73907) : fret.call(null,G__73907));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__76702 = (i + (1));
i = G__76702;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___76703 = arguments.length;
var i__5770__auto___76704 = (0);
while(true){
if((i__5770__auto___76704 < len__5769__auto___76703)){
args__5775__auto__.push((arguments[i__5770__auto___76704]));

var G__76705 = (i__5770__auto___76704 + (1));
i__5770__auto___76704 = G__76705;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__73914){
var map__73915 = p__73914;
var map__73915__$1 = cljs.core.__destructure_map(map__73915);
var opts = map__73915__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq73910){
var G__73912 = cljs.core.first(seq73910);
var seq73910__$1 = cljs.core.next(seq73910);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73912,seq73910__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__73935 = arguments.length;
switch (G__73935) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33108__auto___76716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_73970){
var state_val_73971 = (state_73970[(1)]);
if((state_val_73971 === (7))){
var inst_73962 = (state_73970[(2)]);
var state_73970__$1 = state_73970;
var statearr_73978_76720 = state_73970__$1;
(statearr_73978_76720[(2)] = inst_73962);

(statearr_73978_76720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (1))){
var state_73970__$1 = state_73970;
var statearr_73979_76725 = state_73970__$1;
(statearr_73979_76725[(2)] = null);

(statearr_73979_76725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (4))){
var inst_73941 = (state_73970[(7)]);
var inst_73941__$1 = (state_73970[(2)]);
var inst_73942 = (inst_73941__$1 == null);
var state_73970__$1 = (function (){var statearr_73985 = state_73970;
(statearr_73985[(7)] = inst_73941__$1);

return statearr_73985;
})();
if(cljs.core.truth_(inst_73942)){
var statearr_73986_76731 = state_73970__$1;
(statearr_73986_76731[(1)] = (5));

} else {
var statearr_73987_76732 = state_73970__$1;
(statearr_73987_76732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (13))){
var state_73970__$1 = state_73970;
var statearr_73988_76733 = state_73970__$1;
(statearr_73988_76733[(2)] = null);

(statearr_73988_76733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (6))){
var inst_73941 = (state_73970[(7)]);
var state_73970__$1 = state_73970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73970__$1,(11),to,inst_73941);
} else {
if((state_val_73971 === (3))){
var inst_73964 = (state_73970[(2)]);
var state_73970__$1 = state_73970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73970__$1,inst_73964);
} else {
if((state_val_73971 === (12))){
var state_73970__$1 = state_73970;
var statearr_73994_76737 = state_73970__$1;
(statearr_73994_76737[(2)] = null);

(statearr_73994_76737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (2))){
var state_73970__$1 = state_73970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73970__$1,(4),from);
} else {
if((state_val_73971 === (11))){
var inst_73955 = (state_73970[(2)]);
var state_73970__$1 = state_73970;
if(cljs.core.truth_(inst_73955)){
var statearr_73995_76738 = state_73970__$1;
(statearr_73995_76738[(1)] = (12));

} else {
var statearr_74000_76739 = state_73970__$1;
(statearr_74000_76739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (9))){
var state_73970__$1 = state_73970;
var statearr_74001_76740 = state_73970__$1;
(statearr_74001_76740[(2)] = null);

(statearr_74001_76740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (5))){
var state_73970__$1 = state_73970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74002_76741 = state_73970__$1;
(statearr_74002_76741[(1)] = (8));

} else {
var statearr_74003_76746 = state_73970__$1;
(statearr_74003_76746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (14))){
var inst_73960 = (state_73970[(2)]);
var state_73970__$1 = state_73970;
var statearr_74007_76747 = state_73970__$1;
(statearr_74007_76747[(2)] = inst_73960);

(statearr_74007_76747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (10))){
var inst_73952 = (state_73970[(2)]);
var state_73970__$1 = state_73970;
var statearr_74010_76749 = state_73970__$1;
(statearr_74010_76749[(2)] = inst_73952);

(statearr_74010_76749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73971 === (8))){
var inst_73949 = cljs.core.async.close_BANG_(to);
var state_73970__$1 = state_73970;
var statearr_74011_76753 = state_73970__$1;
(statearr_74011_76753[(2)] = inst_73949);

(statearr_74011_76753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_74027 = [null,null,null,null,null,null,null,null];
(statearr_74027[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_74027[(1)] = (1));

return statearr_74027;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_73970){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_73970);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74032){var ex__32948__auto__ = e74032;
var statearr_74037_76756 = state_73970;
(statearr_74037_76756[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_73970[(4)]))){
var statearr_74042_76757 = state_73970;
(statearr_74042_76757[(1)] = cljs.core.first((state_73970[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76760 = state_73970;
state_73970 = G__76760;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_73970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_73970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74046 = f__33109__auto__();
(statearr_74046[(6)] = c__33108__auto___76716);

return statearr_74046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__74053){
var vec__74054 = p__74053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74054,(1),null);
var job = vec__74054;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33108__auto___76767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74061){
var state_val_74062 = (state_74061[(1)]);
if((state_val_74062 === (1))){
var state_74061__$1 = state_74061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74061__$1,(2),res,v);
} else {
if((state_val_74062 === (2))){
var inst_74058 = (state_74061[(2)]);
var inst_74059 = cljs.core.async.close_BANG_(res);
var state_74061__$1 = (function (){var statearr_74067 = state_74061;
(statearr_74067[(7)] = inst_74058);

return statearr_74067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74061__$1,inst_74059);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_74068 = [null,null,null,null,null,null,null,null];
(statearr_74068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__);

(statearr_74068[(1)] = (1));

return statearr_74068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1 = (function (state_74061){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74061);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74073){var ex__32948__auto__ = e74073;
var statearr_74074_76770 = state_74061;
(statearr_74074_76770[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74061[(4)]))){
var statearr_74075_76771 = state_74061;
(statearr_74075_76771[(1)] = cljs.core.first((state_74061[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76773 = state_74061;
state_74061 = G__76773;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = function(state_74061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1.call(this,state_74061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74088 = f__33109__auto__();
(statearr_74088[(6)] = c__33108__auto___76767);

return statearr_74088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__74103){
var vec__74104 = p__74103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74104,(1),null);
var job = vec__74104;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___76779 = n;
var __76781 = (0);
while(true){
if((__76781 < n__5636__auto___76779)){
var G__74109_76783 = type;
var G__74109_76784__$1 = (((G__74109_76783 instanceof cljs.core.Keyword))?G__74109_76783.fqn:null);
switch (G__74109_76784__$1) {
case "compute":
var c__33108__auto___76791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76781,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = ((function (__76781,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function (state_74126){
var state_val_74127 = (state_74126[(1)]);
if((state_val_74127 === (1))){
var state_74126__$1 = state_74126;
var statearr_74129_76796 = state_74126__$1;
(statearr_74129_76796[(2)] = null);

(statearr_74129_76796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74127 === (2))){
var state_74126__$1 = state_74126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74126__$1,(4),jobs);
} else {
if((state_val_74127 === (3))){
var inst_74124 = (state_74126[(2)]);
var state_74126__$1 = state_74126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74126__$1,inst_74124);
} else {
if((state_val_74127 === (4))){
var inst_74113 = (state_74126[(2)]);
var inst_74114 = process__$1(inst_74113);
var state_74126__$1 = state_74126;
if(cljs.core.truth_(inst_74114)){
var statearr_74133_76797 = state_74126__$1;
(statearr_74133_76797[(1)] = (5));

} else {
var statearr_74134_76798 = state_74126__$1;
(statearr_74134_76798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74127 === (5))){
var state_74126__$1 = state_74126;
var statearr_74136_76799 = state_74126__$1;
(statearr_74136_76799[(2)] = null);

(statearr_74136_76799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74127 === (6))){
var state_74126__$1 = state_74126;
var statearr_74138_76800 = state_74126__$1;
(statearr_74138_76800[(2)] = null);

(statearr_74138_76800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74127 === (7))){
var inst_74122 = (state_74126[(2)]);
var state_74126__$1 = state_74126;
var statearr_74139_76801 = state_74126__$1;
(statearr_74139_76801[(2)] = inst_74122);

(statearr_74139_76801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__76781,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
;
return ((function (__76781,switch__32944__auto__,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_74140 = [null,null,null,null,null,null,null];
(statearr_74140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__);

(statearr_74140[(1)] = (1));

return statearr_74140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1 = (function (state_74126){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74126);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74141){var ex__32948__auto__ = e74141;
var statearr_74142_76807 = state_74126;
(statearr_74142_76807[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74126[(4)]))){
var statearr_74143_76810 = state_74126;
(statearr_74143_76810[(1)] = cljs.core.first((state_74126[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76811 = state_74126;
state_74126 = G__76811;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = function(state_74126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1.call(this,state_74126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__;
})()
;})(__76781,switch__32944__auto__,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
})();
var state__33110__auto__ = (function (){var statearr_74146 = f__33109__auto__();
(statearr_74146[(6)] = c__33108__auto___76791);

return statearr_74146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
});})(__76781,c__33108__auto___76791,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
);


break;
case "async":
var c__33108__auto___76814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__76781,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = ((function (__76781,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function (state_74161){
var state_val_74162 = (state_74161[(1)]);
if((state_val_74162 === (1))){
var state_74161__$1 = state_74161;
var statearr_74168_76817 = state_74161__$1;
(statearr_74168_76817[(2)] = null);

(statearr_74168_76817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74162 === (2))){
var state_74161__$1 = state_74161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74161__$1,(4),jobs);
} else {
if((state_val_74162 === (3))){
var inst_74159 = (state_74161[(2)]);
var state_74161__$1 = state_74161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74161__$1,inst_74159);
} else {
if((state_val_74162 === (4))){
var inst_74151 = (state_74161[(2)]);
var inst_74152 = async(inst_74151);
var state_74161__$1 = state_74161;
if(cljs.core.truth_(inst_74152)){
var statearr_74173_76818 = state_74161__$1;
(statearr_74173_76818[(1)] = (5));

} else {
var statearr_74174_76819 = state_74161__$1;
(statearr_74174_76819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74162 === (5))){
var state_74161__$1 = state_74161;
var statearr_74180_76820 = state_74161__$1;
(statearr_74180_76820[(2)] = null);

(statearr_74180_76820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74162 === (6))){
var state_74161__$1 = state_74161;
var statearr_74181_76821 = state_74161__$1;
(statearr_74181_76821[(2)] = null);

(statearr_74181_76821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74162 === (7))){
var inst_74157 = (state_74161[(2)]);
var state_74161__$1 = state_74161;
var statearr_74187_76823 = state_74161__$1;
(statearr_74187_76823[(2)] = inst_74157);

(statearr_74187_76823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__76781,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
;
return ((function (__76781,switch__32944__auto__,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_74197 = [null,null,null,null,null,null,null];
(statearr_74197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__);

(statearr_74197[(1)] = (1));

return statearr_74197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1 = (function (state_74161){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74161);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74202){var ex__32948__auto__ = e74202;
var statearr_74203_76825 = state_74161;
(statearr_74203_76825[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74161[(4)]))){
var statearr_74204_76826 = state_74161;
(statearr_74204_76826[(1)] = cljs.core.first((state_74161[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76827 = state_74161;
state_74161 = G__76827;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = function(state_74161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1.call(this,state_74161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__;
})()
;})(__76781,switch__32944__auto__,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
})();
var state__33110__auto__ = (function (){var statearr_74206 = f__33109__auto__();
(statearr_74206[(6)] = c__33108__auto___76814);

return statearr_74206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
});})(__76781,c__33108__auto___76814,G__74109_76783,G__74109_76784__$1,n__5636__auto___76779,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74109_76784__$1)].join('')));

}

var G__76829 = (__76781 + (1));
__76781 = G__76829;
continue;
} else {
}
break;
}

var c__33108__auto___76830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74233){
var state_val_74234 = (state_74233[(1)]);
if((state_val_74234 === (7))){
var inst_74229 = (state_74233[(2)]);
var state_74233__$1 = state_74233;
var statearr_74235_76831 = state_74233__$1;
(statearr_74235_76831[(2)] = inst_74229);

(statearr_74235_76831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74234 === (1))){
var state_74233__$1 = state_74233;
var statearr_74241_76833 = state_74233__$1;
(statearr_74241_76833[(2)] = null);

(statearr_74241_76833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74234 === (4))){
var inst_74214 = (state_74233[(7)]);
var inst_74214__$1 = (state_74233[(2)]);
var inst_74215 = (inst_74214__$1 == null);
var state_74233__$1 = (function (){var statearr_74258 = state_74233;
(statearr_74258[(7)] = inst_74214__$1);

return statearr_74258;
})();
if(cljs.core.truth_(inst_74215)){
var statearr_74260_76834 = state_74233__$1;
(statearr_74260_76834[(1)] = (5));

} else {
var statearr_74261_76835 = state_74233__$1;
(statearr_74261_76835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74234 === (6))){
var inst_74219 = (state_74233[(8)]);
var inst_74214 = (state_74233[(7)]);
var inst_74219__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_74220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74221 = [inst_74214,inst_74219__$1];
var inst_74222 = (new cljs.core.PersistentVector(null,2,(5),inst_74220,inst_74221,null));
var state_74233__$1 = (function (){var statearr_74272 = state_74233;
(statearr_74272[(8)] = inst_74219__$1);

return statearr_74272;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74233__$1,(8),jobs,inst_74222);
} else {
if((state_val_74234 === (3))){
var inst_74231 = (state_74233[(2)]);
var state_74233__$1 = state_74233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74233__$1,inst_74231);
} else {
if((state_val_74234 === (2))){
var state_74233__$1 = state_74233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74233__$1,(4),from);
} else {
if((state_val_74234 === (9))){
var inst_74226 = (state_74233[(2)]);
var state_74233__$1 = (function (){var statearr_74290 = state_74233;
(statearr_74290[(9)] = inst_74226);

return statearr_74290;
})();
var statearr_74295_76844 = state_74233__$1;
(statearr_74295_76844[(2)] = null);

(statearr_74295_76844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74234 === (5))){
var inst_74217 = cljs.core.async.close_BANG_(jobs);
var state_74233__$1 = state_74233;
var statearr_74303_76848 = state_74233__$1;
(statearr_74303_76848[(2)] = inst_74217);

(statearr_74303_76848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74234 === (8))){
var inst_74219 = (state_74233[(8)]);
var inst_74224 = (state_74233[(2)]);
var state_74233__$1 = (function (){var statearr_74324 = state_74233;
(statearr_74324[(10)] = inst_74224);

return statearr_74324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74233__$1,(9),results,inst_74219);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_74337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__);

(statearr_74337[(1)] = (1));

return statearr_74337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1 = (function (state_74233){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74233);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74338){var ex__32948__auto__ = e74338;
var statearr_74343_76854 = state_74233;
(statearr_74343_76854[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74233[(4)]))){
var statearr_74346_76856 = state_74233;
(statearr_74346_76856[(1)] = cljs.core.first((state_74233[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76858 = state_74233;
state_74233 = G__76858;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = function(state_74233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1.call(this,state_74233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74349 = f__33109__auto__();
(statearr_74349[(6)] = c__33108__auto___76830);

return statearr_74349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


var c__33108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74390){
var state_val_74391 = (state_74390[(1)]);
if((state_val_74391 === (7))){
var inst_74386 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
var statearr_74410_76864 = state_74390__$1;
(statearr_74410_76864[(2)] = inst_74386);

(statearr_74410_76864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (20))){
var state_74390__$1 = state_74390;
var statearr_74416_76865 = state_74390__$1;
(statearr_74416_76865[(2)] = null);

(statearr_74416_76865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (1))){
var state_74390__$1 = state_74390;
var statearr_74422_76866 = state_74390__$1;
(statearr_74422_76866[(2)] = null);

(statearr_74422_76866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (4))){
var inst_74355 = (state_74390[(7)]);
var inst_74355__$1 = (state_74390[(2)]);
var inst_74356 = (inst_74355__$1 == null);
var state_74390__$1 = (function (){var statearr_74425 = state_74390;
(statearr_74425[(7)] = inst_74355__$1);

return statearr_74425;
})();
if(cljs.core.truth_(inst_74356)){
var statearr_74426_76870 = state_74390__$1;
(statearr_74426_76870[(1)] = (5));

} else {
var statearr_74427_76871 = state_74390__$1;
(statearr_74427_76871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (15))){
var inst_74368 = (state_74390[(8)]);
var state_74390__$1 = state_74390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74390__$1,(18),to,inst_74368);
} else {
if((state_val_74391 === (21))){
var inst_74381 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
var statearr_74440_76872 = state_74390__$1;
(statearr_74440_76872[(2)] = inst_74381);

(statearr_74440_76872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (13))){
var inst_74383 = (state_74390[(2)]);
var state_74390__$1 = (function (){var statearr_74450 = state_74390;
(statearr_74450[(9)] = inst_74383);

return statearr_74450;
})();
var statearr_74451_76873 = state_74390__$1;
(statearr_74451_76873[(2)] = null);

(statearr_74451_76873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (6))){
var inst_74355 = (state_74390[(7)]);
var state_74390__$1 = state_74390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74390__$1,(11),inst_74355);
} else {
if((state_val_74391 === (17))){
var inst_74376 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
if(cljs.core.truth_(inst_74376)){
var statearr_74456_76874 = state_74390__$1;
(statearr_74456_76874[(1)] = (19));

} else {
var statearr_74459_76879 = state_74390__$1;
(statearr_74459_76879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (3))){
var inst_74388 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74390__$1,inst_74388);
} else {
if((state_val_74391 === (12))){
var inst_74365 = (state_74390[(10)]);
var state_74390__$1 = state_74390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74390__$1,(14),inst_74365);
} else {
if((state_val_74391 === (2))){
var state_74390__$1 = state_74390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74390__$1,(4),results);
} else {
if((state_val_74391 === (19))){
var state_74390__$1 = state_74390;
var statearr_74482_76883 = state_74390__$1;
(statearr_74482_76883[(2)] = null);

(statearr_74482_76883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (11))){
var inst_74365 = (state_74390[(2)]);
var state_74390__$1 = (function (){var statearr_74483 = state_74390;
(statearr_74483[(10)] = inst_74365);

return statearr_74483;
})();
var statearr_74484_76884 = state_74390__$1;
(statearr_74484_76884[(2)] = null);

(statearr_74484_76884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (9))){
var state_74390__$1 = state_74390;
var statearr_74488_76885 = state_74390__$1;
(statearr_74488_76885[(2)] = null);

(statearr_74488_76885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (5))){
var state_74390__$1 = state_74390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74489_76886 = state_74390__$1;
(statearr_74489_76886[(1)] = (8));

} else {
var statearr_74490_76887 = state_74390__$1;
(statearr_74490_76887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (14))){
var inst_74370 = (state_74390[(11)]);
var inst_74368 = (state_74390[(8)]);
var inst_74368__$1 = (state_74390[(2)]);
var inst_74369 = (inst_74368__$1 == null);
var inst_74370__$1 = cljs.core.not(inst_74369);
var state_74390__$1 = (function (){var statearr_74496 = state_74390;
(statearr_74496[(11)] = inst_74370__$1);

(statearr_74496[(8)] = inst_74368__$1);

return statearr_74496;
})();
if(inst_74370__$1){
var statearr_74498_76888 = state_74390__$1;
(statearr_74498_76888[(1)] = (15));

} else {
var statearr_74502_76890 = state_74390__$1;
(statearr_74502_76890[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (16))){
var inst_74370 = (state_74390[(11)]);
var state_74390__$1 = state_74390;
var statearr_74503_76893 = state_74390__$1;
(statearr_74503_76893[(2)] = inst_74370);

(statearr_74503_76893[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (10))){
var inst_74362 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
var statearr_74504_76894 = state_74390__$1;
(statearr_74504_76894[(2)] = inst_74362);

(statearr_74504_76894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (18))){
var inst_74373 = (state_74390[(2)]);
var state_74390__$1 = state_74390;
var statearr_74505_76895 = state_74390__$1;
(statearr_74505_76895[(2)] = inst_74373);

(statearr_74505_76895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74391 === (8))){
var inst_74359 = cljs.core.async.close_BANG_(to);
var state_74390__$1 = state_74390;
var statearr_74510_76896 = state_74390__$1;
(statearr_74510_76896[(2)] = inst_74359);

(statearr_74510_76896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_74514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__);

(statearr_74514[(1)] = (1));

return statearr_74514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1 = (function (state_74390){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74390);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74515){var ex__32948__auto__ = e74515;
var statearr_74516_76900 = state_74390;
(statearr_74516_76900[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74390[(4)]))){
var statearr_74517_76901 = state_74390;
(statearr_74517_76901[(1)] = cljs.core.first((state_74390[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76905 = state_74390;
state_74390 = G__76905;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__ = function(state_74390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1.call(this,state_74390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74521 = f__33109__auto__();
(statearr_74521[(6)] = c__33108__auto__);

return statearr_74521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

return c__33108__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__74539 = arguments.length;
switch (G__74539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__74544 = arguments.length;
switch (G__74544) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__74550 = arguments.length;
switch (G__74550) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33108__auto___76911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74602){
var state_val_74603 = (state_74602[(1)]);
if((state_val_74603 === (7))){
var inst_74598 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74606_76912 = state_74602__$1;
(statearr_74606_76912[(2)] = inst_74598);

(statearr_74606_76912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (1))){
var state_74602__$1 = state_74602;
var statearr_74611_76913 = state_74602__$1;
(statearr_74611_76913[(2)] = null);

(statearr_74611_76913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (4))){
var inst_74575 = (state_74602[(7)]);
var inst_74575__$1 = (state_74602[(2)]);
var inst_74580 = (inst_74575__$1 == null);
var state_74602__$1 = (function (){var statearr_74612 = state_74602;
(statearr_74612[(7)] = inst_74575__$1);

return statearr_74612;
})();
if(cljs.core.truth_(inst_74580)){
var statearr_74613_76914 = state_74602__$1;
(statearr_74613_76914[(1)] = (5));

} else {
var statearr_74614_76915 = state_74602__$1;
(statearr_74614_76915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (13))){
var state_74602__$1 = state_74602;
var statearr_74615_76918 = state_74602__$1;
(statearr_74615_76918[(2)] = null);

(statearr_74615_76918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (6))){
var inst_74575 = (state_74602[(7)]);
var inst_74585 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74575) : p.call(null,inst_74575));
var state_74602__$1 = state_74602;
if(cljs.core.truth_(inst_74585)){
var statearr_74616_76920 = state_74602__$1;
(statearr_74616_76920[(1)] = (9));

} else {
var statearr_74617_76921 = state_74602__$1;
(statearr_74617_76921[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (3))){
var inst_74600 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74602__$1,inst_74600);
} else {
if((state_val_74603 === (12))){
var state_74602__$1 = state_74602;
var statearr_74620_76922 = state_74602__$1;
(statearr_74620_76922[(2)] = null);

(statearr_74620_76922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (2))){
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74602__$1,(4),ch);
} else {
if((state_val_74603 === (11))){
var inst_74575 = (state_74602[(7)]);
var inst_74589 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74602__$1,(8),inst_74589,inst_74575);
} else {
if((state_val_74603 === (9))){
var state_74602__$1 = state_74602;
var statearr_74621_76923 = state_74602__$1;
(statearr_74621_76923[(2)] = tc);

(statearr_74621_76923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (5))){
var inst_74582 = cljs.core.async.close_BANG_(tc);
var inst_74583 = cljs.core.async.close_BANG_(fc);
var state_74602__$1 = (function (){var statearr_74622 = state_74602;
(statearr_74622[(8)] = inst_74582);

return statearr_74622;
})();
var statearr_74623_76924 = state_74602__$1;
(statearr_74623_76924[(2)] = inst_74583);

(statearr_74623_76924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (14))){
var inst_74596 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
var statearr_74628_76927 = state_74602__$1;
(statearr_74628_76927[(2)] = inst_74596);

(statearr_74628_76927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (10))){
var state_74602__$1 = state_74602;
var statearr_74629_76929 = state_74602__$1;
(statearr_74629_76929[(2)] = fc);

(statearr_74629_76929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (8))){
var inst_74591 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
if(cljs.core.truth_(inst_74591)){
var statearr_74634_76930 = state_74602__$1;
(statearr_74634_76930[(1)] = (12));

} else {
var statearr_74635_76931 = state_74602__$1;
(statearr_74635_76931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_74639 = [null,null,null,null,null,null,null,null,null];
(statearr_74639[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_74639[(1)] = (1));

return statearr_74639;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_74602){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74602);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74641){var ex__32948__auto__ = e74641;
var statearr_74642_76933 = state_74602;
(statearr_74642_76933[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74602[(4)]))){
var statearr_74643_76934 = state_74602;
(statearr_74643_76934[(1)] = cljs.core.first((state_74602[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76935 = state_74602;
state_74602 = G__76935;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_74602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_74602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74645 = f__33109__auto__();
(statearr_74645[(6)] = c__33108__auto___76911);

return statearr_74645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74670){
var state_val_74671 = (state_74670[(1)]);
if((state_val_74671 === (7))){
var inst_74666 = (state_74670[(2)]);
var state_74670__$1 = state_74670;
var statearr_74674_76940 = state_74670__$1;
(statearr_74674_76940[(2)] = inst_74666);

(statearr_74674_76940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (1))){
var inst_74647 = init;
var inst_74648 = inst_74647;
var state_74670__$1 = (function (){var statearr_74675 = state_74670;
(statearr_74675[(7)] = inst_74648);

return statearr_74675;
})();
var statearr_74676_76945 = state_74670__$1;
(statearr_74676_76945[(2)] = null);

(statearr_74676_76945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (4))){
var inst_74652 = (state_74670[(8)]);
var inst_74652__$1 = (state_74670[(2)]);
var inst_74654 = (inst_74652__$1 == null);
var state_74670__$1 = (function (){var statearr_74679 = state_74670;
(statearr_74679[(8)] = inst_74652__$1);

return statearr_74679;
})();
if(cljs.core.truth_(inst_74654)){
var statearr_74680_76946 = state_74670__$1;
(statearr_74680_76946[(1)] = (5));

} else {
var statearr_74681_76947 = state_74670__$1;
(statearr_74681_76947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (6))){
var inst_74648 = (state_74670[(7)]);
var inst_74657 = (state_74670[(9)]);
var inst_74652 = (state_74670[(8)]);
var inst_74657__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_74648,inst_74652) : f.call(null,inst_74648,inst_74652));
var inst_74658 = cljs.core.reduced_QMARK_(inst_74657__$1);
var state_74670__$1 = (function (){var statearr_74684 = state_74670;
(statearr_74684[(9)] = inst_74657__$1);

return statearr_74684;
})();
if(inst_74658){
var statearr_74685_76950 = state_74670__$1;
(statearr_74685_76950[(1)] = (8));

} else {
var statearr_74686_76951 = state_74670__$1;
(statearr_74686_76951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (3))){
var inst_74668 = (state_74670[(2)]);
var state_74670__$1 = state_74670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74670__$1,inst_74668);
} else {
if((state_val_74671 === (2))){
var state_74670__$1 = state_74670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74670__$1,(4),ch);
} else {
if((state_val_74671 === (9))){
var inst_74657 = (state_74670[(9)]);
var inst_74648 = inst_74657;
var state_74670__$1 = (function (){var statearr_74689 = state_74670;
(statearr_74689[(7)] = inst_74648);

return statearr_74689;
})();
var statearr_74690_76955 = state_74670__$1;
(statearr_74690_76955[(2)] = null);

(statearr_74690_76955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (5))){
var inst_74648 = (state_74670[(7)]);
var state_74670__$1 = state_74670;
var statearr_74691_76956 = state_74670__$1;
(statearr_74691_76956[(2)] = inst_74648);

(statearr_74691_76956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (10))){
var inst_74664 = (state_74670[(2)]);
var state_74670__$1 = state_74670;
var statearr_74692_76957 = state_74670__$1;
(statearr_74692_76957[(2)] = inst_74664);

(statearr_74692_76957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74671 === (8))){
var inst_74657 = (state_74670[(9)]);
var inst_74660 = cljs.core.deref(inst_74657);
var state_74670__$1 = state_74670;
var statearr_74693_76959 = state_74670__$1;
(statearr_74693_76959[(2)] = inst_74660);

(statearr_74693_76959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32945__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32945__auto____0 = (function (){
var statearr_74694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74694[(0)] = cljs$core$async$reduce_$_state_machine__32945__auto__);

(statearr_74694[(1)] = (1));

return statearr_74694;
});
var cljs$core$async$reduce_$_state_machine__32945__auto____1 = (function (state_74670){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74670);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74695){var ex__32948__auto__ = e74695;
var statearr_74696_76960 = state_74670;
(statearr_74696_76960[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74670[(4)]))){
var statearr_74697_76965 = state_74670;
(statearr_74697_76965[(1)] = cljs.core.first((state_74670[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76966 = state_74670;
state_74670 = G__76966;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32945__auto__ = function(state_74670){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32945__auto____1.call(this,state_74670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32945__auto____0;
cljs$core$async$reduce_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32945__auto____1;
return cljs$core$async$reduce_$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74698 = f__33109__auto__();
(statearr_74698[(6)] = c__33108__auto__);

return statearr_74698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

return c__33108__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74704){
var state_val_74705 = (state_74704[(1)]);
if((state_val_74705 === (1))){
var inst_74699 = cljs.core.async.reduce(f__$1,init,ch);
var state_74704__$1 = state_74704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74704__$1,(2),inst_74699);
} else {
if((state_val_74705 === (2))){
var inst_74701 = (state_74704[(2)]);
var inst_74702 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_74701) : f__$1.call(null,inst_74701));
var state_74704__$1 = state_74704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74704__$1,inst_74702);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32945__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32945__auto____0 = (function (){
var statearr_74707 = [null,null,null,null,null,null,null];
(statearr_74707[(0)] = cljs$core$async$transduce_$_state_machine__32945__auto__);

(statearr_74707[(1)] = (1));

return statearr_74707;
});
var cljs$core$async$transduce_$_state_machine__32945__auto____1 = (function (state_74704){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74704);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74709){var ex__32948__auto__ = e74709;
var statearr_74710_76972 = state_74704;
(statearr_74710_76972[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74704[(4)]))){
var statearr_74711_76973 = state_74704;
(statearr_74711_76973[(1)] = cljs.core.first((state_74704[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76974 = state_74704;
state_74704 = G__76974;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32945__auto__ = function(state_74704){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32945__auto____1.call(this,state_74704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32945__auto____0;
cljs$core$async$transduce_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32945__auto____1;
return cljs$core$async$transduce_$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74714 = f__33109__auto__();
(statearr_74714[(6)] = c__33108__auto__);

return statearr_74714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

return c__33108__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__74722 = arguments.length;
switch (G__74722) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_74750){
var state_val_74751 = (state_74750[(1)]);
if((state_val_74751 === (7))){
var inst_74729 = (state_74750[(2)]);
var state_74750__$1 = state_74750;
var statearr_74756_76985 = state_74750__$1;
(statearr_74756_76985[(2)] = inst_74729);

(statearr_74756_76985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (1))){
var inst_74723 = cljs.core.seq(coll);
var inst_74724 = inst_74723;
var state_74750__$1 = (function (){var statearr_74757 = state_74750;
(statearr_74757[(7)] = inst_74724);

return statearr_74757;
})();
var statearr_74758_76987 = state_74750__$1;
(statearr_74758_76987[(2)] = null);

(statearr_74758_76987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (4))){
var inst_74724 = (state_74750[(7)]);
var inst_74727 = cljs.core.first(inst_74724);
var state_74750__$1 = state_74750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74750__$1,(7),ch,inst_74727);
} else {
if((state_val_74751 === (13))){
var inst_74741 = (state_74750[(2)]);
var state_74750__$1 = state_74750;
var statearr_74761_76996 = state_74750__$1;
(statearr_74761_76996[(2)] = inst_74741);

(statearr_74761_76996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (6))){
var inst_74732 = (state_74750[(2)]);
var state_74750__$1 = state_74750;
if(cljs.core.truth_(inst_74732)){
var statearr_74762_76997 = state_74750__$1;
(statearr_74762_76997[(1)] = (8));

} else {
var statearr_74763_77001 = state_74750__$1;
(statearr_74763_77001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (3))){
var inst_74745 = (state_74750[(2)]);
var state_74750__$1 = state_74750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74750__$1,inst_74745);
} else {
if((state_val_74751 === (12))){
var state_74750__$1 = state_74750;
var statearr_74764_77002 = state_74750__$1;
(statearr_74764_77002[(2)] = null);

(statearr_74764_77002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (2))){
var inst_74724 = (state_74750[(7)]);
var state_74750__$1 = state_74750;
if(cljs.core.truth_(inst_74724)){
var statearr_74765_77006 = state_74750__$1;
(statearr_74765_77006[(1)] = (4));

} else {
var statearr_74766_77007 = state_74750__$1;
(statearr_74766_77007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (11))){
var inst_74738 = cljs.core.async.close_BANG_(ch);
var state_74750__$1 = state_74750;
var statearr_74767_77013 = state_74750__$1;
(statearr_74767_77013[(2)] = inst_74738);

(statearr_74767_77013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (9))){
var state_74750__$1 = state_74750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74768_77014 = state_74750__$1;
(statearr_74768_77014[(1)] = (11));

} else {
var statearr_74769_77015 = state_74750__$1;
(statearr_74769_77015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (5))){
var inst_74724 = (state_74750[(7)]);
var state_74750__$1 = state_74750;
var statearr_74770_77016 = state_74750__$1;
(statearr_74770_77016[(2)] = inst_74724);

(statearr_74770_77016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (10))){
var inst_74743 = (state_74750[(2)]);
var state_74750__$1 = state_74750;
var statearr_74771_77017 = state_74750__$1;
(statearr_74771_77017[(2)] = inst_74743);

(statearr_74771_77017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74751 === (8))){
var inst_74724 = (state_74750[(7)]);
var inst_74734 = cljs.core.next(inst_74724);
var inst_74724__$1 = inst_74734;
var state_74750__$1 = (function (){var statearr_74772 = state_74750;
(statearr_74772[(7)] = inst_74724__$1);

return statearr_74772;
})();
var statearr_74773_77023 = state_74750__$1;
(statearr_74773_77023[(2)] = null);

(statearr_74773_77023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_74777 = [null,null,null,null,null,null,null,null];
(statearr_74777[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_74777[(1)] = (1));

return statearr_74777;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_74750){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_74750);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e74778){var ex__32948__auto__ = e74778;
var statearr_74779_77030 = state_74750;
(statearr_74779_77030[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_74750[(4)]))){
var statearr_74780_77033 = state_74750;
(statearr_74780_77033[(1)] = cljs.core.first((state_74750[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77038 = state_74750;
state_74750 = G__77038;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_74750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_74750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_74782 = f__33109__auto__();
(statearr_74782[(6)] = c__33108__auto__);

return statearr_74782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

return c__33108__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__74801 = arguments.length;
switch (G__74801) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_77042 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_77042(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_77045 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_77045(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_77056 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_77056(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_77058 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_77058(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74871 = (function (ch,cs,meta74872){
this.ch = ch;
this.cs = cs;
this.meta74872 = meta74872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74873,meta74872__$1){
var self__ = this;
var _74873__$1 = this;
return (new cljs.core.async.t_cljs$core$async74871(self__.ch,self__.cs,meta74872__$1));
}));

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74873){
var self__ = this;
var _74873__$1 = this;
return self__.meta74872;
}));

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async74871.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async74871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta74872","meta74872",-300208613,null)], null);
}));

(cljs.core.async.t_cljs$core$async74871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74871");

(cljs.core.async.t_cljs$core$async74871.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async74871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74871.
 */
cljs.core.async.__GT_t_cljs$core$async74871 = (function cljs$core$async$__GT_t_cljs$core$async74871(ch,cs,meta74872){
return (new cljs.core.async.t_cljs$core$async74871(ch,cs,meta74872));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async74871(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33108__auto___77070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75029){
var state_val_75030 = (state_75029[(1)]);
if((state_val_75030 === (7))){
var inst_75025 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75031_77071 = state_75029__$1;
(statearr_75031_77071[(2)] = inst_75025);

(statearr_75031_77071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (20))){
var inst_74929 = (state_75029[(7)]);
var inst_74941 = cljs.core.first(inst_74929);
var inst_74942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74941,(0),null);
var inst_74943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74941,(1),null);
var state_75029__$1 = (function (){var statearr_75033 = state_75029;
(statearr_75033[(8)] = inst_74942);

return statearr_75033;
})();
if(cljs.core.truth_(inst_74943)){
var statearr_75034_77073 = state_75029__$1;
(statearr_75034_77073[(1)] = (22));

} else {
var statearr_75035_77074 = state_75029__$1;
(statearr_75035_77074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (27))){
var inst_74973 = (state_75029[(9)]);
var inst_74898 = (state_75029[(10)]);
var inst_74978 = (state_75029[(11)]);
var inst_74971 = (state_75029[(12)]);
var inst_74978__$1 = cljs.core._nth(inst_74971,inst_74973);
var inst_74979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74978__$1,inst_74898,done);
var state_75029__$1 = (function (){var statearr_75040 = state_75029;
(statearr_75040[(11)] = inst_74978__$1);

return statearr_75040;
})();
if(cljs.core.truth_(inst_74979)){
var statearr_75041_77075 = state_75029__$1;
(statearr_75041_77075[(1)] = (30));

} else {
var statearr_75042_77076 = state_75029__$1;
(statearr_75042_77076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (1))){
var state_75029__$1 = state_75029;
var statearr_75045_77077 = state_75029__$1;
(statearr_75045_77077[(2)] = null);

(statearr_75045_77077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (24))){
var inst_74929 = (state_75029[(7)]);
var inst_74948 = (state_75029[(2)]);
var inst_74949 = cljs.core.next(inst_74929);
var inst_74907 = inst_74949;
var inst_74908 = null;
var inst_74909 = (0);
var inst_74910 = (0);
var state_75029__$1 = (function (){var statearr_75050 = state_75029;
(statearr_75050[(13)] = inst_74910);

(statearr_75050[(14)] = inst_74907);

(statearr_75050[(15)] = inst_74908);

(statearr_75050[(16)] = inst_74948);

(statearr_75050[(17)] = inst_74909);

return statearr_75050;
})();
var statearr_75055_77078 = state_75029__$1;
(statearr_75055_77078[(2)] = null);

(statearr_75055_77078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (39))){
var state_75029__$1 = state_75029;
var statearr_75062_77085 = state_75029__$1;
(statearr_75062_77085[(2)] = null);

(statearr_75062_77085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (4))){
var inst_74898 = (state_75029[(10)]);
var inst_74898__$1 = (state_75029[(2)]);
var inst_74899 = (inst_74898__$1 == null);
var state_75029__$1 = (function (){var statearr_75066 = state_75029;
(statearr_75066[(10)] = inst_74898__$1);

return statearr_75066;
})();
if(cljs.core.truth_(inst_74899)){
var statearr_75068_77086 = state_75029__$1;
(statearr_75068_77086[(1)] = (5));

} else {
var statearr_75069_77087 = state_75029__$1;
(statearr_75069_77087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (15))){
var inst_74910 = (state_75029[(13)]);
var inst_74907 = (state_75029[(14)]);
var inst_74908 = (state_75029[(15)]);
var inst_74909 = (state_75029[(17)]);
var inst_74925 = (state_75029[(2)]);
var inst_74926 = (inst_74910 + (1));
var tmp75057 = inst_74907;
var tmp75058 = inst_74908;
var tmp75059 = inst_74909;
var inst_74907__$1 = tmp75057;
var inst_74908__$1 = tmp75058;
var inst_74909__$1 = tmp75059;
var inst_74910__$1 = inst_74926;
var state_75029__$1 = (function (){var statearr_75078 = state_75029;
(statearr_75078[(13)] = inst_74910__$1);

(statearr_75078[(14)] = inst_74907__$1);

(statearr_75078[(15)] = inst_74908__$1);

(statearr_75078[(18)] = inst_74925);

(statearr_75078[(17)] = inst_74909__$1);

return statearr_75078;
})();
var statearr_75079_77094 = state_75029__$1;
(statearr_75079_77094[(2)] = null);

(statearr_75079_77094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (21))){
var inst_74952 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75083_77095 = state_75029__$1;
(statearr_75083_77095[(2)] = inst_74952);

(statearr_75083_77095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (31))){
var inst_74978 = (state_75029[(11)]);
var inst_74982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74978);
var state_75029__$1 = state_75029;
var statearr_75084_77096 = state_75029__$1;
(statearr_75084_77096[(2)] = inst_74982);

(statearr_75084_77096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (32))){
var inst_74973 = (state_75029[(9)]);
var inst_74970 = (state_75029[(19)]);
var inst_74971 = (state_75029[(12)]);
var inst_74972 = (state_75029[(20)]);
var inst_74984 = (state_75029[(2)]);
var inst_74985 = (inst_74973 + (1));
var tmp75080 = inst_74970;
var tmp75081 = inst_74971;
var tmp75082 = inst_74972;
var inst_74970__$1 = tmp75080;
var inst_74971__$1 = tmp75081;
var inst_74972__$1 = tmp75082;
var inst_74973__$1 = inst_74985;
var state_75029__$1 = (function (){var statearr_75097 = state_75029;
(statearr_75097[(9)] = inst_74973__$1);

(statearr_75097[(19)] = inst_74970__$1);

(statearr_75097[(12)] = inst_74971__$1);

(statearr_75097[(21)] = inst_74984);

(statearr_75097[(20)] = inst_74972__$1);

return statearr_75097;
})();
var statearr_75098_77100 = state_75029__$1;
(statearr_75098_77100[(2)] = null);

(statearr_75098_77100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (40))){
var inst_74997 = (state_75029[(22)]);
var inst_75002 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_74997);
var state_75029__$1 = state_75029;
var statearr_75101_77101 = state_75029__$1;
(statearr_75101_77101[(2)] = inst_75002);

(statearr_75101_77101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (33))){
var inst_74988 = (state_75029[(23)]);
var inst_74990 = cljs.core.chunked_seq_QMARK_(inst_74988);
var state_75029__$1 = state_75029;
if(inst_74990){
var statearr_75102_77102 = state_75029__$1;
(statearr_75102_77102[(1)] = (36));

} else {
var statearr_75103_77103 = state_75029__$1;
(statearr_75103_77103[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (13))){
var inst_74919 = (state_75029[(24)]);
var inst_74922 = cljs.core.async.close_BANG_(inst_74919);
var state_75029__$1 = state_75029;
var statearr_75107_77104 = state_75029__$1;
(statearr_75107_77104[(2)] = inst_74922);

(statearr_75107_77104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (22))){
var inst_74942 = (state_75029[(8)]);
var inst_74945 = cljs.core.async.close_BANG_(inst_74942);
var state_75029__$1 = state_75029;
var statearr_75110_77109 = state_75029__$1;
(statearr_75110_77109[(2)] = inst_74945);

(statearr_75110_77109[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (36))){
var inst_74988 = (state_75029[(23)]);
var inst_74992 = cljs.core.chunk_first(inst_74988);
var inst_74993 = cljs.core.chunk_rest(inst_74988);
var inst_74994 = cljs.core.count(inst_74992);
var inst_74970 = inst_74993;
var inst_74971 = inst_74992;
var inst_74972 = inst_74994;
var inst_74973 = (0);
var state_75029__$1 = (function (){var statearr_75115 = state_75029;
(statearr_75115[(9)] = inst_74973);

(statearr_75115[(19)] = inst_74970);

(statearr_75115[(12)] = inst_74971);

(statearr_75115[(20)] = inst_74972);

return statearr_75115;
})();
var statearr_75119_77111 = state_75029__$1;
(statearr_75119_77111[(2)] = null);

(statearr_75119_77111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (41))){
var inst_74988 = (state_75029[(23)]);
var inst_75004 = (state_75029[(2)]);
var inst_75005 = cljs.core.next(inst_74988);
var inst_74970 = inst_75005;
var inst_74971 = null;
var inst_74972 = (0);
var inst_74973 = (0);
var state_75029__$1 = (function (){var statearr_75126 = state_75029;
(statearr_75126[(9)] = inst_74973);

(statearr_75126[(25)] = inst_75004);

(statearr_75126[(19)] = inst_74970);

(statearr_75126[(12)] = inst_74971);

(statearr_75126[(20)] = inst_74972);

return statearr_75126;
})();
var statearr_75128_77115 = state_75029__$1;
(statearr_75128_77115[(2)] = null);

(statearr_75128_77115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (43))){
var state_75029__$1 = state_75029;
var statearr_75129_77122 = state_75029__$1;
(statearr_75129_77122[(2)] = null);

(statearr_75129_77122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (29))){
var inst_75013 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75131_77123 = state_75029__$1;
(statearr_75131_77123[(2)] = inst_75013);

(statearr_75131_77123[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (44))){
var inst_75022 = (state_75029[(2)]);
var state_75029__$1 = (function (){var statearr_75135 = state_75029;
(statearr_75135[(26)] = inst_75022);

return statearr_75135;
})();
var statearr_75136_77124 = state_75029__$1;
(statearr_75136_77124[(2)] = null);

(statearr_75136_77124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (6))){
var inst_74962 = (state_75029[(27)]);
var inst_74961 = cljs.core.deref(cs);
var inst_74962__$1 = cljs.core.keys(inst_74961);
var inst_74963 = cljs.core.count(inst_74962__$1);
var inst_74964 = cljs.core.reset_BANG_(dctr,inst_74963);
var inst_74969 = cljs.core.seq(inst_74962__$1);
var inst_74970 = inst_74969;
var inst_74971 = null;
var inst_74972 = (0);
var inst_74973 = (0);
var state_75029__$1 = (function (){var statearr_75138 = state_75029;
(statearr_75138[(9)] = inst_74973);

(statearr_75138[(28)] = inst_74964);

(statearr_75138[(19)] = inst_74970);

(statearr_75138[(12)] = inst_74971);

(statearr_75138[(27)] = inst_74962__$1);

(statearr_75138[(20)] = inst_74972);

return statearr_75138;
})();
var statearr_75139_77125 = state_75029__$1;
(statearr_75139_77125[(2)] = null);

(statearr_75139_77125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (28))){
var inst_74970 = (state_75029[(19)]);
var inst_74988 = (state_75029[(23)]);
var inst_74988__$1 = cljs.core.seq(inst_74970);
var state_75029__$1 = (function (){var statearr_75140 = state_75029;
(statearr_75140[(23)] = inst_74988__$1);

return statearr_75140;
})();
if(inst_74988__$1){
var statearr_75141_77127 = state_75029__$1;
(statearr_75141_77127[(1)] = (33));

} else {
var statearr_75142_77128 = state_75029__$1;
(statearr_75142_77128[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (25))){
var inst_74973 = (state_75029[(9)]);
var inst_74972 = (state_75029[(20)]);
var inst_74975 = (inst_74973 < inst_74972);
var inst_74976 = inst_74975;
var state_75029__$1 = state_75029;
if(cljs.core.truth_(inst_74976)){
var statearr_75143_77129 = state_75029__$1;
(statearr_75143_77129[(1)] = (27));

} else {
var statearr_75144_77130 = state_75029__$1;
(statearr_75144_77130[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (34))){
var state_75029__$1 = state_75029;
var statearr_75145_77134 = state_75029__$1;
(statearr_75145_77134[(2)] = null);

(statearr_75145_77134[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (17))){
var state_75029__$1 = state_75029;
var statearr_75146_77136 = state_75029__$1;
(statearr_75146_77136[(2)] = null);

(statearr_75146_77136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (3))){
var inst_75027 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75029__$1,inst_75027);
} else {
if((state_val_75030 === (12))){
var inst_74957 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75147_77141 = state_75029__$1;
(statearr_75147_77141[(2)] = inst_74957);

(statearr_75147_77141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (2))){
var state_75029__$1 = state_75029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75029__$1,(4),ch);
} else {
if((state_val_75030 === (23))){
var state_75029__$1 = state_75029;
var statearr_75156_77142 = state_75029__$1;
(statearr_75156_77142[(2)] = null);

(statearr_75156_77142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (35))){
var inst_75011 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75157_77144 = state_75029__$1;
(statearr_75157_77144[(2)] = inst_75011);

(statearr_75157_77144[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (19))){
var inst_74929 = (state_75029[(7)]);
var inst_74933 = cljs.core.chunk_first(inst_74929);
var inst_74934 = cljs.core.chunk_rest(inst_74929);
var inst_74935 = cljs.core.count(inst_74933);
var inst_74907 = inst_74934;
var inst_74908 = inst_74933;
var inst_74909 = inst_74935;
var inst_74910 = (0);
var state_75029__$1 = (function (){var statearr_75162 = state_75029;
(statearr_75162[(13)] = inst_74910);

(statearr_75162[(14)] = inst_74907);

(statearr_75162[(15)] = inst_74908);

(statearr_75162[(17)] = inst_74909);

return statearr_75162;
})();
var statearr_75163_77146 = state_75029__$1;
(statearr_75163_77146[(2)] = null);

(statearr_75163_77146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (11))){
var inst_74907 = (state_75029[(14)]);
var inst_74929 = (state_75029[(7)]);
var inst_74929__$1 = cljs.core.seq(inst_74907);
var state_75029__$1 = (function (){var statearr_75164 = state_75029;
(statearr_75164[(7)] = inst_74929__$1);

return statearr_75164;
})();
if(inst_74929__$1){
var statearr_75166_77150 = state_75029__$1;
(statearr_75166_77150[(1)] = (16));

} else {
var statearr_75167_77151 = state_75029__$1;
(statearr_75167_77151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (9))){
var inst_74959 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75168_77152 = state_75029__$1;
(statearr_75168_77152[(2)] = inst_74959);

(statearr_75168_77152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (5))){
var inst_74905 = cljs.core.deref(cs);
var inst_74906 = cljs.core.seq(inst_74905);
var inst_74907 = inst_74906;
var inst_74908 = null;
var inst_74909 = (0);
var inst_74910 = (0);
var state_75029__$1 = (function (){var statearr_75169 = state_75029;
(statearr_75169[(13)] = inst_74910);

(statearr_75169[(14)] = inst_74907);

(statearr_75169[(15)] = inst_74908);

(statearr_75169[(17)] = inst_74909);

return statearr_75169;
})();
var statearr_75170_77154 = state_75029__$1;
(statearr_75170_77154[(2)] = null);

(statearr_75170_77154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (14))){
var state_75029__$1 = state_75029;
var statearr_75171_77155 = state_75029__$1;
(statearr_75171_77155[(2)] = null);

(statearr_75171_77155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (45))){
var inst_75019 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75174_77156 = state_75029__$1;
(statearr_75174_77156[(2)] = inst_75019);

(statearr_75174_77156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (26))){
var inst_74962 = (state_75029[(27)]);
var inst_75015 = (state_75029[(2)]);
var inst_75016 = cljs.core.seq(inst_74962);
var state_75029__$1 = (function (){var statearr_75175 = state_75029;
(statearr_75175[(29)] = inst_75015);

return statearr_75175;
})();
if(inst_75016){
var statearr_75176_77157 = state_75029__$1;
(statearr_75176_77157[(1)] = (42));

} else {
var statearr_75178_77158 = state_75029__$1;
(statearr_75178_77158[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (16))){
var inst_74929 = (state_75029[(7)]);
var inst_74931 = cljs.core.chunked_seq_QMARK_(inst_74929);
var state_75029__$1 = state_75029;
if(inst_74931){
var statearr_75179_77159 = state_75029__$1;
(statearr_75179_77159[(1)] = (19));

} else {
var statearr_75180_77160 = state_75029__$1;
(statearr_75180_77160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (38))){
var inst_75008 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75181_77163 = state_75029__$1;
(statearr_75181_77163[(2)] = inst_75008);

(statearr_75181_77163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (30))){
var state_75029__$1 = state_75029;
var statearr_75183_77167 = state_75029__$1;
(statearr_75183_77167[(2)] = null);

(statearr_75183_77167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (10))){
var inst_74910 = (state_75029[(13)]);
var inst_74908 = (state_75029[(15)]);
var inst_74918 = cljs.core._nth(inst_74908,inst_74910);
var inst_74919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74918,(0),null);
var inst_74920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74918,(1),null);
var state_75029__$1 = (function (){var statearr_75184 = state_75029;
(statearr_75184[(24)] = inst_74919);

return statearr_75184;
})();
if(cljs.core.truth_(inst_74920)){
var statearr_75185_77168 = state_75029__$1;
(statearr_75185_77168[(1)] = (13));

} else {
var statearr_75186_77169 = state_75029__$1;
(statearr_75186_77169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (18))){
var inst_74955 = (state_75029[(2)]);
var state_75029__$1 = state_75029;
var statearr_75187_77173 = state_75029__$1;
(statearr_75187_77173[(2)] = inst_74955);

(statearr_75187_77173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (42))){
var state_75029__$1 = state_75029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75029__$1,(45),dchan);
} else {
if((state_val_75030 === (37))){
var inst_74898 = (state_75029[(10)]);
var inst_74997 = (state_75029[(22)]);
var inst_74988 = (state_75029[(23)]);
var inst_74997__$1 = cljs.core.first(inst_74988);
var inst_74999 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_74997__$1,inst_74898,done);
var state_75029__$1 = (function (){var statearr_75188 = state_75029;
(statearr_75188[(22)] = inst_74997__$1);

return statearr_75188;
})();
if(cljs.core.truth_(inst_74999)){
var statearr_75189_77174 = state_75029__$1;
(statearr_75189_77174[(1)] = (39));

} else {
var statearr_75190_77175 = state_75029__$1;
(statearr_75190_77175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75030 === (8))){
var inst_74910 = (state_75029[(13)]);
var inst_74909 = (state_75029[(17)]);
var inst_74912 = (inst_74910 < inst_74909);
var inst_74913 = inst_74912;
var state_75029__$1 = state_75029;
if(cljs.core.truth_(inst_74913)){
var statearr_75191_77176 = state_75029__$1;
(statearr_75191_77176[(1)] = (10));

} else {
var statearr_75192_77178 = state_75029__$1;
(statearr_75192_77178[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32945__auto__ = null;
var cljs$core$async$mult_$_state_machine__32945__auto____0 = (function (){
var statearr_75193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75193[(0)] = cljs$core$async$mult_$_state_machine__32945__auto__);

(statearr_75193[(1)] = (1));

return statearr_75193;
});
var cljs$core$async$mult_$_state_machine__32945__auto____1 = (function (state_75029){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75029);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75194){var ex__32948__auto__ = e75194;
var statearr_75195_77182 = state_75029;
(statearr_75195_77182[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75029[(4)]))){
var statearr_75196_77183 = state_75029;
(statearr_75196_77183[(1)] = cljs.core.first((state_75029[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77185 = state_75029;
state_75029 = G__77185;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32945__auto__ = function(state_75029){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32945__auto____1.call(this,state_75029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32945__auto____0;
cljs$core$async$mult_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32945__auto____1;
return cljs$core$async$mult_$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75197 = f__33109__auto__();
(statearr_75197[(6)] = c__33108__auto___77070);

return statearr_75197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__75199 = arguments.length;
switch (G__75199) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_77196 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_77196(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_77200 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_77200(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_77205 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_77205(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_77209 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_77209(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_77213 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_77213(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77216 = arguments.length;
var i__5770__auto___77217 = (0);
while(true){
if((i__5770__auto___77217 < len__5769__auto___77216)){
args__5775__auto__.push((arguments[i__5770__auto___77217]));

var G__77218 = (i__5770__auto___77217 + (1));
i__5770__auto___77217 = G__77218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__75219){
var map__75221 = p__75219;
var map__75221__$1 = cljs.core.__destructure_map(map__75221);
var opts = map__75221__$1;
var statearr_75222_77220 = state;
(statearr_75222_77220[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_75223_77222 = state;
(statearr_75223_77222[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_75224_77227 = state;
(statearr_75224_77227[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq75212){
var G__75213 = cljs.core.first(seq75212);
var seq75212__$1 = cljs.core.next(seq75212);
var G__75214 = cljs.core.first(seq75212__$1);
var seq75212__$2 = cljs.core.next(seq75212__$1);
var G__75215 = cljs.core.first(seq75212__$2);
var seq75212__$3 = cljs.core.next(seq75212__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75213,G__75214,G__75215,seq75212__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75241 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75242){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta75242 = meta75242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75243,meta75242__$1){
var self__ = this;
var _75243__$1 = this;
return (new cljs.core.async.t_cljs$core$async75241(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta75242__$1));
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75243){
var self__ = this;
var _75243__$1 = this;
return self__.meta75242;
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta75242","meta75242",-975153312,null)], null);
}));

(cljs.core.async.t_cljs$core$async75241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75241");

(cljs.core.async.t_cljs$core$async75241.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75241.
 */
cljs.core.async.__GT_t_cljs$core$async75241 = (function cljs$core$async$__GT_t_cljs$core$async75241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75242){
return (new cljs.core.async.t_cljs$core$async75241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75242));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async75241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33108__auto___77270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75346){
var state_val_75347 = (state_75346[(1)]);
if((state_val_75347 === (7))){
var inst_75304 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
if(cljs.core.truth_(inst_75304)){
var statearr_75348_77271 = state_75346__$1;
(statearr_75348_77271[(1)] = (8));

} else {
var statearr_75349_77272 = state_75346__$1;
(statearr_75349_77272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (20))){
var inst_75296 = (state_75346[(7)]);
var state_75346__$1 = state_75346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75346__$1,(23),out,inst_75296);
} else {
if((state_val_75347 === (1))){
var inst_75274 = calc_state();
var inst_75277 = cljs.core.__destructure_map(inst_75274);
var inst_75278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75277,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75277,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75277,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_75281 = inst_75274;
var state_75346__$1 = (function (){var statearr_75350 = state_75346;
(statearr_75350[(8)] = inst_75279);

(statearr_75350[(9)] = inst_75281);

(statearr_75350[(10)] = inst_75278);

(statearr_75350[(11)] = inst_75280);

return statearr_75350;
})();
var statearr_75352_77276 = state_75346__$1;
(statearr_75352_77276[(2)] = null);

(statearr_75352_77276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (24))){
var inst_75286 = (state_75346[(12)]);
var inst_75281 = inst_75286;
var state_75346__$1 = (function (){var statearr_75353 = state_75346;
(statearr_75353[(9)] = inst_75281);

return statearr_75353;
})();
var statearr_75354_77280 = state_75346__$1;
(statearr_75354_77280[(2)] = null);

(statearr_75354_77280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (4))){
var inst_75296 = (state_75346[(7)]);
var inst_75298 = (state_75346[(13)]);
var inst_75295 = (state_75346[(2)]);
var inst_75296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75295,(0),null);
var inst_75297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75295,(1),null);
var inst_75298__$1 = (inst_75296__$1 == null);
var state_75346__$1 = (function (){var statearr_75355 = state_75346;
(statearr_75355[(7)] = inst_75296__$1);

(statearr_75355[(13)] = inst_75298__$1);

(statearr_75355[(14)] = inst_75297);

return statearr_75355;
})();
if(cljs.core.truth_(inst_75298__$1)){
var statearr_75356_77285 = state_75346__$1;
(statearr_75356_77285[(1)] = (5));

} else {
var statearr_75357_77286 = state_75346__$1;
(statearr_75357_77286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (15))){
var inst_75288 = (state_75346[(15)]);
var inst_75319 = (state_75346[(16)]);
var inst_75319__$1 = cljs.core.empty_QMARK_(inst_75288);
var state_75346__$1 = (function (){var statearr_75358 = state_75346;
(statearr_75358[(16)] = inst_75319__$1);

return statearr_75358;
})();
if(inst_75319__$1){
var statearr_75359_77288 = state_75346__$1;
(statearr_75359_77288[(1)] = (17));

} else {
var statearr_75361_77289 = state_75346__$1;
(statearr_75361_77289[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (21))){
var inst_75286 = (state_75346[(12)]);
var inst_75281 = inst_75286;
var state_75346__$1 = (function (){var statearr_75362 = state_75346;
(statearr_75362[(9)] = inst_75281);

return statearr_75362;
})();
var statearr_75363_77291 = state_75346__$1;
(statearr_75363_77291[(2)] = null);

(statearr_75363_77291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (13))){
var inst_75312 = (state_75346[(2)]);
var inst_75313 = calc_state();
var inst_75281 = inst_75313;
var state_75346__$1 = (function (){var statearr_75365 = state_75346;
(statearr_75365[(9)] = inst_75281);

(statearr_75365[(17)] = inst_75312);

return statearr_75365;
})();
var statearr_75369_77293 = state_75346__$1;
(statearr_75369_77293[(2)] = null);

(statearr_75369_77293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (22))){
var inst_75339 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
var statearr_75370_77299 = state_75346__$1;
(statearr_75370_77299[(2)] = inst_75339);

(statearr_75370_77299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (6))){
var inst_75297 = (state_75346[(14)]);
var inst_75302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75297,change);
var state_75346__$1 = state_75346;
var statearr_75371_77301 = state_75346__$1;
(statearr_75371_77301[(2)] = inst_75302);

(statearr_75371_77301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (25))){
var state_75346__$1 = state_75346;
var statearr_75372_77302 = state_75346__$1;
(statearr_75372_77302[(2)] = null);

(statearr_75372_77302[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (17))){
var inst_75289 = (state_75346[(18)]);
var inst_75297 = (state_75346[(14)]);
var inst_75321 = (inst_75289.cljs$core$IFn$_invoke$arity$1 ? inst_75289.cljs$core$IFn$_invoke$arity$1(inst_75297) : inst_75289.call(null,inst_75297));
var inst_75322 = cljs.core.not(inst_75321);
var state_75346__$1 = state_75346;
var statearr_75375_77305 = state_75346__$1;
(statearr_75375_77305[(2)] = inst_75322);

(statearr_75375_77305[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (3))){
var inst_75343 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75346__$1,inst_75343);
} else {
if((state_val_75347 === (12))){
var state_75346__$1 = state_75346;
var statearr_75376_77306 = state_75346__$1;
(statearr_75376_77306[(2)] = null);

(statearr_75376_77306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (2))){
var inst_75281 = (state_75346[(9)]);
var inst_75286 = (state_75346[(12)]);
var inst_75286__$1 = cljs.core.__destructure_map(inst_75281);
var inst_75288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75286__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75286__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75286__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_75346__$1 = (function (){var statearr_75377 = state_75346;
(statearr_75377[(18)] = inst_75289);

(statearr_75377[(15)] = inst_75288);

(statearr_75377[(12)] = inst_75286__$1);

return statearr_75377;
})();
return cljs.core.async.ioc_alts_BANG_(state_75346__$1,(4),inst_75290);
} else {
if((state_val_75347 === (23))){
var inst_75330 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
if(cljs.core.truth_(inst_75330)){
var statearr_75378_77309 = state_75346__$1;
(statearr_75378_77309[(1)] = (24));

} else {
var statearr_75379_77311 = state_75346__$1;
(statearr_75379_77311[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (19))){
var inst_75325 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
var statearr_75380_77316 = state_75346__$1;
(statearr_75380_77316[(2)] = inst_75325);

(statearr_75380_77316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (11))){
var inst_75297 = (state_75346[(14)]);
var inst_75309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_75297);
var state_75346__$1 = state_75346;
var statearr_75381_77319 = state_75346__$1;
(statearr_75381_77319[(2)] = inst_75309);

(statearr_75381_77319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (9))){
var inst_75316 = (state_75346[(19)]);
var inst_75288 = (state_75346[(15)]);
var inst_75297 = (state_75346[(14)]);
var inst_75316__$1 = (inst_75288.cljs$core$IFn$_invoke$arity$1 ? inst_75288.cljs$core$IFn$_invoke$arity$1(inst_75297) : inst_75288.call(null,inst_75297));
var state_75346__$1 = (function (){var statearr_75382 = state_75346;
(statearr_75382[(19)] = inst_75316__$1);

return statearr_75382;
})();
if(cljs.core.truth_(inst_75316__$1)){
var statearr_75383_77323 = state_75346__$1;
(statearr_75383_77323[(1)] = (14));

} else {
var statearr_75384_77324 = state_75346__$1;
(statearr_75384_77324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (5))){
var inst_75298 = (state_75346[(13)]);
var state_75346__$1 = state_75346;
var statearr_75387_77327 = state_75346__$1;
(statearr_75387_77327[(2)] = inst_75298);

(statearr_75387_77327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (14))){
var inst_75316 = (state_75346[(19)]);
var state_75346__$1 = state_75346;
var statearr_75389_77329 = state_75346__$1;
(statearr_75389_77329[(2)] = inst_75316);

(statearr_75389_77329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (26))){
var inst_75335 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
var statearr_75391_77330 = state_75346__$1;
(statearr_75391_77330[(2)] = inst_75335);

(statearr_75391_77330[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (16))){
var inst_75327 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
if(cljs.core.truth_(inst_75327)){
var statearr_75395_77331 = state_75346__$1;
(statearr_75395_77331[(1)] = (20));

} else {
var statearr_75396_77332 = state_75346__$1;
(statearr_75396_77332[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (10))){
var inst_75341 = (state_75346[(2)]);
var state_75346__$1 = state_75346;
var statearr_75397_77333 = state_75346__$1;
(statearr_75397_77333[(2)] = inst_75341);

(statearr_75397_77333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (18))){
var inst_75319 = (state_75346[(16)]);
var state_75346__$1 = state_75346;
var statearr_75398_77337 = state_75346__$1;
(statearr_75398_77337[(2)] = inst_75319);

(statearr_75398_77337[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75347 === (8))){
var inst_75296 = (state_75346[(7)]);
var inst_75307 = (inst_75296 == null);
var state_75346__$1 = state_75346;
if(cljs.core.truth_(inst_75307)){
var statearr_75399_77342 = state_75346__$1;
(statearr_75399_77342[(1)] = (11));

} else {
var statearr_75400_77343 = state_75346__$1;
(statearr_75400_77343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32945__auto__ = null;
var cljs$core$async$mix_$_state_machine__32945__auto____0 = (function (){
var statearr_75401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75401[(0)] = cljs$core$async$mix_$_state_machine__32945__auto__);

(statearr_75401[(1)] = (1));

return statearr_75401;
});
var cljs$core$async$mix_$_state_machine__32945__auto____1 = (function (state_75346){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75346);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75402){var ex__32948__auto__ = e75402;
var statearr_75403_77351 = state_75346;
(statearr_75403_77351[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75346[(4)]))){
var statearr_75404_77352 = state_75346;
(statearr_75404_77352[(1)] = cljs.core.first((state_75346[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77353 = state_75346;
state_75346 = G__77353;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32945__auto__ = function(state_75346){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32945__auto____1.call(this,state_75346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32945__auto____0;
cljs$core$async$mix_$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32945__auto____1;
return cljs$core$async$mix_$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75406 = f__33109__auto__();
(statearr_75406[(6)] = c__33108__auto___77270);

return statearr_75406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_77360 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_77360(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_77364 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_77364(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_77368 = (function() {
var G__77369 = null;
var G__77369__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__77369__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__77369 = function(p,v){
switch(arguments.length){
case 1:
return G__77369__1.call(this,p);
case 2:
return G__77369__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77369.cljs$core$IFn$_invoke$arity$1 = G__77369__1;
G__77369.cljs$core$IFn$_invoke$arity$2 = G__77369__2;
return G__77369;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__75438 = arguments.length;
switch (G__75438) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77368(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77368(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75452 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta75453){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta75453 = meta75453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75454,meta75453__$1){
var self__ = this;
var _75454__$1 = this;
return (new cljs.core.async.t_cljs$core$async75452(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta75453__$1));
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75454){
var self__ = this;
var _75454__$1 = this;
return self__.meta75453;
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async75452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async75452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta75453","meta75453",719012851,null)], null);
}));

(cljs.core.async.t_cljs$core$async75452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75452");

(cljs.core.async.t_cljs$core$async75452.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75452.
 */
cljs.core.async.__GT_t_cljs$core$async75452 = (function cljs$core$async$__GT_t_cljs$core$async75452(ch,topic_fn,buf_fn,mults,ensure_mult,meta75453){
return (new cljs.core.async.t_cljs$core$async75452(ch,topic_fn,buf_fn,mults,ensure_mult,meta75453));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__75444 = arguments.length;
switch (G__75444) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__75442_SHARP_){
if(cljs.core.truth_((p1__75442_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__75442_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__75442_SHARP_.call(null,topic)))){
return p1__75442_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__75442_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async75452(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33108__auto___77397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75551){
var state_val_75553 = (state_75551[(1)]);
if((state_val_75553 === (7))){
var inst_75547 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75555_77398 = state_75551__$1;
(statearr_75555_77398[(2)] = inst_75547);

(statearr_75555_77398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (20))){
var state_75551__$1 = state_75551;
var statearr_75556_77399 = state_75551__$1;
(statearr_75556_77399[(2)] = null);

(statearr_75556_77399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (1))){
var state_75551__$1 = state_75551;
var statearr_75557_77400 = state_75551__$1;
(statearr_75557_77400[(2)] = null);

(statearr_75557_77400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (24))){
var inst_75529 = (state_75551[(7)]);
var inst_75539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_75529);
var state_75551__$1 = state_75551;
var statearr_75558_77401 = state_75551__$1;
(statearr_75558_77401[(2)] = inst_75539);

(statearr_75558_77401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (4))){
var inst_75473 = (state_75551[(8)]);
var inst_75473__$1 = (state_75551[(2)]);
var inst_75474 = (inst_75473__$1 == null);
var state_75551__$1 = (function (){var statearr_75559 = state_75551;
(statearr_75559[(8)] = inst_75473__$1);

return statearr_75559;
})();
if(cljs.core.truth_(inst_75474)){
var statearr_75561_77407 = state_75551__$1;
(statearr_75561_77407[(1)] = (5));

} else {
var statearr_75562_77408 = state_75551__$1;
(statearr_75562_77408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (15))){
var inst_75521 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75564_77409 = state_75551__$1;
(statearr_75564_77409[(2)] = inst_75521);

(statearr_75564_77409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (21))){
var inst_75544 = (state_75551[(2)]);
var state_75551__$1 = (function (){var statearr_75565 = state_75551;
(statearr_75565[(9)] = inst_75544);

return statearr_75565;
})();
var statearr_75566_77410 = state_75551__$1;
(statearr_75566_77410[(2)] = null);

(statearr_75566_77410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (13))){
var inst_75501 = (state_75551[(10)]);
var inst_75504 = cljs.core.chunked_seq_QMARK_(inst_75501);
var state_75551__$1 = state_75551;
if(inst_75504){
var statearr_75567_77415 = state_75551__$1;
(statearr_75567_77415[(1)] = (16));

} else {
var statearr_75569_77416 = state_75551__$1;
(statearr_75569_77416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (22))){
var inst_75536 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
if(cljs.core.truth_(inst_75536)){
var statearr_75571_77417 = state_75551__$1;
(statearr_75571_77417[(1)] = (23));

} else {
var statearr_75573_77418 = state_75551__$1;
(statearr_75573_77418[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (6))){
var inst_75531 = (state_75551[(11)]);
var inst_75473 = (state_75551[(8)]);
var inst_75529 = (state_75551[(7)]);
var inst_75529__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_75473) : topic_fn.call(null,inst_75473));
var inst_75530 = cljs.core.deref(mults);
var inst_75531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75530,inst_75529__$1);
var state_75551__$1 = (function (){var statearr_75578 = state_75551;
(statearr_75578[(11)] = inst_75531__$1);

(statearr_75578[(7)] = inst_75529__$1);

return statearr_75578;
})();
if(cljs.core.truth_(inst_75531__$1)){
var statearr_75579_77421 = state_75551__$1;
(statearr_75579_77421[(1)] = (19));

} else {
var statearr_75580_77422 = state_75551__$1;
(statearr_75580_77422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (25))){
var inst_75541 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75582_77423 = state_75551__$1;
(statearr_75582_77423[(2)] = inst_75541);

(statearr_75582_77423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (17))){
var inst_75501 = (state_75551[(10)]);
var inst_75512 = cljs.core.first(inst_75501);
var inst_75513 = cljs.core.async.muxch_STAR_(inst_75512);
var inst_75514 = cljs.core.async.close_BANG_(inst_75513);
var inst_75515 = cljs.core.next(inst_75501);
var inst_75485 = inst_75515;
var inst_75486 = null;
var inst_75487 = (0);
var inst_75488 = (0);
var state_75551__$1 = (function (){var statearr_75588 = state_75551;
(statearr_75588[(12)] = inst_75485);

(statearr_75588[(13)] = inst_75514);

(statearr_75588[(14)] = inst_75488);

(statearr_75588[(15)] = inst_75487);

(statearr_75588[(16)] = inst_75486);

return statearr_75588;
})();
var statearr_75589_77424 = state_75551__$1;
(statearr_75589_77424[(2)] = null);

(statearr_75589_77424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (3))){
var inst_75549 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75551__$1,inst_75549);
} else {
if((state_val_75553 === (12))){
var inst_75523 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75591_77425 = state_75551__$1;
(statearr_75591_77425[(2)] = inst_75523);

(statearr_75591_77425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (2))){
var state_75551__$1 = state_75551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75551__$1,(4),ch);
} else {
if((state_val_75553 === (23))){
var state_75551__$1 = state_75551;
var statearr_75593_77426 = state_75551__$1;
(statearr_75593_77426[(2)] = null);

(statearr_75593_77426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (19))){
var inst_75531 = (state_75551[(11)]);
var inst_75473 = (state_75551[(8)]);
var inst_75534 = cljs.core.async.muxch_STAR_(inst_75531);
var state_75551__$1 = state_75551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75551__$1,(22),inst_75534,inst_75473);
} else {
if((state_val_75553 === (11))){
var inst_75485 = (state_75551[(12)]);
var inst_75501 = (state_75551[(10)]);
var inst_75501__$1 = cljs.core.seq(inst_75485);
var state_75551__$1 = (function (){var statearr_75596 = state_75551;
(statearr_75596[(10)] = inst_75501__$1);

return statearr_75596;
})();
if(inst_75501__$1){
var statearr_75598_77431 = state_75551__$1;
(statearr_75598_77431[(1)] = (13));

} else {
var statearr_75599_77432 = state_75551__$1;
(statearr_75599_77432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (9))){
var inst_75526 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75600_77433 = state_75551__$1;
(statearr_75600_77433[(2)] = inst_75526);

(statearr_75600_77433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (5))){
var inst_75482 = cljs.core.deref(mults);
var inst_75483 = cljs.core.vals(inst_75482);
var inst_75484 = cljs.core.seq(inst_75483);
var inst_75485 = inst_75484;
var inst_75486 = null;
var inst_75487 = (0);
var inst_75488 = (0);
var state_75551__$1 = (function (){var statearr_75603 = state_75551;
(statearr_75603[(12)] = inst_75485);

(statearr_75603[(14)] = inst_75488);

(statearr_75603[(15)] = inst_75487);

(statearr_75603[(16)] = inst_75486);

return statearr_75603;
})();
var statearr_75604_77434 = state_75551__$1;
(statearr_75604_77434[(2)] = null);

(statearr_75604_77434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (14))){
var state_75551__$1 = state_75551;
var statearr_75610_77436 = state_75551__$1;
(statearr_75610_77436[(2)] = null);

(statearr_75610_77436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (16))){
var inst_75501 = (state_75551[(10)]);
var inst_75506 = cljs.core.chunk_first(inst_75501);
var inst_75507 = cljs.core.chunk_rest(inst_75501);
var inst_75508 = cljs.core.count(inst_75506);
var inst_75485 = inst_75507;
var inst_75486 = inst_75506;
var inst_75487 = inst_75508;
var inst_75488 = (0);
var state_75551__$1 = (function (){var statearr_75611 = state_75551;
(statearr_75611[(12)] = inst_75485);

(statearr_75611[(14)] = inst_75488);

(statearr_75611[(15)] = inst_75487);

(statearr_75611[(16)] = inst_75486);

return statearr_75611;
})();
var statearr_75614_77438 = state_75551__$1;
(statearr_75614_77438[(2)] = null);

(statearr_75614_77438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (10))){
var inst_75485 = (state_75551[(12)]);
var inst_75488 = (state_75551[(14)]);
var inst_75487 = (state_75551[(15)]);
var inst_75486 = (state_75551[(16)]);
var inst_75493 = cljs.core._nth(inst_75486,inst_75488);
var inst_75496 = cljs.core.async.muxch_STAR_(inst_75493);
var inst_75497 = cljs.core.async.close_BANG_(inst_75496);
var inst_75498 = (inst_75488 + (1));
var tmp75606 = inst_75485;
var tmp75607 = inst_75487;
var tmp75608 = inst_75486;
var inst_75485__$1 = tmp75606;
var inst_75486__$1 = tmp75608;
var inst_75487__$1 = tmp75607;
var inst_75488__$1 = inst_75498;
var state_75551__$1 = (function (){var statearr_75617 = state_75551;
(statearr_75617[(12)] = inst_75485__$1);

(statearr_75617[(17)] = inst_75497);

(statearr_75617[(14)] = inst_75488__$1);

(statearr_75617[(15)] = inst_75487__$1);

(statearr_75617[(16)] = inst_75486__$1);

return statearr_75617;
})();
var statearr_75619_77439 = state_75551__$1;
(statearr_75619_77439[(2)] = null);

(statearr_75619_77439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (18))){
var inst_75518 = (state_75551[(2)]);
var state_75551__$1 = state_75551;
var statearr_75620_77440 = state_75551__$1;
(statearr_75620_77440[(2)] = inst_75518);

(statearr_75620_77440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75553 === (8))){
var inst_75488 = (state_75551[(14)]);
var inst_75487 = (state_75551[(15)]);
var inst_75490 = (inst_75488 < inst_75487);
var inst_75491 = inst_75490;
var state_75551__$1 = state_75551;
if(cljs.core.truth_(inst_75491)){
var statearr_75622_77442 = state_75551__$1;
(statearr_75622_77442[(1)] = (10));

} else {
var statearr_75623_77443 = state_75551__$1;
(statearr_75623_77443[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_75632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75632[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_75632[(1)] = (1));

return statearr_75632;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_75551){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75551);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75633){var ex__32948__auto__ = e75633;
var statearr_75634_77447 = state_75551;
(statearr_75634_77447[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75551[(4)]))){
var statearr_75635_77448 = state_75551;
(statearr_75635_77448[(1)] = cljs.core.first((state_75551[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77452 = state_75551;
state_75551 = G__77452;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_75551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_75551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75642 = f__33109__auto__();
(statearr_75642[(6)] = c__33108__auto___77397);

return statearr_75642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__75647 = arguments.length;
switch (G__75647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__75653 = arguments.length;
switch (G__75653) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__75657 = arguments.length;
switch (G__75657) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33108__auto___77463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75703){
var state_val_75704 = (state_75703[(1)]);
if((state_val_75704 === (7))){
var state_75703__$1 = state_75703;
var statearr_75708_77464 = state_75703__$1;
(statearr_75708_77464[(2)] = null);

(statearr_75708_77464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (1))){
var state_75703__$1 = state_75703;
var statearr_75713_77465 = state_75703__$1;
(statearr_75713_77465[(2)] = null);

(statearr_75713_77465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (4))){
var inst_75663 = (state_75703[(7)]);
var inst_75664 = (state_75703[(8)]);
var inst_75666 = (inst_75664 < inst_75663);
var state_75703__$1 = state_75703;
if(cljs.core.truth_(inst_75666)){
var statearr_75714_77466 = state_75703__$1;
(statearr_75714_77466[(1)] = (6));

} else {
var statearr_75715_77467 = state_75703__$1;
(statearr_75715_77467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (15))){
var inst_75689 = (state_75703[(9)]);
var inst_75694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_75689);
var state_75703__$1 = state_75703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75703__$1,(17),out,inst_75694);
} else {
if((state_val_75704 === (13))){
var inst_75689 = (state_75703[(9)]);
var inst_75689__$1 = (state_75703[(2)]);
var inst_75690 = cljs.core.some(cljs.core.nil_QMARK_,inst_75689__$1);
var state_75703__$1 = (function (){var statearr_75720 = state_75703;
(statearr_75720[(9)] = inst_75689__$1);

return statearr_75720;
})();
if(cljs.core.truth_(inst_75690)){
var statearr_75721_77468 = state_75703__$1;
(statearr_75721_77468[(1)] = (14));

} else {
var statearr_75722_77469 = state_75703__$1;
(statearr_75722_77469[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (6))){
var state_75703__$1 = state_75703;
var statearr_75725_77474 = state_75703__$1;
(statearr_75725_77474[(2)] = null);

(statearr_75725_77474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (17))){
var inst_75696 = (state_75703[(2)]);
var state_75703__$1 = (function (){var statearr_75729 = state_75703;
(statearr_75729[(10)] = inst_75696);

return statearr_75729;
})();
var statearr_75730_77475 = state_75703__$1;
(statearr_75730_77475[(2)] = null);

(statearr_75730_77475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (3))){
var inst_75701 = (state_75703[(2)]);
var state_75703__$1 = state_75703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75703__$1,inst_75701);
} else {
if((state_val_75704 === (12))){
var _ = (function (){var statearr_75731 = state_75703;
(statearr_75731[(4)] = cljs.core.rest((state_75703[(4)])));

return statearr_75731;
})();
var state_75703__$1 = state_75703;
var ex75726 = (state_75703__$1[(2)]);
var statearr_75732_77476 = state_75703__$1;
(statearr_75732_77476[(5)] = ex75726);


if((ex75726 instanceof Object)){
var statearr_75733_77477 = state_75703__$1;
(statearr_75733_77477[(1)] = (11));

(statearr_75733_77477[(5)] = null);

} else {
throw ex75726;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (2))){
var inst_75661 = cljs.core.reset_BANG_(dctr,cnt);
var inst_75663 = cnt;
var inst_75664 = (0);
var state_75703__$1 = (function (){var statearr_75738 = state_75703;
(statearr_75738[(11)] = inst_75661);

(statearr_75738[(7)] = inst_75663);

(statearr_75738[(8)] = inst_75664);

return statearr_75738;
})();
var statearr_75739_77478 = state_75703__$1;
(statearr_75739_77478[(2)] = null);

(statearr_75739_77478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (11))){
var inst_75668 = (state_75703[(2)]);
var inst_75669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_75703__$1 = (function (){var statearr_75740 = state_75703;
(statearr_75740[(12)] = inst_75668);

return statearr_75740;
})();
var statearr_75741_77480 = state_75703__$1;
(statearr_75741_77480[(2)] = inst_75669);

(statearr_75741_77480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (9))){
var inst_75664 = (state_75703[(8)]);
var _ = (function (){var statearr_75742 = state_75703;
(statearr_75742[(4)] = cljs.core.cons((12),(state_75703[(4)])));

return statearr_75742;
})();
var inst_75675 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_75664) : chs__$1.call(null,inst_75664));
var inst_75676 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_75664) : done.call(null,inst_75664));
var inst_75677 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_75675,inst_75676);
var ___$1 = (function (){var statearr_75743 = state_75703;
(statearr_75743[(4)] = cljs.core.rest((state_75703[(4)])));

return statearr_75743;
})();
var state_75703__$1 = state_75703;
var statearr_75745_77481 = state_75703__$1;
(statearr_75745_77481[(2)] = inst_75677);

(statearr_75745_77481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (5))){
var inst_75687 = (state_75703[(2)]);
var state_75703__$1 = (function (){var statearr_75747 = state_75703;
(statearr_75747[(13)] = inst_75687);

return statearr_75747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75703__$1,(13),dchan);
} else {
if((state_val_75704 === (14))){
var inst_75692 = cljs.core.async.close_BANG_(out);
var state_75703__$1 = state_75703;
var statearr_75752_77486 = state_75703__$1;
(statearr_75752_77486[(2)] = inst_75692);

(statearr_75752_77486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (16))){
var inst_75699 = (state_75703[(2)]);
var state_75703__$1 = state_75703;
var statearr_75756_77487 = state_75703__$1;
(statearr_75756_77487[(2)] = inst_75699);

(statearr_75756_77487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (10))){
var inst_75664 = (state_75703[(8)]);
var inst_75680 = (state_75703[(2)]);
var inst_75681 = (inst_75664 + (1));
var inst_75664__$1 = inst_75681;
var state_75703__$1 = (function (){var statearr_75757 = state_75703;
(statearr_75757[(14)] = inst_75680);

(statearr_75757[(8)] = inst_75664__$1);

return statearr_75757;
})();
var statearr_75758_77488 = state_75703__$1;
(statearr_75758_77488[(2)] = null);

(statearr_75758_77488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75704 === (8))){
var inst_75685 = (state_75703[(2)]);
var state_75703__$1 = state_75703;
var statearr_75759_77489 = state_75703__$1;
(statearr_75759_77489[(2)] = inst_75685);

(statearr_75759_77489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_75762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75762[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_75762[(1)] = (1));

return statearr_75762;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_75703){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75703);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75764){var ex__32948__auto__ = e75764;
var statearr_75765_77497 = state_75703;
(statearr_75765_77497[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75703[(4)]))){
var statearr_75766_77498 = state_75703;
(statearr_75766_77498[(1)] = cljs.core.first((state_75703[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77501 = state_75703;
state_75703 = G__77501;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_75703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_75703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75767 = f__33109__auto__();
(statearr_75767[(6)] = c__33108__auto___77463);

return statearr_75767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__75774 = arguments.length;
switch (G__75774) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75820){
var state_val_75821 = (state_75820[(1)]);
if((state_val_75821 === (7))){
var inst_75799 = (state_75820[(7)]);
var inst_75800 = (state_75820[(8)]);
var inst_75799__$1 = (state_75820[(2)]);
var inst_75800__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75799__$1,(0),null);
var inst_75801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75799__$1,(1),null);
var inst_75802 = (inst_75800__$1 == null);
var state_75820__$1 = (function (){var statearr_75826 = state_75820;
(statearr_75826[(7)] = inst_75799__$1);

(statearr_75826[(9)] = inst_75801);

(statearr_75826[(8)] = inst_75800__$1);

return statearr_75826;
})();
if(cljs.core.truth_(inst_75802)){
var statearr_75827_77505 = state_75820__$1;
(statearr_75827_77505[(1)] = (8));

} else {
var statearr_75828_77506 = state_75820__$1;
(statearr_75828_77506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (1))){
var inst_75786 = cljs.core.vec(chs);
var inst_75787 = inst_75786;
var state_75820__$1 = (function (){var statearr_75829 = state_75820;
(statearr_75829[(10)] = inst_75787);

return statearr_75829;
})();
var statearr_75831_77508 = state_75820__$1;
(statearr_75831_77508[(2)] = null);

(statearr_75831_77508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (4))){
var inst_75787 = (state_75820[(10)]);
var state_75820__$1 = state_75820;
return cljs.core.async.ioc_alts_BANG_(state_75820__$1,(7),inst_75787);
} else {
if((state_val_75821 === (6))){
var inst_75816 = (state_75820[(2)]);
var state_75820__$1 = state_75820;
var statearr_75835_77509 = state_75820__$1;
(statearr_75835_77509[(2)] = inst_75816);

(statearr_75835_77509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (3))){
var inst_75818 = (state_75820[(2)]);
var state_75820__$1 = state_75820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75820__$1,inst_75818);
} else {
if((state_val_75821 === (2))){
var inst_75787 = (state_75820[(10)]);
var inst_75791 = cljs.core.count(inst_75787);
var inst_75792 = (inst_75791 > (0));
var state_75820__$1 = state_75820;
if(cljs.core.truth_(inst_75792)){
var statearr_75837_77513 = state_75820__$1;
(statearr_75837_77513[(1)] = (4));

} else {
var statearr_75838_77514 = state_75820__$1;
(statearr_75838_77514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (11))){
var inst_75787 = (state_75820[(10)]);
var inst_75809 = (state_75820[(2)]);
var tmp75836 = inst_75787;
var inst_75787__$1 = tmp75836;
var state_75820__$1 = (function (){var statearr_75841 = state_75820;
(statearr_75841[(10)] = inst_75787__$1);

(statearr_75841[(11)] = inst_75809);

return statearr_75841;
})();
var statearr_75842_77519 = state_75820__$1;
(statearr_75842_77519[(2)] = null);

(statearr_75842_77519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (9))){
var inst_75800 = (state_75820[(8)]);
var state_75820__$1 = state_75820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75820__$1,(11),out,inst_75800);
} else {
if((state_val_75821 === (5))){
var inst_75814 = cljs.core.async.close_BANG_(out);
var state_75820__$1 = state_75820;
var statearr_75843_77520 = state_75820__$1;
(statearr_75843_77520[(2)] = inst_75814);

(statearr_75843_77520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (10))){
var inst_75812 = (state_75820[(2)]);
var state_75820__$1 = state_75820;
var statearr_75844_77522 = state_75820__$1;
(statearr_75844_77522[(2)] = inst_75812);

(statearr_75844_77522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75821 === (8))){
var inst_75799 = (state_75820[(7)]);
var inst_75787 = (state_75820[(10)]);
var inst_75801 = (state_75820[(9)]);
var inst_75800 = (state_75820[(8)]);
var inst_75804 = (function (){var cs = inst_75787;
var vec__75795 = inst_75799;
var v = inst_75800;
var c = inst_75801;
return (function (p1__75771_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__75771_SHARP_);
});
})();
var inst_75805 = cljs.core.filterv(inst_75804,inst_75787);
var inst_75787__$1 = inst_75805;
var state_75820__$1 = (function (){var statearr_75847 = state_75820;
(statearr_75847[(10)] = inst_75787__$1);

return statearr_75847;
})();
var statearr_75848_77526 = state_75820__$1;
(statearr_75848_77526[(2)] = null);

(statearr_75848_77526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_75850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75850[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_75850[(1)] = (1));

return statearr_75850;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_75820){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75820);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75852){var ex__32948__auto__ = e75852;
var statearr_75853_77527 = state_75820;
(statearr_75853_77527[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75820[(4)]))){
var statearr_75854_77528 = state_75820;
(statearr_75854_77528[(1)] = cljs.core.first((state_75820[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77529 = state_75820;
state_75820 = G__77529;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_75820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_75820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75856 = f__33109__auto__();
(statearr_75856[(6)] = c__33108__auto___77504);

return statearr_75856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__75864 = arguments.length;
switch (G__75864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_75892){
var state_val_75893 = (state_75892[(1)]);
if((state_val_75893 === (7))){
var inst_75870 = (state_75892[(7)]);
var inst_75870__$1 = (state_75892[(2)]);
var inst_75871 = (inst_75870__$1 == null);
var inst_75872 = cljs.core.not(inst_75871);
var state_75892__$1 = (function (){var statearr_75898 = state_75892;
(statearr_75898[(7)] = inst_75870__$1);

return statearr_75898;
})();
if(inst_75872){
var statearr_75899_77539 = state_75892__$1;
(statearr_75899_77539[(1)] = (8));

} else {
var statearr_75900_77540 = state_75892__$1;
(statearr_75900_77540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (1))){
var inst_75865 = (0);
var state_75892__$1 = (function (){var statearr_75901 = state_75892;
(statearr_75901[(8)] = inst_75865);

return statearr_75901;
})();
var statearr_75902_77543 = state_75892__$1;
(statearr_75902_77543[(2)] = null);

(statearr_75902_77543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (4))){
var state_75892__$1 = state_75892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75892__$1,(7),ch);
} else {
if((state_val_75893 === (6))){
var inst_75883 = (state_75892[(2)]);
var state_75892__$1 = state_75892;
var statearr_75904_77544 = state_75892__$1;
(statearr_75904_77544[(2)] = inst_75883);

(statearr_75904_77544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (3))){
var inst_75885 = (state_75892[(2)]);
var inst_75886 = cljs.core.async.close_BANG_(out);
var state_75892__$1 = (function (){var statearr_75907 = state_75892;
(statearr_75907[(9)] = inst_75885);

return statearr_75907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75892__$1,inst_75886);
} else {
if((state_val_75893 === (2))){
var inst_75865 = (state_75892[(8)]);
var inst_75867 = (inst_75865 < n);
var state_75892__$1 = state_75892;
if(cljs.core.truth_(inst_75867)){
var statearr_75908_77545 = state_75892__$1;
(statearr_75908_77545[(1)] = (4));

} else {
var statearr_75909_77546 = state_75892__$1;
(statearr_75909_77546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (11))){
var inst_75865 = (state_75892[(8)]);
var inst_75875 = (state_75892[(2)]);
var inst_75876 = (inst_75865 + (1));
var inst_75865__$1 = inst_75876;
var state_75892__$1 = (function (){var statearr_75918 = state_75892;
(statearr_75918[(8)] = inst_75865__$1);

(statearr_75918[(10)] = inst_75875);

return statearr_75918;
})();
var statearr_75924_77547 = state_75892__$1;
(statearr_75924_77547[(2)] = null);

(statearr_75924_77547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (9))){
var state_75892__$1 = state_75892;
var statearr_75927_77548 = state_75892__$1;
(statearr_75927_77548[(2)] = null);

(statearr_75927_77548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (5))){
var state_75892__$1 = state_75892;
var statearr_75929_77549 = state_75892__$1;
(statearr_75929_77549[(2)] = null);

(statearr_75929_77549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (10))){
var inst_75880 = (state_75892[(2)]);
var state_75892__$1 = state_75892;
var statearr_75930_77550 = state_75892__$1;
(statearr_75930_77550[(2)] = inst_75880);

(statearr_75930_77550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75893 === (8))){
var inst_75870 = (state_75892[(7)]);
var state_75892__$1 = state_75892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75892__$1,(11),out,inst_75870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_75932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75932[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_75932[(1)] = (1));

return statearr_75932;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_75892){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_75892);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e75934){var ex__32948__auto__ = e75934;
var statearr_75935_77551 = state_75892;
(statearr_75935_77551[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_75892[(4)]))){
var statearr_75936_77552 = state_75892;
(statearr_75936_77552[(1)] = cljs.core.first((state_75892[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77553 = state_75892;
state_75892 = G__77553;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_75892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_75892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_75938 = f__33109__auto__();
(statearr_75938[(6)] = c__33108__auto___77538);

return statearr_75938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75946 = (function (f,ch,meta75941,_,fn1,meta75947){
this.f = f;
this.ch = ch;
this.meta75941 = meta75941;
this._ = _;
this.fn1 = fn1;
this.meta75947 = meta75947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75948,meta75947__$1){
var self__ = this;
var _75948__$1 = this;
return (new cljs.core.async.t_cljs$core$async75946(self__.f,self__.ch,self__.meta75941,self__._,self__.fn1,meta75947__$1));
}));

(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75948){
var self__ = this;
var _75948__$1 = this;
return self__.meta75947;
}));

(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async75946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__75939_SHARP_){
var G__75955 = (((p1__75939_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__75939_SHARP_) : self__.f.call(null,p1__75939_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__75955) : f1.call(null,G__75955));
});
}));

(cljs.core.async.t_cljs$core$async75946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75941","meta75941",-925529154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async75940","cljs.core.async/t_cljs$core$async75940",566980515,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta75947","meta75947",-1660844014,null)], null);
}));

(cljs.core.async.t_cljs$core$async75946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75946");

(cljs.core.async.t_cljs$core$async75946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75946.
 */
cljs.core.async.__GT_t_cljs$core$async75946 = (function cljs$core$async$__GT_t_cljs$core$async75946(f,ch,meta75941,_,fn1,meta75947){
return (new cljs.core.async.t_cljs$core$async75946(f,ch,meta75941,_,fn1,meta75947));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75940 = (function (f,ch,meta75941){
this.f = f;
this.ch = ch;
this.meta75941 = meta75941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75942,meta75941__$1){
var self__ = this;
var _75942__$1 = this;
return (new cljs.core.async.t_cljs$core$async75940(self__.f,self__.ch,meta75941__$1));
}));

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75942){
var self__ = this;
var _75942__$1 = this;
return self__.meta75941;
}));

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async75946(self__.f,self__.ch,self__.meta75941,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__75979 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__75979) : self__.f.call(null,G__75979));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async75940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75941","meta75941",-925529154,null)], null);
}));

(cljs.core.async.t_cljs$core$async75940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75940");

(cljs.core.async.t_cljs$core$async75940.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75940.
 */
cljs.core.async.__GT_t_cljs$core$async75940 = (function cljs$core$async$__GT_t_cljs$core$async75940(f,ch,meta75941){
return (new cljs.core.async.t_cljs$core$async75940(f,ch,meta75941));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async75940(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75984 = (function (f,ch,meta75985){
this.f = f;
this.ch = ch;
this.meta75985 = meta75985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75986,meta75985__$1){
var self__ = this;
var _75986__$1 = this;
return (new cljs.core.async.t_cljs$core$async75984(self__.f,self__.ch,meta75985__$1));
}));

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75986){
var self__ = this;
var _75986__$1 = this;
return self__.meta75985;
}));

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async75984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75985","meta75985",26934109,null)], null);
}));

(cljs.core.async.t_cljs$core$async75984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75984");

(cljs.core.async.t_cljs$core$async75984.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75984.
 */
cljs.core.async.__GT_t_cljs$core$async75984 = (function cljs$core$async$__GT_t_cljs$core$async75984(f,ch,meta75985){
return (new cljs.core.async.t_cljs$core$async75984(f,ch,meta75985));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async75984(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75995 = (function (p,ch,meta75996){
this.p = p;
this.ch = ch;
this.meta75996 = meta75996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75997,meta75996__$1){
var self__ = this;
var _75997__$1 = this;
return (new cljs.core.async.t_cljs$core$async75995(self__.p,self__.ch,meta75996__$1));
}));

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75997){
var self__ = this;
var _75997__$1 = this;
return self__.meta75996;
}));

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async75995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta75996","meta75996",1773577848,null)], null);
}));

(cljs.core.async.t_cljs$core$async75995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75995");

(cljs.core.async.t_cljs$core$async75995.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async75995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75995.
 */
cljs.core.async.__GT_t_cljs$core$async75995 = (function cljs$core$async$__GT_t_cljs$core$async75995(p,ch,meta75996){
return (new cljs.core.async.t_cljs$core$async75995(p,ch,meta75996));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async75995(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__76010 = arguments.length;
switch (G__76010) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_76032){
var state_val_76033 = (state_76032[(1)]);
if((state_val_76033 === (7))){
var inst_76028 = (state_76032[(2)]);
var state_76032__$1 = state_76032;
var statearr_76039_77578 = state_76032__$1;
(statearr_76039_77578[(2)] = inst_76028);

(statearr_76039_77578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (1))){
var state_76032__$1 = state_76032;
var statearr_76041_77579 = state_76032__$1;
(statearr_76041_77579[(2)] = null);

(statearr_76041_77579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (4))){
var inst_76014 = (state_76032[(7)]);
var inst_76014__$1 = (state_76032[(2)]);
var inst_76015 = (inst_76014__$1 == null);
var state_76032__$1 = (function (){var statearr_76042 = state_76032;
(statearr_76042[(7)] = inst_76014__$1);

return statearr_76042;
})();
if(cljs.core.truth_(inst_76015)){
var statearr_76043_77581 = state_76032__$1;
(statearr_76043_77581[(1)] = (5));

} else {
var statearr_76044_77582 = state_76032__$1;
(statearr_76044_77582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (6))){
var inst_76014 = (state_76032[(7)]);
var inst_76019 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_76014) : p.call(null,inst_76014));
var state_76032__$1 = state_76032;
if(cljs.core.truth_(inst_76019)){
var statearr_76045_77583 = state_76032__$1;
(statearr_76045_77583[(1)] = (8));

} else {
var statearr_76046_77584 = state_76032__$1;
(statearr_76046_77584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (3))){
var inst_76030 = (state_76032[(2)]);
var state_76032__$1 = state_76032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76032__$1,inst_76030);
} else {
if((state_val_76033 === (2))){
var state_76032__$1 = state_76032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76032__$1,(4),ch);
} else {
if((state_val_76033 === (11))){
var inst_76022 = (state_76032[(2)]);
var state_76032__$1 = state_76032;
var statearr_76048_77585 = state_76032__$1;
(statearr_76048_77585[(2)] = inst_76022);

(statearr_76048_77585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (9))){
var state_76032__$1 = state_76032;
var statearr_76051_77586 = state_76032__$1;
(statearr_76051_77586[(2)] = null);

(statearr_76051_77586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (5))){
var inst_76017 = cljs.core.async.close_BANG_(out);
var state_76032__$1 = state_76032;
var statearr_76056_77587 = state_76032__$1;
(statearr_76056_77587[(2)] = inst_76017);

(statearr_76056_77587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (10))){
var inst_76025 = (state_76032[(2)]);
var state_76032__$1 = (function (){var statearr_76057 = state_76032;
(statearr_76057[(8)] = inst_76025);

return statearr_76057;
})();
var statearr_76058_77590 = state_76032__$1;
(statearr_76058_77590[(2)] = null);

(statearr_76058_77590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76033 === (8))){
var inst_76014 = (state_76032[(7)]);
var state_76032__$1 = state_76032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76032__$1,(11),out,inst_76014);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_76059 = [null,null,null,null,null,null,null,null,null];
(statearr_76059[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_76059[(1)] = (1));

return statearr_76059;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_76032){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_76032);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e76060){var ex__32948__auto__ = e76060;
var statearr_76061_77594 = state_76032;
(statearr_76061_77594[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_76032[(4)]))){
var statearr_76062_77595 = state_76032;
(statearr_76062_77595[(1)] = cljs.core.first((state_76032[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77596 = state_76032;
state_76032 = G__77596;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_76032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_76032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_76063 = f__33109__auto__();
(statearr_76063[(6)] = c__33108__auto___77577);

return statearr_76063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__76065 = arguments.length;
switch (G__76065) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_76131){
var state_val_76132 = (state_76131[(1)]);
if((state_val_76132 === (7))){
var inst_76127 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
var statearr_76134_77604 = state_76131__$1;
(statearr_76134_77604[(2)] = inst_76127);

(statearr_76134_77604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (20))){
var inst_76094 = (state_76131[(7)]);
var inst_76108 = (state_76131[(2)]);
var inst_76109 = cljs.core.next(inst_76094);
var inst_76079 = inst_76109;
var inst_76081 = null;
var inst_76082 = (0);
var inst_76083 = (0);
var state_76131__$1 = (function (){var statearr_76135 = state_76131;
(statearr_76135[(8)] = inst_76082);

(statearr_76135[(9)] = inst_76083);

(statearr_76135[(10)] = inst_76081);

(statearr_76135[(11)] = inst_76108);

(statearr_76135[(12)] = inst_76079);

return statearr_76135;
})();
var statearr_76136_77605 = state_76131__$1;
(statearr_76136_77605[(2)] = null);

(statearr_76136_77605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (1))){
var state_76131__$1 = state_76131;
var statearr_76137_77606 = state_76131__$1;
(statearr_76137_77606[(2)] = null);

(statearr_76137_77606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (4))){
var inst_76068 = (state_76131[(13)]);
var inst_76068__$1 = (state_76131[(2)]);
var inst_76069 = (inst_76068__$1 == null);
var state_76131__$1 = (function (){var statearr_76138 = state_76131;
(statearr_76138[(13)] = inst_76068__$1);

return statearr_76138;
})();
if(cljs.core.truth_(inst_76069)){
var statearr_76139_77607 = state_76131__$1;
(statearr_76139_77607[(1)] = (5));

} else {
var statearr_76140_77608 = state_76131__$1;
(statearr_76140_77608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (15))){
var state_76131__$1 = state_76131;
var statearr_76144_77609 = state_76131__$1;
(statearr_76144_77609[(2)] = null);

(statearr_76144_77609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (21))){
var state_76131__$1 = state_76131;
var statearr_76145_77610 = state_76131__$1;
(statearr_76145_77610[(2)] = null);

(statearr_76145_77610[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (13))){
var inst_76082 = (state_76131[(8)]);
var inst_76083 = (state_76131[(9)]);
var inst_76081 = (state_76131[(10)]);
var inst_76079 = (state_76131[(12)]);
var inst_76090 = (state_76131[(2)]);
var inst_76091 = (inst_76083 + (1));
var tmp76141 = inst_76082;
var tmp76142 = inst_76081;
var tmp76143 = inst_76079;
var inst_76079__$1 = tmp76143;
var inst_76081__$1 = tmp76142;
var inst_76082__$1 = tmp76141;
var inst_76083__$1 = inst_76091;
var state_76131__$1 = (function (){var statearr_76148 = state_76131;
(statearr_76148[(8)] = inst_76082__$1);

(statearr_76148[(14)] = inst_76090);

(statearr_76148[(9)] = inst_76083__$1);

(statearr_76148[(10)] = inst_76081__$1);

(statearr_76148[(12)] = inst_76079__$1);

return statearr_76148;
})();
var statearr_76149_77615 = state_76131__$1;
(statearr_76149_77615[(2)] = null);

(statearr_76149_77615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (22))){
var state_76131__$1 = state_76131;
var statearr_76150_77617 = state_76131__$1;
(statearr_76150_77617[(2)] = null);

(statearr_76150_77617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (6))){
var inst_76068 = (state_76131[(13)]);
var inst_76077 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76068) : f.call(null,inst_76068));
var inst_76078 = cljs.core.seq(inst_76077);
var inst_76079 = inst_76078;
var inst_76081 = null;
var inst_76082 = (0);
var inst_76083 = (0);
var state_76131__$1 = (function (){var statearr_76152 = state_76131;
(statearr_76152[(8)] = inst_76082);

(statearr_76152[(9)] = inst_76083);

(statearr_76152[(10)] = inst_76081);

(statearr_76152[(12)] = inst_76079);

return statearr_76152;
})();
var statearr_76154_77619 = state_76131__$1;
(statearr_76154_77619[(2)] = null);

(statearr_76154_77619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (17))){
var inst_76094 = (state_76131[(7)]);
var inst_76098 = cljs.core.chunk_first(inst_76094);
var inst_76102 = cljs.core.chunk_rest(inst_76094);
var inst_76103 = cljs.core.count(inst_76098);
var inst_76079 = inst_76102;
var inst_76081 = inst_76098;
var inst_76082 = inst_76103;
var inst_76083 = (0);
var state_76131__$1 = (function (){var statearr_76155 = state_76131;
(statearr_76155[(8)] = inst_76082);

(statearr_76155[(9)] = inst_76083);

(statearr_76155[(10)] = inst_76081);

(statearr_76155[(12)] = inst_76079);

return statearr_76155;
})();
var statearr_76156_77621 = state_76131__$1;
(statearr_76156_77621[(2)] = null);

(statearr_76156_77621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (3))){
var inst_76129 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76131__$1,inst_76129);
} else {
if((state_val_76132 === (12))){
var inst_76117 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
var statearr_76157_77627 = state_76131__$1;
(statearr_76157_77627[(2)] = inst_76117);

(statearr_76157_77627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (2))){
var state_76131__$1 = state_76131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76131__$1,(4),in$);
} else {
if((state_val_76132 === (23))){
var inst_76125 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
var statearr_76159_77628 = state_76131__$1;
(statearr_76159_77628[(2)] = inst_76125);

(statearr_76159_77628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (19))){
var inst_76112 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
var statearr_76161_77629 = state_76131__$1;
(statearr_76161_77629[(2)] = inst_76112);

(statearr_76161_77629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (11))){
var inst_76094 = (state_76131[(7)]);
var inst_76079 = (state_76131[(12)]);
var inst_76094__$1 = cljs.core.seq(inst_76079);
var state_76131__$1 = (function (){var statearr_76166 = state_76131;
(statearr_76166[(7)] = inst_76094__$1);

return statearr_76166;
})();
if(inst_76094__$1){
var statearr_76167_77631 = state_76131__$1;
(statearr_76167_77631[(1)] = (14));

} else {
var statearr_76170_77633 = state_76131__$1;
(statearr_76170_77633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (9))){
var inst_76119 = (state_76131[(2)]);
var inst_76120 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_76131__$1 = (function (){var statearr_76173 = state_76131;
(statearr_76173[(15)] = inst_76119);

return statearr_76173;
})();
if(cljs.core.truth_(inst_76120)){
var statearr_76174_77634 = state_76131__$1;
(statearr_76174_77634[(1)] = (21));

} else {
var statearr_76175_77637 = state_76131__$1;
(statearr_76175_77637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (5))){
var inst_76071 = cljs.core.async.close_BANG_(out);
var state_76131__$1 = state_76131;
var statearr_76176_77638 = state_76131__$1;
(statearr_76176_77638[(2)] = inst_76071);

(statearr_76176_77638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (14))){
var inst_76094 = (state_76131[(7)]);
var inst_76096 = cljs.core.chunked_seq_QMARK_(inst_76094);
var state_76131__$1 = state_76131;
if(inst_76096){
var statearr_76177_77639 = state_76131__$1;
(statearr_76177_77639[(1)] = (17));

} else {
var statearr_76178_77640 = state_76131__$1;
(statearr_76178_77640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (16))){
var inst_76115 = (state_76131[(2)]);
var state_76131__$1 = state_76131;
var statearr_76179_77641 = state_76131__$1;
(statearr_76179_77641[(2)] = inst_76115);

(statearr_76179_77641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76132 === (10))){
var inst_76083 = (state_76131[(9)]);
var inst_76081 = (state_76131[(10)]);
var inst_76088 = cljs.core._nth(inst_76081,inst_76083);
var state_76131__$1 = state_76131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76131__$1,(13),out,inst_76088);
} else {
if((state_val_76132 === (18))){
var inst_76094 = (state_76131[(7)]);
var inst_76106 = cljs.core.first(inst_76094);
var state_76131__$1 = state_76131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76131__$1,(20),out,inst_76106);
} else {
if((state_val_76132 === (8))){
var inst_76082 = (state_76131[(8)]);
var inst_76083 = (state_76131[(9)]);
var inst_76085 = (inst_76083 < inst_76082);
var inst_76086 = inst_76085;
var state_76131__$1 = state_76131;
if(cljs.core.truth_(inst_76086)){
var statearr_76188_77642 = state_76131__$1;
(statearr_76188_77642[(1)] = (10));

} else {
var statearr_76189_77643 = state_76131__$1;
(statearr_76189_77643[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____0 = (function (){
var statearr_76191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76191[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__);

(statearr_76191[(1)] = (1));

return statearr_76191;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____1 = (function (state_76131){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_76131);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e76193){var ex__32948__auto__ = e76193;
var statearr_76194_77648 = state_76131;
(statearr_76194_77648[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_76131[(4)]))){
var statearr_76195_77649 = state_76131;
(statearr_76195_77649[(1)] = cljs.core.first((state_76131[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77650 = state_76131;
state_76131 = G__77650;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__ = function(state_76131){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____1.call(this,state_76131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32945__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_76196 = f__33109__auto__();
(statearr_76196[(6)] = c__33108__auto__);

return statearr_76196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));

return c__33108__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__76198 = arguments.length;
switch (G__76198) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__76208 = arguments.length;
switch (G__76208) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__76215 = arguments.length;
switch (G__76215) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_76244){
var state_val_76245 = (state_76244[(1)]);
if((state_val_76245 === (7))){
var inst_76239 = (state_76244[(2)]);
var state_76244__$1 = state_76244;
var statearr_76246_77661 = state_76244__$1;
(statearr_76246_77661[(2)] = inst_76239);

(statearr_76246_77661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (1))){
var inst_76217 = null;
var state_76244__$1 = (function (){var statearr_76247 = state_76244;
(statearr_76247[(7)] = inst_76217);

return statearr_76247;
})();
var statearr_76248_77662 = state_76244__$1;
(statearr_76248_77662[(2)] = null);

(statearr_76248_77662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (4))){
var inst_76220 = (state_76244[(8)]);
var inst_76220__$1 = (state_76244[(2)]);
var inst_76222 = (inst_76220__$1 == null);
var inst_76226 = cljs.core.not(inst_76222);
var state_76244__$1 = (function (){var statearr_76249 = state_76244;
(statearr_76249[(8)] = inst_76220__$1);

return statearr_76249;
})();
if(inst_76226){
var statearr_76250_77663 = state_76244__$1;
(statearr_76250_77663[(1)] = (5));

} else {
var statearr_76251_77664 = state_76244__$1;
(statearr_76251_77664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (6))){
var state_76244__$1 = state_76244;
var statearr_76252_77665 = state_76244__$1;
(statearr_76252_77665[(2)] = null);

(statearr_76252_77665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (3))){
var inst_76241 = (state_76244[(2)]);
var inst_76242 = cljs.core.async.close_BANG_(out);
var state_76244__$1 = (function (){var statearr_76253 = state_76244;
(statearr_76253[(9)] = inst_76241);

return statearr_76253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76244__$1,inst_76242);
} else {
if((state_val_76245 === (2))){
var state_76244__$1 = state_76244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76244__$1,(4),ch);
} else {
if((state_val_76245 === (11))){
var inst_76220 = (state_76244[(8)]);
var inst_76233 = (state_76244[(2)]);
var inst_76217 = inst_76220;
var state_76244__$1 = (function (){var statearr_76254 = state_76244;
(statearr_76254[(10)] = inst_76233);

(statearr_76254[(7)] = inst_76217);

return statearr_76254;
})();
var statearr_76255_77666 = state_76244__$1;
(statearr_76255_77666[(2)] = null);

(statearr_76255_77666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (9))){
var inst_76220 = (state_76244[(8)]);
var state_76244__$1 = state_76244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76244__$1,(11),out,inst_76220);
} else {
if((state_val_76245 === (5))){
var inst_76220 = (state_76244[(8)]);
var inst_76217 = (state_76244[(7)]);
var inst_76228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76220,inst_76217);
var state_76244__$1 = state_76244;
if(inst_76228){
var statearr_76257_77667 = state_76244__$1;
(statearr_76257_77667[(1)] = (8));

} else {
var statearr_76258_77668 = state_76244__$1;
(statearr_76258_77668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (10))){
var inst_76236 = (state_76244[(2)]);
var state_76244__$1 = state_76244;
var statearr_76259_77669 = state_76244__$1;
(statearr_76259_77669[(2)] = inst_76236);

(statearr_76259_77669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76245 === (8))){
var inst_76217 = (state_76244[(7)]);
var tmp76256 = inst_76217;
var inst_76217__$1 = tmp76256;
var state_76244__$1 = (function (){var statearr_76260 = state_76244;
(statearr_76260[(7)] = inst_76217__$1);

return statearr_76260;
})();
var statearr_76261_77670 = state_76244__$1;
(statearr_76261_77670[(2)] = null);

(statearr_76261_77670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_76263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76263[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_76263[(1)] = (1));

return statearr_76263;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_76244){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_76244);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e76267){var ex__32948__auto__ = e76267;
var statearr_76268_77672 = state_76244;
(statearr_76268_77672[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_76244[(4)]))){
var statearr_76269_77674 = state_76244;
(statearr_76269_77674[(1)] = cljs.core.first((state_76244[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77675 = state_76244;
state_76244 = G__77675;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_76244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_76244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_76270 = f__33109__auto__();
(statearr_76270[(6)] = c__33108__auto___77657);

return statearr_76270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__76272 = arguments.length;
switch (G__76272) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_76314){
var state_val_76315 = (state_76314[(1)]);
if((state_val_76315 === (7))){
var inst_76309 = (state_76314[(2)]);
var state_76314__$1 = state_76314;
var statearr_76318_77678 = state_76314__$1;
(statearr_76318_77678[(2)] = inst_76309);

(statearr_76318_77678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (1))){
var inst_76275 = (new Array(n));
var inst_76276 = inst_76275;
var inst_76277 = (0);
var state_76314__$1 = (function (){var statearr_76324 = state_76314;
(statearr_76324[(7)] = inst_76276);

(statearr_76324[(8)] = inst_76277);

return statearr_76324;
})();
var statearr_76327_77679 = state_76314__$1;
(statearr_76327_77679[(2)] = null);

(statearr_76327_77679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (4))){
var inst_76280 = (state_76314[(9)]);
var inst_76280__$1 = (state_76314[(2)]);
var inst_76281 = (inst_76280__$1 == null);
var inst_76282 = cljs.core.not(inst_76281);
var state_76314__$1 = (function (){var statearr_76329 = state_76314;
(statearr_76329[(9)] = inst_76280__$1);

return statearr_76329;
})();
if(inst_76282){
var statearr_76330_77680 = state_76314__$1;
(statearr_76330_77680[(1)] = (5));

} else {
var statearr_76333_77681 = state_76314__$1;
(statearr_76333_77681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (15))){
var inst_76303 = (state_76314[(2)]);
var state_76314__$1 = state_76314;
var statearr_76334_77682 = state_76314__$1;
(statearr_76334_77682[(2)] = inst_76303);

(statearr_76334_77682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (13))){
var state_76314__$1 = state_76314;
var statearr_76335_77683 = state_76314__$1;
(statearr_76335_77683[(2)] = null);

(statearr_76335_77683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (6))){
var inst_76277 = (state_76314[(8)]);
var inst_76299 = (inst_76277 > (0));
var state_76314__$1 = state_76314;
if(cljs.core.truth_(inst_76299)){
var statearr_76336_77684 = state_76314__$1;
(statearr_76336_77684[(1)] = (12));

} else {
var statearr_76337_77687 = state_76314__$1;
(statearr_76337_77687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (3))){
var inst_76311 = (state_76314[(2)]);
var state_76314__$1 = state_76314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76314__$1,inst_76311);
} else {
if((state_val_76315 === (12))){
var inst_76276 = (state_76314[(7)]);
var inst_76301 = cljs.core.vec(inst_76276);
var state_76314__$1 = state_76314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76314__$1,(15),out,inst_76301);
} else {
if((state_val_76315 === (2))){
var state_76314__$1 = state_76314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76314__$1,(4),ch);
} else {
if((state_val_76315 === (11))){
var inst_76293 = (state_76314[(2)]);
var inst_76294 = (new Array(n));
var inst_76276 = inst_76294;
var inst_76277 = (0);
var state_76314__$1 = (function (){var statearr_76339 = state_76314;
(statearr_76339[(7)] = inst_76276);

(statearr_76339[(10)] = inst_76293);

(statearr_76339[(8)] = inst_76277);

return statearr_76339;
})();
var statearr_76340_77689 = state_76314__$1;
(statearr_76340_77689[(2)] = null);

(statearr_76340_77689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (9))){
var inst_76276 = (state_76314[(7)]);
var inst_76291 = cljs.core.vec(inst_76276);
var state_76314__$1 = state_76314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76314__$1,(11),out,inst_76291);
} else {
if((state_val_76315 === (5))){
var inst_76276 = (state_76314[(7)]);
var inst_76286 = (state_76314[(11)]);
var inst_76277 = (state_76314[(8)]);
var inst_76280 = (state_76314[(9)]);
var inst_76284 = (inst_76276[inst_76277] = inst_76280);
var inst_76286__$1 = (inst_76277 + (1));
var inst_76287 = (inst_76286__$1 < n);
var state_76314__$1 = (function (){var statearr_76345 = state_76314;
(statearr_76345[(11)] = inst_76286__$1);

(statearr_76345[(12)] = inst_76284);

return statearr_76345;
})();
if(cljs.core.truth_(inst_76287)){
var statearr_76346_77691 = state_76314__$1;
(statearr_76346_77691[(1)] = (8));

} else {
var statearr_76347_77692 = state_76314__$1;
(statearr_76347_77692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (14))){
var inst_76306 = (state_76314[(2)]);
var inst_76307 = cljs.core.async.close_BANG_(out);
var state_76314__$1 = (function (){var statearr_76349 = state_76314;
(statearr_76349[(13)] = inst_76306);

return statearr_76349;
})();
var statearr_76350_77693 = state_76314__$1;
(statearr_76350_77693[(2)] = inst_76307);

(statearr_76350_77693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (10))){
var inst_76297 = (state_76314[(2)]);
var state_76314__$1 = state_76314;
var statearr_76352_77694 = state_76314__$1;
(statearr_76352_77694[(2)] = inst_76297);

(statearr_76352_77694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76315 === (8))){
var inst_76276 = (state_76314[(7)]);
var inst_76286 = (state_76314[(11)]);
var tmp76348 = inst_76276;
var inst_76276__$1 = tmp76348;
var inst_76277 = inst_76286;
var state_76314__$1 = (function (){var statearr_76354 = state_76314;
(statearr_76354[(7)] = inst_76276__$1);

(statearr_76354[(8)] = inst_76277);

return statearr_76354;
})();
var statearr_76355_77695 = state_76314__$1;
(statearr_76355_77695[(2)] = null);

(statearr_76355_77695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_76356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76356[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_76356[(1)] = (1));

return statearr_76356;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_76314){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_76314);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e76359){var ex__32948__auto__ = e76359;
var statearr_76360_77698 = state_76314;
(statearr_76360_77698[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_76314[(4)]))){
var statearr_76361_77699 = state_76314;
(statearr_76361_77699[(1)] = cljs.core.first((state_76314[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77700 = state_76314;
state_76314 = G__77700;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_76314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_76314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_76362 = f__33109__auto__();
(statearr_76362[(6)] = c__33108__auto___77677);

return statearr_76362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__76367 = arguments.length;
switch (G__76367) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33108__auto___77708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33109__auto__ = (function (){var switch__32944__auto__ = (function (state_76437){
var state_val_76439 = (state_76437[(1)]);
if((state_val_76439 === (7))){
var inst_76433 = (state_76437[(2)]);
var state_76437__$1 = state_76437;
var statearr_76442_77709 = state_76437__$1;
(statearr_76442_77709[(2)] = inst_76433);

(statearr_76442_77709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (1))){
var inst_76384 = [];
var inst_76385 = inst_76384;
var inst_76386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_76437__$1 = (function (){var statearr_76443 = state_76437;
(statearr_76443[(7)] = inst_76386);

(statearr_76443[(8)] = inst_76385);

return statearr_76443;
})();
var statearr_76444_77711 = state_76437__$1;
(statearr_76444_77711[(2)] = null);

(statearr_76444_77711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (4))){
var inst_76390 = (state_76437[(9)]);
var inst_76390__$1 = (state_76437[(2)]);
var inst_76392 = (inst_76390__$1 == null);
var inst_76393 = cljs.core.not(inst_76392);
var state_76437__$1 = (function (){var statearr_76445 = state_76437;
(statearr_76445[(9)] = inst_76390__$1);

return statearr_76445;
})();
if(inst_76393){
var statearr_76446_77719 = state_76437__$1;
(statearr_76446_77719[(1)] = (5));

} else {
var statearr_76447_77720 = state_76437__$1;
(statearr_76447_77720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (15))){
var inst_76385 = (state_76437[(8)]);
var inst_76424 = cljs.core.vec(inst_76385);
var state_76437__$1 = state_76437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76437__$1,(18),out,inst_76424);
} else {
if((state_val_76439 === (13))){
var inst_76419 = (state_76437[(2)]);
var state_76437__$1 = state_76437;
var statearr_76449_77721 = state_76437__$1;
(statearr_76449_77721[(2)] = inst_76419);

(statearr_76449_77721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (6))){
var inst_76385 = (state_76437[(8)]);
var inst_76421 = inst_76385.length;
var inst_76422 = (inst_76421 > (0));
var state_76437__$1 = state_76437;
if(cljs.core.truth_(inst_76422)){
var statearr_76452_77723 = state_76437__$1;
(statearr_76452_77723[(1)] = (15));

} else {
var statearr_76454_77725 = state_76437__$1;
(statearr_76454_77725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (17))){
var inst_76429 = (state_76437[(2)]);
var inst_76431 = cljs.core.async.close_BANG_(out);
var state_76437__$1 = (function (){var statearr_76457 = state_76437;
(statearr_76457[(10)] = inst_76429);

return statearr_76457;
})();
var statearr_76458_77727 = state_76437__$1;
(statearr_76458_77727[(2)] = inst_76431);

(statearr_76458_77727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (3))){
var inst_76435 = (state_76437[(2)]);
var state_76437__$1 = state_76437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76437__$1,inst_76435);
} else {
if((state_val_76439 === (12))){
var inst_76385 = (state_76437[(8)]);
var inst_76409 = cljs.core.vec(inst_76385);
var state_76437__$1 = state_76437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76437__$1,(14),out,inst_76409);
} else {
if((state_val_76439 === (2))){
var state_76437__$1 = state_76437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76437__$1,(4),ch);
} else {
if((state_val_76439 === (11))){
var inst_76395 = (state_76437[(11)]);
var inst_76385 = (state_76437[(8)]);
var inst_76390 = (state_76437[(9)]);
var inst_76406 = inst_76385.push(inst_76390);
var tmp76467 = inst_76385;
var inst_76385__$1 = tmp76467;
var inst_76386 = inst_76395;
var state_76437__$1 = (function (){var statearr_76475 = state_76437;
(statearr_76475[(12)] = inst_76406);

(statearr_76475[(7)] = inst_76386);

(statearr_76475[(8)] = inst_76385__$1);

return statearr_76475;
})();
var statearr_76478_77733 = state_76437__$1;
(statearr_76478_77733[(2)] = null);

(statearr_76478_77733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (9))){
var inst_76386 = (state_76437[(7)]);
var inst_76399 = cljs.core.keyword_identical_QMARK_(inst_76386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_76437__$1 = state_76437;
var statearr_76479_77734 = state_76437__$1;
(statearr_76479_77734[(2)] = inst_76399);

(statearr_76479_77734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (5))){
var inst_76386 = (state_76437[(7)]);
var inst_76395 = (state_76437[(11)]);
var inst_76390 = (state_76437[(9)]);
var inst_76396 = (state_76437[(13)]);
var inst_76395__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76390) : f.call(null,inst_76390));
var inst_76396__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76395__$1,inst_76386);
var state_76437__$1 = (function (){var statearr_76481 = state_76437;
(statearr_76481[(11)] = inst_76395__$1);

(statearr_76481[(13)] = inst_76396__$1);

return statearr_76481;
})();
if(inst_76396__$1){
var statearr_76482_77741 = state_76437__$1;
(statearr_76482_77741[(1)] = (8));

} else {
var statearr_76483_77742 = state_76437__$1;
(statearr_76483_77742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (14))){
var inst_76395 = (state_76437[(11)]);
var inst_76390 = (state_76437[(9)]);
var inst_76412 = (state_76437[(2)]);
var inst_76415 = [];
var inst_76416 = inst_76415.push(inst_76390);
var inst_76385 = inst_76415;
var inst_76386 = inst_76395;
var state_76437__$1 = (function (){var statearr_76487 = state_76437;
(statearr_76487[(14)] = inst_76416);

(statearr_76487[(7)] = inst_76386);

(statearr_76487[(15)] = inst_76412);

(statearr_76487[(8)] = inst_76385);

return statearr_76487;
})();
var statearr_76495_77743 = state_76437__$1;
(statearr_76495_77743[(2)] = null);

(statearr_76495_77743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (16))){
var state_76437__$1 = state_76437;
var statearr_76499_77744 = state_76437__$1;
(statearr_76499_77744[(2)] = null);

(statearr_76499_77744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (10))){
var inst_76401 = (state_76437[(2)]);
var state_76437__$1 = state_76437;
if(cljs.core.truth_(inst_76401)){
var statearr_76500_77745 = state_76437__$1;
(statearr_76500_77745[(1)] = (11));

} else {
var statearr_76502_77747 = state_76437__$1;
(statearr_76502_77747[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (18))){
var inst_76426 = (state_76437[(2)]);
var state_76437__$1 = state_76437;
var statearr_76503_77752 = state_76437__$1;
(statearr_76503_77752[(2)] = inst_76426);

(statearr_76503_77752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76439 === (8))){
var inst_76396 = (state_76437[(13)]);
var state_76437__$1 = state_76437;
var statearr_76504_77754 = state_76437__$1;
(statearr_76504_77754[(2)] = inst_76396);

(statearr_76504_77754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32945__auto__ = null;
var cljs$core$async$state_machine__32945__auto____0 = (function (){
var statearr_76506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76506[(0)] = cljs$core$async$state_machine__32945__auto__);

(statearr_76506[(1)] = (1));

return statearr_76506;
});
var cljs$core$async$state_machine__32945__auto____1 = (function (state_76437){
while(true){
var ret_value__32946__auto__ = (function (){try{while(true){
var result__32947__auto__ = switch__32944__auto__(state_76437);
if(cljs.core.keyword_identical_QMARK_(result__32947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32947__auto__;
}
break;
}
}catch (e76510){var ex__32948__auto__ = e76510;
var statearr_76511_77755 = state_76437;
(statearr_76511_77755[(2)] = ex__32948__auto__);


if(cljs.core.seq((state_76437[(4)]))){
var statearr_76512_77756 = state_76437;
(statearr_76512_77756[(1)] = cljs.core.first((state_76437[(4)])));

} else {
throw ex__32948__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77758 = state_76437;
state_76437 = G__77758;
continue;
} else {
return ret_value__32946__auto__;
}
break;
}
});
cljs$core$async$state_machine__32945__auto__ = function(state_76437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32945__auto____1.call(this,state_76437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32945__auto____0;
cljs$core$async$state_machine__32945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32945__auto____1;
return cljs$core$async$state_machine__32945__auto__;
})()
})();
var state__33110__auto__ = (function (){var statearr_76515 = f__33109__auto__();
(statearr_76515[(6)] = c__33108__auto___77708);

return statearr_76515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33110__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
