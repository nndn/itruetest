
$('body').addClass('no-touch');

state = 0

$('.expand-icon').on('click',function(){

    if(state==0){
        $('.nav-bar').css('max-height','200px');
        //$('.collapsible').css('max-height','200px');
        $('.expand-icon').attr('src','assets/close.png');
        state = 1;
        return;
    }
    
    if(state==1){
        $('.nav-bar').css('max-height','0px');
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
});