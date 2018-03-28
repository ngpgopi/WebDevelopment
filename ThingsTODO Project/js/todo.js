
$("input").keypress(function (event) {
    if (event.which === 13){
        var val = $(this).val();
        if(val !== ""){
            $("ul").append("<li><span><i class='fa fa-eraser'></i></span>" + val +  "</li>");
        }
        $(this).val("");
    }
});


$('ul').on('click',"li",function() {
	$(this).toggleClass("completed");
});

$('ul').on('click',"span",function(event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$('.fa-plus-square').click(function () {
    $("input").fadeToggle();
})