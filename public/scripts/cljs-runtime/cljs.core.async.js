goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28861 = arguments.length;
switch (G__28861) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28866 = (function (f,blockable,meta28867){
this.f = f;
this.blockable = blockable;
this.meta28867 = meta28867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28868,meta28867__$1){
var self__ = this;
var _28868__$1 = this;
return (new cljs.core.async.t_cljs$core$async28866(self__.f,self__.blockable,meta28867__$1));
}));

(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28868){
var self__ = this;
var _28868__$1 = this;
return self__.meta28867;
}));

(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28867","meta28867",-1958004079,null)], null);
}));

(cljs.core.async.t_cljs$core$async28866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28866");

(cljs.core.async.t_cljs$core$async28866.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28866.
 */
cljs.core.async.__GT_t_cljs$core$async28866 = (function cljs$core$async$__GT_t_cljs$core$async28866(f__$1,blockable__$1,meta28867){
return (new cljs.core.async.t_cljs$core$async28866(f__$1,blockable__$1,meta28867));
});

}

return (new cljs.core.async.t_cljs$core$async28866(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28901 = arguments.length;
switch (G__28901) {
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
var G__28911 = arguments.length;
switch (G__28911) {
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
var G__28972 = arguments.length;
switch (G__28972) {
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
var val_31773 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31773) : fn1.call(null,val_31773));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31773) : fn1.call(null,val_31773));
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
var G__28981 = arguments.length;
switch (G__28981) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___31785 = n;
var x_31787 = (0);
while(true){
if((x_31787 < n__4613__auto___31785)){
(a[x_31787] = x_31787);

var G__31788 = (x_31787 + (1));
x_31787 = G__31788;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28982 = (function (flag,meta28983){
this.flag = flag;
this.meta28983 = meta28983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28984,meta28983__$1){
var self__ = this;
var _28984__$1 = this;
return (new cljs.core.async.t_cljs$core$async28982(self__.flag,meta28983__$1));
}));

(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28984){
var self__ = this;
var _28984__$1 = this;
return self__.meta28983;
}));

(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28983","meta28983",-281997517,null)], null);
}));

(cljs.core.async.t_cljs$core$async28982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28982");

(cljs.core.async.t_cljs$core$async28982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28982.
 */
cljs.core.async.__GT_t_cljs$core$async28982 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28982(flag__$1,meta28983){
return (new cljs.core.async.t_cljs$core$async28982(flag__$1,meta28983));
});

}

return (new cljs.core.async.t_cljs$core$async28982(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28994 = (function (flag,cb,meta28995){
this.flag = flag;
this.cb = cb;
this.meta28995 = meta28995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28996,meta28995__$1){
var self__ = this;
var _28996__$1 = this;
return (new cljs.core.async.t_cljs$core$async28994(self__.flag,self__.cb,meta28995__$1));
}));

(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28996){
var self__ = this;
var _28996__$1 = this;
return self__.meta28995;
}));

(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28995","meta28995",570756579,null)], null);
}));

(cljs.core.async.t_cljs$core$async28994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28994");

(cljs.core.async.t_cljs$core$async28994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28994.
 */
cljs.core.async.__GT_t_cljs$core$async28994 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28994(flag__$1,cb__$1,meta28995){
return (new cljs.core.async.t_cljs$core$async28994(flag__$1,cb__$1,meta28995));
});

}

