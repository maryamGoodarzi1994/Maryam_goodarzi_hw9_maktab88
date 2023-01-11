$(document).ready(function () {
  $(".green").css({"backgroundColor": "green" , "height" : "500px" , "width" :"500px","overflow":"hidden"});
  $(".green").on("click",function(){
    $(this).append(" click here and add text!")
  })
});
