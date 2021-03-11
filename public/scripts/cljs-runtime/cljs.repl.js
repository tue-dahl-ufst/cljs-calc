goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34761){
var map__34762 = p__34761;
var map__34762__$1 = (((((!((map__34762 == null))))?(((((map__34762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34762):map__34762);
var m = map__34762__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34769_34996 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34770_34997 = null;
var count__34771_34998 = (0);
var i__34772_34999 = (0);
while(true){
if((i__34772_34999 < count__34771_34998)){
var f_35000 = chunk__34770_34997.cljs$core$IIndexed$_nth$arity$2(null,i__34772_34999);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35000], 0));


var G__35001 = seq__34769_34996;
var G__35002 = chunk__34770_34997;
var G__35003 = count__34771_34998;
var G__35004 = (i__34772_34999 + (1));
seq__34769_34996 = G__35001;
chunk__34770_34997 = G__35002;
count__34771_34998 = G__35003;
i__34772_34999 = G__35004;
continue;
} else {
var temp__5735__auto___35005 = cljs.core.seq(seq__34769_34996);
if(temp__5735__auto___35005){
var seq__34769_35006__$1 = temp__5735__auto___35005;
if(cljs.core.chunked_seq_QMARK_(seq__34769_35006__$1)){
var c__4556__auto___35007 = cljs.core.chunk_first(seq__34769_35006__$1);
var G__35008 = cljs.core.chunk_rest(seq__34769_35006__$1);
var G__35009 = c__4556__auto___35007;
var G__35010 = cljs.core.count(c__4556__auto___35007);
var G__35011 = (0);
seq__34769_34996 = G__35008;
chunk__34770_34997 = G__35009;
count__34771_34998 = G__35010;
i__34772_34999 = G__35011;
continue;
} else {
var f_35012 = cljs.core.first(seq__34769_35006__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35012], 0));


var G__35013 = cljs.core.next(seq__34769_35006__$1);
var G__35014 = null;
var G__35015 = (0);
var G__35016 = (0);
seq__34769_34996 = G__35013;
chunk__34770_34997 = G__35014;
count__34771_34998 = G__35015;
i__34772_34999 = G__35016;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35017 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35017], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35017)))?cljs.core.second(arglists_35017):arglists_35017)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34777_35023 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34778_35024 = null;
var count__34779_35025 = (0);
var i__34780_35026 = (0);
while(true){
if((i__34780_35026 < count__34779_35025)){
var vec__34794_35027 = chunk__34778_35024.cljs$core$IIndexed$_nth$arity$2(null,i__34780_35026);
var name_35028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794_35027,(0),null);
var map__34797_35029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794_35027,(1),null);
var map__34797_35030__$1 = (((((!((map__34797_35029 == null))))?(((((map__34797_35029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34797_35029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34797_35029):map__34797_35029);
var doc_35031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797_35030__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797_35030__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35028], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35032], 0));

if(cljs.core.truth_(doc_35031)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35031], 0));
} else {
}


var G__35033 = seq__34777_35023;
var G__35034 = chunk__34778_35024;
var G__35035 = count__34779_35025;
var G__35036 = (i__34780_35026 + (1));
seq__34777_35023 = G__35033;
chunk__34778_35024 = G__35034;
count__34779_35025 = G__35035;
i__34780_35026 = G__35036;
continue;
} else {
var temp__5735__auto___35037 = cljs.core.seq(seq__34777_35023);
if(temp__5735__auto___35037){
var seq__34777_35038__$1 = temp__5735__auto___35037;
if(cljs.core.chunked_seq_QMARK_(seq__34777_35038__$1)){
var c__4556__auto___35039 = cljs.core.chunk_first(seq__34777_35038__$1);
var G__35040 = cljs.core.chunk_rest(seq__34777_35038__$1);
var G__35041 = c__4556__auto___35039;
var G__35042 = cljs.core.count(c__4556__auto___35039);
var G__35043 = (0);
seq__34777_35023 = G__35040;
chunk__34778_35024 = G__35041;
count__34779_35025 = G__35042;
i__34780_35026 = G__35043;
continue;
} else {
var vec__34810_35044 = cljs.core.first(seq__34777_35038__$1);
var name_35045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810_35044,(0),null);
var map__34813_35046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810_35044,(1),null);
var map__34813_35047__$1 = (((((!((map__34813_35046 == null))))?(((((map__34813_35046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34813_35046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34813_35046):map__34813_35046);
var doc_35048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813_35047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813_35047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35049], 0));

if(cljs.core.truth_(doc_35048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35048], 0));
} else {
}


var G__35051 = cljs.core.next(seq__34777_35038__$1);
var G__35053 = null;
var G__35055 = (0);
var G__35056 = (0);
seq__34777_35023 = G__35051;
chunk__34778_35024 = G__35053;
count__34779_35025 = G__35055;
i__34780_35026 = G__35056;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34816 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34817 = null;
var count__34818 = (0);
var i__34819 = (0);
while(true){
if((i__34819 < count__34818)){
var role = chunk__34817.cljs$core$IIndexed$_nth$arity$2(null,i__34819);
var temp__5735__auto___35059__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35059__$1)){
var spec_35060 = temp__5735__auto___35059__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35060)], 0));
} else {
}


