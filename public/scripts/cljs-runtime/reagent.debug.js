goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35494__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35495__i = 0, G__35495__a = new Array(arguments.length -  0);
while (G__35495__i < G__35495__a.length) {G__35495__a[G__35495__i] = arguments[G__35495__i + 0]; ++G__35495__i;}
  args = new cljs.core.IndexedSeq(G__35495__a,0,null);
} 
return G__35494__delegate.call(this,args);};
G__35494.cljs$lang$maxFixedArity = 0;
G__35494.cljs$lang$applyTo = (function (arglist__35496){
var args = cljs.core.seq(arglist__35496);
return G__35494__delegate(args);
});
G__35494.cljs$core$IFn$_invoke$arity$variadic = G__35494__delegate;
return G__35494;
})()
);

(o.error = (function() { 
var G__35497__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35500__i = 0, G__35500__a = new Array(arguments.length -  0);
while (G__35500__i < G__35500__a.length) {G__35500__a[G__35500__i] = arguments[G__35500__i + 0]; ++G__35500__i;}
  args = new cljs.core.IndexedSeq(G__35500__a,0,null);
} 
return G__35497__delegate.call(this,args);};
G__35497.cljs$lang$maxFixedArity = 0;
G__35497.cljs$lang$applyTo = (function (arglist__35501){
var args = cljs.core.seq(arglist__35501);
return G__35497__delegate(args);
});
G__35497.cljs$core$IFn$_invoke$arity$variadic = G__35497__delegate;
return G__35497;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
