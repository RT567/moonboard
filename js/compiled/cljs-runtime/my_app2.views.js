goog.provide('my_app2.views');
my_app2.views.top_banner = (function my_app2$views$top_banner(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"nice-size.png",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"width","width",-384071477),"80px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"MoonGrader"], null)], null)], null);
});
my_app2.views.image_with_hardcoded_location = (function my_app2$views$image_with_hardcoded_location(top,left){
var topstring = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),topstring,new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),"%"].join('')], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"mb2019.jpg",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null)], null)], null)], null);
});
my_app2.views.create_row_coords = (function my_app2$views$create_row_coords(number){
var letters = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H","I","J","K"], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__21518_SHARP_,p2__21519_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21518_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21519_SHARP_)].join('');
}),letters,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((11),number));
});
my_app2.views.invisible_button = (function my_app2$views$invisible_button(place){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold-clicked","hold-clicked",-290823769),place], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"30.7px"], null)], null)], null);
});
my_app2.views.toggleable_ring = (function my_app2$views$toggleable_ring(coord,db){
var selected_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([coord]),cljs.core.deref(db));
var string_representation = (cljs.core.truth_(selected_QMARK_)?"visible":"hidden");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"blue-ring-thick.png",new cljs.core.Keyword(null,"height","height",1025178622),"45px",new cljs.core.Keyword(null,"width","width",-384071477),"45px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),string_representation], null)], null)], null);
});
my_app2.views.specifically_placed_ring = (function my_app2$views$specifically_placed_ring(top,shift_right,coord,db){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"width","width",-384071477),"1000px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"20%",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join('')], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"35px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shift_right),"px"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.toggleable_ring,coord,db], null)], null)], null);
});
my_app2.views.invisible_row_of_buttons = (function my_app2$views$invisible_row_of_buttons(number){
var vec_of_coords_in_row = my_app2.views.create_row_coords(number);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21520_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.invisible_button], null),p1__21520_SHARP_);
}),vec_of_coords_in_row),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"44px"], null)));
});
my_app2.views.row_of_rings = (function my_app2$views$row_of_rings(top,rownumber,db){
var pixel_offsets = cljs.core.take.cljs$core$IFn$_invoke$arity$2((11),cljs.core.iterate((function (p1__21521_SHARP_){
return (p1__21521_SHARP_ + 30.8);
}),(0)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__21522_SHARP_,p2__21523_SHARP_){
return my_app2.views.specifically_placed_ring(top,p1__21522_SHARP_,p2__21523_SHARP_,db);
}),pixel_offsets,my_app2.views.create_row_coords(rownumber));
});
my_app2.views.create_h_box_of_invisible_buttons = (function my_app2$views$create_h_box_of_invisible_buttons(top,rownumber){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),"20%"], null),new cljs.core.Keyword(null,"children","children",-940561982),my_app2.views.invisible_row_of_buttons(rownumber)], null);
});
my_app2.views.create_h_box_of_toggleable_rings = (function my_app2$views$create_h_box_of_toggleable_rings(top,rownumber,db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),my_app2.views.row_of_rings(top,rownumber,db)], null);
});
my_app2.views.entire_invisible_grid_of_buttons = (function my_app2$views$entire_invisible_grid_of_buttons(top){
var row_pixel_heights = cljs.core.take.cljs$core$IFn$_invoke$arity$2((18),cljs.core.iterate((function (p1__21524_SHARP_){
return (p1__21524_SHARP_ + (30));
}),(top + (40))));
var row_numbers = cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(my_app2.views.create_h_box_of_invisible_buttons,row_pixel_heights,row_numbers))], null);
});
my_app2.views.entire_grid_of_toggleable_rings = (function my_app2$views$entire_grid_of_toggleable_rings(top){
var row_pixel_heights = cljs.core.take.cljs$core$IFn$_invoke$arity$2((18),cljs.core.iterate((function (p1__21525_SHARP_){
return (p1__21525_SHARP_ + (30));
}),(top + (30))));
var row_numbers = cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19)));
var db = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("my-app2.subs","db","my-app2.subs/db",-400894182)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__21526_SHARP_,p2__21527_SHARP_){
return my_app2.views.create_h_box_of_toggleable_rings(p1__21526_SHARP_,p2__21527_SHARP_,db);
}),row_pixel_heights,row_numbers))], null);
});
my_app2.views.db_value = (function my_app2$views$db_value(){
var db = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("my-app2.subs","db","my-app2.subs/db",-400894182)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,db], null);
});
my_app2.views.main_panel = (function my_app2$views$main_panel(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"my_app2/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),108], null)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.top_banner], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Use machine learning to grade MoonBoard climbs!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"grade climb",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrnshot","scrnshot",1096067511)], null));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"clear holds",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-holds","clear-holds",1115176146)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.db_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.image_with_hardcoded_location,(300),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.entire_grid_of_toggleable_rings,(300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app2.views.entire_invisible_grid_of_buttons,(300)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=my_app2.views.js.map
