goog.provide('my_project.app');
my_project.app.screen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.opt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory_precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.clear = (function my_project$app$clear(){
cljs.core.reset_BANG_(my_project.app.screen,(0));

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.precision,(0));

return cljs.core.reset_BANG_(my_project.app.memory_precision,(0));
});
my_project.app.evaluate = (function my_project$app$evaluate(){
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__28697 = cljs.core.deref(my_project.app.memory);
var G__28698 = cljs.core.deref(my_project.app.screen);
var fexpr__28696 = cljs.core.deref(my_project.app.opt);
return (fexpr__28696.cljs$core$IFn$_invoke$arity$2 ? fexpr__28696.cljs$core$IFn$_invoke$arity$2(G__28697,G__28698) : fexpr__28696.call(null,G__28697,G__28698));
})());

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.precision,(function (){var x__4214__auto__ = cljs.core.deref(my_project.app.precision);
var y__4215__auto__ = cljs.core.deref(my_project.app.memory_precision);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

return cljs.core.reset_BANG_(my_project.app.memory_precision,(0));
});
my_project.app.operator_handler = (function my_project$app$operator_handler(opt_arg){

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.opt),null)){
return cljs.core.reset_BANG_(my_project.app.opt,opt_arg);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.memory),null)){
return null;
} else {
cljs.core.reset_BANG_(my_project.app.screen,(function (){var G__28700 = cljs.core.deref(my_project.app.memory);
var G__28701 = cljs.core.deref(my_project.app.screen);
var fexpr__28699 = cljs.core.deref(my_project.app.opt);
return (fexpr__28699.cljs$core$IFn$_invoke$arity$2 ? fexpr__28699.cljs$core$IFn$_invoke$arity$2(G__28700,G__28701) : fexpr__28699.call(null,G__28700,G__28701));
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.precision,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.deref(my_project.app.memory_precision)));

cljs.core.reset_BANG_(my_project.app.memory,null);

return cljs.core.reset_BANG_(my_project.app.opt,opt_arg);

}
}
});
});
my_project.app.number_handler = (function my_project$app$number_handler(d){

return (function (){
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.memory),null))?cljs.core.deref(my_project.app.opt):false))){
cljs.core.reset_BANG_(my_project.app.memory,cljs.core.deref(my_project.app.screen));

cljs.core.reset_BANG_(my_project.app.memory_precision,cljs.core.deref(my_project.app.precision));

cljs.core.reset_BANG_(my_project.app.screen,d);

return cljs.core.reset_BANG_(my_project.app.precision,(0));
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
my_project.app.operator_btn = (function my_project$app$operator_btn(opt_arg,opt_symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),opt_symbol,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.operator_handler(opt_arg)], null)], null)], null);
});
my_project.app.number_btn = (function my_project$app$number_btn(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.number_handler(d)], null)], null)], null);
});
my_project.app.calc_app = (function my_project$app$calc_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.clear], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__28702(s__28703){
return (new cljs.core.LazySeq(null,(function (){
var s__28703__$1 = s__28703;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28703__$1);
if(temp__5735__auto__){
var s__28703__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28703__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28703__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28705 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28704 = (0);
while(true){
if((i__28704 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__28704);
cljs.core.chunk_append(b__28705,my_project.app.number_btn(d));

var G__28714 = (i__28704 + (1));
i__28704 = G__28714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28705),my_project$app$calc_app_$_iter__28702(cljs.core.chunk_rest(s__28703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28705),null);
}
} else {
var d = cljs.core.first(s__28703__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__28702(cljs.core.rest(s__28703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})(),my_project.app.operator_btn(cljs.core._SLASH_,"/")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__28706(s__28707){
return (new cljs.core.LazySeq(null,(function (){
var s__28707__$1 = s__28707;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28707__$1);
if(temp__5735__auto__){
var s__28707__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28707__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28707__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28709 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28708 = (0);
while(true){
if((i__28708 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__28708);
cljs.core.chunk_append(b__28709,my_project.app.number_btn(d));

var G__28715 = (i__28708 + (1));
i__28708 = G__28715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28709),my_project$app$calc_app_$_iter__28706(cljs.core.chunk_rest(s__28707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28709),null);
}
} else {
var d = cljs.core.first(s__28707__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__28706(cljs.core.rest(s__28707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7)));
})(),my_project.app.operator_btn(cljs.core._,"-")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__28710(s__28711){
return (new cljs.core.LazySeq(null,(function (){
var s__28711__$1 = s__28711;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28711__$1);
if(temp__5735__auto__){
var s__28711__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28711__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28711__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28713 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28712 = (0);
while(true){
if((i__28712 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__28712);
cljs.core.chunk_append(b__28713,my_project.app.number_btn(d));

var G__28716 = (i__28712 + (1));
i__28712 = G__28716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28713),my_project$app$calc_app_$_iter__28710(cljs.core.chunk_rest(s__28711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28713),null);
}
} else {
var d = cljs.core.first(s__28711__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__28710(cljs.core.rest(s__28711__$2)));
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

//# sourceMappingURL=my_project.app.js.map
