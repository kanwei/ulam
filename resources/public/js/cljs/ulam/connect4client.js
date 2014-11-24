// Compiled by ClojureScript 0.0-2371
goog.provide('ulam.connect4client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('ulam.connect4');
goog.require('ulam.connect4');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('clojure.set');
cljs.core.enable_console_print_BANG_.call(null);
ulam.connect4client.moves = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ulam.connect4client.player_move = (function player_move(move){cljs.core.swap_BANG_.call(null,ulam.connect4client.moves,cljs.core.conj,move);
return cljs.core.reset_BANG_.call(null,ulam.connect4client.moves,ulam.connect4.next_move.call(null,cljs.core.deref.call(null,ulam.connect4client.moves),(500)));
});
ulam.connect4client.position_state = (function position_state(pos){var player = cljs.core.get.call(null,cljs.core.zipmap.call(null,cljs.core.deref.call(null,ulam.connect4client.moves),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"p2","p2",905500641)], null))),pos);var G__178999 = player;if(cljs.core._EQ_.call(null,null,G__178999))
{return "";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p2","p2",905500641),G__178999))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(25),new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),(15),new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)], null)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954),G__178999))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(25),new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),(15),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null)], null);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(player))));

}
}
}
});
ulam.connect4client.print_board = (function print_board(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var moves = ulam.connect4.valid_moves.call(null,ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves)));var iter__4379__auto__ = ((function (moves){
return (function iter__179025(s__179026){return (new cljs.core.LazySeq(null,((function (moves){
return (function (){var s__179026__$1 = s__179026;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__179026__$1);if(temp__4388__auto__)
{var s__179026__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__179026__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__179026__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__179028 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__179027 = (0);while(true){
if((i__179027 < size__4378__auto__))
{var column = cljs.core._nth.call(null,c__4377__auto__,i__179027);cljs.core.chunk_append.call(null,b__179028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var temp__4386__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__179027,column,c__4377__auto__,size__4378__auto__,b__179028,s__179026__$2,temp__4388__auto__,moves){
return (function (p1__179000_SHARP_){return cljs.core._EQ_.call(null,column,cljs.core.mod.call(null,p1__179000_SHARP_,(7)));
});})(i__179027,column,c__4377__auto__,size__4378__auto__,b__179028,s__179026__$2,temp__4388__auto__,moves))
,moves));if(cljs.core.truth_(temp__4386__auto__))
{var n = temp__4386__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__179027,n,temp__4386__auto__,column,c__4377__auto__,size__4378__auto__,b__179028,s__179026__$2,temp__4388__auto__,moves){
return (function (){return ulam.connect4client.player_move.call(null,n);
});})(i__179027,n,temp__4386__auto__,column,c__4377__auto__,size__4378__auto__,b__179028,s__179026__$2,temp__4388__auto__,moves))
], null),"Place"], null);
} else
{return null;
}
})()], null));
{
var G__179049 = (i__179027 + (1));
i__179027 = G__179049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179028),iter__179025.call(null,cljs.core.chunk_rest.call(null,s__179026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179028),null);
}
} else
{var column = cljs.core.first.call(null,s__179026__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var temp__4386__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (column,s__179026__$2,temp__4388__auto__,moves){
return (function (p1__179000_SHARP_){return cljs.core._EQ_.call(null,column,cljs.core.mod.call(null,p1__179000_SHARP_,(7)));
});})(column,s__179026__$2,temp__4388__auto__,moves))
,moves));if(cljs.core.truth_(temp__4386__auto__))
{var n = temp__4386__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (n,temp__4386__auto__,column,s__179026__$2,temp__4388__auto__,moves){
return (function (){return ulam.connect4client.player_move.call(null,n);
});})(n,temp__4386__auto__,column,s__179026__$2,temp__4388__auto__,moves))
], null),"Place"], null);
} else
{return null;
}
})()], null),iter__179025.call(null,cljs.core.rest.call(null,s__179026__$2)));
}
} else
{return null;
}
break;
}
});})(moves))
,null,null));
});})(moves))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null),(function (){var iter__4379__auto__ = (function iter__179029(s__179030){return (new cljs.core.LazySeq(null,(function (){var s__179030__$1 = s__179030;while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__179030__$1);if(temp__4388__auto__)
{var s__179030__$2 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__179030__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__179030__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__179032 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__179031 = (0);while(true){
if((i__179031 < size__4378__auto__))
{var row = cljs.core._nth.call(null,c__4377__auto__,i__179031);cljs.core.chunk_append.call(null,b__179032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4379__auto__ = ((function (i__179031,row,c__4377__auto__,size__4378__auto__,b__179032,s__179030__$2,temp__4388__auto__){
return (function iter__179041(s__179042){return (new cljs.core.LazySeq(null,((function (i__179031,row,c__4377__auto__,size__4378__auto__,b__179032,s__179030__$2,temp__4388__auto__){
return (function (){var s__179042__$1 = s__179042;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__179042__$1);if(temp__4388__auto____$1)
{var s__179042__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__179042__$2))
{var c__4377__auto____$1 = cljs.core.chunk_first.call(null,s__179042__$2);var size__4378__auto____$1 = cljs.core.count.call(null,c__4377__auto____$1);var b__179044 = cljs.core.chunk_buffer.call(null,size__4378__auto____$1);if((function (){var i__179043 = (0);while(true){
if((i__179043 < size__4378__auto____$1))
{var column = cljs.core._nth.call(null,c__4377__auto____$1,i__179043);cljs.core.chunk_append.call(null,b__179044,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null));
{
var G__179050 = (i__179043 + (1));
i__179043 = G__179050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179044),iter__179041.call(null,cljs.core.chunk_rest.call(null,s__179042__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179044),null);
}
} else
{var column = cljs.core.first.call(null,s__179042__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null),iter__179041.call(null,cljs.core.rest.call(null,s__179042__$2)));
}
} else
{return null;
}
break;
}
});})(i__179031,row,c__4377__auto__,size__4378__auto__,b__179032,s__179030__$2,temp__4388__auto__))
,null,null));
});})(i__179031,row,c__4377__auto__,size__4378__auto__,b__179032,s__179030__$2,temp__4388__auto__))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null));
{
var G__179051 = (i__179031 + (1));
i__179031 = G__179051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179032),iter__179029.call(null,cljs.core.chunk_rest.call(null,s__179030__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179032),null);
}
} else
{var row = cljs.core.first.call(null,s__179030__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4379__auto__ = ((function (row,s__179030__$2,temp__4388__auto__){
return (function iter__179045(s__179046){return (new cljs.core.LazySeq(null,((function (row,s__179030__$2,temp__4388__auto__){
return (function (){var s__179046__$1 = s__179046;while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__179046__$1);if(temp__4388__auto____$1)
{var s__179046__$2 = temp__4388__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__179046__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__179046__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__179048 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__179047 = (0);while(true){
if((i__179047 < size__4378__auto__))
{var column = cljs.core._nth.call(null,c__4377__auto__,i__179047);cljs.core.chunk_append.call(null,b__179048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null));
{
var G__179052 = (i__179047 + (1));
i__179047 = G__179052;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179048),iter__179045.call(null,cljs.core.chunk_rest.call(null,s__179046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__179048),null);
}
} else
{var column = cljs.core.first.call(null,s__179046__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.grid","td.grid",-401357880),ulam.connect4client.position_state.call(null,(column + (row * (7))))], null),iter__179045.call(null,cljs.core.rest.call(null,s__179046__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__179030__$2,temp__4388__auto__))
,null,null));
});})(row,s__179030__$2,temp__4388__auto__))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,(7)));
})()], null),iter__179029.call(null,cljs.core.rest.call(null,s__179030__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.range.call(null,(5),(-1),(-1)));
})()], null);
});
ulam.connect4client.game_values = (function game_values(){var temp__4386__auto__ = ulam.connect4.check_terminal.call(null,ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves)));if(cljs.core.truth_(temp__4386__auto__))
{var result = temp__4386__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),("The game is: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ulam.connect4.state_from_moves.call(null,ulam.connect4.initial_state.call(null),cljs.core.deref.call(null,ulam.connect4client.moves))))], null);
} else
{return null;
}
});
ulam.connect4client.app = (function app(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ulam.connect4client.print_board.call(null),ulam.connect4client.game_values.call(null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ulam.connect4client.app], null),document.getElementById("app"));

//# sourceMappingURL=connect4client.js.map