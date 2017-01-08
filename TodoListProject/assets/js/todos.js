$("li").click(function(){
  $(this).toggleClass("complited");
})

$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})
