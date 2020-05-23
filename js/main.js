//확장형 메뉴 동작-s
$(document).ready(function(){
  $("#menu").click(function(){
    $("#hm").toggle();
  });
});

$(document).ready(function(){
  $(".sd").click(function(){
    $("#hm").toggle();
  });
});

$(document).ready(function(){
  $("#menu").click(function(){
    $(".gtt").toggle();
  });
});

$(document).ready(function(){
  $(".sd").click(function(){
    $(".gtt").toggle();
  });
});

$(document).ready(function(){
    $(".cancel").click(function(){
        $("#hm").toggle();
    });
});
//확장형  메뉴 동작-e