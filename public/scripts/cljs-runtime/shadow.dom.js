goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33200 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33200(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33203 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33203(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31818 = coll;
var G__31819 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31818,G__31819) : shadow.dom.lazy_native_coll_seq.call(null,G__31818,G__31819));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31861 = arguments.length;
switch (G__31861) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31871 = arguments.length;
switch (G__31871) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31876 = arguments.length;
switch (G__31876) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31888 = arguments.length;
switch (G__31888) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31906 = arguments.length;
switch (G__31906) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31915 = arguments.length;
switch (G__31915) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31931){if((e31931 instanceof Object)){
var e = e31931;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31931;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31950 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31951 = null;
var count__31952 = (0);
var i__31953 = (0);
while(true){
if((i__31953 < count__31952)){
var el = chunk__31951.cljs$core$IIndexed$_nth$arity$2(null,i__31953);
var handler_33221__$1 = ((function (seq__31950,chunk__31951,count__31952,i__31953,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31950,chunk__31951,count__31952,i__31953,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33221__$1);


var G__33223 = seq__31950;
var G__33224 = chunk__31951;
var G__33225 = count__31952;
var G__33226 = (i__31953 + (1));
seq__31950 = G__33223;
chunk__31951 = G__33224;
count__31952 = G__33225;
i__31953 = G__33226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31950);
if(temp__5735__auto__){
var seq__31950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31950__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31950__$1);
var G__33228 = cljs.core.chunk_rest(seq__31950__$1);
var G__33229 = c__4556__auto__;
var G__33230 = cljs.core.count(c__4556__auto__);
var G__33231 = (0);
seq__31950 = G__33228;
chunk__31951 = G__33229;
count__31952 = G__33230;
i__31953 = G__33231;
continue;
} else {
var el = cljs.core.first(seq__31950__$1);
var handler_33234__$1 = ((function (seq__31950,chunk__31951,count__31952,i__31953,el,seq__31950__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31950,chunk__31951,count__31952,i__31953,el,seq__31950__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33234__$1);


var G__33236 = cljs.core.next(seq__31950__$1);
var G__33237 = null;
var G__33238 = (0);
var G__33239 = (0);
seq__31950 = G__33236;
chunk__31951 = G__33237;
count__31952 = G__33238;
i__31953 = G__33239;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31976 = arguments.length;
switch (G__31976) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31981 = cljs.core.seq(events);
var chunk__31982 = null;
var count__31983 = (0);
var i__31984 = (0);
while(true){
if((i__31984 < count__31983)){
var vec__32002 = chunk__31982.cljs$core$IIndexed$_nth$arity$2(null,i__31984);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32002,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33249 = seq__31981;
var G__33250 = chunk__31982;
var G__33251 = count__31983;
var G__33252 = (i__31984 + (1));
seq__31981 = G__33249;
chunk__31982 = G__33250;
count__31983 = G__33251;
i__31984 = G__33252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31981);
if(temp__5735__auto__){
var seq__31981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31981__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31981__$1);
var G__33254 = cljs.core.chunk_rest(seq__31981__$1);
var G__33255 = c__4556__auto__;
var G__33256 = cljs.core.count(c__4556__auto__);
var G__33257 = (0);
seq__31981 = G__33254;
chunk__31982 = G__33255;
count__31983 = G__33256;
i__31984 = G__33257;
continue;
} else {
var vec__32006 = cljs.core.first(seq__31981__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32006,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33258 = cljs.core.next(seq__31981__$1);
var G__33259 = null;
var G__33260 = (0);
var G__33261 = (0);
seq__31981 = G__33258;
chunk__31982 = G__33259;
count__31983 = G__33260;
i__31984 = G__33261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32013 = cljs.core.seq(styles);
var chunk__32014 = null;
var count__32015 = (0);
var i__32016 = (0);
while(true){
if((i__32016 < count__32015)){
var vec__32040 = chunk__32014.cljs$core$IIndexed$_nth$arity$2(null,i__32016);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33262 = seq__32013;
var G__33263 = chunk__32014;
var G__33264 = count__32015;
var G__33265 = (i__32016 + (1));
seq__32013 = G__33262;
chunk__32014 = G__33263;
count__32015 = G__33264;
i__32016 = G__33265;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32013);
if(temp__5735__auto__){
var seq__32013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32013__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32013__$1);
var G__33267 = cljs.core.chunk_rest(seq__32013__$1);
var G__33268 = c__4556__auto__;
var G__33269 = cljs.core.count(c__4556__auto__);
var G__33270 = (0);
seq__32013 = G__33267;
chunk__32014 = G__33268;
count__32015 = G__33269;
i__32016 = G__33270;
continue;
} else {
var vec__32054 = cljs.core.first(seq__32013__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32054,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33271 = cljs.core.next(seq__32013__$1);
var G__33272 = null;
var G__33273 = (0);
var G__33274 = (0);
seq__32013 = G__33271;
chunk__32014 = G__33272;
count__32015 = G__33273;
i__32016 = G__33274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32064_33275 = key;
var G__32064_33276__$1 = (((G__32064_33275 instanceof cljs.core.Keyword))?G__32064_33275.fqn:null);
switch (G__32064_33276__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33280 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33280,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33280,"aria-");
}
})())){
el.setAttribute(ks_33280,value);
} else {
(el[ks_33280] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32118){
var map__32120 = p__32118;
var map__32120__$1 = (((((!((map__32120 == null))))?(((((map__32120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32120):map__32120);
var props = map__32120__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32120__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32125 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32125,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32125,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32125,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32131 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32131,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32131;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32140 = arguments.length;
switch (G__32140) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32157){
var vec__32158 = p__32157;
var seq__32159 = cljs.core.seq(vec__32158);
var first__32160 = cljs.core.first(seq__32159);
var seq__32159__$1 = cljs.core.next(seq__32159);
var nn = first__32160;
var first__32160__$1 = cljs.core.first(seq__32159__$1);
var seq__32159__$2 = cljs.core.next(seq__32159__$1);
var np = first__32160__$1;
var nc = seq__32159__$2;
var node = vec__32158;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32162 = nn;
var G__32163 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32162,G__32163) : create_fn.call(null,G__32162,G__32163));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32166 = nn;
var G__32169 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32166,G__32169) : create_fn.call(null,G__32166,G__32169));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32174 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174,(1),null);
var seq__32177_33309 = cljs.core.seq(node_children);
var chunk__32178_33310 = null;
var count__32179_33311 = (0);
var i__32180_33312 = (0);
while(true){
if((i__32180_33312 < count__32179_33311)){
var child_struct_33313 = chunk__32178_33310.cljs$core$IIndexed$_nth$arity$2(null,i__32180_33312);
var children_33314 = shadow.dom.dom_node(child_struct_33313);
if(cljs.core.seq_QMARK_(children_33314)){
var seq__32250_33316 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33314));
var chunk__32252_33317 = null;
var count__32253_33318 = (0);
var i__32254_33319 = (0);
while(true){
if((i__32254_33319 < count__32253_33318)){
var child_33321 = chunk__32252_33317.cljs$core$IIndexed$_nth$arity$2(null,i__32254_33319);
if(cljs.core.truth_(child_33321)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33321);


var G__33323 = seq__32250_33316;
var G__33324 = chunk__32252_33317;
var G__33325 = count__32253_33318;
var G__33326 = (i__32254_33319 + (1));
seq__32250_33316 = G__33323;
chunk__32252_33317 = G__33324;
count__32253_33318 = G__33325;
i__32254_33319 = G__33326;
continue;
} else {
var G__33331 = seq__32250_33316;
var G__33332 = chunk__32252_33317;
var G__33333 = count__32253_33318;
var G__33334 = (i__32254_33319 + (1));
seq__32250_33316 = G__33331;
chunk__32252_33317 = G__33332;
count__32253_33318 = G__33333;
i__32254_33319 = G__33334;
continue;
}
} else {
var temp__5735__auto___33335 = cljs.core.seq(seq__32250_33316);
if(temp__5735__auto___33335){
var seq__32250_33336__$1 = temp__5735__auto___33335;
if(cljs.core.chunked_seq_QMARK_(seq__32250_33336__$1)){
var c__4556__auto___33337 = cljs.core.chunk_first(seq__32250_33336__$1);
var G__33338 = cljs.core.chunk_rest(seq__32250_33336__$1);
var G__33339 = c__4556__auto___33337;
var G__33340 = cljs.core.count(c__4556__auto___33337);
var G__33341 = (0);
seq__32250_33316 = G__33338;
chunk__32252_33317 = G__33339;
count__32253_33318 = G__33340;
i__32254_33319 = G__33341;
continue;
} else {
var child_33343 = cljs.core.first(seq__32250_33336__$1);
if(cljs.core.truth_(child_33343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33343);


var G__33344 = cljs.core.next(seq__32250_33336__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__32250_33316 = G__33344;
chunk__32252_33317 = G__33345;
count__32253_33318 = G__33346;
i__32254_33319 = G__33347;
continue;
} else {
var G__33349 = cljs.core.next(seq__32250_33336__$1);
var G__33350 = null;
var G__33351 = (0);
var G__33352 = (0);
seq__32250_33316 = G__33349;
chunk__32252_33317 = G__33350;
count__32253_33318 = G__33351;
i__32254_33319 = G__33352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33314);
}


var G__33353 = seq__32177_33309;
var G__33354 = chunk__32178_33310;
var G__33355 = count__32179_33311;
var G__33356 = (i__32180_33312 + (1));
seq__32177_33309 = G__33353;
chunk__32178_33310 = G__33354;
count__32179_33311 = G__33355;
i__32180_33312 = G__33356;
continue;
} else {
var temp__5735__auto___33357 = cljs.core.seq(seq__32177_33309);
if(temp__5735__auto___33357){
var seq__32177_33358__$1 = temp__5735__auto___33357;
if(cljs.core.chunked_seq_QMARK_(seq__32177_33358__$1)){
var c__4556__auto___33359 = cljs.core.chunk_first(seq__32177_33358__$1);
var G__33360 = cljs.core.chunk_rest(seq__32177_33358__$1);
var G__33361 = c__4556__auto___33359;
var G__33362 = cljs.core.count(c__4556__auto___33359);
var G__33363 = (0);
seq__32177_33309 = G__33360;
chunk__32178_33310 = G__33361;
count__32179_33311 = G__33362;
i__32180_33312 = G__33363;
continue;
} else {
var child_struct_33364 = cljs.core.first(seq__32177_33358__$1);
var children_33365 = shadow.dom.dom_node(child_struct_33364);
if(cljs.core.seq_QMARK_(children_33365)){
var seq__32291_33366 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33365));
var chunk__32293_33367 = null;
var count__32294_33368 = (0);
var i__32295_33369 = (0);
while(true){
if((i__32295_33369 < count__32294_33368)){
var child_33370 = chunk__32293_33367.cljs$core$IIndexed$_nth$arity$2(null,i__32295_33369);
if(cljs.core.truth_(child_33370)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33370);


var G__33371 = seq__32291_33366;
var G__33372 = chunk__32293_33367;
var G__33373 = count__32294_33368;
var G__33374 = (i__32295_33369 + (1));
seq__32291_33366 = G__33371;
chunk__32293_33367 = G__33372;
count__32294_33368 = G__33373;
i__32295_33369 = G__33374;
continue;
} else {
var G__33375 = seq__32291_33366;
var G__33376 = chunk__32293_33367;
var G__33377 = count__32294_33368;
var G__33378 = (i__32295_33369 + (1));
seq__32291_33366 = G__33375;
chunk__32293_33367 = G__33376;
count__32294_33368 = G__33377;
i__32295_33369 = G__33378;
continue;
}
} else {
var temp__5735__auto___33379__$1 = cljs.core.seq(seq__32291_33366);
if(temp__5735__auto___33379__$1){
var seq__32291_33380__$1 = temp__5735__auto___33379__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32291_33380__$1)){
var c__4556__auto___33381 = cljs.core.chunk_first(seq__32291_33380__$1);
var G__33382 = cljs.core.chunk_rest(seq__32291_33380__$1);
var G__33383 = c__4556__auto___33381;
var G__33384 = cljs.core.count(c__4556__auto___33381);
var G__33385 = (0);
seq__32291_33366 = G__33382;
chunk__32293_33367 = G__33383;
count__32294_33368 = G__33384;
i__32295_33369 = G__33385;
continue;
} else {
var child_33393 = cljs.core.first(seq__32291_33380__$1);
if(cljs.core.truth_(child_33393)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33393);


var G__33397 = cljs.core.next(seq__32291_33380__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__32291_33366 = G__33397;
chunk__32293_33367 = G__33398;
count__32294_33368 = G__33399;
i__32295_33369 = G__33400;
continue;
} else {
var G__33406 = cljs.core.next(seq__32291_33380__$1);
var G__33407 = null;
var G__33408 = (0);
var G__33409 = (0);
seq__32291_33366 = G__33406;
chunk__32293_33367 = G__33407;
count__32294_33368 = G__33408;
i__32295_33369 = G__33409;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33365);
}


var G__33411 = cljs.core.next(seq__32177_33358__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32177_33309 = G__33411;
chunk__32178_33310 = G__33412;
count__32179_33311 = G__33413;
i__32180_33312 = G__33414;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32356 = cljs.core.seq(node);
var chunk__32357 = null;
var count__32358 = (0);
var i__32359 = (0);
while(true){
if((i__32359 < count__32358)){
var n = chunk__32357.cljs$core$IIndexed$_nth$arity$2(null,i__32359);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33434 = seq__32356;
var G__33435 = chunk__32357;
var G__33436 = count__32358;
var G__33437 = (i__32359 + (1));
seq__32356 = G__33434;
chunk__32357 = G__33435;
count__32358 = G__33436;
i__32359 = G__33437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32356);
if(temp__5735__auto__){
var seq__32356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32356__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32356__$1);
var G__33440 = cljs.core.chunk_rest(seq__32356__$1);
var G__33441 = c__4556__auto__;
var G__33442 = cljs.core.count(c__4556__auto__);
var G__33443 = (0);
seq__32356 = G__33440;
chunk__32357 = G__33441;
count__32358 = G__33442;
i__32359 = G__33443;
continue;
} else {
var n = cljs.core.first(seq__32356__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33447 = cljs.core.next(seq__32356__$1);
var G__33448 = null;
var G__33449 = (0);
var G__33450 = (0);
seq__32356 = G__33447;
chunk__32357 = G__33448;
count__32358 = G__33449;
i__32359 = G__33450;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32422 = arguments.length;
switch (G__32422) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32454 = arguments.length;
switch (G__32454) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33473 = arguments.length;
var i__4737__auto___33474 = (0);
while(true){
if((i__4737__auto___33474 < len__4736__auto___33473)){
args__4742__auto__.push((arguments[i__4737__auto___33474]));

var G__33480 = (i__4737__auto___33474 + (1));
i__4737__auto___33474 = G__33480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32509_33488 = cljs.core.seq(nodes);
var chunk__32510_33489 = null;
var count__32511_33490 = (0);
var i__32512_33491 = (0);
while(true){
if((i__32512_33491 < count__32511_33490)){
var node_33497 = chunk__32510_33489.cljs$core$IIndexed$_nth$arity$2(null,i__32512_33491);
fragment.appendChild(shadow.dom._to_dom(node_33497));


var G__33498 = seq__32509_33488;
var G__33499 = chunk__32510_33489;
var G__33500 = count__32511_33490;
var G__33501 = (i__32512_33491 + (1));
seq__32509_33488 = G__33498;
chunk__32510_33489 = G__33499;
count__32511_33490 = G__33500;
i__32512_33491 = G__33501;
continue;
} else {
var temp__5735__auto___33507 = cljs.core.seq(seq__32509_33488);
if(temp__5735__auto___33507){
var seq__32509_33508__$1 = temp__5735__auto___33507;
if(cljs.core.chunked_seq_QMARK_(seq__32509_33508__$1)){
var c__4556__auto___33509 = cljs.core.chunk_first(seq__32509_33508__$1);
var G__33513 = cljs.core.chunk_rest(seq__32509_33508__$1);
var G__33515 = c__4556__auto___33509;
var G__33516 = cljs.core.count(c__4556__auto___33509);
var G__33517 = (0);
seq__32509_33488 = G__33513;
chunk__32510_33489 = G__33515;
count__32511_33490 = G__33516;
i__32512_33491 = G__33517;
continue;
} else {
var node_33518 = cljs.core.first(seq__32509_33508__$1);
fragment.appendChild(shadow.dom._to_dom(node_33518));


var G__33521 = cljs.core.next(seq__32509_33508__$1);
var G__33522 = null;
var G__33523 = (0);
var G__33524 = (0);
seq__32509_33488 = G__33521;
chunk__32510_33489 = G__33522;
count__32511_33490 = G__33523;
i__32512_33491 = G__33524;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32495){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32495));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32533_33541 = cljs.core.seq(scripts);
var chunk__32534_33542 = null;
var count__32535_33543 = (0);
var i__32536_33544 = (0);
while(true){
if((i__32536_33544 < count__32535_33543)){
var vec__32554_33550 = chunk__32534_33542.cljs$core$IIndexed$_nth$arity$2(null,i__32536_33544);
var script_tag_33551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554_33550,(0),null);
var script_body_33552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554_33550,(1),null);
eval(script_body_33552);


var G__33553 = seq__32533_33541;
var G__33554 = chunk__32534_33542;
var G__33555 = count__32535_33543;
var G__33556 = (i__32536_33544 + (1));
seq__32533_33541 = G__33553;
chunk__32534_33542 = G__33554;
count__32535_33543 = G__33555;
i__32536_33544 = G__33556;
continue;
} else {
var temp__5735__auto___33557 = cljs.core.seq(seq__32533_33541);
if(temp__5735__auto___33557){
var seq__32533_33558__$1 = temp__5735__auto___33557;
if(cljs.core.chunked_seq_QMARK_(seq__32533_33558__$1)){
var c__4556__auto___33560 = cljs.core.chunk_first(seq__32533_33558__$1);
var G__33561 = cljs.core.chunk_rest(seq__32533_33558__$1);
var G__33562 = c__4556__auto___33560;
var G__33563 = cljs.core.count(c__4556__auto___33560);
var G__33564 = (0);
seq__32533_33541 = G__33561;
chunk__32534_33542 = G__33562;
count__32535_33543 = G__33563;
i__32536_33544 = G__33564;
continue;
} else {
var vec__32563_33565 = cljs.core.first(seq__32533_33558__$1);
var script_tag_33566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563_33565,(0),null);
var script_body_33567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563_33565,(1),null);
eval(script_body_33567);


var G__33568 = cljs.core.next(seq__32533_33558__$1);
var G__33569 = null;
var G__33570 = (0);
var G__33571 = (0);
seq__32533_33541 = G__33568;
chunk__32534_33542 = G__33569;
count__32535_33543 = G__33570;
i__32536_33544 = G__33571;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32568){
var vec__32570 = p__32568;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32570,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32570,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32632 = cljs.core.seq(style_keys);
var chunk__32633 = null;
var count__32634 = (0);
var i__32635 = (0);
while(true){
if((i__32635 < count__32634)){
var it = chunk__32633.cljs$core$IIndexed$_nth$arity$2(null,i__32635);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33584 = seq__32632;
var G__33585 = chunk__32633;
var G__33586 = count__32634;
var G__33587 = (i__32635 + (1));
seq__32632 = G__33584;
chunk__32633 = G__33585;
count__32634 = G__33586;
i__32635 = G__33587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32632);
if(temp__5735__auto__){
var seq__32632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32632__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32632__$1);
var G__33589 = cljs.core.chunk_rest(seq__32632__$1);
var G__33590 = c__4556__auto__;
var G__33591 = cljs.core.count(c__4556__auto__);
var G__33592 = (0);
seq__32632 = G__33589;
chunk__32633 = G__33590;
count__32634 = G__33591;
i__32635 = G__33592;
continue;
} else {
var it = cljs.core.first(seq__32632__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33594 = cljs.core.next(seq__32632__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__32632 = G__33594;
chunk__32633 = G__33595;
count__32634 = G__33596;
i__32635 = G__33597;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32654,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32666 = k32654;
var G__32666__$1 = (((G__32666 instanceof cljs.core.Keyword))?G__32666.fqn:null);
switch (G__32666__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32654,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32670){
var vec__32673 = p__32670;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32673,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32673,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32653){
var self__ = this;
var G__32653__$1 = this;
return (new cljs.core.RecordIter((0),G__32653__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32655,other32656){
var self__ = this;
var this32655__$1 = this;
return (((!((other32656 == null)))) && ((this32655__$1.constructor === other32656.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32655__$1.x,other32656.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32655__$1.y,other32656.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32655__$1.__extmap,other32656.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32653){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32710 = cljs.core.keyword_identical_QMARK_;
var expr__32711 = k__4388__auto__;
if(cljs.core.truth_((pred__32710.cljs$core$IFn$_invoke$arity$2 ? pred__32710.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32711) : pred__32710.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32711)))){
return (new shadow.dom.Coordinate(G__32653,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32710.cljs$core$IFn$_invoke$arity$2 ? pred__32710.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32711) : pred__32710.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32711)))){
return (new shadow.dom.Coordinate(self__.x,G__32653,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32653),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32653){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32653,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32660){
var extmap__4419__auto__ = (function (){var G__32728 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32660,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32660)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32728);
} else {
return G__32728;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32660),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32738,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32751 = k32738;
var G__32751__$1 = (((G__32751 instanceof cljs.core.Keyword))?G__32751.fqn:null);
switch (G__32751__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32738,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32763){
var vec__32764 = p__32763;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32764,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32737){
var self__ = this;
var G__32737__$1 = this;
return (new cljs.core.RecordIter((0),G__32737__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32739,other32740){
var self__ = this;
var this32739__$1 = this;
return (((!((other32740 == null)))) && ((this32739__$1.constructor === other32740.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32739__$1.w,other32740.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32739__$1.h,other32740.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32739__$1.__extmap,other32740.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32737){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32803 = cljs.core.keyword_identical_QMARK_;
var expr__32804 = k__4388__auto__;
if(cljs.core.truth_((pred__32803.cljs$core$IFn$_invoke$arity$2 ? pred__32803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32804) : pred__32803.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32804)))){
return (new shadow.dom.Size(G__32737,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32803.cljs$core$IFn$_invoke$arity$2 ? pred__32803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32804) : pred__32803.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32804)))){
return (new shadow.dom.Size(self__.w,G__32737,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32737),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32737){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32737,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32742){
var extmap__4419__auto__ = (function (){var G__32831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32742,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32831);
} else {
return G__32831;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32742),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32742),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33667 = (i + (1));
var G__33668 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33667;
ret = G__33668;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32880){
var vec__32885 = p__32880;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32885,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33682 = ps;
var G__33683 = (i + (1));
el__$1 = G__33682;
i = G__33683;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32962 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32969_33695 = cljs.core.seq(props);
var chunk__32971_33696 = null;
var count__32972_33697 = (0);
var i__32973_33698 = (0);
while(true){
if((i__32973_33698 < count__32972_33697)){
var vec__32999_33701 = chunk__32971_33696.cljs$core$IIndexed$_nth$arity$2(null,i__32973_33698);
var k_33702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999_33701,(0),null);
var v_33703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999_33701,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33702);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33702),v_33703);


var G__33707 = seq__32969_33695;
var G__33708 = chunk__32971_33696;
var G__33709 = count__32972_33697;
var G__33710 = (i__32973_33698 + (1));
seq__32969_33695 = G__33707;
chunk__32971_33696 = G__33708;
count__32972_33697 = G__33709;
i__32973_33698 = G__33710;
continue;
} else {
var temp__5735__auto___33711 = cljs.core.seq(seq__32969_33695);
if(temp__5735__auto___33711){
var seq__32969_33712__$1 = temp__5735__auto___33711;
if(cljs.core.chunked_seq_QMARK_(seq__32969_33712__$1)){
var c__4556__auto___33713 = cljs.core.chunk_first(seq__32969_33712__$1);
var G__33715 = cljs.core.chunk_rest(seq__32969_33712__$1);
var G__33716 = c__4556__auto___33713;
var G__33717 = cljs.core.count(c__4556__auto___33713);
var G__33718 = (0);
seq__32969_33695 = G__33715;
chunk__32971_33696 = G__33716;
count__32972_33697 = G__33717;
i__32973_33698 = G__33718;
continue;
} else {
var vec__33007_33720 = cljs.core.first(seq__32969_33712__$1);
var k_33721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007_33720,(0),null);
var v_33722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007_33720,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33721);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33721),v_33722);


var G__33724 = cljs.core.next(seq__32969_33712__$1);
var G__33725 = null;
var G__33726 = (0);
var G__33727 = (0);
seq__32969_33695 = G__33724;
chunk__32971_33696 = G__33725;
count__32972_33697 = G__33726;
i__32973_33698 = G__33727;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33025 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33025,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33025,(1),null);
var seq__33029_33729 = cljs.core.seq(node_children);
var chunk__33031_33730 = null;
var count__33032_33731 = (0);
var i__33033_33732 = (0);
while(true){
if((i__33033_33732 < count__33032_33731)){
var child_struct_33733 = chunk__33031_33730.cljs$core$IIndexed$_nth$arity$2(null,i__33033_33732);
if((!((child_struct_33733 == null)))){
if(typeof child_struct_33733 === 'string'){
var text_33734 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33734),child_struct_33733].join(''));
} else {
var children_33739 = shadow.dom.svg_node(child_struct_33733);
if(cljs.core.seq_QMARK_(children_33739)){
var seq__33095_33740 = cljs.core.seq(children_33739);
var chunk__33097_33741 = null;
var count__33098_33742 = (0);
var i__33099_33743 = (0);
while(true){
if((i__33099_33743 < count__33098_33742)){
var child_33744 = chunk__33097_33741.cljs$core$IIndexed$_nth$arity$2(null,i__33099_33743);
if(cljs.core.truth_(child_33744)){
node.appendChild(child_33744);


var G__33745 = seq__33095_33740;
var G__33746 = chunk__33097_33741;
var G__33747 = count__33098_33742;
var G__33748 = (i__33099_33743 + (1));
seq__33095_33740 = G__33745;
chunk__33097_33741 = G__33746;
count__33098_33742 = G__33747;
i__33099_33743 = G__33748;
continue;
} else {
var G__33750 = seq__33095_33740;
var G__33751 = chunk__33097_33741;
var G__33752 = count__33098_33742;
var G__33753 = (i__33099_33743 + (1));
seq__33095_33740 = G__33750;
chunk__33097_33741 = G__33751;
count__33098_33742 = G__33752;
i__33099_33743 = G__33753;
continue;
}
} else {
var temp__5735__auto___33754 = cljs.core.seq(seq__33095_33740);
if(temp__5735__auto___33754){
var seq__33095_33755__$1 = temp__5735__auto___33754;
if(cljs.core.chunked_seq_QMARK_(seq__33095_33755__$1)){
var c__4556__auto___33756 = cljs.core.chunk_first(seq__33095_33755__$1);
var G__33757 = cljs.core.chunk_rest(seq__33095_33755__$1);
var G__33758 = c__4556__auto___33756;
var G__33759 = cljs.core.count(c__4556__auto___33756);
var G__33760 = (0);
seq__33095_33740 = G__33757;
chunk__33097_33741 = G__33758;
count__33098_33742 = G__33759;
i__33099_33743 = G__33760;
continue;
} else {
var child_33761 = cljs.core.first(seq__33095_33755__$1);
if(cljs.core.truth_(child_33761)){
node.appendChild(child_33761);


var G__33762 = cljs.core.next(seq__33095_33755__$1);
var G__33763 = null;
var G__33764 = (0);
var G__33765 = (0);
seq__33095_33740 = G__33762;
chunk__33097_33741 = G__33763;
count__33098_33742 = G__33764;
i__33099_33743 = G__33765;
continue;
} else {
var G__33766 = cljs.core.next(seq__33095_33755__$1);
var G__33767 = null;
var G__33768 = (0);
var G__33769 = (0);
seq__33095_33740 = G__33766;
chunk__33097_33741 = G__33767;
count__33098_33742 = G__33768;
i__33099_33743 = G__33769;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33739);
}
}


var G__33770 = seq__33029_33729;
var G__33771 = chunk__33031_33730;
var G__33772 = count__33032_33731;
var G__33773 = (i__33033_33732 + (1));
seq__33029_33729 = G__33770;
chunk__33031_33730 = G__33771;
count__33032_33731 = G__33772;
i__33033_33732 = G__33773;
continue;
} else {
var G__33775 = seq__33029_33729;
var G__33776 = chunk__33031_33730;
var G__33777 = count__33032_33731;
var G__33778 = (i__33033_33732 + (1));
seq__33029_33729 = G__33775;
chunk__33031_33730 = G__33776;
count__33032_33731 = G__33777;
i__33033_33732 = G__33778;
continue;
}
} else {
var temp__5735__auto___33779 = cljs.core.seq(seq__33029_33729);
if(temp__5735__auto___33779){
var seq__33029_33780__$1 = temp__5735__auto___33779;
if(cljs.core.chunked_seq_QMARK_(seq__33029_33780__$1)){
var c__4556__auto___33781 = cljs.core.chunk_first(seq__33029_33780__$1);
var G__33782 = cljs.core.chunk_rest(seq__33029_33780__$1);
var G__33783 = c__4556__auto___33781;
var G__33784 = cljs.core.count(c__4556__auto___33781);
var G__33785 = (0);
seq__33029_33729 = G__33782;
chunk__33031_33730 = G__33783;
count__33032_33731 = G__33784;
i__33033_33732 = G__33785;
continue;
} else {
var child_struct_33790 = cljs.core.first(seq__33029_33780__$1);
if((!((child_struct_33790 == null)))){
if(typeof child_struct_33790 === 'string'){
var text_33794 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33794),child_struct_33790].join(''));
} else {
var children_33795 = shadow.dom.svg_node(child_struct_33790);
if(cljs.core.seq_QMARK_(children_33795)){
var seq__33128_33796 = cljs.core.seq(children_33795);
var chunk__33130_33797 = null;
var count__33131_33798 = (0);
var i__33132_33799 = (0);
while(true){
if((i__33132_33799 < count__33131_33798)){
var child_33801 = chunk__33130_33797.cljs$core$IIndexed$_nth$arity$2(null,i__33132_33799);
if(cljs.core.truth_(child_33801)){
node.appendChild(child_33801);


var G__33802 = seq__33128_33796;
var G__33803 = chunk__33130_33797;
var G__33804 = count__33131_33798;
var G__33805 = (i__33132_33799 + (1));
seq__33128_33796 = G__33802;
chunk__33130_33797 = G__33803;
count__33131_33798 = G__33804;
i__33132_33799 = G__33805;
continue;
} else {
var G__33806 = seq__33128_33796;
var G__33807 = chunk__33130_33797;
var G__33808 = count__33131_33798;
var G__33809 = (i__33132_33799 + (1));
seq__33128_33796 = G__33806;
chunk__33130_33797 = G__33807;
count__33131_33798 = G__33808;
i__33132_33799 = G__33809;
continue;
}
} else {
var temp__5735__auto___33810__$1 = cljs.core.seq(seq__33128_33796);
if(temp__5735__auto___33810__$1){
var seq__33128_33811__$1 = temp__5735__auto___33810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33128_33811__$1)){
var c__4556__auto___33812 = cljs.core.chunk_first(seq__33128_33811__$1);
var G__33813 = cljs.core.chunk_rest(seq__33128_33811__$1);
var G__33814 = c__4556__auto___33812;
var G__33815 = cljs.core.count(c__4556__auto___33812);
var G__33816 = (0);
seq__33128_33796 = G__33813;
chunk__33130_33797 = G__33814;
count__33131_33798 = G__33815;
i__33132_33799 = G__33816;
continue;
} else {
var child_33821 = cljs.core.first(seq__33128_33811__$1);
if(cljs.core.truth_(child_33821)){
node.appendChild(child_33821);


var G__33823 = cljs.core.next(seq__33128_33811__$1);
var G__33824 = null;
var G__33825 = (0);
var G__33826 = (0);
seq__33128_33796 = G__33823;
chunk__33130_33797 = G__33824;
count__33131_33798 = G__33825;
i__33132_33799 = G__33826;
continue;
} else {
var G__33827 = cljs.core.next(seq__33128_33811__$1);
var G__33828 = null;
var G__33829 = (0);
var G__33830 = (0);
seq__33128_33796 = G__33827;
chunk__33130_33797 = G__33828;
count__33131_33798 = G__33829;
i__33132_33799 = G__33830;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33795);
}
}


var G__33831 = cljs.core.next(seq__33029_33780__$1);
var G__33832 = null;
var G__33833 = (0);
var G__33834 = (0);
seq__33029_33729 = G__33831;
chunk__33031_33730 = G__33832;
count__33032_33731 = G__33833;
i__33033_33732 = G__33834;
continue;
} else {
var G__33835 = cljs.core.next(seq__33029_33780__$1);
var G__33836 = null;
var G__33837 = (0);
var G__33838 = (0);
seq__33029_33729 = G__33835;
chunk__33031_33730 = G__33836;
count__33032_33731 = G__33837;
i__33033_33732 = G__33838;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33844 = arguments.length;
var i__4737__auto___33845 = (0);
while(true){
if((i__4737__auto___33845 < len__4736__auto___33844)){
args__4742__auto__.push((arguments[i__4737__auto___33845]));

var G__33846 = (i__4737__auto___33845 + (1));
i__4737__auto___33845 = G__33846;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33156){
var G__33157 = cljs.core.first(seq33156);
var seq33156__$1 = cljs.core.next(seq33156);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33157,seq33156__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33163 = arguments.length;
switch (G__33163) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__28695__auto___33855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28696__auto__ = (function (){var switch__28544__auto__ = (function (state_33182){
var state_val_33183 = (state_33182[(1)]);
if((state_val_33183 === (1))){
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33182__$1,(2),once_or_cleanup);
} else {
if((state_val_33183 === (2))){
var inst_33179 = (state_33182[(2)]);
var inst_33180 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33182__$1 = (function (){var statearr_33184 = state_33182;
(statearr_33184[(7)] = inst_33179);

return statearr_33184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33182__$1,inst_33180);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28545__auto__ = null;
var shadow$dom$state_machine__28545__auto____0 = (function (){
var statearr_33185 = [null,null,null,null,null,null,null,null];
(statearr_33185[(0)] = shadow$dom$state_machine__28545__auto__);

(statearr_33185[(1)] = (1));

return statearr_33185;
});
var shadow$dom$state_machine__28545__auto____1 = (function (state_33182){
while(true){
var ret_value__28546__auto__ = (function (){try{while(true){
var result__28547__auto__ = switch__28544__auto__(state_33182);
if(cljs.core.keyword_identical_QMARK_(result__28547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28547__auto__;
}
break;
}
}catch (e33186){var ex__28548__auto__ = e33186;
var statearr_33187_33859 = state_33182;
(statearr_33187_33859[(2)] = ex__28548__auto__);


if(cljs.core.seq((state_33182[(4)]))){
var statearr_33188_33860 = state_33182;
(statearr_33188_33860[(1)] = cljs.core.first((state_33182[(4)])));

} else {
throw ex__28548__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33861 = state_33182;
state_33182 = G__33861;
continue;
} else {
return ret_value__28546__auto__;
}
break;
}
});
shadow$dom$state_machine__28545__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28545__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28545__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28545__auto____0;
shadow$dom$state_machine__28545__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28545__auto____1;
return shadow$dom$state_machine__28545__auto__;
})()
})();
var state__28697__auto__ = (function (){var statearr_33190 = f__28696__auto__();
(statearr_33190[(6)] = c__28695__auto___33855);

return statearr_33190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28697__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
