$(document).ready(function () {
    $(".box").css({ "backgroundColor" : "red","height" : "500px" , "width" :"500px","overflow":"hidden"})
    .on({
        mouseenter: function(){
        $(this).css("background-color", "blue");
        },
        mouseleave: function(){
        $(this).css("background-color", "red");
        }
        });
  });
  