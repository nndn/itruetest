
state = 0

$('.expand-icon').on('click',function(){

    if(state==0){
        $('.nav-bar').css('display','grid');
        $('.collapsible').css('display','grid');
        state = 1;
        return;
    }
    
    if(state==1){
        $('.nav-bar').css('display','none');
        $('.collapsible').css('display','none');
        state = 0;
        return;
    }
    
});