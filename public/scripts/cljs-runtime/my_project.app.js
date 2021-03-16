goog.provide('my_project.app');
my_project.app.screen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.opt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_project.app.precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memory_precision = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
my_project.app.memories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
my_project.app.new_number_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
my_project.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
my_project.app.opt_to_symbol = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core._SLASH_,"/",cljs.core._PLUS_,"+",cljs.core._,"-",cljs.core._STAR_,"*"]);
my_project.app.clear = (function my_project$app$clear(){
cljs.core.reset_BANG_(my_project.app.screen,(0));

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.opt,null);

cljs.core.reset_BANG_(my_project.app.precision,(0));

cljs.core.reset_BANG_(my_project.app.memory_precision,(0));

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);
});
my_project.app.evaluate = (function my_project$app$evaluate(){
var result = (function (){var G__32978 = cljs.core.deref(my_project.app.memory);
var G__32979 = cljs.core.deref(my_project.app.screen);
var fexpr__32977 = cljs.core.deref(my_project.app.opt);
return (fexpr__32977.cljs$core$IFn$_invoke$arity$2 ? fexpr__32977.cljs$core$IFn$_invoke$arity$2(G__32978,G__32979) : fexpr__32977.call(null,G__32978,G__32979));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__32976_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__32976_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.memory).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32981 = cljs.core.deref(my_project.app.opt);
return (my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1 ? my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1(G__32981) : my_project.app.opt_to_symbol.call(null,G__32981));
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result.toFixed((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))].join(''));
}));

cljs.core.reset_BANG_(my_project.app.screen,result);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.precision,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.deref(my_project.app.memory_precision)));

cljs.core.reset_BANG_(my_project.app.memory,null);

cljs.core.reset_BANG_(my_project.app.memory_precision,(0));

cljs.core.reset_BANG_(my_project.app.opt,null);

return cljs.core.reset_BANG_(my_project.app.new_number_QMARK_,true);
});
my_project.app.operator_handler = (function my_project$app$operator_handler(opt_arg){

return (function (){
if(cljs.core.not(cljs.core.deref(my_project.app.new_number_QMARK_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.app.opt),null)))){
var result_33003 = (function (){var G__32984 = cljs.core.deref(my_project.app.memory);
var G__32985 = cljs.core.deref(my_project.app.screen);
var fexpr__32983 = cljs.core.deref(my_project.app.opt);
return (fexpr__32983.cljs$core$IFn$_invoke$arity$2 ? fexpr__32983.cljs$core$IFn$_invoke$arity$2(G__32984,G__32985) : fexpr__32983.call(null,G__32984,G__32985));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__32982_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__32982_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.memory).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32987 = cljs.core.deref(my_project.app.opt);
return (my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1 ? my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1(G__32987) : my_project.app.opt_to_symbol.call(null,G__32987));
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_33003.toFixed((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))].join(''));
}));

cljs.core.reset_BANG_(my_project.app.screen,result_33003);

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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__32989 = cljs.core.deref(my_project.app.memories);
return (fexpr__32989.cljs$core$IFn$_invoke$arity$1 ? fexpr__32989.cljs$core$IFn$_invoke$arity$1(key) : fexpr__32989.call(null,key));
})(),null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.memories,(function (p1__32988_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32988_SHARP_,key,cljs.core.deref(my_project.app.screen));
}));
} else {
return cljs.core.reset_BANG_(my_project.app.screen,(function (){var fexpr__32990 = cljs.core.deref(my_project.app.memories);
return (fexpr__32990.cljs$core$IFn$_invoke$arity$1 ? fexpr__32990.cljs$core$IFn$_invoke$arity$1(key) : fexpr__32990.call(null,key));
})());
}
});
});
my_project.app.operator_btn = (function my_project$app$operator_btn(opt_arg,opt_symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),opt_symbol,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.operator_handler(opt_arg)], null)], null)], null);
});
my_project.app.number_btn = (function my_project$app$number_btn(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.number_handler(d),new cljs.core.Keyword(null,"id","id",-1388402092),["button",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('')], null)], null)], null);
});
my_project.app.calc_app = (function my_project$app$calc_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#result","input#result",2091538331),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readonly","readonly",-1101398934),"",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.clear], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__32991(s__32992){
return (new cljs.core.LazySeq(null,(function (){
var s__32992__$1 = s__32992;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32992__$1);
if(temp__5735__auto__){
var s__32992__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32992__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32992__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32994 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32993 = (0);
while(true){
if((i__32993 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__32993);
cljs.core.chunk_append(b__32994,my_project.app.number_btn(d));

var G__33004 = (i__32993 + (1));
i__32993 = G__33004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32994),my_project$app$calc_app_$_iter__32991(cljs.core.chunk_rest(s__32992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32994),null);
}
} else {
var d = cljs.core.first(s__32992__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__32991(cljs.core.rest(s__32992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})(),my_project.app.operator_btn(cljs.core._SLASH_,"/")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__32995(s__32996){
return (new cljs.core.LazySeq(null,(function (){
var s__32996__$1 = s__32996;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32996__$1);
if(temp__5735__auto__){
var s__32996__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32996__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32996__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32998 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32997 = (0);
while(true){
if((i__32997 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__32997);
cljs.core.chunk_append(b__32998,my_project.app.number_btn(d));

var G__33005 = (i__32997 + (1));
i__32997 = G__33005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32998),my_project$app$calc_app_$_iter__32995(cljs.core.chunk_rest(s__32996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32998),null);
}
} else {
var d = cljs.core.first(s__32996__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__32995(cljs.core.rest(s__32996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7)));
})(),my_project.app.operator_btn(cljs.core._,"-")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__32999(s__33000){
return (new cljs.core.LazySeq(null,(function (){
var s__33000__$1 = s__33000;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33000__$1);
if(temp__5735__auto__){
var s__33000__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33000__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33000__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33002 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33001 = (0);
while(true){
if((i__33001 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__33001);
cljs.core.chunk_append(b__33002,my_project.app.number_btn(d));

var G__33006 = (i__33001 + (1));
i__33001 = G__33006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33002),my_project$app$calc_app_$_iter__32999(cljs.core.chunk_rest(s__33000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33002),null);
}
} else {
var d = cljs.core.first(s__33000__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__32999(cljs.core.rest(s__33000__$2)));
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
})], null)], null)], null),my_project.app.number_btn((0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.evaluate], null)], null)], null),my_project.app.operator_btn(cljs.core._STAR_,"*")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"MEM",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.memory_handler(new cljs.core.Keyword(null,"mem1","mem1",-1874913521))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.deref(my_project.app.history))], null)], null)], null);
});
my_project.app.run = (function my_project$app$run(){
(document.onkeyup = (function (e){
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.which));

var keycode = e.which;
if(((((96) <= keycode)) && ((keycode <= (105))))){
return document.getElementById(["button",cljs.core.str.cljs$core$IFn$_invoke$arity$1((keycode - (96)))].join('')).click();
} else {
return null;
}
}));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.app.calc_app], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.app.run', my_project.app.run);
my_project.app.reload = (function my_project$app$reload(){
console.log("reload...");

return my_project.app.run();
});
goog.exportSymbol('my_project.app.reload', my_project.app.reload);

//# sourceMappingURL=my_project.app.js.map
