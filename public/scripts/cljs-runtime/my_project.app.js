goog.provide('my_project.app');
my_project.app.screen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.opt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.new_number_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
my_project.app.precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.reset = (function my_project$app$reset(){
cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.screen,(0));

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);

return cljs.core.reset_BANG_(my_project.app.precision,(0));
});
my_project.app.evaluate = (function my_project$app$evaluate(){
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__26364 = cljs.core.deref(my_project.app.memory);
var G__26365 = cljs.core.deref(my_project.app.screen);
var fexpr__26363 = cljs.core.deref(my_project.app.opt);
return (fexpr__26363.cljs$core$IFn$_invoke$arity$2 ? fexpr__26363.cljs$core$IFn$_invoke$arity$2(G__26364,G__26365) : fexpr__26363.call(null,G__26364,G__26365));
})());

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);

return cljs.core.reset_BANG_(my_project.app.precision,(0));
});
my_project.app.opt_run = (function my_project$app$opt_run(opt_arg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.opt),null)){
cljs.core.reset_BANG_(my_project.app.memory,cljs.core.deref(my_project.app.screen));

cljs.core.reset_BANG_(my_project.app.opt,opt_arg);

cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);

return cljs.core.reset_BANG_(my_project.app.precision,(0));
} else {
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__26367 = cljs.core.deref(my_project.app.memory);
var G__26368 = cljs.core.deref(my_project.app.screen);
var fexpr__26366 = cljs.core.deref(my_project.app.opt);
return (fexpr__26366.cljs$core$IFn$_invoke$arity$2 ? fexpr__26366.cljs$core$IFn$_invoke$arity$2(G__26367,G__26368) : fexpr__26366.call(null,G__26367,G__26368));
})());

cljs.core.reset_BANG_(my_project.app.memory,cljs.core.deref(my_project.app.screen));

cljs.core.reset_BANG_(my_project.app.opt,opt_arg);

cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);

return cljs.core.reset_BANG_(my_project.app.precision,(0));
}
});
my_project.app.number_btn = (function my_project$app$number_btn(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(my_project.app.new_number_QMARK_))){
cljs.core.reset_BANG_(my_project.app.screen,d);

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,false);
} else {
if((cljs.core.deref(my_project.app.precision) > (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.screen,(function (x){
return (x + (d / Math.pow((10),cljs.core.deref(my_project.app.precision))));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.precision,cljs.core.inc);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.screen,(function (x){
return (((10) * x) + d);
}));
}
}
})], null)], null)], null);
});
my_project.app.operator_btn = (function my_project$app$operator_btn(opt_arg,opt_symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),opt_symbol,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return my_project.app.opt_run(opt_arg);
})], null)], null)], null);
});
my_project.app.calc_app = (function my_project$app$calc_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.screen))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = cljs.core.deref(my_project.app.memory);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "nil";
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = cljs.core.deref(my_project.app.precision);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "nil";
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.reset], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__26369(s__26370){
return (new cljs.core.LazySeq(null,(function (){
var s__26370__$1 = s__26370;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26370__$1);
if(temp__5735__auto__){
var s__26370__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26370__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26370__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26372 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26371 = (0);
while(true){
if((i__26371 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__26371);
cljs.core.chunk_append(b__26372,my_project.app.number_btn(d));

var G__26381 = (i__26371 + (1));
i__26371 = G__26381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26372),my_project$app$calc_app_$_iter__26369(cljs.core.chunk_rest(s__26370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26372),null);
}
} else {
var d = cljs.core.first(s__26370__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__26369(cljs.core.rest(s__26370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})(),my_project.app.operator_btn(cljs.core._SLASH_,"/")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__26373(s__26374){
return (new cljs.core.LazySeq(null,(function (){
var s__26374__$1 = s__26374;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26374__$1);
if(temp__5735__auto__){
var s__26374__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26374__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26374__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26376 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26375 = (0);
while(true){
if((i__26375 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__26375);
cljs.core.chunk_append(b__26376,my_project.app.number_btn(d));

var G__26382 = (i__26375 + (1));
i__26375 = G__26382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26376),my_project$app$calc_app_$_iter__26373(cljs.core.chunk_rest(s__26374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26376),null);
}
} else {
var d = cljs.core.first(s__26374__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__26373(cljs.core.rest(s__26374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7)));
})(),my_project.app.operator_btn(cljs.core._,"-")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__26377(s__26378){
return (new cljs.core.LazySeq(null,(function (){
var s__26378__$1 = s__26378;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26378__$1);
if(temp__5735__auto__){
var s__26378__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26378__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26378__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26380 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26379 = (0);
while(true){
if((i__26379 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__26379);
cljs.core.chunk_append(b__26380,my_project.app.number_btn(d));

var G__26383 = (i__26379 + (1));
i__26379 = G__26383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26380),my_project$app$calc_app_$_iter__26377(cljs.core.chunk_rest(s__26378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26380),null);
}
} else {
var d = cljs.core.first(s__26378__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__26377(cljs.core.rest(s__26378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((7),(10)));
})(),my_project.app.operator_btn(cljs.core._PLUS_,"+")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),".",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(my_project.app.precision,(1));
})], null)], null)], null),my_project.app.number_btn((0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.evaluate], null)], null)], null),my_project.app.operator_btn(cljs.core._STAR_,"*")], null)], null)], null);
});
my_project.app.run = (function my_project$app$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.calc_app], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.app.run', my_project.app.run);
my_project.app.reload = (function my_project$app$reload(){
console.log("reload...");

return my_project.app.run();
});
goog.exportSymbol('my_project.app.reload', my_project.app.reload);
my_project.app.add = (function my_project$app$add(a,b){
return (a + b);
});
my_project.app.foo = (function my_project$app$foo(x,y){
return (new cljs.core.List(null,y,(new cljs.core.List(null,x,null,(1),null)),(2),null));
});

//# sourceMappingURL=my_project.app.js.map
