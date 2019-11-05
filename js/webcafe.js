var menu_item = $('.menu > li');
var btn_menu = $('.menu [role="button"]');
var sub_link = $('.sub-menu a');

menu_item.addClass('menu-item');
btn_menu.addClass('btn-menu');
sub_link.addClass('icon-dot-circled');

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