var G__35061 = seq__34816;
var G__35062 = chunk__34817;
var G__35063 = count__34818;
var G__35064 = (i__34819 + (1));
seq__34816 = G__35061;
chunk__34817 = G__35062;
count__34818 = G__35063;
i__34819 = G__35064;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34816);
if(temp__5735__auto____$1){
var seq__34816__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34816__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34816__$1);
var G__35065 = cljs.core.chunk_rest(seq__34816__$1);
var G__35067 = c__4556__auto__;
var G__35068 = cljs.core.count(c__4556__auto__);
var G__35069 = (0);
seq__34816 = G__35065;
chunk__34817 = G__35067;
count__34818 = G__35068;
i__34819 = G__35069;
continue;
} else {
var role = cljs.core.first(seq__34816__$1);
var temp__5735__auto___35073__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35073__$2)){
var spec_35074 = temp__5735__auto___35073__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35074)], 0));
} else {
}


var G__35075 = cljs.core.next(seq__34816__$1);
var G__35076 = null;
var G__35077 = (0);
var G__35078 = (0);
seq__34816 = G__35075;
chunk__34817 = G__35076;
count__34818 = G__35077;
i__34819 = G__35078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35084 = cljs.core.ex_cause(t);
via = G__35083;
t = G__35084;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34845 = datafied_throwable;
var map__34845__$1 = (((((!((map__34845 == null))))?(((((map__34845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34845):map__34845);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34845__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34846 = cljs.core.last(via);
var map__34846__$1 = (((((!((map__34846 == null))))?(((((map__34846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34846):map__34846);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34847 = data;
var map__34847__$1 = (((((!((map__34847 == null))))?(((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34847):map__34847);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34848 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34848__$1 = (((((!((map__34848 == null))))?(((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34848):map__34848);
var top_data = map__34848__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34848__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34874 = phase;
var G__34874__$1 = (((G__34874 instanceof cljs.core.Keyword))?G__34874.fqn:null);
switch (G__34874__$1) {
case "read-source":
var map__34875 = data;
var map__34875__$1 = (((((!((map__34875 == null))))?(((((map__34875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34875):map__34875);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34875__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34875__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34885 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34885__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34885,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34885);
var G__34885__$2 = (cljs.core.truth_((function (){var fexpr__34893 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34893.cljs$core$IFn$_invoke$arity$1 ? fexpr__34893.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34893.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34885__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34885__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34885__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34885__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34903 = top_data;
var G__34903__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34903);
var G__34903__$2 = (cljs.core.truth_((function (){var fexpr__34904 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34904.cljs$core$IFn$_invoke$arity$1 ? fexpr__34904.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34904.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34903__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34903__$1);
var G__34903__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34903__$2);
var G__34903__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34903__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34903__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34903__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34905 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(3),null);
var G__34915 = top_data;
var G__34915__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34915,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34915);
var G__34915__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34915__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34915__$1);
var G__34915__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34915__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34915__$2);
var G__34915__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34915__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34915__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34915__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34915__$4;
}

break;
case "execution":
var vec__34930 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34844_SHARP_){
var or__4126__auto__ = (p1__34844_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__34942 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34942.cljs$core$IFn$_invoke$arity$1 ? fexpr__34942.cljs$core$IFn$_invoke$arity$1(p1__34844_SHARP_) : fexpr__34942.call(null,p1__34844_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34943 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34943__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34943,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34943);
var G__34943__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34943__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34943__$1);
var G__34943__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34943__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34943__$2);
var G__34943__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34943__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34943__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34943__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34943__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34874__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34951){
var map__34952 = p__34951;
var map__34952__$1 = (((((!((map__34952 == null))))?(((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34952):map__34952);
var triage_data = map__34952__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34955 = phase;
var G__34955__$1 = (((G__34955 instanceof cljs.core.Keyword))?G__34955.fqn:null);
switch (G__34955__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34956 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34957 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34958 = loc;
var G__34959 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34960_35099 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34961_35100 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34962_35101 = true;
var _STAR_print_fn_STAR__temp_val__34963_35102 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34962_35101);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34963_35102);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34948_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34948_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34961_35100);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34960_35099);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34956,G__34957,G__34958,G__34959) : format.call(null,G__34956,G__34957,G__34958,G__34959));

break;
case "macroexpansion":
var G__34965 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34966 = cause_type;
var G__34967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34968 = loc;
var G__34969 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34965,G__34966,G__34967,G__34968,G__34969) : format.call(null,G__34965,G__34966,G__34967,G__34968,G__34969));

break;
case "compile-syntax-check":
var G__34970 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34971 = cause_type;
var G__34972 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34973 = loc;
var G__34974 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34970,G__34971,G__34972,G__34973,G__34974) : format.call(null,G__34970,G__34971,G__34972,G__34973,G__34974));

break;
case "compilation":
var G__34975 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34976 = cause_type;
var G__34977 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34978 = loc;
var G__34979 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34975,G__34976,G__34977,G__34978,G__34979) : format.call(null,G__34975,G__34976,G__34977,G__34978,G__34979));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34981 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34982 = symbol;
var G__34983 = loc;
var G__34984 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34985_35109 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34986_35110 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34987_35111 = true;
var _STAR_print_fn_STAR__temp_val__34988_35112 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34987_35111);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34988_35112);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34950_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34950_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34986_35110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34985_35109);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34981,G__34982,G__34983,G__34984) : format.call(null,G__34981,G__34982,G__34983,G__34984));
} else {
var G__34990 = "Execution error%s at %s(%s).\n%s\n";
var G__34991 = cause_type;
var G__34992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34993 = loc;
var G__34994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34990,G__34991,G__34992,G__34993,G__34994) : format.call(null,G__34990,G__34991,G__34992,G__34993,G__34994));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34955__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
