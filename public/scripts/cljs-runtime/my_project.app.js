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
var result = (function (){var G__30198 = cljs.core.deref(my_project.app.memory);
var G__30199 = cljs.core.deref(my_project.app.screen);
var fexpr__30197 = cljs.core.deref(my_project.app.opt);
return (fexpr__30197.cljs$core$IFn$_invoke$arity$2 ? fexpr__30197.cljs$core$IFn$_invoke$arity$2(G__30198,G__30199) : fexpr__30197.call(null,G__30198,G__30199));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__30196_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30196_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.memory).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30201 = cljs.core.deref(my_project.app.opt);
return (my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1 ? my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1(G__30201) : my_project.app.opt_to_symbol.call(null,G__30201));
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
var result_30227 = (function (){var G__30204 = cljs.core.deref(my_project.app.memory);
var G__30205 = cljs.core.deref(my_project.app.screen);
var fexpr__30203 = cljs.core.deref(my_project.app.opt);
return (fexpr__30203.cljs$core$IFn$_invoke$arity$2 ? fexpr__30203.cljs$core$IFn$_invoke$arity$2(G__30204,G__30205) : fexpr__30203.call(null,G__30204,G__30205));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.history,(function (p1__30202_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30202_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.memory).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30207 = cljs.core.deref(my_project.app.opt);
return (my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1 ? my_project.app.opt_to_symbol.cljs$core$IFn$_invoke$arity$1(G__30207) : my_project.app.opt_to_symbol.call(null,G__30207));
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.app.screen).toFixed((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_30227.toFixed((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref(my_project.app.memory_precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (cljs.core.deref(my_project.app.precision) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))].join(''));
}));

cljs.core.reset_BANG_(my_project.app.screen,result_30227);

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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__30209 = cljs.core.deref(my_project.app.memories);
return (fexpr__30209.cljs$core$IFn$_invoke$arity$1 ? fexpr__30209.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30209.call(null,key));
})(),null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.app.memories,(function (p1__30208_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30208_SHARP_,key,cljs.core.deref(my_project.app.screen));
}));
} else {
return cljs.core.reset_BANG_(my_project.app.screen,(function (){var fexpr__30210 = cljs.core.deref(my_project.app.memories);
return (fexpr__30210.cljs$core$IFn$_invoke$arity$1 ? fexpr__30210.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30210.call(null,key));
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
})())], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"c",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.clear], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__30211(s__30212){
return (new cljs.core.LazySeq(null,(function (){
var s__30212__$1 = s__30212;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30212__$1);
if(temp__5735__auto__){
var s__30212__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30212__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30212__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30214 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30213 = (0);
while(true){
if((i__30213 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__30213);
cljs.core.chunk_append(b__30214,my_project.app.number_btn(d));

var G__30228 = (i__30213 + (1));
i__30213 = G__30228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30214),my_project$app$calc_app_$_iter__30211(cljs.core.chunk_rest(s__30212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30214),null);
}
} else {
var d = cljs.core.first(s__30212__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__30211(cljs.core.rest(s__30212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(4)));
})(),my_project.app.operator_btn(cljs.core._SLASH_,"/")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__30215(s__30216){
return (new cljs.core.LazySeq(null,(function (){
var s__30216__$1 = s__30216;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30216__$1);
if(temp__5735__auto__){
var s__30216__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30216__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30216__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30218 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30217 = (0);
while(true){
if((i__30217 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__30217);
cljs.core.chunk_append(b__30218,my_project.app.number_btn(d));

var G__30229 = (i__30217 + (1));
i__30217 = G__30229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30218),my_project$app$calc_app_$_iter__30215(cljs.core.chunk_rest(s__30216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30218),null);
}
} else {
var d = cljs.core.first(s__30216__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__30215(cljs.core.rest(s__30216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((4),(7)));
})(),my_project.app.operator_btn(cljs.core._,"-")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__30219(s__30220){
return (new cljs.core.LazySeq(null,(function (){
var s__30220__$1 = s__30220;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30220__$1);
if(temp__5735__auto__){
var s__30220__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30220__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30220__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30222 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30221 = (0);
while(true){
if((i__30221 < size__4528__auto__)){
var d = cljs.core._nth(c__4527__auto__,i__30221);
cljs.core.chunk_append(b__30222,my_project.app.number_btn(d));

var G__30230 = (i__30221 + (1));
i__30221 = G__30230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30222),my_project$app$calc_app_$_iter__30219(cljs.core.chunk_rest(s__30220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30222),null);
}
} else {
var d = cljs.core.first(s__30220__$2);
return cljs.core.cons(my_project.app.number_btn(d),my_project$app$calc_app_$_iter__30219(cljs.core.rest(s__30220__$2)));
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
})], null)], null)], null),my_project.app.number_btn((0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"=",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.evaluate], null)], null)], null),my_project.app.operator_btn(cljs.core._STAR_,"*")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"MEM",new cljs.core.Keyword(null,"on-click","on-click",1632826543),my_project.app.memory_handler(new cljs.core.Keyword(null,"mem1","mem1",-1874913521))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function my_project$app$calc_app_$_iter__30223(s__30224){
return (new cljs.core.LazySeq(null,(function (){
var s__30224__$1 = s__30224;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30224__$1);
if(temp__5735__auto__){
var s__30224__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30224__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30224__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30226 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30225 = (0);
while(true){
if((i__30225 < size__4528__auto__)){
var string = cljs.core._nth(c__4527__auto__,i__30225);
cljs.core.chunk_append(b__30226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),string], null));

var G__30231 = (i__30225 + (1));
i__30225 = G__30231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30226),my_project$app$calc_app_$_iter__30223(cljs.core.chunk_rest(s__30224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30226),null);
}
} else {
var string = cljs.core.first(s__30224__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),string], null),my_project$app$calc_app_$_iter__30223(cljs.core.rest(s__30224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(my_project.app.history));
})()], null)], null);
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