return (new cljs.core.async.t_cljs$core$async28994(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29009_SHARP_){
var G__29019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29009_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29019) : fret.call(null,G__29019));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29010_SHARP_){
var G__29021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29010_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29021) : fret.call(null,G__29021));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31808 = (i + (1));
i = G__31808;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___31809 = arguments.length;
var i__4737__auto___31810 = (0);
while(true){
if((i__4737__auto___31810 < len__4736__auto___31809)){
args__4742__auto__.push((arguments[i__4737__auto___31810]));

var G__31811 = (i__4737__auto___31810 + (1));
i__4737__auto___31810 = G__31811;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29062){
var map__29063 = p__29062;
var map__29063__$1 = (((((!((map__29063 == null))))?(((((map__29063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29063):map__29063);
var opts = map__29063__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29057){
var G__29058 = cljs.core.first(seq29057);
var seq29057__$1 = cljs.core.next(seq29057);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29058,seq29057__$1);
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
var G__29084 = arguments.length;
switch (G__29084) {
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
var c__28695__auto___31813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29165){
var state_val_29166 = (state_29165[(1)]);
if((state_val_29166 === (7))){
var inst_29145 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29175_31814 = state_29165__$1;
(statearr_29175_31814[(2)] = inst_29145);

(statearr_29175_31814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (1))){
var state_29165__$1 = state_29165;
var statearr_29176_31815 = state_29165__$1;
(statearr_29176_31815[(2)] = null);

(statearr_29176_31815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (4))){
var inst_29126 = (state_29165[(7)]);
var inst_29126__$1 = (state_29165[(2)]);
var inst_29128 = (inst_29126__$1 == null);
var state_29165__$1 = (function (){var statearr_29177 = state_29165;
(statearr_29177[(7)] = inst_29126__$1);

return statearr_29177;
})();
if(cljs.core.truth_(inst_29128)){
var statearr_29178_31817 = state_29165__$1;
(statearr_29178_31817[(1)] = (5));

} else {
var statearr_29179_31820 = state_29165__$1;
(statearr_29179_31820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (13))){
var state_29165__$1 = state_29165;
var statearr_29181_31821 = state_29165__$1;
(statearr_29181_31821[(2)] = null);

(statearr_29181_31821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (6))){
var inst_29126 = (state_29165[(7)]);
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29165__$1,(11),to,inst_29126);
} else {
if((state_val_29166 === (3))){
var inst_29163 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29165__$1,inst_29163);
} else {
if((state_val_29166 === (12))){
var state_29165__$1 = state_29165;
var statearr_29186_31830 = state_29165__$1;
(statearr_29186_31830[(2)] = null);

(statearr_29186_31830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (2))){
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29165__$1,(4),from);
} else {
if((state_val_29166 === (11))){
var inst_29138 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29138)){
var statearr_29190_31835 = state_29165__$1;
(statearr_29190_31835[(1)] = (12));

} else {
var statearr_29191_31836 = state_29165__$1;
(statearr_29191_31836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (9))){
var state_29165__$1 = state_29165;
var statearr_29192_31837 = state_29165__$1;
(statearr_29192_31837[(2)] = null);

(statearr_29192_31837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (5))){
var state_29165__$1 = state_29165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29193_31838 = state_29165__$1;
(statearr_29193_31838[(1)] = (8));

} else {
var statearr_29194_31839 = state_29165__$1;
(statearr_29194_31839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (14))){
var inst_29143 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29195_31840 = state_29165__$1;
(statearr_29195_31840[(2)] = inst_29143);

(statearr_29195_31840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (10))){
var inst_29135 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29196_31841 = state_29165__$1;
(statearr_29196_31841[(2)] = inst_29135);

(statearr_29196_31841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (8))){
var inst_29132 = cljs.core.async.close_BANG_(to);
var state_29165__$1 = state_29165;
var statearr_29197_31842 = state_29165__$1;
(statearr_29197_31842[(2)] = inst_29132);

(statearr_29197_31842[(1)] = (10));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29198 = [null,null,null,null,null,null,null,null];
(statearr_29198[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29198[(1)] = (1));

return statearr_29198;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29165){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29165);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29203){var ex__28548__auto__ = e29203;
var statearr_29204_31845 = state_29165;
(statearr_29204_31845[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29165[(4)]))){
var statearr_29206_31847 = state_29165;
(statearr_29206_31847[(1)] = cljs.core.first((state_29165[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_29165;
state_29165 = G__31848;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29217 = f__28696__auto__();
(statearr_29217[(6)] = c__28695__auto___31813);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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
var process = (function (p__29222){
var vec__29223 = p__29222;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(1),null);
var job = vec__29223;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28695__auto___31849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29230){
var state_val_29231 = (state_29230[(1)]);
if((state_val_29231 === (1))){
var state_29230__$1 = state_29230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29230__$1,(2),res,v);
} else {
if((state_val_29231 === (2))){
var inst_29227 = (state_29230[(2)]);
var inst_29228 = cljs.core.async.close_BANG_(res);
var state_29230__$1 = (function (){var statearr_29241 = state_29230;
(statearr_29241[(7)] = inst_29227);

return statearr_29241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29230__$1,inst_29228);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29230){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29230);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29260){var ex__28548__auto__ = e29260;
var statearr_29261_31850 = state_29230;
(statearr_29261_31850[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29230[(4)]))){
var statearr_29262_31852 = state_29230;
(statearr_29262_31852[(1)] = cljs.core.first((state_29230[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31853 = state_29230;
state_29230 = G__31853;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29267 = f__28696__auto__();
(statearr_29267[(6)] = c__28695__auto___31849);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29268){
var vec__29269 = p__29268;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29269,(1),null);
var job = vec__29269;
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
var n__4613__auto___31855 = n;
var __31856 = (0);
while(true){
if((__31856 < n__4613__auto___31855)){
var G__29276_31858 = type;
var G__29276_31859__$1 = (((G__29276_31858 instanceof cljs.core.Keyword))?G__29276_31858.fqn:null);
switch (G__29276_31859__$1) {
case "compute":
var c__28695__auto___31862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31856,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = ((function (__31856,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function (state_29289){
var state_val_29290 = (state_29289[(1)]);
if((state_val_29290 === (1))){
var state_29289__$1 = state_29289;
var statearr_29291_31863 = state_29289__$1;
(statearr_29291_31863[(2)] = null);

(statearr_29291_31863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (2))){
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29289__$1,(4),jobs);
} else {
if((state_val_29290 === (3))){
var inst_29287 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29289__$1,inst_29287);
} else {
if((state_val_29290 === (4))){
var inst_29279 = (state_29289[(2)]);
var inst_29280 = process(inst_29279);
var state_29289__$1 = state_29289;
if(cljs.core.truth_(inst_29280)){
var statearr_29305_31864 = state_29289__$1;
(statearr_29305_31864[(1)] = (5));

} else {
var statearr_29307_31865 = state_29289__$1;
(statearr_29307_31865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (5))){
var state_29289__$1 = state_29289;
var statearr_29309_31866 = state_29289__$1;
(statearr_29309_31866[(2)] = null);

(statearr_29309_31866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (6))){
var state_29289__$1 = state_29289;
var statearr_29311_31867 = state_29289__$1;
(statearr_29311_31867[(2)] = null);

(statearr_29311_31867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (7))){
var inst_29285 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29314_31870 = state_29289__$1;
(statearr_29314_31870[(2)] = inst_29285);

(statearr_29314_31870[(1)] = (3));


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
});})(__31856,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
;
return ((function (__31856,switch__28544__auto__,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29315 = [null,null,null,null,null,null,null];
(statearr_29315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29315[(1)] = (1));

return statearr_29315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29289){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29289);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29316){var ex__28548__auto__ = e29316;
var statearr_29317_31872 = state_29289;
(statearr_29317_31872[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29289[(4)]))){
var statearr_29318_31873 = state_29289;
(statearr_29318_31873[(1)] = cljs.core.first((state_29289[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31874 = state_29289;
state_29289 = G__31874;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
;})(__31856,switch__28544__auto__,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
})();
var state__28697__auto__ = (function (){var statearr_29319 = f__28696__auto__();
(statearr_29319[(6)] = c__28695__auto___31862);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
});})(__31856,c__28695__auto___31862,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
);


break;
case "async":
var c__28695__auto___31877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31856,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = ((function (__31856,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function (state_29333){
var state_val_29334 = (state_29333[(1)]);
if((state_val_29334 === (1))){
var state_29333__$1 = state_29333;
var statearr_29346_31878 = state_29333__$1;
(statearr_29346_31878[(2)] = null);

(statearr_29346_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (2))){
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29333__$1,(4),jobs);
} else {
if((state_val_29334 === (3))){
var inst_29331 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29333__$1,inst_29331);
} else {
if((state_val_29334 === (4))){
var inst_29322 = (state_29333[(2)]);
var inst_29324 = async(inst_29322);
var state_29333__$1 = state_29333;
if(cljs.core.truth_(inst_29324)){
var statearr_29347_31882 = state_29333__$1;
(statearr_29347_31882[(1)] = (5));

} else {
var statearr_29348_31883 = state_29333__$1;
(statearr_29348_31883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (5))){
var state_29333__$1 = state_29333;
var statearr_29354_31885 = state_29333__$1;
(statearr_29354_31885[(2)] = null);

(statearr_29354_31885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (6))){
var state_29333__$1 = state_29333;
var statearr_29355_31887 = state_29333__$1;
(statearr_29355_31887[(2)] = null);

(statearr_29355_31887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (7))){
var inst_29329 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29356_31889 = state_29333__$1;
(statearr_29356_31889[(2)] = inst_29329);

(statearr_29356_31889[(1)] = (3));


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
});})(__31856,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
;
return ((function (__31856,switch__28544__auto__,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29357 = [null,null,null,null,null,null,null];
(statearr_29357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29357[(1)] = (1));

return statearr_29357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29333){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29333);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29358){var ex__28548__auto__ = e29358;
var statearr_29359_31890 = state_29333;
(statearr_29359_31890[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29333[(4)]))){
var statearr_29361_31891 = state_29333;
(statearr_29361_31891[(1)] = cljs.core.first((state_29333[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31894 = state_29333;
state_29333 = G__31894;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
;})(__31856,switch__28544__auto__,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
})();
var state__28697__auto__ = (function (){var statearr_29364 = f__28696__auto__();
(statearr_29364[(6)] = c__28695__auto___31877);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
});})(__31856,c__28695__auto___31877,G__29276_31858,G__29276_31859__$1,n__4613__auto___31855,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29276_31859__$1)].join('')));

}

var G__31902 = (__31856 + (1));
__31856 = G__31902;
continue;
} else {
}
break;
}

var c__28695__auto___31903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (7))){
var inst_29394 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29403_31905 = state_29399__$1;
(statearr_29403_31905[(2)] = inst_29394);

(statearr_29403_31905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (1))){
var state_29399__$1 = state_29399;
var statearr_29405_31907 = state_29399__$1;
(statearr_29405_31907[(2)] = null);

(statearr_29405_31907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (4))){
var inst_29373 = (state_29399[(7)]);
var inst_29373__$1 = (state_29399[(2)]);
var inst_29380 = (inst_29373__$1 == null);
var state_29399__$1 = (function (){var statearr_29411 = state_29399;
(statearr_29411[(7)] = inst_29373__$1);

return statearr_29411;
})();
if(cljs.core.truth_(inst_29380)){
var statearr_29412_31908 = state_29399__$1;
(statearr_29412_31908[(1)] = (5));

} else {
var statearr_29414_31909 = state_29399__$1;
(statearr_29414_31909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (6))){
var inst_29373 = (state_29399[(7)]);
var inst_29384 = (state_29399[(8)]);
var inst_29384__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29386 = [inst_29373,inst_29384__$1];
var inst_29387 = (new cljs.core.PersistentVector(null,2,(5),inst_29385,inst_29386,null));
var state_29399__$1 = (function (){var statearr_29418 = state_29399;
(statearr_29418[(8)] = inst_29384__$1);

return statearr_29418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29399__$1,(8),jobs,inst_29387);
} else {
if((state_val_29400 === (3))){
var inst_29396 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29399__$1,inst_29396);
} else {
if((state_val_29400 === (2))){
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29399__$1,(4),from);
} else {
if((state_val_29400 === (9))){
var inst_29391 = (state_29399[(2)]);
var state_29399__$1 = (function (){var statearr_29419 = state_29399;
(statearr_29419[(9)] = inst_29391);

return statearr_29419;
})();
var statearr_29420_31912 = state_29399__$1;
(statearr_29420_31912[(2)] = null);

(statearr_29420_31912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (5))){
var inst_29382 = cljs.core.async.close_BANG_(jobs);
var state_29399__$1 = state_29399;
var statearr_29422_31914 = state_29399__$1;
(statearr_29422_31914[(2)] = inst_29382);

(statearr_29422_31914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (8))){
var inst_29384 = (state_29399[(8)]);
var inst_29389 = (state_29399[(2)]);
var state_29399__$1 = (function (){var statearr_29424 = state_29399;
(statearr_29424[(10)] = inst_29389);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29399__$1,(9),results,inst_29384);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29433[(1)] = (1));

return statearr_29433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29399){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29399);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29435){var ex__28548__auto__ = e29435;
var statearr_29436_31919 = state_29399;
(statearr_29436_31919[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29399[(4)]))){
var statearr_29438_31920 = state_29399;
(statearr_29438_31920[(1)] = cljs.core.first((state_29399[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31923 = state_29399;
state_29399 = G__31923;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29441 = f__28696__auto__();
(statearr_29441[(6)] = c__28695__auto___31903);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


var c__28695__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29492 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29504_31928 = state_29497__$1;
(statearr_29504_31928[(2)] = inst_29492);

(statearr_29504_31928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (20))){
var state_29497__$1 = state_29497;
var statearr_29506_31929 = state_29497__$1;
(statearr_29506_31929[(2)] = null);

(statearr_29506_31929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var state_29497__$1 = state_29497;
var statearr_29508_31930 = state_29497__$1;
(statearr_29508_31930[(2)] = null);

(statearr_29508_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29451 = (state_29497[(7)]);
var inst_29451__$1 = (state_29497[(2)]);
var inst_29452 = (inst_29451__$1 == null);
var state_29497__$1 = (function (){var statearr_29512 = state_29497;
(statearr_29512[(7)] = inst_29451__$1);

return statearr_29512;
})();
if(cljs.core.truth_(inst_29452)){
var statearr_29513_31932 = state_29497__$1;
(statearr_29513_31932[(1)] = (5));

} else {
var statearr_29514_31935 = state_29497__$1;
(statearr_29514_31935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (15))){
var inst_29467 = (state_29497[(8)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29497__$1,(18),to,inst_29467);
} else {
if((state_val_29498 === (21))){
var inst_29487 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29518_31937 = state_29497__$1;
(statearr_29518_31937[(2)] = inst_29487);

(statearr_29518_31937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (13))){
var inst_29489 = (state_29497[(2)]);
var state_29497__$1 = (function (){var statearr_29524 = state_29497;
(statearr_29524[(9)] = inst_29489);

return statearr_29524;
})();
var statearr_29527_31939 = state_29497__$1;
(statearr_29527_31939[(2)] = null);

(statearr_29527_31939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (6))){
var inst_29451 = (state_29497[(7)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29497__$1,(11),inst_29451);
} else {
if((state_val_29498 === (17))){
var inst_29482 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29482)){
var statearr_29530_31941 = state_29497__$1;
(statearr_29530_31941[(1)] = (19));

} else {
var statearr_29531_31943 = state_29497__$1;
(statearr_29531_31943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29494 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29497__$1,inst_29494);
} else {
if((state_val_29498 === (12))){
var inst_29461 = (state_29497[(10)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29497__$1,(14),inst_29461);
} else {
if((state_val_29498 === (2))){
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29497__$1,(4),results);
} else {
if((state_val_29498 === (19))){
var state_29497__$1 = state_29497;
var statearr_29532_31948 = state_29497__$1;
(statearr_29532_31948[(2)] = null);

(statearr_29532_31948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (11))){
var inst_29461 = (state_29497[(2)]);
var state_29497__$1 = (function (){var statearr_29536 = state_29497;
(statearr_29536[(10)] = inst_29461);

return statearr_29536;
})();
var statearr_29537_31949 = state_29497__$1;
(statearr_29537_31949[(2)] = null);

(statearr_29537_31949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (9))){
var state_29497__$1 = state_29497;
var statearr_29542_31956 = state_29497__$1;
(statearr_29542_31956[(2)] = null);

(statearr_29542_31956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (5))){
var state_29497__$1 = state_29497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29544_31958 = state_29497__$1;
(statearr_29544_31958[(1)] = (8));

} else {
var statearr_29545_31959 = state_29497__$1;
(statearr_29545_31959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (14))){
var inst_29467 = (state_29497[(8)]);
var inst_29467__$1 = (state_29497[(2)]);
var inst_29469 = (inst_29467__$1 == null);
var inst_29470 = cljs.core.not(inst_29469);
var state_29497__$1 = (function (){var statearr_29546 = state_29497;
(statearr_29546[(8)] = inst_29467__$1);

return statearr_29546;
})();
if(inst_29470){
var statearr_29547_31962 = state_29497__$1;
(statearr_29547_31962[(1)] = (15));

} else {
var statearr_29548_31963 = state_29497__$1;
(statearr_29548_31963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (16))){
var state_29497__$1 = state_29497;
var statearr_29549_31964 = state_29497__$1;
(statearr_29549_31964[(2)] = false);

(statearr_29549_31964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var inst_29458 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29550_31965 = state_29497__$1;
(statearr_29550_31965[(2)] = inst_29458);

(statearr_29550_31965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (18))){
var inst_29479 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29551_31966 = state_29497__$1;
(statearr_29551_31966[(2)] = inst_29479);

(statearr_29551_31966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29455 = cljs.core.async.close_BANG_(to);
var state_29497__$1 = state_29497;
var statearr_29556_31968 = state_29497__$1;
(statearr_29556_31968[(2)] = inst_29455);

(statearr_29556_31968[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_29557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__);

(statearr_29557[(1)] = (1));

return statearr_29557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1 = (function (state_29497){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29497);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29559){var ex__28548__auto__ = e29559;
var statearr_29561_31970 = state_29497;
(statearr_29561_31970[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29497[(4)]))){
var statearr_29562_31971 = state_29497;
(statearr_29562_31971[(1)] = cljs.core.first((state_29497[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31972 = state_29497;
state_29497 = G__31972;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29563 = f__28696__auto__();
(statearr_29563[(6)] = c__28695__auto__);

return statearr_29563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

return c__28695__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29570 = arguments.length;
switch (G__29570) {
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
var G__29578 = arguments.length;
switch (G__29578) {
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
var G__29586 = arguments.length;
switch (G__29586) {
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
var c__28695__auto___31980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29619){
var state_val_29620 = (state_29619[(1)]);
if((state_val_29620 === (7))){
var inst_29615 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29624_31987 = state_29619__$1;
(statearr_29624_31987[(2)] = inst_29615);

(statearr_29624_31987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (1))){
var state_29619__$1 = state_29619;
var statearr_29625_31992 = state_29619__$1;
(statearr_29625_31992[(2)] = null);

(statearr_29625_31992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (4))){
var inst_29595 = (state_29619[(7)]);
var inst_29595__$1 = (state_29619[(2)]);
var inst_29596 = (inst_29595__$1 == null);
var state_29619__$1 = (function (){var statearr_29626 = state_29619;
(statearr_29626[(7)] = inst_29595__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29596)){
var statearr_29628_31994 = state_29619__$1;
(statearr_29628_31994[(1)] = (5));

} else {
var statearr_29629_31995 = state_29619__$1;
(statearr_29629_31995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (13))){
var state_29619__$1 = state_29619;
var statearr_29631_31999 = state_29619__$1;
(statearr_29631_31999[(2)] = null);

(statearr_29631_31999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (6))){
var inst_29595 = (state_29619[(7)]);
var inst_29601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29595) : p.call(null,inst_29595));
var state_29619__$1 = state_29619;
if(cljs.core.truth_(inst_29601)){
var statearr_29632_32000 = state_29619__$1;
(statearr_29632_32000[(1)] = (9));

} else {
var statearr_29634_32001 = state_29619__$1;
(statearr_29634_32001[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (3))){
var inst_29617 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29619__$1,inst_29617);
} else {
if((state_val_29620 === (12))){
var state_29619__$1 = state_29619;
var statearr_29635_32005 = state_29619__$1;
(statearr_29635_32005[(2)] = null);

(statearr_29635_32005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (2))){
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29619__$1,(4),ch);
} else {
if((state_val_29620 === (11))){
var inst_29595 = (state_29619[(7)]);
var inst_29605 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29619__$1,(8),inst_29605,inst_29595);
} else {
if((state_val_29620 === (9))){
var state_29619__$1 = state_29619;
var statearr_29638_32009 = state_29619__$1;
(statearr_29638_32009[(2)] = tc);

(statearr_29638_32009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (5))){
var inst_29598 = cljs.core.async.close_BANG_(tc);
var inst_29599 = cljs.core.async.close_BANG_(fc);
var state_29619__$1 = (function (){var statearr_29640 = state_29619;
(statearr_29640[(8)] = inst_29598);

return statearr_29640;
})();
var statearr_29643_32010 = state_29619__$1;
(statearr_29643_32010[(2)] = inst_29599);

(statearr_29643_32010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (14))){
var inst_29612 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29644_32011 = state_29619__$1;
(statearr_29644_32011[(2)] = inst_29612);

(statearr_29644_32011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (10))){
var state_29619__$1 = state_29619;
var statearr_29645_32012 = state_29619__$1;
(statearr_29645_32012[(2)] = fc);

(statearr_29645_32012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (8))){
var inst_29607 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
if(cljs.core.truth_(inst_29607)){
var statearr_29646_32017 = state_29619__$1;
(statearr_29646_32017[(1)] = (12));

} else {
var statearr_29647_32018 = state_29619__$1;
(statearr_29647_32018[(1)] = (13));

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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29648 = [null,null,null,null,null,null,null,null,null];
(statearr_29648[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29648[(1)] = (1));

return statearr_29648;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29619){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29619);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29649){var ex__28548__auto__ = e29649;
var statearr_29650_32023 = state_29619;
(statearr_29650_32023[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29619[(4)]))){
var statearr_29651_32024 = state_29619;
(statearr_29651_32024[(1)] = cljs.core.first((state_29619[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32029 = state_29619;
state_29619 = G__32029;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29662 = f__28696__auto__();
(statearr_29662[(6)] = c__28695__auto___31980);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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
var c__28695__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29694){
var state_val_29695 = (state_29694[(1)]);
if((state_val_29695 === (7))){
var inst_29686 = (state_29694[(2)]);
var state_29694__$1 = state_29694;
var statearr_29699_32043 = state_29694__$1;
(statearr_29699_32043[(2)] = inst_29686);

(statearr_29699_32043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (1))){
var inst_29664 = init;
var inst_29666 = inst_29664;
var state_29694__$1 = (function (){var statearr_29700 = state_29694;
(statearr_29700[(7)] = inst_29666);

return statearr_29700;
})();
var statearr_29701_32046 = state_29694__$1;
(statearr_29701_32046[(2)] = null);

(statearr_29701_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (4))){
var inst_29669 = (state_29694[(8)]);
var inst_29669__$1 = (state_29694[(2)]);
var inst_29670 = (inst_29669__$1 == null);
var state_29694__$1 = (function (){var statearr_29702 = state_29694;
(statearr_29702[(8)] = inst_29669__$1);

return statearr_29702;
})();
if(cljs.core.truth_(inst_29670)){
var statearr_29703_32057 = state_29694__$1;
(statearr_29703_32057[(1)] = (5));

} else {
var statearr_29705_32058 = state_29694__$1;
(statearr_29705_32058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (6))){
var inst_29669 = (state_29694[(8)]);
var inst_29666 = (state_29694[(7)]);
var inst_29674 = (state_29694[(9)]);
var inst_29674__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29666,inst_29669) : f.call(null,inst_29666,inst_29669));
var inst_29678 = cljs.core.reduced_QMARK_(inst_29674__$1);
var state_29694__$1 = (function (){var statearr_29708 = state_29694;
(statearr_29708[(9)] = inst_29674__$1);

return statearr_29708;
})();
if(inst_29678){
var statearr_29709_32062 = state_29694__$1;
(statearr_29709_32062[(1)] = (8));

} else {
var statearr_29710_32063 = state_29694__$1;
(statearr_29710_32063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (3))){
var inst_29688 = (state_29694[(2)]);
var state_29694__$1 = state_29694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29694__$1,inst_29688);
} else {
if((state_val_29695 === (2))){
var state_29694__$1 = state_29694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29694__$1,(4),ch);
} else {
if((state_val_29695 === (9))){
var inst_29674 = (state_29694[(9)]);
var inst_29666 = inst_29674;
var state_29694__$1 = (function (){var statearr_29714 = state_29694;
(statearr_29714[(7)] = inst_29666);

return statearr_29714;
})();
var statearr_29715_32065 = state_29694__$1;
(statearr_29715_32065[(2)] = null);

(statearr_29715_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (5))){
var inst_29666 = (state_29694[(7)]);
var state_29694__$1 = state_29694;
var statearr_29716_32067 = state_29694__$1;
(statearr_29716_32067[(2)] = inst_29666);

(statearr_29716_32067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (10))){
var inst_29684 = (state_29694[(2)]);
var state_29694__$1 = state_29694;
var statearr_29717_32072 = state_29694__$1;
(statearr_29717_32072[(2)] = inst_29684);

(statearr_29717_32072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29695 === (8))){
var inst_29674 = (state_29694[(9)]);
var inst_29680 = cljs.core.deref(inst_29674);
var state_29694__$1 = state_29694;
var statearr_29718_32073 = state_29694__$1;
(statearr_29718_32073[(2)] = inst_29680);

(statearr_29718_32073[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28545__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28545__auto____0 = (function (){
var statearr_29728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29728[(0)] = cljs$core$async$reduce_$_state_machine__28545__auto__);

(statearr_29728[(1)] = (1));

return statearr_29728;
});
var cljs$core$async$reduce_$_state_machine__28545__auto____1 = (function (state_29694){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29694);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29729){var ex__28548__auto__ = e29729;
var statearr_29730_32074 = state_29694;
(statearr_29730_32074[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29694[(4)]))){
var statearr_29731_32075 = state_29694;
(statearr_29731_32075[(1)] = cljs.core.first((state_29694[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32080 = state_29694;
state_29694 = G__32080;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28545__auto__ = function(state_29694){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28545__auto____1.call(this,state_29694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28545__auto____0;
cljs$core$async$reduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28545__auto____1;
return cljs$core$async$reduce_$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29741 = f__28696__auto__();
(statearr_29741[(6)] = c__28695__auto__);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

return c__28695__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28695__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29754){
var state_val_29755 = (state_29754[(1)]);
if((state_val_29755 === (1))){
var inst_29749 = cljs.core.async.reduce(f__$1,init,ch);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29754__$1,(2),inst_29749);
} else {
if((state_val_29755 === (2))){
var inst_29751 = (state_29754[(2)]);
var inst_29752 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29751) : f__$1.call(null,inst_29751));
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29754__$1,inst_29752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28545__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28545__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$transduce_$_state_machine__28545__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$transduce_$_state_machine__28545__auto____1 = (function (state_29754){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29754);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29770){var ex__28548__auto__ = e29770;
var statearr_29771_32098 = state_29754;
(statearr_29771_32098[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29754[(4)]))){
var statearr_29772_32099 = state_29754;
(statearr_29772_32099[(1)] = cljs.core.first((state_29754[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32105 = state_29754;
state_29754 = G__32105;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28545__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28545__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28545__auto____0;
cljs$core$async$transduce_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28545__auto____1;
return cljs$core$async$transduce_$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29773 = f__28696__auto__();
(statearr_29773[(6)] = c__28695__auto__);

return statearr_29773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

return c__28695__auto__;
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
var G__29777 = arguments.length;
switch (G__29777) {
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
var c__28695__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_29807){
var state_val_29808 = (state_29807[(1)]);
if((state_val_29808 === (7))){
var inst_29789 = (state_29807[(2)]);
var state_29807__$1 = state_29807;
var statearr_29810_32114 = state_29807__$1;
(statearr_29810_32114[(2)] = inst_29789);

(statearr_29810_32114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (1))){
var inst_29781 = cljs.core.seq(coll);
var inst_29782 = inst_29781;
var state_29807__$1 = (function (){var statearr_29813 = state_29807;
(statearr_29813[(7)] = inst_29782);

return statearr_29813;
})();
var statearr_29814_32115 = state_29807__$1;
(statearr_29814_32115[(2)] = null);

(statearr_29814_32115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (4))){
var inst_29782 = (state_29807[(7)]);
var inst_29787 = cljs.core.first(inst_29782);
var state_29807__$1 = state_29807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29807__$1,(7),ch,inst_29787);
} else {
if((state_val_29808 === (13))){
var inst_29801 = (state_29807[(2)]);
var state_29807__$1 = state_29807;
var statearr_29825_32116 = state_29807__$1;
(statearr_29825_32116[(2)] = inst_29801);

(statearr_29825_32116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (6))){
var inst_29792 = (state_29807[(2)]);
var state_29807__$1 = state_29807;
if(cljs.core.truth_(inst_29792)){
var statearr_29826_32117 = state_29807__$1;
(statearr_29826_32117[(1)] = (8));

} else {
var statearr_29827_32119 = state_29807__$1;
(statearr_29827_32119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (3))){
var inst_29805 = (state_29807[(2)]);
var state_29807__$1 = state_29807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29807__$1,inst_29805);
} else {
if((state_val_29808 === (12))){
var state_29807__$1 = state_29807;
var statearr_29832_32122 = state_29807__$1;
(statearr_29832_32122[(2)] = null);

(statearr_29832_32122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (2))){
var inst_29782 = (state_29807[(7)]);
var state_29807__$1 = state_29807;
if(cljs.core.truth_(inst_29782)){
var statearr_29833_32123 = state_29807__$1;
(statearr_29833_32123[(1)] = (4));

} else {
var statearr_29835_32128 = state_29807__$1;
(statearr_29835_32128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (11))){
var inst_29798 = cljs.core.async.close_BANG_(ch);
var state_29807__$1 = state_29807;
var statearr_29845_32129 = state_29807__$1;
(statearr_29845_32129[(2)] = inst_29798);

(statearr_29845_32129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (9))){
var state_29807__$1 = state_29807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29849_32130 = state_29807__$1;
(statearr_29849_32130[(1)] = (11));

} else {
var statearr_29850_32132 = state_29807__$1;
(statearr_29850_32132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (5))){
var inst_29782 = (state_29807[(7)]);
var state_29807__$1 = state_29807;
var statearr_29851_32134 = state_29807__$1;
(statearr_29851_32134[(2)] = inst_29782);

(statearr_29851_32134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (10))){
var inst_29803 = (state_29807[(2)]);
var state_29807__$1 = state_29807;
var statearr_29852_32135 = state_29807__$1;
(statearr_29852_32135[(2)] = inst_29803);

(statearr_29852_32135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29808 === (8))){
var inst_29782 = (state_29807[(7)]);
var inst_29794 = cljs.core.next(inst_29782);
var inst_29782__$1 = inst_29794;
var state_29807__$1 = (function (){var statearr_29858 = state_29807;
(statearr_29858[(7)] = inst_29782__$1);

return statearr_29858;
})();
var statearr_29860_32141 = state_29807__$1;
(statearr_29860_32141[(2)] = null);

(statearr_29860_32141[(1)] = (2));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_29869 = [null,null,null,null,null,null,null,null];
(statearr_29869[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_29869[(1)] = (1));

return statearr_29869;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_29807){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_29807);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e29875){var ex__28548__auto__ = e29875;
var statearr_29876_32144 = state_29807;
(statearr_29876_32144[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_29807[(4)]))){
var statearr_29877_32147 = state_29807;
(statearr_29877_32147[(1)] = cljs.core.first((state_29807[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32149 = state_29807;
state_29807 = G__32149;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_29807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_29807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_29878 = f__28696__auto__();
(statearr_29878[(6)] = c__28695__auto__);

return statearr_29878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

return c__28695__auto__;
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
var G__29885 = arguments.length;
switch (G__29885) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32161 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32161(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32164 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32164(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32173 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32173(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32181 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32181(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29958 = (function (ch,cs,meta29959){
this.ch = ch;
this.cs = cs;
this.meta29959 = meta29959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29960,meta29959__$1){
var self__ = this;
var _29960__$1 = this;
return (new cljs.core.async.t_cljs$core$async29958(self__.ch,self__.cs,meta29959__$1));
}));

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29960){
var self__ = this;
var _29960__$1 = this;
return self__.meta29959;
}));

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29958.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29959","meta29959",-1738993206,null)], null);
}));

(cljs.core.async.t_cljs$core$async29958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29958");

(cljs.core.async.t_cljs$core$async29958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29958.
 */
cljs.core.async.__GT_t_cljs$core$async29958 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29958(ch__$1,cs__$1,meta29959){
return (new cljs.core.async.t_cljs$core$async29958(ch__$1,cs__$1,meta29959));
});

}

return (new cljs.core.async.t_cljs$core$async29958(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28695__auto___32211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_30132){
var state_val_30133 = (state_30132[(1)]);
if((state_val_30133 === (7))){
var inst_30128 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30137_32212 = state_30132__$1;
(statearr_30137_32212[(2)] = inst_30128);

(statearr_30137_32212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (20))){
var inst_30021 = (state_30132[(7)]);
var inst_30041 = cljs.core.first(inst_30021);
var inst_30042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30041,(0),null);
var inst_30043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30041,(1),null);
var state_30132__$1 = (function (){var statearr_30138 = state_30132;
(statearr_30138[(8)] = inst_30042);

return statearr_30138;
})();
if(cljs.core.truth_(inst_30043)){
var statearr_30139_32213 = state_30132__$1;
(statearr_30139_32213[(1)] = (22));

} else {
var statearr_30140_32214 = state_30132__$1;
(statearr_30140_32214[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (27))){
var inst_29989 = (state_30132[(9)]);
var inst_30078 = (state_30132[(10)]);
var inst_30071 = (state_30132[(11)]);
var inst_30073 = (state_30132[(12)]);
var inst_30078__$1 = cljs.core._nth(inst_30071,inst_30073);
var inst_30079 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30078__$1,inst_29989,done);
var state_30132__$1 = (function (){var statearr_30141 = state_30132;
(statearr_30141[(10)] = inst_30078__$1);

return statearr_30141;
})();
if(cljs.core.truth_(inst_30079)){
var statearr_30142_32221 = state_30132__$1;
(statearr_30142_32221[(1)] = (30));

} else {
var statearr_30143_32223 = state_30132__$1;
(statearr_30143_32223[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (1))){
var state_30132__$1 = state_30132;
var statearr_30144_32224 = state_30132__$1;
(statearr_30144_32224[(2)] = null);

(statearr_30144_32224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (24))){
var inst_30021 = (state_30132[(7)]);
var inst_30048 = (state_30132[(2)]);
var inst_30049 = cljs.core.next(inst_30021);
var inst_29998 = inst_30049;
var inst_29999 = null;
var inst_30000 = (0);
var inst_30001 = (0);
var state_30132__$1 = (function (){var statearr_30145 = state_30132;
(statearr_30145[(13)] = inst_30001);

(statearr_30145[(14)] = inst_29999);

(statearr_30145[(15)] = inst_29998);

(statearr_30145[(16)] = inst_30048);

(statearr_30145[(17)] = inst_30000);

return statearr_30145;
})();
var statearr_30146_32226 = state_30132__$1;
(statearr_30146_32226[(2)] = null);

(statearr_30146_32226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (39))){
var state_30132__$1 = state_30132;
var statearr_30151_32227 = state_30132__$1;
(statearr_30151_32227[(2)] = null);

(statearr_30151_32227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (4))){
var inst_29989 = (state_30132[(9)]);
var inst_29989__$1 = (state_30132[(2)]);
var inst_29990 = (inst_29989__$1 == null);
var state_30132__$1 = (function (){var statearr_30154 = state_30132;
(statearr_30154[(9)] = inst_29989__$1);

return statearr_30154;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30156_32232 = state_30132__$1;
(statearr_30156_32232[(1)] = (5));

} else {
var statearr_30157_32237 = state_30132__$1;
(statearr_30157_32237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (15))){
var inst_30001 = (state_30132[(13)]);
var inst_29999 = (state_30132[(14)]);
var inst_29998 = (state_30132[(15)]);
var inst_30000 = (state_30132[(17)]);
var inst_30017 = (state_30132[(2)]);
var inst_30018 = (inst_30001 + (1));
var tmp30148 = inst_29999;
var tmp30149 = inst_29998;
var tmp30150 = inst_30000;
var inst_29998__$1 = tmp30149;
var inst_29999__$1 = tmp30148;
var inst_30000__$1 = tmp30150;
var inst_30001__$1 = inst_30018;
var state_30132__$1 = (function (){var statearr_30158 = state_30132;
(statearr_30158[(13)] = inst_30001__$1);

(statearr_30158[(14)] = inst_29999__$1);

(statearr_30158[(18)] = inst_30017);

(statearr_30158[(15)] = inst_29998__$1);

(statearr_30158[(17)] = inst_30000__$1);

return statearr_30158;
})();
var statearr_30160_32240 = state_30132__$1;
(statearr_30160_32240[(2)] = null);

(statearr_30160_32240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (21))){
var inst_30052 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30164_32244 = state_30132__$1;
(statearr_30164_32244[(2)] = inst_30052);

(statearr_30164_32244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (31))){
var inst_30078 = (state_30132[(10)]);
var inst_30082 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30078);
var state_30132__$1 = state_30132;
var statearr_30165_32245 = state_30132__$1;
(statearr_30165_32245[(2)] = inst_30082);

(statearr_30165_32245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (32))){
var inst_30071 = (state_30132[(11)]);
var inst_30072 = (state_30132[(19)]);
var inst_30073 = (state_30132[(12)]);
var inst_30070 = (state_30132[(20)]);
var inst_30084 = (state_30132[(2)]);
var inst_30085 = (inst_30073 + (1));
var tmp30161 = inst_30071;
var tmp30162 = inst_30072;
var tmp30163 = inst_30070;
var inst_30070__$1 = tmp30163;
var inst_30071__$1 = tmp30161;
var inst_30072__$1 = tmp30162;
var inst_30073__$1 = inst_30085;
var state_30132__$1 = (function (){var statearr_30166 = state_30132;
(statearr_30166[(11)] = inst_30071__$1);

(statearr_30166[(19)] = inst_30072__$1);

(statearr_30166[(12)] = inst_30073__$1);

(statearr_30166[(21)] = inst_30084);

(statearr_30166[(20)] = inst_30070__$1);

return statearr_30166;
})();
var statearr_30167_32257 = state_30132__$1;
(statearr_30167_32257[(2)] = null);

(statearr_30167_32257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (40))){
var inst_30100 = (state_30132[(22)]);
var inst_30105 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30100);
var state_30132__$1 = state_30132;
var statearr_30168_32258 = state_30132__$1;
(statearr_30168_32258[(2)] = inst_30105);

(statearr_30168_32258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (33))){
var inst_30090 = (state_30132[(23)]);
var inst_30093 = cljs.core.chunked_seq_QMARK_(inst_30090);
var state_30132__$1 = state_30132;
if(inst_30093){
var statearr_30169_32260 = state_30132__$1;
(statearr_30169_32260[(1)] = (36));

} else {
var statearr_30170_32262 = state_30132__$1;
(statearr_30170_32262[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (13))){
var inst_30011 = (state_30132[(24)]);
var inst_30014 = cljs.core.async.close_BANG_(inst_30011);
var state_30132__$1 = state_30132;
var statearr_30171_32265 = state_30132__$1;
(statearr_30171_32265[(2)] = inst_30014);

(statearr_30171_32265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (22))){
var inst_30042 = (state_30132[(8)]);
var inst_30045 = cljs.core.async.close_BANG_(inst_30042);
var state_30132__$1 = state_30132;
var statearr_30174_32271 = state_30132__$1;
(statearr_30174_32271[(2)] = inst_30045);

(statearr_30174_32271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (36))){
var inst_30090 = (state_30132[(23)]);
var inst_30095 = cljs.core.chunk_first(inst_30090);
var inst_30096 = cljs.core.chunk_rest(inst_30090);
var inst_30097 = cljs.core.count(inst_30095);
var inst_30070 = inst_30096;
var inst_30071 = inst_30095;
var inst_30072 = inst_30097;
var inst_30073 = (0);
var state_30132__$1 = (function (){var statearr_30179 = state_30132;
(statearr_30179[(11)] = inst_30071);

(statearr_30179[(19)] = inst_30072);

(statearr_30179[(12)] = inst_30073);

(statearr_30179[(20)] = inst_30070);

return statearr_30179;
})();
var statearr_30181_32277 = state_30132__$1;
(statearr_30181_32277[(2)] = null);

(statearr_30181_32277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (41))){
var inst_30090 = (state_30132[(23)]);
var inst_30107 = (state_30132[(2)]);
var inst_30108 = cljs.core.next(inst_30090);
var inst_30070 = inst_30108;
var inst_30071 = null;
var inst_30072 = (0);
var inst_30073 = (0);
var state_30132__$1 = (function (){var statearr_30182 = state_30132;
(statearr_30182[(11)] = inst_30071);

(statearr_30182[(19)] = inst_30072);

(statearr_30182[(12)] = inst_30073);

(statearr_30182[(20)] = inst_30070);

(statearr_30182[(25)] = inst_30107);

return statearr_30182;
})();
var statearr_30183_32282 = state_30132__$1;
(statearr_30183_32282[(2)] = null);

(statearr_30183_32282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (43))){
var state_30132__$1 = state_30132;
var statearr_30186_32286 = state_30132__$1;
(statearr_30186_32286[(2)] = null);

(statearr_30186_32286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (29))){
var inst_30116 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30187_32290 = state_30132__$1;
(statearr_30187_32290[(2)] = inst_30116);

(statearr_30187_32290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (44))){
var inst_30125 = (state_30132[(2)]);
var state_30132__$1 = (function (){var statearr_30188 = state_30132;
(statearr_30188[(26)] = inst_30125);

return statearr_30188;
})();
var statearr_30189_32297 = state_30132__$1;
(statearr_30189_32297[(2)] = null);

(statearr_30189_32297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (6))){
var inst_30062 = (state_30132[(27)]);
var inst_30061 = cljs.core.deref(cs);
var inst_30062__$1 = cljs.core.keys(inst_30061);
var inst_30063 = cljs.core.count(inst_30062__$1);
var inst_30064 = cljs.core.reset_BANG_(dctr,inst_30063);
var inst_30069 = cljs.core.seq(inst_30062__$1);
var inst_30070 = inst_30069;
var inst_30071 = null;
var inst_30072 = (0);
var inst_30073 = (0);
var state_30132__$1 = (function (){var statearr_30196 = state_30132;
(statearr_30196[(11)] = inst_30071);

(statearr_30196[(19)] = inst_30072);

(statearr_30196[(12)] = inst_30073);

(statearr_30196[(28)] = inst_30064);

(statearr_30196[(27)] = inst_30062__$1);

(statearr_30196[(20)] = inst_30070);

return statearr_30196;
})();
var statearr_30197_32299 = state_30132__$1;
(statearr_30197_32299[(2)] = null);

(statearr_30197_32299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (28))){
var inst_30090 = (state_30132[(23)]);
var inst_30070 = (state_30132[(20)]);
var inst_30090__$1 = cljs.core.seq(inst_30070);
var state_30132__$1 = (function (){var statearr_30201 = state_30132;
(statearr_30201[(23)] = inst_30090__$1);

return statearr_30201;
})();
if(inst_30090__$1){
var statearr_30202_32304 = state_30132__$1;
(statearr_30202_32304[(1)] = (33));

} else {
var statearr_30203_32305 = state_30132__$1;
(statearr_30203_32305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (25))){
var inst_30072 = (state_30132[(19)]);
var inst_30073 = (state_30132[(12)]);
var inst_30075 = (inst_30073 < inst_30072);
var inst_30076 = inst_30075;
var state_30132__$1 = state_30132;
if(cljs.core.truth_(inst_30076)){
var statearr_30207_32308 = state_30132__$1;
(statearr_30207_32308[(1)] = (27));

} else {
var statearr_30208_32310 = state_30132__$1;
(statearr_30208_32310[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (34))){
var state_30132__$1 = state_30132;
var statearr_30209_32312 = state_30132__$1;
(statearr_30209_32312[(2)] = null);

(statearr_30209_32312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (17))){
var state_30132__$1 = state_30132;
var statearr_30214_32314 = state_30132__$1;
(statearr_30214_32314[(2)] = null);

(statearr_30214_32314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (3))){
var inst_30130 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30132__$1,inst_30130);
} else {
if((state_val_30133 === (12))){
var inst_30057 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30215_32318 = state_30132__$1;
(statearr_30215_32318[(2)] = inst_30057);

(statearr_30215_32318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (2))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30132__$1,(4),ch);
} else {
if((state_val_30133 === (23))){
var state_30132__$1 = state_30132;
var statearr_30219_32319 = state_30132__$1;
(statearr_30219_32319[(2)] = null);

(statearr_30219_32319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (35))){
var inst_30114 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30223_32320 = state_30132__$1;
(statearr_30223_32320[(2)] = inst_30114);

(statearr_30223_32320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (19))){
var inst_30021 = (state_30132[(7)]);
var inst_30032 = cljs.core.chunk_first(inst_30021);
var inst_30033 = cljs.core.chunk_rest(inst_30021);
var inst_30034 = cljs.core.count(inst_30032);
var inst_29998 = inst_30033;
var inst_29999 = inst_30032;
var inst_30000 = inst_30034;
var inst_30001 = (0);
var state_30132__$1 = (function (){var statearr_30225 = state_30132;
(statearr_30225[(13)] = inst_30001);

(statearr_30225[(14)] = inst_29999);

(statearr_30225[(15)] = inst_29998);

(statearr_30225[(17)] = inst_30000);

return statearr_30225;
})();
var statearr_30226_32327 = state_30132__$1;
(statearr_30226_32327[(2)] = null);

(statearr_30226_32327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (11))){
var inst_30021 = (state_30132[(7)]);
var inst_29998 = (state_30132[(15)]);
var inst_30021__$1 = cljs.core.seq(inst_29998);
var state_30132__$1 = (function (){var statearr_30231 = state_30132;
(statearr_30231[(7)] = inst_30021__$1);

return statearr_30231;
})();
if(inst_30021__$1){
var statearr_30232_32328 = state_30132__$1;
(statearr_30232_32328[(1)] = (16));

} else {
var statearr_30233_32329 = state_30132__$1;
(statearr_30233_32329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (9))){
var inst_30059 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30234_32331 = state_30132__$1;
(statearr_30234_32331[(2)] = inst_30059);

(statearr_30234_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (5))){
var inst_29996 = cljs.core.deref(cs);
var inst_29997 = cljs.core.seq(inst_29996);
var inst_29998 = inst_29997;
var inst_29999 = null;
var inst_30000 = (0);
var inst_30001 = (0);
var state_30132__$1 = (function (){var statearr_30238 = state_30132;
(statearr_30238[(13)] = inst_30001);

(statearr_30238[(14)] = inst_29999);

(statearr_30238[(15)] = inst_29998);

(statearr_30238[(17)] = inst_30000);

return statearr_30238;
})();
var statearr_30239_32340 = state_30132__$1;
(statearr_30239_32340[(2)] = null);

(statearr_30239_32340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (14))){
var state_30132__$1 = state_30132;
var statearr_30240_32345 = state_30132__$1;
(statearr_30240_32345[(2)] = null);

(statearr_30240_32345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (45))){
var inst_30122 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30241_32347 = state_30132__$1;
(statearr_30241_32347[(2)] = inst_30122);

(statearr_30241_32347[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (26))){
var inst_30062 = (state_30132[(27)]);
var inst_30118 = (state_30132[(2)]);
var inst_30119 = cljs.core.seq(inst_30062);
var state_30132__$1 = (function (){var statearr_30243 = state_30132;
(statearr_30243[(29)] = inst_30118);

return statearr_30243;
})();
if(inst_30119){
var statearr_30244_32351 = state_30132__$1;
(statearr_30244_32351[(1)] = (42));

} else {
var statearr_30246_32353 = state_30132__$1;
(statearr_30246_32353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (16))){
var inst_30021 = (state_30132[(7)]);
var inst_30030 = cljs.core.chunked_seq_QMARK_(inst_30021);
var state_30132__$1 = state_30132;
if(inst_30030){
var statearr_30247_32355 = state_30132__$1;
(statearr_30247_32355[(1)] = (19));

} else {
var statearr_30248_32360 = state_30132__$1;
(statearr_30248_32360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (38))){
var inst_30111 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30249_32363 = state_30132__$1;
(statearr_30249_32363[(2)] = inst_30111);

(statearr_30249_32363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (30))){
var state_30132__$1 = state_30132;
var statearr_30250_32366 = state_30132__$1;
(statearr_30250_32366[(2)] = null);

(statearr_30250_32366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (10))){
var inst_30001 = (state_30132[(13)]);
var inst_29999 = (state_30132[(14)]);
var inst_30010 = cljs.core._nth(inst_29999,inst_30001);
var inst_30011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30010,(0),null);
var inst_30012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30010,(1),null);
var state_30132__$1 = (function (){var statearr_30251 = state_30132;
(statearr_30251[(24)] = inst_30011);

return statearr_30251;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30254_32375 = state_30132__$1;
(statearr_30254_32375[(1)] = (13));

} else {
var statearr_30257_32376 = state_30132__$1;
(statearr_30257_32376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (18))){
var inst_30055 = (state_30132[(2)]);
var state_30132__$1 = state_30132;
var statearr_30258_32377 = state_30132__$1;
(statearr_30258_32377[(2)] = inst_30055);

(statearr_30258_32377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (42))){
var state_30132__$1 = state_30132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30132__$1,(45),dchan);
} else {
if((state_val_30133 === (37))){
var inst_30090 = (state_30132[(23)]);
var inst_29989 = (state_30132[(9)]);
var inst_30100 = (state_30132[(22)]);
var inst_30100__$1 = cljs.core.first(inst_30090);
var inst_30102 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30100__$1,inst_29989,done);
var state_30132__$1 = (function (){var statearr_30259 = state_30132;
(statearr_30259[(22)] = inst_30100__$1);

return statearr_30259;
})();
if(cljs.core.truth_(inst_30102)){
var statearr_30260_32383 = state_30132__$1;
(statearr_30260_32383[(1)] = (39));

} else {
var statearr_30261_32384 = state_30132__$1;
(statearr_30261_32384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30133 === (8))){
var inst_30001 = (state_30132[(13)]);
var inst_30000 = (state_30132[(17)]);
var inst_30004 = (inst_30001 < inst_30000);
var inst_30005 = inst_30004;
var state_30132__$1 = state_30132;
if(cljs.core.truth_(inst_30005)){
var statearr_30262_32386 = state_30132__$1;
(statearr_30262_32386[(1)] = (10));

} else {
var statearr_30263_32387 = state_30132__$1;
(statearr_30263_32387[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28545__auto__ = null;
var cljs$core$async$mult_$_state_machine__28545__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = cljs$core$async$mult_$_state_machine__28545__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var cljs$core$async$mult_$_state_machine__28545__auto____1 = (function (state_30132){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30132);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30265){var ex__28548__auto__ = e30265;
var statearr_30266_32395 = state_30132;
(statearr_30266_32395[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30132[(4)]))){
var statearr_30267_32396 = state_30132;
(statearr_30267_32396[(1)] = cljs.core.first((state_30132[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_30132;
state_30132 = G__32399;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28545__auto__ = function(state_30132){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28545__auto____1.call(this,state_30132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28545__auto____0;
cljs$core$async$mult_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28545__auto____1;
return cljs$core$async$mult_$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_30268 = f__28696__auto__();
(statearr_30268[(6)] = c__28695__auto___32211);

return statearr_30268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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
var G__30270 = arguments.length;
switch (G__30270) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_32411 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32411(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32433 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32433(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32440 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32440(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32445 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32445(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32455 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32455(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32460 = arguments.length;
var i__4737__auto___32463 = (0);
while(true){
if((i__4737__auto___32463 < len__4736__auto___32460)){
args__4742__auto__.push((arguments[i__4737__auto___32463]));

var G__32469 = (i__4737__auto___32463 + (1));
i__4737__auto___32463 = G__32469;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30315){
var map__30316 = p__30315;
var map__30316__$1 = (((((!((map__30316 == null))))?(((((map__30316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30316):map__30316);
var opts = map__30316__$1;
var statearr_30320_32483 = state;
(statearr_30320_32483[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30321_32484 = state;
(statearr_30321_32484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30322_32487 = state;
(statearr_30322_32487[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30307){
var G__30308 = cljs.core.first(seq30307);
var seq30307__$1 = cljs.core.next(seq30307);
var G__30309 = cljs.core.first(seq30307__$1);
var seq30307__$2 = cljs.core.next(seq30307__$1);
var G__30310 = cljs.core.first(seq30307__$2);
var seq30307__$3 = cljs.core.next(seq30307__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30308,G__30309,G__30310,seq30307__$3);
}));

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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30332 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30333){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30333 = meta30333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30334,meta30333__$1){
var self__ = this;
var _30334__$1 = this;
return (new cljs.core.async.t_cljs$core$async30332(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30333__$1));
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30334){
var self__ = this;
var _30334__$1 = this;
return self__.meta30333;
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30333","meta30333",-731211900,null)], null);
}));

(cljs.core.async.t_cljs$core$async30332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30332");

(cljs.core.async.t_cljs$core$async30332.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30332.
 */
cljs.core.async.__GT_t_cljs$core$async30332 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30333){
return (new cljs.core.async.t_cljs$core$async30332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30333));
});

}

return (new cljs.core.async.t_cljs$core$async30332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28695__auto___32523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_30462){
var state_val_30463 = (state_30462[(1)]);
if((state_val_30463 === (7))){
var inst_30368 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30473_32524 = state_30462__$1;
(statearr_30473_32524[(2)] = inst_30368);

(statearr_30473_32524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (20))){
var inst_30381 = (state_30462[(7)]);
var state_30462__$1 = state_30462;
var statearr_30474_32526 = state_30462__$1;
(statearr_30474_32526[(2)] = inst_30381);

(statearr_30474_32526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (27))){
var state_30462__$1 = state_30462;
var statearr_30475_32527 = state_30462__$1;
(statearr_30475_32527[(2)] = null);

(statearr_30475_32527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (1))){
var inst_30355 = (state_30462[(8)]);
var inst_30355__$1 = calc_state();
var inst_30357 = (inst_30355__$1 == null);
var inst_30358 = cljs.core.not(inst_30357);
var state_30462__$1 = (function (){var statearr_30477 = state_30462;
(statearr_30477[(8)] = inst_30355__$1);

return statearr_30477;
})();
if(inst_30358){
var statearr_30481_32531 = state_30462__$1;
(statearr_30481_32531[(1)] = (2));

} else {
var statearr_30482_32532 = state_30462__$1;
(statearr_30482_32532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (24))){
var inst_30435 = (state_30462[(9)]);
var inst_30411 = (state_30462[(10)]);
var inst_30421 = (state_30462[(11)]);
var inst_30435__$1 = (inst_30411.cljs$core$IFn$_invoke$arity$1 ? inst_30411.cljs$core$IFn$_invoke$arity$1(inst_30421) : inst_30411.call(null,inst_30421));
var state_30462__$1 = (function (){var statearr_30485 = state_30462;
(statearr_30485[(9)] = inst_30435__$1);

return statearr_30485;
})();
if(cljs.core.truth_(inst_30435__$1)){
var statearr_30487_32538 = state_30462__$1;
(statearr_30487_32538[(1)] = (29));

} else {
var statearr_30490_32542 = state_30462__$1;
(statearr_30490_32542[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (4))){
var inst_30371 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30371)){
var statearr_30491_32543 = state_30462__$1;
(statearr_30491_32543[(1)] = (8));

} else {
var statearr_30493_32544 = state_30462__$1;
(statearr_30493_32544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (15))){
var inst_30405 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30405)){
var statearr_30496_32547 = state_30462__$1;
(statearr_30496_32547[(1)] = (19));

} else {
var statearr_30497_32549 = state_30462__$1;
(statearr_30497_32549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (21))){
var inst_30410 = (state_30462[(12)]);
var inst_30410__$1 = (state_30462[(2)]);
var inst_30411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30410__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30410__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30410__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30462__$1 = (function (){var statearr_30498 = state_30462;
(statearr_30498[(10)] = inst_30411);

(statearr_30498[(12)] = inst_30410__$1);

(statearr_30498[(13)] = inst_30412);

return statearr_30498;
})();
return cljs.core.async.ioc_alts_BANG_(state_30462__$1,(22),inst_30414);
} else {
if((state_val_30463 === (31))){
var inst_30443 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30443)){
var statearr_30499_32558 = state_30462__$1;
(statearr_30499_32558[(1)] = (32));

} else {
var statearr_30500_32567 = state_30462__$1;
(statearr_30500_32567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (32))){
var inst_30420 = (state_30462[(14)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30462__$1,(35),out,inst_30420);
} else {
if((state_val_30463 === (33))){
var inst_30410 = (state_30462[(12)]);
var inst_30381 = inst_30410;
var state_30462__$1 = (function (){var statearr_30504 = state_30462;
(statearr_30504[(7)] = inst_30381);

return statearr_30504;
})();
var statearr_30505_32573 = state_30462__$1;
(statearr_30505_32573[(2)] = null);

(statearr_30505_32573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (13))){
var inst_30381 = (state_30462[(7)]);
var inst_30394 = inst_30381.cljs$lang$protocol_mask$partition0$;
var inst_30395 = (inst_30394 & (64));
var inst_30396 = inst_30381.cljs$core$ISeq$;
var inst_30397 = (cljs.core.PROTOCOL_SENTINEL === inst_30396);
var inst_30398 = ((inst_30395) || (inst_30397));
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30398)){
var statearr_30506_32578 = state_30462__$1;
(statearr_30506_32578[(1)] = (16));

} else {
var statearr_30507_32579 = state_30462__$1;
(statearr_30507_32579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (22))){
var inst_30420 = (state_30462[(14)]);
var inst_30421 = (state_30462[(11)]);
var inst_30419 = (state_30462[(2)]);
var inst_30420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30419,(0),null);
var inst_30421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30419,(1),null);
var inst_30422 = (inst_30420__$1 == null);
var inst_30423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30421__$1,change);
var inst_30424 = ((inst_30422) || (inst_30423));
var state_30462__$1 = (function (){var statearr_30508 = state_30462;
(statearr_30508[(14)] = inst_30420__$1);

(statearr_30508[(11)] = inst_30421__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30424)){
var statearr_30509_32585 = state_30462__$1;
(statearr_30509_32585[(1)] = (23));

} else {
var statearr_30510_32586 = state_30462__$1;
(statearr_30510_32586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (36))){
var inst_30410 = (state_30462[(12)]);
var inst_30381 = inst_30410;
var state_30462__$1 = (function (){var statearr_30511 = state_30462;
(statearr_30511[(7)] = inst_30381);

return statearr_30511;
})();
var statearr_30512_32594 = state_30462__$1;
(statearr_30512_32594[(2)] = null);

(statearr_30512_32594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (29))){
var inst_30435 = (state_30462[(9)]);
var state_30462__$1 = state_30462;
var statearr_30516_32599 = state_30462__$1;
(statearr_30516_32599[(2)] = inst_30435);

(statearr_30516_32599[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (6))){
var state_30462__$1 = state_30462;
var statearr_30517_32601 = state_30462__$1;
(statearr_30517_32601[(2)] = false);

(statearr_30517_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (28))){
var inst_30431 = (state_30462[(2)]);
var inst_30432 = calc_state();
var inst_30381 = inst_30432;
var state_30462__$1 = (function (){var statearr_30519 = state_30462;
(statearr_30519[(7)] = inst_30381);

(statearr_30519[(15)] = inst_30431);

return statearr_30519;
})();
var statearr_30524_32606 = state_30462__$1;
(statearr_30524_32606[(2)] = null);

(statearr_30524_32606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (25))){
var inst_30458 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30528_32608 = state_30462__$1;
(statearr_30528_32608[(2)] = inst_30458);

(statearr_30528_32608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (34))){
var inst_30456 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30529_32609 = state_30462__$1;
(statearr_30529_32609[(2)] = inst_30456);

(statearr_30529_32609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (17))){
var state_30462__$1 = state_30462;
var statearr_30531_32611 = state_30462__$1;
(statearr_30531_32611[(2)] = false);

(statearr_30531_32611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (3))){
var state_30462__$1 = state_30462;
var statearr_30532_32612 = state_30462__$1;
(statearr_30532_32612[(2)] = false);

(statearr_30532_32612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (12))){
var inst_30460 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30462__$1,inst_30460);
} else {
if((state_val_30463 === (2))){
var inst_30355 = (state_30462[(8)]);
var inst_30360 = inst_30355.cljs$lang$protocol_mask$partition0$;
var inst_30361 = (inst_30360 & (64));
var inst_30362 = inst_30355.cljs$core$ISeq$;
var inst_30363 = (cljs.core.PROTOCOL_SENTINEL === inst_30362);
var inst_30364 = ((inst_30361) || (inst_30363));
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30364)){
var statearr_30534_32624 = state_30462__$1;
(statearr_30534_32624[(1)] = (5));

} else {
var statearr_30535_32625 = state_30462__$1;
(statearr_30535_32625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (23))){
var inst_30420 = (state_30462[(14)]);
var inst_30426 = (inst_30420 == null);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30426)){
var statearr_30537_32627 = state_30462__$1;
(statearr_30537_32627[(1)] = (26));

} else {
var statearr_30538_32628 = state_30462__$1;
(statearr_30538_32628[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (35))){
var inst_30447 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30447)){
var statearr_30540_32629 = state_30462__$1;
(statearr_30540_32629[(1)] = (36));

} else {
var statearr_30541_32631 = state_30462__$1;
(statearr_30541_32631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (19))){
var inst_30381 = (state_30462[(7)]);
var inst_30407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30381);
var state_30462__$1 = state_30462;
var statearr_30542_32636 = state_30462__$1;
(statearr_30542_32636[(2)] = inst_30407);

(statearr_30542_32636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (11))){
var inst_30381 = (state_30462[(7)]);
var inst_30386 = (inst_30381 == null);
var inst_30387 = cljs.core.not(inst_30386);
var state_30462__$1 = state_30462;
if(inst_30387){
var statearr_30545_32641 = state_30462__$1;
(statearr_30545_32641[(1)] = (13));

} else {
var statearr_30546_32643 = state_30462__$1;
(statearr_30546_32643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (9))){
var inst_30355 = (state_30462[(8)]);
var state_30462__$1 = state_30462;
var statearr_30549_32645 = state_30462__$1;
(statearr_30549_32645[(2)] = inst_30355);

(statearr_30549_32645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (5))){
var state_30462__$1 = state_30462;
var statearr_30550_32648 = state_30462__$1;
(statearr_30550_32648[(2)] = true);

(statearr_30550_32648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (14))){
var state_30462__$1 = state_30462;
var statearr_30551_32652 = state_30462__$1;
(statearr_30551_32652[(2)] = false);

(statearr_30551_32652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (26))){
var inst_30421 = (state_30462[(11)]);
var inst_30428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30421);
var state_30462__$1 = state_30462;
var statearr_30559_32657 = state_30462__$1;
(statearr_30559_32657[(2)] = inst_30428);

(statearr_30559_32657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (16))){
var state_30462__$1 = state_30462;
var statearr_30560_32659 = state_30462__$1;
(statearr_30560_32659[(2)] = true);

(statearr_30560_32659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (38))){
var inst_30452 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30561_32661 = state_30462__$1;
(statearr_30561_32661[(2)] = inst_30452);

(statearr_30561_32661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (30))){
var inst_30411 = (state_30462[(10)]);
var inst_30421 = (state_30462[(11)]);
var inst_30412 = (state_30462[(13)]);
var inst_30438 = cljs.core.empty_QMARK_(inst_30411);
var inst_30439 = (inst_30412.cljs$core$IFn$_invoke$arity$1 ? inst_30412.cljs$core$IFn$_invoke$arity$1(inst_30421) : inst_30412.call(null,inst_30421));
var inst_30440 = cljs.core.not(inst_30439);
var inst_30441 = ((inst_30438) && (inst_30440));
var state_30462__$1 = state_30462;
var statearr_30562_32667 = state_30462__$1;
(statearr_30562_32667[(2)] = inst_30441);

(statearr_30562_32667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (10))){
var inst_30355 = (state_30462[(8)]);
var inst_30376 = (state_30462[(2)]);
var inst_30377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30376,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30376,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30376,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30381 = inst_30355;
var state_30462__$1 = (function (){var statearr_30563 = state_30462;
(statearr_30563[(16)] = inst_30377);

(statearr_30563[(17)] = inst_30380);

(statearr_30563[(18)] = inst_30378);

(statearr_30563[(7)] = inst_30381);

return statearr_30563;
})();
var statearr_30564_32672 = state_30462__$1;
(statearr_30564_32672[(2)] = null);

(statearr_30564_32672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (18))){
var inst_30402 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30565_32676 = state_30462__$1;
(statearr_30565_32676[(2)] = inst_30402);

(statearr_30565_32676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (37))){
var state_30462__$1 = state_30462;
var statearr_30567_32677 = state_30462__$1;
(statearr_30567_32677[(2)] = null);

(statearr_30567_32677[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (8))){
var inst_30355 = (state_30462[(8)]);
var inst_30373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30355);
var state_30462__$1 = state_30462;
var statearr_30570_32679 = state_30462__$1;
(statearr_30570_32679[(2)] = inst_30373);

(statearr_30570_32679[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28545__auto__ = null;
var cljs$core$async$mix_$_state_machine__28545__auto____0 = (function (){
var statearr_30574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30574[(0)] = cljs$core$async$mix_$_state_machine__28545__auto__);

(statearr_30574[(1)] = (1));

return statearr_30574;
});
var cljs$core$async$mix_$_state_machine__28545__auto____1 = (function (state_30462){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30462);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30575){var ex__28548__auto__ = e30575;
var statearr_30576_32684 = state_30462;
(statearr_30576_32684[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30462[(4)]))){
var statearr_30577_32685 = state_30462;
(statearr_30577_32685[(1)] = cljs.core.first((state_30462[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_30462;
state_30462 = G__32687;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28545__auto__ = function(state_30462){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28545__auto____1.call(this,state_30462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28545__auto____0;
cljs$core$async$mix_$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28545__auto____1;
return cljs$core$async$mix_$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_30579 = f__28696__auto__();
(statearr_30579[(6)] = c__28695__auto___32523);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32695 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32695(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32700 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32700(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32705 = (function() {
var G__32706 = null;
var G__32706__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32706__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32706 = function(p,v){
switch(arguments.length){
case 1:
return G__32706__1.call(this,p);
case 2:
return G__32706__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32706.cljs$core$IFn$_invoke$arity$1 = G__32706__1;
G__32706.cljs$core$IFn$_invoke$arity$2 = G__32706__2;
return G__32706;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30604 = arguments.length;
switch (G__30604) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32705(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32705(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__30614 = arguments.length;
switch (G__30614) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30612_SHARP_){
if(cljs.core.truth_((p1__30612_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30612_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30612_SHARP_.call(null,topic)))){
return p1__30612_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30612_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30615 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30616){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30616 = meta30616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30617,meta30616__$1){
var self__ = this;
var _30617__$1 = this;
return (new cljs.core.async.t_cljs$core$async30615(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30616__$1));
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30617){
var self__ = this;
var _30617__$1 = this;
return self__.meta30616;
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30616","meta30616",301386124,null)], null);
}));

(cljs.core.async.t_cljs$core$async30615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30615");

(cljs.core.async.t_cljs$core$async30615.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30615.
 */
cljs.core.async.__GT_t_cljs$core$async30615 = (function cljs$core$async$__GT_t_cljs$core$async30615(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30616){
return (new cljs.core.async.t_cljs$core$async30615(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30616));
});

}

return (new cljs.core.async.t_cljs$core$async30615(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28695__auto___32741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_30700){
var state_val_30701 = (state_30700[(1)]);
if((state_val_30701 === (7))){
var inst_30696 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30706_32744 = state_30700__$1;
(statearr_30706_32744[(2)] = inst_30696);

(statearr_30706_32744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (20))){
var state_30700__$1 = state_30700;
var statearr_30707_32745 = state_30700__$1;
(statearr_30707_32745[(2)] = null);

(statearr_30707_32745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (1))){
var state_30700__$1 = state_30700;
var statearr_30709_32748 = state_30700__$1;
(statearr_30709_32748[(2)] = null);

(statearr_30709_32748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (24))){
var inst_30679 = (state_30700[(7)]);
var inst_30688 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30679);
var state_30700__$1 = state_30700;
var statearr_30710_32750 = state_30700__$1;
(statearr_30710_32750[(2)] = inst_30688);

(statearr_30710_32750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (4))){
var inst_30625 = (state_30700[(8)]);
var inst_30625__$1 = (state_30700[(2)]);
var inst_30630 = (inst_30625__$1 == null);
var state_30700__$1 = (function (){var statearr_30712 = state_30700;
(statearr_30712[(8)] = inst_30625__$1);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30630)){
var statearr_30714_32752 = state_30700__$1;
(statearr_30714_32752[(1)] = (5));

} else {
var statearr_30715_32754 = state_30700__$1;
(statearr_30715_32754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (15))){
var inst_30673 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30716_32755 = state_30700__$1;
(statearr_30716_32755[(2)] = inst_30673);

(statearr_30716_32755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (21))){
var inst_30693 = (state_30700[(2)]);
var state_30700__$1 = (function (){var statearr_30718 = state_30700;
(statearr_30718[(9)] = inst_30693);

return statearr_30718;
})();
var statearr_30719_32759 = state_30700__$1;
(statearr_30719_32759[(2)] = null);

(statearr_30719_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (13))){
var inst_30655 = (state_30700[(10)]);
var inst_30657 = cljs.core.chunked_seq_QMARK_(inst_30655);
var state_30700__$1 = state_30700;
if(inst_30657){
var statearr_30724_32760 = state_30700__$1;
(statearr_30724_32760[(1)] = (16));

} else {
var statearr_30725_32762 = state_30700__$1;
(statearr_30725_32762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (22))){
var inst_30685 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30685)){
var statearr_30726_32768 = state_30700__$1;
(statearr_30726_32768[(1)] = (23));

} else {
var statearr_30727_32769 = state_30700__$1;
(statearr_30727_32769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (6))){
var inst_30625 = (state_30700[(8)]);
var inst_30681 = (state_30700[(11)]);
var inst_30679 = (state_30700[(7)]);
var inst_30679__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30625) : topic_fn.call(null,inst_30625));
var inst_30680 = cljs.core.deref(mults);
var inst_30681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30680,inst_30679__$1);
var state_30700__$1 = (function (){var statearr_30732 = state_30700;
(statearr_30732[(11)] = inst_30681__$1);

(statearr_30732[(7)] = inst_30679__$1);

return statearr_30732;
})();
if(cljs.core.truth_(inst_30681__$1)){
var statearr_30733_32773 = state_30700__$1;
(statearr_30733_32773[(1)] = (19));

} else {
var statearr_30734_32775 = state_30700__$1;
(statearr_30734_32775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (25))){
var inst_30690 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30736_32776 = state_30700__$1;
(statearr_30736_32776[(2)] = inst_30690);

(statearr_30736_32776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (17))){
var inst_30655 = (state_30700[(10)]);
var inst_30664 = cljs.core.first(inst_30655);
var inst_30665 = cljs.core.async.muxch_STAR_(inst_30664);
var inst_30666 = cljs.core.async.close_BANG_(inst_30665);
var inst_30667 = cljs.core.next(inst_30655);
var inst_30641 = inst_30667;
var inst_30642 = null;
var inst_30643 = (0);
var inst_30644 = (0);
var state_30700__$1 = (function (){var statearr_30741 = state_30700;
(statearr_30741[(12)] = inst_30643);

(statearr_30741[(13)] = inst_30644);

(statearr_30741[(14)] = inst_30666);

(statearr_30741[(15)] = inst_30642);

(statearr_30741[(16)] = inst_30641);

return statearr_30741;
})();
var statearr_30742_32780 = state_30700__$1;
(statearr_30742_32780[(2)] = null);

(statearr_30742_32780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (3))){
var inst_30698 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30700__$1,inst_30698);
} else {
if((state_val_30701 === (12))){
var inst_30675 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30753_32784 = state_30700__$1;
(statearr_30753_32784[(2)] = inst_30675);

(statearr_30753_32784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (2))){
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30700__$1,(4),ch);
} else {
if((state_val_30701 === (23))){
var state_30700__$1 = state_30700;
var statearr_30758_32791 = state_30700__$1;
(statearr_30758_32791[(2)] = null);

(statearr_30758_32791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (19))){
var inst_30625 = (state_30700[(8)]);
var inst_30681 = (state_30700[(11)]);
var inst_30683 = cljs.core.async.muxch_STAR_(inst_30681);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30700__$1,(22),inst_30683,inst_30625);
} else {
if((state_val_30701 === (11))){
var inst_30655 = (state_30700[(10)]);
var inst_30641 = (state_30700[(16)]);
var inst_30655__$1 = cljs.core.seq(inst_30641);
var state_30700__$1 = (function (){var statearr_30759 = state_30700;
(statearr_30759[(10)] = inst_30655__$1);

return statearr_30759;
})();
if(inst_30655__$1){
var statearr_30760_32795 = state_30700__$1;
(statearr_30760_32795[(1)] = (13));

} else {
var statearr_30761_32797 = state_30700__$1;
(statearr_30761_32797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (9))){
var inst_30677 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30762_32798 = state_30700__$1;
(statearr_30762_32798[(2)] = inst_30677);

(statearr_30762_32798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (5))){
var inst_30638 = cljs.core.deref(mults);
var inst_30639 = cljs.core.vals(inst_30638);
var inst_30640 = cljs.core.seq(inst_30639);
var inst_30641 = inst_30640;
var inst_30642 = null;
var inst_30643 = (0);
var inst_30644 = (0);
var state_30700__$1 = (function (){var statearr_30763 = state_30700;
(statearr_30763[(12)] = inst_30643);

(statearr_30763[(13)] = inst_30644);

(statearr_30763[(15)] = inst_30642);

(statearr_30763[(16)] = inst_30641);

return statearr_30763;
})();
var statearr_30766_32805 = state_30700__$1;
(statearr_30766_32805[(2)] = null);

(statearr_30766_32805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (14))){
var state_30700__$1 = state_30700;
var statearr_30772_32811 = state_30700__$1;
(statearr_30772_32811[(2)] = null);

(statearr_30772_32811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (16))){
var inst_30655 = (state_30700[(10)]);
var inst_30659 = cljs.core.chunk_first(inst_30655);
var inst_30660 = cljs.core.chunk_rest(inst_30655);
var inst_30661 = cljs.core.count(inst_30659);
var inst_30641 = inst_30660;
var inst_30642 = inst_30659;
var inst_30643 = inst_30661;
var inst_30644 = (0);
var state_30700__$1 = (function (){var statearr_30777 = state_30700;
(statearr_30777[(12)] = inst_30643);

(statearr_30777[(13)] = inst_30644);

(statearr_30777[(15)] = inst_30642);

(statearr_30777[(16)] = inst_30641);

return statearr_30777;
})();
var statearr_30781_32813 = state_30700__$1;
(statearr_30781_32813[(2)] = null);

(statearr_30781_32813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (10))){
var inst_30643 = (state_30700[(12)]);
var inst_30644 = (state_30700[(13)]);
var inst_30642 = (state_30700[(15)]);
var inst_30641 = (state_30700[(16)]);
var inst_30649 = cljs.core._nth(inst_30642,inst_30644);
var inst_30650 = cljs.core.async.muxch_STAR_(inst_30649);
var inst_30651 = cljs.core.async.close_BANG_(inst_30650);
var inst_30652 = (inst_30644 + (1));
var tmp30767 = inst_30643;
var tmp30768 = inst_30642;
var tmp30769 = inst_30641;
var inst_30641__$1 = tmp30769;
var inst_30642__$1 = tmp30768;
var inst_30643__$1 = tmp30767;
var inst_30644__$1 = inst_30652;
var state_30700__$1 = (function (){var statearr_30811 = state_30700;
(statearr_30811[(12)] = inst_30643__$1);

(statearr_30811[(17)] = inst_30651);

(statearr_30811[(13)] = inst_30644__$1);

(statearr_30811[(15)] = inst_30642__$1);

(statearr_30811[(16)] = inst_30641__$1);

return statearr_30811;
})();
var statearr_30818_32822 = state_30700__$1;
(statearr_30818_32822[(2)] = null);

(statearr_30818_32822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (18))){
var inst_30670 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30819_32823 = state_30700__$1;
(statearr_30819_32823[(2)] = inst_30670);

(statearr_30819_32823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (8))){
var inst_30643 = (state_30700[(12)]);
var inst_30644 = (state_30700[(13)]);
var inst_30646 = (inst_30644 < inst_30643);
var inst_30647 = inst_30646;
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30647)){
var statearr_30820_32826 = state_30700__$1;
(statearr_30820_32826[(1)] = (10));

} else {
var statearr_30821_32827 = state_30700__$1;
(statearr_30821_32827[(1)] = (11));

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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30700){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30700);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e30834){var ex__28548__auto__ = e30834;
var statearr_30839_32833 = state_30700;
(statearr_30839_32833[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30700[(4)]))){
var statearr_30840_32836 = state_30700;
(statearr_30840_32836[(1)] = cljs.core.first((state_30700[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32838 = state_30700;
state_30700 = G__32838;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_30841 = f__28696__auto__();
(statearr_30841[(6)] = c__28695__auto___32741);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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
var G__30848 = arguments.length;
switch (G__30848) {
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
var G__30858 = arguments.length;
switch (G__30858) {
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
var G__30869 = arguments.length;
switch (G__30869) {
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
var c__28695__auto___32862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_30956){
var state_val_30957 = (state_30956[(1)]);
if((state_val_30957 === (7))){
var state_30956__$1 = state_30956;
var statearr_30964_32863 = state_30956__$1;
(statearr_30964_32863[(2)] = null);

(statearr_30964_32863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (1))){
var state_30956__$1 = state_30956;
var statearr_30968_32866 = state_30956__$1;
(statearr_30968_32866[(2)] = null);

(statearr_30968_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (4))){
var inst_30895 = (state_30956[(7)]);
var inst_30896 = (state_30956[(8)]);
var inst_30899 = (inst_30896 < inst_30895);
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30899)){
var statearr_30971_32872 = state_30956__$1;
(statearr_30971_32872[(1)] = (6));

} else {
var statearr_30972_32874 = state_30956__$1;
(statearr_30972_32874[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (15))){
var inst_30938 = (state_30956[(9)]);
var inst_30943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30938);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30956__$1,(17),out,inst_30943);
} else {
if((state_val_30957 === (13))){
var inst_30938 = (state_30956[(9)]);
var inst_30938__$1 = (state_30956[(2)]);
var inst_30939 = cljs.core.some(cljs.core.nil_QMARK_,inst_30938__$1);
var state_30956__$1 = (function (){var statearr_30973 = state_30956;
(statearr_30973[(9)] = inst_30938__$1);

return statearr_30973;
})();
if(cljs.core.truth_(inst_30939)){
var statearr_30974_32898 = state_30956__$1;
(statearr_30974_32898[(1)] = (14));

} else {
var statearr_30975_32900 = state_30956__$1;
(statearr_30975_32900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (6))){
var state_30956__$1 = state_30956;
var statearr_30976_32903 = state_30956__$1;
(statearr_30976_32903[(2)] = null);

(statearr_30976_32903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (17))){
var inst_30945 = (state_30956[(2)]);
var state_30956__$1 = (function (){var statearr_30984 = state_30956;
(statearr_30984[(10)] = inst_30945);

return statearr_30984;
})();
var statearr_30985_32905 = state_30956__$1;
(statearr_30985_32905[(2)] = null);

(statearr_30985_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (3))){
var inst_30951 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30956__$1,inst_30951);
} else {
if((state_val_30957 === (12))){
var _ = (function (){var statearr_30988 = state_30956;
(statearr_30988[(4)] = cljs.core.rest((state_30956[(4)])));

return statearr_30988;
})();
var state_30956__$1 = state_30956;
var ex30982 = (state_30956__$1[(2)]);
var statearr_30989_32913 = state_30956__$1;
(statearr_30989_32913[(5)] = ex30982);


if((ex30982 instanceof Object)){
var statearr_30990_32915 = state_30956__$1;
(statearr_30990_32915[(1)] = (11));

(statearr_30990_32915[(5)] = null);

} else {
throw ex30982;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (2))){
var inst_30890 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30895 = cnt;
var inst_30896 = (0);
var state_30956__$1 = (function (){var statearr_31003 = state_30956;
(statearr_31003[(7)] = inst_30895);

(statearr_31003[(11)] = inst_30890);

(statearr_31003[(8)] = inst_30896);

return statearr_31003;
})();
var statearr_31004_32916 = state_30956__$1;
(statearr_31004_32916[(2)] = null);

(statearr_31004_32916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (11))){
var inst_30909 = (state_30956[(2)]);
var inst_30917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30956__$1 = (function (){var statearr_31005 = state_30956;
(statearr_31005[(12)] = inst_30909);

return statearr_31005;
})();
var statearr_31007_32921 = state_30956__$1;
(statearr_31007_32921[(2)] = inst_30917);

(statearr_31007_32921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (9))){
var inst_30896 = (state_30956[(8)]);
var _ = (function (){var statearr_31013 = state_30956;
(statearr_31013[(4)] = cljs.core.cons((12),(state_30956[(4)])));

return statearr_31013;
})();
var inst_30923 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30896) : chs__$1.call(null,inst_30896));
var inst_30924 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30896) : done.call(null,inst_30896));
var inst_30925 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30923,inst_30924);
var ___$1 = (function (){var statearr_31014 = state_30956;
(statearr_31014[(4)] = cljs.core.rest((state_30956[(4)])));

return statearr_31014;
})();
var state_30956__$1 = state_30956;
var statearr_31015_32926 = state_30956__$1;
(statearr_31015_32926[(2)] = inst_30925);

(statearr_31015_32926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (5))){
var inst_30936 = (state_30956[(2)]);
var state_30956__$1 = (function (){var statearr_31019 = state_30956;
(statearr_31019[(13)] = inst_30936);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30956__$1,(13),dchan);
} else {
if((state_val_30957 === (14))){
var inst_30941 = cljs.core.async.close_BANG_(out);
var state_30956__$1 = state_30956;
var statearr_31021_32930 = state_30956__$1;
(statearr_31021_32930[(2)] = inst_30941);

(statearr_31021_32930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (16))){
var inst_30949 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_31022_32932 = state_30956__$1;
(statearr_31022_32932[(2)] = inst_30949);

(statearr_31022_32932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (10))){
var inst_30896 = (state_30956[(8)]);
var inst_30928 = (state_30956[(2)]);
var inst_30930 = (inst_30896 + (1));
var inst_30896__$1 = inst_30930;
var state_30956__$1 = (function (){var statearr_31025 = state_30956;
(statearr_31025[(8)] = inst_30896__$1);

(statearr_31025[(14)] = inst_30928);

return statearr_31025;
})();
var statearr_31026_32937 = state_30956__$1;
(statearr_31026_32937[(2)] = null);

(statearr_31026_32937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (8))){
var inst_30934 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_31027_32938 = state_30956__$1;
(statearr_31027_32938[(2)] = inst_30934);

(statearr_31027_32938[(1)] = (5));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31028[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31028[(1)] = (1));

return statearr_31028;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_30956){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_30956);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31029){var ex__28548__auto__ = e31029;
var statearr_31030_32948 = state_30956;
(statearr_31030_32948[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_30956[(4)]))){
var statearr_31031_32949 = state_30956;
(statearr_31031_32949[(1)] = cljs.core.first((state_30956[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32953 = state_30956;
state_30956 = G__32953;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_30956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_30956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31033 = f__28696__auto__();
(statearr_31033[(6)] = c__28695__auto___32862);

return statearr_31033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


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
var G__31039 = arguments.length;
switch (G__31039) {
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
var c__28695__auto___32965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31050 = (state_31079[(7)]);
var inst_31052 = (state_31079[(8)]);
var inst_31050__$1 = (state_31079[(2)]);
var inst_31052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31050__$1,(0),null);
var inst_31053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31050__$1,(1),null);
var inst_31054 = (inst_31052__$1 == null);
var state_31079__$1 = (function (){var statearr_31082 = state_31079;
(statearr_31082[(9)] = inst_31053);

(statearr_31082[(7)] = inst_31050__$1);

(statearr_31082[(8)] = inst_31052__$1);

return statearr_31082;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31083_32988 = state_31079__$1;
(statearr_31083_32988[(1)] = (8));

} else {
var statearr_31084_32994 = state_31079__$1;
(statearr_31084_32994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var inst_31040 = cljs.core.vec(chs);
var inst_31041 = inst_31040;
var state_31079__$1 = (function (){var statearr_31087 = state_31079;
(statearr_31087[(10)] = inst_31041);

return statearr_31087;
})();
var statearr_31088_32998 = state_31079__$1;
(statearr_31088_32998[(2)] = null);

(statearr_31088_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31041 = (state_31079[(10)]);
var state_31079__$1 = state_31079;
return cljs.core.async.ioc_alts_BANG_(state_31079__$1,(7),inst_31041);
} else {
if((state_val_31080 === (6))){
var inst_31072 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31091_33006 = state_31079__$1;
(statearr_31091_33006[(2)] = inst_31072);

(statearr_31091_33006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31076 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31079__$1,inst_31076);
} else {
if((state_val_31080 === (2))){
var inst_31041 = (state_31079[(10)]);
var inst_31043 = cljs.core.count(inst_31041);
var inst_31044 = (inst_31043 > (0));
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31044)){
var statearr_31096_33016 = state_31079__$1;
(statearr_31096_33016[(1)] = (4));

} else {
var statearr_31097_33017 = state_31079__$1;
(statearr_31097_33017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (11))){
var inst_31041 = (state_31079[(10)]);
var inst_31065 = (state_31079[(2)]);
var tmp31092 = inst_31041;
var inst_31041__$1 = tmp31092;
var state_31079__$1 = (function (){var statearr_31098 = state_31079;
(statearr_31098[(10)] = inst_31041__$1);

(statearr_31098[(11)] = inst_31065);

return statearr_31098;
})();
var statearr_31099_33020 = state_31079__$1;
(statearr_31099_33020[(2)] = null);

(statearr_31099_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var inst_31052 = (state_31079[(8)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31079__$1,(11),out,inst_31052);
} else {
if((state_val_31080 === (5))){
var inst_31070 = cljs.core.async.close_BANG_(out);
var state_31079__$1 = state_31079;
var statearr_31119_33021 = state_31079__$1;
(statearr_31119_33021[(2)] = inst_31070);

(statearr_31119_33021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (10))){
var inst_31068 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31124_33035 = state_31079__$1;
(statearr_31124_33035[(2)] = inst_31068);

(statearr_31124_33035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (8))){
var inst_31053 = (state_31079[(9)]);
var inst_31050 = (state_31079[(7)]);
var inst_31052 = (state_31079[(8)]);
var inst_31041 = (state_31079[(10)]);
var inst_31060 = (function (){var cs = inst_31041;
var vec__31046 = inst_31050;
var v = inst_31052;
var c = inst_31053;
return (function (p1__31037_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31037_SHARP_);
});
})();
var inst_31061 = cljs.core.filterv(inst_31060,inst_31041);
var inst_31041__$1 = inst_31061;
var state_31079__$1 = (function (){var statearr_31126 = state_31079;
(statearr_31126[(10)] = inst_31041__$1);

return statearr_31126;
})();
var statearr_31127_33044 = state_31079__$1;
(statearr_31127_33044[(2)] = null);

(statearr_31127_33044[(1)] = (2));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31128 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31128[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31128[(1)] = (1));

return statearr_31128;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31079){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31079);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31129){var ex__28548__auto__ = e31129;
var statearr_31130_33046 = state_31079;
(statearr_31130_33046[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31079[(4)]))){
var statearr_31131_33047 = state_31079;
(statearr_31131_33047[(1)] = cljs.core.first((state_31079[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33052 = state_31079;
state_31079 = G__33052;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31132 = f__28696__auto__();
(statearr_31132[(6)] = c__28695__auto___32965);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
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
var G__31134 = arguments.length;
switch (G__31134) {
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
var c__28695__auto___33072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (7))){
var inst_31142 = (state_31162[(7)]);
var inst_31142__$1 = (state_31162[(2)]);
var inst_31145 = (inst_31142__$1 == null);
var inst_31146 = cljs.core.not(inst_31145);
var state_31162__$1 = (function (){var statearr_31166 = state_31162;
(statearr_31166[(7)] = inst_31142__$1);

return statearr_31166;
})();
if(inst_31146){
var statearr_31167_33081 = state_31162__$1;
(statearr_31167_33081[(1)] = (8));

} else {
var statearr_31168_33082 = state_31162__$1;
(statearr_31168_33082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (1))){
var inst_31135 = (0);
var state_31162__$1 = (function (){var statearr_31169 = state_31162;
(statearr_31169[(8)] = inst_31135);

return statearr_31169;
})();
var statearr_31170_33087 = state_31162__$1;
(statearr_31170_33087[(2)] = null);

(statearr_31170_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (4))){
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31162__$1,(7),ch);
} else {
if((state_val_31163 === (6))){
var inst_31157 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31171_33088 = state_31162__$1;
(statearr_31171_33088[(2)] = inst_31157);

(statearr_31171_33088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (3))){
var inst_31159 = (state_31162[(2)]);
var inst_31160 = cljs.core.async.close_BANG_(out);
var state_31162__$1 = (function (){var statearr_31172 = state_31162;
(statearr_31172[(9)] = inst_31159);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31162__$1,inst_31160);
} else {
if((state_val_31163 === (2))){
var inst_31135 = (state_31162[(8)]);
var inst_31139 = (inst_31135 < n);
var state_31162__$1 = state_31162;
if(cljs.core.truth_(inst_31139)){
var statearr_31173_33094 = state_31162__$1;
(statearr_31173_33094[(1)] = (4));

} else {
var statearr_31174_33101 = state_31162__$1;
(statearr_31174_33101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (11))){
var inst_31135 = (state_31162[(8)]);
var inst_31149 = (state_31162[(2)]);
var inst_31150 = (inst_31135 + (1));
var inst_31135__$1 = inst_31150;
var state_31162__$1 = (function (){var statearr_31177 = state_31162;
(statearr_31177[(8)] = inst_31135__$1);

(statearr_31177[(10)] = inst_31149);

return statearr_31177;
})();
var statearr_31181_33107 = state_31162__$1;
(statearr_31181_33107[(2)] = null);

(statearr_31181_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (9))){
var state_31162__$1 = state_31162;
var statearr_31183_33108 = state_31162__$1;
(statearr_31183_33108[(2)] = null);

(statearr_31183_33108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (5))){
var state_31162__$1 = state_31162;
var statearr_31186_33109 = state_31162__$1;
(statearr_31186_33109[(2)] = null);

(statearr_31186_33109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (10))){
var inst_31154 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31187_33111 = state_31162__$1;
(statearr_31187_33111[(2)] = inst_31154);

(statearr_31187_33111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (8))){
var inst_31142 = (state_31162[(7)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31162__$1,(11),out,inst_31142);
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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31188[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31188[(1)] = (1));

return statearr_31188;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31162){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31162);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31189){var ex__28548__auto__ = e31189;
var statearr_31190_33121 = state_31162;
(statearr_31190_33121[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31162[(4)]))){
var statearr_31191_33123 = state_31162;
(statearr_31191_33123[(1)] = cljs.core.first((state_31162[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33126 = state_31162;
state_31162 = G__33126;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31192 = f__28696__auto__();
(statearr_31192[(6)] = c__28695__auto___33072);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31194 = (function (f,ch,meta31195){
this.f = f;
this.ch = ch;
this.meta31195 = meta31195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31196,meta31195__$1){
var self__ = this;
var _31196__$1 = this;
return (new cljs.core.async.t_cljs$core$async31194(self__.f,self__.ch,meta31195__$1));
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31196){
var self__ = this;
var _31196__$1 = this;
return self__.meta31195;
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31209 = (function (f,ch,meta31195,_,fn1,meta31210){
this.f = f;
this.ch = ch;
this.meta31195 = meta31195;
this._ = _;
this.fn1 = fn1;
this.meta31210 = meta31210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31211,meta31210__$1){
var self__ = this;
var _31211__$1 = this;
return (new cljs.core.async.t_cljs$core$async31209(self__.f,self__.ch,self__.meta31195,self__._,self__.fn1,meta31210__$1));
}));

(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31211){
var self__ = this;
var _31211__$1 = this;
return self__.meta31210;
}));

(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31193_SHARP_){
var G__31226 = (((p1__31193_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31193_SHARP_) : self__.f.call(null,p1__31193_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31226) : f1.call(null,G__31226));
});
}));

(cljs.core.async.t_cljs$core$async31209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31195","meta31195",1206363406,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31194","cljs.core.async/t_cljs$core$async31194",564563267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31210","meta31210",-463288949,null)], null);
}));

(cljs.core.async.t_cljs$core$async31209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31209");

(cljs.core.async.t_cljs$core$async31209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31209.
 */
cljs.core.async.__GT_t_cljs$core$async31209 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31209(f__$1,ch__$1,meta31195__$1,___$2,fn1__$1,meta31210){
return (new cljs.core.async.t_cljs$core$async31209(f__$1,ch__$1,meta31195__$1,___$2,fn1__$1,meta31210));
});

}

return (new cljs.core.async.t_cljs$core$async31209(self__.f,self__.ch,self__.meta31195,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31227) : self__.f.call(null,G__31227));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31195","meta31195",1206363406,null)], null);
}));

(cljs.core.async.t_cljs$core$async31194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31194");

(cljs.core.async.t_cljs$core$async31194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31194.
 */
cljs.core.async.__GT_t_cljs$core$async31194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31194(f__$1,ch__$1,meta31195){
return (new cljs.core.async.t_cljs$core$async31194(f__$1,ch__$1,meta31195));
});

}

return (new cljs.core.async.t_cljs$core$async31194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31232 = (function (f,ch,meta31233){
this.f = f;
this.ch = ch;
this.meta31233 = meta31233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31234,meta31233__$1){
var self__ = this;
var _31234__$1 = this;
return (new cljs.core.async.t_cljs$core$async31232(self__.f,self__.ch,meta31233__$1));
}));

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31234){
var self__ = this;
var _31234__$1 = this;
return self__.meta31233;
}));

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31233","meta31233",356270729,null)], null);
}));

(cljs.core.async.t_cljs$core$async31232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31232");

(cljs.core.async.t_cljs$core$async31232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31232.
 */
cljs.core.async.__GT_t_cljs$core$async31232 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31232(f__$1,ch__$1,meta31233){
return (new cljs.core.async.t_cljs$core$async31232(f__$1,ch__$1,meta31233));
});

}

return (new cljs.core.async.t_cljs$core$async31232(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31241 = (function (p,ch,meta31242){
this.p = p;
this.ch = ch;
this.meta31242 = meta31242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31243,meta31242__$1){
var self__ = this;
var _31243__$1 = this;
return (new cljs.core.async.t_cljs$core$async31241(self__.p,self__.ch,meta31242__$1));
}));

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31243){
var self__ = this;
var _31243__$1 = this;
return self__.meta31242;
}));

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31242","meta31242",-357277053,null)], null);
}));

(cljs.core.async.t_cljs$core$async31241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31241");

(cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31241.
 */
cljs.core.async.__GT_t_cljs$core$async31241 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31241(p__$1,ch__$1,meta31242){
return (new cljs.core.async.t_cljs$core$async31241(p__$1,ch__$1,meta31242));
});

}

return (new cljs.core.async.t_cljs$core$async31241(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31265 = arguments.length;
switch (G__31265) {
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
var c__28695__auto___33191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31290){
var state_val_31291 = (state_31290[(1)]);
if((state_val_31291 === (7))){
var inst_31286 = (state_31290[(2)]);
var state_31290__$1 = state_31290;
var statearr_31294_33192 = state_31290__$1;
(statearr_31294_33192[(2)] = inst_31286);

(statearr_31294_33192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (1))){
var state_31290__$1 = state_31290;
var statearr_31298_33193 = state_31290__$1;
(statearr_31298_33193[(2)] = null);

(statearr_31298_33193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (4))){
var inst_31272 = (state_31290[(7)]);
var inst_31272__$1 = (state_31290[(2)]);
var inst_31273 = (inst_31272__$1 == null);
var state_31290__$1 = (function (){var statearr_31299 = state_31290;
(statearr_31299[(7)] = inst_31272__$1);

return statearr_31299;
})();
if(cljs.core.truth_(inst_31273)){
var statearr_31300_33196 = state_31290__$1;
(statearr_31300_33196[(1)] = (5));

} else {
var statearr_31301_33197 = state_31290__$1;
(statearr_31301_33197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (6))){
var inst_31272 = (state_31290[(7)]);
var inst_31277 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31272) : p.call(null,inst_31272));
var state_31290__$1 = state_31290;
if(cljs.core.truth_(inst_31277)){
var statearr_31305_33198 = state_31290__$1;
(statearr_31305_33198[(1)] = (8));

} else {
var statearr_31306_33199 = state_31290__$1;
(statearr_31306_33199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (3))){
var inst_31288 = (state_31290[(2)]);
var state_31290__$1 = state_31290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31290__$1,inst_31288);
} else {
if((state_val_31291 === (2))){
var state_31290__$1 = state_31290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31290__$1,(4),ch);
} else {
if((state_val_31291 === (11))){
var inst_31280 = (state_31290[(2)]);
var state_31290__$1 = state_31290;
var statearr_31307_33201 = state_31290__$1;
(statearr_31307_33201[(2)] = inst_31280);

(statearr_31307_33201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (9))){
var state_31290__$1 = state_31290;
var statearr_31308_33202 = state_31290__$1;
(statearr_31308_33202[(2)] = null);

(statearr_31308_33202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (5))){
var inst_31275 = cljs.core.async.close_BANG_(out);
var state_31290__$1 = state_31290;
var statearr_31310_33204 = state_31290__$1;
(statearr_31310_33204[(2)] = inst_31275);

(statearr_31310_33204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (10))){
var inst_31283 = (state_31290[(2)]);
var state_31290__$1 = (function (){var statearr_31315 = state_31290;
(statearr_31315[(8)] = inst_31283);

return statearr_31315;
})();
var statearr_31320_33205 = state_31290__$1;
(statearr_31320_33205[(2)] = null);

(statearr_31320_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (8))){
var inst_31272 = (state_31290[(7)]);
var state_31290__$1 = state_31290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31290__$1,(11),out,inst_31272);
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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31321 = [null,null,null,null,null,null,null,null,null];
(statearr_31321[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31321[(1)] = (1));

return statearr_31321;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31290){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31290);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31322){var ex__28548__auto__ = e31322;
var statearr_31323_33206 = state_31290;
(statearr_31323_33206[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31290[(4)]))){
var statearr_31324_33207 = state_31290;
(statearr_31324_33207[(1)] = cljs.core.first((state_31290[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33208 = state_31290;
state_31290 = G__33208;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31325 = f__28696__auto__();
(statearr_31325[(6)] = c__28695__auto___33191);

return statearr_31325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31330 = arguments.length;
switch (G__31330) {
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
var c__28695__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31395){
var state_val_31396 = (state_31395[(1)]);
if((state_val_31396 === (7))){
var inst_31391 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
var statearr_31398_33218 = state_31395__$1;
(statearr_31398_33218[(2)] = inst_31391);

(statearr_31398_33218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (20))){
var inst_31361 = (state_31395[(7)]);
var inst_31372 = (state_31395[(2)]);
var inst_31373 = cljs.core.next(inst_31361);
var inst_31347 = inst_31373;
var inst_31348 = null;
var inst_31349 = (0);
var inst_31350 = (0);
var state_31395__$1 = (function (){var statearr_31402 = state_31395;
(statearr_31402[(8)] = inst_31347);

(statearr_31402[(9)] = inst_31348);

(statearr_31402[(10)] = inst_31372);

(statearr_31402[(11)] = inst_31349);

(statearr_31402[(12)] = inst_31350);

return statearr_31402;
})();
var statearr_31403_33222 = state_31395__$1;
(statearr_31403_33222[(2)] = null);

(statearr_31403_33222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (1))){
var state_31395__$1 = state_31395;
var statearr_31405_33227 = state_31395__$1;
(statearr_31405_33227[(2)] = null);

(statearr_31405_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (4))){
var inst_31335 = (state_31395[(13)]);
var inst_31335__$1 = (state_31395[(2)]);
var inst_31336 = (inst_31335__$1 == null);
var state_31395__$1 = (function (){var statearr_31407 = state_31395;
(statearr_31407[(13)] = inst_31335__$1);

return statearr_31407;
})();
if(cljs.core.truth_(inst_31336)){
var statearr_31409_33232 = state_31395__$1;
(statearr_31409_33232[(1)] = (5));

} else {
var statearr_31410_33233 = state_31395__$1;
(statearr_31410_33233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (15))){
var state_31395__$1 = state_31395;
var statearr_31415_33235 = state_31395__$1;
(statearr_31415_33235[(2)] = null);

(statearr_31415_33235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (21))){
var state_31395__$1 = state_31395;
var statearr_31416_33240 = state_31395__$1;
(statearr_31416_33240[(2)] = null);

(statearr_31416_33240[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (13))){
var inst_31347 = (state_31395[(8)]);
var inst_31348 = (state_31395[(9)]);
var inst_31349 = (state_31395[(11)]);
var inst_31350 = (state_31395[(12)]);
var inst_31357 = (state_31395[(2)]);
var inst_31358 = (inst_31350 + (1));
var tmp31412 = inst_31347;
var tmp31413 = inst_31348;
var tmp31414 = inst_31349;
var inst_31347__$1 = tmp31412;
var inst_31348__$1 = tmp31413;
var inst_31349__$1 = tmp31414;
var inst_31350__$1 = inst_31358;
var state_31395__$1 = (function (){var statearr_31418 = state_31395;
(statearr_31418[(8)] = inst_31347__$1);

(statearr_31418[(9)] = inst_31348__$1);

(statearr_31418[(11)] = inst_31349__$1);

(statearr_31418[(12)] = inst_31350__$1);

(statearr_31418[(14)] = inst_31357);

return statearr_31418;
})();
var statearr_31419_33244 = state_31395__$1;
(statearr_31419_33244[(2)] = null);

(statearr_31419_33244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (22))){
var state_31395__$1 = state_31395;
var statearr_31421_33245 = state_31395__$1;
(statearr_31421_33245[(2)] = null);

(statearr_31421_33245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (6))){
var inst_31335 = (state_31395[(13)]);
var inst_31345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31335) : f.call(null,inst_31335));
var inst_31346 = cljs.core.seq(inst_31345);
var inst_31347 = inst_31346;
var inst_31348 = null;
var inst_31349 = (0);
var inst_31350 = (0);
var state_31395__$1 = (function (){var statearr_31423 = state_31395;
(statearr_31423[(8)] = inst_31347);

(statearr_31423[(9)] = inst_31348);

(statearr_31423[(11)] = inst_31349);

(statearr_31423[(12)] = inst_31350);

return statearr_31423;
})();
var statearr_31424_33253 = state_31395__$1;
(statearr_31424_33253[(2)] = null);

(statearr_31424_33253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (17))){
var inst_31361 = (state_31395[(7)]);
var inst_31365 = cljs.core.chunk_first(inst_31361);
var inst_31366 = cljs.core.chunk_rest(inst_31361);
var inst_31367 = cljs.core.count(inst_31365);
var inst_31347 = inst_31366;
var inst_31348 = inst_31365;
var inst_31349 = inst_31367;
var inst_31350 = (0);
var state_31395__$1 = (function (){var statearr_31425 = state_31395;
(statearr_31425[(8)] = inst_31347);

(statearr_31425[(9)] = inst_31348);

(statearr_31425[(11)] = inst_31349);

(statearr_31425[(12)] = inst_31350);

return statearr_31425;
})();
var statearr_31426_33294 = state_31395__$1;
(statearr_31426_33294[(2)] = null);

(statearr_31426_33294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (3))){
var inst_31393 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31395__$1,inst_31393);
} else {
if((state_val_31396 === (12))){
var inst_31381 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
var statearr_31427_33295 = state_31395__$1;
(statearr_31427_33295[(2)] = inst_31381);

(statearr_31427_33295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (2))){
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31395__$1,(4),in$);
} else {
if((state_val_31396 === (23))){
var inst_31389 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
var statearr_31428_33297 = state_31395__$1;
(statearr_31428_33297[(2)] = inst_31389);

(statearr_31428_33297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (19))){
var inst_31376 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
var statearr_31430_33299 = state_31395__$1;
(statearr_31430_33299[(2)] = inst_31376);

(statearr_31430_33299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (11))){
var inst_31347 = (state_31395[(8)]);
var inst_31361 = (state_31395[(7)]);
var inst_31361__$1 = cljs.core.seq(inst_31347);
var state_31395__$1 = (function (){var statearr_31431 = state_31395;
(statearr_31431[(7)] = inst_31361__$1);

return statearr_31431;
})();
if(inst_31361__$1){
var statearr_31433_33301 = state_31395__$1;
(statearr_31433_33301[(1)] = (14));

} else {
var statearr_31434_33303 = state_31395__$1;
(statearr_31434_33303[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (9))){
var inst_31383 = (state_31395[(2)]);
var inst_31384 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31395__$1 = (function (){var statearr_31435 = state_31395;
(statearr_31435[(15)] = inst_31383);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31384)){
var statearr_31436_33305 = state_31395__$1;
(statearr_31436_33305[(1)] = (21));

} else {
var statearr_31437_33306 = state_31395__$1;
(statearr_31437_33306[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (5))){
var inst_31338 = cljs.core.async.close_BANG_(out);
var state_31395__$1 = state_31395;
var statearr_31438_33308 = state_31395__$1;
(statearr_31438_33308[(2)] = inst_31338);

(statearr_31438_33308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (14))){
var inst_31361 = (state_31395[(7)]);
var inst_31363 = cljs.core.chunked_seq_QMARK_(inst_31361);
var state_31395__$1 = state_31395;
if(inst_31363){
var statearr_31441_33315 = state_31395__$1;
(statearr_31441_33315[(1)] = (17));

} else {
var statearr_31442_33320 = state_31395__$1;
(statearr_31442_33320[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (16))){
var inst_31379 = (state_31395[(2)]);
var state_31395__$1 = state_31395;
var statearr_31444_33322 = state_31395__$1;
(statearr_31444_33322[(2)] = inst_31379);

(statearr_31444_33322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31396 === (10))){
var inst_31348 = (state_31395[(9)]);
var inst_31350 = (state_31395[(12)]);
var inst_31355 = cljs.core._nth(inst_31348,inst_31350);
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31395__$1,(13),out,inst_31355);
} else {
if((state_val_31396 === (18))){
var inst_31361 = (state_31395[(7)]);
var inst_31370 = cljs.core.first(inst_31361);
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31395__$1,(20),out,inst_31370);
} else {
if((state_val_31396 === (8))){
var inst_31349 = (state_31395[(11)]);
var inst_31350 = (state_31395[(12)]);
var inst_31352 = (inst_31350 < inst_31349);
var inst_31353 = inst_31352;
var state_31395__$1 = state_31395;
if(cljs.core.truth_(inst_31353)){
var statearr_31445_33348 = state_31395__$1;
(statearr_31445_33348[(1)] = (10));

} else {
var statearr_31446_33438 = state_31395__$1;
(statearr_31446_33438[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0 = (function (){
var statearr_31452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__);

(statearr_31452[(1)] = (1));

return statearr_31452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1 = (function (state_31395){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31395);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31453){var ex__28548__auto__ = e31453;
var statearr_31454_33451 = state_31395;
(statearr_31454_33451[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31395[(4)]))){
var statearr_31455_33452 = state_31395;
(statearr_31455_33452[(1)] = cljs.core.first((state_31395[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33455 = state_31395;
state_31395 = G__33455;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__ = function(state_31395){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1.call(this,state_31395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28545__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31457 = f__28696__auto__();
(statearr_31457[(6)] = c__28695__auto__);

return statearr_31457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

return c__28695__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31495 = arguments.length;
switch (G__31495) {
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
var G__31502 = arguments.length;
switch (G__31502) {
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
var G__31510 = arguments.length;
switch (G__31510) {
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
var c__28695__auto___33464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (7))){
var inst_31530 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31538_33469 = state_31535__$1;
(statearr_31538_33469[(2)] = inst_31530);

(statearr_31538_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (1))){
var inst_31512 = null;
var state_31535__$1 = (function (){var statearr_31539 = state_31535;
(statearr_31539[(7)] = inst_31512);

return statearr_31539;
})();
var statearr_31540_33479 = state_31535__$1;
(statearr_31540_33479[(2)] = null);

(statearr_31540_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (4))){
var inst_31515 = (state_31535[(8)]);
var inst_31515__$1 = (state_31535[(2)]);
var inst_31516 = (inst_31515__$1 == null);
var inst_31517 = cljs.core.not(inst_31516);
var state_31535__$1 = (function (){var statearr_31541 = state_31535;
(statearr_31541[(8)] = inst_31515__$1);

return statearr_31541;
})();
if(inst_31517){
var statearr_31542_33492 = state_31535__$1;
(statearr_31542_33492[(1)] = (5));

} else {
var statearr_31543_33496 = state_31535__$1;
(statearr_31543_33496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (6))){
var state_31535__$1 = state_31535;
var statearr_31546_33506 = state_31535__$1;
(statearr_31546_33506[(2)] = null);

(statearr_31546_33506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (3))){
var inst_31532 = (state_31535[(2)]);
var inst_31533 = cljs.core.async.close_BANG_(out);
var state_31535__$1 = (function (){var statearr_31548 = state_31535;
(statearr_31548[(9)] = inst_31532);

return statearr_31548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31535__$1,inst_31533);
} else {
if((state_val_31536 === (2))){
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31535__$1,(4),ch);
} else {
if((state_val_31536 === (11))){
var inst_31515 = (state_31535[(8)]);
var inst_31524 = (state_31535[(2)]);
var inst_31512 = inst_31515;
var state_31535__$1 = (function (){var statearr_31550 = state_31535;
(statearr_31550[(7)] = inst_31512);

(statearr_31550[(10)] = inst_31524);

return statearr_31550;
})();
var statearr_31551_33579 = state_31535__$1;
(statearr_31551_33579[(2)] = null);

(statearr_31551_33579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (9))){
var inst_31515 = (state_31535[(8)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31535__$1,(11),out,inst_31515);
} else {
if((state_val_31536 === (5))){
var inst_31512 = (state_31535[(7)]);
var inst_31515 = (state_31535[(8)]);
var inst_31519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31515,inst_31512);
var state_31535__$1 = state_31535;
if(inst_31519){
var statearr_31553_33581 = state_31535__$1;
(statearr_31553_33581[(1)] = (8));

} else {
var statearr_31554_33583 = state_31535__$1;
(statearr_31554_33583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (10))){
var inst_31527 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31555_33588 = state_31535__$1;
(statearr_31555_33588[(2)] = inst_31527);

(statearr_31555_33588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (8))){
var inst_31512 = (state_31535[(7)]);
var tmp31552 = inst_31512;
var inst_31512__$1 = tmp31552;
var state_31535__$1 = (function (){var statearr_31558 = state_31535;
(statearr_31558[(7)] = inst_31512__$1);

return statearr_31558;
})();
var statearr_31559_33593 = state_31535__$1;
(statearr_31559_33593[(2)] = null);

(statearr_31559_33593[(1)] = (2));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31563[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31563[(1)] = (1));

return statearr_31563;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31535){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31535);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31565){var ex__28548__auto__ = e31565;
var statearr_31566_33601 = state_31535;
(statearr_31566_33601[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31535[(4)]))){
var statearr_31570_33626 = state_31535;
(statearr_31570_33626[(1)] = cljs.core.first((state_31535[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33627 = state_31535;
state_31535 = G__33627;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31572 = f__28696__auto__();
(statearr_31572[(6)] = c__28695__auto___33464);

return statearr_31572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
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
var c__28695__auto___33630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (7))){
var inst_31616 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31625_33632 = state_31620__$1;
(statearr_31625_33632[(2)] = inst_31616);

(statearr_31625_33632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (1))){
var inst_31580 = (new Array(n));
var inst_31581 = inst_31580;
var inst_31582 = (0);
var state_31620__$1 = (function (){var statearr_31626 = state_31620;
(statearr_31626[(7)] = inst_31582);

(statearr_31626[(8)] = inst_31581);

return statearr_31626;
})();
var statearr_31627_33634 = state_31620__$1;
(statearr_31627_33634[(2)] = null);

(statearr_31627_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (4))){
var inst_31585 = (state_31620[(9)]);
var inst_31585__$1 = (state_31620[(2)]);
var inst_31589 = (inst_31585__$1 == null);
var inst_31590 = cljs.core.not(inst_31589);
var state_31620__$1 = (function (){var statearr_31632 = state_31620;
(statearr_31632[(9)] = inst_31585__$1);

return statearr_31632;
})();
if(inst_31590){
var statearr_31633_33637 = state_31620__$1;
(statearr_31633_33637[(1)] = (5));

} else {
var statearr_31634_33638 = state_31620__$1;
(statearr_31634_33638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (15))){
var inst_31610 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31635_33639 = state_31620__$1;
(statearr_31635_33639[(2)] = inst_31610);

(statearr_31635_33639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (13))){
var state_31620__$1 = state_31620;
var statearr_31636_33642 = state_31620__$1;
(statearr_31636_33642[(2)] = null);

(statearr_31636_33642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31582 = (state_31620[(7)]);
var inst_31606 = (inst_31582 > (0));
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31606)){
var statearr_31637_33645 = state_31620__$1;
(statearr_31637_33645[(1)] = (12));

} else {
var statearr_31638_33649 = state_31620__$1;
(statearr_31638_33649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (3))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (12))){
var inst_31581 = (state_31620[(8)]);
var inst_31608 = cljs.core.vec(inst_31581);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31620__$1,(15),out,inst_31608);
} else {
if((state_val_31621 === (2))){
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31620__$1,(4),ch);
} else {
if((state_val_31621 === (11))){
var inst_31600 = (state_31620[(2)]);
var inst_31601 = (new Array(n));
var inst_31581 = inst_31601;
var inst_31582 = (0);
var state_31620__$1 = (function (){var statearr_31640 = state_31620;
(statearr_31640[(7)] = inst_31582);

(statearr_31640[(8)] = inst_31581);

(statearr_31640[(10)] = inst_31600);

return statearr_31640;
})();
var statearr_31641_33652 = state_31620__$1;
(statearr_31641_33652[(2)] = null);

(statearr_31641_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (9))){
var inst_31581 = (state_31620[(8)]);
var inst_31598 = cljs.core.vec(inst_31581);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31620__$1,(11),out,inst_31598);
} else {
if((state_val_31621 === (5))){
var inst_31582 = (state_31620[(7)]);
var inst_31593 = (state_31620[(11)]);
var inst_31581 = (state_31620[(8)]);
var inst_31585 = (state_31620[(9)]);
var inst_31592 = (inst_31581[inst_31582] = inst_31585);
var inst_31593__$1 = (inst_31582 + (1));
var inst_31594 = (inst_31593__$1 < n);
var state_31620__$1 = (function (){var statearr_31648 = state_31620;
(statearr_31648[(11)] = inst_31593__$1);

(statearr_31648[(12)] = inst_31592);

return statearr_31648;
})();
if(cljs.core.truth_(inst_31594)){
var statearr_31650_33654 = state_31620__$1;
(statearr_31650_33654[(1)] = (8));

} else {
var statearr_31651_33655 = state_31620__$1;
(statearr_31651_33655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (14))){
var inst_31613 = (state_31620[(2)]);
var inst_31614 = cljs.core.async.close_BANG_(out);
var state_31620__$1 = (function (){var statearr_31659 = state_31620;
(statearr_31659[(13)] = inst_31613);

return statearr_31659;
})();
var statearr_31660_33656 = state_31620__$1;
(statearr_31660_33656[(2)] = inst_31614);

(statearr_31660_33656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (10))){
var inst_31604 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31661_33657 = state_31620__$1;
(statearr_31661_33657[(2)] = inst_31604);

(statearr_31661_33657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (8))){
var inst_31593 = (state_31620[(11)]);
var inst_31581 = (state_31620[(8)]);
var tmp31656 = inst_31581;
var inst_31581__$1 = tmp31656;
var inst_31582 = inst_31593;
var state_31620__$1 = (function (){var statearr_31662 = state_31620;
(statearr_31662[(7)] = inst_31582);

(statearr_31662[(8)] = inst_31581__$1);

return statearr_31662;
})();
var statearr_31663_33674 = state_31620__$1;
(statearr_31663_33674[(2)] = null);

(statearr_31663_33674[(1)] = (2));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31620){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31620);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31665){var ex__28548__auto__ = e31665;
var statearr_31666_33678 = state_31620;
(statearr_31666_33678[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31620[(4)]))){
var statearr_31667_33679 = state_31620;
(statearr_31667_33679[(1)] = cljs.core.first((state_31620[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33680 = state_31620;
state_31620 = G__33680;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31668 = f__28696__auto__();
(statearr_31668[(6)] = c__28695__auto___33630);

return statearr_31668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31670 = arguments.length;
switch (G__31670) {
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
var c__28695__auto___33687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_31713){
var state_val_31714 = (state_31713[(1)]);
if((state_val_31714 === (7))){
var inst_31708 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31715_33689 = state_31713__$1;
(statearr_31715_33689[(2)] = inst_31708);

(statearr_31715_33689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (1))){
var inst_31671 = [];
var inst_31672 = inst_31671;
var inst_31673 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31713__$1 = (function (){var statearr_31716 = state_31713;
(statearr_31716[(7)] = inst_31672);

(statearr_31716[(8)] = inst_31673);

return statearr_31716;
})();
var statearr_31717_33691 = state_31713__$1;
(statearr_31717_33691[(2)] = null);

(statearr_31717_33691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (4))){
var inst_31676 = (state_31713[(9)]);
var inst_31676__$1 = (state_31713[(2)]);
var inst_31677 = (inst_31676__$1 == null);
var inst_31678 = cljs.core.not(inst_31677);
var state_31713__$1 = (function (){var statearr_31721 = state_31713;
(statearr_31721[(9)] = inst_31676__$1);

return statearr_31721;
})();
if(inst_31678){
var statearr_31722_33699 = state_31713__$1;
(statearr_31722_33699[(1)] = (5));

} else {
var statearr_31724_33700 = state_31713__$1;
(statearr_31724_33700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (15))){
var inst_31702 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31725_33704 = state_31713__$1;
(statearr_31725_33704[(2)] = inst_31702);

(statearr_31725_33704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (13))){
var state_31713__$1 = state_31713;
var statearr_31726_33706 = state_31713__$1;
(statearr_31726_33706[(2)] = null);

(statearr_31726_33706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (6))){
var inst_31672 = (state_31713[(7)]);
var inst_31697 = inst_31672.length;
var inst_31698 = (inst_31697 > (0));
var state_31713__$1 = state_31713;
if(cljs.core.truth_(inst_31698)){
var statearr_31731_33714 = state_31713__$1;
(statearr_31731_33714[(1)] = (12));

} else {
var statearr_31732_33719 = state_31713__$1;
(statearr_31732_33719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (3))){
var inst_31710 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31713__$1,inst_31710);
} else {
if((state_val_31714 === (12))){
var inst_31672 = (state_31713[(7)]);
var inst_31700 = cljs.core.vec(inst_31672);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31713__$1,(15),out,inst_31700);
} else {
if((state_val_31714 === (2))){
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31713__$1,(4),ch);
} else {
if((state_val_31714 === (11))){
var inst_31676 = (state_31713[(9)]);
var inst_31680 = (state_31713[(10)]);
var inst_31690 = (state_31713[(2)]);
var inst_31691 = [];
var inst_31692 = inst_31691.push(inst_31676);
var inst_31672 = inst_31691;
var inst_31673 = inst_31680;
var state_31713__$1 = (function (){var statearr_31739 = state_31713;
(statearr_31739[(11)] = inst_31690);

(statearr_31739[(7)] = inst_31672);

(statearr_31739[(12)] = inst_31692);

(statearr_31739[(8)] = inst_31673);

return statearr_31739;
})();
var statearr_31740_33843 = state_31713__$1;
(statearr_31740_33843[(2)] = null);

(statearr_31740_33843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (9))){
var inst_31672 = (state_31713[(7)]);
var inst_31688 = cljs.core.vec(inst_31672);
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31713__$1,(11),out,inst_31688);
} else {
if((state_val_31714 === (5))){
var inst_31676 = (state_31713[(9)]);
var inst_31680 = (state_31713[(10)]);
var inst_31673 = (state_31713[(8)]);
var inst_31680__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31676) : f.call(null,inst_31676));
var inst_31681 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31680__$1,inst_31673);
var inst_31682 = cljs.core.keyword_identical_QMARK_(inst_31673,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31683 = ((inst_31681) || (inst_31682));
var state_31713__$1 = (function (){var statearr_31746 = state_31713;
(statearr_31746[(10)] = inst_31680__$1);

return statearr_31746;
})();
if(cljs.core.truth_(inst_31683)){
var statearr_31747_33847 = state_31713__$1;
(statearr_31747_33847[(1)] = (8));

} else {
var statearr_31748_33848 = state_31713__$1;
(statearr_31748_33848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (14))){
var inst_31705 = (state_31713[(2)]);
var inst_31706 = cljs.core.async.close_BANG_(out);
var state_31713__$1 = (function (){var statearr_31750 = state_31713;
(statearr_31750[(13)] = inst_31705);

return statearr_31750;
})();
var statearr_31751_33850 = state_31713__$1;
(statearr_31751_33850[(2)] = inst_31706);

(statearr_31751_33850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (10))){
var inst_31695 = (state_31713[(2)]);
var state_31713__$1 = state_31713;
var statearr_31752_33852 = state_31713__$1;
(statearr_31752_33852[(2)] = inst_31695);

(statearr_31752_33852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31714 === (8))){
var inst_31672 = (state_31713[(7)]);
var inst_31676 = (state_31713[(9)]);
var inst_31680 = (state_31713[(10)]);
var inst_31685 = inst_31672.push(inst_31676);
var tmp31749 = inst_31672;
var inst_31672__$1 = tmp31749;
var inst_31673 = inst_31680;
var state_31713__$1 = (function (){var statearr_31753 = state_31713;
(statearr_31753[(7)] = inst_31672__$1);

(statearr_31753[(14)] = inst_31685);

(statearr_31753[(8)] = inst_31673);

return statearr_31753;
})();
var statearr_31754_33853 = state_31713__$1;
(statearr_31754_33853[(2)] = null);

(statearr_31754_33853[(1)] = (2));


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
var cljs$core$async$state_machine__28545__auto__ = null;
var cljs$core$async$state_machine__28545__auto____0 = (function (){
var statearr_31756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31756[(0)] = cljs$core$async$state_machine__28545__auto__);

(statearr_31756[(1)] = (1));

return statearr_31756;
});
var cljs$core$async$state_machine__28545__auto____1 = (function (state_31713){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_31713);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e31758){var ex__28548__auto__ = e31758;
var statearr_31759_33856 = state_31713;
(statearr_31759_33856[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_31713[(4)]))){
var statearr_31760_33857 = state_31713;
(statearr_31760_33857[(1)] = cljs.core.first((state_31713[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33858 = state_31713;
state_31713 = G__33858;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
cljs$core$async$state_machine__28545__auto__ = function(state_31713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28545__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28545__auto____1.call(this,state_31713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28545__auto____0;
cljs$core$async$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28545__auto____1;
return cljs$core$async$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_31761 = f__28696__auto__();
(statearr_31761[(6)] = c__28695__auto___33687);

return statearr_31761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
