
state = 0

$('.expand-icon').on('click',function(){

    if(state==0){
        $('.nav-bar').css('max-height','400px');
        $('.collapsible').css('max-height','400px');
        state = 1;
        return;
    }
    
    if(state==1){
        $('.nav-bar').css('max-height','0px');
        $('.collapsible').css('max-height','0px');
        state = 0;
        return;
    }
    
});