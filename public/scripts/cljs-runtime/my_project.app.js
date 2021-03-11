goog.provide('my_project.app');
my_project.app.screen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.opt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory_precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
my_project.app.new_number_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
my_project.app.clear = (function my_project$app$clear(){
cljs.core.reset_BANG_(my_project.app.screen,(0));

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.precision,(0));

cljs.core.reset_BANG_(my_project.app.memory_precision,(0));

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);
});
my_project.app.evaluate = (function my_project$app$evaluate(){
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__29482 = cljs.core.deref(my_project.app.memory);
var G__29483 = cljs.core.deref(my_project.app.screen);
var fexpr__29481 = cljs.core.deref(my_project.app.opt);
return (fexpr__29481.cljs$core$IFn$_invoke$arity$2 ? fexpr__29481.cljs$core$IFn$_invoke$arity$2(G__29482,G__29483) : fexpr__29481.call(null,G__29482,G__29483));
})());

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.precision,(function (){var x__4214__auto__ = cljs.core.deref(my_project.app.precision);
var y__4215__auto__ = cljs.core.deref(my_project.app.memory_precision);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

cljs.core.reset_BANG_(my_project.app.memory_precision,(0));

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);
});
my_project.app.operator_handler = (function my_project$app$operator_handler(opt_arg){

return (function (){
if(cljs.core.not(cljs.core.deref(my_project.app.new_number_QMARK_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.opt),null)))){
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__29485 = cljs.core.deref(my_project.app.memory);
var G__29486 = cljs.core.deref(my_project.app.screen);
var fexpr__29484 = cljs.core.deref(my_project.app.opt);
return (fexpr__29484.cljs$core$IFn$_invoke$arity$2 ? fexpr__29484.cljs$core$IFn$_invoke$arity$2(G__29485,G__29486) : fexpr__29484.call(null,G__29485,G__29486));
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.precision,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.deref(my_project.app.memory_precision)));

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.memory_precision,(0));
} else {
}

cljs.core.reset_BANG_(my_project.app.opt,opt_arg);

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);
} else {
return null;
}
});
});
my_project.app.number_handler = (function my_project$app$number_handler(d){

return (function (){
if(cljs.core.truth_(cljs.core.deref(my_project.app.new_number_QMARK_))){
cljs.core.reset_BANG_(my_project.app.memory,cljs.core.deref(my_project.app.screen));

cljs.core.reset_BANG_(my_project.app.memory_precision,cljs.core.deref(my_project.app.precision));

cljs.core.reset_BANG_(my_project.app.screen,d);

cljs.core.reset_BANG_(my_project.app.precision,(0));

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
});
});
my_project.app.memory_handler = (function my_project$app$memory_handler(key){

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__29488 = cljs.core.deref(my_project.app.memories);
return (fexpr__29488.cljs$core$IFn$_invoke$arity$1 ? fexpr__29488.cljs$core$IFn$_invoke$arity$1(key) : fexpr__29488.call(null,key));
})(),null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.memories,(function (p1__29487_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29487_SHARP_,key,cljs.core.deref(my_project.app.screen));
}));
} else {
return cljs.core.reset_BANG_(my_project.app.screen,(function (){var fexpr__29489 = cljs.core.deref(my_project.app.memories);
return (fexpr__29489.cljs$core$IFn$_invoke$arity$1 ? fexpr__29489.cljs$core$IFn$_invoke$arity$1(key) : fexpr__29489.call(null,key));
})());
}
});
});
my_project.app.operator_btn = (function my_project$app$operator_btn(opt_arg,opt_symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),opt_symbol,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.operator_handler(opt_arg)], null)], null)], null);
});
my_project.app.number_btn = (function my_project$app$number_btn(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.number_handler(d)], null)], null)], null);
});
my_project.app.calc_app = (function my_project$app$calc_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.clear], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__29490(s__29491){
return (new cljs.core.LazySeq(null,(function (){
var s__29491__$1 = s__29491;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29491__$1);
if(temp__5735__auto__){
var s__29491__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29491__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29491__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29493 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29492 = (0);
while(true){
if((i__29492 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__29492);
cljs.core.chunk_append(b__29493,my_project.app.number_btn(d));

var G__29502 = (i__29492 + (1));
i__29492 = G__29502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29493),my_project$app$calc_app_$_iter__29490(cljs.core.chunk_rest(s__29491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29493),null);
}
} else {
var d = cljs.core.first(s__29491__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__29490(cljs.core.rest(s__29491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})(),my_project.app.operator_btn(cljs.core._SLASH_,"/")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__29494(s__29495){
return (new cljs.core.LazySeq(null,(function (){
var s__29495__$1 = s__29495;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29495__$1);
if(temp__5735__auto__){
var s__29495__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29495__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29495__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29497 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29496 = (0);
while(true){
if((i__29496 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__29496);
cljs.core.chunk_append(b__29497,my_project.app.number_btn(d));

var G__29503 = (i__29496 + (1));
i__29496 = G__29503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29497),my_project$app$calc_app_$_iter__29494(cljs.core.chunk_rest(s__29495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29497),null);
}
} else {
var d = cljs.core.first(s__29495__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__29494(cljs.core.rest(s__29495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7)));
})(),my_project.app.operator_btn(cljs.core._,"-")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__29498(s__29499){
return (new cljs.core.LazySeq(null,(function (){
var s__29499__$1 = s__29499;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29499__$1);
if(temp__5735__auto__){
var s__29499__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29499__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29499__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29501 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29500 = (0);
while(true){
if((i__29500 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__29500);
cljs.core.chunk_append(b__29501,my_project.app.number_btn(d));

var G__29504 = (i__29500 + (1));
i__29500 = G__29504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29501),my_project$app$calc_app_$_iter__29498(cljs.core.chunk_rest(s__29499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29501),null);
}
} else {
var d = cljs.core.first(s__29499__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__29498(cljs.core.rest(s__29499__$2)));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.precision,(function (x){
if((x > (0))){
return x;
} else {
return (1);
}
}));
})], null)], null)], null),my_project.app.number_btn((0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.evaluate], null)], null)], null),my_project.app.operator_btn(cljs.core._STAR_,"*")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"MEM",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.memory_handler(new cljs.core.Keyword(null,"mem1","mem1",-1874913521))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(2)], null)], null)], null);
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

//# sourceMappingURL=my_project.app.js.map
