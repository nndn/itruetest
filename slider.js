$("#slideshow > div:gt(0)").hide();

setInterval(function() {

    if($('.posters-large').length == 1){
        return;
    }

    $('#slideshow > div:first').fadeOut(500).next().fadeIn(500).end().appendTo('#slideshow');
},6000);

$('.poster-cont').on('click',function(){
    $('.posters-large-cont').css('opacity','1');
    $('.posters-large-cont').css('pointer-events','all');
});

$(".posters-large > div:gt(0)").hide();

$('.close').on('click',function(){
    $('.posters-large-cont').css('opacity','0');
    $('.posters-large-cont').css('pointer-events','none');
});

$('.poster-large').on('click',function(){

    if($('.posters-large').length == 1){
        return;
    }

    $('.posters-large > div:first').fadeOut(500).next().fadeIn(500).end().appendTo('.posters-large');
});

$('#next').on('click',function(){

    if($('.posters-large').length == 1){
        return;
    }

    $('.posters-large > div:first').fadeOut(500).next().fadeIn(500).end().appendTo('.posters-large');
});

$('#prev').on('click',function(){

    if($('.posters-large').length == 1){
        return;
    }

    for(i=2;i<$('.poster-large').length;i++)
    {
        $('.posters-large > div:first').fadeOut(0).next().fadeIn(0).end().appendTo('.posters-large');
    }

    $('.posters-large > div:first').fadeOut(500).next().fadeIn(500).end().appendTo('.posters-large');
});

$('.posters-large-cont').click(function() {
    $('.posters-large-cont').css('opacity','0');
    $('.posters-large-cont').css('pointer-events','none');
});

$('.poster-large-box').click(function(e) {
    e.stopPropagation();
});


