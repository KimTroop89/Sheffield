$(document).ready(function(){

    $(".to-do").ready(function(){
        $(".to-do").hide();
    });

    $(".down-arrow").click(function(){
        $(".to-do").show();
    });

    $(".up-arrow").click(function(){
        $(".to-do").hide();
    });

});