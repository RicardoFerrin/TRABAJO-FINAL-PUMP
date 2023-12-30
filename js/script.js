// MENÚ

    // MENÚ JQUERY
         
    $(".fa-bars").click(function () {
        $("#menu > ul").css("left", "0");   
    });
    
    $(".option").click(function () {
         $("#menu > ul").css("left", "-100%");
    });