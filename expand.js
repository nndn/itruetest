
$('body').addClass('no-touch');

state = 0

$('.expand-icon').on('click',function(){

    if(state==0){
        $('.expand-icon').css('transform','rotateX(360deg)');
        $('.nav-bar').css('max-height','200px');
        $('.nav-bar').css('padding-bottom','15px');
        $('.nav-bar').css('opacity','1');
        //$('.collapsible').css('max-height','200px');
        $('.expand-icon').attr('src','assets/close.png');
        state = 1;
        return;
    }
    
    if(state==1){
        $('.expand-icon').css('transform','rotateX(0deg)');
        $('.nav-bar').css('max-height','0px');
        $('.nav-bar').css('padding-bottom','0px');
        $('.nav-bar').css('opacity','0');
        //$('.collapsible').css('max-height','0px');
        $('.expand-icon').attr('src','assets/open-menu.png');
        state = 0;
        return;
    }
    
});

$(window).on('load',function(){
    console.log('loaded');
    $('.loading').addClass('hidden');
    $('body').removeClass('no-touch');
    $('.logo').css('transform','translateY(0px)');
    $('.expand').css('transform','translateX(0px)');
});