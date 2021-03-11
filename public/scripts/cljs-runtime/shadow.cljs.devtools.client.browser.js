goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35956 = arguments.length;
var i__4737__auto___35957 = (0);
while(true){
if((i__4737__auto___35957 < len__4736__auto___35956)){
args__4742__auto__.push((arguments[i__4737__auto___35957]));

var G__35958 = (i__4737__auto___35957 + (1));
i__4737__auto___35957 = G__35958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35751){
var G__35752 = cljs.core.first(seq35751);
var seq35751__$1 = cljs.core.next(seq35751);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35752,seq35751__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35753 = cljs.core.seq(sources);
var chunk__35754 = null;
var count__35755 = (0);
var i__35756 = (0);
while(true){
if((i__35756 < count__35755)){
var map__35768 = chunk__35754.cljs$core$IIndexed$_nth$arity$2(null,i__35756);
var map__35768__$1 = (((((!((map__35768 == null))))?(((((map__35768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35768):map__35768);
var src = map__35768__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35773){var e_35960 = e35773;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35960);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35960.message)].join('')));
}

var G__35961 = seq__35753;
var G__35962 = chunk__35754;
var G__35963 = count__35755;
var G__35964 = (i__35756 + (1));
seq__35753 = G__35961;
chunk__35754 = G__35962;
count__35755 = G__35963;
i__35756 = G__35964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35753);
if(temp__5735__auto__){
var seq__35753__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35753__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35753__$1);
var G__35966 = cljs.core.chunk_rest(seq__35753__$1);
var G__35967 = c__4556__auto__;
var G__35968 = cljs.core.count(c__4556__auto__);
var G__35969 = (0);
seq__35753 = G__35966;
chunk__35754 = G__35967;
count__35755 = G__35968;
i__35756 = G__35969;
continue;
} else {
var map__35777 = cljs.core.first(seq__35753__$1);
var map__35777__$1 = (((((!((map__35777 == null))))?(((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35777):map__35777);
var src = map__35777__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35781){var e_35975 = e35781;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35975);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35975.message)].join('')));
}

var G__35976 = cljs.core.next(seq__35753__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35753 = G__35976;
chunk__35754 = G__35977;
count__35755 = G__35978;
i__35756 = G__35979;
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
var seq__35782 = cljs.core.seq(js_requires);
var chunk__35783 = null;
var count__35784 = (0);
var i__35785 = (0);
while(true){
if((i__35785 < count__35784)){
var js_ns = chunk__35783.cljs$core$IIndexed$_nth$arity$2(null,i__35785);
var require_str_35980 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35980);


var G__35981 = seq__35782;
var G__35982 = chunk__35783;
var G__35983 = count__35784;
var G__35984 = (i__35785 + (1));
seq__35782 = G__35981;
chunk__35783 = G__35982;
count__35784 = G__35983;
i__35785 = G__35984;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35782);
if(temp__5735__auto__){
var seq__35782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35782__$1);
var G__35985 = cljs.core.chunk_rest(seq__35782__$1);
var G__35986 = c__4556__auto__;
var G__35987 = cljs.core.count(c__4556__auto__);
var G__35988 = (0);
seq__35782 = G__35985;
chunk__35783 = G__35986;
count__35784 = G__35987;
i__35785 = G__35988;
continue;
} else {
var js_ns = cljs.core.first(seq__35782__$1);
var require_str_35989 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35989);


var G__35990 = cljs.core.next(seq__35782__$1);
var G__35991 = null;
var G__35992 = (0);
var G__35993 = (0);
seq__35782 = G__35990;
chunk__35783 = G__35991;
count__35784 = G__35992;
i__35785 = G__35993;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35787){
var map__35789 = p__35787;
var map__35789__$1 = (((((!((map__35789 == null))))?(((((map__35789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35789):map__35789);
var msg = map__35789__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35789__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35789__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35792(s__35793){
return (new cljs.core.LazySeq(null,(function (){
var s__35793__$1 = s__35793;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35793__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35799 = cljs.core.first(xs__6292__auto__);
var map__35799__$1 = (((((!((map__35799 == null))))?(((((map__35799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35799):map__35799);
var src = map__35799__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35799__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35793__$1,map__35799,map__35799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35789,map__35789__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35792_$_iter__35794(s__35795){
return (new cljs.core.LazySeq(null,((function (s__35793__$1,map__35799,map__35799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35789,map__35789__$1,msg,info,reload_info){
return (function (){
var s__35795__$1 = s__35795;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35795__$1);
if(temp__5735__auto____$1){
var s__35795__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35795__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35795__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35797 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35796 = (0);
while(true){
if((i__35796 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35796);
cljs.core.chunk_append(b__35797,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35999 = (i__35796 + (1));
i__35796 = G__35999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35797),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35792_$_iter__35794(cljs.core.chunk_rest(s__35795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35797),null);
}
} else {
var warning = cljs.core.first(s__35795__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35792_$_iter__35794(cljs.core.rest(s__35795__$2)));
}
} else {
return null;
}
break;
}
});})(s__35793__$1,map__35799,map__35799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35789,map__35789__$1,msg,info,reload_info))
,null,null));
});})(s__35793__$1,map__35799,map__35799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35789,map__35789__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35792(cljs.core.rest(s__35793__$1)));
} else {
var G__36000 = cljs.core.rest(s__35793__$1);
s__35793__$1 = G__36000;
continue;
}
} else {
var G__36001 = cljs.core.rest(s__35793__$1);
s__35793__$1 = G__36001;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35807_36002 = cljs.core.seq(warnings);
var chunk__35808_36003 = null;
var count__35809_36004 = (0);
var i__35810_36005 = (0);
while(true){
if((i__35810_36005 < count__35809_36004)){
var map__35818_36006 = chunk__35808_36003.cljs$core$IIndexed$_nth$arity$2(null,i__35810_36005);
var map__35818_36007__$1 = (((((!((map__35818_36006 == null))))?(((((map__35818_36006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35818_36006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35818_36006):map__35818_36006);
var w_36008 = map__35818_36007__$1;
var msg_36009__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818_36007__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818_36007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818_36007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818_36007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36012)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36010),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36011),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36009__$1)].join(''));


var G__36013 = seq__35807_36002;
var G__36014 = chunk__35808_36003;
var G__36015 = count__35809_36004;
var G__36016 = (i__35810_36005 + (1));
seq__35807_36002 = G__36013;
chunk__35808_36003 = G__36014;
count__35809_36004 = G__36015;
i__35810_36005 = G__36016;
continue;
} else {
var temp__5735__auto___36017 = cljs.core.seq(seq__35807_36002);
if(temp__5735__auto___36017){
var seq__35807_36018__$1 = temp__5735__auto___36017;
if(cljs.core.chunked_seq_QMARK_(seq__35807_36018__$1)){
var c__4556__auto___36019 = cljs.core.chunk_first(seq__35807_36018__$1);
var G__36020 = cljs.core.chunk_rest(seq__35807_36018__$1);
var G__36021 = c__4556__auto___36019;
var G__36022 = cljs.core.count(c__4556__auto___36019);
var G__36023 = (0);
seq__35807_36002 = G__36020;
chunk__35808_36003 = G__36021;
count__35809_36004 = G__36022;
i__35810_36005 = G__36023;
continue;
} else {
var map__35820_36026 = cljs.core.first(seq__35807_36018__$1);
var map__35820_36027__$1 = (((((!((map__35820_36026 == null))))?(((((map__35820_36026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35820_36026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35820_36026):map__35820_36026);
var w_36028 = map__35820_36027__$1;
var msg_36029__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820_36027__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820_36027__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820_36027__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35820_36027__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36032)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36030),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36031),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36029__$1)].join(''));


var G__36033 = cljs.core.next(seq__35807_36018__$1);
var G__36034 = null;
var G__36035 = (0);
var G__36036 = (0);
seq__35807_36002 = G__36033;
chunk__35808_36003 = G__36034;
count__35809_36004 = G__36035;
i__35810_36005 = G__36036;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35786_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35786_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35822){
var map__35823 = p__35822;
var map__35823__$1 = (((((!((map__35823 == null))))?(((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35823):map__35823);
var msg = map__35823__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35825 = cljs.core.seq(updates);
var chunk__35827 = null;
var count__35828 = (0);
var i__35829 = (0);
while(true){
if((i__35829 < count__35828)){
var path = chunk__35827.cljs$core$IIndexed$_nth$arity$2(null,i__35829);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35866_36037 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35870_36038 = null;
var count__35871_36039 = (0);
var i__35872_36040 = (0);
while(true){
if((i__35872_36040 < count__35871_36039)){
var node_36041 = chunk__35870_36038.cljs$core$IIndexed$_nth$arity$2(null,i__35872_36040);
if(cljs.core.not(node_36041.shadow$old)){
var path_match_36042 = shadow.cljs.devtools.client.browser.match_paths(node_36041.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36042)){
var new_link_36043 = (function (){var G__35881 = node_36041.cloneNode(true);
G__35881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36042),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35881;
})();
(node_36041.shadow$old = true);

(new_link_36043.onload = ((function (seq__35866_36037,chunk__35870_36038,count__35871_36039,i__35872_36040,seq__35825,chunk__35827,count__35828,i__35829,new_link_36043,path_match_36042,node_36041,path,map__35823,map__35823__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36041);
});})(seq__35866_36037,chunk__35870_36038,count__35871_36039,i__35872_36040,seq__35825,chunk__35827,count__35828,i__35829,new_link_36043,path_match_36042,node_36041,path,map__35823,map__35823__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36042], 0));

goog.dom.insertSiblingAfter(new_link_36043,node_36041);


var G__36044 = seq__35866_36037;
var G__36045 = chunk__35870_36038;
var G__36046 = count__35871_36039;
var G__36047 = (i__35872_36040 + (1));
seq__35866_36037 = G__36044;
chunk__35870_36038 = G__36045;
count__35871_36039 = G__36046;
i__35872_36040 = G__36047;
continue;
} else {
var G__36048 = seq__35866_36037;
var G__36049 = chunk__35870_36038;
var G__36050 = count__35871_36039;
var G__36051 = (i__35872_36040 + (1));
seq__35866_36037 = G__36048;
chunk__35870_36038 = G__36049;
count__35871_36039 = G__36050;
i__35872_36040 = G__36051;
continue;
}
} else {
var G__36052 = seq__35866_36037;
var G__36053 = chunk__35870_36038;
var G__36054 = count__35871_36039;
var G__36055 = (i__35872_36040 + (1));
seq__35866_36037 = G__36052;
chunk__35870_36038 = G__36053;
count__35871_36039 = G__36054;
i__35872_36040 = G__36055;
continue;
}
} else {
var temp__5735__auto___36056 = cljs.core.seq(seq__35866_36037);
if(temp__5735__auto___36056){
var seq__35866_36057__$1 = temp__5735__auto___36056;
if(cljs.core.chunked_seq_QMARK_(seq__35866_36057__$1)){
var c__4556__auto___36058 = cljs.core.chunk_first(seq__35866_36057__$1);
var G__36059 = cljs.core.chunk_rest(seq__35866_36057__$1);
var G__36060 = c__4556__auto___36058;
var G__36061 = cljs.core.count(c__4556__auto___36058);
var G__36062 = (0);
seq__35866_36037 = G__36059;
chunk__35870_36038 = G__36060;
count__35871_36039 = G__36061;
i__35872_36040 = G__36062;
continue;
} else {
var node_36063 = cljs.core.first(seq__35866_36057__$1);
if(cljs.core.not(node_36063.shadow$old)){
var path_match_36064 = shadow.cljs.devtools.client.browser.match_paths(node_36063.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36064)){
var new_link_36065 = (function (){var G__35883 = node_36063.cloneNode(true);
G__35883.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36064),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35883;
})();
(node_36063.shadow$old = true);

(new_link_36065.onload = ((function (seq__35866_36037,chunk__35870_36038,count__35871_36039,i__35872_36040,seq__35825,chunk__35827,count__35828,i__35829,new_link_36065,path_match_36064,node_36063,seq__35866_36057__$1,temp__5735__auto___36056,path,map__35823,map__35823__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36063);
});})(seq__35866_36037,chunk__35870_36038,count__35871_36039,i__35872_36040,seq__35825,chunk__35827,count__35828,i__35829,new_link_36065,path_match_36064,node_36063,seq__35866_36057__$1,temp__5735__auto___36056,path,map__35823,map__35823__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36064], 0));

goog.dom.insertSiblingAfter(new_link_36065,node_36063);


var G__36066 = cljs.core.next(seq__35866_36057__$1);
var G__36067 = null;
var G__36068 = (0);
var G__36069 = (0);
seq__35866_36037 = G__36066;
chunk__35870_36038 = G__36067;
count__35871_36039 = G__36068;
i__35872_36040 = G__36069;
continue;
} else {
var G__36070 = cljs.core.next(seq__35866_36057__$1);
var G__36071 = null;
var G__36072 = (0);
var G__36073 = (0);
seq__35866_36037 = G__36070;
chunk__35870_36038 = G__36071;
count__35871_36039 = G__36072;
i__35872_36040 = G__36073;
continue;
}
} else {
var G__36074 = cljs.core.next(seq__35866_36057__$1);
var G__36075 = null;
var G__36076 = (0);
var G__36077 = (0);
seq__35866_36037 = G__36074;
chunk__35870_36038 = G__36075;
count__35871_36039 = G__36076;
i__35872_36040 = G__36077;
continue;
}
}
} else {
}
}
break;
}


var G__36078 = seq__35825;
var G__36079 = chunk__35827;
var G__36080 = count__35828;
var G__36081 = (i__35829 + (1));
seq__35825 = G__36078;
chunk__35827 = G__36079;
count__35828 = G__36080;
i__35829 = G__36081;
continue;
} else {
var G__36082 = seq__35825;
var G__36083 = chunk__35827;
var G__36084 = count__35828;
var G__36085 = (i__35829 + (1));
seq__35825 = G__36082;
chunk__35827 = G__36083;
count__35828 = G__36084;
i__35829 = G__36085;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35825);
if(temp__5735__auto__){
var seq__35825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35825__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35825__$1);
var G__36086 = cljs.core.chunk_rest(seq__35825__$1);
var G__36087 = c__4556__auto__;
var G__36088 = cljs.core.count(c__4556__auto__);
var G__36089 = (0);
seq__35825 = G__36086;
chunk__35827 = G__36087;
count__35828 = G__36088;
i__35829 = G__36089;
continue;
} else {
var path = cljs.core.first(seq__35825__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35889_36090 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35893_36091 = null;
var count__35894_36092 = (0);
var i__35895_36093 = (0);
while(true){
if((i__35895_36093 < count__35894_36092)){
var node_36094 = chunk__35893_36091.cljs$core$IIndexed$_nth$arity$2(null,i__35895_36093);
if(cljs.core.not(node_36094.shadow$old)){
var path_match_36095 = shadow.cljs.devtools.client.browser.match_paths(node_36094.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36095)){
var new_link_36096 = (function (){var G__35902 = node_36094.cloneNode(true);
G__35902.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36095),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35902;
})();
(node_36094.shadow$old = true);

(new_link_36096.onload = ((function (seq__35889_36090,chunk__35893_36091,count__35894_36092,i__35895_36093,seq__35825,chunk__35827,count__35828,i__35829,new_link_36096,path_match_36095,node_36094,path,seq__35825__$1,temp__5735__auto__,map__35823,map__35823__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36094);
});})(seq__35889_36090,chunk__35893_36091,count__35894_36092,i__35895_36093,seq__35825,chunk__35827,count__35828,i__35829,new_link_36096,path_match_36095,node_36094,path,seq__35825__$1,temp__5735__auto__,map__35823,map__35823__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36095], 0));

goog.dom.insertSiblingAfter(new_link_36096,node_36094);


var G__36098 = seq__35889_36090;
var G__36099 = chunk__35893_36091;
var G__36100 = count__35894_36092;
var G__36101 = (i__35895_36093 + (1));
seq__35889_36090 = G__36098;
chunk__35893_36091 = G__36099;
count__35894_36092 = G__36100;
i__35895_36093 = G__36101;
continue;
} else {
var G__36102 = seq__35889_36090;
var G__36103 = chunk__35893_36091;
var G__36104 = count__35894_36092;
var G__36105 = (i__35895_36093 + (1));
seq__35889_36090 = G__36102;
chunk__35893_36091 = G__36103;
count__35894_36092 = G__36104;
i__35895_36093 = G__36105;
continue;
}
} else {
var G__36106 = seq__35889_36090;
var G__36107 = chunk__35893_36091;
var G__36108 = count__35894_36092;
var G__36109 = (i__35895_36093 + (1));
seq__35889_36090 = G__36106;
chunk__35893_36091 = G__36107;
count__35894_36092 = G__36108;
i__35895_36093 = G__36109;
continue;
}
} else {
var temp__5735__auto___36110__$1 = cljs.core.seq(seq__35889_36090);
if(temp__5735__auto___36110__$1){
var seq__35889_36111__$1 = temp__5735__auto___36110__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35889_36111__$1)){
var c__4556__auto___36112 = cljs.core.chunk_first(seq__35889_36111__$1);
var G__36113 = cljs.core.chunk_rest(seq__35889_36111__$1);
var G__36114 = c__4556__auto___36112;
var G__36115 = cljs.core.count(c__4556__auto___36112);
var G__36116 = (0);
seq__35889_36090 = G__36113;
chunk__35893_36091 = G__36114;
count__35894_36092 = G__36115;
i__35895_36093 = G__36116;
continue;
} else {
var node_36117 = cljs.core.first(seq__35889_36111__$1);
if(cljs.core.not(node_36117.shadow$old)){
var path_match_36118 = shadow.cljs.devtools.client.browser.match_paths(node_36117.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36118)){
var new_link_36119 = (function (){var G__35903 = node_36117.cloneNode(true);
G__35903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36118),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35903;
})();
(node_36117.shadow$old = true);

(new_link_36119.onload = ((function (seq__35889_36090,chunk__35893_36091,count__35894_36092,i__35895_36093,seq__35825,chunk__35827,count__35828,i__35829,new_link_36119,path_match_36118,node_36117,seq__35889_36111__$1,temp__5735__auto___36110__$1,path,seq__35825__$1,temp__5735__auto__,map__35823,map__35823__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36117);
});})(seq__35889_36090,chunk__35893_36091,count__35894_36092,i__35895_36093,seq__35825,chunk__35827,count__35828,i__35829,new_link_36119,path_match_36118,node_36117,seq__35889_36111__$1,temp__5735__auto___36110__$1,path,seq__35825__$1,temp__5735__auto__,map__35823,map__35823__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36118], 0));

goog.dom.insertSiblingAfter(new_link_36119,node_36117);


var G__36120 = cljs.core.next(seq__35889_36111__$1);
var G__36121 = null;
var G__36122 = (0);
var G__36123 = (0);
seq__35889_36090 = G__36120;
chunk__35893_36091 = G__36121;
count__35894_36092 = G__36122;
i__35895_36093 = G__36123;
continue;
} else {
var G__36124 = cljs.core.next(seq__35889_36111__$1);
var G__36125 = null;
var G__36126 = (0);
var G__36127 = (0);
seq__35889_36090 = G__36124;
chunk__35893_36091 = G__36125;
count__35894_36092 = G__36126;
i__35895_36093 = G__36127;
continue;
}
} else {
var G__36128 = cljs.core.next(seq__35889_36111__$1);
var G__36129 = null;
var G__36130 = (0);
var G__36131 = (0);
seq__35889_36090 = G__36128;
chunk__35893_36091 = G__36129;
count__35894_36092 = G__36130;
i__35895_36093 = G__36131;
continue;
}
}
} else {
}
}
break;
}


