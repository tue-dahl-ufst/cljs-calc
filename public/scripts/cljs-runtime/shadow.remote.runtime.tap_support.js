goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35253,p__35254){
var map__35255 = p__35253;
var map__35255__$1 = (((((!((map__35255 == null))))?(((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);
var svc = map__35255__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35256 = p__35254;
var map__35256__$1 = (((((!((map__35256 == null))))?(((((map__35256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35256):map__35256);
var msg = map__35256__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35256__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35271,p__35272){
var map__35274 = p__35271;
var map__35274__$1 = (((((!((map__35274 == null))))?(((((map__35274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35274):map__35274);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35274__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35275 = p__35272;
var map__35275__$1 = (((((!((map__35275 == null))))?(((((map__35275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35275):map__35275);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35280,p__35281){
var map__35282 = p__35280;
var map__35282__$1 = (((((!((map__35282 == null))))?(((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35282):map__35282);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35283 = p__35281;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283):map__35283);
var msg = map__35283__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35283__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35292,tid){
var map__35293 = p__35292;
var map__35293__$1 = (((((!((map__35293 == null))))?(((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35293):map__35293);
var svc = map__35293__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35293__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35304 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35305 = null;
var count__35306 = (0);
var i__35307 = (0);
while(true){
if((i__35307 < count__35306)){
var vec__35318 = chunk__35305.cljs$core$IIndexed$_nth$arity$2(null,i__35307);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35318,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35318,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35334 = seq__35304;
var G__35335 = chunk__35305;
var G__35336 = count__35306;
var G__35337 = (i__35307 + (1));
seq__35304 = G__35334;
chunk__35305 = G__35335;
count__35306 = G__35336;
i__35307 = G__35337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35304);
if(temp__5735__auto__){
var seq__35304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35304__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35304__$1);
var G__35338 = cljs.core.chunk_rest(seq__35304__$1);
var G__35339 = c__4556__auto__;
var G__35340 = cljs.core.count(c__4556__auto__);
var G__35341 = (0);
seq__35304 = G__35338;
chunk__35305 = G__35339;
count__35306 = G__35340;
i__35307 = G__35341;
continue;
} else {
var vec__35321 = cljs.core.first(seq__35304__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35342 = cljs.core.next(seq__35304__$1);
var G__35343 = null;
var G__35344 = (0);
var G__35345 = (0);
seq__35304 = G__35342;
chunk__35305 = G__35343;
count__35306 = G__35344;
i__35307 = G__35345;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35295_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35295_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35296_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35296_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35297_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35297_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35298_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35298_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35330){
var map__35331 = p__35330;
var map__35331__$1 = (((((!((map__35331 == null))))?(((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35331):map__35331);
var svc = map__35331__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
