var menu_item = $('.menu > li');
var btn_menu = $('.menu [role="button"]');
var sub_link = $('.sub-menu a');
var tab_act= $('.board section');
var tab_section =$('.tab a');
var tab_list_link =$('.board li a');

menu_item.addClass('menu-item');
btn_menu.addClass('btn-menu');
sub_link.addClass('icon-dot-circled');
tab_list_link.addClass('icon-dot-circled')

//메인메뉴
btn_menu.click(function(e){
  var current_class = $(this).parent().toggleClass('menu-act');
   e.preventDefault();   
   menu_item.removeClass('menu-act');
   $(this).parent().toggleClass('menu-act');   
   if(current_Class){
   $(this).parent().removeClass('menu-act')
   } else{
   $(this).parent().addClass('menu-act');
   }
});
//탭 메뉴
tab.click(function(e){
  e.preventDefault();
  tab_section.removeClass('tab-act');
  $(this).parent().parent() .addClass('tab-act');
});