var G__36132 = cljs.core.next(seq__35825__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__35825 = G__36132;
chunk__35827 = G__36133;
count__35828 = G__36134;
i__35829 = G__36135;
continue;
} else {
var G__36136 = cljs.core.next(seq__35825__$1);
var G__36137 = null;
var G__36138 = (0);
var G__36139 = (0);
seq__35825 = G__36136;
chunk__35827 = G__36137;
count__35828 = G__36138;
i__35829 = G__36139;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35906){
var map__35907 = p__35906;
var map__35907__$1 = (((((!((map__35907 == null))))?(((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35907):map__35907);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35907__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35909){
var map__35910 = p__35909;
var map__35910__$1 = (((((!((map__35910 == null))))?(((((map__35910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35910):map__35910);
var _ = map__35910__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35910__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35912,done,error){
var map__35913 = p__35912;
var map__35913__$1 = (((((!((map__35913 == null))))?(((((map__35913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35913):map__35913);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35915,done,error){
var map__35916 = p__35915;
var map__35916__$1 = (((((!((map__35916 == null))))?(((((map__35916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35916):map__35916);
var msg = map__35916__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35918){
var map__35919 = p__35918;
var map__35919__$1 = (((((!((map__35919 == null))))?(((((map__35919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35919):map__35919);
var src = map__35919__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35921 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35921) : done.call(null,G__35921));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35922){
var map__35923 = p__35922;
var map__35923__$1 = (((((!((map__35923 == null))))?(((((map__35923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35923):map__35923);
var msg__$1 = map__35923__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35925){var ex = e35925;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35926){
var map__35927 = p__35926;
var map__35927__$1 = (((((!((map__35927 == null))))?(((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35927):map__35927);
var env = map__35927__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35942){
var map__35944 = p__35942;
var map__35944__$1 = (((((!((map__35944 == null))))?(((((map__35944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35944):map__35944);
var msg = map__35944__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35946){
var map__35947 = p__35946;
var map__35947__$1 = (((((!((map__35947 == null))))?(((((map__35947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35947):map__35947);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35947__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35947__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35953){
var map__35954 = p__35953;
var map__35954__$1 = (((((!((map__35954 == null))))?(((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35954):map__35954);
var svc = map__35954__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
